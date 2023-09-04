import Editor, { EditorProps, Monaco } from '@monaco-editor/react';

type EditorType = EditorProps;

export type MonacoEditorInstance = Parameters<Required<EditorType>['onMount']>[0];

export type MonacoEditorProps = {
  beforeMount?: (monaco: Monaco) => void;
  onDidMount?: (editor: MonacoEditorInstance) => void;
  options?: EditorType['options'];
  onChange?: EditorType['onChange'];
  initialValue?: string;
  language?: 'json' | 'javascript' | 'typescript';
};

export const MonacoEditor = (props: MonacoEditorProps) => {
  const handleEditorBeforeMount: EditorType['beforeMount'] = (monaco) => {
    props.beforeMount?.(monaco);
  };

  const handleEditorDidMount: EditorType['onMount'] = (editor) => {
    props.onDidMount?.(editor);
  };

  return (
    <>
      <Editor
        height="100%"
        width="100%"
        defaultLanguage={props.language}
        defaultValue={props.initialValue}
        beforeMount={handleEditorBeforeMount}
        onMount={handleEditorDidMount}
        options={props.options}
        onChange={props.onChange}
      />
    </>
  );
};
