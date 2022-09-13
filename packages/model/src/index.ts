import { CPage } from './Page/index';

export const parseModel = (data: any) => {
  return new CPage(data);
};

export * from './Material';
export * from './Page';
export * from './Page/Schema';
export { CNode } from './Page/Schema/Node';
export * from './Page/Schema/Node/props';
export * from './const/schema';

export * from './types/base';
export * from './types/material';
export * from './types/node';
export * from './types/page';
export * from './types/schema';
