import React from 'react';
import { Layout } from '@chamn/layout';
import { CNode, CPage, CRootNode } from '@chamn/model';
import { CPluginCtx } from '../../core/pluginManager';
import { AssetPackage } from '@chamn/model';
export type DesignerPropsType = {
    pluginCtx: CPluginCtx;
};
type DesignerStateType = {
    pageModel: CPage;
    hoverToolBar: React.ReactNode;
    selectToolBar: React.ReactNode;
    ghostView: React.ReactNode;
    assets: AssetPackage[];
};
export declare class Designer extends React.Component<DesignerPropsType, DesignerStateType> {
    layoutRef: React.RefObject<Layout>;
    constructor(props: DesignerPropsType);
    componentDidMount(): void;
    updateAssets(assets: AssetPackage[]): void;
    reloadRender({ assets }: {
        assets?: AssetPackage[];
    }): void;
    init(): Promise<void>;
    onSelectNode: (node: CNode | CRootNode | null) => void;
    onDragStart: (startNode: CNode | CRootNode | null) => void;
    onHoverNode: (node: CNode | CRootNode | null, startNode: CNode | CRootNode) => void;
    render(): JSX.Element;
}
export {};