import React from 'react';
import { Layout, LayoutPropsType } from '@chamn/layout';
import { CNode, CPage, CRootNode, InsertNodePosType } from '@chamn/model';
import { CPluginCtx } from '../../core/pluginManager';
import localize from './localize';
import { PLUGIN_NAME } from './config';
import { DefaultSelectToolBar } from './components/DefaultSelectToolBar';
import { getClosestNodeList } from './util';
import { GhostView } from './components/GhostView';

import styles from './style.module.scss';
import '@chamn/layout/dist/style.css';
import { AssetPackage } from '@chamn/model';
import { createPortal } from 'react-dom';

export type DesignerPropsType = {
  pluginCtx: CPluginCtx;
};

type DesignerStateType = {
  pageModel: CPage;
  hoverToolBarView: React.ReactNode;
  selectToolBarView: React.ReactNode;
  ghostView: React.ReactNode;
  portalView: React.ReactNode;
  assets: AssetPackage[];
};

export class Designer extends React.Component<DesignerPropsType, DesignerStateType> {
  layoutRef: React.RefObject<Layout>;
  constructor(props: DesignerPropsType) {
    super(props);

    this.state = {
      pageModel: props.pluginCtx.pageModel,
      hoverToolBarView: null,
      selectToolBarView: null,
      ghostView: null,
      assets: props.pluginCtx.assets || ([] as AssetPackage[]),
      portalView: null,
    };
    this.layoutRef = React.createRef<Layout>();
  }

  getPortalViewCtx = () => {
    return {
      setView: (view: React.ReactNode) => {
        this.setState({
          portalView: view,
        });
      },
      clearView: () => {
        this.setState({
          portalView: null,
        });
      },
    };
  };

  componentDidMount(): void {
    const { i18n } = this.props.pluginCtx;
    Object.keys(localize).forEach((lng) => {
      i18n.addResourceBundle(lng, `plugin:${PLUGIN_NAME}`, localize[lng], true, true);
    });
    this.init();
  }

  updateAssets(assets: AssetPackage[]) {
    this.setState({
      assets: assets,
    });
  }

  reloadRender({ assets }: { assets?: AssetPackage[] }) {
    this.layoutRef.current?.reload({ assets });
  }

  async init() {
    const { layoutRef } = this;
    const { pluginCtx } = this.props;
    if (!layoutRef.current) {
      console.warn('layout not ready ok');
      return;
    }

    await layoutRef.current.ready();
    const layoutInstance = layoutRef.current;

    pluginCtx.emitter.emit('ready', {
      UIInstance: this,
    });

    layoutInstance.dnd.emitter.on('click', ({ event }: { event: MouseEvent }) => {
      const workbench = pluginCtx.getWorkbench();
      workbench.onGlobalClick(event);
    });

    this.props.pluginCtx.pageModel.emitter.on('onPageChange', ({ node }) => {
      layoutRef.current?.designRenderRef?.current?.rerender(node);
    });

    this.props.pluginCtx.pageModel.emitter.on('onReloadPage', ({ node }) => {
      layoutRef.current?.designRenderRef?.current?.rerender(node);
    });

    pluginCtx.pluginReadyOk();
  }

  onNodeDragging: LayoutPropsType['onNodeDragging'] = async (eventObj) => {
    const extraData = eventObj.extraData;
    const dragNode = extraData?.dragNode;
    if (dragNode) {
      const res = dragNode.material?.value.advanceCustom?.onDragging?.(dragNode, {
        context: this.props.pluginCtx,
        viewPortal: this.getPortalViewCtx(),
        event: eventObj,
      });
      return res;
    }
  };

  onNodeDrop: LayoutPropsType['onNodeDrop'] = async (eventObj) => {
    const { layoutRef } = this;
    const pageModel = this.props.pluginCtx.pageModel;
    const extraData = eventObj.extraData;
    const dropPosInfo = extraData?.dropPosInfo;
    const posFlag = {
      before: 'BEFORE',
      after: 'AFTER',
      current: 'CHILD_START',
    }[dropPosInfo?.pos || 'after'] as InsertNodePosType;
    const dragNode = extraData?.dragNode;
    if (dragNode) {
      const res = await dragNode.material?.value.advanceCustom?.onDrop?.(dragNode, {
        context: this.props.pluginCtx,
        viewPortal: this.getPortalViewCtx(),
        event: eventObj,
      });
      if (res === false) {
        return false;
      }
    }
    if (!extraData?.dropNode) {
      console.warn('cancel drop, because drop node is null');
      return false;
    }
    if (extraData.dropType === 'NEW_ADD') {
      if (dragNode) {
        const res = await dragNode.material?.value.advanceCustom?.onNewAdd?.(dragNode, {
          context: this.props.pluginCtx,
          viewPortal: this.getPortalViewCtx(),
          event: eventObj,
        });
        if (res === false) {
          return false;
        }
      }
      if (extraData.dropNode?.nodeType !== 'NODE') {
        pageModel?.addNode(extraData.dragNode as CNode, extraData.dropNode!, 'CHILD_START');
      } else {
        pageModel?.addNode(extraData.dragNode as CNode, extraData.dropNode!, posFlag);
      }
    } else {
      if (extraData.dropNode?.id === extraData.dragNode?.id) {
        console.warn(' id is the same');
        return;
      }
      const res = pageModel.moveNodeById(extraData.dragNode?.id || '', extraData?.dropNode?.id || '', posFlag);
      if (!res) {
        console.warn('drop failed');
        return false;
      }
    }
    setTimeout(async () => {
      if (dragNode) {
        const flag = await this.onSelectNode(dragNode, null);
        if (flag === false) {
          layoutRef.current?.selectNode('');
          return;
        }
      }
      layoutRef.current?.selectNode(extraData.dragNode?.id || '');
    }, 150);
    this.props.pluginCtx.emitter.emit('onDrop', eventObj);
  };

