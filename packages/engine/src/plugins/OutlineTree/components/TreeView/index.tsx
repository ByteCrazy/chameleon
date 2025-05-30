import { LayoutDragAndDropExtraDataType, Sensor } from '@chamn/layout';
import { CNode, CRootNode, DropPosType } from '@chamn/model';
import React from 'react';
import { WithTranslation } from 'react-i18next';
import { CPluginCtx } from '../../../../core/pluginManager';
import { LOGGER } from '../../../../utils/logger';
import { calculateDropPosInfo, getTargetMNodeKeyVal, transformPageSchemaToTreeData, traverseTree } from '../../util';
import { ContextState, CTreeContext, DragState } from './context';
import { TreeNodeData } from './dataStruct';
import styles from './style.module.scss';
import { DRAG_ITEM_KEY, TreeNode } from './treeNode';
import { DesignerPluginInstance } from '@/plugins/Designer/type';
import { message } from 'antd';

interface TreeViewProps extends WithTranslation {
  pluginCtx: CPluginCtx;
  multiSelect?: boolean;
}

export class TreeView extends React.Component<
  TreeViewProps,
  ContextState & {
    dropPosInfo: { x: number; y: number } | null;
  }
> {
  domRef: React.RefObject<HTMLDivElement>;
  disposeCbList: (() => void)[] = [];
  sensor?: Sensor;
  constructor(props: TreeViewProps) {
    super(props);
    this.domRef = React.createRef<HTMLDivElement>();

    this.state = {
      treeData: [],
      currentSelectNodeKeys: [],
      expandKeys: [],
      multiSelect: props.multiSelect || false,
      dropPosInfo: {
        x: 0,
        y: 0,
      },
      pageModel: props.pluginCtx.pageModel,
      dragState: DragState.NORMAL,
    };
  }

  getDesignerHandler = async () => {
    const designerPluginInstance = await this.props.pluginCtx.pluginManager.get<DesignerPluginInstance>('Designer');
    const designerHandler = designerPluginInstance?.export;
    return designerHandler!;
  };

  updateTreeDataFromNode = () => {
    const { pluginCtx } = this.props;
    const { pageModel } = pluginCtx;
    const plainTreeData = pageModel.export();
    const tempTreeData = transformPageSchemaToTreeData(plainTreeData, pageModel);
    this.setState({
      treeData: tempTreeData,
    });
  };

  getParentKeyPaths = (targetKey: string) => {
    const { treeData } = this.state;
    let target: TreeNodeData = null as any;
    traverseTree(treeData, (node) => {
      if (node.key === targetKey) {
        target = node;
        return true;
      }
      return false;
    });
    if (target) {
      let tempNode = target?.parent as TreeNodeData | undefined | null;
      const res = [];
      while (tempNode) {
        if (tempNode.key) {
          res.push(tempNode.key);
        }
        tempNode = tempNode.parent;
      }
      return res;
    } else {
      return [];
    }
  };

  scrollNodeToView = (key: string) => {
    const dom = document.querySelector(`[${DRAG_ITEM_KEY}="${key}"]`);
    dom?.scrollIntoView?.({
      behavior: 'smooth',
      block: 'center',
    });
  };

  async componentDidMount() {
    this.updateTreeDataFromNode();
    const { pluginCtx } = this.props;
    const { pageModel } = pluginCtx;

    pageModel.emitter.on('*', () => {
      this.updateTreeDataFromNode();
    });

    pluginCtx.globalEmitter.on('onSelectNodeChange', ({ node }) => {
      this.toSelectTreeNode(node);
    });

    const workbench = pluginCtx.getWorkbench();

    workbench.emitter.on('leftPanelVisible', ({ visible, panelName }) => {
      if (visible && panelName === 'OutlineTree') {
        console.log('visible, panelName', visible, panelName);
        const currentSelectNode = pluginCtx.engine.getActiveNode();
        if (currentSelectNode) {
          this.toSelectTreeNode(currentSelectNode);
        }
      }
    });

    const currentSelectNode = pluginCtx.engine.getActiveNode();
    if (currentSelectNode) {
      this.toSelectTreeNode(currentSelectNode);
    }

    await this.props.pluginCtx.pluginManager.onPluginReadyOk('Designer');
    this.registerDragEvent();
    // 页面重载时重新注册拖拽事件
    this.props.pluginCtx.engine.pageModel.emitter.on('onReloadPage', () => {
      this.registerDragEvent();
    });
  }

  toSelectTreeNode = (node: CNode | CRootNode | null) => {
    if (!node) {
      this.setState({
        currentSelectNodeKeys: [],
      });
      return;
    }
    const parentPaths = this.getParentKeyPaths(node.id);
    LOGGER.debug('onSelectNodeChange parent path', parentPaths, node);
    const newExpandKeys = Array.from(new Set([...this.state.expandKeys, ...parentPaths]));

    LOGGER.debug('onSelectNodeChange newExpandKeys', newExpandKeys, node);

    this.setState({
      currentSelectNodeKeys: [node.id],
      expandKeys: newExpandKeys,
    });

    setTimeout(() => {
      this.scrollNodeToView(node.id);
    }, 16);
  };

  containNode = (parentNode: TreeNodeData, targetNode: TreeNodeData) => {
    let res = null;
    traverseTree(parentNode, (node) => {
      if (node.key === targetNode.key) {
        res = node;
        return true;
      }
      return false;
    });
    return res;
  };

  getTreeNodeByKey = (key: string): TreeNodeData | null => {
    const { treeData } = this.state;
    let target: TreeNodeData | null = null;
    traverseTree(treeData, (node) => {
      if (node.key === key) {
        target = node;
        return true;
      }
      return false;
    });
    return target;
  };

  registerDragEvent = async () => {
    if (!this.domRef.current) {
      return;
    }
    const sensor = new Sensor<LayoutDragAndDropExtraDataType>({
      container: this.domRef.current,
      name: 'OutlineTree',
      eventPriority: 999,
      mainDocument: document,
    });
    const { pluginCtx } = this.props;

    const pageModel = pluginCtx.pageModel;
    const designerExport = await this.getDesignerHandler();
    const dnd = designerExport!.getDnd()!;

    sensor.setCanDrag(async (eventObj) => {
      const targetDom = eventObj.event.target as HTMLDivElement;
      if (!targetDom) {
        return;
      }
      const targetNodeId = getTargetMNodeKeyVal(targetDom, DRAG_ITEM_KEY);

      if (!targetNodeId) {
        return;
      }

      const targetNode = pageModel.getNode(targetNodeId);
      const targetTreeNode = this.getTreeNodeByKey(targetNodeId);
      // 判断当前节点是否可以在节点树上拖动，比如 jsslot 容器节点不能被拖动，大纲树特有
      if (targetTreeNode?.canDrag !== undefined && targetTreeNode?.canDrag === false) {
        return;
      }

      // 判断节点本身是否可以拖动
      const designerInstance = designerExport!.getInstance();
      const nodeCanDragRes = await designerInstance?.customAdvanceHook.canDrag({
        dragNode: targetNode,
        eventObj: {
          extraData: {},
          ...eventObj,
          from: eventObj.event,
          fromSensor: sensor,
          fromPointer: eventObj.pointer,
        },
      });
      // 节点不能拖动
      if (nodeCanDragRes === false) {
        return false;
      }

      if (!targetNode) {
        console.log('targetNode not found');
        return;
      }

      const canDragResInfo = {
        ...eventObj,
        extraData: {
          dragNode: targetNode,
          dragNodeUID: targetNode.id,
        },
      };

      if (typeof nodeCanDragRes === 'object') {
        canDragResInfo.extraData.dragNode = nodeCanDragRes.dragNode!;
        canDragResInfo.extraData.dragNodeUID = nodeCanDragRes.dragNode?.id || '';
      }

      return canDragResInfo;
    });

    sensor.setCanDrop(async (eventObj) => {
      const targetDom = eventObj.event.target as HTMLDivElement;

      if (!targetDom) {
        LOGGER.debug('drop dom not found');
        return eventObj;
      }
      const targetNodeId = getTargetMNodeKeyVal(targetDom, DRAG_ITEM_KEY);

      if (!targetNodeId) {
        LOGGER.debug('targetNodeId dom not found', eventObj, targetDom, DRAG_ITEM_KEY);
        return eventObj;
      }
      const targetTreeNode = this.getTreeNodeByKey(targetNodeId);
      if (targetTreeNode?.canDropPos !== undefined && targetTreeNode.canDropPos === false) {
        LOGGER.debug('node can not be drop by tree node config');
        return eventObj;
      }

      const targetNode = pageModel.getNode(targetNodeId);

      if (!targetNode) {
        LOGGER.debug('targetNode not found');
        return eventObj;
      }
      const startNode = eventObj.extraData?.dragNode as CNode;
      if (!startNode) {
        LOGGER.debug('startNode not found');
        return eventObj;
      }

      if (startNode?.id === targetNode.id) {
        LOGGER.debug('startNode and dropNode is the same');
        return eventObj;
      }
      const hasContain = startNode.contains(targetNode.id);

      if (hasContain) {
        LOGGER.debug('startNode contain dropNode');
        return eventObj;
      }

      const dropInfo = calculateDropPosInfo({
        point: eventObj.pointer,
        dom: targetDom,
      });

      if (Array.isArray(targetTreeNode?.canDropPos) && !targetTreeNode?.canDropPos.includes(dropInfo.pos)) {
        return false;
      }

      LOGGER.info('can dropNode', targetNode);

      const res = {
        ...eventObj,
        extraData: {
          ...eventObj.extraData,
          dropPosInfo: dropInfo,
          dropNode: targetNode,
          dropNodeUID: targetNode.id,
        },
      };

      // 判断节点本身是否可以拖动
      const designerInstance = designerExport!.getInstance();
      const nodeCanDropRes = await designerInstance?.customAdvanceHook.canDrop({
        dragNode: res.extraData.dragNode,
        dropNode: targetNode,
        eventObj: {
          ...res,
          from: res.event,
          fromSensor: sensor,
          fromPointer: res.pointer,
        },
      });

      if (nodeCanDropRes === false) {
        return false;
      }

      if (typeof nodeCanDropRes === 'object') {
        res.extraData = {
          ...res.extraData,
          ...nodeCanDropRes,
        };
      }
      return res;
    });

    dnd.registerSensor(sensor);

    sensor.emitter.on('dragging', (e) => {
      const dropNode = e.extraData.dropNode as CNode;
      this.setState({
        dragState: DragState.DRAGGING,
      });

      if (!dropNode) {
        this.setState({
          dropPosInfo: null,
        });
        return;
      }
      const dropDom = document.querySelectorAll(`[${DRAG_ITEM_KEY}="${dropNode.id}"]`)?.[0];
      if (!dropDom) {
        return;
      }
      const dropPosInfo = e.extraData?.dropPosInfo || ({} as DropPosType);
      const rect = dropDom.getBoundingClientRect();
      const newDropInfo = { x: 0, y: 0 };

      newDropInfo.x = rect.x;
      if (dropPosInfo.pos === 'before') {
        newDropInfo.y = rect.y;
      } else if (dropPosInfo.pos === 'after') {
        newDropInfo.y = rect.y + rect.height;
      } else {
        newDropInfo.y = rect.y + rect.height;
        newDropInfo.x = rect.x + 20;
      }
      this.setState({
        dropPosInfo: newDropInfo,
      });
    });

    sensor.emitter.on('dragEnd', () => {
      this.setState({
        dragState: DragState.NORMAL,
      });
    });
    this.sensor = sensor;
  };

  render() {
    const { treeData, dragState, dropPosInfo } = this.state;
    const { pluginCtx } = this.props;

    return (
      <CTreeContext.Provider
        value={{
          sensor: this.sensor,
          state: this.state,
          getDesignerHandler: this.getDesignerHandler,
          onSelectNode: async ({ keys: sk }) => {
            const designer = await pluginCtx.pluginManager.get<DesignerPluginInstance>('Designer');
            if (!designer) {
              console.warn('Designer is empty');
              return false;
            }
            const nodeId = sk?.[0] || '';
            const nn = pluginCtx.pageModel.getNode(nodeId);
            if (!nn) {
              return false;
            }

            const designerExport = designer.export;
            const flag = await designerExport.selectNode(nodeId);
            return flag;
          },
          updateState: (newVal) => {
            this.setState(newVal as any);
          },
          onDeleteNode: async (id) => {
            const designer = await pluginCtx.pluginManager.get<DesignerPluginInstance>('Designer');
            if (!designer) {
              console.warn('Designer is empty');
              return false;
            }
            const designerExport = designer.export;
            const nodeId = id;
            const nn = pluginCtx.pageModel.getNode(nodeId);
            if (!nn) {
              message.error('该节点不能删除');
              return false;
            }
            const flag = await designerExport.deleteNode(id);
            if (!flag) {
              message.error('该节点不能删除');
            }
            return flag;
          },
          onCopyNode: async (id) => {
            const designer = await pluginCtx.pluginManager.get<DesignerPluginInstance>('Designer');
            if (!designer) {
              console.warn('Designer is empty');
              return false;
            }
            const designerExport = designer.export;
            return await designerExport.copyNode(id);
          },
        }}
      >
        <div className={styles.contentBox} ref={this.domRef}>
          {treeData.map((item, index) => {
            return <TreeNode item={item} key={item.key + `${index}`} pluginCtx={this.props.pluginCtx}></TreeNode>;
          })}
          {dragState === DragState.DRAGGING && dropPosInfo && (
            <div
              className={styles.dropAnchorLine}
              style={{
                left: `${dropPosInfo.x}px`,
                top: `${dropPosInfo.y}px`,
              }}
            ></div>
          )}
        </div>
      </CTreeContext.Provider>
    );
  }
}
