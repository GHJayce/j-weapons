const C = (t) => Object.prototype.toString.call(t), g = (t) => {
  const r = C(t);
  return r.substring(r.lastIndexOf(" ") + 1, r.lastIndexOf("]")).toLowerCase();
}, a = (t, r) => {
  const n = g(r);
  let e = "";
  if (typeof t != "string" ? e = t.join() : e = t, t.indexOf(n) === -1)
    throw new Error(`j-weapons: The data type is not accepted.
Give: ${n}.
Allow types by getType: ${e}.
`);
}, w = (t) => {
  a(
    [
      "string",
      "array",
      "int8array",
      "uint8array",
      "uint8clampedarray",
      "int16array",
      "uint16array",
      "int32array",
      "uint32array",
      "float32array",
      "float64array",
      "bigint64array",
      "biguint64array",
      "object",
      "arraybuffer",
      "sharedarraybuffer",
      "dataview"
    ],
    t
  );
  const r = g(t);
  let n = 0;
  switch (r) {
    case "string":
    case "array":
    case "int8array":
    case "uint8array":
    case "uint8clampedarray":
    case "int16array":
    case "uint16array":
    case "int32array":
    case "uint32array":
    case "float32array":
    case "float64array":
    case "bigint64array":
    case "biguint64array":
    case "object":
      n = Object.keys(t).length;
      break;
    case "arraybuffer":
    case "sharedarraybuffer":
    case "dataview":
      "byteLength" in t && (n = t.byteLength);
      break;
  }
  return n;
}, R = (t, r) => {
  a(["string", "array", "object"], t);
  const n = g(t);
  let e;
  if (n === "object") {
    const o = Object.keys(t), s = Object.values(t).indexOf(r);
    e = s === -1 ? s : o[s];
  } else
    e = t.indexOf(r);
  return e;
}, O = (t, r) => R(t, r) !== -1, l = (t, r = !1) => {
  const n = g(t);
  let e;
  switch (r = r === void 0 ? !1 : r, n) {
    case "object":
    case "array":
    case "int8array":
    case "uint8array":
    case "uint8clampedarray":
    case "int16array":
    case "uint16array":
    case "int32array":
    case "uint32array":
    case "float32array":
    case "float64array":
    case "bigint64array":
    case "biguint64array":
    case "arraybuffer":
    case "sharedarraybuffer":
    case "dataview":
      e = w(t) === 0;
      break;
    case "number":
      e = t !== t || t === 0;
      break;
    case "string":
      const o = t.clueTrim(), s = o.toLower(), u = ["0", "null", "undefined", "false"];
      let f = [""];
      r || f.push(...u), e = O(f, s), e = r ? e : e || o === "NaN";
      break;
    case "undefined":
    case "null":
      e = !0;
      break;
    case "boolean":
      e = !t;
      break;
    default:
      e = t.toString() === "";
      break;
  }
  return e;
}, x = (t) => g(t) === "number" && t !== t, v = (t) => g(t) === "number" && !x(t) && t % 1 != 0, y = (t) => t != null && !x(t) && t !== !1, d = (t) => t / 1, I = (t) => (a(["string", "array"], t), Object.assign({}, t)), S = (t) => decodeURIComponent(t), N = (t) => encodeURIComponent(t), j = (t) => {
  const r = t.indexOf("#"), n = t.indexOf("?");
  return n === -1 ? {} : t.substring(
    n + 1,
    r !== -1 ? r : t.length
  ).split("&").filter((o) => o).map((o) => {
    let s = o.split("=");
    if (s.length > 2) {
      const u = s.shift(), f = s.join("=");
      s = [u, f];
    }
    return s;
  }).reduce((o, s) => (o[S(s[0].trim())] = s[1] === void 0 ? "" : S(s[1].trim()), o), {});
}, U = (t, r, n) => {
  n = n || void 0;
  const e = j(t);
  return y(e[r]) ? e[r] : n;
}, $ = (t, r) => (r = r || void 0, window && window.location && window.location.href ? U(window.location.href, t, r) : r), P = () => window && window.location && window.location.href ? j(window.location.href) : {}, m = (t, r, n) => {
  if (!y(r))
    return t;
  n = y(n) ? n : "";
  const o = t.length - 1;
  let s = [], u = j(t);
  g(r) === "object" ? u = Object.assign(u, r) : u[String(r)] = String(n);
  let f;
  for (f in u)
    s.push(f + "=" + u[f]);
  let h = s.join("&"), c = t.indexOf("?"), i = t.indexOf("#");
  return c === -1 && (c = o, h = "?" + h), i = i === -1 ? o + 1 : i - 1, t.rangeIndexReplace(h, c + 1, i);
}, T = (t, r) => window && window.location && window.location.href ? m(window.location.href, t, r) : m("", t, r), A = (t) => {
  if (a("object", t), l(t))
    return;
  const r = 0, n = Object.keys(t)[r], e = Object.values(t)[r];
  let o = {};
  return o[n] = e, o;
}, F = (t) => (a("object", t), Object.keys(t)[0]), G = (t) => {
  if (a("object", t), l(t))
    return;
  const r = w(t) - 1, n = Object.keys(t)[r], e = Object.values(t)[r];
  let o = {};
  return o[n] = e, o;
}, K = (t) => (a("object", t), Object.keys(t)[w(t) - 1]), J = (t, r) => (a("object", t), a(["string", "number", "boolean"], r), O(Object.keys(t), r.toString())), H = (t, r) => {
  a("object", t), r = r ? d(r) : 1;
  let n = [];
  switch (r) {
    case 1:
      n = Object.values(t);
      break;
    case 2:
      n = [t];
      break;
  }
  return n;
}, E = (t) => {
  const r = (c) => t.getItem(c), n = (c, i) => t.setItem(c, i);
  return {
    hGet: (c) => {
      let i = t.getItem(c);
      return JSON.parse(i);
    },
    hSet: (c, i) => t.setItem(c, JSON.stringify(i)),
    get: r,
    set: n,
    incr: (c, i) => {
      i = i || 1;
      let p = r(c);
      p = p || "0";
      let b = Number(p);
      return b += i, n(c, String(b)), b;
    },
    decr: (c, i) => {
      i = i || 1;
      let p = r(c);
      p = p || "0";
      let b = Number(p);
      return b -= i, n(c, String(b)), b;
    },
    del: (...c) => {
      let i;
      for (i in c)
        t.removeItem(c[i]);
      return !0;
    },
    clear: () => {
      t.clear();
    }
  };
}, B = () => {
  if (l(window) || l(window.localStorage) || l(window.localStorage.getItem))
    throw new Error("j-weapons: window.localStorage is not defined.");
  return E(window.localStorage);
}, W = () => {
  if (l(window) || l(window.sessionStorage) || l(window.sessionStorage.getItem))
    throw new Error("j-weapons: window.sessionStorage is not defined.");
  return E(window.sessionStorage);
}, _ = (t) => (t = t || "local", t === "session" ? W() : B()), k = (t) => {
  a(["array", "object"], t);
  let r = g(t) === "object" ? {} : [], n;
  for (n in t)
    g(t[n]) === "object" ? r[n] = k(t[n]) : r[n] = t[n];
  return r;
}, q = (t) => {
  a("function", t);
  const r = t.toString(), n = /[function[\s\S]*?]{0,}\(([\s\S]*?)\)/.exec(r);
  let e = [];
  return n && !l(n[1]) && (e = n[1].replace(/\s/g, "").split(",")), e;
}, z = (t) => {
  a(["string", "array", "object"], t);
  const r = g(t);
  let n = 0;
  return r === "object" && (n = Object.keys(t)[n]), t[n];
}, D = (t) => {
  a(["string", "array", "object"], t);
  const r = g(t);
  let n = w(t) - 1;
  return r === "object" && (n = Object.keys(t)[n]), t[n];
}, M = (t, r, n) => (a("array", t), a(["string", "null"], r), n = n || void 0, a(["string", "undefined"], n), n !== void 0 ? Object.fromEntries(
  t.map((e) => [e[n], r === null ? e : e[r]])
) : t.map((e) => r ? e[r] : e)), L = (t) => (t = t || "\\s", t.split(",").join("|"));
String.prototype.clueTrim = function(t) {
  const r = L(t), n = `^([${r}]*)|([${r}]*)$`;
  return this.replace(new RegExp(n, "g"), "");
};
String.prototype.clueTrimLeft = function(t) {
  const n = `^([${L(t)}]*)`;
  return this.replace(new RegExp(n), "");
};
String.prototype.clueTrimRight = function(t) {
  const n = `([${L(t)}]*)$`;
  return this.replace(new RegExp(n, "g"), "");
};
String.prototype.toLower = function() {
  return this.toLocaleLowerCase();
};
String.prototype.toUpper = function() {
  return this.toLocaleUpperCase();
};
String.prototype.insert = function(t, r) {
  const n = this.substring(0, r), e = this.substring(r);
  return n + t + e;
};
String.prototype.indexReplace = function(t, r) {
  const n = this.split("");
  return n.splice(r, 1, t), n.join("");
};
String.prototype.rangeIndexReplace = function(t, r, n) {
  const e = this.length;
  if (r === void 0)
    return this.toString();
  if (n = n || e, !y(r) || n < r)
    return this.toString();
  n = n >= e ? e : n, r = r >= e ? e : r;
  const o = this.substring(0, r), s = this.substring(n + 1, this.length);
  return o + t + s;
};
String.prototype.getShowCount = function(t) {
  return this.split(t).length - 1;
};
String.prototype.getShowCounts = function() {
  let t = {};
  if (this && !l(this)) {
    let r = this.split("").sort().join("").match(/(.)\1*/g);
    if (r)
      return r.reduce((n, e) => (n[e[0]] = e.length, n), {});
  }
  return t;
};
String.prototype.batchReplace = function(t) {
  let r = Object.keys(t);
  const n = [
    "\\",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "|",
    "-",
    "+",
    "*",
    "?",
    "!",
    "^",
    "$",
    "."
  ];
  let e;
  for (e in r) {
    let u = n.indexOf(r[e]);
    u !== -1 && (r[e] = "\\" + n[u]);
  }
  const o = "(" + r.join("|") + ")", s = new RegExp(o, "g");
  return this.replace(s, function(u, f) {
    return t[f];
  });
};
String.prototype.sprintf = function(...t) {
  let r = this, n;
  for (n in t)
    r = r.replace(/%s/, t[n]);
  return r;
};
const Q = "1.6.0", X = {
  version: Q,
  getFirstItem: A,
  getFirstKey: F,
  getLastItem: G,
  getLastKey: K,
  hasKey: J,
  toArray: H,
  cache: _,
  deepCopy: k,
  getCallbackArguments: q,
  getFirstVal: z,
  getLastVal: D,
  getLength: w,
  has: O,
  hasGetIndex: R,
  pluck: M,
  getType: g,
  isEmpty: l,
  isFloat: v,
  isRealNaN: x,
  isSet: y,
  reportExceptType: a,
  toNumber: d,
  toObject: I,
  typeofStr: C,
  decodeUrl: S,
  encodeUrl: N,
  getCurrentUrlParam: $,
  getCurrentUrlParams: P,
  setCurrentUrlParams: T,
  getUrlParam: U,
  getUrlParams: j,
  setUrlParams: m
};
export {
  X as default
};
