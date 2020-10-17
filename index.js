module.exports = (function (e) {
    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var i = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
    }
    return (
        (r.m = e),
            (r.c = t),
            (r.d = function (e, t, n) {
                r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function (e, t) {
                if ((1 & t && (e = r(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var n = Object.create(null);
                if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        r.d(
                            n,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return n;
            }),
            (r.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return r.d(t, "a", t), t;
            }),
            (r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 11))
    );
})([
    function (e, t) {
        e.exports = require("react");
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t) {
            return (
                t || (t = {}),
                    "string" != typeof (e = e && e.__esModule ? e.default : e)
                        ? e
                        : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
            );
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var r = (function (e, t) {
                            var r = e[1] || "",
                                n = e[3];
                            if (!n) return r;
                            if (t && "function" == typeof btoa) {
                                var i = ((o = n), (c = btoa(unescape(encodeURIComponent(JSON.stringify(o))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(u, " */")),
                                    a = n.sources.map(function (e) {
                                        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */");
                                    });
                                return [r].concat(a).concat([i]).join("\n");
                            }
                            var o, c, u;
                            return [r].join("\n");
                        })(t, e);
                        return t[2] ? "@media ".concat(t[2], " {").concat(r, "}") : r;
                    }).join("");
                }),
                    (t.i = function (e, r, n) {
                        "string" == typeof e && (e = [[null, e, ""]]);
                        var i = {};
                        if (n)
                            for (var a = 0; a < this.length; a++) {
                                var o = this[a][0];
                                null != o && (i[o] = !0);
                            }
                        for (var c = 0; c < e.length; c++) {
                            var u = [].concat(e[c]);
                            (n && i[u[0]]) || (r && (u[2] ? (u[2] = "".concat(r, " and ").concat(u[2])) : (u[2] = r)), t.push(u));
                        }
                    }),
                    t
            );
        };
    },
    function (e, t, r) {
        "use strict";
        t.a =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjgzMTYgMTIuMDA4MkwyMy40MzE2IDMuNDI4MThDMjMuODA4MiAzLjA1MTU4IDI0LjAxOTggMi41NDA3OSAyNC4wMTk4IDIuMDA4MThDMjQuMDE5OCAxLjQ3NTU4IDIzLjgwODIgMC45NjQ3OTEgMjMuNDMxNiAwLjU4ODE4M0MyMy4wNTUgMC4yMTE1NzYgMjIuNTQ0MiAwIDIyLjAxMTYgMEMyMS40NzkgMCAyMC45NjgyIDAuMjExNTc2IDIwLjU5MTYgMC41ODgxODNMMTIuMDExNiA5LjE4ODE4TDMuNDMxNiAwLjU4ODE4M0MzLjA1NDk5IDAuMjExNTc2IDIuNTQ0MiAtMy45NjgyZS0wOSAyLjAxMTYgMEMxLjQ3ODk5IDMuOTY4MjFlLTA5IDAuOTY4MjA0IDAuMjExNTc2IDAuNTkxNTk3IDAuNTg4MTgzQzAuMjE0OTg5IDAuOTY0NzkxIDAuMDAzNDEzMiAxLjQ3NTU4IDAuMDAzNDEzMiAyLjAwODE4QzAuMDAzNDEzMiAyLjU0MDc5IDAuMjE0OTg5IDMuMDUxNTggMC41OTE1OTcgMy40MjgxOEw5LjE5MTYgMTIuMDA4MkwwLjU5MTU5NyAyMC41ODgyQzAuNDA0MTQgMjAuNzc0MSAwLjI1NTM1MiAyMC45OTUzIDAuMTUzODE0IDIxLjIzOUMwLjA1MjI3NyAyMS40ODI3IDAgMjEuNzQ0MiAwIDIyLjAwODJDMCAyMi4yNzIyIDAuMDUyMjc3IDIyLjUzMzYgMC4xNTM4MTQgMjIuNzc3M0MwLjI1NTM1MiAyMy4wMjExIDAuNDA0MTQgMjMuMjQyMyAwLjU5MTU5NyAyMy40MjgyQzAuNzc3NTIzIDIzLjYxNTYgMC45OTg3MjUgMjMuNzY0NCAxLjI0MjQ0IDIzLjg2NkMxLjQ4NjE2IDIzLjk2NzUgMS43NDc1NyAyNC4wMTk4IDIuMDExNiAyNC4wMTk4QzIuMjc1NjIgMjQuMDE5OCAyLjUzNzAzIDIzLjk2NzUgMi43ODA3NSAyMy44NjZDMy4wMjQ0NyAyMy43NjQ0IDMuMjQ1NjcgMjMuNjE1NiAzLjQzMTYgMjMuNDI4MkwxMi4wMTE2IDE0LjgyODJMMjAuNTkxNiAyMy40MjgyQzIwLjc3NzUgMjMuNjE1NiAyMC45OTg3IDIzLjc2NDQgMjEuMjQyNCAyMy44NjZDMjEuNDg2MiAyMy45Njc1IDIxLjc0NzYgMjQuMDE5OCAyMi4wMTE2IDI0LjAxOThDMjIuMjc1NiAyNC4wMTk4IDIyLjUzNyAyMy45Njc1IDIyLjc4MDggMjMuODY2QzIzLjAyNDUgMjMuNzY0NCAyMy4yNDU3IDIzLjYxNTYgMjMuNDMxNiAyMy40MjgyQzIzLjYxOTEgMjMuMjQyMyAyMy43Njc4IDIzLjAyMTEgMjMuODY5NCAyMi43NzczQzIzLjk3MDkgMjIuNTMzNiAyNC4wMjMyIDIyLjI3MjIgMjQuMDIzMiAyMi4wMDgyQzI0LjAyMzIgMjEuNzQ0MiAyMy45NzA5IDIxLjQ4MjcgMjMuODY5NCAyMS4yMzlDMjMuNzY3OCAyMC45OTUzIDIzLjYxOTEgMjAuNzc0MSAyMy40MzE2IDIwLjU4ODJMMTQuODMxNiAxMi4wMDgyWiIgZmlsbD0iI0ZCRkJGQiIvPgo8L3N2Zz4K";
    },
    function (e, t, r) {
        "use strict";
        t.a =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE3LjY4OTcgMTYuMDQ4OUwxMy4yODAyIDExLjY1ODlDMTQuMTE5MSAxMC40ODgyIDE0LjYwNjkgOS4wNjM5NCAxNC42MDY5IDcuNTIyNTZDMTQuNjA2OSAzLjYwMDg0IDExLjQ0NjEgMC40NDAwNDggNy41MjQ0MSAwLjQ0MDA0OEMzLjYwMjY5IDAuNDQwMDQ4IDAuNDQxODk1IDMuNjAwODQgMC40NDE4OTUgNy41MjI1NkMwLjQ0MTg5NSAxMS40NDQzIDMuNjAyNjkgMTQuNjA1MSA3LjUyNDQxIDE0LjYwNTFDOS4wNDYyNyAxNC42MDUxIDEwLjQ3MDYgMTQuMTE3MyAxMS42MjE3IDEzLjI5NzhMMTYuMDMxMiAxNy43MDczQzE2LjQyMTUgMTguMDk3NiAxNy4wODQ4IDE4LjA5NzYgMTcuNDc1IDE3LjcwNzNMMTcuNjg5NyAxNy40OTI3QzE4LjA3OTkgMTcuMTAyNSAxOC4wNzk5IDE2LjQ1ODYgMTcuNjg5NyAxNi4wNDg5Wk03LjUyNDQxIDEyLjQ5NzlDNC43NzMzNSAxMi40OTc5IDIuNTQ5MDkgMTAuMjczNiAyLjU0OTA5IDcuNTIyNTZDMi41NDkwOSA0Ljc3MTUgNC43NzMzNSAyLjU0NzI0IDcuNTI0NDEgMi41NDcyNEMxMC4yNzU1IDIuNTQ3MjQgMTIuNDk5NyA0Ljc3MTUgMTIuNDk5NyA3LjUyMjU2QzEyLjQ5OTcgMTAuMjczNiAxMC4yNzU1IDEyLjQ5NzkgNy41MjQ0MSAxMi40OTc5WiIgZmlsbD0iI0ZCRkJGQiIvPgo8cGF0aCBkPSJNOS44NjU4MSA2LjYyNDgySDguMzgyOTdWNS4xNDE5OEM4LjM4Mjk3IDQuNjU0MjEgNy45OTI3NSA0LjI2Mzk4IDcuNTA0OTcgNC4yNjM5OEM3LjAxNzE5IDQuMjYzOTggNi42MjY5NyA0LjY1NDIxIDYuNjI2OTcgNS4xNDE5OFY2LjYyNDgySDUuMTYzNjRDNC42NzU4NyA2LjYyNDgyIDQuMjg1NjQgNy4wMTUwNCA0LjI4NTY0IDcuNTAyODJDNC4yODU2NCA3Ljk5MDYgNC42NzU4NyA4LjM4MDgyIDUuMTYzNjQgOC4zODA4Mkg2LjY0NjQ4VjkuODYzNjZDNi42NDY0OCAxMC4zNTE0IDcuMDM2NyAxMC43NDE3IDcuNTI0NDggMTAuNzQxN0M4LjAxMjI2IDEwLjc0MTcgOC40MDI0OCAxMC4zNTE0IDguNDAyNDggOS44NjM2NlY4LjM4MDgySDkuODg1MzJDMTAuMzczMSA4LjM4MDgyIDEwLjc2MzMgNy45OTA2IDEwLjc2MzMgNy41MDI4MkMxMC43NjMzIDcuMDE1MDQgMTAuMzUzNiA2LjYyNDgyIDkuODY1ODEgNi42MjQ4MloiIGZpbGw9IiNGQkZCRkIiLz4KPC9zdmc+Cg==";
    },
    function (e, t, r) {
        "use strict";
        t.a =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjI5NjkgMy41NjI1SDEyLjcwMzFDMTIuODI4MSAzLjU2MjUgMTIuODkwNiAzLjYyNSAxMi44OTA2IDMuNzVWMjAuMjVDMTIuODkwNiAyMC4zNzUgMTIuODI4MSAyMC40Mzc1IDEyLjcwMzEgMjAuNDM3NUgxMS4yOTY5QzExLjE3MTkgMjAuNDM3NSAxMS4xMDk0IDIwLjM3NSAxMS4xMDk0IDIwLjI1VjMuNzVDMTEuMTA5NCAzLjYyNSAxMS4xNzE5IDMuNTYyNSAxMS4yOTY5IDMuNTYyNVoiIGZpbGw9IiMwMDc5QzEiLz4KPHBhdGggZD0iTTQuMTI1IDExLjEwOTRIMTkuODc1QzIwIDExLjEwOTQgMjAuMDYyNSAxMS4xNzE5IDIwLjA2MjUgMTEuMjk2OVYxMi43MDMxQzIwLjA2MjUgMTIuODI4MSAyMCAxMi44OTA2IDE5Ljg3NSAxMi44OTA2SDQuMTI1QzQgMTIuODkwNiAzLjkzNzUgMTIuODI4MSAzLjkzNzUgMTIuNzAzMVYxMS4yOTY5QzMuOTM3NSAxMS4xNzE5IDQgMTEuMTA5NCA0LjEyNSAxMS4xMDk0WiIgZmlsbD0iIzAwNzlDMSIvPgo8L3N2Zz4K";
    },
    function (e, t, r) {
        "use strict";
        t.a =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAxNyAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNi40MTQyIDAuNTg1Nzg2QzE3LjE5NTMgMS4zNjY4MyAxNy4xOTUzIDIuNjMzMTYgMTYuNDE0MiAzLjQxNDIxTDUuODI4NDMgMTRMMTYuNDE0MiAyNC41ODU4QzE3LjE5NTMgMjUuMzY2OCAxNy4xOTUzIDI2LjYzMzIgMTYuNDE0MiAyNy40MTQyQzE1LjYzMzIgMjguMTk1MyAxNC4zNjY4IDI4LjE5NTMgMTMuNTg1OCAyNy40MTQyTDAuMTcxNTc1IDE0TDEzLjU4NTggMC41ODU3ODZDMTQuMzY2OCAtMC4xOTUyNjIgMTUuNjMzMiAtMC4xOTUyNjIgMTYuNDE0MiAwLjU4NTc4NloiIGZpbGw9IiNGQkZCRkIiLz4KPC9zdmc+Cg==";
    },
    function (e, t, r) {
        "use strict";
        t.a =
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAxNyAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjU4NTc4NyAyNy40MTQyQy0wLjE5NTI2MiAyNi42MzMyIC0wLjE5NTI2MiAyNS4zNjY4IDAuNTg1Nzg2IDI0LjU4NThMMTEuMTcxNiAxNEwwLjU4NTc4NyAzLjQxNDIxQy0wLjE5NTI2MiAyLjYzMzE2IC0wLjE5NTI2MiAxLjM2NjgzIDAuNTg1Nzg3IDAuNTg1NzgxQzEuMzY2ODQgLTAuMTk1MjY3IDIuNjMzMTcgLTAuMTk1MjY3IDMuNDE0MjEgMC41ODU3ODFMMTYuODI4NCAxNEwzLjQxNDIxIDI3LjQxNDJDMi42MzMxNyAyOC4xOTUzIDEuMzY2ODQgMjguMTk1MyAwLjU4NTc4NyAyNy40MTQyWiIgZmlsbD0iI0ZCRkJGQiIvPgo8L3N2Zz4K";
    },
    function (e, t, r) {
        var n = r(9),
            i = r(10);
        "string" == typeof (i = i.__esModule ? i.default : i) && (i = [[e.i, i, ""]]);
        var a = { insert: "head", singleton: !1 };
        n(i, a);
        e.exports = i.locals || {};
    },
    function (e, t, r) {
        "use strict";
        var n,
            i = function () {
                return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
            },
            a = (function () {
                var e = {};
                return function (t) {
                    if (void 0 === e[t]) {
                        var r = document.querySelector(t);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                            try {
                                r = r.contentDocument.head;
                            } catch (e) {
                                r = null;
                            }
                        e[t] = r;
                    }
                    return e[t];
                };
            })(),
            o = [];
        function c(e) {
            for (var t = -1, r = 0; r < o.length; r++)
                if (o[r].identifier === e) {
                    t = r;
                    break;
                }
            return t;
        }
        function u(e, t) {
            for (var r = {}, n = [], i = 0; i < e.length; i++) {
                var a = e[i],
                    u = t.base ? a[0] + t.base : a[0],
                    l = r[u] || 0,
                    M = "".concat(u, " ").concat(l);
                r[u] = l + 1;
                var g = c(M),
                    s = { css: a[1], media: a[2], sourceMap: a[3] };
                -1 !== g ? (o[g].references++, o[g].updater(s)) : o.push({ identifier: M, updater: j(s, t), references: 1 }), n.push(M);
            }
            return n;
        }
        function l(e) {
            var t = document.createElement("style"),
                n = e.attributes || {};
            if (void 0 === n.nonce) {
                var i = r.nc;
                i && (n.nonce = i);
            }
            if (
                (Object.keys(n).forEach(function (e) {
                    t.setAttribute(e, n[e]);
                }),
                "function" == typeof e.insert)
            )
                e.insert(t);
            else {
                var o = a(e.insert || "head");
                if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                o.appendChild(t);
            }
            return t;
        }
        var M,
            g =
                ((M = []),
                    function (e, t) {
                        return (M[e] = t), M.filter(Boolean).join("\n");
                    });
        function s(e, t, r, n) {
            var i = r ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
            if (e.styleSheet) e.styleSheet.cssText = g(t, i);
            else {
                var a = document.createTextNode(i),
                    o = e.childNodes;
                o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(a, o[t]) : e.appendChild(a);
            }
        }
        function y(e, t, r) {
            var n = r.css,
                i = r.media,
                a = r.sourceMap;
            if ((i ? e.setAttribute("media", i) : e.removeAttribute("media"), a && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), e.styleSheet))
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n));
            }
        }
        var p = null,
            N = 0;
        function j(e, t) {
            var r, n, i;
            if (t.singleton) {
                var a = N++;
                (r = p || (p = l(t))), (n = s.bind(null, r, a, !1)), (i = s.bind(null, r, a, !0));
            } else
                (r = l(t)),
                    (n = y.bind(null, r, t)),
                    (i = function () {
                        !(function (e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e);
                        })(r);
                    });
            return (
                n(e),
                    function (t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                            n((e = t));
                        } else i();
                    }
            );
        }
        e.exports = function (e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = i());
            var r = u((e = e || []), t);
            return function (e) {
                if (((e = e || []), "[object Array]" === Object.prototype.toString.call(e))) {
                    for (var n = 0; n < r.length; n++) {
                        var i = c(r[n]);
                        o[i].references--;
                    }
                    for (var a = u(e, t), l = 0; l < r.length; l++) {
                        var M = c(r[l]);
                        0 === o[M].references && (o[M].updater(), o.splice(M, 1));
                    }
                    r = a;
                }
            };
        };
    },
    function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(2),
            i = r.n(n),
            a = r(1),
            o = r.n(a),
            c = r(3),
            u = r(4),
            l = r(5),
            M = r(6),
            g = r(7),
            s = i()(!1),
            y = o()(c.a),
            p = o()(u.a),
            N = o()(l.a),
            j = o()(M.a),
            d = o()(g.a);
        s.push([
            e.i,
            "@keyframes fade_in{from{opacity:0}to{opacity:1}}@keyframes fade_out{from{opacity:1}to{opacity:0;display:none}}.react-dynamic-gallery__icon_close{background:url(" +
            y +
            ") center no-repeat;background-size:cover;width:20px;height:20px;position:absolute}.gallery__item,.gallery__item::after,.gallery__add_btn,.gallery__more,.gallery__more::before{height:71px;width:71px;border-radius:5px}.gallery__item:hover::before,.gallery__add_btn::before{display:block;position:absolute;top:calc(50% - 7px);left:calc(50% - 9px);content:'';width:17px;height:17px;background-size:cover}.gallery__wrapper{display:flex;flex-direction:row;width:100%;flex-wrap:wrap}.gallery__item-wrapper{position:relative;margin:0 11px 14px 0}.gallery__item{position:relative;background-color:gray;cursor:pointer;background-size:cover;background-repeat:no-repeat;background-position:center}.gallery__item:last-child{margin-right:0}.gallery__item::after{content:'';display:block;background-color:transparent;transition:background-color .7s ease}.gallery__item:hover::after{background-color:rgba(0,0,0,0.4)}.gallery__item:hover::before{animation:fade_in .2s;background:url(" +
            p +
            ") center no-repeat}.gallery__add_btn{box-sizing:border-box;border:2px solid #0079C1;margin-right:11px;position:relative;cursor:pointer}.gallery__add_btn::before{background:url(" +
            N +
            ") center no-repeat}.gallery__more{display:flex;align-items:center;justify-content:center;background-size:150%;background-position:center;color:white;cursor:pointer;position:relative;transition:background-size .2s ease-in-out}.gallery__more span{z-index:1;font-family:sans-serif;font-weight:lighter;font-size:22px}.gallery__more:hover{background-size:200%}.gallery__more::before{content:'';top:0;left:0;position:absolute;display:block;background-color:rgba(0,0,0,0.4)}.pop_up__wrapper{animation:.2s fade_in;display:flex;flex-direction:column;position:fixed;z-index:3;background-color:rgba(0,0,0,0.5);top:0;left:0;width:100%;height:100%;box-sizing:border-box;overflow:auto;max-height:100%}.pop_up__wrapper .react-dynamic-gallery__icon_close{cursor:pointer;top:10%;right:5%}.pop_up__container{flex:1;display:flex;flex-direction:column;padding:5%;align-items:center;justify-content:center;box-sizing:border-box;max-height:100%;position:relative}.pop_up__image__active{display:flex;animation:.2s fade_in;flex:1;background-size:cover;background-position:center;box-shadow:0 4px 20px rgba(0,0,0,0.15);transition:background-image .3s ease-in-out;height:50%;max-width:80%;align-items:center;justify-content:center}.pop_up__image__active img{max-height:100%;max-width:100%}.pop_up__carousel{animation:.2s fade_in;margin-top:100px;display:flex;flex-direction:row;box-shadow:0 4px 20px rgba(0,0,0,0.15);position:relative}.pop_up__carousel>span{display:block;color:white;position:absolute;width:100%;text-align:center;top:-40px;font-weight:lighter;font-size:16px}.pop_up__carousel .gallery__item-wrapper{margin-right:20px}.pop_up__carousel .gallery__item{width:110px;height:110px;box-sizing:border-box;background-size:cover}.pop_up__carousel .gallery__item:last-child{margin-right:0}.pop_up__carousel .gallery__item::after,.pop_up__carousel .gallery__item::before{display:none}.pop_up__carousel .gallery__item:hover{box-shadow:0 0 0 2px #fff}.pop_up__carousel .gallery__item:hover::after,.pop_up__carousel .gallery__item:hover::before{display:none}.pop_up__carousel_image__active{box-shadow:0 0 0 2px #fff}.btn__arrow_left__big::after,.btn__arrow_left__small::after,.btn__arrow_right__big::after,.btn__arrow_right__small::after{content:'';z-index:-1;display:block;border-radius:5px;position:absolute;background-color:transparent;transition:background-color .1s ease}.btn__arrow,.btn__arrow_left,.btn__arrow_left__big,.btn__arrow_left__small,.btn__arrow_right,.btn__arrow_right__big,.btn__arrow_right__small{position:absolute;z-index:3;cursor:pointer}.btn__arrow_left,.btn__arrow_left__big,.btn__arrow_left__small{background:url(" +
            j +
            ") no-repeat;background-size:cover}.btn__arrow_left__big{top:calc(36% - 12px);left:calc(5% + 16px);width:17px;height:28px;z-index:auto}.btn__arrow_left__big::after{top:calc(50% - 21px);left:calc(50% - 15px);height:42px;width:34px}.btn__arrow_left__big:hover::after{background-color:#212833}.btn__arrow_left__small{top:calc(50% - 9px);left:-30px;width:9px;height:15px;z-index:auto}.btn__arrow_left__small::after{top:calc(50% - 16px);left:calc(50% - 10px);height:30px;width:22px}.btn__arrow_left__small:hover::after{background-color:#212833}.btn__arrow_right,.btn__arrow_right__big,.btn__arrow_right__small{background:url(" +
            d +
            ") center no-repeat;background-size:cover}.btn__arrow_right__big{top:calc(36% - 12px);right:calc(5% + 16px);width:16px;height:24px;z-index:auto}.btn__arrow_right__big::after{top:calc(50% - 21px);left:calc(50% - 18px);height:42px;width:34px}.btn__arrow_right__big:hover::after{background-color:#212833}.btn__arrow_right__small{top:calc(50% - 12px);right:-30px;width:9px;height:15px;z-index:auto}.btn__arrow_right__small::after{top:calc(50% - 16px);right:calc(50% - 10px);height:30px;width:22px}.btn__arrow_right__small:hover::after{background-color:#212833}.react-dynamic-gallery__delete-btn{content:'';position:absolute;top:-8px;right:-8px;cursor:pointer}\n",
            "",
        ]),
            (t.default = s);
    },
    function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0),
            i = r.n(n),
            a = function () {
                return i.a.createElement(
                    "svg",
                    { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                    i.a.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#2B3647" }),
                    i.a.createElement("path", {
                        d:
                            "M8.67391 8.00195L10.7215 5.95909C10.8112 5.86942 10.8616 5.74781 10.8616 5.621C10.8616 5.49419 10.8112 5.37257 10.7215 5.2829C10.6319 5.19323 10.5102 5.14286 10.3834 5.14286C10.2566 5.14286 10.135 5.19323 10.0453 5.2829L8.00248 7.33052L5.95962 5.2829C5.86996 5.19323 5.74834 5.14286 5.62153 5.14286C5.49472 5.14286 5.3731 5.19323 5.28343 5.2829C5.19377 5.37257 5.14339 5.49419 5.14339 5.621C5.14339 5.74781 5.19377 5.86942 5.28343 5.95909L7.33105 8.00195L5.28343 10.0448C5.2388 10.0891 5.20338 10.1417 5.1792 10.1998C5.15503 10.2578 5.14258 10.32 5.14258 10.3829C5.14258 10.4458 5.15503 10.508 5.1792 10.566C5.20338 10.6241 5.2388 10.6767 5.28343 10.721C5.3277 10.7656 5.38037 10.8011 5.4384 10.8252C5.49643 10.8494 5.55867 10.8619 5.62153 10.8619C5.68439 10.8619 5.74663 10.8494 5.80466 10.8252C5.86269 10.8011 5.91536 10.7656 5.95962 10.721L8.00248 8.67338L10.0453 10.721C10.0896 10.7656 10.1423 10.8011 10.2003 10.8252C10.2583 10.8494 10.3206 10.8619 10.3834 10.8619C10.4463 10.8619 10.5085 10.8494 10.5666 10.8252C10.6246 10.8011 10.6773 10.7656 10.7215 10.721C10.7662 10.6767 10.8016 10.6241 10.8258 10.566C10.8499 10.508 10.8624 10.4458 10.8624 10.3829C10.8624 10.32 10.8499 10.2578 10.8258 10.1998C10.8016 10.1417 10.7662 10.0891 10.7215 10.0448L8.67391 8.00195Z",
                        fill: "#CD4141",
                    })
                );
            },
            o = function (e) {
                var t = e.image,
                    r = e.onItemClick,
                    n = e.isDeleteEnable,
                    o = e.onDelete,
                    c = e.activityClassName,
                    u = void 0 === c ? "" : c;
                return i.a.createElement(
                    "div",
                    { className: "gallery__item-wrapper" },
                    i.a.createElement("div", {
                        className: "gallery__item ".concat(u),
                        style: { backgroundImage: "url('".concat(t.path, "')") },
                        onClick: function () {
                            return r(t);
                        },
                    }),
                    n &&
                    i.a.createElement(
                        "div",
                        {
                            className: "react-dynamic-gallery__delete-btn",
                            onClick: function () {
                                return o(t);
                            },
                        },
                        i.a.createElement(a, { width: 6, height: 6, color: "#CD4141" })
                    )
                );
            },
            c = function (e) {
                var t = e.source;
                return i.a.createElement("div", { className: "gallery__more", style: { backgroundImage: "url('".concat(t[0].path, "')") } }, i.a.createElement("span", null, "+".concat(t.length)));
            },
            u = function (e) {
                Object(n.useEffect)(function () {
                    return (
                        document.addEventListener("keydown", e),
                            function () {
                                return document.removeEventListener("keydown", e);
                            }
                    );
                });
            };
        function l(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return M(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return M(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return M(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function M(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        function g(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        (i = !0), (a = e);
                    } finally {
                        try {
                            n || null == c.return || c.return();
                        } finally {
                            if (i) throw a;
                        }
                    }
                    return r;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return s(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function s(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        var y = function (e) {
                var t = e.activeImage,
                    r = e.closePopUp,
                    a = e.imagesList,
                    c = e.slideActiveImage,
                    M = e.onGalleryItemClick,
                    s = e.itemsToShow,
                    y = g(Object(n.useState)([]), 2),
                    p = y[0],
                    N = y[1],
                    j = function (e) {
                        return a.findIndex(function (t) {
                            var r;
                            return t.id === (null === (r = p[e]) || void 0 === r ? void 0 : r.id);
                        });
                    },
                    d = function () {
                        var e = j(0) + 1,
                            t = j(s - 1) + 2,
                            r = (function (e, t, r) {
                                switch (!0) {
                                    case r > e.length:
                                        var n = e.slice(t),
                                            i = e.slice(0, r % e.length);
                                        return [].concat(l(n), l(i));
                                    case r < t:
                                        var a = e.slice(t),
                                            o = e.slice(0, r);
                                        return [].concat(l(a), l(o));
                                    default:
                                        return e.slice(t, r);
                                }
                            })(a, e, t);
                        N(r);
                    },
                    f = function () {
                        var e = j(0) - 1,
                            t = j(s - 1),
                            r = (function (e, t, r) {
                                switch (!0) {
                                    case t < 0:
                                        var n = e.slice(t),
                                            i = e.slice(0, r);
                                        return [].concat(l(n), l(i));
                                    case t > r:
                                        var a = e.slice(t),
                                            o = e.slice(0, r);
                                        return [].concat(l(a), l(o));
                                    default:
                                        return e.slice(t, r);
                                }
                            })(a, e, t);
                        N(r);
                    },
                    _ = function (e) {
                        return "next" === e ? d() : f();
                    };
                return (
                    Object(n.useEffect)(
                        function () {
                            var e = a.length >= s ? a.slice(0, s) : a;
                            N(e);
                        },
                        [s, a]
                    ),
                        u(function (e) {
                            switch (e.key) {
                                case "Escape":
                                    r();
                                    break;
                                case "ArrowRight":
                                    c("next");
                                    break;
                                case "ArrowLeft":
                                    c("prev");
                            }
                        }),
                        i.a.createElement(
                            "div",
                            { className: "pop_up__wrapper" },
                            i.a.createElement(
                                "div",
                                { className: "pop_up__container" },
                                i.a.createElement("div", { className: "react-dynamic-gallery__icon_close", onClick: r }),
                                i.a.createElement(
                                    "div",
                                    { className: "pop_up__image__active" },
                                    i.a.createElement("div", {
                                        className: "btn__arrow_left__big",
                                        onClick: function () {
                                            return c("prev");
                                        },
                                    }),
                                    i.a.createElement("img", { alt: t.id, src: t.path }),
                                    i.a.createElement("div", {
                                        className: "btn__arrow_right__big",
                                        onClick: function () {
                                            return c("next");
                                        },
                                    })
                                ),
                                i.a.createElement(
                                    "div",
                                    { className: "pop_up__carousel" },
                                    i.a.createElement("span", null, "".concat(t.position + 1, " / ").concat(a.length)),
                                    s < (null == a ? void 0 : a.length) &&
                                    i.a.createElement(
                                        i.a.Fragment,
                                        null,
                                        i.a.createElement("div", {
                                            className: "btn__arrow_left__small",
                                            onClick: function () {
                                                return _("prev");
                                            },
                                        }),
                                        i.a.createElement("div", {
                                            className: "btn__arrow_right__small",
                                            onClick: function () {
                                                return _("next");
                                            },
                                        })
                                    ),
                                    p.map(function (e, r) {
                                        return i.a.createElement(o, {
                                            key: e.id,
                                            image: e,
                                            onItemClick: function () {
                                                return M(e, r);
                                            },
                                            activityClassName: ((n = e.id), n === t.id ? "pop_up__carousel_image__active" : ""),
                                        });
                                        var n;
                                    })
                                )
                            )
                        )
                );
            },
            p =
                (r(8),
                    function (e) {
                        var t = e.onUpload,
                            r = Object(n.useRef)();
                        return i.a.createElement(
                            i.a.Fragment,
                            null,
                            i.a.createElement("input", {
                                multiple: !0,
                                type: "file",
                                ref: r,
                                style: { display: "none" },
                                onChange: function (e) {
                                    return t(e);
                                },
                                onClick: function (e) {
                                    return (e.target.value = null);
                                },
                                accept: ".png, .jpg, .jpeg .svg",
                            }),
                            i.a.createElement("div", {
                                className: "gallery__add_btn",
                                onClick: function () {
                                    return r.current.click();
                                },
                            })
                        );
                    });
        function N(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? N(Object(r), !0).forEach(function (t) {
                        d(e, t, r[t]);
                    })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                    : N(Object(r)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                    });
            }
            return e;
        }
        function d(e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        function f(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                    var r = [],
                        n = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                    } catch (e) {
                        (i = !0), (a = e);
                    } finally {
                        try {
                            n || null == c.return || c.return();
                        } finally {
                            if (i) throw a;
                        }
                    }
                    return r;
                })(e, t) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return _(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === r && e.constructor && (r = e.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(e);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(e, t);
                })(e, t) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function _(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }
        t.default = function (e) {
            var t = e.source,
                r = e.itemsToShow,
                a = void 0 === r ? 1 : r,
                u = e.itemsToShowInPreview,
                l = void 0 === u ? 1 : u,
                M = e.onUpload,
                g = e.uploadEnabled,
                s = e.isItemDeleteEnable,
                N = e.onItemDelete,
                d = f(Object(n.useState)({}), 2),
                _ = d[0],
                D = d[1],
                I = function (e) {
                    var r = t[e];
                    D(j(j({}, r), {}, { position: e }));
                },
                b = function (e) {
                    var r = t.findIndex(function (t) {
                        return t.id === e.id;
                    });
                    D(j(j({}, e), {}, { position: r }));
                };
            return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                    "div",
                    { className: "gallery__wrapper" },
                    g && i.a.createElement(p, { onUpload: M }),
                    t.slice(0, a).map(function (e, t) {
                        return i.a.createElement(o, {
                            key: e.id,
                            image: e,
                            isDeleteEnable: s,
                            onDelete: N,
                            onItemClick: function () {
                                return b(e);
                            },
                        });
                    }),
                    a < t.length && i.a.createElement(c, { source: t.slice(a), onItemClick: D })
                ),
                _.id &&
                i.a.createElement(y, {
                    activeImage: _,
                    previewsInGallery: 4,
                    closePopUp: function () {
                        return D({});
                    },
                    slideActiveImage: function (e) {
                        return "next" === e
                            ? ((r = _.position), (n = r === t.length - 1 ? 0 : r + 1), void I(n))
                            : (function () {
                                var e = _.position,
                                    r = e ? e - 1 : t.length - 1;
                                I(r);
                            })();
                        let r, n;
                    },
                    imagesList: t,
                    itemsToShow: l,
                    onGalleryItemClick: b,
                })
            );
        };
    },
]);
