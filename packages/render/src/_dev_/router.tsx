import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { DesignerRenderDemo } from './page/DesignerRenderDemo';
import { RenderDemo } from './page/RenderDemo';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RenderDemo />,
  },
  {
    path: '/designer',
    element: <DesignerRenderDemo />,
  },
]);
