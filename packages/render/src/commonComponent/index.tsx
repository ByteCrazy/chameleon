/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from 'react';
import { htmlTagNames } from 'html-tag-names';

const transformListToObj = (list: { key: string; value: any }[]) => {
  const res: Record<string, any> = {};
  list.forEach((el) => {
    res[el.key] = el.value;
  });
  return res;
};

const htmlNativeComponents = htmlTagNames.reduce((res, tag) => {
  res[tag] = ({ children, $$attributes = [], ...props }: any) => {
    let child = children;
    if (!Array.isArray(children)) {
      child = [children];
    }
    return React.createElement(
      tag,
      {
        ...props,
        ...transformListToObj($$attributes),
      },
      ...child
    );
  };
  return res;
}, {} as Record<string, (props: any) => React.ReactNode>);

const CBlock = ({ children, width, height, $$attributes = [], ...props }: any) => {
  let child = children;
  if (!Array.isArray(children)) {
    child = [children];
  }
  child = child.filter((el: any) => el !== undefined);
  const { style = {}, ...attributes } = transformListToObj($$attributes);
  const finalStyle = {
    height,
    width,
    ...style,
    ...(props.style || {}),
  };
  return React.createElement(
    'div',
    {
      ...props,
      ...attributes,
      style: finalStyle,
    },
    ...child
  );
};

const CCanvas = ({ afterMount, beforeDestroy, $$attributes = [], ...props }: any) => {
  useEffect(() => {
    afterMount?.(props);
    return () => {
      beforeDestroy?.(props);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return React.createElement('canvas', {
    ...props,
    ...transformListToObj($$attributes),
  });
};

const CImage = ({ children, $$attributes = [], ...props }: any) => {
  let child = children;
  if (!Array.isArray(children)) {
    child = [children];
  }
  return React.createElement(
    'img',
    {
      ...props,
      ...transformListToObj($$attributes),
    },
    ...child
  );
};

const CVideo = ({ children, $$attributes = [], ...props }: any) => {
  let child = children;
  if (!Array.isArray(children)) {
    child = [children];
  }
  return React.createElement(
    'video',
    {
      ...props,
      ...transformListToObj($$attributes),
    },
    ...child
  );
};

const CAudio = ({ children, $$attributes = [], ...props }: any) => {
  let child = children;
  if (!Array.isArray(children)) {
    child = [children];
  }
  return React.createElement(
    'audio',
    {
      ...props,
      ...transformListToObj($$attributes),
    },
    ...child
  );
};

const CText = ({ $$attributes = [], content, ...props }: any) => {
  return React.createElement(
    'span',
    {
      ...props,
      ...transformListToObj($$attributes),
    },
    content
  );
};

const CContainer = ({ children, $$attributes = [], afterMount, beforeDestroy, ...props }: any) => {
  let child = children;
  if (!Array.isArray(children)) {
    child = [children];
  }
  useEffect(() => {
    afterMount?.(props);
    return () => {
      beforeDestroy?.(props);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div {...props} {...transformListToObj($$attributes)}>
      {child}
    </div>
  );
};

const CNativeTag = ({ children, $$attributes = [], htmlTag = 'div', ...props }: any) => {
  let child = children;
  if (!Array.isArray(children)) {
    child = [children];
  }
  const { style = {}, ...attributes } = transformListToObj($$attributes);

  const finalStyle = {
    ...style,
    ...(props.style || {}),
  };
  return React.createElement(
    htmlTag,
    {
      ...props,
      ...attributes,
      style: finalStyle,
    },
    ...child
  );
};

// 内置物料组件
export const InnerComponent = {
  RootContainer: ({ children }: any) => {
    return children;
  },
  ...htmlNativeComponents,
  CContainer,
  CVideo,
  CAudio,
  CBlock,
  CImage,
  CText,
  CCanvas,
  CNativeTag,
};
