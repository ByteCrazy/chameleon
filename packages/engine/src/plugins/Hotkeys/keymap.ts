export const isff = typeof navigator !== 'undefined' ? navigator.userAgent.toLowerCase().indexOf('firefox') > 0 : false;

// Special Keys
export const _keyMap: Record<string, number> = {
  backspace: 8,
  '⌫': 8,
  tab: 9,
  clear: 12,
  enter: 13,
  '↩': 13,
  return: 13,
  esc: 27,
  escape: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  del: 46,
  delete: 46,
  ins: 45,
  insert: 45,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  capslock: 20,
  num_0: 96,
  num_1: 97,
  num_2: 98,
  num_3: 99,
  num_4: 100,
  num_5: 101,
  num_6: 102,
  num_7: 103,
  num_8: 104,
  num_9: 105,
  num_multiply: 106,
  num_add: 107,
  num_enter: 108,
  num_subtract: 109,
  num_decimal: 110,
  num_divide: 111,
  '⇪': 20,
  ',': 188,
  '.': 190,
  '/': 191,
  '`': 192,
  '-': isff ? 173 : 189,
  '=': isff ? 61 : 187,
  ';': isff ? 59 : 186,
  // eslint-disable-next-line quotes
  "'": 222,
  '[': 219,
  ']': 221,
  '\\': 220,
};

// Modifier Keys
export const _modifier: any = {
  // shiftKey
  '⇧': 16,
  shift: 16,
  // altKey
  '⌥': 18,
  alt: 18,
  option: 18,
  // ctrlKey
  '⌃': 17,
  ctrl: 17,
  control: 17,
  // metaKey
  '⌘': 91,
  cmd: 91,
  command: 91,
};

export const modifierMap = {
  16: 'shiftKey',
  18: 'altKey',
  17: 'ctrlKey',
  91: 'metaKey',

  shiftKey: 16,
  ctrlKey: 17,
  altKey: 18,
  metaKey: 91,
};

export const _mods = {
  16: false,
  18: false,
  17: false,
  91: false,
};

// F1~F12 special key
for (let k = 1; k < 20; k++) {
  _keyMap[`f${k}`] = 111 + k;
}

// 返回键码
export const defaultGetCode = (x: string) =>
  _keyMap[x.toLowerCase()] || _modifier[x.toLowerCase()] || x.toUpperCase().charCodeAt(0);

const getKey = (x: number) => Object.keys(_keyMap).find((k) => _keyMap[k] === x);
const getModifier = (x: number) => Object.keys(_modifier).find((k) => _modifier[k] === x);

export const getKeyString = (c: number) => {
  return getKey(c) || getModifier(c) || String.fromCharCode(c);
};
