import React, { useEffect, useRef } from 'react';
import { DatabaseOutlined } from '@ant-design/icons';
import { CPlugin, CPluginCtx } from '../../core/pluginManager';
import { withTranslation } from 'react-i18next';
import localize from './localize';
import {
  MonacoEditor,
  MonacoEditorInstance,
} from '../../component/MonacoEditor';
import styles from './style.module.scss';

export const PLUGIN_NAME = 'GlobalState';
const i18nNamespace = `plugin:${PLUGIN_NAME}`;

type GlobalStatePanelProps = {
  pluginCtx: CPluginCtx;
};

const GlobalStatePanel = (props: GlobalStatePanelProps) => {
  const { pluginCtx } = props;
  const rootState = pluginCtx.pageModel.value.componentsTree.value.state || {};

  const editorRef = useRef<MonacoEditorInstance | null>(null);
  useEffect(() => {
    editorRef?.current?.setValue(JSON.stringify(rootState, null, 2));
  }, []);

  const onValueChange = (newValStr: string) => {
    try {
      const newVal = JSON.parse(newValStr);
      pluginCtx.pageModel.value.componentsTree.value.state = newVal;
      pluginCtx.pageModel.value.componentsTree.updateValue();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div className={styles.box}>
      <MonacoEditor
        initialValue={JSON.stringify(rootState, null, 2)}
        language={'json'}
        options={{
          automaticLayout: true,
          tabSize: 2,
          minimap: { enabled: false },
          quickSuggestions: false,
          suggestOnTriggerCharacters: false,
          folding: false,
        }}
        onDidMount={(editor) => {
          editorRef.current = editor;
        }}
        onChange={onValueChange}
      />
    </div>
  );
};

export const GlobalStatePanelPlugin: CPlugin = {
  name: PLUGIN_NAME,
  async init(ctx) {
    const { i18n } = ctx;
    Object.keys(localize).forEach((lng) => {
      i18n.addResourceBundle(lng, i18nNamespace, localize[lng], true, true);
    });

    const GlobalStatePanelWithLocalize =
      withTranslation(i18nNamespace)(GlobalStatePanel);
    const Title = withTranslation(i18nNamespace)(({ t }) => (
      <>{t('pluginName')}</>
    ));
    ctx.workbench.addLeftPanel({
      title: <Title />,
      name: PLUGIN_NAME,
      icon: <DatabaseOutlined />,
      render: <GlobalStatePanelWithLocalize pluginCtx={ctx} />,
    });
  },
  async destroy(ctx) {
    console.log('destroy', ctx);
  },
  exports: (ctx) => {
    return {};
  },
  meta: {
    engine: {
      version: '1.0.0',
    },
  },
};