  onSelectNode: Required<LayoutPropsType>['onSelectNode'] = async (node: CNode | CRootNode | null, event) => {
    const { pluginCtx } = this.props;
    const { layoutRef } = this;

    if (!node) {
      pluginCtx.engine.updateCurrentSelectNode(null);
      layoutRef.current?.selectNode('');
      this.setState({
        selectToolBarView: null,
      });
      return;
    }
    const flag = await node.material?.value.advanceCustom?.onSelect?.(node, {
      context: this.props.pluginCtx,
      viewPortal: this.getPortalViewCtx(),
      event: event,
    });
    if (flag === false) {
      return flag;
    }
    pluginCtx.engine.updateCurrentSelectNode(node);
    const pageModel = this.props.pluginCtx.pageModel;
    const list = getClosestNodeList(node, 5);
    this.setState({
      selectToolBarView: (
        <DefaultSelectToolBar
          nodeList={list}
          toSelectNode={(id) => {
            layoutRef.current?.selectNode(id);
            const selectedNode = pageModel.getNode(id);
            if (selectedNode) {
              this.onSelectNode?.(selectedNode, null);
            }
          }}
          toCopy={(id) => {
            const newNode = this.props.pluginCtx.pageModel.copyNodeById(id);
            if (newNode) {
              layoutRef.current?.selectNode(newNode.id);
              // 延迟选中，因为可能 dom 还没有渲染完成
              setTimeout(() => {
                layoutRef.current?.selectNode(newNode.id);
              }, 200);
              this.onSelectNode?.(newNode, null);
            } else {
              layoutRef.current?.selectNode('');
              this.onSelectNode?.(null, null);
            }
          }}
          toDelete={(id) => {
            this.props.pluginCtx.pageModel.deleteNodeById(id);
            layoutRef.current?.selectNode('');
            this.onSelectNode?.(null, null);
          }}
          toHidden={(id) => {
            const targetNodeModel = this.props.pluginCtx.pageModel.getNode(id) as CNode;
            if (!targetNodeModel) {
              return;
            }
            const devState = targetNodeModel.value.configure.devState ?? {};
            devState.condition = false;
            targetNodeModel.value.configure.devState = devState;
            targetNodeModel.updateValue();
          }}
        />
      ),
    });
  };

  onDragStart: LayoutPropsType['onNodeDragStart'] = async (e) => {
    const extraData = e.extraData;
    const dragNode = extraData?.dragNode;
    if (!dragNode) {
      return;
    }

    const dragFlag = await dragNode.material?.value.advanceCustom?.onDragStart?.(dragNode, {
      context: this.props.pluginCtx,
      viewPortal: this.getPortalViewCtx(),
      event: e,
    });
    if (dragFlag === false) {
      return dragFlag;
    }

    this.setState({
      ghostView: <GhostView node={dragNode} />,
    });
  };

  onHoverNode: LayoutPropsType['onHoverNode'] = (node, dragNode) => {
    this.props.pluginCtx.emitter.emit('onHover', node);
    const material = node?.material;
    if (!material) {
      console.warn('material not found', node);
    }
    if (!dragNode) {
      this.setState({
        hoverToolBarView: <div className={styles.hoverTips}>{material?.value.title || material?.componentName}</div>,
        ghostView: null,
      });
      return;
    }

    this.setState({
      hoverToolBarView: <div className={styles.hoverTips}>{material?.value.title || material?.componentName}</div>,
      ghostView: <GhostView node={dragNode} />,
    });
  };

  render() {
    const { layoutRef, props, onSelectNode, onDragStart, onHoverNode, onNodeDrop, onNodeDragging } = this;
    const { pageModel, hoverToolBarView, selectToolBarView, ghostView, assets, portalView } = this.state;
    const { pluginCtx } = props;
    const renderJSUrl = pluginCtx.engine.props.renderJSUrl || './render.umd.js';
    return (
      <>
        <Layout
          beforeInitRender={props.pluginCtx.config.beforeInitRender}
          customRender={props.pluginCtx.config.customRender}
          ref={layoutRef}
          pageModel={pageModel}
          renderJSUrl={renderJSUrl}
          {...props}
          hoverToolBarView={hoverToolBarView}
          selectToolBarView={selectToolBarView}
          selectBoxStyle={{}}
          hoverBoxStyle={{}}
          onSelectNode={onSelectNode}
          onNodeDragStart={onDragStart}
          onHoverNode={onHoverNode}
          onNodeDrop={onNodeDrop}
          onNodeDragging={onNodeDragging}
          ghostView={ghostView}
          assets={assets}
        />
        {portalView && createPortal(portalView, document.body)}
      </>
    );
  }
}
