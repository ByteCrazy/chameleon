import React, { useEffect, useRef } from 'react';
import { CMaterialPropsType, CNode } from '@chameleon/model';
import {
  CustomSchemaForm,
  CustomSchemaFormInstance,
  CustomSchemaFormProps,
} from '../../component/CustomSchemaForm';
import { CPluginCtx } from '../../core/pluginManager';
import { CRightPanelItem } from '../RightPanel/view';
import styles from './style.module.scss';

export type AdvancePanelProps = {
  node: CNode;
  pluginCtx: CPluginCtx;
};

const properties: CMaterialPropsType = [
  {
    name: 'condition',
    title: {
      label: 'Render',
      tip: 'controller component render',
    },
    valueType: 'boolean',
    setters: ['BooleanSetter', 'ExpressionSetter'],
  },
  {
    name: 'loop',
    title: 'loop render',
    valueType: 'object',
    setters: [
      {
        componentName: 'ShapeSetter',
        props: {
          elements: [
            {
              name: 'open',
              title: 'open',
              valueType: 'boolean',
              setters: ['BooleanSetter', 'ExpressionSetter'],
            },
            {
              name: 'data',
              title: 'data',
              valueType: 'array',
              setters: [
                {
                  componentName: 'ArraySetter',
                  initialValue: [],
                  props: {
                    item: {
                      setters: ['JSONSetter', 'ExpressionSetter'],
                      initialValue: {},
                    },
                  },
                },
                'JSONSetter',
                'ExpressionSetter',
              ],
            },
            {
              name: 'forName',
              title: {
                label: 'name',
                tip: 'loop element name',
              },
              valueType: 'string',
              setters: ['StringSetter'],
            },
            {
              name: 'forIndex',
              title: {
                label: 'index',
                tip: 'loop element index',
              },
              valueType: 'string',
              setters: ['StringSetter'],
            },
            {
              name: 'key',
              title: {
                label: 'key',
                tip: 'loop element key',
              },
              valueType: 'expression',
              setters: ['ExpressionSetter'],
            },
            {
              name: 'name',
              title: {
                label: 'variable \n name',
                tip: 'loop variable name',
              },
              valueType: 'string',
              setters: [
                {
                  componentName: 'StringSetter',
                  props: {
                    prefix: 'loopData',
                  },
                },
              ],
            },
          ],
        },
        initialValue: {
          open: false,
          data: [],
        },
      },
    ],
  },
  {
    name: 'refId',
    title: {
      label: 'refId',
      tip: 'unique node flag',
    },
    valueType: 'string',
    setters: ['StringSetter'],
  },
  {
    name: 'stateName',
    title: {
      label: (
        <>
          state <br></br> name
        </>
      ) as any,
      tip: 'alias for state',
    },
    valueType: 'string',
    setters: ['StringSetter'],
  },
];

export const AdvancePanel = (props: AdvancePanelProps) => {
  const { node } = props;
  const onSetterChange: CustomSchemaFormProps['onSetterChange'] = (
    keyPaths,
    setterName
  ) => {
    node.value.configure = node.value.configure || {};
    node.value.configure.advance = node.value.configure.advance || {};
    node.value.configure.advance[keyPaths.join('.')] = {
      name: keyPaths.join('.'),
      setter: setterName,
    };
  };

  const loopObj = node.value.loop;
  const formRef = useRef<CustomSchemaFormInstance>(null);

  useEffect(() => {
    const newValue = {
      condition: node.value.condition || true,
      loop: {
        open: loopObj?.open || false,
        data: loopObj?.data || [],
        forName: loopObj?.forName || 'item',
        forIndex: loopObj?.forIndex || 'index',
        key: loopObj?.key || '',
        name: loopObj?.name || '',
      },
      refId: node.value.refId,
      stateName: node.value.stateName,
    };
    formRef.current?.setFields(newValue);
  }, [node]);

  const onValueChange = (newVal: {
    refId: string;
    loop: any;
    condition: any;
    stateName: any;
  }) => {
    node.value.loop = newVal.loop;
    node.value.condition = newVal.condition;
    node.value.refId = newVal.refId;
    node.value.stateName = newVal.stateName;

    node.updateValue();
  };
  return (
    <div className={styles.advanceBox}>
      <CustomSchemaForm
        key={node.id}
        defaultSetterConfig={node.value.configure?.advance || {}}
        onSetterChange={onSetterChange}
        properties={properties}
        initialValue={{}}
        ref={formRef}
        onValueChange={onValueChange}
      />
    </div>
  );
};

export const AdvancePanelConfig: CRightPanelItem = {
  key: 'Advance',
  name: 'Advance',
  view: ({ node, pluginCtx }) => (
    <AdvancePanel node={node} pluginCtx={pluginCtx} />
  ),
};