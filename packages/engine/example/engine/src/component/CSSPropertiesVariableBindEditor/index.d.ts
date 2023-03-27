/// <reference types="react" />
import { JSExpressionPropType } from '@chameleon/model';
export type SinglePropertyEditorProps = {
    value?: {
        key: string;
        value: JSExpressionPropType;
    };
    onValueChange: (value: {
        key: string;
        value: JSExpressionPropType;
    }) => void;
    onDelete?: () => void;
    onCreate?: (value: {
        key: string;
        value: JSExpressionPropType;
    }) => {
        errorKey?: string[];
    } | void;
    mod?: 'create' | 'edit';
};
export type CSSPropertiesVariableBindEditorProps = {
    initialValue?: {
        key: string;
        value: string;
    }[];
    onValueChange?: (val: {
        key: string;
        value: string;
    }[]) => void;
};
export type CSSPropertiesVariableBindEditorRef = {
    setValue: (val: {
        key: string;
        value: string;
    }[]) => void;
};
export declare const CSSPropertiesVariableBindEditor: import("react").ForwardRefExoticComponent<CSSPropertiesVariableBindEditorProps & import("react").RefAttributes<CSSPropertiesVariableBindEditorRef>>;