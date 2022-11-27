import React from 'react';
import { DEmitter } from '../../core/emitter';
export interface PluginContext {
    openPanel: () => void;
    closePanel: () => void;
    getPlugin: (pluginName: string) => any;
    emitter: DEmitter;
}
declare type PluginItem = {
    name: string;
    title: string;
    icon: React.ReactNode;
    render: (ctx: PluginContext) => React.FC | typeof React.Component;
};
declare type WorkBenchStateType = {
    leftBoxVisible: boolean;
    leftBoxSize: {
        width: number;
        height: number | string;
    };
    leftMinWidth: number | string;
    leftBoxFixed: boolean;
    rightBoxSize: {
        width: number;
        height: number | string;
    };
    rightMinWidth: number;
    rightBoxVisible: boolean;
    currentActivePlugin: string;
    plugins: PluginItem[];
};
export declare type WorkBenchPropsType = any;
export declare class WorkBench extends React.Component<WorkBenchPropsType, WorkBenchStateType> {
    emitter: DEmitter<any>;
    constructor(props: WorkBenchPropsType);
    openLeftPanel: () => void;
    closeLeftPanel: () => void;
    toggleLeftPanel: () => void;
    onPluginIconClick: (plugin: PluginItem) => void;
    openRightPanel: () => void;
    closeRightPanel: () => void;
    toggleRightPanel: () => void;
    render(): JSX.Element;
}
export {};
