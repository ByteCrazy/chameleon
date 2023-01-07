import React from 'react';
import { CPlugin } from '../../core/pluginManager';
import { CRightPanelItem, RightPanel } from './view';

const PLUGIN_NAME = 'RightPanel';
export const RightPanelPlugin: CPlugin = (ctx) => {
  const uiHandle = React.createRef<RightPanel>();
  return {
    name: PLUGIN_NAME,
    async init(ctx) {
      ctx.workbench.replaceRightView(
        <RightPanel ref={uiHandle} pluginCtx={ctx} />
      );
    },
    async destroy(ctx) {
      console.log('destroy', ctx);
    },
    exports: (ctx) => {
      return {
        addPanel: (panel: CRightPanelItem) => {
          uiHandle?.current?.addPanel(panel);
        },
      };
    },
    meta: {
      engine: {
        version: '1.0.0',
      },
    },
  };
};