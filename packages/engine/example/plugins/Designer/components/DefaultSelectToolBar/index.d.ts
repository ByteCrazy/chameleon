/// <reference types="react" />
import { CNode } from '@chamn/model';
export type DefaultSelectToolBarProps = {
    nodeList: CNode[];
    toSelectNode: (id: string) => void;
    toDelete: (id: string) => void;
    toCopy: (idd: string) => void;
    toHidden: (idd: string) => void;
};
export declare const DefaultSelectToolBar: ({ nodeList, toSelectNode, toDelete, toCopy, toHidden, }: DefaultSelectToolBarProps) => JSX.Element;