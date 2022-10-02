import { Component, createElement } from 'react';

export const isClass = function (val: any) {
  if (!val) {
    return false;
  }
  if (typeof val !== 'function') {
    return false;
  }

  if (!val.prototype) {
    return false;
  }

  return true;
};

export function canAcceptsRef(Comp: any) {
  const hasSymbol = typeof Symbol === 'function' && Symbol.for;
  const REACT_FORWARD_REF_TYPE = hasSymbol
    ? Symbol.for('react.forward_ref')
    : 0xead0;
  return (
    Comp?.$$typeof === REACT_FORWARD_REF_TYPE ||
    Comp?.prototype?.isReactComponent ||
    Comp?.prototype?.setState ||
    Comp._forwardRef
  );
}

export function compWrapper(Comp: any) {
  class WrapperForRef extends Component {
    render() {
      // 需要直接调用 react api ,避免被拦截 !!!!
      return createElement(Comp, this.props);
    }
  }
  (WrapperForRef as any).displayName = Comp.displayName;

  return WrapperForRef;
}
