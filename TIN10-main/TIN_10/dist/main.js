!(function(e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function(e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function(e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "dist/"),
    n((n.s = 0));
})([
  function(e, t, n) {
    "use strict";
    function r(e) {
      return (55 * (Number(e) - 32)) / 100;
    }
    function o(e) {
      return (9 * Number(e)) / 5 + 32;
    }
    n.r(t);
    const u = e => 1.609344 * e,
      i = e => 0.62148 * e;
    function c(e, t, n) {
      document.getElementById(`${n}`).innerHTML = `Result: ${t} ${e}`;
    }
    function d(e, t) {
      return `${t(document.getElementById(e).value)}`;
    }
    document
      .getElementById("btnConvertToCels")
      .addEventListener("click", () => {
        c("°C", d("tempToConvert", r), "tempConversionOutput");
      }),
      document
        .getElementById("btnConvertToFahr")
        .addEventListener("click", () => {
          c("°F", d("tempToConvert", o), "tempConversionOutput");
        }),
      document
        .getElementById("btnConvertToMiles")
        .addEventListener("click", () => {
          c("miles", d("distToConvert", i), "distConversionOutput");
        }),
      document
        .getElementById("btnConvertToKm")
        .addEventListener("click", () => {
          c("km", d("distToConvert", u), "distConversionOutput");
        });
  }
]);
