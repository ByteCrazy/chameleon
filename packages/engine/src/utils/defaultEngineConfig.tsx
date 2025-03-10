import { getUniqueAssetsList } from '@/core/assetPackagesListManage';
import { LayoutPropsType } from '@chamn/layout';
import { collectVariable, flatObject, getThirdLibs, RenderPropsType } from '@chamn/render';

/** 默认使用 react 18 模式渲染 */
export const beforeInitRender: LayoutPropsType['beforeInitRender'] = async ({ iframe }) => {
  const subWin = iframe.getWindow();
  if (!subWin) {
    return;
  }
  (subWin as any).React = window.React;
  (subWin as any).ReactDOM = window.ReactDOM;
  (subWin as any).ReactDOMClient = (window as any).ReactDOMClient;
};

/** 默认使用 react 18 模式渲染 */
export const getDefaultRender = (options: {
  components: Record<string, any>;
  renderProps: Partial<RenderPropsType>;
}) => {
  const defaultRender: LayoutPropsType['customRender'] = async ({
    iframe: iframeContainer,
    assets,
    page,
    pageModel,
    ready,
    renderJSUrl,
  }) => {
    await iframeContainer.injectJS(renderJSUrl || '');
    const iframeWindow = iframeContainer.getWindow()!;
    const iframeDoc = iframeContainer.getDocument()!;
    const IframeReact = iframeWindow.React!;
    const IframeReactDOM = iframeWindow.ReactDOMClient!;
    const CRender = iframeWindow.CRender!;

    // 从子窗口获取物料对象
    const pageInfo = page || pageModel?.export();
    if (!pageInfo) {
      console.log('page schema is empty');
      return;
    }
    const allAssets = getUniqueAssetsList([...assets, ...(pageInfo.assets || [])]);
    // 注入组件物料资源
    const assetLoader = new CRender.AssetLoader(allAssets, {
      window: iframeContainer.getWindow()!,
    });
    assetLoader
      .onSuccess(() => {
        const allLibs = collectVariable(allAssets, iframeWindow);
        const componentsLibs = flatObject(allLibs);
        const thirdLibs = getThirdLibs(allLibs, pageInfo.thirdLibs || []);
        const App = IframeReact?.createElement(CRender.DesignRender, {
          adapter: CRender?.ReactAdapter,
          page: page,
          pageModel: pageModel,
          components: { ...componentsLibs, ...(options.components || {}) },
          $$context: {
            thirdLibs,
          },
          onMount: (designRenderInstance) => {
            ready(designRenderInstance);
          },
          ...((options?.renderProps as any) || {}),
        });
        IframeReactDOM.createRoot(iframeDoc.getElementById('app')!).render(App);
      })
      .onError(() => {
        console.log('资源加载出错');
      })
      .load();
  };

  return defaultRender;
};
