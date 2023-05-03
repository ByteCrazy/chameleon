(function (b, D) {
  typeof exports === 'object' && typeof module < 'u'
    ? D(exports, require('react'), require('react-dom'))
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react', 'react-dom'], D)
    : ((b = typeof globalThis < 'u' ? globalThis : b || self), D((b.CRender = {}), b.React, b.ReactDOM));
})(this, function (b, D, ut) {
  'use strict';
  var Nv = Object.defineProperty;
  var $v = (b, D, ut) =>
    D in b ? Nv(b, D, { enumerable: !0, configurable: !0, writable: !0, value: ut }) : (b[D] = ut);
  var g = (b, D, ut) => ($v(b, typeof D !== 'symbol' ? D + '' : D, ut), ut);
  const aa = (t) => (t && typeof t === 'object' && 'default' in t ? t : { default: t });
  function ia(t) {
    if (t && t.__esModule) return t;
    const e = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
    if (t) {
      for (const r in t)
        if (r !== 'default') {
          const n = Object.getOwnPropertyDescriptor(t, r);
          Object.defineProperty(e, r, n.get ? n : { enumerable: !0, get: () => t[r] });
        }
    }
    return (e.default = t), Object.freeze(e);
  }
  const O = aa(D),
    sa = ia(ut),
    ca = (t) => () => {
      console.warn(`${t} need to be implement getComponent`);
    },
    ua = ['customPageRootRender'],
    Dr = [
      'pageRender',
      'render',
      'convertModelToComponent',
      'getComponent',
      'getContext',
      'getUtils',
      'getDataLink',
      'createDataLink',
      'transformProps',
      'transformData',
      'transformGlobalData',
      'errorCatch',
      'clear',
    ],
    Rr = (t) =>
      [...Dr, ...ua].reduce((r, n) => {
        var o;
        return t != null && t[n] ? (r[n] = (o = t[n]) == null ? void 0 : o.bind(t)) : Dr.includes(n) && (r[n] = ca), r;
      }, {});
  var la = Object.defineProperty,
    fa = (t, e, r) => (e in t ? la(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (t[e] = r)),
    j = (t, e, r) => (fa(t, typeof e !== 'symbol' ? e + '' : e, r), r),
    da = typeof global === 'object' && global && global.Object === Object && global;
  const Ir = da;
  var pa = typeof self === 'object' && self && self.Object === Object && self,
    ha = Ir || pa || Function('return this')();
  const Y = ha;
  var va = Y.Symbol;
  const G = va;
  var Lr = Object.prototype,
    ma = Lr.hasOwnProperty,
    ya = Lr.toString,
    Bt = G ? G.toStringTag : void 0;
  function ga(t) {
    var e = ma.call(t, Bt),
      r = t[Bt];
    try {
      t[Bt] = void 0;
      var n = !0;
    } catch {}
    var o = ya.call(t);
    return n && (e ? (t[Bt] = r) : delete t[Bt]), o;
  }
  var ba = Object.prototype,
    _a = ba.toString;
  function ja(t) {
    return _a.call(t);
  }
  var Sa = '[object Null]',
    Oa = '[object Undefined]',
    Fr = G ? G.toStringTag : void 0;
  function lt(t) {
    return t == null ? (t === void 0 ? Oa : Sa) : Fr && Fr in Object(t) ? ga(t) : ja(t);
  }
  function X(t) {
    return t != null && typeof t === 'object';
  }
  var Ca = '[object Symbol]';
  function Ee(t) {
    return typeof t === 'symbol' || (X(t) && lt(t) == Ca);
  }
  function Ne(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; ) o[r] = e(t[r], r, t);
    return o;
  }
  var wa = Array.isArray;
  const P = wa;
  var Ea = 1 / 0,
    Br = G ? G.prototype : void 0,
    Ur = Br ? Br.toString : void 0;
  function kr(t) {
    if (typeof t === 'string') return t;
    if (P(t)) return Ne(t, kr) + '';
    if (Ee(t)) return Ur ? Ur.call(t) : '';
    var e = t + '';
    return e == '0' && 1 / t == -Ea ? '-0' : e;
  }
  function V(t) {
    var e = typeof t;
    return t != null && (e == 'object' || e == 'function');
  }
  function $e(t) {
    return t;
  }
  var Na = '[object AsyncFunction]',
    $a = '[object Function]',
    Ta = '[object GeneratorFunction]',
    Aa = '[object Proxy]';
  function Te(t) {
    if (!V(t)) return !1;
    var e = lt(t);
    return e == $a || e == Ta || e == Na || e == Aa;
  }
  var Ma = Y['__core-js_shared__'];
  const Ae = Ma;
  var zr = (function () {
    var t = /[^.]+$/.exec((Ae && Ae.keys && Ae.keys.IE_PROTO) || '');
    return t ? 'Symbol(src)_1.' + t : '';
  })();
  function Pa(t) {
    return !!zr && zr in t;
  }
  var xa = Function.prototype,
    Da = xa.toString;
  function ft(t) {
    if (t != null) {
      try {
        return Da.call(t);
      } catch {}
      try {
        return t + '';
      } catch {}
    }
    return '';
  }
  var Ra = /[\\^$.*+?()[\]{}|]/g,
    Ia = /^\[object .+?Constructor\]$/,
    La = Function.prototype,
    Fa = Object.prototype,
    Ba = La.toString,
    Ua = Fa.hasOwnProperty,
    ka = RegExp(
      '^' +
        Ba.call(Ua)
          .replace(Ra, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    );
  function za(t) {
    if (!V(t) || Pa(t)) return !1;
    var e = Te(t) ? ka : Ia;
    return e.test(ft(t));
  }
  function Ga(t, e) {
    return t == null ? void 0 : t[e];
  }
  function dt(t, e) {
    var r = Ga(t, e);
    return za(r) ? r : void 0;
  }
  var Ha = dt(Y, 'WeakMap');
  const Me = Ha;
  var Gr = Object.create,
    Va = (function () {
      function t() {}
      return function (e) {
        if (!V(e)) return {};
        if (Gr) return Gr(e);
        t.prototype = e;
        var r = new t();
        return (t.prototype = void 0), r;
      };
    })();
  const Wa = Va;
  function Ja(t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  }
  function qa() {}
  function Hr(t, e) {
    var r = -1,
      n = t.length;
    for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
    return e;
  }
  var Qa = 800,
    Ya = 16,
    Xa = Date.now;
  function Ka(t) {
    var e = 0,
      r = 0;
    return function () {
      var n = Xa(),
        o = Ya - (n - r);
      if (((r = n), o > 0)) {
        if (++e >= Qa) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function Za(t) {
    return function () {
      return t;
    };
  }
  var ti = (function () {
    try {
      var t = dt(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch {}
  })();
  const ie = ti;
  var ei = ie
      ? function (t, e) {
          return ie(t, 'toString', { configurable: !0, enumerable: !1, value: Za(e), writable: !0 });
        }
      : $e,
    ri = Ka(ei);
  const Vr = ri;
  function ni(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length; ++r < n && e(t[r], r, t) !== !1; );
    return t;
  }
  function oi(t, e, r, n) {
    for (var o = t.length, a = r + (n ? 1 : -1); n ? a-- : ++a < o; ) if (e(t[a], a, t)) return a;
    return -1;
  }
  function ai(t) {
    return t !== t;
  }
  function ii(t, e, r) {
    for (var n = r - 1, o = t.length; ++n < o; ) if (t[n] === e) return n;
    return -1;
  }
  function si(t, e, r) {
    return e === e ? ii(t, e, r) : oi(t, ai, r);
  }
  function ci(t, e) {
    var r = t == null ? 0 : t.length;
    return !!r && si(t, e, 0) > -1;
  }
  var ui = 9007199254740991,
    li = /^(?:0|[1-9]\d*)$/;
  function se(t, e) {
    var r = typeof t;
    return (
      (e = e == null ? ui : e), !!e && (r == 'number' || (r != 'symbol' && li.test(t))) && t > -1 && t % 1 == 0 && t < e
    );
  }
  function Pe(t, e, r) {
    e == '__proto__' && ie ? ie(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (t[e] = r);
  }
  function Ut(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var fi = Object.prototype,
    di = fi.hasOwnProperty;
  function xe(t, e, r) {
    var n = t[e];
    (!(di.call(t, e) && Ut(n, r)) || (r === void 0 && !(e in t))) && Pe(t, e, r);
  }
  function bt(t, e, r, n) {
    var o = !r;
    r || (r = {});
    for (var a = -1, s = e.length; ++a < s; ) {
      var i = e[a],
        c = n ? n(r[i], t[i], i, r, t) : void 0;
      c === void 0 && (c = t[i]), o ? Pe(r, i, c) : xe(r, i, c);
    }
    return r;
  }
  var Wr = Math.max;
  function Jr(t, e, r) {
    return (
      (e = Wr(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var n = arguments, o = -1, a = Wr(n.length - e, 0), s = Array(a); ++o < a; ) s[o] = n[e + o];
        o = -1;
        for (var i = Array(e + 1); ++o < e; ) i[o] = n[o];
        return (i[e] = r(s)), Ja(t, this, i);
      }
    );
  }
  function qr(t, e) {
    return Vr(Jr(t, e, $e), t + '');
  }
  var pi = 9007199254740991;
  function De(t) {
    return typeof t === 'number' && t > -1 && t % 1 == 0 && t <= pi;
  }
  function ce(t) {
    return t != null && De(t.length) && !Te(t);
  }
  function hi(t, e, r) {
    if (!V(r)) return !1;
    var n = typeof e;
    return (n == 'number' ? ce(r) && se(e, r.length) : n == 'string' && e in r) ? Ut(r[e], t) : !1;
  }
  function vi(t) {
    return qr(function (e, r) {
      var n = -1,
        o = r.length,
        a = o > 1 ? r[o - 1] : void 0,
        s = o > 2 ? r[2] : void 0;
      for (
        a = t.length > 3 && typeof a === 'function' ? (o--, a) : void 0,
          s && hi(r[0], r[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)),
          e = Object(e);
        ++n < o;

      ) {
        var i = r[n];
        i && t(e, i, n, a);
      }
      return e;
    });
  }
  var mi = Object.prototype;
  function Re(t) {
    var e = t && t.constructor,
      r = (typeof e === 'function' && e.prototype) || mi;
    return t === r;
  }
  function yi(t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  }
  var gi = '[object Arguments]';
  function Qr(t) {
    return X(t) && lt(t) == gi;
  }
  var Yr = Object.prototype,
    bi = Yr.hasOwnProperty,
    _i = Yr.propertyIsEnumerable,
    ji = Qr(
      (function () {
        return arguments;
      })()
    )
      ? Qr
      : function (t) {
          return X(t) && bi.call(t, 'callee') && !_i.call(t, 'callee');
        };
  const kt = ji;
  function Si() {
    return !1;
  }
  var Xr = typeof b === 'object' && b && !b.nodeType && b,
    Kr = Xr && typeof module === 'object' && module && !module.nodeType && module,
    Oi = Kr && Kr.exports === Xr,
    Zr = Oi ? Y.Buffer : void 0,
    Ci = Zr ? Zr.isBuffer : void 0,
    wi = Ci || Si;
  const zt = wi;
  var Ei = '[object Arguments]',
    Ni = '[object Array]',
    $i = '[object Boolean]',
    Ti = '[object Date]',
    Ai = '[object Error]',
    Mi = '[object Function]',
    Pi = '[object Map]',
    xi = '[object Number]',
    Di = '[object Object]',
    Ri = '[object RegExp]',
    Ii = '[object Set]',
    Li = '[object String]',
    Fi = '[object WeakMap]',
    Bi = '[object ArrayBuffer]',
    Ui = '[object DataView]',
    ki = '[object Float32Array]',
    zi = '[object Float64Array]',
    Gi = '[object Int8Array]',
    Hi = '[object Int16Array]',
    Vi = '[object Int32Array]',
    Wi = '[object Uint8Array]',
    Ji = '[object Uint8ClampedArray]',
    qi = '[object Uint16Array]',
    Qi = '[object Uint32Array]',
    $ = {};
  ($[ki] = $[zi] = $[Gi] = $[Hi] = $[Vi] = $[Wi] = $[Ji] = $[qi] = $[Qi] = !0),
    ($[Ei] =
      $[Ni] =
      $[Bi] =
      $[$i] =
      $[Ui] =
      $[Ti] =
      $[Ai] =
      $[Mi] =
      $[Pi] =
      $[xi] =
      $[Di] =
      $[Ri] =
      $[Ii] =
      $[Li] =
      $[Fi] =
        !1);
  function Yi(t) {
    return X(t) && De(t.length) && !!$[lt(t)];
  }
  function Ie(t) {
    return function (e) {
      return t(e);
    };
  }
  var tn = typeof b === 'object' && b && !b.nodeType && b,
    Gt = tn && typeof module === 'object' && module && !module.nodeType && module,
    Xi = Gt && Gt.exports === tn,
    Le = Xi && Ir.process,
    Ki = (function () {
      try {
        var t = Gt && Gt.require && Gt.require('util').types;
        return t || (Le && Le.binding && Le.binding('util'));
      } catch {}
    })();
  const _t = Ki;
  var en = _t && _t.isTypedArray,
    Zi = en ? Ie(en) : Yi;
  const Fe = Zi;
  var ts = Object.prototype,
    es = ts.hasOwnProperty;
  function rn(t, e) {
    var r = P(t),
      n = !r && kt(t),
      o = !r && !n && zt(t),
      a = !r && !n && !o && Fe(t),
      s = r || n || o || a,
      i = s ? yi(t.length, String) : [],
      c = i.length;
    for (var u in t)
      (e || es.call(t, u)) &&
        !(
          s &&
          (u == 'length' ||
            (o && (u == 'offset' || u == 'parent')) ||
            (a && (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
            se(u, c))
        ) &&
        i.push(u);
    return i;
  }
  function nn(t, e) {
    return function (r) {
      return t(e(r));
    };
  }
  var rs = nn(Object.keys, Object);
  const ns = rs;
  var os = Object.prototype,
    as = os.hasOwnProperty;
  function is(t) {
    if (!Re(t)) return ns(t);
    var e = [];
    for (var r in Object(t)) as.call(t, r) && r != 'constructor' && e.push(r);
    return e;
  }
  function ue(t) {
    return ce(t) ? rn(t) : is(t);
  }
  function ss(t) {
    var e = [];
    if (t != null) for (var r in Object(t)) e.push(r);
    return e;
  }
  var cs = Object.prototype,
    us = cs.hasOwnProperty;
  function ls(t) {
    if (!V(t)) return ss(t);
    var e = Re(t),
      r = [];
    for (var n in t) (n == 'constructor' && (e || !us.call(t, n))) || r.push(n);
    return r;
  }
  function Ht(t) {
    return ce(t) ? rn(t, !0) : ls(t);
  }
  var fs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    ds = /^\w*$/;
  function Be(t, e) {
    if (P(t)) return !1;
    var r = typeof t;
    return r == 'number' || r == 'symbol' || r == 'boolean' || t == null || Ee(t)
      ? !0
      : ds.test(t) || !fs.test(t) || (e != null && t in Object(e));
  }
  var ps = dt(Object, 'create');
  const Vt = ps;
  function hs() {
    (this.__data__ = Vt ? Vt(null) : {}), (this.size = 0);
  }
  function vs(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var ms = '__lodash_hash_undefined__',
    ys = Object.prototype,
    gs = ys.hasOwnProperty;
  function bs(t) {
    var e = this.__data__;
    if (Vt) {
      var r = e[t];
      return r === ms ? void 0 : r;
    }
    return gs.call(e, t) ? e[t] : void 0;
  }
  var _s = Object.prototype,
    js = _s.hasOwnProperty;
  function Ss(t) {
    var e = this.__data__;
    return Vt ? e[t] !== void 0 : js.call(e, t);
  }
  var Os = '__lodash_hash_undefined__';
  function Cs(t, e) {
    var r = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (r[t] = Vt && e === void 0 ? Os : e), this;
  }
  function pt(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (pt.prototype.clear = hs),
    (pt.prototype.delete = vs),
    (pt.prototype.get = bs),
    (pt.prototype.has = Ss),
    (pt.prototype.set = Cs);
  function ws() {
    (this.__data__ = []), (this.size = 0);
  }
  function le(t, e) {
    for (var r = t.length; r--; ) if (Ut(t[r][0], e)) return r;
    return -1;
  }
  var Es = Array.prototype,
    Ns = Es.splice;
  function $s(t) {
    var e = this.__data__,
      r = le(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : Ns.call(e, r, 1), --this.size, !0;
  }
  function Ts(t) {
    var e = this.__data__,
      r = le(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function As(t) {
    return le(this.__data__, t) > -1;
  }
  function Ms(t, e) {
    var r = this.__data__,
      n = le(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
  }
  function et(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (et.prototype.clear = ws),
    (et.prototype.delete = $s),
    (et.prototype.get = Ts),
    (et.prototype.has = As),
    (et.prototype.set = Ms);
  var Ps = dt(Y, 'Map');
  const Wt = Ps;
  function xs() {
    (this.size = 0), (this.__data__ = { hash: new pt(), map: new (Wt || et)(), string: new pt() });
  }
  function Ds(t) {
    var e = typeof t;
    return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? t !== '__proto__' : t === null;
  }
  function fe(t, e) {
    var r = t.__data__;
    return Ds(e) ? r[typeof e === 'string' ? 'string' : 'hash'] : r.map;
  }
  function Rs(t) {
    var e = fe(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function Is(t) {
    return fe(this, t).get(t);
  }
  function Ls(t) {
    return fe(this, t).has(t);
  }
  function Fs(t, e) {
    var r = fe(this, t),
      n = r.size;
    return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
  }
  function rt(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (rt.prototype.clear = xs),
    (rt.prototype.delete = Rs),
    (rt.prototype.get = Is),
    (rt.prototype.has = Ls),
    (rt.prototype.set = Fs);
  var Bs = 'Expected a function';
  function Ue(t, e) {
    if (typeof t !== 'function' || (e != null && typeof e !== 'function')) throw new TypeError(Bs);
    var r = function () {
      var n = arguments,
        o = e ? e.apply(this, n) : n[0],
        a = r.cache;
      if (a.has(o)) return a.get(o);
      var s = t.apply(this, n);
      return (r.cache = a.set(o, s) || a), s;
    };
    return (r.cache = new (Ue.Cache || rt)()), r;
  }
  Ue.Cache = rt;
  var Us = 500;
  function ks(t) {
    var e = Ue(t, function (n) {
        return r.size === Us && r.clear(), n;
      }),
      r = e.cache;
    return e;
  }
  var zs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Gs = /\\(\\)?/g,
    Hs = ks(function (t) {
      var e = [];
      return (
        t.charCodeAt(0) === 46 && e.push(''),
        t.replace(zs, function (r, n, o, a) {
          e.push(o ? a.replace(Gs, '$1') : n || r);
        }),
        e
      );
    });
  const Vs = Hs;
  function Ws(t) {
    return t == null ? '' : kr(t);
  }
  function jt(t, e) {
    return P(t) ? t : Be(t, e) ? [t] : Vs(Ws(t));
  }
  var Js = 1 / 0;
  function St(t) {
    if (typeof t === 'string' || Ee(t)) return t;
    var e = t + '';
    return e == '0' && 1 / t == -Js ? '-0' : e;
  }
  function de(t, e) {
    e = jt(e, t);
    for (var r = 0, n = e.length; t != null && r < n; ) t = t[St(e[r++])];
    return r && r == n ? t : void 0;
  }
  function on(t, e, r) {
    var n = t == null ? void 0 : de(t, e);
    return n === void 0 ? r : n;
  }
  function ke(t, e) {
    for (var r = -1, n = e.length, o = t.length; ++r < n; ) t[o + r] = e[r];
    return t;
  }
  var an = G ? G.isConcatSpreadable : void 0;
  function qs(t) {
    return P(t) || kt(t) || !!(an && t && t[an]);
  }
  function ze(t, e, r, n, o) {
    var a = -1,
      s = t.length;
    for (r || (r = qs), o || (o = []); ++a < s; ) {
      var i = t[a];
      e > 0 && r(i) ? (e > 1 ? ze(i, e - 1, r, n, o) : ke(o, i)) : n || (o[o.length] = i);
    }
    return o;
  }
  function Qs(t) {
    var e = t == null ? 0 : t.length;
    return e ? ze(t, 1) : [];
  }
  function Ys(t) {
    return Vr(Jr(t, void 0, Qs), t + '');
  }
  var Xs = nn(Object.getPrototypeOf, Object);
  const Ge = Xs;
  var Ks = '[object Object]',
    Zs = Function.prototype,
    tc = Object.prototype,
    sn = Zs.toString,
    ec = tc.hasOwnProperty,
    rc = sn.call(Object);
  function U(t) {
    if (!X(t) || lt(t) != Ks) return !1;
    var e = Ge(t);
    if (e === null) return !0;
    var r = ec.call(e, 'constructor') && e.constructor;
    return typeof r === 'function' && r instanceof r && sn.call(r) == rc;
  }
  function nc(t, e, r) {
    var n = -1,
      o = t.length;
    e < 0 && (e = -e > o ? 0 : o + e),
      (r = r > o ? o : r),
      r < 0 && (r += o),
      (o = e > r ? 0 : (r - e) >>> 0),
      (e >>>= 0);
    for (var a = Array(o); ++n < o; ) a[n] = t[n + e];
    return a;
  }
  function oc() {
    (this.__data__ = new et()), (this.size = 0);
  }
  function ac(t) {
    var e = this.__data__,
      r = e.delete(t);
    return (this.size = e.size), r;
  }
  function ic(t) {
    return this.__data__.get(t);
  }
  function sc(t) {
    return this.__data__.has(t);
  }
  var cc = 200;
  function uc(t, e) {
    var r = this.__data__;
    if (r instanceof et) {
      var n = r.__data__;
      if (!Wt || n.length < cc - 1) return n.push([t, e]), (this.size = ++r.size), this;
      r = this.__data__ = new rt(n);
    }
    return r.set(t, e), (this.size = r.size), this;
  }
  function W(t) {
    var e = (this.__data__ = new et(t));
    this.size = e.size;
  }
  (W.prototype.clear = oc),
    (W.prototype.delete = ac),
    (W.prototype.get = ic),
    (W.prototype.has = sc),
    (W.prototype.set = uc);
  function lc(t, e) {
    return t && bt(e, ue(e), t);
  }
  function fc(t, e) {
    return t && bt(e, Ht(e), t);
  }
  var cn = typeof b === 'object' && b && !b.nodeType && b,
    un = cn && typeof module === 'object' && module && !module.nodeType && module,
    dc = un && un.exports === cn,
    ln = dc ? Y.Buffer : void 0,
    fn = ln ? ln.allocUnsafe : void 0;
  function dn(t, e) {
    if (e) return t.slice();
    var r = t.length,
      n = fn ? fn(r) : new t.constructor(r);
    return t.copy(n), n;
  }
  function pc(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length, o = 0, a = []; ++r < n; ) {
      var s = t[r];
      e(s, r, t) && (a[o++] = s);
    }
    return a;
  }
  function pn() {
    return [];
  }
  var hc = Object.prototype,
    vc = hc.propertyIsEnumerable,
    hn = Object.getOwnPropertySymbols,
    mc = hn
      ? function (t) {
          return t == null
            ? []
            : ((t = Object(t)),
              pc(hn(t), function (e) {
                return vc.call(t, e);
              }));
        }
      : pn;
  const He = mc;
  function yc(t, e) {
    return bt(t, He(t), e);
  }
  var gc = Object.getOwnPropertySymbols,
    bc = gc
      ? function (t) {
          for (var e = []; t; ) ke(e, He(t)), (t = Ge(t));
          return e;
        }
      : pn;
  const vn = bc;
  function _c(t, e) {
    return bt(t, vn(t), e);
  }
  function mn(t, e, r) {
    var n = e(t);
    return P(t) ? n : ke(n, r(t));
  }
  function Ve(t) {
    return mn(t, ue, He);
  }
  function We(t) {
    return mn(t, Ht, vn);
  }
  var jc = dt(Y, 'DataView');
  const Je = jc;
  var Sc = dt(Y, 'Promise');
  const qe = Sc;
  var Oc = dt(Y, 'Set');
  const Ot = Oc;
  var yn = '[object Map]',
    Cc = '[object Object]',
    gn = '[object Promise]',
    bn = '[object Set]',
    _n = '[object WeakMap]',
    jn = '[object DataView]',
    wc = ft(Je),
    Ec = ft(Wt),
    Nc = ft(qe),
    $c = ft(Ot),
    Tc = ft(Me),
    ht = lt;
  ((Je && ht(new Je(new ArrayBuffer(1))) != jn) ||
    (Wt && ht(new Wt()) != yn) ||
    (qe && ht(qe.resolve()) != gn) ||
    (Ot && ht(new Ot()) != bn) ||
    (Me && ht(new Me()) != _n)) &&
    (ht = function (t) {
      var e = lt(t),
        r = e == Cc ? t.constructor : void 0,
        n = r ? ft(r) : '';
      if (n)
        switch (n) {
          case wc:
            return jn;
          case Ec:
            return yn;
          case Nc:
            return gn;
          case $c:
            return bn;
          case Tc:
            return _n;
        }
      return e;
    });
  const Jt = ht;
  var Ac = Object.prototype,
    Mc = Ac.hasOwnProperty;
  function Pc(t) {
    var e = t.length,
      r = new t.constructor(e);
    return e && typeof t[0] === 'string' && Mc.call(t, 'index') && ((r.index = t.index), (r.input = t.input)), r;
  }
  var xc = Y.Uint8Array;
  const pe = xc;
  function Qe(t) {
    var e = new t.constructor(t.byteLength);
    return new pe(e).set(new pe(t)), e;
  }
  function Dc(t, e) {
    var r = e ? Qe(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.byteLength);
  }
  var Rc = /\w*$/;
  function Ic(t) {
    var e = new t.constructor(t.source, Rc.exec(t));
    return (e.lastIndex = t.lastIndex), e;
  }
  var Sn = G ? G.prototype : void 0,
    On = Sn ? Sn.valueOf : void 0;
  function Lc(t) {
    return On ? Object(On.call(t)) : {};
  }
  function Cn(t, e) {
    var r = e ? Qe(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length);
  }
  var Fc = '[object Boolean]',
    Bc = '[object Date]',
    Uc = '[object Map]',
    kc = '[object Number]',
    zc = '[object RegExp]',
    Gc = '[object Set]',
    Hc = '[object String]',
    Vc = '[object Symbol]',
    Wc = '[object ArrayBuffer]',
    Jc = '[object DataView]',
    qc = '[object Float32Array]',
    Qc = '[object Float64Array]',
    Yc = '[object Int8Array]',
    Xc = '[object Int16Array]',
    Kc = '[object Int32Array]',
    Zc = '[object Uint8Array]',
    tu = '[object Uint8ClampedArray]',
    eu = '[object Uint16Array]',
    ru = '[object Uint32Array]';
  function nu(t, e, r) {
    var n = t.constructor;
    switch (e) {
      case Wc:
        return Qe(t);
      case Fc:
      case Bc:
        return new n(+t);
      case Jc:
        return Dc(t, r);
      case qc:
      case Qc:
      case Yc:
      case Xc:
      case Kc:
      case Zc:
      case tu:
      case eu:
      case ru:
        return Cn(t, r);
      case Uc:
        return new n();
      case kc:
      case Hc:
        return new n(t);
      case zc:
        return Ic(t);
      case Gc:
        return new n();
      case Vc:
        return Lc(t);
    }
  }
  function wn(t) {
    return typeof t.constructor === 'function' && !Re(t) ? Wa(Ge(t)) : {};
  }
  var ou = '[object Map]';
  function au(t) {
    return X(t) && Jt(t) == ou;
  }
  var En = _t && _t.isMap,
    iu = En ? Ie(En) : au;
  const su = iu;
  var cu = '[object Set]';
  function uu(t) {
    return X(t) && Jt(t) == cu;
  }
  var Nn = _t && _t.isSet,
    lu = Nn ? Ie(Nn) : uu;
  const fu = lu;
  var du = 1,
    pu = 2,
    hu = 4,
    $n = '[object Arguments]',
    vu = '[object Array]',
    mu = '[object Boolean]',
    yu = '[object Date]',
    gu = '[object Error]',
    Tn = '[object Function]',
    bu = '[object GeneratorFunction]',
    _u = '[object Map]',
    ju = '[object Number]',
    An = '[object Object]',
    Su = '[object RegExp]',
    Ou = '[object Set]',
    Cu = '[object String]',
    wu = '[object Symbol]',
    Eu = '[object WeakMap]',
    Nu = '[object ArrayBuffer]',
    $u = '[object DataView]',
    Tu = '[object Float32Array]',
    Au = '[object Float64Array]',
    Mu = '[object Int8Array]',
    Pu = '[object Int16Array]',
    xu = '[object Int32Array]',
    Du = '[object Uint8Array]',
    Ru = '[object Uint8ClampedArray]',
    Iu = '[object Uint16Array]',
    Lu = '[object Uint32Array]',
    E = {};
  (E[$n] =
    E[vu] =
    E[Nu] =
    E[$u] =
    E[mu] =
    E[yu] =
    E[Tu] =
    E[Au] =
    E[Mu] =
    E[Pu] =
    E[xu] =
    E[_u] =
    E[ju] =
    E[An] =
    E[Su] =
    E[Ou] =
    E[Cu] =
    E[wu] =
    E[Du] =
    E[Ru] =
    E[Iu] =
    E[Lu] =
      !0),
    (E[gu] = E[Tn] = E[Eu] = !1);
  function qt(t, e, r, n, o, a) {
    var s,
      i = e & du,
      c = e & pu,
      u = e & hu;
    if ((r && (s = o ? r(t, n, o, a) : r(t)), s !== void 0)) return s;
    if (!V(t)) return t;
    var l = P(t);
    if (l) {
      if (((s = Pc(t)), !i)) return Hr(t, s);
    } else {
      var d = Jt(t),
        f = d == Tn || d == bu;
      if (zt(t)) return dn(t, i);
      if (d == An || d == $n || (f && !o)) {
        if (((s = c || f ? {} : wn(t)), !i)) return c ? _c(t, fc(s, t)) : yc(t, lc(s, t));
      } else {
        if (!E[d]) return o ? t : {};
        s = nu(t, d, i);
      }
    }
    a || (a = new W());
    var p = a.get(t);
    if (p) return p;
    a.set(t, s),
      fu(t)
        ? t.forEach(function (_) {
            s.add(qt(_, e, r, _, t, a));
          })
        : su(t) &&
          t.forEach(function (_, S) {
            s.set(S, qt(_, e, r, S, t, a));
          });
    var h = u ? (c ? We : Ve) : c ? Ht : ue,
      y = l ? void 0 : h(t);
    return (
      ni(y || t, function (_, S) {
        y && ((S = _), (_ = t[S])), xe(s, S, qt(_, e, r, S, t, a));
      }),
      s
    );
  }
  var Fu = 1,
    Bu = 4;
  function Mn(t) {
    return qt(t, Fu | Bu);
  }
  var Uu = '__lodash_hash_undefined__';
  function ku(t) {
    return this.__data__.set(t, Uu), this;
  }
  function zu(t) {
    return this.__data__.has(t);
  }
  function Qt(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.__data__ = new rt(); ++e < r; ) this.add(t[e]);
  }
  (Qt.prototype.add = Qt.prototype.push = ku), (Qt.prototype.has = zu);
  function Gu(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length; ++r < n; ) if (e(t[r], r, t)) return !0;
    return !1;
  }
  function Pn(t, e) {
    return t.has(e);
  }
  var Hu = 1,
    Vu = 2;
  function xn(t, e, r, n, o, a) {
    var s = r & Hu,
      i = t.length,
      c = e.length;
    if (i != c && !(s && c > i)) return !1;
    var u = a.get(t),
      l = a.get(e);
    if (u && l) return u == e && l == t;
    var d = -1,
      f = !0,
      p = r & Vu ? new Qt() : void 0;
    for (a.set(t, e), a.set(e, t); ++d < i; ) {
      var h = t[d],
        y = e[d];
      if (n) var _ = s ? n(y, h, d, e, t, a) : n(h, y, d, t, e, a);
      if (_ !== void 0) {
        if (_) continue;
        f = !1;
        break;
      }
      if (p) {
        if (
          !Gu(e, function (S, w) {
            if (!Pn(p, w) && (h === S || o(h, S, r, n, a))) return p.push(w);
          })
        ) {
          f = !1;
          break;
        }
      } else if (!(h === y || o(h, y, r, n, a))) {
        f = !1;
        break;
      }
    }
    return a.delete(t), a.delete(e), f;
  }
  function Wu(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n, o) {
        r[++e] = [o, n];
      }),
      r
    );
  }
  function Ye(t) {
    var e = -1,
      r = Array(t.size);
    return (
      t.forEach(function (n) {
        r[++e] = n;
      }),
      r
    );
  }
  var Ju = 1,
    qu = 2,
    Qu = '[object Boolean]',
    Yu = '[object Date]',
    Xu = '[object Error]',
    Ku = '[object Map]',
    Zu = '[object Number]',
    tl = '[object RegExp]',
    el = '[object Set]',
    rl = '[object String]',
    nl = '[object Symbol]',
    ol = '[object ArrayBuffer]',
    al = '[object DataView]',
    Dn = G ? G.prototype : void 0,
    Xe = Dn ? Dn.valueOf : void 0;
  function il(t, e, r, n, o, a, s) {
    switch (r) {
      case al:
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
        (t = t.buffer), (e = e.buffer);
      case ol:
        return !(t.byteLength != e.byteLength || !a(new pe(t), new pe(e)));
      case Qu:
      case Yu:
      case Zu:
        return Ut(+t, +e);
      case Xu:
        return t.name == e.name && t.message == e.message;
      case tl:
      case rl:
        return t == e + '';
      case Ku:
        var i = Wu;
      case el:
        var c = n & Ju;
        if ((i || (i = Ye), t.size != e.size && !c)) return !1;
        var u = s.get(t);
        if (u) return u == e;
        (n |= qu), s.set(t, e);
        var l = xn(i(t), i(e), n, o, a, s);
        return s.delete(t), l;
      case nl:
        if (Xe) return Xe.call(t) == Xe.call(e);
    }
    return !1;
  }
  var sl = 1,
    cl = Object.prototype,
    ul = cl.hasOwnProperty;
  function ll(t, e, r, n, o, a) {
    var s = r & sl,
      i = Ve(t),
      c = i.length,
      u = Ve(e),
      l = u.length;
    if (c != l && !s) return !1;
    for (var d = c; d--; ) {
      var f = i[d];
      if (!(s ? f in e : ul.call(e, f))) return !1;
    }
    var p = a.get(t),
      h = a.get(e);
    if (p && h) return p == e && h == t;
    var y = !0;
    a.set(t, e), a.set(e, t);
    for (var _ = s; ++d < c; ) {
      f = i[d];
      var S = t[f],
        w = e[f];
      if (n) var I = s ? n(w, S, f, e, t, a) : n(S, w, f, t, e, a);
      if (!(I === void 0 ? S === w || o(S, w, r, n, a) : I)) {
        y = !1;
        break;
      }
      _ || (_ = f == 'constructor');
    }
    if (y && !_) {
      var M = t.constructor,
        L = e.constructor;
      M != L &&
        'constructor' in t &&
        'constructor' in e &&
        !(typeof M === 'function' && M instanceof M && typeof L === 'function' && L instanceof L) &&
        (y = !1);
    }
    return a.delete(t), a.delete(e), y;
  }
  var fl = 1,
    Rn = '[object Arguments]',
    In = '[object Array]',
    he = '[object Object]',
    dl = Object.prototype,
    Ln = dl.hasOwnProperty;
  function pl(t, e, r, n, o, a) {
    var s = P(t),
      i = P(e),
      c = s ? In : Jt(t),
      u = i ? In : Jt(e);
    (c = c == Rn ? he : c), (u = u == Rn ? he : u);
    var l = c == he,
      d = u == he,
      f = c == u;
    if (f && zt(t)) {
      if (!zt(e)) return !1;
      (s = !0), (l = !1);
    }
    if (f && !l) return a || (a = new W()), s || Fe(t) ? xn(t, e, r, n, o, a) : il(t, e, c, r, n, o, a);
    if (!(r & fl)) {
      var p = l && Ln.call(t, '__wrapped__'),
        h = d && Ln.call(e, '__wrapped__');
      if (p || h) {
        var y = p ? t.value() : t,
          _ = h ? e.value() : e;
        return a || (a = new W()), o(y, _, r, n, a);
      }
    }
    return f ? (a || (a = new W()), ll(t, e, r, n, o, a)) : !1;
  }
  function Ke(t, e, r, n, o) {
    return t === e ? !0 : t == null || e == null || (!X(t) && !X(e)) ? t !== t && e !== e : pl(t, e, r, n, Ke, o);
  }
  var hl = 1,
    vl = 2;
  function ml(t, e, r, n) {
    var o = r.length,
      a = o,
      s = !n;
    if (t == null) return !a;
    for (t = Object(t); o--; ) {
      var i = r[o];
      if (s && i[2] ? i[1] !== t[i[0]] : !(i[0] in t)) return !1;
    }
    for (; ++o < a; ) {
      i = r[o];
      var c = i[0],
        u = t[c],
        l = i[1];
      if (s && i[2]) {
        if (u === void 0 && !(c in t)) return !1;
      } else {
        var d = new W();
        if (n) var f = n(u, l, c, t, e, d);
        if (!(f === void 0 ? Ke(l, u, hl | vl, n, d) : f)) return !1;
      }
    }
    return !0;
  }
  function Fn(t) {
    return t === t && !V(t);
  }
  function yl(t) {
    for (var e = ue(t), r = e.length; r--; ) {
      var n = e[r],
        o = t[n];
      e[r] = [n, o, Fn(o)];
    }
    return e;
  }
  function Bn(t, e) {
    return function (r) {
      return r == null ? !1 : r[t] === e && (e !== void 0 || t in Object(r));
    };
  }
  function gl(t) {
    var e = yl(t);
    return e.length == 1 && e[0][2]
      ? Bn(e[0][0], e[0][1])
      : function (r) {
          return r === t || ml(r, t, e);
        };
  }
  function bl(t, e) {
    return t != null && e in Object(t);
  }
  function _l(t, e, r) {
    e = jt(e, t);
    for (var n = -1, o = e.length, a = !1; ++n < o; ) {
      var s = St(e[n]);
      if (!(a = t != null && r(t, s))) break;
      t = t[s];
    }
    return a || ++n != o ? a : ((o = t == null ? 0 : t.length), !!o && De(o) && se(s, o) && (P(t) || kt(t)));
  }
  function jl(t, e) {
    return t != null && _l(t, e, bl);
  }
  var Sl = 1,
    Ol = 2;
  function Cl(t, e) {
    return Be(t) && Fn(e)
      ? Bn(St(t), e)
      : function (r) {
          var n = on(r, t);
          return n === void 0 && n === e ? jl(r, t) : Ke(e, n, Sl | Ol);
        };
  }
  function wl(t) {
    return function (e) {
      return e == null ? void 0 : e[t];
    };
  }
  function El(t) {
    return function (e) {
      return de(e, t);
    };
  }
  function Nl(t) {
    return Be(t) ? wl(St(t)) : El(t);
  }
  function Ze(t) {
    return typeof t === 'function'
      ? t
      : t == null
      ? $e
      : typeof t === 'object'
      ? P(t)
        ? Cl(t[0], t[1])
        : gl(t)
      : Nl(t);
  }
  function $l(t) {
    return function (e, r, n) {
      for (var o = -1, a = Object(e), s = n(e), i = s.length; i--; ) {
        var c = s[t ? i : ++o];
        if (r(a[c], c, a) === !1) break;
      }
      return e;
    };
  }
  var Tl = $l();
  const Al = Tl;
  function tr(t, e, r) {
    ((r !== void 0 && !Ut(t[e], r)) || (r === void 0 && !(e in t))) && Pe(t, e, r);
  }
  function er(t) {
    return X(t) && ce(t);
  }
  function rr(t, e) {
    if (!(e === 'constructor' && typeof t[e] === 'function') && e != '__proto__') return t[e];
  }
  function Ml(t) {
    return bt(t, Ht(t));
  }
  function Pl(t, e, r, n, o, a, s) {
    var i = rr(t, r),
      c = rr(e, r),
      u = s.get(c);
    if (u) {
      tr(t, r, u);
      return;
    }
    var l = a ? a(i, c, r + '', t, e, s) : void 0,
      d = l === void 0;
    if (d) {
      var f = P(c),
        p = !f && zt(c),
        h = !f && !p && Fe(c);
      (l = c),
        f || p || h
          ? P(i)
            ? (l = i)
            : er(i)
            ? (l = Hr(i))
            : p
            ? ((d = !1), (l = dn(c, !0)))
            : h
            ? ((d = !1), (l = Cn(c, !0)))
            : (l = [])
          : U(c) || kt(c)
          ? ((l = i), kt(i) ? (l = Ml(i)) : (!V(i) || Te(i)) && (l = wn(c)))
          : (d = !1);
    }
    d && (s.set(c, l), o(l, c, n, a, s), s.delete(c)), tr(t, r, l);
  }
  function Un(t, e, r, n, o) {
    t !== e &&
      Al(
        e,
        function (a, s) {
          if ((o || (o = new W()), V(a))) Pl(t, e, s, r, Un, n, o);
          else {
            var i = n ? n(rr(t, s), a, s + '', t, e, o) : void 0;
            i === void 0 && (i = a), tr(t, s, i);
          }
        },
        Ht
      );
  }
  function xl(t, e, r) {
    for (var n = -1, o = t == null ? 0 : t.length; ++n < o; ) if (r(e, t[n])) return !0;
    return !1;
  }
  function kn(t) {
    var e = t == null ? 0 : t.length;
    return e ? t[e - 1] : void 0;
  }
  function Dl(t, e) {
    return e.length < 2 ? t : de(t, nc(e, 0, -1));
  }
  var Rl = vi(function (t, e, r) {
    Un(t, e, r);
  });
  const zn = Rl;
  var Il = 'Expected a function';
  function Ll(t) {
    if (typeof t !== 'function') throw new TypeError(Il);
    return function () {
      var e = arguments;
      switch (e.length) {
        case 0:
          return !t.call(this);
        case 1:
          return !t.call(this, e[0]);
        case 2:
          return !t.call(this, e[0], e[1]);
        case 3:
          return !t.call(this, e[0], e[1], e[2]);
      }
      return !t.apply(this, e);
    };
  }
  function Fl(t, e) {
    return (e = jt(e, t)), (t = Dl(t, e)), t == null || delete t[St(kn(e))];
  }
  function Bl(t) {
    return U(t) ? void 0 : t;
  }
  var Ul = 1,
    kl = 2,
    zl = 4,
    Gl = Ys(function (t, e) {
      var r = {};
      if (t == null) return r;
      var n = !1;
      (e = Ne(e, function (a) {
        return (a = jt(a, t)), n || (n = a.length > 1), a;
      })),
        bt(t, We(t), r),
        n && (r = qt(r, Ul | kl | zl, Bl));
      for (var o = e.length; o--; ) Fl(r, e[o]);
      return r;
    });
  const Gn = Gl;
  function Hl(t, e, r, n) {
    if (!V(t)) return t;
    e = jt(e, t);
    for (var o = -1, a = e.length, s = a - 1, i = t; i != null && ++o < a; ) {
      var c = St(e[o]),
        u = r;
      if (c === '__proto__' || c === 'constructor' || c === 'prototype') return t;
      if (o != s) {
        var l = i[c];
        (u = n ? n(l, c, i) : void 0), u === void 0 && (u = V(l) ? l : se(e[o + 1]) ? [] : {});
      }
      xe(i, c, u), (i = i[c]);
    }
    return t;
  }
  function Vl(t, e, r) {
    for (var n = -1, o = e.length, a = {}; ++n < o; ) {
      var s = e[n],
        i = de(t, s);
      r(i, s) && Hl(a, jt(s, t), i);
    }
    return a;
  }
  function Wl(t, e) {
    if (t == null) return {};
    var r = Ne(We(t), function (n) {
      return [n];
    });
    return (
      (e = Ze(e)),
      Vl(t, r, function (n, o) {
        return e(n, o[0]);
      })
    );
  }
  function Jl(t, e) {
    return Wl(t, Ll(Ze(e)));
  }
  var ql = 1 / 0,
    Ql =
      Ot && 1 / Ye(new Ot([, -0]))[1] == ql
        ? function (t) {
            return new Ot(t);
          }
        : qa;
  const Yl = Ql;
  var Xl = 200;
  function Kl(t, e, r) {
    var n = -1,
      o = ci,
      a = t.length,
      s = !0,
      i = [],
      c = i;
    if (r) (s = !1), (o = xl);
    else if (a >= Xl) {
      var u = e ? null : Yl(t);
      if (u) return Ye(u);
      (s = !1), (o = Pn), (c = new Qt());
    } else c = e ? [] : i;
    t: for (; ++n < a; ) {
      var l = t[n],
        d = e ? e(l) : l;
      if (((l = r || l !== 0 ? l : 0), s && d === d)) {
        for (var f = c.length; f--; ) if (c[f] === d) continue t;
        e && c.push(d), i.push(l);
      } else o(c, d, r) || (c !== i && c.push(d), i.push(l));
    }
    return i;
  }
  var Zl = qr(function (t) {
    var e = kn(t);
    return er(e) && (e = void 0), Kl(ze(t, 1, er, !0), Ze(e));
  });
  const tf = Zl;
  class Hn extends TypeError {
    constructor(e, r) {
      let n;
      const { message: o, ...a } = e,
        { path: s } = e,
        i = s.length === 0 ? o : `At path: ${s.join('.')} -- ${o}`;
      super(i),
        (this.value = void 0),
        (this.key = void 0),
        (this.type = void 0),
        (this.refinement = void 0),
        (this.path = void 0),
        (this.branch = void 0),
        (this.failures = void 0),
        Object.assign(this, a),
        (this.name = this.constructor.name),
        (this.failures = () => (n != null ? n : (n = [e, ...r()])));
    }
  }
  function ef(t) {
    return J(t) && typeof t[Symbol.iterator] === 'function';
  }
  function J(t) {
    return typeof t === 'object' && t != null;
  }
  function z(t) {
    return typeof t === 'symbol' ? t.toString() : typeof t === 'string' ? JSON.stringify(t) : `${t}`;
  }
  function rf(t) {
    const { done: e, value: r } = t.next();
    return e ? void 0 : r;
  }
  function nf(t, e, r, n) {
    if (t === !0) return;
    t === !1 ? (t = {}) : typeof t === 'string' && (t = { message: t });
    const { path: o, branch: a } = e,
      { type: s } = r,
      {
        refinement: i,
        message: c = `Expected a value of type \`${s}\`${i ? ` with refinement \`${i}\`` : ''}, but received: \`${z(
          n
        )}\``,
      } = t;
    return { value: n, type: s, refinement: i, key: o[o.length - 1], path: o, branch: a, ...t, message: c };
  }
  function* Vn(t, e, r, n) {
    ef(t) || (t = [t]);
    for (const o of t) {
      const a = nf(o, e, r, n);
      a && (yield a);
    }
  }
  function* nr(t, e, r) {
    r === void 0 && (r = {});
    const { path: n = [], branch: o = [t], coerce: a = !1, mask: s = !1 } = r,
      i = { path: n, branch: o };
    if (a && ((t = e.coercer(t, i)), s && e.type !== 'type' && J(e.schema) && J(t) && !Array.isArray(t)))
      for (const u in t) e.schema[u] === void 0 && delete t[u];
    let c = 'valid';
    for (const u of e.validator(t, i)) (c = 'not_valid'), yield [u, void 0];
    for (let [u, l, d] of e.entries(t, i)) {
      const f = nr(l, d, {
        path: u === void 0 ? n : [...n, u],
        branch: u === void 0 ? o : [...o, l],
        coerce: a,
        mask: s,
      });
      for (const p of f)
        p[0]
          ? ((c = p[0].refinement != null ? 'not_refined' : 'not_valid'), yield [p[0], void 0])
          : a &&
            ((l = p[1]),
            u === void 0
              ? (t = l)
              : t instanceof Map
              ? t.set(u, l)
              : t instanceof Set
              ? t.add(l)
              : J(t) && (l !== void 0 || u in t) && (t[u] = l));
    }
    if (c !== 'not_valid') for (const u of e.refiner(t, i)) (c = 'not_refined'), yield [u, void 0];
    c === 'valid' && (yield [void 0, t]);
  }
  class K {
    constructor(e) {
      (this.TYPE = void 0),
        (this.type = void 0),
        (this.schema = void 0),
        (this.coercer = void 0),
        (this.validator = void 0),
        (this.refiner = void 0),
        (this.entries = void 0);
      const { type: r, schema: n, validator: o, refiner: a, coercer: s = (c) => c, entries: i = function* () {} } = e;
      (this.type = r),
        (this.schema = n),
        (this.entries = i),
        (this.coercer = s),
        o
          ? (this.validator = (c, u) => {
              const l = o(c, u);
              return Vn(l, u, this, c);
            })
          : (this.validator = () => []),
        a
          ? (this.refiner = (c, u) => {
              const l = a(c, u);
              return Vn(l, u, this, c);
            })
          : (this.refiner = () => []);
    }
    assert(e) {
      return Wn(e, this);
    }
    create(e) {
      return of(e, this);
    }
    is(e) {
      return sf(e, this);
    }
    mask(e) {
      return af(e, this);
    }
    validate(e, r) {
      return r === void 0 && (r = {}), Ct(e, this, r);
    }
  }
  function Wn(t, e) {
    const r = Ct(t, e);
    if (r[0]) throw r[0];
  }
  function of(t, e) {
    const r = Ct(t, e, { coerce: !0 });
    if (r[0]) throw r[0];
    return r[1];
  }
  function af(t, e) {
    const r = Ct(t, e, { coerce: !0, mask: !0 });
    if (r[0]) throw r[0];
    return r[1];
  }
  function sf(t, e) {
    return !Ct(t, e)[0];
  }
  function Ct(t, e, r) {
    r === void 0 && (r = {});
    const n = nr(t, e, r),
      o = rf(n);
    return o[0]
      ? [
          new Hn(o[0], function* () {
            for (const a of n) a[0] && (yield a[0]);
          }),
          void 0,
        ]
      : [void 0, o[1]];
  }
  function or() {
    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
    const n = e[0].type === 'type',
      o = e.map((s) => s.schema),
      a = Object.assign({}, ...o);
    return n ? Yn(a) : C(a);
  }
  function st(t, e) {
    return new K({ type: t, schema: null, validator: e });
  }
  function wt(t) {
    return new K({
      type: 'dynamic',
      schema: null,
      *entries(e, r) {
        yield* t(e, r).entries(e, r);
      },
      validator(e, r) {
        return t(e, r).validator(e, r);
      },
      coercer(e, r) {
        return t(e, r).coercer(e, r);
      },
      refiner(e, r) {
        return t(e, r).refiner(e, r);
      },
    });
  }
  function Jn(t, e) {
    const { schema: r } = t,
      n = { ...r };
    for (const o of e) delete n[o];
    switch (t.type) {
      case 'type':
        return Yn(n);
      default:
        return C(n);
    }
  }
  function R() {
    return st('any', () => !0);
  }
  function x(t) {
    return new K({
      type: 'array',
      schema: t,
      *entries(e) {
        if (t && Array.isArray(e)) for (const [r, n] of e.entries()) yield [r, n, t];
      },
      coercer(e) {
        return Array.isArray(e) ? e.slice() : e;
      },
      validator(e) {
        return Array.isArray(e) || `Expected an array value, but received: ${z(e)}`;
      },
    });
  }
  function nt() {
    return st('boolean', (t) => typeof t === 'boolean');
  }
  function ar(t) {
    const e = {},
      r = t.map((n) => z(n)).join();
    for (const n of t) e[n] = n;
    return new K({
      type: 'enums',
      schema: e,
      validator(n) {
        return t.includes(n) || `Expected one of \`${r}\`, but received: ${z(n)}`;
      },
    });
  }
  function qn() {
    return st('func', (t) => typeof t === 'function' || `Expected a function, but received: ${z(t)}`);
  }
  function k(t) {
    const e = z(t),
      r = typeof t;
    return new K({
      type: 'literal',
      schema: r === 'string' || r === 'number' || r === 'boolean' ? t : null,
      validator(n) {
        return n === t || `Expected the literal \`${e}\`, but received: ${z(n)}`;
      },
    });
  }
  function cf() {
    return st('never', () => !1);
  }
  function Qn() {
    return st('number', (t) => (typeof t === 'number' && !isNaN(t)) || `Expected a number, but received: ${z(t)}`);
  }
  function C(t) {
    const e = t ? Object.keys(t) : [],
      r = cf();
    return new K({
      type: 'object',
      schema: t || null,
      *entries(n) {
        if (t && J(n)) {
          const o = new Set(Object.keys(n));
          for (const a of e) o.delete(a), yield [a, n[a], t[a]];
          for (const a of o) yield [a, n[a], r];
        }
      },
      validator(n) {
        return J(n) || `Expected an object, but received: ${z(n)}`;
      },
      coercer(n) {
        return J(n) ? { ...n } : n;
      },
    });
  }
  function m(t) {
    return new K({
      ...t,
      validator: (e, r) => e === void 0 || t.validator(e, r),
      refiner: (e, r) => e === void 0 || t.refiner(e, r),
    });
  }
  function Yt(t, e) {
    return new K({
      type: 'record',
      schema: null,
      *entries(r) {
        if (J(r))
          for (const n in r) {
            const o = r[n];
            yield [n, n, t], yield [n, o, e];
          }
      },
      validator(r) {
        return J(r) || `Expected an object, but received: ${z(r)}`;
      },
    });
  }
  function v() {
    return st('string', (t) => typeof t === 'string' || `Expected a string, but received: ${z(t)}`);
  }
  function Yn(t) {
    const e = Object.keys(t);
    return new K({
      type: 'type',
      schema: t,
      *entries(r) {
        if (J(r)) for (const n of e) yield [n, r[n], t[n]];
      },
      validator(r) {
        return J(r) || `Expected an object, but received: ${z(r)}`;
      },
    });
  }
  function B(t) {
    const e = t.map((r) => r.type).join(' | ');
    return new K({
      type: 'union',
      schema: null,
      coercer(r, n) {
        return (
          t.find((o) => {
            const [a] = o.validate(r, { coerce: !0 });
            return !a;
          }) || uf()
        ).coercer(r, n);
      },
      validator(r, n) {
        const o = [];
        for (const a of t) {
          const [...s] = nr(r, a, n),
            [i] = s;
          if (i[0]) for (const [c] of s) c && o.push(c);
          else return [];
        }
        return [`Expected the value to satisfy a union of \`${e}\`, but received: ${z(r)}`, ...o];
      },
    });
  }
  function uf() {
    return st('unknown', () => !0);
  }
  const ir = C({ package: v(), version: v(), exportName: v(), destructuring: m(nt()), subName: m(v()), main: m(v()) }),
    lf = x(ir),
    ff = ['CBlock', 'CContainer', 'CImage', 'CCanvas', 'CVideo', 'CAudio', 'CText', 'CNativeTag'];
  var H = ((t) => ((t.SLOT = 'SLOT'), (t.FUNCTION = 'FUNCTION'), (t.EXPRESSION = 'EXPRESSION'), t))(H || {}),
    sr = ((t) => ((t.DESIGN = 'design'), (t.SAVE = 'save'), t))(sr || {}),
    cr = ((t) => ((t.FUNC = 'FUNC'), (t.COMP = 'COMP'), t))(cr || {});
  const df = () =>
      st('normalObj', (t) =>
        !U(t) || [H.SLOT, H.EXPRESSION, H.FUNCTION].includes(t == null ? void 0 : t.type)
          ? !1
          : (Ct(t, Yt(v(), ur)), !0)
      ),
    ur = B([
      v(),
      Qn(),
      nt(),
      C({ type: k(H.SLOT), renderType: ar([cr.FUNC, cr.COMP]), params: m(x(v())), value: wt(() => B([Et, x(Et)])) }),
      C({ type: k(H.EXPRESSION), value: v() }),
      C({ type: k(H.FUNCTION), value: v() }),
      df(),
      x(wt(() => ur)),
    ]),
    Xn = C({ type: k(H.EXPRESSION), value: v() }),
    Et = C({
      id: m(v()),
      title: m(v()),
      componentName: v(),
      props: m(Yt(v(), ur)),
      nodeName: m(v()),
      state: m(Yt(v(), R())),
      children: wt(() => m(x(B([v(), Et])))),
      configure: m(R()),
      css: m(R()),
      style: m(R()),
      classNames: m(x(R())),
      refId: m(v()),
      extra: m(Yt(R(), R())),
      condition: m(B([nt(), Xn])),
      tempDevConfig: m(R()),
      loop: m(
        C({
          open: nt(),
          data: B([x(R()), Xn]),
          args: m(x(v())),
          forName: m(v()),
          forIndex: m(v()),
          key: m(R()),
          name: m(v()),
        })
      ),
    }),
    ve = B([v(), C({ label: v(), tip: m(v()) })]),
    pf = C({ type: k('shape'), value: x(C({ name: v(), title: ve, valueType: wt(() => me) })) }),
    hf = C({ type: k('enums'), value: x(v()) });
  C({ type: k('array'), value: wt(() => me) });
  const vf = C({ type: k('array'), value: wt(() => x(me)) }),
    me = B([
      ar(['array', 'boolean', 'number', 'object', 'string']),
      ar(['component', 'expression', 'function']),
      pf,
      hf,
      vf,
    ]),
    mf = B([v(), C({ componentName: v(), props: m(R()), initialValue: m(R()), component: m(R()) })]),
    lr = C({
      name: v(),
      title: ve,
      valueType: me,
      description: m(v()),
      defaultValue: R(),
      setters: m(x(mf)),
      condition: m(qn()),
    }),
    yf = B([v(), qn()]);
  var fr = ((t) => ((t.SINGLE = 'single'), (t.GROUP = 'group'), t))(fr || {});
  B([v(), C({ name: v(), describe: m(v()), params: m(C({ name: v(), description: v() })), template: v() })]);
  const gf = C({
      id: m(v()),
      title: v(),
      snapshot: B([v(), R()]),
      snapshotText: m(v()),
      description: m(v()),
      tags: m(x(v())),
      groupName: m(v()),
      category: m(v()),
      schema: or(Jn(Et, ['id']), C({ componentName: m(v()) })),
    }),
    bf = C({
      componentName: v(),
      title: v(),
      screenshot: m(v()),
      icon: m(v()),
      tags: m(x(v())),
      groupName: m(v()),
      category: m(v()),
      priority: m(Qn()),
      npm: m(ir),
      snippets: x(gf),
      props: x(
        B([
          lr,
          C({ title: m(ve), type: k('single'), content: lr }),
          C({ title: m(ve), type: k('group'), content: x(lr) }),
        ])
      ),
      fixedProps: m(R()),
      isContainer: m(B([nt(), C({ placeholder: v(), width: v(), height: v() })])),
      isModal: m(B([nt(), C({ visibleKey: v() })])),
      isSupportStyle: m(nt()),
      isSupportDispatchNativeEvent: m(nt()),
      isLayout: m(nt()),
      rootSelector: m(v()),
      selectionToolBars: m(x(yf)),
      extra: m(Yt(R(), R())),
    }),
    _f =
      (t) =>
      ({ data: e, message: r, throwError: n }) => {
        const o = t({ data: e, message: r, throwError: n });
        if (o.isValidate) return o;
        if (n)
          throw o.message || r
            ? new Error(`${o.message || r}
 originData: ${JSON.stringify(e)}`)
            : new Error(`${JSON.stringify(e)}
 data struct format is invalidate`);
        return o;
      },
    dr = (t) => {
      const { data: e, message: r, throwError: n, dataStruct: o } = t;
      return _f(({ data: a }) => {
        try {
          return Wn(a, o), { isValidate: !0 };
        } catch (s) {
          let i = s;
          return (
            s instanceof Hn &&
              (i = s.failures().map(
                (c) => `\u3010${c.path.join('.')}\u3011: ${c.message}
`
              )),
            { isValidate: !1, message: i, error: s }
          );
        }
      })({ data: e, message: r, throwError: n });
    };
  var Nt = ((t) => ((t.ROOT_CONTAINER = 'RootContainer'), t))(Nt || {});
  const jf = C({ type: k(H.FUNCTION), value: v() }),
    Sf = or(Jn(Et, ['componentName']), C({ componentName: k('RootContainer') }));
  function Of(t) {
    return {
      all: (t = t || new Map()),
      on: function (e, r) {
        var n = t.get(e);
        n ? n.push(r) : t.set(e, [r]);
      },
      off: function (e, r) {
        var n = t.get(e);
        n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : t.set(e, []));
      },
      emit: function (e, r) {
        var n = t.get(e);
        n &&
          n.slice().map(function (o) {
            o(r);
          }),
          (n = t.get('*')) &&
            n.slice().map(function (o) {
              o(e, r);
            });
      },
    };
  }
  const Xt = Of(),
    Cf = (t, e) => {
      const r = { ...t, value: [] },
        n = t.value;
      let o = new mt([]);
      return (
        e && (o = e.materialsMode || new mt([])),
        n &&
          (P(n)
            ? (r.value = n.map((a) => new A(a, { parent: e, materials: o })))
            : U(n) && r.value.push(new A(n, { parent: e, materials: o }))),
        r
      );
    };
  class $t {
    constructor(e, r) {
      j(this, 'nodeType', 'SLOT'),
        j(this, 'rawData'),
        j(this, 'parent'),
        j(this, 'emitter', Xt),
        j(this, 'data'),
        j(this, 'id'),
        j(this, 'materialsMode'),
        (this.parent = (r == null ? void 0 : r.parent) || null),
        (this.rawData = e);
      const n = (r == null ? void 0 : r.materials) || new mt([]);
      (this.materialsMode = n), (this.id = Z()), (this.data = Cf(e, this));
    }
    get value() {
      return this.data;
    }
    export(e) {
      const r = this.data,
        n = (o) => {
          if (o instanceof A) return o.export(e);
          if (U(o)) {
            const a = {};
            return (
              Object.keys(o || {}).forEach((s) => {
                a[s] = n(o[s]);
              }),
              a
            );
          }
          return P(o) ? o.map((a) => n(a)) : (e === 'design' && delete o.id, o);
        };
      return n(r);
    }
  }
  const Kn = (t) => {
      let e = [];
      return (
        t.forEach((r) => {
          const n = r;
          n.type
            ? n.type === fr.SINGLE
              ? e.push(n.content)
              : n.type === fr.GROUP && (e = [...e, ...Kn(n.content)])
            : e.push(r);
        }),
        e
      );
    },
    pr = (t, e, r) => {
      if (t.type) return t.type === H.SLOT ? new $t(t, { parent: e, materials: r }) : t;
      if (U(t)) {
        const n = {};
        return (
          Object.keys(t).forEach((o) => {
            n[o] = hr(t[o], e, r);
          }),
          n
        );
      } else return Array.isArray(t) ? t.map((n) => pr(n, e, r)) : t;
    },
    hr = (t, e, r) => (U(t) ? pr(t, e, r) : P(t) ? t.map((n) => pr(n, e, r)) : t);
  class ct {
    constructor(e, r, n) {
      j(this, 'nodeType', 'PROP'),
        j(this, 'rawData'),
        j(this, 'parent'),
        j(this, 'emitter', Xt),
        j(this, 'data'),
        j(this, 'name'),
        j(this, 'materialsMode');
      const o = (n == null ? void 0 : n.materials) || new mt([]);
      (this.materialsMode = o),
        (this.parent = n == null ? void 0 : n.parent),
        (this.rawData = r),
        (this.name = e),
        (this.data = hr(r, this, o));
    }
    isIncludeSlot() {
      return !1;
    }
    isIncludeExpression() {
      return !1;
    }
    get value() {
      return this.data;
    }
    updateValue(e) {
      const r = this.data;
      (this.data = hr(e != null ? e : r, this, this.materialsMode)),
        this.emitter.emit('onPropChange', { value: this.data, preValue: r, node: this }),
        this.parent &&
          !(this.parent instanceof $t) &&
          this.emitter.emit('onNodeChange', {
            value: this.parent.value,
            preValue: this.parent.value,
            node: this.parent,
          });
    }
    get material() {
      const e = this.parent;
      if (e instanceof A) {
        const r = e.material;
        return Kn((r == null ? void 0 : r.value.props) || []).find((n) => n.name === this.name);
      } else return null;
    }
    export(e) {
      const r = this.data,
        n = (o) => {
          if (o instanceof ct || o instanceof $t || o instanceof A) return o.export(e);
          if (P(o)) return o.map((a) => n(a));
          if (U(o)) {
            const a = {};
            return (
              Object.keys(o || {}).forEach((s) => {
                a[s] = n(o[s]);
              }),
              a
            );
          }
          return o;
        };
      return n(r);
    }
  }
  const wf = (t) => {
      if (typeof t === 'string') return !0;
      dr({ data: t, dataStruct: Et, throwError: !0 });
    },
    Zn = (t, e, r = new mt([])) => {
      var n;
      if (typeof t === 'string') return t;
      const o = {
          ...t,
          id: (n = t.id) != null ? n : Z(),
          children: [],
          props: {},
          configure: zn(t.configure || {}, { propsSetter: {}, advanceSetter: {} }),
        },
        a = Object.keys(t.props || {});
      return (
        a.length &&
          a.forEach((s) => {
            var i;
            const c = (i = t.props) == null ? void 0 : i[s];
            if (c instanceof ct) {
              o.props[s] = c;
              return;
            }
            o.props[s] = new ct(s, c || '', { parent: e, materials: r });
          }),
        t.children &&
          (Array.isArray(t.children)
            ? (o.children = t.children.map((s) => {
                if (s instanceof A) return s;
                if (U(s)) {
                  const i = s;
                  return new A(i, { parent: e, materials: r });
                } else return s;
              }))
            : (t.children instanceof A && (o.children = [t.children]),
              (o.children = [new A(t.children, { parent: e, materials: r })]))),
        o
      );
    };
  class A {
    constructor(e, r) {
      j(this, 'nodeType', 'NODE'),
        j(this, 'rawData'),
        j(this, 'data'),
        j(this, 'emitter', Xt),
        j(this, 'parent'),
        j(this, 'materialsModel'),
        j(this, 'listenerHandle'),
        j(this, 'onChangeCbQueue'),
        (this.rawData = JSON.parse(JSON.stringify(e))),
        wf(e);
      const n = (r == null ? void 0 : r.materials) || new mt([]);
      (this.parent = (r == null ? void 0 : r.parent) || null),
        (this.materialsModel = n),
        (this.data = Zn(e, this, n)),
        (this.listenerHandle = []),
        (this.onChangeCbQueue = []),
        this.registerListener();
    }
    registerListener() {
      const e = (r) => {
        const { node: n } = r;
        n === this && n.id === this.id && this.onChangeCbQueue.forEach((o) => o(r));
      };
      this.emitter.on('onNodeChange', e),
        this.listenerHandle.push(() => {
          this.emitter.off('onNodeChange', e);
        });
    }
    onChange(e) {
      return (
        this.onChangeCbQueue.push(e),
        () => {
          this.onChangeCbQueue = this.onChangeCbQueue.filter((r) => r !== e);
        }
      );
    }
    destroy() {
      this.listenerHandle.forEach((e) => e());
    }
    get id() {
      return this.data.id;
    }
    get value() {
      return this.data;
    }
    clone(e) {
      const r = { ...this.export('design'), id: e || Z() };
      return new A(r, { materials: this.materialsModel });
    }
    updateValue(e) {
      const r = this.data,
        n = { ...this.data, ...e };
      (this.data = Zn(n, this)), this.emitter.emit('onNodeChange', { value: n, preValue: r, node: this });
    }
    contains(e) {
      return yr(this, e);
    }
    get props() {
      return this.data.props;
    }
    get material() {
      const e = this.materialsModel;
      return e == null ? void 0 : e.findByComponentName(this.data.componentName);
    }
    getPlainProps() {
      const e = this.data,
        r = {};
      return (
        Object.keys(e.props || {}).forEach((n) => {
          r[n] = e.props[n].export('design');
        }),
        r
      );
    }
    export(e) {
      var r;
      const n = this.data;
      if (typeof n === 'string') return n;
      const o = {};
      Object.keys(n.props || {}).forEach((l) => {
        o[l] = n.props[l].export(e);
      });
      const a = (r = n.children) == null ? void 0 : r.map((l) => (l instanceof A ? l.export(e) : l)),
        s = n.configure || {},
        i = s.propsSetter || {},
        c = {};
      Object.keys(i).forEach((l) => {
        const d = on(i, l, !1);
        d && (c[l] = d);
      }),
        (s.propsSetter = c),
        this.material && this.materialsModel.usedMaterials.push(this.material);
      let u = { ...n, configure: s, props: o, children: a };
      return e === 'design' && delete u.id, (u = mr(u)), u;
    }
  }
  const to = (t, e, r) => {
    const n = {
      ...t,
      id: Z(),
      props: {},
      componentName: Nt.ROOT_CONTAINER,
      children: [],
      configure: zn(t.configure || {}, { propsSetter: {}, advanceSetter: {} }),
    };
    let o = [];
    P(t.children)
      ? (o = t.children.map((s) => (s instanceof A ? s : U(s) ? new A(s, { parent: e, materials: r }) : s)))
      : t.children instanceof A
      ? o.push(t.children)
      : t.children && U(t.children) && o.push(new A(t.children, { parent: e, materials: r }));
    const a = Object.keys(t.props || {});
    return (
      a.length &&
        a.forEach((s) => {
          var i;
          const c = (i = t.props) == null ? void 0 : i[s];
          c instanceof ct ? (n.props[s] = c) : (n.props[s] = new ct(s, c || '', { parent: e, materials: r }));
        }),
      (n.children = o),
      n
    );
  };
  class Kt {
    constructor(e, { parent: r, materials: n }) {
      j(this, 'rawData'),
        j(this, 'data'),
        j(this, 'nodeType', Nt.ROOT_CONTAINER),
        j(this, 'emitter', Xt),
        j(this, 'materialsModel'),
        j(this, 'listenerHandle'),
        j(this, 'onChangeCbQueue'),
        j(this, 'parent'),
        (this.materialsModel = n),
        (this.rawData = JSON.parse(JSON.stringify(e))),
        (this.data = to(e, this, n)),
        (this.listenerHandle = []),
        (this.onChangeCbQueue = []),
        this.registerListener(),
        (this.parent = r);
    }
    registerListener() {
      const e = (r) => {
        const { node: n } = r;
        n === this && n.id === this.id && this.onChangeCbQueue.forEach((o) => o(r));
      };
      this.emitter.on('onNodeChange', e),
        this.listenerHandle.push(() => {
          this.emitter.off('onNodeChange', e);
        });
    }
    onChange(e) {
      return (
        this.onChangeCbQueue.push(e),
        () => {
          this.onChangeCbQueue = this.onChangeCbQueue.filter((r) => r !== e);
        }
      );
    }
    get id() {
      return this.data.id;
    }
    get value() {
      return this.data;
    }
    get props() {
      return this.data.props;
    }
    get material() {
      const e = this.materialsModel;
      return e == null ? void 0 : e.findByComponentName(this.data.componentName);
    }
    updateValue(e) {
      const r = this.data,
        n = { ...this.data, ...e };
      (this.data = to(n, this, this.materialsModel)),
        this.emitter.emit('onNodeChange', { value: this.data, preValue: r, node: this });
    }
    contains(e) {
      return yr(this, e);
    }
    export(e = sr.SAVE) {
      var r;
      const n = this.data,
        o = {};
      Object.keys(n.props || {}).forEach((c) => {
        o[c] = n.props[c].export(e);
      });
      const a =
          ((r = n.children) == null
            ? void 0
            : r.map((c) => {
                var u;
                return (u = c == null ? void 0 : c.export) == null ? void 0 : u.call(c, e);
              })) || [],
        s = { ...n, props: o, children: a.filter((c) => c) };
      let i = Gn(s, ['id']);
      return (i = mr(i)), i;
    }
    getPlainProps() {
      const e = this.data,
        r = {};
      return (
        Object.keys(e.props || {}).forEach((n) => {
          r[n] = e.props[n].export('design');
        }),
        r
      );
    }
    destroy() {
      this.listenerHandle.forEach((e) => e());
    }
    clone(e) {
      const r = { ...this.export('design'), id: e || Z() };
      return new Kt(r, { materials: this.materialsModel, parent: null });
    }
  }
  const vt = (t) => (t == null ? void 0 : t.type) === H.EXPRESSION,
    Ef = (t) => (t == null ? void 0 : t.type) == H.FUNCTION,
    Z = () => Math.random().toString(32).slice(3, 9),
    Nf = (t) => (t == null ? void 0 : t.nodeType) === 'NODE',
    vr = (t) => (t == null ? void 0 : t.nodeType) === 'PROP',
    $f = (t) => (t == null ? void 0 : t.nodeType) === 'SLOT',
    mr = (t) => Jl(t, (e) => (U(e) ? !Object.keys(e).length : P(e) ? !e.length : !e));
  function yr(t, e) {
    const r = [t];
    for (; r.length; ) {
      const n = r.shift();
      if ((n == null ? void 0 : n.id) === e) return n;
      const o = (n == null ? void 0 : n.props) || {},
        a = (i) => {
          if (i instanceof A) {
            r.push(i);
            return;
          }
          if ((i instanceof $t && a(i.value.value), i instanceof ct)) {
            a(i.value);
            return;
          }
          if (U(i)) {
            const c = i;
            Object.keys(c).map((u) => {
              a(c[u]);
            });
            return;
          }
          if (P(i)) {
            i.forEach((c) => {
              a(c);
            });
            return;
          }
        };
      a(o);
      const s = (n == null ? void 0 : n.value.children.filter((i) => i instanceof A)) || [];
      r.push(...s);
    }
    return null;
  }
  const Tf = (t) => {
    const e = Mn(t),
      r = e.snippets;
    return (
      delete e.snippets,
      (e.snippets = r.map((n) => ({
        ...e,
        ...n,
        id: n.id || `${t.componentName}-${Z()}`,
        title: n.title || t.title,
        category: n.category || t.category,
        tags: [...(n.tags || []), ...(t.tags || [])],
        groupName: n.groupName || t.groupName,
        snapshot: n.snapshot || t.icon,
        snapshotText: n.snapshotText,
        schema: { ...n.schema, componentName: n.schema.componentName || t.componentName },
      }))),
      e
    );
  };
  class Af {
    constructor(e) {
      j(this, 'rawData'), j(this, 'data'), (this.rawData = e), (this.data = Tf(e));
    }
    get value() {
      return this.data;
    }
    get rawValue() {
      return this.rawData;
    }
    get componentName() {
      return this.data.componentName;
    }
    get snippets() {
      return this.data.snippets;
    }
    getSnippetById(e) {
      return this.data.snippets.find((r) => r.id === e);
    }
  }
  const Mf = (t) => {
      if (!P(t)) throw new Error('Materials must be a array');
      return t.map((e) => new Af(e));
    },
    Pf = (t) => {
      t == null ||
        t.forEach((e) => {
          dr({ data: e, dataStruct: bf, throwError: !0 });
        });
    };
  class mt {
    constructor(e) {
      j(this, 'rawData'), j(this, 'data'), j(this, 'usedMaterials', []), (this.rawData = e), Pf(e), (this.data = Mf(e));
    }
    findByComponentName(e) {
      return this.data.find((r) => r.componentName === e);
    }
    findSnippetById(e) {
      const r = [...this.data];
      let n = null;
      for (; !n && r.length; ) {
        const o = r.pop();
        n = o == null ? void 0 : o.getSnippetById(e);
      }
      return n;
    }
    getAllSnippets() {
      let e = this.data.reduce((a, s) => (a.push(...s.snippets), a), []);
      const r = [],
        n = { default: [] };
      (e = e.sort((a, s) => ((a.category || '') > (s.category || '') ? 1 : -1))),
        e.forEach((a) => {
          const s = a.groupName || 'default';
          r.includes(s) || (r.push(s), (n[s] = [])), n[s].push(a);
        });
      const o = [];
      return (
        r.forEach((a) => {
          const s = ['default'],
            i = { default: [] },
            c = n[a];
          if (c.length !== 0) {
            c.forEach((d) => {
              const f = d.category || 'default';
              s.includes(f) || (s.push(f), (i[f] = [])), i[f].push(d);
            });
            const u = [];
            s.forEach((d) => {
              i[d].length && u.push({ name: d, list: i[d] });
            });
            const l = { name: a, list: u };
            o.push(l);
          }
        }),
        o
      );
    }
    get value() {
      return this.data;
    }
    get rawValue() {
      return this.rawData;
    }
  }
  const xf = C({
      version: v(),
      name: v(),
      css: m(v()),
      renderType: m(B([k('COMPONENT'), k('PAGE')])),
      methods: m(x(jf)),
      componentsMeta: x(or(C({ componentName: v() }), ir)),
      thirdLibs: m(lf),
      componentsTree: Sf,
      assets: m(x(R())),
    }),
    eo = (t) => (dr({ data: t, dataStruct: xf, throwError: !0 }), t),
    gr = (t, e, r) => ({ ...t, componentsTree: new Kt(t.componentsTree, { parent: e, materials: r }) });
  class ye {
    constructor(e, r) {
      j(this, 'nodeType', 'PAGE'),
        j(this, 'rawData'),
        j(this, 'emitter', Xt),
        j(this, 'data'),
        j(this, 'parent'),
        j(this, 'materialsModel'),
        j(this, 'assetPackagesList'),
        eo(e),
        (this.assetPackagesList = (r == null ? void 0 : r.assetPackagesList) || []),
        (this.rawData = JSON.parse(JSON.stringify(e))),
        (this.materialsModel = new mt((r == null ? void 0 : r.materials) || [])),
        (this.data = gr(e, this, this.materialsModel));
    }
    updatePage(e) {
      const r = this.data;
      (this.rawData = JSON.parse(JSON.stringify(e))),
        (this.data = gr(e, this, this.materialsModel)),
        this.emitter.emit('onPageChange', { value: this.data, preValue: r, node: this });
    }
    reloadPage(e) {
      const r = this.data;
      (this.rawData = JSON.parse(JSON.stringify(e))),
        (this.data = gr(e, this, this.materialsModel)),
        this.emitter.emit('onReloadPage', { value: this.data, preValue: r, node: this });
    }
    get value() {
      return this.data;
    }
    getNode(e) {
      const r = this.data.componentsTree;
      return yr(r, e);
    }
    addNode(e, r, n = 'AFTER') {
      var o, a, s;
      if (n === 'AFTER' || n === 'BEFORE') {
        const i = r.parent;
        if (i === null && r instanceof Kt) return console.warn('Not found parent node'), !1;
        if (i instanceof ct) return console.warn('CProp can not add node'), !1;
        if (i instanceof $t) {
          const u = i.value.value,
            l = (o = u.findIndex((d) => d === r)) != null ? o : -1;
          return l >= 0
            ? (n === 'BEFORE' ? u.splice(l, 0, e) : u.splice(l + 1, 0, e),
              (e.parent = i),
              (a = i.parent) == null || a.updateValue(),
              !0)
            : !1;
        }
        if (i instanceof ye) return !1;
        const c = (s = i == null ? void 0 : i.value.children.findIndex((u) => u === r)) != null ? s : -1;
        return c >= 0
          ? (n === 'BEFORE'
              ? i == null || i.value.children.splice(c, 0, e)
              : i == null || i.value.children.splice(c + 1, 0, e),
            (e.parent = i),
            i == null || i.updateValue(),
            !0)
          : (console.warn('Not found target node'), !1);
      }
      if (n === 'CHILD_START') return r.value.children.unshift(e), (e.parent = r), r.updateValue(), !0;
      if (n === 'CHILD_END') return r.value.children.push(e), (e.parent = r), r.updateValue(), !0;
      if (U(n)) {
        const i = n;
        if (i.type === 'CHILD') {
          const c = i.pos,
            u = i.index || 0;
          return (
            c === 'BEFORE'
              ? r == null || r.value.children.splice(u, 0, e)
              : r == null || r.value.children.splice(u + 1, 0, e),
            (e.parent = r),
            r.updateValue(),
            !0
          );
        } else console.warn('Can not parse pos obj');
      }
      return !1;
    }
    createNode(e) {
      return delete e.id, new A(e, { parent: null, materials: this.materialsModel });
    }
    addNodeById(e, r, n = 'AFTER') {
      const o = this.getNode(r);
      return o ? this.addNode(e, o, n) : (console.warn(`Not find a node by ${r}, pls check it`), !1);
    }
    copyNode(e) {
      const r = e.export('design');
      r.id = Z();
      const n = new A(r, { parent: e.parent, materials: this.materialsModel });
      return this.addNode(n, e, 'AFTER'), n;
    }
    copyNodeById(e) {
      const r = this.getNode(e);
      return r && r instanceof A ? this.copyNode(r) : !1;
    }
    moveNode(e, r, n) {
      this.deleteNode(e);
      let o = r;
      return ['AFTER', 'BEFORE'].includes(n) && (o = r.parent), (e.parent = o), this.addNode(e, r, n);
    }
    moveNodeById(e, r, n) {
      const o = this.getNode(e),
        a = this.getNode(r);
      return o && a && o instanceof A && a instanceof A ? this.moveNode(o, a, n) : !1;
    }
    deleteNode(e) {
      var r;
      const n = e.parent;
      if (!n) throw new Error('parent node is null or undefined, pls check it');
      if (n instanceof $t) {
        const o = n.value.value,
          a = o.findIndex((i) => i === e),
          s = o[a];
        return o.splice(a, 1), (r = n.parent) == null || r.updateValue(), s;
      }
      if (n instanceof A || n instanceof Kt) {
        const o = n.value.children,
          a = o.findIndex((i) => i === e),
          s = o[a];
        return o.splice(a, 1), n.updateValue(), s;
      }
    }
    deleteNodeById(e) {
      const r = this.getNode(e);
      if (r) return this.deleteNode(r);
    }
    export(e = sr.SAVE) {
      var r;
      const n = this.data.componentsTree.export(e),
        o = this.assetPackagesList,
        a = [],
        s = this.materialsModel.usedMaterials
          .map((c) => {
            const u = o.find((l) => {
              var d;
              return l.package === ((d = c.value.npm) == null ? void 0 : d.package);
            });
            return u && a.push(u), { componentName: c.componentName, ...Mn(c.value.npm || {}) };
          })
          .filter((c) => {
            if (c.componentName && c.package && c.version) return !0;
          });
      this.materialsModel.usedMaterials = [];
      let i = { ...this.data, componentsTree: mr(n), componentsMeta: s, thirdLibs: this.data.thirdLibs, assets: [] };
      return (
        (r = this.data.thirdLibs) == null ||
          r.forEach((c) => {
            const u = o.find((l) => {
              l.package, l.package;
            });
            u && a.push(u);
          }),
        (i.assets = tf(a, (c) => c.package)),
        (i = Gn(i, ['id'])),
        JSON.parse(JSON.stringify(i))
      );
    }
  }
  Nt.ROOT_CONTAINER;
  var Df = typeof global === 'object' && global && global.Object === Object && global;
  const ro = Df;
  var Rf = typeof self === 'object' && self && self.Object === Object && self,
    If = ro || Rf || Function('return this')();
  const Tt = If;
  var Lf = Tt.Symbol;
  const At = Lf;
  var no = Object.prototype,
    Ff = no.hasOwnProperty,
    Bf = no.toString,
    Zt = At ? At.toStringTag : void 0;
  function Uf(t) {
    var e = Ff.call(t, Zt),
      r = t[Zt];
    try {
      t[Zt] = void 0;
      var n = !0;
    } catch {}
    var o = Bf.call(t);
    return n && (e ? (t[Zt] = r) : delete t[Zt]), o;
  }
  var kf = Object.prototype,
    zf = kf.toString;
  function Gf(t) {
    return zf.call(t);
  }
  var Hf = '[object Null]',
    Vf = '[object Undefined]',
    oo = At ? At.toStringTag : void 0;
  function te(t) {
    return t == null ? (t === void 0 ? Vf : Hf) : oo && oo in Object(t) ? Uf(t) : Gf(t);
  }
  function Mt(t) {
    return t != null && typeof t === 'object';
  }
  var Wf = '[object Symbol]';
  function Jf(t) {
    return typeof t === 'symbol' || (Mt(t) && te(t) == Wf);
  }
  function qf(t, e) {
    for (var r = -1, n = t == null ? 0 : t.length, o = Array(n); ++r < n; ) o[r] = e(t[r], r, t);
    return o;
  }
  var Qf = Array.isArray;
  const Pt = Qf;
  var Yf = 1 / 0,
    ao = At ? At.prototype : void 0,
    io = ao ? ao.toString : void 0;
  function so(t) {
    if (typeof t === 'string') return t;
    if (Pt(t)) return qf(t, so) + '';
    if (Jf(t)) return io ? io.call(t) : '';
    var e = t + '';
    return e == '0' && 1 / t == -Yf ? '-0' : e;
  }
  function yt(t) {
    var e = typeof t;
    return t != null && (e == 'object' || e == 'function');
  }
  function co(t) {
    return t;
  }
  var Xf = '[object AsyncFunction]',
    Kf = '[object Function]',
    Zf = '[object GeneratorFunction]',
    td = '[object Proxy]';
  function br(t) {
    if (!yt(t)) return !1;
    var e = te(t);
    return e == Kf || e == Zf || e == Xf || e == td;
  }
  var ed = Tt['__core-js_shared__'];
  const _r = ed;
  var uo = (function () {
    var t = /[^.]+$/.exec((_r && _r.keys && _r.keys.IE_PROTO) || '');
    return t ? 'Symbol(src)_1.' + t : '';
  })();
  function rd(t) {
    return !!uo && uo in t;
  }
  var nd = Function.prototype,
    od = nd.toString;
  function ad(t) {
    if (t != null) {
      try {
        return od.call(t);
      } catch {}
      try {
        return t + '';
      } catch {}
    }
    return '';
  }
  var id = /[\\^$.*+?()[\]{}|]/g,
    sd = /^\[object .+?Constructor\]$/,
    cd = Function.prototype,
    ud = Object.prototype,
    ld = cd.toString,
    fd = ud.hasOwnProperty,
    dd = RegExp(
      '^' +
        ld
          .call(fd)
          .replace(id, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    );
  function pd(t) {
    if (!yt(t) || rd(t)) return !1;
    var e = br(t) ? dd : sd;
    return e.test(ad(t));
  }
  function hd(t, e) {
    return t == null ? void 0 : t[e];
  }
  function jr(t, e) {
    var r = hd(t, e);
    return pd(r) ? r : void 0;
  }
  var lo = Object.create,
    vd = (function () {
      function t() {}
      return function (e) {
        if (!yt(e)) return {};
        if (lo) return lo(e);
        t.prototype = e;
        var r = new t();
        return (t.prototype = void 0), r;
      };
    })();
  const md = vd;
  function yd(t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  }
  function gd(t, e) {
    var r = -1,
      n = t.length;
    for (e || (e = Array(n)); ++r < n; ) e[r] = t[r];
    return e;
  }
  var bd = 800,
    _d = 16,
    jd = Date.now;
  function Sd(t) {
    var e = 0,
      r = 0;
    return function () {
      var n = jd(),
        o = _d - (n - r);
      if (((r = n), o > 0)) {
        if (++e >= bd) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  function Od(t) {
    return function () {
      return t;
    };
  }
  var Cd = (function () {
    try {
      var t = jr(Object, 'defineProperty');
      return t({}, '', {}), t;
    } catch {}
  })();
  const ge = Cd;
  var wd = ge
      ? function (t, e) {
          return ge(t, 'toString', { configurable: !0, enumerable: !1, value: Od(e), writable: !0 });
        }
      : co,
    Ed = Sd(wd);
  const Nd = Ed;
  var $d = 9007199254740991,
    Td = /^(?:0|[1-9]\d*)$/;
  function fo(t, e) {
    var r = typeof t;
    return (
      (e = e == null ? $d : e), !!e && (r == 'number' || (r != 'symbol' && Td.test(t))) && t > -1 && t % 1 == 0 && t < e
    );
  }
  function Sr(t, e, r) {
    e == '__proto__' && ge ? ge(t, e, { configurable: !0, enumerable: !0, value: r, writable: !0 }) : (t[e] = r);
  }
  function be(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var Ad = Object.prototype,
    Md = Ad.hasOwnProperty;
  function Pd(t, e, r) {
    var n = t[e];
    (!(Md.call(t, e) && be(n, r)) || (r === void 0 && !(e in t))) && Sr(t, e, r);
  }
  function xd(t, e, r, n) {
    var o = !r;
    r || (r = {});
    for (var a = -1, s = e.length; ++a < s; ) {
      var i = e[a],
        c = n ? n(r[i], t[i], i, r, t) : void 0;
      c === void 0 && (c = t[i]), o ? Sr(r, i, c) : Pd(r, i, c);
    }
    return r;
  }
  var po = Math.max;
  function Dd(t, e, r) {
    return (
      (e = po(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (var n = arguments, o = -1, a = po(n.length - e, 0), s = Array(a); ++o < a; ) s[o] = n[e + o];
        o = -1;
        for (var i = Array(e + 1); ++o < e; ) i[o] = n[o];
        return (i[e] = r(s)), yd(t, this, i);
      }
    );
  }
  function Rd(t, e) {
    return Nd(Dd(t, e, co), t + '');
  }
  var Id = 9007199254740991;
  function ho(t) {
    return typeof t === 'number' && t > -1 && t % 1 == 0 && t <= Id;
  }
  function Or(t) {
    return t != null && ho(t.length) && !br(t);
  }
  function Ld(t, e, r) {
    if (!yt(r)) return !1;
    var n = typeof e;
    return (n == 'number' ? Or(r) && fo(e, r.length) : n == 'string' && e in r) ? be(r[e], t) : !1;
  }
  function Fd(t) {
    return Rd(function (e, r) {
      var n = -1,
        o = r.length,
        a = o > 1 ? r[o - 1] : void 0,
        s = o > 2 ? r[2] : void 0;
      for (
        a = t.length > 3 && typeof a === 'function' ? (o--, a) : void 0,
          s && Ld(r[0], r[1], s) && ((a = o < 3 ? void 0 : a), (o = 1)),
          e = Object(e);
        ++n < o;

      ) {
        var i = r[n];
        i && t(e, i, n, a);
      }
      return e;
    });
  }
  var Bd = Object.prototype;
  function vo(t) {
    var e = t && t.constructor,
      r = (typeof e === 'function' && e.prototype) || Bd;
    return t === r;
  }
  function Ud(t, e) {
    for (var r = -1, n = Array(t); ++r < t; ) n[r] = e(r);
    return n;
  }
  var kd = '[object Arguments]';
  function mo(t) {
    return Mt(t) && te(t) == kd;
  }
  var yo = Object.prototype,
    zd = yo.hasOwnProperty,
    Gd = yo.propertyIsEnumerable,
    Hd = mo(
      (function () {
        return arguments;
      })()
    )
      ? mo
      : function (t) {
          return Mt(t) && zd.call(t, 'callee') && !Gd.call(t, 'callee');
        };
  const Cr = Hd;
  function Vd() {
    return !1;
  }
  var go = typeof b === 'object' && b && !b.nodeType && b,
    bo = go && typeof module === 'object' && module && !module.nodeType && module,
    Wd = bo && bo.exports === go,
    _o = Wd ? Tt.Buffer : void 0,
    Jd = _o ? _o.isBuffer : void 0,
    qd = Jd || Vd;
  const jo = qd;
  var Qd = '[object Arguments]',
    Yd = '[object Array]',
    Xd = '[object Boolean]',
    Kd = '[object Date]',
    Zd = '[object Error]',
    tp = '[object Function]',
    ep = '[object Map]',
    rp = '[object Number]',
    np = '[object Object]',
    op = '[object RegExp]',
    ap = '[object Set]',
    ip = '[object String]',
    sp = '[object WeakMap]',
    cp = '[object ArrayBuffer]',
    up = '[object DataView]',
    lp = '[object Float32Array]',
    fp = '[object Float64Array]',
    dp = '[object Int8Array]',
    pp = '[object Int16Array]',
    hp = '[object Int32Array]',
    vp = '[object Uint8Array]',
    mp = '[object Uint8ClampedArray]',
    yp = '[object Uint16Array]',
    gp = '[object Uint32Array]',
    T = {};
  (T[lp] = T[fp] = T[dp] = T[pp] = T[hp] = T[vp] = T[mp] = T[yp] = T[gp] = !0),
    (T[Qd] =
      T[Yd] =
      T[cp] =
      T[Xd] =
      T[up] =
      T[Kd] =
      T[Zd] =
      T[tp] =
      T[ep] =
      T[rp] =
      T[np] =
      T[op] =
      T[ap] =
      T[ip] =
      T[sp] =
        !1);
  function bp(t) {
    return Mt(t) && ho(t.length) && !!T[te(t)];
  }
  function _p(t) {
    return function (e) {
      return t(e);
    };
  }
  var So = typeof b === 'object' && b && !b.nodeType && b,
    ee = So && typeof module === 'object' && module && !module.nodeType && module,
    jp = ee && ee.exports === So,
    wr = jp && ro.process,
    Sp = (function () {
      try {
        var t = ee && ee.require && ee.require('util').types;
        return t || (wr && wr.binding && wr.binding('util'));
      } catch {}
    })();
  const Oo = Sp;
  var Co = Oo && Oo.isTypedArray,
    Op = Co ? _p(Co) : bp;
  const wo = Op;
  var Cp = Object.prototype,
    wp = Cp.hasOwnProperty;
  function Ep(t, e) {
    var r = Pt(t),
      n = !r && Cr(t),
      o = !r && !n && jo(t),
      a = !r && !n && !o && wo(t),
      s = r || n || o || a,
      i = s ? Ud(t.length, String) : [],
      c = i.length;
    for (var u in t)
      (e || wp.call(t, u)) &&
        !(
          s &&
          (u == 'length' ||
            (o && (u == 'offset' || u == 'parent')) ||
            (a && (u == 'buffer' || u == 'byteLength' || u == 'byteOffset')) ||
            fo(u, c))
        ) &&
        i.push(u);
    return i;
  }
  function Np(t, e) {
    return function (r) {
      return t(e(r));
    };
  }
  function $p(t) {
    var e = [];
    if (t != null) for (var r in Object(t)) e.push(r);
    return e;
  }
  var Tp = Object.prototype,
    Ap = Tp.hasOwnProperty;
  function Mp(t) {
    if (!yt(t)) return $p(t);
    var e = vo(t),
      r = [];
    for (var n in t) (n == 'constructor' && (e || !Ap.call(t, n))) || r.push(n);
    return r;
  }
  function Eo(t) {
    return Or(t) ? Ep(t, !0) : Mp(t);
  }
  var Pp = jr(Object, 'create');
  const re = Pp;
  function xp() {
    (this.__data__ = re ? re(null) : {}), (this.size = 0);
  }
  function Dp(t) {
    var e = this.has(t) && delete this.__data__[t];
    return (this.size -= e ? 1 : 0), e;
  }
  var Rp = '__lodash_hash_undefined__',
    Ip = Object.prototype,
    Lp = Ip.hasOwnProperty;
  function Fp(t) {
    var e = this.__data__;
    if (re) {
      var r = e[t];
      return r === Rp ? void 0 : r;
    }
    return Lp.call(e, t) ? e[t] : void 0;
  }
  var Bp = Object.prototype,
    Up = Bp.hasOwnProperty;
  function kp(t) {
    var e = this.__data__;
    return re ? e[t] !== void 0 : Up.call(e, t);
  }
  var zp = '__lodash_hash_undefined__';
  function Gp(t, e) {
    var r = this.__data__;
    return (this.size += this.has(t) ? 0 : 1), (r[t] = re && e === void 0 ? zp : e), this;
  }
  function gt(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (gt.prototype.clear = xp),
    (gt.prototype.delete = Dp),
    (gt.prototype.get = Fp),
    (gt.prototype.has = kp),
    (gt.prototype.set = Gp);
  function Hp() {
    (this.__data__ = []), (this.size = 0);
  }
  function _e(t, e) {
    for (var r = t.length; r--; ) if (be(t[r][0], e)) return r;
    return -1;
  }
  var Vp = Array.prototype,
    Wp = Vp.splice;
  function Jp(t) {
    var e = this.__data__,
      r = _e(e, t);
    if (r < 0) return !1;
    var n = e.length - 1;
    return r == n ? e.pop() : Wp.call(e, r, 1), --this.size, !0;
  }
  function qp(t) {
    var e = this.__data__,
      r = _e(e, t);
    return r < 0 ? void 0 : e[r][1];
  }
  function Qp(t) {
    return _e(this.__data__, t) > -1;
  }
  function Yp(t, e) {
    var r = this.__data__,
      n = _e(r, t);
    return n < 0 ? (++this.size, r.push([t, e])) : (r[n][1] = e), this;
  }
  function ot(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (ot.prototype.clear = Hp),
    (ot.prototype.delete = Jp),
    (ot.prototype.get = qp),
    (ot.prototype.has = Qp),
    (ot.prototype.set = Yp);
  var Xp = jr(Tt, 'Map');
  const No = Xp;
  function Kp() {
    (this.size = 0), (this.__data__ = { hash: new gt(), map: new (No || ot)(), string: new gt() });
  }
  function Zp(t) {
    var e = typeof t;
    return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean' ? t !== '__proto__' : t === null;
  }
  function je(t, e) {
    var r = t.__data__;
    return Zp(e) ? r[typeof e === 'string' ? 'string' : 'hash'] : r.map;
  }
  function th(t) {
    var e = je(this, t).delete(t);
    return (this.size -= e ? 1 : 0), e;
  }
  function eh(t) {
    return je(this, t).get(t);
  }
  function rh(t) {
    return je(this, t).has(t);
  }
  function nh(t, e) {
    var r = je(this, t),
      n = r.size;
    return r.set(t, e), (this.size += r.size == n ? 0 : 1), this;
  }
  function xt(t) {
    var e = -1,
      r = t == null ? 0 : t.length;
    for (this.clear(); ++e < r; ) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }
  (xt.prototype.clear = Kp),
    (xt.prototype.delete = th),
    (xt.prototype.get = eh),
    (xt.prototype.has = rh),
    (xt.prototype.set = nh);
  function $o(t) {
    return t == null ? '' : so(t);
  }
  var oh = Np(Object.getPrototypeOf, Object);
  const To = oh;
  var ah = '[object Object]',
    ih = Function.prototype,
    sh = Object.prototype,
    Ao = ih.toString,
    ch = sh.hasOwnProperty,
    uh = Ao.call(Object);
  function Dt(t) {
    if (!Mt(t) || te(t) != ah) return !1;
    var e = To(t);
    if (e === null) return !0;
    var r = ch.call(e, 'constructor') && e.constructor;
    return typeof r === 'function' && r instanceof r && Ao.call(r) == uh;
  }
  function lh(t, e, r) {
    var n = -1,
      o = t.length;
    e < 0 && (e = -e > o ? 0 : o + e),
      (r = r > o ? o : r),
      r < 0 && (r += o),
      (o = e > r ? 0 : (r - e) >>> 0),
      (e >>>= 0);
    for (var a = Array(o); ++n < o; ) a[n] = t[n + e];
    return a;
  }
  function fh(t, e, r) {
    var n = t.length;
    return (r = r === void 0 ? n : r), !e && r >= n ? t : lh(t, e, r);
  }
  var dh = '\\ud800-\\udfff',
    ph = '\\u0300-\\u036f',
    hh = '\\ufe20-\\ufe2f',
    vh = '\\u20d0-\\u20ff',
    mh = ph + hh + vh,
    yh = '\\ufe0e\\ufe0f',
    gh = '\\u200d',
    bh = RegExp('[' + gh + dh + mh + yh + ']');
  function Mo(t) {
    return bh.test(t);
  }
  function _h(t) {
    return t.split('');
  }
  var Po = '\\ud800-\\udfff',
    jh = '\\u0300-\\u036f',
    Sh = '\\ufe20-\\ufe2f',
    Oh = '\\u20d0-\\u20ff',
    Ch = jh + Sh + Oh,
    wh = '\\ufe0e\\ufe0f',
    Eh = '[' + Po + ']',
    Er = '[' + Ch + ']',
    Nr = '\\ud83c[\\udffb-\\udfff]',
    Nh = '(?:' + Er + '|' + Nr + ')',
    xo = '[^' + Po + ']',
    Do = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    Ro = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    $h = '\\u200d',
    Io = Nh + '?',
    Lo = '[' + wh + ']?',
    Th = '(?:' + $h + '(?:' + [xo, Do, Ro].join('|') + ')' + Lo + Io + ')*',
    Ah = Lo + Io + Th,
    Mh = '(?:' + [xo + Er + '?', Er, Do, Ro, Eh].join('|') + ')',
    Ph = RegExp(Nr + '(?=' + Nr + ')|' + Mh + Ah, 'g');
  function xh(t) {
    return t.match(Ph) || [];
  }
  function Dh(t) {
    return Mo(t) ? xh(t) : _h(t);
  }
  function Rh(t) {
    return function (e) {
      e = $o(e);
      var r = Mo(e) ? Dh(e) : void 0,
        n = r ? r[0] : e.charAt(0),
        o = r ? fh(r, 1).join('') : e.slice(1);
      return n[t]() + o;
    };
  }
  var Ih = Rh('toUpperCase');
  const Lh = Ih;
  function Fh(t) {
    return Lh($o(t).toLowerCase());
  }
  function Bh() {
    (this.__data__ = new ot()), (this.size = 0);
  }
  function Uh(t) {
    var e = this.__data__,
      r = e.delete(t);
    return (this.size = e.size), r;
  }
  function kh(t) {
    return this.__data__.get(t);
  }
  function zh(t) {
    return this.__data__.has(t);
  }
  var Gh = 200;
  function Hh(t, e) {
    var r = this.__data__;
    if (r instanceof ot) {
      var n = r.__data__;
      if (!No || n.length < Gh - 1) return n.push([t, e]), (this.size = ++r.size), this;
      r = this.__data__ = new xt(n);
    }
    return r.set(t, e), (this.size = r.size), this;
  }
  function Rt(t) {
    var e = (this.__data__ = new ot(t));
    this.size = e.size;
  }
  (Rt.prototype.clear = Bh),
    (Rt.prototype.delete = Uh),
    (Rt.prototype.get = kh),
    (Rt.prototype.has = zh),
    (Rt.prototype.set = Hh);
  var Fo = typeof b === 'object' && b && !b.nodeType && b,
    Bo = Fo && typeof module === 'object' && module && !module.nodeType && module,
    Vh = Bo && Bo.exports === Fo,
    Uo = Vh ? Tt.Buffer : void 0,
    ko = Uo ? Uo.allocUnsafe : void 0;
  function Wh(t, e) {
    if (e) return t.slice();
    var r = t.length,
      n = ko ? ko(r) : new t.constructor(r);
    return t.copy(n), n;
  }
  var Jh = Tt.Uint8Array;
  const zo = Jh;
  function qh(t) {
    var e = new t.constructor(t.byteLength);
    return new zo(e).set(new zo(t)), e;
  }
  function Qh(t, e) {
    var r = e ? qh(t.buffer) : t.buffer;
    return new t.constructor(r, t.byteOffset, t.length);
  }
  function Yh(t) {
    return typeof t.constructor === 'function' && !vo(t) ? md(To(t)) : {};
  }
  function Xh(t) {
    return function (e, r, n) {
      for (var o = -1, a = Object(e), s = n(e), i = s.length; i--; ) {
        var c = s[t ? i : ++o];
        if (r(a[c], c, a) === !1) break;
      }
      return e;
    };
  }
  var Kh = Xh();
  const Zh = Kh;
  function $r(t, e, r) {
    ((r !== void 0 && !be(t[e], r)) || (r === void 0 && !(e in t))) && Sr(t, e, r);
  }
  function tv(t) {
    return Mt(t) && Or(t);
  }
  function Tr(t, e) {
    if (!(e === 'constructor' && typeof t[e] === 'function') && e != '__proto__') return t[e];
  }
  function ev(t) {
    return xd(t, Eo(t));
  }
  function rv(t, e, r, n, o, a, s) {
    var i = Tr(t, r),
      c = Tr(e, r),
      u = s.get(c);
    if (u) {
      $r(t, r, u);
      return;
    }
    var l = a ? a(i, c, r + '', t, e, s) : void 0,
      d = l === void 0;
    if (d) {
      var f = Pt(c),
        p = !f && jo(c),
        h = !f && !p && wo(c);
      (l = c),
        f || p || h
          ? Pt(i)
            ? (l = i)
            : tv(i)
            ? (l = gd(i))
            : p
            ? ((d = !1), (l = Wh(c, !0)))
            : h
            ? ((d = !1), (l = Qh(c, !0)))
            : (l = [])
          : Dt(c) || Cr(c)
          ? ((l = i), Cr(i) ? (l = ev(i)) : (!yt(i) || br(i)) && (l = Yh(c)))
          : (d = !1);
    }
    d && (s.set(c, l), o(l, c, n, a, s), s.delete(c)), $r(t, r, l);
  }
  function Go(t, e, r, n, o) {
    t !== e &&
      Zh(
        e,
        function (a, s) {
          if ((o || (o = new Rt()), yt(a))) rv(t, e, s, r, Go, n, o);
          else {
            var i = n ? n(Tr(t, s), a, s + '', t, e, o) : void 0;
            i === void 0 && (i = a), $r(t, s, i);
          }
        },
        Eo
      );
  }
  var nv = Fd(function (t, e, r) {
    Go(t, e, r);
  });
  const ov = nv;
  function av(t) {
    const e = t.prototype;
    return !!(e && e.isReactComponent);
  }
  function iv(t) {
    var n, o;
    const r = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.forward_ref') : 60112;
    return (
      (t == null ? void 0 : t.$$typeof) === r ||
      ((n = t == null ? void 0 : t.prototype) == null ? void 0 : n.isReactComponent) ||
      ((o = t == null ? void 0 : t.prototype) == null ? void 0 : o.setState) ||
      t._forwardRef
    );
  }
  function sv(t) {
    class e extends D.Component {
      render() {
        return D.createElement(t, this.props);
      }
    }
    return (e.displayName = t.displayName), e;
  }
  const It = (t, e) => {
      const r = (n) => {
        const a = `
    ${Object.keys(e).map((s) => `const ${s} = $$context['${s}'];`).join(`
`)}
    return ${n};
    `;
        return new Function('$$context', a)(e);
      };
      try {
        return r(t);
      } catch (n) {
        console.warn(n);
        const o = `[${t}] expression run failed`;
        return console.warn(o), null;
      }
    },
    cv = (t, e, r) =>
      function (...o) {
        try {
          const a = `
        var f = ${t};
        var args = Array.from(arguments);
        var __$$storeManager__ = args.pop();
        var $$context = args.pop();
        $$context.stateManager = __$$storeManager__.getStateSnapshot();
        return f.apply(f, args)
      `;
          new Function(a)(...o, e, r);
        } catch (a) {
          console.warn(a);
        }
      },
    Ho = (t, e) => {
      const r = {};
      return (
        e.forEach((n, o) => {
          r[n] = t[o];
        }),
        r
      );
    },
    Vo = (t) => {
      const e = {};
      return (
        Object.keys(t).forEach((r) => {
          let n = r.replace('-webkit', 'Webkit');
          (n = n.replace('-ms', 'ms')), (n = n.replace('-moz', 'Moz')), (n = n.replace('-o', 'O'));
          let o = n.split('-');
          o.length >= 2 && (o = o.map((a, s) => (s !== 0 ? Fh(a) : a))), (e[o.join('')] = t[r]);
        }),
        e
      );
    },
    Wo = (t) => {
      let e = '';
      return (
        Object.keys(t).forEach((r) => {
          e += `${r}:${t[r]};`;
        }),
        e
      );
    },
    Se = 'DYNAMIC',
    uv = ['$$context', '$$nodeModel'],
    Jo = (t) => {
      let e;
      const r = new Set(),
        n = (c, u) => {
          const l = typeof c === 'function' ? c(e) : c;
          if (!Object.is(l, e)) {
            const d = e;
            (e = (u != null ? u : typeof l !== 'object') ? l : Object.assign({}, e, l)), r.forEach((f) => f(e, d));
          }
        },
        o = () => e,
        i = {
          setState: n,
          getState: o,
          subscribe: (c) => (r.add(c), () => r.delete(c)),
          destroy: () => {
            (({ BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0 } && 'production') !== 'production' &&
              console.warn(
                '[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.'
              ),
              r.clear());
          },
        };
      return (e = t(n, o, i)), i;
    },
    lv = (t) => (t ? Jo(t) : Jo);
  var fv = (t) => (
    ({ BASE_URL: '/', MODE: 'production', DEV: !1, PROD: !0 } && 'production') !== 'production' &&
      console.warn(
        "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
      ),
    lv(t)
  );
  class dv {
    constructor() {
      g(this, 'storeMap', new Map());
    }
    addStore(e, r) {
      const n = fv(r);
      return this.storeMap.set(e, n), (n.name = e), n;
    }
    setStore(e, r) {
      this.storeMap.set(e, r);
    }
    removeStore(e) {
      this.storeMap.delete(e);
    }
    getStore(e) {
      return this.storeMap.get(e);
    }
    connect(e, r) {
      const n = this.storeMap.get(e);
      return n ? n.subscribe(r) : (console.warn('store not exits'), () => {});
    }
    getStateSnapshot() {
      const e = {};
      return (
        this.storeMap.forEach((r, n) => {
          e[n] = {
            state: r.getState(),
            updateState: (o) => {
              r.setState(o);
            },
          };
        }),
        e
      );
    }
    destroy() {
      this.storeMap.forEach((e) => {
        e.destroy();
      }),
        (this.storeMap = new Map());
    }
  }
  class qo {
    constructor() {
      g(this, 'renderMode', 'normal');
      g(this, 'components', {});
      g(this, 'storeManager', new dv());
      g(this, 'runtimeComponentCache', new Map());
      g(this, 'onGetRef');
      g(this, 'onGetComponent');
      g(this, 'onComponentMount');
      g(this, 'onComponentDestroy');
      g(this, 'processNodeConfigHook');
    }
    getComponent(e) {
      var o;
      const r = e.value.componentName;
      let n = this.components[r] || (() => `Component [${r}] not found`);
      return (
        iv(n) || ((n = sv(n)), (this.components[r] = n)),
        this.onGetComponent && (n = (o = this.onGetComponent) == null ? void 0 : o.call(this, n, e)),
        n
      );
    }
    getContext(e = {}, r) {
      let n = e;
      return r && ((n = { ...e }), (n.__proto__ = r || null)), n;
    }
    pageRender(
      e,
      {
        components: r,
        onGetRef: n,
        $$context: o = {},
        onGetComponent: a,
        onComponentMount: s,
        onComponentDestroy: i,
        renderMode: c,
        processNodeConfigHook: u,
      }
    ) {
      (this.renderMode = c),
        (this.components = r),
        (this.onGetRef = n),
        (this.onGetComponent = a),
        (this.onComponentMount = s),
        (this.onComponentDestroy = i),
        (this.processNodeConfigHook = u);
      const l = e.value.componentsTree,
        d = this.getComponent(l),
        f = this.convertModelToComponent(d, e.value.componentsTree),
        p = {},
        h = l.props;
      return (
        Object.keys(h).forEach((y) => {
          p[y] = h[y].value;
        }),
        (p.$$context = o),
        this.render(f, p)
      );
    }
    transformProps(e = {}, { $$context: r }) {
      const n = e,
        o = (s) => {
          if (Array.isArray(s)) return s.map((i) => o(i));
          if (vr(s)) return o(s.value);
          if ($f(s)) {
            const i = s.value,
              c = i.value;
            if (!c) return console.warn('slot value is null, this maybe cause some error, pls check it', e), () => {};
            const u = (l) => {
              const d = `${l.id}-${Se}`;
              if (this.runtimeComponentCache.get(l.id))
                return { key: d, component: this.runtimeComponentCache.get(l.id) };
              const f = this.getComponent(l),
                p = this.convertModelToComponent(f, l),
                h = i.params || [];
              return {
                component: (...S) => {
                  const w = Ho(S, h),
                    I = this.getContext({ params: w }, r);
                  return this.render(p, { $$context: I, key: d });
                },
                key: d,
              };
            };
            if (Array.isArray(c)) {
              const l = c == null ? void 0 : c.map((d) => u(d));
              return (...d) =>
                l.map((f) =>
                  av(f.component)
                    ? O.default.createElement(f.component, { $$context: r, key: f.key })
                    : f.component(...d)
                );
            } else return u(c).component;
          } else {
            if (vt(s)) return It(s.value, r || {});
            if (Ef(s)) return cv(s.value, r, this.storeManager);
            if (Dt(s)) {
              let i = s;
              vr(s) && (i = s.value);
              const c = i,
                u = {};
              return (
                Object.keys(i).forEach((l) => {
                  u[l] = o(c[l]);
                }),
                u
              );
            } else return s;
          }
        },
        a = {};
      return (
        Object.keys(n).forEach((s) => {
          const i = n[s];
          a[s] = o(i);
        }),
        a
      );
    }
    collectSpecialProps(e = {}, r) {
      const n = [],
        o = (a, s) => {
          let i = s;
          vr(s) && (i = s.value),
            r(i)
              ? n.push({ keyPath: a, val: i })
              : Pt(i)
              ? i.forEach((c, u) => {
                  o([...a, String(u)], c);
                })
              : Dt(i) &&
                Object.keys(i).forEach((c) => {
                  o([...a, c], i[c]);
                });
        };
      return o(['$root'], e), n;
    }
    convertModelToComponent(e, r) {
      const n = this;
      class o extends O.default.Component {
        constructor(i) {
          super(i);
          g(this, '_CONDITION', !0);
          g(this, '_DESIGN_BOX', !1);
          g(this, '_NODE_MODEL', r);
          g(this, '_NODE_ID', r.id);
          g(this, 'UNIQUE_ID', `${r.id}_${Z()}`);
          g(this, 'targetComponentRef');
          g(this, 'listenerHandle', []);
          g(this, 'storeState');
          g(this, 'staticState', {});
          g(this, 'storeListenDisposeLint', []);
          g(this, 'domHeader');
          g(this, 'mediaStyleDomMap', {});
          g(this, 'updateState', (i) => {
            this.storeState.setState(i), this.forceUpdate();
          });
          g(this, 'getStyleDomById', (i) => {
            const c = this.mediaStyleDomMap;
            let u = c[i];
            return u || ((u = document.createElement('style')), (u.type = 'text/css'), (c[i] = u)), (u.id = i), u;
          });
          g(this, 'addMediaCSS', () => {
            var u;
            let i = this.domHeader;
            if (
              (i || ((i = (u = document.getElementsByTagName('head')) == null ? void 0 : u[0]), (this.domHeader = i)),
              !this.domHeader)
            )
              return;
            const c = this._NODE_MODEL.value.css;
            !c ||
              c.value.forEach((l) => {
                var p;
                const d = `${this.UNIQUE_ID}_${l.state}`;
                let f = `.${c.class}`;
                if ((l.state !== 'normal' && (f = `${f}:${l.state}`), Object.keys(l.style).length !== 0)) {
                  const h = this.getStyleDomById(d);
                  (h.innerText = `${f} { ${Wo(l.style)} }`), i == null || i.appendChild(h);
                }
                (p = l.media) != null &&
                  p.length &&
                  l.media.forEach((h) => {
                    const y = `${d}_${h.type}_${h.value}`,
                      _ = this.getStyleDomById(y);
                    (_.media = `screen and (${h.type}:${h.value}px)`),
                      (_.innerHTML = `${f} { ${Wo(h.style)} }`),
                      i == null || i.appendChild(_);
                  });
              });
          });
          g(this, 'removeMediaCSS', () => {
            const i = this.mediaStyleDomMap;
            Object.keys(i).forEach((c) => {
              var u;
              (u = this.domHeader) == null || u.removeChild(i[c]);
            });
          });
          g(this, 'rebuildNode', () => {
            this.storeListenDisposeLint.forEach((i) => i()),
              this.removeMediaCSS(),
              this.connectStore(),
              this.addMediaCSS(),
              this.forceUpdate();
          });
          (this.targetComponentRef = O.default.createRef()), (this.state = r.value.state || {});
          const c = r.value.nodeName || r.id,
            u = n.storeManager.getStore(c);
          u
            ? ((this.storeState = u), u.setState({ ...(r.value.state || {}) }))
            : (this.storeState = n.storeManager.addStore(c, () => ({ ...(r.value.state || {}) }))),
            this.storeState.subscribe((l) => {
              this.setState({ ...l });
            }),
            this.connectStore();
        }
        connectStore() {
          const i = n.collectSpecialProps(r.props, (f) => !!vt(f)),
            c = n.collectSpecialProps({ css: r.value.css, class: r.value.classNames }, (f) => !!vt(f)),
            u = [...i, ...c]
              .map((f) => {
                const p = f.val,
                  y = /\$\$context.stateManager\.(.+?)\./gim.exec(p.value);
                return y != null && y.length ? y[1] : '';
              })
              .filter(Boolean),
            l = Array.from(new Set(u)),
            d = [];
          l.length &&
            l.forEach((f) => {
              n.storeManager.getStore(f) ||
                (n.storeManager.addStore(f, () => ({})), console.log(n.storeManager, f, 'not exits'));
              const h = n.storeManager.connect(f, () => {
                this.forceUpdate();
              });
              d.push(h);
            }),
            (this.storeListenDisposeLint = d);
        }
        componentDidMount() {
          var c;
          this.addMediaCSS(),
            n.onGetRef && n.onGetRef(this.targetComponentRef, r, this),
            (c = n.onComponentMount) == null || c.call(n, this, r);
          const i = () => {
            n.storeManager.setStore(r.value.nodeName || r.id, this.storeState),
              this.storeState.setState({ ...this.state, ...(r.value.state || {}) }),
              this.rebuildNode();
          };
          r.onChange(i);
        }
        componentWillUnmount() {
          var i;
          this.storeListenDisposeLint.forEach((c) => c()),
            this.removeMediaCSS(),
            (i = n.onComponentDestroy) == null || i.call(n, this, r);
        }
        render() {
          var Lt, N, ne;
          const { $$context: i, ...c } = this.props,
            u = { key: r.id, ...r.props, ...c },
            l = { state: this.state || {}, updateState: this.updateState, staticState: this.staticState };
          r.value.componentName === Nt.ROOT_CONTAINER &&
            ((l.globalState = this.state), (l.updateGlobalState = this.updateState)),
            (l.stateManager = n.storeManager.getStateSnapshot());
          const d = n.getContext(l, i),
            f = r.value.loop;
          let p = [];
          if (f && f.open) {
            this.targetComponentRef.current = [];
            let F = f.data || [];
            if (vt(f.data)) {
              const it = f.data;
              F = It(it.value, d || {});
            }
            return (
              (p = F.map((...it) => {
                var ra, na;
                const oe = it[1],
                  Ft = [f.forName || 'item', f.forIndex || 'index'],
                  Ar = Ho(it, Ft);
                let Mr = 'loopData';
                f.name && (Mr = `${Mr}${f.name}`);
                const ae = n.getContext({ [Mr]: Ar, staticState: this.staticState }, d),
                  tt = n.transformProps(u, { $$context: ae }),
                  Cv =
                    ((ra = r.value.classNames) == null
                      ? void 0
                      : ra.map((Q) => {
                          var we;
                          const Ce = Q.name;
                          return (
                            vt(Q.status) ? It(String(((we = Q.status) == null ? void 0 : we.value) || ''), ae) : !1
                          )
                            ? Ce
                            : '';
                        })) || [];
                let Pr = `${(na = tt.className) != null ? na : ''} ${Cv.join(' ')}`.trim();
                r.value.css && (Pr = `${r.value.css.class} ${Pr}`.trim()), (tt.className = Pr);
                const wv = n.transformProps(r.value.style, { $$context: ae });
                r.value.style && (tt.style = Vo(wv || {}));
                const { children: Oe } = tt;
                let xr = [];
                if (Oe !== void 0) delete tt.children, (xr = Array.isArray(Oe) ? Oe : [Oe]);
                else {
                  const Q = [];
                  r.value.children.forEach((oa, we) => {
                    const Ev = n.buildComponent(oa, { $$context: ae, idx: we });
                    Q.push(Ev);
                  }),
                    (xr = Q);
                }
                if (((tt.key = `${tt.key}-${oe}`), vt(f.key))) {
                  const Q = f.key,
                    Ce = It(Q.value, ae || {});
                  tt.key += `-${Ce}`;
                }
                return (
                  (tt.ref = (Q) => {
                    (this.targetComponentRef.current = this.targetComponentRef.current || []),
                      (this.targetComponentRef.current[oe] = Q);
                  }),
                  n.render(e, tt, ...xr)
                );
              })),
              p
            );
          }
          const h = n.transformProps(u, { $$context: d }),
            { children: y } = h;
          let _ = [];
          if (y !== void 0) delete h.children, (_ = Array.isArray(y) ? y : [y]);
          else {
            const F = [];
            r.value.children.forEach((oe, Ft) => {
              const Ar = n.buildComponent(oe, { $$context: d, idx: Ft });
              F.push(Ar);
            }),
              (_ = F);
          }
          h.ref = this.targetComponentRef;
          const S =
            ((Lt = r.value.classNames) == null
              ? void 0
              : Lt.map((F) => {
                  var Ft;
                  const it = F.name;
                  return (vt(F.status) ? It(((Ft = F.status) == null ? void 0 : Ft.value) || '', d) : !1) ? it : '';
                })) || [];
          let w = `${(N = h.className) != null ? N : ''} ${S.join(' ')}`.trim();
          r.value.css && (w = `${r.value.css.class} ${w}`.trim()), (h.className = w);
          const I = n.transformProps(r.value.style, { $$context: d });
          r.value.style && (h.style = Vo(I || {}));
          let M = (ne = r.value.condition) != null ? ne : !0;
          typeof M !== 'boolean' && (M = It(M.value, d || {}));
          let L = { condition: M, props: h };
          n.processNodeConfigHook && (L = n.processNodeConfigHook(L, r));
          const q = n.render(e, L.props, ..._);
          return (
            (this._CONDITION = L.condition),
            L.condition ? q : O.default.createElement('div', { style: { display: 'none' } }, q)
          );
        }
      }
      return g(o, '__CP_TYPE__', Se), (o.displayName = `${r.value.componentName}Dynamic`), o;
    }
    buildComponent(e, { $$context: r = {} }) {
      const n = this.runtimeComponentCache;
      return typeof e === 'string'
        ? this.render(e)
        : Nf(e)
        ? (({ currentNode: a }) => {
            const s = a.value.id;
            let i = null;
            if (n.get(s)) i = n.get(s);
            else {
              const l = this.getComponent(a);
              i = this.convertModelToComponent(l, a);
            }
            !n.get(s) && this.renderMode !== 'design' && n.set(s, i);
            const c = `${s}-${Se}`,
              u = { $$context: r, $$nodeModel: e, key: c };
            return this.render(i, u);
          })({ currentNode: e })
        : void 0;
    }
    render(e, r = {}, ...n) {
      return typeof e === 'string' || typeof e === 'number'
        ? String(e)
        : (uv.forEach((a) => {
            a in r && e.__CP_TYPE__ !== Se && delete r[a];
          }),
          O.default.createElement(e, r, ...n));
    }
    clear() {
      this.runtimeComponentCache.clear(), this.storeManager.destroy();
    }
  }
  const pv = Rr(new qo()),
    hv = [
      'a',
      'abbr',
      'acronym',
      'address',
      'applet',
      'area',
      'article',
      'aside',
      'audio',
      'b',
      'base',
      'basefont',
      'bdi',
      'bdo',
      'bgsound',
      'big',
      'blink',
      'blockquote',
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      'center',
      'cite',
      'code',
      'col',
      'colgroup',
      'command',
      'content',
      'data',
      'datalist',
      'dd',
      'del',
      'details',
      'dfn',
      'dialog',
      'dir',
      'div',
      'dl',
      'dt',
      'element',
      'em',
      'embed',
      'fieldset',
      'figcaption',
      'figure',
      'font',
      'footer',
      'form',
      'frame',
      'frameset',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      'header',
      'hgroup',
      'hr',
      'html',
      'i',
      'iframe',
      'image',
      'img',
      'input',
      'ins',
      'isindex',
      'kbd',
      'keygen',
      'label',
      'legend',
      'li',
      'link',
      'listing',
      'main',
      'map',
      'mark',
      'marquee',
      'math',
      'menu',
      'menuitem',
      'meta',
      'meter',
      'multicol',
      'nav',
      'nextid',
      'nobr',
      'noembed',
      'noframes',
      'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'plaintext',
      'pre',
      'progress',
      'q',
      'rb',
      'rbc',
      'rp',
      'rt',
      'rtc',
      'ruby',
      's',
      'samp',
      'script',
      'search',
      'section',
      'select',
      'shadow',
      'slot',
      'small',
      'source',
      'spacer',
      'span',
      'strike',
      'strong',
      'style',
      'sub',
      'summary',
      'sup',
      'svg',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      'time',
      'title',
      'tr',
      'track',
      'tt',
      'u',
      'ul',
      'var',
      'video',
      'wbr',
      'xmp',
    ],
    at = (t) => {
      const e = {};
      return (
        t.forEach((r) => {
          e[r.key] = r.value;
        }),
        e
      );
    },
    vv = [...hv, ...ff].reduce(
      (t, e) => (
        (t[e] = ({ children: r, $$attributes: n = [], ...o }) => {
          let a = r;
          return Array.isArray(r) || (a = [r]), O.default.createElement(e, { ...o, ...at(n) }, ...a);
        }),
        t
      ),
      {}
    ),
    mv = {
      RootContainer: ({ children: t }) => t,
      ...vv,
      CContainer: ({ children: t, $$attributes: e = [], afterMount: r, beforeDestroy: n, ...o }) => {
        let a = t;
        return (
          Array.isArray(t) || (a = [t]),
          D.useEffect(
            () => (
              r == null || r(o),
              () => {
                n == null || n(o);
              }
            ),
            []
          ),
          O.default.createElement('div', { ...o, ...at(e) }, ...a)
        );
      },
      CVideo: ({ children: t, $$attributes: e = [], ...r }) => {
        let n = t;
        return Array.isArray(t) || (n = [t]), O.default.createElement('video', { ...r, ...at(e) }, ...n);
      },
      CAudio: ({ children: t, $$attributes: e = [], ...r }) => {
        let n = t;
        return Array.isArray(t) || (n = [t]), O.default.createElement('video', { ...r, ...at(e) }, ...n);
      },
      CBlock: ({ children: t, width: e, height: r, $$attributes: n = [], ...o }) => {
        let a = t;
        Array.isArray(t) || (a = [t]), (a = a.filter((u) => u !== void 0));
        const { style: s = {}, ...i } = at(n),
          c = { height: r, width: e, ...s, ...(o.style || {}) };
        return O.default.createElement('div', { ...o, ...i, style: c }, ...a);
      },
      CImage: ({ children: t, $$attributes: e = [], ...r }) => {
        let n = t;
        return Array.isArray(t) || (n = [t]), O.default.createElement('img', { ...r, ...at(e) }, ...n);
      },
      CText: ({ children: t, $$attributes: e = [], content: r, ...n }) =>
        O.default.createElement('span', { ...n, ...at(e) }, r),
      CCanvas: ({ children: t, $$attributes: e = [], ...r }) => {
        let n = t;
        return Array.isArray(t) || (n = [t]), O.default.createElement('canvas', { ...r, ...at(e) }, ...n);
      },
      CNativeTag: ({ children: t, $$attributes: e = [], htmlTag: r = 'div', ...n }) => {
        let o = t;
        return Array.isArray(t) || (o = [t]), O.default.createElement(r, { ...n, ...at(e) }, ...o);
      },
    };
  class yv {
    constructor() {
      g(this, 'refMap', new Map());
    }
    get(e) {
      return this.refMap.get(e);
    }
    add(e, r) {
      this.refMap.set(e, r);
    }
    remove(e) {
      this.refMap.delete(e);
    }
    destroy() {
      this.refMap.clear();
    }
  }
  class Qo extends O.default.Component {
    constructor(r) {
      super(r);
      g(this, 'refManager');
      g(this, 'dynamicComponentInstanceMap', new Map());
      g(this, 'onGetRef', (r, n, o) => {
        var a, s;
        (s = (a = this.props).onGetRef) == null || s.call(a, r, n, o),
          this.dynamicComponentInstanceMap.set(n.id, o),
          this.refManager.add(n.value.refId || n.id, r);
      });
      g(this, 'rerender', (r) => {
        if ((this.props.adapter.clear(), (r == null ? void 0 : r.nodeType) === 'PAGE' && r))
          this.setState({ pageModel: r });
        else if (Dt(r) && eo(r)) {
          const n = r;
          this.setState({ pageModel: new ye(n, { materials: this.state.pageModel.materialsModel.rawValue }) });
        }
      });
      (this.state = { pageModel: r.pageModel || new ye(r.page) }), (this.refManager = new yv());
    }
    getPageModel() {
      return this.state.pageModel;
    }
    componentDidMount() {
      const { render: r } = this.props;
      r && (r.ref.current = this);
    }
    componentWillUnmount() {
      this.refManager.destroy();
    }
    render() {
      const { props: r } = this,
        { adapter: n, onGetComponent: o, onComponentDestroy: a, onComponentMount: s } = r,
        { pageModel: i } = this.state;
      if (!i) return console.warn('pageModel is null'), null;
      const c = { ...mv, ...r.components };
      return n.pageRender(i, {
        libs: {},
        components: c,
        onGetRef: this.onGetRef,
        onGetComponent: o,
        onComponentMount: s,
        onComponentDestroy: a,
        $$context: { refs: this.refManager },
        renderMode: r.renderMode,
        processNodeConfigHook: r.processNodeConfigHook,
      });
    }
  }
  const gv = () => {
    const t = D.useRef(null);
    return {
      ref: t,
      rerender: function (...e) {
        t.current && t.current.rerender(...e);
      },
    };
  };
  class bv extends O.default.Component {
    constructor(r) {
      super(r);
      g(this, 'onDoubleClick', () => {
        this.setState({ hasError: !1, error: null });
      });
      this.state = { hasError: !1, error: '' };
    }
    static getDerivedStateFromError(r) {
      return { hasError: !0, error: r };
    }
    componentDidCatch(r, n) {
      var o, a;
      (a = (o = this.props).onError) == null || a.call(o, n);
    }
    render() {
      if (this.state.hasError) {
        const { onDoubleClick: r } = this,
          n = this.props.node.value;
        console.error(this.props.node, this.props.children);
        const o = O.default.createElement(
          'div',
          {
            style: {
              backgroundColor: 'rgb(255 206 215 / 13%)',
              padding: '5px',
              color: '#ff0000b0',
              textAlign: 'center',
              fontSize: '12px',
            },
          },
          'Render error, node id: ',
          n.id,
          ', node name\uFF1A',
          n.title,
          ' component name\uFF1A',
          n.title || n.componentName,
          O.default.createElement('p', null, 'msg: ', String(this.state.error)),
          O.default.createElement(
            'button',
            {
              onDoubleClick: r,
              style: {
                border: '1px solid rgba(100,100,100,0.1)',
                backgroundColor: '#fff',
                padding: '5px 10px',
                borderRadius: '2px',
                color: 'gray',
                cursor: 'pointer',
                marginTop: '5px',
              },
            },
            'double click to refresh'
          ),
          O.default.createElement('div', { style: { display: 'none' } })
        );
        return O.default.createElement(this.props.targetComponent, { onlyRenderChild: !0 }, o);
      }
      return this.props.children;
    }
  }
  class Yo {
    constructor() {
      g(this, 'instanceMap', new Map());
    }
    get(e) {
      return this.instanceMap.get(e);
    }
    add(e, r) {
      const n = this.instanceMap.get(e);
      n ? n.push(r) : this.instanceMap.set(e, [r]);
    }
    remove(e, r) {
      const n = this.instanceMap.get(e);
      if (r !== void 0 && Array.isArray(n)) {
        const o = n.filter((a) => a !== r);
        this.instanceMap.set(e, o);
      } else this.instanceMap.delete(e);
    }
    destroy() {
      this.instanceMap.clear();
    }
  }
  const Xo = (t) => {
    const { node: e } = t,
      r = D.useMemo(() => {
        var c, u;
        const i = (u = (c = e.material) == null ? void 0 : c.value) == null ? void 0 : u.isContainer;
        return Dt(i) ? i : { placeholder: 'Drag the component to place it', width: '100%', height: '100%', style: {} };
      }, [t.node]),
      { placeholder: n, height: o, width: a, style: s } = r;
    return O.default.createElement(
      'div',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(200,200,200,0.1)',
          border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '2px',
          fontSize: '14px',
          color: 'gray',
          cursor: 'default',
          minWidth: '300px',
          minHeight: '50px',
          width: a,
          height: o,
          ...s,
        },
      },
      n
    );
  };
  class _v extends O.default.Component {
    constructor(r) {
      super(r);
      g(this, 'instanceManager', new Yo());
      g(this, 'renderRef');
      g(this, 'dropPlaceholder', Xo);
      g(this, 'onGetComponent', (r, n) => {
        const o = this;
        class a extends O.default.Component {
          constructor() {
            super(...arguments);
            g(this, '_DESIGN_BOX', !0);
            g(this, '_NODE_MODEL', n);
            g(this, '_NODE_ID', n.id);
            g(this, '_UNIQUE_ID', `${n.id}_${Z()}`);
            g(this, '_STATUS');
          }
          componentDidMount() {
            o.instanceManager.add(n.id, this);
          }
          componentWillUnmount() {
            (this._STATUS = 'DESTROY'), o.instanceManager.remove(n.id, this);
          }
          render() {
            var p;
            const { children: c = [], onlyRenderChild: u, ...l } = this.props;
            let d = c;
            return (
              Pt(c) || (d = [c]),
              !d.filter(Boolean).length &&
                (((p = n.material) == null ? void 0 : p.value.isContainer) ||
                  n.value.componentName === Nt.ROOT_CONTAINER) &&
                d.push(O.default.createElement(o.dropPlaceholder, { node: n })),
              u ? d : O.default.createElement(r, l, ...d)
            );
          }
        }
        return O.default.forwardRef(function (i, c) {
          return O.default.createElement(
            bv,
            { node: n, targetComponent: a },
            O.default.createElement(a, { ref: c, ...i })
          );
        });
      });
      (this.renderRef = O.default.createRef()), r.dropPlaceholder && (this.dropPlaceholder = r.dropPlaceholder);
    }
    componentDidMount() {
      var r, n;
      (n = (r = this.props).onMount) == null || n.call(r, this);
    }
    getPageModel() {
      var r;
      return (r = this.renderRef.current) == null ? void 0 : r.state.pageModel;
    }
    rerender(r) {
      var n;
      return (n = this.renderRef.current) == null ? void 0 : n.rerender(r);
    }
    getInstancesById(r, n) {
      let o = [...(this.instanceManager.get(r) || [])];
      return n !== void 0 && (o = o.filter((a) => n === (a == null ? void 0 : a._UNIQUE_ID))), o;
    }
    getInstanceByDom(r) {
      const n = Ko(r);
      if (!n) return null;
      const o = Zo(n);
      return (o == null ? void 0 : o.stateNode) || null;
    }
    getDomsById(r, n) {
      const o = this.getInstancesById(r),
        a = [];
      return (
        o == null ||
          o.forEach((s) => {
            if ((s == null ? void 0 : s._STATUS) === 'DESTROY') return;
            const i = sa.findDOMNode(s);
            if (i && !(i instanceof Text))
              if (n) {
                const c = Array.from(i.querySelectorAll(n));
                a.push(...c);
              } else a.push(i);
          }),
        a
      );
    }
    getDomRectById(r, n) {
      return this.getDomsById(r, n)
        .map((s) => (s == null ? void 0 : s.getBoundingClientRect()))
        .filter(Boolean);
    }
    render() {
      const { props: r, onGetComponent: n } = this,
        { render: o, ...a } = r;
      return (
        o && (o.ref.current = this),
        O.default.createElement(Qo, {
          onGetComponent: n,
          ...a,
          processNodeConfigHook: (s, i) => {
            var h, y;
            if (i.nodeType !== 'NODE') return s;
            const { props: c, condition: u } = s;
            let l = { ...c };
            const d = ((h = i.value.configure) == null ? void 0 : h.devState) || {},
              f = (y = i.material) == null ? void 0 : y.value.fixedProps;
            if (f !== void 0) {
              if (Dt(f)) l = { ...l, ...f };
              else if (typeof f === 'function') {
                const _ = f(l);
                l = { ...l, ..._ };
              }
            }
            let p = u;
            return d.condition === !1 && (p = d.condition), { props: ov(l, d.props || {}), condition: p };
          },
          ref: this.renderRef,
        })
      );
    }
  }
  const Ko = (t) => {
      if (!t) return null;
      const e =
        Object.keys(t).find((r) => r.startsWith('__reactInternalInstance$') || r.startsWith('__reactFiber$')) || '';
      return e ? t[e] : Ko(t.parentElement);
    },
    Zo = (t) => {
      var e;
      return t ? ((e = t == null ? void 0 : t.stateNode) != null && e._DESIGN_BOX ? t : Zo(t.return)) : null;
    },
    jv = () => {
      const t = D.useRef(null);
      return {
        ref: t,
        rerender: function (...e) {
          t.current && t.current.rerender(...e);
        },
        getInstancesById(e, r) {
          var n;
          return ((n = t.current) == null ? void 0 : n.getInstancesById(e, r)) || [];
        },
        getInstanceByDom(e) {
          var r;
          return ((r = t.current) == null ? void 0 : r.getInstanceByDom(e)) || null;
        },
        getDomsById(e, r) {
          var n;
          return ((n = t.current) == null ? void 0 : n.getDomsById(e, r)) || [];
        },
        getDomRectById(e, r) {
          var n;
          return ((n = t.current) == null ? void 0 : n.getDomRectById(e, r)) || [];
        },
      };
    };
  var Sv =
      typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : typeof self < 'u'
        ? self
        : {},
    ta = { exports: {} };
  (function (t, e) {
    (function (r, n) {
      t.exports = n();
    })(Sv, function () {
      var r = function () {},
        n = {},
        o = {},
        a = {};
      function s(f, p) {
        f = f.push ? f : [f];
        var h = [],
          y = f.length,
          _ = y,
          S,
          w,
          I,
          M;
        for (
          S = function (L, q) {
            q.length && h.push(L), _--, _ || p(h);
          };
          y--;

        ) {
          if (((w = f[y]), (I = o[w]), I)) {
            S(w, I);
            continue;
          }
          (M = a[w] = a[w] || []), M.push(S);
        }
      }
      function i(f, p) {
        if (f) {
          var h = a[f];
          if (((o[f] = p), !!h)) for (; h.length; ) h[0](f, p), h.splice(0, 1);
        }
      }
      function c(f, p) {
        f.call && (f = { success: f }), p.length ? (f.error || r)(p) : (f.success || r)(f);
      }
      function u(f, p, h, y) {
        var _ = document,
          S = h.async,
          w = (h.numRetries || 0) + 1,
          I = h.before || r,
          M = f.replace(/[\?|#].*$/, ''),
          L = f.replace(/^(css|img|module|nomodule)!/, ''),
          q,
          Lt,
          N;
        if (((y = y || 0), /(^css!|\.css$)/.test(M)))
          (N = _.createElement('link')),
            (N.rel = 'stylesheet'),
            (N.href = L),
            (q = 'hideFocus' in N),
            q && N.relList && ((q = 0), (N.rel = 'preload'), (N.as = 'style'));
        else if (/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(M)) (N = _.createElement('img')), (N.src = L);
        else if (
          ((N = _.createElement('script')),
          (N.src = L),
          (N.async = S === void 0 ? !0 : S),
          (Lt = 'noModule' in N),
          /^module!/.test(M))
        ) {
          if (!Lt) return p(f, 'l');
          N.type = 'module';
        } else if (/^nomodule!/.test(M) && Lt) return p(f, 'l');
        (N.onload =
          N.onerror =
          N.onbeforeload =
            function (ne) {
              var F = ne.type[0];
              if (q)
                try {
                  N.sheet.cssText.length || (F = 'e');
                } catch (it) {
                  it.code != 18 && (F = 'e');
                }
              if (F == 'e') {
                if (((y += 1), y < w)) return u(f, p, h, y);
              } else if (N.rel == 'preload' && N.as == 'style') return (N.rel = 'stylesheet');
              p(f, F, ne.defaultPrevented);
            }),
          I(f, N) !== !1 && _.head.appendChild(N);
      }
      function l(f, p, h) {
        f = f.push ? f : [f];
        var y = f.length,
          _ = y,
          S = [],
          w,
          I;
        for (
          w = function (M, L, q) {
            if ((L == 'e' && S.push(M), L == 'b'))
              if (q) S.push(M);
              else return;
            y--, y || p(S);
          },
            I = 0;
          I < _;
          I++
        )
          u(f[I], w, h);
      }
      function d(f, p, h) {
        var y, _;
        if ((p && p.trim && (y = p), (_ = (y ? h : p) || {}), y)) {
          if (y in n) throw 'LoadJS';
          n[y] = !0;
        }
        function S(w, I) {
          l(
            f,
            function (M) {
              c(_, M), w && c({ success: w, error: I }, M), i(y, M);
            },
            _
          );
        }
        if (_.returnPromise) return new Promise(S);
        S();
      }
      return (
        (d.ready = function (p, h) {
          return (
            s(p, function (y) {
              c(h, y);
            }),
            d
          );
        }),
        (d.done = function (p) {
          i(p, []);
        }),
        (d.reset = function () {
          (n = {}), (o = {}), (a = {});
        }),
        (d.isDefined = function (p) {
          return p in n;
        }),
        d
      );
    });
  })(ta);
  const ea = ta.exports;
  class Ov {
    constructor(e) {
      g(this, 'assets');
      g(this, 'loadStatus');
      g(this, '_onSuccessList', []);
      g(this, '_onErrorList', []);
      (this.assets = e), (this.loadStatus = 'INIT');
    }
    load() {
      const e = this.assets || [],
        r = [];
      for (let n = 0; n < e.length; n++) {
        const o = e[n];
        o.id || (o.id = Z()), r.push(o.id);
        const a = o.resources.map((s) => s.src);
        ea(a, o.id, { async: !1 });
      }
      if (e.length === 0) {
        this._onSuccessList.forEach((n) => n());
        return;
      }
      return (
        setTimeout(() => {
          ea.ready(r, {
            success: () => {
              this._onSuccessList.forEach((n) => n());
            },
            error: (n) => {
              this._onErrorList.forEach((o) => o(n));
            },
          });
        }, 0),
        this
      );
    }
    onSuccess(e) {
      return this._onSuccessList.push(e), this;
    }
    onError(e) {
      return this._onErrorList.push(e), this;
    }
  }
  (b.AssetLoader = Ov),
    (b.ComponentInstanceManager = Yo),
    (b.DefaultDropPlaceholder = Xo),
    (b.DefineReactAdapter = qo),
    (b.DesignRender = _v),
    (b.ReactAdapter = pv),
    (b.Render = Qo),
    (b.getAdapter = Rr),
    (b.useDesignRender = jv),
    (b.useRender = gv),
    Object.defineProperties(b, { __esModule: { value: !0 }, [Symbol.toStringTag]: { value: 'Module' } });
});
//# sourceMappingURL=index.umd.js.map
