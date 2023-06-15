import React, { Ref } from 'react';
import { CMaterialPropsType, getMTitleTip } from '@chamn/model';
import { CForm } from './components/Form';
import { isSpecialMaterialPropType } from '@chamn/model';
import { getMTitle } from '@chamn/model/src/types/material';
import { SetterSwitcher } from './components/SetterSwitcher';
import { getSetterList } from './utils';
import styles from './style.module.scss';
import { ConfigProvider } from 'antd';
import { CCustomSchemaFormContext } from './context';
import { CPluginCtx } from '../../core/pluginManager';
import { CFormContextData } from './components/Form/context';

export type CustomSchemaFormInstance = CForm;

export type CustomSchemaFormProps = {
  pluginCtx?: CPluginCtx;
  initialValue: Record<string, any>;
  properties: CMaterialPropsType<any>;
  onValueChange?: (val: any) => void;
  onSetterChange: (keyPaths: string[], setterName: string) => void;
  /** 存储每个字段上次使用的 setter */
  defaultSetterConfig: Record<string, { name: string; setter: string }>;
  customSetterMap?: CFormContextData['customSetterMap'];
};

const CustomSchemaFormCore = (props: CustomSchemaFormProps, ref: Ref<CustomSchemaFormInstance | CForm>) => {
  const {
    properties: originProperties,
    initialValue,
    onValueChange,
    onSetterChange,
    defaultSetterConfig,
    pluginCtx,
    customSetterMap,
  } = props;
  const properties: CMaterialPropsType = originProperties;
  console.log('🚀 ~ file: index.tsx:38 ~ CustomSchemaFormCore ~ properties:', properties);
  return (
    <CCustomSchemaFormContext.Provider
      value={{
        defaultSetterConfig,
        onSetterChange,
        formRef: ref,
        pluginCtx: pluginCtx,
      }}
    >
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 4,
          },
        }}
      >
        <div
          className={styles.CFromRenderBox}
          style={{
            overflow: 'auto',
            height: '100%',
          }}
        >
          <CForm
            ref={ref as any}
            name="root-form"
            initialValue={initialValue}
            customSetterMap={customSetterMap}
            onValueChange={(val) => {
              onValueChange?.(val);
            }}
          >
            {properties.map((property) => {
              if (isSpecialMaterialPropType(property)) {
                console.log('Current not Support type config for props, wait future....');
              } else {
                const title = getMTitle(property.title);
                const tip = getMTitleTip(property.title);
                const setterList = getSetterList(property.setters);
                const keyPaths = [property.name];
                return (
                  <SetterSwitcher
                    key={property.name}
                    condition={property.condition}
                    keyPaths={keyPaths}
                    setters={setterList}
                    label={title}
                    name={property.name || ''}
                    tips={tip}
                  />
                );
              }
            })}
          </CForm>
        </div>
      </ConfigProvider>
    </CCustomSchemaFormContext.Provider>
  );
};

export const CustomSchemaForm = React.forwardRef(CustomSchemaFormCore);
