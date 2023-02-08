import React, { useEffect, useState } from 'react';
import { ReactAdapter, Render, useRender } from '@chameleon/render';
import * as components from 'antd';

export const Preview = () => {
  const [page, setPage] = useState();
  const renderHandle = useRender();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const localPage = localStorage.getItem('pageSchema');
    if (localPage) {
      setPage(JSON.parse(localPage));
      setLoading(false);
    }
  }, []);
  if (loading) {
    return <>not found page</>;
  }
  return (
    <div className="App">
      <Render
        page={page}
        components={components}
        render={renderHandle as any}
        adapter={ReactAdapter}
      />
    </div>
  );
};