import { CNode } from '../../src/Page/Schema/Node/index';

describe('test node model', () => {
  it('new a node instance', () => {
    const mockData = {
      id: '1',
      componentName: 'Header',
      props: {
        key: '1',
        age: 12,
        itemRender: {
          type: 'SLOT',
          renderType: 'FUNC',
          value: {
            id: '2',
            componentName: 'Button',
          },
        },
      },
    };
    const node = new CNode(mockData, { parent: null, materials: null });
    expect(node).not.toBeNull();
    expect(node.value.componentName).toEqual(mockData.componentName);
  });

  it('test node without pros', () => {
    const mockData = {
      id: '1',
      componentName: 'Header',
    };
    const node = new CNode(mockData);
    expect(node).not.toBeNull();
  });
});
