/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function (e, t) {
    function n(e) {
        return B.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }

    function r(e) {
        if (!mn[e]) {
            var t = D.body,
                n = B("<" + e + ">").appendTo(t),
                r = n.css("display");
            n.remove();
            if (r === "none" || r === "") {
                gn || (gn = D.createElement("iframe"), gn.frameBorder = gn.width = gn.height = 0), t.appendChild(gn);
                if (!yn || !gn.createElement) yn = (gn.contentWindow || gn.contentDocument).document, yn.write((D.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), yn.close();
                n = yn.createElement(e), yn.body.appendChild(n), r = B.css(n, "display"), t.removeChild(gn)
            }
            mn[e] = r
        }
        return mn[e]
    }

    function i(e, t) {
        var n = {};
        return B.each(Sn.concat.apply([], Sn.slice(0, t)), function () {
            n[this] = e
        }), n
    }

    function s() {
        xn = t
    }

    function o() {
        return setTimeout(s, 0), xn = B.now()
    }

    function u() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function a() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function f(e, n) {
        e.dataFilter && (n = e.dataFilter(n, e.dataType));
        var r = e.dataTypes,
            i = {}, s, o, u = r.length,
            a, f = r[0],
            l, c, h, p, d;
        for (s = 1; s < u; s++) {
            if (s === 1)
                for (o in e.converters) typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
            l = f, f = r[s];
            if (f === "*") f = l;
            else if (l !== "*" && l !== f) {
                c = l + " " + f, h = i[c] || i["* " + f];
                if (!h) {
                    d = t;
                    for (p in i) {
                        a = p.split(" ");
                        if (a[0] === l || a[0] === "*") {
                            d = i[a[1] + " " + f];
                            if (d) {
                                p = i[p], p === !0 ? h = d : d === !0 && (h = p);
                                break
                            }
                        }
                    }
                }!h && !d && B.error("No conversion from " + c.replace(" ", " to ")), h !== !0 && (n = h ? h(n) : d(p(n)))
            }
        }
        return n
    }

    function l(e, n, r) {
        var i = e.contents,
            s = e.dataTypes,
            o = e.responseFields,
            u, a, f, l;
        for (a in o) a in r && (n[o[a]] = r[a]);
        while (s[0] === "*") s.shift(), u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
        if (u)
            for (a in i)
                if (i[a] && i[a].test(u)) {
                    s.unshift(a);
                    break
                }
        if (s[0] in r) f = s[0];
        else {
            for (a in r) {
                if (!s[0] || e.converters[a + " " + s[0]]) {
                    f = a;
                    break
                }
                l || (l = a)
            }
            f = f || l
        } if (f) return f !== s[0] && s.unshift(f), r[f]
    }

    function c(e, t, n, r) {
        if (B.isArray(t)) B.each(t, function (t, i) {
            n || zt.test(e) ? r(e, i) : c(e + "[" + (typeof i == "object" || B.isArray(i) ? t : "") + "]", i, n, r)
        });
        else if (!n && t != null && typeof t == "object")
            for (var i in t) c(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function h(e, n) {
        var r, i, s = B.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && B.extend(!0, e, i)
    }

    function p(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u = e[s],
            a = 0,
            f = u ? u.length : 0,
            l = e === sn,
            c;
        for (; a < f && (l || !c); a++) c = u[a](n, r, i), typeof c == "string" && (!l || o[c] ? c = t : (n.dataTypes.unshift(c), c = p(e, n, r, i, c, o)));
        return (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o)), c
    }

    function d(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            if (B.isFunction(n)) {
                var r = t.toLowerCase().split(en),
                    i = 0,
                    s = r.length,
                    o, u, a;
                for (; i < s; i++) o = r[i], a = /^\+/.test(o), a && (o = o.substr(1) || "*"), u = e[o] = e[o] || [], u[a ? "unshift" : "push"](n)
            }
        }
    }

    function v(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = t === "width" ? jt : Ft,
            s = 0,
            o = i.length;
        if (r > 0) {
            if (n !== "border")
                for (; s < o; s++) n || (r -= parseFloat(B.css(e, "padding" + i[s])) || 0), n === "margin" ? r += parseFloat(B.css(e, n + i[s])) || 0 : r -= parseFloat(B.css(e, "border" + i[s] + "Width")) || 0;
            return r + "px"
        }
        r = It(e, t, t);
        if (r < 0 || r == null) r = e.style[t] || 0;
        r = parseFloat(r) || 0;
        if (n)
            for (; s < o; s++) r += parseFloat(B.css(e, "padding" + i[s])) || 0, n !== "padding" && (r += parseFloat(B.css(e, "border" + i[s] + "Width")) || 0), n === "margin" && (r += parseFloat(B.css(e, n + i[s])) || 0);
        return r + "px"
    }

    function m(e, t) {
        t.src ? B.ajax({
            url: t.src,
            async: !1,
            dataType: "script"
        }) : B.globalEval((t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")), t.parentNode && t.parentNode.removeChild(t)
    }

    function g(e) {
        var t = D.createElement("div");
        return At.appendChild(t), t.innerHTML = e.outerHTML, t.firstChild
    }

    function y(e) {
        var t = (e.nodeName || "").toLowerCase();
        t === "input" ? b(e) : t !== "script" && typeof e.getElementsByTagName != "undefined" && B.grep(e.getElementsByTagName("input"), b)
    }

    function b(e) {
        if (e.type === "checkbox" || e.type === "radio") e.defaultChecked = e.checked
    }

    function w(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function E(e, t) {
        var n;
        if (t.nodeType === 1) {
            t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase();
            if (n === "object") t.outerHTML = e.outerHTML;
            else if (n !== "input" || e.type !== "checkbox" && e.type !== "radio") {
                if (n === "option") t.selected = e.defaultSelected;
                else if (n === "input" || n === "textarea") t.defaultValue = e.defaultValue
            } else e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value);
            t.removeAttribute(B.expando)
        }
    }

    function S(e, t) {
        if (t.nodeType === 1 && !! B.hasData(e)) {
            var n, r, i, s = B._data(e),
                o = B._data(t, s),
                u = s.events;
            if (u) {
                delete o.handle, o.events = {};
                for (n in u)
                    for (r = 0, i = u[n].length; r < i; r++) B.event.add(t, n + (u[n][r].namespace ? "." : "") + u[n][r].namespace, u[n][r], u[n][r].data)
            }
            o.data && (o.data = B.extend({}, o.data))
        }
    }

    function x(e, t) {
        return B.nodeName(e, "table") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function T(e) {
        var t = vt.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function N(e, t, n) {
        t = t || 0;
        if (B.isFunction(t)) return B.grep(e, function (e, r) {
            var i = !! t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return B.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = B.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (ct.test(t)) return B.filter(t, r, !n);
            t = B.filter(t, r)
        }
        return B.grep(e, function (e, r) {
            return B.inArray(e, t) >= 0 === n
        })
    }

    function C(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function k() {
        return !0
    }

    function L() {
        return !1
    }

    function A(e, t, n) {
        var r = t + "defer",
            i = t + "queue",
            s = t + "mark",
            o = B._data(e, r);
        o && (n === "queue" || !B._data(e, i)) && (n === "mark" || !B._data(e, s)) && setTimeout(function () {
            !B._data(e, i) && !B._data(e, s) && (B.removeData(e, r, !0), o.fire())
        }, 0)
    }

    function O(e) {
        for (var t in e) {
            if (t === "data" && B.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function M(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(q, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : B.isNumeric(r) ? parseFloat(r) : I.test(r) ? B.parseJSON(r) : r
                } catch (s) {}
                B.data(e, n, r)
            } else r = t
        }
        return r
    }

    function _(e) {
        var t = j[e] = {}, n, r;
        e = e.split(/\s+/);
        for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
        return t
    }
    var D = e.document,
        P = e.navigator,
        H = e.location,
        B = function () {
            function n() {
                if (!r.isReady) {
                    try {
                        D.documentElement.doScroll("left")
                    } catch (e) {
                        setTimeout(n, 1);
                        return
                    }
                    r.ready()
                }
            }
            var r = function (e, t) {
                return new r.fn.init(e, t, o)
            }, i = e.jQuery,
                s = e.$,
                o, u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                a = /\S/,
                f = /^\s+/,
                l = /\s+$/,
                c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                h = /^[\],:{}\s]*$/,
                p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                v = /(?:^|:|,)(?:\s*\[)+/g,
                m = /(webkit)[ \/]([\w.]+)/,
                g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                y = /(msie) ([\w.]+)/,
                b = /(mozilla)(?:.*? rv:([\w.]+))?/,
                w = /-([a-z]|[0-9])/ig,
                E = /^-ms-/,
                S = function (e, t) {
                    return (t + "").toUpperCase()
                }, x = P.userAgent,
                T, N, C, k = Object.prototype.toString,
                L = Object.prototype.hasOwnProperty,
                A = Array.prototype.push,
                O = Array.prototype.slice,
                M = String.prototype.trim,
                _ = Array.prototype.indexOf,
                H = {};
            return r.fn = r.prototype = {
                constructor: r,
                init: function (e, n, i) {
                    var s, o, a, f;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if (e === "body" && !n && D.body) return this.context = D, this[0] = D.body, this.selector = e, this.length = 1, this;
                    if (typeof e == "string") {
                        e.charAt(0) !== "<" || e.charAt(e.length - 1) !== ">" || e.length < 3 ? s = u.exec(e) : s = [null, e, null];
                        if (s && (s[1] || !n)) {
                            if (s[1]) return n = n instanceof r ? n[0] : n, f = n ? n.ownerDocument || n : D, a = c.exec(e), a ? r.isPlainObject(n) ? (e = [D.createElement(a[1])], r.fn.attr.call(e, n, !0)) : e = [f.createElement(a[1])] : (a = r.buildFragment([s[1]], [f]), e = (a.cacheable ? r.clone(a.fragment) : a.fragment).childNodes), r.merge(this, e);
                            o = D.getElementById(s[2]);
                            if (o && o.parentNode) {
                                if (o.id !== s[2]) return i.find(e);
                                this.length = 1, this[0] = o
                            }
                            return this.context = D, this.selector = e, this
                        }
                        return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e)
                    }
                    return r.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), r.makeArray(e, this))
                },
                selector: "",
                jquery: "1.7.1",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return O.call(this, 0)
                },
                get: function (e) {
                    return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
                },
                pushStack: function (e, t, n) {
                    var i = this.constructor();
                    return r.isArray(e) ? A.apply(i, e) : r.merge(i, e), i.prevObject = this, i.context = this.context, t === "find" ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
                },
                each: function (e, t) {
                    return r.each(this, e, t)
                },
                ready: function (e) {
                    return r.bindReady(), N.add(e), this
                },
                eq: function (e) {
                    return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(O.apply(this, arguments), "slice", O.call(arguments).join(","))
                },
                map: function (e) {
                    return this.pushStack(r.map(this, function (t, n) {
                        return e.call(t, n, t)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: A,
                sort: [].sort,
                splice: [].splice
            }, r.fn.init.prototype = r.fn, r.extend = r.fn.extend = function () {
                var e, n, i, s, o, u, a = arguments[0] || {}, f = 1,
                    l = arguments.length,
                    c = !1;
                typeof a == "boolean" && (c = a, a = arguments[1] || {}, f = 2), typeof a != "object" && !r.isFunction(a) && (a = {}), l === f && (a = this, --f);
                for (; f < l; f++)
                    if ((e = arguments[f]) != null)
                        for (n in e) {
                            i = a[n], s = e[n];
                            if (a === s) continue;
                            c && s && (r.isPlainObject(s) || (o = r.isArray(s))) ? (o ? (o = !1, u = i && r.isArray(i) ? i : []) : u = i && r.isPlainObject(i) ? i : {}, a[n] = r.extend(c, u, s)) : s !== t && (a[n] = s)
                        }
                    return a
            }, r.extend({
                noConflict: function (t) {
                    return e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i), r
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function (e) {
                    e ? r.readyWait++ : r.ready(!0)
                },
                ready: function (e) {
                    if (e === !0 && !--r.readyWait || e !== !0 && !r.isReady) {
                        if (!D.body) return setTimeout(r.ready, 1);
                        r.isReady = !0;
                        if (e !== !0 && --r.readyWait > 0) return;
                        N.fireWith(D, [r]), r.fn.trigger && r(D).trigger("ready").off("ready")
                    }
                },
                bindReady: function () {
                    if (!N) {
                        N = r.Callbacks("once memory");
                        if (D.readyState === "complete") return setTimeout(r.ready, 1);
                        if (D.addEventListener) D.addEventListener("DOMContentLoaded", C, !1), e.addEventListener("load", r.ready, !1);
                        else if (D.attachEvent) {
                            D.attachEvent("onreadystatechange", C), e.attachEvent("onload", r.ready);
                            var t = !1;
                            try {
                                t = e.frameElement == null
                            } catch (i) {}
                            D.documentElement.doScroll && t && n()
                        }
                    }
                },
                isFunction: function (e) {
                    return r.type(e) === "function"
                },
                isArray: Array.isArray || function (e) {
                    return r.type(e) === "array"
                },
                isWindow: function (e) {
                    return e && typeof e == "object" && "setInterval" in e
                },
                isNumeric: function (e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                },
                type: function (e) {
                    return e == null ? String(e) : H[k.call(e)] || "object"
                },
                isPlainObject: function (e) {
                    if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e)) return !1;
                    try {
                        if (e.constructor && !L.call(e, "constructor") && !L.call(e.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    var i;
                    for (i in e);
                    return i === t || L.call(e, i)
                },
                isEmptyObject: function (e) {
                    for (var t in e) return !1;
                    return !0
                },
                error: function (e) {
                    throw new Error(e)
                },
                parseJSON: function (t) {
                    if (typeof t != "string" || !t) return null;
                    t = r.trim(t);
                    if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
                    if (h.test(t.replace(p, "@").replace(d, "]").replace(v, ""))) return (new Function("return " + t))();
                    r.error("Invalid JSON: " + t)
                },
                parseXML: function (n) {
                    var i, s;
                    try {
                        e.DOMParser ? (s = new DOMParser, i = s.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                    } catch (o) {
                        i = t
                    }
                    return (!i || !i.documentElement || i.getElementsByTagName("parsererror").length) && r.error("Invalid XML: " + n), i
                },
                noop: function () {},
                globalEval: function (t) {
                    t && a.test(t) && (e.execScript || function (t) {
                        e.eval.call(e, t)
                    })(t)
                },
                camelCase: function (e) {
                    return e.replace(E, "ms-").replace(w, S)
                },
                nodeName: function (e, t) {
                    return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
                },
                each: function (e, n, i) {
                    var s, o = 0,
                        u = e.length,
                        a = u === t || r.isFunction(e);
                    if (i) {
                        if (a) {
                            for (s in e)
                                if (n.apply(e[s], i) === !1) break
                        } else
                            for (; o < u;)
                                if (n.apply(e[o++], i) === !1) break
                    } else if (a) {
                        for (s in e)
                            if (n.call(e[s], s, e[s]) === !1) break
                    } else
                        for (; o < u;)
                            if (n.call(e[o], o, e[o++]) === !1) break; return e
                },
                trim: M ? function (e) {
                    return e == null ? "" : M.call(e)
                } : function (e) {
                    return e == null ? "" : (e + "").replace(f, "").replace(l, "")
                },
                makeArray: function (e, t) {
                    var n = t || [];
                    if (e != null) {
                        var i = r.type(e);
                        e.length == null || i === "string" || i === "function" || i === "regexp" || r.isWindow(e) ? A.call(n, e) : r.merge(n, e)
                    }
                    return n
                },
                inArray: function (e, t, n) {
                    var r;
                    if (t) {
                        if (_) return _.call(t, e, n);
                        r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                        for (; n < r; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function (e, n) {
                    var r = e.length,
                        i = 0;
                    if (typeof n.length == "number")
                        for (var s = n.length; i < s; i++) e[r++] = n[i];
                    else
                        while (n[i] !== t) e[r++] = n[i++];
                    return e.length = r, e
                },
                grep: function (e, t, n) {
                    var r = [],
                        i;
                    n = !! n;
                    for (var s = 0, o = e.length; s < o; s++) i = !! t(e[s], s), n !== i && r.push(e[s]);
                    return r
                },
                map: function (e, n, i) {
                    var s, o, u = [],
                        a = 0,
                        f = e.length,
                        l = e instanceof r || f !== t && typeof f == "number" && (f > 0 && e[0] && e[f - 1] || f === 0 || r.isArray(e));
                    if (l)
                        for (; a < f; a++) s = n(e[a], a, i), s != null && (u[u.length] = s);
                    else
                        for (o in e) s = n(e[o], o, i), s != null && (u[u.length] = s);
                    return u.concat.apply([], u)
                },
                guid: 1,
                proxy: function (e, n) {
                    if (typeof n == "string") {
                        var i = e[n];
                        n = e, e = i
                    }
                    if (!r.isFunction(e)) return t;
                    var s = O.call(arguments, 2),
                        o = function () {
                            return e.apply(n, s.concat(O.call(arguments)))
                        };
                    return o.guid = e.guid = e.guid || o.guid || r.guid++, o
                },
                access: function (e, n, i, s, o, u) {
                    var a = e.length;
                    if (typeof n == "object") {
                        for (var f in n) r.access(e, f, n[f], s, o, i);
                        return e
                    }
                    if (i !== t) {
                        s = !u && s && r.isFunction(i);
                        for (var l = 0; l < a; l++) o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
                        return e
                    }
                    return a ? o(e[0], n) : t
                },
                now: function () {
                    return (new Date).getTime()
                },
                uaMatch: function (e) {
                    e = e.toLowerCase();
                    var t = m.exec(e) || g.exec(e) || y.exec(e) || e.indexOf("compatible") < 0 && b.exec(e) || [];
                    return {
                        browser: t[1] || "",
                        version: t[2] || "0"
                    }
                },
                sub: function () {
                    function e(t, n) {
                        return new e.fn.init(t, n)
                    }
                    r.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (n, i) {
                        return i && i instanceof r && !(i instanceof e) && (i = e(i)), r.fn.init.call(this, n, i, t)
                    }, e.fn.init.prototype = e.fn;
                    var t = e(D);
                    return e
                },
                browser: {}
            }), r.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
                H["[object " + t + "]"] = t.toLowerCase()
            }), T = r.uaMatch(x), T.browser && (r.browser[T.browser] = !0, r.browser.version = T.version), r.browser.webkit && (r.browser.safari = !0), a.test(" ") && (f = /^[\s\xA0]+/, l = /[\s\xA0]+$/), o = r(D), D.addEventListener ? C = function () {
                D.removeEventListener("DOMContentLoaded", C, !1), r.ready()
            } : D.attachEvent && (C = function () {
                D.readyState === "complete" && (D.detachEvent("onreadystatechange", C), r.ready())
            }), r
        }(),
        j = {};
    B.Callbacks = function (e) {
        e = e ? j[e] || _(e) : {};
        var n = [],
            r = [],
            i, s, o, u, a, f = function (t) {
                var r, i, s, o, u;
                for (r = 0, i = t.length; r < i; r++) s = t[r], o = B.type(s), o === "array" ? f(s) : o === "function" && (!e.unique || !c.has(s)) && n.push(s)
            }, l = function (t, f) {
                f = f || [], i = !e.memory || [t, f], s = !0, a = o || 0, o = 0, u = n.length;
                for (; n && a < u; a++)
                    if (n[a].apply(t, f) === !1 && e.stopOnFalse) {
                        i = !0;
                        break
                    }
                s = !1, n && (e.once ? i === !0 ? c.disable() : n = [] : r && r.length && (i = r.shift(), c.fireWith(i[0], i[1])))
            }, c = {
                add: function () {
                    if (n) {
                        var e = n.length;
                        f(arguments), s ? u = n.length : i && i !== !0 && (o = e, l(i[0], i[1]))
                    }
                    return this
                },
                remove: function () {
                    if (n) {
                        var t = arguments,
                            r = 0,
                            i = t.length;
                        for (; r < i; r++)
                            for (var o = 0; o < n.length; o++)
                                if (t[r] === n[o]) {
                                    s && o <= u && (u--, o <= a && a--), n.splice(o--, 1);
                                    if (e.unique) break
                                }
                    }
                    return this
                },
                has: function (e) {
                    if (n) {
                        var t = 0,
                            r = n.length;
                        for (; t < r; t++)
                            if (e === n[t]) return !0
                    }
                    return !1
                },
                empty: function () {
                    return n = [], this
                },
                disable: function () {
                    return n = r = i = t, this
                },
                disabled: function () {
                    return !n
                },
                lock: function () {
                    return r = t, (!i || i === !0) && c.disable(), this
                },
                locked: function () {
                    return !r
                },
                fireWith: function (t, n) {
                    return r && (s ? e.once || r.push([t, n]) : (!e.once || !i) && l(t, n)), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    };
    var F = [].slice;
    B.extend({
        Deferred: function (e) {
            var t = B.Callbacks("once memory"),
                n = B.Callbacks("once memory"),
                r = B.Callbacks("memory"),
                i = "pending",
                s = {
                    resolve: t,
                    reject: n,
                    notify: r
                }, o = {
                    done: t.add,
                    fail: n.add,
                    progress: r.add,
                    state: function () {
                        return i
                    },
                    isResolved: t.fired,
                    isRejected: n.fired,
                    then: function (e, t, n) {
                        return u.done(e).fail(t).progress(n), this
                    },
                    always: function () {
                        return u.done.apply(u, arguments).fail.apply(u, arguments), this
                    },
                    pipe: function (e, t, n) {
                        return B.Deferred(function (r) {
                            B.each({
                                done: [e, "resolve"],
                                fail: [t, "reject"],
                                progress: [n, "notify"]
                            }, function (e, t) {
                                var n = t[0],
                                    i = t[1],
                                    s;
                                B.isFunction(n) ? u[e](function () {
                                    s = n.apply(this, arguments), s && B.isFunction(s.promise) ? s.promise().then(r.resolve, r.reject, r.notify) : r[i + "With"](this === u ? r : this, [s])
                                }) : u[e](r[i])
                            })
                        }).promise()
                    },
                    promise: function (e) {
                        if (e == null) e = o;
                        else
                            for (var t in o) e[t] = o[t];
                        return e
                    }
                }, u = o.promise({}),
                a;
            for (a in s) u[a] = s[a].fire, u[a + "With"] = s[a].fireWith;
            return u.done(function () {
                i = "resolved"
            }, n.disable, r.lock).fail(function () {
                i = "rejected"
            }, t.disable, r.lock), e && e.call(u, u), u
        },
        when: function (e) {
            function t(e) {
                return function (t) {
                    o[e] = arguments.length > 1 ? F.call(arguments, 0) : t, f.notifyWith(l, o)
                }
            }

            function n(e) {
                return function (t) {
                    r[e] = arguments.length > 1 ? F.call(arguments, 0) : t, --u || f.resolveWith(f, r)
                }
            }
            var r = F.call(arguments, 0),
                i = 0,
                s = r.length,
                o = Array(s),
                u = s,
                a = s,
                f = s <= 1 && e && B.isFunction(e.promise) ? e : B.Deferred(),
                l = f.promise();
            if (s > 1) {
                for (; i < s; i++) r[i] && r[i].promise && B.isFunction(r[i].promise) ? r[i].promise().then(n(i), f.reject, t(i)) : --u;
                u || f.resolveWith(f, r)
            } else f !== e && f.resolveWith(f, s ? [e] : []);
            return l
        }
    }), B.support = function () {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d = D.createElement("div"),
            v = D.documentElement;
        d.setAttribute("className", "t"), d.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0];
        if (!n || !n.length || !r) return {};
        i = D.createElement("select"), s = i.appendChild(D.createElement("option")), o = d.getElementsByTagName("input")[0], t = {
            leadingWhitespace: d.firstChild.nodeType === 3,
            tbody: !d.getElementsByTagName("tbody").length,
            htmlSerialize: !! d.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.55/.test(r.style.opacity),
            cssFloat: !! r.style.cssFloat,
            checkOn: o.value === "on",
            optSelected: s.selected,
            getSetAttribute: d.className !== "t",
            enctype: !! D.createElement("form").enctype,
            html5Clone: D.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete d.test
        } catch (m) {
            t.deleteExpando = !1
        }!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).fireEvent("onclick")), o = D.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), d.appendChild(o), a = D.createDocumentFragment(), a.appendChild(d.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, a.removeChild(o), a.appendChild(d), d.innerHTML = "", e.getComputedStyle && (u = D.createElement("div"), u.style.width = "0", u.style.marginRight = "0", d.style.width = "2px", d.appendChild(u), t.reliableMarginRight = (parseInt((e.getComputedStyle(u, null) || {
            marginRight: 0
        }).marginRight, 10) || 0) === 0);
        if (d.attachEvent)
            for (h in {
                submit: 1,
                change: 1,
                focusin: 1
            }) c = "on" + h, p = c in d, p || (d.setAttribute(c, "return;"), p = typeof d[c] == "function"), t[h + "Bubbles"] = p;
        return a.removeChild(d), a = i = s = u = d = o = null, B(function () {
            var e, n, r, i, s, o, u, a, l, c, h, v = D.getElementsByTagName("body")[0];
            !v || (u = 1, a = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;", l = "visibility:hidden;border:0;", c = "style='" + a + "border:5px solid #000;padding:0;'", h = "<div " + c + "><div></div></div>" + "<table " + c + " cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", e = D.createElement("div"), e.style.cssText = l + "width:0;height:0;position:static;top:0;margin-top:" + u + "px", v.insertBefore(e, v.firstChild), d = D.createElement("div"), e.appendChild(d), d.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", f = d.getElementsByTagName("td"), p = f[0].offsetHeight === 0, f[0].style.display = "", f[1].style.display = "none", t.reliableHiddenOffsets = p && f[0].offsetHeight === 0, d.innerHTML = "", d.style.width = d.style.paddingLeft = "1px", B.boxModel = t.boxModel = d.offsetWidth === 2, typeof d.style.zoom != "undefined" && (d.style.display = "inline", d.style.zoom = 1, t.inlineBlockNeedsLayout = d.offsetWidth === 2, d.style.display = "", d.innerHTML = "<div style='width:4px;'></div>", t.shrinkWrapBlocks = d.offsetWidth !== 2), d.style.cssText = a + l, d.innerHTML = h, n = d.firstChild, r = n.firstChild, s = n.nextSibling.firstChild.firstChild, o = {
                doesNotAddBorder: r.offsetTop !== 5,
                doesAddBorderForTableAndCells: s.offsetTop === 5
            }, r.style.position = "fixed", r.style.top = "20px", o.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15, r.style.position = r.style.top = "", n.style.overflow = "hidden", n.style.position = "relative", o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5, o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== u, v.removeChild(e), d = e = null, B.extend(t, o))
        }), t
    }();
    var I = /^(?:\{.*\}|\[.*\])$/,
        q = /([A-Z])/g;
    B.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (e) {
            return e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando], !! e && !O(e)
        },
        data: function (e, n, r, i) {
            if ( !! B.acceptData(e)) {
                var s, o, u, a = B.expando,
                    f = typeof n == "string",
                    l = e.nodeType,
                    c = l ? B.cache : e,
                    h = l ? e[a] : e[a] && a,
                    p = n === "events";
                if ((!h || !c[h] || !p && !i && !c[h].data) && f && r === t) return;
                h || (l ? e[a] = h = ++B.uuid : h = a), c[h] || (c[h] = {}, l || (c[h].toJSON = B.noop));
                if (typeof n == "object" || typeof n == "function") i ? c[h] = B.extend(c[h], n) : c[h].data = B.extend(c[h].data, n);
                return s = o = c[h], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[B.camelCase(n)] = r), p && !o[n] ? s.events : (f ? (u = o[n], u == null && (u = o[B.camelCase(n)])) : u = o, u)
            }
        },
        removeData: function (e, t, n) {
            if ( !! B.acceptData(e)) {
                var r, i, s, o = B.expando,
                    u = e.nodeType,
                    a = u ? B.cache : e,
                    f = u ? e[o] : o;
                if (!a[f]) return;
                if (t) {
                    r = n ? a[f] : a[f].data;
                    if (r) {
                        B.isArray(t) || (t in r ? t = [t] : (t = B.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                        for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                        if (!(n ? O : B.isEmptyObject)(r)) return
                    }
                }
                if (!n) {
                    delete a[f].data;
                    if (!O(a[f])) return
                }
                B.support.deleteExpando || !a.setInterval ? delete a[f] : a[f] = null, u && (B.support.deleteExpando ? delete e[o] : e.removeAttribute ? e.removeAttribute(o) : e[o] = null)
            }
        },
        _data: function (e, t, n) {
            return B.data(e, t, n, !0)
        },
        acceptData: function (e) {
            if (e.nodeName) {
                var t = B.noData[e.nodeName.toLowerCase()];
                if (t) return t !== !0 && e.getAttribute("classid") === t
            }
            return !0
        }
    }), B.fn.extend({
        data: function (e, n) {
            var r, i, s, o = null;
            if (typeof e == "undefined") {
                if (this.length) {
                    o = B.data(this[0]);
                    if (this[0].nodeType === 1 && !B._data(this[0], "parsedAttrs")) {
                        i = this[0].attributes;
                        for (var u = 0, a = i.length; u < a; u++) s = i[u].name, s.indexOf("data-") === 0 && (s = B.camelCase(s.substring(5)), M(this[0], s, o[s]));
                        B._data(this[0], "parsedAttrs", !0)
                    }
                }
                return o
            }
            return typeof e == "object" ? this.each(function () {
                B.data(this, e)
            }) : (r = e.split("."), r[1] = r[1] ? "." + r[1] : "", n === t ? (o = this.triggerHandler("getData" + r[1] + "!", [r[0]]), o === t && this.length && (o = B.data(this[0], e), o = M(this[0], e, o)), o === t && r[1] ? this.data(r[0]) : o) : this.each(function () {
                var t = B(this),
                    i = [r[0], n];
                t.triggerHandler("setData" + r[1] + "!", i), B.data(this, e, n), t.triggerHandler("changeData" + r[1] + "!", i)
            }))
        },
        removeData: function (e) {
            return this.each(function () {
                B.removeData(this, e)
            })
        }
    }), B.extend({
        _mark: function (e, t) {
            e && (t = (t || "fx") + "mark", B._data(e, t, (B._data(e, t) || 0) + 1))
        },
        _unmark: function (e, t, n) {
            e !== !0 && (n = t, t = e, e = !1);
            if (t) {
                n = n || "fx";
                var r = n + "mark",
                    i = e ? 0 : (B._data(t, r) || 1) - 1;
                i ? B._data(t, r, i) : (B.removeData(t, r, !0), A(t, n, "mark"))
            }
        },
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = B._data(e, t), n && (!r || B.isArray(n) ? r = B._data(e, t, B.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function (e, t) {
            t = t || "fx";
            var n = B.queue(e, t),
                r = n.shift(),
                i = {};
            r === "inprogress" && (r = n.shift()), r && (t === "fx" && n.unshift("inprogress"), B._data(e, t + ".run", i), r.call(e, function () {
                B.dequeue(e, t)
            }, i)), n.length || (B.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"))
        }
    }), B.fn.extend({
        queue: function (e, n) {
            return typeof e != "string" && (n = e, e = "fx"), n === t ? B.queue(this[0], e) : this.each(function () {
                var t = B.queue(this, e, n);
                e === "fx" && t[0] !== "inprogress" && B.dequeue(this, e)
            })
        },
        dequeue: function (e) {
            return this.each(function () {
                B.dequeue(this, e)
            })
        },
        delay: function (e, t) {
            return e = B.fx ? B.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function (e) {
            return this.queue(e || "fx", [])
        },
        promise: function (e, n) {
            function r() {
                --u || i.resolveWith(s, [s])
            }
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            var i = B.Deferred(),
                s = this,
                o = s.length,
                u = 1,
                a = e + "defer",
                f = e + "queue",
                l = e + "mark",
                c;
            while (o--)
                if (c = B.data(s[o], a, t, !0) || (B.data(s[o], f, t, !0) || B.data(s[o], l, t, !0)) && B.data(s[o], a, B.Callbacks("once memory"), !0)) u++, c.add(r);
            return r(), i.promise()
        }
    });
    var R = /[\n\t\r]/g,
        U = /\s+/,
        z = /\r/g,
        W = /^(?:button|input)$/i,
        X = /^(?:button|input|object|select|textarea)$/i,
        V = /^a(?:rea)?$/i,
        $ = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        J = B.support.getSetAttribute,
        K, Q, G;
    B.fn.extend({
        attr: function (e, t) {
            return B.access(this, e, t, !0, B.attr)
        },
        removeAttr: function (e) {
            return this.each(function () {
                B.removeAttr(this, e)
            })
        },
        prop: function (e, t) {
            return B.access(this, e, t, !0, B.prop)
        },
        removeProp: function (e) {
            return e = B.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (B.isFunction(e)) return this.each(function (t) {
                B(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(U);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++)~ s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
                            i.className = B.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (B.isFunction(e)) return this.each(function (t) {
                B(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(U);
                for (r = 0, i = this.length; r < i; r++) {
                    s = this[r];
                    if (s.nodeType === 1 && s.className)
                        if (e) {
                            o = (" " + s.className + " ").replace(R, " ");
                            for (u = 0, a = n.length; u < a; u++) o = o.replace(" " + n[u] + " ", " ");
                            s.className = B.trim(o)
                        } else s.className = ""
                }
            }
            return this
        },
        toggleClass: function (e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return B.isFunction(e) ? this.each(function (n) {
                B(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0,
                        o = B(this),
                        u = t,
                        a = e.split(U);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && B._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || ""
            })
        },
        hasClass: function (e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function (e) {
            var n, r, i, s = this[0];
            if ( !! arguments.length) return i = B.isFunction(e), this.each(function (r) {
                var s = B(this),
                    o;
                if (this.nodeType === 1) {
                    i ? o = e.call(this, r, s.val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : B.isArray(o) && (o = B.map(o, function (e) {
                        return e == null ? "" : e + ""
                    })), n = B.valHooks[this.nodeName.toLowerCase()] || B.valHooks[this.type];
                    if (!n || !("set" in n) || n.set(this, o, "value") === t) this.value = o
                }
            });
            if (s) return n = B.valHooks[s.nodeName.toLowerCase()] || B.valHooks[s.type], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(z, "") : r == null ? "" : r)
        }
    }), B.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function (e) {
                    var t, n, r, i, s = e.selectedIndex,
                        o = [],
                        u = e.options,
                        a = e.type === "select-one";
                    if (s < 0) return null;
                    n = a ? s : 0, r = a ? s + 1 : u.length;
                    for (; n < r; n++) {
                        i = u[n];
                        if (i.selected && (B.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !B.nodeName(i.parentNode, "optgroup"))) {
                            t = B(i).val();
                            if (a) return t;
                            o.push(t)
                        }
                    }
                    return a && !o.length && u.length ? B(u[s]).val() : o
                },
                set: function (e, t) {
                    var n = B.makeArray(t);
                    return B(e).find("option").each(function () {
                        this.selected = B.inArray(B(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if ( !! e && a !== 3 && a !== 8 && a !== 2) {
                if (i && n in B.attrFn) return B(e)[n](r);
                if (typeof e.getAttribute == "undefined") return B.prop(e, n, r);
                u = a !== 1 || !B.isXMLDoc(e), u && (n = n.toLowerCase(), o = B.attrHooks[n] || ($.test(n) ? Q : K));
                if (r !== t) {
                    if (r === null) {
                        B.removeAttr(e, n);
                        return
                    }
                    return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, "" + r), r)
                }
                return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
            }
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.toLowerCase().split(U), s = r.length;
                for (; o < s; o++) i = r[o], i && (n = B.propFix[i] || i, B.attr(e, i, ""), e.removeAttribute(J ? i : n), $.test(i) && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (W.test(e.nodeName) && e.parentNode) B.error("type property can't be changed");
                    else if (!B.support.radioValue && t === "radio" && B.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function (e, t) {
                    return K && B.nodeName(e, "button") ? K.get(e, t) : t in e ? e.value : null
                },
                set: function (e, t, n) {
                    if (K && B.nodeName(e, "button")) return K.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if ( !! e && u !== 3 && u !== 8 && u !== 2) return o = u !== 1 || !B.isXMLDoc(e), o && (n = B.propFix[n] || n, s = B.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : X.test(e.nodeName) || V.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), B.attrHooks.tabindex = B.propHooks.tabIndex, Q = {
        get: function (e, n) {
            var r, i = B.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function (e, t, n) {
            var r;
            return t === !1 ? B.removeAttr(e, n) : (r = B.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, J || (G = {
        name: !0,
        id: !0
    }, K = B.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (G[n] ? r.nodeValue !== "" : r.specified) ? r.nodeValue : t
        },
        set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = D.createAttribute(n), e.setAttributeNode(r)), r.nodeValue = t + ""
        }
    }, B.attrHooks.tabindex.set = K.set, B.each(["width", "height"], function (e, t) {
        B.attrHooks[t] = B.extend(B.attrHooks[t], {
            set: function (e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), B.attrHooks.contenteditable = {
        get: K.get,
        set: function (e, t, n) {
            t === "" && (t = "false"), K.set(e, t, n)
        }
    }), B.support.hrefNormalized || B.each(["href", "src", "width", "height"], function (e, n) {
        B.attrHooks[n] = B.extend(B.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), B.support.style || (B.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }), B.support.optSelected || (B.propHooks.selected = B.extend(B.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), B.support.enctype || (B.propFix.enctype = "encoding"), B.support.checkOn || B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = B.extend(B.valHooks[this], {
            set: function (e, t) {
                if (B.isArray(t)) return e.checked = B.inArray(B(e).val(), t) >= 0
            }
        })
    });
    var Y = /^(?:textarea|input|select)$/i,
        Z = /^([^\.]*)?(?:\.(.+))?$/,
        et = /\bhover(\.\S+)?\b/,
        tt = /^key/,
        nt = /^(?:mouse|contextmenu)|click/,
        rt = /^(?:focusinfocus|focusoutblur)$/,
        it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        st = function (e) {
            var t = it.exec(e);
            return t && (t[1] = (t[1] || "").toLowerCase(), t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")), t
        }, ot = function (e, t) {
            var n = e.attributes || {};
            return (!t[1] || e.nodeName.toLowerCase() === t[1]) && (!t[2] || (n.id || {}).value === t[2]) && (!t[3] || t[3].test((n["class"] || {}).value))
        }, ut = function (e) {
            return B.event.special.hover ? e : e.replace(et, "mouseenter$1 mouseleave$1")
        };
    B.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, v, m, g;
            if (!(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = B._data(e)))) {
                r.handler && (d = r, r = d.handler), r.guid || (r.guid = B.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                    return typeof B == "undefined" || !! e && B.event.triggered === e.type ? t : B.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = B.trim(ut(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = Z.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = B.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = B.event.special[c] || {}, p = B.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        quick: st(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), B.event.global[c] = !0
                }
                e = null
            }
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s = B.hasData(e) && B._data(e),
                o, u, a, f, l, c, h, p, d, v, m, g;
            if ( !! s && !! (p = s.events)) {
                t = B.trim(ut(t || "")).split(" ");
                for (o = 0; o < t.length; o++) {
                    u = Z.exec(t[o]) || [], a = f = u[1], l = u[2];
                    if (!a) {
                        for (a in p) B.event.remove(e, a + t[o], n, r, !0);
                        continue
                    }
                    d = B.event.special[a] || {}, a = (r ? d.delegateType : d.bindType) || a, m = p[a] || [], c = m.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;
                    for (h = 0; h < m.length; h++) g = m[h], (i || f === g.origType) && (!n || n.guid === g.guid) && (!l || l.test(g.namespace)) && (!r || r === g.selector || r === "**" && g.selector) && (m.splice(h--, 1), g.selector && m.delegateCount--, d.remove && d.remove.call(e, g));
                    m.length === 0 && c !== m.length && ((!d.teardown || d.teardown.call(e, l) === !1) && B.removeEvent(e, a, s.handle), delete p[a])
                }
                B.isEmptyObject(p) && (v = s.handle, v && (v.elem = null), B.removeData(e, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (n, r, i, s) {
            if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
                var o = n.type || n,
                    u = [],
                    a, f, l, c, h, p, d, v, m, g;
                if (rt.test(o + B.event.triggered)) return;
                o.indexOf("!") >= 0 && (o = o.slice(0, -1), f = !0), o.indexOf(".") >= 0 && (u = o.split("."), o = u.shift(), u.sort());
                if ((!i || B.event.customEvent[o]) && !B.event.global[o]) return;
                n = typeof n == "object" ? n[B.expando] ? n : new B.Event(o, n) : new B.Event(o), n.type = o, n.isTrigger = !0, n.exclusive = f, n.namespace = u.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, p = o.indexOf(":") < 0 ? "on" + o : "";
                if (!i) {
                    a = B.cache;
                    for (l in a) a[l].events && a[l].events[o] && B.event.trigger(n, r, a[l].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = i), r = r != null ? B.makeArray(r) : [], r.unshift(n), d = B.event.special[o] || {};
                if (d.trigger && d.trigger.apply(i, r) === !1) return;
                m = [
                    [i, d.bindType || o]
                ];
                if (!s && !d.noBubble && !B.isWindow(i)) {
                    g = d.delegateType || o, c = rt.test(g + o) ? i : i.parentNode, h = null;
                    for (; c; c = c.parentNode) m.push([c, g]), h = c;
                    h && h === i.ownerDocument && m.push([h.defaultView || h.parentWindow || e, g])
                }
                for (l = 0; l < m.length && !n.isPropagationStopped(); l++) c = m[l][0], n.type = m[l][1], v = (B._data(c, "events") || {})[n.type] && B._data(c, "handle"), v && v.apply(c, r), v = p && c[p], v && B.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
                return n.type = o, !s && !n.isDefaultPrevented() && (!d._default || d._default.apply(i.ownerDocument, r) === !1) && (o !== "click" || !B.nodeName(i, "a")) && B.acceptData(i) && p && i[o] && (o !== "focus" && o !== "blur" || n.target.offsetWidth !== 0) && !B.isWindow(i) && (h = i[p], h && (i[p] = null), B.event.triggered = o, i[o](), B.event.triggered = t, h && (i[p] = h)), n.result
            }
        },
        dispatch: function (n) {
            n = B.event.fix(n || e.event);
            var r = (B._data(this, "events") || {})[n.type] || [],
                i = r.delegateCount,
                s = [].slice.call(arguments, 0),
                o = !n.exclusive && !n.namespace,
                u = [],
                a, f, l, c, h, p, d, v, m, g, y;
            s[0] = n, n.delegateTarget = this;
            if (i && !n.target.disabled && (!n.button || n.type !== "click")) {
                c = B(this), c.context = this.ownerDocument || this;
                for (l = n.target; l != this; l = l.parentNode || this) {
                    p = {}, v = [], c[0] = l;
                    for (a = 0; a < i; a++) m = r[a], g = m.selector, p[g] === t && (p[g] = m.quick ? ot(l, m.quick) : c.is(g)), p[g] && v.push(m);
                    v.length && u.push({
                        elem: l,
                        matches: v
                    })
                }
            }
            r.length > i && u.push({
                elem: this,
                matches: r.slice(i)
            });
            for (a = 0; a < u.length && !n.isPropagationStopped(); a++) {
                d = u[a], n.currentTarget = d.elem;
                for (f = 0; f < d.matches.length && !n.isImmediatePropagationStopped(); f++) {
                    m = d.matches[f];
                    if (o || !n.namespace && !m.namespace || n.namespace_re && n.namespace_re.test(m.namespace)) n.data = m.data, n.handleObj = m, h = ((B.event.special[m.origType] || {}).handle || m.handler).apply(d.elem, s), h !== t && (n.result = h, h === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, s, o = n.button,
                    u = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || D, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[B.expando]) return e;
            var n, r, i = e,
                s = B.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = B.Event(i);
            for (n = o.length; n;) r = o[--n], e[r] = i[r];
            return e.target || (e.target = i.srcElement || D), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey === t && (e.metaKey = e.ctrlKey), s.filter ? s.filter(e, i) : e
        },
        special: {
            ready: {
                setup: B.bindReady
            },
            load: {
                noBubble: !0
            },
            focus: {
                delegateType: "focusin"
            },
            blur: {
                delegateType: "focusout"
            },
            beforeunload: {
                setup: function (e, t, n) {
                    B.isWindow(this) && (this.onbeforeunload = n)
                },
                teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = B.extend(new B.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            r ? B.event.trigger(i, null, t) : B.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, B.event.handle = B.event.dispatch, B.removeEvent = D.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        e.detachEvent && e.detachEvent("on" + t, n)
    }, B.Event = function (e, t) {
        if (!(this instanceof B.Event)) return new B.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? k : L) : this.type = e, t && B.extend(this, t), this.timeStamp = e && e.timeStamp || B.now(), this[B.expando] = !0
    }, B.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = k;
            var e = this.originalEvent;
            !e || (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            this.isPropagationStopped = k;
            var e = this.originalEvent;
            !e || (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = k, this.stopPropagation()
        },
        isDefaultPrevented: L,
        isPropagationStopped: L,
        isImmediatePropagationStopped: L
    }, B.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (e, t) {
        B.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n = this,
                    r = e.relatedTarget,
                    i = e.handleObj,
                    s = i.selector,
                    o;
                if (!r || r !== n && !B.contains(n, r)) e.type = i.origType, o = i.handler.apply(this, arguments), e.type = t;
                return o
            }
        }
    }), B.support.submitBubbles || (B.event.special.submit = {
        setup: function () {
            if (B.nodeName(this, "form")) return !1;
            B.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target,
                    r = B.nodeName(n, "input") || B.nodeName(n, "button") ? n.form : t;
                r && !r._submit_attached && (B.event.add(r, "submit._submit", function (e) {
                    this.parentNode && !e.isTrigger && B.event.simulate("submit", this.parentNode, e, !0)
                }), r._submit_attached = !0)
            })
        },
        teardown: function () {
            if (B.nodeName(this, "form")) return !1;
            B.event.remove(this, "._submit")
        }
    }), B.support.changeBubbles || (B.event.special.change = {
        setup: function () {
            if (Y.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio") B.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), B.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1, B.event.simulate("change", this, e, !0))
                });
                return !1
            }
            B.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Y.test(t.nodeName) && !t._change_attached && (B.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && B.event.simulate("change", this.parentNode, e, !0)
                }), t._change_attached = !0)
            })
        },
        handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return B.event.remove(this, "._change"), Y.test(this.nodeName)
        }
    }), B.support.focusinBubbles || B.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = 0,
            r = function (e) {
                B.event.simulate(t, e.target, B.event.fix(e), !0)
            };
        B.event.special[t] = {
            setup: function () {
                n++ === 0 && D.addEventListener(e, r, !0)
            },
            teardown: function () {
                --n === 0 && D.removeEventListener(e, r, !0)
            }
        }
    }), B.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = n, n = t);
                for (u in e) this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1) i = L;
            else if (!i) return this;
            return s === 1 && (o = i, i = function (e) {
                return B().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = B.guid++)), this.each(function () {
                B.event.add(this, e, i, r, n)
            })
        },
        one: function (e, t, n, r) {
            return this.on.call(this, e, t, n, r, 1)
        },
        off: function (e, n, r) {
            if (e && e.preventDefault && e.handleObj) {
                var i = e.handleObj;
                return B(e.delegateTarget).off(i.namespace ? i.type + "." + i.namespace : i.type, i.selector, i.handler), this
            }
            if (typeof e == "object") {
                for (var s in e) this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function") r = n, n = t;
            return r === !1 && (r = L), this.each(function () {
                B.event.remove(this, e, r, n)
            })
        },
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function (e, t) {
            return this.off(e, null, t)
        },
        live: function (e, t, n) {
            return B(this.context).on(e, this.selector, t, n), this
        },
        die: function (e, t) {
            return B(this.context).off(e, this.selector || "**", t), this
        },
        delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function (e, t, n) {
            return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n)
        },
        trigger: function (e, t) {
            return this.each(function () {
                B.event.trigger(e, t, this)
            })
        },
        triggerHandler: function (e, t) {
            if (this[0]) return B.event.trigger(e, t, this[0], !0)
        },
        toggle: function (e) {
            var t = arguments,
                n = e.guid || B.guid++,
                r = 0,
                i = function (n) {
                    var i = (B._data(this, "lastToggle" + e.guid) || 0) % r;
                    return B._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                };
            i.guid = n;
            while (r < t.length) t[r++].guid = n;
            return this.click(i)
        },
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), B.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        B.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, B.attrFn && (B.attrFn[t] = !0), tt.test(t) && (B.event.fixHooks[t] = B.event.keyHooks), nt.test(t) && (B.event.fixHooks[t] = B.event.mouseHooks)
    }),
    function () {
        function e(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        if (f.nodeType === 1) {
                            o || (f[i] = n, f.sizset = u);
                            if (typeof t != "string") {
                                if (f === t) {
                                    l = !0;
                                    break
                                }
                            } else if (h.filter(t, [f]).length > 0) {
                                l = f;
                                break
                            }
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }

        function n(e, t, n, r, s, o) {
            for (var u = 0, a = r.length; u < a; u++) {
                var f = r[u];
                if (f) {
                    var l = !1;
                    f = f[e];
                    while (f) {
                        if (f[i] === n) {
                            l = r[f.sizset];
                            break
                        }
                        f.nodeType === 1 && !o && (f[i] = n, f.sizset = u);
                        if (f.nodeName.toLowerCase() === t) {
                            l = f;
                            break
                        }
                        f = f[e]
                    }
                    r[u] = l
                }
            }
        }
        var r = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            i = "sizcache" + (Math.random() + "").replace(".", ""),
            s = 0,
            o = Object.prototype.toString,
            u = !1,
            a = !0,
            f = /\\/g,
            l = /\r\n/g,
            c = /\W/;
        [0, 0].sort(function () {
                return a = !1, 0
            });
        var h = function (e, t, n, i) {
            n = n || [], t = t || D;
            var s = t;
            if (t.nodeType !== 1 && t.nodeType !== 9) return [];
            if (!e || typeof e != "string") return n;
            var u, a, f, l, c, p, m, g, b = !0,
                w = h.isXML(t),
                E = [],
                x = e;
            do {
                r.exec(""), u = r.exec(x);
                if (u) {
                    x = u[3], E.push(u[1]);
                    if (u[2]) {
                        l = u[3];
                        break
                    }
                }
            } while (u);
            if (E.length > 1 && v.exec(e))
                if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i);
                else {
                    a = d.relative[E[0]] ? [t] : h(E.shift(), t);
                    while (E.length) e = E.shift(), d.relative[e] && (e += E.shift()), a = S(e, a, i)
                } else {
                    !i && E.length > 1 && t.nodeType === 9 && !w && d.match.ID.test(E[0]) && !d.match.ID.test(E[E.length - 1]) && (c = h.find(E.shift(), t, w), t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]);
                    if (t) {
                        c = i ? {
                            expr: E.pop(),
                            set: y(i)
                        } : h.find(E.pop(), E.length !== 1 || E[0] !== "~" && E[0] !== "+" || !t.parentNode ? t : t.parentNode, w), a = c.expr ? h.filter(c.expr, c.set) : c.set, E.length > 0 ? f = y(a) : b = !1;
                        while (E.length) p = E.pop(), m = p, d.relative[p] ? m = E.pop() : p = "", m == null && (m = t), d.relative[p](f, m, w)
                    } else f = E = []
                }
            f || (f = a), f || h.error(p || e);
            if (o.call(f) === "[object Array]")
                if (!b) n.push.apply(n, f);
                else if (t && t.nodeType === 1)
                for (g = 0; f[g] != null; g++) f[g] && (f[g] === !0 || f[g].nodeType === 1 && h.contains(t, f[g])) && n.push(a[g]);
            else
                for (g = 0; f[g] != null; g++) f[g] && f[g].nodeType === 1 && n.push(a[g]);
            else y(f, n);
            return l && (h(l, s, n, i), h.uniqueSort(n)), n
        };
        h.uniqueSort = function (e) {
            if (w) {
                u = a, e.sort(w);
                if (u)
                    for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1)
            }
            return e
        }, h.matches = function (e, t) {
            return h(e, null, null, t)
        }, h.matchesSelector = function (e, t) {
            return h(t, null, null, [e]).length > 0
        }, h.find = function (e, t, n) {
            var r, i, s, o, u, a;
            if (!e) return [];
            for (i = 0, s = d.order.length; i < s; i++) {
                u = d.order[i];
                if (o = d.leftMatch[u].exec(e)) {
                    a = o[1], o.splice(1, 1);
                    if (a.substr(a.length - 1) !== "\\") {
                        o[1] = (o[1] || "").replace(f, ""), r = d.find[u](o, t, n);
                        if (r != null) {
                            e = e.replace(d.match[u], "");
                            break
                        }
                    }
                }
            }
            return r || (r = typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName("*") : []), {
                set: r,
                expr: e
            }
        }, h.filter = function (e, n, r, i) {
            var s, o, u, a, f, l, c, p, v, m = e,
                g = [],
                y = n,
                b = n && n[0] && h.isXML(n[0]);
            while (e && n.length) {
                for (u in d.filter)
                    if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                        l = d.filter[u], c = s[1], o = !1, s.splice(1, 1);
                        if (c.substr(c.length - 1) === "\\") continue;
                        y === g && (g = []);
                        if (d.preFilter[u]) {
                            s = d.preFilter[u](s, y, r, g, i, b);
                            if (!s) o = a = !0;
                            else if (s === !0) continue
                        }
                        if (s)
                            for (p = 0;
                                (f = y[p]) != null; p++) f && (a = l(f, s, p, y), v = i ^ a, r && a != null ? v ? o = !0 : y[p] = !1 : v && (g.push(f), o = !0));
                        if (a !== t) {
                            r || (y = g), e = e.replace(d.match[u], "");
                            if (!o) return [];
                            break
                        }
                    }
                if (e === m) {
                    if (o != null) break;
                    h.error(e)
                }
                m = e
            }
            return y
        }, h.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        var p = h.getText = function (e) {
            var t, n, r = e.nodeType,
                i = "";
            if (r) {
                if (r === 1 || r === 9) {
                    if (typeof e.textContent == "string") return e.textContent;
                    if (typeof e.innerText == "string") return e.innerText.replace(l, "");
                    for (e = e.firstChild; e; e = e.nextSibling) i += p(e)
                } else if (r === 3 || r === 4) return e.nodeValue
            } else
                for (t = 0; n = e[t]; t++) n.nodeType !== 8 && (i += p(n));
            return i
        }, d = h.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (e) {
                        return e.getAttribute("href")
                    },
                    type: function (e) {
                        return e.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (e, t) {
                        var n = typeof t == "string",
                            r = n && !c.test(t),
                            i = n && !r;
                        r && (t = t.toLowerCase());
                        for (var s = 0, o = e.length, u; s < o; s++)
                            if (u = e[s]) {
                                while ((u = u.previousSibling) && u.nodeType !== 1);
                                e[s] = i || u && u.nodeName.toLowerCase() === t ? u || !1 : u === t
                            }
                        i && h.filter(t, e, !0)
                    },
                    ">": function (e, t) {
                        var n, r = typeof t == "string",
                            i = 0,
                            s = e.length;
                        if (r && !c.test(t)) {
                            t = t.toLowerCase();
                            for (; i < s; i++) {
                                n = e[i];
                                if (n) {
                                    var o = n.parentNode;
                                    e[i] = o.nodeName.toLowerCase() === t ? o : !1
                                }
                            }
                        } else {
                            for (; i < s; i++) n = e[i], n && (e[i] = r ? n.parentNode : n.parentNode === t);
                            r && h.filter(t, e, !0)
                        }
                    },
                    "": function (t, r, i) {
                        var o, u = s++,
                            a = e;
                        typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("parentNode", r, u, t, o, i)
                    },
                    "~": function (t, r, i) {
                        var o, u = s++,
                            a = e;
                        typeof r == "string" && !c.test(r) && (r = r.toLowerCase(), o = r, a = n), a("previousSibling", r, u, t, o, i)
                    }
                },
                find: {
                    ID: function (e, t, n) {
                        if (typeof t.getElementById != "undefined" && !n) {
                            var r = t.getElementById(e[1]);
                            return r && r.parentNode ? [r] : []
                        }
                    },
                    NAME: function (e, t) {
                        if (typeof t.getElementsByName != "undefined") {
                            var n = [],
                                r = t.getElementsByName(e[1]);
                            for (var i = 0, s = r.length; i < s; i++) r[i].getAttribute("name") === e[1] && n.push(r[i]);
                            return n.length === 0 ? null : n
                        }
                    },
                    TAG: function (e, t) {
                        if (typeof t.getElementsByTagName != "undefined") return t.getElementsByTagName(e[1])
                    }
                },
                preFilter: {
                    CLASS: function (e, t, n, r, i, s) {
                        e = " " + e[1].replace(f, "") + " ";
                        if (s) return e;
                        for (var o = 0, u;
                            (u = t[o]) != null; o++) u && (i ^ (u.className && (" " + u.className + " ").replace(/[\t\n\r]/g, " ").indexOf(e) >= 0) ? n || r.push(u) : n && (t[o] = !1));
                        return !1
                    },
                    ID: function (e) {
                        return e[1].replace(f, "")
                    },
                    TAG: function (e, t) {
                        return e[1].replace(f, "").toLowerCase()
                    },
                    CHILD: function (e) {
                        if (e[1] === "nth") {
                            e[2] || h.error(e[0]), e[2] = e[2].replace(/^\+|\s*/g, "");
                            var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2] === "even" && "2n" || e[2] === "odd" && "2n+1" || !/\D/.test(e[2]) && "0n+" + e[2] || e[2]);
                            e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                        } else e[2] && h.error(e[0]);
                        return e[0] = s++, e
                    },
                    ATTR: function (e, t, n, r, i, s) {
                        var o = e[1] = e[1].replace(f, "");
                        return !s && d.attrMap[o] && (e[1] = d.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(f, ""), e[2] === "~=" && (e[4] = " " + e[4] + " "), e
                    },
                    PSEUDO: function (e, t, n, i, s) {
                        if (e[1] === "not") {
                            if (!((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))) {
                                var o = h.filter(e[3], t, n, !0 ^ s);
                                return n || i.push.apply(i, o), !1
                            }
                            e[3] = h(e[3], null, null, t)
                        } else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0])) return !0;
                        return e
                    },
                    POS: function (e) {
                        return e.unshift(!0), e
                    }
                },
                filters: {
                    enabled: function (e) {
                        return e.disabled === !1 && e.type !== "hidden"
                    },
                    disabled: function (e) {
                        return e.disabled === !0
                    },
                    checked: function (e) {
                        return e.checked === !0
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function (e) {
                        return !!e.firstChild
                    },
                    empty: function (e) {
                        return !e.firstChild
                    },
                    has: function (e, t, n) {
                        return !!h(n[3], e).length
                    },
                    header: function (e) {
                        return /h\d/i.test(e.nodeName)
                    },
                    text: function (e) {
                        var t = e.getAttribute("type"),
                            n = e.type;
                        return e.nodeName.toLowerCase() === "input" && "text" === n && (t === n || t === null)
                    },
                    radio: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "radio" === e.type
                    },
                    checkbox: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
                    },
                    file: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "file" === e.type
                    },
                    password: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "password" === e.type
                    },
                    submit: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "submit" === e.type
                    },
                    image: function (e) {
                        return e.nodeName.toLowerCase() === "input" && "image" === e.type
                    },
                    reset: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && "reset" === e.type
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && "button" === e.type || t === "button"
                    },
                    input: function (e) {
                        return /input|select|textarea|button/i.test(e.nodeName)
                    },
                    focus: function (e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (e, t) {
                        return t === 0
                    },
                    last: function (e, t, n, r) {
                        return t === r.length - 1
                    },
                    even: function (e, t) {
                        return t % 2 === 0
                    },
                    odd: function (e, t) {
                        return t % 2 === 1
                    },
                    lt: function (e, t, n) {
                        return t < n[3] - 0
                    },
                    gt: function (e, t, n) {
                        return t > n[3] - 0
                    },
                    nth: function (e, t, n) {
                        return n[3] - 0 === t
                    },
                    eq: function (e, t, n) {
                        return n[3] - 0 === t
                    }
                },
                filter: {
                    PSEUDO: function (e, t, n, r) {
                        var i = t[1],
                            s = d.filters[i];
                        if (s) return s(e, n, t, r);
                        if (i === "contains") return (e.textContent || e.innerText || p([e]) || "").indexOf(t[3]) >= 0;
                        if (i === "not") {
                            var o = t[3];
                            for (var u = 0, a = o.length; u < a; u++)
                                if (o[u] === e) return !1;
                            return !0
                        }
                        h.error(i)
                    },
                    CHILD: function (e, t) {
                        var n, r, s, o, u, a, f, l = t[1],
                            c = e;
                        switch (l) {
                        case "only":
                        case "first":
                            while (c = c.previousSibling)
                                if (c.nodeType === 1) return !1;
                            if (l === "first") return !0;
                            c = e;
                        case "last":
                            while (c = c.nextSibling)
                                if (c.nodeType === 1) return !1;
                            return !0;
                        case "nth":
                            n = t[2], r = t[3];
                            if (n === 1 && r === 0) return !0;
                            s = t[0], o = e.parentNode;
                            if (o && (o[i] !== s || !e.nodeIndex)) {
                                a = 0;
                                for (c = o.firstChild; c; c = c.nextSibling) c.nodeType === 1 && (c.nodeIndex = ++a);
                                o[i] = s
                            }
                            return f = e.nodeIndex - r, n === 0 ? f === 0 : f % n === 0 && f / n >= 0
                        }
                    },
                    ID: function (e, t) {
                        return e.nodeType === 1 && e.getAttribute("id") === t
                    },
                    TAG: function (e, t) {
                        return t === "*" && e.nodeType === 1 || !! e.nodeName && e.nodeName.toLowerCase() === t
                    },
                    CLASS: function (e, t) {
                        return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
                    },
                    ATTR: function (e, t) {
                        var n = t[1],
                            r = h.attr ? h.attr(e, n) : d.attrHandle[n] ? d.attrHandle[n](e) : e[n] != null ? e[n] : e.getAttribute(n),
                            i = r + "",
                            s = t[2],
                            o = t[4];
                        return r == null ? s === "!=" : !s && h.attr ? r != null : s === "=" ? i === o : s === "*=" ? i.indexOf(o) >= 0 : s === "~=" ? (" " + i + " ").indexOf(o) >= 0 : o ? s === "!=" ? i !== o : s === "^=" ? i.indexOf(o) === 0 : s === "$=" ? i.substr(i.length - o.length) === o : s === "|=" ? i === o || i.substr(0, o.length + 1) === o + "-" : !1 : i && r !== !1
                    },
                    POS: function (e, t, n, r) {
                        var i = t[2],
                            s = d.setFilters[i];
                        if (s) return s(e, n, t, r)
                    }
                }
            }, v = d.match.POS,
            m = function (e, t) {
                return "\\" + (t - 0 + 1)
            };
        for (var g in d.match) d.match[g] = new RegExp(d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source), d.leftMatch[g] = new RegExp(/(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m));
        var y = function (e, t) {
            return e = Array.prototype.slice.call(e, 0), t ? (t.push.apply(t, e), t) : e
        };
        try {
            Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType
        } catch (b) {
            y = function (e, t) {
                var n = 0,
                    r = t || [];
                if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
                else if (typeof e.length == "number")
                    for (var i = e.length; n < i; n++) r.push(e[n]);
                else
                    for (; e[n]; n++) r.push(e[n]);
                return r
            }
        }
        var w, E;
        D.documentElement.compareDocumentPosition ? w = function (e, t) {
            return e === t ? (u = !0, 0) : !e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition ? -1 : 1 : e.compareDocumentPosition(t) & 4 ? -1 : 1
        } : (w = function (e, t) {
            if (e === t) return u = !0, 0;
            if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
            var n, r, i = [],
                s = [],
                o = e.parentNode,
                a = t.parentNode,
                f = o;
            if (o === a) return E(e, t);
            if (!o) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), f = f.parentNode;
            f = a;
            while (f) s.unshift(f), f = f.parentNode;
            n = i.length, r = s.length;
            for (var l = 0; l < n && l < r; l++)
                if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1)
        }, E = function (e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t) return -1;
                r = r.nextSibling
            }
            return 1
        }),
        function () {
            var e = D.createElement("div"),
                n = "script" + (new Date).getTime(),
                r = D.documentElement;
            e.innerHTML = "<a name='" + n + "'/>", r.insertBefore(e, r.firstChild), D.getElementById(n) && (d.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                    var i = n.getElementById(e[1]);
                    return i ? i.id === e[1] || typeof i.getAttributeNode != "undefined" && i.getAttributeNode("id").nodeValue === e[1] ? [i] : t : []
                }
            }, d.filter.ID = function (e, t) {
                var n = typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t
            }), r.removeChild(e), r = e = null
        }(),
        function () {
            var e = D.createElement("div");
            e.appendChild(D.createComment("")), e.getElementsByTagName("*").length > 0 && (d.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                    var r = [];
                    for (var i = 0; n[i]; i++) n[i].nodeType === 1 && r.push(n[i]);
                    n = r
                }
                return n
            }), e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute != "undefined" && e.firstChild.getAttribute("href") !== "#" && (d.attrHandle.href = function (e) {
                return e.getAttribute("href", 2)
            }), e = null
        }(), D.querySelectorAll && function () {
            var e = h,
                t = D.createElement("div"),
                n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (!t.querySelectorAll || t.querySelectorAll(".TEST").length !== 0) {
                h = function (t, r, i, s) {
                    r = r || D;
                    if (!s && !h.isXML(r)) {
                        var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                        if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                            if (o[1]) return y(r.getElementsByTagName(t), i);
                            if (o[2] && d.find.CLASS && r.getElementsByClassName) return y(r.getElementsByClassName(o[2]), i)
                        }
                        if (r.nodeType === 9) {
                            if (t === "body" && r.body) return y([r.body], i);
                            if (o && o[3]) {
                                var u = r.getElementById(o[3]);
                                if (!u || !u.parentNode) return y([], i);
                                if (u.id === o[3]) return y([u], i)
                            }
                            try {
                                return y(r.querySelectorAll(t), i)
                            } catch (a) {}
                        } else if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            var f = r,
                                l = r.getAttribute("id"),
                                c = l || n,
                                p = r.parentNode,
                                v = /^\s*[+~]/.test(t);
                            l ? c = c.replace(/'/g, "\\$&") : r.setAttribute("id", c), v && p && (r = r.parentNode);
                            try {
                                if (!v || p) return y(r.querySelectorAll("[id='" + c + "'] " + t), i)
                            } catch (m) {} finally {
                                l || f.removeAttribute("id")
                            }
                        }
                    }
                    return e(t, r, i, s)
                };
                for (var r in e) h[r] = e[r];
                t = null
            }
        }(),
        function () {
            var e = D.documentElement,
                t = e.matchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.msMatchesSelector;
            if (t) {
                var n = !t.call(D.createElement("div"), "div"),
                    r = !1;
                try {
                    t.call(D.documentElement, "[test!='']:sizzle")
                } catch (i) {
                    r = !0
                }
                h.matchesSelector = function (e, i) {
                    i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!h.isXML(e)) try {
                        if (r || !d.match.PSEUDO.test(i) && !/!=/.test(i)) {
                            var s = t.call(e, i);
                            if (s || !n || e.document && e.document.nodeType !== 11) return s
                        }
                    } catch (o) {}
                    return h(i, null, null, [e]).length > 0
                }
            }
        }(),
        function () {
            var e = D.createElement("div");
            e.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if ( !! e.getElementsByClassName && e.getElementsByClassName("e").length !== 0) {
                e.lastChild.className = "e";
                if (e.getElementsByClassName("e").length === 1) return;
                d.order.splice(1, 0, "CLASS"), d.find.CLASS = function (e, t, n) {
                    if (typeof t.getElementsByClassName != "undefined" && !n) return t.getElementsByClassName(e[1])
                }, e = null
            }
        }(), D.documentElement.contains ? h.contains = function (e, t) {
            return e !== t && (e.contains ? e.contains(t) : !0)
        } : D.documentElement.compareDocumentPosition ? h.contains = function (e, t) {
            return !!(e.compareDocumentPosition(t) & 16)
        } : h.contains = function () {
            return !1
        }, h.isXML = function (e) {
            var t = (e ? e.ownerDocument || e : 0).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        var S = function (e, t, n) {
            var r, i = [],
                s = "",
                o = t.nodeType ? [t] : t;
            while (r = d.match.PSEUDO.exec(e)) s += r[0], e = e.replace(d.match.PSEUDO, "");
            e = d.relative[e] ? e + "*" : e;
            for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
            return h.filter(s, i)
        };
        h.attr = B.attr, h.selectors.attrMap = {}, B.find = h, B.expr = h.selectors, B.expr[":"] = B.expr.filters, B.unique = h.uniqueSort, B.text = h.getText, B.isXMLDoc = h.isXML, B.contains = h.contains
    }();
    var at = /Until$/,
        ft = /^(?:parents|prevUntil|prevAll)/,
        lt = /,/,
        ct = /^.[^:#\[\.,]*$/,
        ht = Array.prototype.slice,
        pt = B.expr.match.POS,
        dt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    B.fn.extend({
        find: function (e) {
            var t = this,
                n, r;
            if (typeof e != "string") return B(e).filter(function () {
                for (n = 0, r = t.length; n < r; n++)
                    if (B.contains(t[n], this)) return !0
            });
            var i = this.pushStack("", "find", e),
                s, o, u;
            for (n = 0, r = this.length; n < r; n++) {
                s = i.length, B.find(e, this[n], i);
                if (n > 0)
                    for (o = s; o < i.length; o++)
                        for (u = 0; u < s; u++)
                            if (i[u] === i[o]) {
                                i.splice(o--, 1);
                                break
                            }
            }
            return i
        },
        has: function (e) {
            var t = B(e);
            return this.filter(function () {
                for (var e = 0, n = t.length; e < n; e++)
                    if (B.contains(this, t[e])) return !0
            })
        },
        not: function (e) {
            return this.pushStack(N(this, e, !1), "not", e)
        },
        filter: function (e) {
            return this.pushStack(N(this, e, !0), "filter", e)
        },
        is: function (e) {
            return !!e && (typeof e == "string" ? pt.test(e) ? B(e, this.context).index(this[0]) >= 0 : B.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function (e, t) {
            var n = [],
                r, i, s = this[0];
            if (B.isArray(e)) {
                var o = 1;
                while (s && s.ownerDocument && s !== t) {
                    for (r = 0; r < e.length; r++) B(s).is(e[r]) && n.push({
                        selector: e[r],
                        elem: s,
                        level: o
                    });
                    s = s.parentNode, o++
                }
                return n
            }
            var u = pt.test(e) || typeof e != "string" ? B(e, t || this.context) : 0;
            for (r = 0, i = this.length; r < i; r++) {
                s = this[r];
                while (s) {
                    if (u ? u.index(s) > -1 : B.find.matchesSelector(s, e)) {
                        n.push(s);
                        break
                    }
                    s = s.parentNode;
                    if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break
                }
            }
            return n = n.length > 1 ? B.unique(n) : n, this.pushStack(n, "closest", e)
        },
        index: function (e) {
            return e ? typeof e == "string" ? B.inArray(this[0], B(e)) : B.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function (e, t) {
            var n = typeof e == "string" ? B(e, t) : B.makeArray(e && e.nodeType ? [e] : e),
                r = B.merge(this.get(), n);
            return this.pushStack(C(n[0]) || C(r[0]) ? r : B.unique(r))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }), B.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function (e) {
            return B.dir(e, "parentNode")
        },
        parentsUntil: function (e, t, n) {
            return B.dir(e, "parentNode", n)
        },
        next: function (e) {
            return B.nth(e, 2, "nextSibling")
        },
        prev: function (e) {
            return B.nth(e, 2, "previousSibling")
        },
        nextAll: function (e) {
            return B.dir(e, "nextSibling")
        },
        prevAll: function (e) {
            return B.dir(e, "previousSibling")
        },
        nextUntil: function (e, t, n) {
            return B.dir(e, "nextSibling", n)
        },
        prevUntil: function (e, t, n) {
            return B.dir(e, "previousSibling", n)
        },
        siblings: function (e) {
            return B.sibling(e.parentNode.firstChild, e)
        },
        children: function (e) {
            return B.sibling(e.firstChild)
        },
        contents: function (e) {
            return B.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : B.makeArray(e.childNodes)
        }
    }, function (e, t) {
        B.fn[e] = function (n, r) {
            var i = B.map(this, t, n);
            return at.test(e) || (r = n), r && typeof r == "string" && (i = B.filter(r, i)), i = this.length > 1 && !dt[e] ? B.unique(i) : i, (this.length > 1 || lt.test(r)) && ft.test(e) && (i = i.reverse()), this.pushStack(i, e, ht.call(arguments).join(","))
        }
    }), B.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? B.find.matchesSelector(t[0], e) ? [t[0]] : [] : B.find.matches(e, t)
        },
        dir: function (e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !B(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        nth: function (e, t, n, r) {
            t = t || 1;
            var i = 0;
            for (; e; e = e[n])
                if (e.nodeType === 1 && ++i === t) break;
            return e
        },
        sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var vt = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        mt = / jQuery\d+="(?:\d+|null)"/g,
        gt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        Et = /<|&#?\w+;/,
        St = /<(?:script|style)/i,
        xt = /<(?:script|object|embed|option|style)/i,
        Tt = new RegExp("<(?:" + vt + ")", "i"),
        Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ct = /\/(java|ecma)script/i,
        kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
        Lt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        }, At = T(D);
    Lt.optgroup = Lt.option, Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead, Lt.th = Lt.td, B.support.htmlSerialize || (Lt._default = [1, "div<div>", "</div>"]), B.fn.extend({
        text: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                var n = B(this);
                n.text(e.call(this, t, n.text()))
            }) : typeof e != "object" && e !== t ? this.empty().append((this[0] && this[0].ownerDocument || D).createTextNode(e)) : B.text(this)
        },
        wrapAll: function (e) {
            if (B.isFunction(e)) return this.each(function (t) {
                B(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function (e) {
            return B.isFunction(e) ? this.each(function (t) {
                B(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = B(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function (e) {
            var t = B.isFunction(e);
            return this.each(function (n) {
                B(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                B.nodeName(this, "body") || B(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.appendChild(e)
            })
        },
        prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                this.nodeType === 1 && this.insertBefore(e, this.firstChild)
            })
        },
        before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = B.clean(arguments);
                return e.push.apply(e, this.toArray()), this.pushStack(e, "before", arguments)
            }
        },
        after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = this.pushStack(this, "after", arguments);
                return e.push.apply(e, B.clean(arguments)), e
            }
        },
        remove: function (e, t) {
            for (var n = 0, r;
                (r = this[n]) != null; n++)
                if (!e || B.filter(e, [r]).length)!t && r.nodeType === 1 && (B.cleanData(r.getElementsByTagName("*")), B.cleanData([r])), r.parentNode && r.parentNode.removeChild(r);
            return this
        },
        empty: function () {
            for (var e = 0, t;
                (t = this[e]) != null; e++) {
                t.nodeType === 1 && B.cleanData(t.getElementsByTagName("*"));
                while (t.firstChild) t.removeChild(t.firstChild)
            }
            return this
        },
        clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return B.clone(this, e, t)
            })
        },
        html: function (e) {
            if (e === t) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(mt, "") : null;
            if (typeof e == "string" && !St.test(e) && (B.support.leadingWhitespace || !gt.test(e)) && !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = e.replace(yt, "<$1></$2>");
                try {
                    for (var n = 0, r = this.length; n < r; n++) this[n].nodeType === 1 && (B.cleanData(this[n].getElementsByTagName("*")), this[n].innerHTML = e)
                } catch (i) {
                    this.empty().append(e)
                }
            } else B.isFunction(e) ? this.each(function (t) {
                var n = B(this);
                n.html(e.call(this, t, n.html()))
            }) : this.empty().append(e);
            return this
        },
        replaceWith: function (e) {
            return this[0] && this[0].parentNode ? B.isFunction(e) ? this.each(function (t) {
                var n = B(this),
                    r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = B(e).detach()), this.each(function () {
                var t = this.nextSibling,
                    n = this.parentNode;
                B(this).remove(), t ? B(t).before(e) : B(n).append(e)
            })) : this.length ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e) : this
        },
        detach: function (e) {
            return this.remove(e, !0)
        },
        domManip: function (e, n, r) {
            var i, s, o, u, a = e[0],
                f = [];
            if (!B.support.checkClone && arguments.length === 3 && typeof a == "string" && Nt.test(a)) return this.each(function () {
                B(this).domManip(e, n, r, !0)
            });
            if (B.isFunction(a)) return this.each(function (i) {
                var s = B(this);
                e[0] = a.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                u = a && a.parentNode, B.support.parentNode && u && u.nodeType === 11 && u.childNodes.length === this.length ? i = {
                    fragment: u
                } : i = B.buildFragment(e, this, f), o = i.fragment, o.childNodes.length === 1 ? s = o = o.firstChild : s = o.firstChild;
                if (s) {
                    n = n && B.nodeName(s, "tr");
                    for (var l = 0, c = this.length, h = c - 1; l < c; l++) r.call(n ? x(this[l], s) : this[l], i.cacheable || c > 1 && l < h ? B.clone(o, !0, !0) : o)
                }
                f.length && B.each(f, m)
            }
            return this
        }
    }), B.buildFragment = function (e, t, n) {
        var r, i, s, o, u = e[0];
        return t && t[0] && (o = t[0].ownerDocument || t[0]), o.createDocumentFragment || (o = D), e.length === 1 && typeof u == "string" && u.length < 512 && o === D && u.charAt(0) === "<" && !xt.test(u) && (B.support.checkClone || !Nt.test(u)) && (B.support.html5Clone || !Tt.test(u)) && (i = !0, s = B.fragments[u], s && s !== 1 && (r = s)), r || (r = o.createDocumentFragment(), B.clean(e, o, r, n)), i && (B.fragments[u] = s ? r : 1), {
            fragment: r,
            cacheable: i
        }
    }, B.fragments = {}, B.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        B.fn[e] = function (n) {
            var r = [],
                i = B(n),
                s = this.length === 1 && this[0].parentNode;
            if (s && s.nodeType === 11 && s.childNodes.length === 1 && i.length === 1) return i[t](this[0]), this;
            for (var o = 0, u = i.length; o < u; o++) {
                var a = (o > 0 ? this.clone(!0) : this).get();
                B(i[o])[t](a), r = r.concat(a)
            }
            return this.pushStack(r, e, i.selector)
        }
    }), B.extend({
        clone: function (e, t, n) {
            var r, i, s, o = B.support.html5Clone || !Tt.test("<" + e.nodeName) ? e.cloneNode(!0) : g(e);
            if ((!B.support.noCloneEvent || !B.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !B.isXMLDoc(e)) {
                E(e, o), r = w(e), i = w(o);
                for (s = 0; r[s]; ++s) i[s] && E(r[s], i[s])
            }
            if (t) {
                S(e, o);
                if (n) {
                    r = w(e), i = w(o);
                    for (s = 0; r[s]; ++s) S(r[s], i[s])
                }
            }
            return r = i = null, o
        },
        clean: function (e, t, n, r) {
            var i;
            t = t || D, typeof t.createElement == "undefined" && (t = t.ownerDocument || t[0] && t[0].ownerDocument || D);
            var s = [],
                o;
            for (var u = 0, a;
                (a = e[u]) != null; u++) {
                typeof a == "number" && (a += "");
                if (!a) continue;
                if (typeof a == "string")
                    if (!Et.test(a)) a = t.createTextNode(a);
                    else {
                        a = a.replace(yt, "<$1></$2>");
                        var f = (bt.exec(a) || ["", ""])[1].toLowerCase(),
                            l = Lt[f] || Lt._default,
                            c = l[0],
                            h = t.createElement("div");
                        t === D ? At.appendChild(h) : T(t).appendChild(h), h.innerHTML = l[1] + a + l[2];
                        while (c--) h = h.lastChild;
                        if (!B.support.tbody) {
                            var p = wt.test(a),
                                d = f === "table" && !p ? h.firstChild && h.firstChild.childNodes : l[1] === "<table>" && !p ? h.childNodes : [];
                            for (o = d.length - 1; o >= 0; --o) B.nodeName(d[o], "tbody") && !d[o].childNodes.length && d[o].parentNode.removeChild(d[o])
                        }!B.support.leadingWhitespace && gt.test(a) && h.insertBefore(t.createTextNode(gt.exec(a)[0]), h.firstChild), a = h.childNodes
                    }
                var v;
                if (!B.support.appendChecked)
                    if (a[0] && typeof (v = a.length) == "number")
                        for (o = 0; o < v; o++) y(a[o]);
                    else y(a);
                a.nodeType ? s.push(a) : s = B.merge(s, a)
            }
            if (n) {
                i = function (e) {
                    return !e.type || Ct.test(e.type)
                };
                for (u = 0; s[u]; u++)
                    if (r && B.nodeName(s[u], "script") && (!s[u].type || s[u].type.toLowerCase() === "text/javascript")) r.push(s[u].parentNode ? s[u].parentNode.removeChild(s[u]) : s[u]);
                    else {
                        if (s[u].nodeType === 1) {
                            var m = B.grep(s[u].getElementsByTagName("script"), i);
                            s.splice.apply(s, [u + 1, 0].concat(m))
                        }
                        n.appendChild(s[u])
                    }
            }
            return s
        },
        cleanData: function (e) {
            var t, n, r = B.cache,
                i = B.event.special,
                s = B.support.deleteExpando;
            for (var o = 0, u;
                (u = e[o]) != null; o++) {
                if (u.nodeName && B.noData[u.nodeName.toLowerCase()]) continue;
                n = u[B.expando];
                if (n) {
                    t = r[n];
                    if (t && t.events) {
                        for (var a in t.events) i[a] ? B.event.remove(u, a) : B.removeEvent(u, a, t.handle);
                        t.handle && (t.handle.elem = null)
                    }
                    s ? delete u[B.expando] : u.removeAttribute && u.removeAttribute(B.expando), delete r[n]
                }
            }
        }
    });
    var Ot = /alpha\([^)]*\)/i,
        Mt = /opacity=([^)]*)/,
        _t = /([A-Z]|^ms)/g,
        Dt = /^-?\d+(?:px)?$/i,
        Pt = /^-?\d/,
        Ht = /^([\-+])=([\-+.\de]+)/,
        Bt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, jt = ["Left", "Right"],
        Ft = ["Top", "Bottom"],
        It, qt, Rt;
    B.fn.css = function (e, n) {
        return arguments.length === 2 && n === t ? this : B.access(this, e, n, !0, function (e, n, r) {
            return r !== t ? B.style(e, n, r) : B.css(e, n)
        })
    }, B.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = It(e, "opacity", "opacity");
                        return n === "" ? "1" : n
                    }
                    return e.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": B.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (e, n, r, i) {
            if ( !! e && e.nodeType !== 3 && e.nodeType !== 8 && !! e.style) {
                var s, o, u = B.camelCase(n),
                    a = e.style,
                    f = B.cssHooks[u];
                n = B.cssProps[u] || u;
                if (r === t) return f && "get" in f && (s = f.get(e, !1, i)) !== t ? s : a[n];
                o = typeof r, o === "string" && (s = Ht.exec(r)) && (r = +(s[1] + 1) * +s[2] + parseFloat(B.css(e, n)), o = "number");
                if (r == null || o === "number" && isNaN(r)) return;
                o === "number" && !B.cssNumber[u] && (r += "px");
                if (!f || !("set" in f) || (r = f.set(e, r)) !== t) try {
                    a[n] = r
                } catch (l) {}
            }
        },
        css: function (e, n, r) {
            var i, s;
            n = B.camelCase(n), s = B.cssHooks[n], n = B.cssProps[n] || n, n === "cssFloat" && (n = "float");
            if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
            if (It) return It(e, n)
        },
        swap: function (e, t, n) {
            var r = {};
            for (var i in t) r[i] = e.style[i], e.style[i] = t[i];
            n.call(e);
            for (i in t) e.style[i] = r[i]
        }
    }), B.curCSS = B.css, B.each(["height", "width"], function (e, t) {
        B.cssHooks[t] = {
            get: function (e, n, r) {
                var i;
                if (n) return e.offsetWidth !== 0 ? v(e, t, r) : (B.swap(e, Bt, function () {
                    i = v(e, t, r)
                }), i)
            },
            set: function (e, t) {
                if (!Dt.test(t)) return t;
                t = parseFloat(t);
                if (t >= 0) return t + "px"
            }
        }
    }), B.support.opacity || (B.cssHooks.opacity = {
        get: function (e, t) {
            return Mt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : t ? "1" : ""
        },
        set: function (e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = B.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && B.trim(s.replace(Ot, "")) === "") {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Ot.test(s) ? s.replace(Ot, i) : s + " " + i
        }
    }), B(function () {
        B.support.reliableMarginRight || (B.cssHooks.marginRight = {
            get: function (e, t) {
                var n;
                return B.swap(e, {
                    display: "inline-block"
                }, function () {
                    t ? n = It(e, "margin-right", "marginRight") : n = e.style.marginRight
                }), n
            }
        })
    }), D.defaultView && D.defaultView.getComputedStyle && (qt = function (e, t) {
        var n, r, i;
        return t = t.replace(_t, "-$1").toLowerCase(), (r = e.ownerDocument.defaultView) && (i = r.getComputedStyle(e, null)) && (n = i.getPropertyValue(t), n === "" && !B.contains(e.ownerDocument.documentElement, e) && (n = B.style(e, t))), n
    }), D.documentElement.currentStyle && (Rt = function (e, t) {
        var n, r, i, s = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return s === null && o && (i = o[t]) && (s = i), !Dt.test(s) && Pt.test(s) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = t === "fontSize" ? "1em" : s || 0, s = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), s === "" ? "auto" : s
    }), It = qt || Rt, B.expr && B.expr.filters && (B.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
            n = e.offsetHeight;
        return t === 0 && n === 0 || !B.support.reliableHiddenOffsets && (e.style && e.style.display || B.css(e, "display")) === "none"
    }, B.expr.filters.visible = function (e) {
        return !B.expr.filters.hidden(e)
    });
    var Ut = /%20/g,
        zt = /\[\]$/,
        Wt = /\r?\n/g,
        Xt = /#.*$/,
        Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        $t = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Kt = /^(?:GET|HEAD)$/,
        Qt = /^\/\//,
        Gt = /\?/,
        Yt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Zt = /^(?:select|textarea)/i,
        en = /\s+/,
        tn = /([?&])_=[^&]*/,
        nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        rn = B.fn.load,
        sn = {}, on = {}, un, an, fn = ["*/"] + ["*"];
    try {
        un = H.href
    } catch (ln) {
        un = D.createElement("a"), un.href = "", un = un.href
    }
    an = nn.exec(un.toLowerCase()) || [], B.fn.extend({
        load: function (e, n, r) {
            if (typeof e != "string" && rn) return rn.apply(this, arguments);
            if (!this.length) return this;
            var i = e.indexOf(" ");
            if (i >= 0) {
                var s = e.slice(i, e.length);
                e = e.slice(0, i)
            }
            var o = "GET";
            n && (B.isFunction(n) ? (r = n, n = t) : typeof n == "object" && (n = B.param(n, B.ajaxSettings.traditional), o = "POST"));
            var u = this;
            return B.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function (e, t, n) {
                    n = e.responseText, e.isResolved() && (e.done(function (e) {
                        n = e
                    }), u.html(s ? B("<div>").append(n.replace(Yt, "")).find(s) : n)), r && u.each(r, [n, t, e])
                }
            }), this
        },
        serialize: function () {
            return B.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? B.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || Zt.test(this.nodeName) || $t.test(this.type))
            }).map(function (e, t) {
                var n = B(this).val();
                return n == null ? null : B.isArray(n) ? B.map(n, function (e, n) {
                    return {
                        name: t.name,
                        value: e.replace(Wt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Wt, "\r\n")
                }
            }).get()
        }
    }), B.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        B.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), B.each(["get", "post"], function (e, n) {
        B[n] = function (e, r, i, s) {
            return B.isFunction(r) && (s = s || i, i = r, r = t), B.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), B.extend({
        getScript: function (e, n) {
            return B.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return B.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? h(e, B.ajaxSettings) : (t = e, e = B.ajaxSettings), h(e, t), e
        },
        ajaxSettings: {
            url: un,
            isLocal: Jt.test(an[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": fn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": B.parseJSON,
                "text xml": B.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: d(sn),
        ajaxTransport: d(on),
        ajax: function (e, n) {
            function r(e, n, r, p) {
                if (E !== 2) {
                    E = 2, b && clearTimeout(b), y = t, m = p || "", T.readyState = e > 0 ? 4 : 0;
                    var d, v, g, w = n,
                        x = r ? l(i, T, r) : t,
                        N, C;
                    if (e >= 200 && e < 300 || e === 304) {
                        if (i.ifModified) {
                            if (N = T.getResponseHeader("Last-Modified")) B.lastModified[h] = N;
                            if (C = T.getResponseHeader("Etag")) B.etag[h] = C
                        }
                        if (e === 304) w = "notmodified", d = !0;
                        else try {
                            v = f(i, x), w = "success", d = !0
                        } catch (k) {
                            w = "parsererror", g = k
                        }
                    } else {
                        g = w;
                        if (!w || e) w = "error", e < 0 && (e = 0)
                    }
                    T.status = e, T.statusText = "" + (n || w), d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]), T.statusCode(c), c = t, S && o.trigger("ajax" + (d ? "Success" : "Error"), [T, i, d ? v : g]), a.fireWith(s, [T, w]), S && (o.trigger("ajaxComplete", [T, i]), --B.active || B.event.trigger("ajaxStop"))
                }
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var i = B.ajaxSetup({}, n),
                s = i.context || i,
                o = s !== i && (s.nodeType || s instanceof B) ? B(s) : B.event,
                u = B.Deferred(),
                a = B.Callbacks("once memory"),
                c = i.statusCode || {}, h, d = {}, v = {}, m, g, y, b, w, E = 0,
                S, x, T = {
                    readyState: 0,
                    setRequestHeader: function (e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = v[n] = v[n] || e, d[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return E === 2 ? m : null
                    },
                    getResponseHeader: function (e) {
                        var n;
                        if (E === 2) {
                            if (!g) {
                                g = {};
                                while (n = Vt.exec(m)) g[n[1].toLowerCase()] = n[2]
                            }
                            n = g[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function (e) {
                        return E || (i.mimeType = e), this
                    },
                    abort: function (e) {
                        return e = e || "abort", y && y.abort(e), r(0, e), this
                    }
                };
            u.promise(T), T.success = T.done, T.error = T.fail, T.complete = a.add, T.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) c[t] = [c[t], e[t]];
                    else t = e[T.status], T.then(t, t)
                }
                return this
            }, i.url = ((e || i.url) + "").replace(Xt, "").replace(Qt, an[1] + "//"), i.dataTypes = B.trim(i.dataType || "*").toLowerCase().split(en), i.crossDomain == null && (w = nn.exec(i.url.toLowerCase()), i.crossDomain = !(!w || w[1] == an[1] && w[2] == an[2] && (w[3] || (w[1] === "http:" ? 80 : 443)) == (an[3] || (an[1] === "http:" ? 80 : 443)))), i.data && i.processData && typeof i.data != "string" && (i.data = B.param(i.data, i.traditional)), p(sn, i, n, T);
            if (E === 2) return !1;
            S = i.global, i.type = i.type.toUpperCase(), i.hasContent = !Kt.test(i.type), S && B.active++ === 0 && B.event.trigger("ajaxStart");
            if (!i.hasContent) {
                i.data && (i.url += (Gt.test(i.url) ? "&" : "?") + i.data, delete i.data), h = i.url;
                if (i.cache === !1) {
                    var N = B.now(),
                        C = i.url.replace(tn, "$1_=" + N);
                    i.url = C + (C === i.url ? (Gt.test(i.url) ? "&" : "?") + "_=" + N : "")
                }
            }(i.data && i.hasContent && i.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", i.contentType), i.ifModified && (h = h || i.url, B.lastModified[h] && T.setRequestHeader("If-Modified-Since", B.lastModified[h]), B.etag[h] && T.setRequestHeader("If-None-Match", B.etag[h])), T.setRequestHeader("Accept", i.dataTypes[0] && i.accepts[i.dataTypes[0]] ? i.accepts[i.dataTypes[0]] + (i.dataTypes[0] !== "*" ? ", " + fn + "; q=0.01" : "") : i.accepts["*"]);
            for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
            if (!i.beforeSend || i.beforeSend.call(s, T, i) !== !1 && E !== 2) {
                for (x in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[x](i[x]);
                y = p(on, i, n, T);
                if (!y) r(-1, "No Transport");
                else {
                    T.readyState = 1, S && o.trigger("ajaxSend", [T, i]), i.async && i.timeout > 0 && (b = setTimeout(function () {
                        T.abort("timeout")
                    }, i.timeout));
                    try {
                        E = 1, y.send(d, r)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        r(-1, k)
                    }
                }
                return T
            }
            return T.abort(), !1
        },
        param: function (e, n) {
            var r = [],
                i = function (e, t) {
                    t = B.isFunction(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            n === t && (n = B.ajaxSettings.traditional);
            if (B.isArray(e) || e.jquery && !B.isPlainObject(e)) B.each(e, function () {
                i(this.name, this.value)
            });
            else
                for (var s in e) c(s, e[s], n, i);
            return r.join("&").replace(Ut, "+")
        }
    }), B.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cn = B.now(),
        hn = /(\=)\?(&|$)|\?\?/i;
    B.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return B.expando + "_" + cn++
        }
    }), B.ajaxPrefilter("json jsonp", function (t, n, r) {
        var i = t.contentType === "application/x-www-form-urlencoded" && typeof t.data == "string";
        if (t.dataTypes[0] === "jsonp" || t.jsonp !== !1 && (hn.test(t.url) || i && hn.test(t.data))) {
            var s, o = t.jsonpCallback = B.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                u = e[o],
                a = t.url,
                f = t.data,
                l = "$1" + o + "$2";
            return t.jsonp !== !1 && (a = a.replace(hn, l), t.url === a && (i && (f = f.replace(hn, l)), t.data === f && (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))), t.url = a, t.data = f, e[o] = function (e) {
                s = [e]
            }, r.always(function () {
                e[o] = u, s && B.isFunction(u) && e[o](s[0])
            }), t.converters["script json"] = function () {
                return s || B.error(o + " was not called"), s[0]
            }, t.dataTypes[0] = "json", "script"
        }
    }), B.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function (e) {
                return B.globalEval(e), e
            }
        }
    }), B.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), B.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
            return {
                send: function (i, s) {
                    n = D.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var pn = e.ActiveXObject ? function () {
            for (var e in vn) vn[e](0, 1)
        } : !1,
        dn = 0,
        vn;
    B.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && a() || u()
    } : a,
    function (e) {
        B.extend(B.support, {
            ajax: !! e,
            cors: !! e && "withCredentials" in e
        })
    }(B.ajaxSettings.xhr()), B.support.ajax && B.ajaxTransport(function (n) {
        if (!n.crossDomain || B.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o = n.xhr(),
                        u, a;
                    n.username ? o.open(n.type, n.url, n.async, n.username, n.password) : o.open(n.type, n.url, n.async);
                    if (n.xhrFields)
                        for (a in n.xhrFields) o[a] = n.xhrFields[a];
                    n.mimeType && o.overrideMimeType && o.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in i) o.setRequestHeader(a, i[a])
                    } catch (f) {}
                    o.send(n.hasContent && n.data || null), r = function (e, i) {
                        var a, f, l, c, h;
                        try {
                            if (r && (i || o.readyState === 4)) {
                                r = t, u && (o.onreadystatechange = B.noop, pn && delete vn[u]);
                                if (i) o.readyState !== 4 && o.abort();
                                else {
                                    a = o.status, l = o.getAllResponseHeaders(), c = {}, h = o.responseXML, h && h.documentElement && (c.xml = h), c.text = o.responseText;
                                    try {
                                        f = o.statusText
                                    } catch (p) {
                                        f = ""
                                    }!a && n.isLocal && !n.crossDomain ? a = c.text ? 200 : 404 : a === 1223 && (a = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(a, f, c, l)
                    }, !n.async || o.readyState === 4 ? r() : (u = ++dn, pn && (vn || (vn = {}, B(e).unload(pn)), vn[u] = r), o.onreadystatechange = r)
                },
                abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var mn = {}, gn, yn, bn = /^(?:toggle|show|hide)$/,
        wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        En, Sn = [
            ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
            ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
            ["opacity"]
        ],
        xn;
    B.fn.extend({
        show: function (e, t, n) {
            var s, o;
            if (e || e === 0) return this.animate(i("show", 3), e, t, n);
            for (var u = 0, a = this.length; u < a; u++) s = this[u], s.style && (o = s.style.display, !B._data(s, "olddisplay") && o === "none" && (o = s.style.display = ""), o === "" && B.css(s, "display") === "none" && B._data(s, "olddisplay", r(s.nodeName)));
            for (u = 0; u < a; u++) {
                s = this[u];
                if (s.style) {
                    o = s.style.display;
                    if (o === "" || o === "none") s.style.display = B._data(s, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (e, t, n) {
            if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
            var r, s, o = 0,
                u = this.length;
            for (; o < u; o++) r = this[o], r.style && (s = B.css(r, "display"), s !== "none" && !B._data(r, "olddisplay") && B._data(r, "olddisplay", s));
            for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
            return this
        },
        _toggle: B.fn.toggle,
        toggle: function (e, t, n) {
            var r = typeof e == "boolean";
            return B.isFunction(e) && B.isFunction(t) ? this._toggle.apply(this, arguments) : e == null || r ? this.each(function () {
                var t = r ? e : B(this).is(":hidden");
                B(this)[t ? "show" : "hide"]()
            }) : this.animate(i("toggle", 3), e, t, n), this
        },
        fadeTo: function (e, t, n, r) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function (e, t, n, i) {
            function s() {
                o.queue === !1 && B._mark(this);
                var t = B.extend({}, o),
                    n = this.nodeType === 1,
                    i = n && B(this).is(":hidden"),
                    s, u, a, f, l, c, h, p, d;
                t.animatedProperties = {};
                for (a in e) {
                    s = B.camelCase(a), a !== s && (e[s] = e[a], delete e[a]), u = e[s], B.isArray(u) ? (t.animatedProperties[s] = u[1], u = e[s] = u[0]) : t.animatedProperties[s] = t.specialEasing && t.specialEasing[s] || t.easing || "swing";
                    if (u === "hide" && i || u === "show" && !i) return t.complete.call(this);
                    n && (s === "height" || s === "width") && (t.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], B.css(this, "display") === "inline" && B.css(this, "float") === "none" && (!B.support.inlineBlockNeedsLayout || r(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1))
                }
                t.overflow != null && (this.style.overflow = "hidden");
                for (a in e) f = new B.fx(this, t, a), u = e[a], bn.test(u) ? (d = B._data(this, "toggle" + a) || (u === "toggle" ? i ? "show" : "hide" : 0), d ? (B._data(this, "toggle" + a, d === "show" ? "hide" : "show"), f[d]()) : f[u]()) : (l = wn.exec(u), c = f.cur(), l ? (h = parseFloat(l[2]), p = l[3] || (B.cssNumber[a] ? "" : "px"), p !== "px" && (B.style(this, a, (h || 1) + p), c = (h || 1) / f.cur() * c, B.style(this, a, c + p)), l[1] && (h = (l[1] === "-=" ? -1 : 1) * h + c), f.custom(c, h, p)) : f.custom(c, u, ""));
                return !0
            }
            var o = B.speed(t, n, i);
            return B.isEmptyObject(e) ? this.each(o.complete, [!1]) : (e = B.extend({}, e), o.queue === !1 ? this.each(s) : this.queue(o.queue, s))
        },
        stop: function (e, n, r) {
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                function t(e, t, n) {
                    var i = t[n];
                    B.removeData(e, n, !0), i.stop(r)
                }
                var n, i = !1,
                    s = B.timers,
                    o = B._data(this);
                r || B._unmark(!0, this);
                if (e == null)
                    for (n in o) o[n] && o[n].stop && n.indexOf(".run") === n.length - 4 && t(this, o, n);
                else o[n = e + ".run"] && o[n].stop && t(this, o, n);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (r ? s[n](!0) : s[n].saveState(), i = !0, s.splice(n, 1));
                (!r || !i) && B.dequeue(this, e)
            })
        }
    }), B.each({
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        B.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), B.extend({
        speed: function (e, t, n) {
            var r = e && typeof e == "object" ? B.extend({}, e) : {
                complete: n || !n && t || B.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !B.isFunction(t) && t
            };
            r.duration = B.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in B.fx.speeds ? B.fx.speeds[r.duration] : B.fx.speeds._default;
            if (r.queue == null || r.queue === !0) r.queue = "fx";
            return r.old = r.complete, r.complete = function (e) {
                B.isFunction(r.old) && r.old.call(this), r.queue ? B.dequeue(this, r.queue) : e !== !1 && B._unmark(this)
            }, r
        },
        easing: {
            linear: function (e, t, n, r) {
                return n + r * e
            },
            swing: function (e, t, n, r) {
                return (-Math.cos(e * Math.PI) / 2 + .5) * r + n
            }
        },
        timers: [],
        fx: function (e, t, n) {
            this.options = t, this.elem = e, this.prop = n, t.orig = t.orig || {}
        }
    }), B.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (B.fx.step[this.prop] || B.fx.step._default)(this)
        },
        cur: function () {
            if (this.elem[this.prop] == null || !! this.elem.style && this.elem.style[this.prop] != null) {
                var e, t = B.css(this.elem, this.prop);
                return isNaN(e = parseFloat(t)) ? !t || t === "auto" ? 0 : t : e
            }
            return this.elem[this.prop]
        },
        custom: function (e, n, r) {
            function i(e) {
                return s.step(e)
            }
            var s = this,
                u = B.fx;
            this.startTime = xn || o(), this.end = n, this.now = this.start = e, this.pos = this.state = 0, this.unit = r || this.unit || (B.cssNumber[this.prop] ? "" : "px"), i.queue = this.options.queue, i.elem = this.elem, i.saveState = function () {
                s.options.hide && B._data(s.elem, "fxshow" + s.prop) === t && B._data(s.elem, "fxshow" + s.prop, s.start)
            }, i() && B.timers.push(i) && !En && (En = setInterval(u.tick, u.interval))
        },
        show: function () {
            var e = B._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = e || B.style(this.elem, this.prop), this.options.show = !0, e !== t ? this.custom(this.cur(), e) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), B(this.elem).show()
        },
        hide: function () {
            this.options.orig[this.prop] = B._data(this.elem, "fxshow" + this.prop) || B.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        },
        step: function (e) {
            var t, n, r, i = xn || o(),
                s = !0,
                u = this.elem,
                a = this.options;
            if (e || i >= a.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), a.animatedProperties[this.prop] = !0;
                for (t in a.animatedProperties) a.animatedProperties[t] !== !0 && (s = !1);
                if (s) {
                    a.overflow != null && !B.support.shrinkWrapBlocks && B.each(["", "X", "Y"], function (e, t) {
                        u.style["overflow" + t] = a.overflow[e]
                    }), a.hide && B(u).hide();
                    if (a.hide || a.show)
                        for (t in a.animatedProperties) B.style(u, t, a.orig[t]), B.removeData(u, "fxshow" + t, !0), B.removeData(u, "toggle" + t, !0);
                    r = a.complete, r && (a.complete = !1, r.call(u))
                }
                return !1
            }
            return a.duration == Infinity ? this.now = i : (n = i - this.startTime, this.state = n / a.duration, this.pos = B.easing[a.animatedProperties[this.prop]](this.state, n, 0, 1, a.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0
        }
    }, B.extend(B.fx, {
        tick: function () {
            var e, t = B.timers,
                n = 0;
            for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
            t.length || B.fx.stop()
        },
        interval: 13,
        stop: function () {
            clearInterval(En), En = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (e) {
                B.style(e.elem, "opacity", e.now)
            },
            _default: function (e) {
                e.elem.style && e.elem.style[e.prop] != null ? e.elem.style[e.prop] = e.now + e.unit : e.elem[e.prop] = e.now
            }
        }
    }), B.each(["width", "height"], function (e, t) {
        B.fx.step[t] = function (e) {
            B.style(e.elem, t, Math.max(0, e.now) + e.unit)
        }
    }), B.expr && B.expr.filters && (B.expr.filters.animated = function (e) {
        return B.grep(B.timers, function (t) {
            return e === t.elem
        }).length
    });
    var Tn = /^t(?:able|d|h)$/i,
        Nn = /^(?:body|html)$/i;
    "getBoundingClientRect" in D.documentElement ? B.fn.offset = function (e) {
        var t = this[0],
            r;
        if (e) return this.each(function (t) {
            B.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        try {
            r = t.getBoundingClientRect()
        } catch (i) {}
        var s = t.ownerDocument,
            o = s.documentElement;
        if (!r || !B.contains(o, t)) return r ? {
            top: r.top,
            left: r.left
        } : {
            top: 0,
            left: 0
        };
        var u = s.body,
            a = n(s),
            f = o.clientTop || u.clientTop || 0,
            l = o.clientLeft || u.clientLeft || 0,
            c = a.pageYOffset || B.support.boxModel && o.scrollTop || u.scrollTop,
            h = a.pageXOffset || B.support.boxModel && o.scrollLeft || u.scrollLeft,
            p = r.top + c - f,
            d = r.left + h - l;
        return {
            top: p,
            left: d
        }
    } : B.fn.offset = function (e) {
        var t = this[0];
        if (e) return this.each(function (t) {
            B.offset.setOffset(this, e, t)
        });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        var n, r = t.offsetParent,
            i = t,
            s = t.ownerDocument,
            o = s.documentElement,
            u = s.body,
            a = s.defaultView,
            f = a ? a.getComputedStyle(t, null) : t.currentStyle,
            l = t.offsetTop,
            c = t.offsetLeft;
        while ((t = t.parentNode) && t !== u && t !== o) {
            if (B.support.fixedPosition && f.position === "fixed") break;
            n = a ? a.getComputedStyle(t, null) : t.currentStyle, l -= t.scrollTop, c -= t.scrollLeft, t === r && (l += t.offsetTop, c += t.offsetLeft, B.support.doesNotAddBorder && (!B.support.doesAddBorderForTableAndCells || !Tn.test(t.nodeName)) && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), i = r, r = t.offsetParent), B.support.subtractsBorderForOverflowNotVisible && n.overflow !== "visible" && (l += parseFloat(n.borderTopWidth) || 0, c += parseFloat(n.borderLeftWidth) || 0), f = n
        }
        if (f.position === "relative" || f.position === "static") l += u.offsetTop, c += u.offsetLeft;
        return B.support.fixedPosition && f.position === "fixed" && (l += Math.max(o.scrollTop, u.scrollTop), c += Math.max(o.scrollLeft, u.scrollLeft)), {
            top: l,
            left: c
        }
    }, B.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return B.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(B.css(e, "marginTop")) || 0, n += parseFloat(B.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function (e, t, n) {
            var r = B.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = B(e),
                s = i.offset(),
                o = B.css(e, "top"),
                u = B.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && B.inArray("auto", [o, u]) > -1,
                f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), B.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, B.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = Nn.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(B.css(e, "marginTop")) || 0, n.left -= parseFloat(B.css(e, "marginLeft")) || 0, r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || D.body;
                while (e && !Nn.test(e.nodeName) && B.css(e, "position") === "static") e = e.offsetParent;
                return e
            })
        }
    }), B.each(["Left", "Top"], function (e, r) {
        var i = "scroll" + r;
        B.fn[i] = function (r) {
            var s, o;
            return r === t ? (s = this[0], s ? (o = n(s), o ? "pageXOffset" in o ? o[e ? "pageYOffset" : "pageXOffset"] : B.support.boxModel && o.document.documentElement[i] || o.document.body[i] : s[i]) : null) : this.each(function () {
                o = n(this), o ? o.scrollTo(e ? B(o).scrollLeft() : r, e ? r : B(o).scrollTop()) : this[i] = r
            })
        }
    }), B.each(["Height", "Width"], function (e, n) {
        var r = n.toLowerCase();
        B.fn["inner" + n] = function () {
            var e = this[0];
            return e ? e.style ? parseFloat(B.css(e, r, "padding")) : this[r]() : null
        }, B.fn["outer" + n] = function (e) {
            var t = this[0];
            return t ? t.style ? parseFloat(B.css(t, r, e ? "margin" : "border")) : this[r]() : null
        }, B.fn[r] = function (e) {
            var i = this[0];
            if (!i) return e == null ? null : this;
            if (B.isFunction(e)) return this.each(function (t) {
                var n = B(this);
                n[r](e.call(this, t, n[r]()))
            });
            if (B.isWindow(i)) {
                var s = i.document.documentElement["client" + n],
                    o = i.document.body;
                return i.document.compatMode === "CSS1Compat" && s || o && o["client" + n] || s
            }
            if (i.nodeType === 9) return Math.max(i.documentElement["client" + n], i.body["scroll" + n], i.documentElement["scroll" + n], i.body["offset" + n], i.documentElement["offset" + n]);
            if (e === t) {
                var u = B.css(i, r),
                    a = parseFloat(u);
                return B.isNumeric(a) ? a : u
            }
            return this.css(r, typeof e == "string" ? e : e + "px")
        }
    }), e.jQuery = e.$ = B, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return B
    })
})(window), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, r, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, r, i)
    },
    easeInQuad: function (e, t, n, r, i) {
        return r * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, r, i) {
        return -r * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, r, i) {
        return r * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, r, i) {
        return -r * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, r, i) {
        return r * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, r, i) {
        return r * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, r, i) {
        return -r * Math.cos(t / i * (Math.PI / 2)) + r + n
    },
    easeOutSine: function (e, t, n, r, i) {
        return r * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, r, i) {
        return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, r, i) {
        return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, r, i) {
        return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, r, i) {
        return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, r, i) {
        return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, r, i) {
        return r * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, r, i) {
        return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n
    },
    easeOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i) == 1) return n + r;
        o || (o = i * .3);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n
    },
    easeInOutElastic: function (e, t, n, r, i) {
        var s = 1.70158,
            o = 0,
            u = r;
        if (t == 0) return n;
        if ((t /= i / 2) == 2) return n + r;
        o || (o = i * .3 * 1.5);
        if (u < Math.abs(r)) {
            u = r;
            var s = o / 4
        } else var s = o / (2 * Math.PI) * Math.asin(r / u);
        return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n
    },
    easeInBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function (e, t, n, r, i, s) {
        return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n
    },
    easeInBounce: function (e, t, n, r, i) {
        return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n
    },
    easeOutBounce: function (e, t, n, r, i) {
        return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, r, i) {
        return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n
    }
}),
function (e, t) {
    function h(e, t, n) {
        var r = u[t.type] || {};
        return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e)
    }

    function p(t) {
        var n = s(),
            r = n._rgba = [];
        return t = t.toLowerCase(), c(i, function (e, i) {
            var s, u = i.re.exec(t),
                a = u && i.parse(u),
                f = i.space || "rgba";
            if (a) return s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1
        }), r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n) : l[t]
    }

    function d(e, t, n) {
        return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        i = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }],
        s = e.Color = function (t, n, r, i) {
            return new e.Color.fn.parse(t, n, r, i)
        }, o = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, u = {
            "byte": {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, a = s.support = {}, f = e("<p>")[0],
        l, c = e.each;
    f.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = f.style.backgroundColor.indexOf("rgba") > -1, c(o, function (e, t) {
        t.cache = "_" + e, t.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }), s.fn = e.extend(s.prototype, {
        parse: function (n, r, i, u) {
            if (n === t) return this._rgba = [null, null, null, null], this;
            if (n.jquery || n.nodeType) n = e(n).css(r), r = t;
            var a = this,
                f = e.type(n),
                d = this._rgba = [];
            r !== t && (n = [n, r, i, u], f = "array");
            if (f === "string") return this.parse(p(n) || l._default);
            if (f === "array") return c(o.rgba.props, function (e, t) {
                d[t.idx] = h(n[t.idx], t)
            }), this;
            if (f === "object") return n instanceof s ? c(o, function (e, t) {
                n[t.cache] && (a[t.cache] = n[t.cache].slice())
            }) : c(o, function (t, r) {
                var i = r.cache;
                c(r.props, function (e, t) {
                    if (!a[i] && r.to) {
                        if (e === "alpha" || n[e] == null) return;
                        a[i] = r.to(a._rgba)
                    }
                    a[i][t.idx] = h(n[e], t, !0)
                }), a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])))
            }), this
        },
        is: function (e) {
            var t = s(e),
                n = !0,
                r = this;
            return c(o, function (e, i) {
                var s, o = t[i.cache];
                return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function (e, t) {
                    if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n
                })), n
            }), n
        },
        _space: function () {
            var e = [],
                t = this;
            return c(o, function (n, r) {
                t[r.cache] && e.push(n)
            }), e.pop()
        },
        transition: function (e, t) {
            var n = s(e),
                r = n._space(),
                i = o[r],
                a = this.alpha() === 0 ? s("transparent") : this,
                f = a[i.cache] || i.to(a._rgba),
                l = f.slice();
            return n = n[i.cache], c(i.props, function (e, r) {
                var i = r.idx,
                    s = f[i],
                    o = n[i],
                    a = u[r.type] || {};
                if (o === null) return;
                s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r))
            }), this[r](l)
        },
        blend: function (t) {
            if (this._rgba[3] === 1) return this;
            var n = this._rgba.slice(),
                r = n.pop(),
                i = s(t)._rgba;
            return s(e.map(n, function (e, t) {
                return (1 - r) * i[t] + r * e
            }))
        },
        toRgbaString: function () {
            var t = "rgba(",
                n = e.map(this._rgba, function (e, t) {
                    return e == null ? t > 2 ? 1 : 0 : e
                });
            return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")"
        },
        toHslaString: function () {
            var t = "hsla(",
                n = e.map(this.hsla(), function (e, t) {
                    return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e
                });
            return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")"
        },
        toHexString: function (t) {
            var n = this._rgba.slice(),
                r = n.pop();
            return t && n.push(~~(r * 255)), "#" + e.map(n, function (e) {
                return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e
            }).join("")
        },
        toString: function () {
            return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
        }
    }), s.fn.parse.prototype = s.fn, o.hsla.to = function (e) {
        if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
        var t = e[0] / 255,
            n = e[1] / 255,
            r = e[2] / 255,
            i = e[3],
            s = Math.max(t, n, r),
            o = Math.min(t, n, r),
            u = s - o,
            a = s + o,
            f = a * .5,
            l, c;
        return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a), [Math.round(l) % 360, c, f, i == null ? 1 : i]
    }, o.hsla.from = function (e) {
        if (e[0] == null || e[1] == null || e[2] == null) return [null, null, null, e[3]];
        var t = e[0] / 360,
            n = e[1],
            r = e[2],
            i = e[3],
            s = r <= .5 ? r * (1 + n) : r + n - r * n,
            o = 2 * r - s;
        return [Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i]
    }, c(o, function (n, i) {
        var o = i.props,
            u = i.cache,
            a = i.to,
            f = i.from;
        s.fn[n] = function (n) {
            a && !this[u] && (this[u] = a(this._rgba));
            if (n === t) return this[u].slice();
            var r, i = e.type(n),
                l = i === "array" || i === "object" ? n : arguments,
                p = this[u].slice();
            return c(o, function (e, t) {
                var n = l[i === "object" ? e : t.idx];
                n == null && (n = p[t.idx]), p[t.idx] = h(n, t)
            }), f ? (r = s(f(p)), r[u] = p, r) : s(p)
        }, c(o, function (t, i) {
            if (s.fn[t]) return;
            s.fn[t] = function (s) {
                var o = e.type(s),
                    u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n,
                    a = this[u](),
                    f = a[i.idx],
                    l;
                return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = e.type(s)), s == null && i.empty ? this : (o === "string" && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[i.idx] = s, this[u](a)))
            }
        })
    }), s.hook = function (t) {
        var n = t.split(" ");
        c(n, function (t, n) {
            e.cssHooks[n] = {
                set: function (t, r) {
                    var i, o, u = "";
                    if (r !== "transparent" && (e.type(r) !== "string" || (i = p(r)))) {
                        r = s(i || r);
                        if (!a.rgba && r._rgba[3] !== 1) {
                            o = n === "backgroundColor" ? t.parentNode : t;
                            while ((u === "" || u === "transparent") && o && o.style) try {
                                u = e.css(o, "backgroundColor"), o = o.parentNode
                            } catch (f) {}
                            r = r.blend(u && u !== "transparent" ? u : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        t.style[n] = r
                    } catch (f) {}
                }
            }, e.fx.step[n] = function (t) {
                t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }, s.hook(n), e.cssHooks.borderColor = {
        expand: function (e) {
            var t = {};
            return c(["Top", "Right", "Bottom", "Left"], function (n, r) {
                t["border" + r + "Color"] = e
            }), t
        }
    }, l = e.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery),
function (e, t) {
    function i(t, n) {
        var r, i, o, u = t.nodeName.toLowerCase();
        return "area" === u ? (r = t.parentNode, i = r.name, !t.href || !i || r.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + i + "]")[0], !! o && s(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && s(t)
    }

    function s(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return e.css(this, "visibility") === "hidden"
        }).length
    }
    var n = 0,
        r = /^ui-id-\d+$/;
    e.ui = e.ui || {};
    if (e.ui.version) return;
    e.extend(e.ui, {
        version: "1.10.1",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        _focus: e.fn.focus,
        focus: function (t, n) {
            return typeof t == "number" ? this.each(function () {
                var r = this;
                setTimeout(function () {
                    e(r).focus(), n && n.call(r)
                }, t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function () {
            var t;
            return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function () {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : t = this.parents().filter(function () {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function (n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) {
                var r = e(this[0]),
                    i, s;
                while (r.length && r[0] !== document) {
                    i = r.css("position");
                    if (i === "absolute" || i === "relative" || i === "fixed") {
                        s = parseInt(r.css("zIndex"), 10);
                        if (!isNaN(s) && s !== 0) return s
                    }
                    r = r.parent()
                }
            }
            return 0
        },
        uniqueId: function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++n)
            })
        },
        removeUniqueId: function () {
            return this.each(function () {
                r.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (n) {
                return !!e.data(n, t)
            }
        }) : function (t, n, r) {
            return !!e.data(t, r[3])
        },
        focusable: function (t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function (t) {
            var n = e.attr(t, "tabindex"),
                r = isNaN(n);
            return (r || n >= 0) && i(t, !r)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (n, r) {
        function u(t, n, r, s) {
            return e.each(i, function () {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), n
        }
        var i = r === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
            s = r.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + r] = function (n) {
            return n === t ? o["inner" + r].call(this) : this.each(function () {
                e(this).css(s, u(this, n) + "px")
            })
        }, e.fn["outer" + r] = function (t, n) {
            return typeof t != "number" ? o["outer" + r].call(this, t) : this.each(function () {
                e(this).css(s, u(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function () {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
                e.preventDefault()
            })
        },
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function (t, n, r) {
                var i, s = e.ui[t].prototype;
                for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([n, r[i]])
            },
            call: function (e, t, n) {
                var r, i = e.plugins[t];
                if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
                for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        hasScroll: function (t, n) {
            if (e(t).css("overflow") === "hidden") return !1;
            var r = n && n === "left" ? "scrollLeft" : "scrollTop",
                i = !1;
            return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i)
        }
    })
}(jQuery),
function (e, t) {
    var n = 0,
        r = Array.prototype.slice,
        i = e.cleanData;
    e.cleanData = function (t) {
        for (var n = 0, r;
            (r = t[n]) != null; n++) try {
            e(r).triggerHandler("remove")
        } catch (s) {}
        i(t)
    }, e.widget = function (t, n, r) {
        var i, s, o, u, a = {}, f = t.split(".")[0];
        t = t.split(".")[1], i = f + "-" + t, r || (r = n, n = e.Widget), e.expr[":"][i.toLowerCase()] = function (t) {
            return !!e.data(t, i)
        }, e[f] = e[f] || {}, s = e[f][t], o = e[f][t] = function (e, t) {
            if (!this._createWidget) return new o(e, t);
            arguments.length && this._createWidget(e, t)
        }, e.extend(o, s, {
            version: r.version,
            _proto: e.extend({}, r),
            _childConstructors: []
        }), u = new n, u.options = e.widget.extend({}, u.options), e.each(r, function (t, r) {
            if (!e.isFunction(r)) {
                a[t] = r;
                return
            }
            a[t] = function () {
                var e = function () {
                    return n.prototype[t].apply(this, arguments)
                }, i = function (e) {
                        return n.prototype[t].apply(this, e)
                    };
                return function () {
                    var t = this._super,
                        n = this._superApply,
                        s;
                    return this._super = e, this._superApply = i, s = r.apply(this, arguments), this._super = t, this._superApply = n, s
                }
            }()
        }), o.prototype = e.widget.extend(u, {
            widgetEventPrefix: s ? u.widgetEventPrefix : t
        }, a, {
            constructor: o,
            namespace: f,
            widgetName: t,
            widgetFullName: i
        }), s ? (e.each(s._childConstructors, function (t, n) {
            var r = n.prototype;
            e.widget(r.namespace + "." + r.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), e.widget.bridge(t, o)
    }, e.widget.extend = function (n) {
        var i = r.call(arguments, 1),
            s = 0,
            o = i.length,
            u, a;
        for (; s < o; s++)
            for (u in i[s]) a = i[s][u], i[s].hasOwnProperty(u) && a !== t && (e.isPlainObject(a) ? n[u] = e.isPlainObject(n[u]) ? e.widget.extend({}, n[u], a) : e.widget.extend({}, a) : n[u] = a);
        return n
    }, e.widget.bridge = function (n, i) {
        var s = i.prototype.widgetFullName || n;
        e.fn[n] = function (o) {
            var u = typeof o == "string",
                a = r.call(arguments, 1),
                f = this;
            return o = !u && a.length ? e.widget.extend.apply(null, [o].concat(a)) : o, u ? this.each(function () {
                var r, i = e.data(this, s);
                if (!i) return e.error("cannot call methods on " + n + " prior to initialization; " + "attempted to call method '" + o + "'");
                if (!e.isFunction(i[o]) || o.charAt(0) === "_") return e.error("no such method '" + o + "' for " + n + " widget instance");
                r = i[o].apply(i, a);
                if (r !== i && r !== t) return f = r && r.jquery ? f.pushStack(r.get()) : r, !1
            }) : this.each(function () {
                var t = e.data(this, s);
                t ? t.option(o || {})._init() : e.data(this, s, new i(o, this))
            }), f
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (t, r) {
            r = e(r || this.defaultElement || this)[0], this.element = e(r), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), r !== this && (e.data(r, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === r && this.destroy()
                }
            }), this.document = e(r.style ? r.ownerDocument : r.document || r), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (n, r) {
            var i = n,
                s, o, u;
            if (arguments.length === 0) return e.widget.extend({}, this.options);
            if (typeof n == "string") {
                i = {}, s = n.split("."), n = s.shift();
                if (s.length) {
                    o = i[n] = e.widget.extend({}, this.options[n]);
                    for (u = 0; u < s.length - 1; u++) o[s[u]] = o[s[u]] || {}, o = o[s[u]];
                    n = s.pop();
                    if (r === t) return o[n] === t ? null : o[n];
                    o[n] = r
                } else {
                    if (r === t) return this.options[n] === t ? null : this.options[n];
                    i[n] = r
                }
            }
            return this._setOptions(i), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, e === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !! t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function () {
            return this._setOption("disabled", !1)
        },
        disable: function () {
            return this._setOption("disabled", !0)
        },
        _on: function (t, n, r) {
            var i, s = this;
            typeof t != "boolean" && (r = n, n = t, t = !1), r ? (n = i = e(n), this.bindings = this.bindings.add(n)) : (r = n, n = this.element, i = this.widget()), e.each(r, function (r, o) {
                function u() {
                    if (!t && (s.options.disabled === !0 || e(this).hasClass("ui-state-disabled"))) return;
                    return (typeof o == "string" ? s[o] : o).apply(s, arguments)
                }
                typeof o != "string" && (u.guid = o.guid = o.guid || u.guid || e.guid++);
                var a = r.match(/^(\w+)\s*(.*)$/),
                    f = a[1] + s.eventNamespace,
                    l = a[2];
                l ? i.delegate(l, f, u) : n.bind(f, u)
            })
        },
        _off: function (e, t) {
            t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
        },
        _delay: function (e, t) {
            function n() {
                return (typeof e == "string" ? r[e] : e).apply(r, arguments)
            }
            var r = this;
            return setTimeout(n, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, n, r) {
            var i, s, o = this.options[t];
            r = r || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], s = n.originalEvent;
            if (s)
                for (i in s) i in n || (n[i] = s[i]);
            return this.element.trigger(n, r), !(e.isFunction(o) && o.apply(this.element[0], [n].concat(r)) === !1 || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, n) {
        e.Widget.prototype["_" + t] = function (r, i, s) {
            typeof i == "string" && (i = {
                effect: i
            });
            var o, u = i ? i === !0 || typeof i == "number" ? n : i.effect || n : t;
            i = i || {}, typeof i == "number" && (i = {
                duration: i
            }), o = !e.isEmptyObject(i), i.complete = s, i.delay && r.delay(i.delay), o && e.effects && e.effects.effect[u] ? r[t](i) : u !== t && r[u] ? r[u](i.duration, i.easing, s) : r.queue(function (n) {
                e(this)[t](), s && s.call(r[0]), n()
            })
        }
    })
}(jQuery),
function (e, t) {
    var n = !1;
    e(document).mouseup(function () {
        n = !1
    }), e.widget("ui.mouse", {
        version: "1.10.1",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (n) {
                if (!0 === e.data(n.target, t.widgetName + ".preventClickEvent")) return e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (n) return;
            this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
            var r = this,
                i = t.which === 1,
                s = typeof this.options.cancel == "string" && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
            if (!i || s || !this._mouseCapture(t)) return !0;
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                r.mouseDelayMet = !0
            }, this.options.delay));
            if (this._mouseDistanceMet(t) && this._mouseDelayMet(t)) {
                this._mouseStarted = this._mouseStart(t) !== !1;
                if (!this._mouseStarted) return t.preventDefault(), !0
            }
            return !0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                return r._mouseMove(e)
            }, this._mouseUpDelegate = function (e) {
                return r._mouseUp(e)
            }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0
        },
        _mouseMove: function (t) {
            return e.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
            return !0
        }
    })
}(jQuery),
function (e, t) {
    function h(e, t, n) {
        return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? n / 100 : 1)]
    }

    function p(t, n) {
        return parseInt(e.css(t, n), 10) || 0
    }

    function d(t) {
        var n = t[0];
        return n.nodeType === 9 ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : e.isWindow(n) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : n.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: n.pageY,
                left: n.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }
    }
    e.ui = e.ui || {};
    var n, r = Math.max,
        i = Math.abs,
        s = Math.round,
        o = /left|center|right/,
        u = /top|center|bottom/,
        a = /[\+\-]\d+(\.[\d]+)?%?/,
        f = /^\w+/,
        l = /%$/,
        c = e.fn.position;
    e.position = {
        scrollbarWidth: function () {
            if (n !== t) return n;
            var r, i, s = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                o = s.children()[0];
            return e("body").append(s), r = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, r === i && (i = s[0].clientWidth), s.remove(), n = r - i
        },
        getScrollInfo: function (t) {
            var n = t.isWindow ? "" : t.element.css("overflow-x"),
                r = t.isWindow ? "" : t.element.css("overflow-y"),
                i = n === "scroll" || n === "auto" && t.width < t.element[0].scrollWidth,
                s = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
            return {
                width: i ? e.position.scrollbarWidth() : 0,
                height: s ? e.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function (t) {
            var n = e(t || window),
                r = e.isWindow(n[0]);
            return {
                element: n,
                isWindow: r,
                offset: n.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: n.scrollLeft(),
                scrollTop: n.scrollTop(),
                width: r ? n.width() : n.outerWidth(),
                height: r ? n.height() : n.outerHeight()
            }
        }
    }, e.fn.position = function (t) {
        if (!t || !t.of) return c.apply(this, arguments);
        t = e.extend({}, t);
        var n, l, v, m, g, y, b = e(t.of),
            w = e.position.getWithinInfo(t.within),
            E = e.position.getScrollInfo(w),
            S = (t.collision || "flip").split(" "),
            x = {};
        return y = d(b), b[0].preventDefault && (t.at = "left top"), l = y.width, v = y.height, m = y.offset, g = e.extend({}, m), e.each(["my", "at"], function () {
            var e = (t[this] || "").split(" "),
                n, r;
            e.length === 1 && (e = o.test(e[0]) ? e.concat(["center"]) : u.test(e[0]) ? ["center"].concat(e) : ["center", "center"]), e[0] = o.test(e[0]) ? e[0] : "center", e[1] = u.test(e[1]) ? e[1] : "center", n = a.exec(e[0]), r = a.exec(e[1]), x[this] = [n ? n[0] : 0, r ? r[0] : 0], t[this] = [f.exec(e[0])[0], f.exec(e[1])[0]]
        }), S.length === 1 && (S[1] = S[0]), t.at[0] === "right" ? g.left += l : t.at[0] === "center" && (g.left += l / 2), t.at[1] === "bottom" ? g.top += v : t.at[1] === "center" && (g.top += v / 2), n = h(x.at, l, v), g.left += n[0], g.top += n[1], this.each(function () {
            var o, u, a = e(this),
                f = a.outerWidth(),
                c = a.outerHeight(),
                d = p(this, "marginLeft"),
                y = p(this, "marginTop"),
                T = f + d + p(this, "marginRight") + E.width,
                N = c + y + p(this, "marginBottom") + E.height,
                C = e.extend({}, g),
                k = h(x.my, a.outerWidth(), a.outerHeight());
            t.my[0] === "right" ? C.left -= f : t.my[0] === "center" && (C.left -= f / 2), t.my[1] === "bottom" ? C.top -= c : t.my[1] === "center" && (C.top -= c / 2), C.left += k[0], C.top += k[1], e.support.offsetFractions || (C.left = s(C.left), C.top = s(C.top)), o = {
                marginLeft: d,
                marginTop: y
            }, e.each(["left", "top"], function (r, i) {
                e.ui.position[S[r]] && e.ui.position[S[r]][i](C, {
                    targetWidth: l,
                    targetHeight: v,
                    elemWidth: f,
                    elemHeight: c,
                    collisionPosition: o,
                    collisionWidth: T,
                    collisionHeight: N,
                    offset: [n[0] + k[0], n[1] + k[1]],
                    my: t.my,
                    at: t.at,
                    within: w,
                    elem: a
                })
            }), t.using && (u = function (e) {
                var n = m.left - C.left,
                    s = n + l - f,
                    o = m.top - C.top,
                    u = o + v - c,
                    h = {
                        target: {
                            element: b,
                            left: m.left,
                            top: m.top,
                            width: l,
                            height: v
                        },
                        element: {
                            element: a,
                            left: C.left,
                            top: C.top,
                            width: f,
                            height: c
                        },
                        horizontal: s < 0 ? "left" : n > 0 ? "right" : "center",
                        vertical: u < 0 ? "top" : o > 0 ? "bottom" : "middle"
                    };
                l < f && i(n + s) < l && (h.horizontal = "center"), v < c && i(o + u) < v && (h.vertical = "middle"), r(i(n), i(s)) > r(i(o), i(u)) ? h.important = "horizontal" : h.important = "vertical", t.using.call(this, e, h)
            }), a.offset(e.extend(C, {
                using: u
            }))
        })
    }, e.ui.position = {
        fit: {
            left: function (e, t) {
                var n = t.within,
                    i = n.isWindow ? n.scrollLeft : n.offset.left,
                    s = n.width,
                    o = e.left - t.collisionPosition.marginLeft,
                    u = i - o,
                    a = o + t.collisionWidth - s - i,
                    f;
                t.collisionWidth > s ? u > 0 && a <= 0 ? (f = e.left + u + t.collisionWidth - s - i, e.left += u - f) : a > 0 && u <= 0 ? e.left = i : u > a ? e.left = i + s - t.collisionWidth : e.left = i : u > 0 ? e.left += u : a > 0 ? e.left -= a : e.left = r(e.left - o, e.left)
            },
            top: function (e, t) {
                var n = t.within,
                    i = n.isWindow ? n.scrollTop : n.offset.top,
                    s = t.within.height,
                    o = e.top - t.collisionPosition.marginTop,
                    u = i - o,
                    a = o + t.collisionHeight - s - i,
                    f;
                t.collisionHeight > s ? u > 0 && a <= 0 ? (f = e.top + u + t.collisionHeight - s - i, e.top += u - f) : a > 0 && u <= 0 ? e.top = i : u > a ? e.top = i + s - t.collisionHeight : e.top = i : u > 0 ? e.top += u : a > 0 ? e.top -= a : e.top = r(e.top - o, e.top)
            }
        },
        flip: {
            left: function (e, t) {
                var n = t.within,
                    r = n.offset.left + n.scrollLeft,
                    s = n.width,
                    o = n.isWindow ? n.scrollLeft : n.offset.left,
                    u = e.left - t.collisionPosition.marginLeft,
                    a = u - o,
                    f = u + t.collisionWidth - s - o,
                    l = t.my[0] === "left" ? -t.elemWidth : t.my[0] === "right" ? t.elemWidth : 0,
                    c = t.at[0] === "left" ? t.targetWidth : t.at[0] === "right" ? -t.targetWidth : 0,
                    h = -2 * t.offset[0],
                    p, d;
                if (a < 0) {
                    p = e.left + l + c + h + t.collisionWidth - s - r;
                    if (p < 0 || p < i(a)) e.left += l + c + h
                } else if (f > 0) {
                    d = e.left - t.collisionPosition.marginLeft + l + c + h - o;
                    if (d > 0 || i(d) < f) e.left += l + c + h
                }
            },
            top: function (e, t) {
                var n = t.within,
                    r = n.offset.top + n.scrollTop,
                    s = n.height,
                    o = n.isWindow ? n.scrollTop : n.offset.top,
                    u = e.top - t.collisionPosition.marginTop,
                    a = u - o,
                    f = u + t.collisionHeight - s - o,
                    l = t.my[1] === "top",
                    c = l ? -t.elemHeight : t.my[1] === "bottom" ? t.elemHeight : 0,
                    h = t.at[1] === "top" ? t.targetHeight : t.at[1] === "bottom" ? -t.targetHeight : 0,
                    p = -2 * t.offset[1],
                    d, v;
                a < 0 ? (v = e.top + c + h + p + t.collisionHeight - s - r, e.top + c + h + p > a && (v < 0 || v < i(a)) && (e.top += c + h + p)) : f > 0 && (d = e.top - t.collisionPosition.marginTop + c + h + p - o, e.top + c + h + p > f && (d > 0 || i(d) < f) && (e.top += c + h + p))
            }
        },
        flipfit: {
            left: function () {
                e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
            },
            top: function () {
                e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function () {
        var t, n, r, i, s, o = document.getElementsByTagName("body")[0],
            u = document.createElement("div");
        t = document.createElement(o ? "div" : "body"), r = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, o && e.extend(r, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (s in r) t.style[s] = r[s];
        t.appendChild(u), n = o || document.documentElement, n.insertBefore(t, n.firstChild), u.style.cssText = "position: absolute; left: 10.7432222px;", i = e(u).offset().left, e.support.offsetFractions = i > 10 && i < 11, t.innerHTML = "", n.removeChild(t)
    }()
}(jQuery),
function (e, t) {
    e.widget("ui.draggable", e.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            this.options.helper === "original" && !/^(?:r|a|f)/.test(this.element.css("position")) && (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function () {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var n = this.options;
            return this.helper || n.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function () {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(e(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function (t) {
            var n = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _mouseDrag: function (t, n) {
            this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute");
            if (!n) {
                var r = this._uiHash();
                if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                this.position = r.position
            }
            if (!this.options.axis || this.options.axis !== "y") this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis !== "x") this.helper[0].style.top = this.position.top + "px";
            return e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var n, r = this,
                i = !1,
                s = !1;
            e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), n = this.element[0];
            while (n && (n = n.parentNode)) n === document && (i = !0);
            return !i && this.options.helper === "original" ? !1 : (this.options.revert === "invalid" && !s || this.options.revert === "valid" && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                r._trigger("stop", t) !== !1 && r._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1)
        },
        _mouseUp: function (t) {
            return e("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            var n = !this.options.handle || !e(this.options.handle, this.element).length ? !0 : !1;
            return e(this.options.handle, this.element).find("*").addBack().each(function () {
                this === t.target && (n = !0)
            }), n
        },
        _createHelper: function (t) {
            var n = this.options,
                r = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : n.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo(n.appendTo === "parent" ? this.element[0].parentNode : n.appendTo), r[0] !== this.element[0] && !/(fixed|absolute)/.test(r.css("position")) && r.css("position", "absolute"), r
        },
        _adjustOffsetFromHelper: function (t) {
            typeof t == "string" && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            this.cssPosition === "absolute" && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop());
            if (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && e.ui.ie) t = {
                top: 0,
                left: 0
            };
            return {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition === "relative") {
                var e = this.element.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var t, n, r, i = this.options;
            i.containment === "parent" && (i.containment = this.helper[0].parentNode);
            if (i.containment === "document" || i.containment === "window") this.containment = [i.containment === "document" ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, i.containment === "document" ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (i.containment === "document" ? 0 : e(window).scrollLeft()) + e(i.containment === "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? 0 : e(window).scrollTop()) + (e(i.containment === "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(i.containment) && i.containment.constructor !== Array) {
                n = e(i.containment), r = n[0];
                if (!r) return;
                t = e(r).css("overflow") !== "hidden", this.containment = [(parseInt(e(r).css("borderLeftWidth"), 10) || 0) + (parseInt(e(r).css("paddingLeft"), 10) || 0), (parseInt(e(r).css("borderTopWidth"), 10) || 0) + (parseInt(e(r).css("paddingTop"), 10) || 0), (t ? Math.max(r.scrollWidth, r.offsetWidth) : r.offsetWidth) - (parseInt(e(r).css("borderLeftWidth"), 10) || 0) - (parseInt(e(r).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(r.scrollHeight, r.offsetHeight) : r.offsetHeight) - (parseInt(e(r).css("borderTopWidth"), 10) || 0) - (parseInt(e(r).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
            } else i.containment.constructor === Array && (this.containment = i.containment)
        },
        _convertPositionTo: function (t, n) {
            n || (n = this.position);
            var r = t === "absolute" ? 1 : -1,
                i = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                s = /(html|body)/i.test(i[0].tagName);
            return {
                top: n.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : i.scrollTop()) * r,
                left: n.left + this.offset
                    .relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : i.scrollLeft()) * r
            }
        },
        _generatePosition: function (t) {
            var n, r, i, s, o = this.options,
                u = this.cssPosition !== "absolute" || this.scrollParent[0] !== document && !! e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(u[0].tagName),
                f = t.pageX,
                l = t.pageY;
            return this.originalPosition && (this.containment && (this.relative_container ? (r = this.relative_container.offset(), n = [this.containment[0] + r.left, this.containment[1] + r.top, this.containment[2] + r.left, this.containment[3] + r.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (f = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (l = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (f = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (l = n[3] + this.offset.click.top)), o.grid && (i = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = n ? i - this.offset.click.top >= n[1] || i - this.offset.click.top > n[3] ? i : i - this.offset.click.top >= n[1] ? i - o.grid[1] : i + o.grid[1] : i, s = o.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, f = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : a ? 0 : u.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : a ? 0 : u.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] !== this.element[0] && !this.cancelHelperRemoval && this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function (t, n, r) {
            return r = r || this._uiHash(), e.ui.plugin.call(this, t, [n, r]), t === "drag" && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, r)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, n) {
            var r = e(this).data("ui-draggable"),
                i = r.options,
                s = e.extend({}, n, {
                    item: r.element
                });
            r.sortables = [], e(i.connectToSortable).each(function () {
                var n = e.data(this, "ui-sortable");
                n && !n.options.disabled && (r.sortables.push({
                    instance: n,
                    shouldRevert: n.options.revert
                }), n.refreshPositions(), n._trigger("activate", t, s))
            })
        },
        stop: function (t, n) {
            var r = e(this).data("ui-draggable"),
                i = e.extend({}, n, {
                    item: r.element
                });
            e.each(r.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, r.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, r.options.helper === "original" && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, i))
            })
        },
        drag: function (t, n) {
            var r = e(this).data("ui-draggable"),
                i = this;
            e.each(r.sortables, function () {
                var s = !1,
                    o = this;
                this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (s = !0, e.each(r.sortables, function () {
                    return this.instance.positionAbs = r.positionAbs, this.instance.helperProportions = r.helperProportions, this.instance.offset.click = r.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (s = !1), s
                })), s ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
                    return n.helper[0]
                }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = r.offset.click.top, this.instance.offset.click.left = r.offset.click.left, this.instance.offset.parent.left -= r.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= r.offset.parent.top - this.instance.offset.parent.top, r._trigger("toSortable", t), r.dropped = this.instance.element, r.currentItem = r.element, this.instance.fromOutside = r), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), r._trigger("fromSortable", t), r.dropped = !1)
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var t = e("body"),
                n = e(this).data("ui-draggable").options;
            t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
        },
        stop: function () {
            var t = e(this).data("ui-draggable").options;
            t._cursor && e("body").css("cursor", t._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("ui-draggable").options;
            r.css("opacity") && (i._opacity = r.css("opacity")), r.css("opacity", i.opacity)
        },
        stop: function (t, n) {
            var r = e(this).data("ui-draggable").options;
            r._opacity && e(n.helper).css("opacity", r._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var t = e(this).data("ui-draggable");
            t.scrollParent[0] !== document && t.scrollParent[0].tagName !== "HTML" && (t.overflowOffset = t.scrollParent.offset())
        },
        drag: function (t) {
            var n = e(this).data("ui-draggable"),
                r = n.options,
                i = !1;
            if (n.scrollParent[0] !== document && n.scrollParent[0].tagName !== "HTML") {
                if (!r.axis || r.axis !== "x") n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < r.scrollSensitivity ? n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop + r.scrollSpeed : t.pageY - n.overflowOffset.top < r.scrollSensitivity && (n.scrollParent[0].scrollTop = i = n.scrollParent[0].scrollTop - r.scrollSpeed);
                if (!r.axis || r.axis !== "y") n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < r.scrollSensitivity ? n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft + r.scrollSpeed : t.pageX - n.overflowOffset.left < r.scrollSensitivity && (n.scrollParent[0].scrollLeft = i = n.scrollParent[0].scrollLeft - r.scrollSpeed)
            } else {
                if (!r.axis || r.axis !== "x") t.pageY - e(document).scrollTop() < r.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - r.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < r.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + r.scrollSpeed));
                if (!r.axis || r.axis !== "y") t.pageX - e(document).scrollLeft() < r.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - r.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < r.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + r.scrollSpeed))
            }
            i !== !1 && e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function () {
            var t = e(this).data("ui-draggable"),
                n = t.options;
            t.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var n = e(this),
                    r = n.offset();
                this !== t.element[0] && t.snapElements.push({
                    item: this,
                    width: n.outerWidth(),
                    height: n.outerHeight(),
                    top: r.top,
                    left: r.left
                })
            })
        },
        drag: function (t, n) {
            var r, i, s, o, u, a, f, l, c, h, p = e(this).data("ui-draggable"),
                d = p.options,
                v = d.snapTolerance,
                m = n.offset.left,
                g = m + p.helperProportions.width,
                y = n.offset.top,
                b = y + p.helperProportions.height;
            for (c = p.snapElements.length - 1; c >= 0; c--) {
                u = p.snapElements[c].left, a = u + p.snapElements[c].width, f = p.snapElements[c].top, l = f + p.snapElements[c].height;
                if (!(u - v < m && m < a + v && f - v < y && y < l + v || u - v < m && m < a + v && f - v < b && b < l + v || u - v < g && g < a + v && f - v < y && y < l + v || u - v < g && g < a + v && f - v < b && b < l + v)) {
                    p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
                        snapItem: p.snapElements[c].item
                    })), p.snapElements[c].snapping = !1;
                    continue
                }
                d.snapMode !== "inner" && (r = Math.abs(f - b) <= v, i = Math.abs(l - y) <= v, s = Math.abs(u - g) <= v, o = Math.abs(a - m) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                    top: f - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                    top: l,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u - p.helperProportions.width
                }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a
                }).left - p.margins.left)), h = r || i || s || o, d.snapMode !== "outer" && (r = Math.abs(f - y) <= v, i = Math.abs(l - b) <= v, s = Math.abs(u - m) <= v, o = Math.abs(a - g) <= v, r && (n.position.top = p._convertPositionTo("relative", {
                    top: f,
                    left: 0
                }).top - p.margins.top), i && (n.position.top = p._convertPositionTo("relative", {
                    top: l - p.helperProportions.height,
                    left: 0
                }).top - p.margins.top), s && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: u
                }).left - p.margins.left), o && (n.position.left = p._convertPositionTo("relative", {
                    top: 0,
                    left: a - p.helperProportions.width
                }).left - p.margins.left)), !p.snapElements[c].snapping && (r || i || s || o || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
                    snapItem: p.snapElements[c].item
                })), p.snapElements[c].snapping = r || i || s || o || h
            }
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function () {
            var t, n = this.data("ui-draggable").options,
                r = e.makeArray(e(n.stack)).sort(function (t, n) {
                    return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0)
                });
            if (!r.length) return;
            t = parseInt(e(r[0]).css("zIndex"), 10) || 0, e(r).each(function (n) {
                e(this).css("zIndex", t + n)
            }), this.css("zIndex", t + r.length)
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, n) {
            var r = e(n.helper),
                i = e(this).data("ui-draggable").options;
            r.css("zIndex") && (i._zIndex = r.css("zIndex")), r.css("zIndex", i.zIndex)
        },
        stop: function (t, n) {
            var r = e(this).data("ui-draggable").options;
            r._zIndex && e(n.helper).css("zIndex", r._zIndex)
        }
    })
}(jQuery),
function (e, t) {
    function n(e) {
        return parseInt(e, 10) || 0
    }

    function r(e) {
        return !isNaN(parseInt(e, 10))
    }
    e.widget("ui.resizable", e.ui.mouse, {
        version: "1.10.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function () {
            var t, n, r, i, s, o = this,
                u = this.options;
            this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !! u.aspectRatio,
                aspectRatio: u.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: u.helper || u.ghost || u.animate ? u.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = u.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se");
            if (this.handles.constructor === String) {
                this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {};
                for (n = 0; n < t.length; n++) r = e.trim(t[n]), s = "ui-resizable-" + r, i = e("<div class='ui-resizable-handle " + s + "'></div>"), i.css({
                    zIndex: u.zIndex
                }), "se" === r && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[r] = ".ui-resizable-" + r, this.element.append(i)
            }
            this._renderAxis = function (t) {
                var n, r, i, s;
                t = t || this.element;
                for (n in this.handles) {
                    this.handles[n].constructor === String && (this.handles[n] = e(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (r = e(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? r.outerHeight() : r.outerWidth(), i = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize());
                    if (!e(this.handles[n]).length) continue
                }
            }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
                o.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = i && i[1] ? i[1] : "se")
            }), u.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                if (u.disabled) return;
                e(this).removeClass("ui-resizable-autohide"), o._handles.show()
            }).mouseleave(function () {
                if (u.disabled) return;
                o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, n = function (t) {
                    e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
            return this.elementIsWrapper && (n(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var n, r, i = !1;
            for (n in this.handles) {
                r = e(this.handles[n])[0];
                if (r === t.target || e.contains(r, t.target)) i = !0
            }
            return !this.options.disabled && i
        },
        _mouseStart: function (t) {
            var r, i, s, o = this.options,
                u = this.element.position(),
                a = this.element;
            return this.resizing = !0, /absolute/.test(a.css("position")) ? a.css({
                position: "absolute",
                top: a.css("top"),
                left: a.css("left")
            }) : a.is(".ui-draggable") && a.css({
                position: "absolute",
                top: u.top,
                left: u.left
            }), this._renderProxy(), r = n(this.helper.css("left")), i = n(this.helper.css("top")), o.containment && (r += e(o.containment).scrollLeft() || 0, i += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: r,
                top: i
            }, this.size = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {
                width: a.width(),
                height: a.height()
            }, this.originalPosition = {
                left: r,
                top: i
            }, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = typeof o.aspectRatio == "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", s === "auto" ? this.axis + "-resize" : s), a.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var n, r = this.helper,
                i = {}, s = this.originalMousePosition,
                o = this.axis,
                u = this.position.top,
                a = this.position.left,
                f = this.size.width,
                l = this.size.height,
                c = t.pageX - s.left || 0,
                h = t.pageY - s.top || 0,
                p = this._change[o];
            if (!p) return !1;
            n = p.apply(this, [t, c, h]), this._updateVirtualBoundaries(t.shiftKey);
            if (this._aspectRatio || t.shiftKey) n = this._updateRatio(n, t);
            return n = this._respectSize(n, t), this._updateCache(n), this._propagate("resize", t), this.position.top !== u && (i.top = this.position.top + "px"), this.position.left !== a && (i.left = this.position.left + "px"), this.size.width !== f && (i.width = this.size.width + "px"), this.size.height !== l && (i.height = this.size.height + "px"), r.css(i), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(i) || this._trigger("resize", t, this.ui()), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var n, r, i, s, o, u, a, f = this.options,
                l = this;
            return this._helper && (n = this._proportionallyResizeElements, r = n.length && /textarea/i.test(n[0].nodeName), i = r && e.ui.hasScroll(n[0], "left") ? 0 : l.sizeDiff.height, s = r ? 0 : l.sizeDiff.width, o = {
                width: l.helper.width() - s,
                height: l.helper.height() - i
            }, u = parseInt(l.element.css("left"), 10) + (l.position.left - l.originalPosition.left) || null, a = parseInt(l.element.css("top"), 10) + (l.position.top - l.originalPosition.top) || null, f.animate || this.element.css(e.extend(o, {
                top: a,
                left: u
            })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !f.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function (e) {
            var t, n, i, s, o, u = this.options;
            o = {
                minWidth: r(u.minWidth) ? u.minWidth : 0,
                maxWidth: r(u.maxWidth) ? u.maxWidth : Infinity,
                minHeight: r(u.minHeight) ? u.minHeight : 0,
                maxHeight: r(u.maxHeight) ? u.maxHeight : Infinity
            };
            if (this._aspectRatio || e) t = o.minHeight * this.aspectRatio, i = o.minWidth / this.aspectRatio, n = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), i > o.minHeight && (o.minHeight = i), n < o.maxWidth && (o.maxWidth = n), s < o.maxHeight && (o.maxHeight = s);
            this._vBoundaries = o
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), r(e.left) && (this.position.left = e.left), r(e.top) && (this.position.top = e.top), r(e.height) && (this.size.height = e.height), r(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position,
                n = this.size,
                i = this.axis;
            return r(e.height) ? e.width = e.height * this.aspectRatio : r(e.width) && (e.height = e.width / this.aspectRatio), i === "sw" && (e.left = t.left + (n.width - e.width), e.top = null), i === "nw" && (e.top = t.top + (n.height - e.height), e.left = t.left + (n.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries,
                n = this.axis,
                i = r(e.width) && t.maxWidth && t.maxWidth < e.width,
                s = r(e.height) && t.maxHeight && t.maxHeight < e.height,
                o = r(e.width) && t.minWidth && t.minWidth > e.width,
                u = r(e.height) && t.minHeight && t.minHeight > e.height,
                a = this.originalPosition.left + this.originalSize.width,
                f = this.position.top + this.size.height,
                l = /sw|nw|w/.test(n),
                c = /nw|ne|n/.test(n);
            return o && (e.width = t.minWidth), u && (e.height = t.minHeight), i && (e.width = t.maxWidth), s && (e.height = t.maxHeight), o && l && (e.left = a - t.minWidth), i && l && (e.left = a - t.maxWidth), u && c && (e.top = f - t.minHeight), s && c && (e.top = f - t.maxHeight), !e.width && !e.height && !e.left && e.top ? e.top = null : !e.width && !e.height && !e.top && e.left && (e.left = null), e
        },
        _proportionallyResize: function () {
            if (!this._proportionallyResizeElements.length) return;
            var e, t, n, r, i, s = this.helper || this.element;
            for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                i = this._proportionallyResizeElements[e];
                if (!this.borderDif) {
                    this.borderDif = [], n = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")], r = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                    for (t = 0; t < n.length; t++) this.borderDif[t] = (parseInt(n[t], 10) || 0) + (parseInt(r[t], 10) || 0)
                }
                i.css({
                    height: s.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: s.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        },
        _renderProxy: function () {
            var t = this.element,
                n = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {
                    width: this.originalSize.width + t
                }
            },
            w: function (e, t) {
                var n = this.originalSize,
                    r = this.originalPosition;
                return {
                    left: r.left + t,
                    width: n.width - t
                }
            },
            n: function (e, t, n) {
                var r = this.originalSize,
                    i = this.originalPosition;
                return {
                    top: i.top + n,
                    height: r.height - n
                }
            },
            s: function (e, t, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            sw: function (t, n, r) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            },
            ne: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, r]))
            },
            nw: function (t, n, r) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, r]))
            }
        },
        _propagate: function (t, n) {
            e.ui.plugin.call(this, t, [n, this.ui()]), t !== "resize" && this._trigger(t, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var n = e(this).data("ui-resizable"),
                r = n.options,
                i = n._proportionallyResizeElements,
                s = i.length && /textarea/i.test(i[0].nodeName),
                o = s && e.ui.hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
                u = s ? 0 : n.sizeDiff.width,
                a = {
                    width: n.size.width - u,
                    height: n.size.height - o
                }, f = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                l = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(e.extend(a, l && f ? {
                top: l,
                left: f
            } : {}), {
                duration: r.animateDuration,
                easing: r.animateEasing,
                step: function () {
                    var r = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    i && i.length && e(i[0]).css({
                        width: r.width,
                        height: r.height
                    }), n._updateCache(r), n._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var t, r, i, s, o, u, a, f = e(this).data("ui-resizable"),
                l = f.options,
                c = f.element,
                h = l.containment,
                p = h instanceof e ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
            if (!p) return;
            f.containerElement = e(p), /document/.test(h) || h === document ? (f.containerOffset = {
                left: 0,
                top: 0
            }, f.containerPosition = {
                left: 0,
                top: 0
            }, f.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(p), r = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, i) {
                r[e] = n(t.css("padding" + i))
            }), f.containerOffset = t.offset(), f.containerPosition = t.position(), f.containerSize = {
                height: t.innerHeight() - r[3],
                width: t.innerWidth() - r[1]
            }, i = f.containerOffset, s = f.containerSize.height, o = f.containerSize.width, u = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, a = e.ui.hasScroll(p) ? p.scrollHeight : s, f.parentData = {
                element: p,
                left: i.left,
                top: i.top,
                width: u,
                height: a
            })
        },
        resize: function (t) {
            var n, r, i, s, o = e(this).data("ui-resizable"),
                u = o.options,
                a = o.containerOffset,
                f = o.position,
                l = o._aspectRatio || t.shiftKey,
                c = {
                    top: 0,
                    left: 0
                }, h = o.containerElement;
            h[0] !== document && /static/.test(h.css("position")) && (c = a), f.left < (o._helper ? a.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - a.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio), o.position.left = u.helper ? a.left : 0), f.top < (o._helper ? a.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - a.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? a.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, n = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), r = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - a.top) + o.sizeDiff.height), i = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), i && s && (n -= o.parentData.left), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, l && (o.size.height = o.size.width / o.aspectRatio)), r + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - r, l && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function () {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = t.containerOffset,
                i = t.containerPosition,
                s = t.containerElement,
                o = e(t.helper),
                u = o.offset(),
                a = o.outerWidth() - t.sizeDiff.width,
                f = o.outerHeight() - t.sizeDiff.height;
            t._helper && !n.animate && /relative/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
            }), t._helper && !n.animate && /static/.test(s.css("position")) && e(this).css({
                left: u.left - i.left - r.left,
                width: a,
                height: f
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = function (t) {
                    e(t).each(function () {
                        var t = e(this);
                        t.data("ui-resizable-alsoresize", {
                            width: parseInt(t.width(), 10),
                            height: parseInt(t.height(), 10),
                            left: parseInt(t.css("left"), 10),
                            top: parseInt(t.css("top"), 10)
                        })
                    })
                };
            typeof n.alsoResize == "object" && !n.alsoResize.parentNode ? n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], r(n.alsoResize)) : e.each(n.alsoResize, function (e) {
                r(e)
            }) : r(n.alsoResize)
        },
        resize: function (t, n) {
            var r = e(this).data("ui-resizable"),
                i = r.options,
                s = r.originalSize,
                o = r.originalPosition,
                u = {
                    height: r.size.height - s.height || 0,
                    width: r.size.width - s.width || 0,
                    top: r.position.top - o.top || 0,
                    left: r.position.left - o.left || 0
                }, a = function (t, r) {
                    e(t).each(function () {
                        var t = e(this),
                            i = e(this).data("ui-resizable-alsoresize"),
                            s = {}, o = r && r.length ? r : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(o, function (e, t) {
                            var n = (i[t] || 0) + (u[t] || 0);
                            n && n >= 0 && (s[t] = n || null)
                        }), t.css(s)
                    })
                };
            typeof i.alsoResize == "object" && !i.alsoResize.nodeType ? e.each(i.alsoResize, function (e, t) {
                a(e, t)
            }) : a(i.alsoResize)
        },
        stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: r.height,
                width: r.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof n.ghost == "string" ? n.ghost : ""), t.ghost.appendTo(t.helper)
        },
        resize: function () {
            var t = e(this).data("ui-resizable");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function () {
            var t = e(this).data("ui-resizable");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t = e(this).data("ui-resizable"),
                n = t.options,
                r = t.size,
                i = t.originalSize,
                s = t.originalPosition,
                o = t.axis,
                u = typeof n.grid == "number" ? [n.grid, n.grid] : n.grid,
                a = u[0] || 1,
                f = u[1] || 1,
                l = Math.round((r.width - i.width) / a) * a,
                c = Math.round((r.height - i.height) / f) * f,
                h = i.width + l,
                p = i.height + c,
                d = n.maxWidth && n.maxWidth < h,
                v = n.maxHeight && n.maxHeight < p,
                m = n.minWidth && n.minWidth > h,
                g = n.minHeight && n.minHeight > p;
            n.grid = u, m && (h += a), g && (p += f), d && (h -= a), v && (p -= f), /^(se|s|e)$/.test(o) ? (t.size.width = h, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.top = s.top - c) : /^(sw)$/.test(o) ? (t.size.width = h, t.size.height = p, t.position.left = s.left - l) : (t.size.width = h, t.size.height = p, t.position.top = s.top - c, t.position.left = s.left - l)
        }
    })
}(jQuery),
function (e, t) {
    var n, r, i, s, o = "ui-button ui-widget ui-state-default ui-corner-all",
        u = "ui-state-hover ui-state-active ",
        a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        f = function () {
            var t = e(this).find(":ui-button");
            setTimeout(function () {
                t.button("refresh")
            }, 1)
        }, l = function (t) {
            var n = t.name,
                r = t.form,
                i = e([]);
            return n && (n = n.replace(/'/g, "\\'"), r ? i = e(r).find("[name='" + n + "']") : i = e("[name='" + n + "']", t.ownerDocument).filter(function () {
                return !this.form
            })), i
        };
    e.widget("ui.button", {
        version: "1.10.1",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, f), typeof this.options.disabled != "boolean" ? this.options.disabled = !! this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !! this.buttonElement.attr("title");
            var t = this,
                u = this.options,
                a = this.type === "checkbox" || this.type === "radio",
                c = a ? "" : "ui-state-active",
                h = "ui-state-focus";
            u.label === null && (u.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                if (u.disabled) return;
                this === n && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                if (u.disabled) return;
                e(this).removeClass(c)
            }).bind("click" + this.eventNamespace, function (e) {
                u.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this.element.bind("focus" + this.eventNamespace, function () {
                t.buttonElement.addClass(h)
            }).bind("blur" + this.eventNamespace, function () {
                t.buttonElement.removeClass(h)
            }), a && (this.element.bind("change" + this.eventNamespace, function () {
                if (s) return;
                t.refresh()
            }), this.buttonElement.bind("mousedown" + this.eventNamespace, function (e) {
                if (u.disabled) return;
                s = !1, r = e.pageX, i = e.pageY
            }).bind("mouseup" + this.eventNamespace, function (e) {
                if (u.disabled) return;
                if (r !== e.pageX || i !== e.pageY) s = !0
            })), this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (u.disabled || s) return !1
            }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (u.disabled || s) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var n = t.element[0];
                l(n).not(n).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).addClass("ui-state-active"), n = this, t.document.one("mouseup", function () {
                    n = null
                })
            }).bind("mouseup" + this.eventNamespace, function () {
                if (u.disabled) return !1;
                e(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (t) {
                if (u.disabled) return !1;
                (t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active")
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", u.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, n;
            this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button", this.type === "checkbox" || this.type === "radio" ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + u + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            this._super(e, t);
            if (e === "disabled") {
                t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1);
                return
            }
            this._resetButton()
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), this.type === "radio" ? l(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if (this.type === "input") {
                this.options.label && this.element.val(this.options.label);
                return
            }
            var t = this.buttonElement.removeClass(a),
                n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                r = this.options.icons,
                i = r.primary && r.secondary,
                s = [];
            r.primary || r.secondary ? (this.options.text && s.push("ui-button-text-icon" + (i ? "s" : r.primary ? "-primary" : "-secondary")), r.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + r.primary + "'></span>"), r.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + r.secondary + "'></span>"), this.options.text || (s.push(i ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : s.push("ui-button-text-only"), t.addClass(s.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.10.1",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            e === "disabled" && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function () {
            var t = this.element.css("direction") === "rtl";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
}(jQuery),
function (e, t) {
    var n = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0
    }, r = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        version: "1.10.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (t) {
                    var n = e(this).css(t).offset().top;
                    n < 0 && e(this).css("top", t.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function (t) {
            var n = this;
            if (!this._isOpen || this._trigger("beforeClose", t) === !1) return;
            this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || e(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
                n._trigger("close", t)
            })
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, t) {
            var n = !! this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return n && !t && this._trigger("focus", e), n
        },
        open: function () {
            var t = this;
            if (this._isOpen) {
                this._moveToTop() && this._focusTabbable();
                return
            }
            this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._trigger("open")
        },
        _focusTabbable: function () {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function (t) {
            function n() {
                var t = this.document[0].activeElement,
                    n = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                n || this._focusTabbable()
            }
            t.preventDefault(), n.call(this), this._delay(n)
        },
        _createWrapper: function () {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) {
                        t.preventDefault(), this.close(t);
                        return
                    }
                    if (t.keyCode !== e.ui.keyCode.TAB) return;
                    var n = this.uiDialog.find(":tabbable"),
                        r = n.filter(":first"),
                        i = n.filter(":last");
                    t.target !== i[0] && t.target !== this.uiDialog[0] || !! t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (i.focus(1), t.preventDefault()) : (r.focus(1), t.preventDefault())
                },
                mousedown: function (e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function (e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var t = this,
                n = this.options.buttons;
            this.uiDialogButtonPane.remove(), this.uiButtonSet.empty();
            if (e.isEmptyObject(n) || e.isArray(n) && !n.length) {
                this.uiDialog.removeClass("ui-dialog-buttons");
                return
            }
            e.each(n, function (n, r) {
                var i, s;
                r = e.isFunction(r) ? {
                    click: r,
                    text: n
                } : r, r = e.extend({
                    type: "button"
                }, r), i = r.click, r.click = function () {
                    i.apply(t.element[0], arguments)
                }, s = {
                    icons: r.icons,
                    text: r.showText
                }, delete r.icons, delete r.showText, e("<button></button>", r).button(s).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
        },
        _makeDraggable: function () {
            function r(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var t = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (n, i) {
                    e(this).addClass("ui-dialog-dragging"), t._blockFrames(), t._trigger("dragStart", n, r(i))
                },
                drag: function (e, n) {
                    t._trigger("drag", e, r(n))
                },
                stop: function (i, s) {
                    n.position = [s.position.left - t.document.scrollLeft(), s.position.top - t.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), t._unblockFrames(), t._trigger("dragStop", i, r(s))
                }
            })
        },
        _makeResizable: function () {
            function o(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var t = this,
                n = this.options,
                r = n.resizable,
                i = this.uiDialog.css("position"),
                s = typeof r == "string" ? r : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: s,
                start: function (n, r) {
                    e(this).addClass("ui-dialog-resizing"), t._blockFrames(), t._trigger("resizeStart", n, o(r))
                },
                resize: function (e, n) {
                    t._trigger("resize", e, o(n))
                },
                stop: function (r, i) {
                    n.height = e(this).height(), n.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), t._unblockFrames(), t._trigger("resizeStop", r, o(i))
                }
            }).css("position", i)
        },
        _minHeight: function () {
            var e = this.options;
            return e.height === "auto" ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function () {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this,
                s = !1,
                o = {};
            e.each(t, function (e, t) {
                i._setOption(e, t), e in n && (s = !0), e in r && (o[e] = t)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function (e, t) {
            var n, r, i = this.uiDialog;
            e === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t);
            if (e === "disabled") return;
            this._super(e, t), e === "appendTo" && this.uiDialog.appendTo(this._appendTo()), e === "buttons" && this._createButtons(), e === "closeText" && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), e === "draggable" && (n = i.is(":data(ui-draggable)"), n && !t && i.draggable("destroy"), !n && t && this._makeDraggable()), e === "position" && this._position(), e === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), !r && t !== !1 && this._makeResizable()), e === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))
        },
        _size: function () {
            var e, t, n, r = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), r.minWidth > r.width && (r.width = r.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: r.width
            }).outerHeight(), t = Math.max(0, r.minHeight - e), n = typeof r.maxHeight == "number" ? Math.max(0, r.maxHeight - e) : "none", r.height === "auto" ? this.element.css({
                minHeight: t,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, r.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _createOverlay: function () {
            if (!this.options.modal) return;
            e.ui.dialog.overlayInstances || this._delay(function () {
                e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (t) {
                    !e(t.target).closest(".ui-dialog").length && !e(t.target).closest(".ui-datepicker").length && (t.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())
                })
            }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                mousedown: "_keepFocus"
            }), e.ui.dialog.overlayInstances++
        },
        _destroyOverlay: function () {
            if (!this.options.modal) return;
            this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function () {
            var t = this.options.position,
                n = [],
                r = [0, 0],
                i;
            if (t) {
                if (typeof t == "string" || typeof t == "object" && "0" in t) n = t.split ? t.split(" ") : [t[0], t[1]], n.length === 1 && (n[1] = n[0]), e.each(["left", "top"], function (e, t) {
                    +n[e] === n[e] && (r[e] = n[e], n[e] = t)
                }), t = {
                    my: n[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + n[1] + (r[1] < 0 ? r[1] : "+" + r[1]),
                    at: n.join(" ")
                };
                t = e.extend({}, e.ui.dialog.prototype.options.position, t)
            } else t = e.ui.dialog.prototype.options.position;
            i = this.uiDialog.is(":visible"), i || this.uiDialog.show(), this.uiDialog.position(t), i || this.uiDialog.hide()
        }
    })
}(jQuery), window.Modernizr = function (e, t, n) {
    function r(e) {
        d.cssText = e
    }

    function i(e, t) {
        return r(g.join(e + ";") + (t || ""))
    }

    function s(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function u(e, t, r) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n) return r === !1 ? e[i] : s(o, "function") ? o.bind(r || t) : o
        }
        return !1
    }
    var a = "2.6.2",
        f = {}, l = !0,
        c = t.documentElement,
        h = "modernizr",
        p = t.createElement(h),
        d = p.style,
        v, m = {}.toString,
        g = " -webkit- -moz- -o- -ms- ".split(" "),
        y = {}, b = {}, w = {}, E = [],
        S = E.slice,
        x, T = function (e, n, r, i) {
            var s, o, u, a, f = t.createElement("div"),
                l = t.body,
                p = l || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) u = t.createElement("div"), u.id = i ? i[r] : h + (r + 1), f.appendChild(u);
            return s = ["&#173;", '<style id="s', h, '">', e, "</style>"].join(""), f.id = h, (l ? f : p).innerHTML += s, p.appendChild(f), l || (p.style.background = "", p.style.overflow = "hidden", a = c.style.overflow, c.style.overflow = "hidden", c.appendChild(p)), o = n(f, e), l ? f.parentNode.removeChild(f) : (p.parentNode.removeChild(p), c.style.overflow = a), !! o
        }, N = {}.hasOwnProperty,
        C;
    !s(N, "undefined") && !s(N.call, "undefined") ? C = function (e, t) {
        return N.call(e, t)
    } : C = function (e, t) {
        return t in e && s(e.constructor.prototype[t], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if (typeof t != "function") throw new TypeError;
        var n = S.call(arguments, 1),
            r = function () {
                if (this instanceof r) {
                    var i = function () {};
                    i.prototype = t.prototype;
                    var s = new i,
                        o = t.apply(s, n.concat(S.call(arguments)));
                    return Object(o) === o ? o : s
                }
                return t.apply(e, n.concat(S.call(arguments)))
            };
        return r
    }), y.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T(["@media (", g.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = e.offsetTop === 9
        }), n
    };
    for (var k in y) C(y, k) && (x = k.toLowerCase(), f[x] = y[k](), E.push((f[x] ? "" : "no-") + x));
    return f.addTest = function (e, t) {
        if (typeof e == "object")
            for (var r in e) C(e, r) && f.addTest(r, e[r]);
        else {
            e = e.toLowerCase();
            if (f[e] !== n) return f;
            t = typeof t == "function" ? t() : t, typeof l != "undefined" && l && (c.className += " " + (t ? "" : "no-") + e), f[e] = t
        }
        return f
    }, r(""), p = v = null,
    function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = g.elements;
            return typeof e == "string" ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[p]];
            return t || (t = {}, d++, e[p] = d, v[d] = t), t
        }

        function s(e, n, r) {
            n || (n = t);
            if (m) return n.createElement(e);
            r || (r = i(n));
            var s;
            return r.cache[e] ? s = r.cache[e].cloneNode() : c.test(e) ? s = (r.cache[e] = r.createElem(e)).cloneNode() : s = r.createElem(e), s.canHaveChildren && !l.test(e) ? r.frag.appendChild(s) : s
        }

        function o(e, n) {
            e || (e = t);
            if (m) return e.createDocumentFragment();
            n = n || i(e);
            var s = n.frag.cloneNode(),
                o = 0,
                u = r(),
                a = u.length;
            for (; o < a; o++) s.createElement(u[o]);
            return s
        }

        function u(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return g.shivMethods ? s(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/\w+/g, function (e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(g, t.frag)
        }

        function a(e) {
            e || (e = t);
            var r = i(e);
            return g.shivCSS && !h && !r.hasCSS && (r.hasCSS = !! n(e, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), m || u(e, r), e
        }
        var f = e.html5 || {}, l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h, p = "_html5shiv",
            d = 0,
            v = {}, m;
        (function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", h = "hidden" in e, m = e.childNodes.length == 1 || function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return typeof e.cloneNode == "undefined" || typeof e.createDocumentFragment == "undefined" || typeof e.createElement == "undefined"
                }()
            } catch (n) {
                h = !0, m = !0
            }
        })();
        var g = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: m,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: a,
            createElement: s,
            createDocumentFragment: o
        };
        e.html5 = g, a(t)
    }(this, t), f._version = a, f._prefixes = g, f.testStyles = T, c.className = c.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (l ? " js " + E.join(" ") : ""), f
}(this, this.document),
function (e, t, n) {
    function r(e) {
        return "[object Function]" == d.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function s() {}

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function u() {
        var e = v.shift();
        m = 1, e ? e.t ? h(function () {
            ("c" == e.t ? k.injectCss : k.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), u()) : m = 0
    }

    function a(e, n, r, i, s, a, f) {
        function l(t) {
            if (!d && o(c.readyState) && (w.r = d = 1, !m && u(), c.onload = c.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    b.removeChild(c)
                }, 50);
                for (var r in T[n]) T[n].hasOwnProperty(r) && T[n][r].onload()
            }
        }
        var f = f || k.errorTimeout,
            c = t.createElement(e),
            d = 0,
            g = 0,
            w = {
                t: r,
                s: n,
                e: s,
                a: a,
                x: f
            };
        1 === T[n] && (g = 1, T[n] = []), "object" == e ? c.data = n : (c.src = n, c.type = e), c.width = c.height = "0", c.onerror = c.onload = c.onreadystatechange = function () {
            l.call(this, g)
        }, v.splice(i, 0, w), "img" != e && (g || 2 === T[n] ? (b.insertBefore(c, y ? null : p), h(l, f)) : T[n].push(c))
    }

    function f(e, t, n, r, s) {
        return m = 0, t = t || "j", i(e) ? a("c" == t ? E : w, e, t, this.i++, n, r, s) : (v.splice(this.i++, 0, e), 1 == v.length && u()), this
    }

    function l() {
        var e = k;
        return e.loader = {
            load: f,
            i: 0
        }, e
    }
    var c = t.documentElement,
        h = e.setTimeout,
        p = t.getElementsByTagName("script")[0],
        d = {}.toString,
        v = [],
        m = 0,
        g = "MozAppearance" in c.style,
        y = g && !! t.createRange().compareNode,
        b = y ? c : p.parentNode,
        c = e.opera && "[object Opera]" == d.call(e.opera),
        c = !! t.attachEvent && !c,
        w = g ? "object" : c ? "script" : "img",
        E = c ? "script" : w,
        S = Array.isArray || function (e) {
            return "[object Array]" == d.call(e)
        }, x = [],
        T = {}, N = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        }, C, k;
    k = function (e) {
        function t(e) {
            var e = e.split("!"),
                t = x.length,
                n = e.pop(),
                r = e.length,
                n = {
                    url: n,
                    origUrl: n,
                    prefixes: e
                }, i, s, o;
            for (s = 0; s < r; s++) o = e[s].split("="), (i = N[o.shift()]) && (n = i(n, o));
            for (s = 0; s < t; s++) n = x[s](n);
            return n
        }

        function o(e, i, s, o, u) {
            var a = t(e),
                f = a.autoCallback;
            a.url.split(".").pop().split("?").shift(), a.bypass || (i && (i = r(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), a.instead ? a.instead(e, i, s, o, u) : (T[a.url] ? a.noexec = !0 : T[a.url] = 1, s.load(a.url, a.forceCSS || !a.forceJS && "css" == a.url.split(".").pop().split("?").shift() ? "c" : n, a.noexec, a.attrs, a.timeout), (r(i) || r(f)) && s.load(function () {
                l(), i && i(a.origUrl, u, o), f && f(a.origUrl, u, o), T[a.url] = 2
            })))
        }

        function u(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (f = function () {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), o(e, f, t, 0, u);
                    else if (Object(e) === e)
                        for (p in h = function () {
                            var t = 0,
                                n;
                            for (n in e) e.hasOwnProperty(n) && t++;
                            return t
                        }(), e) e.hasOwnProperty(p) && (!n && !--h && (r(f) ? f = function () {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        } : f[p] = function (e) {
                            return function () {
                                var t = [].slice.call(arguments);
                                e && e.apply(this, t), c()
                            }
                        }(l[p])), o(e[p], f, t, p, u))
                } else !n && c()
            }
            var u = !! e.test,
                a = e.load || e.both,
                f = e.callback || s,
                l = f,
                c = e.complete || s,
                h, p;
            n(u ? e.yep : e.nope, !! a), a && n(a)
        }
        var a, f, c = this.yepnope.loader;
        if (i(e)) o(e, 0, c, 0);
        else if (S(e))
            for (a = 0; a < e.length; a++) f = e[a], i(f) ? o(f, 0, c, 0) : S(f) ? k(f) : Object(f) === f && u(f, c);
        else Object(e) === e && u(e, c)
    }, k.addPrefix = function (e, t) {
        N[e] = t
    }, k.addFilter = function (e) {
        x.push(e)
    }, k.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", C = function () {
        t.removeEventListener("DOMContentLoaded", C, 0), t.readyState = "complete"
    }, 0)), e.yepnope = l(), e.yepnope.executeStack = u, e.yepnope.injectJs = function (e, n, r, i, a, f) {
        var l = t.createElement("script"),
            c, d, i = i || k.errorTimeout;
        l.src = e;
        for (d in r) l.setAttribute(d, r[d]);
        n = f ? u : n || s, l.onreadystatechange = l.onload = function () {
            !c && o(l.readyState) && (c = 1, n(), l.onload = l.onreadystatechange = null)
        }, h(function () {
            c || (c = 1, n(1))
        }, i), a ? l.onload() : p.parentNode.insertBefore(l, p)
    }, e.yepnope.injectCss = function (e, n, r, i, o, a) {
        var i = t.createElement("link"),
            f, n = a ? u : n || s;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (f in r) i.setAttribute(f, r[f]);
        o || (p.parentNode.insertBefore(i, p), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
function (e) {
    jQuery.cat = function () {}, jQuery.fn.cat = function () {
        return this.anim = function () {
            return this.smoothSlideDown = function () {
                var t = arguments[0] || {};
                e(this).each(function () {
                    e(this).show(), e(this).css("height", e(this).height()), e(this).hide(), e(this).slideDown(t)
                })
            }, this
        }, this.dom = function () {
            return this.height = function () {
                var t = e(this).first();
                t.show();
                var n = t.height();
                return t.hide(), n
            }, this.width = function () {
                var t = e(this).first();
                t.show();
                var n = t.width();
                return t.hide(), n
            }, this
        }, this.ui = function () {
            return this.rolloverImage = function () {
                var t = arguments[0],
                    n = arguments[1];
                e(this).each(function () {
                    var r = e(this).attr("src"),
                        i = r.substr(r.lastIndexOf(".")),
                        s = r.substr(0, r.lastIndexOf(".")),
                        o = e(this).attr(t);
                    e.cat.string.isEmpty(o) && (o = s + n + i), e.cat.dom.preloadImage(o), e(this).data("src") || (e(this).data("src", r), e(this).data("rolloversrc", o)), e(this).hover(function () {
                        e(this).attr("src", e(this).data("rolloversrc"))
                    }, function () {
                        e(this).attr("src", e(this).data("src"))
                    })
                })
            }, this
        }, this.fullWindow = function () {
            var t = arguments[0],
                n = arguments[1],
                r = arguments[2],
                i = arguments[3];
            return e(this).each(function () {
                e(this).css("position", "absolute"), e(this).css("top", "0"), e(this).css("left", "0"), t && e(this).width(e(window).width() - r), n && e(this).height(e(window).height() - i)
            }), this
        }, this.fullContainer = function () {
            var t = arguments[0],
                n = arguments[1],
                r = arguments[2],
                i = arguments[3],
                s = arguments[4];
            return e(this).each(function () {
                e(this).css("position", "absolute"), e(this).css("top", "0"), e(this).css("left", "0"), n && e(this).width(e(t).width() - i), r && e(this).height(e(t).height() - s)
            }), this
        }, this.fullDocument = function () {
            var t = arguments[0],
                n = arguments[1],
                r = arguments[2],
                i = arguments[3];
            return e(this).each(function () {
                e(this).css("position", "absolute"), e(this).css("top", "0"), e(this).css("left", "0"), t && e(this).width(e(window).width() - r), n && (e(this).css("top", -999999), e(this).height(e(document).height() - i), e(this).css("top", 0))
            }), this
        }, this.dom = function () {
            return this.center = function () {
                var t = arguments[0],
                    n = arguments[1],
                    r = arguments[2],
                    i = arguments[3];
                e(this).each(function () {
                    e(this).css({
                        position: n
                    }), r && e(this).css({
                        left: (t.width() - e(this).outerWidth()) / 2
                    }), i && e(this).css({
                        top: (t.height() - e(this).outerHeight()) / 2
                    })
                })
            }, this.hasChildren = function () {
                return e(this).children().length > 0 ? !0 : !1
            }, this
        }, this
    }, jQuery.cat.js = function () {}, jQuery.cat.js.functionFromString = function (e) {
        return window[e]
    }, jQuery.cat.string = function () {}, jQuery.cat.string.isEmpty = function (e) {
        return !e || 0 === e.length
    }, jQuery.cat.string.isBlank = function (e) {
        return !e || /^\s*$/.test(e)
    }, jQuery.cat.string.trim = function (e) {
        return e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }, jQuery.cat.string.ltrim = function (e) {
        return e.replace(/^\s+/, "")
    }, jQuery.cat.string.rtrim = function (e) {
        return e.replace(/\s+$/, "")
    }, jQuery.cat.string.fulltrim = function (e) {
        return e.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, "").replace(/\s+/g, " ")
    }, jQuery.cat.string.booleanValue = function (e) {
        return e === "true"
    }, jQuery.cat.string.startsWith = function (e, t) {
        return e.indexOf(t) == 0
    }, jQuery.cat.browser = function () {}, jQuery.cat.browser.ie = function () {
        return e.browser.msie ? !0 : !1
    }, jQuery.cat.browser.versionGt = function (e) {
        var t = parseInt(jQuery.browser.version, 10);
        return t > e ? !0 : !1
    }, jQuery.cat.browser.versionLt = function (e) {
        var t = parseInt(jQuery.browser.version, 10);
        return t < e ? !0 : !1
    }, jQuery.cat.ui = function () {}, jQuery.cat.dom = function () {}, jQuery.cat.dom.windowScrollTop = function () {
        return e(window).scrollTop()
    }, jQuery.cat.dom.preloadImage = function (e) {
        var t = new Image;
        t.src = e
    }, jQuery.cat.dom.bodyScrollTopAnimate = function (t, n, r, i) {
        e("html,body").animate({
            scrollTop: t
        }, n, r, i)
    }, jQuery.cat.math = function () {}, jQuery.cat.math.randomInt = function (e) {
        return 1 + Math.floor(Math.random() * e)
    }
}(jQuery),
function (e) {
    e.fn.touchwipe = function (t) {
        var n = {
            min_move_x: 20,
            min_move_y: 20,
            wipeLeft: function () {},
            wipeRight: function () {},
            wipeUp: function () {},
            wipeDown: function () {},
            preventDefaultEvents: !0
        };
        return t && e.extend(n, t), this.each(function () {
            function i() {
                this.removeEventListener("touchmove", s), e = null, r = !1
            }

            function s(s) {
                n.preventDefaultEvents && s.preventDefault();
                if (r) {
                    var o = s.touches[0].pageX,
                        u = s.touches[0].pageY,
                        a = e - o,
                        f = t - u;
                    Math.abs(a) >= n.min_move_x ? (i(), a > 0 ? n.wipeLeft() : n.wipeRight()) : Math.abs(f) >= n.min_move_y && (i(), f > 0 ? n.wipeDown() : n.wipeUp())
                }
            }

            function o(n) {
                n.touches.length == 1 && (e = n.touches[0].pageX, t = n.touches[0].pageY, r = !0, this.addEventListener("touchmove", s, !1))
            }
            var e, t, r = !1;
            "ontouchstart" in document.documentElement && this.addEventListener("touchstart", o, !1)
        }), this
    }
}(jQuery),
function (e, t, n) {
    "use strict";
    var r = e.document,
        i = e.Modernizr,
        s = function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }, o = "Moz Webkit O Ms".split(" "),
        u = function (e) {
            var t = r.documentElement.style,
                n;
            if (typeof t[e] == "string") return e;
            e = s(e);
            for (var i = 0, u = o.length; i < u; i++) {
                n = o[i] + e;
                if (typeof t[n] == "string") return n
            }
        }, a = u("transform"),
        f = u("transitionProperty"),
        l = {
            csstransforms: function () {
                return !!a
            },
            csstransforms3d: function () {
                var e = !! u("perspective");
                if (e) {
                    var n = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        r = "@media (" + n.join("transform-3d),(") + "modernizr)",
                        i = t("<style>" + r + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        s = t('<div id="modernizr" />').appendTo("html");
                    e = s.height() === 3, s.remove(), i.remove()
                }
                return e
            },
            csstransitions: function () {
                return !!f
            }
        }, c;
    if (i)
        for (c in l) i.hasOwnProperty(c) || i.addTest(c, l[c]);
    else {
        i = e.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var h = " ",
            p;
        for (c in l) p = l[c](), i[c] = p, h += " " + (p ? "" : "no-") + c;
        t("html").addClass(h)
    } if (i.csstransforms) {
        var d = i.csstransforms3d ? {
            translate: function (e) {
                return "translate3d(" + e[0] + "px, " + e[1] + "px, 0) "
            },
            scale: function (e) {
                return "scale3d(" + e + ", " + e + ", 1) "
            }
        } : {
            translate: function (e) {
                return "translate(" + e[0] + "px, " + e[1] + "px) "
            },
            scale: function (e) {
                return "scale(" + e + ") "
            }
        }, v = function (e, n, r) {
                var i = t.data(e, "isoTransform") || {}, s = {}, o, u = {}, f;
                s[n] = r, t.extend(i, s);
                for (o in i) f = i[o], u[o] = d[o](f);
                var l = u.translate || "",
                    c = u.scale || "",
                    h = l + c;
                t.data(e, "isoTransform", i), e.style[a] = h
            };
        t.cssNumber.scale = !0, t.cssHooks.scale = {
            set: function (e, t) {
                v(e, "scale", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.scale ? r.scale : 1
            }
        }, t.fx.step.scale = function (e) {
            t.cssHooks.scale.set(e.elem, e.now + e.unit)
        }, t.cssNumber.translate = !0, t.cssHooks.translate = {
            set: function (e, t) {
                v(e, "translate", t)
            },
            get: function (e, n) {
                var r = t.data(e, "isoTransform");
                return r && r.translate ? r.translate : [0, 0]
            }
        }
    }
    var m, g;
    i.csstransitions && (m = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[f], g = u("transitionDuration"));
    var y = t.event,
        b;
    y.special.smartresize = {
        setup: function () {
            t(this).bind("resize", y.special.smartresize.handler)
        },
        teardown: function () {
            t(this).unbind("resize", y.special.smartresize.handler)
        },
        handler: function (e, t) {
            var n = this,
                r = arguments;
            e.type = "smartresize", b && clearTimeout(b), b = setTimeout(function () {
                jQuery.event.handle.apply(n, r)
            }, t === "execAsap" ? 0 : 100)
        }
    }, t.fn.smartresize = function (e) {
        return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
    }, t.Isotope = function (e, n, r) {
        this.element = t(n), this._create(e), this._init(r)
    };
    var w = ["width", "height"],
        E = t(e);
    t.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, t.Isotope.prototype = {
        _create: function (e) {
            this.options = t.extend({}, t.Isotope.settings, e), this.styleQueue = [], this.elemCount = 0;
            var n = this.element[0].style;
            this.originalStyle = {};
            var r = w.slice(0);
            for (var i in this.options.containerStyle) r.push(i);
            for (var s = 0, o = r.length; s < o; s++) i = r[s], this.originalStyle[i] = n[i] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var u = {
                "original-order": function (e, t) {
                    return t.elemCount++, t.elemCount
                },
                random: function () {
                    return Math.random()
                }
            };
            this.options.getSortData = t.extend(this.options.getSortData, u), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var a = this;
            setTimeout(function () {
                a.element.addClass(a.options.containerClass)
            }, 0), this.options.resizable && E.bind("smartresize.isotope", function () {
                a.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function () {
                return !1
            })
        },
        _getAtoms: function (e) {
            var t = this.options.itemSelector,
                n = t ? e.filter(t).add(e.find(t)) : e,
                r = {
                    position: "absolute"
                };
            return n = n.filter(function (e, t) {
                return t.nodeType === 1
            }), this.usingTransforms && (r.left = 0, r.top = 0), n.css(r).addClass(this.options.itemClass), this.updateSortData(n, !0), n
        },
        _init: function (e) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(e)
        },
        option: function (e) {
            if (t.isPlainObject(e)) {
                this.options = t.extend(!0, this.options, e);
                var n;
                for (var r in e) n = "_update" + s(r), this[n] && this[n]()
            }
        },
        _updateAnimationEngine: function () {
            var e = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                t;
            switch (e) {
            case "css":
            case "none":
                t = !1;
                break;
            case "jquery":
                t = !0;
                break;
            default:
                t = !i.csstransitions
            }
            this.isUsingJQueryAnimation = t, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function () {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function () {
            var e = this.usingTransforms = this.options.transformsEnabled && i.csstransforms && i.csstransitions && !this.isUsingJQueryAnimation;
            e || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = e ? this._translate : this._positionAbs
        },
        _filter: function (e) {
            var t = this.options.filter === "" ? "*" : this.options.filter;
            if (!t) return e;
            var n = this.options.hiddenClass,
                r = "." + n,
                i = e.filter(r),
                s = i;
            if (t !== "*") {
                s = i.filter(t);
                var o = e.not(r).not(t).addClass(n);
                this.styleQueue.push({
                    $el: o,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: s,
                style: this.options.visibleStyle
            }), s.removeClass(n), e.filter(t)
        },
        updateSortData: function (e, n) {
            var r = this,
                i = this.options.getSortData,
                s, o;
            e.each(function () {
                s = t(this), o = {};
                for (var e in i)!n && e === "original-order" ? o[e] = t.data(this, "isotope-sort-data")[e] : o[e] = i[e](s, r);
                t.data(this, "isotope-sort-data", o)
            })
        },
        _sort: function () {
            var e = this.options.sortBy,
                t = this._getSorter,
                n = this.options.sortAscending ? 1 : -1,
                r = function (r, i) {
                    var s = t(r, e),
                        o = t(i, e);
                    return s === o && e !== "original-order" && (s = t(r, "original-order"), o = t(i, "original-order")), (s > o ? 1 : s < o ? -1 : 0) * n
                };
            this.$filteredAtoms.sort(r)
        },
        _getSorter: function (e, n) {
            return t.data(e, "isotope-sort-data")[n]
        },
        _translate: function (e, t) {
            return {
                translate: [e, t]
            }
        },
        _positionAbs: function (e, t) {
            return {
                left: e,
                top: t
            }
        },
        _pushPosition: function (e, t, n) {
            t = Math.round(t + this.offset.left), n = Math.round(n + this.offset.top);
            var r = this.getPositionStyles(t, n);
            this.styleQueue.push({
                $el: e,
                style: r
            }), this.options.itemPositionDataEnabled && e.data("isotope-item-position", {
                x: t,
                y: n
            })
        },
        layout: function (e, t) {
            var n = this.options.layoutMode;
            this["_" + n + "Layout"](e);
            if (this.options.resizesContainer) {
                var r = this["_" + n + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: r
                })
            }
            this._processStyleQueue(e, t), this.isLaidOut = !0
        },
        _processStyleQueue: function (e, n) {
            var r = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                s = this.options.animationOptions,
                o = this.options.onLayout,
                u, a, f, l;
            a = function (e, t) {
                t.$el[r](t.style, s)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) a = function (e, t) {
                u = t.$el.hasClass("no-transition") ? "css" : r, t.$el[u](t.style, s)
            };
            else if (n || o || s.complete) {
                var c = !1,
                    h = [n, o, s.complete],
                    p = this;
                f = !0, l = function () {
                    if (c) return;
                    var t;
                    for (var n = 0, r = h.length; n < r; n++) t = h[n], typeof t == "function" && t.call(p.element, e, p);
                    c = !0
                };
                if (this.isUsingJQueryAnimation && r === "animate") s.complete = l, f = !1;
                else if (i.csstransitions) {
                    var d = 0,
                        v = this.styleQueue[0],
                        y = v && v.$el,
                        b;
                    while (!y || !y.length) {
                        b = this.styleQueue[d++];
                        if (!b) return;
                        y = b.$el
                    }
                    var w = parseFloat(getComputedStyle(y[0])[g]);
                    w > 0 && (a = function (e, t) {
                        t.$el[r](t.style, s).one(m, l)
                    }, f = !1)
                }
            }
            t.each(this.styleQueue, a), f && l(), this.styleQueue = []
        },
        resize: function () {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function (e) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, e)
        },
        addItems: function (e, t) {
            var n = this._getAtoms(e);
            this.$allAtoms = this.$allAtoms.add(n), t && t(n)
        },
        insert: function (e, t) {
            this.element.append(e);
            var n = this;
            this.addItems(e, function (e) {
                var r = n._filter(e);
                n._addHideAppended(r), n._sort(), n.reLayout(), n._revealAppended(r, t)
            })
        },
        appended: function (e, t) {
            var n = this;
            this.addItems(e, function (e) {
                n._addHideAppended(e), n.layout(e), n._revealAppended(e, t)
            })
        },
        _addHideAppended: function (e) {
            this.$filteredAtoms = this.$filteredAtoms.add(e), e.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function (e, t) {
            var n = this;
            setTimeout(function () {
                e.removeClass("no-transition"), n.styleQueue.push({
                    $el: e,
                    style: n.options.visibleStyle
                }), n._isInserting = !1, n._processStyleQueue(e, t)
            }, 10)
        },
        reloadItems: function () {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function (e, t) {
            this.$allAtoms = this.$allAtoms.not(e), this.$filteredAtoms = this.$filteredAtoms.not(e);
            var n = this,
                r = function () {
                    e.remove(), t && t.call(n.element)
                };
            e.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: e,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(r)) : r()
        },
        shuffle: function (e) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(e)
        },
        destroy: function () {
            var e = this.usingTransforms,
                t = this.options;
            this.$allAtoms.removeClass(t.hiddenClass + " " + t.itemClass).each(function () {
                var t = this.style;
                t.position = "", t.top = "", t.left = "", t.opacity = "", e && (t[a] = "")
            });
            var n = this.element[0].style;
            for (var r in this.originalStyle) n[r] = this.originalStyle[r];
            this.element.unbind(".isotope").undelegate("." + t.hiddenClass, "click").removeClass(t.containerClass).removeData("isotope"), E.unbind(".isotope")
        },
        _getSegments: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rowHeight" : "columnWidth",
                r = e ? "height" : "width",
                i = e ? "rows" : "cols",
                o = this.element[r](),
                u, a = this.options[t] && this.options[t][n] || this.$filteredAtoms["outer" + s(r)](!0) || o;
            u = Math.floor(o / a), u = Math.max(u, 1), this[t][i] = u, this[t][n] = a
        },
        _checkIfSegmentsChanged: function (e) {
            var t = this.options.layoutMode,
                n = e ? "rows" : "cols",
                r = this[t][n];
            return this._getSegments(e), this[t][n] !== r
        },
        _masonryReset: function () {
            this.masonry = {}, this._getSegments();
            var e = this.masonry.cols;
            this.masonry.colYs = [];
            while (e--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function (e) {
            var n = this,
                r = n.masonry;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerWidth(!0) / r.columnWidth);
                i = Math.min(i, r.cols);
                if (i === 1) n._masonryPlaceBrick(e, r.colYs);
                else {
                    var s = r.cols + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.colYs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryPlaceBrick(e, o)
                }
            })
        },
        _masonryPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = this.masonry.columnWidth * r,
                u = n;
            this._pushPosition(e, o, u);
            var a = n + e.outerHeight(!0),
                f = this.masonry.cols + 1 - s;
            for (i = 0; i < f; i++) this.masonry.colYs[r + i] = a
        },
        _masonryGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: e
            }
        },
        _masonryResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function () {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function (e) {
            var n = this,
                r = this.element.width(),
                i = this.fitRows;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.x !== 0 && s + i.x > r && (i.x = 0, i.y = i.height), n._pushPosition(e, i.x, i.y), i.height = Math.max(i.y + o, i.height), i.x += s
            })
        },
        _fitRowsGetContainerSize: function () {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function () {
            return !0
        },
        _cellsByRowReset: function () {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function (e) {
            var n = this,
                r = this.cellsByRow;
            e.each(function () {
                var e = t(this),
                    i = r.index % r.cols,
                    s = Math.floor(r.index / r.cols),
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByRowGetContainerSize: function () {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function () {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function () {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, 0, n.straightDown.y), n.straightDown.y += r.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function () {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function () {
            return !0
        },
        _masonryHorizontalReset: function () {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var e = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (e--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function (e) {
            var n = this,
                r = n.masonryHorizontal;
            e.each(function () {
                var e = t(this),
                    i = Math.ceil(e.outerHeight(!0) / r.rowHeight);
                i = Math.min(i, r.rows);
                if (i === 1) n._masonryHorizontalPlaceBrick(e, r.rowXs);
                else {
                    var s = r.rows + 1 - i,
                        o = [],
                        u, a;
                    for (a = 0; a < s; a++) u = r.rowXs.slice(a, a + i), o[a] = Math.max.apply(Math, u);
                    n._masonryHorizontalPlaceBrick(e, o)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function (e, t) {
            var n = Math.min.apply(Math, t),
                r = 0;
            for (var i = 0, s = t.length; i < s; i++)
                if (t[i] === n) {
                    r = i;
                    break
                }
            var o = n,
                u = this.masonryHorizontal.rowHeight * r;
            this._pushPosition(e, o, u);
            var a = n + e.outerWidth(!0),
                f = this.masonryHorizontal.rows + 1 - s;
            for (i = 0; i < f; i++) this.masonryHorizontal.rowXs[r + i] = a
        },
        _masonryHorizontalGetContainerSize: function () {
            var e = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: e
            }
        },
        _masonryHorizontalResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function () {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function (e) {
            var n = this,
                r = this.element.height(),
                i = this.fitColumns;
            e.each(function () {
                var e = t(this),
                    s = e.outerWidth(!0),
                    o = e.outerHeight(!0);
                i.y !== 0 && o + i.y > r && (i.x = i.width, i.y = 0), n._pushPosition(e, i.x, i.y), i.width = Math.max(i.x + s, i.width), i.y += o
            })
        },
        _fitColumnsGetContainerSize: function () {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function () {
            return !0
        },
        _cellsByColumnReset: function () {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function (e) {
            var n = this,
                r = this.cellsByColumn;
            e.each(function () {
                var e = t(this),
                    i = Math.floor(r.index / r.rows),
                    s = r.index % r.rows,
                    o = (i + .5) * r.columnWidth - e.outerWidth(!0) / 2,
                    u = (s + .5) * r.rowHeight - e.outerHeight(!0) / 2;
                n._pushPosition(e, o, u), r.index++
            })
        },
        _cellsByColumnGetContainerSize: function () {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function () {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function () {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function (e) {
            var n = this;
            e.each(function (e) {
                var r = t(this);
                n._pushPosition(r, n.straightAcross.x, 0), n.straightAcross.x += r.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function () {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function () {
            return !0
        }
    }, t.fn.imagesLoaded = function (e) {
        function n() {
            e.call(i, s)
        }

        function r(e) {
            var i = e.target;
            i.src !== u && t.inArray(i, a) === -1 && (a.push(i), --o <= 0 && (setTimeout(n), s.unbind(".imagesLoaded", r)))
        }
        var i = this,
            s = i.find("img").add(i.filter("img")),
            o = s.length,
            u = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            a = [];
        return o || n(), s.bind("load.imagesLoaded error.imagesLoaded", r).each(function () {
            var e = this.src;
            this.src = u, this.src = e
        }), i
    };
    var S = function (t) {
        e.console && e.console.error(t)
    };
    t.fn.isotope = function (e, n) {
        if (typeof e == "string") {
            var r = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var n = t.data(this, "isotope");
                if (!n) {
                    S("cannot call methods on isotope prior to initialization; attempted to call method '" + e + "'");
                    return
                }
                if (!t.isFunction(n[e]) || e.charAt(0) === "_") {
                    S("no such method '" + e + "' for isotope instance");
                    return
                }
                n[e].apply(n, r)
            })
        } else this.each(function () {
            var r = t.data(this, "isotope");
            r ? (r.option(e), r._init(n)) : t.data(this, "isotope", new t.Isotope(e, this, n))
        });
        return this
    }
}(window, jQuery),
function (e, t, n) {
    "use strict";
    e.fn.backstretch = function (r, s) {
        return (r === n || r.length === 0) && e.error("No images were supplied for Backstretch"), e(t).scrollTop() === 0 && t.scrollTo(0, 0), this.each(function () {
            var t = e(this),
                n = t.data("backstretch");
            n && (s = e.extend(n.options, s), n.destroy(!0)), n = new i(this, r, s), t.data("backstretch", n)
        })
    }, e.backstretch = function (t, n) {
        return e("body").backstretch(t, n).data("backstretch")
    }, e.expr[":"].backstretch = function (t) {
        return e(t).data("backstretch") !== n
    }, e.fn.backstretch.defaults = {
        centeredX: !0,
        centeredY: !0,
        duration: 5e3,
        fade: 0,
        showControls: !1
    };
    var r = {
        wrap: {
            left: 0,
            top: 0,
            overflow: "hidden",
            margin: 0,
            padding: 0,
            height: "100%",
            width: "100%",
            zIndex: -999999
        },
        img: {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxHeight: "none",
            maxWidth: "none",
            zIndex: -999999
        },
        video: {
            position: "absolute",
            display: "none",
            margin: 0,
            padding: 0,
            border: "none",
            width: "auto",
            height: "auto",
            maxHeight: "none",
            maxWidth: "none",
            backgroundColor: "#000",
            zIndex: -999999,
            overflow: "hidden"
        }
    }, i = function (n, i, o) {
            this.options = e.extend({}, e.fn.backstretch.defaults, o || {}), this.images = e.isArray(i) ? i : [i], e.each(this.images, function () {
                if (e.cat.string.startsWith(this, "video")) {
                    var t = this.split(",");
                    e("<img />")[0].src = t[3]
                } else if (e.cat.string.startsWith(this, "embed_video")) {
                    var n = this.split(",");
                    e("<img />")[0].src = n[1]
                } else e("<img />")[0].src = this
            }), this.isBody = n === document.body, this.$container = e(n), this.$wrap = e('<div class="backstretch"></div>').css(r.wrap).appendTo(this.$container), this.$root = this.isBody ? s ? e(t) : e(document) : this.$container;
            if (!this.isBody) {
                var u = this.$container.css("position"),
                    a = this.$container.css("zIndex");
                this.$container.css({
                    position: u === "static" ? "relative" : u,
                    zIndex: a === "auto" ? 0 : a,
                    background: "none"
                }), this.$wrap.css({
                    zIndex: -999998
                })
            }
            this.$wrap.css({
                position: this.isBody && s ? "fixed" : "absolute"
            }), this.index = 0, this.show(this.index), e(t).on("resize.backstretch", e.proxy(this.resize, this)).on("orientationchange.backstretch", e.proxy(function () {
                this.isBody && t.pageYOffset === 0 && (t.scrollTo(0, 1), this.resize())
            }, this))
        };
    i.prototype = {
        resize: function () {
            try {
                var n = {
                    left: 0,
                    top: 0
                }, r = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                    i = r,
                    s = this.isBody ? t.innerHeight ? t.innerHeight : this.$root.height() : this.$root.innerHeight(),
                    o = i / this.$img.data("ratio"),
                    u;
                o >= s ? (u = (o - s) / 2, this.options.centeredY && (n.top = "-" + u + "px")) : (o = s, i = o * this.$img.data("ratio"), u = (i - r) / 2, this.options.centeredX && (n.left = "-" + u + "px"));
                if (e.cat.string.startsWith(this.images[this.index], "video")) {
                    var a = this.$wrap.css({
                        width: r,
                        height: s
                    }).find(".slide:not(.deleteable)");
                    a.css({
                        width: i,
                        height: o
                    }).css(n)
                } else this.$wrap.css({
                    width: r,
                    height: s
                }).find(".slide:not(.deleteable)").css({
                    width: i,
                    height: o
                }).css(n)
            } catch (f) {}
            return this
        },
        show: function (t) {
            if (Math.abs(t) > this.images.length - 1) return;
            this.index = t;
            var n = this,
                i = n.$wrap.find(".slide").addClass("deleteable"),
                s = e.Event("backstretch.show", {
                    relatedTarget: n.$container[0]
                });
            clearInterval(n.interval);
            if (e.cat.string.startsWith(n.images[t], "video")) {
                var o = n.images[t].split(","),
                    u = o[1],
                    a = o[2],
                    f = o[3],
                    l = o[4],
                    c = o[5],
                    h = o[6],
                    p = [];
                p.push('<video class="slide" ' + (this.options.showControls ? "controls" : "") + " autoplay loop >"), p.push('<source src="' + l + '" type="video/mp4" />'), p.push('<source src="' + h + '" type="video/webm" />'), p.push('<source src="' + c + '" type="video/ogg" />'), p.push('<object type="application/x-shockwave-flash" data="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf">'), p.push('<param name="movie" value="http://releases.flowplayer.org/swf/flowplayer-3.2.1.swf" />'), p.push('<param name="allowFullScreen" value="true" />'), p.push('<param name="wmode" value="transparent" />'), p.push("<param name=\"flashVars\" value=\"config={'playlist':['" + f + "',{'url':'" + l + "','autoPlay':true}]}\" />"), p.push('<img src="' + f + '" />'), p.push("</object>"), p.push("</video>"), n.$img = e(p.join("")).css(r.video), n.$img.data("ratio", u / a), n.$img.data("width", u), n.$img.data("height", a), n.$img.appendTo(n.$wrap), n.resize(), n.$img.fadeIn(n.options.speed || n.options.fade, function () {
                    i.fadeOut(n.options.speed, function () {
                        i.remove()
                    }), n.paused || n.cycle(), n.$container.trigger(s, n)
                }), e(".video-play-button").fadeOut()
            } else {
                n.$img = e('<img class="slide" />').css(r.img).bind("load", function (t) {
                    var r = this.width || e(t.target).width(),
                        o = this.height || e(t.target).height();
                    e(this).data("ratio", r / o), e(this).fadeIn(n.options.speed || n.options.fade, function () {
                        i.fadeOut(n.options.speed, function () {
                            i.remove()
                        }), n.paused || n.cycle(), n.$container.trigger(s, n)
                    }), n.resize()
                }).appendTo(n.$wrap);
                if (e.cat.string.startsWith(n.images[t], "video")) {
                    var o = n.images[t].split(","),
                        d = o[3];
                    n.$img.attr("src", d), e(".video-play-button").fadeOut()
                } else if (e.cat.string.startsWith(n.images[t], "embed_video")) {
                    var v = n.images[t].split(","),
                        m = v[1],
                        g = v[2],
                        y = v[3],
                        b = v[4];
                    n.$img.attr("src", m), n.$img.data("video_id", g), n.$img.data("video_width", y), n.$img.data("video_height", b), e(".video-play-button").fadeIn()
                } else n.$img.attr("src", n.images[t]), e(".video-play-button").fadeOut()
            }
            return n
        },
        next: function () {
            return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
        },
        prev: function () {
            return this.show(this.index === 0 ? this.images.length - 1 : this.index - 1)
        },
        pause: function () {
            return this.paused = !0, this
        },
        resume: function () {
            return this.paused = !1, this.next(), this
        },
        cycle: function () {
            return this.images.length > 1 && (clearInterval(this.interval), this.interval = setInterval(e.proxy(function () {
                this.paused || this.next()
            }, this), this.options.duration)), this
        },
        destroy: function (n) {
            e(t).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), n || this.$wrap.remove(), this.$container.removeData("backstretch")
        }
    };
    var s = function () {
        var e = navigator.userAgent,
            n = navigator.platform,
            r = e.match(/AppleWebKit\/([0-9]+)/),
            i = !! r && r[1],
            s = e.match(/Fennec\/([0-9]+)/),
            o = !! s && s[1],
            u = e.match(/Opera Mobi\/([0-9]+)/),
            a = !! u && u[1],
            f = e.match(/MSIE ([0-9]+)/),
            l = !! f && f[1];
        return !((n.indexOf("iPhone") > -1 || n.indexOf("iPad") > -1 || n.indexOf("iPod") > -1) && i && i < 534 || t.operamini && {}.toString.call(t.operamini) === "[object OperaMini]" || u && a < 7458 || e.indexOf("Android") > -1 && i && i < 533 || o && o < 6 || "palmGetResource" in t && i && i < 534 || e.indexOf("MeeGo") > -1 && e.indexOf("NokiaBrowser/8.5.0") > -1 || l && l <= 6)
    }()
}(jQuery, window),
function (e) {
    e.fn.inputPlaceholder = function () {
        return this.each(function () {
            e(this).find("input[data-placeholder]").each(function () {
                var t = e(this),
                    n = e("<div><span>" + t.attr("data-placeholder") + "</span></div>");
                n.css("position", "relative");
                var r = n.find("span");
                r.css({
                    position: "absolute",
                    left: t.css("padding-left"),
                    top: t.css("padding-top"),
                    "font-size": t.css("font-size"),
                    "font-family": t.css("font-family"),
                    "user-select": "none",
                    "-moz-user-select": "none",
                    "-webkit-user-select": "none"
                }), t.val().length > 0 && n.find("span").hide(), t.after(n), t.appendTo(n), r.addClass("placeholder"), r.click(function () {
                    t.focus()
                });
                var i = t.val();
                setInterval(function () {
                    t.val() != i && (t.val().length == 0 ? (e(this).val(""), n.find("span").show()) : n.find("span").hide(), i = t.val())
                }, 50)
            })
        })
    }
}(jQuery),
function (d, w, o, k, V) {
    function C(e, t, r, i) {
        var s = Q(),
            o = l().a,
            u = r && l(r),
            r = u ? u.a : o;
        i && s[o] && delete s[o], (!n || $) && I && e && (s[r] = e, Q(s), e = k), W && X ? i ? X.call(p, e, t, r) : W.call(p, e, t, r) : u && u.d != l().d && (R = 1, i ? f.replace("#" + u.e) : f.hash = u.e)
    }

    function J(e, t, n) {
        var i = 2 === e ? d.onhashchange : d.onpopstate,
            s = 2 === e ? "hashchange" : "popstate",
            u = x[s];
        r.createEvent ? (e = r.createEvent("Events"), e.initEvent(s, o, o)) : (e = r.createEventObject(), e.type = s), e.state = p.state, e.oldURL = t, e.newURL = n, i && i.call(d, e), t = 0;
        for (n = u.length; t < n; t++) u[t].call(d, e)
    }

    function Q(e) {
        return I ? e ? I.setItem("__hitoryapi__", K(e)) : S(I.getItem("__hitoryapi__")) || {} : {}
    }

    function T(e, t, n) {
        var r = e,
            i, s = o;
        if (D || E) {
            for (i in t)
                if (F.call(t, i))
                    if (E) t[i].get && E.call(e, i, t[i].get), t[i].set && aa.call(e, i, t[i].set);
                    else if (D) try {
                D(e, i, t[i])
            } catch (u) {
                if (n) return o;
                s = w;
                break
            }
        } else s = w; if (s && y) {
            n = "StaticClass" + ba + y++, r = ["Class " + n], "execVB" in d || execScript("Function execVB(c) ExecuteGlobal(c) End Function", "VBScript"), "VBCVal" in d || execScript("Function VBCVal(o,r) If IsObject(o) Then Set r=o Else r=o End If End Function", "VBScript");
            for (i in e) r[r.length] = "Public [" + i + "]";
            F.call(e, "toString") && (e.propertyIsEnumerable("toString") || (r[r.length] = "Public [toString]"), t["(toString)"] = {
                get: function () {
                    return this.toString.call(this)
                }
            });
            for (i in t) F.call(t, i) && (t[i].get && (e["get " + i] = t[i].get, r.push("Public [get " + i + "]", "Public " + ("(toString)" === i ? "Default " : "") + "Property Get [" + i + "]", "Call VBCVal(me.[get " + i + "].call(me),[" + i + "])", "End Property")), t[i].set) && (e["set " + i] = t[i].set, r.push("Public [set " + i + "]", "Public Property Let [" + i + "](v)", "Call me.[set " + i + "].call(me,v)", "End Property", "Public Property Set [" + i + "](v)", "Call me.[set " + i + "].call(me,v)", "End Property"));
            r.push("End Class", "Function " + n + "Factory()", "Set " + n + "Factory=New " + n, "End Function"), execVB(r.join("\n")), r = d[n + "Factory"]();
            for (i in e) r[i] = e[i];
            F.call(e, "toString") && (r.toString = e.toString)
        }
        return r
    }
    var r = d.document,
        L = r.documentElement,
        s = d.history || {}, f = d.location,
        n = !! s.pushState,
        $ = n && s.state === V,
        u = f.href,
        v = d.JSON || {}, D = Object.defineProperty,
        E = Object.prototype.__defineGetter__,
        aa = Object.prototype.__defineSetter__,
        W = s.pushState,
        X = s.replaceState,
        I = d.sessionStorage,
        F = Object.prototype.hasOwnProperty,
        ca = Object.prototype.toString,
        M = +((d.eval && eval("/*@cc_on 1;@*/") && /msie (\d+)/i.exec(navigator.userAgent) || [])[1] || 0),
        ba = (new Date).getTime(),
        y = (D || E) && (!M || 8 < M) ? 0 : 1,
        j = 8 > M ? r.createElement("iframe") : o,
        z, G, H, A = "",
        B = (z = "addEventListener", d[z]) || (z = "attachEvent", A = "on", d[z]),
        da = (G = "removeEventListener", d[G]) || (G = "detachEvent", d[G]),
        ea = (H = "dispatchEvent", d[H]) || (H = "fireEvent", d[H]),
        N = [],
        Y = [],
        R = 0,
        x = {
            onpopstate: N,
            popstate: N,
            onhashchange: Y,
            hashchange: Y
        }, q = function () {
            var e, t, n, i = {
                    basepath: "/",
                    redirect: 0,
                    type: "/"
                };
            n = r.getElementsByTagName("SCRIPT");
            for (e = 0; n[e]; e++)
                if (t = /(.*)\/(?:history|spike)(?:\.iegte8)?(?:-\d\.\d(?:\.\d)?\w?)?(?:\.min)?.js\?(.*)$/i.exec(n[e].src) || e === n.length - 1 && 2 === (t = n[e].src.split("?")).length && (t[2] = t[1]) && t) {
                    e = 0;
                    for (n = t[2].split("&"); n[e];) t = n[e++].split("="), i[t[0]] = "true" == t[1] ? w : "false" == t[1] ? o : t[1] || "";
                    i.basepath = i.basepath || "/";
                    break
                }
            return i
        }(),
        l = function (e) {
            var t, r, i, s, o, u, a;
            return function (p, v) {
                var m = RegExp("^" + q.basepath, "i");
                if (p) {
                    if (!n || M) var y = l(),
                    w = y.f, E = y.i, p = /^(?:[\w0-9]+\:)?\/\//.test(p) ? 0 === p.indexOf("/") ? E + p : p : E + "//" + y.h + (0 === p.indexOf("/") ? p : 0 === p.indexOf("?") ? w + p : 0 === p.indexOf("#") ? w + y.g + p : w.replace(/[^\/]+$/g, "") + p)
                } else if (p = f.href, !n || v) p = f.protocol + "//" + f.host + q.basepath + (p.replace(/^[^#]*/, "") || "#").replace(RegExp("^#[/]?(?:" + q.type + ")?"), "");
                if (t !== p) {
                    e.href = t = p, u = e.port, o = e.host, a = e.pathname;
                    if ("http:" === e.protocol && 80 == u || "https:" === e.protocol && 443 == u) o = e.hostname, u = "";
                    a = 0 === a.indexOf("/") ? a : "/" + a, r = a + e.search + e.hash, s = a.replace(m, q.type) + e.search, i = s + e.hash
                }
                return {
                    a: e.protocol + "//" + o + r,
                    i: e.protocol,
                    h: o,
                    j: e.hostname || f.hostname,
                    k: u || f.port,
                    f: a,
                    g: e.search,
                    b: e.hash,
                    d: r,
                    c: s,
                    e: i
                }
            }
        }(r.createElement("a")),
        p = y ? {
            back: s.back,
            forward: s.forward,
            go: s.go,
            pushState: k,
            replaceState: k,
            emulate: !n,
            toString: function () {
                return "[object History]"
            }
        } : s,
        P = {
            state: {
                get: function () {
                    return j && j.storage || Q()[p.location.href] || k
                }
            },
            length: {
                get: function () {
                    return s.length
                }
            },
            location: {
                set: function (e) {
                    d.location = e
                },
                get: function () {
                    return n ? f : U
                }
            }
        }, U = {
            assign: function (e) {
                f.assign(n || 0 !== e.indexOf("#") ? e : "#" + l().c + e)
            },
            reload: f.reload,
            replace: function (e) {
                f.replace(n || 0 !== e.indexOf("#") ? e : "#" + l().c + e)
            },
            toString: function () {
                return this.href
            }
        }, ha = {
            href: {
                set: function (e) {
                    f.href = e
                },
                get: function () {
                    return l().a
                }
            },
            protocol: {
                set: function (e) {
                    f.protocol = e
                },
                get: function () {
                    return f.protocol
                }
            },
            host: {
                set: function (e) {
                    f.host = e
                },
                get: function () {
                    return f.host
                }
            },
            hostname: {
                set: function (e) {
                    f.hostname = e
                },
                get: function () {
                    return f.hostname
                }
            },
            port: {
                set: function (e) {
                    f.port = e
                },
                get: function () {
                    return f.port
                }
            },
            pathname: {
                set: function (e) {
                    f.pathname = e
                },
                get: function () {
                    return l().f
                }
            },
            search: {
                set: function (e) {
                    f.search = e
                },
                get: function () {
                    return l().g
                }
            },
            hash: {
                set: function (e) {
                    var e = 0 === e.indexOf("#") ? e : "#" + e,
                        t = l();
                    j ? e != t.b && (p.pushState(k, k, t.c + e), Z({
                        oldURL: t.a
                    })) : f.hash = "#" + t.c + e
                },
                get: function () {
                    return l().b
                }
            }
        }, K = v.stringify || function (e) {
            function t(r) {
                var i, s, o;
                i = (typeof r).charCodeAt(2);
                if (114 === i) r = n(r);
                else if (109 === i) r = isFinite(r) ? "" + r : "null";
                else if (111 === i || 108 === i) r = "" + r;
                else if (106 === i)
                    if (r) {
                        s = (i = "[object Array]" === ca.apply(r)) ? "[" : "{";
                        if (i)
                            for (o = 0; o < r.length; o++) s += (0 == o ? "" : ",") + t(r[o]);
                        else
                            for (o in r) F.call(r, o) && r[o] !== e && (s += (1 == s.length ? "" : ",") + n(o) + ":" + t(r[o]));
                        r = s + (i ? "]" : "}")
                    } else r = "null";
                    else r = e;
                return r
            }

            function n(e) {
                var t = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    n = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    };
                return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function (e) {
                    var t = n[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
            }
            return t
        }(),
        S = function () {
            var e = v.parse;
            return function (t) {
                return t ? e ? e(t) : (new Function("return " + t))() : k
            }
        }(),
        Z = function () {
            function e(e) {
                var t = l();
                if (R) return m = t.a, R = 0;
                var n = e.oldURL || m,
                    e = m = e.newURL || t.a,
                    t = n.replace(/^.*?(#|$)/, ""),
                    r = e.replace(/^.*?(#|$)/, "");
                n != e && !c && J(), u = c = 0, t != r && J(2, n, e)
            }

            function t() {
                u && !(u = 0) && v.d !== q.basepath && (clearInterval(h), setTimeout(J, 10))
            }
            var i = d.onpopstate || k,
                a = d.onhashchange || k,
                c = 0,
                h = k,
                v = l(),
                m = v.a;
            return v.b.replace(/^#/, ""), B(A + "hashchange", e, o), B(A + "popstate", function () {
                if (u === f.href) return u = 0;
                u = 0, J(c = 1)
            }, o), p.redirect = function (e, t) {
                q.type = e == k ? q.type : e, q.basepath = t == k ? q.basepath : t;
                if (d.top == d.self) {
                    var r = l(k, w).d,
                        i = f.search,
                        s = f.pathname,
                        t = q.basepath;
                    n ? (r != t && RegExp("^" + t + "$", "i").test(s) && (f.href = r), RegExp("^" + t + "$", "i").test(s + "/")) ? f.href = t : RegExp("^" + t, "i").test(s) || (f.href = s.replace(/^\//, t) + i) : s != t && (f.href = t + "#" + s.replace(RegExp("^" + t, "i"), q.type) + i + f.hash)
                }
            }, p = T(p, y ? P : s.state === V ? {
                state: P.state,
                location: P.location
            } : {
                location: P.location
            }), U = T(U, ha), d[z] = function (e, r, i) {
                x[e] ? (x[e].push(r), !n && N === x[e] && t()) : 3 < arguments.length ? B(e, r, i, arguments[3]) : B(e, r, i)
            }, d[G] = function (e, t, n) {
                var r = x[e];
                if (r) {
                    for (e = r.length; --e;)
                        if (r[e] === t) {
                            r.splice(e, 1);
                            break
                        }
                } else da(e, t, n)
            }, d[H] = function (e, t) {
                var n = x[e],
                    r = n === N ? d.onpopstate : d.onhashchange;
                if (n) {
                    t = t || ("string" == typeof e ? d.event : e);
                    try {
                        t && (t.target = d)
                    } catch (i) {
                        try {
                            t.srcElement = d
                        } catch (s) {}
                    }
                    r && r.call(d, t);
                    for (var r = 0, o = n.length; r < o; r++) n[r].call(d, t);
                    return w
                }
                return ea(e, t)
            }, y && execScript("Public history, onhashchange", "VBScript"), (!D && !E || !T(d, {
                onhashchange: {
                    get: function () {
                        return a
                    },
                    set: function (e) {
                        a = e || k
                    }
                },
                onpopstate: {
                    get: function () {
                        return i
                    },
                    set: function (e) {
                        (i = e || k) && !n && t()
                    }
                }
            }, 1)) && !n && (h = setInterval(function () {
                d.onpopstate && t()
            }, 100)), q.redirect && p.redirect(), n ? B(A + "load", function () {
                setTimeout(function () {
                    u = 0
                }, 0)
            }, o) : r[z](A + "click", function (e) {
                var t = e || d.event,
                    n = t.target || t.srcElement,
                    e = "defaultPrevented" in t ? t.defaultPrevented : t.returnValue === o;
                n && "A" === n.nodeName && !e && (e = l(n.getAttribute("href", 2), w), e.b && "#" !== e.b && e.b === e.a.replace(l().a.split("#").shift(), "")) && (history.location.hash = e.b, e = e.b.replace(/^#/, ""), (n = r.getElementById(e)) && n.id === e && "A" === n.nodeName && (n = n.getBoundingClientRect(), d.scrollTo(L.scrollLeft || 0, n.top + (L.scrollTop || 0) - (L.clientTop || 0))), t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            }, o), e
        }();
    p.replaceState = function (e, t, n) {
        C(e, t, n, 1)
    }, y ? (d.history = p, function (e, t) {
        if (j) {
            var n, i = function () {
                    var e = l().a;
                    t != e && Z({
                        oldURL: t,
                        newURL: t = e
                    })
                };
            n = setInterval(i, 100), j.src = "javascript:true;", j = L.firstChild.appendChild(j).contentWindow, C = function (e, r, s, o, u) {
                var a = j.document,
                    c = ["<script>", "lfirst=1;", , "storage=" + K(e) + ";", "</script>"];
                if (s = s && l(s)) {
                    u || clearInterval(n);
                    if (o) j.lfirst ? (history.back(), C(e, r, s.a, 0, 1)) : (j.storage = e, f.replace("#" + s.e));
                    else if (s.a != t || u) j.lfirst || (j.lfirst = 1, C(j.storage, r, t, 0, 1)), c[2] = 'parent.location.hash="' + s.e.replace(/"/g, '\\"') + '";', a.open(), a.write(c.join("")), a.close();
                    u || (t = l().a, n = setInterval(i, 100))
                } else j.storage = e
            }, B(A + "unload", function () {
                if (j.storage) {
                    var e = {};
                    e[l().a] = j.storage, r.cookie = "_historyAPI=" + escape(K(e))
                }
                clearInterval(n)
            }, o);
            if (1 < e.length) {
                e = unescape(e.pop().split(";").shift());
                try {
                    j.storage = S(e)[l().a]
                } catch (s) {}
            }!v.parse && !v.stringify && (v.parse = S, v.stringify = K, d.JSON = v)
        }
    }(r.cookie.split("_historyAPI="), l().a)) : d.history.emulate = !n, p.pushState = C
}(window, !0, !1, null), jQuery.core = function () {}, jQuery.core.prevWindowWidth = 0, jQuery.core.onWindowResize = function () {
    var e = !1,
        t = $(window).width();
    $.core.prevWindowWidth < 900 && t > 900 ? e = !0 : $.core.prevWindowWidth > 900 && t < 900 && (e = !0), $.core.prevWindowWidth < 600 && t > 600 ? e = !0 : $.core.prevWindowWidth > 600 && t < 600 && (e = !0), $.core.prevWindowWidth = t, e && $(".grid").isotope("reLayout"), $.core.handleFullWindow(), $.core.handleFullScreen()
}, jQuery.core.handleFullScreen = function () {
    $(".fullscreen").each(function () {
        $(this).width($(window).width()), $(this).hide(), $(this).height($(document).height()), $(this).show()
    })
}, jQuery.core.handleFullWindow = function () {
    $(".fullwindow").each(function () {
        $(this).width($(window).width()), $(this).height($(window).height())
    })
}, jQuery.core.toggleGridItem = function (e) {
    e = $(e);
    var t = $(e.parent().find(".grid-item-inner")[0]);
    t.css("display") != "none" ? (e.removeClass("selected"), t.slideUp("slow", function () {
        $(".grid").isotope("reLayout")
    })) : (e.addClass("selected"), t.show(), $(".grid").isotope("reLayout"), t.hide(), t.slideDown("slow", function () {
        $(".grid").isotope("reLayout")
    }))
}, $(document).ready(function () {
    $.cat.dom.preloadImage("/assets/button_close_hl.png"), $.cat.dom.preloadImage("/assets/button_close_hl@2x.png"), $.cat.dom.preloadImage("/assets/button_close.png"), $.cat.dom.preloadImage("/assets/button_close@2x.png"), $.cat.dom.preloadImage("/assets/button_clients_expand.png"), $.cat.dom.preloadImage("/assets/button_clients_expand@2x.png"), $.cat.dom.preloadImage("/assets/button_clients_expand_hl.png"), $.cat.dom.preloadImage("/assets/button_clients_expand_hl@2x.png"), $.cat.dom.preloadImage("/assets/button_clients_collapse.png"), $.cat.dom.preloadImage("/assets/button_clients_collapse@2x.png"), $.cat.dom.preloadImage("/assets/button_clients_collapse_hl.png"), $.cat.dom.preloadImage("/assets/button_clients_collapse_hl@2x.png"), $.cat.dom.preloadImage("/assets/button_news_link.png"), $.cat.dom.preloadImage("/assets/button_news_link@2x.png"), $.cat.dom.preloadImage("/assets/button_news_link_hl.png"), $.cat.dom.preloadImage("/assets/button_news_link_hl@2x.png"), $.cat.dom.preloadImage("/assets/button_work_next.png"), $.cat.dom.preloadImage("/assets/button_work_next@2x.png"), $.cat.dom.preloadImage("/assets/button_work_next_hl.png"), $.cat.dom.preloadImage("/assets/button_work_next_hl@2x.png"), $.cat.dom.preloadImage("/assets/button_work_previous.png"), $.cat.dom.preloadImage("/assets/button_work_previous@2x.png"), $.cat.dom.preloadImage("/assets/button_work_previous_hl.png"), $.cat.dom.preloadImage("/assets/button_work_previous_hl@2x.png"), $.cat.dom.preloadImage("/assets/loading_indicator@2x.gif"), $("a").hover(function () {
        $(this).animate({
            color: "#FFDD17"
        })
    }, function () {
        $(this).animate({
            color: "#FFF"
        })
    }), $(".html-editor a").hover(function () {
        $(this).animate({
            color: "#FFF"
        })
    }, function () {
        $(this).animate({
            color: "#FFDD17"
        })
    }), $(".grid").isotope({
        itemSelector: ".grid-item"
    }), $.core.handleFullWindow(), $.core.handleFullScreen(), $(this).inputPlaceholder(), $(".rollover-image").cat().ui().rolloverImage("rolloversrc", "_hl"), $(".rollover-fade").hover(function () {
        $(this).stop().animate({
            opacity: .5
        })
    }, function () {
        $(this).stop().animate({
            opacity: 1
        })
    }), $(window).resize(function () {
        $.core.onWindowResize()
    }), $.core.onWindowResize(), $(".grid-item").hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    })
});