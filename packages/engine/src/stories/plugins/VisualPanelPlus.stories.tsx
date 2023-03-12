// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { VisualPanelPlus } from '@/plugins/VisualPanelPlus';
import { CNode, CPage } from '@chameleon/model';
import { PluginManager } from '@/core/pluginManager';
import mitt from 'mitt';
import customI18n from '@/i18n';
import { BasePage } from '@chameleon/demo-page';

const TargetComponent = VisualPanelPlus;

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'VisualPanelPlus',
  component: VisualPanelPlus,
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof VisualPanelPlus>;

const Template: ComponentStory<typeof TargetComponent> = (args) => <TargetComponent {...args} />;

const node = new CNode({
  props: {
    width: '100px',
    height: '100px',
    style: {
      width: '100%',
      'background-repeat': 'no-repeat',
      'background-position': 'center',
      'background-size': 'cover',
      'flex-shrink': '0',
      height: '100%',
      'Webkit-transform': 'translate3d(0, 0, 0)',
      'background-image': {
        type: 'EXPRESSION',
        value: '`url("${$$context.loopData.item}")`',
      },
    },
    $$attributes: [],
  },
  componentName: 'CBlock',
  id: 'v59d71',
  configure: {
    propsSetter: {},
    advanceSetter: {
      'loop.data': {
        name: 'loop.data',
        setter: 'ExpressionSetter',
      },
    },
  },
});

const pluginManager = new PluginManager({
  assets: [],
  emitter: mitt(),
  getWorkbench: () => {
    return {} as any;
  },
  i18n: customI18n,
  pageModel: new CPage(BasePage),
});

const ctx = pluginManager.createPluginCtx();
export const Default = () => <Template node={node} pluginCtx={ctx}></Template>;
