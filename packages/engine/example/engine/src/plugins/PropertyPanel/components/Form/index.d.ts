import React from 'react';
import { ReactNode } from 'react';
import { CFormContextData, ContextState } from './context';
export declare type CFormProps = {
    name: string;
    children?: ReactNode | ReactNode[];
    initialValue?: Record<string, any>;
    onValueChange?: (formData: Record<string, any>) => void;
};
export declare class CForm extends React.Component<CFormProps, CFormContextData> {
    updateContext: (newState: ContextState) => void;
    constructor(props: CFormProps);
    setFields: (state: Record<string, any>) => void;
    formatValue: (data: Record<string, any>) => Record<string, any>;
    render(): ReactNode;
}
