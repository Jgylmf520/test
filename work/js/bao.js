!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.echarts = e() : t.echarts = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n])return i[n].exports;
            var o = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        t.exports = i(2), i(96), i(90), i(101), i(176), i(303), i(292), i(313), i(267), i(263), i(259), i(299), i(308), i(245), i(250), i(256), i(288), i(280), i(189), i(35), i(190), i(213), i(336), i(333), i(231), i(340), i(326), i(204), i(179), i(351), i(197), i(196), i(195), i(341), i(205), i(221)
    }, function (t, e) {
        function i(t) {
            if (null == t || "object" != typeof t)return t;
            var e = t, n = k.call(t);
            if ("[object Array]" === n) {
                e = [];
                for (var o = 0, r = t.length; o < r; o++)e[o] = i(t[o])
            } else if (P[n])e = t.constructor.from(t); else if (!D[n] && !T(t)) {
                e = {};
                for (var a in t)t.hasOwnProperty(a) && (e[a] = i(t[a]))
            }
            return e
        }

        function n(t, e, o) {
            if (!S(e) || !S(t))return o ? i(e) : t;
            for (var r in e)if (e.hasOwnProperty(r)) {
                var a = t[r], s = e[r];
                !S(s) || !S(a) || _(s) || _(a) || T(s) || T(a) || M(s) || M(a) ? !o && r in t || (t[r] = i(e[r], !0)) : n(a, s, o)
            }
            return t
        }

        function o(t, e) {
            for (var i = t[0], o = 1, r = t.length; o < r; o++)i = n(i, t[o], e);
            return i
        }

        function r(t, e) {
            for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function a(t, e, i) {
            for (var n in e)e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function s() {
            return document.createElement("canvas")
        }

        function l() {
            return C || (C = B.createCanvas().getContext("2d")), C
        }

        function u(t, e) {
            if (t) {
                if (t.indexOf)return t.indexOf(e);
                for (var i = 0, n = t.length; i < n; i++)if (t[i] === e)return i
            }
            return -1
        }

        function h(t, e) {
            function i() {
            }

            var n = t.prototype;
            i.prototype = e.prototype, t.prototype = new i;
            for (var o in n)t.prototype[o] = n[o];
            t.prototype.constructor = t, t.superClass = e
        }

        function c(t, e, i) {
            t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, a(t, e, i)
        }

        function d(t) {
            if (t)return "string" != typeof t && "number" == typeof t.length
        }

        function f(t, e, i) {
            if (t && e)if (t.forEach && t.forEach === z)t.forEach(e, i); else if (t.length === +t.length)for (var n = 0, o = t.length; n < o; n++)e.call(i, t[n], n, t); else for (var r in t)t.hasOwnProperty(r) && e.call(i, t[r], r, t)
        }

        function p(t, e, i) {
            if (t && e) {
                if (t.map && t.map === V)return t.map(e, i);
                for (var n = [], o = 0, r = t.length; o < r; o++)n.push(e.call(i, t[o], o, t));
                return n
            }
        }

        function g(t, e, i, n) {
            if (t && e) {
                if (t.reduce && t.reduce === N)return t.reduce(e, i, n);
                for (var o = 0, r = t.length; o < r; o++)i = e.call(n, i, t[o], o, t);
                return i
            }
        }

        function m(t, e, i) {
            if (t && e) {
                if (t.filter && t.filter === E)return t.filter(e, i);
                for (var n = [], o = 0, r = t.length; o < r; o++)e.call(i, t[o], o, t) && n.push(t[o]);
                return n
            }
        }

        function v(t, e, i) {
            if (t && e)for (var n = 0, o = t.length; n < o; n++)if (e.call(i, t[n], n, t))return t[n]
        }

        function y(t, e) {
            var i = R.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(R.call(arguments)))
            }
        }

        function x(t) {
            var e = R.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(R.call(arguments)))
            }
        }

        function _(t) {
            return "[object Array]" === k.call(t)
        }

        function b(t) {
            return "function" == typeof t
        }

        function w(t) {
            return "[object String]" === k.call(t)
        }

        function S(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" == e
        }

        function M(t) {
            return !!D[k.call(t)]
        }

        function T(t) {
            return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
        }

        function I(t) {
            for (var e = 0, i = arguments.length; e < i; e++)if (null != arguments[e])return arguments[e]
        }

        function A() {
            return Function.call.apply(R, arguments)
        }

        function L(t, e) {
            if (!t)throw new Error(e)
        }

        var C, D = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        }, P = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        }, k = Object.prototype.toString, O = Array.prototype, z = O.forEach, E = O.filter, R = O.slice, V = O.map, N = O.reduce, B = {
            inherits: h,
            mixin: c,
            clone: i,
            merge: n,
            mergeAll: o,
            extend: r,
            defaults: a,
            getContext: l,
            createCanvas: s,
            indexOf: u,
            slice: A,
            find: v,
            isArrayLike: d,
            each: f,
            map: p,
            reduce: g,
            filter: m,
            bind: y,
            curry: x,
            isArray: _,
            isString: w,
            isObject: S,
            isFunction: b,
            isBuildInObject: M,
            isDom: T,
            retrieve: I,
            assert: L,
            noop: function () {
            }
        };
        t.exports = B
    }, function (t, e, i) {
        function n(t) {
            return function (e, i, n) {
                e = e && e.toLowerCase(), R.prototype[t].call(this, e, i, n)
            }
        }

        function o() {
            R.call(this)
        }

        function r(t, e, i) {
            function n(t, e) {
                return t.prio - e.prio
            }

            i = i || {}, "string" == typeof e && (e = nt[e]), this.id, this.group, this._dom = t;
            var r = this._zr = O.init(t, {
                renderer: i.renderer || "canvas",
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height
            });
            this._throttledZrFlush = k.throttle(z.bind(r.flush, r), 17), this._theme = z.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new S(this), this._coordSysMgr = new M, R.call(this), this._messageCenter = new o, this._initEvents(), this.resize = z.bind(this.resize, this), this._pendingActions = [], V(it, n), V(tt, n), r.animation.on("frame", this._onframe, this)
        }

        function a(t, e, i) {
            var n, o = this._model, r = this._coordSysMgr.getCoordinateSystems();
            e = P.parseFinder(o, e);
            for (var a = 0; a < r.length; a++) {
                var s = r[a];
                if (s[t] && null != (n = s[t](o, e, i)))return n
            }
        }

        function s(t, e) {
            var i = this._model;
            i && i.eachComponent({mainType: "series", query: e}, function (n, o) {
                var r = this._chartsMap[n.__viewId];
                r && r.__alive && r[t](n, i, this._api, e)
            }, this)
        }

        function l(t, e) {
            var i = K[t.type], n = i.actionInfo, o = n.update || "update";
            this[j] = !0;
            var r = [t], a = !1;
            t.batch && (a = !0, r = z.map(t.batch, function (e) {
                return e = z.defaults(z.extend({}, e), t), e.batch = null, e
            }));
            for (var s, l = [], u = "highlight" === t.type || "downplay" === t.type, h = 0; h < r.length; h++) {
                var c = r[h];
                s = i.action(c, this._model), s = s || z.extend({}, c), s.type = n.event || s.type, l.push(s), u && $[o].call(this, c)
            }
            "none" === o || u || (this[X] ? ($.prepareAndUpdate.call(this, t), this[X] = !1) : $[o].call(this, t)), s = a ? {
                type: n.event || t.type,
                batch: l
            } : l[0], this[j] = !1, !e && this._messageCenter.trigger(s.type, s)
        }

        function u(t) {
            for (var e = this._pendingActions; e.length;) {
                var i = e.shift();
                l.call(this, i, t)
            }
        }

        function h(t, e, i) {
            var n = this._api;
            N(this._componentsViews, function (o) {
                var r = o.__model;
                o[t](r, e, n, i), x(r, o)
            }, this), e.eachSeries(function (o, r) {
                var a = this._chartsMap[o.__viewId];
                a[t](o, e, n, i), x(o, a), y(o, a)
            }, this), v(this._zr, e)
        }

        function c(t, e) {
            for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, o = i ? this._componentsMap : this._chartsMap, r = this._zr, a = 0; a < n.length; a++)n[a].__alive = !1;
            e[i ? "eachComponent" : "eachSeries"](function (t, a) {
                if (i) {
                    if ("series" === t)return
                } else a = t;
                var s = a.id + "_" + a.type, l = o[s];
                if (!l) {
                    var u = I.parseClassType(a.type), h = i ? L.getClass(u.main, u.sub) : C.getClass(u.sub);
                    if (!h)return;
                    l = new h, l.init(e, this._api), o[s] = l, n.push(l), r.add(l.group)
                }
                a.__viewId = s, l.__alive = !0, l.__id = s, l.__model = a
            }, this);
            for (var a = 0; a < n.length;) {
                var s = n[a];
                s.__alive ? a++ : (r.remove(s.group), s.dispose(e, this._api), n.splice(a, 1), delete o[s.__id])
            }
        }

        function d(t, e) {
            N(tt, function (i) {
                i.func(t, e)
            })
        }

        function f(t) {
            var e = {};
            t.eachSeries(function (t) {
                var i = t.get("stack"), n = t.getData();
                if (i && "list" === n.type) {
                    var o = e[i];
                    o && (n.stackedOn = o), e[i] = n
                }
            })
        }

        function p(t, e) {
            var i = this._api;
            N(it, function (n) {
                n.isLayout && n.func(t, i, e)
            })
        }

        function g(t, e) {
            var i = this._api;
            t.clearColorPalette(), t.eachSeries(function (t) {
                t.clearColorPalette()
            }), N(it, function (n) {
                n.func(t, i, e)
            })
        }

        function m(t, e) {
            var i = this._api;
            N(this._componentsViews, function (n) {
                var o = n.__model;
                n.render(o, t, i, e), x(o, n)
            }, this), N(this._chartsViews, function (t) {
                t.__alive = !1
            }, this), t.eachSeries(function (n, o) {
                var r = this._chartsMap[n.__viewId];
                r.__alive = !0, r.render(n, t, i, e), r.group.silent = !!n.get("silent"), x(n, r), y(n, r)
            }, this), v(this._zr, t), N(this._chartsViews, function (e) {
                e.__alive || e.remove(t, i)
            }, this)
        }

        function v(t, e) {
            var i = t.storage, n = 0;
            i.traverse(function (t) {
                t.isGroup || n++
            }), n > e.get("hoverLayerThreshold") && !b.node && i.traverse(function (t) {
                t.isGroup || (t.useHoverLayer = !0)
            })
        }

        function y(t, e) {
            var i = 0;
            e.group.traverse(function (t) {
                "group" === t.type || t.ignore || i++
            });
            var n = +t.get("progressive"), o = i > t.get("progressiveThreshold") && n && !b.node;
            o && e.group.traverse(function (t) {
                t.isGroup || (t.progressive = o ? Math.floor(i++ / n) : -1, o && t.stopAnimation(!0))
            });
            var r = t.get("blendMode") || null;
            e.group.traverse(function (t) {
                t.isGroup || t.setStyle("blend", r)
            })
        }

        function x(t, e) {
            var i = t.get("z"), n = t.get("zlevel");
            e.group.traverse(function (t) {
                "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n))
            })
        }

        function _(t) {
            function e(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n[r] = e
                }
            }

            var i = 0, n = 1, o = 2, r = "__connectUpdateStatus";
            z.each(J, function (a, s) {
                t._messageCenter.on(s, function (a) {
                    if (at[t.group] && t[r] !== i) {
                        var s = t.makeActionFromEvent(a), l = [];
                        z.each(rt, function (e) {
                            e !== t && e.group === t.group && l.push(e)
                        }), e(l, i), N(l, function (t) {
                            t[r] !== n && t.dispatchAction(s)
                        }), e(l, o)
                    }
                })
            })
        }

        /*!
         * ECharts, a javascript interactive chart library.
         *
         * Copyright (c) 2015, Baidu Inc.
         * All rights reserved.
         *
         * LICENSE
         * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
         */
        var b = i(11), w = i(124), S = i(89), M = i(23), T = i(125), I = i(13), A = i(15), L = i(58), C = i(27), D = i(3), P = i(6), k = i(46), O = i(77), z = i(1), E = i(18), R = i(20), V = i(44), N = z.each, B = 1e3, G = 5e3, F = 1e3, H = 2e3, W = 3e3, Z = 4e3, q = 5e3, j = "__flagInMainProcess", U = "__hasGradientOrPatternBg", X = "__optionUpdated";
        o.prototype.on = n("on"), o.prototype.off = n("off"), o.prototype.one = n("one"), z.mixin(o, R);
        var Y = r.prototype;
        Y._onframe = function () {
            this[X] && (this[j] = !0, $.prepareAndUpdate.call(this), this[j] = !1, this[X] = !1)
        }, Y.getDom = function () {
            return this._dom
        }, Y.getZr = function () {
            return this._zr
        }, Y.setOption = function (t, e, i) {
            if (this[j] = !0, !this._model || e) {
                var n = new T(this._api), o = this._theme, r = this._model = new w(null, null, o, n);
                r.init(null, null, o, n)
            }
            this.__lastOnlyGraphic = !(!t || !t.graphic), z.each(t, function (t, e) {
                "graphic" !== e && (this.__lastOnlyGraphic = !1)
            }, this), this._model.setOption(t, et), i ? this[X] = !0 : ($.prepareAndUpdate.call(this), this._zr.flush(), this[X] = !1), this[j] = !1, u.call(this, !1)
        }, Y.setTheme = function () {
            console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, Y.getModel = function () {
            return this._model
        }, Y.getOption = function () {
            return this._model && this._model.getOption()
        }, Y.getWidth = function () {
            return this._zr.getWidth()
        }, Y.getHeight = function () {
            return this._zr.getHeight()
        }, Y.getRenderedCanvas = function (t) {
            if (b.canvasSupported) {
                t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                var e = this._zr, i = e.storage.getDisplayList();
                return z.each(i, function (t) {
                    t.stopAnimation(!0)
                }), e.painter.getRenderedCanvas(t)
            }
        }, Y.getDataURL = function (t) {
            t = t || {};
            var e = t.excludeComponents, i = this._model, n = [], o = this;
            N(e, function (t) {
                i.eachComponent({mainType: t}, function (t) {
                    var e = o._componentsMap[t.__viewId];
                    e.group.ignore || (n.push(e), e.group.ignore = !0)
                })
            });
            var r = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return N(n, function (t) {
                t.group.ignore = !1
            }), r
        }, Y.getConnectedDataURL = function (t) {
            if (b.canvasSupported) {
                var e = this.group, i = Math.min, n = Math.max, o = 1 / 0;
                if (at[e]) {
                    var r = o, a = o, s = -o, l = -o, u = [], h = t && t.pixelRatio || 1;
                    z.each(rt, function (o, h) {
                        if (o.group === e) {
                            var c = o.getRenderedCanvas(z.clone(t)), d = o.getDom().getBoundingClientRect();
                            r = i(d.left, r), a = i(d.top, a), s = n(d.right, s), l = n(d.bottom, l), u.push({
                                dom: c,
                                left: d.left,
                                top: d.top
                            })
                        }
                    }), r *= h, a *= h, s *= h, l *= h;
                    var c = s - r, d = l - a, f = z.createCanvas();
                    f.width = c, f.height = d;
                    var p = O.init(f);
                    return N(u, function (t) {
                        var e = new D.Image({style: {x: t.left * h - r, y: t.top * h - a, image: t.dom}});
                        p.add(e)
                    }), p.refreshImmediately(), f.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        }, Y.convertToPixel = z.curry(a, "convertToPixel"), Y.convertFromPixel = z.curry(a, "convertFromPixel"), Y.containPixel = function (t, e) {
            var i, n = this._model;
            return t = P.parseFinder(n, t), z.each(t, function (t, n) {
                n.indexOf("Models") >= 0 && z.each(t, function (t) {
                    var o = t.coordinateSystem;
                    if (o && o.containPoint)i |= !!o.containPoint(e); else if ("seriesModels" === n) {
                        var r = this._chartsMap[t.__viewId];
                        r && r.containPoint && (i |= r.containPoint(e, t))
                    }
                }, this)
            }, this), !!i
        }, Y.getVisual = function (t, e) {
            var i = this._model;
            t = P.parseFinder(i, t, {defaultMainType: "series"});
            var n = t.seriesModel, o = n.getData(), r = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? o.indexOfRawIndex(t.dataIndex) : null;
            return null != r ? o.getItemVisual(r, e) : o.getVisual(e)
        };
        var $ = {
            update: function (t) {
                var e = this._model, i = this._api, n = this._coordSysMgr, o = this._zr;
                if (e) {
                    e.restoreData(), n.create(this._model, this._api), d.call(this, e, i), f.call(this, e), n.update(e, i), g.call(this, e, t), m.call(this, e, t);
                    var r = e.get("backgroundColor") || "transparent", a = o.painter;
                    if (a.isSingleCanvas && a.isSingleCanvas())o.configLayer(0, {clearColor: r}); else {
                        if (!b.canvasSupported) {
                            var s = E.parse(r);
                            r = E.stringify(s, "rgb"), 0 === s[3] && (r = "transparent")
                        }
                        r.colorStops || r.image ? (o.configLayer(0, {clearColor: r}), this[U] = !0, this._dom.style.background = "transparent") : (this[U] && o.configLayer(0, {clearColor: null}), this[U] = !1, this._dom.style.background = r)
                    }
                }
            }, updateView: function (t) {
                var e = this._model;
                e && (e.eachSeries(function (t) {
                    t.getData().clearAllVisual()
                }), g.call(this, e, t), h.call(this, "updateView", e, t))
            }, updateVisual: function (t) {
                var e = this._model;
                e && (e.eachSeries(function (t) {
                    t.getData().clearAllVisual()
                }), g.call(this, e, t), h.call(this, "updateVisual", e, t))
            }, updateLayout: function (t) {
                var e = this._model;
                e && (p.call(this, e, t), h.call(this, "updateLayout", e, t))
            }, highlight: function (t) {
                s.call(this, "highlight", t)
            }, downplay: function (t) {
                s.call(this, "downplay", t)
            }, prepareAndUpdate: function (t) {
                var e = this._model;
                c.call(this, "component", e), c.call(this, "chart", e), this.__lastOnlyGraphic ? (N(this._componentsViews, function (i) {
                    var n = i.__model;
                    n && "graphic" === n.mainType && (i.render(n, e, this._api, t), x(n, i))
                }, this), this.__lastOnlyGraphic = !1) : $.update.call(this, t)
            }
        };
        Y.resize = function (t) {
            this[j] = !0, this._zr.resize(t);
            var e = this._model && this._model.resetOption("media");
            $[e ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize(), this[j] = !1, u.call(this)
        }, Y.showLoading = function (t, e) {
            if (z.isObject(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), ot[t]) {
                var i = ot[t](this._api, e), n = this._zr;
                this._loadingFX = i, n.add(i)
            }
        }, Y.hideLoading = function () {
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, Y.makeActionFromEvent = function (t) {
            var e = z.extend({}, t);
            return e.type = J[t.type], e
        }, Y.dispatchAction = function (t, e) {
            if (z.isObject(e) || (e = {silent: !!e}), K[t.type]) {
                if (this[j])return void this._pendingActions.push(t);
                l.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : e.flush !== !1 && b.browser.weChat && this._throttledZrFlush(), u.call(this, e.silent)
            }
        }, Y.on = n("on"), Y.off = n("off"), Y.one = n("one");
        var Q = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
        Y._initEvents = function () {
            N(Q, function (t) {
                this._zr.on(t, function (e) {
                    var i, n = this.getModel(), o = e.target;
                    if ("globalout" === t)i = {}; else if (o && null != o.dataIndex) {
                        var r = o.dataModel || n.getSeriesByIndex(o.seriesIndex);
                        i = r && r.getDataParams(o.dataIndex, o.dataType) || {}
                    } else o && o.eventData && (i = z.extend({}, o.eventData));
                    i && (i.event = e, i.type = t, this.trigger(t, i))
                }, this)
            }, this), N(J, function (t, e) {
                this._messageCenter.on(e, function (t) {
                    this.trigger(e, t)
                }, this)
            }, this)
        }, Y.isDisposed = function () {
            return this._disposed
        }, Y.clear = function () {
            this.setOption({series: []}, !0)
        }, Y.dispose = function () {
            if (!this._disposed) {
                this._disposed = !0;
                var t = this._api, e = this._model;
                N(this._componentsViews, function (i) {
                    i.dispose(e, t)
                }), N(this._chartsViews, function (i) {
                    i.dispose(e, t)
                }), this._zr.dispose(), delete rt[this.id]
            }
        }, z.mixin(r, R);
        var K = [], J = {}, tt = [], et = [], it = [], nt = {}, ot = {}, rt = {}, at = {}, st = new Date - 0, lt = new Date - 0, ut = "_echarts_instance_", ht = {
            version: "3.3.2",
            dependencies: {zrender: "3.2.2"}
        };
        ht.init = function (t, e, i) {
            var n = new r(t, e, i);
            return n.id = "ec_" + st++, rt[n.id] = n, t.setAttribute && t.setAttribute(ut, n.id), _(n), n
        }, ht.connect = function (t) {
            if (z.isArray(t)) {
                var e = t;
                t = null, z.each(e, function (e) {
                    null != e.group && (t = e.group)
                }), t = t || "g_" + lt++, z.each(e, function (e) {
                    e.group = t
                })
            }
            return at[t] = !0, t
        }, ht.disConnect = function (t) {
            at[t] = !1
        }, ht.dispose = function (t) {
            z.isDom(t) ? t = ht.getInstanceByDom(t) : "string" == typeof t && (t = rt[t]), t instanceof r && !t.isDisposed() && t.dispose()
        }, ht.getInstanceByDom = function (t) {
            var e = t.getAttribute(ut);
            return rt[e]
        }, ht.getInstanceById = function (t) {
            return rt[t]
        }, ht.registerTheme = function (t, e) {
            nt[t] = e
        }, ht.registerPreprocessor = function (t) {
            et.push(t)
        }, ht.registerProcessor = function (t, e) {
            "function" == typeof t && (e = t, t = B), tt.push({prio: t, func: e})
        }, ht.registerAction = function (t, e, i) {
            "function" == typeof e && (i = e, e = "");
            var n = z.isObject(t) ? t.type : [t, t = {event: e}][0];
            t.event = (t.event || n).toLowerCase(), e = t.event, K[n] || (K[n] = {action: i, actionInfo: t}), J[e] = n
        }, ht.registerCoordinateSystem = function (t, e) {
            M.register(t, e)
        }, ht.registerLayout = function (t, e) {
            "function" == typeof t && (e = t, t = F), it.push({prio: t, func: e, isLayout: !0})
        }, ht.registerVisual = function (t, e) {
            "function" == typeof t && (e = t, t = W), it.push({prio: t, func: e})
        }, ht.registerLoading = function (t, e) {
            ot[t] = e
        };
        var ct = I.parseClassType;
        ht.extendComponentModel = function (t, e) {
            var i = I;
            if (e) {
                var n = ct(e);
                i = I.getClass(n.main, n.sub, !0)
            }
            return i.extend(t)
        }, ht.extendComponentView = function (t, e) {
            var i = L;
            if (e) {
                var n = ct(e);
                i = L.getClass(n.main, n.sub, !0)
            }
            return i.extend(t)
        }, ht.extendSeriesModel = function (t, e) {
            var i = A;
            if (e) {
                e = "series." + e.replace("series.", "");
                var n = ct(e);
                i = I.getClass(n.main, n.sub, !0)
            }
            return i.extend(t)
        }, ht.extendChartView = function (t, e) {
            var i = C;
            if (e) {
                e.replace("series.", "");
                var n = ct(e);
                i = C.getClass(n.main, !0)
            }
            return i.extend(t)
        }, ht.setCanvasCreator = function (t) {
            z.createCanvas = t
        }, ht.registerVisual(H, i(138)), ht.registerPreprocessor(i(132)), ht.registerLoading("default", i(123)), ht.registerAction({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, z.noop), ht.registerAction({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, z.noop), ht.List = i(14), ht.Model = i(10), ht.graphic = i(3), ht.number = i(4), ht.format = i(9), ht.matrix = i(19), ht.vector = i(5), ht.color = i(18), ht.util = {}, N(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend", "defaults", "clone"], function (t) {
            ht.util[t] = z[t]
        }), ht.PRIORITY = {
            PROCESSOR: {FILTER: B, STATISTIC: G},
            VISUAL: {LAYOUT: F, GLOBAL: H, CHART: W, COMPONENT: Z, BRUSH: q}
        }, t.exports = ht
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return null != t && "none" != t
        }

        function o(t) {
            return "string" == typeof t ? _.lift(t, -.1) : t
        }

        function r(t) {
            if (t.__hoverStlDirty) {
                var e = t.style.stroke, i = t.style.fill, r = t.__hoverStl;
                r.fill = r.fill || (n(i) ? o(i) : null), r.stroke = r.stroke || (n(e) ? o(e) : null);
                var a = {};
                for (var s in r)r.hasOwnProperty(s) && (a[s] = t.style[s]);
                t.__normalStl = a, t.__hoverStlDirty = !1
            }
        }

        function a(t) {
            t.__isHover || (r(t), t.useHoverLayer ? t.__zr && t.__zr.addHover(t, t.__hoverStl) : (t.setStyle(t.__hoverStl), t.z2 += 1), t.__isHover = !0)
        }

        function s(t) {
            if (t.__isHover) {
                var e = t.__normalStl;
                t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
            }
        }

        function l(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && a(t)
            }) : a(t)
        }

        function u(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && s(t)
            }) : s(t)
        }

        function h(t, e) {
            t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && r(t)
        }

        function c(t) {
            this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && l(this)
        }

        function d(t) {
            this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && u(this)
        }

        function f() {
            this.__isEmphasis = !0, l(this)
        }

        function p() {
            this.__isEmphasis = !1, u(this)
        }

        function g(t, e, i, n, o, r) {
            "function" == typeof o && (r = o, o = null);
            var a = n && (n.ifEnableAnimation ? n.ifEnableAnimation() : n.getShallow("animation"));
            if (a) {
                var s = t ? "Update" : "", l = n && n.getShallow("animationDuration" + s), u = n && n.getShallow("animationEasing" + s), h = n && n.getShallow("animationDelay" + s);
                "function" == typeof h && (h = h(o)), l > 0 ? e.animateTo(i, l, h || 0, u, r) : (e.attr(i), r && r())
            } else e.attr(i), r && r()
        }

        var m = i(1), v = i(168), y = Math.round, x = i(7), _ = i(18), b = i(19), w = i(5), S = {};
        S.Group = i(33), S.Image = i(49), S.Text = i(75), S.Circle = i(159), S.Sector = i(165), S.Ring = i(164), S.Polygon = i(161), S.Polyline = i(162), S.Rect = i(163), S.Line = i(160), S.BezierCurve = i(158), S.Arc = i(157), S.CompoundPath = i(152), S.LinearGradient = i(87), S.RadialGradient = i(153), S.BoundingRect = i(8), S.extendShape = function (t) {
            return x.extend(t)
        }, S.extendPath = function (t, e) {
            return v.extendFromString(t, e)
        }, S.makePath = function (t, e, i, n) {
            var o = v.createFromString(t, e), r = o.getBoundingRect();
            if (i) {
                var a = r.width / r.height;
                if ("center" === n) {
                    var s, l = i.height * a;
                    l <= i.width ? s = i.height : (l = i.width, s = l / a);
                    var u = i.x + i.width / 2, h = i.y + i.height / 2;
                    i.x = u - l / 2, i.y = h - s / 2, i.width = l, i.height = s
                }
                this.resizePath(o, i)
            }
            return o
        }, S.mergePath = v.mergePath, S.resizePath = function (t, e) {
            if (t.applyTransform) {
                var i = t.getBoundingRect(), n = i.calculateTransform(e);
                t.applyTransform(n)
            }
        }, S.subPixelOptimizeLine = function (t) {
            var e = S.subPixelOptimize, i = t.shape, n = t.style.lineWidth;
            return y(2 * i.x1) === y(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), y(2 * i.y1) === y(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
        }, S.subPixelOptimizeRect = function (t) {
            var e = S.subPixelOptimize, i = t.shape, n = t.style.lineWidth, o = i.x, r = i.y, a = i.width, s = i.height;
            return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(o + a, n, !1) - i.x, 0 === a ? 0 : 1), i.height = Math.max(e(r + s, n, !1) - i.y, 0 === s ? 0 : 1), t
        }, S.subPixelOptimize = function (t, e, i) {
            var n = y(2 * t);
            return (n + y(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
        }, S.setHoverStyle = function (t, e, i) {
            t.__hoverSilentOnTouch = i && i.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && h(t, e)
            }) : h(t, e), t.on("mouseover", c).on("mouseout", d), t.on("emphasis", f).on("normal", p)
        }, S.setText = function (t, e, i) {
            var n = e.getShallow("position") || "inside", o = n.indexOf("inside") >= 0 ? "white" : i, r = e.getModel("textStyle");
            m.extend(t, {
                textDistance: e.getShallow("distance") || 5,
                textFont: r.getFont(),
                textPosition: n,
                textFill: r.getTextColor() || o
            })
        }, S.updateProps = function (t, e, i, n, o) {
            g(!0, t, e, i, n, o)
        }, S.initProps = function (t, e, i, n, o) {
            g(!1, t, e, i, n, o)
        }, S.getTransform = function (t, e) {
            for (var i = b.identity([]); t && t !== e;)b.mul(i, t.getLocalTransform(), i), t = t.parent;
            return i
        }, S.applyTransform = function (t, e, i) {
            return i && (e = b.invert([], e)), w.applyTransform([], t, e)
        }, S.transformDirection = function (t, e, i) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), o = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), r = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -o : "bottom" === t ? o : 0];
            return r = S.applyTransform(r, e, i), Math.abs(r[0]) > Math.abs(r[1]) ? r[0] > 0 ? "right" : "left" : r[1] > 0 ? "bottom" : "top"
        }, S.groupTransition = function (t, e, i, n) {
            function o(t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }

            function r(t) {
                var e = {position: w.clone(t.position), rotation: t.rotation};
                return t.shape && (e.shape = m.extend({}, t.shape)), e
            }

            if (t && e) {
                var a = o(t);
                e.traverse(function (t) {
                    if (!t.isGroup && t.anid) {
                        var e = a[t.anid];
                        if (e) {
                            var n = r(t);
                            t.attr(r(e)), S.updateProps(t, n, i, t.dataIndex)
                        }
                    }
                })
            }
        }, t.exports = S
    }, function (t, e) {
        function i(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        var n = {}, o = 1e-4;
        n.linearMap = function (t, e, i, n) {
            var o = e[1] - e[0], r = i[1] - i[0];
            if (0 === o)return 0 === r ? i[0] : (i[0] + i[1]) / 2;
            if (n)if (o > 0) {
                if (t <= e[0])return i[0];
                if (t >= e[1])return i[1]
            } else {
                if (t >= e[0])return i[0];
                if (t <= e[1])return i[1]
            } else {
                if (t === e[0])return i[0];
                if (t === e[1])return i[1]
            }
            return (t - e[0]) / o * r + i[0]
        }, n.parsePercent = function (t, e) {
            switch (t) {
                case"center":
                case"middle":
                    t = "50%";
                    break;
                case"left":
                case"top":
                    t = "0%";
                    break;
                case"right":
                case"bottom":
                    t = "100%"
            }
            return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
        }, n.round = function (t, e) {
            return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), +(+t).toFixed(e)
        }, n.asc = function (t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }, n.getPrecision = function (t) {
            if (t = +t, isNaN(t))return 0;
            for (var e = 1, i = 0; Math.round(t * e) / e !== t;)e *= 10, i++;
            return i
        }, n.getPrecisionSafe = function (t) {
            var e = t.toString(), i = e.indexOf(".");
            return i < 0 ? 0 : e.length - 1 - i
        }, n.getPixelPrecision = function (t, e) {
            var i = Math.log, n = Math.LN10, o = Math.floor(i(t[1] - t[0]) / n), r = Math.round(i(Math.abs(e[1] - e[0])) / n);
            return Math.max(-o + r, 0)
        }, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function (t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }, n.isRadianAroundZero = function (t) {
            return t > -o && t < o
        }, n.parseDate = function (t) {
            if (t instanceof Date)return t;
            if ("string" == typeof t) {
                var e = new Date(t);
                return isNaN(+e) && (e = new Date(new Date(t.replace(/-/g, "/")) - new Date("1970/01/01"))), e
            }
            return new Date(Math.round(t))
        }, n.quantity = function (t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }, n.nice = function (t, e) {
            var i, o = n.quantity(t), r = t / o;
            return i = e ? r < 1.5 ? 1 : r < 2.5 ? 2 : r < 4 ? 3 : r < 7 ? 5 : 10 : r < 1 ? 1 : r < 2 ? 2 : r < 3 ? 3 : r < 5 ? 5 : 10, i * o
        }, n.reformIntervals = function (t) {
            function e(t, i, n) {
                return t.interval[n] < i.interval[n] || t.interval[n] === i.interval[n] && (t.close[n] - i.close[n] === (n ? -1 : 1) || !n && e(t, i, 1))
            }

            t.sort(function (t, i) {
                return e(t, i, 0) ? -1 : 1
            });
            for (var i = -(1 / 0), n = 1, o = 0; o < t.length;) {
                for (var r = t[o].interval, a = t[o].close, s = 0; s < 2; s++)r[s] <= i && (r[s] = i, a[s] = s ? 1 : 1 - n), i = r[s], n = a[s];
                r[0] === r[1] && a[0] * a[1] !== 1 ? t.splice(o, 1) : o++
            }
            return t
        }, t.exports = n
    }, function (t, e) {
        var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
            create: function (t, e) {
                var n = new i(2);
                return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, clone: function (t) {
                var e = new i(2);
                return e[0] = t[0], e[1] = t[1], e
            }, set: function (t, e, i) {
                return t[0] = e, t[1] = i, t
            }, add: function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
            }, scaleAndAdd: function (t, e, i, n) {
                return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
            }, sub: function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
            }, len: function (t) {
                return Math.sqrt(this.lenSquare(t))
            }, lenSquare: function (t) {
                return t[0] * t[0] + t[1] * t[1]
            }, mul: function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
            }, div: function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
            }, dot: function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, scale: function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t
            }, normalize: function (t, e) {
                var i = n.len(e);
                return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
            }, distance: function (t, e) {
                return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
            }, distanceSquare: function (t, e) {
                return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
            }, negate: function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, lerp: function (t, e, i, n) {
                return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
            }, applyTransform: function (t, e, i) {
                var n = e[0], o = e[1];
                return t[0] = i[0] * n + i[2] * o + i[4], t[1] = i[1] * n + i[3] * o + i[5], t
            }, min: function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
            }, max: function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
            }
        };
        n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.hasOwnProperty(e)
        }

        var o = i(9), r = i(4), a = i(10), s = i(1), l = s.each, u = s.isObject, h = {};
        h.normalizeToArray = function (t) {
            return t instanceof Array ? t : null == t ? [] : [t]
        }, h.defaultEmphasis = function (t, e) {
            if (t) {
                var i = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {};
                l(e, function (t) {
                    var e = s.retrieve(i[t], n[t]);
                    null != e && (i[t] = e)
                })
            }
        }, h.LABEL_OPTIONS = ["position", "show", "textStyle", "distance", "formatter"], h.getDataItemValue = function (t) {
            return t && (null == t.value ? t : t.value)
        }, h.isDataItemOption = function (t) {
            return u(t) && !(t instanceof Array)
        }, h.converDataValue = function (t, e) {
            var i = e && e.type;
            return "ordinal" === i ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +r.parseDate(t)), null == t || "" === t ? NaN : +t)
        }, h.createDataFormatModel = function (t, e) {
            var i = new a;
            return s.mixin(i, h.dataFormatMixin), i.seriesIndex = e.seriesIndex, i.name = e.name || "", i.mainType = e.mainType, i.subType = e.subType, i.getData = function () {
                return t
            }, i
        }, h.dataFormatMixin = {
            getDataParams: function (t, e) {
                var i = this.getData(e), n = this.seriesIndex, o = this.name, r = this.getRawValue(t, e), a = i.getRawIndex(t), s = i.getName(t, !0), l = i.getRawDataItem(t);
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: "series" === this.mainType ? this.subType : null,
                    seriesIndex: n,
                    seriesName: o,
                    name: s,
                    dataIndex: a,
                    data: l,
                    dataType: e,
                    value: r,
                    color: i.getItemVisual(t, "color"),
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (t, e, i, n) {
                e = e || "normal";
                var r = this.getData(i), a = r.getItemModel(t), s = this.getDataParams(t, i);
                null != n && s.value instanceof Array && (s.value = s.value[n]);
                var l = a.get(["label", e, "formatter"]);
                return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? o.formatTpl(l, s) : void 0
            }, getRawValue: function (t, e) {
                var i = this.getData(e), n = i.getRawDataItem(t);
                if (null != n)return !u(n) || n instanceof Array ? n : n.value
            }, formatTooltip: s.noop
        }, h.mappingToExists = function (t, e) {
            e = (e || []).slice();
            var i = s.map(t || [], function (t, e) {
                return {exist: t}
            });
            return l(e, function (t, n) {
                if (u(t)) {
                    for (var o = 0; o < i.length; o++)if (!i[o].option && null != t.id && i[o].exist.id === t.id + "")return i[o].option = t, void(e[n] = null);
                    for (var o = 0; o < i.length; o++) {
                        var r = i[o].exist;
                        if (!(i[o].option || null != r.id && null != t.id || null == t.name || h.isIdInner(t) || h.isIdInner(r) || r.name !== t.name + ""))return i[o].option = t, void(e[n] = null)
                    }
                }
            }), l(e, function (t, e) {
                if (u(t)) {
                    for (var n = 0; n < i.length; n++) {
                        var o = i[n].exist;
                        if (!i[n].option && !h.isIdInner(o) && null == t.id) {
                            i[n].option = t;
                            break
                        }
                    }
                    n >= i.length && i.push({option: t})
                }
            }), i
        }, h.makeIdAndName = function (t) {
            var e = {};
            l(t, function (t, i) {
                var n = t.exist;
                n && (e[n.id] = t)
            }), l(t, function (t, i) {
                var n = t.option;
                s.assert(!n || null == n.id || !e[n.id] || e[n.id] === t, "id duplicates: " + (n && n.id)), n && null != n.id && (e[n.id] = t), !t.keyInfo && (t.keyInfo = {})
            }), l(t, function (t, i) {
                var n = t.exist, o = t.option, r = t.keyInfo;
                if (u(o)) {
                    if (r.name = null != o.name ? o.name + "" : n ? n.name : "\0-", n)r.id = n.id; else if (null != o.id)r.id = o.id + ""; else {
                        var a = 0;
                        do r.id = "\0" + r.name + "\0" + a++; while (e[r.id])
                    }
                    e[r.id] = t
                }
            })
        }, h.isIdInner = function (t) {
            return u(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
        }, h.compressBatches = function (t, e) {
            function i(t, e, i) {
                for (var n = 0, o = t.length; n < o; n++)for (var r = t[n].seriesId, a = h.normalizeToArray(t[n].dataIndex), s = i && i[r], l = 0, u = a.length; l < u; l++) {
                    var c = a[l];
                    s && s[c] ? s[c] = null : (e[r] || (e[r] = {}))[c] = 1
                }
            }

            function n(t, e) {
                var i = [];
                for (var o in t)if (t.hasOwnProperty(o) && null != t[o])if (e)i.push(+o); else {
                    var r = n(t[o], !0);
                    r.length && i.push({seriesId: o, dataIndex: r})
                }
                return i
            }

            var o = {}, r = {};
            return i(t || [], o), i(e || [], r, o), [n(o), n(r)]
        }, h.queryDataIndex = function (t, e) {
            return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? s.isArray(e.dataIndex) ? s.map(e.dataIndex, function (e) {
                return t.indexOfRawIndex(e)
            }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? s.isArray(e.name) ? s.map(e.name, function (e) {
                return t.indexOfName(e)
            }) : t.indexOfName(e.name) : void 0
        }, h.parseFinder = function (t, e, i) {
            if (s.isString(e)) {
                var o = {};
                o[e + "Index"] = 0, e = o
            }
            var r = i && i.defaultMainType;
            !r || n(e, r + "Index") || n(e, r + "Id") || n(e, r + "Name") || (e[r + "Index"] = 0);
            var a = {};
            return l(e, function (i, n) {
                var i = e[n];
                if ("dataIndex" === n || "dataIndexInside" === n)return void(a[n] = i);
                var o = n.match(/^(\w+)(Index|Id|Name)$/) || [], r = o[1], s = o[2];
                if (r && s) {
                    var l = {mainType: r};
                    l[s.toLowerCase()] = i;
                    var u = t.queryComponents(l);
                    a[r + "Models"] = u, a[r + "Model"] = u[0]
                }
            }), a
        }, t.exports = h
    }, function (t, e, i) {
        function n(t) {
            o.call(this, t), this.path = new a
        }

        var o = i(36), r = i(1), a = i(28), s = i(148), l = i(64), u = l.prototype.getCanvasPattern, h = Math.abs;
        n.prototype = {
            constructor: n,
            type: "path",
            __dirtyPath: !0,
            strokeContainThreshold: 5,
            brush: function (t, e) {
                var i = this.style, n = this.path, o = i.hasStroke(), r = i.hasFill(), a = i.fill, s = i.stroke, l = r && !!a.colorStops, h = o && !!s.colorStops, c = r && !!a.image, d = o && !!s.image;
                if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                    var f = this.getBoundingRect();
                    l && (this._fillGradient = i.getGradient(t, a, f)), h && (this._strokeGradient = i.getGradient(t, s, f))
                }
                l ? t.fillStyle = this._fillGradient : c && (t.fillStyle = u.call(a, t)), h ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = u.call(s, t));
                var p = i.lineDash, g = i.lineDashOffset, m = !!t.setLineDash, v = this.getGlobalScale();
                n.setScale(v[0], v[1]), this.__dirtyPath || p && !m && o ? (n = this.path.beginPath(t), p && !m && (n.setLineDash(p), n.setLineDashOffset(g)), this.buildPath(n, this.shape, !1), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), r && n.fill(t), p && m && (t.setLineDash(p), t.lineDashOffset = g), o && n.stroke(t), p && m && t.setLineDash([]), this.restoreTransform(t), null != i.text && this.drawRectText(t, this.getBoundingRect())
            },
            buildPath: function (t, e, i) {
            },
            getBoundingRect: function () {
                var t = this._rect, e = this.style, i = !t;
                if (i) {
                    var n = this.path;
                    this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                }
                if (this._rect = t, e.hasStroke()) {
                    var o = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || i) {
                        o.copy(t);
                        var r = e.lineWidth, a = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (r = Math.max(r, this.strokeContainThreshold || 4)), a > 1e-10 && (o.width += r / a, o.height += r / a, o.x -= r / a / 2, o.y -= r / a / 2)
                    }
                    return o
                }
                return t
            },
            contain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), o = this.style;
                if (t = i[0], e = i[1], n.contain(t, e)) {
                    var r = this.path.data;
                    if (o.hasStroke()) {
                        var a = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
                        if (l > 1e-10 && (o.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), s.containStroke(r, a / l, t, e)))return !0
                    }
                    if (o.hasFill())return s.contain(r, t, e)
                }
                return !1
            },
            dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            },
            animateShape: function (t) {
                return this.animate("shape", t)
            },
            attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : o.prototype.attrKV.call(this, t, e)
            },
            setShape: function (t, e) {
                var i = this.shape;
                if (i) {
                    if (r.isObject(t))for (var n in t)t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                    this.dirty(!0)
                }
                return this
            },
            getLineScale: function () {
                var t = this.transform;
                return t && h(t[0] - 1) > 1e-10 && h(t[3] - 1) > 1e-10 ? Math.sqrt(h(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, n.extend = function (t) {
            var e = function (e) {
                n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var i = t.shape;
                if (i) {
                    this.shape = this.shape || {};
                    var o = this.shape;
                    for (var r in i)!o.hasOwnProperty(r) && i.hasOwnProperty(r) && (o[r] = i[r])
                }
                t.init && t.init.call(this, e)
            };
            r.inherits(e, n);
            for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
            return e
        }, r.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n) {
            i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, this.height = n
        }

        var o = i(5), r = i(19), a = o.applyTransform, s = Math.min, l = Math.max;
        n.prototype = {
            constructor: n, union: function (t) {
                var e = s(t.x, this.x), i = s(t.y, this.y);
                this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
            }, applyTransform: function () {
                var t = [], e = [], i = [], n = [];
                return function (o) {
                    if (o) {
                        t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, a(t, t, o), a(e, e, o), a(i, i, o), a(n, n, o), this.x = s(t[0], e[0], i[0], n[0]), this.y = s(t[1], e[1], i[1], n[1]);
                        var r = l(t[0], e[0], i[0], n[0]), u = l(t[1], e[1], i[1], n[1]);
                        this.width = r - this.x, this.height = u - this.y
                    }
                }
            }(), calculateTransform: function (t) {
                var e = this, i = t.width / e.width, n = t.height / e.height, o = r.create();
                return r.translate(o, o, [-e.x, -e.y]), r.scale(o, o, [i, n]), r.translate(o, o, [t.x, t.y]), o
            }, intersect: function (t) {
                if (!t)return !1;
                t instanceof n || (t = n.create(t));
                var e = this, i = e.x, o = e.x + e.width, r = e.y, a = e.y + e.height, s = t.x, l = t.x + t.width, u = t.y, h = t.y + t.height;
                return !(o < s || l < i || a < u || h < r)
            }, contain: function (t, e) {
                var i = this;
                return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
            }, clone: function () {
                return new n(this.x, this.y, this.width, this.height)
            }, copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }, plain: function () {
                return {x: this.x, y: this.y, width: this.width, height: this.height}
            }
        }, n.create = function (t) {
            return new n(t.x, t.y, t.width, t.height)
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = i(4), r = i(16), a = {};
        a.addCommas = function (t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
        }, a.toCamelCase = function (t, e) {
            return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
        }, a.normalizeCssArray = function (t) {
            var e = t.length;
            return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }, a.encodeHTML = function (t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        };
        var s = ["a", "b", "c", "d", "e", "f", "g"], l = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        };
        a.formatTpl = function (t, e) {
            n.isArray(e) || (e = [e]);
            var i = e.length;
            if (!i)return "";
            for (var o = e[0].$vars || [], r = 0; r < o.length; r++) {
                var a = s[r];
                t = t.replace(l(a), l(a, 0))
            }
            for (var u = 0; u < i; u++)for (var h = 0; h < o.length; h++)t = t.replace(l(s[h], u), e[u][o[h]]);
            return t
        };
        var u = function (t) {
            return t < 10 ? "0" + t : t
        };
        a.formatTime = function (t, e) {
            "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
            var i = o.parseDate(e), n = i.getFullYear(), r = i.getMonth() + 1, a = i.getDate(), s = i.getHours(), l = i.getMinutes(), h = i.getSeconds();
            return t = t.replace("MM", u(r)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", u(a)).replace("d", a).replace("hh", u(s)).replace("h", s).replace("mm", u(l)).replace("m", l).replace("ss", u(h)).replace("s", h)
        }, a.capitalFirst = function (t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }, a.truncateText = r.truncateText, t.exports = a
    }, function (t, e, i) {
        function n(t, e, i) {
            this.parentModel = e, this.ecModel = i, this.option = t
        }

        var o = i(1), r = i(21);
        n.prototype = {
            constructor: n, init: null, mergeOption: function (t) {
                o.merge(this.option, t, !0)
            }, get: function (t, e) {
                if (!t)return this.option;
                "string" == typeof t && (t = t.split("."));
                for (var i = this.option, n = this.parentModel, o = 0; o < t.length && (!t[o] || (i = i && "object" == typeof i ? i[t[o]] : null, null != i)); o++);
                return null == i && n && !e && (i = n.get(t)), i
            }, getShallow: function (t, e) {
                var i = this.option, n = null == i ? i : i[t], o = this.parentModel;
                return null == n && o && !e && (n = o.getShallow(t)), n
            }, getModel: function (t, e) {
                var i = this.get(t, !0), o = this.parentModel, r = new n(i, e || o && o.getModel(t), this.ecModel);
                return r
            }, isEmpty: function () {
                return null == this.option
            }, restoreData: function () {
            }, clone: function () {
                var t = this.constructor;
                return new t(o.clone(this.option))
            }, setReadOnly: function (t) {
                r.setReadOnly(this, t)
            }
        }, r.enableClassExtend(n);
        var a = o.mixin;
        a(n, i(130)), a(n, i(127)), a(n, i(131)), a(n, i(129)), t.exports = n
    }, function (t, e) {
        function i(t) {
            var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/), o = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), r = t.match(/Edge\/([\d.]+)/), a = /micromessenger/i.test(t);
            return n && (i.firefox = !0, i.version = n[1]), o && (i.ie = !0, i.version = o[1]), r && (i.edge = !0, i.version = r[1]), a && (i.weChat = !0), {
                browser: i,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
                pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 10)
            }
        }

        var n = {};
        n = "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0
        } : i(navigator.userAgent), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n, o) {
            var r = 0, a = 0;
            null == n && (n = 1 / 0), null == o && (o = 1 / 0);
            var s = 0;
            e.eachChild(function (l, u) {
                var h, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(u + 1), g = p && p.getBoundingRect();
                if ("horizontal" === t) {
                    var m = f.width + (g ? -g.x + f.x : 0);
                    h = r + m, h > n || l.newline ? (r = 0, h = m, a += s + i, s = f.height) : s = Math.max(s, f.height)
                } else {
                    var v = f.height + (g ? -g.y + f.y : 0);
                    c = a + v, c > o || l.newline ? (r += s + i, a = 0, c = v, s = f.width) : s = Math.max(s, f.width)
                }
                l.newline || (d[0] = r, d[1] = a, "horizontal" === t ? r = h + i : a = c + i)
            })
        }

        var o = i(1), r = i(8), a = i(4), s = i(9), l = a.parsePercent, u = o.each, h = {}, c = h.LOCATION_PARAMS = ["left", "right", "top", "bottom", "width", "height"];
        h.box = n, h.vbox = o.curry(n, "vertical"), h.hbox = o.curry(n, "horizontal"), h.getAvailableSize = function (t, e, i) {
            var n = e.width, o = e.height, r = l(t.x, n), a = l(t.y, o), u = l(t.x2, n), h = l(t.y2, o);
            return (isNaN(r) || isNaN(parseFloat(t.x))) && (r = 0), (isNaN(u) || isNaN(parseFloat(t.x2))) && (u = n), (isNaN(a) || isNaN(parseFloat(t.y))) && (a = 0), (isNaN(h) || isNaN(parseFloat(t.y2))) && (h = o), i = s.normalizeCssArray(i || 0), {
                width: Math.max(u - r - i[1] - i[3], 0),
                height: Math.max(h - a - i[0] - i[2], 0)
            }
        }, h.getLayoutRect = function (t, e, i) {
            i = s.normalizeCssArray(i || 0);
            var n = e.width, o = e.height, a = l(t.left, n), u = l(t.top, o), h = l(t.right, n), c = l(t.bottom, o), d = l(t.width, n), f = l(t.height, o), p = i[2] + i[0], g = i[1] + i[3], m = t.aspect;
            switch (isNaN(d) && (d = n - h - g - a), isNaN(f) && (f = o - c - p - u), isNaN(d) && isNaN(f) && (m > n / o ? d = .8 * n : f = .8 * o), null != m && (isNaN(d) && (d = m * f), isNaN(f) && (f = d / m)), isNaN(a) && (a = n - h - d - g), isNaN(u) && (u = o - c - f - p), t.left || t.right) {
                case"center":
                    a = n / 2 - d / 2 - i[3];
                    break;
                case"right":
                    a = n - d - g
            }
            switch (t.top || t.bottom) {
                case"middle":
                case"center":
                    u = o / 2 - f / 2 - i[0];
                    break;
                case"bottom":
                    u = o - f - p
            }
            a = a || 0, u = u || 0, isNaN(d) && (d = n - a - (h || 0)), isNaN(f) && (f = o - u - (c || 0));
            var v = new r(a + i[3], u + i[0], d, f);
            return v.margin = i, v
        }, h.positionElement = function (t, e, i, n, a) {
            var s = !a || !a.hv || a.hv[0], l = !a || !a.hv || a.hv[1], u = a && a.boundingMode || "all";
            if (s || l) {
                var c;
                if ("raw" === u)c = "group" === t.type ? new r(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (c = t.getBoundingRect(), t.needLocalTransform()) {
                    var d = t.getLocalTransform();
                    c = c.clone(), c.applyTransform(d)
                }
                e = h.getLayoutRect(o.defaults({width: c.width, height: c.height}, e), i, n);
                var f = t.position, p = s ? e.x - c.x : 0, g = l ? e.y - c.y : 0;
                t.attr("position", "raw" === u ? [p, g] : [f[0] + p, f[1] + g])
            }
        }, h.mergeLayoutParam = function (t, e, i) {
            function n(n) {
                var o = {}, s = 0, l = {}, h = 0, c = i.ignoreSize ? 1 : 2;
                if (u(n, function (e) {
                        l[e] = t[e]
                    }), u(n, function (t) {
                        r(e, t) && (o[t] = l[t] = e[t]), a(o, t) && s++, a(l, t) && h++
                    }), h !== c && s) {
                    if (s >= c)return o;
                    for (var d = 0; d < n.length; d++) {
                        var f = n[d];
                        if (!r(o, f) && r(t, f)) {
                            o[f] = t[f];
                            break
                        }
                    }
                    return o
                }
                return l
            }

            function r(t, e) {
                return t.hasOwnProperty(e)
            }

            function a(t, e) {
                return null != t[e] && "auto" !== t[e];
            }

            function s(t, e, i) {
                u(t, function (t) {
                    e[t] = i[t]
                })
            }

            !o.isObject(i) && (i = {});
            var l = ["width", "left", "right"], h = ["height", "top", "bottom"], c = n(l), d = n(h);
            s(l, t, c), s(h, t, d)
        }, h.getLayoutParams = function (t) {
            return h.copyLayoutParams({}, t)
        }, h.copyLayoutParams = function (t, e) {
            return e && t && u(c, function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t
        }, t.exports = h
    }, function (t, e, i) {
        function n(t) {
            var e = [];
            return r.each(h.getClassesByMainType(t), function (t) {
                a.apply(e, t.prototype.dependencies || [])
            }), r.map(e, function (t) {
                return l.parseClassType(t).main
            })
        }

        var o = i(10), r = i(1), a = Array.prototype.push, s = i(43), l = i(21), u = i(12), h = o.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, i, n) {
                o.call(this, t, e, i, n), this.uid = s.getUID("componentModel")
            },
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(t, i)
            },
            mergeDefaultAndTheme: function (t, e) {
                var i = this.layoutMode, n = i ? u.getLayoutParams(t) : {}, o = e.getTheme();
                r.merge(t, o.get(this.mainType)), r.merge(t, this.getDefaultOption()), i && u.mergeLayoutParam(t, n, i)
            },
            mergeOption: function (t, e) {
                r.merge(this.option, t, !0);
                var i = this.layoutMode;
                i && u.mergeLayoutParam(this.option, t, i)
            },
            optionUpdated: function (t, e) {
            },
            getDefaultOption: function () {
                if (!this.hasOwnProperty("__defaultOption")) {
                    for (var t = [], e = this.constructor; e;) {
                        var i = e.prototype.defaultOption;
                        i && t.push(i), e = e.superClass
                    }
                    for (var n = {}, o = t.length - 1; o >= 0; o--)n = r.merge(n, t[o], !0);
                    this.__defaultOption = n
                }
                return this.__defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
        l.enableClassManagement(h, {registerWhenExtend: !0}), s.enableSubTypeDefaulter(h), s.enableTopologicalTravel(h, n), r.mixin(h, i(128)), t.exports = h
    }, function (t, e, i) {
        (function (e) {
            function n(t) {
                return d.isArray(t) || (t = [t]), t
            }

            function o(t, e) {
                var i = t.dimensions, n = new v(d.map(i, t.getDimensionInfo, t), t.hostModel);
                m(n, t);
                for (var o = n._storage = {}, r = t._storage, a = 0; a < i.length; a++) {
                    var s = i[a], l = r[s];
                    d.indexOf(e, s) >= 0 ? o[s] = new l.constructor(r[s].length) : o[s] = r[s]
                }
                return n
            }

            var r = "undefined", a = "undefined" == typeof window ? e : window, s = typeof a.Float64Array === r ? Array : a.Float64Array, l = typeof a.Int32Array === r ? Array : a.Int32Array, u = {
                "float": s,
                "int": l,
                ordinal: Array,
                number: Array,
                time: Array
            }, h = i(10), c = i(45), d = i(1), f = i(6), p = d.isObject, g = ["stackedOn", "hasItemOption", "_nameList", "_idList", "_rawData"], m = function (t, e) {
                d.each(g.concat(e.__wrappedMethods || []), function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t.__wrappedMethods = e.__wrappedMethods
            }, v = function (t, e) {
                t = t || ["x", "y"];
                for (var i = {}, n = [], o = 0; o < t.length; o++) {
                    var r, a = {};
                    "string" == typeof t[o] ? (r = t[o], a = {
                        name: r,
                        stackable: !1,
                        type: "number"
                    }) : (a = t[o], r = a.name, a.type = a.type || "number"), n.push(r), i[r] = a
                }
                this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
            }, y = v.prototype;
            y.type = "list", y.hasItemOption = !0, y.getDimension = function (t) {
                return isNaN(t) || (t = this.dimensions[t] || t), t
            }, y.getDimensionInfo = function (t) {
                return d.clone(this._dimensionInfos[this.getDimension(t)])
            }, y.initData = function (t, e, i) {
                t = t || [], this._rawData = t;
                var n = this._storage = {}, o = this.indices = [], r = this.dimensions, a = t.length, s = this._dimensionInfos, l = [], h = {};
                e = e || [];
                for (var c = 0; c < r.length; c++) {
                    var d = s[r[c]], p = u[d.type];
                    n[r[c]] = new p(a)
                }
                var g = this;
                i || (g.hasItemOption = !1), i = i || function (t, e, i, n) {
                        var o = f.getDataItemValue(t);
                        return f.isDataItemOption(t) && (g.hasItemOption = !0), f.converDataValue(o instanceof Array ? o[n] : o, s[e])
                    };
                for (var m = 0; m < t.length; m++) {
                    for (var v = t[m], y = 0; y < r.length; y++) {
                        var x = r[y], _ = n[x];
                        _[m] = i(v, x, m, y)
                    }
                    o.push(m)
                }
                for (var c = 0; c < t.length; c++) {
                    e[c] || t[c] && null != t[c].name && (e[c] = t[c].name);
                    var b = e[c] || "", w = t[c] && t[c].id;
                    !w && b && (h[b] = h[b] || 0, w = b, h[b] > 0 && (w += "__ec__" + h[b]), h[b]++), w && (l[c] = w)
                }
                this._nameList = e, this._idList = l
            }, y.count = function () {
                return this.indices.length
            }, y.get = function (t, e, i) {
                var n = this._storage, o = this.indices[e];
                if (null == o)return NaN;
                var r = n[t] && n[t][o];
                if (i) {
                    var a = this._dimensionInfos[t];
                    if (a && a.stackable)for (var s = this.stackedOn; s;) {
                        var l = s.get(t, e);
                        (r >= 0 && l > 0 || r <= 0 && l < 0) && (r += l), s = s.stackedOn
                    }
                }
                return r
            }, y.getValues = function (t, e, i) {
                var n = [];
                d.isArray(t) || (i = e, e = t, t = this.dimensions);
                for (var o = 0, r = t.length; o < r; o++)n.push(this.get(t[o], e, i));
                return n
            }, y.hasValue = function (t) {
                for (var e = this.dimensions, i = this._dimensionInfos, n = 0, o = e.length; n < o; n++)if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t)))return !1;
                return !0
            }, y.getDataExtent = function (t, e) {
                t = this.getDimension(t);
                var i = this._storage[t], n = this.getDimensionInfo(t);
                e = n && n.stackable && e;
                var o, r = (this._extent || (this._extent = {}))[t + !!e];
                if (r)return r;
                if (i) {
                    for (var a = 1 / 0, s = -(1 / 0), l = 0, u = this.count(); l < u; l++)o = this.get(t, l, e), o < a && (a = o), o > s && (s = o);
                    return this._extent[t + !!e] = [a, s]
                }
                return [1 / 0, -(1 / 0)]
            }, y.getSum = function (t, e) {
                var i = this._storage[t], n = 0;
                if (i)for (var o = 0, r = this.count(); o < r; o++) {
                    var a = this.get(t, o, e);
                    isNaN(a) || (n += a)
                }
                return n
            }, y.indexOf = function (t, e) {
                var i = this._storage, n = i[t], o = this.indices;
                if (n)for (var r = 0, a = o.length; r < a; r++) {
                    var s = o[r];
                    if (n[s] === e)return r
                }
                return -1
            }, y.indexOfName = function (t) {
                for (var e = this.indices, i = this._nameList, n = 0, o = e.length; n < o; n++) {
                    var r = e[n];
                    if (i[r] === t)return n
                }
                return -1
            }, y.indexOfRawIndex = function (t) {
                var e = this.indices, i = e[t];
                if (null != i && i === t)return t;
                for (var n = 0, o = e.length - 1; n <= o;) {
                    var r = (n + o) / 2 | 0;
                    if (e[r] < t)n = r + 1; else {
                        if (!(e[r] > t))return r;
                        o = r - 1
                    }
                }
                return -1
            }, y.indexOfNearest = function (t, e, i, n) {
                var o = this._storage, r = o[t];
                null == n && (n = 1 / 0);
                var a = -1;
                if (r)for (var s = Number.MAX_VALUE, l = 0, u = this.count(); l < u; l++) {
                    var h = e - this.get(t, l, i), c = Math.abs(h);
                    h <= n && (c < s || c === s && h > 0) && (s = c, a = l)
                }
                return a
            }, y.getRawIndex = function (t) {
                var e = this.indices[t];
                return null == e ? -1 : e
            }, y.getRawDataItem = function (t) {
                return this._rawData[this.getRawIndex(t)]
            }, y.getName = function (t) {
                return this._nameList[this.indices[t]] || ""
            }, y.getId = function (t) {
                return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
            }, y.each = function (t, e, i, o) {
                "function" == typeof t && (o = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                var r = [], a = t.length, s = this.indices;
                o = o || this;
                for (var l = 0; l < s.length; l++)switch (a) {
                    case 0:
                        e.call(o, l);
                        break;
                    case 1:
                        e.call(o, this.get(t[0], l, i), l);
                        break;
                    case 2:
                        e.call(o, this.get(t[0], l, i), this.get(t[1], l, i), l);
                        break;
                    default:
                        for (var u = 0; u < a; u++)r[u] = this.get(t[u], l, i);
                        r[u] = l, e.apply(o, r)
                }
            }, y.filterSelf = function (t, e, i, o) {
                "function" == typeof t && (o = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                var r = [], a = [], s = t.length, l = this.indices;
                o = o || this;
                for (var u = 0; u < l.length; u++) {
                    var h;
                    if (1 === s)h = e.call(o, this.get(t[0], u, i), u); else {
                        for (var c = 0; c < s; c++)a[c] = this.get(t[c], u, i);
                        a[c] = u, h = e.apply(o, a)
                    }
                    h && r.push(l[u])
                }
                return this.indices = r, this._extent = {}, this
            }, y.mapArray = function (t, e, i, n) {
                "function" == typeof t && (n = i, i = e, e = t, t = []);
                var o = [];
                return this.each(t, function () {
                    o.push(e && e.apply(this, arguments))
                }, i, n), o
            }, y.map = function (t, e, i, r) {
                t = d.map(n(t), this.getDimension, this);
                var a = o(this, t), s = a.indices = this.indices, l = a._storage, u = [];
                return this.each(t, function () {
                    var i = arguments[arguments.length - 1], n = e && e.apply(this, arguments);
                    if (null != n) {
                        "number" == typeof n && (u[0] = n, n = u);
                        for (var o = 0; o < n.length; o++) {
                            var r = t[o], a = l[r], h = s[i];
                            a && (a[h] = n[o])
                        }
                    }
                }, i, r), a
            }, y.downSample = function (t, e, i, n) {
                for (var r = o(this, [t]), a = this._storage, s = r._storage, l = this.indices, u = r.indices = [], h = [], c = [], d = Math.floor(1 / e), f = s[t], p = this.count(), g = 0; g < a[t].length; g++)s[t][g] = a[t][g];
                for (var g = 0; g < p; g += d) {
                    d > p - g && (d = p - g, h.length = d);
                    for (var m = 0; m < d; m++) {
                        var v = l[g + m];
                        h[m] = f[v], c[m] = v
                    }
                    var y = i(h), v = c[n(h, y) || 0];
                    f[v] = y, u.push(v)
                }
                return r
            }, y.getItemModel = function (t) {
                var e = this.hostModel;
                return t = this.indices[t], new h(this._rawData[t], e, e && e.ecModel)
            }, y.diff = function (t) {
                var e, i = this._idList, n = t && t._idList, o = "e\0\0";
                return new c(t ? t.indices : [], this.indices, function (t) {
                    return null != (e = n[t]) ? e : o + t
                }, function (t) {
                    return null != (e = i[t]) ? e : o + t
                })
            }, y.getVisual = function (t) {
                var e = this._visual;
                return e && e[t]
            }, y.setVisual = function (t, e) {
                if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
            }, y.setLayout = function (t, e) {
                if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
            }, y.getLayout = function (t) {
                return this._layout[t]
            }, y.getItemLayout = function (t) {
                return this._itemLayouts[t]
            }, y.setItemLayout = function (t, e, i) {
                this._itemLayouts[t] = i ? d.extend(this._itemLayouts[t] || {}, e) : e
            }, y.clearItemLayouts = function () {
                this._itemLayouts.length = 0
            }, y.getItemVisual = function (t, e, i) {
                var n = this._itemVisuals[t], o = n && n[e];
                return null != o || i ? o : this.getVisual(e)
            }, y.setItemVisual = function (t, e, i) {
                var n = this._itemVisuals[t] || {};
                if (this._itemVisuals[t] = n, p(e))for (var o in e)e.hasOwnProperty(o) && (n[o] = e[o]); else n[e] = i
            }, y.clearAllVisual = function () {
                this._visual = {}, this._itemVisuals = []
            };
            var x = function (t) {
                t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
            };
            y.setItemGraphicEl = function (t, e) {
                var i = this.hostModel;
                e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
            }, y.getItemGraphicEl = function (t) {
                return this._graphicEls[t]
            }, y.eachItemGraphicEl = function (t, e) {
                d.each(this._graphicEls, function (i, n) {
                    i && t && t.call(e, i, n)
                })
            }, y.cloneShallow = function () {
                var t = d.map(this.dimensions, this.getDimensionInfo, this), e = new v(t, this.hostModel);
                return e._storage = this._storage, m(e, this), e.indices = this.indices.slice(), this._extent && (e._extent = d.extend({}, this._extent)), e
            }, y.wrapMethod = function (t, e) {
                var i = this[t];
                "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                    var t = i.apply(this, arguments);
                    return e.apply(this, [t].concat(d.slice(arguments)))
                })
            }, y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], y.CHANGABLE_METHODS = ["filterSelf"], t.exports = v
        }).call(e, function () {
            return this
        }())
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(9), r = i(6), a = i(13), s = i(57), l = i(11), u = i(12), h = o.encodeHTML, c = o.addCommas, d = a.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            visualColorAccessPath: "itemStyle.normal.color",
            layoutMode: null,
            init: function (t, e, i, n) {
                this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
            },
            mergeDefaultAndTheme: function (t, e) {
                var i = this.layoutMode, o = i ? u.getLayoutParams(t) : {};
                n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), r.defaultEmphasis(t.label, r.LABEL_OPTIONS), this.fillDataTextStyle(t.data), i && u.mergeLayoutParam(t, o, i)
            },
            mergeOption: function (t, e) {
                t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                var i = this.layoutMode;
                i && u.mergeLayoutParam(this.option, t, i);
                var o = this.getInitialData(t, e);
                o && (this._data = o, this._dataBeforeProcessed = o.cloneShallow())
            },
            fillDataTextStyle: function (t) {
                if (t)for (var e = 0; e < t.length; e++)t[e] && t[e].label && r.defaultEmphasis(t[e].label, r.LABEL_OPTIONS)
            },
            getInitialData: function () {
            },
            getData: function (t) {
                return null == t ? this._data : this._data.getLinkedData(t)
            },
            setData: function (t) {
                this._data = t
            },
            getRawData: function () {
                return this._dataBeforeProcessed
            },
            coordDimToDataDim: function (t) {
                return [t]
            },
            dataDimToCoordDim: function (t) {
                return t
            },
            getBaseAxis: function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            },
            formatTooltip: function (t, e, i) {
                function r(t) {
                    var i = [];
                    return n.each(t, function (t, n) {
                        var r, s = a.getDimensionInfo(n), l = s && s.type;
                        r = "ordinal" === l ? t + "" : "time" === l ? e ? "" : o.formatTime("yyyy/MM/dd hh:mm:ss", t) : c(t), r && i.push(r)
                    }), i.join(", ")
                }

                var a = this._data, s = this.getRawValue(t), l = n.isArray(s) ? r(s) : c(s), u = a.getName(t), d = a.getItemVisual(t, "color");
                n.isObject(d) && d.colorStops && (d = (d.colorStops[0] || {}).color), d = d || "transparent";
                var f = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + d + '"></span>', p = this.name;
                return "\0-" === p && (p = ""), e ? f + h(this.name) + " : " + l : (p && h(p) + "<br />") + f + (u ? h(u) + " : " + l : l)
            },
            ifEnableAnimation: function () {
                if (l.node)return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
            },
            restoreData: function () {
                this._data = this._dataBeforeProcessed.cloneShallow()
            },
            getColorFromPalette: function (t, e) {
                var i = this.ecModel, n = s.getColorFromPalette.call(this, t, e);
                return n || (n = i.getColorFromPalette(t, e)), n
            },
            getAxisTooltipDataIndex: null,
            getTooltipPosition: null
        });
        n.mixin(d, r.dataFormatMixin), n.mixin(d, s), t.exports = d
    }, function (t, e, i) {
        function n(t, e) {
            var i = t + ":" + e;
            if (l[i])return l[i];
            for (var n = (t + "").split("\n"), o = 0, r = 0, a = n.length; r < a; r++)o = Math.max(p.measureText(n[r], e).width, o);
            return u > h && (u = 0, l = {}), u++, l[i] = o, o
        }

        function o(t, e, i, o) {
            var r = ((t || "") + "").split("\n").length, a = n(t, e), s = n("国", e), l = r * s, u = new d(0, 0, a, l);
            switch (u.lineHeight = s, o) {
                case"bottom":
                case"alphabetic":
                    u.y -= s;
                    break;
                case"middle":
                    u.y -= s / 2
            }
            switch (i) {
                case"end":
                case"right":
                    u.x -= u.width;
                    break;
                case"center":
                    u.x -= u.width / 2
            }
            return u
        }

        function r(t, e, i, n) {
            var o = e.x, r = e.y, a = e.height, s = e.width, l = i.height, u = a / 2 - l / 2, h = "left";
            switch (t) {
                case"left":
                    o -= n, r += u, h = "right";
                    break;
                case"right":
                    o += n + s, r += u, h = "left";
                    break;
                case"top":
                    o += s / 2, r -= n + l, h = "center";
                    break;
                case"bottom":
                    o += s / 2, r += a + n, h = "center";
                    break;
                case"inside":
                    o += s / 2, r += u, h = "center";
                    break;
                case"insideLeft":
                    o += n, r += u, h = "left";
                    break;
                case"insideRight":
                    o += s - n, r += u, h = "right";
                    break;
                case"insideTop":
                    o += s / 2, r += n, h = "center";
                    break;
                case"insideBottom":
                    o += s / 2, r += a - l - n, h = "center";
                    break;
                case"insideTopLeft":
                    o += n, r += n, h = "left";
                    break;
                case"insideTopRight":
                    o += s - n, r += n, h = "right";
                    break;
                case"insideBottomLeft":
                    o += n, r += a - l - n;
                    break;
                case"insideBottomRight":
                    o += s - n, r += a - l - n, h = "right"
            }
            return {x: o, y: r, textAlign: h, textBaseline: "top"}
        }

        function a(t, e, i, o, r) {
            if (!e)return "";
            r = r || {}, o = f(o, "...");
            for (var a = f(r.maxIterations, 2), l = f(r.minChar, 0), u = n("国", i), h = n("a", i), c = f(r.placeholder, ""), d = e = Math.max(0, e - 1), p = 0; p < l && d >= h; p++)d -= h;
            var g = n(o);
            g > d && (o = "", g = 0), d = e - g;
            for (var m = (t + "").split("\n"), p = 0, v = m.length; p < v; p++) {
                var y = m[p], x = n(y, i);
                if (!(x <= e)) {
                    for (var _ = 0; ; _++) {
                        if (x <= d || _ >= a) {
                            y += o;
                            break
                        }
                        var b = 0 === _ ? s(y, d, h, u) : x > 0 ? Math.floor(y.length * d / x) : 0;
                        y = y.substr(0, b), x = n(y, i)
                    }
                    "" === y && (y = c), m[p] = y
                }
            }
            return m.join("\n")
        }

        function s(t, e, i, n) {
            for (var o = 0, r = 0, a = t.length; r < a && o < e; r++) {
                var s = t.charCodeAt(r);
                o += 0 <= s && s <= 127 ? i : n
            }
            return r
        }

        var l = {}, u = 0, h = 5e3, c = i(1), d = i(8), f = c.retrieve, p = {
            getWidth: n,
            getBoundingRect: o,
            adjustTextPositionOnRect: r,
            truncateText: a,
            measureText: function (t, e) {
                var i = c.getContext();
                return i.font = e || "12px sans-serif", i.measureText(t)
            }
        };
        t.exports = p
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t > -w && t < w
        }

        function o(t) {
            return t > w || t < -w
        }

        function r(t, e, i, n, o) {
            var r = 1 - o;
            return r * r * (r * t + 3 * o * e) + o * o * (o * n + 3 * r * i)
        }

        function a(t, e, i, n, o) {
            var r = 1 - o;
            return 3 * (((e - t) * r + 2 * (i - e) * o) * r + (n - i) * o * o)
        }

        function s(t, e, i, o, r, a) {
            var s = o + 3 * (e - i) - t, l = 3 * (i - 2 * e + t), u = 3 * (e - t), h = t - r, c = l * l - 3 * s * u, d = l * u - 9 * s * h, f = u * u - 3 * l * h, p = 0;
            if (n(c) && n(d))if (n(l))a[0] = 0; else {
                var g = -u / l;
                g >= 0 && g <= 1 && (a[p++] = g)
            } else {
                var m = d * d - 4 * c * f;
                if (n(m)) {
                    var v = d / c, g = -l / s + v, y = -v / 2;
                    g >= 0 && g <= 1 && (a[p++] = g), y >= 0 && y <= 1 && (a[p++] = y)
                } else if (m > 0) {
                    var x = b(m), w = c * l + 1.5 * s * (-d + x), S = c * l + 1.5 * s * (-d - x);
                    w = w < 0 ? -_(-w, T) : _(w, T), S = S < 0 ? -_(-S, T) : _(S, T);
                    var g = (-l - (w + S)) / (3 * s);
                    g >= 0 && g <= 1 && (a[p++] = g)
                } else {
                    var I = (2 * c * l - 3 * s * d) / (2 * b(c * c * c)), A = Math.acos(I) / 3, L = b(c), C = Math.cos(A), g = (-l - 2 * L * C) / (3 * s), y = (-l + L * (C + M * Math.sin(A))) / (3 * s), D = (-l + L * (C - M * Math.sin(A))) / (3 * s);
                    g >= 0 && g <= 1 && (a[p++] = g), y >= 0 && y <= 1 && (a[p++] = y), D >= 0 && D <= 1 && (a[p++] = D)
                }
            }
            return p
        }

        function l(t, e, i, r, a) {
            var s = 6 * i - 12 * e + 6 * t, l = 9 * e + 3 * r - 3 * t - 9 * i, u = 3 * e - 3 * t, h = 0;
            if (n(l)) {
                if (o(s)) {
                    var c = -u / s;
                    c >= 0 && c <= 1 && (a[h++] = c)
                }
            } else {
                var d = s * s - 4 * l * u;
                if (n(d))a[0] = -s / (2 * l); else if (d > 0) {
                    var f = b(d), c = (-s + f) / (2 * l), p = (-s - f) / (2 * l);
                    c >= 0 && c <= 1 && (a[h++] = c), p >= 0 && p <= 1 && (a[h++] = p)
                }
            }
            return h
        }

        function u(t, e, i, n, o, r) {
            var a = (e - t) * o + t, s = (i - e) * o + e, l = (n - i) * o + i, u = (s - a) * o + a, h = (l - s) * o + s, c = (h - u) * o + u;
            r[0] = t, r[1] = a, r[2] = u, r[3] = c, r[4] = c, r[5] = h, r[6] = l, r[7] = n
        }

        function h(t, e, i, n, o, a, s, l, u, h, c) {
            var d, f, p, g, m, v = .005, y = 1 / 0;
            I[0] = u, I[1] = h;
            for (var _ = 0; _ < 1; _ += .05)A[0] = r(t, i, o, s, _), A[1] = r(e, n, a, l, _), g = x(I, A), g < y && (d = _, y = g);
            y = 1 / 0;
            for (var w = 0; w < 32 && !(v < S); w++)f = d - v, p = d + v, A[0] = r(t, i, o, s, f), A[1] = r(e, n, a, l, f), g = x(A, I), f >= 0 && g < y ? (d = f, y = g) : (L[0] = r(t, i, o, s, p), L[1] = r(e, n, a, l, p), m = x(L, I), p <= 1 && m < y ? (d = p, y = m) : v *= .5);
            return c && (c[0] = r(t, i, o, s, d), c[1] = r(e, n, a, l, d)), b(y)
        }

        function c(t, e, i, n) {
            var o = 1 - n;
            return o * (o * t + 2 * n * e) + n * n * i
        }

        function d(t, e, i, n) {
            return 2 * ((1 - n) * (e - t) + n * (i - e))
        }

        function f(t, e, i, r, a) {
            var s = t - 2 * e + i, l = 2 * (e - t), u = t - r, h = 0;
            if (n(s)) {
                if (o(l)) {
                    var c = -u / l;
                    c >= 0 && c <= 1 && (a[h++] = c)
                }
            } else {
                var d = l * l - 4 * s * u;
                if (n(d)) {
                    var c = -l / (2 * s);
                    c >= 0 && c <= 1 && (a[h++] = c)
                } else if (d > 0) {
                    var f = b(d), c = (-l + f) / (2 * s), p = (-l - f) / (2 * s);
                    c >= 0 && c <= 1 && (a[h++] = c), p >= 0 && p <= 1 && (a[h++] = p)
                }
            }
            return h
        }

        function p(t, e, i) {
            var n = t + i - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function g(t, e, i, n, o) {
            var r = (e - t) * n + t, a = (i - e) * n + e, s = (a - r) * n + r;
            o[0] = t, o[1] = r, o[2] = s, o[3] = s, o[4] = a, o[5] = i
        }

        function m(t, e, i, n, o, r, a, s, l) {
            var u, h = .005, d = 1 / 0;
            I[0] = a, I[1] = s;
            for (var f = 0; f < 1; f += .05) {
                A[0] = c(t, i, o, f), A[1] = c(e, n, r, f);
                var p = x(I, A);
                p < d && (u = f, d = p)
            }
            d = 1 / 0;
            for (var g = 0; g < 32 && !(h < S); g++) {
                var m = u - h, v = u + h;
                A[0] = c(t, i, o, m), A[1] = c(e, n, r, m);
                var p = x(A, I);
                if (m >= 0 && p < d)u = m, d = p; else {
                    L[0] = c(t, i, o, v), L[1] = c(e, n, r, v);
                    var y = x(L, I);
                    v <= 1 && y < d ? (u = v, d = y) : h *= .5
                }
            }
            return l && (l[0] = c(t, i, o, u), l[1] = c(e, n, r, u)), b(d)
        }

        var v = i(5), y = v.create, x = v.distSquare, _ = Math.pow, b = Math.sqrt, w = 1e-8, S = 1e-4, M = b(3), T = 1 / 3, I = y(), A = y(), L = y();
        t.exports = {
            cubicAt: r,
            cubicDerivativeAt: a,
            cubicRootAt: s,
            cubicExtrema: l,
            cubicSubdivide: u,
            cubicProjectPoint: h,
            quadraticAt: c,
            quadraticDerivativeAt: d,
            quadraticRootAt: f,
            quadraticExtremum: p,
            quadraticSubdivide: g,
            quadraticProjectPoint: m
        }
    }, function (t, e) {
        function i(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
        }

        function n(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
        }

        function o(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }

        function r(t) {
            return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function a(t) {
            return o(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function s(t, e, i) {
            return i < 0 ? i += 1 : i > 1 && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function l(t, e, i) {
            return t + (e - t) * i
        }

        function u(t) {
            if (t) {
                t += "";
                var e = t.replace(/ /g, "").toLowerCase();
                if (e in x)return x[e].slice();
                if ("#" !== e.charAt(0)) {
                    var i = e.indexOf("("), n = e.indexOf(")");
                    if (i !== -1 && n + 1 === e.length) {
                        var o = e.substr(0, i), s = e.substr(i + 1, n - (i + 1)).split(","), l = 1;
                        switch (o) {
                            case"rgba":
                                if (4 !== s.length)return;
                                l = a(s.pop());
                            case"rgb":
                                if (3 !== s.length)return;
                                return [r(s[0]), r(s[1]), r(s[2]), l];
                            case"hsla":
                                if (4 !== s.length)return;
                                return s[3] = a(s[3]), h(s);
                            case"hsl":
                                if (3 !== s.length)return;
                                return h(s);
                            default:
                                return
                        }
                    }
                } else {
                    if (4 === e.length) {
                        var u = parseInt(e.substr(1), 16);
                        if (!(u >= 0 && u <= 4095))return;
                        return [(3840 & u) >> 4 | (3840 & u) >> 8, 240 & u | (240 & u) >> 4, 15 & u | (15 & u) << 4, 1]
                    }
                    if (7 === e.length) {
                        var u = parseInt(e.substr(1), 16);
                        if (!(u >= 0 && u <= 16777215))return;
                        return [(16711680 & u) >> 16, (65280 & u) >> 8, 255 & u, 1]
                    }
                }
            }
        }

        function h(t) {
            var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = a(t[1]), o = a(t[2]), r = o <= .5 ? o * (n + 1) : o + n - o * n, l = 2 * o - r, u = [i(255 * s(l, r, e + 1 / 3)), i(255 * s(l, r, e)), i(255 * s(l, r, e - 1 / 3))];
            return 4 === t.length && (u[3] = t[3]), u
        }

        function c(t) {
            if (t) {
                var e, i, n = t[0] / 255, o = t[1] / 255, r = t[2] / 255, a = Math.min(n, o, r), s = Math.max(n, o, r), l = s - a, u = (s + a) / 2;
                if (0 === l)e = 0, i = 0; else {
                    i = u < .5 ? l / (s + a) : l / (2 - s - a);
                    var h = ((s - n) / 6 + l / 2) / l, c = ((s - o) / 6 + l / 2) / l, d = ((s - r) / 6 + l / 2) / l;
                    n === s ? e = d - c : o === s ? e = 1 / 3 + h - d : r === s && (e = 2 / 3 + c - h), e < 0 && (e += 1), e > 1 && (e -= 1)
                }
                var f = [360 * e, i, u];
                return null != t[3] && f.push(t[3]), f
            }
        }

        function d(t, e) {
            var i = u(t);
            if (i) {
                for (var n = 0; n < 3; n++)e < 0 ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
                return y(i, 4 === i.length ? "rgba" : "rgb")
            }
        }

        function f(t, e) {
            var i = u(t);
            if (i)return ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1)
        }

        function p(t, e, n) {
            if (e && e.length && t >= 0 && t <= 1) {
                n = n || [0, 0, 0, 0];
                var o = t * (e.length - 1), r = Math.floor(o), a = Math.ceil(o), s = e[r], u = e[a], h = o - r;
                return n[0] = i(l(s[0], u[0], h)), n[1] = i(l(s[1], u[1], h)), n[2] = i(l(s[2], u[2], h)), n[3] = i(l(s[3], u[3], h)), n
            }
        }

        function g(t, e, n) {
            if (e && e.length && t >= 0 && t <= 1) {
                var r = t * (e.length - 1), a = Math.floor(r), s = Math.ceil(r), h = u(e[a]), c = u(e[s]), d = r - a, f = y([i(l(h[0], c[0], d)), i(l(h[1], c[1], d)), i(l(h[2], c[2], d)), o(l(h[3], c[3], d))], "rgba");
                return n ? {color: f, leftIndex: a, rightIndex: s, value: r} : f
            }
        }

        function m(t, e, i, o) {
            if (t = u(t))return t = c(t), null != e && (t[0] = n(e)), null != i && (t[1] = a(i)), null != o && (t[2] = a(o)), y(h(t), "rgba")
        }

        function v(t, e) {
            if (t = u(t), t && null != e)return t[3] = o(e), y(t, "rgba")
        }

        function y(t, e) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (i += "," + t[3]), e + "(" + i + ")"
        }

        var x = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        t.exports = {
            parse: u,
            lift: d,
            toHex: f,
            fastMapToColor: p,
            mapToColor: g,
            modifyHSL: m,
            modifyAlpha: v,
            stringify: y
        }
    }, function (t, e) {
        var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
            create: function () {
                var t = new i(6);
                return n.identity(t), t
            }, identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }, mul: function (t, e, i) {
                var n = e[0] * i[0] + e[2] * i[1], o = e[1] * i[0] + e[3] * i[1], r = e[0] * i[2] + e[2] * i[3], a = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
                return t[0] = n, t[1] = o, t[2] = r, t[3] = a, t[4] = s, t[5] = l, t
            }, translate: function (t, e, i) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
            }, rotate: function (t, e, i) {
                var n = e[0], o = e[2], r = e[4], a = e[1], s = e[3], l = e[5], u = Math.sin(i), h = Math.cos(i);
                return t[0] = n * h + a * u, t[1] = -n * u + a * h, t[2] = o * h + s * u, t[3] = -o * u + h * s, t[4] = h * r + u * l, t[5] = h * l - u * r, t
            }, scale: function (t, e, i) {
                var n = i[0], o = i[1];
                return t[0] = e[0] * n, t[1] = e[1] * o, t[2] = e[2] * n, t[3] = e[3] * o, t[4] = e[4] * n, t[5] = e[5] * o, t
            }, invert: function (t, e) {
                var i = e[0], n = e[2], o = e[4], r = e[1], a = e[3], s = e[5], l = i * a - r * n;
                return l ? (l = 1 / l, t[0] = a * l, t[1] = -r * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - a * o) * l, t[5] = (r * o - i * s) * l, t) : null
            }
        };
        t.exports = n
    }, function (t, e) {
        var i = Array.prototype.slice, n = function () {
            this._$handlers = {}
        };
        n.prototype = {
            constructor: n, one: function (t, e, i) {
                var n = this._$handlers;
                if (!e || !t)return this;
                n[t] || (n[t] = []);
                for (var o = 0; o < n[t].length; o++)if (n[t][o].h === e)return this;
                return n[t].push({h: e, one: !0, ctx: i || this}), this
            }, on: function (t, e, i) {
                var n = this._$handlers;
                if (!e || !t)return this;
                n[t] || (n[t] = []);
                for (var o = 0; o < n[t].length; o++)if (n[t][o].h === e)return this;
                return n[t].push({h: e, one: !1, ctx: i || this}), this
            }, isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t].length
            }, off: function (t, e) {
                var i = this._$handlers;
                if (!t)return this._$handlers = {}, this;
                if (e) {
                    if (i[t]) {
                        for (var n = [], o = 0, r = i[t].length; o < r; o++)i[t][o].h != e && n.push(i[t][o]);
                        i[t] = n
                    }
                    i[t] && 0 === i[t].length && delete i[t]
                } else delete i[t];
                return this
            }, trigger: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, n = e.length;
                    n > 3 && (e = i.call(e, 1));
                    for (var o = this._$handlers[t], r = o.length, a = 0; a < r;) {
                        switch (n) {
                            case 1:
                                o[a].h.call(o[a].ctx);
                                break;
                            case 2:
                                o[a].h.call(o[a].ctx, e[1]);
                                break;
                            case 3:
                                o[a].h.call(o[a].ctx, e[1], e[2]);
                                break;
                            default:
                                o[a].h.apply(o[a].ctx, e)
                        }
                        o[a].one ? (o.splice(a, 1), r--) : a++
                    }
                }
                return this
            }, triggerWithContext: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, n = e.length;
                    n > 4 && (e = i.call(e, 1, e.length - 1));
                    for (var o = e[e.length - 1], r = this._$handlers[t], a = r.length, s = 0; s < a;) {
                        switch (n) {
                            case 1:
                                r[s].h.call(o);
                                break;
                            case 2:
                                r[s].h.call(o, e[1]);
                                break;
                            case 3:
                                r[s].h.call(o, e[1], e[2]);
                                break;
                            default:
                                r[s].h.apply(o, e)
                        }
                        r[s].one ? (r.splice(s, 1), a--) : s++
                    }
                }
                return this
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = r.slice(arguments, 2);
            return this.superClass.prototype[e].apply(t, i)
        }

        function o(t, e, i) {
            return this.superClass.prototype[e].apply(t, i)
        }

        var r = i(1), a = {}, s = ".", l = "___EC__COMPONENT__CONTAINER___", u = a.parseClassType = function (t) {
            var e = {main: "", sub: ""};
            return t && (t = t.split(s), e.main = t[0] || "", e.sub = t[1] || ""), e
        };
        a.enableClassExtend = function (t, e) {
            t.$constructor = t, t.extend = function (t) {
                var e = this, i = function () {
                    t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                };
                return r.extend(i.prototype, t), i.extend = this.extend, i.superCall = n, i.superApply = o, r.inherits(i, this), i.superClass = e, i
            }
        }, a.enableClassManagement = function (t, e) {
            function i(t) {
                var e = n[t.main];
                return e && e[l] || (e = n[t.main] = {}, e[l] = !0), e
            }

            e = e || {};
            var n = {};
            if (t.registerClass = function (t, e) {
                    if (e)if (e = u(e), e.sub) {
                        if (e.sub !== l) {
                            var o = i(e);
                            o[e.sub] = t
                        }
                    } else n[e.main] = t;
                    return t
                }, t.getClass = function (t, e, i) {
                    var o = n[t];
                    if (o && o[l] && (o = e ? o[e] : null), i && !o)throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
                    return o
                }, t.getClassesByMainType = function (t) {
                    t = u(t);
                    var e = [], i = n[t.main];
                    return i && i[l] ? r.each(i, function (t, i) {
                        i !== l && e.push(t)
                    }) : e.push(i), e
                }, t.hasClass = function (t) {
                    return t = u(t), !!n[t.main]
                }, t.getAllClassMainTypes = function () {
                    var t = [];
                    return r.each(n, function (e, i) {
                        t.push(i)
                    }), t
                }, t.hasSubTypes = function (t) {
                    t = u(t);
                    var e = n[t.main];
                    return e && e[l]
                }, t.parseClassType = u, e.registerWhenExtend) {
                var o = t.extend;
                o && (t.extend = function (e) {
                    var i = o.call(this, e);
                    return t.registerClass(i, e.type)
                })
            }
            return t
        }, a.setReadOnly = function (t, e) {
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(136), o = i(38);
        i(137), i(135);
        var r = i(31), a = i(4), s = i(1), l = i(16), u = {};
        u.getScaleExtent = function (t, e) {
            var i = t.scale, n = i.getExtent(), o = n[1] - n[0];
            if ("ordinal" === i.type)return isFinite(o) ? n : [0, 0];
            var r = e.getMin ? e.getMin() : e.get("min"), l = e.getMax ? e.getMax() : e.get("max"), u = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"), h = e.get("boundaryGap");
            s.isArray(h) || (h = [h || 0, h || 0]), h[0] = a.parsePercent(h[0], 1), h[1] = a.parsePercent(h[1], 1);
            var c = !0, d = !0;
            return null == r && (r = n[0] - h[0] * o, c = !1), null == l && (l = n[1] + h[1] * o, d = !1), "dataMin" === r && (r = n[0]), "dataMax" === l && (l = n[1]), u && (r > 0 && l > 0 && !c && (r = 0), r < 0 && l < 0 && !d && (l = 0)), [r, l]
        }, u.niceScaleExtent = function (t, e) {
            var i = t.scale, n = u.getScaleExtent(t, e), o = null != (e.getMin ? e.getMin() : e.get("min")), r = null != (e.getMax ? e.getMax() : e.get("max")), a = e.get("splitNumber");
            "log" === i.type && (i.base = e.get("logBase")), i.setExtent(n[0], n[1]), i.niceExtent(a, o, r);
            var s = e.get("minInterval");
            if (isFinite(s) && !o && !r && "interval" === i.type) {
                var l = i.getInterval(), h = Math.max(Math.abs(l), s) / l;
                n = i.getExtent();
                var c = (n[1] + n[0]) / 2;
                i.setExtent(h * (n[0] - c) + c, h * (n[1] - c) + c), i.niceExtent(a)
            }
            var l = e.get("interval");
            null != l && i.setInterval && i.setInterval(l)
        }, u.createScaleByModel = function (t, e) {
            if (e = e || t.get("type"))switch (e) {
                case"category":
                    return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
                case"value":
                    return new o;
                default:
                    return (r.getClass(e) || o).create(t)
            }
        }, u.ifAxisCrossZero = function (t) {
            var e = t.scale.getExtent(), i = e[0], n = e[1];
            return !(i > 0 && n > 0 || i < 0 && n < 0)
        }, u.getAxisLabelInterval = function (t, e, i, n) {
            var o, r = 0, a = 0, s = 1;
            e.length > 40 && (s = Math.floor(e.length / 40));
            for (var u = 0; u < t.length; u += s) {
                var h = t[u], c = l.getBoundingRect(e[u], i, "center", "top");
                c[n ? "x" : "y"] += h, c[n ? "width" : "height"] *= 1.3, o ? o.intersect(c) ? (a++, r = Math.max(r, a)) : (o.union(c), a = 0) : o = c.clone()
            }
            return 0 === r && s > 1 ? s : (r + 1) * s - 1
        }, u.getFormattedLabels = function (t, e) {
            var i = t.scale, n = i.getTicksLabels(), o = i.getTicks();
            return "string" == typeof e ? (e = function (t) {
                return function (e) {
                    return t.replace("{value}", null != e ? e : "")
                }
            }(e), s.map(n, e)) : "function" == typeof e ? s.map(o, function (n, o) {
                return e("category" === t.type ? i.getLabel(n) : n, o)
            }, this) : n
        }, t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n() {
            this._coordinateSystems = []
        }

        var o = i(1), r = {};
        n.prototype = {
            constructor: n, create: function (t, e) {
                var i = [];
                o.each(r, function (n, o) {
                    var r = n.create(t, e);
                    i = i.concat(r || [])
                }), this._coordinateSystems = i
            }, update: function (t, e) {
                o.each(this._coordinateSystems, function (i) {
                    i.update && i.update(t, e)
                })
            }, getCoordinateSystems: function () {
                return this._coordinateSystems.slice()
            }
        }, n.register = function (t, e) {
            r[t] = e
        }, n.get = function (t) {
            return r[t]
        }, t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
        }

        function o(t, e, i, n) {
            return i = i || {}, n || !h.canvasSupported ? r(t, e, i) : h.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : r(t, e, i), i
        }

        function r(t, e, i) {
            var o = n(t);
            i.zrX = e.clientX - o.left, i.zrY = e.clientY - o.top
        }

        function a(t, e, i) {
            if (e = e || window.event, null != e.zrX)return e;
            var n = e.type, r = n && n.indexOf("touch") >= 0;
            if (r) {
                var a = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
                a && o(t, a, e, i)
            } else o(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
            return e
        }

        function s(t, e, i) {
            c ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
        }

        function l(t, e, i) {
            c ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
        }

        var u = i(20), h = i(11), c = "undefined" != typeof window && !!window.addEventListener, d = c ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        };
        t.exports = {
            clientToLocal: o,
            normalizeEvent: a,
            addEventListener: s,
            removeEventListener: l,
            stop: d,
            Dispatcher: u
        }
    }, function (t, e) {
        "use strict";
        var i = {};
        t.exports = {
            register: function (t, e) {
                i[t] = e
            }, get: function (t) {
                return i[t]
            }
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(3), o = i(8), r = n.extendShape({
            type: "triangle",
            shape: {cx: 0, cy: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = e.width / 2, r = e.height / 2;
                t.moveTo(i, n - r), t.lineTo(i + o, n + r), t.lineTo(i - o, n + r), t.closePath()
            }
        }), a = n.extendShape({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = e.width / 2, r = e.height / 2;
                t.moveTo(i, n - r), t.lineTo(i + o, n), t.lineTo(i, n + r), t.lineTo(i - o, n), t.closePath()
            }
        }), s = n.extendShape({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, o = e.width / 5 * 3, r = Math.max(o, e.height), a = o / 2, s = a * a / (r - a), l = n - r + a + s, u = Math.asin(s / a), h = Math.cos(u) * a, c = Math.sin(u), d = Math.cos(u);
                t.arc(i, l, a, Math.PI - u, 2 * Math.PI + u);
                var f = .6 * a, p = .7 * a;
                t.bezierCurveTo(i + h - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - h + c * f, l + s + d * f, i - h, l + s), t.closePath()
            }
        }), l = n.extendShape({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.height, n = e.width, o = e.x, r = e.y, a = n / 3 * 2;
                t.moveTo(o, r), t.lineTo(o + a, r + i), t.lineTo(o, r + i / 4 * 3), t.lineTo(o - a, r + i), t.lineTo(o, r), t.closePath()
            }
        }), u = {
            line: n.Line,
            rect: n.Rect,
            roundRect: n.Rect,
            square: n.Rect,
            circle: n.Circle,
            diamond: a,
            pin: s,
            arrow: l,
            triangle: r
        }, h = {
            line: function (t, e, i, n, o) {
                o.x1 = t, o.y1 = e + n / 2, o.x2 = t + i, o.y2 = e + n / 2
            }, rect: function (t, e, i, n, o) {
                o.x = t, o.y = e, o.width = i, o.height = n
            }, roundRect: function (t, e, i, n, o) {
                o.x = t, o.y = e, o.width = i, o.height = n, o.r = Math.min(i, n) / 4
            }, square: function (t, e, i, n, o) {
                var r = Math.min(i, n);
                o.x = t, o.y = e, o.width = r, o.height = r
            }, circle: function (t, e, i, n, o) {
                o.cx = t + i / 2, o.cy = e + n / 2, o.r = Math.min(i, n) / 2
            }, diamond: function (t, e, i, n, o) {
                o.cx = t + i / 2, o.cy = e + n / 2, o.width = i, o.height = n
            }, pin: function (t, e, i, n, o) {
                o.x = t + i / 2, o.y = e + n / 2, o.width = i, o.height = n
            }, arrow: function (t, e, i, n, o) {
                o.x = t + i / 2, o.y = e + n / 2, o.width = i, o.height = n
            }, triangle: function (t, e, i, n, o) {
                o.cx = t + i / 2, o.cy = e + n / 2, o.width = i, o.height = n
            }
        }, c = {};
        for (var d in u)u.hasOwnProperty(d) && (c[d] = new u[d]);
        var f = n.extendShape({
            type: "symbol",
            shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
            beforeBrush: function () {
                var t = this.style, e = this.shape;
                "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
            },
            buildPath: function (t, e, i) {
                var n = e.symbolType, o = c[n];
                "none" !== e.symbolType && (o || (n = "rect", o = c[n]), h[n](e.x, e.y, e.width, e.height, o.shape), o.buildPath(t, o.shape, i))
            }
        }), p = function (t) {
            if ("image" !== this.type) {
                var e = this.style, i = this.shape;
                i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty(!1)
            }
        }, g = {
            createSymbol: function (t, e, i, r, a, s) {
                var l = 0 === t.indexOf("empty");
                l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                var u;
                return u = 0 === t.indexOf("image://") ? new n.Image({
                    style: {
                        image: t.slice(8),
                        x: e,
                        y: i,
                        width: r,
                        height: a
                    }
                }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new o(e, i, r, a)) : new f({
                    shape: {
                        symbolType: t,
                        x: e,
                        y: i,
                        width: r,
                        height: a
                    }
                }), u.__isEmptyBrush = l, u.setColor = p, u.setColor(s), u
            }
        };
        t.exports = g
    }, function (t, e, i) {
        function n() {
            this.group = new a, this.uid = s.getUID("viewChart")
        }

        function o(t, e) {
            if (t && (t.trigger(e), "group" === t.type))for (var i = 0; i < t.childCount(); i++)o(t.childAt(i), e)
        }

        function r(t, e, i) {
            var n = u.queryDataIndex(t, e);
            null != n ? h.each(u.normalizeToArray(n), function (e) {
                o(t.getItemGraphicEl(e), i)
            }) : t.eachItemGraphicEl(function (t) {
                o(t, i)
            })
        }

        var a = i(33), s = i(43), l = i(21), u = i(6), h = i(1);
        n.prototype = {
            type: "chart", init: function (t, e) {
            }, render: function (t, e, i, n) {
            }, highlight: function (t, e, i, n) {
                r(t.getData(), n, "emphasis")
            }, downplay: function (t, e, i, n) {
                r(t.getData(), n, "normal")
            }, remove: function (t, e) {
                this.group.removeAll()
            }, dispose: function () {
            }
        };
        var c = n.prototype;
        c.updateView = c.updateLayout = c.updateVisual = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, l.enableClassExtend(n, ["dispose"]), l.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
    }, function (t, e, i) {
        "use strict";
        var n = i(17), o = i(5), r = i(74), a = i(8), s = i(32).devicePixelRatio, l = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        }, u = [], h = [], c = [], d = [], f = Math.min, p = Math.max, g = Math.cos, m = Math.sin, v = Math.sqrt, y = Math.abs, x = "undefined" != typeof Float32Array, _ = function () {
            this.data = [], this._len = 0, this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0
        };
        _.prototype = {
            constructor: _,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e) {
                this._ux = y(1 / s / t) || 0, this._uy = y(1 / s / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, i, n, o, r) {
                return this.addData(l.C, t, e, i, n, o, r), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, o, r) : this._ctx.bezierCurveTo(t, e, i, n, o, r)), this._xi = o, this._yi = r, this
            },
            quadraticCurveTo: function (t, e, i, n) {
                return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
            },
            arc: function (t, e, i, n, o, r) {
                return this.addData(l.A, t, e, i, i, n, o - n, 0, r ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, o, r), this._xi = g(o) * i + t, this._xi = m(o) * i + t, this
            },
            arcTo: function (t, e, i, n, o) {
                return this._ctx && this._ctx.arcTo(t, e, i, n, o), this
            },
            rect: function (t, e, i, n) {
                return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
            },
            closePath: function () {
                this.addData(l.Z);
                var t = this._ctx, e = this._x0, i = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, i = 0; i < t.length; i++)e += t[i];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
                for (var i = 0; i < e; i++)this.data[i] = t[i];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, i = 0, n = this._len, o = 0; o < e; o++)i += t[o].len();
                x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                for (var o = 0; o < e; o++)for (var r = t[o].data, a = 0; a < r.length; a++)this.data[n++] = r[a];
                this._len = n
            },
            addData: function (t) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++)e[this._len++] = arguments[i];
                this._prevCmd = t
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++)t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var i, n, o = this._dashSum, r = this._dashOffset, a = this._lineDash, s = this._ctx, l = this._xi, u = this._yi, h = t - l, c = e - u, d = v(h * h + c * c), g = l, m = u, y = a.length;
                for (h /= d, c /= d, r < 0 && (r = o + r), r %= o, g -= r * h, m -= r * c; h > 0 && g <= t || h < 0 && g >= t || 0 == h && (c > 0 && m <= e || c < 0 && m >= e);)n = this._dashIdx, i = a[n], g += h * i, m += c * i, this._dashIdx = (n + 1) % y, h > 0 && g < l || h < 0 && g > l || c > 0 && m < u || c < 0 && m > u || s[n % 2 ? "moveTo" : "lineTo"](h >= 0 ? f(g, t) : p(g, t), c >= 0 ? f(m, e) : p(m, e));
                h = g - t, c = m - e, this._dashOffset = -v(h * h + c * c)
            },
            _dashedBezierTo: function (t, e, i, o, r, a) {
                var s, l, u, h, c, d = this._dashSum, f = this._dashOffset, p = this._lineDash, g = this._ctx, m = this._xi, y = this._yi, x = n.cubicAt, _ = 0, b = this._dashIdx, w = p.length, S = 0;
                for (f < 0 && (f = d + f), f %= d, s = 0; s < 1; s += .1)l = x(m, t, i, r, s + .1) - x(m, t, i, r, s), u = x(y, e, o, a, s + .1) - x(y, e, o, a, s), _ += v(l * l + u * u);
                for (; b < w && (S += p[b], !(S > f)); b++);
                for (s = (S - f) / _; s <= 1;)h = x(m, t, i, r, s), c = x(y, e, o, a, s), b % 2 ? g.moveTo(h, c) : g.lineTo(h, c), s += p[b] / _, b = (b + 1) % w;
                b % 2 !== 0 && g.lineTo(r, a), l = r - h, u = a - c, this._dashOffset = -v(l * l + u * u)
            },
            _dashedQuadraticTo: function (t, e, i, n) {
                var o = i, r = n;
                i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, o, r)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                u[0] = u[1] = c[0] = c[1] = Number.MAX_VALUE, h[0] = h[1] = d[0] = d[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, i = 0, n = 0, s = 0, f = 0; f < t.length;) {
                    var p = t[f++];
                    switch (1 == f && (e = t[f], i = t[f + 1], n = e, s = i), p) {
                        case l.M:
                            n = t[f++], s = t[f++], e = n, i = s, c[0] = n, c[1] = s, d[0] = n, d[1] = s;
                            break;
                        case l.L:
                            r.fromLine(e, i, t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.C:
                            r.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.Q:
                            r.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.A:
                            var v = t[f++], y = t[f++], x = t[f++], _ = t[f++], b = t[f++], w = t[f++] + b, S = (t[f++], 1 - t[f++]);
                            1 == f && (n = g(b) * x + v, s = m(b) * _ + y), r.fromArc(v, y, x, _, b, w, S, c, d), e = g(w) * x + v, i = m(w) * _ + y;
                            break;
                        case l.R:
                            n = e = t[f++], s = i = t[f++];
                            var M = t[f++], T = t[f++];
                            r.fromLine(n, s, n + M, s + T, c, d);
                            break;
                        case l.Z:
                            e = n, i = s
                    }
                    o.min(u, u, c), o.max(h, h, d)
                }
                return 0 === f && (u[0] = u[1] = h[0] = h[1] = 0), new a(u[0], u[1], h[0] - u[0], h[1] - u[1])
            },
            rebuildPath: function (t) {
                for (var e, i, n, o, r, a, s = this.data, u = this._ux, h = this._uy, c = this._len, d = 0; d < c;) {
                    var f = s[d++];
                    switch (1 == d && (n = s[d], o = s[d + 1], e = n, i = o), f) {
                        case l.M:
                            e = n = s[d++], i = o = s[d++], t.moveTo(n, o);
                            break;
                        case l.L:
                            r = s[d++], a = s[d++], (y(r - n) > u || y(a - o) > h || d === c - 1) && (t.lineTo(r, a), n = r, o = a);
                            break;
                        case l.C:
                            t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], o = s[d - 1];
                            break;
                        case l.Q:
                            t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], o = s[d - 1];
                            break;
                        case l.A:
                            var p = s[d++], v = s[d++], x = s[d++], _ = s[d++], b = s[d++], w = s[d++], S = s[d++], M = s[d++], T = x > _ ? x : _, I = x > _ ? 1 : x / _, A = x > _ ? _ / x : 1, L = Math.abs(x - _) > .001, C = b + w;
                            L ? (t.translate(p, v), t.rotate(S), t.scale(I, A), t.arc(0, 0, T, b, C, 1 - M), t.scale(1 / I, 1 / A), t.rotate(-S), t.translate(-p, -v)) : t.arc(p, v, T, b, C, 1 - M), 1 == d && (e = g(b) * x + p, i = m(b) * _ + v), n = g(C) * x + p, o = m(C) * _ + v;
                            break;
                        case l.R:
                            e = n = s[d], i = o = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]);
                            break;
                        case l.Z:
                            t.closePath(), n = e, o = i
                    }
                }
            }
        }, _.CMD = l, t.exports = _
    }, function (t, e, i) {
        function n(t, e, i, n) {
            if (!e)return t;
            var s = o(e[0]), l = r.isArray(s) && s.length || 1;
            i = i || [], n = n || "extra";
            for (var u = 0; u < l; u++)if (!t[u]) {
                var h = i[u] || n + (u - i.length);
                t[u] = a(e, u) ? {type: "ordinal", name: h} : h
            }
            return t
        }

        function o(t) {
            return r.isArray(t) ? t : r.isObject(t) ? t.value : t
        }

        var r = i(1), a = n.guessOrdinal = function (t, e) {
            for (var i = 0, n = t.length; i < n; i++) {
                var a = o(t[i]);
                if (!r.isArray(a))return !1;
                var a = a[e];
                if (null != a && isFinite(a))return !1;
                if (r.isString(a) && "-" !== a)return !0
            }
            return !1
        };
        t.exports = n
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            for (var e = 0; e < t.length; e++)t[e][1] || (t[e][1] = t[e][0]);
            return function (e) {
                for (var i = {}, o = 0; o < t.length; o++) {
                    var r = t[o][1];
                    if (!(e && n.indexOf(e, r) >= 0)) {
                        var a = this.getShallow(r);
                        null != a && (i[t[o][0]] = a)
                    }
                }
                return i
            }
        }
    }, function (t, e, i) {
        function n() {
            this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
        }

        var o = i(21), r = n.prototype;
        r.parse = function (t) {
            return t
        }, r.contain = function (t) {
            var e = this._extent;
            return t >= e[0] && t <= e[1]
        }, r.normalize = function (t) {
            var e = this._extent;
            return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
        }, r.scale = function (t) {
            var e = this._extent;
            return t * (e[1] - e[0]) + e[0]
        }, r.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
        }, r.getExtent = function () {
            return this._extent.slice()
        }, r.setExtent = function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
        }, r.getTicksLabels = function () {
            for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
            return t
        }, o.enableClassExtend(n), o.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
    }, function (t, e) {
        var i = 1;
        "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
        var n = {debugMode: 0, devicePixelRatio: i};
        t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = i(59), r = i(8), a = function (t) {
            t = t || {}, o.call(this, t);
            for (var e in t)t.hasOwnProperty(e) && (this[e] = t[e]);
            this._children = [], this.__storage = null, this.__dirty = !0
        };
        a.prototype = {
            constructor: a, isGroup: !0, type: "group", silent: !1, children: function () {
                return this._children.slice()
            }, childAt: function (t) {
                return this._children[t]
            }, childOfName: function (t) {
                for (var e = this._children, i = 0; i < e.length; i++)if (e[i].name === t)return e[i]
            }, childCount: function () {
                return this._children.length
            }, add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            }, addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var i = this._children, n = i.indexOf(e);
                    n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                }
                return this
            }, _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage, i = this.__zr;
                e && e !== t.__storage && (e.addToMap(t), t instanceof a && t.addChildrenToStorage(e)), i && i.refresh()
            }, remove: function (t) {
                var e = this.__zr, i = this.__storage, o = this._children, r = n.indexOf(o, t);
                return r < 0 ? this : (o.splice(r, 1), t.parent = null, i && (i.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(i)), e && e.refresh(), this)
            }, removeAll: function () {
                var t, e, i = this._children, n = this.__storage;
                for (e = 0; e < i.length; e++)t = i[e], n && (n.delFromMap(t.id), t instanceof a && t.delChildrenFromStorage(n)), t.parent = null;
                return i.length = 0, this
            }, eachChild: function (t, e) {
                for (var i = this._children, n = 0; n < i.length; n++) {
                    var o = i[n];
                    t.call(e, o, n)
                }
                return this
            }, traverse: function (t, e) {
                for (var i = 0; i < this._children.length; i++) {
                    var n = this._children[i];
                    t.call(e, n), "group" === n.type && n.traverse(t, e)
                }
                return this
            }, addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.addToMap(i), i instanceof a && i.addChildrenToStorage(t)
                }
            }, delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.delFromMap(i.id), i instanceof a && i.delChildrenFromStorage(t)
                }
            }, dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            }, getBoundingRect: function (t) {
                for (var e = null, i = new r(0, 0, 0, 0), n = t || this._children, o = [], a = 0; a < n.length; a++) {
                    var s = n[a];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(), u = s.getLocalTransform(o);
                        u ? (i.copy(l), i.applyTransform(u), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || i
            }
        }, n.inherits(a, o), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            for (var e = 0; e < t.length && null == t[e];)e++;
            return t[e]
        }

        function o(t) {
            var e = n(t);
            return null != e && !c.isArray(p(e))
        }

        function r(t, e, i) {
            t = t || [];
            var n = e.get("coordinateSystem"), r = m[n], a = f.get(n), s = r && r(t, e, i), v = s && s.dimensions;
            v || (v = a && a.dimensions || ["x", "y"], v = h(v, t, v.concat(["value"])));
            var y = s ? s.categoryIndex : -1, x = new u(v, e), _ = l(s, t), b = {}, w = y >= 0 && o(t) ? function (t, e, i, n) {
                return d.isDataItemOption(t) && (x.hasItemOption = !0), n === y ? i : g(p(t), v[n])
            } : function (t, e, i, n) {
                var o = p(t), r = g(o && o[n], v[n]);
                d.isDataItemOption(t) && (x.hasItemOption = !0);
                var a = s && s.categoryAxesModels;
                return a && a[e] && "string" == typeof r && (b[e] = b[e] || a[e].getCategories(), r = c.indexOf(b[e], r), r < 0 && !isNaN(r) && (r = +r)), r
            };
            return x.hasItemOption = !1, x.initData(t, _, w), x
        }

        function a(t) {
            return "category" !== t && "time" !== t
        }

        function s(t) {
            return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
        }

        function l(t, e) {
            var i, n = [], o = t && t.dimensions[t.categoryIndex];
            if (o && (i = t.categoryAxesModels[o.name]), i) {
                var r = i.getCategories();
                if (r) {
                    var a = e.length;
                    if (c.isArray(e[0]) && e[0].length > 1) {
                        n = [];
                        for (var s = 0; s < a; s++)n[s] = r[e[s][t.categoryIndex || 0]]
                    } else n = r.slice(0)
                }
            }
            return n
        }

        var u = i(14), h = i(29), c = i(1), d = i(6), f = i(23), p = d.getDataItemValue, g = d.converDataValue, m = {
            cartesian2d: function (t, e, i) {
                var n = c.map(["xAxis", "yAxis"], function (t) {
                    return i.queryComponents({mainType: t, index: e.get(t + "Index"), id: e.get(t + "Id")})[0]
                }), o = n[0], r = n[1], l = o.get("type"), u = r.get("type"), d = [{
                    name: "x",
                    type: s(l),
                    stackable: a(l)
                }, {name: "y", type: s(u), stackable: a(u)}], f = "category" === l, p = "category" === u;
                h(d, t, ["x", "y", "z"]);
                var g = {};
                return f && (g.x = o), p && (g.y = r), {
                    dimensions: d,
                    categoryIndex: f ? 0 : p ? 1 : -1,
                    categoryAxesModels: g
                }
            }, polar: function (t, e, i) {
                var n = i.queryComponents({
                    mainType: "polar",
                    index: e.get("polarIndex"),
                    id: e.get("polarId")
                })[0], o = n.findAxisModel("angleAxis"), r = n.findAxisModel("radiusAxis"), l = r.get("type"), u = o.get("type"), c = [{
                    name: "radius",
                    type: s(l),
                    stackable: a(l)
                }, {name: "angle", type: s(u), stackable: a(u)}], d = "category" === u, f = "category" === l;
                h(c, t, ["radius", "angle", "value"]);
                var p = {};
                return f && (p.radius = r), d && (p.angle = o), {
                    dimensions: c,
                    categoryIndex: d ? 1 : f ? 0 : -1,
                    categoryAxesModels: p
                }
            }, geo: function (t, e, i) {
                return {dimensions: h([{name: "lng"}, {name: "lat"}], t, ["lng", "lat", "value"])}
            }
        };
        t.exports = r
    }, function (t, e, i) {
        "use strict";
        var n = i(3), o = i(1), r = i(2);
        i(55), i(106), r.extendComponentView({
            type: "grid", render: function (t, e) {
                this.group.removeAll(), t.get("show") && this.group.add(new n.Rect({
                    shape: t.coordinateSystem.getRect(),
                    style: o.defaults({fill: t.get("backgroundColor")}, t.getItemStyle()),
                    silent: !0,
                    z2: -1
                }))
            }
        }), r.registerPreprocessor(function (t) {
            t.xAxis && t.yAxis && !t.grid && (t.grid = {})
        })
    }, function (t, e, i) {
        function n(t) {
            t = t || {}, a.call(this, t);
            for (var e in t)t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new r(t.style), this._rect = null, this.__clipPaths = []
        }

        var o = i(1), r = i(65), a = i(59), s = i(76);
        n.prototype = {
            constructor: n,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: -1,
            beforeBrush: function (t) {
            },
            afterBrush: function (t) {
            },
            brush: function (t, e) {
            },
            getBoundingRect: function () {
            },
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
                return n.contain(i[0], i[1])
            },
            dirty: function () {
                this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? a.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new r(t), this.dirty(!1), this
            }
        }, o.inherits(n, a), o.mixin(n, s), t.exports = n
    }, function (t, e) {
        var i = function (t) {
            this.colorStops = t || []
        };
        i.prototype = {
            constructor: i, addColorStop: function (t, e) {
                this.colorStops.push({offset: t, color: e})
            }
        }, t.exports = i
    }, function (t, e, i) {
        var n = i(4), o = i(9), r = i(31), a = Math.floor, s = Math.ceil, l = n.getPrecisionSafe, u = n.round, h = r.extend({
            type: "interval",
            _interval: 0,
            setExtent: function (t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
            },
            unionExtent: function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), h.prototype.setExtent.call(this, e[0], e[1])
            },
            getInterval: function () {
                return this._interval || this.niceTicks(), this._interval
            },
            setInterval: function (t) {
                this._interval = t, this._niceExtent = this._extent.slice()
            },
            getTicks: function () {
                this._interval || this.niceTicks();
                var t = this._interval, e = this._extent, i = [], n = 1e4;
                if (t) {
                    var o = this._niceExtent, r = l(t) + 2;
                    e[0] < o[0] && i.push(e[0]);
                    for (var a = o[0]; a <= o[1];)if (i.push(a), a = u(a + t, r), i.length > n)return [];
                    e[1] > (i.length ? i[i.length - 1] : o[1]) && i.push(e[1])
                }
                return i
            },
            getTicksLabels: function () {
                for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                return t
            },
            getLabel: function (t) {
                return o.addCommas(t)
            },
            niceTicks: function (t) {
                t = t || 5;
                var e = this._extent, i = e[1] - e[0];
                if (isFinite(i)) {
                    i < 0 && (i = -i, e.reverse());
                    var o = u(n.nice(i / t, !0), Math.max(l(e[0]), l(e[1])) + 2), r = l(o) + 2, h = [u(s(e[0] / o) * o, r), u(a(e[1] / o) * o, r)];
                    this._interval = o, this._niceExtent = h
                }
            },
            niceExtent: function (t, e, i) {
                var n = this._extent;
                if (n[0] === n[1])if (0 !== n[0]) {
                    var o = n[0];
                    i ? n[0] -= o / 2 : (n[1] += o / 2, n[0] -= o / 2)
                } else n[1] = 1;
                var r = n[1] - n[0];
                isFinite(r) || (n[0] = 0, n[1] = 1), this.niceTicks(t);
                var l = this._interval;
                e || (n[0] = u(a(n[0] / l) * l)), i || (n[1] = u(s(n[1] / l) * l))
            }
        });
        h.create = function () {
            return new h
        }, t.exports = h
    }, function (t, e, i) {
        function n(t) {
            this.group = new r.Group, this._symbolCtor = t || a
        }

        function o(t, e, i) {
            var n = t.getItemLayout(e);
            return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
        }

        var r = i(3), a = i(50), s = n.prototype;
        s.updateData = function (t, e) {
            var i = this.group, n = t.hostModel, a = this._data, s = this._symbolCtor, l = {
                itemStyle: n.getModel("itemStyle.normal").getItemStyle(["color"]),
                hoverItemStyle: n.getModel("itemStyle.emphasis").getItemStyle(),
                symbolRotate: n.get("symbolRotate"),
                symbolOffset: n.get("symbolOffset"),
                hoverAnimation: n.get("hoverAnimation"),
                labelModel: n.getModel("label.normal"),
                hoverLabelModel: n.getModel("label.emphasis")
            };
            t.diff(a).add(function (n) {
                var r = t.getItemLayout(n);
                if (o(t, n, e)) {
                    var a = new s(t, n, l);
                    a.attr("position", r), t.setItemGraphicEl(n, a), i.add(a)
                }
            }).update(function (u, h) {
                var c = a.getItemGraphicEl(h), d = t.getItemLayout(u);
                return o(t, u, e) ? (c ? (c.updateData(t, u, l), r.updateProps(c, {position: d}, n)) : (c = new s(t, u), c.attr("position", d)), i.add(c), void t.setItemGraphicEl(u, c)) : void i.remove(c)
            }).remove(function (t) {
                var e = a.getItemGraphicEl(t);
                e && e.fadeOut(function () {
                    i.remove(e)
                })
            }).execute(), this._data = t
        }, s.updateLayout = function () {
            var t = this._data;
            t && t.eachItemGraphicEl(function (e, i) {
                var n = t.getItemLayout(i);
                e.attr("position", n)
            })
        }, s.remove = function (t) {
            var e = this.group, i = this._data;
            i && (t ? i.eachItemGraphicEl(function (t) {
                t.fadeOut(function () {
                    e.remove(t)
                })
            }) : e.removeAll())
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            var e = {};
            return c(["start", "end", "startValue", "endValue", "throttle"], function (i) {
                t.hasOwnProperty(i) && (e[i] = t[i])
            }), e
        }

        function o(t, e, i, n) {
            null != i[e] && null == i[t] && (n[t] = null)
        }

        var r = i(1), a = i(11), s = i(2), l = i(6), u = i(110), h = i(180), c = r.each, d = u.eachAxisDim, f = s.extendComponentModel({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                filterMode: "filter",
                throttle: null,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null
            },
            init: function (t, e, i) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel, this._autoThrottle = !0;
                var o = n(t);
                this.mergeDefaultAndTheme(t, i), this.doInit(o)
            },
            mergeOption: function (t) {
                var e = n(t);
                r.merge(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                a.canvasSupported || (e.realtime = !1), this._setDefaultThrottle(t), o("start", "startValue", t, e), o("end", "endValue", t, e), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, i, n, o) {
                    var r = this.dependentModels[e.axis][i], a = r.__dzAxisProxy || (r.__dzAxisProxy = new h(e.name, i, this, o));
                    t[e.name + "_" + i] = a
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                d(function (e) {
                    var i = e.axisIndex;
                    t[i] = l.normalizeToArray(t[i])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                d(function (i) {
                    null != t[i.axisIndex] && (e = !0)
                }, this);
                var i = t.orient;
                return null == i && e ? "orient" : e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), i = this.option;
                if (t) {
                    var n = "vertical" === e ? {dim: "y", axisIndex: "yAxisIndex", axis: "yAxis"} : {
                        dim: "x",
                        axisIndex: "xAxisIndex",
                        axis: "xAxis"
                    };
                    this.dependentModels[n.axis].length && (i[n.axisIndex] = [0], t = !1)
                }
                t && d(function (e) {
                    if (t) {
                        var n = [], o = this.dependentModels[e.axis];
                        if (o.length && !n.length)for (var r = 0, a = o.length; r < a; r++)"category" === o[r].get("type") && n.push(r);
                        i[e.axisIndex] = n, n.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && d(function (e) {
                        var n = i[e.axisIndex], o = t.get(e.axisIndex), a = t.get(e.axisId), s = t.ecModel.queryComponents({
                            mainType: e.axis,
                            index: o,
                            id: a
                        })[0];
                        o = s.componentIndex, r.indexOf(n, o) < 0 && n.push(o)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var i = !0;
                return d(function (n) {
                    var o = t.get(n.axisIndex), r = this.dependentModels[n.axis][o];
                    r && r.get("type") === e || (i = !1)
                }, this), i
            },
            _setDefaultThrottle: function (t) {
                if (t.hasOwnProperty("throttle") && (this._autoThrottle = !1), this._autoThrottle) {
                    var e = this.ecModel.option;
                    this.option.throttle = e.animation && e.animationDurationUpdate > 0 ? 100 : 20
                }
            },
            getFirstTargetAxisModel: function () {
                var t;
                return d(function (e) {
                    if (null == t) {
                        var i = this.get(e.axisIndex);
                        i.length && (t = this.dependentModels[e.axis][i[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var i = this.ecModel;
                d(function (n) {
                    c(this.get(n.axisIndex), function (o) {
                        t.call(e, n, o, this, i)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            setRawRange: function (t) {
                c(["start", "end", "startValue", "endValue"], function (e) {
                    this.option[e] = t[e]
                }, this)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                if (t)return t.getDataPercentWindow()
            },
            getValueRange: function (t, e) {
                if (null != t || null != e)return this.getAxisProxy(t, e).getDataValueWindow();
                var i = this.findRepresentativeAxisProxy();
                return i ? i.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function () {
                var t = this._axisProxies;
                for (var e in t)if (t.hasOwnProperty(e) && t[e].hostedBy(this))return t[e];
                for (var e in t)if (t.hasOwnProperty(e) && !t[e].hostedBy(this))return t[e]
            }
        });
        t.exports = f
    }, function (t, e, i) {
        var n = i(58);
        t.exports = n.extend({
            type: "dataZoom", render: function (t, e, i, n) {
                this.dataZoomModel = t, this.ecModel = e, this.api = i
            }, getTargetInfo: function () {
                function t(t, e, i, n) {
                    for (var o, r = 0; r < i.length; r++)if (i[r].model === t) {
                        o = i[r];
                        break
                    }
                    o || i.push(o = {model: t, axisModels: [], coordIndex: n}), o.axisModels.push(e)
                }

                var e = this.dataZoomModel, i = this.ecModel, n = [], o = [], r = [];
                return e.eachTargetAxis(function (e, a) {
                    var s = i.getComponent(e.axis, a);
                    if (s) {
                        r.push(s);
                        var l, u = e.axis;
                        "xAxis" === u || "yAxis" === u ? l = "grid" : "angleAxis" !== u && "radiusAxis" !== u || (l = "polar");
                        var h = l ? i.queryComponents({
                            mainType: l,
                            index: s.get(l + "Index"),
                            id: s.get(l + "Id")
                        })[0] : null;
                        null != h && t(h, s, "grid" === l ? n : o, h.componentIndex)
                    }
                }, this), {cartesians: n, polars: o, axisModels: r}
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            var i = t[1] - t[0], n = e, o = i / n / 2;
            t[0] += o, t[1] -= o
        }

        var o = i(4), r = o.linearMap, a = i(1), s = [0, 1], l = function (t, e, i) {
            this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
        };
        l.prototype = {
            constructor: l, contain: function (t) {
                var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
                return t >= i && t <= n
            }, containData: function (t) {
                return this.contain(this.dataToCoord(t))
            }, getExtent: function () {
                var t = this._extent.slice();
                return t
            }, getPixelPrecision: function (t) {
                return o.getPixelPrecision(t || this.scale.getExtent(), this._extent)
            }, setExtent: function (t, e) {
                var i = this._extent;
                i[0] = t, i[1] = e
            }, dataToCoord: function (t, e) {
                var i = this._extent, o = this.scale;
                return t = o.normalize(t), this.onBand && "ordinal" === o.type && (i = i.slice(), n(i, o.count())), r(t, s, i, e)
            }, coordToData: function (t, e) {
                var i = this._extent, o = this.scale;
                this.onBand && "ordinal" === o.type && (i = i.slice(), n(i, o.count()));
                var a = r(t, i, s, e);
                return this.scale.scale(a)
            }, getTicksCoords: function (t) {
                if (this.onBand && !t) {
                    for (var e = this.getBands(), i = [], n = 0; n < e.length; n++)i.push(e[n][0]);
                    return e[n - 1] && i.push(e[n - 1][1]), i
                }
                return a.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getLabelsCoords: function () {
                return a.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getBands: function () {
                for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], o = t[1], r = o - n, a = 0; a < i; a++)e.push([r * a / i + n, r * (a + 1) / i + n]);
                return e
            }, getBandWidth: function () {
                var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === i && (i = 1);
                var n = Math.abs(t[1] - t[0]);
                return Math.abs(n) / i
            }
        }, t.exports = l
    }, function (t, e, i) {
        var n = i(1), o = i(21), r = o.parseClassType, a = 0, s = {}, l = "_";
        s.getUID = function (t) {
            return [t || "", a++, Math.random()].join(l)
        }, s.enableSubTypeDefaulter = function (t) {
            var e = {};
            return t.registerSubTypeDefaulter = function (t, i) {
                t = r(t), e[t.main] = i
            }, t.determineSubType = function (i, n) {
                var o = n.type;
                if (!o) {
                    var a = r(i).main;
                    t.hasSubTypes(i) && e[a] && (o = e[a](n))
                }
                return o
            }, t
        }, s.enableTopologicalTravel = function (t, e) {
            function i(t) {
                var i = {}, a = [];
                return n.each(t, function (s) {
                    var l = o(i, s), u = l.originalDeps = e(s), h = r(u, t);
                    l.entryCount = h.length, 0 === l.entryCount && a.push(s), n.each(h, function (t) {
                        n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                        var e = o(i, t);
                        n.indexOf(e.successor, t) < 0 && e.successor.push(s)
                    })
                }), {graph: i, noEntryList: a}
            }

            function o(t, e) {
                return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
            }

            function r(t, e) {
                var i = [];
                return n.each(t, function (t) {
                    n.indexOf(e, t) >= 0 && i.push(t)
                }), i
            }

            t.topologicalTravel = function (t, e, o, r) {
                function a(t) {
                    u[t].entryCount--, 0 === u[t].entryCount && h.push(t)
                }

                function s(t) {
                    c[t] = !0, a(t)
                }

                if (t.length) {
                    var l = i(e), u = l.graph, h = l.noEntryList, c = {};
                    for (n.each(t, function (t) {
                        c[t] = !0
                    }); h.length;) {
                        var d = h.pop(), f = u[d], p = !!c[d];
                        p && (o.call(r, d, f.originalDeps.slice()), delete c[d]), n.each(f.successor, p ? s : a)
                    }
                    n.each(c, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }, t.exports = s
    }, function (t, e) {
        function i(t) {
            for (var e = 0; t >= h;)e |= 1 & t, t >>= 1;
            return t + e
        }

        function n(t, e, i, n) {
            var r = e + 1;
            if (r === i)return 1;
            if (n(t[r++], t[e]) < 0) {
                for (; r < i && n(t[r], t[r - 1]) < 0;)r++;
                o(t, e, r)
            } else for (; r < i && n(t[r], t[r - 1]) >= 0;)r++;
            return r - e
        }

        function o(t, e, i) {
            for (i--; e < i;) {
                var n = t[e];
                t[e++] = t[i], t[i--] = n
            }
        }

        function r(t, e, i, n, o) {
            for (n === e && n++; n < i; n++) {
                for (var r, a = t[n], s = e, l = n; s < l;)r = s + l >>> 1, o(a, t[r]) < 0 ? l = r : s = r + 1;
                var u = n - s;
                switch (u) {
                    case 3:
                        t[s + 3] = t[s + 2];
                    case 2:
                        t[s + 2] = t[s + 1];
                    case 1:
                        t[s + 1] = t[s];
                        break;
                    default:
                        for (; u > 0;)t[s + u] = t[s + u - 1], u--
                }
                t[s] = a
            }
        }

        function a(t, e, i, n, o, r) {
            var a = 0, s = 0, l = 1;
            if (r(t, e[i + o]) > 0) {
                for (s = n - o; l < s && r(t, e[i + o + l]) > 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                l > s && (l = s), a += o, l += o
            } else {
                for (s = o + 1; l < s && r(t, e[i + o - l]) <= 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                l > s && (l = s);
                var u = a;
                a = o - l, l = o - u
            }
            for (a++; a < l;) {
                var h = a + (l - a >>> 1);
                r(t, e[i + h]) > 0 ? a = h + 1 : l = h
            }
            return l
        }

        function s(t, e, i, n, o, r) {
            var a = 0, s = 0, l = 1;
            if (r(t, e[i + o]) < 0) {
                for (s = o + 1; l < s && r(t, e[i + o - l]) < 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                l > s && (l = s);
                var u = a;
                a = o - l, l = o - u
            } else {
                for (s = n - o; l < s && r(t, e[i + o + l]) >= 0;)a = l, l = (l << 1) + 1, l <= 0 && (l = s);
                l > s && (l = s), a += o, l += o
            }
            for (a++; a < l;) {
                var h = a + (l - a >>> 1);
                r(t, e[i + h]) < 0 ? l = h : a = h + 1
            }
            return l
        }

        function l(t, e) {
            function i(t, e) {
                h[y] = t, f[y] = e, y += 1
            }

            function n() {
                for (; y > 1;) {
                    var t = y - 2;
                    if (t >= 1 && f[t - 1] <= f[t] + f[t + 1] || t >= 2 && f[t - 2] <= f[t] + f[t - 1])f[t - 1] < f[t + 1] && t--; else if (f[t] > f[t + 1])break;
                    r(t)
                }
            }

            function o() {
                for (; y > 1;) {
                    var t = y - 2;
                    t > 0 && f[t - 1] < f[t + 1] && t--, r(t)
                }
            }

            function r(i) {
                var n = h[i], o = f[i], r = h[i + 1], c = f[i + 1];
                f[i] = o + c, i === y - 3 && (h[i + 1] = h[i + 2], f[i + 1] = f[i + 2]), y--;
                var d = s(t[r], t, n, o, 0, e);
                n += d, o -= d, 0 !== o && (c = a(t[n + o - 1], t, r, c, c - 1, e), 0 !== c && (o <= c ? l(n, o, r, c) : u(n, o, r, c)))
            }

            function l(i, n, o, r) {
                var l = 0;
                for (l = 0; l < n; l++)x[l] = t[i + l];
                var u = 0, h = o, d = i;
                if (t[d++] = t[h++], 0 !== --r) {
                    if (1 === n) {
                        for (l = 0; l < r; l++)t[d + l] = t[h + l];
                        return void(t[d + r] = x[u])
                    }
                    for (var f, g, m, v = p; ;) {
                        f = 0, g = 0, m = !1;
                        do if (e(t[h], x[u]) < 0) {
                            if (t[d++] = t[h++], g++, f = 0, 0 === --r) {
                                m = !0;
                                break
                            }
                        } else if (t[d++] = x[u++], f++, g = 0, 1 === --n) {
                            m = !0;
                            break
                        } while ((f | g) < v);
                        if (m)break;
                        do {
                            if (f = s(t[h], x, u, n, 0, e), 0 !== f) {
                                for (l = 0; l < f; l++)t[d + l] = x[u + l];
                                if (d += f, u += f, n -= f, n <= 1) {
                                    m = !0;
                                    break
                                }
                            }
                            if (t[d++] = t[h++], 0 === --r) {
                                m = !0;
                                break
                            }
                            if (g = a(x[u], t, h, r, 0, e), 0 !== g) {
                                for (l = 0; l < g; l++)t[d + l] = t[h + l];
                                if (d += g, h += g, r -= g, 0 === r) {
                                    m = !0;
                                    break
                                }
                            }
                            if (t[d++] = x[u++], 1 === --n) {
                                m = !0;
                                break
                            }
                            v--
                        } while (f >= c || g >= c);
                        if (m)break;
                        v < 0 && (v = 0), v += 2
                    }
                    if (p = v, p < 1 && (p = 1), 1 === n) {
                        for (l = 0; l < r; l++)t[d + l] = t[h + l];
                        t[d + r] = x[u]
                    } else {
                        if (0 === n)throw new Error;
                        for (l = 0; l < n; l++)t[d + l] = x[u + l]
                    }
                } else for (l = 0; l < n; l++)t[d + l] = x[u + l]
            }

            function u(i, n, o, r) {
                var l = 0;
                for (l = 0; l < r; l++)x[l] = t[o + l];
                var u = i + n - 1, h = r - 1, d = o + r - 1, f = 0, g = 0;
                if (t[d--] = t[u--], 0 !== --n) {
                    if (1 === r) {
                        for (d -= n, u -= n, g = d + 1, f = u + 1, l = n - 1; l >= 0; l--)t[g + l] = t[f + l];
                        return void(t[d] = x[h])
                    }
                    for (var m = p; ;) {
                        var v = 0, y = 0, _ = !1;
                        do if (e(x[h], t[u]) < 0) {
                            if (t[d--] = t[u--], v++, y = 0, 0 === --n) {
                                _ = !0;
                                break
                            }
                        } else if (t[d--] = x[h--], y++, v = 0, 1 === --r) {
                            _ = !0;
                            break
                        } while ((v | y) < m);
                        if (_)break;
                        do {
                            if (v = n - s(x[h], t, i, n, n - 1, e), 0 !== v) {
                                for (d -= v, u -= v, n -= v, g = d + 1, f = u + 1, l = v - 1; l >= 0; l--)t[g + l] = t[f + l];
                                if (0 === n) {
                                    _ = !0;
                                    break
                                }
                            }
                            if (t[d--] = x[h--], 1 === --r) {
                                _ = !0;
                                break
                            }
                            if (y = r - a(t[u], x, 0, r, r - 1, e), 0 !== y) {
                                for (d -= y, h -= y, r -= y, g = d + 1, f = h + 1, l = 0; l < y; l++)t[g + l] = x[f + l];
                                if (r <= 1) {
                                    _ = !0;
                                    break
                                }
                            }
                            if (t[d--] = t[u--], 0 === --n) {
                                _ = !0;
                                break
                            }
                            m--
                        } while (v >= c || y >= c);
                        if (_)break;
                        m < 0 && (m = 0), m += 2
                    }
                    if (p = m, p < 1 && (p = 1), 1 === r) {
                        for (d -= n, u -= n, g = d + 1, f = u + 1, l = n - 1; l >= 0; l--)t[g + l] = t[f + l];
                        t[d] = x[h]
                    } else {
                        if (0 === r)throw new Error;
                        for (f = d - (r - 1), l = 0; l < r; l++)t[f + l] = x[l]
                    }
                } else for (f = d - (r - 1), l = 0; l < r; l++)t[f + l] = x[l]
            }

            var h, f, p = c, g = 0, m = d, v = 0, y = 0;
            g = t.length,
            g < 2 * d && (m = g >>> 1);
            var x = [];
            v = g < 120 ? 5 : g < 1542 ? 10 : g < 119151 ? 19 : 40, h = [], f = [], this.mergeRuns = n, this.forceMergeRuns = o, this.pushRun = i
        }

        function u(t, e, o, a) {
            o || (o = 0), a || (a = t.length);
            var s = a - o;
            if (!(s < 2)) {
                var u = 0;
                if (s < h)return u = n(t, o, a, e), void r(t, o, a, o + u, e);
                var c = new l(t, e), d = i(s);
                do {
                    if (u = n(t, o, a, e), u < d) {
                        var f = s;
                        f > d && (f = d), r(t, o, o + f, o + u, e), u = f
                    }
                    c.pushRun(o, u), c.mergeRuns(), s -= u, o += u
                } while (0 !== s);
                c.forceMergeRuns()
            }
        }

        var h = 32, c = 7, d = 256;
        t.exports = u
    }, function (t, e) {
        "use strict";
        function i(t) {
            return t
        }

        function n(t, e, n, o) {
            this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = o || i
        }

        function o(t, e, i, n) {
            for (var o = 0; o < t.length; o++) {
                var r = n(t[o], o), a = e[r];
                null == a ? (i.push(r), e[r] = o) : (a.length || (e[r] = a = [a]), a.push(o))
            }
        }

        n.prototype = {
            constructor: n, add: function (t) {
                return this._add = t, this
            }, update: function (t) {
                return this._update = t, this
            }, remove: function (t) {
                return this._remove = t, this
            }, execute: function () {
                var t, e = this._old, i = this._new, n = this._oldKeyGetter, r = this._newKeyGetter, a = {}, s = {}, l = [], u = [];
                for (o(e, a, l, n), o(i, s, u, r), t = 0; t < e.length; t++) {
                    var h = l[t], c = s[h];
                    if (null != c) {
                        var d = c.length;
                        d ? (1 === d && (s[h] = null), c = c.unshift()) : s[h] = null, this._update && this._update(c, t)
                    } else this._remove && this._remove(t)
                }
                for (var t = 0; t < u.length; t++) {
                    var h = u[t];
                    if (s.hasOwnProperty(h)) {
                        var c = s[h];
                        if (null == c)continue;
                        if (c.length)for (var f = 0, d = c.length; f < d; f++)this._add && this._add(c[f]); else this._add && this._add(c)
                    }
                }
            }
        }, t.exports = n
    }, function (t, e) {
        var i = {}, n = "\0__throttleOriginMethod", o = "\0__throttleRate", r = "\0__throttleType";
        i.throttle = function (t, e, i) {
            function n() {
                u = (new Date).getTime(), h = null, t.apply(a, s || [])
            }

            var o, r, a, s, l = 0, u = 0, h = null;
            e = e || 0;
            var c = function () {
                o = (new Date).getTime(), a = this, s = arguments, r = o - (i ? l : u) - e, clearTimeout(h), i ? h = setTimeout(n, e) : r >= 0 ? n() : h = setTimeout(n, -r), l = o
            };
            return c.clear = function () {
                h && (clearTimeout(h), h = null)
            }, c
        }, i.createOrUpdate = function (t, e, a, s) {
            var l = t[e];
            if (l) {
                var u = l[n] || l, h = l[r], c = l[o];
                if (c !== a || h !== s) {
                    if (null == a || !s)return t[e] = u;
                    l = t[e] = i.throttle(u, a, "debounce" === s), l[n] = u, l[r] = s, l[o] = a
                }
                return l
            }
        }, i.clear = function (t, e) {
            var i = t[e];
            i && i[n] && (t[e] = i[n])
        }, t.exports = i
    }, function (t, e) {
        t.exports = function (t, e, i, n, o) {
            n.eachRawSeriesByType(t, function (t) {
                var o = t.getData(), r = t.get("symbol") || e, a = t.get("symbolSize");
                o.setVisual({
                    legendSymbol: i || r,
                    symbol: r,
                    symbolSize: a
                }), n.isSeriesFiltered(t) || ("function" == typeof a && o.each(function (e) {
                    var i = t.getRawValue(e), n = t.getDataParams(e);
                    o.setItemVisual(e, "symbolSize", a(i, n))
                }), o.each(function (t) {
                    var e = o.getItemModel(t), i = e.getShallow("symbol", !0), n = e.getShallow("symbolSize", !0);
                    null != i && o.setItemVisual(t, "symbol", i), null != n && o.setItemVisual(t, "symbolSize", n)
                }))
            })
        }
    }, function (t, e, i) {
        var n = i(32);
        t.exports = function () {
            if (0 !== n.debugMode)if (1 == n.debugMode)for (var t in arguments)throw new Error(arguments[t]); else if (n.debugMode > 1)for (var t in arguments)console.log(arguments[t])
        }
    }, function (t, e, i) {
        function n(t) {
            o.call(this, t)
        }

        var o = i(36), r = i(8), a = i(1), s = i(150), l = new s(50);
        n.prototype = {
            constructor: n, type: "image", brush: function (t, e) {
                var i, n = this.style, o = n.image;
                if (n.bind(t, this, e), i = "string" == typeof o ? this._image : o, !i && o) {
                    var r = l.get(o);
                    if (!r)return i = new Image, i.onload = function () {
                        i.onload = null;
                        for (var t = 0; t < r.pending.length; t++)r.pending[t].dirty()
                    }, r = {image: i, pending: [this]}, i.src = o, l.put(o, r), void(this._image = i);
                    if (i = r.image, this._image = i, !i.width || !i.height)return void r.pending.push(this)
                }
                if (i) {
                    var a = n.width || i.width, s = n.height || i.height, u = n.x || 0, h = n.y || 0;
                    if (!i.width || !i.height)return;
                    if (this.setTransform(t), n.sWidth && n.sHeight) {
                        var c = n.sx || 0, d = n.sy || 0;
                        t.drawImage(i, c, d, n.sWidth, n.sHeight, u, h, a, s)
                    } else if (n.sx && n.sy) {
                        var c = n.sx, d = n.sy, f = a - c, p = s - d;
                        t.drawImage(i, c, d, f, p, u, h, a, s)
                    } else t.drawImage(i, u, h, a, s);
                    null == n.width && (n.width = a), null == n.height && (n.height = s), this.restoreTransform(t), null != n.text && this.drawRectText(t, this.getBoundingRect())
                }
            }, getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new r(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, a.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return t = t instanceof Array ? t.slice() : [+t, +t], t[0] /= 2, t[1] /= 2, t
        }

        function o(t, e, i) {
            l.Group.call(this), this.updateData(t, e, i)
        }

        function r(t, e) {
            this.parent.drift(t, e)
        }

        var a = i(1), s = i(26), l = i(3), u = i(4), h = o.prototype;
        h._createSymbol = function (t, e, i) {
            this.removeAll();
            var o = e.hostModel, a = e.getItemVisual(i, "color"), u = s.createSymbol(t, -1, -1, 2, 2, a);
            u.attr({z2: 100, culling: !0, scale: [0, 0]}), u.drift = r;
            var h = n(e.getItemVisual(i, "symbolSize"));
            l.initProps(u, {scale: h}, o, i), this._symbolType = t, this.add(u)
        }, h.stopSymbolAnimation = function (t) {
            this.childAt(0).stopAnimation(t)
        }, h.getSymbolPath = function () {
            return this.childAt(0)
        }, h.getScale = function () {
            return this.childAt(0).scale
        }, h.highlight = function () {
            this.childAt(0).trigger("emphasis")
        }, h.downplay = function () {
            this.childAt(0).trigger("normal")
        }, h.setZ = function (t, e) {
            var i = this.childAt(0);
            i.zlevel = t, i.z = e
        }, h.setDraggable = function (t) {
            var e = this.childAt(0);
            e.draggable = t, e.cursor = t ? "move" : "pointer"
        }, h.updateData = function (t, e, i) {
            this.silent = !1;
            var o = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, a = n(t.getItemVisual(e, "symbolSize"));
            if (o !== this._symbolType)this._createSymbol(o, t, e); else {
                var s = this.childAt(0);
                l.updateProps(s, {scale: a}, r, e)
            }
            this._updateCommon(t, e, a, i), this._seriesModel = r
        };
        var c = ["itemStyle", "normal"], d = ["itemStyle", "emphasis"], f = ["label", "normal"], p = ["label", "emphasis"];
        h._updateCommon = function (t, e, i, o) {
            var r = this.childAt(0), s = t.hostModel, h = t.getItemVisual(e, "color");
            "image" !== r.type && r.useStyle({strokeNoScale: !0}), o = o || null;
            var g = o && o.itemStyle, m = o && o.hoverItemStyle, v = o && o.symbolRotate, y = o && o.symbolOffset, x = o && o.labelModel, _ = o && o.hoverLabelModel, b = o && o.hoverAnimation;
            if (!o || t.hasItemOption) {
                var w = t.getItemModel(e);
                g = w.getModel(c).getItemStyle(["color"]), m = w.getModel(d).getItemStyle(), v = w.getShallow("symbolRotate"), y = w.getShallow("symbolOffset"), x = w.getModel(f), _ = w.getModel(p), b = w.getShallow("hoverAnimation")
            } else m = a.extend({}, m);
            var S = r.style;
            r.attr("rotation", (v || 0) * Math.PI / 180 || 0), y && r.attr("position", [u.parsePercent(y[0], i[0]), u.parsePercent(y[1], i[1])]), r.setColor(h), r.setStyle(g);
            var M = t.getItemVisual(e, "opacity");
            null != M && (S.opacity = M);
            for (var T, I, A = t.dimensions.slice(); A.length && (T = A.pop(), I = t.getDimensionInfo(T).type, "ordinal" === I || "time" === I););
            null != T && x.getShallow("show") ? (l.setText(S, x, h), S.text = a.retrieve(s.getFormattedLabel(e, "normal"), t.get(T, e))) : S.text = "", null != T && _.getShallow("show") ? (l.setText(m, _, h), m.text = a.retrieve(s.getFormattedLabel(e, "emphasis"), t.get(T, e))) : m.text = "";
            var L = n(t.getItemVisual(e, "symbolSize"));
            if (r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = m, l.setHoverStyle(r), b && s.ifEnableAnimation()) {
                var C = function () {
                    var t = L[1] / L[0];
                    this.animateTo({scale: [Math.max(1.1 * L[0], L[0] + 3), Math.max(1.1 * L[1], L[1] + 3 * t)]}, 400, "elasticOut")
                }, D = function () {
                    this.animateTo({scale: L}, 400, "elasticOut")
                };
                r.on("mouseover", C).on("mouseout", D).on("emphasis", C).on("normal", D)
            }
        }, h.fadeOut = function (t) {
            var e = this.childAt(0);
            this.silent = !0, e.style.text = "", l.updateProps(e, {scale: [0, 0]}, this._seriesModel, this.dataIndex, t)
        }, a.inherits(o, l.Group), t.exports = o
    }, function (t, e, i) {
        function n(t) {
            var e = {componentType: t.mainType};
            return e[t.mainType + "Index"] = t.componentIndex, e
        }

        function o(t, e, i) {
            var n, o, r = d(e - t.rotation);
            return f(r) ? (o = i > 0 ? "top" : "bottom", n = "center") : f(r - v) ? (o = i > 0 ? "bottom" : "top", n = "center") : (o = "middle", n = r > 0 && r < v ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                rotation: r,
                textAlign: n,
                verticalAlign: o
            }
        }

        function r(t, e, i, n) {
            var o, r, a = d(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
            return f(a - v / 2) ? (r = l ? "bottom" : "top", o = "center") : f(a - 1.5 * v) ? (r = l ? "top" : "bottom", o = "center") : (r = "middle", o = a < 1.5 * v && a > v / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
                rotation: a,
                textAlign: o,
                verticalAlign: r
            }
        }

        function a(t) {
            var e = t.get("tooltip");
            return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
        }

        var s = i(1), l = i(9), u = i(3), h = i(10), c = i(4), d = c.remRadian, f = c.isRadianAroundZero, p = i(5), g = p.applyTransform, m = s.retrieve, v = Math.PI, y = function (t, e) {
            this.opt = e, this.axisModel = t, s.defaults(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0
            }), this.group = new u.Group;
            var i = new u.Group({position: e.position.slice(), rotation: e.rotation});
            i.updateTransform(), this._transform = i.transform, this._dumbGroup = i
        };
        y.prototype = {
            constructor: y, hasBuilder: function (t) {
                return !!x[t]
            }, add: function (t) {
                x[t].call(this)
            }, getGroup: function () {
                return this.group
            }
        };
        var x = {
            axisLine: function () {
                var t = this.opt, e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var i = this.axisModel.axis.getExtent(), n = this._transform, o = [i[0], 0], r = [i[1], 0];
                    n && (g(o, o, n), g(r, r, n)), this.group.add(new u.Line(u.subPixelOptimizeLine({
                        anid: "line",
                        shape: {x1: o[0], y1: o[1], x2: r[0], y2: r[1]},
                        style: s.extend({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle()),
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    })))
                }
            }, axisTick: function () {
                var t = this.axisModel;
                if (t.get("axisTick.show"))for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, o = i.getModel("lineStyle"), r = i.get("length"), a = b(i, n.labelInterval), l = e.getTicksCoords(i.get("alignWithLabel")), h = e.scale.getTicks(), c = [], d = [], f = this._transform, p = 0; p < l.length; p++)if (!_(e, p, a)) {
                    var m = l[p];
                    c[0] = m, c[1] = 0, d[0] = m, d[1] = n.tickDirection * r, f && (g(c, c, f), g(d, d, f)), this.group.add(new u.Line(u.subPixelOptimizeLine({
                        anid: "tick_" + h[p],
                        shape: {x1: c[0], y1: c[1], x2: d[0], y2: d[1]},
                        style: s.defaults(o.getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")}),
                        z2: 2,
                        silent: !0
                    })))
                }
            }, axisLabel: function () {
                function t(t, e) {
                    var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
                    if (i && n)return i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)
                }

                var e = this.opt, i = this.axisModel, r = m(e.axisLabelShow, i.get("axisLabel.show"));
                if (r) {
                    var l = i.axis, c = i.getModel("axisLabel"), d = c.getModel("textStyle"), f = c.get("margin"), p = l.scale.getTicks(), g = i.getFormattedLabels(), y = m(e.labelRotation, c.get("rotate")) || 0;
                    y = y * v / 180;
                    var x = o(e, y, e.labelDirection), b = i.get("data"), w = [], S = a(i), M = i.get("triggerEvent");
                    if (s.each(p, function (t, o) {
                            if (!_(l, o, e.labelInterval)) {
                                var r = d;
                                b && b[t] && b[t].textStyle && (r = new h(b[t].textStyle, d, i.ecModel));
                                var a = r.getTextColor() || i.get("axisLine.lineStyle.color"), s = l.dataToCoord(t), c = [s, e.labelOffset + e.labelDirection * f], p = l.scale.getLabel(t), m = new u.Text({
                                    anid: "label_" + t,
                                    style: {
                                        text: g[o],
                                        textAlign: r.get("align", !0) || x.textAlign,
                                        textVerticalAlign: r.get("baseline", !0) || x.verticalAlign,
                                        textFont: r.getFont(),
                                        fill: "function" == typeof a ? a(p) : a
                                    },
                                    position: c,
                                    rotation: x.rotation,
                                    silent: S,
                                    z2: 10
                                });
                                M && (m.eventData = n(i), m.eventData.targetType = "axisLabel", m.eventData.value = p), this._dumbGroup.add(m), m.updateTransform(), w.push(m), this.group.add(m), m.decomposeTransform()
                            }
                        }, this), "category" !== l.type) {
                        if (i.getMin ? i.getMin() : i.get("min")) {
                            var T = w[0], I = w[1];
                            t(T, I) && (T.ignore = !0)
                        }
                        if (i.getMax ? i.getMax() : i.get("max")) {
                            var A = w[w.length - 1], L = w[w.length - 2];
                            t(L, A) && (A.ignore = !0)
                        }
                    }
                }
            }, axisName: function () {
                var t = this.opt, e = this.axisModel, i = m(t.axisName, e.get("name"));
                if (i) {
                    var h, c = e.get("nameLocation"), d = t.nameDirection, f = e.getModel("nameTextStyle"), p = e.get("nameGap") || 0, g = this.axisModel.axis.getExtent(), y = g[0] > g[1] ? -1 : 1, x = ["start" === c ? g[0] - y * p : "end" === c ? g[1] + y * p : (g[0] + g[1]) / 2, "middle" === c ? t.labelOffset + d * p : 0], _ = e.get("nameRotate");
                    null != _ && (_ = _ * v / 180);
                    var b;
                    "middle" === c ? h = o(t, null != _ ? _ : t.rotation, d) : (h = r(t, c, _ || 0, g), b = t.axisNameAvailableWidth, null != b && (b = Math.abs(b / Math.sin(h.rotation)), !isFinite(b) && (b = null)));
                    var w = f.getFont(), S = e.get("nameTruncate", !0) || {}, M = S.ellipsis, T = m(S.maxWidth, b), I = null != M && null != T ? l.truncateText(i, T, w, M, {
                        minChar: 2,
                        placeholder: S.placeholder
                    }) : i, A = e.get("tooltip", !0), L = e.mainType, C = {componentType: L, name: i, $vars: ["name"]};
                    C[L + "Index"] = e.componentIndex;
                    var D = new u.Text({
                        anid: "name",
                        __fullText: i,
                        __truncatedText: I,
                        style: {
                            text: I,
                            textFont: w,
                            fill: f.getTextColor() || e.get("axisLine.lineStyle.color"),
                            textAlign: h.textAlign,
                            textVerticalAlign: h.verticalAlign
                        },
                        position: x,
                        rotation: h.rotation,
                        silent: a(e),
                        z2: 1,
                        tooltip: A && A.show ? s.extend({
                            content: i, formatter: function () {
                                return i
                            }, formatterParams: C
                        }, A) : null
                    });
                    e.get("triggerEvent") && (D.eventData = n(e), D.eventData.targetType = "axisName", D.eventData.name = i), this._dumbGroup.add(D), D.updateTransform(), this.group.add(D), D.decomposeTransform()
                }
            }
        }, _ = y.ifIgnoreOnTick = function (t, e, i) {
            var n, o = t.scale;
            return "ordinal" === o.type && ("function" == typeof i ? (n = o.getTicks()[e], !i(n, o.getLabel(n))) : e % (i + 1))
        }, b = y.getInterval = function (t, e) {
            var i = t.get("interval");
            return null != i && "auto" != i || (i = e), i
        };
        t.exports = y
    }, function (t, e, i) {
        function n(t) {
            return a.isObject(t) && null != t.value ? t.value : t
        }

        function o() {
            return "category" === this.get("type") && a.map(this.get("data"), n)
        }

        function r() {
            return s.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        }

        var a = i(1), s = i(22);
        t.exports = {getFormattedLabels: r, getCategories: o}
    }, function (t, e, i) {
        var n = i(82), o = i(1), r = i(13), a = i(12), s = ["value", "category", "time", "log"];
        t.exports = function (t, e, i, l) {
            o.each(s, function (r) {
                e.extend({
                    type: t + "Axis." + r, mergeDefaultAndTheme: function (e, n) {
                        var s = this.layoutMode, l = s ? a.getLayoutParams(e) : {}, u = n.getTheme();
                        o.merge(e, u.get(r + "Axis")), o.merge(e, this.getDefaultOption()), e.type = i(t, e), s && a.mergeLayoutParam(e, l, s)
                    }, defaultOption: o.mergeAll([{}, n[r + "Axis"], l], !0)
                })
            }), r.registerSubTypeDefaulter(t + "Axis", o.curry(i, t))
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(13), r = i(1), a = i(53), s = o.extend({
            type: "cartesian2dAxis", axis: null, init: function () {
                s.superApply(this, "init", arguments), this.resetRange()
            }, mergeOption: function () {
                s.superApply(this, "mergeOption", arguments), this.resetRange()
            }, restoreData: function () {
                s.superApply(this, "restoreData", arguments), this.resetRange()
            }, findGridModel: function () {
                return this.ecModel.queryComponents({
                    mainType: "grid",
                    index: this.get("gridIndex"),
                    id: this.get("gridId")
                })[0]
            }
        });
        r.merge(s.prototype, i(52)), r.merge(s.prototype, i(83));
        var l = {offset: 0};
        a("x", s, n, l), a("y", s, n, l), t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            return t.findGridModel() === e
        }

        function o(t) {
            var e, i = t.model, n = i.getFormattedLabels(), o = i.getModel("axisLabel.textStyle"), r = 1, a = n.length;
            a > 40 && (r = Math.ceil(a / 40));
            for (var s = 0; s < a; s += r)if (!t.isLabelIgnored(s)) {
                var l = o.getTextRect(n[s]);
                e ? e.union(l) : e = l
            }
            return e
        }

        function r(t, e, i) {
            this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
        }

        function a(t, e) {
            var i = t.getExtent(), n = i[0] + i[1];
            t.toGlobalCoord = "x" === t.dim ? function (t) {
                return t + e
            } : function (t) {
                return n - t + e
            }, t.toLocalCoord = "x" === t.dim ? function (t) {
                return t - e
            } : function (t) {
                return n - t + e
            }
        }

        function s(t, e) {
            return c.map(y, function (e) {
                var i = t.getReferringComponents(e)[0];
                return i
            })
        }

        function l(t) {
            return "cartesian2d" === t.get("coordinateSystem")
        }

        var u = i(12), h = i(22), c = i(1), d = i(119), f = i(117), p = c.each, g = h.ifAxisCrossZero, m = h.niceScaleExtent;
        i(120);
        var v = r.prototype;
        v.type = "grid", v.getRect = function () {
            return this._rect
        }, v.update = function (t, e) {
            function i(t) {
                var e = n[t];
                for (var i in e)if (e.hasOwnProperty(i)) {
                    var o = e[i];
                    if (o && ("category" === o.type || !g(o)))return !0
                }
                return !1
            }

            var n = this._axesMap;
            this._updateScale(t, this._model), p(n.x, function (t) {
                m(t, t.model)
            }), p(n.y, function (t) {
                m(t, t.model)
            }), p(n.x, function (t) {
                i("y") && (t.onZero = !1)
            }), p(n.y, function (t) {
                i("x") && (t.onZero = !1)
            }), this.resize(this._model, e)
        }, v.resize = function (t, e) {
            function i() {
                p(r, function (t) {
                    var e = t.isHorizontal(), i = e ? [0, n.width] : [0, n.height], o = t.inverse ? 1 : 0;
                    t.setExtent(i[o], i[1 - o]), a(t, e ? n.x : n.y)
                })
            }

            var n = u.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
            this._rect = n;
            var r = this._axesList;
            i(), t.get("containLabel") && (p(r, function (t) {
                if (!t.model.get("axisLabel.inside")) {
                    var e = o(t);
                    if (e) {
                        var i = t.isHorizontal() ? "height" : "width", r = t.model.get("axisLabel.margin");
                        n[i] -= e[i] + r, "top" === t.position ? n.y += e.height + r : "left" === t.position && (n.x += e.width + r)
                    }
                }
            }), i())
        }, v.getAxis = function (t, e) {
            var i = this._axesMap[t];
            if (null != i) {
                if (null == e)for (var n in i)if (i.hasOwnProperty(n))return i[n];
                return i[e]
            }
        }, v.getCartesian = function (t, e) {
            if (null != t && null != e) {
                var i = "x" + t + "y" + e;
                return this._coordsMap[i]
            }
            for (var n = 0, o = this._coordsList; n < o.length; n++)if (o[n].getAxis("x").index === t || o[n].getAxis("y").index === e)return o[n]
        }, v.convertToPixel = function (t, e, i) {
            var n = this._findConvertTarget(t, e);
            return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null
        }, v.convertFromPixel = function (t, e, i) {
            var n = this._findConvertTarget(t, e);
            return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null
        }, v._findConvertTarget = function (t, e) {
            var i, n, o = e.seriesModel, r = e.xAxisModel || o && o.getReferringComponents("xAxis")[0], a = e.yAxisModel || o && o.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
            if (o)i = o.coordinateSystem, c.indexOf(l, i) < 0 && (i = null); else if (r && a)i = this.getCartesian(r.componentIndex, a.componentIndex); else if (r)n = this.getAxis("x", r.componentIndex); else if (a)n = this.getAxis("y", a.componentIndex); else if (s) {
                var u = s.coordinateSystem;
                u === this && (i = this._coordsList[0])
            }
            return {cartesian: i, axis: n}
        }, v.containPoint = function (t) {
            var e = this._coordsList[0];
            if (e)return e.containPoint(t)
        }, v._initCartesian = function (t, e, i) {
            function o(i) {
                return function (o, l) {
                    if (n(o, t, e)) {
                        var u = o.get("position");
                        "x" === i ? "top" !== u && "bottom" !== u && (u = "bottom", r[u] && (u = "top" === u ? "bottom" : "top")) : "left" !== u && "right" !== u && (u = "left", r[u] && (u = "left" === u ? "right" : "left")), r[u] = !0;
                        var c = new f(i, h.createScaleByModel(o), [0, 0], o.get("type"), u), d = "category" === c.type;
                        c.onBand = d && o.get("boundaryGap"), c.inverse = o.get("inverse"), c.onZero = o.get("axisLine.onZero"), o.axis = c, c.model = o, c.grid = this, c.index = l, this._axesList.push(c), a[i][l] = c, s[i]++
                    }
                }
            }

            var r = {left: !1, right: !1, top: !1, bottom: !1}, a = {x: {}, y: {}}, s = {x: 0, y: 0};
            return e.eachComponent("xAxis", o("x"), this), e.eachComponent("yAxis", o("y"), this), s.x && s.y ? (this._axesMap = a, void p(a.x, function (t, e) {
                p(a.y, function (i, n) {
                    var o = "x" + e + "y" + n, r = new d(o);
                    r.grid = this, this._coordsMap[o] = r, this._coordsList.push(r), r.addAxis(t), r.addAxis(i)
                }, this)
            }, this)) : (this._axesMap = {}, void(this._axesList = []))
        }, v._updateScale = function (t, e) {
            function i(t, e, i) {
                p(i.coordDimToDataDim(e.dim), function (i) {
                    e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
                })
            }

            c.each(this._axesList, function (t) {
                t.scale.setExtent(1 / 0, -(1 / 0))
            }), t.eachSeries(function (o) {
                if (l(o)) {
                    var r = s(o, t), a = r[0], u = r[1];
                    if (!n(a, e, t) || !n(u, e, t))return;
                    var h = this.getCartesian(a.componentIndex, u.componentIndex), c = o.getData(), d = h.getAxis("x"), f = h.getAxis("y");
                    "list" === c.type && (i(c, d, o), i(c, f, o))
                }
            }, this)
        };
        var y = ["xAxis", "yAxis"];
        r.create = function (t, e) {
            var i = [];
            return t.eachComponent("grid", function (n, o) {
                var a = new r(n, t, e);
                a.name = "grid_" + o, a.resize(n, e), n.coordinateSystem = a, i.push(a)
            }), t.eachSeries(function (e) {
                if (l(e)) {
                    var i = s(e, t), n = i[0], o = i[1], r = n.findGridModel(), a = r.coordinateSystem;
                    e.coordinateSystem = a.getCartesian(n.componentIndex, o.componentIndex)
                }
            }), i
        }, r.dimensions = d.prototype.dimensions, i(23).register("cartesian2d", r), t.exports = r
    }, function (t, e) {
        t.exports = function (t, e) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), i = t.coordinateSystem;
                if (i) {
                    var n = i.dimensions;
                    "singleAxis" === i.type ? e.each(n[0], function (t, n) {
                        e.setItemLayout(n, isNaN(t) ? [NaN, NaN] : i.dataToPoint(t))
                    }) : e.each(n, function (t, n, o) {
                        e.setItemLayout(o, isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]))
                    }, !0)
                }
            })
        }
    }, function (t, e) {
        t.exports = {
            clearColorPalette: function () {
                this._colorIdx = 0, this._colorNameMap = {}
            }, getColorFromPalette: function (t, e) {
                e = e || this;
                var i = e._colorIdx || 0, n = e._colorNameMap || (e._colorNameMap = {});
                if (n[t])return n[t];
                var o = this.get("color", !0) || [];
                if (o.length) {
                    var r = o[i];
                    return t && (n[t] = r), e._colorIdx = (i + 1) % o.length, r
                }
            }
        }
    }, function (t, e, i) {
        var n = i(33), o = i(43), r = i(21), a = function () {
            this.group = new n, this.uid = o.getUID("viewComponent")
        };
        a.prototype = {
            constructor: a, init: function (t, e) {
            }, render: function (t, e, i, n) {
            }, dispose: function () {
            }
        };
        var s = a.prototype;
        s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
        }, r.enableClassExtend(a), r.enableClassManagement(a, {registerWhenExtend: !0}), t.exports = a
    }, function (t, e, i) {
        "use strict";
        var n = i(63), o = i(20), r = i(88), a = i(166), s = i(1), l = function (t) {
            r.call(this, t), o.call(this, t), a.call(this, t), this.id = t.id || n()
        };
        l.prototype = {
            type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                switch (this.draggable) {
                    case"horizontal":
                        e = 0;
                        break;
                    case"vertical":
                        t = 0
                }
                var i = this.transform;
                i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty(!1)
            }, beforeUpdate: function () {
            }, afterUpdate: function () {
            }, update: function () {
                this.updateTransform()
            }, traverse: function (t, e) {
            }, attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var i = this[t];
                        i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                    }
                } else this[t] = e
            }, hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            }, show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            }, attr: function (t, e) {
                if ("string" == typeof t)this.attrKV(t, e); else if (s.isObject(t))for (var i in t)t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                return this.dirty(!1), this
            }, setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            }, removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            }, addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e)for (var i = 0; i < e.length; i++)t.animation.addAnimator(e[i]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            }, removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e)for (var i = 0; i < e.length; i++)t.animation.removeAnimator(e[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, s.mixin(l, a), s.mixin(l, r), s.mixin(l, o), t.exports = l
    }, function (t, e, i) {
        function n(t, e) {
            return t[e]
        }

        function o(t, e, i) {
            t[e] = i
        }

        function r(t, e, i) {
            return (e - t) * i + t
        }

        function a(t, e, i) {
            return i > .5 ? e : t
        }

        function s(t, e, i, n, o) {
            var a = t.length;
            if (1 == o)for (var s = 0; s < a; s++)n[s] = r(t[s], e[s], i); else for (var l = t[0].length, s = 0; s < a; s++)for (var u = 0; u < l; u++)n[s][u] = r(t[s][u], e[s][u], i)
        }

        function l(t, e, i) {
            var n = t.length, o = e.length;
            if (n !== o) {
                var r = n > o;
                if (r)t.length = o; else for (var a = n; a < o; a++)t.push(1 === i ? e[a] : x.call(e[a]))
            }
            for (var s = t[0] && t[0].length, a = 0; a < t.length; a++)if (1 === i)isNaN(t[a]) && (t[a] = e[a]); else for (var l = 0; l < s; l++)isNaN(t[a][l]) && (t[a][l] = e[a][l])
        }

        function u(t, e, i) {
            if (t === e)return !0;
            var n = t.length;
            if (n !== e.length)return !1;
            if (1 === i) {
                for (var o = 0; o < n; o++)if (t[o] !== e[o])return !1
            } else for (var r = t[0].length, o = 0; o < n; o++)for (var a = 0; a < r; a++)if (t[o][a] !== e[o][a])return !1;
            return !0
        }

        function h(t, e, i, n, o, r, a, s, l) {
            var u = t.length;
            if (1 == l)for (var h = 0; h < u; h++)s[h] = c(t[h], e[h], i[h], n[h], o, r, a); else for (var d = t[0].length, h = 0; h < u; h++)for (var f = 0; f < d; f++)s[h][f] = c(t[h][f], e[h][f], i[h][f], n[h][f], o, r, a)
        }

        function c(t, e, i, n, o, r, a) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * r + s * o + e
        }

        function d(t) {
            if (y(t)) {
                var e = t.length;
                if (y(t[0])) {
                    for (var i = [], n = 0; n < e; n++)i.push(x.call(t[n]));
                    return i
                }
                return x.call(t)
            }
            return t
        }

        function f(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function p(t, e, i, n, o) {
            var d = t._getter, p = t._setter, v = "spline" === e, x = n.length;
            if (x) {
                var _, b = n[0].value, w = y(b), S = !1, M = !1, T = w && y(b[0]) ? 2 : 1;
                n.sort(function (t, e) {
                    return t.time - e.time
                }), _ = n[x - 1].time;
                for (var I = [], A = [], L = n[0].value, C = !0, D = 0; D < x; D++) {
                    I.push(n[D].time / _);
                    var P = n[D].value;
                    if (w && u(P, L, T) || !w && P === L || (C = !1), L = P, "string" == typeof P) {
                        var k = m.parse(P);
                        k ? (P = k, S = !0) : M = !0
                    }
                    A.push(P)
                }
                if (!C) {
                    for (var O = A[x - 1], D = 0; D < x - 1; D++)w ? l(A[D], O, T) : !isNaN(A[D]) || isNaN(O) || M || S || (A[D] = O);
                    w && l(d(t._target, o), O, T);
                    var z, E, R, V, N, B, G = 0, F = 0;
                    if (S)var H = [0, 0, 0, 0];
                    var W = function (t, e) {
                        var i;
                        if (e < 0)i = 0; else if (e < F) {
                            for (z = Math.min(G + 1, x - 1), i = z; i >= 0 && !(I[i] <= e); i--);
                            i = Math.min(i, x - 2)
                        } else {
                            for (i = G; i < x && !(I[i] > e); i++);
                            i = Math.min(i - 1, x - 2)
                        }
                        G = i, F = e;
                        var n = I[i + 1] - I[i];
                        if (0 !== n)if (E = (e - I[i]) / n, v)if (V = A[i], R = A[0 === i ? i : i - 1], N = A[i > x - 2 ? x - 1 : i + 1], B = A[i > x - 3 ? x - 1 : i + 2], w)h(R, V, N, B, E, E * E, E * E * E, d(t, o), T); else {
                            var l;
                            if (S)l = h(R, V, N, B, E, E * E, E * E * E, H, 1), l = f(H); else {
                                if (M)return a(V, N, E);
                                l = c(R, V, N, B, E, E * E, E * E * E)
                            }
                            p(t, o, l)
                        } else if (w)s(A[i], A[i + 1], E, d(t, o), T); else {
                            var l;
                            if (S)s(A[i], A[i + 1], E, H, 1), l = f(H); else {
                                if (M)return a(A[i], A[i + 1], E);
                                l = r(A[i], A[i + 1], E)
                            }
                            p(t, o, l)
                        }
                    }, Z = new g({
                        target: t._target,
                        life: _,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: W,
                        ondestroy: i
                    });
                    return e && "spline" !== e && (Z.easing = e), Z
                }
            }
        }

        var g = i(144), m = i(18), v = i(1), y = v.isArrayLike, x = Array.prototype.slice, _ = function (t, e, i, r) {
            this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = r || o, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        };
        _.prototype = {
            when: function (t, e) {
                var i = this._tracks;
                for (var n in e)if (e.hasOwnProperty(n)) {
                    if (!i[n]) {
                        i[n] = [];
                        var o = this._getter(this._target, n);
                        if (null == o)continue;
                        0 !== t && i[n].push({time: 0, value: d(o)})
                    }
                    i[n].push({time: t, value: e[n]})
                }
                return this
            }, during: function (t) {
                return this._onframeList.push(t), this
            }, _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, i = 0; i < e; i++)t[i].call(this)
            }, start: function (t) {
                var e, i = this, n = 0, o = function () {
                    n--, n || i._doneCallback()
                };
                for (var r in this._tracks)if (this._tracks.hasOwnProperty(r)) {
                    var a = p(this, t, o, this._tracks[r], r);
                    a && (this._clipList.push(a), n++, this.animation && this.animation.addClip(a), e = a)
                }
                if (e) {
                    var s = e.onframe;
                    e.onframe = function (t, e) {
                        s(t, e);
                        for (var n = 0; n < i._onframeList.length; n++)i._onframeList[n](t, e)
                    }
                }
                return n || this._doneCallback(), this
            }, stop: function (t) {
                for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                    var o = e[n];
                    t && o.onframe(this._target, 1), i && i.removeClip(o)
                }
                e.length = 0
            }, delay: function (t) {
                return this._delay = t, this
            }, done: function (t) {
                return t && this._doneList.push(t), this
            }, getClips: function () {
                return this._clipList
            }
        }, t.exports = _
    }, function (t, e) {
        t.exports = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
                setTimeout(t, 16)
            }
    }, function (t, e) {
        var i = 2 * Math.PI;
        t.exports = {
            normalizeRadian: function (t) {
                return t %= i, t < 0 && (t += i), t
            }
        }
    }, function (t, e) {
        var i = 2311;
        t.exports = function () {
            return i++
        }
    }, function (t, e) {
        var i = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        i.prototype.getCanvasPattern = function (t) {
            return this._canvasPattern || (this._canvasPattern = t.createPattern(this.image, this.repeat))
        }, t.exports = i
    }, function (t, e) {
        function i(t, e, i) {
            var n = e.x, o = e.x2, r = e.y, a = e.y2;
            e.global || (n = n * i.width + i.x, o = o * i.width + i.x, r = r * i.height + i.y, a = a * i.height + i.y);
            var s = t.createLinearGradient(n, r, o, a);
            return s
        }

        function n(t, e, i) {
            var n = i.width, o = i.height, r = Math.min(n, o), a = e.x, s = e.y, l = e.r;
            e.global || (a = a * n + i.x, s = s * o + i.y, l *= r);
            var u = t.createRadialGradient(a, s, 0, a, s, l);
            return u
        }

        var o = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]], r = function (t) {
            this.extendFrom(t)
        };
        r.prototype = {
            constructor: r,
            fill: "#000000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            textFill: "#000",
            textStroke: null,
            textPosition: "inside",
            textBaseline: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textTransform: !1,
            textRotation: 0,
            blend: null,
            bind: function (t, e, i) {
                for (var n = this, r = i && i.style, a = !r, s = 0; s < o.length; s++) {
                    var l = o[s], u = l[0];
                    (a || n[u] !== r[u]) && (t[u] = n[u] || l[1])
                }
                if ((a || n.fill !== r.fill) && (t.fillStyle = n.fill), (a || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), (a || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (a || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                    var h = n.lineWidth;
                    t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0
            },
            extendFrom: function (t, e) {
                if (t) {
                    var i = this;
                    for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
                }
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (t, e, o) {
                for (var r = "radial" === e.type ? n : i, a = r(t, e, o), s = e.colorStops, l = 0; l < s.length; l++)a.addColorStop(s[l].offset, s[l].color);
                return a
            }
        };
        for (var a = r.prototype, s = 0; s < o.length; s++) {
            var l = o[s];
            l[0] in a || (a[l[0]] = l[1])
        }
        r.getGradient = a.getGradient, t.exports = r
    }, function (t, e, i) {
        var n = i(156), o = i(155);
        t.exports = {
            buildPath: function (t, e, i) {
                var r = e.points, a = e.smooth;
                if (r && r.length >= 2) {
                    if (a && "spline" !== a) {
                        var s = o(r, a, i, e.smoothConstraint);
                        t.moveTo(r[0][0], r[0][1]);
                        for (var l = r.length, u = 0; u < (i ? l : l - 1); u++) {
                            var h = s[2 * u], c = s[2 * u + 1], d = r[(u + 1) % l];
                            t.bezierCurveTo(h[0], h[1], c[0], c[1], d[0], d[1])
                        }
                    } else {
                        "spline" === a && (r = n(r, i)), t.moveTo(r[0][0], r[0][1]);
                        for (var u = 1, f = r.length; u < f; u++)t.lineTo(r[u][0], r[u][1])
                    }
                    i && t.closePath()
                }
            }
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = {
            updateSelectedMap: function (t) {
                this._selectTargetMap = n.reduce(t || [], function (t, e) {
                    return t[e.name] = e, t
                }, {})
            }, select: function (t) {
                var e = this._selectTargetMap, i = e[t], o = this.get("selectedMode");
                "single" === o && n.each(e, function (t) {
                    t.selected = !1
                }), i && (i.selected = !0)
            }, unSelect: function (t) {
                var e = this._selectTargetMap[t];
                e && (e.selected = !1)
            }, toggleSelected: function (t) {
                var e = this._selectTargetMap[t];
                if (null != e)return this[e.selected ? "unSelect" : "select"](t), e.selected
            }, isSelected: function (t) {
                var e = this._selectTargetMap[t];
                return e && e.selected
            }
        }
    }, function (t, e, i) {
        function n(t) {
            o.defaultEmphasis(t.label, o.LABEL_OPTIONS)
        }

        var o = i(6), r = i(1), a = i(11), s = i(9), l = s.addCommas, u = s.encodeHTML, h = i(2).extendComponentModel({
            type: "marker",
            dependencies: ["series", "grid", "polar", "geo"],
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
            },
            ifEnableAnimation: function () {
                if (a.node)return !1;
                var t = this.__hostSeries;
                return this.getShallow("animation") && t && t.ifEnableAnimation()
            },
            mergeOption: function (t, e, i, o) {
                var a = this.constructor, s = this.mainType + "Model";
                i || e.eachSeries(function (t) {
                    var i = t.get(this.mainType), l = t[s];
                    return i && i.data ? (l ? l.mergeOption(i, e, !0) : (o && n(i), r.each(i.data, function (t) {
                        t instanceof Array ? (n(t[0]), n(t[1])) : n(t)
                    }), l = new a(i, this, e), r.extend(l, {
                        mainType: this.mainType,
                        seriesIndex: t.seriesIndex,
                        name: t.name,
                        createdBySelf: !0
                    }), l.__hostSeries = t), void(t[s] = l)) : void(t[s] = null)
                }, this)
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = this.getRawValue(t), n = r.isArray(i) ? r.map(i, l).join(", ") : l(i), o = e.getName(t), a = this.name;
                return (null != i || o) && (a += "<br />"), o && (a += u(o), null != i && (a += " : ")), null != i && (a += n), a
            },
            getData: function () {
                return this._data
            },
            setData: function (t) {
                this._data = t
            }
        });
        r.mixin(h, o.dataFormatMixin), t.exports = h
    }, function (t, e, i) {
        t.exports = i(2).extendComponentView({
            type: "marker", init: function () {
                this.markerGroupMap = {}
            }, render: function (t, e, i) {
                var n = this.markerGroupMap;
                for (var o in n)n.hasOwnProperty(o) && (n[o].__keep = !1);
                var r = this.type + "Model";
                e.eachSeries(function (t) {
                    var n = t[r];
                    n && this.renderSeries(t, n, e, i)
                }, this);
                for (var o in n)n.hasOwnProperty(o) && !n[o].__keep && this.group.remove(n[o].group)
            }, renderSeries: function () {
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return !(isNaN(parseFloat(t.x)) && isNaN(parseFloat(t.y)))
        }

        function o(t) {
            return !isNaN(parseFloat(t.x)) && !isNaN(parseFloat(t.y))
        }

        function r(t, e, i) {
            var n = -1;
            do n = Math.max(l.getPrecision(t.get(e, i)), n), t = t.stackedOn; while (t);
            return n
        }

        function a(t, e, i, n, o, a) {
            var s = [], l = m(e, n, t), u = e.indexOfNearest(n, l, !0);
            s[o] = e.get(i, u, !0), s[a] = e.get(n, u, !0);
            var h = r(e, n, u);
            return h >= 0 && (s[a] = +s[a].toFixed(h)), s
        }

        var s = i(1), l = i(4), u = s.indexOf, h = s.curry, c = {
            min: h(a, "min"),
            max: h(a, "max"),
            average: h(a, "average")
        }, d = function (t, e) {
            var i = t.getData(), n = t.coordinateSystem;
            if (e && !o(e) && !s.isArray(e.coord) && n) {
                var r = n.dimensions, a = f(e, i, n, t);
                if (e = s.clone(e), e.type && c[e.type] && a.baseAxis && a.valueAxis) {
                    var l = u(r, a.baseAxis.dim), h = u(r, a.valueAxis.dim);
                    e.coord = c[e.type](i, a.baseDataDim, a.valueDataDim, l, h), e.value = e.coord[h]
                } else {
                    for (var d = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis], p = 0; p < 2; p++)if (c[d[p]]) {
                        var g = t.coordDimToDataDim(r[p])[0];
                        d[p] = m(i, g, d[p]);
                    }
                    e.coord = d
                }
            }
            return e
        }, f = function (t, e, i, n) {
            var o = {};
            return null != t.valueIndex || null != t.valueDim ? (o.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, o.valueAxis = i.getAxis(n.dataDimToCoordDim(o.valueDataDim)), o.baseAxis = i.getOtherAxis(o.valueAxis), o.baseDataDim = n.coordDimToDataDim(o.baseAxis.dim)[0]) : (o.baseAxis = n.getBaseAxis(), o.valueAxis = i.getOtherAxis(o.baseAxis), o.baseDataDim = n.coordDimToDataDim(o.baseAxis.dim)[0], o.valueDataDim = n.coordDimToDataDim(o.valueAxis.dim)[0]), o
        }, p = function (t, e) {
            return !(t && t.containData && e.coord && !n(e)) || t.containData(e.coord)
        }, g = function (t, e, i, n) {
            return n < 2 ? t.coord && t.coord[n] : t.value
        }, m = function (t, e, i) {
            if ("average" === i) {
                var n = 0, o = 0;
                return t.each(e, function (t, e) {
                    isNaN(t) || (n += t, o++)
                }, !0), n / o
            }
            return t.getDataExtent(e, !0)["max" === i ? 1 : 0]
        };
        t.exports = {dataTransform: d, dataFilter: p, dimValueGetter: g, getAxisInfo: f, numCalculate: m}
    }, function (t, e) {
        t.exports = function (t, e) {
            var i = e.findComponents({mainType: "legend"});
            i && i.length && e.eachSeriesByType(t, function (t) {
                var e = t.getData();
                e.filterSelf(function (t) {
                    for (var n = e.getName(t), o = 0; o < i.length; o++)if (!i[o].isSelected(n))return !1;
                    return !0
                }, this)
            }, this)
        }
    }, function (t, e, i) {
        function n(t) {
            var e = t.pieceList;
            t.hasSpecialVisual = !1, p.each(e, function (e, i) {
                e.originIndex = i, null != e.visual && (t.hasSpecialVisual = !0)
            })
        }

        function o(t) {
            var e = t.categories, i = t.visual, n = t.categoryMap = {};
            if (v(e, function (t, e) {
                    n[t] = e
                }), !p.isArray(i)) {
                var o = [];
                p.isObject(i) ? v(i, function (t, e) {
                    var i = n[e];
                    o[null != i ? i : x] = t
                }) : o[x] = i, i = t.visual = o
            }
            for (var r = e.length - 1; r >= 0; r--)null == i[r] && (delete n[e[r]], e.pop())
        }

        function r(t, e) {
            var i = t.visual, n = [];
            p.isObject(i) ? v(i, function (t) {
                n.push(t)
            }) : null != i && n.push(i);
            var o = {color: 1, symbol: 1};
            e || 1 !== n.length || o.hasOwnProperty(t.type) || (n[1] = n[0]), t.visual = n
        }

        function a(t) {
            return {
                applyVisual: function (e, i, n) {
                    e = this.mapValueToVisual(e), n("color", t(i("color"), e))
                }, _doMap: c([0, 1])
            }
        }

        function s(t) {
            var e = this.option.visual;
            return e[Math.round(m(t, [0, 1], [0, e.length - 1], !0))] || {}
        }

        function l(t) {
            return function (e, i, n) {
                n(t, this.mapValueToVisual(e))
            }
        }

        function u(t) {
            var e = this.option.visual;
            return e[this.option.loop && t !== x ? t % e.length : t]
        }

        function h() {
            return this.option.visual[0]
        }

        function c(t) {
            return {
                linear: function (e) {
                    return m(e, t, this.option.visual, !0)
                }, category: u, piecewise: function (e, i) {
                    var n = d.call(this, i);
                    return null == n && (n = m(e, t, this.option.visual, !0)), n
                }, fixed: h
            }
        }

        function d(t) {
            var e = this.option, i = e.pieceList;
            if (e.hasSpecialVisual) {
                var n = _.findPieceIndex(t, i), o = i[n];
                if (o && o.visual)return o.visual[this.type]
            }
        }

        function f(t, e, i) {
            return t ? e <= i : e < i
        }

        var p = i(1), g = i(18), m = i(4).linearMap, v = p.each, y = p.isObject, x = -1, _ = function (t) {
            var e = t.mappingMethod, i = t.type, a = this.option = p.clone(t);
            this.type = i, this.mappingMethod = e, this._normalizeData = w[e];
            var s = b[i];
            this.applyVisual = s.applyVisual, this.getColorMapper = s.getColorMapper, this._doMap = s._doMap[e], "piecewise" === e ? (r(a), n(a)) : "category" === e ? a.categories ? o(a) : r(a, !0) : (p.assert("linear" !== e || a.dataExtent), r(a))
        };
        _.prototype = {
            constructor: _, mapValueToVisual: function (t) {
                var e = this._normalizeData(t);
                return this._doMap(e, t)
            }, getNormalizer: function () {
                return p.bind(this._normalizeData, this)
            }
        };
        var b = _.visualHandlers = {
            color: {
                applyVisual: l("color"), getColorMapper: function () {
                    var t = this.option, e = p.map(t.visual, g.parse);
                    return p.bind("category" === t.mappingMethod ? function (t, e) {
                        return !e && (t = this._normalizeData(t)), u.call(this, t)
                    } : function (t, i, n) {
                        var o = !!n;
                        return !i && (t = this._normalizeData(t)), n = g.fastMapToColor(t, e, n), o ? n : p.stringify(n, "rgba")
                    }, this)
                }, _doMap: {
                    linear: function (t) {
                        return g.mapToColor(t, this.option.visual)
                    }, category: u, piecewise: function (t, e) {
                        var i = d.call(this, e);
                        return null == i && (i = g.mapToColor(t, this.option.visual)), i
                    }, fixed: h
                }
            }, colorHue: a(function (t, e) {
                return g.modifyHSL(t, e)
            }), colorSaturation: a(function (t, e) {
                return g.modifyHSL(t, null, e)
            }), colorLightness: a(function (t, e) {
                return g.modifyHSL(t, null, null, e)
            }), colorAlpha: a(function (t, e) {
                return g.modifyAlpha(t, e)
            }), opacity: {applyVisual: l("opacity"), _doMap: c([0, 1])}, symbol: {
                applyVisual: function (t, e, i) {
                    var n = this.mapValueToVisual(t);
                    if (p.isString(n))i("symbol", n); else if (y(n))for (var o in n)n.hasOwnProperty(o) && i(o, n[o])
                }, _doMap: {
                    linear: s, category: u, piecewise: function (t, e) {
                        var i = d.call(this, e);
                        return null == i && (i = s.call(this, t)), i
                    }, fixed: h
                }
            }, symbolSize: {applyVisual: l("symbolSize"), _doMap: c([0, 1])}
        }, w = {
            linear: function (t) {
                return m(t, this.option.dataExtent, [0, 1], !0)
            }, piecewise: function (t) {
                var e = this.option.pieceList, i = _.findPieceIndex(t, e, !0);
                if (null != i)return m(i, [0, e.length - 1], [0, 1], !0)
            }, category: function (t) {
                var e = this.option.categories ? this.option.categoryMap[t] : t;
                return null == e ? x : e
            }, fixed: p.noop
        };
        _.listVisualTypes = function () {
            var t = [];
            return p.each(b, function (e, i) {
                t.push(i)
            }), t
        }, _.addVisualHandler = function (t, e) {
            b[t] = e
        }, _.isValidType = function (t) {
            return b.hasOwnProperty(t)
        }, _.eachVisual = function (t, e, i) {
            p.isObject(t) ? p.each(t, e, i) : e.call(i, t)
        }, _.mapVisual = function (t, e, i) {
            var n, o = p.isArray(t) ? [] : p.isObject(t) ? {} : (n = !0, null);
            return _.eachVisual(t, function (t, r) {
                var a = e.call(i, t, r);
                n ? o = a : o[r] = a
            }), o
        }, _.retrieveVisuals = function (t) {
            var e, i = {};
            return t && v(b, function (n, o) {
                t.hasOwnProperty(o) && (i[o] = t[o], e = !0)
            }), e ? i : null
        }, _.prepareVisualTypes = function (t) {
            if (y(t)) {
                var e = [];
                v(t, function (t, i) {
                    e.push(i)
                }), t = e
            } else {
                if (!p.isArray(t))return [];
                t = t.slice()
            }
            return t.sort(function (t, e) {
                return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
            }), t
        }, _.dependsOn = function (t, e) {
            return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
        }, _.findPieceIndex = function (t, e, i) {
            function n(e, i) {
                var n = Math.abs(e - t);
                n < r && (r = n, o = i)
            }

            for (var o, r = 1 / 0, a = 0, s = e.length; a < s; a++) {
                var l = e[a].value;
                if (null != l) {
                    if (l === t)return a;
                    i && n(l, a)
                }
            }
            for (var a = 0, s = e.length; a < s; a++) {
                var u = e[a], h = u.interval, c = u.close;
                if (h) {
                    if (h[0] === -(1 / 0)) {
                        if (f(c[1], t, h[1]))return a
                    } else if (h[1] === 1 / 0) {
                        if (f(c[0], h[0], t))return a
                    } else if (f(c[0], h[0], t) && f(c[1], t, h[1]))return a;
                    i && n(h[0], a), i && n(h[1], a)
                }
            }
            if (i)return t === 1 / 0 ? e.length - 1 : t === -(1 / 0) ? 0 : o
        }, t.exports = _
    }, function (t, e) {
        t.exports = function (t, e) {
            var i = {};
            e.eachRawSeriesByType(t, function (t) {
                var n = t.getRawData(), o = {};
                if (!e.isSeriesFiltered(t)) {
                    var r = t.getData();
                    r.each(function (t) {
                        var e = r.getRawIndex(t);
                        o[e] = t
                    }), n.each(function (e) {
                        var a = n.getItemModel(e), s = o[e], l = null != s && r.getItemVisual(s, "color", !0);
                        if (l)n.setItemVisual(e, "color", l); else {
                            var u = a.get("itemStyle.normal.color") || t.getColorFromPalette(n.getName(e), i);
                            n.setItemVisual(e, "color", u), null != s && r.setItemVisual(s, "color", u)
                        }
                    })
                }
            })
        }
    }, function (t, e, i) {
        var n = i(5), o = i(17), r = {}, a = Math.min, s = Math.max, l = Math.sin, u = Math.cos, h = n.create(), c = n.create(), d = n.create(), f = 2 * Math.PI;
        r.fromPoints = function (t, e, i) {
            if (0 !== t.length) {
                var n, o = t[0], r = o[0], l = o[0], u = o[1], h = o[1];
                for (n = 1; n < t.length; n++)o = t[n], r = a(r, o[0]), l = s(l, o[0]), u = a(u, o[1]), h = s(h, o[1]);
                e[0] = r, e[1] = u, i[0] = l, i[1] = h
            }
        }, r.fromLine = function (t, e, i, n, o, r) {
            o[0] = a(t, i), o[1] = a(e, n), r[0] = s(t, i), r[1] = s(e, n)
        };
        var p = [], g = [];
        r.fromCubic = function (t, e, i, n, r, l, u, h, c, d) {
            var f, m = o.cubicExtrema, v = o.cubicAt, y = m(t, i, r, u, p);
            for (c[0] = 1 / 0, c[1] = 1 / 0, d[0] = -(1 / 0), d[1] = -(1 / 0), f = 0; f < y; f++) {
                var x = v(t, i, r, u, p[f]);
                c[0] = a(x, c[0]), d[0] = s(x, d[0])
            }
            for (y = m(e, n, l, h, g), f = 0; f < y; f++) {
                var _ = v(e, n, l, h, g[f]);
                c[1] = a(_, c[1]), d[1] = s(_, d[1])
            }
            c[0] = a(t, c[0]), d[0] = s(t, d[0]), c[0] = a(u, c[0]), d[0] = s(u, d[0]), c[1] = a(e, c[1]), d[1] = s(e, d[1]), c[1] = a(h, c[1]), d[1] = s(h, d[1])
        }, r.fromQuadratic = function (t, e, i, n, r, l, u, h) {
            var c = o.quadraticExtremum, d = o.quadraticAt, f = s(a(c(t, i, r), 1), 0), p = s(a(c(e, n, l), 1), 0), g = d(t, i, r, f), m = d(e, n, l, p);
            u[0] = a(t, r, g), u[1] = a(e, l, m), h[0] = s(t, r, g), h[1] = s(e, l, m)
        }, r.fromArc = function (t, e, i, o, r, a, s, p, g) {
            var m = n.min, v = n.max, y = Math.abs(r - a);
            if (y % f < 1e-4 && y > 1e-4)return p[0] = t - i, p[1] = e - o, g[0] = t + i, void(g[1] = e + o);
            if (h[0] = u(r) * i + t, h[1] = l(r) * o + e, c[0] = u(a) * i + t, c[1] = l(a) * o + e, m(p, h, c), v(g, h, c), r %= f, r < 0 && (r += f), a %= f, a < 0 && (a += f), r > a && !s ? a += f : r < a && s && (r += f), s) {
                var x = a;
                a = r, r = x
            }
            for (var _ = 0; _ < a; _ += Math.PI / 2)_ > r && (d[0] = u(_) * i + t, d[1] = l(_) * o + e, m(p, d, p), v(g, d, g))
        }, t.exports = r
    }, function (t, e, i) {
        var n = i(36), o = i(1), r = i(16), a = function (t) {
            n.call(this, t)
        };
        a.prototype = {
            constructor: a, type: "text", brush: function (t, e) {
                var i = this.style, n = i.x || 0, o = i.y || 0, a = i.text;
                if (null != a && (a += ""), i.bind(t, this, e), a) {
                    this.setTransform(t);
                    var s, l = i.textAlign, u = i.textFont || i.font;
                    if (i.textVerticalAlign) {
                        var h = r.getBoundingRect(a, u, i.textAlign, "top");
                        switch (s = "middle", i.textVerticalAlign) {
                            case"middle":
                                o -= h.height / 2 - h.lineHeight / 2;
                                break;
                            case"bottom":
                                o -= h.height - h.lineHeight / 2;
                                break;
                            default:
                                o += h.lineHeight / 2
                        }
                    } else s = i.textBaseline;
                    t.font = u || "12px sans-serif", t.textAlign = l || "left", t.textAlign !== l && (t.textAlign = "left"), t.textBaseline = s || "alphabetic", t.textBaseline !== s && (t.textBaseline = "alphabetic");
                    for (var c = r.measureText("国", t.font).width, d = a.split("\n"), f = 0; f < d.length; f++)i.hasFill() && t.fillText(d[f], n, o), i.hasStroke() && t.strokeText(d[f], n, o), o += c;
                    this.restoreTransform(t)
                }
            }, getBoundingRect: function () {
                if (!this._rect) {
                    var t = this.style, e = t.textVerticalAlign, i = r.getBoundingRect(t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);
                    switch (e) {
                        case"middle":
                            i.y -= i.height / 2;
                            break;
                        case"bottom":
                            i.y -= i.height
                    }
                    i.x += t.x || 0, i.y += t.y || 0, this._rect = i
                }
                return this._rect
            }
        }, o.inherits(a, n), t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        var o = i(16), r = i(8), a = new r, s = function () {
        };
        s.prototype = {
            constructor: s, drawRectText: function (t, e, i) {
                var r = this.style, s = r.text;
                if (null != s && (s += ""), s) {
                    t.save();
                    var l, u, h = r.textPosition, c = r.textDistance, d = r.textAlign, f = r.textFont || r.font, p = r.textBaseline, g = r.textVerticalAlign;
                    i = i || o.getBoundingRect(s, f, d, p);
                    var m = this.transform;
                    if (r.textTransform ? this.setTransform(t) : m && (a.copy(e), a.applyTransform(m), e = a), h instanceof Array) {
                        if (l = e.x + n(h[0], e.width), u = e.y + n(h[1], e.height), d = d || "left", p = p || "top", g) {
                            switch (g) {
                                case"middle":
                                    u -= i.height / 2 - i.lineHeight / 2;
                                    break;
                                case"bottom":
                                    u -= i.height - i.lineHeight / 2;
                                    break;
                                default:
                                    u += i.lineHeight / 2
                            }
                            p = "middle"
                        }
                    } else {
                        var v = o.adjustTextPositionOnRect(h, e, i, c);
                        l = v.x, u = v.y, d = d || v.textAlign, p = p || v.textBaseline
                    }
                    t.textAlign = d || "left", t.textBaseline = p || "alphabetic";
                    var y = r.textFill, x = r.textStroke;
                    y && (t.fillStyle = y), x && (t.strokeStyle = x), t.font = f || "12px sans-serif", t.shadowBlur = r.textShadowBlur, t.shadowColor = r.textShadowColor || "transparent", t.shadowOffsetX = r.textShadowOffsetX, t.shadowOffsetY = r.textShadowOffsetY;
                    var _ = s.split("\n");
                    r.textRotation && (m && t.translate(m[4], m[5]), t.rotate(r.textRotation), m && t.translate(-m[4], -m[5]));
                    for (var b = 0; b < _.length; b++)y && t.fillText(_[b], l, u), x && t.strokeText(_[b], l, u), u += i.lineHeight;
                    t.restore()
                }
            }
        }, t.exports = s
    }, function (t, e, i) {
        function n(t) {
            delete f[t]
        }

        /*!
         * ZRender, a high performance 2d drawing library.
         *
         * Copyright (c) 2013, Baidu Inc.
         * All rights reserved.
         *
         * LICENSE
         * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
         */
        var o = i(63), r = i(11), a = i(1), s = i(139), l = i(142), u = i(143), h = i(151), c = !r.canvasSupported, d = {canvas: i(141)}, f = {}, p = {};
        p.version = "3.2.2", p.init = function (t, e) {
            var i = new g(o(), t, e);
            return f[i.id] = i, i
        }, p.dispose = function (t) {
            if (t)t.dispose(); else {
                for (var e in f)f.hasOwnProperty(e) && f[e].dispose();
                f = {}
            }
            return p
        }, p.getInstance = function (t) {
            return f[t]
        }, p.registerPainter = function (t, e) {
            d[t] = e
        };
        var g = function (t, e, i) {
            i = i || {}, this.dom = e, this.id = t;
            var n = this, o = new l, f = i.renderer;
            if (c) {
                if (!d.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                f = "vml"
            } else f && d[f] || (f = "canvas");
            var p = new d[f](e, o, i);
            this.storage = o, this.painter = p;
            var g = r.node ? null : new h(p.getViewportRoot());
            this.handler = new s(o, p, g, p.root), this.animation = new u({stage: {update: a.bind(this.flush, this)}}), this.animation.start(), this._needsRefresh;
            var m = o.delFromMap, v = o.addToMap;
            o.delFromMap = function (t) {
                var e = o.get(t);
                m.call(o, t), e && e.removeSelfFromZr(n)
            }, o.addToMap = function (t) {
                v.call(o, t), t.addSelfToZr(n)
            }
        };
        g.prototype = {
            constructor: g, getId: function () {
                return this.id
            }, add: function (t) {
                this.storage.addRoot(t), this._needsRefresh = !0
            }, remove: function (t) {
                this.storage.delRoot(t), this._needsRefresh = !0
            }, configLayer: function (t, e) {
                this.painter.configLayer(t, e), this._needsRefresh = !0
            }, refreshImmediately: function () {
                this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, refresh: function () {
                this._needsRefresh = !0
            }, flush: function () {
                this._needsRefresh && this.refreshImmediately(), this._needsRefreshHover && this.refreshHoverImmediately()
            }, addHover: function (t, e) {
                this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
            }, removeHover: function (t) {
                this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
            }, clearHover: function () {
                this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
            }, refreshHover: function () {
                this._needsRefreshHover = !0
            }, refreshHoverImmediately: function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
            }, resize: function (t) {
                t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
            }, clearAnimation: function () {
                this.animation.clear()
            }, getWidth: function () {
                return this.painter.getWidth()
            }, getHeight: function () {
                return this.painter.getHeight()
            }, pathToImage: function (t, e, i) {
                var n = o();
                return this.painter.pathToImage(n, t, e, i)
            }, setCursorStyle: function (t) {
                this.handler.setCursorStyle(t)
            }, on: function (t, e, i) {
                this.handler.on(t, e, i)
            }, off: function (t, e) {
                this.handler.off(t, e)
            }, trigger: function (t, e) {
                this.handler.trigger(t, e)
            }, clear: function () {
                this.storage.delRoot(), this.painter.clear()
            }, dispose: function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, n(this.id)
            }
        }, t.exports = p
    }, function (t, e, i) {
        var n = i(2), o = i(1);
        t.exports = function (t, e) {
            o.each(e, function (e) {
                e.update = "updateView", n.registerAction(e, function (i, n) {
                    var o = {};
                    return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                        t[e.method] && t[e.method](i.name);
                        var n = t.getData();
                        n.each(function (e) {
                            var i = n.getName(e);
                            o[i] = t.isSelected(i) || !1
                        })
                    }), {name: i.name, selected: o}
                })
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = {
            retrieveTargetInfo: function (t, e) {
                if (t && ("treemapZoomToNode" === t.type || "treemapRootToNode" === t.type)) {
                    var i = e.getData().tree.root, n = t.targetNode;
                    if (n && i.contains(n))return {node: n};
                    var o = t.targetNodeId;
                    if (null != o && (n = i.getNodeById(o)))return {node: n}
                }
            }, getPathToRoot: function (t) {
                for (var e = []; t;)t = t.parentNode, t && e.push(t);
                return e.reverse()
            }, aboveViewRoot: function (t, e) {
                var i = o.getPathToRoot(t);
                return n.indexOf(i, e) >= 0
            }, wrapTreePathInfo: function (t, e) {
                for (var i = []; t;) {
                    var n = t.dataIndex;
                    i.push({name: t.name, dataIndex: n, value: e.getRawValue(n)}), t = t.parentNode
                }
                return i.reverse(), i
            }
        };
        t.exports = o
    }, function (t, e, i) {
        function n(t) {
            if (!t.target || !t.target.draggable) {
                var e = t.offsetX, i = t.offsetY;
                this.containsPoint && this.containsPoint(e, i) && (this._x = e, this._y = i, this._dragging = !0)
            }
        }

        function o(t) {
            if (this._dragging && (d.stop(t.event), "pinch" !== t.gestureEvent)) {
                if (f.isTaken(this._zr, "globalPan"))return;
                var e = t.offsetX, i = t.offsetY, n = this._x, o = this._y, r = e - n, a = i - o;
                this._x = e, this._y = i;
                var s = this.target;
                if (s) {
                    var l = s.position;
                    l[0] += r, l[1] += a, s.dirty()
                }
                d.stop(t.event), this.trigger("pan", r, a, n, o, e, i)
            }
        }

        function r(t) {
            this._dragging = !1
        }

        function a(t) {
            var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
            l.call(this, t, e, t.offsetX, t.offsetY)
        }

        function s(t) {
            if (!f.isTaken(this._zr, "globalPan")) {
                var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
                l.call(this, t, e, t.pinchX, t.pinchY)
            }
        }

        function l(t, e, i, n) {
            if (this.containsPoint && this.containsPoint(i, n)) {
                d.stop(t.event);
                var o = this.target, r = this.zoomLimit;
                if (o) {
                    var a = o.position, s = o.scale, l = this.zoom = this.zoom || 1;
                    if (l *= e, r) {
                        var u = r.min || 0, h = r.max || 1 / 0;
                        l = Math.max(Math.min(h, l), u)
                    }
                    var c = l / this.zoom;
                    this.zoom = l, a[0] -= (i - a[0]) * (c - 1), a[1] -= (n - a[1]) * (c - 1), s[0] *= c, s[1] *= c, o.dirty()
                }
                this.trigger("zoom", e, i, n)
            }
        }

        function u(t, e) {
            this.target = e, this.containsPoint, this.zoomLimit, this.zoom, this._zr = t;
            var i = c.bind, l = i(n, this), u = i(o, this), d = i(r, this), f = i(a, this), p = i(s, this);
            h.call(this), this.setContainsPoint = function (t) {
                this.containsPoint = t
            }, this.enable = function (e) {
                this.disable(), null == e && (e = !0), e !== !0 && "move" !== e && "pan" !== e || (t.on("mousedown", l), t.on("mousemove", u), t.on("mouseup", d)), e !== !0 && "scale" !== e && "zoom" !== e || (t.on("mousewheel", f), t.on("pinch", p))
            }, this.disable = function () {
                t.off("mousedown", l), t.off("mousemove", u), t.off("mouseup", d), t.off("mousewheel", f), t.off("pinch", p)
            }, this.dispose = this.disable, this.isDragging = function () {
                return this._dragging
            }, this.isPinching = function () {
                return this._pinching
            }
        }

        var h = i(20), c = i(1), d = i(24), f = i(115);
        c.mixin(u, h), t.exports = u
    }, function (t, e) {
        t.exports = function (t, e, i, n, o) {
            function r(t, e, i) {
                var n = e.length ? e.slice() : [e, e];
                return e[0] > e[1] && n.reverse(), t < 0 && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
            }

            return t ? ("rigid" === n ? (t = r(t, e, i), e[0] += t, e[1] += t) : (t = r(t, e[o], i), e[o] += t, "push" === n && e[0] > e[1] && (e[1 - o] = e[o])), e) : e
        }
    }, function (t, e, i) {
        var n = i(1), o = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {show: !1},
            axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
            axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
            axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {fontSize: 12}},
            splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
            splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
        }, r = n.merge({
            boundaryGap: !0,
            splitLine: {show: !1},
            axisTick: {alignWithLabel: !1, interval: "auto"},
            axisLabel: {interval: "auto"}
        }, o), a = n.merge({boundaryGap: [0, 0], splitNumber: 5}, o), s = n.defaults({
            scale: !0,
            min: "dataMin",
            max: "dataMax"
        }, a), l = n.defaults({logBase: 10}, a);
        l.scale = !0, t.exports = {categoryAxis: r, valueAxis: a, timeAxis: s, logAxis: l}
    }, function (t, e) {
        t.exports = {
            getMin: function () {
                var t = this.option, e = null != t.rangeStart ? t.rangeStart : t.min;
                return e instanceof Date && (e = +e), e
            }, getMax: function () {
                var t = this.option, e = null != t.rangeEnd ? t.rangeEnd : t.max;
                return e instanceof Date && (e = +e), e
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null == t.rangeStart && null == t.rangeEnd && !t.scale
            }, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        }
    }, function (t, e) {
        t.exports = {
            containStroke: function (t, e, i, n, o, r, a) {
                if (0 === o)return !1;
                var s = o, l = 0, u = t;
                if (a > e + s && a > n + s || a < e - s && a < n - s || r > t + s && r > i + s || r < t - s && r < i - s)return !1;
                if (t === i)return Math.abs(r - t) <= s / 2;
                l = (e - n) / (t - i), u = (t * n - i * e) / (t - i);
                var h = l * r - a + u, c = h * h / (l * l + 1);
                return c <= s / 2 * s / 2
            }
        }
    }, function (t, e, i) {
        var n = i(17);
        t.exports = {
            containStroke: function (t, e, i, o, r, a, s, l, u) {
                if (0 === s)return !1;
                var h = s;
                if (u > e + h && u > o + h && u > a + h || u < e - h && u < o - h && u < a - h || l > t + h && l > i + h && l > r + h || l < t - h && l < i - h && l < r - h)return !1;
                var c = n.quadraticProjectPoint(t, e, i, o, r, a, l, u, null);
                return c <= h / 2
            }
        }
    }, function (t, e) {
        t.exports = function (t, e, i, n, o, r) {
            if (r > e && r > n || r < e && r < n)return 0;
            if (n === e)return 0;
            var a = n < e ? 1 : -1, s = (r - e) / (n - e);
            1 !== s && 0 !== s || (a = n < e ? .5 : -.5);
            var l = s * (i - t) + t;
            return l > o ? a : 0
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(37), r = function (t, e, i, n, r, a) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, o.call(this, r)
        };
        r.prototype = {constructor: r}, n.inherits(r, o), t.exports = r
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t > s || t < -s
        }

        var o = i(19), r = i(5), a = o.identity, s = 5e-5, l = function (t) {
            t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        }, u = l.prototype;
        u.transform = null, u.needLocalTransform = function () {
            return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
        }, u.updateTransform = function () {
            var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
            return i || e ? (n = n || o.create(), i ? this.getLocalTransform(n) : a(n), e && (i ? o.mul(n, t.transform, n) : o.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || o.create(), void o.invert(this.invTransform, n)) : void(n && a(n))
        }, u.getLocalTransform = function (t) {
            t = t || [], a(t);
            var e = this.origin, i = this.scale, n = this.rotation, r = this.position;
            return e && (t[4] -= e[0], t[5] -= e[1]), o.scale(t, t, i), n && o.rotate(t, t, n), e && (t[4] += e[0], t[5] += e[1]), t[4] += r[0], t[5] += r[1], t
        }, u.setTransform = function (t) {
            var e = this.transform, i = t.dpr || 1;
            e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0)
        }, u.restoreTransform = function (t) {
            var e = (this.transform, t.dpr || 1);
            t.setTransform(e, 0, 0, e, 0, 0)
        };
        var h = [];
        u.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent, e = this.transform;
                t && t.transform && (o.mul(h, t.invTransform, e), e = h);
                var i = e[0] * e[0] + e[1] * e[1], r = e[2] * e[2] + e[3] * e[3], a = this.position, s = this.scale;
                n(i - 1) && (i = Math.sqrt(i)), n(r - 1) && (r = Math.sqrt(r)), e[0] < 0 && (i = -i), e[3] < 0 && (r = -r), a[0] = e[4], a[1] = e[5], s[0] = i, s[1] = r, this.rotation = Math.atan2(-e[1] / r, e[0] / i)
            }
        }, u.getGlobalScale = function () {
            var t = this.transform;
            if (!t)return [1, 1];
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
            return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
        }, u.transformCoordToLocal = function (t, e) {
            var i = [t, e], n = this.invTransform;
            return n && r.applyTransform(i, i, n), i
        }, u.transformCoordToGlobal = function (t, e) {
            var i = [t, e], n = this.transform;
            return n && r.applyTransform(i, i, n), i
        }, t.exports = l
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            o.each(r, function (e) {
                this[e] = o.bind(t[e], t)
            }, this)
        }

        var o = i(1), r = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption"];
        t.exports = n
    }, function (t, e, i) {
        var n = i(1);
        i(55), i(91), i(92);
        var o = i(122), r = i(2);
        r.registerLayout(n.curry(o, "bar")), r.registerVisual(function (t) {
            t.eachSeriesByType("bar", function (t) {
                var e = t.getData();
                e.setVisual("legendSymbol", "roundRect")
            })
        }), i(35)
    }, function (t, e, i) {
        "use strict";
        var n = i(15), o = i(34);
        t.exports = n.extend({
            type: "series.bar",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return o(t.data, this, e)
            },
            getMarkerPosition: function (t) {
                var e = this.coordinateSystem;
                if (e) {
                    var i = e.dataToPoint(t, !0), n = this.getData(), o = n.getLayout("offset"), r = n.getLayout("size"), a = e.getBaseAxis().isHorizontal() ? 0 : 1;
                    return i[a] += o + r / 2, i
                }
                return [NaN, NaN]
            },
            brushSelector: "rect",
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                barMinHeight: 0,
                itemStyle: {normal: {}, emphasis: {}}
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            var i = t.width > 0 ? 1 : -1, n = t.height > 0 ? 1 : -1;
            e = Math.min(e, Math.abs(t.width), Math.abs(t.height)), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
        }

        var o = i(1), r = i(3);
        o.extend(i(10).prototype, i(93)), t.exports = i(2).extendChartView({
            type: "bar", render: function (t, e, i) {
                var n = t.get("coordinateSystem");
                return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
            }, dispose: o.noop, _renderOnCartesian: function (t, e, i) {
                function a(e, i) {
                    var a = l.getItemLayout(e), s = l.getItemModel(e).get(p) || 0;
                    n(a, s);
                    var u = new r.Rect({shape: o.extend({}, a)});
                    if (f) {
                        var h = u.shape, c = d ? "height" : "width", g = {};
                        h[c] = 0, g[c] = a[c], r[i ? "updateProps" : "initProps"](u, {shape: g}, t, e)
                    }
                    return u
                }

                var s = this.group, l = t.getData(), u = this._data, h = t.coordinateSystem, c = h.getBaseAxis(), d = c.isHorizontal(), f = t.get("animation"), p = ["itemStyle", "normal", "barBorderWidth"];
                l.diff(u).add(function (t) {
                    if (l.hasValue(t)) {
                        var e = a(t);
                        l.setItemGraphicEl(t, e), s.add(e)
                    }
                }).update(function (e, i) {
                    var o = u.getItemGraphicEl(i);
                    if (!l.hasValue(e))return void s.remove(o);
                    o || (o = a(e, !0));
                    var h = l.getItemLayout(e), c = l.getItemModel(e).get(p) || 0;
                    n(h, c), r.updateProps(o, {shape: h}, t, e), l.setItemGraphicEl(e, o), s.add(o)
                }).remove(function (e) {
                    var i = u.getItemGraphicEl(e);
                    i && (i.style.text = "", r.updateProps(i, {shape: {width: 0}}, t, e, function () {
                        s.remove(i)
                    }))
                }).execute(), this._updateStyle(t, l, d), this._data = l
            }, _updateStyle: function (t, e, i) {
                function n(t, e, i, n, o) {
                    r.setText(t, e, i), t.text = n, "outside" === t.textPosition && (t.textPosition = o)
                }

                e.eachItemGraphicEl(function (a, s) {
                    var l = e.getItemModel(s), u = e.getItemVisual(s, "color"), h = e.getItemVisual(s, "opacity"), c = e.getItemLayout(s), d = l.getModel("itemStyle.normal"), f = l.getModel("itemStyle.emphasis").getBarItemStyle();
                    a.setShape("r", d.get("barBorderRadius") || 0), a.useStyle(o.defaults({
                        fill: u,
                        opacity: h
                    }, d.getBarItemStyle()));
                    var p = i ? c.height > 0 ? "bottom" : "top" : c.width > 0 ? "left" : "right", g = l.getModel("label.normal"), m = l.getModel("label.emphasis"), v = a.style;
                    g.get("show") ? n(v, g, u, o.retrieve(t.getFormattedLabel(s, "normal"), t.getRawValue(s)), p) : v.text = "", m.get("show") ? n(f, m, u, o.retrieve(t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : f.text = "", r.setHoverStyle(a, f)
                })
            }, remove: function (t, e) {
                var i = this.group;
                t.get("animation") ? this._data && this._data.eachItemGraphicEl(function (e) {
                    e.style.text = "", r.updateProps(e, {shape: {width: 0}}, t, e.dataIndex, function () {
                        i.remove(e)
                    })
                }) : i.removeAll()
            }
        })
    }, function (t, e, i) {
        var n = i(30)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        t.exports = {
            getBarItemStyle: function (t) {
                var e = n.call(this, t);
                if (this.getBorderLineDash) {
                    var i = this.getBorderLineDash();
                    i && (e.lineDash = i)
                }
                return e
            }
        }
    }, function (t, e, i) {
        function n(t) {
            return "_" + t + "Type"
        }

        function o(t, e, i) {
            var n = e.getItemVisual(i, "color"), o = e.getItemVisual(i, t), r = e.getItemVisual(i, t + "Size");
            if (o && "none" !== o) {
                f.isArray(r) || (r = [r, r]);
                var a = u.createSymbol(o, -r[0] / 2, -r[1] / 2, r[0], r[1], n);
                return a.name = t, a
            }
        }

        function r(t) {
            var e = new c({name: "line"});
            return a(e.shape, t), e
        }

        function a(t, e) {
            var i = e[0], n = e[1], o = e[2];
            t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, o ? (t.cpx1 = o[0], t.cpy1 = o[1]) : (t.cpx1 = NaN, t.cpy1 = NaN)
        }

        function s() {
            var t = this, e = t.childOfName("fromSymbol"), i = t.childOfName("toSymbol"), n = t.childOfName("label");
            if (e || i || !n.ignore) {
                for (var o = 1, r = this.parent; r;)r.scale && (o /= r.scale[0]), r = r.parent;
                var a = t.childOfName("line");
                if (this.__dirty || a.__dirty) {
                    var s = a.shape.percent, l = a.pointAt(0), u = a.pointAt(s), c = h.sub([], u, l);
                    if (h.normalize(c, c), e) {
                        e.attr("position", l);
                        var d = a.tangentAt(0);
                        e.attr("rotation", Math.PI / 2 - Math.atan2(d[1], d[0])), e.attr("scale", [o * s, o * s])
                    }
                    if (i) {
                        i.attr("position", u);
                        var d = a.tangentAt(1);
                        i.attr("rotation", -Math.PI / 2 - Math.atan2(d[1], d[0])), i.attr("scale", [o * s, o * s])
                    }
                    if (!n.ignore) {
                        n.attr("position", u);
                        var f, p, g, m = 5 * o;
                        if ("end" === n.__position)f = [c[0] * m + u[0], c[1] * m + u[1]], p = c[0] > .8 ? "left" : c[0] < -.8 ? "right" : "center", g = c[1] > .8 ? "top" : c[1] < -.8 ? "bottom" : "middle"; else if ("middle" === n.__position) {
                            var v = s / 2, d = a.tangentAt(v), y = [d[1], -d[0]], x = a.pointAt(v);
                            y[1] > 0 && (y[0] = -y[0], y[1] = -y[1]), f = [x[0] + y[0] * m, x[1] + y[1] * m], p = "center", g = "bottom";
                            var _ = -Math.atan2(d[1], d[0]);
                            u[0] < l[0] && (_ = Math.PI + _), n.attr("rotation", _)
                        } else f = [-c[0] * m + l[0], -c[1] * m + l[1]], p = c[0] > .8 ? "right" : c[0] < -.8 ? "left" : "center", g = c[1] > .8 ? "bottom" : c[1] < -.8 ? "top" : "middle";
                        n.attr({
                            style: {textVerticalAlign: n.__verticalAlign || g, textAlign: n.__textAlign || p},
                            position: f,
                            scale: [o, o]
                        })
                    }
                }
            }
        }

        function l(t, e, i) {
            d.Group.call(this), this._createLine(t, e, i)
        }

        var u = i(26), h = i(5), c = i(175), d = i(3), f = i(1), p = i(4), g = ["fromSymbol", "toSymbol"], m = l.prototype;
        m.beforeUpdate = s, m._createLine = function (t, e, i) {
            var a = t.hostModel, s = t.getItemLayout(e), l = r(s);
            l.shape.percent = 0, d.initProps(l, {shape: {percent: 1}}, a, e), this.add(l);
            var u = new d.Text({name: "label"});
            this.add(u), f.each(g, function (i) {
                var r = o(i, t, e);
                this.add(r), this[n(i)] = t.getItemVisual(e, i)
            }, this), this._updateCommonStl(t, e, i)
        }, m.updateData = function (t, e, i) {
            var r = t.hostModel, s = this.childOfName("line"), l = t.getItemLayout(e), u = {shape: {}};
            a(u.shape, l), d.updateProps(s, u, r, e), f.each(g, function (i) {
                var r = t.getItemVisual(e, i), a = n(i);
                if (this[a] !== r) {
                    this.remove(this.childOfName(i));
                    var s = o(i, t, e);
                    this.add(s)
                }
                this[a] = r
            }, this), this._updateCommonStl(t, e, i)
        }, m._updateCommonStl = function (t, e, i) {
            var n = t.hostModel, o = this.childOfName("line"), r = i && i.lineStyle, a = i && i.hoverLineStyle, s = i && i.labelModel, l = i && i.hoverLabelModel;
            if (!i || t.hasItemOption) {
                var u = t.getItemModel(e);
                r = u.getModel("lineStyle.normal").getLineStyle(), a = u.getModel("lineStyle.emphasis").getLineStyle(), s = u.getModel("label.normal"), l = u.getModel("label.emphasis")
            }
            var h = t.getItemVisual(e, "color"), c = f.retrieve(t.getItemVisual(e, "opacity"), r.opacity, 1);
            o.useStyle(f.defaults({
                strokeNoScale: !0,
                fill: "none",
                stroke: h,
                opacity: c
            }, r)), o.hoverStyle = a, f.each(g, function (t) {
                var e = this.childOfName(t);
                e && (e.setColor(h), e.setStyle({opacity: c}))
            }, this);
            var m, v, y = s.getShallow("show"), x = l.getShallow("show"), _ = this.childOfName("label");
            if (y || x) {
                var b = n.getRawValue(e);
                v = null == b ? v = t.getName(e) : isFinite(b) ? p.round(b) : b, m = h || "#000"
            }
            if (y) {
                var w = s.getModel("textStyle");
                _.setStyle({
                    text: f.retrieve(n.getFormattedLabel(e, "normal", t.dataType), v),
                    textFont: w.getFont(),
                    fill: w.getTextColor() || m
                }), _.__textAlign = w.get("align"), _.__verticalAlign = w.get("baseline"), _.__position = s.get("position")
            } else _.setStyle("text", "");
            if (x) {
                var S = l.getModel("textStyle");
                _.hoverStyle = {
                    text: f.retrieve(n.getFormattedLabel(e, "emphasis", t.dataType), v),
                    textFont: S.getFont(),
                    fill: S.getTextColor() || m
                }
            } else _.hoverStyle = {text: ""};
            _.ignore = !y && !x, d.setHoverStyle(this)
        }, m.updateLayout = function (t, e) {
            this.setLinePoints(t.getItemLayout(e))
        }, m.setLinePoints = function (t) {
            var e = this.childOfName("line");
            a(e.shape, t), e.dirty()
        }, f.inherits(l, d.Group), t.exports = l
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function o(t) {
            return !n(t[0]) && !n(t[1])
        }

        function r(t) {
            this._ctor = t || s, this.group = new a.Group
        }

        var a = i(3), s = i(94), l = r.prototype;
        l.updateData = function (t) {
            var e = this._lineData, i = this.group, n = this._ctor, r = t.hostModel, a = {
                lineStyle: r.getModel("lineStyle.normal").getLineStyle(),
                hoverLineStyle: r.getModel("lineStyle.emphasis").getLineStyle(),
                labelModel: r.getModel("label.normal"),
                hoverLabelModel: r.getModel("label.emphasis")
            };
            t.diff(e).add(function (e) {
                if (o(t.getItemLayout(e))) {
                    var r = new n(t, e, a);
                    t.setItemGraphicEl(e, r), i.add(r)
                }
            }).update(function (r, s) {
                var l = e.getItemGraphicEl(s);
                return o(t.getItemLayout(r)) ? (l ? l.updateData(t, r, a) : l = new n(t, r, a), t.setItemGraphicEl(r, l), void i.add(l)) : void i.remove(l)
            }).remove(function (t) {
                i.remove(e.getItemGraphicEl(t))
            }).execute(), this._lineData = t
        }, l.updateLayout = function () {
            var t = this._lineData;
            t.eachItemGraphicEl(function (e, i) {
                e.updateLayout(t, i)
            }, this)
        }, l.remove = function () {
            this.group.removeAll()
        }, t.exports = r
    }, function (t, e, i) {
        var n = i(1), o = i(2), r = o.PRIORITY;
        i(97), i(98), o.registerVisual(n.curry(i(47), "line", "circle", "line")), o.registerLayout(n.curry(i(56), "line")), o.registerProcessor(r.PROCESSOR.STATISTIC, n.curry(i(134), "line")), i(35)
    }, function (t, e, i) {
        "use strict";
        var n = i(34), o = i(15);
        t.exports = o.extend({
            type: "series.line",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return n(t.data, this, e)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                clipOverflow: !0,
                label: {normal: {position: "top"}},
                lineStyle: {normal: {width: 2, type: "solid"}},
                step: !1,
                smooth: !1,
                smoothMonotone: null,
                symbol: "emptyCircle",
                symbolSize: 4,
                symbolRotate: null,
                showSymbol: !0,
                showAllSymbol: !1,
                connectNulls: !1,
                sampling: "none",
                animationEasing: "linear",
                progressive: 0,
                hoverLayerThreshold: 1 / 0
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            if (t.length === e.length) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i], o = e[i];
                    if (n[0] !== o[0] || n[1] !== o[1])return
                }
                return !0
            }
        }

        function o(t) {
            return "number" == typeof t ? t : t ? .3 : 0
        }

        function r(t) {
            var e = t.getGlobalExtent();
            if (t.onBand) {
                var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
                e[0] += n * i, e[1] -= n * i
            }
            return e
        }

        function a(t) {
            return t >= 0 ? 1 : -1
        }

        function s(t, e) {
            var i = t.getBaseAxis(), n = t.getOtherAxis(i), o = i.onZero ? 0 : n.scale.getExtent()[0], r = n.dim, s = "x" === r || "radius" === r ? 1 : 0;
            return e.mapArray([r], function (n, l) {
                for (var u, h = e.stackedOn; h && a(h.get(r, l)) === a(n);) {
                    u = h;
                    break
                }
                var c = [];
                return c[s] = e.get(i.dim, l), c[1 - s] = u ? u.get(r, l, !0) : o, t.dataToPoint(c)
            }, !0)
        }

        function l(t, e, i) {
            var n = r(t.getAxis("x")), o = r(t.getAxis("y")), a = t.getBaseAxis().isHorizontal(), s = Math.min(n[0], n[1]), l = Math.min(o[0], o[1]), u = Math.max(n[0], n[1]) - s, h = Math.max(o[0], o[1]) - l, c = i.get("lineStyle.normal.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(u, h);
            a ? (l -= d, h += 2 * d) : (s -= d, u += 2 * d);
            var f = new v.Rect({shape: {x: s, y: l, width: u, height: h}});
            return e && (f.shape[a ? "width" : "height"] = 0, v.initProps(f, {shape: {width: u, height: h}}, i)), f
        }

        function u(t, e, i) {
            var n = t.getAngleAxis(), o = t.getRadiusAxis(), r = o.getExtent(), a = n.getExtent(), s = Math.PI / 180, l = new v.Sector({
                shape: {
                    cx: t.cx,
                    cy: t.cy,
                    r0: r[0],
                    r: r[1],
                    startAngle: -a[0] * s,
                    endAngle: -a[1] * s,
                    clockwise: n.inverse
                }
            });
            return e && (l.shape.endAngle = -a[0] * s, v.initProps(l, {shape: {endAngle: -a[1] * s}}, i)), l
        }

        function h(t, e, i) {
            return "polar" === t.type ? u(t, e, i) : l(t, e, i)
        }

        function c(t, e, i) {
            for (var n = e.getBaseAxis(), o = "x" === n.dim || "radius" === n.dim ? 0 : 1, r = [], a = 0; a < t.length - 1; a++) {
                var s = t[a + 1], l = t[a];
                r.push(l);
                var u = [];
                switch (i) {
                    case"end":
                        u[o] = s[o], u[1 - o] = l[1 - o], r.push(u);
                        break;
                    case"middle":
                        var h = (l[o] + s[o]) / 2, c = [];
                        u[o] = c[o] = h, u[1 - o] = l[1 - o], c[1 - o] = s[1 - o], r.push(u), r.push(c);
                        break;
                    default:
                        u[o] = l[o], u[1 - o] = s[1 - o], r.push(u)
                }
            }
            return t[a] && r.push(t[a]), r
        }

        function d(t, e) {
            var i = t.getVisual("visualMeta");
            if (i && i.length && t.count()) {
                for (var n, o = i.length - 1; o >= 0; o--)if (i[o].dimension < 2) {
                    n = i[o];
                    break
                }
                if (n && "cartesian2d" === e.type) {
                    var r = n.dimension, a = t.dimensions[r], s = e.getAxis(a), l = f.map(n.stops, function (t) {
                        return {coord: s.toGlobalCoord(s.dataToCoord(t.value)), color: t.color}
                    }), u = l.length, h = n.outerColors.slice();
                    u && l[0].coord > l[u - 1].coord && (l.reverse(), h.reverse());
                    var c = 10, d = l[0].coord - c, p = l[u - 1].coord + c, g = p - d;
                    if (g < .001)return "transparent";
                    f.each(l, function (t) {
                        t.offset = (t.coord - d) / g
                    }), l.push({
                        offset: u ? l[u - 1].offset : .5,
                        color: h[1] || "transparent"
                    }), l.unshift({offset: u ? l[0].offset : .5, color: h[0] || "transparent"});
                    var m = new v.LinearGradient(0, 0, 0, 0, l, (!0));
                    return m[a] = d, m[a + "2"] = p, m
                }
            }
        }

        var f = i(1), p = i(39), g = i(50), m = i(99), v = i(3), y = i(6), x = i(100), _ = i(27);
        t.exports = _.extend({
            type: "line", init: function () {
                var t = new v.Group, e = new p;
                this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
            }, render: function (t, e, i) {
                var r = t.coordinateSystem, a = this.group, l = t.getData(), u = t.getModel("lineStyle.normal"), p = t.getModel("areaStyle.normal"), g = l.mapArray(l.getItemLayout, !0), m = "polar" === r.type, v = this._coordSys, y = this._symbolDraw, x = this._polyline, _ = this._polygon, b = this._lineGroup, w = t.get("animation"), S = !p.isEmpty(), M = s(r, l), T = t.get("showSymbol"), I = T && !m && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, r), A = this._data;
                A && A.eachItemGraphicEl(function (t, e) {
                    t.__temp && (a.remove(t), A.setItemGraphicEl(e, null))
                }), T || y.remove(), a.add(b);
                var L = !m && t.get("step");
                x && v.type === r.type && L === this._step ? (S && !_ ? _ = this._newPolygon(g, M, r, w) : _ && !S && (b.remove(_), _ = this._polygon = null), b.setClipPath(h(r, !1, t)), T && y.updateData(l, I), l.eachItemGraphicEl(function (t) {
                    t.stopAnimation(!0)
                }), n(this._stackedOnPoints, M) && n(this._points, g) || (w ? this._updateAnimation(l, M, r, i, L) : (L && (g = c(g, r, L), M = c(M, r, L)), x.setShape({points: g}), _ && _.setShape({
                    points: g,
                    stackedOnPoints: M
                })))) : (T && y.updateData(l, I), L && (g = c(g, r, L), M = c(M, r, L)), x = this._newPolyline(g, r, w), S && (_ = this._newPolygon(g, M, r, w)), b.setClipPath(h(r, !0, t)));
                var C = d(l, r) || l.getVisual("color");
                x.useStyle(f.defaults(u.getLineStyle(), {fill: "none", stroke: C, lineJoin: "bevel"}));
                var D = t.get("smooth");
                if (D = o(t.get("smooth")), x.setShape({
                        smooth: D,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    }), _) {
                    var P = l.stackedOn, k = 0;
                    if (_.useStyle(f.defaults(p.getAreaStyle(), {fill: C, opacity: .7, lineJoin: "bevel"})), P) {
                        var O = P.hostModel;
                        k = o(O.get("smooth"))
                    }
                    _.setShape({
                        smooth: D,
                        stackedOnSmooth: k,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    })
                }
                this._data = l, this._coordSys = r, this._stackedOnPoints = M, this._points = g, this._step = L
            }, dispose: function () {
            }, highlight: function (t, e, i, n) {
                var o = t.getData(), r = y.queryDataIndex(o, n);
                if (!(r instanceof Array) && null != r && r >= 0) {
                    var a = o.getItemGraphicEl(r);
                    if (!a) {
                        var s = o.getItemLayout(r);
                        if (!s)return;
                        a = new g(o, r), a.position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), a.__temp = !0, o.setItemGraphicEl(r, a), a.stopSymbolAnimation(!0), this.group.add(a)
                    }
                    a.highlight()
                } else _.prototype.highlight.call(this, t, e, i, n)
            }, downplay: function (t, e, i, n) {
                var o = t.getData(), r = y.queryDataIndex(o, n);
                if (null != r && r >= 0) {
                    var a = o.getItemGraphicEl(r);
                    a && (a.__temp ? (o.setItemGraphicEl(r, null), this.group.remove(a)) : a.downplay())
                } else _.prototype.downplay.call(this, t, e, i, n)
            }, _newPolyline: function (t) {
                var e = this._polyline;
                return e && this._lineGroup.remove(e), e = new x.Polyline({
                    shape: {points: t},
                    silent: !0,
                    z2: 10
                }), this._lineGroup.add(e), this._polyline = e, e
            }, _newPolygon: function (t, e) {
                var i = this._polygon;
                return i && this._lineGroup.remove(i), i = new x.Polygon({
                    shape: {points: t, stackedOnPoints: e},
                    silent: !0
                }), this._lineGroup.add(i), this._polygon = i, i
            }, _getSymbolIgnoreFunc: function (t, e) {
                var i = e.getAxesByScale("ordinal")[0];
                if (i && i.isLabelIgnored)return f.bind(i.isLabelIgnored, i)
            }, _updateAnimation: function (t, e, i, n, o) {
                var r = this._polyline, a = this._polygon, s = t.hostModel, l = m(this._data, t, this._stackedOnPoints, e, this._coordSys, i), u = l.current, h = l.stackedOnCurrent, d = l.next, f = l.stackedOnNext;
                o && (u = c(l.current, i, o), h = c(l.stackedOnCurrent, i, o), d = c(l.next, i, o), f = c(l.stackedOnNext, i, o)), r.shape.__points = l.current, r.shape.points = u, v.updateProps(r, {shape: {points: d}}, s), a && (a.setShape({
                    points: u,
                    stackedOnPoints: h
                }), v.updateProps(a, {shape: {points: d, stackedOnPoints: f}}, s));
                for (var p = [], g = l.status, y = 0; y < g.length; y++) {
                    var x = g[y].cmd;
                    if ("=" === x) {
                        var _ = t.getItemGraphicEl(g[y].idx1);
                        _ && p.push({el: _, ptIdx: y})
                    }
                }
                r.animators && r.animators.length && r.animators[0].during(function () {
                    for (var t = 0; t < p.length; t++) {
                        var e = p[t].el;
                        e.attr("position", r.shape.__points[p[t].ptIdx])
                    }
                })
            }, remove: function (t) {
                var e = this.group, i = this._data;
                this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function (t, n) {
                    t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
                }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
            }
        })
    }, function (t, e) {
        function i(t) {
            return t >= 0 ? 1 : -1
        }

        function n(t, e, n) {
            for (var o, r = t.getBaseAxis(), a = t.getOtherAxis(r), s = r.onZero ? 0 : a.scale.getExtent()[0], l = a.dim, u = "x" === l || "radius" === l ? 1 : 0, h = e.stackedOn, c = e.get(l, n); h && i(h.get(l, n)) === i(c);) {
                o = h;
                break
            }
            var d = [];
            return d[u] = e.get(r.dim, n), d[1 - u] = o ? o.get(l, n, !0) : s, t.dataToPoint(d)
        }

        function o(t, e) {
            var i = [];
            return e.diff(t).add(function (t) {
                i.push({cmd: "+", idx: t})
            }).update(function (t, e) {
                i.push({cmd: "=", idx: e, idx1: t})
            }).remove(function (t) {
                i.push({cmd: "-", idx: t})
            }).execute(), i
        }

        t.exports = function (t, e, i, r, a, s) {
            for (var l = o(t, e), u = [], h = [], c = [], d = [], f = [], p = [], g = [], m = s.dimensions, v = 0; v < l.length; v++) {
                var y = l[v], x = !0;
                switch (y.cmd) {
                    case"=":
                        var _ = t.getItemLayout(y.idx), b = e.getItemLayout(y.idx1);
                        (isNaN(_[0]) || isNaN(_[1])) && (_ = b.slice()), u.push(_), h.push(b), c.push(i[y.idx]), d.push(r[y.idx1]), g.push(e.getRawIndex(y.idx1));
                        break;
                    case"+":
                        var w = y.idx;
                        u.push(a.dataToPoint([e.get(m[0], w, !0), e.get(m[1], w, !0)])), h.push(e.getItemLayout(w).slice()), c.push(n(a, e, w)), d.push(r[w]), g.push(e.getRawIndex(w));
                        break;
                    case"-":
                        var w = y.idx, S = t.getRawIndex(w);
                        S !== w ? (u.push(t.getItemLayout(w)), h.push(s.dataToPoint([t.get(m[0], w, !0), t.get(m[1], w, !0)])), c.push(i[w]), d.push(n(s, t, w)), g.push(S)) : x = !1
                }
                x && (f.push(y), p.push(p.length))
            }
            p.sort(function (t, e) {
                return g[t] - g[e]
            });
            for (var M = [], T = [], I = [], A = [], L = [], v = 0; v < p.length; v++) {
                var w = p[v];
                M[v] = u[w], T[v] = h[w], I[v] = c[w], A[v] = d[w], L[v] = f[w]
            }
            return {current: M, next: T, stackedOnCurrent: I, stackedOnNext: A, status: L}
        }
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function o(t, e, i, o, r, a, g, m, v, y, x) {
            for (var _ = 0, b = i, w = 0; w < o; w++) {
                var S = e[b];
                if (b >= r || b < 0)break;
                if (n(S)) {
                    if (x) {
                        b += a;
                        continue
                    }
                    break
                }
                if (b === i)t[a > 0 ? "moveTo" : "lineTo"](S[0], S[1]), c(f, S); else if (v > 0) {
                    var M = b + a, T = e[M];
                    if (x)for (; T && n(e[M]);)M += a, T = e[M];
                    var I = .5, A = e[_], T = e[M];
                    if (!T || n(T))c(p, S); else {
                        n(T) && !x && (T = S), s.sub(d, T, A);
                        var L, C;
                        if ("x" === y || "y" === y) {
                            var D = "x" === y ? 0 : 1;
                            L = Math.abs(S[D] - A[D]), C = Math.abs(S[D] - T[D])
                        } else L = s.dist(S, A), C = s.dist(S, T);
                        I = C / (C + L), h(p, S, d, -v * (1 - I))
                    }
                    l(f, f, m), u(f, f, g), l(p, p, m), u(p, p, g), t.bezierCurveTo(f[0], f[1], p[0], p[1], S[0], S[1]), h(f, S, d, v * I)
                } else t.lineTo(S[0], S[1]);
                _ = b, b += a
            }
            return w
        }

        function r(t, e) {
            var i = [1 / 0, 1 / 0], n = [-(1 / 0), -(1 / 0)];
            if (e)for (var o = 0; o < t.length; o++) {
                var r = t[o];
                r[0] < i[0] && (i[0] = r[0]), r[1] < i[1] && (i[1] = r[1]), r[0] > n[0] && (n[0] = r[0]), r[1] > n[1] && (n[1] = r[1])
            }
            return {min: e ? i : n, max: e ? n : i}
        }

        var a = i(7), s = i(5), l = s.min, u = s.max, h = s.scaleAndAdd, c = s.copy, d = [], f = [], p = [];
        t.exports = {
            Polyline: a.extend({
                type: "ec-polyline",
                shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
                style: {fill: null, stroke: "#000"},
                buildPath: function (t, e) {
                    var i = e.points, a = 0, s = i.length, l = r(i, e.smoothConstraint);
                    if (e.connectNulls) {
                        for (; s > 0 && n(i[s - 1]); s--);
                        for (; a < s && n(i[a]); a++);
                    }
                    for (; a < s;)a += o(t, i, a, s, s, 1, l.min, l.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
                }
            }),
            Polygon: a.extend({
                type: "ec-polygon",
                shape: {
                    points: [],
                    stackedOnPoints: [],
                    smooth: 0,
                    stackedOnSmooth: 0,
                    smoothConstraint: !0,
                    smoothMonotone: null,
                    connectNulls: !1
                },
                buildPath: function (t, e) {
                    var i = e.points, a = e.stackedOnPoints, s = 0, l = i.length, u = e.smoothMonotone, h = r(i, e.smoothConstraint), c = r(a, e.smoothConstraint);
                    if (e.connectNulls) {
                        for (; l > 0 && n(i[l - 1]); l--);
                        for (; s < l && n(i[s]); s++);
                    }
                    for (; s < l;) {
                        var d = o(t, i, s, l, l, 1, h.min, h.max, e.smooth, u, e.connectNulls);
                        o(t, a, s + d - 1, d, l, -1, c.min, c.max, e.stackedOnSmooth, u, e.connectNulls), s += d + 1, t.closePath()
                    }
                }
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(102), i(103), i(78)("pie", [{
            type: "pieToggleSelect",
            event: "pieselectchanged",
            method: "toggleSelected"
        }, {type: "pieSelect", event: "pieselected", method: "select"}, {
            type: "pieUnSelect",
            event: "pieunselected",
            method: "unSelect"
        }]), o.registerVisual(n.curry(i(73), "pie")), o.registerLayout(n.curry(i(105), "pie")), o.registerProcessor(n.curry(i(71), "pie"))
    }, function (t, e, i) {
        "use strict";
        var n = i(14), o = i(1), r = i(6), a = i(29), s = i(67), l = i(2).extendSeriesModel({
            type: "series.pie",
            init: function (t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
            },
            mergeOption: function (t) {
                l.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            },
            getInitialData: function (t, e) {
                var i = a(["value"], t.data), o = new n(i, this);
                return o.initData(t.data), o
            },
            getDataParams: function (t) {
                var e = this._data, i = l.superCall(this, "getDataParams", t), n = e.getSum("value");
                return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
            },
            _defaultLabelLine: function (t) {
                r.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, i = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                center: ["50%", "50%"],
                radius: [0, "75%"],
                clockwise: !0,
                startAngle: 90,
                minAngle: 0,
                selectedOffset: 10,
                avoidLabelOverlap: !0,
                label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                labelLine: {
                    normal: {
                        show: !0,
                        length: 15,
                        length2: 15,
                        smooth: !1,
                        lineStyle: {width: 1, type: "solid"}
                    }
                },
                itemStyle: {normal: {borderWidth: 1}, emphasis: {}},
                animationEasing: "cubicOut",
                data: []
            }
        });
        o.mixin(l, s), t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var r = e.getData(), a = this.dataIndex, s = r.getName(a), l = e.get("selectedOffset");
            n.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), r.each(function (t) {
                o(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), l, i);
            })
        }

        function o(t, e, i, n, o) {
            var r = (e.startAngle + e.endAngle) / 2, a = Math.cos(r), s = Math.sin(r), l = i ? n : 0, u = [a * l, s * l];
            o ? t.animate().when(200, {position: u}).start("bounceOut") : t.attr("position", u)
        }

        function r(t, e) {
            function i() {
                r.ignore = r.hoverIgnore, a.ignore = a.hoverIgnore
            }

            function n() {
                r.ignore = r.normalIgnore, a.ignore = a.normalIgnore
            }

            s.Group.call(this);
            var o = new s.Sector({z2: 2}), r = new s.Polyline, a = new s.Text;
            this.add(o), this.add(r), this.add(a), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function a(t, e, i, n, o) {
            var r = n.getModel("textStyle"), a = "inside" === o || "inner" === o;
            return {
                fill: r.getTextColor() || (a ? "#fff" : t.getItemVisual(e, "color")),
                opacity: t.getItemVisual(e, "opacity"),
                textFont: r.getFont(),
                text: l.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
            }
        }

        var s = i(3), l = i(1), u = r.prototype;
        u.updateData = function (t, e, i) {
            function n() {
                a.stopAnimation(!0), a.animateTo({shape: {r: c.r + 10}}, 300, "elasticOut")
            }

            function r() {
                a.stopAnimation(!0), a.animateTo({shape: {r: c.r}}, 300, "elasticOut")
            }

            var a = this.childAt(0), u = t.hostModel, h = t.getItemModel(e), c = t.getItemLayout(e), d = l.extend({}, c);
            d.label = null, i ? (a.setShape(d), a.shape.endAngle = c.startAngle, s.updateProps(a, {shape: {endAngle: c.endAngle}}, u, e)) : s.updateProps(a, {shape: d}, u, e);
            var f = h.getModel("itemStyle"), p = t.getItemVisual(e, "color");
            a.useStyle(l.defaults({
                lineJoin: "bevel",
                fill: p
            }, f.getModel("normal").getItemStyle())), a.hoverStyle = f.getModel("emphasis").getItemStyle(), o(this, t.getItemLayout(e), h.get("selected"), u.get("selectedOffset"), u.get("animation")), a.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && u.ifEnableAnimation() && a.on("mouseover", n).on("mouseout", r).on("emphasis", n).on("normal", r), this._updateLabel(t, e), s.setHoverStyle(this)
        }, u._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), o = t.hostModel, r = t.getItemModel(e), l = t.getItemLayout(e), u = l.label, h = t.getItemVisual(e, "color");
            s.updateProps(i, {shape: {points: u.linePoints || [[u.x, u.y], [u.x, u.y], [u.x, u.y]]}}, o, e), s.updateProps(n, {
                style: {
                    x: u.x,
                    y: u.y
                }
            }, o, e), n.attr({
                style: {textVerticalAlign: u.verticalAlign, textAlign: u.textAlign, textFont: u.font},
                rotation: u.rotation,
                origin: [u.x, u.y],
                z2: 10
            });
            var c = r.getModel("label.normal"), d = r.getModel("label.emphasis"), f = r.getModel("labelLine.normal"), p = r.getModel("labelLine.emphasis"), g = c.get("position") || d.get("position");
            n.setStyle(a(t, e, "normal", c, g)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
                stroke: h,
                opacity: t.getItemVisual(e, "opacity")
            }), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = a(t, e, "emphasis", d, g), i.hoverStyle = p.getModel("lineStyle").getLineStyle();
            var m = f.get("smooth");
            m && m === !0 && (m = .4), i.setShape({smooth: m})
        }, l.inherits(r, s.Group);
        var h = i(27).extend({
            type: "pie", init: function () {
                var t = new s.Group;
                this._sectorGroup = t
            }, render: function (t, e, i, o) {
                if (!o || o.from !== this.uid) {
                    var a = t.getData(), s = this._data, u = this.group, h = e.get("animation"), c = !s, d = l.curry(n, this.uid, t, h, i), f = t.get("selectedMode");
                    if (a.diff(s).add(function (t) {
                            var e = new r(a, t);
                            c && e.eachChild(function (t) {
                                t.stopAnimation(!0)
                            }), f && e.on("click", d), a.setItemGraphicEl(t, e), u.add(e)
                        }).update(function (t, e) {
                            var i = s.getItemGraphicEl(e);
                            i.updateData(a, t), i.off("click"), f && i.on("click", d), u.add(i), a.setItemGraphicEl(t, i)
                        }).remove(function (t) {
                            var e = s.getItemGraphicEl(t);
                            u.remove(e)
                        }).execute(), h && c && a.count() > 0) {
                        var p = a.getItemLayout(0), g = Math.max(i.getWidth(), i.getHeight()) / 2, m = l.bind(u.removeClipPath, u);
                        u.setClipPath(this._createClipPath(p.cx, p.cy, g, p.startAngle, p.clockwise, m, t))
                    }
                    this._data = a
                }
            }, dispose: function () {
            }, _createClipPath: function (t, e, i, n, o, r, a) {
                var l = new s.Sector({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: o}});
                return s.initProps(l, {shape: {endAngle: n + (o ? 1 : -1) * Math.PI * 2}}, a, r), l
            }, containPoint: function (t, e) {
                var i = e.getData(), n = i.getItemLayout(0);
                if (n) {
                    var o = t[0] - n.cx, r = t[1] - n.cy, a = Math.sqrt(o * o + r * r);
                    return a <= n.r && a >= n.r0
                }
            }
        });
        t.exports = h
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n, o, r, a) {
            function s(e, i, n, o) {
                for (var r = e; r < i; r++)if (t[r].y += n, r > e && r + 1 < i && t[r + 1].y > t[r].y + t[r].height)return void l(r, n / 2);
                l(i - 1, n / 2)
            }

            function l(e, i) {
                for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
            }

            function u(t, e, i, n, o, r) {
                for (var a = r > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)if ("center" !== t[s].position) {
                    var u = Math.abs(t[s].y - n), h = t[s].len, c = t[s].len2, d = u < o + h ? Math.sqrt((o + h + c) * (o + h + c) - u * u) : Math.abs(t[s].x - i);
                    e && d >= a && (d = a - 10), !e && d <= a && (d = a + 10), t[s].x = i + d * r, a = d
                }
            }

            t.sort(function (t, e) {
                return t.y - e.y
            });
            for (var h, c = 0, d = t.length, f = [], p = [], g = 0; g < d; g++)h = t[g].y - c, h < 0 && s(g, d, -h, o), c = t[g].y + t[g].height;
            a - c < 0 && l(d - 1, c - a);
            for (var g = 0; g < d; g++)t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
            u(f, !1, e, i, n, o), u(p, !0, e, i, n, o)
        }

        function o(t, e, i, o, r, a) {
            for (var s = [], l = [], u = 0; u < t.length; u++)t[u].x < e ? s.push(t[u]) : l.push(t[u]);
            n(l, e, i, o, 1, r, a), n(s, e, i, o, -1, r, a);
            for (var u = 0; u < t.length; u++) {
                var h = t[u].linePoints;
                if (h) {
                    var c = h[1][0] - h[2][0];
                    t[u].x < e ? h[2][0] = t[u].x + 3 : h[2][0] = t[u].x - 3, h[1][1] = h[2][1] = t[u].y, h[1][0] = h[2][0] + c
                }
            }
        }

        var r = i(16);
        t.exports = function (t, e, i, n) {
            var a, s, l = t.getData(), u = [], h = !1;
            l.each(function (i) {
                var n, o, c, d, f = l.getItemLayout(i), p = l.getItemModel(i), g = p.getModel("label.normal"), m = g.get("position") || p.get("label.emphasis.position"), v = p.getModel("labelLine.normal"), y = v.get("length"), x = v.get("length2"), _ = (f.startAngle + f.endAngle) / 2, b = Math.cos(_), w = Math.sin(_);
                a = f.cx, s = f.cy;
                var S = "inside" === m || "inner" === m;
                if ("center" === m)n = f.cx, o = f.cy, d = "center"; else {
                    var M = (S ? (f.r + f.r0) / 2 * b : f.r * b) + a, T = (S ? (f.r + f.r0) / 2 * w : f.r * w) + s;
                    if (n = M + 3 * b, o = T + 3 * w, !S) {
                        var I = M + b * (y + e - f.r), A = T + w * (y + e - f.r), L = I + (b < 0 ? -1 : 1) * x, C = A;
                        n = L + (b < 0 ? -5 : 5), o = C, c = [[M, T], [I, A], [L, C]]
                    }
                    d = S ? "center" : b > 0 ? "left" : "right"
                }
                var D = g.getModel("textStyle").getFont(), P = g.get("rotate") ? b < 0 ? -_ + Math.PI : -_ : 0, k = t.getFormattedLabel(i, "normal") || l.getName(i), O = r.getBoundingRect(k, D, d, "top");
                h = !!P, f.label = {
                    x: n,
                    y: o,
                    position: m,
                    height: O.height,
                    len: y,
                    len2: x,
                    linePoints: c,
                    textAlign: d,
                    verticalAlign: "middle",
                    font: D,
                    rotation: P
                }, S || u.push(f.label)
            }), !h && t.get("avoidLabelOverlap") && o(u, a, s, e, i, n)
        }
    }, function (t, e, i) {
        var n = i(4), o = n.parsePercent, r = i(104), a = i(1), s = 2 * Math.PI, l = Math.PI / 180;
        t.exports = function (t, e, i, u) {
            e.eachSeriesByType(t, function (t) {
                var e = t.get("center"), u = t.get("radius");
                a.isArray(u) || (u = [0, u]), a.isArray(e) || (e = [e, e]);
                var h = i.getWidth(), c = i.getHeight(), d = Math.min(h, c), f = o(e[0], h), p = o(e[1], c), g = o(u[0], d / 2), m = o(u[1], d / 2), v = t.getData(), y = -t.get("startAngle") * l, x = t.get("minAngle") * l, _ = v.getSum("value"), b = Math.PI / (_ || v.count()) * 2, w = t.get("clockwise"), S = t.get("roseType"), M = v.getDataExtent("value");
                M[0] = 0;
                var T = s, I = 0, A = y, L = w ? 1 : -1;
                if (v.each("value", function (t, e) {
                        var i;
                        i = "area" !== S ? 0 === _ ? b : t * b : s / (v.count() || 1), i < x ? (i = x, T -= x) : I += t;
                        var o = A + L * i;
                        v.setItemLayout(e, {
                            angle: i,
                            startAngle: A,
                            endAngle: o,
                            clockwise: w,
                            cx: f,
                            cy: p,
                            r0: g,
                            r: S ? n.linearMap(t, M, [g, m]) : m
                        }), A = o
                    }, !0), T < s)if (T <= .001) {
                    var C = s / v.count();
                    v.each(function (t) {
                        var e = v.getItemLayout(t);
                        e.startAngle = y + L * t * C, e.endAngle = y + L * (t + 1) * C
                    })
                } else b = T / I, A = y, v.each("value", function (t, e) {
                    var i = v.getItemLayout(e), n = i.angle === x ? x : t * b;
                    i.startAngle = A, i.endAngle = A + L * n, A += L * n
                });
                r(t, m, h, c)
            })
        }
    }, function (t, e, i) {
        "use strict";
        i(54), i(107)
    }, function (t, e, i) {
        function n(t, e) {
            function i(t, e) {
                var i = n.getAxis(t);
                return i.toGlobalCoord(i.dataToCoord(0))
            }

            var n = t.coordinateSystem, o = e.axis, r = {}, a = o.position, s = o.onZero ? "onZero" : a, l = o.dim, u = n.getRect(), h = [u.x, u.x + u.width, u.y, u.y + u.height], c = e.get("offset") || 0, d = {
                x: {
                    top: h[2] - c,
                    bottom: h[3] + c
                }, y: {left: h[0] - c, right: h[1] + c}
            };
            d.x.onZero = Math.max(Math.min(i("y"), d.x.bottom), d.x.top), d.y.onZero = Math.max(Math.min(i("x"), d.y.right), d.y.left), r.position = ["y" === l ? d.y[s] : h[0], "x" === l ? d.x[s] : h[3]], r.rotation = Math.PI / 2 * ("x" === l ? 0 : 1);
            var f = {top: -1, bottom: 1, left: -1, right: 1};
            r.labelDirection = r.tickDirection = r.nameDirection = f[a], o.onZero && (r.labelOffset = d[l][a] - d[l].onZero), e.getModel("axisTick").get("inside") && (r.tickDirection = -r.tickDirection), e.getModel("axisLabel").get("inside") && (r.labelDirection = -r.labelDirection);
            var p = e.getModel("axisLabel").get("rotate");
            return r.labelRotation = "top" === s ? -p : p, r.labelInterval = o.getLabelInterval(), r.z2 = 1, r
        }

        var o = i(1), r = i(3), a = i(51), s = a.ifIgnoreOnTick, l = a.getInterval, u = ["axisLine", "axisLabel", "axisTick", "axisName"], h = ["splitArea", "splitLine"], c = i(2).extendComponentView({
            type: "axis",
            render: function (t, e) {
                this.group.removeAll();
                var i = this._axisGroup;
                if (this._axisGroup = new r.Group, this.group.add(this._axisGroup), t.get("show")) {
                    var s = t.findGridModel(), l = n(s, t), c = new a(t, l);
                    o.each(u, c.add, c), this._axisGroup.add(c.getGroup()), o.each(h, function (e) {
                        t.get(e + ".show") && this["_" + e](t, s, l.labelInterval)
                    }, this), r.groupTransition(i, this._axisGroup, t)
                }
            },
            _splitLine: function (t, e, i) {
                var n = t.axis, a = t.getModel("splitLine"), u = a.getModel("lineStyle"), h = u.get("color"), c = l(a, i);
                h = o.isArray(h) ? h : [h];
                for (var d = e.coordinateSystem.getRect(), f = n.isHorizontal(), p = 0, g = n.getTicksCoords(), m = n.scale.getTicks(), v = [], y = [], x = u.getLineStyle(), _ = 0; _ < g.length; _++)if (!s(n, _, c)) {
                    var b = n.toGlobalCoord(g[_]);
                    f ? (v[0] = b, v[1] = d.y, y[0] = b, y[1] = d.y + d.height) : (v[0] = d.x, v[1] = b, y[0] = d.x + d.width, y[1] = b);
                    var w = p++ % h.length;
                    this._axisGroup.add(new r.Line(r.subPixelOptimizeLine({
                        anid: "line_" + m[_],
                        shape: {x1: v[0], y1: v[1], x2: y[0], y2: y[1]},
                        style: o.defaults({stroke: h[w]}, x),
                        silent: !0
                    })))
                }
            },
            _splitArea: function (t, e, i) {
                var n = t.axis, a = t.getModel("splitArea"), u = a.getModel("areaStyle"), h = u.get("color"), c = e.coordinateSystem.getRect(), d = n.getTicksCoords(), f = n.scale.getTicks(), p = n.toGlobalCoord(d[0]), g = n.toGlobalCoord(d[0]), m = 0, v = l(a, i), y = u.getAreaStyle();
                h = o.isArray(h) ? h : [h];
                for (var x = 1; x < d.length; x++)if (!s(n, x, v)) {
                    var _, b, w, S, M = n.toGlobalCoord(d[x]);
                    n.isHorizontal() ? (_ = p, b = c.y, w = M - _, S = c.height) : (_ = c.x, b = g, w = c.width, S = M - b);
                    var T = m++ % h.length;
                    this._axisGroup.add(new r.Rect({
                        anid: "area_" + f[x],
                        shape: {x: _, y: b, width: w, height: S},
                        style: o.defaults({fill: h[T]}, y),
                        silent: !0
                    })), p = _ + w, g = b + S
                }
            }
        });
        c.extend({type: "xAxis"}), c.extend({type: "yAxis"})
    }, function (t, e, i) {
        var n = i(1), o = i(110), r = i(2);
        r.registerAction("dataZoom", function (t, e) {
            var i = o.createLinkedNodesFinder(n.bind(e.eachComponent, e, "dataZoom"), o.eachAxisDim, function (t, e) {
                return t.get(e.axisIndex)
            }), r = [];
            e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
                r.push.apply(r, i(t).nodes)
            }), n.each(r, function (e, i) {
                e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
            })
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            i.getAxisProxy(t.name, e).reset(i)
        }

        function o(t, e, i) {
            i.getAxisProxy(t.name, e).filterData(i)
        }

        var r = i(2);
        r.registerProcessor(function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(n), t.eachTargetAxis(o)
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), i = e.getDataPercentWindow(), n = e.getDataValueWindow();
                t.setRawRange({start: i[0], end: i[1], startValue: n[0], endValue: n[1]})
            })
        })
    }, function (t, e, i) {
        var n = i(9), o = i(1), r = {}, a = ["x", "y", "z", "radius", "angle"];
        r.createNameEach = function (t, e) {
            t = t.slice();
            var i = o.map(t, n.capitalFirst);
            e = (e || []).slice();
            var r = o.map(e, n.capitalFirst);
            return function (n, a) {
                o.each(t, function (t, o) {
                    for (var s = {name: t, capital: i[o]}, l = 0; l < e.length; l++)s[e[l]] = t + r[l];
                    n.call(a, s)
                })
            }
        }, r.eachAxisDim = r.createNameEach(a, ["axisIndex", "axis", "index", "id"]), r.createLinkedNodesFinder = function (t, e, i) {
            function n(t, e) {
                return o.indexOf(e.nodes, t) >= 0
            }

            function r(t, n) {
                var r = !1;
                return e(function (e) {
                    o.each(i(t, e) || [], function (t) {
                        n.records[e.name][t] && (r = !0)
                    })
                }), r
            }

            function a(t, n) {
                n.nodes.push(t), e(function (e) {
                    o.each(i(t, e) || [], function (t) {
                        n.records[e.name][t] = !0
                    })
                })
            }

            return function (i) {
                function o(t) {
                    !n(t, s) && r(t, s) && (a(t, s), l = !0)
                }

                var s = {nodes: [], records: {}};
                if (e(function (t) {
                        s.records[t.name] = {}
                    }), !i)return s;
                a(i, s);
                var l;
                do l = !1, t(o); while (l);
                return s
            }
        }, t.exports = r
    }, function (t, e, i) {
        function n(t) {
            var e = t[a];
            return e || (e = t[a] = [{}]), e
        }

        var o = i(1), r = o.each, a = "\0_ec_hist_store", s = {
            push: function (t, e) {
                var i = n(t);
                r(e, function (e, n) {
                    for (var o = i.length - 1; o >= 0; o--) {
                        var r = i[o];
                        if (r[n])break
                    }
                    if (o < 0) {
                        var a = t.queryComponents({mainType: "dataZoom", subType: "select", id: n})[0];
                        if (a) {
                            var s = a.getPercentRange();
                            i[0][n] = {dataZoomId: n, start: s[0], end: s[1]}
                        }
                    }
                }), i.push(e)
            }, pop: function (t) {
                var e = n(t), i = e[e.length - 1];
                e.length > 1 && e.pop();
                var o = {};
                return r(i, function (t, i) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var t = e[n][i];
                        if (t) {
                            o[i] = t;
                            break
                        }
                    }
                }), o
            }, clear: function (t) {
                t[a] = null
            }, count: function (t) {
                return n(t).length
            }
        };
        t.exports = s
    }, function (t, e, i) {
        i(13).registerSubTypeDefaulter("dataZoom", function (t) {
            return "slider"
        })
    }, function (t, e, i) {
        function n(t) {
            V.call(this), this._zr = t, this.group = new G.Group, this._brushType, this._brushOption, this._panels, this._track = [], this._dragging, this._covers = [], this._creatingCover, this._creatingPanel, this._enableGlobalPan, this._uid = "brushController_" + it++, this._handlers = {}, Z(nt, function (t, e) {
                this._handlers[e] = N.bind(t, this)
            }, this)
        }

        function o(t, e) {
            var i = t._zr;
            t._enableGlobalPan || F.take(i, K, t._uid), Z(t._handlers, function (t, e) {
                i.on(e, t)
            }), t._brushType = e.brushType, t._brushOption = N.merge(N.clone(et), e, !0)
        }

        function r(t) {
            var e = t._zr;
            F.release(e, K, t._uid), Z(t._handlers, function (t, i) {
                e.off(i, t)
            }), t._brushType = t._brushOption = null
        }

        function a(t, e) {
            var i = ot[e.brushType].createCover(t, e);
            return u(i), i.__brushOption = e, t.group.add(i), i
        }

        function s(t, e) {
            var i = c(e);
            return i.endCreating && (i.endCreating(t, e), u(e)), e
        }

        function l(t, e) {
            var i = e.__brushOption;
            c(e).updateCoverShape(t, e, i.range, i)
        }

        function u(t) {
            t.traverse(function (t) {
                t.z = Y, t.z2 = Y
            })
        }

        function h(t, e) {
            c(e).updateCommon(t, e), l(t, e)
        }

        function c(t) {
            return ot[t.__brushOption.brushType]
        }

        function d(t, e, i) {
            var n = t._panels;
            if (!n)return !0;
            var o;
            return Z(n, function (t) {
                t.contain(e, i) && (o = t)
            }), o
        }

        function f(t, e) {
            var i = t._panels;
            if (!i)return !0;
            var n = e.__brushOption.panelId;
            return null == n || i[n]
        }

        function p(t) {
            var e = t._covers, i = e.length;
            return Z(e, function (e) {
                t.group.remove(e)
            }, t), e.length = 0, !!i
        }

        function g(t, e) {
            var i = q(t._covers, function (t) {
                var e = t.__brushOption, i = N.clone(e.range);
                return {brushType: e.brushType, panelId: e.panelId, range: i}
            });
            t.trigger("brush", i, {isEnd: !!e.isEnd, removeOnClick: !!e.removeOnClick})
        }

        function m(t) {
            var e = t._track;
            if (!e.length)return !1;
            var i = e[e.length - 1], n = e[0], o = i[0] - n[0], r = i[1] - n[1], a = X(o * o + r * r, .5);
            return a > $
        }

        function v(t) {
            var e = t.length - 1;
            return e < 0 && (e = 0), [t[0], t[e]]
        }

        function y(t, e, i, n) {
            var o = new G.Group;
            return o.add(new G.Rect({
                name: "main",
                style: w(i),
                silent: !0,
                draggable: !0,
                cursor: "move",
                drift: W(t, e, o, "nswe"),
                ondragend: W(g, e, {isEnd: !0})
            })), Z(n, function (i) {
                o.add(new G.Rect({
                    name: i,
                    style: {opacity: 0},
                    draggable: !0,
                    silent: !0,
                    invisible: !0,
                    drift: W(t, e, o, i),
                    ondragend: W(g, e, {isEnd: !0})
                }))
            }), o
        }

        function x(t, e, i, n) {
            var o = n.brushStyle.lineWidth || 0, r = U(o, Q), a = i[0][0], s = i[1][0], l = a - o / 2, u = s - o / 2, h = i[0][1], c = i[1][1], d = h - r + o / 2, f = c - r + o / 2, p = h - a, g = c - s, m = p + o, v = g + o;
            b(t, e, "main", a, s, p, g), n.transformable && (b(t, e, "w", l, u, r, v), b(t, e, "e", d, u, r, v), b(t, e, "n", l, u, m, r), b(t, e, "s", l, f, m, r), b(t, e, "nw", l, u, r, r), b(t, e, "ne", d, u, r, r), b(t, e, "sw", l, f, r, r), b(t, e, "se", d, f, r, r))
        }

        function _(t, e) {
            var i = e.__brushOption, n = i.transformable, o = e.childAt(0);
            o.useStyle(w(i)), o.attr({
                silent: !n,
                cursor: n ? "move" : "default"
            }), Z(["w", "e", "n", "s", "se", "sw", "ne", "nw"], function (i) {
                var o = e.childOfName(i), r = T(t, i);
                o && o.attr({silent: !n, invisible: !n, cursor: n ? tt[r] + "-resize" : null})
            })
        }

        function b(t, e, i, n, o, r, a) {
            var s = e.childOfName(i);
            s && s.setShape(D(C(t, e, [[n, o], [n + r, o + a]])))
        }

        function w(t) {
            return N.defaults({strokeNoScale: !0}, t.brushStyle)
        }

        function S(t, e, i, n) {
            var o = [j(t, i), j(e, n)], r = [U(t, i), U(e, n)];
            return [[o[0], r[0]], [o[1], r[1]]]
        }

        function M(t) {
            return G.getTransform(t.group)
        }

        function T(t, e) {
            if (e.length > 1) {
                e = e.split("");
                var i = [T(t, e[0]), T(t, e[1])];
                return ("e" === i[0] || "w" === i[0]) && i.reverse(), i.join("")
            }
            var n = {w: "left", e: "right", n: "top", s: "bottom"}, o = {
                left: "w",
                right: "e",
                top: "n",
                bottom: "s"
            }, i = G.transformDirection(n[e], M(t));
            return o[i]
        }

        function I(t, e, i, n, o, r, a, s) {
            var l = n.__brushOption, u = t(l.range), c = L(i, r, a);
            Z(o.split(""), function (t) {
                var e = J[t];
                u[e[0]][e[1]] += c[e[0]]
            }), l.range = e(S(u[0][0], u[1][0], u[0][1], u[1][1])), h(i, n), g(i, {isEnd: !1})
        }

        function A(t, e, i, n, o) {
            var r = e.__brushOption.range, a = L(t, i, n);
            Z(r, function (t) {
                t[0] += a[0], t[1] += a[1]
            }), h(t, e), g(t, {isEnd: !1})
        }

        function L(t, e, i) {
            var n = t.group, o = n.transformCoordToLocal(e, i), r = n.transformCoordToLocal(0, 0);
            return [o[0] - r[0], o[1] - r[1]]
        }

        function C(t, e, i) {
            var n = f(t, e);
            if (n === !0)return N.clone(i);
            var o = n.getBoundingRect();
            return N.map(i, function (t) {
                var e = t[0];
                e = U(e, o.x), e = j(e, o.x + o.width);
                var i = t[1];
                return i = U(i, o.y), i = j(i, o.y + o.height), [e, i]
            })
        }

        function D(t) {
            var e = j(t[0][0], t[1][0]), i = j(t[0][1], t[1][1]), n = U(t[0][0], t[1][0]), o = U(t[0][1], t[1][1]);
            return {x: e, y: i, width: n - e, height: o - i}
        }

        function P(t, e) {
            var i = e.offsetX, n = e.offsetY, o = t._zr;
            if (t._brushType) {
                for (var r, a = t._panels, s = t._covers, l = 0; l < s.length; l++)if (ot[s[l].__brushOption.brushType].contain(s[l], i, n)) {
                    r = !0;
                    break
                }
                r || (a ? Z(a, function (t) {
                    t.contain(i, n) && o.setCursorStyle("crosshair")
                }) : o.setCursorStyle("crosshair"))
            }
        }

        function k(t) {
            var e = t.event;
            e.preventDefault && e.preventDefault()
        }

        function O(t, e, i) {
            return t.childOfName("main").contain(e, i)
        }

        function z(t, e, i) {
            var n, o = e.offsetX, r = e.offsetY, u = t._creatingCover, h = t._creatingPanel, c = t._brushOption;
            if (t._track.push(t.group.transformCoordToLocal(o, r)), m(t) || u) {
                if (h && !u) {
                    "single" === c.brushMode && p(t);
                    var f = N.clone(c);
                    f.panelId = h === !0 ? null : h.__brushPanelId, u = t._creatingCover = a(t, f), t._covers.push(u)
                }
                if (u) {
                    var g = ot[t._brushType], v = u.__brushOption;
                    v.range = g.getCreatingRange(C(t, u, t._track)), i && (s(t, u), g.updateCommon(t, u)), l(t, u), n = {isEnd: i}
                }
            } else i && "single" === c.brushMode && c.removeOnClick && d(t, o, r) && p(t) && (n = {
                isEnd: i,
                removeOnClick: !0
            });
            return n
        }

        function E(t) {
            if (this._dragging) {
                k(t);
                var e = z(this, t, !0);
                this._dragging = !1, this._track = [], this._creatingCover = null, e && g(this, e)
            }
        }

        function R(t) {
            return {
                createCover: function (e, i) {
                    return y(W(I, function (e) {
                        var i = [e, [0, 100]];
                        return t && i.reverse(), i
                    }, function (e) {
                        return e[t]
                    }), e, i, [["w", "e"], ["n", "s"]][t])
                }, getCreatingRange: function (e) {
                    var i = v(e), n = j(i[0][t], i[1][t]), o = U(i[0][t], i[1][t]);
                    return [n, o]
                }, updateCoverShape: function (e, i, n, o) {
                    var r, a = o.brushStyle.width;
                    if (null == a) {
                        var s = f(e, i), l = 0;
                        if (s !== !0) {
                            var u = s.getBoundingRect();
                            a = t ? u.width : u.height, l = t ? u.x : u.y
                        }
                        r = [l, l + (a || 0)]
                    } else r = [-a / 2, a / 2];
                    var h = [n, r];
                    t && h.reverse(), x(e, i, h, o)
                }, updateCommon: _, contain: O
            }
        }

        var V = i(20), N = i(1), B = i(8), G = i(3), F = i(115), H = i(45), W = N.curry, Z = N.each, q = N.map, j = Math.min, U = Math.max, X = Math.pow, Y = 1e4, $ = 6, Q = 6, K = "globalPan", J = {
            w: [0, 0],
            e: [0, 1],
            n: [1, 0],
            s: [1, 1]
        }, tt = {
            w: "ew",
            e: "ew",
            n: "ns",
            s: "ns",
            ne: "nesw",
            sw: "nesw",
            nw: "nwse",
            se: "nwse"
        }, et = {
            brushStyle: {lineWidth: 2, stroke: "rgba(0,0,0,0.3)", fill: "rgba(0,0,0,0.1)"},
            transformable: !0,
            brushMode: "single",
            removeOnClick: !1
        }, it = 0;
        n.prototype = {
            constructor: n, enableBrush: function (t) {
                return this._brushType && r(this), t.brushType && o(this, t), this
            }, setPanels: function (t) {
                var e = this._panels || {}, i = this._panels = t && t.length && {}, n = this.group;
                return i && Z(t, function (t) {
                    var o = t.panelId, r = e[o];
                    r || (r = new G.Rect({silent: !0, invisible: !0}), n.add(r));
                    var a = t.rect;
                    a instanceof B || (a = B.create(a)), r.attr("shape", a.plain()), r.__brushPanelId = o, i[o] = r, e[o] = null
                }), Z(e, function (t) {
                    t && n.remove(t)
                }), this
            }, mount: function (t) {
                t = t || {}, this._enableGlobalPan = t.enableGlobalPan;
                var e = this.group;
                return this._zr.add(e), e.attr({
                    position: t.position || [0, 0],
                    rotation: t.rotation || 0,
                    scale: t.scale || [1, 1]
                }), this
            }, eachCover: function (t, e) {
                Z(this._covers, t, e)
            }, updateCovers: function (t) {
                function e(t, e) {
                    return (null != t.id ? t.id : r + e) + "-" + t.brushType
                }

                function i(t, i) {
                    return e(t.__brushOption, i)
                }

                function n(e, i) {
                    var n = t[e];
                    if (null != i && l[i] === d)u[e] = l[i]; else {
                        var o = u[e] = null != i ? (l[i].__brushOption = n, l[i]) : s(c, a(c, n));
                        h(c, o)
                    }
                }

                function o(t) {
                    l[t] !== d && c.group.remove(l[t])
                }

                t = N.map(t, function (t) {
                    return N.merge(N.clone(et), t, !0)
                });
                var r = "\0-brush-index-", l = this._covers, u = this._covers = [], c = this, d = this._creatingCover;
                return new H(l, t, i, e).add(n).update(n).remove(o).execute(), this
            }, unmount: function () {
                return this.enableBrush(!1), p(this), this._zr.remove(this.group), this
            }, dispose: function () {
                this.unmount(), this.off()
            }
        }, N.mixin(n, V);
        var nt = {
            mousedown: function (t) {
                if (this._dragging)E.call(this, t); else if (!t.target || !t.target.draggable) {
                    k(t);
                    var e = t.offsetX, i = t.offsetY;
                    this._creatingCover = null;
                    var n = this._creatingPanel = d(this, e, i);
                    n && (this._dragging = !0, this._track = [this.group.transformCoordToLocal(e, i)])
                }
            }, mousemove: function (t) {
                if (P(this, t), this._dragging) {
                    k(t);
                    var e = z(this, t, !1);
                    e && g(this, e)
                }
            }, mouseup: E
        }, ot = {
            lineX: R(0), lineY: R(1), rect: {
                createCover: function (t, e) {
                    return y(W(I, function (t) {
                        return t
                    }, function (t) {
                        return t
                    }), t, e, ["w", "e", "n", "s", "se", "sw", "ne", "nw"])
                }, getCreatingRange: function (t) {
                    var e = v(t);
                    return S(e[1][0], e[1][1], e[0][0], e[0][1])
                }, updateCoverShape: function (t, e, i, n) {
                    x(t, e, i, n)
                }, updateCommon: _, contain: O
            }, polygon: {
                createCover: function (t, e) {
                    var i = new G.Group;
                    return i.add(new G.Polyline({name: "main", style: w(e), silent: !0})), i
                }, getCreatingRange: function (t) {
                    return t
                }, endCreating: function (t, e) {
                    e.remove(e.childAt(0)), e.add(new G.Polygon({
                        name: "main",
                        draggable: !0,
                        drift: W(A, t, e),
                        ondragend: W(g, t, {isEnd: !0})
                    }))
                }, updateCoverShape: function (t, e, i, n) {
                    e.childAt(0).setShape({points: C(t, e, i)})
                }, updateCommon: _, contain: O
            }
        };
        t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return t[0] > t[1] && t.reverse(), t
        }

        function o(t, e) {
            for (var i = !0, n = 0; n < h.length; n++) {
                var o = h[n] + "Index";
                if (t[o] >= 0) {
                    i = !1;
                    for (var r = 0; r < e.length; r++)if (e[r][o] === t[o])return e[r]
                }
            }
            return i
        }

        function r(t, e, i, o) {
            var r = i.coordSys.getAxis(t);
            return n(a.map([0, 1], function (t) {
                return e ? r.coordToData(r.toLocalCoord(o[t])) : r.toGlobalCoord(r.dataToCoord(o[t]))
            }))
        }

        var a = i(1), s = i(3), l = a.each, u = {}, h = ["geo", "xAxis", "yAxis"], c = "--", d = ["dataToPoint", "pointToData"];
        u.parseOutputRanges = function (t, e, i, n) {
            l(t, function (t, i) {
                var r = t.panelId;
                if (r) {
                    r = r.split(c), t[r[0] + "Index"] = +r[1];
                    var a = o(t, e);
                    t.coordRange = f[t.brushType](1, a, t.range), n && (n[i] = a)
                }
            })
        }, u.parseInputRanges = function (t, e) {
            l(t.areas, function (e) {
                var i = o(e, t.coordInfoList);
                e.range = e.range || [], i && i !== !0 && (e.range = f[e.brushType](0, i, e.coordRange), e.panelId = i.panelId)
            })
        }, u.makePanelOpts = function (t) {
            var e = [];
            return l(t, function (t) {
                var i, n = t.coordSys;
                t.geoIndex >= 0 ? (i = n.getBoundingRect().clone(), i.applyTransform(s.getTransform(n))) : i = n.grid.getRect().clone(), e.push({
                    panelId: t.panelId,
                    rect: i
                })
            }), e
        }, u.makeCoordInfoList = function (t, e) {
            var i = [];
            return l(h, function (n) {
                var o = t[n + "Index"];
                null != o && "none" !== o && ("all" === o || a.isArray(o) || (o = [o]), e.eachComponent({mainType: n}, function (t, e) {
                    if (!("all" !== o && a.indexOf(o, e) < 0)) {
                        var r, s;
                        "xAxis" === n || "yAxis" === n ? r = t.axis.grid : s = t.coordinateSystem;
                        for (var l, u = 0, h = i.length; u < h; u++) {
                            var d = i[u];
                            if ("yAxis" === n && !d.yAxis && d.xAxis) {
                                var f = r.getCartesian(d.xAxisIndex, e);
                                if (f) {
                                    s = f, l = d;
                                    break
                                }
                            }
                        }
                        !l && i.push(l = {}), l[n] = t, l[n + "Index"] = e, l.panelId = n + c + e, l.coordSys = s || r.getCartesian(l.xAxisIndex, l.yAxisIndex), l.coordSys ? i[n + "Has"] = !0 : i.pop()
                    }
                }))
            }), i
        }, u.controlSeries = function (t, e, i) {
            var n = o(t, e.coordInfoList);
            return n === !0 || n && n.coordSys === i.coordinateSystem
        };
        var f = {
            lineX: a.curry(r, "x"), lineY: a.curry(r, "y"), rect: function (t, e, i) {
                var o = e.coordSys, r = o[d[t]]([i[0][0], i[1][0]]), a = o[d[t]]([i[0][1], i[1][1]]);
                return [n([r[0], a[0]]), n([r[1], a[1]])]
            }, polygon: function (t, e, i) {
                var n = e.coordSys;
                return a.map(i, n[d[t]], n)
            }
        };
        t.exports = u
    }, function (t, e, i) {
        function n(t) {
            return t[o] || (t[o] = {})
        }

        var o = "\0_ec_interaction_mutex", r = {
            take: function (t, e, i) {
                var o = n(t);
                o[e] = i
            }, release: function (t, e, i) {
                var o = n(t), r = o[e];
                r === i && (o[e] = null)
            }, isTaken: function (t, e) {
                return !!n(t)[e]
            }
        };
        i(2).registerAction({type: "takeGlobalCursor", event: "globalCursorTaken", update: "update"}, function () {
        }), t.exports = r
    }, function (t, e, i) {
        function n(t, e, i) {
            o.positionElement(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()}, e.get("padding"))
        }

        var o = i(12), r = i(9), a = i(3);
        t.exports = {
            layout: function (t, e, i) {
                var r = o.getLayoutRect(e.getBoxLayoutParams(), {
                    width: i.getWidth(),
                    height: i.getHeight()
                }, e.get("padding"));
                o.box(e.get("orient"), t, e.get("itemGap"), r.width, r.height), n(t, e, i)
            }, addBackground: function (t, e) {
                var i = r.normalizeCssArray(e.get("padding")), n = t.getBoundingRect(), o = e.getItemStyle(["color", "opacity"]);
                o.fill = e.get("backgroundColor");
                var s = new a.Rect({
                    shape: {
                        x: n.x - i[3],
                        y: n.y - i[0],
                        width: n.width + i[1] + i[3],
                        height: n.height + i[0] + i[2]
                    }, style: o, silent: !0, z2: -1
                });
                a.subPixelOptimizeRect(s), t.add(s)
            }
        }
    }, function (t, e, i) {
        var n = i(1), o = i(42), r = i(121), a = function (t, e, i, n, r) {
            o.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom"
        };
        a.prototype = {
            constructor: a, index: 0, onZero: !1, model: null, isHorizontal: function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, getGlobalExtent: function () {
                var t = this.getExtent();
                return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
            }, getLabelInterval: function () {
                var t = this._labelInterval;
                return t || (t = this._labelInterval = r(this)), t
            }, isLabelIgnored: function (t) {
                if ("category" === this.type) {
                    var e = this.getLabelInterval();
                    return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }, toLocalCoord: null, toGlobalCoord: null
        }, n.inherits(a, o), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return this._axes[t]
        }

        var o = i(1), r = function (t) {
            this._axes = {}, this._dimList = [], this.name = t || ""
        };
        r.prototype = {
            constructor: r, type: "cartesian", getAxis: function (t) {
                return this._axes[t]
            }, getAxes: function () {
                return o.map(this._dimList, n, this)
            }, getAxesByScale: function (t) {
                return t = t.toLowerCase(), o.filter(this.getAxes(), function (e) {
                    return e.scale.type === t
                })
            }, addAxis: function (t) {
                var e = t.dim;
                this._axes[e] = t, this._dimList.push(e)
            }, dataToCoord: function (t) {
                return this._dataCoordConvert(t, "dataToCoord")
            }, coordToData: function (t) {
                return this._dataCoordConvert(t, "coordToData")
            }, _dataCoordConvert: function (t, e) {
                for (var i = this._dimList, n = t instanceof Array ? [] : {}, o = 0; o < i.length; o++) {
                    var r = i[o], a = this._axes[r];
                    n[r] = a[e](t[r])
                }
                return n
            }
        }, t.exports = r
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            r.call(this, t)
        }

        var o = i(1), r = i(118);
        n.prototype = {
            constructor: n, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
            }, containPoint: function (t) {
                var e = this.getAxis("x"), i = this.getAxis("y");
                return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
            }, containData: function (t) {
                return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
            }, dataToPoints: function (t, e) {
                return t.mapArray(["x", "y"], function (t, e) {
                    return this.dataToPoint([t, e])
                }, e, this)
            }, dataToPoint: function (t, e) {
                var i = this.getAxis("x"), n = this.getAxis("y");
                return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
            }, pointToData: function (t, e) {
                var i = this.getAxis("x"), n = this.getAxis("y");
                return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
            }, getOtherAxis: function (t) {
                return this.getAxis("x" === t.dim ? "y" : "x")
            }
        }, o.inherits(n, r), t.exports = n
    }, function (t, e, i) {
        "use strict";
        i(54);
        var n = i(13);
        t.exports = n.extend({
            type: "grid",
            dependencies: ["xAxis", "yAxis"],
            layoutMode: "box",
            coordinateSystem: null,
            defaultOption: {
                show: !1,
                zlevel: 0,
                z: 0,
                left: "10%",
                top: 60,
                right: "10%",
                bottom: 60,
                containLabel: !1,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 1,
                borderColor: "#ccc"
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(22);
        t.exports = function (t) {
            var e = t.model, i = e.getModel("axisLabel"), r = i.get("interval");
            return "category" !== t.type || "auto" !== r ? "auto" === r ? 0 : r : o.getAxisLabelInterval(n.map(t.scale.getTicks(), t.dataToCoord, t), e.getFormattedLabels(), i.getModel("textStyle").getFont(), t.isHorizontal())
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t.get("stack") || "__ec_stack_" + t.seriesIndex
        }

        function o(t) {
            return t.dim + t.index
        }

        function r(t, e) {
            var i = {};
            s.each(t, function (t, e) {
                var r = t.getData(), a = t.coordinateSystem, s = a.getBaseAxis(), l = s.getExtent(), h = "category" === s.type ? s.getBandWidth() : Math.abs(l[1] - l[0]) / r.count(), c = i[o(s)] || {
                        bandWidth: h,
                        remainedWidth: h,
                        autoWidthCount: 0,
                        categoryGap: "20%",
                        gap: "30%",
                        stacks: {}
                    }, d = c.stacks;
                i[o(s)] = c;
                var f = n(t);
                d[f] || c.autoWidthCount++, d[f] = d[f] || {width: 0, maxWidth: 0};
                var p = u(t.get("barWidth"), h), g = u(t.get("barMaxWidth"), h), m = t.get("barGap"), v = t.get("barCategoryGap");
                p && !d[f].width && (p = Math.min(c.remainedWidth, p), d[f].width = p, c.remainedWidth -= p), g && (d[f].maxWidth = g), null != m && (c.gap = m), null != v && (c.categoryGap = v)
            });
            var r = {};
            return s.each(i, function (t, e) {
                r[e] = {};
                var i = t.stacks, n = t.bandWidth, o = u(t.categoryGap, n), a = u(t.gap, 1), l = t.remainedWidth, h = t.autoWidthCount, c = (l - o) / (h + (h - 1) * a);
                c = Math.max(c, 0), s.each(i, function (t, e) {
                    var i = t.maxWidth;
                    !t.width && i && i < c && (i = Math.min(i, l), l -= i, t.width = i, h--)
                }), c = (l - o) / (h + (h - 1) * a), c = Math.max(c, 0);
                var d, f = 0;
                s.each(i, function (t, e) {
                    t.width || (t.width = c), d = t, f += t.width * (1 + a)
                }), d && (f -= d.width * a);
                var p = -f / 2;
                s.each(i, function (t, i) {
                    r[e][i] = r[e][i] || {offset: p, width: t.width}, p += t.width * (1 + a)
                })
            }), r
        }

        function a(t, e, i) {
            var a = r(s.filter(e.getSeriesByType(t), function (t) {
                return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
            })), l = {}, u = {};
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), i = t.coordinateSystem, r = i.getBaseAxis(), s = n(t), h = a[o(r)][s], c = h.offset, d = h.width, f = i.getOtherAxis(r), p = t.get("barMinHeight") || 0, g = r.onZero ? f.toGlobalCoord(f.dataToCoord(0)) : f.getGlobalExtent()[0], m = i.dataToPoints(e, !0);
                l[s] = l[s] || [], u[s] = u[s] || [], e.setLayout({offset: c, size: d}), e.each(f.dim, function (t, i) {
                    if (!isNaN(t)) {
                        l[s][i] || (l[s][i] = {p: g, n: g}, u[s][i] = {p: g, n: g});
                        var n, o, r, a, h = t >= 0 ? "p" : "n", v = m[i], y = l[s][i][h], x = u[s][i][h];
                        f.isHorizontal() ? (n = y, o = v[1] + c, r = v[0] - x, a = d, u[s][i][h] += r, Math.abs(r) < p && (r = (r < 0 ? -1 : 1) * p), l[s][i][h] += r) : (n = v[0] + c, o = y, r = d, a = v[1] - x, u[s][i][h] += a, Math.abs(a) < p && (a = (a <= 0 ? -1 : 1) * p), l[s][i][h] += a), e.setItemLayout(i, {
                            x: n,
                            y: o,
                            width: r,
                            height: a
                        })
                    }
                }, !0)
            }, this)
        }

        var s = i(1), l = i(4), u = l.parsePercent;
        t.exports = a
    }, function (t, e, i) {
        var n = i(3), o = i(1), r = Math.PI;
        t.exports = function (t, e) {
            e = e || {}, o.defaults(e, {
                text: "loading",
                color: "#c21f3a",
                textColor: "#000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
            var i = new n.Rect({
                style: {fill: e.maskColor},
                zlevel: e.zlevel,
                z: 1e4
            }), a = new n.Arc({
                shape: {startAngle: -r / 2, endAngle: -r / 2 + .1, r: 10},
                style: {stroke: e.color, lineCap: "round", lineWidth: 5},
                zlevel: e.zlevel,
                z: 10001
            }), s = new n.Rect({
                style: {
                    fill: "none",
                    text: e.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: e.textColor
                }, zlevel: e.zlevel, z: 10001
            });
            a.animateShape(!0).when(1e3, {endAngle: 3 * r / 2}).start("circularInOut"), a.animateShape(!0).when(1e3, {startAngle: 3 * r / 2}).delay(300).start("circularInOut");
            var l = new n.Group;
            return l.add(a), l.add(s), l.add(i), l.resize = function () {
                var e = t.getWidth() / 2, n = t.getHeight() / 2;
                a.setShape({cx: e, cy: n});
                var o = a.shape.r;
                s.setShape({x: e - o, y: n - o, width: 2 * o, height: 2 * o}), i.setShape({
                    x: 0,
                    y: 0,
                    width: t.getWidth(),
                    height: t.getHeight()
                })
            }, l.resize(), l
        }
    }, function (t, e, i) {
        function n(t, e) {
            h.each(e, function (e, i) {
                x.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? h.merge(t[i], e, !1) : h.clone(e) : null == t[i] && (t[i] = e))
            })
        }

        function o(t) {
            t = t, this.option = {}, this.option[b] = 1, this._componentsMap = {}, this._seriesIndices = null, n(t, this._theme.option), h.merge(t, _, !1), this.mergeOption(t)
        }

        function r(t, e) {
            h.isArray(e) || (e = e ? [e] : []);
            var i = {};
            return f(e, function (e) {
                i[e] = (t[e] || []).slice()
            }), i
        }

        function a(t, e, i) {
            var n = e.type ? e.type : i ? i.subType : x.determineSubType(t, e);
            return n
        }

        function s(t) {
            return g(t, function (t) {
                    return t.componentIndex
                }) || []
        }

        function l(t, e) {
            return e.hasOwnProperty("subType") ? p(t, function (t) {
                return t.subType === e.subType
            }) : t
        }

        function u(t) {
        }

        var h = i(1), c = i(6), d = i(10), f = h.each, p = h.filter, g = h.map, m = h.isArray, v = h.indexOf, y = h.isObject, x = i(13), _ = i(126), b = "\0_ec_inner", w = d.extend({
            constructor: w, init: function (t, e, i, n) {
                i = i || {}, this.option = null, this._theme = new d(i), this._optionManager = n
            }, setOption: function (t, e) {
                h.assert(!(b in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
            }, resetOption: function (t) {
                var e = !1, i = this._optionManager;
                if (!t || "recreate" === t) {
                    var n = i.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : o.call(this, n), e = !0
                }
                if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var r = i.getTimelineOption(this);
                    r && (this.mergeOption(r), e = !0)
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = i.getMediaOption(this, this._api);
                    a.length && f(a, function (t) {
                        this.mergeOption(t, e = !0)
                    }, this)
                }
                return e
            }, mergeOption: function (t) {
                function e(e, o) {
                    var l = c.normalizeToArray(t[e]), u = c.mappingToExists(n[e], l);
                    c.makeIdAndName(u),
                        f(u, function (t, i) {
                            var n = t.option;
                            y(n) && (t.keyInfo.mainType = e, t.keyInfo.subType = a(e, n, t.exist))
                        });
                    var d = r(n, o);
                    i[e] = [], n[e] = [], f(u, function (t, o) {
                        var r = t.exist, a = t.option;
                        if (h.assert(y(a) || r, "Empty component definition"), a) {
                            var s = x.getClass(e, t.keyInfo.subType, !0);
                            if (r && r instanceof s)r.name = t.keyInfo.name, r.mergeOption(a, this), r.optionUpdated(a, !1); else {
                                var l = h.extend({dependentModels: d, componentIndex: o}, t.keyInfo);
                                r = new s(a, this, this, l), h.extend(r, l), r.init(a, this, this, l), r.optionUpdated(null, !0)
                            }
                        } else r.mergeOption({}, this), r.optionUpdated({}, !1);
                        n[e][o] = r, i[e][o] = r.option
                    }, this), "series" === e && (this._seriesIndices = s(n.series))
                }

                var i = this.option, n = this._componentsMap, o = [];
                f(t, function (t, e) {
                    null != t && (x.hasClass(e) ? o.push(e) : i[e] = null == i[e] ? h.clone(t) : h.merge(i[e], t, !0))
                }), x.topologicalTravel(o, x.getAllClassMainTypes(), e, this), this._seriesIndices = this._seriesIndices || []
            }, getOption: function () {
                var t = h.clone(this.option);
                return f(t, function (e, i) {
                    if (x.hasClass(i)) {
                        for (var e = c.normalizeToArray(e), n = e.length - 1; n >= 0; n--)c.isIdInner(e[n]) && e.splice(n, 1);
                        t[i] = e
                    }
                }), delete t[b], t
            }, getTheme: function () {
                return this._theme
            }, getComponent: function (t, e) {
                var i = this._componentsMap[t];
                if (i)return i[e || 0]
            }, queryComponents: function (t) {
                var e = t.mainType;
                if (!e)return [];
                var i = t.index, n = t.id, o = t.name, r = this._componentsMap[e];
                if (!r || !r.length)return [];
                var a;
                if (null != i)m(i) || (i = [i]), a = p(g(i, function (t) {
                    return r[t]
                }), function (t) {
                    return !!t
                }); else if (null != n) {
                    var s = m(n);
                    a = p(r, function (t) {
                        return s && v(n, t.id) >= 0 || !s && t.id === n
                    })
                } else if (null != o) {
                    var u = m(o);
                    a = p(r, function (t) {
                        return u && v(o, t.name) >= 0 || !u && t.name === o
                    })
                } else a = r;
                return l(a, t)
            }, findComponents: function (t) {
                function e(t) {
                    var e = o + "Index", i = o + "Id", n = o + "Name";
                    return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
                        mainType: o,
                        index: t[e],
                        id: t[i],
                        name: t[n]
                    } : null
                }

                function i(e) {
                    return t.filter ? p(e, t.filter) : e
                }

                var n = t.query, o = t.mainType, r = e(n), a = r ? this.queryComponents(r) : this._componentsMap[o];
                return i(l(a, t))
            }, eachComponent: function (t, e, i) {
                var n = this._componentsMap;
                if ("function" == typeof t)i = e, e = t, f(n, function (t, n) {
                    f(t, function (t, o) {
                        e.call(i, n, t, o)
                    })
                }); else if (h.isString(t))f(n[t], e, i); else if (y(t)) {
                    var o = this.findComponents(t);
                    f(o, e, i)
                }
            }, getSeriesByName: function (t) {
                var e = this._componentsMap.series;
                return p(e, function (e) {
                    return e.name === t
                })
            }, getSeriesByIndex: function (t) {
                return this._componentsMap.series[t]
            }, getSeriesByType: function (t) {
                var e = this._componentsMap.series;
                return p(e, function (e) {
                    return e.subType === t
                })
            }, getSeries: function () {
                return this._componentsMap.series.slice()
            }, eachSeries: function (t, e) {
                u(this), f(this._seriesIndices, function (i) {
                    var n = this._componentsMap.series[i];
                    t.call(e, n, i)
                }, this)
            }, eachRawSeries: function (t, e) {
                f(this._componentsMap.series, t, e)
            }, eachSeriesByType: function (t, e, i) {
                u(this), f(this._seriesIndices, function (n) {
                    var o = this._componentsMap.series[n];
                    o.subType === t && e.call(i, o, n)
                }, this)
            }, eachRawSeriesByType: function (t, e, i) {
                return f(this.getSeriesByType(t), e, i)
            }, isSeriesFiltered: function (t) {
                return u(this), h.indexOf(this._seriesIndices, t.componentIndex) < 0
            }, filterSeries: function (t, e) {
                u(this);
                var i = p(this._componentsMap.series, t, e);
                this._seriesIndices = s(i)
            }, restoreData: function () {
                var t = this._componentsMap;
                this._seriesIndices = s(t.series);
                var e = [];
                f(t, function (t, i) {
                    e.push(i)
                }), x.topologicalTravel(e, x.getAllClassMainTypes(), function (e, i) {
                    f(t[e], function (t) {
                        t.restoreData()
                    })
                })
            }
        });
        h.mixin(w, i(57)), t.exports = w
    }, function (t, e, i) {
        function n(t) {
            this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
        }

        function o(t, e, i) {
            var n, o, r = [], a = [], s = t.timeline;
            if (t.baseOption && (o = t.baseOption), (s || t.options) && (o = o || {}, r = (t.options || []).slice()), t.media) {
                o = o || {};
                var l = t.media;
                d(l, function (t) {
                    t && t.option && (t.query ? a.push(t) : n || (n = t))
                })
            }
            return o || (o = t), o.timeline || (o.timeline = s), d([o].concat(r).concat(u.map(a, function (t) {
                return t.option
            })), function (t) {
                d(e, function (e) {
                    e(t, i)
                })
            }), {baseOption: o, timelineOptions: r, mediaDefault: n, mediaList: a}
        }

        function r(t, e, i) {
            var n = {width: e, height: i, aspectratio: e / i}, o = !0;
            return u.each(t, function (t, e) {
                var i = e.match(m);
                if (i && i[1] && i[2]) {
                    var r = i[1], s = i[2].toLowerCase();
                    a(n[s], t, r) || (o = !1)
                }
            }), o
        }

        function a(t, e, i) {
            return "min" === i ? t >= e : "max" === i ? t <= e : t === e
        }

        function s(t, e) {
            return t.join(",") === e.join(",")
        }

        function l(t, e) {
            e = e || {}, d(e, function (e, i) {
                if (null != e) {
                    var n = t[i];
                    if (c.hasClass(i)) {
                        e = h.normalizeToArray(e), n = h.normalizeToArray(n);
                        var o = h.mappingToExists(n, e);
                        t[i] = p(o, function (t) {
                            return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                        })
                    } else t[i] = g(n, e, !0)
                }
            })
        }

        var u = i(1), h = i(6), c = i(13), d = u.each, f = u.clone, p = u.map, g = u.merge, m = /^(min|max)?(.+)$/;
        n.prototype = {
            constructor: n, setOption: function (t, e) {
                t = f(t, !0);
                var i = this._optionBackup, n = o.call(this, t, e, !i);
                this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
            }, mountOption: function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(t ? e.baseOption : this._newBaseOption)
            }, getTimelineOption: function (t) {
                var e, i = this._timelineOptions;
                if (i.length) {
                    var n = t.getComponent("timeline");
                    n && (e = f(i[n.getCurrentIndex()], !0))
                }
                return e
            }, getMediaOption: function (t) {
                var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, o = this._mediaDefault, a = [], l = [];
                if (!n.length && !o)return l;
                for (var u = 0, h = n.length; u < h; u++)r(n[u].query, e, i) && a.push(u);
                return !a.length && o && (a = [-1]), a.length && !s(a, this._currentMediaIndices) && (l = p(a, function (t) {
                    return f(t === -1 ? o.option : n[t].option)
                })), this._currentMediaIndices = a, l
            }
        }, t.exports = n
    }, function (t, e) {
        var i = "";
        "undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
            // color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            color: ["#1F1CC2", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],

            textStyle: {
                fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: !0,
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3
        }
    }, function (t, e, i) {
        t.exports = {getAreaStyle: i(30)([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])}
    }, function (t, e) {
        t.exports = {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }
    }, function (t, e, i) {
        var n = i(30)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]);
        t.exports = {
            getItemStyle: function (t) {
                var e = n.call(this, t), i = this.getBorderLineDash();
                return i && (e.lineDash = i), e
            }, getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }
    }, function (t, e, i) {
        var n = i(30)([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        t.exports = {
            getLineStyle: function (t) {
                var e = n.call(this, t), i = this.getLineDash(e.lineWidth);
                return i && (e.lineDash = i), e
            }, getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [i, i]
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.getShallow(e)
        }

        var o = i(16);
        t.exports = {
            getTextColor: function () {
                var t = this.ecModel;
                return this.getShallow("color") || t && t.get("textStyle.color")
            }, getFont: function () {
                var t = this.ecModel, e = t && t.getModel("textStyle");
                return [this.getShallow("fontStyle") || n(e, "fontStyle"), this.getShallow("fontWeight") || n(e, "fontWeight"), (this.getShallow("fontSize") || n(e, "fontSize") || 12) + "px", this.getShallow("fontFamily") || n(e, "fontFamily") || "sans-serif"].join(" ")
            }, getTextRect: function (t) {
                return o.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("baseline"))
            }, truncateText: function (t, e, i, n) {
                return o.truncateText(t, e, this.getFont(), i, n)
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            e = e.split(",");
            for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
            return i
        }

        function o(t, e, i, n) {
            e = e.split(",");
            for (var o, r = t, a = 0; a < e.length - 1; a++)o = e[a], null == r[o] && (r[o] = {}), r = r[o];
            (n || null == r[e[a]]) && (r[e[a]] = i)
        }

        function r(t) {
            c(l, function (e) {
                e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
            })
        }

        var a = i(1), s = i(133), l = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], u = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], h = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"], c = a.each;
        t.exports = function (t) {
            c(t.series, function (t) {
                if (a.isObject(t)) {
                    var e = t.type;
                    if (s(t), "pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var i = n(t, "pointer.color");
                        null != i && o(t, "itemStyle.normal.color", i)
                    }
                    for (var l = 0; l < h.length; l++)if (h[l] === t.type) {
                        r(t);
                        break
                    }
                }
            }), t.dataRange && (t.visualMap = t.dataRange), c(u, function (e) {
                var i = t[e];
                i && (a.isArray(i) || (i = [i]), c(i, function (t) {
                    r(t)
                }))
            })
        }
    }, function (t, e, i) {
        function n(t) {
            var e = t && t.itemStyle;
            e && o.each(r, function (i) {
                var n = e.normal, r = e.emphasis;
                n && n[i] && (t[i] = t[i] || {}, t[i].normal ? o.merge(t[i].normal, n[i]) : t[i].normal = n[i], n[i] = null), r && r[i] && (t[i] = t[i] || {}, t[i].emphasis ? o.merge(t[i].emphasis, r[i]) : t[i].emphasis = r[i], r[i] = null)
            })
        }

        var o = i(1), r = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
        t.exports = function (t) {
            if (t) {
                n(t), n(t.markPoint), n(t.markLine);
                var e = t.data;
                if (e) {
                    for (var i = 0; i < e.length; i++)n(e[i]);
                    var r = t.markPoint;
                    if (r && r.data)for (var a = r.data, i = 0; i < a.length; i++)n(a[i]);
                    var s = t.markLine;
                    if (s && s.data)for (var l = s.data, i = 0; i < l.length; i++)o.isArray(l[i]) ? (n(l[i][0]), n(l[i][1])) : n(l[i])
                }
            }
        }
    }, function (t, e) {
        var i = {
            average: function (t) {
                for (var e = 0, i = 0, n = 0; n < t.length; n++)isNaN(t[n]) || (e += t[n], i++);
                return 0 === i ? NaN : e / i
            }, sum: function (t) {
                for (var e = 0, i = 0; i < t.length; i++)e += t[i] || 0;
                return e
            }, max: function (t) {
                for (var e = -(1 / 0), i = 0; i < t.length; i++)t[i] > e && (e = t[i]);
                return e
            }, min: function (t) {
                for (var e = 1 / 0, i = 0; i < t.length; i++)t[i] < e && (e = t[i]);
                return e
            }, nearest: function (t) {
                return t[0]
            }
        }, n = function (t, e) {
            return Math.round(t.length / 2)
        };
        t.exports = function (t, e, o) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), o = t.get("sampling"), r = t.coordinateSystem;
                if ("cartesian2d" === r.type && o) {
                    var a = r.getBaseAxis(), s = r.getOtherAxis(a), l = a.getExtent(), u = l[1] - l[0], h = Math.round(e.count() / u);
                    if (h > 1) {
                        var c;
                        "string" == typeof o ? c = i[o] : "function" == typeof o && (c = o), c && (e = e.downSample(s.dim, 1 / h, c, n), t.setData(e))
                    }
                }
            }, this)
        }
    }, function (t, e, i) {
        function n(t, e) {
            return c(t, h(e))
        }

        var o = i(1), r = i(31), a = i(4), s = i(38), l = r.prototype, u = s.prototype, h = a.getPrecisionSafe, c = a.round, d = Math.floor, f = Math.ceil, p = Math.pow, g = Math.log, m = r.extend({
            type: "log",
            base: 10,
            $constructor: function () {
                r.apply(this, arguments), this._originalScale = new s
            },
            getTicks: function () {
                var t = this._originalScale, e = this._extent, i = t.getExtent();
                return o.map(u.getTicks.call(this), function (o) {
                    var r = a.round(p(this.base, o));
                    return r = o === e[0] && t.__fixMin ? n(r, i[0]) : r, r = o === e[1] && t.__fixMax ? n(r, i[1]) : r
                }, this)
            },
            getLabel: u.getLabel,
            scale: function (t) {
                return t = l.scale.call(this, t), p(this.base, t)
            },
            setExtent: function (t, e) {
                var i = this.base;
                t = g(t) / g(i), e = g(e) / g(i), u.setExtent.call(this, t, e)
            },
            getExtent: function () {
                var t = this.base, e = l.getExtent.call(this);
                e[0] = p(t, e[0]), e[1] = p(t, e[1]);
                var i = this._originalScale, o = i.getExtent();
                return i.__fixMin && (e[0] = n(e[0], o[0])), i.__fixMax && (e[1] = n(e[1], o[1])), e
            },
            unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = g(t[0]) / g(e), t[1] = g(t[1]) / g(e), l.unionExtent.call(this, t)
            },
            niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0];
                if (!(i === 1 / 0 || i <= 0)) {
                    var n = a.quantity(i), o = t / i * n;
                    for (o <= .5 && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0;)n *= 10;
                    var r = [a.round(f(e[0] / n) * n), a.round(d(e[1] / n) * n)];
                    this._interval = n, this._niceExtent = r
                }
            },
            niceExtent: function (t, e, i) {
                u.niceExtent.call(this, t, e, i);
                var n = this._originalScale;
                n.__fixMin = e, n.__fixMax = i
            }
        });
        o.each(["contain", "normalize"], function (t) {
            m.prototype[t] = function (e) {
                return e = g(e) / g(this.base), l[t].call(this, e)
            }
        }), m.create = function () {
            return new m
        }, t.exports = m
    }, function (t, e, i) {
        var n = i(1), o = i(31), r = o.prototype, a = o.extend({
            type: "ordinal", init: function (t, e) {
                this._data = t, this._extent = e || [0, t.length - 1]
            }, parse: function (t) {
                return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
            }, contain: function (t) {
                return t = this.parse(t), r.contain.call(this, t) && null != this._data[t]
            }, normalize: function (t) {
                return r.normalize.call(this, this.parse(t))
            }, scale: function (t) {
                return Math.round(r.scale.call(this, t))
            }, getTicks: function () {
                for (var t = [], e = this._extent, i = e[0]; i <= e[1];)t.push(i), i++;
                return t
            }, getLabel: function (t) {
                return this._data[t]
            }, count: function () {
                return this._extent[1] - this._extent[0] + 1
            }, niceTicks: n.noop, niceExtent: n.noop
        });
        a.create = function () {
            return new a
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(1), o = i(4), r = i(9), a = i(38), s = a.prototype, l = Math.ceil, u = Math.floor, h = 1e3, c = 60 * h, d = 60 * c, f = 24 * d, p = function (t, e, i, n) {
            for (; i < n;) {
                var o = i + n >>> 1;
                t[o][2] < e ? i = o + 1 : n = o
            }
            return i
        }, g = a.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, i = new Date(t);
                return r.formatTime(e[0], i)
            }, niceExtent: function (t, e, i) {
                var n = this._extent;
                if (n[0] === n[1] && (n[0] -= f, n[1] += f), n[1] === -(1 / 0) && n[0] === 1 / 0) {
                    var r = new Date;
                    n[1] = new Date(r.getFullYear(), r.getMonth(), r.getDate()), n[0] = n[1] - f
                }
                this.niceTicks(t);
                var a = this._interval;
                e || (n[0] = o.round(u(n[0] / a) * a)), i || (n[1] = o.round(l(n[1] / a) * a))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0], n = i / t, r = m.length, a = p(m, n, 0, r), s = m[Math.min(a, r - 1)], h = s[2];
                if ("year" === s[0]) {
                    var c = i / h, d = o.nice(c / t, !0);
                    h *= d
                }
                var f = [l(e[0] / h) * h, u(e[1] / h) * h];
                this._stepLvl = s, this._interval = h, this._niceExtent = f
            }, parse: function (t) {
                return +o.parseDate(t)
            }
        });
        n.each(["contain", "normalize"], function (t) {
            g.prototype[t] = function (e) {
                return s[t].call(this, this.parse(e))
            }
        });
        var m = [["hh:mm:ss", 1, h], ["hh:mm:ss", 5, 5 * h], ["hh:mm:ss", 10, 10 * h], ["hh:mm:ss", 15, 15 * h], ["hh:mm:ss", 30, 30 * h], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 5, 5 * c], ["hh:mm\nMM-dd", 10, 10 * c], ["hh:mm\nMM-dd", 15, 15 * c], ["hh:mm\nMM-dd", 30, 30 * c], ["hh:mm\nMM-dd", 1, d], ["hh:mm\nMM-dd", 2, 2 * d], ["hh:mm\nMM-dd", 6, 6 * d], ["hh:mm\nMM-dd", 12, 12 * d], ["MM-dd\nyyyy", 1, f], ["week", 7, 7 * f], ["month", 1, 31 * f], ["quarter", 3, 380 * f / 4], ["half-year", 6, 380 * f / 2], ["year", 1, 380 * f]];
        g.create = function () {
            return new g
        }, t.exports = g
    }, function (t, e, i) {
        var n = i(37);
        t.exports = function (t) {
            function e(e) {
                var i = (e.visualColorAccessPath || "itemStyle.normal.color").split("."), o = e.getData(), r = e.get(i) || e.getColorFromPalette(e.get("name"));
                o.setVisual("color", r), t.isSeriesFiltered(e) || ("function" != typeof r || r instanceof n || o.each(function (t) {
                    o.setItemVisual(t, "color", r(e.getDataParams(t)))
                }), o.each(function (t) {
                    var e = o.getItemModel(t), n = e.get(i, !0);
                    null != n && o.setItemVisual(t, "color", n)
                }))
            }

            t.eachRawSeries(e)
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            return {
                type: t,
                event: i,
                target: e,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta,
                zrByTouch: i.zrByTouch
            }
        }

        function o() {
        }

        function r(t, e, i) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                for (var n = t; n;) {
                    if (n.silent || n.clipPath && !n.clipPath.contain(e, i))return !1;
                    n = n.parent
                }
                return !0
            }
            return !1
        }

        var a = i(1), s = i(167), l = i(20);
        o.prototype.dispose = function () {
        };
        var u = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], h = function (t, e, i, n) {
            l.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new o, this.proxy = i, i.handler = this, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, s.call(this), a.each(u, function (t) {
                i.on && i.on(t, this[t], this)
            }, this)
        };
        h.prototype = {
            constructor: h, mousemove: function (t) {
                var e = t.zrX, i = t.zrY, n = this.findHover(e, i, null), o = this._hovered, r = this.proxy;
                this._hovered = n, r.setCursor && r.setCursor(n ? n.cursor : "default"), o && n !== o && o.__zr && this.dispatchToElement(o, "mouseout", t), this.dispatchToElement(n, "mousemove", t), n && n !== o && this.dispatchToElement(n, "mouseover", t)
            }, mouseout: function (t) {
                this.dispatchToElement(this._hovered, "mouseout", t);
                var e, i = t.toElement || t.relatedTarget;
                do i = i && i.parentNode; while (i && 9 != i.nodeType && !(e = i === this.painterRoot));
                !e && this.trigger("globalout", {event: t})
            }, resize: function (t) {
                this._hovered = null
            }, dispatch: function (t, e) {
                var i = this[t];
                i && i.call(this, e)
            }, dispose: function () {
                this.proxy.dispose(), this.storage = this.proxy = this.painter = null
            }, setCursorStyle: function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }, dispatchToElement: function (t, e, i) {
                for (var o = "on" + e, r = n(e, t, i), a = t; a && (a[o] && (r.cancelBubble = a[o].call(a, r)), a.trigger(e, r), a = a.parent, !r.cancelBubble););
                r.cancelBubble || (this.trigger(e, r), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[o] && t[o].call(t, r), t.trigger && t.trigger(e, r)
                }))
            }, findHover: function (t, e, i) {
                for (var n = this.storage.getDisplayList(), o = n.length - 1; o >= 0; o--)if (!n[o].silent && n[o] !== i && !n[o].ignore && r(n[o], t, e))return n[o]
            }
        }, a.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            h.prototype[t] = function (e) {
                var i = this.findHover(e.zrX, e.zrY, null);
                if ("mousedown" === t)this._downel = i, this._upel = i; else if ("mosueup" === t)this._upel = i; else if ("click" === t && this._downel !== this._upel)return;
                this.dispatchToElement(i, t, e)
            }
        }), a.mixin(h, l), a.mixin(h, s), t.exports = h
    }, function (t, e, i) {
        function n() {
            return !1
        }

        function o(t, e, i, n) {
            var o = document.createElement(e), r = i.getWidth(), a = i.getHeight(), s = o.style;
            return s.position = "absolute", s.left = 0, s.top = 0, s.width = r + "px", s.height = a + "px", o.width = r * n, o.height = a * n, o.setAttribute("data-zr-dom-id", t), o
        }

        var r = i(1), a = i(32), s = i(65), l = i(64), u = function (t, e, i) {
            var s;
            i = i || a.devicePixelRatio, "string" == typeof t ? s = o(t, "canvas", e, i) : r.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
            var l = s.style;
            l && (s.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", l.padding = 0, l.margin = 0, l["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
        };
        u.prototype = {
            constructor: u, elCount: 0, __dirty: !0, initContext: function () {
                this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
            }, createBackBuffer: function () {
                var t = this.dpr;
                this.domBack = o("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
            }, resize: function (t, e) {
                var i = this.dpr, n = this.dom, o = n.style, r = this.domBack;
                o.width = t + "px", o.height = e + "px", n.width = t * i, n.height = e * i, r && (r.width = t * i, r.height = e * i, 1 != i && this.ctxBack.scale(i, i))
            }, clear: function (t) {
                var e = this.dom, i = this.ctx, n = e.width, o = e.height, r = this.clearColor, a = this.motionBlur && !t, u = this.lastFrameAlpha, h = this.dpr;
                if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / h, o / h)), i.clearRect(0, 0, n, o), r) {
                    var c;
                    r.colorStops ? (c = r.__canvasGradient || s.getGradient(i, r, {
                            x: 0,
                            y: 0,
                            width: n,
                            height: o
                        }), r.__canvasGradient = c) : r.image && (c = l.prototype.getCanvasPattern.call(r, i)), i.save(), i.fillStyle = c || r, i.fillRect(0, 0, n, o), i.restore()
                }
                if (a) {
                    var d = this.domBack;
                    i.save(), i.globalAlpha = u, i.drawImage(d, 0, 0, n, o), i.restore()
                }
            }
        }, t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return parseInt(t, 10)
        }

        function o(t) {
            return !!t && (!!t.isBuildin || "function" == typeof t.resize && "function" == typeof t.refresh)
        }

        function r(t) {
            t.__unusedCount++
        }

        function a(t) {
            1 == t.__unusedCount && t.clear()
        }

        function s(t, e, i) {
            return x.copy(t.getBoundingRect()), t.transform && x.applyTransform(t.transform), _.width = e, _.height = i, !x.intersect(_)
        }

        function l(t, e) {
            if (t == e)return !1;
            if (!t || !e || t.length !== e.length)return !0;
            for (var i = 0; i < t.length; i++)if (t[i] !== e[i])return !0
        }

        function u(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], o = n.path;
                n.setTransform(e), o.beginPath(e), n.buildPath(o, n.shape), e.clip(), n.restoreTransform(e)
            }
        }

        function h(t, e) {
            var i = document.createElement("div");
            return i.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", i
        }

        var c = i(32), d = i(1), f = i(48), p = i(8), g = i(44), m = i(140), v = i(61), y = 5, x = new p(0, 0, 0, 0), _ = new p(0, 0, 0, 0), b = function (t, e, i) {
            var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = i = d.extend({}, i || {}), this.dpr = i.devicePixelRatio || c.devicePixelRatio, this._singleCanvas = n, this.root = t;
            var o = t.style;
            o && (o["-webkit-tap-highlight-color"] = "transparent", o["-webkit-user-select"] = o["user-select"] = o["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var r = this._zlevelList = [], a = this._layers = {};
            if (this._layerConfig = {}, n) {
                var s = t.width, l = t.height;
                this._width = s, this._height = l;
                var u = new m(t, this, 1);
                u.initContext(), a[0] = u, r.push(0)
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var f = this._domRoot = h(this._width, this._height);
                t.appendChild(f)
            }
            this.pathToImage = this._createPathToImage(), this._progressiveLayers = [], this._hoverlayer, this._hoverElements = []
        };
        b.prototype = {
            constructor: b, isSingleCanvas: function () {
                return this._singleCanvas
            }, getViewportRoot: function () {
                return this._singleCanvas ? this._layers[0].dom : this._domRoot
            }, refresh: function (t) {
                var e = this.storage.getDisplayList(!0), i = this._zlevelList;
                this._paintList(e, t);
                for (var n = 0; n < i.length; n++) {
                    var o = i[n], r = this._layers[o];
                    !r.isBuildin && r.refresh && r.refresh()
                }
                return this.refreshHover(), this._progressiveLayers.length && this._startProgessive(), this
            }, addHover: function (t, e) {
                if (!t.__hoverMir) {
                    var i = new t.constructor({style: t.style, shape: t.shape});
                    i.__from = t, t.__hoverMir = i, i.setStyle(e), this._hoverElements.push(i)
                }
            }, removeHover: function (t) {
                var e = t.__hoverMir, i = this._hoverElements, n = d.indexOf(i, e);
                n >= 0 && i.splice(n, 1), t.__hoverMir = null
            }, clearHover: function (t) {
                for (var e = this._hoverElements, i = 0; i < e.length; i++) {
                    var n = e[i].__from;
                    n && (n.__hoverMir = null)
                }
                e.length = 0
            }, refreshHover: function () {
                var t = this._hoverElements, e = t.length, i = this._hoverlayer;
                if (i && i.clear(), e) {
                    g(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                    var n = {};
                    i.ctx.save();
                    for (var o = 0; o < e;) {
                        var r = t[o], a = r.__from;
                        a && a.__zr ? (o++, a.invisible || (r.transform = a.transform, r.invTransform = a.invTransform, r.__clipPaths = a.__clipPaths, this._doPaintEl(r, i, !0, n))) : (t.splice(o, 1), a.__hoverMir = null, e--)
                    }
                    i.ctx.restore()
                }
            }, _startProgessive: function () {
                function t() {
                    i === e._progressiveToken && e.storage && (e._doPaintList(e.storage.getDisplayList()), e._furtherProgressive ? (e._progress++, v(t)) : e._progressiveToken = -1)
                }

                var e = this;
                if (e._furtherProgressive) {
                    var i = e._progressiveToken = +new Date;
                    e._progress++, v(t)
                }
            }, _clearProgressive: function () {
                this._progressiveToken = -1, this._progress = 0, d.each(this._progressiveLayers, function (t) {
                    t.__dirty && t.clear()
                })
            }, _paintList: function (t, e) {
                null == e && (e = !1), this._updateLayerStatus(t), this._clearProgressive(), this.eachBuildinLayer(r), this._doPaintList(t, e), this.eachBuildinLayer(a)
            }, _doPaintList: function (t, e) {
                function i(t) {
                    var e = r.dpr || 1;
                    r.save(), r.globalAlpha = 1, r.shadowBlur = 0, n.__dirty = !0, r.setTransform(1, 0, 0, 1, 0, 0), r.drawImage(t.dom, 0, 0, h * e, c * e), r.restore()
                }

                for (var n, o, r, a, s, l, u = 0, h = this._width, c = this._height, p = this._progress, g = 0, m = t.length; g < m; g++) {
                    var v = t[g], x = this._singleCanvas ? 0 : v.zlevel, _ = v.__frame;
                    if (_ < 0 && s && (i(s), s = null), o !== x && (r && r.restore(), a = {}, o = x, n = this.getLayer(o), n.isBuildin || f("ZLevel " + o + " has been used by unkown layer " + n.id), r = n.ctx, r.save(), n.__unusedCount = 0, (n.__dirty || e) && n.clear()), n.__dirty || e) {
                        if (_ >= 0) {
                            if (!s) {
                                if (s = this._progressiveLayers[Math.min(u++, y - 1)], s.ctx.save(), s.renderScope = {}, s && s.__progress > s.__maxProgress) {
                                    g = s.__nextIdxNotProg - 1;
                                    continue
                                }
                                l = s.__progress, s.__dirty || (p = l), s.__progress = p + 1
                            }
                            _ === p && this._doPaintEl(v, s, !0, s.renderScope)
                        } else this._doPaintEl(v, n, e, a);
                        v.__dirty = !1
                    }
                }
                s && i(s), r && r.restore(), this._furtherProgressive = !1, d.each(this._progressiveLayers, function (t) {
                    t.__maxProgress >= t.__progress && (this._furtherProgressive = !0)
                }, this)
            }, _doPaintEl: function (t, e, i, n) {
                var o = e.ctx, r = t.transform;
                if ((e.__dirty || i) && !t.invisible && 0 !== t.style.opacity && (!r || r[0] || r[3]) && (!t.culling || !s(t, this._width, this._height))) {
                    var a = t.__clipPaths;
                    (n.prevClipLayer !== e || l(a, n.prevElClipPaths)) && (n.prevElClipPaths && (n.prevClipLayer.ctx.restore(), n.prevClipLayer = n.prevElClipPaths = null, n.prevEl = null), a && (o.save(), u(a, o), n.prevClipLayer = e, n.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(o), t.brush(o, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(o)
                }
            }, getLayer: function (t) {
                if (this._singleCanvas)return this._layers[0];
                var e = this._layers[t];
                return e || (e = new m("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && d.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
            }, insertLayer: function (t, e) {
                var i = this._layers, n = this._zlevelList, r = n.length, a = null, s = -1, l = this._domRoot;
                if (i[t])return void f("ZLevel " + t + " has been used already");
                if (!o(e))return void f("Layer of zlevel " + t + " is not valid");
                if (r > 0 && t > n[0]) {
                    for (s = 0; s < r - 1 && !(n[s] < t && n[s + 1] > t); s++);
                    a = i[n[s]]
                }
                if (n.splice(s + 1, 0, t), a) {
                    var u = a.dom;
                    u.nextSibling ? l.insertBefore(e.dom, u.nextSibling) : l.appendChild(e.dom)
                } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
                i[t] = e
            }, eachLayer: function (t, e) {
                var i, n, o = this._zlevelList;
                for (n = 0; n < o.length; n++)i = o[n], t.call(e, this._layers[i], i)
            }, eachBuildinLayer: function (t, e) {
                var i, n, o, r = this._zlevelList;
                for (o = 0; o < r.length; o++)n = r[o], i = this._layers[n], i.isBuildin && t.call(e, i, n)
            }, eachOtherLayer: function (t, e) {
                var i, n, o, r = this._zlevelList;
                for (o = 0; o < r.length; o++)n = r[o], i = this._layers[n], i.isBuildin || t.call(e, i, n)
            }, getLayers: function () {
                return this._layers
            }, _updateLayerStatus: function (t) {
                var e = this._layers, i = this._progressiveLayers, n = {}, o = {};
                this.eachBuildinLayer(function (t, e) {
                    n[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                }), d.each(i, function (t, e) {
                    o[e] = t.elCount, t.elCount = 0, t.__dirty = !1
                });
                for (var r, a, s = 0, l = 0, u = 0, h = t.length; u < h; u++) {
                    var c = t[u], f = this._singleCanvas ? 0 : c.zlevel, p = e[f], g = c.progressive;
                    if (p && (p.elCount++, p.__dirty = p.__dirty || c.__dirty), g >= 0) {
                        a !== g && (a = g, l++);
                        var v = c.__frame = l - 1;
                        if (!r) {
                            var x = Math.min(s, y - 1);
                            r = i[x], r || (r = i[x] = new m("progressive", this, this.dpr), r.initContext()), r.__maxProgress = 0
                        }
                        r.__dirty = r.__dirty || c.__dirty, r.elCount++, r.__maxProgress = Math.max(r.__maxProgress, v), r.__maxProgress >= r.__progress && (p.__dirty = !0)
                    } else c.__frame = -1, r && (r.__nextIdxNotProg = u, s++, r = null)
                }
                r && (s++, r.__nextIdxNotProg = u), this.eachBuildinLayer(function (t, e) {
                    n[e] !== t.elCount && (t.__dirty = !0)
                }), i.length = Math.min(s, y), d.each(i, function (t, e) {
                    o[e] !== t.elCount && (c.__dirty = !0), t.__dirty && (t.__progress = 0)
                })
            }, clear: function () {
                return this.eachBuildinLayer(this._clearLayer), this
            }, _clearLayer: function (t) {
                t.clear()
            }, configLayer: function (t, e) {
                if (e) {
                    var i = this._layerConfig;
                    i[t] ? d.merge(i[t], e, !0) : i[t] = e;
                    var n = this._layers[t];
                    n && d.merge(n, i[t], !0)
                }
            }, delLayer: function (t) {
                var e = this._layers, i = this._zlevelList, n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(d.indexOf(i, t), 1))
            }, resize: function (t, e) {
                var i = this._domRoot;
                i.style.display = "none";
                var n = this._opts;
                if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), e = this._getSize(1), i.style.display = "", this._width != t || e != this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var o in this._layers)this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
                    d.each(this._progressiveLayers, function (i) {
                        i.resize(t, e)
                    }), this.refresh(!0)
                }
                return this._width = t, this._height = e, this
            }, clearLayer: function (t) {
                var e = this._layers[t];
                e && e.clear()
            }, dispose: function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            }, getRenderedCanvas: function (t) {
                if (t = t || {}, this._singleCanvas)return this._layers[0].dom;
                var e = new m("image", this, t.pixelRatio || this.dpr);
                e.initContext(), e.clearColor = t.backgroundColor, e.clear();
                for (var i = this.storage.getDisplayList(!0), n = {}, o = 0; o < i.length; o++) {
                    var r = i[o];
                    this._doPaintEl(r, e, !0, n)
                }
                return e.dom
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getSize: function (t) {
                var e = this._opts, i = ["width", "height"][t], o = ["clientWidth", "clientHeight"][t], r = ["paddingLeft", "paddingTop"][t], a = ["paddingRight", "paddingBottom"][t];
                if (null != e[i] && "auto" !== e[i])return parseFloat(e[i]);
                var s = this.root, l = document.defaultView.getComputedStyle(s);
                return (s[o] || n(l[i]) || n(s.style[i])) - (n(l[r]) || 0) - (n(l[a]) || 0) | 0
            }, _pathToImage: function (t, e, n, o, r) {
                var a = document.createElement("canvas"), s = a.getContext("2d");
                a.width = n * r, a.height = o * r, s.clearRect(0, 0, n * r, o * r);
                var l = {position: e.position, rotation: e.rotation, scale: e.scale};
                e.position = [0, 0, 0], e.rotation = 0, e.scale = [1, 1], e && e.brush(s);
                var u = i(49), h = new u({id: t, style: {x: 0, y: 0, image: a}});
                return null != l.position && (h.position = e.position = l.position), null != l.rotation && (h.rotation = e.rotation = l.rotation), null != l.scale && (h.scale = e.scale = l.scale), h
            }, _createPathToImage: function () {
                var t = this;
                return function (e, i, n, o) {
                    return t._pathToImage(e, i, n, o, t.dpr)
                }
            }
        }, t.exports = b
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }

        var o = i(1), r = i(11), a = i(33), s = i(44), l = function () {
            this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
        };
        l.prototype = {
            constructor: l, traverse: function (t, e) {
                for (var i = 0; i < this._roots.length; i++)this._roots[i].traverse(t, e)
            }, getDisplayList: function (t, e) {
                return e = e || !1, t && this.updateDisplayList(e), this._displayList
            }, updateDisplayList: function (t) {
                this._displayListLen = 0;
                for (var e = this._roots, i = this._displayList, o = 0, a = e.length; o < a; o++)this._updateAndAddDisplayable(e[o], null, t);
                i.length = this._displayListLen, r.canvasSupported && s(i, n)
            }, _updateAndAddDisplayable: function (t, e, i) {
                if (!t.ignore || i) {
                    t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                    var n = t.clipPath;
                    if (n && (n.parent = t, n.updateTransform(), e ? (e = e.slice(), e.push(n)) : e = [n]), t.isGroup) {
                        for (var o = t._children, r = 0; r < o.length; r++) {
                            var a = o[r];
                            t.__dirty && (a.__dirty = !0), this._updateAndAddDisplayable(a, e, i)
                        }
                        t.__dirty = !1
                    } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                }
            }, addRoot: function (t) {
                this._elements[t.id] || (t instanceof a && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
            }, delRoot: function (t) {
                if (null == t) {
                    for (var e = 0; e < this._roots.length; e++) {
                        var i = this._roots[e];
                        i instanceof a && i.delChildrenFromStorage(this)
                    }
                    return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                }
                if (t instanceof Array)for (var e = 0, n = t.length; e < n; e++)this.delRoot(t[e]); else {
                    var r;
                    r = "string" == typeof t ? this._elements[t] : t;
                    var s = o.indexOf(this._roots, r);
                    s >= 0 && (this.delFromMap(r.id), this._roots.splice(s, 1), r instanceof a && r.delChildrenFromStorage(this))
                }
            }, addToMap: function (t) {
                return t instanceof a && (t.__storage = this), t.dirty(!1), this._elements[t.id] = t, this
            }, get: function (t) {
                return this._elements[t]
            }, delFromMap: function (t) {
                var e = this._elements, i = e[t];
                return i && (delete e[t], i instanceof a && (i.__storage = null)), this
            }, dispose: function () {
                this._elements = this._renderList = this._roots = null
            }, displayableSortFunc: n
        }, t.exports = l
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(24).Dispatcher, r = i(61), a = i(60), s = function (t) {
            t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
                }, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, o.call(this)
        };
        s.prototype = {
            constructor: s, addClip: function (t) {
                this._clips.push(t)
            }, addAnimator: function (t) {
                t.animation = this;
                for (var e = t.getClips(), i = 0; i < e.length; i++)this.addClip(e[i])
            }, removeClip: function (t) {
                var e = n.indexOf(this._clips, t);
                e >= 0 && this._clips.splice(e, 1)
            }, removeAnimator: function (t) {
                for (var e = t.getClips(), i = 0; i < e.length; i++)this.removeClip(e[i]);
                t.animation = null
            }, _update: function () {
                for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, o = [], r = [], a = 0; a < n; a++) {
                    var s = i[a], l = s.step(t);
                    l && (o.push(l), r.push(s))
                }
                for (var a = 0; a < n;)i[a]._needsRemove ? (i[a] = i[n - 1], i.pop(), n--) : a++;
                n = o.length;
                for (var a = 0; a < n; a++)r[a].fire(o[a]);
                this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
            }, _startLoop: function () {
                function t() {
                    e._running && (r(t), !e._paused && e._update())
                }

                var e = this;
                this._running = !0, r(t)
            }, start: function () {
                this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
            }, stop: function () {
                this._running = !1
            }, pause: function () {
                this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
            }, resume: function () {
                this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
            }, clear: function () {
                this._clips = []
            }, animate: function (t, e) {
                e = e || {};
                var i = new a(t, e.loop, e.getter, e.setter);
                return i
            }
        }, n.mixin(s, o), t.exports = s
    }, function (t, e, i) {
        function n(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
        }

        var o = i(145);
        n.prototype = {
            constructor: n, step: function (t) {
                this._initialized || (this._startTime = t + this._delay, this._initialized = !0);
                var e = (t - this._startTime) / this._life;
                if (!(e < 0)) {
                    e = Math.min(e, 1);
                    var i = this.easing, n = "string" == typeof i ? o[i] : i, r = "function" == typeof n ? n(e) : e;
                    return this.fire("frame", r), 1 == e ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }, restart: function (t) {
                var e = (t - this._startTime) % this._life;
                this._startTime = t - e + this.gap, this._needsRemove = !1
            }, fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            }
        }, t.exports = n
    }, function (t, e) {
        var i = {
            linear: function (t) {
                return t
            }, quadraticIn: function (t) {
                return t * t
            }, quadraticOut: function (t) {
                return t * (2 - t)
            }, quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, cubicIn: function (t) {
                return t * t * t
            }, cubicOut: function (t) {
                return --t * t * t + 1
            }, cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, quarticIn: function (t) {
                return t * t * t * t
            }, quarticOut: function (t) {
                return 1 - --t * t * t * t
            }, quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, quinticIn: function (t) {
                return t * t * t * t * t
            }, quinticOut: function (t) {
                return --t * t * t * t * t + 1
            }, quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            }, circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            }, circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, elasticIn: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
            }, elasticOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            }, elasticInOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            }, backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, bounceIn: function (t) {
                return 1 - i.bounceOut(1 - t)
            }, bounceOut: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bounceInOut: function (t) {
                return t < .5 ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var n = i(62).normalizeRadian, o = 2 * Math.PI;
        t.exports = {
            containStroke: function (t, e, i, r, a, s, l, u, h) {
                if (0 === l)return !1;
                var c = l;
                u -= t, h -= e;
                var d = Math.sqrt(u * u + h * h);
                if (d - c > i || d + c < i)return !1;
                if (Math.abs(r - a) % o < 1e-4)return !0;
                if (s) {
                    var f = r;
                    r = n(a), a = n(f)
                } else r = n(r), a = n(a);
                r > a && (a += o);
                var p = Math.atan2(h, u);
                return p < 0 && (p += o), p >= r && p <= a || p + o >= r && p + o <= a
            }
        }
    }, function (t, e, i) {
        var n = i(17);
        t.exports = {
            containStroke: function (t, e, i, o, r, a, s, l, u, h, c) {
                if (0 === u)return !1;
                var d = u;
                if (c > e + d && c > o + d && c > a + d && c > l + d || c < e - d && c < o - d && c < a - d && c < l - d || h > t + d && h > i + d && h > r + d && h > s + d || h < t - d && h < i - d && h < r - d && h < s - d)return !1;
                var f = n.cubicProjectPoint(t, e, i, o, r, a, s, l, h, c, null);
                return f <= d / 2
            }
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return Math.abs(t - e) < x
        }

        function o() {
            var t = b[0];
            b[0] = b[1], b[1] = t
        }

        function r(t, e, i, n, r, a, s, l, u, h) {
            if (h > e && h > n && h > a && h > l || h < e && h < n && h < a && h < l)return 0;
            var c = g.cubicRootAt(e, n, a, l, h, _);
            if (0 === c)return 0;
            for (var d, f, p = 0, m = -1, v = 0; v < c; v++) {
                var y = _[v], x = 0 === y || 1 === y ? .5 : 1, w = g.cubicAt(t, i, r, s, y);
                w < u || (m < 0 && (m = g.cubicExtrema(e, n, a, l, b), b[1] < b[0] && m > 1 && o(), d = g.cubicAt(e, n, a, l, b[0]), m > 1 && (f = g.cubicAt(e, n, a, l, b[1]))), p += 2 == m ? y < b[0] ? d < e ? x : -x : y < b[1] ? f < d ? x : -x : l < f ? x : -x : y < b[0] ? d < e ? x : -x : l < d ? x : -x)
            }
            return p
        }

        function a(t, e, i, n, o, r, a, s) {
            if (s > e && s > n && s > r || s < e && s < n && s < r)return 0;
            var l = g.quadraticRootAt(e, n, r, s, _);
            if (0 === l)return 0;
            var u = g.quadraticExtremum(e, n, r);
            if (u >= 0 && u <= 1) {
                for (var h = 0, c = g.quadraticAt(e, n, r, u), d = 0; d < l; d++) {
                    var f = 0 === _[d] || 1 === _[d] ? .5 : 1, p = g.quadraticAt(t, i, o, _[d]);
                    p < a || (h += _[d] < u ? c < e ? f : -f : r < c ? f : -f)
                }
                return h
            }
            var f = 0 === _[0] || 1 === _[0] ? .5 : 1, p = g.quadraticAt(t, i, o, _[0]);
            return p < a ? 0 : r < e ? f : -f
        }

        function s(t, e, i, n, o, r, a, s) {
            if (s -= e, s > i || s < -i)return 0;
            var l = Math.sqrt(i * i - s * s);
            _[0] = -l, _[1] = l;
            var u = Math.abs(n - o);
            if (u < 1e-4)return 0;
            if (u % y < 1e-4) {
                n = 0, o = y;
                var h = r ? 1 : -1;
                return a >= _[0] + t && a <= _[1] + t ? h : 0
            }
            if (r) {
                var l = n;
                n = p(o), o = p(l)
            } else n = p(n), o = p(o);
            n > o && (o += y);
            for (var c = 0, d = 0; d < 2; d++) {
                var f = _[d];
                if (f + t > a) {
                    var g = Math.atan2(s, f), h = r ? 1 : -1;
                    g < 0 && (g = y + g), (g >= n && g <= o || g + y >= n && g + y <= o) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), c += h)
                }
            }
            return c
        }

        function l(t, e, i, o, l) {
            for (var h = 0, p = 0, g = 0, y = 0, x = 0, _ = 0; _ < t.length;) {
                var b = t[_++];
                switch (b === u.M && _ > 1 && (i || (h += m(p, g, y, x, o, l))), 1 == _ && (p = t[_], g = t[_ + 1], y = p, x = g), b) {
                    case u.M:
                        y = t[_++], x = t[_++], p = y, g = x;
                        break;
                    case u.L:
                        if (i) {
                            if (v(p, g, t[_], t[_ + 1], e, o, l))return !0
                        } else h += m(p, g, t[_], t[_ + 1], o, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case u.C:
                        if (i) {
                            if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, o, l))return !0
                        } else h += r(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], o, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case u.Q:
                        if (i) {
                            if (d.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, o, l))return !0
                        } else h += a(p, g, t[_++], t[_++], t[_], t[_ + 1], o, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case u.A:
                        var w = t[_++], S = t[_++], M = t[_++], T = t[_++], I = t[_++], A = t[_++], L = (t[_++], 1 - t[_++]), C = Math.cos(I) * M + w, D = Math.sin(I) * T + S;
                        _ > 1 ? h += m(p, g, C, D, o, l) : (y = C, x = D);
                        var P = (o - w) * T / M + w;
                        if (i) {
                            if (f.containStroke(w, S, T, I, I + A, L, e, P, l))return !0
                        } else h += s(w, S, T, I, I + A, L, P, l);
                        p = Math.cos(I + A) * M + w, g = Math.sin(I + A) * T + S;
                        break;
                    case u.R:
                        y = p = t[_++], x = g = t[_++];
                        var k = t[_++], O = t[_++], C = y + k, D = x + O;
                        if (i) {
                            if (v(y, x, C, x, e, o, l) || v(C, x, C, D, e, o, l) || v(C, D, y, D, e, o, l) || v(y, D, y, x, e, o, l))return !0
                        } else h += m(C, x, C, D, o, l), h += m(y, D, y, x, o, l);
                        break;
                    case u.Z:
                        if (i) {
                            if (v(p, g, y, x, e, o, l))return !0
                        } else h += m(p, g, y, x, o, l);
                        p = y, g = x
                }
            }
            return i || n(g, x) || (h += m(p, g, y, x, o, l) || 0), 0 !== h
        }

        var u = i(28).CMD, h = i(84), c = i(147), d = i(85), f = i(146), p = i(62).normalizeRadian, g = i(17), m = i(86), v = h.containStroke, y = 2 * Math.PI, x = 1e-4, _ = [-1, -1, -1], b = [-1, -1];
        t.exports = {
            contain: function (t, e, i) {
                return l(t, 0, !1, e, i)
            }, containStroke: function (t, e, i, n) {
                return l(t, e, !0, i, n)
            }
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
            return Math.sqrt(e * e + i * i)
        }

        function o(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        var r = i(24), a = function () {
            this._track = []
        };
        a.prototype = {
            constructor: a, recognize: function (t, e, i) {
                return this._doTrack(t, e, i), this._recognize(t)
            }, clear: function () {
                return this._track.length = 0, this
            }, _doTrack: function (t, e, i) {
                var n = t.touches;
                if (n) {
                    for (var o = {points: [], touches: [], target: e, event: t}, a = 0, s = n.length; a < s; a++) {
                        var l = n[a], u = r.clientToLocal(i, l, {});
                        o.points.push([u.zrX, u.zrY]), o.touches.push(l)
                    }
                    this._track.push(o)
                }
            }, _recognize: function (t) {
                for (var e in s)if (s.hasOwnProperty(e)) {
                    var i = s[e](this._track, t);
                    if (i)return i
                }
            }
        };
        var s = {
            pinch: function (t, e) {
                var i = t.length;
                if (i) {
                    var r = (t[i - 1] || {}).points, a = (t[i - 2] || {}).points || r;
                    if (a && a.length > 1 && r && r.length > 1) {
                        var s = n(r) / n(a);
                        !isFinite(s) && (s = 1), e.pinchScale = s;
                        var l = o(r);
                        return e.pinchX = l[0], e.pinchY = l[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        };
        t.exports = a
    }, function (t, e) {
        var i = function () {
            this.head = null, this.tail = null, this._len = 0
        }, n = i.prototype;
        n.insert = function (t) {
            var e = new o(t);
            return this.insertEntry(e), e
        }, n.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
        }, n.remove = function (t) {
            var e = t.prev, i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, n.len = function () {
            return this._len
        };
        var o = function (t) {
            this.value = t, this.next, this.prev
        }, r = function (t) {
            this._list = new i, this._map = {}, this._maxSize = t || 10
        }, a = r.prototype;
        a.put = function (t, e) {
            var i = this._list, n = this._map;
            if (null == n[t]) {
                var o = i.len();
                if (o >= this._maxSize && o > 0) {
                    var r = i.head;
                    i.remove(r), delete n[r.key]
                }
                var a = i.insert(e);
                a.key = t, n[t] = a
            }
        }, a.get = function (t) {
            var e = this._map[t], i = this._list;
            if (null != e)return e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value
        }, a.clear = function () {
            this._list.clear(), this._map = {}
        }, t.exports = r
    }, function (t, e, i) {
        function n(t) {
            return "mousewheel" === t && d.browser.firefox ? "DOMMouseScroll" : t
        }

        function o(t, e, i) {
            var n = t._gestureMgr;
            "start" === i && n.clear();
            var o = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null), t.dom);
            if ("end" === i && n.clear(), o) {
                var r = o.type;
                e.gestureEvent = r, t.handler.dispatchToElement(o.target, r, o.event)
            }
        }

        function r(t) {
            t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                t._touching = !1
            }, 700)
        }

        function a() {
            return d.touchEventsSupported
        }

        function s(t) {
            function e(t, e) {
                return function () {
                    if (!e._touching)return t.apply(e, arguments)
                }
            }

            for (var i = 0; i < x.length; i++) {
                var n = x[i];
                t._handlers[n] = h.bind(_[n], t)
            }
            for (var i = 0; i < y.length; i++) {
                var n = y[i];
                t._handlers[n] = e(_[n], t)
            }
        }

        function l(t) {
            function e(e, i) {
                h.each(e, function (e) {
                    p(t, n(e), i._handlers[e])
                }, i)
            }

            c.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new f, this._handlers = {}, s(this), a() && e(x, this), e(y, this)
        }

        var u = i(24), h = i(1), c = i(20), d = i(11), f = i(149), p = u.addEventListener, g = u.removeEventListener, m = u.normalizeEvent, v = 300, y = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"], x = ["touchstart", "touchend", "touchmove"], _ = {
            mousemove: function (t) {
                t = m(this.dom, t), this.trigger("mousemove", t)
            }, mouseout: function (t) {
                t = m(this.dom, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.dom)for (; e && 9 != e.nodeType;) {
                    if (e === this.dom)return;
                    e = e.parentNode
                }
                this.trigger("mouseout", t)
            }, touchstart: function (t) {
                t = m(this.dom, t), t.zrByTouch = !0, this._lastTouchMoment = new Date, o(this, t, "start"), _.mousemove.call(this, t), _.mousedown.call(this, t), r(this)
            }, touchmove: function (t) {
                t = m(this.dom, t), t.zrByTouch = !0, o(this, t, "change"), _.mousemove.call(this, t), r(this)
            }, touchend: function (t) {
                t = m(this.dom, t), t.zrByTouch = !0, o(this, t, "end"), _.mouseup.call(this, t), +new Date - this._lastTouchMoment < v && _.click.call(this, t), r(this)
            }
        };
        h.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
            _[t] = function (e) {
                e = m(this.dom, e), this.trigger(t, e)
            }
        });
        var b = l.prototype;
        b.dispose = function () {
            for (var t = y.concat(x), e = 0; e < t.length; e++) {
                var i = t[e];
                g(this.dom, n(i), this._handlers[i])
            }
        }, b.setCursor = function (t) {
            this.dom.style.cursor = t || "default"
        }, h.mixin(l, c), t.exports = l
    }, function (t, e, i) {
        var n = i(7);
        t.exports = n.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++)t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++)t[i].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var i = e.paths || [], n = 0; n < i.length; n++)i[n].buildPath(t, i[n].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths, e = 0; e < t.length; e++)t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(37), r = function (t, e, i, n, r) {
            this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, this.type = "radial", this.global = r || !1, o.call(this, n)
        };
        r.prototype = {constructor: r}, n.inherits(r, o), t.exports = r
    }, function (t, e) {
        t.exports = {
            buildPath: function (t, e) {
                var i, n, o, r, a = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
                l < 0 && (a += l, l = -l), u < 0 && (s += u, u = -u), "number" == typeof h ? i = n = o = r = h : h instanceof Array ? 1 === h.length ? i = n = o = r = h[0] : 2 === h.length ? (i = o = h[0], n = r = h[1]) : 3 === h.length ? (i = h[0], n = r = h[1], o = h[2]) : (i = h[0], n = h[1], o = h[2], r = h[3]) : i = n = o = r = 0;
                var c;
                i + n > l && (c = i + n, i *= l / c, n *= l / c), o + r > l && (c = o + r, o *= l / c, r *= l / c), n + o > u && (c = n + o, n *= u / c, o *= u / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), t.moveTo(a + i, s), t.lineTo(a + l - n, s), 0 !== n && t.quadraticCurveTo(a + l, s, a + l, s + n), t.lineTo(a + l, s + u - o), 0 !== o && t.quadraticCurveTo(a + l, s + u, a + l - o, s + u), t.lineTo(a + r, s + u), 0 !== r && t.quadraticCurveTo(a, s + u, a, s + u - r), t.lineTo(a, s + i), 0 !== i && t.quadraticCurveTo(a, s, a + i, s)
            }
        }
    }, function (t, e, i) {
        var n = i(5), o = n.min, r = n.max, a = n.scale, s = n.distance, l = n.add;
        t.exports = function (t, e, i, u) {
            var h, c, d, f, p = [], g = [], m = [], v = [];
            if (u) {
                d = [1 / 0, 1 / 0], f = [-(1 / 0), -(1 / 0)];
                for (var y = 0, x = t.length; y < x; y++)o(d, d, t[y]), r(f, f, t[y]);
                o(d, d, u[0]), r(f, f, u[1])
            }
            for (var y = 0, x = t.length; y < x; y++) {
                var _ = t[y];
                if (i)h = t[y ? y - 1 : x - 1], c = t[(y + 1) % x]; else {
                    if (0 === y || y === x - 1) {
                        p.push(n.clone(t[y]));
                        continue
                    }
                    h = t[y - 1], c = t[y + 1]
                }
                n.sub(g, c, h), a(g, g, e);
                var b = s(_, h), w = s(_, c), S = b + w;
                0 !== S && (b /= S, w /= S), a(m, g, -b), a(v, g, w);
                var M = l([], _, m), T = l([], _, v);
                u && (r(M, M, d), o(M, M, f), r(T, T, d), o(T, T, f)), p.push(M), p.push(T)
            }
            return i && p.push(p.shift()), p
        }
    }, function (t, e, i) {
        function n(t, e, i, n, o, r, a) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * r + s * o + e
        }

        var o = i(5);
        t.exports = function (t, e) {
            for (var i = t.length, r = [], a = 0, s = 1; s < i; s++)a += o.distance(t[s - 1], t[s]);
            var l = a / 2;
            l = l < i ? i : l;
            for (var s = 0; s < l; s++) {
                var u, h, c, d = s / (l - 1) * (e ? i : i - 1), f = Math.floor(d), p = d - f, g = t[f % i];
                e ? (u = t[(f - 1 + i) % i], h = t[(f + 1) % i], c = t[(f + 2) % i]) : (u = t[0 === f ? f : f - 1], h = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]);
                var m = p * p, v = p * m;
                r.push([n(u[0], g[0], h[0], c[0], p, m, v), n(u[1], g[1], h[1], c[1], p, m, v)])
            }
            return r
        }
    }, function (t, e, i) {
        t.exports = i(7).extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = Math.max(e.r, 0), r = e.startAngle, a = e.endAngle, s = e.clockwise, l = Math.cos(r), u = Math.sin(r);
                t.moveTo(l * o + i, u * o + n), t.arc(i, n, o, r, a, !s)
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = t.cpx2, o = t.cpy2;
            return null === n || null === o ? [(i ? c : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? h : l)(t.x1, t.cpx1, t.x2, e), (i ? h : l)(t.y1, t.cpy1, t.y2, e)]
        }

        var o = i(17), r = i(5), a = o.quadraticSubdivide, s = o.cubicSubdivide, l = o.quadraticAt, u = o.cubicAt, h = o.quadraticDerivativeAt, c = o.cubicDerivativeAt, d = [];
        t.exports = i(7).extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, o = e.x2, r = e.y2, l = e.cpx1, u = e.cpy1, h = e.cpx2, c = e.cpy2, f = e.percent;
                0 !== f && (t.moveTo(i, n), null == h || null == c ? (f < 1 && (a(i, l, o, f, d), l = d[1], o = d[2], a(n, u, r, f, d), u = d[1], r = d[2]), t.quadraticCurveTo(l, u, o, r)) : (f < 1 && (s(i, l, h, o, f, d), l = d[1], h = d[2], o = d[3], s(n, u, c, r, f, d), u = d[1], c = d[2], r = d[3]), t.bezierCurveTo(l, u, h, c, o, r)))
            },
            pointAt: function (t) {
                return n(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = n(this.shape, t, !0);
                return r.normalize(e, e)
            }
        })
    }, function (t, e, i) {
        "use strict";
        t.exports = i(7).extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, i) {
                i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = i(7).extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, o = e.x2, r = e.y2, a = e.percent;
                0 !== a && (t.moveTo(i, n), a < 1 && (o = i * (1 - a) + o * a, r = n * (1 - a) + r * a), t.lineTo(o, r))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        })
    }, function (t, e, i) {
        var n = i(66);
        t.exports = i(7).extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                n.buildPath(t, e, !0)
            }
        })
    }, function (t, e, i) {
        var n = i(66);
        t.exports = i(7).extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                n.buildPath(t, e, !1)
            }
        })
    }, function (t, e, i) {
        var n = i(154);
        t.exports = i(7).extend({
            type: "rect",
            shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.x, o = e.y, r = e.width, a = e.height;
                e.r ? n.buildPath(t, e) : t.rect(i, o, r, a), t.closePath()
            }
        })
    }, function (t, e, i) {
        t.exports = i(7).extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = 2 * Math.PI;
                t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, o, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, o, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = i(7).extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = Math.max(e.r0 || 0, 0), r = Math.max(e.r, 0), a = e.startAngle, s = e.endAngle, l = e.clockwise, u = Math.cos(a), h = Math.sin(a);
                t.moveTo(u * o + i, h * o + n), t.lineTo(u * r + i, h * r + n), t.arc(i, n, r, a, s, !l), t.lineTo(Math.cos(s) * o + i, Math.sin(s) * o + n), 0 !== o && t.arc(i, n, o, s, a, l), t.closePath()
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(60), o = i(1), r = o.isString, a = o.isFunction, s = o.isObject, l = i(48), u = function () {
            this.animators = []
        };
        u.prototype = {
            constructor: u, animate: function (t, e) {
                var i, r = !1, a = this, s = this.__zr;
                if (t) {
                    var u = t.split("."), h = a;
                    r = "shape" === u[0];
                    for (var c = 0, d = u.length; c < d; c++)h && (h = h[u[c]]);
                    h && (i = h)
                } else i = a;
                if (!i)return void l('Property "' + t + '" is not existed in element ' + a.id);
                var f = a.animators, p = new n(i, e);
                return p.during(function (t) {
                    a.dirty(r)
                }).done(function () {
                    f.splice(o.indexOf(f, p), 1)
                }), f.push(p), s && s.animation.addAnimator(p), p
            }, stopAnimation: function (t) {
                for (var e = this.animators, i = e.length, n = 0; n < i; n++)e[n].stop(t);
                return e.length = 0, this
            }, animateTo: function (t, e, i, n, o) {
                function s() {
                    u--, u || o && o()
                }

                r(i) ? (o = n, n = i, i = 0) : a(n) ? (o = n, n = "linear", i = 0) : a(i) ? (o = i, i = 0) : a(e) ? (o = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, n, o);
                var l = this.animators.slice(), u = l.length;
                u || o && o();
                for (var h = 0; h < l.length; h++)l[h].done(s).start(n)
            }, _animateToShallow: function (t, e, i, n, r) {
                var a = {}, l = 0;
                for (var u in i)if (i.hasOwnProperty(u))if (null != e[u])s(i[u]) && !o.isArrayLike(i[u]) ? this._animateToShallow(t ? t + "." + u : u, e[u], i[u], n, r) : (a[u] = i[u], l++); else if (null != i[u])if (t) {
                    var h = {};
                    h[t] = {}, h[t][u] = i[u], this.attr(h)
                } else this.attr(u, i[u]);
                return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, a).delay(r || 0), this
            }
        }, t.exports = u
    }, function (t, e) {
        function i() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
        }

        i.prototype = {
            constructor: i, _dragStart: function (t) {
                var e = t.target;
                e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(e, "dragstart", t.event))
            }, _drag: function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var i = t.offsetX, n = t.offsetY, o = i - this._x, r = n - this._y;
                    this._x = i, this._y = n, e.drift(o, r, t), this.dispatchToElement(e, "drag", t.event);
                    var a = this.findHover(i, n, e), s = this._dropTarget;
                    this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(s, "dragleave", t.event), a && a !== s && this.dispatchToElement(a, "dragenter", t.event))
                }
            }, _dragEnd: function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.dispatchToElement(e, "dragend", t.event), this._dropTarget && this.dispatchToElement(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }
        }, t.exports = i
    }, function (t, e, i) {
        function n(t, e, i, n, o, r, a, s, l, u, h) {
            var g = l * (p / 180), y = f(g) * (t - i) / 2 + d(g) * (e - n) / 2, x = -1 * d(g) * (t - i) / 2 + f(g) * (e - n) / 2, _ = y * y / (a * a) + x * x / (s * s);
            _ > 1 && (a *= c(_), s *= c(_));
            var b = (o === r ? -1 : 1) * c((a * a * (s * s) - a * a * (x * x) - s * s * (y * y)) / (a * a * (x * x) + s * s * (y * y))) || 0, w = b * a * x / s, S = b * -s * y / a, M = (t + i) / 2 + f(g) * w - d(g) * S, T = (e + n) / 2 + d(g) * w + f(g) * S, I = v([1, 0], [(y - w) / a, (x - S) / s]), A = [(y - w) / a, (x - S) / s], L = [(-1 * y - w) / a, (-1 * x - S) / s], C = v(A, L);
            m(A, L) <= -1 && (C = p), m(A, L) >= 1 && (C = 0), 0 === r && C > 0 && (C -= 2 * p), 1 === r && C < 0 && (C += 2 * p), h.addData(u, M, T, a, s, I, C, g, r)
        }

        function o(t) {
            if (!t)return [];
            var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (e = 0; e < h.length; e++)i = i.replace(new RegExp(h[e], "g"), "|" + h[e]);
            var o, r = i.split("|"), a = 0, l = 0, u = new s, c = s.CMD;
            for (e = 1; e < r.length; e++) {
                var d, f = r[e], p = f.charAt(0), g = 0, m = f.slice(1).replace(/e,-/g, "e-").split(",");
                m.length > 0 && "" === m[0] && m.shift();
                for (var v = 0; v < m.length; v++)m[v] = parseFloat(m[v]);
                for (; g < m.length && !isNaN(m[g]) && !isNaN(m[0]);) {
                    var y, x, _, b, w, S, M, T = a, I = l;
                    switch (p) {
                        case"l":
                            a += m[g++], l += m[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"L":
                            a = m[g++], l = m[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"m":
                            a += m[g++], l += m[g++], d = c.M, u.addData(d, a, l), p = "l";
                            break;
                        case"M":
                            a = m[g++], l = m[g++], d = c.M, u.addData(d, a, l), p = "L";
                            break;
                        case"h":
                            a += m[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"H":
                            a = m[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"v":
                            l += m[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"V":
                            l = m[g++], d = c.L, u.addData(d, a, l);
                            break;
                        case"C":
                            d = c.C, u.addData(d, m[g++], m[g++], m[g++], m[g++], m[g++], m[g++]), a = m[g - 2], l = m[g - 1];
                            break;
                        case"c":
                            d = c.C, u.addData(d, m[g++] + a, m[g++] + l, m[g++] + a, m[g++] + l, m[g++] + a, m[g++] + l), a += m[g - 2], l += m[g - 1];
                            break;
                        case"S":
                            y = a, x = l;
                            var A = u.len(), L = u.data;
                            o === c.C && (y += a - L[A - 4], x += l - L[A - 3]), d = c.C, T = m[g++], I = m[g++], a = m[g++], l = m[g++], u.addData(d, y, x, T, I, a, l);
                            break;
                        case"s":
                            y = a, x = l;
                            var A = u.len(), L = u.data;
                            o === c.C && (y += a - L[A - 4], x += l - L[A - 3]), d = c.C, T = a + m[g++], I = l + m[g++], a += m[g++], l += m[g++], u.addData(d, y, x, T, I, a, l);
                            break;
                        case"Q":
                            T = m[g++], I = m[g++], a = m[g++], l = m[g++], d = c.Q, u.addData(d, T, I, a, l);
                            break;
                        case"q":
                            T = m[g++] + a, I = m[g++] + l, a += m[g++], l += m[g++], d = c.Q, u.addData(d, T, I, a, l);
                            break;
                        case"T":
                            y = a, x = l;
                            var A = u.len(), L = u.data;
                            o === c.Q && (y += a - L[A - 4], x += l - L[A - 3]), a = m[g++], l = m[g++], d = c.Q, u.addData(d, y, x, a, l);
                            break;
                        case"t":
                            y = a, x = l;
                            var A = u.len(), L = u.data;
                            o === c.Q && (y += a - L[A - 4], x += l - L[A - 3]), a += m[g++], l += m[g++], d = c.Q, u.addData(d, y, x, a, l);
                            break;
                        case"A":
                            _ = m[g++], b = m[g++], w = m[g++], S = m[g++], M = m[g++], T = a, I = l, a = m[g++], l = m[g++], d = c.A, n(T, I, a, l, S, M, _, b, w, d, u);
                            break;
                        case"a":
                            _ = m[g++], b = m[g++], w = m[g++], S = m[g++], M = m[g++], T = a, I = l, a += m[g++], l += m[g++], d = c.A, n(T, I, a, l, S, M, _, b, w, d, u)
                    }
                }
                "z" !== p && "Z" !== p || (d = c.Z, u.addData(d)), o = d
            }
            return u.toStatic(), u
        }

        function r(t, e) {
            var i, n = o(t);
            return e = e || {}, e.buildPath = function (t) {
                t.setData(n.data), i && l(t, i);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }, e.applyTransform = function (t) {
                i || (i = u.create()), u.mul(i, t, i), this.dirty(!0)
            }, e
        }

        var a = i(7), s = i(28), l = i(169), u = i(19), h = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"], c = Math.sqrt, d = Math.sin, f = Math.cos, p = Math.PI, g = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }, m = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
        }, v = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e))
        };
        t.exports = {
            createFromString: function (t, e) {
                return new a(r(t, e))
            }, extendFromString: function (t, e) {
                return a.extend(r(t, e))
            }, mergePath: function (t, e) {
                for (var i = [], n = t.length, o = 0; o < n; o++) {
                    var r = t[o];
                    r.__dirty && r.buildPath(r.path, r.shape, !0), i.push(r.path)
                }
                var s = new a(e);
                return s.buildPath = function (t) {
                    t.appendPath(i);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, s
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i, n, r, h, c, d, f = t.data, p = o.M, g = o.C, m = o.L, v = o.R, y = o.A, x = o.Q;
            for (r = 0, h = 0; r < f.length;) {
                switch (i = f[r++], h = r, n = 0, i) {
                    case p:
                        n = 1;
                        break;
                    case m:
                        n = 1;
                        break;
                    case g:
                        n = 3;
                        break;
                    case x:
                        n = 2;
                        break;
                    case y:
                        var _ = e[4], b = e[5], w = l(e[0] * e[0] + e[1] * e[1]), S = l(e[2] * e[2] + e[3] * e[3]), M = u(-e[1] / S, e[0] / w);
                        f[r++] += _, f[r++] += b, f[r++] *= w, f[r++] *= S, f[r++] += M, f[r++] += M, r += 2, h = r;
                        break;
                    case v:
                        d[0] = f[r++], d[1] = f[r++], a(d, d, e), f[h++] = d[0], f[h++] = d[1], d[0] += f[r++], d[1] += f[r++], a(d, d, e), f[h++] = d[0], f[h++] = d[1]
                }
                for (c = 0; c < n; c++) {
                    var d = s[c];
                    d[0] = f[r++], d[1] = f[r++], a(d, d, e), f[h++] = d[0], f[h++] = d[1]
                }
            }
        }

        var o = i(28).CMD, r = i(5), a = r.applyTransform, s = [[], [], []], l = Math.sqrt, u = Math.atan2;
        t.exports = n
    }, function (t, e, i) {
        if (!i(11).canvasSupported) {
            var n, o = "urn:schemas-microsoft-com:vml", r = window, a = r.document, s = !1;
            try {
                !a.namespaces.zrvml && a.namespaces.add("zrvml", o), n = function (t) {
                    return a.createElement("<zrvml:" + t + ' class="zrvml">')
                }
            } catch (l) {
                n = function (t) {
                    return a.createElement("<" + t + ' xmlns="' + o + '" class="zrvml">')
                }
            }
            var u = function () {
                if (!s) {
                    s = !0;
                    var t = a.styleSheets;
                    t.length < 31 ? a.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
                }
            };
            t.exports = {doc: a, initVML: u, createNode: n}
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return null == t.value ? t : t.value
        }

        var o = i(14), r = i(29), a = i(287), s = i(1), l = {
            _baseAxisDim: null, getInitialData: function (t, e) {
                var i, a, s = e.getComponent("xAxis", this.get("xAxisIndex")), l = e.getComponent("yAxis", this.get("yAxisIndex")), u = s.get("type"), h = l.get("type");
                "category" === u ? (t.layout = "horizontal", i = s.getCategories(), a = !0) : "category" === h ? (t.layout = "vertical", i = l.getCategories(), a = !0) : t.layout = t.layout || "horizontal", this._baseAxisDim = "horizontal" === t.layout ? "x" : "y";
                var c = t.data, d = this.dimensions = ["base"].concat(this.valueDimensions);
                r(d, c);
                var f = new o(d, this);
                return f.initData(c, i ? i.slice() : null, function (t, e, i, o) {
                    var r = n(t);
                    return a ? "base" === e ? i : r[o - 1] : r[o]
                }), f
            }, coordDimToDataDim: function (t) {
                var e = this.valueDimensions.slice(), i = ["base"], n = {
                    horizontal: {x: i, y: e},
                    vertical: {x: e, y: i}
                };
                return n[this.get("layout")][t]
            }, dataDimToCoordDim: function (t) {
                var e;
                return s.each(["x", "y"], function (i, n) {
                    var o = this.coordDimToDataDim(i);
                    s.indexOf(o, t) >= 0 && (e = i)
                }, this), e
            }, getBaseAxis: function () {
                var t = this._baseAxisDim;
                return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex")).axis
            }
        }, u = {
            init: function () {
                var t = this._whiskerBoxDraw = new a(this.getStyleUpdater());
                this.group.add(t.group)
            }, render: function (t, e, i) {
                this._whiskerBoxDraw.updateData(t.getData())
            }, remove: function (t) {
                this._whiskerBoxDraw.remove()
            }
        };
        t.exports = {seriesModelMixin: l, viewMixin: u}
    }, function (t, e, i) {
        function n(t, e) {
            var i, n = this.getBoundingRect(), o = t.get("layoutCenter"), r = t.get("layoutSize"), s = e.getWidth(), u = e.getHeight(), h = t.get("aspectScale") || .75, c = n.width / n.height * h, d = !1;
            o && r && (o = [l.parsePercent(o[0], s), l.parsePercent(o[1], u)], r = l.parsePercent(r, Math.min(s, u)), isNaN(o[0]) || isNaN(o[1]) || isNaN(r) || (d = !0));
            var f;
            if (d) {
                var f = {};
                c > 1 ? (f.width = r, f.height = r / c) : (f.height = r, f.width = r * c), f.y = o[1] - f.height / 2, f.x = o[0] - f.width / 2
            } else i = t.getBoxLayoutParams(), i.aspect = c, f = a.getLayoutRect(i, {width: s, height: u});
            this.setViewRect(f.x, f.y, f.width, f.height), this.setCenter(t.get("center")), this.setZoom(t.get("zoom"))
        }

        function o(t, e) {
            s.each(e.get("geoCoord"), function (e, i) {
                t.addGeoCoord(i, e)
            })
        }

        var r = i(358), a = i(12), s = i(1), l = i(4), u = {}, h = {
            dimensions: r.prototype.dimensions,
            create: function (t, e) {
                var i = [];
                t.eachComponent("geo", function (t, a) {
                    var s = t.get("map"), l = u[s], h = new r(s + a, s, l && l.geoJson, l && l.specialAreas, t.get("nameMap"));
                    h.zoomLimit = t.get("scaleLimit"), i.push(h), o(h, t), t.coordinateSystem = h, h.model = t, h.resize = n, h.resize(t, e)
                }), t.eachSeries(function (t) {
                    var e = t.get("coordinateSystem");
                    if ("geo" === e) {
                        var n = t.get("geoIndex") || 0;
                        t.coordinateSystem = i[n]
                    }
                });
                var a = {};
                return t.eachSeriesByType("map", function (t) {
                    var e = t.get("map");
                    a[e] = a[e] || [], a[e].push(t)
                }), s.each(a, function (t, a) {
                    var l = u[a], h = s.map(t, function (t) {
                        return t.get("nameMap")
                    }), c = new r(a, a, l && l.geoJson, l && l.specialAreas, s.mergeAll(h));
                    c.zoomLimit = s.retrieve.apply(null, s.map(t, function (t) {
                        return t.get("scaleLimit")
                    })), i.push(c), c.resize = n, c.resize(t[0], e), s.each(t, function (t) {
                        t.coordinateSystem = c, o(c, t)
                    })
                }), i
            },
            registerMap: function (t, e, i) {
                e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), u[t] = {
                    geoJson: e,
                    specialAreas: i
                }
            },
            getMap: function (t) {
                return u[t]
            },
            getFilledRegions: function (t, e) {
                var i = (t || []).slice(), n = h.getMap(e), o = n && n.geoJson;
                if (!o)return t;
                for (var r = {}, a = o.features, s = 0; s < i.length; s++)r[i[s].name] = i[s];
                for (var s = 0; s < a.length; s++) {
                    var l = a[s].properties.name;
                    r[l] || i.push({name: l})
                }
                return i
            }
        }, c = i(2);
        c.registerMap = h.registerMap, c.getMap = h.getMap, c.loadMap = function () {
        }, c.registerCoordinateSystem("geo", h), t.exports = h
    }, function (t, e, i) {
        function n(t) {
            if (t)for (var e in t)if (t.hasOwnProperty(e))return !0
        }

        var o = i(1), r = i(72), a = o.each, s = {
            createVisualMappings: function (t, e, i) {
                function n() {
                    var t = function () {
                    };
                    t.prototype.__hidden = t.prototype;
                    var e = new t;
                    return e
                }

                var s = {};
                return a(e, function (e) {
                    var l = s[e] = n();
                    a(t[e], function (t, n) {
                        if (r.isValidType(n)) {
                            var a = {type: n, visual: t};
                            i && i(a, e), l[n] = new r(a), "opacity" === n && (a = o.clone(a), a.type = "colorAlpha", l.__hidden.__alphaForOpacity = new r(a))
                        }
                    })
                }), s
            }, replaceVisualOption: function (t, e, i) {
                var r;
                o.each(i, function (t) {
                    e.hasOwnProperty(t) && n(e[t]) && (r = !0)
                }), r && o.each(i, function (i) {
                    e.hasOwnProperty(i) && n(e[i]) ? t[i] = o.clone(e[i]) : delete t[i]
                })
            }, applyVisual: function (t, e, i, n, a, s) {
                function l(t) {
                    return i.getItemVisual(d, t)
                }

                function u(t, e) {
                    i.setItemVisual(d, t, e)
                }

                function h(t, i) {
                    d = null == s ? t : i;
                    for (var o = n.call(a, t), r = e[o], h = c[o], f = 0, p = h.length; f < p; f++) {
                        var g = h[f];
                        r[g] && r[g].applyVisual(t, l, u)
                    }
                }

                var c = {};
                o.each(t, function (t) {
                    var i = r.prepareVisualTypes(e[t]);
                    c[t] = i
                });
                var d;
                null == s ? i.each(h, !0) : i.each([s], h, !0)
            }
        };
        t.exports = s
    }, function (t, e, i) {
        function n() {
            this.group = new o.Group, this._symbolEl = new a({})
        }

        var o = i(3), r = i(26), a = o.extendShape({
            shape: {points: null, sizes: null},
            symbolProxy: null,
            buildPath: function (t, e) {
                for (var i = e.points, n = e.sizes, o = this.symbolProxy, r = o.shape, a = 0; a < i.length; a++) {
                    var s = i[a], l = n[a];
                    l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (r.x = s[0] - l[0] / 2, r.y = s[1] - l[1] / 2, r.width = l[0], r.height = l[1], o.buildPath(t, r, !0))
                }
            },
            findDataIndex: function (t, e) {
                for (var i = this.shape, n = i.points, o = i.sizes, r = n.length - 1; r >= 0; r--) {
                    var a = n[r], s = o[r], l = a[0] - s[0] / 2, u = a[1] - s[1] / 2;
                    if (t >= l && e >= u && t <= l + s[0] && e <= u + s[1])return r
                }
                return -1
            }
        }), s = n.prototype;
        s.updateData = function (t) {
            this.group.removeAll();
            var e = this._symbolEl, i = t.hostModel;
            e.setShape({
                points: t.mapArray(t.getItemLayout), sizes: t.mapArray(function (e) {
                    var i = t.getItemVisual(e, "symbolSize");
                    return i instanceof Array || (i = [i, i]), i
                })
            }), e.symbolProxy = r.createSymbol(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor, e.useStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
            var n = t.getVisual("color");
            n && e.setColor(n), e.seriesIndex = i.seriesIndex, e.on("mousemove", function (t) {
                e.dataIndex = null;
                var i = e.findDataIndex(t.offsetX, t.offsetY);
                i > 0 && (e.dataIndex = i)
            }), this.group.add(e)
        }, s.updateLayout = function (t) {
            var e = t.getData();
            this._symbolEl.setShape({points: e.mapArray(e.getItemLayout)})
        }, s.remove = function () {
            this.group.removeAll()
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return isNaN(+t.cpx1) || isNaN(+t.cpy1)
        }

        var o = i(3), r = i(5), a = o.Line.prototype, s = o.BezierCurve.prototype;
        t.exports = o.extendShape({
            type: "ec-line",
            style: {stroke: "#000", fill: null},
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
            buildPath: function (t, e) {
                (n(e) ? a : s).buildPath(t, e)
            },
            pointAt: function (t) {
                return n(this.shape) ? a.pointAt.call(this, t) : s.pointAt.call(this, t)
            },
            tangentAt: function (t) {
                var e = this.shape, i = n(e) ? [e.x2 - e.x1, e.y2 - e.y1] : s.tangentAt.call(this, t);
                return r.normalize(i, i)
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(177), i(178), o.registerVisual(n.curry(i(47), "scatter", "circle", null)), o.registerLayout(n.curry(i(56), "scatter")), i(35)
    }, function (t, e, i) {
        "use strict";
        var n = i(34), o = i(15);
        t.exports = o.extend({
            type: "series.scatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                var i = n(t.data, this, e);
                return i
            },
            brushSelector: "point",
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                symbolSize: 10,
                large: !1,
                largeThreshold: 2e3,
                itemStyle: {normal: {opacity: .8}}
            }
        })
    }, function (t, e, i) {
        var n = i(39), o = i(174);
        i(2).extendChartView({
            type: "scatter", init: function () {
                this._normalSymbolDraw = new n, this._largeSymbolDraw = new o
            }, render: function (t, e, i) {
                var n = t.getData(), o = this._largeSymbolDraw, r = this._normalSymbolDraw, a = this.group, s = t.get("large") && n.count() > t.get("largeThreshold") ? o : r;
                this._symbolDraw = s, s.updateData(n), a.add(s.group), a.remove(s === o ? r.group : o.group)
            }, updateLayout: function (t) {
                this._symbolDraw.updateLayout(t)
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(e, !0)
            }, dispose: function () {
            }
        })
    }, function (t, e, i) {
        i(112), i(40), i(41), i(185), i(186), i(181), i(182), i(109), i(108)
    }, function (t, e, i) {
        function n(t, e) {
            var i = [1 / 0, -(1 / 0)];
            return l(e, function (e) {
                var n = e.getData();
                n && l(e.coordDimToDataDim(t), function (t) {
                    var e = n.getDataExtent(t);
                    e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
                })
            }, this), i
        }

        function o(t, e, i) {
            return l(["min", "max"], function (n, o) {
                var r = e.get(n, !0);
                null != r && (r + "").toLowerCase() !== "data" + n && (t[o] = i.parse(r))
            }), e.get("scale", !0) || (t[0] > 0 && (t[0] = 0), t[1] < 0 && (t[1] = 0)), t
        }

        function r(t, e) {
            var i = t.getAxisModel(), n = t._percentWindow, o = t._valueWindow;
            if (n) {
                var r = e || 0 === n[0] && 100 === n[1], a = !e && s.getPixelPrecision(o, [0, 500]), l = !(e || a < 20 && a >= 0), u = e || r || l;
                i.setRange && i.setRange(u ? null : +o[0].toFixed(a), u ? null : +o[1].toFixed(a))
            }
        }

        var a = i(1), s = i(4), l = a.each, u = s.asc, h = function (t, e, i, n) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = n, this._dataZoomModel = i
        };
        h.prototype = {
            constructor: h, hostedBy: function (t) {
                return this._dataZoomModel === t
            }, getDataExtent: function () {
                return this._dataExtent.slice()
            }, getDataValueWindow: function () {
                return this._valueWindow.slice()
            }, getDataPercentWindow: function () {
                return this._percentWindow.slice()
            }, getTargetSeriesModels: function () {
                var t = [], e = this.ecModel;
                return e.eachSeries(function (i) {
                    var n = i.get("coordinateSystem");
                    if ("cartesian2d" === n || "polar" === n) {
                        var o = this._dimName, r = e.queryComponents({
                            mainType: o + "Axis",
                            index: i.get(o + "AxisIndex"),
                            id: i.get(o + "AxisId")
                        })[0];
                        this._axisIndex === (r && r.componentIndex) && t.push(i)
                    }
                }, this), t
            }, getAxisModel: function () {
                return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
            }, getOtherAxisModel: function () {
                var t, e, i = this._dimName, n = this.ecModel, o = this.getAxisModel(), r = "x" === i || "y" === i;
                r ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
                var a;
                return n.eachComponent(t + "Axis", function (t) {
                    (t.get(e) || 0) === (o.get(e) || 0) && (a = t)
                }), a
            }, calculateDataWindow: function (t, e) {
                var i = this.getAxisModel(), n = i.axis.scale, r = [0, 100], a = [t.start, t.end], h = [];
                return e = e.slice(), o(e, i, n), l(["startValue", "endValue"], function (e) {
                    h.push(null != t[e] ? n.parse(t[e]) : null)
                }), l([0, 1], function (t) {
                    var i = h[t], o = a[t];
                    null != o || null == i ? (null == o && (o = r[t]), i = n.parse(s.linearMap(o, r, e, !0))) : o = s.linearMap(i, e, r, !0), h[t] = i, a[t] = o
                }), {valueWindow: u(h), percentWindow: u(a)}
            }, reset: function (t) {
                if (t === this._dataZoomModel) {
                    var e = this._dataExtent = n(this._dimName, this.getTargetSeriesModels()), i = this.calculateDataWindow(t.option, e);
                    this._valueWindow = i.valueWindow, this._percentWindow = i.percentWindow, r(this)
                }
            }, restore: function (t) {
                t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, r(this, !0))
            }, filterData: function (t) {
                function e(t) {
                    return t >= r[0] && t <= r[1]
                }

                if (t === this._dataZoomModel) {
                    var i = this._dimName, n = this.getTargetSeriesModels(), o = t.get("filterMode"), r = this._valueWindow, a = this.getOtherAxisModel();
                    t.get("$fromToolbox") && a && "category" === a.get("type") && (o = "empty"), l(n, function (t) {
                        var n = t.getData();
                        n && l(t.coordDimToDataDim(i), function (i) {
                            "empty" === o ? t.setData(n.map(i, function (t) {
                                return e(t) ? t : NaN
                            })) : n.filterSelf(i, e)
                        })
                    })
                }
            }
        }, t.exports = h
    }, function (t, e, i) {
        t.exports = i(40).extend({type: "dataZoom.inside", defaultOption: {disabled: !1, zoomLock: !1}})
    }, function (t, e, i) {
        function n(t) {
            var e = [0, 100];
            return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
        }

        var o = i(41), r = i(1), a = i(81), s = i(187), l = r.bind, u = o.extend({
            type: "dataZoom.inside",
            init: function (t, e) {
                this._range
            },
            render: function (t, e, i, n) {
                u.superApply(this, "render", arguments), s.shouldRecordRange(n, t.id) && (this._range = t.getPercentRange());
                var o = this.getTargetInfo();
                r.each(["cartesians", "polars"], function (e) {
                    var n = o[e], a = r.map(n, function (t) {
                        return s.generateCoordId(t.model)
                    });
                    r.each(n, function (n) {
                        var o = n.model, r = o.coordinateSystem;
                        s.register(i, {
                            coordId: s.generateCoordId(o),
                            allCoordIds: a,
                            coordinateSystem: r,
                            containsPoint: l(h[e].containsPoint, this, r),
                            dataZoomId: t.id,
                            throttleRate: t.get("throttle", !0),
                            panGetRange: l(this._onPan, this, n, e),
                            zoomGetRange: l(this._onZoom, this, n, e)
                        })
                    }, this)
                }, this)
            },
            dispose: function () {
                s.unregister(this.api, this.dataZoomModel.id), u.superApply(this, "dispose", arguments), this._range = null
            },
            _onPan: function (t, e, i, n, o, r, s, l, u) {
                if (this.dataZoomModel.option.disabled)return this._range;
                var c = this._range.slice(), d = t.axisModels[0];
                if (d) {
                    var f = h[e].getDirectionInfo([r, s], [l, u], d, i, t), p = f.signal * (c[1] - c[0]) * f.pixel / f.pixelLength;
                    return a(p, c, [0, 100], "rigid"), this._range = c
                }
            },
            _onZoom: function (t, e, i, o, r, a) {
                var s = this.dataZoomModel.option;
                if (s.disabled || s.zoomLock)return this._range;
                var l = this._range.slice(), u = t.axisModels[0];
                if (u) {
                    var c = h[e].getDirectionInfo(null, [r, a], u, i, t), d = (c.pixel - c.pixelStart) / c.pixelLength * (l[1] - l[0]) + l[0];
                    return o = Math.max(1 / o, 0), l[0] = (l[0] - d) * o + d, l[1] = (l[1] - d) * o + d, this._range = n(l)
                }
            }
        }), h = {
            cartesians: {
                getDirectionInfo: function (t, e, i, n, o) {
                    var r = i.axis, a = {}, s = o.model.coordinateSystem.getRect();
                    return t = t || [0, 0], "x" === r.dim ? (a.pixel = e[0] - t[0], a.pixelLength = s.width, a.pixelStart = s.x, a.signal = r.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = s.height, a.pixelStart = s.y, a.signal = r.inverse ? -1 : 1), a
                }, containsPoint: function (t, e, i) {
                    return t.getRect().contain(e, i)
                }
            }, polars: {
                getDirectionInfo: function (t, e, i, n, o) {
                    var r = i.axis, a = {}, s = o.model.coordinateSystem, l = s.getRadiusAxis().getExtent(), u = s.getAngleAxis().getExtent();
                    return t = t ? s.pointToCoord(t) : [0, 0], e = s.pointToCoord(e), "radiusAxis" === i.mainType ? (a.pixel = e[0] - t[0], a.pixelLength = l[1] - l[0], a.pixelStart = l[0], a.signal = r.inverse ? 1 : -1) : (a.pixel = e[1] - t[1], a.pixelLength = u[1] - u[0], a.pixelStart = u[0], a.signal = r.inverse ? -1 : 1), a
                }, containsPoint: function (t, e, i) {
                    var n = t.getRadiusAxis().getExtent()[1], o = t.cx, r = t.cy;
                    return Math.pow(e - o, 2) + Math.pow(i - r, 2) <= Math.pow(n, 2)
                }
            }
        };
        t.exports = u
    }, function (t, e, i) {
        var n = i(40);
        t.exports = n.extend({type: "dataZoom.select"})
    }, function (t, e, i) {
        t.exports = i(41).extend({type: "dataZoom.select"})
    }, function (t, e, i) {
        var n = i(40), o = n.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                right: "ph",
                top: "ph",
                width: "ph",
                height: "ph",
                left: null,
                bottom: null,
                backgroundColor: "rgba(47,69,84,0)",
                dataBackground: {
                    lineStyle: {color: "#2f4554", width: .5, opacity: .3},
                    areaStyle: {color: "rgba(47,69,84,0.3)", opacity: .3}
                },
                borderColor: "#ddd",
                fillerColor: "rgba(167,183,204,0.4)",
                handleIcon: "M8.2,13.6V3.9H6.3v9.7H3.1v14.9h3.3v9.7h1.8v-9.7h3.3V13.6H8.2z M9.7,24.4H4.8v-1.4h4.9V24.4z M9.7,19.1H4.8v-1.4h4.9V19.1z",
                handleSize: "100%",
                handleStyle: {color: "#a7b7cc"},
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            }
        });
        t.exports = o
    }, function (t, e, i) {
        function n(t) {
            return "x" === t ? "y" : "x"
        }

        var o = i(1), r = i(3), a = i(46), s = i(41), l = r.Rect, u = i(4), h = u.linearMap, c = i(12), d = i(81), f = u.asc, p = o.bind, g = o.each, m = 7, v = 1, y = 30, x = "horizontal", _ = "vertical", b = 5, w = ["line", "bar", "candlestick", "scatter"], S = s.extend({
            type: "dataZoom.slider",
            init: function (t, e) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._handleWidth, this._handleHeight, this._location, this._dragging, this._dataShadowInfo, this.api = e
            },
            render: function (t, e, i, n) {
                return S.superApply(this, "render", arguments), a.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
            },
            remove: function () {
                S.superApply(this, "remove", arguments), a.clear(this, "_dispatchZoomAction")
            },
            dispose: function () {
                S.superApply(this, "dispose", arguments), a.clear(this, "_dispatchZoomAction")
            },
            _buildView: function () {
                var t = this.group;
                t.removeAll(), this._resetLocation(), this._resetInterval();
                var e = this._displayables.barGroup = new r.Group;
                this._renderBackground(), this._renderHandle(), this._renderDataShadow(), t.add(e), this._positionGroup()
            },
            _resetLocation: function () {
                var t = this.dataZoomModel, e = this.api, i = this._findCoordRect(), n = {
                    width: e.getWidth(),
                    height: e.getHeight()
                }, r = this._orient === x ? {
                    right: n.width - i.x - i.width,
                    top: n.height - y - m,
                    width: i.width,
                    height: y
                } : {right: m, top: i.y, width: y, height: i.height}, a = c.getLayoutParams(t.option);
                o.each(["right", "top", "width", "height"], function (t) {
                    "ph" === a[t] && (a[t] = r[t])
                });
                var s = c.getLayoutRect(a, n, t.padding);
                this._location = {
                    x: s.x,
                    y: s.y
                }, this._size = [s.width, s.height], this._orient === _ && this._size.reverse()
            },
            _positionGroup: function () {
                var t = this.group, e = this._location, i = this._orient, n = this.dataZoomModel.getFirstTargetAxisModel(), o = n && n.get("inverse"), r = this._displayables.barGroup, a = (this._dataShadowInfo || {}).otherAxisInverse;
                r.attr(i !== x || o ? i === x && o ? {scale: a ? [-1, 1] : [-1, -1]} : i !== _ || o ? {
                    scale: a ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: a ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: a ? [1, 1] : [1, -1]});
                var s = t.getBoundingRect([r]);
                t.attr("position", [e.x - s.x, e.y - s.y])
            },
            _getViewExtent: function () {
                return [0, this._size[0]]
            },
            _renderBackground: function () {
                var t = this.dataZoomModel, e = this._size;
                this._displayables.barGroup.add(new l({
                    silent: !0,
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: t.get("backgroundColor")},
                    z2: -40
                }))
            },
            _renderDataShadow: function () {
                var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (t) {
                    var e = this._size, i = t.series, n = i.getRawData(), a = i.getShadowDim ? i.getShadowDim() : t.otherDim, s = n.getDataExtent(a), l = .3 * (s[1] - s[0]);
                    s = [s[0] - l, s[1] + l];
                    var u, c = [0, e[1]], d = [0, e[0]], f = [[e[0], 0], [0, 0]], p = [], g = d[1] / (n.count() - 1), m = 0, v = Math.round(n.count() / e[0]);
                    n.each([a], function (t, e) {
                        if (v > 0 && e % v)return void(m += g);
                        var i = null == t || isNaN(t) || "" === t, n = i ? 0 : h(t, s, c, !0);
                        i && !u && e ? (f.push([f[f.length - 1][0], 0]), p.push([p[p.length - 1][0], 0])) : !i && u && (f.push([m, 0]), p.push([m, 0])), f.push([m, n]), p.push([m, n]), m += g, u = i
                    });
                    var y = this.dataZoomModel;
                    this._displayables.barGroup.add(new r.Polygon({
                        shape: {points: f},
                        style: o.defaults({fill: y.get("dataBackgroundColor")}, y.getModel("dataBackground.areaStyle").getAreaStyle()),
                        silent: !0,
                        z2: -20
                    })), this._displayables.barGroup.add(new r.Polyline({
                        shape: {points: p},
                        style: y.getModel("dataBackground.lineStyle").getLineStyle(),
                        silent: !0,
                        z2: -19
                    }))
                }
            },
            _prepareDataShadowInfo: function () {
                var t = this.dataZoomModel, e = t.get("showDataShadow");
                if (e !== !1) {
                    var i, r = this.ecModel;
                    return t.eachTargetAxis(function (a, s) {
                        var l = t.getAxisProxy(a.name, s).getTargetSeriesModels();
                        o.each(l, function (t) {
                            if (!(i || e !== !0 && o.indexOf(w, t.get("type")) < 0)) {
                                var l = n(a.name), u = r.getComponent(a.axis, s).axis;
                                i = {
                                    thisAxis: u,
                                    series: t,
                                    thisDim: a.name,
                                    otherDim: l,
                                    otherAxisInverse: t.coordinateSystem.getOtherAxis(u).inverse
                                }
                            }
                        }, this)
                    }, this), i
                }
            },
            _renderHandle: function () {
                var t = this._displayables, e = t.handles = [], i = t.handleLabels = [], n = this._displayables.barGroup, o = this._size, a = this.dataZoomModel;
                n.add(t.filler = new l({
                    draggable: !0,
                    cursor: "move",
                    drift: p(this._onDragMove, this, "all"),
                    ondragstart: p(this._showDataInfo, this, !0),
                    ondragend: p(this._onDragEnd, this),
                    onmouseover: p(this._showDataInfo, this, !0),
                    onmouseout: p(this._showDataInfo, this, !1),
                    style: {fill: a.get("fillerColor"), textPosition: "inside"}
                })), n.add(new l(r.subPixelOptimizeRect({
                    silent: !0,
                    shape: {x: 0, y: 0, width: o[0], height: o[1]},
                    style: {
                        stroke: a.get("dataBackgroundColor") || a.get("borderColor"),
                        lineWidth: v,
                        fill: "rgba(0,0,0,0)"
                    }
                })));
                var s = a.get("handleIcon");
                g([0, 1], function (t) {
                    var o = r.makePath(s, {
                        style: {strokeNoScale: !0},
                        rectHover: !0,
                        cursor: "vertical" === this._orient ? "ns-resize" : "ew-resize",
                        draggable: !0,
                        drift: p(this._onDragMove, this, t),
                        ondragend: p(this._onDragEnd, this),
                        onmouseover: p(this._showDataInfo, this, !0),
                        onmouseout: p(this._showDataInfo, this, !1)
                    }, {x: -.5, y: 0, width: 1, height: 1}, "center"), l = o.getBoundingRect();
                    this._handleHeight = u.parsePercent(a.get("handleSize"), this._size[1]), this._handleWidth = l.width / l.height * this._handleHeight, o.setStyle(a.getModel("handleStyle").getItemStyle());
                    var h = a.get("handleColor");
                    null != h && (o.style.fill = h), n.add(e[t] = o);
                    var c = a.textStyleModel;
                    this.group.add(i[t] = new r.Text({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            fill: c.getTextColor(),
                            textFont: c.getFont()
                        },
                        z2: 10
                    }))
                }, this)
            },
            _resetInterval: function () {
                var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                this._handleEnds = [h(t[0], [0, 100], e, !0), h(t[1], [0, 100], e, !0)]
            },
            _updateInterval: function (t, e) {
                var i = this._handleEnds, n = this._getViewExtent();
                d(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = f([h(i[0], n, [0, 100], !0), h(i[1], n, [0, 100], !0)])
            },
            _updateView: function (t) {
                var e = this._displayables, i = this._handleEnds, n = f(i.slice()), o = this._size;
                g([0, 1], function (t) {
                    var n = e.handles[t], r = this._handleHeight;
                    n.attr({scale: [r, r], position: [i[t], o[1] / 2 - r / 2]})
                }, this), e.filler.setShape({x: n[0], y: 0, width: n[1] - n[0], height: o[1]}), this._updateDataInfo(t)
            },
            _updateDataInfo: function (t) {
                function e(t) {
                    var e = r.getTransform(n.handles[t].parent, this.group), i = r.transformDirection(0 === t ? "right" : "left", e), l = this._handleWidth / 2 + b, u = r.applyTransform([d[t] + (0 === t ? -l : l), this._size[1] / 2], e);
                    o[t].setStyle({
                        x: u[0],
                        y: u[1],
                        textVerticalAlign: a === x ? "middle" : i,
                        textAlign: a === x ? i : "center",
                        text: s[t]
                    })
                }

                var i = this.dataZoomModel, n = this._displayables, o = n.handleLabels, a = this._orient, s = ["", ""];
                if (i.get("showDetail")) {
                    var l = i.findRepresentativeAxisProxy();
                    if (l) {
                        var u = l.getAxisModel().axis, h = this._range, c = t ? l.calculateDataWindow({
                            start: h[0],
                            end: h[1]
                        }, l.getDataExtent()).valueWindow : l.getDataValueWindow();
                        s = [this._formatLabel(c[0], u), this._formatLabel(c[1], u)]
                    }
                }
                var d = f(this._handleEnds.slice());
                e.call(this, 0), e.call(this, 1)
            },
            _formatLabel: function (t, e) {
                var i = this.dataZoomModel, n = i.get("labelFormatter"), r = i.get("labelPrecision");
                null != r && "auto" !== r || (r = e.getPixelPrecision());
                var a = null == t && isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(r, 20));
                return o.isFunction(n) ? n(t, a) : o.isString(n) ? n.replace("{value}", a) : a
            },
            _showDataInfo: function (t) {
                t = this._dragging || t;
                var e = this._displayables.handleLabels;
                e[0].attr("invisible", !t), e[1].attr("invisible", !t)
            },
            _onDragMove: function (t, e, i) {
                this._dragging = !0;
                var n = this._applyBarTransform([e, i], !0);
                this._updateInterval(t, n[0]);
                var o = this.dataZoomModel.get("realtime");
                this._updateView(!o), o && o && this._dispatchZoomAction()
            },
            _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
            },
            _dispatchZoomAction: function () {
                var t = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: t[0],
                    end: t[1]
                })
            },
            _applyBarTransform: function (t, e) {
                var i = this._displayables.barGroup.getLocalTransform();
                return r.applyTransform(t, i, e)
            },
            _findCoordRect: function () {
                var t, e = this.getTargetInfo();
                if (e.cartesians.length)t = e.cartesians[0].model.coordinateSystem.getRect(); else {
                    var i = this.api.getWidth(), n = this.api.getHeight();
                    t = {x: .2 * i, y: .2 * n, width: .6 * i, height: .6 * n}
                }
                return t
            }
        });
        t.exports = S
    }, function (t, e, i) {
        function n(t) {
            var e = t.getZr();
            return e[p] || (e[p] = {})
        }

        function o(t, e, i) {
            var n = new c(t.getZr());
            return n.enable(), n.on("pan", f(a, i)), n.on("zoom", f(s, i)), n
        }

        function r(t) {
            h.each(t, function (e, i) {
                e.count || (e.controller.dispose(), delete t[i])
            })
        }

        function a(t, e, i, n, o, r, a) {
            l(t, function (s) {
                return s.panGetRange(t.controller, e, i, n, o, r, a)
            })
        }

        function s(t, e, i, n) {
            l(t, function (o) {
                return o.zoomGetRange(t.controller, e, i, n)
            })
        }

        function l(t, e) {
            var i = [];
            h.each(t.dataZoomInfos, function (t) {
                var n = e(t);
                n && i.push({dataZoomId: t.dataZoomId, start: n[0], end: n[1]})
            }), t.dispatchAction(i)
        }

        function u(t, e) {
            t.dispatchAction({type: "dataZoom", batch: e})
        }

        var h = i(1), c = i(80), d = i(46), f = h.curry, p = "\0_ec_dataZoom_roams", g = {
            register: function (t, e) {
                var i = n(t), a = e.dataZoomId, s = e.coordId;
                h.each(i, function (t, i) {
                    var n = t.dataZoomInfos;
                    n[a] && h.indexOf(e.allCoordIds, s) < 0 && (delete n[a], t.count--)
                }), r(i);
                var l = i[s];
                l || (l = i[s] = {
                    coordId: s,
                    dataZoomInfos: {},
                    count: 0
                }, l.controller = o(t, e, l), l.dispatchAction = h.curry(u, t)), l.controller.setContainsPoint(e.containsPoint), d.createOrUpdate(l, "dispatchAction", e.throttleRate, "fixRate"), !l.dataZoomInfos[a] && l.count++, l.dataZoomInfos[a] = e
            }, unregister: function (t, e) {
                var i = n(t);
                h.each(i, function (t) {
                    t.controller.dispose();
                    var i = t.dataZoomInfos;
                    i[e] && (delete i[e], t.count--)
                }), r(i)
            }, shouldRecordRange: function (t, e) {
                if (t && "dataZoom" === t.type && t.batch)for (var i = 0, n = t.batch.length; i < n; i++)if (t.batch[i].dataZoomId === e)return !1;
                return !0
            }, generateCoordId: function (t) {
                return t.type + "\0_" + t.id
            }
        };
        t.exports = g
    }, function (t, e, i) {
        i(112), i(40), i(41), i(183), i(184), i(109), i(108)
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var o = i.type, r = h[o.charAt(0).toUpperCase() + o.slice(1)], a = new r(i);
            e.add(a), n[t] = a, a.__ecGraphicId = t
        }

        function o(t, e) {
            var i = t && t.parent;
            i && ("group" === t.type && t.traverse(function (t) {
                o(t, e)
            }), delete e[t.__ecGraphicId], i.remove(t))
        }

        function r(t) {
            return t = l.extend({}, t), l.each(["id", "parentId", "$action", "hv", "bounding"].concat(c.LOCATION_PARAMS), function (e) {
                delete t[e]
            }), t
        }

        function a(t, e) {
            var i;
            return l.each(e, function (e) {
                null != t[e] && "auto" !== t[e] && (i = !0)
            }), i
        }

        var s = i(2), l = i(1), u = i(6), h = i(3), c = (i(9), i(12));
        s.registerPreprocessor(function (t) {
            var e = t && t.graphic;
            l.isArray(e) ? e[0] && e[0].elements ? t.graphic = [t.graphic[0]] : t.graphic = [{elements: e}] : e && !e.elements && (t.graphic = [{elements: [e]}])
        });
        var d = s.extendComponentModel({
            type: "graphic",
            defaultOption: {elements: [], parentId: null},
            _elOptionsToUpdate: null,
            mergeOption: function (t) {
                var e = this.option.elements;
                this.option.elements = null, d.superApply(this, "mergeOption", arguments), this.option.elements = e
            },
            optionUpdated: function (t, e) {
                var i = this.option, n = (e ? i : t).elements, o = i.elements = e ? [] : i.elements, r = [];
                this._flatten(n, r);
                var s = u.mappingToExists(o, r);
                u.makeIdAndName(s);
                var h = this._elOptionsToUpdate = [];
                l.each(s, function (t, e) {
                    var i = t.exist, n = t.option;
                    if (n) {
                        n.id = t.keyInfo.id;
                        var r = n.parentId, s = n.parentOption, u = i && i.parentId;
                        !n.type && i && (n.type = i.type), n.parentId = r ? r : s ? s.id : u ? u : null, n.parentOption = null, h.push(n);
                        var d = l.extend({}, n), f = n.$action;
                        if (f && "merge" !== f)"replace" === f ? o[e] = d : "remove" === f && i && (o[e] = null); else if (i) {
                            l.merge(i, d, !0), c.mergeLayoutParam(i, d, {ignoreSize: !0}), c.copyLayoutParams(n, i)
                        } else o[e] = d;
                        o[e] && (o[e].hv = n.hv = [a(n, ["left", "right"]), a(n, ["top", "bottom"])], "group" === o[e].type && (null == o[e].width && (o[e].width = n.width = 0), null == o[e].height && (o[e].height = n.height = 0)))
                    }
                }, this);
                for (var d = o.length - 1; d >= 0; d--)null == o[d] ? o.splice(d, 1) : delete o[d].$action
            },
            _flatten: function (t, e, i) {
                l.each(t, function (t) {
                    if (t) {
                        i && (t.parentOption = i), e.push(t);
                        var n = t.children;
                        "group" === t.type && n && this._flatten(n, e, t), delete t.children
                    }
                }, this)
            },
            useElOptionsToUpdate: function () {
                var t = this._elOptionsToUpdate;
                return this._elOptionsToUpdate = null, t
            }
        });
        s.extendComponentView({
            type: "graphic", init: function (t, e) {
                this._elMap = {}, this._lastGraphicModel
            }, render: function (t, e, i) {
                t !== this._lastGraphicModel && this._clear(), this._lastGraphicModel = t, this._updateElements(t, i), this._relocate(t, i)
            }, _updateElements: function (t, e) {
                var i = t.useElOptionsToUpdate();
                if (i) {
                    var a = this._elMap, s = this.group;
                    l.each(i, function (t) {
                        var e = t.$action, i = t.id, u = a[i], h = t.parentId, c = null != h ? a[h] : s;
                        t.hv && t.hv[1] && "text" === t.type && (t.style = l.defaults({textBaseline: "middle"}, t.style), t.style.textVerticalAlign = null);
                        var d = r(t);
                        e && "merge" !== e ? "replace" === e ? (o(u, a), n(i, c, d, a)) : "remove" === e && o(u, a) : u ? u.attr(d) : n(i, c, d, a), a[i] && (a[i].__ecGraphicWidth = t.width, a[i].__ecGraphicHeight = t.height)
                    })
                }
            }, _relocate: function (t, e) {
                for (var i = t.option.elements, n = this.group, o = this._elMap, r = i.length - 1; r >= 0; r--) {
                    var a = i[r], s = o[a.id];
                    if (s) {
                        var l = s.parent, u = l === n ? {
                            width: e.getWidth(),
                            height: e.getHeight()
                        } : {width: l.__ecGraphicWidth || 0, height: l.__ecGraphicHeight || 0};
                        c.positionElement(s, a, u, null, {hv: a.hv, boundingMode: a.bounding})
                    }
                }
            }, _clear: function () {
                var t = this._elMap;
                l.each(t, function (e) {
                    o(e, t)
                }), this._elMap = {}
            }, dispose: function () {
                this._clear()
            }
        })
    }, function (t, e, i) {
        i(191), i(193), i(192);
        var n = i(2);
        n.registerProcessor(i(194))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(10), r = i(2).extendComponentModel({
            type: "legend",
            dependencies: ["series"],
            layoutMode: {type: "box", ignoreSize: !0},
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}
            },
            mergeOption: function (t) {
                r.superCall(this, "mergeOption", t)
            },
            optionUpdated: function () {
                this._updateData(this.ecModel);
                var t = this._data;
                if (t[0] && "single" === this.get("selectedMode")) {
                    for (var e = !1, i = 0; i < t.length; i++) {
                        var n = t[i].get("name");
                        if (this.isSelected(n)) {
                            this.select(n), e = !0;
                            break
                        }
                    }
                    !e && this.select(t[0].get("name"))
                }
            },
            _updateData: function (t) {
                var e = n.map(this.get("data") || [], function (t) {
                    return "string" != typeof t && "number" != typeof t || (t = {name: t}), new o(t, this, this.ecModel)
                }, this);
                this._data = e;
                var i = n.map(t.getSeries(), function (t) {
                    return t.name
                });
                t.eachSeries(function (t) {
                    if (t.legendDataProvider) {
                        var e = t.legendDataProvider();
                        i = i.concat(e.mapArray(e.getName))
                    }
                }), this._availableNames = i
            },
            getData: function () {
                return this._data
            },
            select: function (t) {
                var e = this.option.selected, i = this.get("selectedMode");
                if ("single" === i) {
                    var o = this._data;
                    n.each(o, function (t) {
                        e[t.get("name")] = !1
                    })
                }
                e[t] = !0
            },
            unSelect: function (t) {
                "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
            },
            toggleSelected: function (t) {
                var e = this.option.selected;
                e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
            },
            isSelected: function (t) {
                var e = this.option.selected;
                return !(e.hasOwnProperty(t) && !e[t]) && n.indexOf(this._availableNames, t) >= 0
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: "top",
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                inactiveColor: "#ccc",
                textStyle: {color: "#333"},
                selectedMode: !0,
                tooltip: {show: !1}
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            e.dispatchAction({type: "legendToggleSelect", name: t})
        }

        function o(t, e, i) {
            var n = i.getZr().storage.getDisplayList()[0];
            n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                type: "highlight",
                seriesName: t.name,
                name: e
            })
        }

        function r(t, e, i) {
            var n = i.getZr().storage.getDisplayList()[0];
            n && n.useHoverLayer || t.get("legendHoverLink") && i.dispatchAction({
                type: "downplay",
                seriesName: t.name,
                name: e
            })
        }

        var a = i(1), s = i(26), l = i(3), u = i(116), h = a.curry;
        t.exports = i(2).extendComponentView({
            type: "legend", init: function () {
                this._symbolTypeStore = {}
            }, render: function (t, e, i) {
                var s = this.group;
                if (s.removeAll(), t.get("show")) {
                    var c = t.get("selectedMode"), d = t.get("align");
                    "auto" === d && (d = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
                    var f = {};
                    a.each(t.getData(), function (a) {
                        var u = a.get("name");
                        if ("" === u || "\n" === u)return void s.add(new l.Group({newline: !0}));
                        var p = e.getSeriesByName(u)[0];
                        if (!f[u])if (p) {
                            var g = p.getData(), m = g.getVisual("color");
                            "function" == typeof m && (m = m(p.getDataParams(0)));
                            var v = g.getVisual("legendSymbol") || "roundRect", y = g.getVisual("symbol"), x = this._createItem(u, a, t, v, y, d, m, c);
                            x.on("click", h(n, u, i)).on("mouseover", h(o, p, null, i)).on("mouseout", h(r, p, null, i)), f[u] = !0
                        } else e.eachRawSeries(function (e) {
                            if (!f[u] && e.legendDataProvider) {
                                var s = e.legendDataProvider(), l = s.indexOfName(u);
                                if (l < 0)return;
                                var p = s.getItemVisual(l, "color"), g = "roundRect", m = this._createItem(u, a, t, g, null, d, p, c);
                                m.on("click", h(n, u, i)).on("mouseover", h(o, e, u, i)).on("mouseout", h(r, e, u, i)), f[u] = !0
                            }
                        }, this)
                    }, this), u.layout(s, t, i), u.addBackground(s, t)
                }
            }, _createItem: function (t, e, i, n, o, r, u, h) {
                var c = i.get("itemWidth"), d = i.get("itemHeight"), f = i.get("inactiveColor"), p = i.isSelected(t), g = new l.Group, m = e.getModel("textStyle"), v = e.get("icon"), y = e.getModel("tooltip"), x = y.parentModel;
                if (n = v || n, g.add(s.createSymbol(n, 0, 0, c, d, p ? u : f)), !v && o && (o !== n || "none" == o)) {
                    var _ = .8 * d;
                    "none" === o && (o = "circle"), g.add(s.createSymbol(o, (c - _) / 2, (d - _) / 2, _, _, p ? u : f))
                }
                var b = "left" === r ? c + 5 : -5, w = r, S = i.get("formatter"), M = t;
                "string" == typeof S && S ? M = S.replace("{name}", null != t ? t : "") : "function" == typeof S && (M = S(t));
                var T = new l.Text({
                    style: {
                        text: M,
                        x: b,
                        y: d / 2,
                        fill: p ? m.getTextColor() : f,
                        textFont: m.getFont(),
                        textAlign: w,
                        textVerticalAlign: "middle"
                    }
                });
                g.add(T);
                var I = new l.Rect({
                    shape: g.getBoundingRect(),
                    invisible: !0,
                    tooltip: y.get("show") ? a.extend({
                        content: t,
                        formatter: x.get("formatter", !0) || function () {
                            return t
                        },
                        formatterParams: {
                            componentType: "legend",
                            legendIndex: i.componentIndex,
                            name: t,
                            $vars: ["name"]
                        }
                    }, y.option) : null
                });
                return g.add(I), g.eachChild(function (t) {
                    t.silent = !0
                }), I.silent = !h, this.group.add(g), l.setHoverStyle(g), g
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n, o = {}, a = "toggleSelected" === t;
            return i.eachComponent("legend", function (i) {
                a && null != n ? i[n ? "select" : "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name));
                var s = i.getData();
                r.each(s, function (t) {
                    var e = t.get("name");
                    if ("\n" !== e && "" !== e) {
                        var n = i.isSelected(e);
                        e in o ? o[e] = o[e] && n : o[e] = n
                    }
                })
            }), {name: e.name, selected: o}
        }

        var o = i(2), r = i(1);
        o.registerAction("legendToggleSelect", "legendselectchanged", r.curry(n, "toggleSelected")), o.registerAction("legendSelect", "legendselected", r.curry(n, "select")), o.registerAction("legendUnSelect", "legendunselected", r.curry(n, "unSelect"))
    }, function (t, e) {
        t.exports = function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e.length && t.filterSeries(function (t) {
                for (var i = 0; i < e.length; i++)if (!e[i].isSelected(t.name))return !1;
                return !0
            })
        }
    }, function (t, e, i) {
        i(198), i(199), i(2).registerPreprocessor(function (t) {
            t.markArea = t.markArea || {}
        })
    }, function (t, e, i) {
        i(200), i(201), i(2).registerPreprocessor(function (t) {
            t.markLine = t.markLine || {}
        })
    }, function (t, e, i) {
        i(202), i(203), i(2).registerPreprocessor(function (t) {
            t.markPoint = t.markPoint || {}
        })
    }, function (t, e, i) {
        t.exports = i(68).extend({
            type: "markArea",
            defaultOption: {
                zlevel: 0,
                z: 1,
                tooltip: {trigger: "item"},
                animation: !1,
                label: {normal: {show: !0, position: "top"}, emphasis: {show: !0, position: "top"}},
                itemStyle: {normal: {borderWidth: 0}}
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return !isNaN(t) && !isFinite(t)
        }

        function o(t, e, i, o) {
            var r = 1 - t;
            return n(e[r]) && n(i[r])
        }

        function r(t, e) {
            var i = e.coord[0], n = e.coord[1];
            return !("cartesian2d" !== t.type || !i || !n || !o(1, i, n, t) && !o(0, i, n, t)) || (f.dataFilter(t, {
                    coord: i,
                    x: e.x0,
                    y: e.y0
                }) || f.dataFilter(t, {coord: n, x: e.x1, y: e.y1}))
        }

        function a(t, e, i, o, r) {
            var a, s = o.coordinateSystem, l = t.getItemModel(e), u = h.parsePercent(l.get(i[0]), r.getWidth()), c = h.parsePercent(l.get(i[1]), r.getHeight());
            if (isNaN(u) || isNaN(c)) {
                if (o.getMarkerPosition)a = o.getMarkerPosition(t.getValues(i, e)); else {
                    var d = t.get(i[0], e), f = t.get(i[1], e);
                    a = s.dataToPoint([d, f], !0)
                }
                if ("cartesian2d" === s.type) {
                    var p = s.getAxis("x"), g = s.getAxis("y"), d = t.get(i[0], e), f = t.get(i[1], e);
                    n(d) ? a[0] = p.toGlobalCoord(p.getExtent()["x0" === i[0] ? 0 : 1]) : n(f) && (a[1] = g.toGlobalCoord(g.getExtent()["y0" === i[1] ? 0 : 1]))
                }
                isNaN(u) || (a[0] = u), isNaN(c) || (a[1] = c)
            } else a = [u, c];
            return a
        }

        function s(t, e, i) {
            var n, o, a = ["x0", "y0", "x1", "y1"];
            t ? (n = l.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }), o = new u(l.map(a, function (t, e) {
                return {name: t, type: n[e % 2].type}
            }), i)) : (n = [{name: "value", type: "float"}], o = new u(n, i));
            var s = l.map(i.get("data"), l.curry(p, e, t, i));
            t && (s = l.filter(s, l.curry(r, t)));
            var h = t ? function (t, e, i, n) {
                return t.coord[Math.floor(n / 2)][n % 2]
            } : function (t) {
                return t.value
            };
            return o.initData(s, null, h), o.hasItemOption = !0, o
        }

        var l = i(1), u = i(14), h = i(4), c = i(3), d = i(18), f = i(70), p = function (t, e, i, n) {
            var o = f.dataTransform(t, n[0]), r = f.dataTransform(t, n[1]), a = l.retrieve, s = o.coord, u = r.coord;
            s[0] = a(s[0], -(1 / 0)), s[1] = a(s[1], -(1 / 0)), u[0] = a(u[0], 1 / 0), u[1] = a(u[1], 1 / 0);
            var h = l.mergeAll([{}, o, r]);
            return h.coord = [o.coord, r.coord], h.x0 = o.x, h.y0 = o.y, h.x1 = r.x, h.y1 = r.y, h
        }, g = [["x0", "y0"], ["x1", "y0"], ["x1", "y1"], ["x0", "y1"]];
        i(69).extend({
            type: "markArea", updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markAreaModel;
                    if (e) {
                        var n = e.getData();
                        n.each(function (e) {
                            var o = l.map(g, function (o) {
                                return a(n, e, o, t, i)
                            });
                            n.setItemLayout(e, o);
                            var r = n.getItemGraphicEl(e);
                            r.setShape("points", o)
                        })
                    }
                }, this)
            }, renderSeries: function (t, e, i, n) {
                var o = t.coordinateSystem, r = t.name, u = t.getData(), h = this.markerGroupMap, f = h[r];
                f || (f = h[r] = {group: new c.Group}), this.group.add(f.group), f.__keep = !0;
                var p = s(o, t, e);
                e.setData(p), p.each(function (e) {
                    p.setItemLayout(e, l.map(g, function (i) {
                        return a(p, e, i, t, n)
                    })), p.setItemVisual(e, {color: u.getVisual("color")})
                }), p.diff(f.__data).add(function (t) {
                    var e = new c.Polygon({shape: {points: p.getItemLayout(t)}});
                    p.setItemGraphicEl(t, e), f.group.add(e)
                }).update(function (t, i) {
                    var n = f.__data.getItemGraphicEl(i);
                    c.updateProps(n, {shape: {points: p.getItemLayout(t)}}, e, t), f.group.add(n), p.setItemGraphicEl(t, n)
                }).remove(function (t) {
                    var e = f.__data.getItemGraphicEl(t);
                    f.group.remove(e)
                }).execute(), p.eachItemGraphicEl(function (t, i) {
                    var n = p.getItemModel(i), o = n.getModel("label.normal"), r = n.getModel("label.emphasis"), a = p.getItemVisual(i, "color");
                    t.useStyle(l.defaults(n.getModel("itemStyle.normal").getItemStyle(), {
                        fill: d.modifyAlpha(a, .4),
                        stroke: a
                    })), t.hoverStyle = n.getModel("itemStyle.normal").getItemStyle();
                    var s = p.getName(i) || "", u = a || t.style.fill;
                    c.setText(t.style, o, u), t.style.text = l.retrieve(e.getFormattedLabel(i, "normal"), s), c.setText(t.hoverStyle, r, u), t.hoverStyle.text = l.retrieve(e.getFormattedLabel(i, "emphasis"), s), c.setHoverStyle(t, {}), t.dataModel = e
                }), f.__data = p, f.group.silent = e.get("silent") || t.get("silent")
            }
        })
    }, function (t, e, i) {
        t.exports = i(68).extend({
            type: "markLine",
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: ["circle", "arrow"],
                symbolSize: [8, 16],
                precision: 2,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "end"}, emphasis: {show: !0}},
                lineStyle: {normal: {type: "dashed"}, emphasis: {width: 3}},
                animationEasing: "linear"
            }
        })
    }, function (t, e, i) {
        function n(t) {
            return !isNaN(t) && !isFinite(t)
        }

        function o(t, e, i, o) {
            var r = 1 - t, a = o.dimensions[t];
            return n(e[r]) && n(i[r]) && e[t] === i[t] && o.getAxis(a).containData(e[t])
        }

        function r(t, e) {
            if ("cartesian2d" === t.type) {
                var i = e[0].coord, n = e[1].coord;
                if (i && n && (o(1, i, n, t) || o(0, i, n, t)))return !0
            }
            return c.dataFilter(t, e[0]) && c.dataFilter(t, e[1])
        }

        function a(t, e, i, o, r) {
            var a, s = o.coordinateSystem, l = t.getItemModel(e), u = h.parsePercent(l.get("x"), r.getWidth()), c = h.parsePercent(l.get("y"), r.getHeight());
            if (isNaN(u) || isNaN(c)) {
                if (o.getMarkerPosition)a = o.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                    var d = s.dimensions, f = t.get(d[0], e), p = t.get(d[1], e);
                    a = s.dataToPoint([f, p])
                }
                if ("cartesian2d" === s.type) {
                    var g = s.getAxis("x"), m = s.getAxis("y"), d = s.dimensions;
                    n(t.get(d[0], e)) ? a[0] = g.toGlobalCoord(g.getExtent()[i ? 0 : 1]) : n(t.get(d[1], e)) && (a[1] = m.toGlobalCoord(m.getExtent()[i ? 0 : 1]))
                }
                isNaN(u) || (a[0] = u), isNaN(c) || (a[1] = c)
            } else a = [u, c];
            t.setItemLayout(e, a)
        }

        function s(t, e, i) {
            var n;
            n = t ? l.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var o = new u(n, i), a = new u(n, i), s = new u([], i), h = l.map(i.get("data"), l.curry(f, e, t, i));
            t && (h = l.filter(h, l.curry(r, t)));
            var d = t ? c.dimValueGetter : function (t) {
                return t.value
            };
            return o.initData(l.map(h, function (t) {
                return t[0]
            }), null, d), a.initData(l.map(h, function (t) {
                return t[1]
            }), null, d), s.initData(l.map(h, function (t) {
                return t[2]
            })), s.hasItemOption = !0, {from: o, to: a, line: s}
        }

        var l = i(1), u = i(14), h = i(4), c = i(70), d = i(95), f = function (t, e, i, n) {
            var o = t.getData(), r = n.type;
            if (!l.isArray(n) && ("min" === r || "max" === r || "average" === r || null != n.xAxis || null != n.yAxis)) {
                var a, s, u;
                if (null != n.yAxis || null != n.xAxis)s = null != n.yAxis ? "y" : "x", a = e.getAxis(s), u = l.retrieve(n.yAxis, n.xAxis); else {
                    var h = c.getAxisInfo(n, o, e, t);
                    s = h.valueDataDim, a = h.valueAxis, u = c.numCalculate(o, s, r)
                }
                var d = "x" === s ? 0 : 1, f = 1 - d, p = l.clone(n), g = {};
                p.type = null, p.coord = [], g.coord = [], p.coord[f] = -(1 / 0), g.coord[f] = 1 / 0;
                var m = i.get("precision");
                m >= 0 && "number" == typeof u && (u = +u.toFixed(m)), p.coord[d] = g.coord[d] = u, n = [p, g, {
                    type: r,
                    valueIndex: n.valueIndex,
                    value: u
                }]
            }
            return n = [c.dataTransform(t, n[0]), c.dataTransform(t, n[1]), l.extend({}, n[2])], n[2].type = n[2].type || "", l.merge(n[2], n[0]), l.merge(n[2], n[1]), n
        };
        i(69).extend({
            type: "markLine", updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markLineModel;
                    if (e) {
                        var n = e.getData(), o = e.__from, r = e.__to;
                        o.each(function (e) {
                            a(o, e, !0, t, i), a(r, e, !1, t, i)
                        }), n.each(function (t) {
                            n.setItemLayout(t, [o.getItemLayout(t), r.getItemLayout(t)])
                        }), this.markerGroupMap[t.name].updateLayout()
                    }
                }, this)
            }, renderSeries: function (t, e, i, n) {
                function o(e, i, o) {
                    var r = e.getItemModel(i);
                    a(e, i, o, t, n), e.setItemVisual(i, {
                        symbolSize: r.get("symbolSize") || x[o ? 0 : 1],
                        symbol: r.get("symbol", !0) || y[o ? 0 : 1],
                        color: r.get("itemStyle.normal.color") || h.getVisual("color")
                    })
                }

                var r = t.coordinateSystem, u = t.name, h = t.getData(), c = this.markerGroupMap, f = c[u];
                f || (f = c[u] = new d), this.group.add(f.group);
                var p = s(r, t, e), g = p.from, m = p.to, v = p.line;
                e.__from = g, e.__to = m, e.setData(v);
                var y = e.get("symbol"), x = e.get("symbolSize");
                l.isArray(y) || (y = [y, y]), "number" == typeof x && (x = [x, x]), p.from.each(function (t) {
                    o(g, t, !0), o(m, t, !1)
                }), v.each(function (t) {
                    var e = v.getItemModel(t).get("lineStyle.normal.color");
                    v.setItemVisual(t, {color: e || g.getItemVisual(t, "color")}), v.setItemLayout(t, [g.getItemLayout(t), m.getItemLayout(t)]), v.setItemVisual(t, {
                        fromSymbolSize: g.getItemVisual(t, "symbolSize"),
                        fromSymbol: g.getItemVisual(t, "symbol"),
                        toSymbolSize: m.getItemVisual(t, "symbolSize"),
                        toSymbol: m.getItemVisual(t, "symbol")
                    })
                }), f.updateData(v), p.line.eachItemGraphicEl(function (t, i) {
                    t.traverse(function (t) {
                        t.dataModel = e
                    })
                }), f.__keep = !0, f.group.silent = e.get("silent") || t.get("silent")
            }
        })
    }, function (t, e, i) {
        t.exports = i(68).extend({
            type: "markPoint",
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: "pin",
                symbolSize: 50,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "inside"}, emphasis: {show: !0}},
                itemStyle: {normal: {borderWidth: 2}}
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = e.coordinateSystem;
            t.each(function (o) {
                var r, a = t.getItemModel(o), l = s.parsePercent(a.get("x"), i.getWidth()), u = s.parsePercent(a.get("y"), i.getHeight());
                if (isNaN(l) || isNaN(u)) {
                    if (e.getMarkerPosition)r = e.getMarkerPosition(t.getValues(t.dimensions, o)); else if (n) {
                        var h = t.get(n.dimensions[0], o), c = t.get(n.dimensions[1], o);
                        r = n.dataToPoint([h, c])
                    }
                } else r = [l, u];
                isNaN(l) || (r[0] = l), isNaN(u) || (r[1] = u), t.setItemLayout(o, r)
            })
        }

        function o(t, e, i) {
            var n;
            n = t ? a.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var o = new l(n, i), r = a.map(i.get("data"), a.curry(u.dataTransform, e));
            return t && (r = a.filter(r, a.curry(u.dataFilter, t))), o.initData(r, null, t ? u.dimValueGetter : function (t) {
                return t.value
            }), o
        }

        var r = i(39), a = i(1), s = i(4), l = i(14), u = i(70);
        i(69).extend({
            type: "markPoint", updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markPointModel;
                    e && (n(e.getData(), t, i), this.markerGroupMap[t.name].updateLayout(e))
                }, this)
            }, renderSeries: function (t, e, i, a) {
                var s = t.coordinateSystem, l = t.name, u = t.getData(), h = this.markerGroupMap, c = h[l];
                c || (c = h[l] = new r);
                var d = o(s, t, e);
                e.setData(d), n(e.getData(), t, a), d.each(function (t) {
                    var i = d.getItemModel(t), n = i.getShallow("symbolSize");
                    "function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))), d.setItemVisual(t, {
                        symbolSize: n,
                        color: i.get("itemStyle.normal.color") || u.getVisual("color"),
                        symbol: i.getShallow("symbol")
                    })
                }), c.updateData(d), this.group.add(c.group), d.eachItemGraphicEl(function (t) {
                    t.traverse(function (t) {
                        t.dataModel = e
                    })
                }), c.__keep = !0, c.group.silent = e.get("silent") || t.get("silent")
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(2), o = i(3), r = i(12);
        n.extendComponentModel({
            type: "title",
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                zlevel: 0,
                z: 6,
                show: !0,
                text: "",
                target: "blank",
                subtext: "",
                subtarget: "blank",
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                subtextStyle: {color: "#aaa"}
            }
        }), n.extendComponentView({
            type: "title", render: function (t, e, i) {
                if (this.group.removeAll(), t.get("show")) {
                    var n = this.group, a = t.getModel("textStyle"), s = t.getModel("subtextStyle"), l = t.get("textAlign"), u = t.get("textBaseline"), h = new o.Text({
                        style: {
                            text: t.get("text"),
                            textFont: a.getFont(),
                            fill: a.getTextColor()
                        }, z2: 10
                    }), c = h.getBoundingRect(), d = t.get("subtext"), f = new o.Text({
                        style: {
                            text: d,
                            textFont: s.getFont(),
                            fill: s.getTextColor(),
                            y: c.height + t.get("itemGap"),
                            textBaseline: "top"
                        }, z2: 10
                    }), p = t.get("link"), g = t.get("sublink");
                    h.silent = !p, f.silent = !g, p && h.on("click", function () {
                        window.open(p, "_" + t.get("target"))
                    }), g && f.on("click", function () {
                        window.open(g, "_" + t.get("subtarget"))
                    }), n.add(h), d && n.add(f);
                    var m = n.getBoundingRect(), v = t.getBoxLayoutParams();
                    v.width = m.width, v.height = m.height;
                    var y = r.getLayoutRect(v, {width: i.getWidth(), height: i.getHeight()}, t.get("padding"));
                    l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? y.x += y.width : "center" === l && (y.x += y.width / 2)), u || (u = t.get("top") || t.get("bottom"), "center" === u && (u = "middle"), "bottom" === u ? y.y += y.height : "middle" === u && (y.y += y.height / 2), u = u || "top"), n.attr("position", [y.x, y.y]);
                    var x = {textAlign: l, textVerticalAlign: u};
                    h.setStyle(x), f.setStyle(x), m = n.getBoundingRect();
                    var _ = y.margin, b = t.getItemStyle(["color", "opacity"]);
                    b.fill = t.get("backgroundColor");
                    var w = new o.Rect({
                        shape: {
                            x: m.x - _[3],
                            y: m.y - _[0],
                            width: m.width + _[1] + _[3],
                            height: m.height + _[0] + _[2]
                        }, style: b, silent: !0
                    });
                    o.subPixelOptimizeRect(w), n.add(w)
                }
            }
        })
    }, function (t, e, i) {
        i(206), i(207), i(212), i(210), i(208), i(209), i(211)
    }, function (t, e, i) {
        var n = i(25), o = i(1), r = i(2).extendComponentModel({
            type: "toolbox",
            layoutMode: {type: "box", ignoreSize: !0},
            mergeDefaultAndTheme: function (t) {
                r.superApply(this, "mergeDefaultAndTheme", arguments), o.each(this.option.feature, function (t, e) {
                    var i = n.get(e);
                    i && o.merge(t, i.defaultOption)
                })
            },
            defaultOption: {
                show: !0,
                z: 6,
                zlevel: 0,
                orient: "horizontal",
                left: "right",
                top: "top",
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemSize: 15,
                itemGap: 8,
                showTitle: !0,
                iconStyle: {normal: {borderColor: "#666", color: "none"}, emphasis: {borderColor: "#3E98C5"}}
            }
        });
        t.exports = r
    }, function (t, e, i) {
        (function (e) {
            function n(t) {
                return 0 === t.indexOf("my")
            }

            var o = i(25), r = i(1), a = i(3), s = i(10), l = i(45), u = i(116), h = i(16);
            t.exports = i(2).extendComponentView({
                type: "toolbox", render: function (t, e, i, c) {
                    function d(r, a) {
                        var l, u = y[r], h = y[a], d = m[u], p = new s(d, t, t.ecModel);
                        if (u && !h) {
                            if (n(u))l = {model: p, onclick: p.option.onclick, featureName: u}; else {
                                var g = o.get(u);
                                if (!g)return;
                                l = new g(p, e, i)
                            }
                            v[u] = l
                        } else {
                            if (l = v[h], !l)return;
                            l.model = p, l.ecModel = e, l.api = i
                        }
                        return !u && h ? void(l.dispose && l.dispose(e, i)) : !p.get("show") || l.unusable ? void(l.remove && l.remove(e, i)) : (f(p, l, u), p.setIconStatus = function (t, e) {
                            var i = this.option, n = this.iconPaths;
                            i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t].trigger(e)
                        }, void(l.render && l.render(p, e, i, c)))
                    }

                    function f(n, o, s) {
                        var l = n.getModel("iconStyle"), u = o.getIcons ? o.getIcons() : n.get("icon"), h = n.get("title") || {};
                        if ("string" == typeof u) {
                            var c = u, d = h;
                            u = {}, h = {}, u[s] = c, h[s] = d
                        }
                        var f = n.iconPaths = {};
                        r.each(u, function (s, u) {
                            var c = l.getModel("normal").getItemStyle(), d = l.getModel("emphasis").getItemStyle(), m = {
                                x: -g / 2,
                                y: -g / 2,
                                width: g,
                                height: g
                            }, v = 0 === s.indexOf("image://") ? (m.image = s.slice(8), new a.Image({style: m})) : a.makePath(s.replace("path://", ""), {
                                style: c,
                                hoverStyle: d,
                                rectHover: !0
                            }, m, "center");
                            a.setHoverStyle(v), t.get("showTitle") && (v.__title = h[u], v.on("mouseover", function () {
                                var t = l.getModel("emphasis").getItemStyle();
                                v.setStyle({
                                    text: h[u],
                                    textPosition: t.textPosition || "bottom",
                                    textFill: t.fill || t.stroke || "#000",
                                    textAlign: t.textAlign || "center"
                                })
                            }).on("mouseout", function () {
                                v.setStyle({textFill: null})
                            })), v.trigger(n.get("iconStatus." + u) || "normal"), p.add(v), v.on("click", r.bind(o.onclick, o, e, i, u)), f[u] = v
                        })
                    }

                    var p = this.group;
                    if (p.removeAll(), t.get("show")) {
                        var g = +t.get("itemSize"), m = t.get("feature") || {}, v = this._features || (this._features = {}), y = [];
                        r.each(m, function (t, e) {
                            y.push(e)
                        }), new l(this._featureNames || [], y).add(d).update(d).remove(r.curry(d, null)).execute(), this._featureNames = y, u.layout(p, t, i), u.addBackground(p, t), p.eachChild(function (t) {
                            var e = t.__title, n = t.hoverStyle;
                            if (n && e) {
                                var o = h.getBoundingRect(e, n.font), r = t.position[0] + p.position[0], a = t.position[1] + p.position[1] + g, s = !1;
                                a + o.height > i.getHeight() && (n.textPosition = "top", s = !0);
                                var l = s ? -5 - o.height : g + 8;
                                r + o.width / 2 > i.getWidth() ? (n.textPosition = ["100%", l], n.textAlign = "right") : r - o.width / 2 < 0 && (n.textPosition = [0, l], n.textAlign = "left")
                            }
                        })
                    }
                }, updateView: function (t, e, i, n) {
                    r.each(this._features, function (t) {
                        t.updateView && t.updateView(t.model, e, i, n)
                    })
                }, updateLayout: function (t, e, i, n) {
                    r.each(this._features, function (t) {
                        t.updateLayout && t.updateLayout(t.model, e, i, n)
                    })
                }, remove: function (t, e) {
                    r.each(this._features, function (i) {
                        i.remove && i.remove(t, e)
                    }), this.group.removeAll()
                }, dispose: function (t, e) {
                    r.each(this._features, function (i) {
                        i.dispose && i.dispose(t, e)
                    })
                }
            })
        }).call(e, i(218))
    }, function (t, e, i) {
        function n(t) {
            var e = {}, i = [], n = [];
            return t.eachRawSeries(function (t) {
                var o = t.coordinateSystem;
                if (!o || "cartesian2d" !== o.type && "polar" !== o.type)i.push(t); else {
                    var r = o.getBaseAxis();
                    if ("category" === r.type) {
                        var a = r.dim + "_" + r.index;
                        e[a] || (e[a] = {
                            categoryAxis: r,
                            valueAxis: o.getOtherAxis(r),
                            series: []
                        }, n.push({axisDim: r.dim, axisIndex: r.index})), e[a].series.push(t)
                    } else i.push(t)
                }
            }), {seriesGroupByCategoryAxis: e, other: i, meta: n}
        }

        function o(t) {
            var e = [];
            return p.each(t, function (t, i) {
                var n = t.categoryAxis, o = t.valueAxis, r = o.dim, a = [" "].concat(p.map(t.series, function (t) {
                    return t.name
                })), s = [n.model.getCategories()];
                p.each(t.series, function (t) {
                    s.push(t.getRawData().mapArray(r, function (t) {
                        return t
                    }))
                });
                for (var l = [a.join(v)], u = 0; u < s[0].length; u++) {
                    for (var h = [], c = 0; c < s.length; c++)h.push(s[c][u]);
                    l.push(h.join(v))
                }
                e.push(l.join("\n"))
            }), e.join("\n\n" + m + "\n\n")
        }

        function r(t) {
            return p.map(t, function (t) {
                var e = t.getRawData(), i = [t.name], n = [];
                return e.each(e.dimensions, function () {
                    for (var t = arguments.length, o = arguments[t - 1], r = e.getName(o), a = 0; a < t - 1; a++)n[a] = arguments[a];
                    i.push((r ? r + v : "") + n.join(v))
                }), i.join("\n")
            }).join("\n\n" + m + "\n\n")
        }

        function a(t) {
            var e = n(t);
            return {
                value: p.filter([o(e.seriesGroupByCategoryAxis), r(e.other)], function (t) {
                    return t.replace(/[\n\t\s]/g, "")
                }).join("\n\n" + m + "\n\n"), meta: e.meta
            }
        }

        function s(t) {
            return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function l(t) {
            var e = t.slice(0, t.indexOf("\n"));
            if (e.indexOf(v) >= 0)return !0
        }

        function u(t) {
            for (var e = t.split(/\n+/g), i = s(e.shift()).split(y), n = [], o = p.map(i, function (t) {
                return {name: t, data: []}
            }), r = 0; r < e.length; r++) {
                var a = s(e[r]).split(y);
                n.push(a.shift());
                for (var l = 0; l < a.length; l++)o[l] && (o[l].data[r] = a[l])
            }
            return {series: o, categories: n}
        }

        function h(t) {
            for (var e = t.split(/\n+/g), i = s(e.shift()), n = [], o = 0; o < e.length; o++) {
                var r, a = s(e[o]).split(y), l = "", u = !1;
                isNaN(a[0]) ? (u = !0, l = a[0], a = a.slice(1), n[o] = {
                    name: l,
                    value: []
                }, r = n[o].value) : r = n[o] = [];
                for (var h = 0; h < a.length; h++)r.push(+a[h]);
                1 === r.length && (u ? n[o].value = r[0] : n[o] = r[0])
            }
            return {name: i, data: n}
        }

        function c(t, e) {
            var i = t.split(new RegExp("\n*" + m + "\n*", "g")), n = {series: []};
            return p.each(i, function (t, i) {
                if (l(t)) {
                    var o = u(t), r = e[i], a = r.axisDim + "Axis";
                    r && (n[a] = n[a] || [], n[a][r.axisIndex] = {data: o.categories}, n.series = n.series.concat(o.series))
                } else {
                    var o = h(t);
                    n.series.push(o)
                }
            }), n
        }

        function d(t) {
            this._dom = null, this.model = t
        }

        function f(t, e) {
            return p.map(t, function (t, i) {
                var n = e && e[i];
                return p.isObject(n) && !p.isArray(n) ? (p.isObject(t) && !p.isArray(t) && (t = t.value), p.defaults({value: t}, n)) : t
            })
        }

        var p = i(1), g = i(24), m = new Array(60).join("-"), v = "\t", y = new RegExp("[" + v + "]+", "g");
        d.defaultOption = {
            show: !0,
            readOnly: !1,
            optionToContent: null,
            contentToOption: null,
            icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
            title: "数据视图",
            lang: ["数据视图", "关闭", "刷新"],
            backgroundColor: "#fff",
            textColor: "#000",
            textareaColor: "#fff",
            textareaBorderColor: "#333",
            buttonColor: "#c23531",
            buttonTextColor: "#fff"
        }, d.prototype.onclick = function (t, e) {
            function i() {
                n.removeChild(r), M._dom = null
            }

            var n = e.getDom(), o = this.model;
            this._dom && n.removeChild(this._dom);
            var r = document.createElement("div");
            r.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", r.style.backgroundColor = o.get("backgroundColor") || "#fff";
            var s = document.createElement("h4"), l = o.get("lang") || [];
            s.innerHTML = l[0] || o.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = o.get("textColor");
            var u = document.createElement("div"), h = document.createElement("textarea");
            u.style.cssText = "display:block;width:100%;overflow:hidden;";
            var d = o.get("optionToContent"), f = o.get("contentToOption"), m = a(t);
            if ("function" == typeof d) {
                var y = d(e.getOption());
                "string" == typeof y ? u.innerHTML = y : p.isDom(y) && u.appendChild(y)
            } else u.appendChild(h), h.readOnly = o.get("readOnly"), h.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", h.style.color = o.get("textColor"), h.style.borderColor = o.get("textareaBorderColor"), h.style.backgroundColor = o.get("textareaColor"), h.value = m.value;
            var x = m.meta, _ = document.createElement("div");
            _.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
            var b = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px", w = document.createElement("div"), S = document.createElement("div");
            b += ";background-color:" + o.get("buttonColor"), b += ";color:" + o.get("buttonTextColor");
            var M = this;
            g.addEventListener(w, "click", i), g.addEventListener(S, "click", function () {
                var t;
                try {
                    t = "function" == typeof f ? f(u, e.getOption()) : c(h.value, x)
                } catch (n) {
                    throw i(), new Error("Data view format error " + n)
                }
                t && e.dispatchAction({type: "changeDataView", newOption: t}), i()
            }), w.innerHTML = l[1], S.innerHTML = l[2], S.style.cssText = b, w.style.cssText = b, !o.get("readOnly") && _.appendChild(S), _.appendChild(w), g.addEventListener(h, "keydown", function (t) {
                if (9 === (t.keyCode || t.which)) {
                    var e = this.value, i = this.selectionStart, n = this.selectionEnd;
                    this.value = e.substring(0, i) + v + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, g.stop(t)
                }
            }), r.appendChild(s), r.appendChild(u), r.appendChild(_), u.style.height = n.clientHeight - 80 + "px", n.appendChild(r), this._dom = r
        }, d.prototype.remove = function (t, e) {
            this._dom && e.getDom().removeChild(this._dom)
        }, d.prototype.dispose = function (t, e) {
            this.remove(t, e)
        }, i(25).register("dataView", d), i(2).registerAction({
            type: "changeDataView",
            event: "dataViewChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            var i = [];
            p.each(t.newOption.series, function (t) {
                var n = e.getSeriesByName(t.name)[0];
                if (n) {
                    var o = n.get("data");
                    i.push({name: t.name, data: f(t.data, o)})
                } else i.push(p.extend({type: "scatter"}, t))
            }), e.mergeOption(p.defaults({series: i}, t.newOption))
        }), t.exports = d
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            (this._brushController = new l(i.getZr())).on("brush", s.bind(this._onBrush, this)).mount(), this._isZoomActive
        }

        function o(t) {
            var e = {};
            return s.each(["xAxisIndex", "yAxisIndex"], function (i) {
                e[i] = t[i], null == e[i] && (e[i] = "all"), (e[i] === !1 || "none" === e[i]) && (e[i] = [])
            }), e
        }

        function r(t, e) {
            t.setIconStatus("back", h.count(e) > 1 ? "emphasis" : "normal")
        }

        function a(t, e, i, n) {
            var r = i._isZoomActive;
            n && "takeGlobalCursor" === n.type && (r = "dataZoomSelect" === n.key && n.dataZoomSelectActive), i._isZoomActive = r, t.setIconStatus("zoom", r ? "emphasis" : "normal");
            var a = u.makeCoordInfoList(o(t.option), e), s = a.xAxisHas && !a.yAxisHas ? "lineX" : !a.xAxisHas && a.yAxisHas ? "lineY" : "rect";
            i._brushController.setPanels(u.makePanelOpts(a)).enableBrush(!!r && {
                    brushType: s,
                    brushStyle: {lineWidth: 0, fill: "rgba(0,0,0,0.2)"}
                })
        }

        var s = i(1), l = i(113), u = i(114), h = i(111), c = s.each;
        i(188);
        var d = "\0_ec_\0toolbox-dataZoom_";
        n.defaultOption = {
            show: !0,
            icon: {
                zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
                back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
            },
            title: {zoom: "区域缩放", back: "区域缩放还原"}
        };
        var f = n.prototype;
        f.render = function (t, e, i, n) {
            this.model = t, this.ecModel = e, this.api = i, a(t, e, this, n), r(t, e)
        }, f.onclick = function (t, e, i) {
            p[i].call(this)
        }, f.remove = function (t, e) {
            this._brushController.unmount()
        }, f.dispose = function (t, e) {
            this._brushController.dispose()
        };
        var p = {
            zoom: function () {
                var t = !this._isZoomActive;
                this.api.dispatchAction({type: "takeGlobalCursor", key: "dataZoomSelect", dataZoomSelectActive: t})
            }, back: function () {
                this._dispatchZoomAction(h.pop(this.ecModel))
            }
        };
        f._onBrush = function (t, e) {
            function i(t, e, i) {
                var o = n(t, i[t], a);
                o && (r[o.id] = {dataZoomId: o.id, startValue: e[0], endValue: e[1]})
            }

            function n(t, e, i) {
                var n;
                return i.eachComponent({mainType: "dataZoom", subType: "select"}, function (o, r) {
                    var a = o.get(t + "Index");
                    null != a && i.getComponent(t, a) === e && (n = o)
                }), n
            }

            if (e.isEnd && t.length) {
                var r = {}, a = this.ecModel;
                this._brushController.updateCovers([]);
                var s = u.makeCoordInfoList(o(this.model.option), a), l = [];
                u.parseOutputRanges(t, s, a, l);
                var c = t[0], d = l[0], f = c.coordRange, p = c.brushType;
                if (d && f)if ("rect" === p)i("xAxis", f[0], d), i("yAxis", f[1], d); else {
                    var g = {lineX: "xAxis", lineY: "yAxis"};
                    i(g[p], f, d)
                }
                h.push(a, r), this._dispatchZoomAction(r)
            }
        }, f._dispatchZoomAction = function (t) {
            var e = [];
            c(t, function (t, i) {
                e.push(s.clone(t))
            }), e.length && this.api.dispatchAction({type: "dataZoom", from: this.uid, batch: e})
        }, i(25).register("dataZoom", n), i(2).registerPreprocessor(function (t) {
            function e(t, e) {
                if (e) {
                    var o = t + "Index", r = e[o];
                    null == r || "all" == r || s.isArray(r) || (r = r === !1 || "none" === r ? [] : [r]), i(t, function (e, i) {
                        if (null == r || "all" == r || s.indexOf(r, i) !== -1) {
                            var a = {type: "select", $fromToolbox: !0, id: d + t + i};
                            a[o] = i, n.push(a)
                        }
                    })
                }
            }

            function i(e, i) {
                var n = t[e];
                s.isArray(n) || (n = n ? [n] : []), c(n, i)
            }

            if (t) {
                var n = t.dataZoom || (t.dataZoom = []);
                s.isArray(n) || (t.dataZoom = n = [n]);
                var o = t.toolbox;
                if (o && (s.isArray(o) && (o = o[0]), o && o.feature)) {
                    var r = o.feature.dataZoom;
                    e("xAxis", r), e("yAxis", r)
                }
            }
        }), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t
        }

        var o = i(1);
        n.defaultOption = {
            show: !0,
            type: [],
            icon: {
                line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
                bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
                stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
                tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
            },
            title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"},
            option: {},
            seriesIndex: {}
        };
        var r = n.prototype;
        r.getIcons = function () {
            var t = this.model, e = t.get("icon"), i = {};
            return o.each(t.get("type"), function (t) {
                e[t] && (i[t] = e[t])
            }), i
        };
        var a = {
            line: function (t, e, i, n) {
                if ("bar" === t)return o.merge({
                    id: e,
                    type: "line",
                    data: i.get("data"),
                    stack: i.get("stack"),
                    markPoint: i.get("markPoint"),
                    markLine: i.get("markLine")
                }, n.get("option.line") || {}, !0)
            }, bar: function (t, e, i, n) {
                if ("line" === t)return o.merge({
                    id: e,
                    type: "bar",
                    data: i.get("data"),
                    stack: i.get("stack"),
                    markPoint: i.get("markPoint"),
                    markLine: i.get("markLine")
                }, n.get("option.bar") || {}, !0)
            }, stack: function (t, e, i, n) {
                if ("line" === t || "bar" === t)return o.merge({
                    id: e,
                    stack: "__ec_magicType_stack__"
                }, n.get("option.stack") || {}, !0)
            }, tiled: function (t, e, i, n) {
                if ("line" === t || "bar" === t)return o.merge({id: e, stack: ""}, n.get("option.tiled") || {}, !0)
            }
        }, s = [["line", "bar"], ["stack", "tiled"]];
        r.onclick = function (t, e, i) {
            var n = this.model, r = n.get("seriesIndex." + i);
            if (a[i]) {
                var l = {series: []}, u = function (e) {
                    var r = e.subType, s = e.id, u = a[i](r, s, e, n);
                    u && (o.defaults(u, e.option), l.series.push(u));
                    var h = e.coordinateSystem;
                    if (h && "cartesian2d" === h.type && ("line" === i || "bar" === i)) {
                        var c = h.getAxesByScale("ordinal")[0];
                        if (c) {
                            var d = c.dim, f = d + "Axis", p = t.queryComponents({
                                mainType: f,
                                index: e.get(name + "Index"),
                                id: e.get(name + "Id")
                            })[0], g = p.componentIndex;
                            l[f] = l[f] || [];
                            for (var m = 0; m <= g; m++)l[f][g] = l[f][g] || {};
                            l[f][g].boundaryGap = "bar" === i
                        }
                    }
                };
                o.each(s, function (t) {
                    o.indexOf(t, i) >= 0 && o.each(t, function (t) {
                        n.setIconStatus(t, "normal")
                    })
                }), n.setIconStatus(i, "emphasis"), t.eachComponent({
                    mainType: "series",
                    query: null == r ? null : {seriesIndex: r}
                }, u), e.dispatchAction({type: "changeMagicType", currentType: i, newOption: l})
            }
        };
        var l = i(2);
        l.registerAction({
            type: "changeMagicType",
            event: "magicTypeChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            e.mergeOption(t.newOption)
        }), i(25).register("magicType", n), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t
        }

        var o = i(111);
        n.defaultOption = {
            show: !0,
            icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
            title: "还原"
        };
        var r = n.prototype;
        r.onclick = function (t, e, i) {
            o.clear(t), e.dispatchAction({type: "restore", from: this.uid})
        }, i(25).register("restore", n), i(2).registerAction({
            type: "restore",
            event: "restore",
            update: "prepareAndUpdate"
        }, function (t, e) {
            e.resetOption("recreate")
        }), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            this.model = t
        }

        var o = i(11);
        n.defaultOption = {
            show: !0,
            icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
            title: "保存为图片",
            type: "png",
            name: "",
            excludeComponents: ["toolbox"],
            pixelRatio: 1,
            lang: ["右键另存为图片"]
        }, n.prototype.unusable = !o.canvasSupported;
        var r = n.prototype;
        r.onclick = function (t, e) {
            var i = this.model, n = i.get("name") || t.get("title.0.text") || "echarts", r = document.createElement("a"), a = i.get("type", !0) || "png";
            r.download = n + "." + a, r.target = "_blank";
            var s = e.getConnectedDataURL({
                type: a,
                backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
                excludeComponents: i.get("excludeComponents"),
                pixelRatio: i.get("pixelRatio")
            });
            if (r.href = s, "function" != typeof MouseEvent || o.browser.ie || o.browser.edge) {
                var l = i.get("lang"), u = '<body style="margin:0;"><img src="' + s + '" style="max-width:100%;" title="' + (l && l[0] || "") + '" /></body>', h = window.open();
                h.document.write(u)
            } else {
                var c = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
                r.dispatchEvent(c)
            }
        }, i(25).register("saveAsImage", n), t.exports = n
    }, function (t, e, i) {
        i(215), i(216), i(2).registerAction({type: "showTip", event: "showTip", update: "none"}, function () {
        }), i(2).registerAction({type: "hideTip", event: "hideTip", update: "none"}, function () {
        })
    }, function (t, e, i) {
        function n(t) {
            var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
            return s.map(p, function (t) {
                return t + "transition:" + i
            }).join(";")
        }

        function o(t) {
            var e = [], i = t.get("fontSize"), n = t.getTextColor();
            return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), c(["decoration", "align"], function (i) {
                var n = t.get(i);
                n && e.push("text-" + i + ":" + n)
            }), e.join(";")
        }

        function r(t) {
            t = t;
            var e = [], i = t.get("transitionDuration"), r = t.get("backgroundColor"), a = t.getModel("textStyle"), s = t.get("padding");
            return i && e.push(n(i)), r && (f.canvasSupported ? e.push("background-Color:" + r) : (e.push("background-Color:#" + l.toHex(r)), e.push("filter:alpha(opacity=70)"))), c(["width", "color", "radius"], function (i) {
                var n = "border-" + i, o = d(n), r = t.get(o);
                null != r && e.push(n + ":" + r + ("color" === i ? "" : "px"))
            }), e.push(o(a)), null != s && e.push("padding:" + h.normalizeCssArray(s).join("px ") + "px"), e.join(";") + ";"
        }

        function a(t, e) {
            var i = document.createElement("div"), n = e.getZr();
            this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
            var o = this;
            i.onmouseenter = function () {
                o.enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0
            }, i.onmousemove = function (e) {
                if (e = e || window.event, !o.enterable) {
                    var i = n.handler;
                    u.normalizeEvent(t, e, !0), i.dispatch("mousemove", e)
                }
            }, i.onmouseleave = function () {
                o.enterable && o._show && o.hideLater(o._hideDelay), o._inContent = !1
            }
        }

        var s = i(1), l = i(18), u = i(24), h = i(9), c = s.each, d = h.toCamelCase, f = i(11), p = ["", "-webkit-", "-moz-", "-o-"], g = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
        a.prototype = {
            constructor: a, enterable: !0, update: function () {
                var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
                "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
            }, show: function (t) {
                clearTimeout(this._hideTimeout);
                var e = this.el;
                e.style.cssText = g + r(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), e.style.display = e.innerHTML ? "block" : "none", this._show = !0
            }, setContent: function (t) {
                var e = this.el;
                e.innerHTML = t, e.style.display = t ? "block" : "none"
            }, moveTo: function (t, e) {
                var i = this.el.style;
                i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
            }, hide: function () {
                this.el.style.display = "none", this._show = !1
            }, hideLater: function (t) {
                !this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(s.bind(this.hide, this), t)) : this.hide())
            }, isShow: function () {
                return this._show
            }
        }, t.exports = a
    }, function (t, e, i) {
        i(2).extendComponentModel({
            type: "tooltip",
            defaultOption: {
                zlevel: 0,
                z: 8,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove",
                alwaysShowContent: !1,
                confine: !1,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "rgba(50,50,50,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                extraCssText: "",
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: !0,
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    lineStyle: {color: "#555", width: 1, type: "solid"},
                    crossStyle: {color: "#555", width: 1, type: "dashed", textStyle: {}},
                    shadowStyle: {color: "rgba(150,150,150,0.3)"}
                },
                textStyle: {color: "#fff", fontSize: 14}
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            if (!t || !e)return !1;
            var i = m.round;
            return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
        }

        function o(t, e, i, n) {
            return {x1: t, y1: e, x2: i, y2: n}
        }

        function r(t, e, i, n) {
            return {x: t, y: e, width: i, height: n}
        }

        function a(t, e, i, n, o, r) {
            return {cx: t, cy: e, r0: i, r: n, startAngle: o, endAngle: r, clockwise: !0}
        }

        function s(t, e, i, n, o) {
            var r = i.clientWidth, a = i.clientHeight, s = 20;
            return t + r + s > n ? t -= r + s : t += s, e + a + s > o ? e -= a + s : e += s, [t, e]
        }

        function l(t, e, i, n, o) {
            var r = i.clientWidth, a = i.clientHeight;
            return t = Math.min(t + r, n) - r, e = Math.min(e + a, o) - a, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
        }

        function u(t, e, i) {
            var n = i.clientWidth, o = i.clientHeight, r = 5, a = 0, s = 0, l = e.width, u = e.height;
            switch (t) {
                case"inside":
                    a = e.x + l / 2 - n / 2, s = e.y + u / 2 - o / 2;
                    break;
                case"top":
                    a = e.x + l / 2 - n / 2, s = e.y - o - r;
                    break;
                case"bottom":
                    a = e.x + l / 2 - n / 2, s = e.y + u + r;
                    break;
                case"left":
                    a = e.x - n - r, s = e.y + u / 2 - o / 2;
                    break;
                case"right":
                    a = e.x + l + r, s = e.y + u / 2 - o / 2
            }
            return [a, s]
        }

        function h(t, e, i, n, o, r, a, h) {
            var c = h.getWidth(), d = h.getHeight(), f = a && a.getBoundingRect().clone();
            if (a && f.applyTransform(a.transform), "function" == typeof t && (t = t([e, i], r, o.el, f)), p.isArray(t))e = y(t[0], c), i = y(t[1], d); else if ("string" == typeof t && a) {
                var g = u(t, f, o.el);
                e = g[0], i = g[1]
            } else {
                var g = s(e, i, o.el, c, d);
                e = g[0], i = g[1]
            }
            if (n) {
                var g = l(e, i, o.el, c, d);
                e = g[0], i = g[1]
            }
            o.moveTo(e, i)
        }

        function c(t) {
            var e = t.coordinateSystem, i = t.get("tooltip.trigger", !0);
            return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "singleAxis" !== e.type || "item" === i)
        }

        var d = i(214), f = i(3), p = i(1), g = i(9), m = i(4), v = i(6), y = m.parsePercent, x = i(11), _ = i(10);
        i(2).extendComponentView({
            type: "tooltip", _axisPointers: {}, init: function (t, e) {
                if (!x.node) {
                    var i = new d(e.getDom(), e);
                    this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
                }
            }, render: function (t, e, i) {
                if (!x.node) {
                    this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
                    var n = this._tooltipContent;
                    n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
                    var o = this._crossText;
                    o && this.group.add(o);
                    var r = t.get("triggerOn");
                    if (null != this._lastX && null != this._lastY && "none" !== r) {
                        var a = this;
                        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                            a._manuallyShowTip({x: a._lastX, y: a._lastY})
                        })
                    }
                    var s = this._api.getZr();
                    s.off("click", this._tryShow), s.off("mousemove", this._mousemove), s.off("mouseout", this._hide), s.off("globalout", this._hide), "click" === r ? s.on("click", this._tryShow, this) : "mousemove" === r && (s.on("mousemove", this._mousemove, this), s.on("mouseout", this._hide, this), s.on("globalout", this._hide, this))
                }
            }, _mousemove: function (t) {
                var e = this._tooltipModel.get("showDelay"), i = this;
                clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function () {
                    i._tryShow(t)
                }, e) : this._tryShow(t)
            }, _manuallyShowTip: function (t) {
                function e(e) {
                    var i = e.getData(), n = v.queryDataIndex(i, t);
                    if (null != n && !p.isArray(n) && i.hasValue(n))return !0
                }

                if (t.from !== this.uid) {
                    var i = this._ecModel, n = t.seriesIndex, o = i.getSeriesByIndex(n), r = this._api, a = "axis" === this._tooltipModel.get("trigger");
                    if (null == t.x || null == t.y) {
                        if (a ? (o && !e(o) && (o = null), o || i.eachSeries(function (t) {
                                c(t) && !o && e(t) && (o = t)
                            })) : o = o || i.getSeriesByIndex(0), o) {
                            var s = o.getData(), l = v.queryDataIndex(s, t);
                            if (null == l || p.isArray(l))return;
                            var u, h, d = s.getItemGraphicEl(l), f = o.coordinateSystem;
                            if (o.getTooltipPosition) {
                                var g = o.getTooltipPosition(l) || [];
                                u = g[0], h = g[1]
                            } else if (f && f.dataToPoint) {
                                var g = f.dataToPoint(s.getValues(p.map(f.dimensions, function (t) {
                                    return o.coordDimToDataDim(t)[0]
                                }), l, !0));
                                u = g && g[0], h = g && g[1]
                            } else if (d) {
                                var m = d.getBoundingRect().clone();
                                m.applyTransform(d.transform), u = m.x + m.width / 2, h = m.y + m.height / 2
                            }
                            null != u && null != h && this._tryShow({
                                offsetX: u,
                                offsetY: h,
                                position: t.position,
                                target: d,
                                event: {}
                            })
                        }
                    } else {
                        var d = r.getZr().handler.findHover(t.x, t.y);
                        this._tryShow({offsetX: t.x, offsetY: t.y, position: t.position, target: d, event: {}})
                    }
                }
            }, _manuallyHideTip: function (t) {
                t.from !== this.uid && this._hide()
            }, _prepareAxisTriggerData: function (t, e) {
                var i = {};
                return e.eachSeries(function (t) {
                    if (c(t)) {
                        var e, n, o = t.coordinateSystem;
                        "cartesian2d" === o.type ? (e = o.getBaseAxis(), n = e.dim + e.index) : "singleAxis" === o.type ? (e = o.getAxis(), n = e.dim + e.type) : (e = o.getBaseAxis(), n = e.dim + o.name), i[n] = i[n] || {
                                coordSys: [],
                                series: []
                            }, i[n].coordSys.push(o), i[n].series.push(t)
                    }
                }, this), i
            }, _tryShow: function (t) {
                var e = t.target, i = this._tooltipModel, n = i.get("trigger"), o = this._ecModel, r = this._api;
                if (i)if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e.dataIndex) {
                    var a = e.dataModel || o.getSeriesByIndex(e.seriesIndex), s = e.dataIndex, l = a.getData().getItemModel(s);
                    "axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, o, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(a, s, e.dataType, t)), r.dispatchAction({
                        type: "showTip",
                        from: this.uid,
                        dataIndexInside: e.dataIndex,
                        seriesIndex: e.seriesIndex
                    })
                } else if (e && e.tooltip) {
                    var u = e.tooltip;
                    if ("string" == typeof u) {
                        var h = u;
                        u = {content: h, formatter: h}
                    }
                    var c = new _(u, i), d = c.get("content"), f = Math.random();
                    this._showTooltipContent(c, d, c.get("formatterParams") || {}, f, t.offsetX, t.offsetY, t.position, e, r)
                } else"item" === n ? this._hide() : this._showAxisTooltip(i, o, t), "cross" === i.get("axisPointer.type") && r.dispatchAction({
                    type: "showTip",
                    from: this.uid,
                    x: t.offsetX,
                    y: t.offsetY
                })
            }, _showAxisTooltip: function (t, e, i) {
                var o = t.getModel("axisPointer"), r = o.get("type");
                if ("cross" === r) {
                    var a = i.target;
                    if (a && null != a.dataIndex) {
                        var s = e.getSeriesByIndex(a.seriesIndex), l = a.dataIndex;
                        this._showItemTooltipContent(s, l, a.dataType, i)
                    }
                }
                this._showAxisPointer();
                var u = !0;
                p.each(this._seriesGroupByAxis, function (e) {
                    var a = e.coordSys, s = a[0], l = [i.offsetX, i.offsetY];
                    if (!s.containPoint(l))return void this._hideAxisPointer(s.name);
                    u = !1;
                    var h = s.dimensions, c = s.pointToData(l, !0);
                    l = s.dataToPoint(c);
                    var d = s.getBaseAxis(), f = o.get("axis");
                    "auto" === f && (f = d.dim);
                    var g = !1, m = this._lastHover;
                    if ("cross" === r)n(m.data, c) && (g = !0), m.data = c; else {
                        var v = p.indexOf(h, f);
                        m.data === c[v] && (g = !0), m.data = c[v]
                    }
                    var y = t.get("animation");
                    "cartesian2d" !== s.type || g ? "polar" !== s.type || g ? "singleAxis" !== s.type || g || this._showSinglePointer(o, s, f, l, y) : this._showPolarPointer(o, s, f, l, y) : this._showCartesianPointer(o, s, f, l, y), "cross" !== r && this._dispatchAndShowSeriesTooltipContent(s, e.series, l, c, g, i.position)
                }, this), this._tooltipModel.get("show") || this._hideAxisPointer(), u && this._hide()
            }, _showCartesianPointer: function (t, e, i, n, a) {
                function s(i, n, r) {
                    var a = "x" === i ? o(n[0], r[0], n[0], r[1]) : o(r[0], n[1], r[1], n[1]), s = u._getPointerElement(e, t, i, a);
                    f.subPixelOptimizeLine({
                        shape: a,
                        style: s.style
                    }), d ? f.updateProps(s, {shape: a}, t) : s.attr({shape: a})
                }

                function l(i, n, o) {
                    var a = e.getAxis(i), s = a.getBandWidth(), l = o[1] - o[0], h = "x" === i ? r(n[0] - s / 2, o[0], s, l) : r(o[0], n[1] - s / 2, l, s), c = u._getPointerElement(e, t, i, h);
                    d ? f.updateProps(c, {shape: h}, t) : c.attr({shape: h})
                }

                var u = this, h = t.get("type"), c = e.getBaseAxis(), d = a && "cross" !== h && "category" === c.type && c.getBandWidth() > 20;
                if ("cross" === h)s("x", n, e.getAxis("y").getGlobalExtent()), s("y", n, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, n, t); else {
                    var p = e.getAxis("x" === i ? "y" : "x"), g = p.getGlobalExtent();
                    "cartesian2d" === e.type && ("line" === h ? s : l)(i, n, g)
                }
            }, _showSinglePointer: function (t, e, i, n, r) {
                function a(i, n, r) {
                    var a = e.getAxis(), l = a.orient, h = "horizontal" === l ? o(n[0], r[0], n[0], r[1]) : o(r[0], n[1], r[1], n[1]), c = s._getPointerElement(e, t, i, h);
                    u ? f.updateProps(c, {shape: h}, t) : c.attr({shape: h})
                }

                var s = this, l = t.get("type"), u = r && "cross" !== l && "category" === e.getBaseAxis().type, h = e.getRect(), c = [h.y, h.y + h.height];
                a(i, n, c)
            }, _showPolarPointer: function (t, e, i, n, r) {
                function s(i, n, r) {
                    var a, s = e.pointToCoord(n);
                    if ("angle" === i) {
                        var l = e.coordToPoint([r[0], s[1]]), h = e.coordToPoint([r[1], s[1]]);
                        a = o(l[0], l[1], h[0], h[1])
                    } else a = {cx: e.cx, cy: e.cy, r: s[0]};
                    var c = u._getPointerElement(e, t, i, a);
                    p ? f.updateProps(c, {shape: a}, t) : c.attr({shape: a})
                }

                function l(i, n, o) {
                    var r, s = e.getAxis(i), l = s.getBandWidth(), h = e.pointToCoord(n), c = Math.PI / 180;
                    r = "angle" === i ? a(e.cx, e.cy, o[0], o[1], (-h[1] - l / 2) * c, (-h[1] + l / 2) * c) : a(e.cx, e.cy, h[0] - l / 2, h[0] + l / 2, 0, 2 * Math.PI);
                    var d = u._getPointerElement(e, t, i, r);
                    p ? f.updateProps(d, {shape: r}, t) : d.attr({shape: r})
                }

                var u = this, h = t.get("type"), c = e.getAngleAxis(), d = e.getRadiusAxis(), p = r && "cross" !== h && "category" === e.getBaseAxis().type;
                if ("cross" === h)s("angle", n, d.getExtent()), s("radius", n, c.getExtent()), this._updateCrossText(e, n, t); else {
                    var g = e.getAxis("radius" === i ? "angle" : "radius"), m = g.getExtent();
                    ("line" === h ? s : l)(i, n, m)
                }
            }, _updateCrossText: function (t, e, i) {
                var n = i.getModel("crossStyle"), o = n.getModel("textStyle"), r = this._tooltipModel, a = this._crossText;
                a || (a = this._crossText = new f.Text({
                    style: {
                        textAlign: "left",
                        textVerticalAlign: "bottom"
                    }
                }), this.group.add(a));
                var s = t.pointToData(e), l = t.dimensions;
                s = p.map(s, function (e, i) {
                    var n = t.getAxis(l[i]);
                    return e = "category" === n.type || "time" === n.type ? n.scale.getLabel(e) : g.addCommas(e.toFixed(n.getPixelPrecision()))
                }), a.setStyle({
                    fill: o.getTextColor() || n.get("color"),
                    textFont: o.getFont(),
                    text: s.join(", "),
                    x: e[0] + 5,
                    y: e[1] - 5
                }), a.z = r.get("z"), a.zlevel = r.get("zlevel")
            }, _getPointerElement: function (t, e, i, n) {
                var o = this._tooltipModel, r = o.get("z"), a = o.get("zlevel"), s = this._axisPointers, l = t.name;
                if (s[l] = s[l] || {}, s[l][i])return s[l][i];
                var u = e.get("type"), h = e.getModel(u + "Style"), c = "shadow" === u, d = h[c ? "getAreaStyle" : "getLineStyle"](), p = "polar" === t.type ? c ? "Sector" : "radius" === i ? "Circle" : "Line" : c ? "Rect" : "Line";
                c ? d.stroke = null : d.fill = null;
                var g = s[l][i] = new f[p]({style: d, z: r, zlevel: a, silent: !0, shape: n});
                return this.group.add(g), g
            }, _dispatchAndShowSeriesTooltipContent: function (t, e, i, n, o, r) {
                var a, s = this._tooltipModel, l = t.getBaseAxis(), u = "x" === l.dim || "radius" === l.dim ? 0 : 1, c = p.map(e, function (t) {
                    return {
                        seriesIndex: t.seriesIndex,
                        dataIndexInside: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(l.dim), n, l) : t.getData().indexOfNearest(t.coordDimToDataDim(l.dim)[0], n[u], !1, "category" === l.type ? .5 : null)
                    }
                });
                p.each(c, function (t, i) {
                    e[i].getData().hasValue(t.dataIndexInside) && (a = i)
                }), a = a || 0;
                var d = this._lastHover, f = this._api;
                if (d.payloadBatch && !o && f.dispatchAction({
                        type: "downplay",
                        batch: d.payloadBatch
                    }), o || (f.dispatchAction({
                        type: "highlight",
                        batch: c
                    }), d.payloadBatch = c), f.dispatchAction({
                        type: "showTip",
                        dataIndexInside: c[a].dataIndexInside,
                        seriesIndex: c[a].seriesIndex,
                        from: this.uid
                    }), l && s.get("showContent") && s.get("show")) {
                    var g = p.map(e, function (t, e) {
                        return t.getDataParams(c[e].dataIndexInside)
                    });
                    if (o)h(r || s.get("position"), i[0], i[1], s.get("confine"), this._tooltipContent, g, null, f); else {
                        var m = c[a].dataIndexInside, v = "time" === l.type ? l.scale.getLabel(n[u]) : e[a].getData().getName(m), y = (v ? v + "<br />" : "") + p.map(e, function (t, e) {
                                return t.formatTooltip(c[e].dataIndexInside, !0)
                            }).join("<br />"), x = "axis_" + t.name + "_" + m;
                        this._showTooltipContent(s, y, g, x, i[0], i[1], r, null, f)
                    }
                }
            }, _showItemTooltipContent: function (t, e, i, n) {
                var o = this._api, r = t.getData(i), a = r.getItemModel(e), s = a.get("tooltip", !0);
                if ("string" == typeof s) {
                    var l = s;
                    s = {formatter: l}
                }
                var u = this._tooltipModel, h = t.getModel("tooltip", u), c = new _(s, h, h.ecModel), d = t.getDataParams(e, i), f = t.formatTooltip(e, !1, i), p = "item_" + t.name + "_" + e;
                this._showTooltipContent(c, f, d, p, n.offsetX, n.offsetY, n.position, n.target, o)
            }, _showTooltipContent: function (t, e, i, n, o, r, a, s, l) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var u = this._tooltipContent, c = t.get("confine"), d = t.get("formatter");
                    a = a || t.get("position");
                    var f = e;
                    if (d)if ("string" == typeof d)f = g.formatTpl(d, i); else if ("function" == typeof d) {
                        var p = this, m = n, v = function (t, e) {
                            t === p._ticket && (u.setContent(e), h(a, o, r, c, u, i, s, l))
                        };
                        p._ticket = m, f = d(i, m, v)
                    }
                    u.show(t), u.setContent(f), h(a, o, r, c, u, i, s, l)
                }
            }, _showAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && p.each(e, function (t) {
                        t.show()
                    })
                } else this.group.eachChild(function (t) {
                    t.show()
                }), this.group.show()
            }, _resetLastHover: function () {
                var t = this._lastHover;
                t.payloadBatch && this._api.dispatchAction({
                    type: "downplay",
                    batch: t.payloadBatch
                }), this._lastHover = {}
            }, _hideAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && p.each(e, function (t) {
                        t.hide()
                    })
                } else this.group.children().length && this.group.hide()
            }, _hide: function () {
                clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({
                    type: "hideTip",
                    from: this.uid
                }), this._lastX = this._lastY = null
            }, dispose: function (t, e) {
                if (!x.node) {
                    var i = e.getZr();
                    this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off("mouseout", this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
                }
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.get("center"), n = t.get("radius"), o = e.getWidth(), r = e.getHeight(), a = s.parsePercent;
            this.cx = a(i[0], o), this.cy = a(i[1], r);
            var l = this.getRadiusAxis(), u = Math.min(o, r) / 2;
            l.setExtent(0, a(n, u))
        }

        function o(t, e) {
            var i = this, n = i.getAngleAxis(), o = i.getRadiusAxis();
            if (n.scale.setExtent(1 / 0, -(1 / 0)), o.scale.setExtent(1 / 0, -(1 / 0)), t.eachSeries(function (t) {
                    if (t.coordinateSystem === i) {
                        var e = t.getData();
                        o.scale.unionExtent(e.getDataExtent("radius", "category" !== o.type)), n.scale.unionExtent(e.getDataExtent("angle", "category" !== n.type))
                    }
                }), u(n, n.model), u(o, o.model), "category" === n.type && !n.onBand) {
                var r = n.getExtent(), a = 360 / n.scale.count();
                n.inverse ? r[1] += a : r[1] -= a, n.setExtent(r[0], r[1])
            }
        }

        function r(t, e) {
            if (t.type = e.get("type"), t.scale = l.createScaleByModel(e), t.onBand = e.get("boundaryGap") && "category" === t.type, "angleAxis" === e.mainType) {
                var i = e.get("startAngle");
                t.inverse = e.get("inverse") ^ e.get("clockwise"), t.setExtent(i, i + (t.inverse ? -360 : 360))
            }
            e.axis = t, t.model = e
        }

        var a = i(371), s = i(4), l = (i(1), i(22)), u = l.niceScaleExtent;
        i(372);
        var h = {
            dimensions: a.prototype.dimensions, create: function (t, e) {
                var i = [];
                return t.eachComponent("polar", function (t, s) {
                    var l = new a(s);
                    l.resize = n, l.update = o;
                    var u = l.getRadiusAxis(), h = l.getAngleAxis(), c = t.findAxisModel("radiusAxis"), d = t.findAxisModel("angleAxis");
                    r(u, c), r(h, d), l.resize(t, e), i.push(l), t.coordinateSystem = l
                }), t.eachSeries(function (e) {
                    if ("polar" === e.get("coordinateSystem")) {
                        var i = t.queryComponents({
                            mainType: "polar",
                            index: e.get("polarIndex"),
                            id: e.get("polarId")
                        })[0];
                        e.coordinateSystem = i.coordinateSystem
                    }
                }), i
            }
        };
        i(23).register("polar", h)
    }, function (t, e) {
        function i() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function o(t) {
            if (h === setTimeout)return setTimeout(t, 0);
            if ((h === i || !h) && setTimeout)return h = setTimeout, setTimeout(t, 0);
            try {
                return h(t, 0)
            } catch (e) {
                try {
                    return h.call(null, t, 0)
                } catch (e) {
                    return h.call(this, t, 0)
                }
            }
        }

        function r(t) {
            if (c === clearTimeout)return clearTimeout(t);
            if ((c === n || !c) && clearTimeout)return c = clearTimeout, clearTimeout(t);
            try {
                return c(t)
            } catch (e) {
                try {
                    return c.call(null, t)
                } catch (e) {
                    return c.call(this, t)
                }
            }
        }

        function a() {
            g && f && (g = !1, f.length ? p = f.concat(p) : m = -1, p.length && s())
        }

        function s() {
            if (!g) {
                var t = o(a);
                g = !0;
                for (var e = p.length; e;) {
                    for (f = p, p = []; ++m < e;)f && f[m].run();
                    m = -1, e = p.length
                }
                f = null, g = !1, r(t)
            }
        }

        function l(t, e) {
            this.fun = t, this.array = e
        }

        function u() {
        }

        var h, c, d = t.exports = {};
        !function () {
            try {
                h = "function" == typeof setTimeout ? setTimeout : i
            } catch (t) {
                h = i
            }
            try {
                c = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (t) {
                c = n
            }
        }();
        var f, p = [], g = !1, m = -1;
        d.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i];
            p.push(new l(t, e)), 1 !== p.length || g || o(s)
        }, l.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, d.cwd = function () {
            return "/"
        }, d.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, d.umask = function () {
            return 0
        }
    }, function (t, e, i) {
        function n(t) {
            return parseInt(t, 10)
        }

        function o(t, e) {
            s.initVML(), this.root = t, this.storage = e;
            var i = document.createElement("div"), n = document.createElement("div");
            i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
            var o = e.delFromMap, r = e.addToMap;
            e.delFromMap = function (t) {
                var i = e.get(t);
                o.call(e, t), i && i.onRemove && i.onRemove(n)
            }, e.addToMap = function (t) {
                t.onAdd && t.onAdd(n), r.call(e, t)
            }, this._firstPaint = !0
        }

        function r(t) {
            return function () {
                a('In IE8.0 VML mode painter not support method "' + t + '"')
            }
        }

        var a = i(48), s = i(170);
        o.prototype = {
            constructor: o, getViewportRoot: function () {
                return this._vmlViewport
            }, refresh: function () {
                var t = this.storage.getDisplayList(!0, !0);
                this._paintList(t)
            }, _paintList: function (t) {
                for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())), n.__dirty = !1
                }
                this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
            }, resize: function (t, e) {
                var t = null == t ? this._getWidth() : t, e = null == e ? this._getHeight() : e;
                if (this._width != t || this._height != e) {
                    this._width = t, this._height = e;
                    var i = this._vmlViewport.style;
                    i.width = t + "px", i.height = e + "px"
                }
            }, dispose: function () {
                this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, clear: function () {
                this._vmlViewport && this.root.removeChild(this._vmlViewport)
            }, _getWidth: function () {
                var t = this.root, e = t.currentStyle;
                return (t.clientWidth || n(e.width)) - n(e.paddingLeft) - n(e.paddingRight) | 0
            }, _getHeight: function () {
                var t = this.root, e = t.currentStyle;
                return (t.clientHeight || n(e.height)) - n(e.paddingTop) - n(e.paddingBottom) | 0
            }
        };
        for (var l = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], u = 0; u < l.length; u++) {
            var h = l[u];
            o.prototype[h] = r(h)
        }
        t.exports = o
    }, function (t, e, i) {
        if (!i(11).canvasSupported) {
            var n = i(5), o = i(8), r = i(28).CMD, a = i(18), s = i(16), l = i(76), u = i(36), h = i(49), c = i(75), d = i(7), f = i(37), p = i(170), g = Math.round, m = Math.sqrt, v = Math.abs, y = Math.cos, x = Math.sin, _ = Math.max, b = n.applyTransform, w = ",", S = "progid:DXImageTransform.Microsoft", M = 21600, T = M / 2, I = 1e5, A = 1e3, L = function (t) {
                t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = M + "," + M, t.coordorigin = "0,0"
            }, C = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
            }, D = function (t, e, i) {
                return "rgb(" + [t, e, i].join(",") + ")"
            }, P = function (t, e) {
                e && t && e.parentNode !== t && t.appendChild(e)
            }, k = function (t, e) {
                e && t && e.parentNode === t && t.removeChild(e)
            }, O = function (t, e, i) {
                return (parseFloat(t) || 0) * I + (parseFloat(e) || 0) * A + i
            }, z = function (t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }, E = function (t, e, i) {
                var n = a.parse(e);
                i = +i, isNaN(i) && (i = 1), n && (t.color = D(n[0], n[1], n[2]), t.opacity = i * n[3])
            }, R = function (t) {
                var e = a.parse(t);
                return [D(e[0], e[1], e[2]), e[3]]
            }, V = function (t, e, i) {
                var n = e.fill;
                if (null != n)if (n instanceof f) {
                    var o, r = 0, a = [0, 0], s = 0, l = 1, u = i.getBoundingRect(), h = u.width, c = u.height;
                    if ("linear" === n.type) {
                        o = "gradient";
                        var d = i.transform, p = [n.x * h, n.y * c], g = [n.x2 * h, n.y2 * c];
                        d && (b(p, p, d), b(g, g, d));
                        var m = g[0] - p[0], v = g[1] - p[1];
                        r = 180 * Math.atan2(m, v) / Math.PI, r < 0 && (r += 360), r < 1e-6 && (r = 0)
                    } else {
                        o = "gradientradial";
                        var p = [n.x * h, n.y * c], d = i.transform, y = i.scale, x = h, w = c;
                        a = [(p[0] - u.x) / x, (p[1] - u.y) / w], d && b(p, p, d), x /= y[0] * M, w /= y[1] * M;
                        var S = _(x, w);
                        s = 0 / S, l = 2 * n.r / S - s
                    }
                    var T = n.colorStops.slice();
                    T.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    for (var I = T.length, A = [], L = [], C = 0; C < I; C++) {
                        var D = T[C], P = R(D.color);
                        L.push(D.offset * l + s + " " + P[0]), 0 !== C && C !== I - 1 || A.push(P)
                    }
                    if (I >= 2) {
                        var k = A[0][0], O = A[1][0], z = A[0][1] * e.opacity, V = A[1][1] * e.opacity;
                        t.type = o, t.method = "none", t.focus = "100%", t.angle = r, t.color = k, t.color2 = O, t.colors = L.join(","), t.opacity = V, t.opacity2 = z
                    }
                    "radial" === o && (t.focusposition = a.join(","))
                } else E(t, n, e.opacity)
            }, N = function (t, e) {
                null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof f || E(t, e.stroke, e.opacity)
            }, B = function (t, e, i, n) {
                var o = "fill" == e, r = t.getElementsByTagName(e)[0];
                null != i[e] && "none" !== i[e] && (o || !o && i.lineWidth) ? (t[o ? "filled" : "stroked"] = "true", i[e] instanceof f && k(t, r), r || (r = p.createNode(e)), o ? V(r, i, n) : N(r, i), P(t, r)) : (t[o ? "filled" : "stroked"] = "false", k(t, r))
            }, G = [[], [], []], F = function (t, e) {
                var i, n, o, a, s, l, u = r.M, h = r.C, c = r.L, d = r.A, f = r.Q, p = [];
                for (a = 0; a < t.length;) {
                    switch (o = t[a++], n = "", i = 0, o) {
                        case u:
                            n = " m ", i = 1, s = t[a++], l = t[a++], G[0][0] = s, G[0][1] = l;
                            break;
                        case c:
                            n = " l ", i = 1, s = t[a++], l = t[a++], G[0][0] = s, G[0][1] = l;
                            break;
                        case f:
                        case h:
                            n = " c ", i = 3;
                            var v, _, S = t[a++], I = t[a++], A = t[a++], L = t[a++];
                            o === f ? (v = A, _ = L, A = (A + 2 * S) / 3, L = (L + 2 * I) / 3, S = (s + 2 * S) / 3, I = (l + 2 * I) / 3) : (v = t[a++], _ = t[a++]), G[0][0] = S, G[0][1] = I, G[1][0] = A, G[1][1] = L, G[2][0] = v, G[2][1] = _, s = v, l = _;
                            break;
                        case d:
                            var C = 0, D = 0, P = 1, k = 1, O = 0;
                            e && (C = e[4], D = e[5], P = m(e[0] * e[0] + e[1] * e[1]), k = m(e[2] * e[2] + e[3] * e[3]), O = Math.atan2(-e[1] / k, e[0] / P));
                            var z = t[a++], E = t[a++], R = t[a++], V = t[a++], N = t[a++] + O, B = t[a++] + N + O;
                            a++;
                            var F = t[a++], H = z + y(N) * R, W = E + x(N) * V, S = z + y(B) * R, I = E + x(B) * V, Z = F ? " wa " : " at ";
                            Math.abs(H - S) < 1e-10 && (Math.abs(B - N) > .01 ? F && (H += 270 / M) : Math.abs(W - E) < 1e-10 ? F && H < z || !F && H > z ? I -= 270 / M : I += 270 / M : F && W < E || !F && W > E ? S += 270 / M : S -= 270 / M), p.push(Z, g(((z - R) * P + C) * M - T), w, g(((E - V) * k + D) * M - T), w, g(((z + R) * P + C) * M - T), w, g(((E + V) * k + D) * M - T), w, g((H * P + C) * M - T), w, g((W * k + D) * M - T), w, g((S * P + C) * M - T), w, g((I * k + D) * M - T)), s = S, l = I;
                            break;
                        case r.R:
                            var q = G[0], j = G[1];
                            q[0] = t[a++], q[1] = t[a++], j[0] = q[0] + t[a++], j[1] = q[1] + t[a++], e && (b(q, q, e), b(j, j, e)), q[0] = g(q[0] * M - T), j[0] = g(j[0] * M - T), q[1] = g(q[1] * M - T), j[1] = g(j[1] * M - T), p.push(" m ", q[0], w, q[1], " l ", j[0], w, q[1], " l ", j[0], w, j[1], " l ", q[0], w, j[1]);
                            break;
                        case r.Z:
                            p.push(" x ")
                    }
                    if (i > 0) {
                        p.push(n);
                        for (var U = 0; U < i; U++) {
                            var X = G[U];
                            e && b(X, X, e), p.push(g(X[0] * M - T), w, g(X[1] * M - T), U < i - 1 ? w : "")
                        }
                    }
                }
                return p.join("")
            };
            d.prototype.brushVML = function (t) {
                var e = this.style, i = this._vmlEl;
                i || (i = p.createNode("shape"), L(i), this._vmlEl = i), B(i, "fill", e, this), B(i, "stroke", e, this);
                var n = this.transform, o = null != n, r = i.getElementsByTagName("stroke")[0];
                if (r) {
                    var a = e.lineWidth;
                    if (o && !e.strokeNoScale) {
                        var s = n[0] * n[3] - n[1] * n[2];
                        a *= m(v(s))
                    }
                    r.weight = a + "px"
                }
                var l = this.path;
                this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), i.path = F(l.data, this.transform), i.style.zIndex = O(this.zlevel, this.z, this.z2), P(t, i), null != e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
            }, d.prototype.onRemove = function (t) {
                k(t, this._vmlEl), this.removeRectText(t)
            }, d.prototype.onAdd = function (t) {
                P(t, this._vmlEl), this.appendRectText(t)
            };
            var H = function (t) {
                return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
            };
            h.prototype.brushVML = function (t) {
                var e, i, n = this.style, o = n.image;
                if (H(o)) {
                    var r = o.src;
                    if (r === this._imageSrc)e = this._imageWidth, i = this._imageHeight; else {
                        var a = o.runtimeStyle, s = a.width, l = a.height;
                        a.width = "auto", a.height = "auto", e = o.width, i = o.height, a.width = s, a.height = l, this._imageSrc = r, this._imageWidth = e, this._imageHeight = i
                    }
                    o = r
                } else o === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
                if (o) {
                    var u = n.x || 0, h = n.y || 0, c = n.width, d = n.height, f = n.sWidth, v = n.sHeight, y = n.sx || 0, x = n.sy || 0, M = f && v, T = this._vmlEl;
                    T || (T = p.doc.createElement("div"), L(T), this._vmlEl = T);
                    var I, A = T.style, C = !1, D = 1, k = 1;
                    if (this.transform && (I = this.transform, D = m(I[0] * I[0] + I[1] * I[1]), k = m(I[2] * I[2] + I[3] * I[3]), C = I[1] || I[2]), C) {
                        var z = [u, h], E = [u + c, h], R = [u, h + d], V = [u + c, h + d];
                        b(z, z, I), b(E, E, I), b(R, R, I), b(V, V, I);
                        var N = _(z[0], E[0], R[0], V[0]), B = _(z[1], E[1], R[1], V[1]), G = [];
                        G.push("M11=", I[0] / D, w, "M12=", I[2] / k, w, "M21=", I[1] / D, w, "M22=", I[3] / k, w, "Dx=", g(u * D + I[4]), w, "Dy=", g(h * k + I[5])), A.padding = "0 " + g(N) + "px " + g(B) + "px 0", A.filter = S + ".Matrix(" + G.join("") + ", SizingMethod=clip)"
                    } else I && (u = u * D + I[4], h = h * k + I[5]), A.filter = "", A.left = g(u) + "px", A.top = g(h) + "px";
                    var F = this._imageEl, W = this._cropEl;
                    F || (F = p.doc.createElement("div"), this._imageEl = F);
                    var Z = F.style;
                    if (M) {
                        if (e && i)Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / v) + "px"; else {
                            var q = new Image, j = this;
                            q.onload = function () {
                                q.onload = null, e = q.width, i = q.height, Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / v) + "px", j._imageWidth = e, j._imageHeight = i, j._imageSrc = o
                            }, q.src = o
                        }
                        W || (W = p.doc.createElement("div"), W.style.overflow = "hidden", this._cropEl = W);
                        var U = W.style;
                        U.width = g((c + y * c / f) * D), U.height = g((d + x * d / v) * k), U.filter = S + ".Matrix(Dx=" + -y * c / f * D + ",Dy=" + -x * d / v * k + ")", W.parentNode || T.appendChild(W), F.parentNode != W && W.appendChild(F)
                    } else Z.width = g(D * c) + "px", Z.height = g(k * d) + "px", T.appendChild(F), W && W.parentNode && (T.removeChild(W), this._cropEl = null);
                    var X = "", Y = n.opacity;
                    Y < 1 && (X += ".Alpha(opacity=" + g(100 * Y) + ") "), X += S + ".AlphaImageLoader(src=" + o + ", SizingMethod=scale)", Z.filter = X, T.style.zIndex = O(this.zlevel, this.z, this.z2), P(t, T), null != n.text && this.drawRectText(t, this.getBoundingRect())
                }
            }, h.prototype.onRemove = function (t) {
                k(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
            }, h.prototype.onAdd = function (t) {
                P(t, this._vmlEl), this.appendRectText(t)
            };
            var W, Z = "normal", q = {}, j = 0, U = 100, X = document.createElement("div"), Y = function (t) {
                var e = q[t];
                if (!e) {
                    j > U && (j = 0, q = {});
                    var i, n = X.style;
                    try {
                        n.font = t, i = n.fontFamily.split(",")[0]
                    } catch (o) {
                    }
                    e = {
                        style: n.fontStyle || Z,
                        variant: n.fontVariant || Z,
                        weight: n.fontWeight || Z,
                        size: 0 | parseFloat(n.fontSize || 12),
                        family: i || "Microsoft YaHei"
                    }, q[t] = e, j++
                }
                return e
            };
            s.measureText = function (t, e) {
                var i = p.doc;
                W || (W = i.createElement("div"), W.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", p.doc.body.appendChild(W));
                try {
                    W.style.font = e
                } catch (n) {
                }
                return W.innerHTML = "", W.appendChild(i.createTextNode(t)), {width: W.offsetWidth}
            };
            for (var $ = new o, Q = function (t, e, i, n) {
                var o = this.style, r = o.text;
                if (null != r && (r += ""), r) {
                    var a, l, u = o.textAlign, h = Y(o.textFont), c = h.style + " " + h.variant + " " + h.weight + " " + h.size + 'px "' + h.family + '"', d = o.textBaseline, f = o.textVerticalAlign;
                    i = i || s.getBoundingRect(r, c, u, d);
                    var m = this.transform;
                    if (m && !n && ($.copy(e), $.applyTransform(m), e = $), n)a = e.x, l = e.y; else {
                        var v = o.textPosition, y = o.textDistance;
                        if (v instanceof Array)a = e.x + z(v[0], e.width), l = e.y + z(v[1], e.height), u = u || "left", d = d || "top"; else {
                            var x = s.adjustTextPositionOnRect(v, e, i, y);
                            a = x.x, l = x.y, u = u || x.textAlign, d = d || x.textBaseline
                        }
                    }
                    if (f) {
                        switch (f) {
                            case"middle":
                                l -= i.height / 2;
                                break;
                            case"bottom":
                                l -= i.height
                        }
                        d = "top"
                    }
                    var _ = h.size;
                    switch (d) {
                        case"hanging":
                        case"top":
                            l += _ / 1.75;
                            break;
                        case"middle":
                            break;
                        default:
                            l -= _ / 2.25
                    }
                    switch (u) {
                        case"left":
                            break;
                        case"center":
                            a -= i.width / 2;
                            break;
                        case"right":
                            a -= i.width
                    }
                    var S, M, T, I = p.createNode, A = this._textVmlEl;
                    A ? (T = A.firstChild, S = T.nextSibling, M = S.nextSibling) : (A = I("line"), S = I("path"), M = I("textpath"), T = I("skew"), M.style["v-text-align"] = "left", L(A), S.textpathok = !0, M.on = !0, A.from = "0 0", A.to = "1000 0.05", P(A, T), P(A, S), P(A, M), this._textVmlEl = A);
                    var D = [a, l], k = A.style;
                    m && n ? (b(D, D, m), T.on = !0, T.matrix = m[0].toFixed(3) + w + m[2].toFixed(3) + w + m[1].toFixed(3) + w + m[3].toFixed(3) + ",0,0", T.offset = (g(D[0]) || 0) + "," + (g(D[1]) || 0), T.origin = "0 0", k.left = "0px", k.top = "0px") : (T.on = !1, k.left = g(a) + "px", k.top = g(l) + "px"), M.string = C(r);
                    try {
                        M.style.font = c
                    } catch (E) {
                    }
                    B(A, "fill", {
                        fill: n ? o.fill : o.textFill,
                        opacity: o.opacity
                    }, this), B(A, "stroke", {
                        stroke: n ? o.stroke : o.textStroke,
                        opacity: o.opacity,
                        lineDash: o.lineDash
                    }, this), A.style.zIndex = O(this.zlevel, this.z, this.z2), P(t, A)
                }
            }, K = function (t) {
                k(t, this._textVmlEl), this._textVmlEl = null
            }, J = function (t) {
                P(t, this._textVmlEl)
            }, tt = [l, u, h, d, c], et = 0; et < tt.length; et++) {
                var it = tt[et].prototype;
                it.drawRectText = Q, it.removeRectText = K, it.appendRectText = J
            }
            c.prototype.brushVML = function (t) {
                var e = this.style;
                null != e.text ? this.drawRectText(t, {
                    x: e.x || 0,
                    y: e.y || 0,
                    width: 0,
                    height: 0
                }, this.getBoundingRect(), !0) : this.removeRectText(t)
            }, c.prototype.onRemove = function (t) {
                this.removeRectText(t)
            }, c.prototype.onAdd = function (t) {
                this.appendRectText(t)
            }
        }
    }, function (t, e, i) {
        i(220), i(77).registerPainter("vml", i(219))
    }, function (t, e, i) {
        var n = i(1), o = i(223), r = i(2);
        r.registerAction({type: "geoRoam", event: "geoRoam", update: "updateLayout"}, function (t, e) {
            var i = t.componentType || "series";
            e.eachComponent({mainType: i, query: t}, function (e) {
                var r = e.coordinateSystem;
                if ("geo" === r.type) {
                    var a = o.updateCenterAndZoom(r, t, e.get("scaleLimit"));
                    e.setCenter && e.setCenter(a.center), e.setZoom && e.setZoom(a.zoom), "series" === i && n.each(e.seriesGroup, function (t) {
                        t.setCenter(a.center), t.setZoom(a.zoom)
                    })
                }
            })
        })
    }, function (t, e) {
        var i = {};
        i.updateCenterAndZoom = function (t, e, i) {
            var n = t.getZoom(), o = t.getCenter(), r = e.zoom, a = t.dataToPoint(o);
            if (null != e.dx && null != e.dy) {
                a[0] -= e.dx, a[1] -= e.dy;
                var o = t.pointToData(a);
                t.setCenter(o)
            }
            if (null != r) {
                if (i) {
                    var s = i.min || 0, l = i.max || 1 / 0;
                    r = Math.max(Math.min(n * r, l), s) / n
                }
                t.scale[0] *= r, t.scale[1] *= r;
                var u = t.position, h = (e.originX - u[0]) * (r - 1), c = (e.originY - u[1]) * (r - 1);
                u[0] -= h, u[1] -= c, t.updateTransform();
                var o = t.pointToData(a);
                t.setCenter(o), t.setZoom(r * n)
            }
            return {center: t.getCenter(), zoom: t.getZoom()}
        }, t.exports = i
    }, function (t, e, i) {
        var n = i(5);
        t.exports = function (t) {
            var e = t.coordinateSystem;
            if (!e || "view" === e.type) {
                var i = e.getBoundingRect(), o = t.getData(), r = o.graph, a = 0, s = o.getSum("value"), l = 2 * Math.PI / (s || o.count()), u = i.width / 2 + i.x, h = i.height / 2 + i.y, c = Math.min(i.width, i.height) / 2;
                r.eachNode(function (t) {
                    var e = t.getValue("value");
                    a += l * (s ? e : 1) / 2, t.setLayout([c * Math.cos(a) + u, c * Math.sin(a) + h]), a += l * (s ? e : 1) / 2
                }), o.setLayout({cx: u, cy: h}), r.eachEdge(function (t) {
                    var e, i = t.getModel().get("lineStyle.normal.curveness") || 0, o = n.clone(t.node1.getLayout()), r = n.clone(t.node2.getLayout()), a = (o[0] + r[0]) / 2, s = (o[1] + r[1]) / 2;
                    +i && (i *= 3, e = [u * i + a * (1 - i), h * i + s * (1 - i)]), t.setLayout([o, r, e])
                })
            }
        }
    }, function (t, e, i) {
        var n = i(5);
        t.exports = function (t) {
            t.eachEdge(function (t) {
                var e = t.getModel().get("lineStyle.normal.curveness") || 0, i = n.clone(t.node1.getLayout()), o = n.clone(t.node2.getLayout()), r = [i, o];
                +e && r.push([(i[0] + o[0]) / 2 - (i[1] - o[1]) * e, (i[1] + o[1]) / 2 - (o[0] - i[0]) * e]), t.setLayout(r)
            })
        }
    }, function (t, e, i) {
        var n = i(225);
        t.exports = function (t) {
            var e = t.coordinateSystem;
            if (!e || "view" === e.type) {
                var i = t.getGraph();
                i.eachNode(function (t) {
                    var e = t.getModel();
                    t.setLayout([+e.get("x"), +e.get("y")])
                }), n(i)
            }
        }
    }, function (t, e, i) {
        function n(t, e, i) {
            o.Group.call(this), this.add(this.createLine(t, e, i)), this._updateEffectSymbol(t, e)
        }

        var o = i(3), r = i(94), a = i(1), s = i(26), l = i(5), u = i(17), h = n.prototype;
        h.createLine = function (t, e, i) {
            return new r(t, e, i)
        }, h._updateEffectSymbol = function (t, e) {
            var i = t.getItemModel(e), n = i.getModel("effect"), o = n.get("symbolSize"), r = n.get("symbol");
            a.isArray(o) || (o = [o, o]);
            var l = n.get("color") || t.getItemVisual(e, "color"), u = this.childAt(1);
            this._symbolType !== r && (this.remove(u), u = s.createSymbol(r, -.5, -.5, 1, 1, l), u.z2 = 100, u.culling = !0, this.add(u)), u && (u.setStyle("shadowColor", l), u.setStyle(n.getItemStyle(["color"])), u.attr("scale", o), u.setColor(l), u.attr("scale", o), this._symbolType = r, this._updateEffectAnimation(t, n, e))
        }, h._updateEffectAnimation = function (t, e, i) {
            var n = this.childAt(1);
            if (n) {
                var o = this, r = t.getItemLayout(i), s = 1e3 * e.get("period"), l = e.get("loop"), u = e.get("constantSpeed"), h = a.retrieve(e.get("delay"), function (e) {
                    return e / t.count() * s / 3
                }), c = "function" == typeof h;
                if (n.ignore = !0, this.updateAnimationPoints(n, r), u > 0 && (s = this.getLineLength(n) / u * 1e3), s !== this._period || l !== this._loop) {
                    n.stopAnimation();
                    var d = h;
                    c && (d = h(i)), n.__t > 0 && (d = -s * n.__t), n.__t = 0;
                    var f = n.animate("", l).when(s, {__t: 1}).delay(d).during(function () {
                        o.updateSymbolPosition(n)
                    });
                    l || f.done(function () {
                        o.remove(n)
                    }), f.start()
                }
                this._period = s, this._loop = l
            }
        }, h.getLineLength = function (t) {
            return l.dist(t.__p1, t.__cp1) + l.dist(t.__cp1, t.__p2)
        }, h.updateAnimationPoints = function (t, e) {
            t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
        }, h.updateData = function (t, e, i) {
            this.childAt(0).updateData(t, e, i), this._updateEffectSymbol(t, e)
        }, h.updateSymbolPosition = function (t) {
            var e = t.__p1, i = t.__p2, n = t.__cp1, o = t.__t, r = t.position, a = u.quadraticAt, s = u.quadraticDerivativeAt;
            r[0] = a(e[0], n[0], i[0], o), r[1] = a(e[1], n[1], i[1], o);
            var l = s(e[0], n[0], i[0], o), h = s(e[1], n[1], i[1], o);
            t.rotation = -Math.atan2(h, l) - Math.PI / 2, t.ignore = !1
        }, h.updateLayout = function (t, e) {
            this.childAt(0).updateLayout(t, e);
            var i = t.getItemModel(e).getModel("effect");
            this._updateEffectAnimation(t, i, e)
        }, a.inherits(n, o.Group), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            o.Group.call(this), this._createPolyline(t, e, i)
        }

        var o = i(3), r = i(1), a = n.prototype;
        a._createPolyline = function (t, e, i) {
            var n = t.getItemLayout(e), r = new o.Polyline({shape: {points: n}});
            this.add(r), this._updateCommonStl(t, e, i)
        }, a.updateData = function (t, e, i) {
            var n = t.hostModel, r = this.childAt(0), a = {shape: {points: t.getItemLayout(e)}};
            o.updateProps(r, a, n, e), this._updateCommonStl(t, e, i)
        }, a._updateCommonStl = function (t, e, i) {
            var n = this.childAt(0), a = t.getItemModel(e), s = t.getItemVisual(e, "color"), l = i && i.lineStyle, u = i && i.hoverLineStyle;
            i && !t.hasItemOption || (l = a.getModel("lineStyle.normal").getLineStyle(), u = a.getModel("lineStyle.emphasis").getLineStyle()), n.useStyle(r.defaults({
                strokeNoScale: !0,
                fill: "none",
                stroke: s
            }, l)), n.hoverStyle = u, o.setHoverStyle(this)
        }, a.updateLayout = function (t, e) {
            var i = this.childAt(0);
            i.setShape("points", t.getItemLayout(e))
        }, r.inherits(n, o.Group), t.exports = n
    }, function (t, e, i) {
        var n = i(14), o = i(381), r = i(242), a = i(29), s = i(23), l = i(1), u = i(34);
        t.exports = function (t, e, i, h, c) {
            for (var d = new o(h), f = 0; f < t.length; f++)d.addNode(l.retrieve(t[f].id, t[f].name, f), f);
            for (var p = [], g = [], m = 0, f = 0; f < e.length; f++) {
                var v = e[f], y = v.source, x = v.target;
                d.addEdge(y, x, m) && (g.push(v), p.push(l.retrieve(v.id, y + " > " + x)), m++)
            }
            var _, b = i.get("coordinateSystem");
            if ("cartesian2d" === b || "polar" === b)_ = u(t, i, i.ecModel); else {
                var w = s.get(b), S = a((w && "view" !== w.type ? w.dimensions || [] : []).concat(["value"]), t);
                _ = new n(S, i), _.initData(t)
            }
            var M = new n(["value"], i);
            return M.initData(g, p), c && c(_, M), r({
                mainData: _,
                struct: d,
                structAttr: "graph",
                datas: {node: _, edge: M},
                datasAttr: {node: "data", edge: "edgeData"}
            }), d.update(), d
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.getItemStyle(), n = t.get("areaColor");
            return n && (i.fill = n), i
        }

        function o(t, e, i, n, o) {
            i.off("click"), i.off("mousedown"), e.get("selectedMode") && (i.on("mousedown", function () {
                t._mouseDownFlag = !0
            }), i.on("click", function (a) {
                if (t._mouseDownFlag) {
                    t._mouseDownFlag = !1;
                    for (var s = a.target; !s.__region;)s = s.parent;
                    if (s) {
                        var l = s.__region, u = {
                            type: ("geo" === e.mainType ? "geo" : "map") + "ToggleSelect",
                            name: l.name,
                            from: o.uid
                        };
                        u[e.mainType + "Id"] = e.id, n.dispatchAction(u), r(e, i)
                    }
                }
            }))
        }

        function r(t, e) {
            e.eachChild(function (e) {
                e.__region && e.trigger(t.isSelected(e.__region.name) ? "emphasis" : "normal")
            })
        }

        function a(t, e) {
            var i = new l.Group;
            this._controller = new s(t.getZr(), e ? i : null, null), this.group = i, this._updateGroup = e, this._mouseDownFlag
        }

        var s = i(80), l = i(3), u = i(1);
        a.prototype = {
            constructor: a, draw: function (t, e, i, a, s) {
                var h = t.getData && t.getData(), c = t.coordinateSystem, d = this.group, f = c.scale, p = {
                    position: c.position,
                    scale: f
                };
                !d.childAt(0) || s ? d.attr(p) : l.updateProps(d, p, t), d.removeAll();
                var g = ["itemStyle", "normal"], m = ["itemStyle", "emphasis"], v = ["label", "normal"], y = ["label", "emphasis"];
                u.each(c.regions, function (e) {
                    var i = new l.Group, o = new l.CompoundPath({shape: {paths: []}});
                    i.add(o);
                    var r, a = t.getRegionModel(e.name) || t, s = a.getModel(g), c = a.getModel(m), p = n(s, f), x = n(c, f), _ = a.getModel(v), b = a.getModel(y);
                    if (h) {
                        r = h.indexOfName(e.name);
                        var w = h.getItemVisual(r, "color", !0);
                        w && (p.fill = w)
                    }
                    var S = _.getModel("textStyle"), M = b.getModel("textStyle");
                    u.each(e.contours, function (t) {
                        var e = new l.Polygon({shape: {points: t}});
                        o.shape.paths.push(e)
                    }), o.setStyle(p), o.style.strokeNoScale = !0, o.culling = !0;
                    var T = _.get("show"), I = b.get("show"), A = h && isNaN(h.get("value", r)), L = h && h.getItemLayout(r);
                    if (!h || A && (T || I) || L && L.showLabel) {
                        var C = h ? r : e.name, D = t.getFormattedLabel(C, "normal"), P = t.getFormattedLabel(C, "emphasis"), k = new l.Text({
                            style: {
                                text: T ? D || e.name : "",
                                fill: S.getTextColor(),
                                textFont: S.getFont(),
                                textAlign: "center",
                                textVerticalAlign: "middle"
                            },
                            hoverStyle: {text: I ? P || e.name : "", fill: M.getTextColor(), textFont: M.getFont()},
                            position: e.center.slice(),
                            scale: [1 / f[0], 1 / f[1]],
                            z2: 10,
                            silent: !0
                        });
                        i.add(k)
                    }
                    if (h)h.setItemGraphicEl(r, i); else {
                        var a = t.getRegionModel(e.name);
                        o.eventData = {
                            componentType: "geo",
                            geoIndex: t.componentIndex,
                            name: e.name,
                            region: a && a.option || {}
                        }
                    }
                    i.__region = e, l.setHoverStyle(i, x, {hoverSilentOnTouch: !!t.get("selectedMode")}), d.add(i)
                }), this._updateController(t, e, i), o(this, t, d, i, a), r(t, d)
            }, remove: function () {
                this.group.removeAll(), this._controller.dispose()
            }, _updateController: function (t, e, i) {
                function n() {
                    var e = {type: "geoRoam", componentType: a};
                    return e[a + "Id"] = t.id, e
                }

                var o = t.coordinateSystem, r = this._controller;
                r.zoomLimit = t.get("scaleLimit"), r.zoom = o.getZoom(), r.enable(t.get("roam") || !1);
                var a = t.mainType;
                r.off("pan").on("pan", function (t, e) {
                    this._mouseDownFlag = !1, i.dispatchAction(u.extend(n(), {dx: t, dy: e}))
                }, this), r.off("zoom").on("zoom", function (t, e, o) {
                    if (this._mouseDownFlag = !1, i.dispatchAction(u.extend(n(), {
                            zoom: t,
                            originX: e,
                            originY: o
                        })), this._updateGroup) {
                        var r = this.group, a = r.scale;
                        r.traverse(function (t) {
                            "text" === t.type && t.attr("scale", [1 / a[0], 1 / a[1]])
                        })
                    }
                }, this), r.setContainsPoint(function (t, e) {
                    return o.getViewRectAfterRoam().contain(t, e)
                })
            }
        }, t.exports = a
    }, function (t, e, i) {
        i(241), i(367), i(335);
        var n = i(2), o = i(1), r = 5;
        n.extendComponentView({
            type: "parallel", render: function (t, e, i) {
                var n = i.getZr();
                if (!this.__onMouseDown) {
                    var a;
                    n.on("mousedown", this.__onMouseDown = function (t) {
                        a = [t.offsetX, t.offsetY]
                    }), n.on("mouseup", this.__onMouseUp = function (e) {
                        var n = [e.offsetX, e.offsetY], s = Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2);
                        if (t.get("axisExpandable") && !(s > r)) {
                            var l = t.coordinateSystem, u = l.findClosestAxisDim(n);
                            if (u) {
                                var h = o.indexOf(l.dimensions, u);
                                i.dispatchAction({type: "parallelAxisExpand", axisExpandCenter: h})
                            }
                        }
                    })
                }
            }, dispose: function (t, e) {
                e.getZr().off(this.__onMouseDown), e.getZr().off(this.__onMouseUp)
            }
        }), n.registerPreprocessor(i(368))
    }, function (t, e, i) {
        var n = i(2), o = i(1), r = i(11), a = i(243), s = i(72), l = i(173), u = s.mapVisual, h = i(6), c = s.eachVisual, d = i(4), f = o.isArray, p = o.each, g = d.asc, m = d.linearMap, v = o.noop, y = ["#f6efa6", "#d88273", "#bf444c"], x = n.extendComponentModel({
            type: "visualMap",
            dependencies: ["series"],
            stateList: ["inRange", "outOfRange"],
            replacableOptionKeys: ["inRange", "outOfRange", "target", "controller", "color"],
            dataBound: [-(1 / 0), 1 / 0],
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                show: !0,
                zlevel: 0,
                z: 4,
                seriesIndex: null,
                min: 0,
                max: 200,
                dimension: null,
                inRange: null,
                outOfRange: null,
                left: 0,
                right: null,
                top: null,
                bottom: 0,
                itemWidth: null,
                itemHeight: null,
                inverse: !1,
                orient: "vertical",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                contentColor: "#5793f3",
                inactiveColor: "#aaa",
                borderWidth: 0,
                padding: 5,
                textGap: 10,
                precision: 0,
                color: null,
                formatter: null,
                text: null,
                textStyle: {color: "#333"}
            },
            init: function (t, e, i) {
                this._dataExtent, this.targetVisuals = {}, this.controllerVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i)
            },
            optionUpdated: function (t, e) {
                var i = this.option;
                r.canvasSupported || (i.realtime = !1), !e && l.replaceVisualOption(i, t, this.replacableOptionKeys), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
            },
            resetVisual: function (t) {
                var e = this.stateList;
                t = o.bind(t, this), this.controllerVisuals = l.createVisualMappings(this.option.controller, e, t), this.targetVisuals = l.createVisualMappings(this.option.target, e, t)
            },
            resetTargetSeries: function () {
                var t = this.option, e = null == t.seriesIndex;
                t.seriesIndex = e ? [] : h.normalizeToArray(t.seriesIndex), e && this.ecModel.eachSeries(function (e, i) {
                    t.seriesIndex.push(i)
                })
            },
            eachTargetSeries: function (t, e) {
                o.each(this.option.seriesIndex, function (i) {
                    t.call(e, this.ecModel.getSeriesByIndex(i))
                }, this)
            },
            isTargetSeries: function (t) {
                var e = !1;
                return this.eachTargetSeries(function (i) {
                    i === t && (e = !0)
                }), e
            },
            formatValueText: function (t, e, i) {
                function n(t) {
                    return t === u[0] ? "min" : t === u[1] ? "max" : (+t).toFixed(l)
                }

                var r, a, s = this.option, l = s.precision, u = this.dataBound, h = s.formatter;
                return i = i || ["<", ">"], o.isArray(t) && (t = t.slice(), r = !0), a = e ? t : r ? [n(t[0]), n(t[1])] : n(t), o.isString(h) ? h.replace("{value}", r ? a[0] : a).replace("{value2}", r ? a[1] : a) : o.isFunction(h) ? r ? h(t[0], t[1]) : h(t) : r ? t[0] === u[0] ? i[0] + " " + a[1] : t[1] === u[1] ? i[1] + " " + a[0] : a[0] + " - " + a[1] : a
            },
            resetExtent: function () {
                var t = this.option, e = g([t.min, t.max]);
                this._dataExtent = e
            },
            getDataDimension: function (t) {
                var e = this.option.dimension;
                return null != e ? e : t.dimensions.length - 1
            },
            getExtent: function () {
                return this._dataExtent.slice()
            },
            completeVisualOption: function () {
                function t(t) {
                    f(n.color) && !t.inRange && (t.inRange = {color: n.color.slice().reverse()}), t.inRange = t.inRange || {color: y}, p(this.stateList, function (e) {
                        var i = t[e];
                        if (o.isString(i)) {
                            var n = a.get(i, "active", d);
                            n ? (t[e] = {}, t[e][i] = n) : delete t[e]
                        }
                    }, this)
                }

                function e(t, e, i) {
                    var n = t[e], o = t[i];
                    n && !o && (o = t[i] = {}, p(n, function (t, e) {
                        if (s.isValidType(e)) {
                            var i = a.get(e, "inactive", d);
                            null != i && (o[e] = i, "color" !== e || o.hasOwnProperty("opacity") || o.hasOwnProperty("colorAlpha") || (o.opacity = [0, 0]))
                        }
                    }))
                }

                function i(t) {
                    var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol, i = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize, n = this.get("inactiveColor");
                    p(this.stateList, function (r) {
                        var a = this.itemSize, s = t[r];
                        s || (s = t[r] = {color: d ? n : [n]}), null == s.symbol && (s.symbol = e && o.clone(e) || (d ? "roundRect" : ["roundRect"])), null == s.symbolSize && (s.symbolSize = i && o.clone(i) || (d ? a[0] : [a[0], a[0]])), s.symbol = u(s.symbol, function (t) {
                            return "none" === t || "square" === t ? "roundRect" : t
                        });
                        var l = s.symbolSize;
                        if (null != l) {
                            var h = -(1 / 0);
                            c(l, function (t) {
                                t > h && (h = t)
                            }), s.symbolSize = u(l, function (t) {
                                return m(t, [0, h], [0, a[0]], !0)
                            })
                        }
                    }, this)
                }

                var n = this.option, r = {
                    inRange: n.inRange,
                    outOfRange: n.outOfRange
                }, l = n.target || (n.target = {}), h = n.controller || (n.controller = {});
                o.merge(l, r), o.merge(h, r);
                var d = this.isCategory();
                t.call(this, l), t.call(this, h), e.call(this, l, "inRange", "outOfRange"), i.call(this, h)
            },
            resetItemSize: function () {
                this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
            },
            isCategory: function () {
                return !!this.option.categories
            },
            setSelected: v,
            getValueState: v,
            getVisualMeta: v
        });
        t.exports = x
    }, function (t, e, i) {
        var n = i(1), o = i(3), r = i(9), a = i(12), s = i(2), l = i(72);
        t.exports = s.extendComponentView({
            type: "visualMap",
            autoPositionValues: {left: 1, right: 1, top: 1, bottom: 1},
            init: function (t, e) {
                this.ecModel = t, this.api = e, this.visualMapModel
            },
            render: function (t, e, i, n) {
                return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
            },
            renderBackground: function (t) {
                var e = this.visualMapModel, i = r.normalizeCssArray(e.get("padding") || 0), n = t.getBoundingRect();
                t.add(new o.Rect({
                    z2: -1,
                    silent: !0,
                    shape: {x: n.x - i[3], y: n.y - i[0], width: n.width + i[3] + i[1], height: n.height + i[0] + i[2]},
                    style: {
                        fill: e.get("backgroundColor"),
                        stroke: e.get("borderColor"),
                        lineWidth: e.get("borderWidth")
                    }
                }))
            },
            getControllerVisual: function (t, e, i) {
                function o(t) {
                    return u[t]
                }

                function r(t, e) {
                    u[t] = e
                }

                i = i || {};
                var a = i.forceState, s = this.visualMapModel, u = {};
                if ("symbol" === e && (u.symbol = s.get("itemSymbol")), "color" === e) {
                    var h = s.get("contentColor");
                    u.color = h
                }
                var c = s.controllerVisuals[a || s.getValueState(t)], d = l.prepareVisualTypes(c);
                return n.each(d, function (n) {
                    var a = c[n];
                    i.convertOpacityToAlpha && "opacity" === n && (n = "colorAlpha", a = c.__alphaForOpacity), l.dependsOn(n, e) && a && a.applyVisual(t, o, r)
                }), u[e]
            },
            positionGroup: function (t) {
                var e = this.visualMapModel, i = this.api;
                a.positionElement(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()})
            },
            doRender: n.noop
        })
    }, function (t, e, i) {
        var n = i(1), o = i(12), r = {
            getItemAlign: function (t, e, i) {
                var n = t.option, r = n.align;
                if (null != r && "auto" !== r)return r;
                for (var a = {
                    width: e.getWidth(),
                    height: e.getHeight()
                }, s = "horizontal" === n.orient ? 1 : 0, l = [["left", "right", "width"], ["top", "bottom", "height"]], u = l[s], h = [0, null, 10], c = {}, d = 0; d < 3; d++)c[l[1 - s][d]] = h[d], c[u[d]] = 2 === d ? i[0] : n[u[d]];
                var f = [["x", "width", 3], ["y", "height", 0]][s], p = o.getLayoutRect(c, a, n.padding);
                return u[(p.margin[f[2]] || 0) + p[f[0]] + .5 * p[f[1]] < .5 * a[f[1]] ? 0 : 1]
            }, convertDataIndex: function (t) {
                return n.each(t || [], function (e) {
                    null != t.dataIndex && (t.dataIndexInside = t.dataIndex, t.dataIndex = null)
                }), t
            }
        };
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.hasOwnProperty && t.hasOwnProperty(e)
        }

        var o = i(1), r = o.each;
        t.exports = function (t) {
            var e = t && t.visualMap;
            o.isArray(e) || (e = e ? [e] : []), r(e, function (t) {
                if (t) {
                    n(t, "splitList") && !n(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
                    var e = t.pieces;
                    e && o.isArray(e) && r(e, function (t) {
                        o.isObject(t) && (n(t, "start") && !n(t, "min") && (t.min = t.start), n(t, "end") && !n(t, "max") && (t.max = t.end))
                    })
                }
            })
        }
    }, function (t, e, i) {
        i(13).registerSubTypeDefaulter("visualMap", function (t) {
            return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
        })
    }, function (t, e, i) {
        function n(t, e) {
            t.eachTargetSeries(function (e) {
                var i = e.getData();
                s.applyVisual(t.stateList, t.targetVisuals, i, t.getValueState, t, t.getDataDimension(i))
            })
        }

        function o(t) {
            t.eachSeries(function (e) {
                var i = e.getData(), n = [];
                t.eachComponent("visualMap", function (t) {
                    if (t.isTargetSeries(e)) {
                        var o = t.getVisualMeta(u.bind(r, null, e, t)) || {stops: [], outerColors: []};
                        o.dimension = t.getDataDimension(i), n.push(o)
                    }
                }), e.getData().setVisual("visualMeta", n)
            })
        }

        function r(t, e, i, n) {
            function o(t) {
                return u[t]
            }

            function r(t, e) {
                u[t] = e
            }

            for (var a = e.targetVisuals[n], s = l.prepareVisualTypes(a), u = {color: t.getData().getVisual("color")}, h = 0, c = s.length; h < c; h++) {
                var d = s[h], f = a["opacity" === d ? "__alphaForOpacity" : d];
                f && f.applyVisual(i, o, r)
            }
            return u.color
        }

        var a = i(2), s = i(173), l = i(72), u = i(1);
        a.registerVisual(a.PRIORITY.VISUAL.COMPONENT, function (t) {
            t.eachComponent("visualMap", function (e) {
                n(e, t)
            }), o(t)
        })
    }, function (t, e, i) {
        var n = i(2), o = {type: "selectDataRange", event: "dataRangeSelected", update: "update"};
        n.registerAction(o, function (t, e) {
            e.eachComponent({mainType: "visualMap", query: t}, function (e) {
                e.setSelected(t.selected)
            })
        })
    }, function (t, e, i) {
        function n() {
            l.call(this)
        }

        function o(t) {
            this.name = t, this.zoomLimit, l.call(this), this._roamTransform = new n, this._viewTransform = new n, this._center, this._zoom
        }

        function r(t, e, i, n) {
            var o = i.seriesModel, r = o ? o.coordinateSystem : null;
            return r === this ? r[t](n) : null
        }

        var a = i(5), s = i(19), l = i(88), u = i(1), h = i(8), c = a.applyTransform;
        u.mixin(n, l), o.prototype = {
            constructor: o,
            type: "view",
            dimensions: ["x", "y"],
            setBoundingRect: function (t, e, i, n) {
                return this._rect = new h(t, e, i, n), this._rect
            },
            getBoundingRect: function () {
                return this._rect
            },
            setViewRect: function (t, e, i, n) {
                this.transformTo(t, e, i, n), this._viewRect = new h(t, e, i, n)
            },
            transformTo: function (t, e, i, n) {
                var o = this.getBoundingRect(), r = this._viewTransform;
                r.transform = o.calculateTransform(new h(t, e, i, n)), r.decomposeTransform(), this._updateTransform()
            },
            setCenter: function (t) {
                t && (this._center = t, this._updateCenterAndZoom())
            },
            setZoom: function (t) {
                t = t || 1;
                var e = this.zoomLimit;
                e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom()
            },
            getDefaultCenter: function () {
                var t = this.getBoundingRect(), e = t.x + t.width / 2, i = t.y + t.height / 2;
                return [e, i]
            },
            getCenter: function () {
                return this._center || this.getDefaultCenter()
            },
            getZoom: function () {
                return this._zoom || 1
            },
            getRoamTransform: function () {
                return this._roamTransform
            },
            _updateCenterAndZoom: function () {
                var t = this._viewTransform.getLocalTransform(), e = this._roamTransform, i = this.getDefaultCenter(), n = this.getCenter(), o = this.getZoom();
                n = a.applyTransform([], n, t), i = a.applyTransform([], i, t), e.origin = n, e.position = [i[0] - n[0], i[1] - n[1]], e.scale = [o, o], this._updateTransform()
            },
            _updateTransform: function () {
                var t = this._roamTransform, e = this._viewTransform;
                e.parent = t, t.updateTransform(), e.updateTransform(), e.transform && s.copy(this.transform || (this.transform = []), e.transform), this.transform ? (this.invTransform = this.invTransform || [], s.invert(this.invTransform, this.transform)) : this.invTransform = null, this.decomposeTransform()
            },
            getViewRect: function () {
                return this._viewRect
            },
            getViewRectAfterRoam: function () {
                var t = this.getBoundingRect().clone();
                return t.applyTransform(this.transform), t
            },
            dataToPoint: function (t) {
                var e = this.transform;
                return e ? c([], t, e) : [t[0], t[1]]
            },
            pointToData: function (t) {
                var e = this.invTransform;
                return e ? c([], t, e) : [t[0], t[1]]
            },
            convertToPixel: u.curry(r, "dataToPoint"),
            convertFromPixel: u.curry(r, "pointToData"),
            containPoint: function (t) {
                return this.getViewRectAfterRoam().contain(t[0], t[1])
            }
        }, u.mixin(o, l), t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            if (this.name = t, this.contours = e, i)i = [i[0], i[1]]; else {
                var n = this.getBoundingRect();
                i = [n.x + n.width / 2, n.y + n.height / 2]
            }
            this.center = i
        }

        var o = i(244), r = i(8), a = i(74), s = i(5);
        n.prototype = {
            constructor: n, getBoundingRect: function () {
                var t = this._rect;
                if (t)return t;
                for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], o = [], l = [], u = this.contours, h = 0; h < u.length; h++)a.fromPoints(u[h], o, l), s.min(i, i, o), s.max(n, n, l);
                return 0 === h && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new r(i[0], i[1], n[0] - i[0], n[1] - i[1])
            }, contain: function (t) {
                var e = this.getBoundingRect(), i = this.contours;
                if (e.contain(t[0], t[1]))for (var n = 0, r = i.length; n < r; n++)if (o.contain(i[n], t[0], t[1]))return !0;
                return !1
            }, transformTo: function (t, e, i, n) {
                var o = this.getBoundingRect(), a = o.width / o.height;
                i ? n || (n = i / a) : i = a * n;
                for (var l = new r(t, e, i, n), u = o.calculateTransform(l), h = this.contours, c = 0; c < h.length; c++)for (var d = 0; d < h[c].length; d++)s.applyTransform(h[c][d], h[c][d], u);
                o = this._rect, o.copy(l), this.center = [o.x + o.width / 2, o.y + o.height / 2]
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = [];
            return t.eachComponent("parallel", function (n, r) {
                var a = new o(n, t, e);
                a.name = "parallel_" + r, a.resize(n, e), n.coordinateSystem = a, a.model = n, i.push(a)
            }), t.eachSeries(function (e) {
                if ("parallel" === e.get("coordinateSystem")) {
                    var i = t.queryComponents({
                        mainType: "parallel",
                        index: e.get("parallelIndex"),
                        id: e.get("parallelId")
                    })[0];
                    e.coordinateSystem = i.coordinateSystem
                }
            }), i
        }

        var o = i(365);
        i(23).register("parallel", {create: n})
    }, function (t, e, i) {
        function n(t) {
            var e = t.mainData, i = t.datas;
            i || (i = {main: e}, t.datasAttr = {main: "data"}), t.datas = t.mainData = null, u(e, i, t), d(i, function (i) {
                d(e.TRANSFERABLE_METHODS, function (e) {
                    i.wrapMethod(e, c.curry(o, t))
                })
            }), e.wrapMethod("cloneShallow", c.curry(a, t)), d(e.CHANGABLE_METHODS, function (i) {
                e.wrapMethod(i, c.curry(r, t))
            }), c.assert(i[e.dataType] === e)
        }

        function o(t, e) {
            if (l(this)) {
                var i = c.extend({}, this[f]);
                i[this.dataType] = e, u(e, i, t)
            } else h(e, this.dataType, this[p], t);
            return e
        }

        function r(t, e) {
            return t.struct && t.struct.update(this), e
        }

        function a(t, e) {
            return d(e[f], function (i, n) {
                i !== e && h(i.cloneShallow(), n, e, t)
            }), e
        }

        function s(t) {
            var e = this[p];
            return null == t || null == e ? e : e[f][t]
        }

        function l(t) {
            return t[p] === t
        }

        function u(t, e, i) {
            t[f] = {}, d(e, function (e, n) {
                h(e, n, t, i)
            })
        }

        function h(t, e, i, n) {
            i[f][e] = t, t[p] = i, t.dataType = e, n.struct && (t[n.structAttr] = n.struct, n.struct[n.datasAttr[e]] = t), t.getLinkedData = s
        }

        var c = i(1), d = c.each, f = "\0__link_datas", p = "\0__link_mainData";
        t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = {
            get: function (t, e, i) {
                var o = n.clone((r[t] || {})[e]);
                return i && n.isArray(o) ? o[o.length - 1] : o
            }
        }, r = {
            color: {active: ["#006edd", "#e0ffff"], inactive: ["rgba(0,0,0,0)"]},
            colorHue: {active: [0, 360], inactive: [0, 0]},
            colorSaturation: {active: [.3, 1], inactive: [0, 0]},
            colorLightness: {active: [.9, .5], inactive: [0, 0]},
            colorAlpha: {active: [.3, 1], inactive: [0, 0]},
            opacity: {active: [.3, 1], inactive: [0, 0]},
            symbol: {active: ["circle", "roundRect", "diamond"], inactive: ["none"]},
            symbolSize: {active: [10, 50], inactive: [0, 0]}
        };
        t.exports = o
    }, function (t, e, i) {
        function n(t, e) {
            return Math.abs(t - e) < a
        }

        function o(t, e, i) {
            var o = 0, a = t[0];
            if (!a)return !1;
            for (var s = 1; s < t.length; s++) {
                var l = t[s];
                o += r(a[0], a[1], l[0], l[1], e, i), a = l
            }
            var u = t[0];
            return n(a[0], u[0]) && n(a[1], u[1]) || (o += r(a[0], a[1], u[0], u[1], e, i)), 0 !== o
        }

        var r = i(86), a = 1e-8;
        t.exports = {contain: o}
    }, function (t, e, i) {
        var n = i(2);
        i(246), i(247), n.registerVisual(i(249)), n.registerLayout(i(248))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(15), r = i(171), a = o.extend({
            type: "series.boxplot",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["min", "Q1", "median", "Q3", "max"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                layout: null,
                boxWidth: [7, 50],
                itemStyle: {
                    normal: {color: "#fff", borderWidth: 1},
                    emphasis: {
                        borderWidth: 2,
                        shadowBlur: 5,
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                        shadowColor: "rgba(0,0,0,0.4)"
                    }
                },
                animationEasing: "elasticOut",
                animationDuration: 800
            }
        });
        n.mixin(a, r.seriesModelMixin, !0), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = e.getItemModel(i), o = n.getModel(u), r = e.getItemVisual(i, "color"), s = o.getItemStyle(["borderColor"]), l = t.childAt(t.whiskerIndex);
            l.style.set(s), l.style.stroke = r, l.dirty();
            var c = t.childAt(t.bodyIndex);
            c.style.set(s), c.style.stroke = r, c.dirty();
            var d = n.getModel(h).getItemStyle();
            a.setHoverStyle(t, d)
        }

        var o = i(1), r = i(27), a = i(3), s = i(171), l = r.extend({
            type: "boxplot", getStyleUpdater: function () {
                return n
            }, dispose: o.noop
        });
        o.mixin(l, s.viewMixin, !0);
        var u = ["itemStyle", "normal"], h = ["itemStyle", "emphasis"];
        t.exports = l
    }, function (t, e, i) {
        function n(t) {
            var e = [], i = [];
            return t.eachSeriesByType("boxplot", function (t) {
                var n = t.getBaseAxis(), o = a.indexOf(i, n);
                o < 0 && (o = i.length, i[o] = n, e[o] = {axis: n, seriesModels: []}), e[o].seriesModels.push(t)
            }), e
        }

        function o(t) {
            var e, i, n = t.axis, o = t.seriesModels, r = o.length, s = t.boxWidthList = [], h = t.boxOffsetList = [], c = [];
            if ("category" === n.type)i = n.getBandWidth(); else {
                var d = 0;
                u(o, function (t) {
                    d = Math.max(d, t.getData().count())
                }), e = n.getExtent(), Math.abs(e[1] - e[0]) / d
            }
            u(o, function (t) {
                var e = t.get("boxWidth");
                a.isArray(e) || (e = [e, e]), c.push([l(e[0], i) || 0, l(e[1], i) || 0])
            });
            var f = .8 * i - 2, p = f / r * .3, g = (f - p * (r - 1)) / r, m = g / 2 - f / 2;
            u(o, function (t, e) {
                h.push(m), m += p + g, s.push(Math.min(Math.max(g, c[e][0]), c[e][1]))
            })
        }

        function r(t, e, i) {
            var n = t.coordinateSystem, o = t.getData(), r = t.dimensions, a = t.get("layout"), s = i / 2;
            o.each(r, function () {
                function t(t) {
                    var i = [];
                    i[f] = c, i[p] = t;
                    var o;
                    return isNaN(c) || isNaN(t) ? o = [NaN, NaN] : (o = n.dataToPoint(i), o[f] += e), o
                }

                function i(t, e) {
                    var i = t.slice(), n = t.slice();
                    i[f] += s, n[f] -= s, e ? x.push(i, n) : x.push(n, i)
                }

                function l(t) {
                    var e = [t.slice(), t.slice()];
                    e[0][f] -= s, e[1][f] += s, y.push(e)
                }

                var u = arguments, h = r.length, c = u[0], d = u[h], f = "horizontal" === a ? 0 : 1, p = 1 - f, g = t(u[3]), m = t(u[1]), v = t(u[5]), y = [[m, t(u[2])], [v, t(u[4])]];
                l(m), l(v), l(g);
                var x = [];
                i(y[0][1], 0), i(y[1][1], 1), o.setItemLayout(d, {
                    chartLayout: a,
                    initBaseline: g[p],
                    median: g,
                    bodyEnds: x,
                    whiskerEnds: y
                })
            })
        }

        var a = i(1), s = i(4), l = s.parsePercent, u = a.each;
        t.exports = function (t) {
            var e = n(t);
            u(e, function (t) {
                var e = t.seriesModels;
                e.length && (o(t), u(e, function (e, i) {
                    r(e, t.boxOffsetList[i], t.boxWidthList[i])
                }))
            })
        }
    }, function (t, e) {
        var i = ["itemStyle", "normal", "borderColor"];
        t.exports = function (t, e) {
            var n = t.get("color");
            t.eachRawSeriesByType("boxplot", function (e) {
                var o = n[e.seriesIndex % n.length], r = e.getData();
                r.setVisual({
                    legendSymbol: "roundRect",
                    color: e.get(i) || o
                }), t.isSeriesFiltered(e) || r.each(function (t) {
                    var e = r.getItemModel(t);
                    r.setItemVisual(t, {color: e.get(i, !0)})
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(251), i(252), n.registerPreprocessor(i(255)), n.registerVisual(i(254)), n.registerLayout(i(253))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(15), r = i(171), a = i(9), s = a.encodeHTML, l = a.addCommas, u = o.extend({
            type: "series.candlestick",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["open", "close", "lowest", "highest"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                layout: null,
                itemStyle: {
                    normal: {
                        color: "#c23531",
                        color0: "#314656",
                        borderWidth: 1,
                        borderColor: "#c23531",
                        borderColor0: "#314656"
                    }, emphasis: {borderWidth: 2}
                },
                animationUpdate: !1,
                animationEasing: "linear",
                animationDuration: 300
            },
            getShadowDim: function () {
                return "open"
            },
            formatTooltip: function (t, e) {
                var i = n.map(this.valueDimensions, function (e) {
                    return e + ": " + l(this._data.get(e, t))
                }, this);
                return s(this.name) + "<br />" + i.join("<br />")
            },
            brushSelector: function (t, e) {
                return e.rect(t.brushRect)
            }
        });
        n.mixin(u, r.seriesModelMixin, !0), t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = e.getItemModel(i), o = n.getModel(u), r = e.getItemVisual(i, "color"), s = e.getItemVisual(i, "borderColor") || r, l = o.getItemStyle(["color", "color0", "borderColor", "borderColor0"]), c = t.childAt(t.whiskerIndex);
            c.useStyle(l), c.style.stroke = s;
            var d = t.childAt(t.bodyIndex);
            d.useStyle(l), d.style.fill = r, d.style.stroke = s;
            var f = n.getModel(h).getItemStyle();
            a.setHoverStyle(t, f)
        }

        var o = i(1), r = i(27), a = i(3), s = i(171), l = r.extend({
            type: "candlestick", getStyleUpdater: function () {
                return n
            }, dispose: o.noop
        });
        o.mixin(l, s.viewMixin, !0);
        var u = ["itemStyle", "normal"], h = ["itemStyle", "emphasis"];
        t.exports = l
    }, function (t, e) {
        function i(t, e) {
            var i, a = t.getBaseAxis(), s = "category" === a.type ? a.getBandWidth() : (i = a.getExtent(), Math.abs(i[1] - i[0]) / e.count());
            return s / 2 - 2 > o ? s / 2 - 2 : s - o > r ? o : Math.max(s - r, n)
        }

        var n = 2, o = 5, r = 4;
        t.exports = function (t) {
            t.eachSeriesByType("candlestick", function (t) {
                var e = t.coordinateSystem, n = t.getData(), o = t.dimensions, r = t.get("layout"), a = i(t, n);
                n.each(o, function () {
                    function t(t) {
                        var i = [];
                        return i[d] = h, i[f] = t, isNaN(h) || isNaN(t) ? [NaN, NaN] : e.dataToPoint(i)
                    }

                    function i(t, e) {
                        var i = t.slice(), n = t.slice();
                        i[d] += a / 2, n[d] -= a / 2, e ? T.push(i, n) : T.push(n, i)
                    }

                    function s() {
                        var e = t(Math.min(p, g, m, v)), i = t(Math.max(p, g, m, v));
                        return e[d] -= a / 2, i[d] -= a / 2, {
                            x: e[0],
                            y: e[1],
                            width: f ? a : i[0] - e[0],
                            height: f ? i[1] - e[1] : a
                        }
                    }

                    var l = arguments, u = o.length, h = l[0], c = l[u], d = "horizontal" === r ? 0 : 1, f = 1 - d, p = l[1], g = l[2], m = l[3], v = l[4], y = Math.min(p, g), x = Math.max(p, g), _ = t(y), b = t(x), w = t(m), S = t(v), M = [[S, b], [w, _]], T = [];
                    i(b, 0), i(_, 1), n.setItemLayout(c, {
                        chartLayout: r,
                        sign: p > g ? -1 : p < g ? 1 : 0,
                        initBaseline: p > g ? b[f] : _[f],
                        bodyEnds: T,
                        whiskerEnds: M,
                        brushRect: s()
                    })
                }, !0)
            })
        }
    }, function (t, e) {
        var i = ["itemStyle", "normal", "borderColor"], n = ["itemStyle", "normal", "borderColor0"], o = ["itemStyle", "normal", "color"], r = ["itemStyle", "normal", "color0"];
        t.exports = function (t, e) {
            t.eachRawSeriesByType("candlestick", function (e) {
                var a = e.getData();
                a.setVisual({legendSymbol: "roundRect"}), t.isSeriesFiltered(e) || a.each(function (t) {
                    var e = a.getItemModel(t), s = a.getItemLayout(t).sign;
                    a.setItemVisual(t, {color: e.get(s > 0 ? o : r), borderColor: e.get(s > 0 ? i : n)})
                })
            })
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            t && n.isArray(t.series) && n.each(t.series, function (t) {
                n.isObject(t) && "k" === t.type && (t.type = "candlestick")
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(257), i(258), o.registerVisual(n.curry(i(47), "effectScatter", "circle", null)), o.registerLayout(n.curry(i(56), "effectScatter"))
    }, function (t, e, i) {
        "use strict";
        var n = i(34), o = i(15);
        t.exports = o.extend({
            type: "series.effectScatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                var i = n(t.data, this, e);
                return i
            },
            brushSelector: "point",
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                effectType: "ripple",
                progressive: 0,
                showEffectOn: "render",
                rippleEffect: {period: 4, scale: 2.5, brushType: "fill"},
                symbolSize: 10
            }
        })
    }, function (t, e, i) {
        var n = i(39), o = i(285);
        i(2).extendChartView({
            type: "effectScatter", init: function () {
                this._symbolDraw = new n(o)
            }, render: function (t, e, i) {
                var n = t.getData(), o = this._symbolDraw;
                o.updateData(n), this.group.add(o.group)
            }, updateLayout: function () {
                this._symbolDraw.updateLayout()
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(e)
            }, dispose: function () {
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(260), i(261), o.registerVisual(n.curry(i(73), "funnel")), o.registerLayout(i(262)), o.registerProcessor(n.curry(i(71), "funnel"))
    }, function (t, e, i) {
        "use strict";
        var n = i(14), o = i(6), r = i(29), a = i(2).extendSeriesModel({
            type: "series.funnel",
            init: function (t) {
                a.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this._defaultLabelLine(t)
            },
            getInitialData: function (t, e) {
                var i = r(["value"], t.data), o = new n(i, this);
                return o.initData(t.data), o
            },
            _defaultLabelLine: function (t) {
                o.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, i = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                minSize: "0%",
                maxSize: "100%",
                sort: "descending",
                gap: 0,
                funnelAlign: "center",
                label: {normal: {show: !0, position: "outer"}, emphasis: {show: !0}},
                labelLine: {normal: {show: !0, length: 20, lineStyle: {width: 1, type: "solid"}}, emphasis: {}},
                itemStyle: {normal: {borderColor: "#fff", borderWidth: 1}, emphasis: {}}
            }
        });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            function i() {
                a.ignore = a.hoverIgnore, s.ignore = s.hoverIgnore
            }

            function n() {
                a.ignore = a.normalIgnore, s.ignore = s.normalIgnore
            }

            r.Group.call(this);
            var o = new r.Polygon, a = new r.Polyline, s = new r.Text;
            this.add(o), this.add(a), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function o(t, e, i, n) {
            var o = n.getModel("textStyle"), r = n.get("position"), s = "inside" === r || "inner" === r || "center" === r;
            return {
                fill: o.getTextColor() || (s ? "#fff" : t.getItemVisual(e, "color")),
                textFont: o.getFont(),
                text: a.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
            }
        }

        var r = i(3), a = i(1), s = n.prototype, l = ["itemStyle", "normal", "opacity"];
        s.updateData = function (t, e, i) {
            var n = this.childAt(0), o = t.hostModel, s = t.getItemModel(e), u = t.getItemLayout(e), h = t.getItemModel(e).get(l);
            h = null == h ? 1 : h, n.useStyle({}), i ? (n.setShape({points: u.points}), n.setStyle({opacity: 0}), r.initProps(n, {style: {opacity: h}}, o, e)) : r.updateProps(n, {
                style: {opacity: h},
                shape: {points: u.points}
            }, o, e);
            var c = s.getModel("itemStyle"), d = t.getItemVisual(e, "color");
            n.setStyle(a.defaults({
                lineJoin: "round",
                fill: d
            }, c.getModel("normal").getItemStyle(["opacity"]))), n.hoverStyle = c.getModel("emphasis").getItemStyle(), this._updateLabel(t, e), r.setHoverStyle(this)
        }, s._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), a = t.hostModel, s = t.getItemModel(e), l = t.getItemLayout(e), u = l.label, h = t.getItemVisual(e, "color");
            r.updateProps(i, {shape: {points: u.linePoints || u.linePoints}}, a, e), r.updateProps(n, {
                style: {
                    x: u.x,
                    y: u.y
                }
            }, a, e), n.attr({
                style: {textAlign: u.textAlign, textVerticalAlign: u.verticalAlign, textFont: u.font},
                rotation: u.rotation,
                origin: [u.x, u.y],
                z2: 10
            });
            var c = s.getModel("label.normal"), d = s.getModel("label.emphasis"), f = s.getModel("labelLine.normal"), p = s.getModel("labelLine.emphasis");
            n.setStyle(o(t, e, "normal", c)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({stroke: h}), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = o(t, e, "emphasis", d), i.hoverStyle = p.getModel("lineStyle").getLineStyle()
        }, a.inherits(n, r.Group);
        var u = i(27).extend({
            type: "funnel", render: function (t, e, i) {
                var o = t.getData(), r = this._data, a = this.group;
                o.diff(r).add(function (t) {
                    var e = new n(o, t);
                    o.setItemGraphicEl(t, e), a.add(e)
                }).update(function (t, e) {
                    var i = r.getItemGraphicEl(e);
                    i.updateData(o, t), a.add(i), o.setItemGraphicEl(t, i)
                }).remove(function (t) {
                    var e = r.getItemGraphicEl(t);
                    a.remove(e)
                }).execute(), this._data = o
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }, dispose: function () {
            }
        });
        t.exports = u
    }, function (t, e, i) {
        function n(t, e) {
            return a.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
        }

        function o(t, e) {
            for (var i = t.mapArray("value", function (t) {
                return t
            }), n = [], o = "ascending" === e, r = 0, a = t.count(); r < a; r++)n[r] = r;
            return n.sort(function (t, e) {
                return o ? i[t] - i[e] : i[e] - i[t]
            }), n
        }

        function r(t) {
            t.each(function (e) {
                var i, n, o, r, a = t.getItemModel(e), s = a.getModel("label.normal"), l = s.get("position"), u = a.getModel("labelLine.normal"), h = t.getItemLayout(e), c = h.points, d = "inner" === l || "inside" === l || "center" === l;
                if (d)n = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4, o = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4, i = "center", r = [[n, o], [n, o]]; else {
                    var f, p, g, m = u.get("length");
                    "left" === l ? (f = (c[3][0] + c[0][0]) / 2, p = (c[3][1] + c[0][1]) / 2, g = f - m, n = g - 5, i = "right") : (f = (c[1][0] + c[2][0]) / 2, p = (c[1][1] + c[2][1]) / 2, g = f + m, n = g + 5, i = "left");
                    var v = p;
                    r = [[f, p], [g, v]], o = v
                }
                h.label = {linePoints: r, x: n, y: o, verticalAlign: "middle", textAlign: i, inside: d}
            })
        }

        var a = i(12), s = i(4), l = s.parsePercent;
        t.exports = function (t, e, i) {
            t.eachSeriesByType("funnel", function (t) {
                var i = t.getData(), a = t.get("sort"), u = n(t, e), h = o(i, a), c = [l(t.get("minSize"), u.width), l(t.get("maxSize"), u.width)], d = i.getDataExtent("value"), f = t.get("min"), p = t.get("max");
                null == f && (f = Math.min(d[0], 0)), null == p && (p = d[1]);
                var g = t.get("funnelAlign"), m = t.get("gap"), v = (u.height - m * (i.count() - 1)) / i.count(), y = u.y, x = function (t, e) {
                    var n, o = i.get("value", t) || 0, r = s.linearMap(o, [f, p], c, !0);
                    switch (g) {
                        case"left":
                            n = u.x;
                            break;
                        case"center":
                            n = u.x + (u.width - r) / 2;
                            break;
                        case"right":
                            n = u.x + u.width - r
                    }
                    return [[n, e], [n + r, e]]
                };
                "ascending" === a && (v = -v, m = -m, y += u.height, h = h.reverse());
                for (var _ = 0; _ < h.length; _++) {
                    var b = h[_], w = h[_ + 1], S = x(b, y), M = x(w, y + v);
                    y += v + m, i.setItemLayout(b, {points: S.concat(M.slice().reverse())})
                }
                r(i)
            })
        }
    }, function (t, e, i) {
        i(264), i(265)
    }, function (t, e, i) {
        var n = i(14), o = i(15), r = i(1), a = o.extend({
            type: "series.gauge",
            getInitialData: function (t, e) {
                var i = new n(["value"], this), o = t.data || [];
                return r.isArray(o) || (o = [o]), i.initData(o), i
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                center: ["50%", "50%"],
                legendHoverLink: !0,
                radius: "75%",
                startAngle: 225,
                endAngle: -45,
                clockwise: !0,
                min: 0,
                max: 100,
                splitNumber: 10,
                axisLine: {show: !0, lineStyle: {color: [[.2, "#91c7ae"], [.8, "#63869e"], [1, "#c23531"]], width: 30}},
                splitLine: {show: !0, length: 30, lineStyle: {color: "#eee", width: 2, type: "solid"}},
                axisTick: {show: !0, splitNumber: 5, length: 8, lineStyle: {color: "#eee", width: 1, type: "solid"}},
                axisLabel: {show: !0, distance: 5, textStyle: {color: "auto"}},
                pointer: {show: !0, length: "80%", width: 8},
                itemStyle: {normal: {color: "auto"}},
                title: {show: !0, offsetCenter: [0, "-40%"], textStyle: {color: "#333", fontSize: 15}},
                detail: {
                    show: !0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    borderColor: "#ccc",
                    width: 100,
                    height: 40,
                    offsetCenter: [0, "40%"],
                    textStyle: {color: "auto", fontSize: 30}
                }
            }
        });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.get("center"), n = e.getWidth(), o = e.getHeight(), r = Math.min(n, o), a = l(i[0], e.getWidth()), s = l(i[1], e.getHeight()), u = l(t.get("radius"), r / 2);
            return {cx: a, cy: s, r: u}
        }

        function o(t, e) {
            return e && ("string" == typeof e ? t = e.replace("{value}", null != t ? t : "") : "function" == typeof e && (t = e(t))), t
        }

        var r = i(266), a = i(3), s = i(4), l = s.parsePercent, u = 2 * Math.PI, h = i(27).extend({
            type: "gauge",
            render: function (t, e, i) {
                this.group.removeAll();
                var o = t.get("axisLine.lineStyle.color"), r = n(t, i);
                this._renderMain(t, e, i, o, r)
            },
            dispose: function () {
            },
            _renderMain: function (t, e, i, n, o) {
                for (var r = this.group, s = t.getModel("axisLine"), l = s.getModel("lineStyle"), h = t.get("clockwise"), c = -t.get("startAngle") / 180 * Math.PI, d = -t.get("endAngle") / 180 * Math.PI, f = (d - c) % u, p = c, g = l.get("width"), m = 0; m < n.length; m++) {
                    var v = Math.min(Math.max(n[m][0], 0), 1), d = c + f * v, y = new a.Sector({
                        shape: {
                            startAngle: p,
                            endAngle: d,
                            cx: o.cx,
                            cy: o.cy,
                            clockwise: h,
                            r0: o.r - g,
                            r: o.r
                        }, silent: !0
                    });
                    y.setStyle({fill: n[m][1]}), y.setStyle(l.getLineStyle(["color", "borderWidth", "borderColor"])), r.add(y), p = d
                }
                var x = function (t) {
                    if (t <= 0)return n[0][1];
                    for (var e = 0; e < n.length; e++)if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t)return n[e][1];
                    return n[e - 1][1]
                };
                if (!h) {
                    var _ = c;
                    c = d, d = _
                }
                this._renderTicks(t, e, i, x, o, c, d, h), this._renderPointer(t, e, i, x, o, c, d, h), this._renderTitle(t, e, i, x, o), this._renderDetail(t, e, i, x, o)
            },
            _renderTicks: function (t, e, i, n, r, u, h, c) {
                for (var d = this.group, f = r.cx, p = r.cy, g = r.r, m = t.get("min"), v = t.get("max"), y = t.getModel("splitLine"), x = t.getModel("axisTick"), _ = t.getModel("axisLabel"), b = t.get("splitNumber"), w = x.get("splitNumber"), S = l(y.get("length"), g), M = l(x.get("length"), g), T = u, I = (h - u) / b, A = I / w, L = y.getModel("lineStyle").getLineStyle(), C = x.getModel("lineStyle").getLineStyle(), D = _.getModel("textStyle"), P = 0; P <= b; P++) {
                    var k = Math.cos(T), O = Math.sin(T);
                    if (y.get("show")) {
                        var z = new a.Line({
                            shape: {
                                x1: k * g + f,
                                y1: O * g + p,
                                x2: k * (g - S) + f,
                                y2: O * (g - S) + p
                            }, style: L, silent: !0
                        });
                        "auto" === L.stroke && z.setStyle({stroke: n(P / b)}), d.add(z)
                    }
                    if (_.get("show")) {
                        var E = o(s.round(P / b * (v - m) + m), _.get("formatter")), R = _.get("distance"), V = new a.Text({
                            style: {
                                text: E,
                                x: k * (g - S - R) + f,
                                y: O * (g - S - R) + p,
                                fill: D.getTextColor(),
                                textFont: D.getFont(),
                                textVerticalAlign: O < -.4 ? "top" : O > .4 ? "bottom" : "middle",
                                textAlign: k < -.4 ? "left" : k > .4 ? "right" : "center"
                            }, silent: !0
                        });
                        "auto" === V.style.fill && V.setStyle({fill: n(P / b)}), d.add(V)
                    }
                    if (x.get("show") && P !== b) {
                        for (var N = 0; N <= w; N++) {
                            var k = Math.cos(T), O = Math.sin(T), B = new a.Line({
                                shape: {
                                    x1: k * g + f,
                                    y1: O * g + p,
                                    x2: k * (g - M) + f,
                                    y2: O * (g - M) + p
                                }, silent: !0, style: C
                            });
                            "auto" === C.stroke && B.setStyle({stroke: n((P + N / w) / b)}), d.add(B), T += A
                        }
                        T -= A
                    } else T += I
                }
            },
            _renderPointer: function (t, e, i, n, o, u, h, c) {
                var d = [+t.get("min"), +t.get("max")], f = [u, h], p = t.getData(), g = this._data, m = this.group;
                p.diff(g).add(function (e) {
                    var i = new r({shape: {angle: u}});
                    a.updateProps(i, {shape: {angle: s.linearMap(p.get("value", e), d, f, !0)}}, t), m.add(i), p.setItemGraphicEl(e, i)
                }).update(function (e, i) {
                    var n = g.getItemGraphicEl(i);
                    a.updateProps(n, {shape: {angle: s.linearMap(p.get("value", e), d, f, !0)}}, t), m.add(n), p.setItemGraphicEl(e, n)
                }).remove(function (t) {
                    var e = g.getItemGraphicEl(t);
                    m.remove(e)
                }).execute(), p.eachItemGraphicEl(function (t, e) {
                    var i = p.getItemModel(e), r = i.getModel("pointer");
                    t.setShape({
                        x: o.cx,
                        y: o.cy,
                        width: l(r.get("width"), o.r),
                        r: l(r.get("length"), o.r)
                    }), t.useStyle(i.getModel("itemStyle.normal").getItemStyle()), "auto" === t.style.fill && t.setStyle("fill", n((p.get("value", e) - d[0]) / (d[1] - d[0]))), a.setHoverStyle(t, i.getModel("itemStyle.emphasis").getItemStyle())
                }), this._data = p
            },
            _renderTitle: function (t, e, i, n, o) {
                var r = t.getModel("title");
                if (r.get("show")) {
                    var s = r.getModel("textStyle"), u = r.get("offsetCenter"), h = o.cx + l(u[0], o.r), c = o.cy + l(u[1], o.r), d = new a.Text({
                        style: {
                            x: h,
                            y: c,
                            text: t.getData().getName(0),
                            fill: s.getTextColor(),
                            textFont: s.getFont(),
                            textAlign: "center",
                            textVerticalAlign: "middle"
                        }
                    });
                    this.group.add(d)
                }
            },
            _renderDetail: function (t, e, i, n, r) {
                var u = t.getModel("detail"), h = t.get("min"), c = t.get("max");
                if (u.get("show")) {
                    var d = u.getModel("textStyle"), f = u.get("offsetCenter"), p = r.cx + l(f[0], r.r), g = r.cy + l(f[1], r.r), m = l(u.get("width"), r.r), v = l(u.get("height"), r.r), y = t.getData().get("value", 0), x = new a.Rect({
                        shape: {
                            x: p - m / 2,
                            y: g - v / 2,
                            width: m,
                            height: v
                        },
                        style: {
                            text: o(y, u.get("formatter")),
                            fill: u.get("backgroundColor"),
                            textFill: d.getTextColor(),
                            textFont: d.getFont()
                        }
                    });
                    "auto" === x.style.textFill && x.setStyle("textFill", n(s.linearMap(y, [h, c], [0, 1], !0))), x.setStyle(u.getItemStyle(["color"])), this.group.add(x)
                }
            }
        });
        t.exports = h
    }, function (t, e, i) {
        t.exports = i(7).extend({
            type: "echartsGaugePointer",
            shape: {angle: 0, width: 10, r: 10, x: 0, y: 0},
            buildPath: function (t, e) {
                var i = Math.cos, n = Math.sin, o = e.r, r = e.width, a = e.angle, s = e.x - i(a) * r * (r >= o / 3 ? 1 : 2), l = e.y - n(a) * r * (r >= o / 3 ? 1 : 2);
                a = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + i(a) * r, e.y + n(a) * r), t.lineTo(e.x + i(e.angle) * o, e.y + n(e.angle) * o), t.lineTo(e.x - i(a) * r, e.y - n(a) * r), t.lineTo(s, l)
            }
        })
    }, function (t, e, i) {
        var n = i(2), o = i(1);
        i(268), i(269), i(278), n.registerProcessor(i(271)), n.registerVisual(o.curry(i(47), "graph", "circle", null)), n.registerVisual(i(272)), n.registerVisual(i(275)), n.registerLayout(i(279)), n.registerLayout(i(273)), n.registerLayout(i(277)), n.registerCoordinateSystem("graphView", {create: i(274)})
    }, function (t, e, i) {
        "use strict";
        var n = i(14), o = i(1), r = i(6), a = i(10), s = i(229), l = i(2).extendSeriesModel({
            type: "series.graph", init: function (t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._categoriesData
                }, this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
            }, mergeOption: function (t) {
                l.superApply(this, "mergeOption", arguments), this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
            }, mergeDefaultAndTheme: function (t) {
                l.superApply(this, "mergeDefaultAndTheme", arguments), r.defaultEmphasis(t.edgeLabel, r.LABEL_OPTIONS)
            }, getInitialData: function (t, e) {
                function i(t, e) {
                    t.wrapMethod("getItemModel", function (t) {
                        var e = r._categoriesModels, i = t.getShallow("category"), n = e[i];
                        return n && (n.parentModel = t.parentModel, t.parentModel = n), t
                    });
                    var i = r.getModel("edgeLabel"), n = function (t, e) {
                        var o = (t || "").split(".");
                        "label" === o[0] && (e = e || i.getModel(o.slice(1)));
                        var r = a.prototype.getModel.call(this, o, e);
                        return r.getModel = n, r
                    };
                    e.wrapMethod("getItemModel", function (t) {
                        return t.getModel = n, t
                    })
                }

                var n = t.edges || t.links || [], o = t.data || t.nodes || [], r = this;
                if (o && n)return s(o, n, this, !0, i).data
            }, getGraph: function () {
                return this.getData().graph
            }, getEdgeData: function () {
                return this.getGraph().edgeData
            }, getCategoriesData: function () {
                return this._categoriesData
            }, formatTooltip: function (t, e, i) {
                if ("edge" === i) {
                    var n = this.getData(), o = this.getDataParams(t, i), r = n.graph.getEdgeByIndex(t), a = n.getName(r.node1.dataIndex), s = n.getName(r.node2.dataIndex), u = a + " > " + s;
                    return o.value && (u += " : " + o.value), u
                }
                return l.superApply(this, "formatTooltip", arguments)
            }, _updateCategoriesData: function () {
                var t = o.map(this.option.categories || [], function (t) {
                    return null != t.value ? t : o.extend({value: 0}, t)
                }), e = new n(["value"], this);
                e.initData(t), this._categoriesData = e, this._categoriesModels = e.mapArray(function (t) {
                    return e.getItemModel(t, !0)
                })
            }, setZoom: function (t) {
                this.option.zoom = t
            }, setCenter: function (t) {
                this.option.center = t
            }, ifEnableAnimation: function () {
                return l.superCall(this, "ifEnableAnimation") && !("force" === this.get("layout") && this.get("force.layoutAnimation"))
            }, defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "view",
                legendHoverLink: !0,
                hoverAnimation: !0,
                layout: null,
                focusNodeAdjacency: !1,
                circular: {rotateLabel: !1},
                force: {initLayout: null, repulsion: [0, 50], gravity: .1, edgeLength: 30, layoutAnimation: !0},
                left: "center",
                top: "center",
                symbol: "circle",
                symbolSize: 10,
                edgeSymbol: ["none", "none"],
                edgeSymbolSize: 10,
                edgeLabel: {normal: {position: "middle"}, emphasis: {}},
                draggable: !1,
                roam: !1,
                center: null,
                zoom: 1,
                nodeScaleRatio: .6,
                label: {normal: {show: !1, formatter: "{b}"}, emphasis: {show: !0}},
                itemStyle: {normal: {}, emphasis: {}},
                lineStyle: {normal: {color: "#aaa", width: 1, curveness: 0, opacity: .5}, emphasis: {}}
            }
        });
        t.exports = l
    }, function (t, e, i) {
        function n(t, e) {
            return t.getVisual("opacity") || t.getModel().get(e)
        }

        var o = i(39), r = i(95), a = i(80), s = i(3), l = i(270), u = i(1), h = ["itemStyle", "normal", "opacity"], c = ["lineStyle", "normal", "opacity"];
        i(2).extendChartView({
            type: "graph", init: function (t, e) {
                var i = new o, n = new r, s = this.group, l = new a(e.getZr(), s);
                s.add(i.group), s.add(n.group), this._symbolDraw = i, this._lineDraw = n, this._controller = l, this._firstRender = !0
            }, render: function (t, e, i) {
                var n = t.coordinateSystem;
                this._model = t, this._nodeScaleRatio = t.get("nodeScaleRatio");
                var o = this._symbolDraw, r = this._lineDraw, a = this.group;
                if ("view" === n.type) {
                    var u = {position: n.position, scale: n.scale};
                    this._firstRender ? a.attr(u) : s.updateProps(a, u, t)
                }
                l(t.getGraph(), this._getNodeGlobalScale(t));
                var h = t.getData();
                o.updateData(h);
                var c = t.getEdgeData();
                r.updateData(c), this._updateNodeAndLinkScale(), this._updateController(t, i), clearTimeout(this._layoutTimeout);
                var d = t.forceLayout, f = t.get("force.layoutAnimation");
                d && this._startForceLayoutIteration(d, f), h.eachItemGraphicEl(function (t, e) {
                    var i = h.getItemModel(e);
                    t.off("drag").off("dragend");
                    var n = h.getItemModel(e).get("draggable");
                    n && t.on("drag", function () {
                        d && (d.warmUp(), !this._layouting && this._startForceLayoutIteration(d, f), d.setFixed(e), h.setItemLayout(e, t.position))
                    }, this).on("dragend", function () {
                        d && d.setUnfixed(e)
                    }, this), t.setDraggable(n && d), t.off("mouseover", this._focusNodeAdjacency), t.off("mouseout", this._unfocusAll), i.get("focusNodeAdjacency") && (t.on("mouseover", this._focusNodeAdjacency, this), t.on("mouseout", this._unfocusAll, this))
                }, this);
                var p = "circular" === t.get("layout") && t.get("circular.rotateLabel"), g = h.getLayout("cx"), m = h.getLayout("cy");
                h.eachItemGraphicEl(function (t, e) {
                    var i = t.getSymbolPath();
                    if (p) {
                        var n = h.getItemLayout(e), o = Math.atan2(n[1] - m, n[0] - g);
                        o < 0 && (o = 2 * Math.PI + o);
                        var r = n[0] < g;
                        r && (o -= Math.PI);
                        var a = r ? "left" : "right";
                        i.setStyle({textRotation: o, textPosition: a}), i.hoverStyle && (i.hoverStyle.textPosition = a)
                    } else i.setStyle({textRotation: 0})
                }), this._firstRender = !1
            }, dispose: function () {
                this._controller && this._controller.dispose()
            }, _focusNodeAdjacency: function (t) {
                function e(t, e) {
                    var i = n(t, e), o = t.getGraphicEl();
                    null == i && (i = 1), o.traverse(function (t) {
                        t.trigger("normal"), "group" !== t.type && t.setStyle("opacity", .1 * i)
                    })
                }

                function i(t, e) {
                    var i = n(t, e), o = t.getGraphicEl();
                    o.traverse(function (t) {
                        t.trigger("emphasis"), "group" !== t.type && t.setStyle("opacity", i)
                    })
                }

                var o = this._model.getData(), r = o.graph, a = t.target, s = a.dataIndex, l = a.dataType;
                if (null !== s && "edge" !== l) {
                    r.eachNode(function (t) {
                        e(t, h)
                    }), r.eachEdge(function (t) {
                        e(t, c)
                    });
                    var d = r.getNodeByIndex(s);
                    i(d, h), u.each(d.edges, function (t) {
                        t.dataIndex < 0 || (i(t, c), i(t.node1, h), i(t.node2, h))
                    })
                }
            }, _unfocusAll: function () {
                var t = this._model.getData(), e = t.graph;
                e.eachNode(function (t) {
                    var e = n(t, h);
                    t.getGraphicEl().traverse(function (t) {
                        t.trigger("normal"), "group" !== t.type && t.setStyle("opacity", e)
                    })
                }), e.eachEdge(function (t) {
                    var e = n(t, c);
                    t.getGraphicEl().traverse(function (t) {
                        t.trigger("normal"), "group" !== t.type && t.setStyle("opacity", e)
                    })
                })
            }, _startForceLayoutIteration: function (t, e) {
                var i = this;
                !function n() {
                    t.step(function (t) {
                        i.updateLayout(i._model), (i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
                    })
                }()
            }, _updateController: function (t, e) {
                var i = this._controller, n = this.group;
                return i.setContainsPoint(function (t, e) {
                    var i = n.getBoundingRect();
                    return i.applyTransform(n.transform), i.contain(t, e)
                }), "view" !== t.coordinateSystem.type ? void i.disable() : (i.enable(t.get("roam")), i.zoomLimit = t.get("scaleLimit"), i.zoom = t.coordinateSystem.getZoom(), void i.off("pan").off("zoom").on("pan", function (i, n) {
                    e.dispatchAction({seriesId: t.id, type: "graphRoam", dx: i, dy: n})
                }).on("zoom", function (i, n, o) {
                    e.dispatchAction({
                        seriesId: t.id,
                        type: "graphRoam",
                        zoom: i,
                        originX: n,
                        originY: o
                    }), this._updateNodeAndLinkScale(), l(t.getGraph(), this._getNodeGlobalScale(t)), this._lineDraw.updateLayout()
                }, this))
            }, _updateNodeAndLinkScale: function () {
                var t = this._model, e = t.getData(), i = this._getNodeGlobalScale(t), n = [i, i];
                e.eachItemGraphicEl(function (t, e) {
                    t.attr("scale", n)
                })
            }, _getNodeGlobalScale: function (t) {
                var e = t.coordinateSystem;
                if ("view" !== e.type)return 1;
                var i = this._nodeScaleRatio, n = e.scale, o = n && n[0] || 1, r = e.getZoom(), a = (r - 1) * i + 1;
                return a / o
            }, updateLayout: function (t) {
                l(t.getGraph(), this._getNodeGlobalScale(t)), this._symbolDraw.updateLayout(), this._lineDraw.updateLayout()
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            for (var n, o = t[0], r = t[1], d = t[2], f = 1 / 0, p = i * i, g = .1, m = .1; m <= .9; m += .1) {
                a[0] = u(o[0], r[0], d[0], m), a[1] = u(o[1], r[1], d[1], m);
                var v = c(h(a, e) - p);
                v < f && (f = v, n = m)
            }
            for (var y = 0; y < 32; y++) {
                var x = n + g;
                s[0] = u(o[0], r[0], d[0], n), s[1] = u(o[1], r[1], d[1], n), l[0] = u(o[0], r[0], d[0], x), l[1] = u(o[1], r[1], d[1], x);
                var v = h(s, e) - p;
                if (c(v) < .01)break;
                var _ = h(l, e) - p;
                g /= 2, v < 0 ? _ >= 0 ? n += g : n -= g : _ >= 0 ? n -= g : n += g
            }
            return n
        }

        var o = i(17), r = i(5), a = [], s = [], l = [], u = o.quadraticAt, h = r.distSquare, c = Math.abs;
        t.exports = function (t, e) {
            function i(t) {
                var e = t.getVisual("symbolSize");
                return e instanceof Array && (e = (e[0] + e[1]) / 2), e
            }

            var a = [], s = o.quadraticSubdivide, l = [[], [], []], u = [[], []], h = [];
            e /= 2, t.eachEdge(function (t, o) {
                var c = t.getLayout(), d = t.getVisual("fromSymbol"), f = t.getVisual("toSymbol");
                c.__original || (c.__original = [r.clone(c[0]), r.clone(c[1])], c[2] && c.__original.push(r.clone(c[2])));
                var p = c.__original;
                if (null != c[2]) {
                    if (r.copy(l[0], p[0]), r.copy(l[1], p[2]), r.copy(l[2], p[1]), d && "none" != d) {
                        var g = i(t.node1), m = n(l, p[0], g * e);
                        s(l[0][0], l[1][0], l[2][0], m, a), l[0][0] = a[3], l[1][0] = a[4], s(l[0][1], l[1][1], l[2][1], m, a), l[0][1] = a[3], l[1][1] = a[4]
                    }
                    if (f && "none" != f) {
                        var g = i(t.node2), m = n(l, p[1], g * e);
                        s(l[0][0], l[1][0], l[2][0], m, a), l[1][0] = a[1], l[2][0] = a[2], s(l[0][1], l[1][1], l[2][1], m, a), l[1][1] = a[1], l[2][1] = a[2]
                    }
                    r.copy(c[0], l[0]), r.copy(c[1], l[2]), r.copy(c[2], l[1])
                } else {
                    if (r.copy(u[0], p[0]), r.copy(u[1], p[1]), r.sub(h, u[1], u[0]), r.normalize(h, h), d && "none" != d) {
                        var g = i(t.node1);
                        r.scaleAndAdd(u[0], u[0], h, g * e)
                    }
                    if (f && "none" != f) {
                        var g = i(t.node2);
                        r.scaleAndAdd(u[1], u[1], h, -g * e)
                    }
                    r.copy(c[0], u[0]), r.copy(c[1], u[1])
                }
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e.length && t.eachSeriesByType("graph", function (t) {
                var i = t.getCategoriesData(), n = t.getGraph(), o = n.data, r = i.mapArray(i.getName);
                o.filterSelf(function (t) {
                    var i = o.getItemModel(t), n = i.getShallow("category");
                    if (null != n) {
                        "number" == typeof n && (n = r[n]);
                        for (var a = 0; a < e.length; a++)if (!e[a].isSelected(n))return !1
                    }
                    return !0
                })
            }, this)
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("graph", function (t) {
                var i = t.getCategoriesData(), n = t.getData(), o = {};
                i.each(function (n) {
                    var r = i.getName(n);
                    o[r] = n;
                    var a = i.getItemModel(n), s = a.get("itemStyle.normal.color") || t.getColorFromPalette(r, e);
                    i.setItemVisual(n, "color", s)
                }), i.count() && n.each(function (t) {
                    var e = n.getItemModel(t), r = e.getShallow("category");
                    null != r && ("string" == typeof r && (r = o[r]), n.getItemVisual(t, "color", !0) || n.setItemVisual(t, "color", i.getItemVisual(r, "color")))
                })
            })
        }
    }, function (t, e, i) {
        var n = i(224);
        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                "circular" === t.get("layout") && n(t)
            })
        }
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.getBoxLayoutParams();
            return n.aspect = i, r.getLayoutRect(n, {width: e.getWidth(), height: e.getHeight()})
        }

        var o = i(239), r = i(12), a = i(74);
        t.exports = function (t, e) {
            var i = [];
            return t.eachSeriesByType("graph", function (t) {
                var r = t.get("coordinateSystem");
                if (!r || "view" === r) {
                    var s = t.getData(), l = s.mapArray(function (t) {
                        var e = s.getItemModel(t);
                        return [+e.get("x"), +e.get("y")]
                    }), u = [], h = [];
                    a.fromPoints(l, u, h), h[0] - u[0] === 0 && (h[0] += 1, u[0] -= 1), h[1] - u[1] === 0 && (h[1] += 1, u[1] -= 1);
                    var c = (h[0] - u[0]) / (h[1] - u[1]), d = n(t, e, c);
                    isNaN(c) && (u = [d.x, d.y], h = [d.x + d.width, d.y + d.height]);
                    var f = h[0] - u[0], p = h[1] - u[1], g = d.width, m = d.height, v = t.coordinateSystem = new o;
                    v.zoomLimit = t.get("scaleLimit"), v.setBoundingRect(u[0], u[1], f, p), v.setViewRect(d.x, d.y, g, m), v.setCenter(t.get("center")), v.setZoom(t.get("zoom")), i.push(v)
                }
            }), i
        }
    }, function (t, e) {
        function i(t) {
            return t instanceof Array || (t = [t, t]), t
        }

        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.getGraph(), n = t.getEdgeData(), o = i(t.get("edgeSymbol")), r = i(t.get("edgeSymbolSize")), a = "lineStyle.normal.color".split("."), s = "lineStyle.normal.opacity".split(".");
                n.setVisual("fromSymbol", o && o[0]), n.setVisual("toSymbol", o && o[1]), n.setVisual("fromSymbolSize", r && r[0]), n.setVisual("toSymbolSize", r && r[1]), n.setVisual("color", t.get(a)), n.setVisual("opacity", t.get(s)), n.each(function (t) {
                    var o = n.getItemModel(t), r = e.getEdgeByIndex(t), l = i(o.getShallow("symbol", !0)), u = i(o.getShallow("symbolSize", !0)), h = o.get(a), c = o.get(s);
                    switch (h) {
                        case"source":
                            h = r.node1.getVisual("color");
                            break;
                        case"target":
                            h = r.node2.getVisual("color")
                    }
                    l[0] && r.setVisual("fromSymbol", l[0]), l[1] && r.setVisual("toSymbol", l[1]), u[0] && r.setVisual("fromSymbolSize", u[0]), u[1] && r.setVisual("toSymbolSize", u[1]), r.setVisual("color", h), r.setVisual("opacity", c)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(5), o = n.scaleAndAdd;
        t.exports = function (t, e, i) {
            for (var r = i.rect, a = r.width, s = r.height, l = [r.x + a / 2, r.y + s / 2], u = null == i.gravity ? .1 : i.gravity, h = 0; h < t.length; h++) {
                var c = t[h];
                c.p || (c.p = n.create(a * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), c.pp = n.clone(c.p), c.edges = null
            }
            var d = .6;
            return {
                warmUp: function () {
                    d = .5
                }, setFixed: function (e) {
                    t[e].fixed = !0
                }, setUnfixed: function (e) {
                    t[e].fixed = !1
                }, step: function (i) {
                    for (var r = [], a = t.length, s = 0; s < e.length; s++) {
                        var h = e[s], c = h.n1, f = h.n2;
                        n.sub(r, f.p, c.p);
                        var p = n.len(r) - h.d, g = f.w / (c.w + f.w);
                        n.normalize(r, r), !c.fixed && o(c.p, c.p, r, g * p * d), !f.fixed && o(f.p, f.p, r, -(1 - g) * p * d)
                    }
                    for (var s = 0; s < a; s++) {
                        var m = t[s];
                        m.fixed || (n.sub(r, l, m.p), n.scaleAndAdd(m.p, m.p, r, u * d))
                    }
                    for (var s = 0; s < a; s++)for (var c = t[s], v = s + 1; v < a; v++) {
                        var f = t[v];
                        n.sub(r, f.p, c.p);
                        var p = n.len(r);
                        0 === p && (n.set(r, Math.random() - .5, Math.random() - .5), p = 1);
                        var y = (c.rep + f.rep) / p / p;
                        !c.fixed && o(c.pp, c.pp, r, y), !f.fixed && o(f.pp, f.pp, r, -y)
                    }
                    for (var x = [], s = 0; s < a; s++) {
                        var m = t[s];
                        m.fixed || (n.sub(x, m.p, m.pp), n.scaleAndAdd(m.p, m.p, x, d), n.copy(m.pp, m.p))
                    }
                    d = .992 * d, i && i(t, e, d < .01)
                }
            }
        }
    }, function (t, e, i) {
        var n = i(276), o = i(4), r = i(226), a = i(224), s = i(5), l = i(1);
        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.coordinateSystem;
                if (!e || "view" === e.type)if ("force" === t.get("layout")) {
                    var i = t.preservedPoints || {}, u = t.getGraph(), h = u.data, c = u.edgeData, d = t.getModel("force"), f = d.get("initLayout");
                    t.preservedPoints ? h.each(function (t) {
                        var e = h.getId(t);
                        h.setItemLayout(t, i[e] || [NaN, NaN])
                    }) : f && "none" !== f ? "circular" === f && a(t) : r(t);
                    var p = h.getDataExtent("value"), g = c.getDataExtent("value"), m = d.get("repulsion"), v = d.get("edgeLength");
                    l.isArray(m) || (m = [m, m]), l.isArray(v) || (v = [v, v]), v = [v[1], v[0]];
                    var y = h.mapArray("value", function (t, e) {
                        var i = h.getItemLayout(e), n = o.linearMap(t, p, m);
                        return isNaN(n) && (n = (m[0] + m[1]) / 2), {
                            w: n,
                            rep: n,
                            p: !i || isNaN(i[0]) || isNaN(i[1]) ? null : i
                        }
                    }), x = c.mapArray("value", function (t, e) {
                        var i = u.getEdgeByIndex(e), n = o.linearMap(t, g, v);
                        return isNaN(n) && (n = (v[0] + v[1]) / 2), {
                            n1: y[i.node1.dataIndex],
                            n2: y[i.node2.dataIndex],
                            d: n,
                            curveness: i.getModel().get("lineStyle.normal.curveness") || 0
                        }
                    }), e = t.coordinateSystem, _ = e.getBoundingRect(), b = n(y, x, {
                        rect: _,
                        gravity: d.get("gravity")
                    }), w = b.step;
                    b.step = function (t) {
                        for (var e = 0, n = y.length; e < n; e++)y[e].fixed && s.copy(y[e].p, u.getNodeByIndex(e).getLayout());
                        w(function (e, n, o) {
                            for (var r = 0, a = e.length; r < a; r++)e[r].fixed || u.getNodeByIndex(r).setLayout(e[r].p), i[h.getId(r)] = e[r].p;
                            for (var r = 0, a = n.length; r < a; r++) {
                                var l = n[r], c = u.getEdgeByIndex(r), d = l.n1.p, f = l.n2.p, p = c.getLayout();
                                p = p ? p.slice() : [], p[0] = p[0] || [], p[1] = p[1] || [], s.copy(p[0], d), s.copy(p[1], f), +l.curveness && (p[2] = [(d[0] + f[0]) / 2 - (d[1] - f[1]) * l.curveness, (d[1] + f[1]) / 2 - (f[0] - d[0]) * l.curveness]), c.setLayout(p)
                            }
                            t && t(o)
                        })
                    }, t.forceLayout = b, t.preservedPoints = i, b.step()
                } else t.forceLayout = null
            })
        }
    }, function (t, e, i) {
        var n = i(2), o = i(223), r = {type: "graphRoam", event: "graphRoam", update: "none"};
        n.registerAction(r, function (t, e) {
            e.eachComponent({mainType: "series", query: t}, function (e) {
                var i = e.coordinateSystem, n = o.updateCenterAndZoom(i, t);
                e.setCenter && e.setCenter(n.center), e.setZoom && e.setZoom(n.zoom)
            })
        })
    }, function (t, e, i) {
        var n = i(226), o = i(225);
        t.exports = function (t, e) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.get("layout"), i = t.coordinateSystem;
                if (i && "view" !== i.type) {
                    var r = t.getData();
                    r.each(i.dimensions, function (t, e, n) {
                        isNaN(t) || isNaN(e) ? r.setItemLayout(n, [NaN, NaN]) : r.setItemLayout(n, i.dataToPoint([t, e]))
                    }), o(r.graph)
                } else e && "none" !== e || n(t)
            })
        }
    }, function (t, e, i) {
        i(282), i(283)
    }, function (t, e, i) {
        function n() {
            var t = r.createCanvas();
            this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {}
        }

        var o = 256, r = i(1);
        n.prototype = {
            update: function (t, e, i, n, r, a) {
                var s = this._getBrush(), l = this._getGradient(t, r, "inRange"), u = this._getGradient(t, r, "outOfRange"), h = this.pointSize + this.blurSize, c = this.canvas, d = c.getContext("2d"), f = t.length;
                c.width = e, c.height = i;
                for (var p = 0; p < f; ++p) {
                    var g = t[p], m = g[0], v = g[1], y = g[2], x = n(y);
                    d.globalAlpha = x, d.drawImage(s, m - h, v - h)
                }
                for (var _ = d.getImageData(0, 0, c.width, c.height), b = _.data, w = 0, S = b.length, M = this.minOpacity, T = this.maxOpacity, I = T - M; w < S;) {
                    var x = b[w + 3] / 256, A = 4 * Math.floor(x * (o - 1));
                    if (x > 0) {
                        var L = a(x) ? l : u;
                        x > 0 && (x = x * I + M), b[w++] = L[A], b[w++] = L[A + 1], b[w++] = L[A + 2], b[w++] = L[A + 3] * x * 256
                    } else w += 4
                }
                return d.putImageData(_, 0, 0), c
            }, _getBrush: function () {
                var t = this._brushCanvas || (this._brushCanvas = r.createCanvas()), e = this.pointSize + this.blurSize, i = 2 * e;
                t.width = i, t.height = i;
                var n = t.getContext("2d");
                return n.clearRect(0, 0, i, i), n.shadowOffsetX = i, n.shadowBlur = this.blurSize, n.shadowColor = "#000", n.beginPath(), n.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), t
            }, _getGradient: function (t, e, i) {
                for (var n = this._gradientPixels, o = n[i] || (n[i] = new Uint8ClampedArray(1024)), r = [], a = 0, s = 0; s < 256; s++)e[i](s / 255, !0, r), o[a++] = r[0], o[a++] = r[1], o[a++] = r[2], o[a++] = r[3];
                return o
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(15), o = i(34);
        t.exports = n.extend({
            type: "series.heatmap",
            getInitialData: function (t, e) {
                return o(t.data, this, e)
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                geoIndex: 0,
                blurSize: 30,
                pointSize: 20,
                maxOpacity: 1,
                minOpacity: 0
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t[1] - t[0];
            e = l.map(e, function (e) {
                return {interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]}
            });
            var o = e.length, r = 0;
            return function (t) {
                for (var n = r; n < o; n++) {
                    var a = e[n].interval;
                    if (a[0] <= t && t <= a[1]) {
                        r = n;
                        break
                    }
                }
                if (n === o)for (var n = r - 1; n >= 0; n--) {
                    var a = e[n].interval;
                    if (a[0] <= t && t <= a[1]) {
                        r = n;
                        break
                    }
                }
                return n >= 0 && n < o && i[n]
            }
        }

        function o(t, e) {
            var i = t[1] - t[0];
            return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i], function (t) {
                return t >= e[0] && t <= e[1]
            }
        }

        function r(t) {
            var e = t.dimensions;
            return "lng" === e[0] && "lat" === e[1]
        }

        var a = i(3), s = i(281), l = i(1);
        t.exports = i(2).extendChartView({
            type: "heatmap", render: function (t, e, i) {
                var n;
                e.eachComponent("visualMap", function (e) {
                    e.eachTargetSeries(function (i) {
                        i === t && (n = e)
                    })
                }), this.group.removeAll();
                var o = t.coordinateSystem;
                "cartesian2d" === o.type ? this._renderOnCartesian(o, t, i) : r(o) && this._renderOnGeo(o, t, n, i)
            }, dispose: function () {
            }, _renderOnCartesian: function (t, e, i) {
                var n = t.getAxis("x"), o = t.getAxis("y"), r = this.group, s = n.getBandWidth(), u = o.getBandWidth(), h = e.getData(), c = "itemStyle.normal", d = "itemStyle.emphasis", f = "label.normal", p = "label.emphasis", g = e.getModel(c).getItemStyle(["color"]), m = e.getModel(d).getItemStyle(), v = e.getModel("label.normal"), y = e.getModel("label.emphasis");
                h.each(["x", "y", "z"], function (i, n, o, x) {
                    var _ = h.getItemModel(x), b = t.dataToPoint([i, n]);
                    if (!isNaN(o)) {
                        var w = new a.Rect({
                            shape: {x: b[0] - s / 2, y: b[1] - u / 2, width: s, height: u},
                            style: {fill: h.getItemVisual(x, "color"), opacity: h.getItemVisual(x, "opacity")}
                        });
                        h.hasItemOption && (g = _.getModel(c).getItemStyle(["color"]), m = _.getModel(d).getItemStyle(), v = _.getModel(f), y = _.getModel(p));
                        var S = e.getRawValue(x), M = "-";
                        S && null != S[2] && (M = S[2]), v.getShallow("show") && (a.setText(g, v), g.text = e.getFormattedLabel(x, "normal") || M), y.getShallow("show") && (a.setText(m, y), m.text = e.getFormattedLabel(x, "emphasis") || M), w.setStyle(g), a.setHoverStyle(w, h.hasItemOption ? m : l.extend({}, m)), r.add(w), h.setItemGraphicEl(x, w)
                    }
                })
            }, _renderOnGeo: function (t, e, i, r) {
                var l = i.targetVisuals.inRange, u = i.targetVisuals.outOfRange, h = e.getData(), c = this._hmLayer || this._hmLayer || new s;
                c.blurSize = e.get("blurSize"), c.pointSize = e.get("pointSize"), c.minOpacity = e.get("minOpacity"), c.maxOpacity = e.get("maxOpacity");
                var d = t.getViewRect().clone(), f = t.getRoamTransform().transform;
                d.applyTransform(f);
                var p = Math.max(d.x, 0), g = Math.max(d.y, 0), m = Math.min(d.width + d.x, r.getWidth()), v = Math.min(d.height + d.y, r.getHeight()), y = m - p, x = v - g, _ = h.mapArray(["lng", "lat", "value"], function (e, i, n) {
                    var o = t.dataToPoint([e, i]);
                    return o[0] -= p, o[1] -= g, o.push(n), o
                }), b = i.getExtent(), w = "visualMap.continuous" === i.type ? o(b, i.option.range) : n(b, i.getPieceList(), i.option.selected);
                c.update(_, y, x, l.color.getNormalizer(), {
                    inRange: l.color.getColorMapper(),
                    outOfRange: u.color.getColorMapper()
                }, w);
                var S = new a.Image({style: {width: y, height: x, x: p, y: g, image: c.canvas}, silent: !0});
                this.group.add(S)
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            a.call(this, t, e, i), this._lastFrame = 0, this._lastFramePercent = 0
        }

        var o = i(228), r = i(1), a = i(227), s = i(5), l = n.prototype;
        l.createLine = function (t, e, i) {
            return new o(t, e, i)
        }, l.updateAnimationPoints = function (t, e) {
            this._points = e;
            for (var i = [0], n = 0, o = 1; o < e.length; o++) {
                var r = e[o - 1], a = e[o];
                n += s.dist(r, a), i.push(n)
            }
            if (0 !== n) {
                for (var o = 0; o < i.length; o++)i[o] /= n;
                this._offsets = i, this._length = n
            }
        }, l.getLineLength = function (t) {
            return this._length
        }, l.updateSymbolPosition = function (t) {
            var e = t.__t, i = this._points, n = this._offsets, o = i.length;
            if (n) {
                var r, a = this._lastFrame;
                if (e < this._lastFramePercent) {
                    var l = Math.min(a + 1, o - 1);
                    for (r = l; r >= 0 && !(n[r] <= e); r--);
                    r = Math.min(r, o - 2)
                } else {
                    for (var r = a; r < o && !(n[r] > e); r++);
                    r = Math.min(r - 1, o - 2)
                }
                s.lerp(t.position, i[r], i[r + 1], (e - n[r]) / (n[r + 1] - n[r]));
                var u = i[r + 1][0] - i[r][0], h = i[r + 1][1] - i[r][1];
                t.rotation = -Math.atan2(h, u) - Math.PI / 2, this._lastFrame = r, this._lastFramePercent = e, t.ignore = !1
            }
        }, r.inherits(n, a), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return a.isArray(t) || (t = [+t, +t]), t
        }

        function o(t, e) {
            t.eachChild(function (t) {
                t.attr({
                    z: e.z,
                    zlevel: e.zlevel,
                    style: {
                        stroke: "stroke" === e.brushType ? e.color : null,
                        fill: "fill" === e.brushType ? e.color : null
                    }
                })
            })
        }

        function r(t, e) {
            c.call(this);
            var i = new h(t, e), n = new c;
            this.add(i), this.add(n), n.beforeUpdate = function () {
                this.attr(i.getScale())
            }, this.updateData(t, e)
        }

        var a = i(1), s = i(26), l = i(3), u = i(4), h = i(50), c = l.Group, d = 3, f = r.prototype;
        f.stopEffectAnimation = function () {
            this.childAt(1).removeAll()
        }, f.startEffectAnimation = function (t) {
            for (var e = t.symbolType, i = t.color, n = this.childAt(1), r = 0; r < d; r++) {
                var a = s.createSymbol(e, -1, -1, 2, 2, i);
                a.attr({style: {strokeNoScale: !0}, z2: 99, silent: !0, scale: [.5, .5]});
                var l = -r / d * t.period + t.effectOffset;
                a.animate("", !0).when(t.period, {scale: [t.rippleScale / 2, t.rippleScale / 2]}).delay(l).start(), a.animateStyle(!0).when(t.period, {opacity: 0}).delay(l).start(), n.add(a)
            }
            o(n, t)
        }, f.updateEffectAnimation = function (t) {
            for (var e = this._effectCfg, i = this.childAt(1), n = ["symbolType", "period", "rippleScale"], r = 0; r < n; r++) {
                var a = n[r];
                if (e[a] !== t[a])return this.stopEffectAnimation(), void this.startEffectAnimation(t)
            }
            o(i, t)
        }, f.highlight = function () {
            this.trigger("emphasis")
        }, f.downplay = function () {
            this.trigger("normal")
        }, f.updateData = function (t, e) {
            var i = t.hostModel;
            this.childAt(0).updateData(t, e);
            var o = this.childAt(1), r = t.getItemModel(e), a = t.getItemVisual(e, "symbol"), s = n(t.getItemVisual(e, "symbolSize")), l = t.getItemVisual(e, "color");
            o.attr("scale", s), o.traverse(function (t) {
                t.attr({fill: l})
            });
            var h = r.getShallow("symbolOffset");
            if (h) {
                var c = o.position;
                c[0] = u.parsePercent(h[0], s[0]), c[1] = u.parsePercent(h[1], s[1])
            }
            o.rotation = (r.getShallow("symbolRotate") || 0) * Math.PI / 180 || 0;
            var d = {};
            if (d.showEffectOn = i.get("showEffectOn"), d.rippleScale = r.get("rippleEffect.scale"), d.brushType = r.get("rippleEffect.brushType"), d.period = 1e3 * r.get("rippleEffect.period"), d.effectOffset = e / t.count(), d.z = r.getShallow("z") || 0, d.zlevel = r.getShallow("zlevel") || 0, d.symbolType = a, d.color = l, this.off("mouseover").off("mouseout").off("emphasis").off("normal"), "render" === d.showEffectOn)this._effectCfg ? this.updateEffectAnimation(d) : this.startEffectAnimation(d), this._effectCfg = d; else {
                this._effectCfg = null, this.stopEffectAnimation();
                var f = this.childAt(0), p = function () {
                    f.trigger("emphasis"), "render" !== d.showEffectOn && this.startEffectAnimation(d)
                }, g = function () {
                    f.trigger("normal"), "render" !== d.showEffectOn && this.stopEffectAnimation()
                };
                this.on("mouseover", p, this).on("mouseout", g, this).on("emphasis", p, this).on("normal", g, this)
            }
            this._effectCfg = d
        }, f.fadeOut = function (t) {
            this.off("mouseover").off("mouseout").off("emphasis").off("normal"), t && t()
        }, a.inherits(r, c), t.exports = r
    }, function (t, e, i) {
        function n() {
            this.group = new o.Group, this._lineEl = new s
        }

        var o = i(3), r = i(85), a = i(84), s = o.extendShape({
            shape: {polyline: !1, segs: []},
            buildPath: function (t, e) {
                for (var i = e.segs, n = e.polyline, o = 0; o < i.length; o++) {
                    var r = i[o];
                    if (n) {
                        t.moveTo(r[0][0], r[0][1]);
                        for (var a = 1; a < r.length; a++)t.lineTo(r[a][0], r[a][1])
                    } else t.moveTo(r[0][0], r[0][1]), r.length > 2 ? t.quadraticCurveTo(r[2][0], r[2][1], r[1][0], r[1][1]) : t.lineTo(r[1][0], r[1][1])
                }
            },
            findDataIndex: function (t, e) {
                for (var i = this.shape, n = i.segs, o = i.polyline, s = Math.max(this.style.lineWidth, 1), l = 0; l < n.length; l++) {
                    var u = n[l];
                    if (o) {
                        for (var h = 1; h < u.length; h++)if (a.containStroke(u[h - 1][0], u[h - 1][1], u[h][0], u[h][1], s, t, e))return l
                    } else if (u.length > 2) {
                        if (r.containStroke(u[0][0], u[0][1], u[2][0], u[2][1], u[1][0], u[1][1], s, t, e))return l
                    } else if (a.containStroke(u[0][0], u[0][1], u[1][0], u[1][1], s, t, e))return l
                }
                return -1
            }
        }), l = n.prototype;
        l.updateData = function (t) {
            this.group.removeAll();
            var e = this._lineEl, i = t.hostModel;
            e.setShape({
                segs: t.mapArray(t.getItemLayout),
                polyline: i.get("polyline")
            }), e.useStyle(i.getModel("lineStyle.normal").getLineStyle());
            var n = t.getVisual("color");
            n && e.setStyle("stroke", n), e.setStyle("fill"), e.seriesIndex = i.seriesIndex, e.on("mousemove", function (t) {
                e.dataIndex = null;
                var i = e.findDataIndex(t.offsetX, t.offsetY);
                i > 0 && (e.dataIndex = i)
            }), this.group.add(e)
        }, l.updateLayout = function (t) {
            var e = t.getData();
            this._lineEl.setShape({segs: e.mapArray(e.getItemLayout)})
        }, l.remove = function () {
            this.group.removeAll()
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, n) {
            l.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(t, e, n), this.updateData(t, e, n), this._seriesModel
        }

        function o(t, e, i) {
            return s.map(t, function (t) {
                return t = t.slice(), t[e] = i.initBaseline, t
            })
        }

        function r(t) {
            var e = {};
            return s.each(t, function (t, i) {
                e["ends" + i] = t
            }), e
        }

        function a(t) {
            this.group = new l.Group, this.styleUpdater = t
        }

        var s = i(1), l = i(3), u = i(7), h = u.extend({
            type: "whiskerInBox", shape: {}, buildPath: function (t, e) {
                for (var i in e)if (e.hasOwnProperty(i) && 0 === i.indexOf("ends")) {
                    var n = e[i];
                    t.moveTo(n[0][0], n[0][1]), t.lineTo(n[1][0], n[1][1])
                }
            }
        }), c = n.prototype;
        c._createContent = function (t, e, i) {
            var n = t.getItemLayout(e), a = "horizontal" === n.chartLayout ? 1 : 0, u = 0;
            this.add(new l.Polygon({
                shape: {points: i ? o(n.bodyEnds, a, n) : n.bodyEnds},
                style: {strokeNoScale: !0},
                z2: 100
            })), this.bodyIndex = u++;
            var c = s.map(n.whiskerEnds, function (t) {
                return i ? o(t, a, n) : t
            });
            this.add(new h({shape: r(c), style: {strokeNoScale: !0}, z2: 100})), this.whiskerIndex = u++
        }, c.updateData = function (t, e, i) {
            var n = this._seriesModel = t.hostModel, o = t.getItemLayout(e), a = l[i ? "initProps" : "updateProps"];
            a(this.childAt(this.bodyIndex), {shape: {points: o.bodyEnds}}, n, e), a(this.childAt(this.whiskerIndex), {shape: r(o.whiskerEnds)}, n, e), this.styleUpdater.call(null, this, t, e)
        }, s.inherits(n, l.Group);
        var d = a.prototype;
        d.updateData = function (t) {
            var e = this.group, i = this._data, o = this.styleUpdater;
            t.diff(i).add(function (i) {
                if (t.hasValue(i)) {
                    var r = new n(t, i, o, (!0));
                    t.setItemGraphicEl(i, r), e.add(r)
                }
            }).update(function (r, a) {
                var s = i.getItemGraphicEl(a);
                return t.hasValue(r) ? (s ? s.updateData(t, r) : s = new n(t, r, o), e.add(s), void t.setItemGraphicEl(r, s)) : void e.remove(s)
            }).remove(function (t) {
                var n = i.getItemGraphicEl(t);
                n && e.remove(n)
            }).execute(), this._data = t
        }, d.remove = function () {
            var t = this.group, e = this._data;
            this._data = null, e && e.eachItemGraphicEl(function (e) {
                e && t.remove(e)
            })
        }, t.exports = a
    }, function (t, e, i) {
        i(289), i(290);
        var n = i(2);
        n.registerLayout(i(291))
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            var e = t.data;
            e && e[0] && e[0][0] && e[0][0].coord && (t.data = a.map(e, function (t) {
                var e = [t[0].coord, t[1].coord], i = {coords: e};
                return t[0].name && (i.fromName = t[0].name), t[1].name && (i.toName = t[1].name), a.mergeAll([i, t[0], t[1]])
            }))
        }

        var o = i(15), r = i(14), a = i(1), s = (i(23), o.extend({
            type: "series.lines",
            dependencies: ["grid", "polar"],
            visualColorAccessPath: "lineStyle.normal.color",
            init: function (t) {
                n(t), s.superApply(this, "init", arguments)
            },
            mergeOption: function (t) {
                n(t), s.superApply(this, "mergeOption", arguments)
            },
            getInitialData: function (t, e) {
                var i = new r(["value"], this);
                return i.hasItemOption = !1, i.initData(t.data, [], function (t, e, n, o) {
                    if (t instanceof Array)return NaN;
                    i.hasItemOption = !0;
                    var r = t.value;
                    return null != r ? r instanceof Array ? r[o] : r : void 0
                }), i
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = e.getItemModel(t), n = i.get("name");
                if (n)return n;
                var o = i.get("fromName"), r = i.get("toName");
                return o + " > " + r
            },
            defaultOption: {
                coordinateSystem: "geo",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                effect: {
                    show: !1,
                    period: 4,
                    constantSpeed: 0,
                    symbol: "circle",
                    symbolSize: 3,
                    loop: !0,
                    trailLength: .2
                },
                large: !1,
                largeThreshold: 2e3,
                polyline: !1,
                label: {normal: {show: !1, position: "end"}},
                lineStyle: {normal: {opacity: .5}}
            }
        }))
    }, function (t, e, i) {
        var n = i(95), o = i(227), r = i(94), a = i(228), s = i(284), l = i(286);
        i(2).extendChartView({
            type: "lines", init: function () {
            }, render: function (t, e, i) {
                var u = t.getData(), h = this._lineDraw, c = t.get("effect.show"), d = t.get("polyline"), f = t.get("large") && u.count() >= t.get("largeThreshold");
                c === this._hasEffet && d === this._isPolyline && f === this._isLarge || (h && h.remove(), h = this._lineDraw = f ? new l : new n(d ? c ? s : a : c ? o : r), this._hasEffet = c, this._isPolyline = d, this._isLarge = f);
                var p = t.get("zlevel"), g = t.get("effect.trailLength"), m = i.getZr();
                if (m.painter.getLayer(p).clear(!0), null != this._lastZlevel && m.configLayer(this._lastZlevel, {motionBlur: !1}), c && g) {
                    m.configLayer(p, {motionBlur: !0, lastFrameAlpha: Math.max(Math.min(g / 10 + .9, 1), 0)})
                }
                this.group.add(h.group), h.updateData(u), this._lastZlevel = p
            }, updateLayout: function (t, e, i) {
                this._lineDraw.updateLayout(t);
                var n = i.getZr();
                n.painter.getLayer(this._lastZlevel).clear(!0)
            }, remove: function (t, e) {
                this._lineDraw && this._lineDraw.remove(e, !0)
            }, dispose: function () {
            }
        })
    }, function (t, e, i) {
        t.exports = function (t) {
            t.eachSeriesByType("lines", function (t) {
                var e = t.coordinateSystem, i = t.getData();
                i.each(function (n) {
                    var o = i.getItemModel(n), r = o.option instanceof Array ? o.option : o.get("coords"), a = [];
                    if (t.get("polyline"))for (var s = 0; s < r.length; s++)a.push(e.dataToPoint(r[s])); else {
                        a[0] = e.dataToPoint(r[0]), a[1] = e.dataToPoint(r[1]);
                        var l = o.get("lineStyle.normal.curveness");
                        +l && (a[2] = [(a[0][0] + a[1][0]) / 2 - (a[0][1] - a[1][1]) * l, (a[0][1] + a[1][1]) / 2 - (a[1][0] - a[0][0]) * l])
                    }
                    i.setItemLayout(n, a)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2), o = n.PRIORITY;
        i(293), i(294), i(222), i(172), n.registerLayout(i(297)), n.registerVisual(i(298)), n.registerProcessor(o.PROCESSOR.STATISTIC, i(296)), n.registerPreprocessor(i(295)), i(78)("map", [{
            type: "mapToggleSelect",
            event: "mapselectchanged",
            method: "toggleSelected"
        }, {type: "mapSelect", event: "mapselected", method: "select"}, {
            type: "mapUnSelect",
            event: "mapunselected",
            method: "unSelect"
        }])
    }, function (t, e, i) {
        var n = i(14), o = i(15), r = i(1), a = i(29), s = i(9), l = s.encodeHTML, u = s.addCommas, h = i(67), c = i(172), d = o.extend({
            type: "series.map",
            layoutMode: "box",
            needsDrawMap: !1,
            seriesGroup: [],
            init: function (t) {
                t = this._fillOption(t, t.map), this.option = t, d.superApply(this, "init", arguments), this.updateSelectedMap(t.data)
            },
            getInitialData: function (t) {
                var e = a(["value"], t.data || []), i = new n(e, this);
                return i.initData(t.data), i
            },
            mergeOption: function (t) {
                t.data && (t = this._fillOption(t, this.option.map)), d.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            },
            _fillOption: function (t, e) {
                return t = r.extend({}, t), t.data = c.getFilledRegions(t.data, e), t
            },
            getRawValue: function (t) {
                return this._data.get("value", t)
            },
            getRegionModel: function (t) {
                var e = this.getData();
                return e.getItemModel(e.indexOfName(t))
            },
            formatTooltip: function (t) {
                for (var e = this.getData(), i = u(this.getRawValue(t)), n = e.getName(t), o = this.seriesGroup, r = [], a = 0; a < o.length; a++) {
                    var s = o[a].originalData.indexOfName(n);
                    isNaN(o[a].originalData.get("value", s)) || r.push(l(o[a].name))
                }
                return r.join(", ") + "<br />" + n + " : " + i
            },
            getTooltipPosition: function (t) {
                if (null != t) {
                    var e = this.getData().getName(t), i = this.coordinateSystem, n = i.getRegion(e);
                    return n && i.dataToPoint(n.center)
                }
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "geo",
                map: "china",
                left: "center",
                top: "center",
                aspectScale: .75,
                showLegendSymbol: !0,
                dataRangeHoverLink: !0,
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", areaColor: "#eee"},
                    emphasis: {areaColor: "rgba(255,215,0,0.8)"}
                }
            }
        });
        r.mixin(d, h), t.exports = d
    }, function (t, e, i) {
        var n = i(3), o = i(230);
        i(2).extendChartView({
            type: "map", render: function (t, e, i, n) {
                if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
                    var r = this.group;
                    if (r.removeAll(), n && "geoRoam" === n.type && "series" === n.componentType && n.seriesId === t.id) {
                        var a = this._mapDraw;
                        a && r.add(a.group)
                    } else if (t.needsDrawMap) {
                        var a = this._mapDraw || new o(i, (!0));
                        r.add(a.group), a.draw(t, e, i, this, n), this._mapDraw = a
                    } else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
                    t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, i)
                }
            }, remove: function () {
                this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
            }, dispose: function () {
                this._mapDraw && this._mapDraw.remove(), this._mapDraw = null
            }, _renderSymbols: function (t, e, i) {
                var o = t.originalData, r = this.group;
                o.each("value", function (e, i) {
                    if (!isNaN(e)) {
                        var a = o.getItemLayout(i);
                        if (a && a.point) {
                            var s = a.point, l = a.offset, u = new n.Circle({
                                style: {fill: t.getData().getVisual("color")},
                                shape: {cx: s[0] + 9 * l, cy: s[1], r: 3},
                                silent: !0,
                                z2: 10
                            });
                            if (!l) {
                                var h = t.mainSeries.getData(), c = o.getName(i), d = c, f = h.indexOfName(c), p = o.getItemModel(i), g = p.getModel("label.normal"), m = p.getModel("label.emphasis"), v = g.getModel("textStyle"), y = m.getModel("textStyle"), x = h.getItemGraphicEl(f);
                                u.setStyle({textPosition: "bottom"});
                                var _ = function () {
                                    u.setStyle({
                                        text: m.get("show") ? d : "",
                                        textFill: y.getTextColor(),
                                        textFont: y.getFont()
                                    })
                                }, b = function () {
                                    u.setStyle({
                                        text: g.get("show") ? d : "",
                                        textFill: v.getTextColor(),
                                        textFont: v.getFont()
                                    })
                                };
                                x.on("mouseover", _).on("mouseout", b).on("emphasis", _).on("normal", b), b()
                            }
                            r.add(u)
                        }
                    }
                })
            }
        })
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = [];
            n.each(t.series, function (t) {
                "map" === t.type && e.push(t)
            }), n.each(e, function (t) {
                t.map = t.map || t.mapType, n.defaults(t, t.mapLocation)
            })
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = {}, n = ["value"], o = 0; o < t.length; o++)t[o].each(n, function (e, n) {
                var r = t[o].getName(n);
                i[r] = i[r] || [], isNaN(e) || i[r].push(e)
            });
            return t[0].map(n, function (n, o) {
                for (var r = t[0].getName(o), a = 0, s = 1 / 0, l = -(1 / 0), u = i[r].length, h = 0; h < u; h++)s = Math.min(s, i[r][h]), l = Math.max(l, i[r][h]), a += i[r][h];
                var c;
                return c = "min" === e ? s : "max" === e ? l : "average" === e ? a / u : a, 0 === u ? NaN : c
            })
        }

        var o = i(1);
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("map", function (t) {
                var i = t.get("map");
                e[i] = e[i] || [], e[i].push(t)
            }), o.each(e, function (t, e) {
                for (var i = n(o.map(t, function (t) {
                    return t.getData()
                }), t[0].get("mapValueCalculation")), r = 0; r < t.length; r++)t[r].originalData = t[r].getData();
                for (var r = 0; r < t.length; r++)t[r].seriesGroup = t, t[r].needsDrawMap = 0 === r, t[r].setData(i.cloneShallow()), t[r].mainSeries = t[0]
            })
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("map", function (i) {
                var o = i.get("map");
                if (!e[o]) {
                    var r = {};
                    n.each(i.seriesGroup, function (e) {
                        var i = e.coordinateSystem, n = e.originalData;
                        e.get("showLegendSymbol") && t.getComponent("legend") && n.each("value", function (t, e) {
                            var o = n.getName(e), a = i.getRegion(o);
                            if (a && !isNaN(t)) {
                                var s = r[o] || 0, l = i.dataToPoint(a.center);
                                r[o] = s + 1, n.setItemLayout(e, {point: l, offset: s})
                            }
                        })
                    });
                    var a = i.getData();
                    a.each(function (t) {
                        var e = a.getName(t), i = a.getItemLayout(t) || {};
                        i.showLabel = !r[e], a.setItemLayout(t, i)
                    }), e[o] = !0
                }
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("map", function (t) {
                var e = t.get("color"), i = t.getModel("itemStyle.normal"), n = i.get("areaColor"), o = i.get("color") || e[t.seriesIndex % e.length];
                t.getData().setVisual({areaColor: n, color: o})
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(231), i(300), i(301), n.registerVisual(i(302))
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.get("data"), r = o(e);
            n && n.length && s.each(i, function (t) {
                if (t) {
                    var e = s.indexOf(n, t[r]);
                    t[r] = e >= 0 ? e : NaN
                }
            })
        }

        function o(t) {
            return +t.replace("dim", "")
        }

        function r(t, e) {
            var i = 0;
            s.each(t, function (t) {
                var e = o(t);
                e > i && (i = e)
            });
            var n = e[0];
            n && n.length - 1 > i && (i = n.length - 1);
            for (var r = [], a = 0; a <= i; a++)r.push("dim" + a);
            return r
        }

        var a = i(14), s = i(1), l = i(15), u = i(29);
        t.exports = l.extend({
            type: "series.parallel",
            dependencies: ["parallel"],
            getInitialData: function (t, e) {
                var i = e.getComponent("parallel", this.get("parallelIndex")), o = i.parallelAxisIndex, l = t.data, h = i.dimensions, c = r(h, l), d = s.map(c, function (t, i) {
                    var r = s.indexOf(h, t), a = r >= 0 && e.getComponent("parallelAxis", o[r]);
                    return a && "category" === a.get("type") ? (n(a, t, l), {
                        name: t,
                        type: "ordinal"
                    }) : r < 0 && u.guessOrdinal(l, i) ? {name: t, type: "ordinal"} : t
                }), f = new a(d, this);
                return f.initData(l), this.option.progressive && (this.option.animation = !1), f
            },
            getRawIndicesByActiveState: function (t) {
                var e = this.coordinateSystem, i = this.getData(), n = [];
                return e.eachActiveState(i, function (e, o) {
                    t === e && n.push(i.getRawIndex(o))
                }), n
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "parallel",
                parallelIndex: 0,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                inactiveOpacity: .05,
                activeOpacity: 1,
                lineStyle: {normal: {width: 1, opacity: .45, type: "solid"}},
                progressive: !1,
                smooth: !1,
                animationEasing: "linear"
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.model, o = t.getRect(), r = new l.Rect({
                shape: {
                    x: o.x,
                    y: o.y,
                    width: o.width,
                    height: o.height
                }
            }), a = "horizontal" === n.get("layout") ? "width" : "height";
            return r.setShape(a, 0), l.initProps(r, {shape: {width: o.width, height: o.height}}, e, i), r
        }

        function o(t, e, i, n) {
            for (var o = [], r = 0; r < i.length; r++) {
                var a = i[r], l = t.get(a, e);
                s(l, n.getAxis(a).type) || o.push(n.dataToPoint(l, a))
            }
            return o
        }

        function r(t, e, i, n, r) {
            var a = o(t, i, n, r), s = new l.Polyline({shape: {points: a}, silent: !0, z2: 10});
            e.add(s), t.setItemGraphicEl(i, s)
        }

        function a(t, e) {
            var i = t.hostModel.getModel("lineStyle.normal"), n = i.getLineStyle();
            t.eachItemGraphicEl(function (o, r) {
                if (t.hasItemOption) {
                    var a = t.getItemModel(r), s = a.getModel("lineStyle.normal", i);
                    n = s.getLineStyle()
                }
                o.useStyle(u.extend(n, {
                    fill: null,
                    stroke: t.getItemVisual(r, "color"),
                    opacity: t.getItemVisual(r, "opacity")
                })), o.shape.smooth = e
            })
        }

        function s(t, e) {
            return "category" === e ? null == t : null == t || isNaN(t)
        }

        var l = i(3), u = i(1), h = .3, c = i(27).extend({
            type: "parallel", init: function () {
                this._dataGroup = new l.Group, this.group.add(this._dataGroup), this._data
            }, render: function (t, e, i, n) {
                this._renderForNormal(t)
            }, dispose: function () {
            }, _renderForNormal: function (t) {
                function e(t) {
                    r(c, u, t, p, f, null, m)
                }

                function i(e, i) {
                    var n = d.getItemGraphicEl(i), r = o(c, e, p, f);
                    c.setItemGraphicEl(e, n), l.updateProps(n, {shape: {points: r}}, t, e)
                }

                function s(t) {
                    var e = d.getItemGraphicEl(t);
                    u.remove(e)
                }

                var u = this._dataGroup, c = t.getData(), d = this._data, f = t.coordinateSystem, p = f.dimensions, g = t.option, m = g.smooth ? h : null;
                if (c.diff(d).add(e).update(i).remove(s).execute(), a(c, m), !this._data) {
                    var v = n(f, t, function () {
                        setTimeout(function () {
                            u.removeClipPath()
                        })
                    });
                    u.setClipPath(v)
                }
                this._data = c
            }, remove: function () {
                this._dataGroup && this._dataGroup.removeAll(), this._data = null
            }
        });
        t.exports = c
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("parallel", function (e) {
                var i = e.getModel("itemStyle.normal"), n = e.getModel("lineStyle.normal"), o = t.get("color"), r = n.get("color") || i.get("color") || o[e.seriesIndex % o.length], a = e.get("inactiveOpacity"), s = e.get("activeOpacity"), l = e.getModel("lineStyle.normal").getLineStyle(), u = e.coordinateSystem, h = e.getData(), c = {
                    normal: l.opacity,
                    active: s,
                    inactive: a
                };
                u.eachActiveState(h, function (t, e) {
                    h.setItemVisual(e, "opacity", c[t])
                }), h.setVisual("color", r)
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(337), i(304), i(305), o.registerVisual(n.curry(i(73), "radar")), o.registerVisual(n.curry(i(47), "radar", "circle", null)), o.registerLayout(i(307)), o.registerProcessor(n.curry(i(71), "radar")), o.registerPreprocessor(i(306))
    }, function (t, e, i) {
        "use strict";
        var n = i(15), o = i(14), r = i(29), a = i(1), s = n.extend({
            type: "series.radar",
            dependencies: ["radar"],
            init: function (t) {
                s.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }
            },
            getInitialData: function (t, e) {
                var i = t.data || [], n = r([], i, [], "indicator_"), a = new o(n, this);
                return a.initData(i), a
            },
            formatTooltip: function (t) {
                var e = this.getRawValue(t), i = this.coordinateSystem, n = i.getIndicatorAxes();
                return ("" == this._data.getName(t) ? this.name : this._data.getName(t)) + "<br/>" + a.map(n, function (t, i) {
                        return t.name + " : " + e[i]
                    }).join("<br />")
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "radar",
                legendHoverLink: !0,
                radarIndex: 0,
                lineStyle: {normal: {width: 2, type: "solid"}},
                label: {normal: {position: "top"}},
                symbol: "emptyCircle",
                symbolSize: 4
            }
        });
        t.exports = s
    }, function (t, e, i) {
        function n(t) {
            return r.isArray(t) || (t = [+t, +t]), t
        }

        var o = i(3), r = i(1), a = i(26);
        t.exports = i(2).extendChartView({
            type: "radar", render: function (t, e, i) {
                function s(t, e) {
                    var i = t.getItemVisual(e, "symbol") || "circle", o = t.getItemVisual(e, "color");
                    if ("none" !== i) {
                        var r = a.createSymbol(i, -.5, -.5, 1, 1, o);
                        return r.attr({
                            style: {strokeNoScale: !0},
                            z2: 100,
                            scale: n(t.getItemVisual(e, "symbolSize"))
                        }), r
                    }
                }

                function l(e, i, n, r, a, l) {
                    n.removeAll();
                    for (var u = 0; u < i.length - 1; u++) {
                        var h = s(r, a);
                        h && (h.__dimIdx = u, e[u] ? (h.attr("position", e[u]), o[l ? "initProps" : "updateProps"](h, {position: i[u]}, t, a)) : h.attr("position", i[u]), n.add(h))
                    }
                }

                function u(t) {
                    return r.map(t, function (t) {
                        return [h.cx, h.cy]
                    })
                }

                var h = t.coordinateSystem, c = this.group, d = t.getData(), f = this._data;
                d.diff(f).add(function (e) {
                    var i = d.getItemLayout(e);
                    if (i) {
                        var n = new o.Polygon, r = new o.Polyline, a = {shape: {points: i}};
                        n.shape.points = u(i), r.shape.points = u(i), o.initProps(n, a, t, e), o.initProps(r, a, t, e);
                        var s = new o.Group, h = new o.Group;
                        s.add(r), s.add(n), s.add(h), l(r.shape.points, i, h, d, e, !0), d.setItemGraphicEl(e, s)
                    }
                }).update(function (e, i) {
                    var n = f.getItemGraphicEl(i), r = n.childAt(0), a = n.childAt(1), s = n.childAt(2), u = {shape: {points: d.getItemLayout(e)}};
                    u.shape.points && (l(r.shape.points, u.shape.points, s, d, e, !1), o.updateProps(r, u, t), o.updateProps(a, u, t), d.setItemGraphicEl(e, n))
                }).remove(function (t) {
                    c.remove(f.getItemGraphicEl(t))
                }).execute(), d.eachItemGraphicEl(function (e, i) {
                    function n() {
                        u.attr("ignore", v)
                    }

                    function a() {
                        u.attr("ignore", m)
                    }

                    var s = d.getItemModel(i), l = e.childAt(0), u = e.childAt(1), h = e.childAt(2), f = d.getItemVisual(i, "color");
                    c.add(e), l.useStyle(r.defaults(s.getModel("lineStyle.normal").getLineStyle(), {
                        fill: "none",
                        stroke: f
                    })), l.hoverStyle = s.getModel("lineStyle.emphasis").getLineStyle();
                    var p = s.getModel("areaStyle.normal"), g = s.getModel("areaStyle.emphasis"), m = p.isEmpty() && p.parentModel.isEmpty(), v = g.isEmpty() && g.parentModel.isEmpty();
                    v = v && m, u.ignore = m, u.useStyle(r.defaults(p.getAreaStyle(), {
                        fill: f,
                        opacity: .7
                    })), u.hoverStyle = g.getAreaStyle();
                    var y = s.getModel("itemStyle.normal").getItemStyle(["color"]), x = s.getModel("itemStyle.emphasis").getItemStyle(), _ = s.getModel("label.normal"), b = s.getModel("label.emphasis");
                    h.eachChild(function (e) {
                        e.setStyle(y), e.hoverStyle = r.clone(x);
                        var n = d.get(d.dimensions[e.__dimIdx], i);
                        o.setText(e.style, _, f), e.setStyle({text: _.get("show") ? r.retrieve(t.getFormattedLabel(i, "normal", null, e.__dimIdx), n) : ""}), o.setText(e.hoverStyle, b, f), e.hoverStyle.text = b.get("show") ? r.retrieve(t.getFormattedLabel(i, "emphasis", null, e.__dimIdx), n) : ""
                    }), e.off("mouseover").off("mouseout").off("normal").off("emphasis"), e.on("emphasis", n).on("mouseover", n).on("normal", a).on("mouseout", a), o.setHoverStyle(e)
                }), this._data = d
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }, dispose: function () {
            }
        })
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = t.polar;
            if (e) {
                n.isArray(e) || (e = [e]);
                var i = [];
                n.each(e, function (e, o) {
                    e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], n.isArray(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : i.push(e)
                }), t.polar = i
            }
            n.each(t.series, function (t) {
                "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("radar", function (t) {
                function e(t, e) {
                    n[e] = n[e] || [], n[e][r] = o.dataToPoint(t, r)
                }

                var i = t.getData(), n = [], o = t.coordinateSystem;
                if (o) {
                    for (var r = 0; r < o.getIndicatorAxes().length; r++) {
                        var a = i.dimensions[r];
                        i.each(a, e)
                    }
                    i.each(function (t) {
                        n[t][0] && n[t].push(n[t][0].slice()), i.setItemLayout(t, n[t])
                    })
                }
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(309), i(310), n.registerLayout(i(311)), n.registerVisual(i(312))
    }, function (t, e, i) {
        var n = i(15), o = i(229), r = n.extend({
            type: "series.sankey",
            layoutInfo: null,
            getInitialData: function (t) {
                var e = t.edges || t.links, i = t.data || t.nodes;
                if (i && e) {
                    var n = o(i, e, this, !0);
                    return n.data
                }
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            formatTooltip: function (t, e, i) {
                if ("edge" === i) {
                    var n = this.getDataParams(t, i), o = n.data, a = o.source + " -- " + o.target;
                    return n.value && (a += " : " + n.value), a
                }
                return r.superCall(this, "formatTooltip", t, e)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "view",
                layout: null,
                left: "5%",
                top: "5%",
                right: "20%",
                bottom: "5%",
                nodeWidth: 20,
                nodeGap: 8,
                layoutIterations: 32,
                label: {
                    normal: {show: !0, position: "right", textStyle: {color: "#000", fontSize: 12}},
                    emphasis: {show: !0}
                },
                itemStyle: {normal: {borderWidth: 1, borderColor: "#333"}},
                lineStyle: {normal: {color: "#314656", opacity: .2, curveness: .5}, emphasis: {opacity: .6}},
                animationEasing: "linear",
                animationDuration: 1e3
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = new o.Rect({shape: {x: t.x - 10, y: t.y - 10, width: 0, height: t.height + 20}});
            return o.initProps(n, {shape: {width: t.width + 20, height: t.height + 20}}, e, i), n
        }

        var o = i(3), r = i(1), a = o.extendShape({
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cpx1: 0,
                cpy1: 0,
                cpx2: 0,
                cpy2: 0,
                extent: 0
            }, buildPath: function (t, e) {
                var i = e.extent / 2;
                t.moveTo(e.x1, e.y1 - i), t.bezierCurveTo(e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i), t.lineTo(e.x2, e.y2 + i), t.bezierCurveTo(e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i), t.closePath()
            }
        });
        t.exports = i(2).extendChartView({
            type: "sankey", _model: null, render: function (t, e, i) {
                var s = t.getGraph(), l = this.group, u = t.layoutInfo, h = t.getData(), c = t.getData("edge");
                this._model = t, l.removeAll(), l.position = [u.x, u.y], s.eachEdge(function (e) {
                    var i = new a;
                    i.dataIndex = e.dataIndex, i.seriesIndex = t.seriesIndex, i.dataType = "edge";
                    var n = e.getModel("lineStyle.normal"), r = n.get("curveness"), s = e.node1.getLayout(), u = e.node2.getLayout(), h = e.getLayout();
                    i.shape.extent = Math.max(1, h.dy);
                    var d = s.x + s.dx, f = s.y + h.sy + h.dy / 2, p = u.x, g = u.y + h.ty + h.dy / 2, m = d * (1 - r) + p * r, v = f, y = d * r + p * (1 - r), x = g;
                    switch (i.setShape({
                        x1: d,
                        y1: f,
                        x2: p,
                        y2: g,
                        cpx1: m,
                        cpy1: v,
                        cpx2: y,
                        cpy2: x
                    }), i.setStyle(n.getItemStyle()), i.style.fill) {
                        case"source":
                            i.style.fill = e.node1.getVisual("color");
                            break;
                        case"target":
                            i.style.fill = e.node2.getVisual("color")
                    }
                    o.setHoverStyle(i, e.getModel("lineStyle.emphasis").getItemStyle()), l.add(i), c.setItemGraphicEl(e.dataIndex, i)
                }), s.eachNode(function (e) {
                    var i = e.getLayout(), n = e.getModel(), a = n.getModel("label.normal"), s = a.getModel("textStyle"), u = n.getModel("label.emphasis"), c = u.getModel("textStyle"), d = new o.Rect({
                        shape: {
                            x: i.x,
                            y: i.y,
                            width: e.getLayout().dx,
                            height: e.getLayout().dy
                        },
                        style: {
                            text: a.get("show") ? t.getFormattedLabel(e.dataIndex, "normal") || e.id : "",
                            textFont: s.getFont(),
                            textFill: s.getTextColor(),
                            textPosition: a.get("position")
                        }
                    });
                    d.setStyle(r.defaults({fill: e.getVisual("color")}, n.getModel("itemStyle.normal").getItemStyle())), o.setHoverStyle(d, r.extend(e.getModel("itemStyle.emphasis"), {
                        text: u.get("show") ? t.getFormattedLabel(e.dataIndex, "emphasis") || e.id : "",
                        textFont: c.getFont(),
                        textFill: c.getTextColor(),
                        textPosition: u.get("position")
                    })), l.add(d), h.setItemGraphicEl(e.dataIndex, d), d.dataType = "node"
                }), !this._data && t.get("animation") && l.setClipPath(n(l.getBoundingRect(), t, function () {
                    l.removeClipPath()
                })), this._data = t.getData()
            }, dispose: function () {
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            return M.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
        }

        function o(t, e, i, n, o, r, s) {
            a(t, i, o), u(t, e, r, n, s), m(t)
        }

        function r(t) {
            I.each(t, function (t) {
                var e = x(t.outEdges, S), i = x(t.inEdges, S), n = Math.max(e, i);
                t.setLayout({value: n}, !0)
            })
        }

        function a(t, e, i) {
            for (var n = t, o = null, r = 0, a = 0; n.length;) {
                o = [];
                for (var u = 0, h = n.length; u < h; u++) {
                    var c = n[u];
                    c.setLayout({x: r}, !0), c.setLayout({dx: e}, !0);
                    for (var d = 0, f = c.outEdges.length; d < f; d++)o.push(c.outEdges[d].node2)
                }
                n = o, ++r
            }
            s(t, r), a = (i - e) / (r - 1), l(t, a)
        }

        function s(t, e) {
            I.each(t, function (t) {
                t.outEdges.length || t.setLayout({x: e - 1}, !0)
            })
        }

        function l(t, e) {
            I.each(t, function (t) {
                var i = t.getLayout().x * e;
                t.setLayout({x: i}, !0)
            })
        }

        function u(t, e, i, n, o) {
            var r = T().key(function (t) {
                return t.getLayout().x
            }).sortKeys(w).entries(t).map(function (t) {
                return t.values
            });
            h(t, r, e, i, n), c(r, n, i);
            for (var a = 1; o > 0; o--)a *= .99, d(r, a), c(r, n, i), p(r, a), c(r, n, i)
        }

        function h(t, e, i, n, o) {
            var r = [];
            I.each(e, function (t) {
                var e = t.length, i = 0;
                I.each(t, function (t) {
                    i += t.getLayout().value
                });
                var a = (n - (e - 1) * o) / i;
                r.push(a)
            }), r.sort(function (t, e) {
                return t - e
            });
            var a = r[0];
            I.each(e, function (t) {
                I.each(t, function (t, e) {
                    t.setLayout({y: e}, !0);
                    var i = t.getLayout().value * a;
                    t.setLayout({dy: i}, !0)
                })
            }), I.each(i, function (t) {
                var e = +t.getValue() * a;
                t.setLayout({dy: e}, !0)
            })
        }

        function c(t, e, i) {
            I.each(t, function (t) {
                var n, o, r, a = 0, s = t.length;
                for (t.sort(b), r = 0; r < s; r++) {
                    if (n = t[r], o = a - n.getLayout().y, o > 0) {
                        var l = n.getLayout().y + o;
                        n.setLayout({y: l}, !0)
                    }
                    a = n.getLayout().y + n.getLayout().dy + e
                }
                if (o = a - e - i, o > 0) {
                    var l = n.getLayout().y - o;
                    for (n.setLayout({y: l}, !0), a = n.getLayout().y, r = s - 2; r >= 0; --r)n = t[r], o = n.getLayout().y + n.getLayout().dy + e - a, o > 0 && (l = n.getLayout().y - o, n.setLayout({y: l}, !0)), a = n.getLayout().y
                }
            })
        }

        function d(t, e) {
            I.each(t.slice().reverse(), function (t) {
                I.each(t, function (t) {
                    if (t.outEdges.length) {
                        var i = x(t.outEdges, f) / x(t.outEdges, S), n = t.getLayout().y + (i - _(t)) * e;
                        t.setLayout({y: n}, !0)
                    }
                })
            })
        }

        function f(t) {
            return _(t.node2) * t.getValue()
        }

        function p(t, e) {
            I.each(t, function (t) {
                I.each(t, function (t) {
                    if (t.inEdges.length) {
                        var i = x(t.inEdges, g) / x(t.inEdges, S), n = t.getLayout().y + (i - _(t)) * e;
                        t.setLayout({y: n}, !0)
                    }
                })
            })
        }

        function g(t) {
            return _(t.node1) * t.getValue()
        }

        function m(t) {
            I.each(t, function (t) {
                t.outEdges.sort(v), t.inEdges.sort(y)
            }), I.each(t, function (t) {
                var e = 0, i = 0;
                I.each(t.outEdges, function (t) {
                    t.setLayout({sy: e}, !0), e += t.getLayout().dy
                }), I.each(t.inEdges, function (t) {
                    t.setLayout({ty: i}, !0), i += t.getLayout().dy
                })
            })
        }

        function v(t, e) {
            return t.node2.getLayout().y - e.node2.getLayout().y
        }

        function y(t, e) {
            return t.node1.getLayout().y - e.node1.getLayout().y
        }

        function x(t, e) {
            for (var i = 0, n = t.length, o = -1; ++o < n;) {
                var r = +e.call(t, t[o], o);
                isNaN(r) || (i += r)
            }
            return i
        }

        function _(t) {
            return t.getLayout().y + t.getLayout().dy / 2
        }

        function b(t, e) {
            return t.getLayout().y - e.getLayout().y
        }

        function w(t, e) {
            return t < e ? -1 : t > e ? 1 : t === e ? 0 : NaN
        }

        function S(t) {
            return t.getValue()
        }

        var M = i(12), T = i(384), I = i(1);
        t.exports = function (t, e, i) {
            t.eachSeriesByType("sankey", function (t) {
                var i = t.get("nodeWidth"), a = t.get("nodeGap"), s = n(t, e);
                t.layoutInfo = s;
                var l = s.width, u = s.height, h = t.getGraph(), c = h.nodes, d = h.edges;
                r(c);
                var f = c.filter(function (t) {
                    return 0 === t.getLayout().value
                }), p = 0 !== f.length ? 0 : t.get("layoutIterations");
                o(c, d, i, a, l, u, p)
            })
        }
    }, function (t, e, i) {
        var n = i(72), o = i(1);
        t.exports = function (t, e) {
            t.eachSeriesByType("sankey", function (t) {
                var e = t.getGraph(), i = e.nodes;
                i.sort(function (t, e) {
                    return t.getLayout().value - e.getLayout().value
                });
                var r = i[0].getLayout().value, a = i[i.length - 1].getLayout().value;
                o.each(i, function (e) {
                    var i = new n({
                        type: "color",
                        mappingMethod: "linear",
                        dataExtent: [r, a],
                        visual: t.get("color")
                    }), o = i.mapValueToVisual(e.getLayout().value);
                    e.setVisual("color", o);
                    var s = e.getModel(), l = s.get("itemStyle.normal.color");
                    null != l && e.setVisual("color", l)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(315), i(316), i(317), n.registerVisual(i(319)), n.registerLayout(i(318))
    }, function (t, e, i) {
        function n(t) {
            this.group = new a.Group, t.add(this.group)
        }

        function o(t, e, i, n, o, r) {
            var a = [[o ? t : t - d, e], [t + i, e], [t + i, e + n], [o ? t : t - d, e + n]];
            return !r && a.splice(2, 0, [t + i + d, e + n / 2]), !o && a.push([t, e + n / 2]), a
        }

        function r(t, e, i) {
            t.eventData = {
                componentType: "series",
                componentSubType: "treemap",
                seriesIndex: e.componentIndex,
                seriesName: e.name,
                seriesType: "treemap",
                selfType: "breadcrumb",
                nodeData: {dataIndex: i && i.dataIndex, name: i && i.name},
                treePathInfo: i && u.wrapTreePathInfo(i, e)
            }
        }

        var a = i(3), s = i(12), l = i(1), u = i(79), h = 8, c = 8, d = 5;
        n.prototype = {
            constructor: n, render: function (t, e, i, n) {
                var o = t.getModel("breadcrumb"), r = this.group;
                if (r.removeAll(), o.get("show") && i) {
                    var a = o.getModel("itemStyle.normal"), l = a.getModel("textStyle"), u = {
                        pos: {
                            left: o.get("left"),
                            right: o.get("right"),
                            top: o.get("top"),
                            bottom: o.get("bottom")
                        },
                        box: {width: e.getWidth(), height: e.getHeight()},
                        emptyItemWidth: o.get("emptyItemWidth"),
                        totalWidth: 0,
                        renderList: []
                    };
                    this._prepare(i, u, l), this._renderContent(t, u, a, l, n), s.positionElement(r, u.pos, u.box)
                }
            }, _prepare: function (t, e, i) {
                for (var n = t; n; n = n.parentNode) {
                    var o = n.getModel().get("name"), r = i.getTextRect(o), a = Math.max(r.width + 2 * h, e.emptyItemWidth);
                    e.totalWidth += a + c, e.renderList.push({node: n, text: o, width: a})
                }
            }, _renderContent: function (t, e, i, n, u) {
                for (var h = 0, d = e.emptyItemWidth, f = t.get("breadcrumb.height"), p = s.getAvailableSize(e.pos, e.box), g = e.totalWidth, m = e.renderList, v = m.length - 1; v >= 0; v--) {
                    var y = m[v], x = y.node, _ = y.width, b = y.text;
                    g > p.width && (g -= _ - d, _ = d, b = "");
                    var w = new a.Polygon({
                        shape: {points: o(h, 0, _, f, v === m.length - 1, 0 === v)},
                        style: l.defaults(i.getItemStyle(), {
                            lineJoin: "bevel",
                            text: b,
                            textFill: n.getTextColor(),
                            textFont: n.getFont()
                        }),
                        z: 10,
                        onclick: l.curry(u, x)
                    });
                    this.group.add(w), r(w, t, x), h += _ + c
                }
            }, remove: function () {
                this.group.removeAll()
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = 0;
            s.each(t.children, function (t) {
                n(t, e);
                var o = t.value;
                s.isArray(o) && (o = o[0]), i += o
            });
            var o = t.value;
            e >= 0 && (s.isArray(o) ? o = o[0] : t.value = new Array(e)), (null == o || isNaN(o)) && (o = i), o < 0 && (o = 0), e >= 0 ? t.value[0] = o : t.value = o
        }

        function o(t, e) {
            var i = e.get("color");
            if (i) {
                t = t || [];
                var n;
                if (s.each(t, function (t) {
                        var e = new l(t), i = e.get("color");
                        (e.get("itemStyle.normal.color") || i && "none" !== i) && (n = !0)
                    }), !n) {
                    var o = t[0] || (t[0] = {});
                    o.color = i.slice()
                }
                return t
            }
        }

        var r = i(15), a = i(382), s = i(1), l = i(10), u = i(9), h = i(79), c = u.encodeHTML, d = u.addCommas;
        t.exports = r.extend({
            type: "series.treemap",
            layoutMode: "box",
            dependencies: ["grid", "polar"],
            _viewRoot: null,
            defaultOption: {
                progressive: 0,
                hoverLayerThreshold: 1 / 0,
                left: "center",
                top: "middle",
                right: null,
                bottom: null,
                width: "80%",
                height: "80%",
                sort: !0,
                clipWindow: "origin",
                squareRatio: .5 * (1 + Math.sqrt(5)),
                leafDepth: null,
                drillDownIcon: "▶",
                zoomToNodeRatio: .1024,
                roam: !0,
                nodeClick: "zoomToNode",
                animation: !0,
                animationDurationUpdate: 900,
                animationEasing: "quinticInOut",
                breadcrumb: {
                    show: !0,
                    height: 22,
                    left: "center",
                    top: "bottom",
                    emptyItemWidth: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0.7)",
                            borderColor: "rgba(255,255,255,0.7)",
                            borderWidth: 1,
                            shadowColor: "rgba(150,150,150,1)",
                            shadowBlur: 3,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            textStyle: {color: "#fff"}
                        }, emphasis: {textStyle: {}}
                    }
                },
                label: {normal: {show: !0, position: "inside", textStyle: {color: "#fff", ellipsis: !0}}},
                itemStyle: {
                    normal: {
                        color: null,
                        colorAlpha: null,
                        colorSaturation: null,
                        borderWidth: 0,
                        gapWidth: 0,
                        borderColor: "#fff",
                        borderColorSaturation: null
                    }, emphasis: {}
                },
                visualDimension: 0,
                visualMin: null,
                visualMax: null,
                color: [],
                colorAlpha: null,
                colorSaturation: null,
                colorMappingBy: "index",
                visibleMin: 10,
                childrenVisibleMin: null,
                levels: []
            },
            getInitialData: function (t, e) {
                var i = t.data || [], r = t.name;
                null == r && (r = t.name);
                var l = {name: r, children: t.data}, u = (i[0] || {}).value;
                n(l, s.isArray(u) ? u.length : -1);
                var h = t.levels || [];
                return h = t.levels = o(h, e), a.createTree(l, this, h).data
            },
            optionUpdated: function () {
                this.resetViewRoot()
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = this.getRawValue(t), n = d(s.isArray(i) ? i[0] : i), o = e.getName(t);
                return c(o) + ": " + n
            },
            getDataParams: function (t) {
                var e = r.prototype.getDataParams.apply(this, arguments), i = this.getData().tree.getNodeByDataIndex(t);
                return e.treePathInfo = h.wrapTreePathInfo(i, this), e
            },
            setLayoutInfo: function (t) {
                this.layoutInfo = this.layoutInfo || {}, s.extend(this.layoutInfo, t)
            },
            mapIdToIndex: function (t) {
                var e = this._idIndexMap;
                e || (e = this._idIndexMap = {}, this._idIndexMapCount = 0);
                var i = e[t];
                return null == i && (e[t] = i = this._idIndexMapCount++), i
            },
            getViewRoot: function () {
                return this._viewRoot
            },
            resetViewRoot: function (t) {
                t ? this._viewRoot = t : t = this._viewRoot;
                var e = this.getData().tree.root;
                t && (t === e || e.contains(t)) || (this._viewRoot = e)
            }
        })
    }, function (t, e, i) {
        function n() {
            return {nodeGroup: [], background: [], content: []}
        }

        function o(t, e, i, n, o, l, u, h, c, d) {
            function f(e) {
                E.dataIndex = u.dataIndex, E.seriesIndex = t.seriesIndex;
                var i = I.borderWidth, n = Math.max(A - 2 * i, 0), o = Math.max(L - 2 * i, 0);
                E.culling = !0, E.setShape({x: i, y: i, width: n, height: o});
                var r = u.getVisual("color", !0);
                p(E, function () {
                    var t = {fill: r}, e = u.getModel("itemStyle.emphasis").getItemStyle();
                    g(t, e, r, n, o), E.setStyle(t), s.setHoverStyle(E, e)
                }), e.add(E)
            }

            function p(t, e) {
                C ? !t.invisible && l.push(t) : (e(), t.__tmWillVisible || (t.invisible = !1))
            }

            function g(e, i, n, o, r) {
                var a = u.getModel(), s = a.get("name");
                if (I.isLeafRoot) {
                    var l = t.get("drillDownIcon", !0);
                    s = l ? l + " " + s : s
                }
                y(s, e, a, _, n, o, r), y(s, i, a, b, n, o, r)
            }

            function y(t, e, i, n, o, r, a) {
                var l = i.getModel(n), u = l.getModel("textStyle");
                s.setText(e, l, o), e.textAlign = u.get("align"), e.textVerticalAlign = u.get("baseline");
                var h = u.getTextRect(t);
                !l.getShallow("show") || h.height > a ? e.text = "" : h.width > r ? e.text = u.get("ellipsis") ? u.truncateText(t, r, null, {minChar: 2}) : "" : e.text = t
            }

            function x(t, n, a, s) {
                var l = null != P && i[t][P], u = o[t];
                return l ? (i[t][P] = null, w(u, l, t)) : C || (l = new n({z: r(a, s)}), l.__tmDepth = a, l.__tmStorageName = t, T(u, l, t)), e[t][D] = l
            }

            function w(t, e, i) {
                var n = t[D] = {};
                n.old = "nodeGroup" === i ? e.position.slice() : a.extend({}, e.shape)
            }

            function T(t, e, i) {
                var r = t[D] = {}, a = u.parentNode;
                if (a && (!n || "drillDown" === n.direction)) {
                    var s = 0, l = 0, h = o.background[a.getRawIndex()];
                    !n && h && h.old && (s = h.old.width, l = h.old.height), r.old = "nodeGroup" === i ? [0, l] : {
                        x: s,
                        y: l,
                        width: 0,
                        height: 0
                    }
                }
                r.fadein = "nodeGroup" !== i
            }

            if (u) {
                var I = u.getLayout();
                if (I && I.isInView) {
                    var A = I.width, L = I.height, C = I.invisible, D = u.getRawIndex(), P = h && h.getRawIndex(), k = x("nodeGroup", m);
                    if (k) {
                        if (c.add(k), k.attr("position", [I.x || 0, I.y || 0]), k.__tmNodeWidth = A, k.__tmNodeHeight = L, I.isAboveViewRoot)return k;
                        var O = x("background", v, d, S);
                        O && (O.setShape({x: 0, y: 0, width: A, height: L}), p(O, function () {
                            O.setStyle("fill", u.getVisual("borderColor", !0))
                        }), k.add(O));
                        var z = u.viewChildren;
                        if (!z || !z.length) {
                            var E = x("content", v, d, M);
                            E && f(k)
                        }
                        return k
                    }
                }
            }
        }

        function r(t, e) {
            var i = t * w + e;
            return (i - 1) / i
        }

        var a = i(1), s = i(3), l = i(45), u = i(79), h = i(314), c = i(80), d = i(8), f = i(19), p = i(383), g = a.bind, m = s.Group, v = s.Rect, y = a.each, x = 3, _ = ["label", "normal"], b = ["label", "emphasis"], w = 10, S = 1, M = 2;
        t.exports = i(2).extendChartView({
            type: "treemap", init: function (t, e) {
                this._containerGroup, this._storage = n(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready", this._mayClick
            }, render: function (t, e, i, n) {
                var o = e.findComponents({mainType: "series", subType: "treemap", query: n});
                if (!(a.indexOf(o, t) < 0)) {
                    this.seriesModel = t, this.api = i, this.ecModel = e;
                    var r = u.retrieveTargetInfo(n, t), s = n && n.type, l = t.layoutInfo, h = !this._oldTree, c = this._storage, d = "treemapRootToNode" === s && r && c ? {
                        rootNodeGroup: c.nodeGroup[r.node.getRawIndex()],
                        direction: n.direction
                    } : null, f = this._giveContainerGroup(l), p = this._doRender(f, t, d);
                    h || s && "treemapZoomToNode" !== s && "treemapRootToNode" !== s ? p.renderFinally() : this._doAnimation(f, p, t, d), this._resetController(i), this._renderBreadcrumb(t, i, r)
                }
            }, _giveContainerGroup: function (t) {
                var e = this._containerGroup;
                return e || (e = this._containerGroup = new m, this._initEvents(e), this.group.add(e)), e.attr("position", [t.x, t.y]), e
            }, _doRender: function (t, e, i) {
                function r(t, e, i, n, o) {
                    function s(t) {
                        return t.getId()
                    }

                    function u(a, s) {
                        var l = null != a ? t[a] : null, u = null != s ? e[s] : null, h = m(l, u, i, o);
                        h && r(l && l.viewChildren || [], u && u.viewChildren || [], h, n, o + 1)
                    }

                    n ? (e = t, y(t, function (t, e) {
                        !t.isRemoved() && u(e, e)
                    })) : new l(e, t, s, s).add(u).update(u).remove(a.curry(u, null)).execute()
                }

                function s(t) {
                    var e = n();
                    return t && y(t, function (t, i) {
                        var n = e[i];
                        y(t, function (t) {
                            t && (n.push(t), t.__tmWillDelete = 1)
                        })
                    }), e
                }

                function u() {
                    y(v, function (t) {
                        y(t, function (t) {
                            t.parent && t.parent.remove(t)
                        })
                    }), y(g, function (t) {
                        t.invisible = !0, t.dirty()
                    })
                }

                var h = e.getData().tree, c = this._oldTree, d = n(), f = n(), p = this._storage, g = [], m = a.curry(o, e, f, p, i, d, g);
                r(h.root ? [h.root] : [], c && c.root ? [c.root] : [], t, h === c || !c, 0);
                var v = s(p);
                return this._oldTree = h, this._storage = f, {lastsForAnimation: d, willDeleteEls: v, renderFinally: u}
            }, _doAnimation: function (t, e, i, n) {
                if (i.get("animation")) {
                    var o = i.get("animationDurationUpdate"), r = i.get("animationEasing"), s = p.createWrap();
                    y(e.willDeleteEls, function (t, e) {
                        y(t, function (t, i) {
                            if (!t.invisible) {
                                var a, l = t.parent;
                                if (n && "drillDown" === n.direction)a = l === n.rootNodeGroup ? {
                                    shape: {
                                        x: 0,
                                        y: 0,
                                        width: l.__tmNodeWidth,
                                        height: l.__tmNodeHeight
                                    }, style: {opacity: 0}
                                } : {style: {opacity: 0}}; else {
                                    var u = 0, h = 0;
                                    l.__tmWillDelete || (u = l.__tmNodeWidth / 2, h = l.__tmNodeHeight / 2), a = "nodeGroup" === e ? {
                                        position: [u, h],
                                        style: {opacity: 0}
                                    } : {shape: {x: u, y: h, width: 0, height: 0}, style: {opacity: 0}}
                                }
                                a && s.add(t, a, o, r)
                            }
                        })
                    }), y(this._storage, function (t, i) {
                        y(t, function (t, n) {
                            var l = e.lastsForAnimation[i][n], u = {};
                            l && ("nodeGroup" === i ? l.old && (u.position = t.position.slice(), t.attr("position", l.old)) : (l.old && (u.shape = a.extend({}, t.shape), t.setShape(l.old)), l.fadein ? (t.setStyle("opacity", 0), u.style = {opacity: 1}) : 1 !== t.style.opacity && (u.style = {opacity: 1})), s.add(t, u, o, r))
                        })
                    }, this), this._state = "animating", s.done(g(function () {
                        this._state = "ready", e.renderFinally()
                    }, this)).start()
                }
            }, _resetController: function (t) {
                var e = this._controller;
                e || (e = this._controller = new c(t.getZr()), e.enable(this.seriesModel.get("roam")), e.on("pan", g(this._onPan, this)), e.on("zoom", g(this._onZoom, this)));
                var i = new d(0, 0, t.getWidth(), t.getHeight());
                e.setContainsPoint(function (t, e) {
                    return i.contain(t, e)
                })
            }, _clearController: function () {
                var t = this._controller;
                t && (t.dispose(), t = null)
            }, _onPan: function (t, e) {
                if (this._mayClick = !1, "animating" !== this._state && (Math.abs(t) > x || Math.abs(e) > x)) {
                    var i = this.seriesModel.getData().tree.root;
                    if (!i)return;
                    var n = i.getLayout();
                    if (!n)return;
                    this.api.dispatchAction({
                        type: "treemapMove",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: n.x + t, y: n.y + e, width: n.width, height: n.height}
                    })
                }
            }, _onZoom: function (t, e, i) {
                if (this._mayClick = !1, "animating" !== this._state) {
                    var n = this.seriesModel.getData().tree.root;
                    if (!n)return;
                    var o = n.getLayout();
                    if (!o)return;
                    var r = new d(o.x, o.y, o.width, o.height), a = this.seriesModel.layoutInfo;
                    e -= a.x, i -= a.y;
                    var s = f.create();
                    f.translate(s, s, [-e, -i]), f.scale(s, s, [t, t]), f.translate(s, s, [e, i]), r.applyTransform(s), this.api.dispatchAction({
                        type: "treemapRender",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: r.x, y: r.y, width: r.width, height: r.height}
                    })
                }
            }, _initEvents: function (t) {
                function e(t) {
                    var e = this.seriesModel.get("nodeClick", !0);
                    if (e) {
                        var i = this.findTarget(t.offsetX, t.offsetY);
                        if (i) {
                            var n = i.node;
                            if (n.getLayout().isLeafRoot)this._rootToNode(i); else if ("zoomToNode" === e)this._zoomToNode(i); else if ("link" === e) {
                                var o = n.hostTree.data.getItemModel(n.dataIndex), r = o.get("link", !0), a = o.get("target", !0) || "blank";
                                r && window.open(r, a)
                            }
                        }
                    }
                }

                t.on("mousedown", function (t) {
                    "ready" === this._state && (this._mayClick = !0)
                }, this), t.on("mouseup", function (t) {
                    this._mayClick && (this._mayClick = !1, "ready" === this._state && e.call(this, t))
                }, this)
            }, _renderBreadcrumb: function (t, e, i) {
                function n(e) {
                    "animating" !== this._state && (u.aboveViewRoot(t.getViewRoot(), e) ? this._rootToNode({node: e}) : this._zoomToNode({node: e}))
                }

                i || (i = null != t.get("leafDepth", !0) ? {node: t.getViewRoot()} : this.findTarget(e.getWidth() / 2, e.getHeight() / 2), i || (i = {node: t.getData().tree.root})), (this._breadcrumb || (this._breadcrumb = new h(this.group))).render(t, e, i.node, g(n, this))
            }, remove: function () {
                this._clearController(), this._containerGroup && this._containerGroup.removeAll(), this._storage = n(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
            }, dispose: function () {
                this._clearController()
            }, _zoomToNode: function (t) {
                this.api.dispatchAction({
                    type: "treemapZoomToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: t.node
                })
            }, _rootToNode: function (t) {
                this.api.dispatchAction({
                    type: "treemapRootToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: t.node
                })
            }, findTarget: function (t, e) {
                var i, n = this.seriesModel.getViewRoot();
                return n.eachNode({attr: "viewChildren", order: "preorder"}, function (n) {
                    var o = this._storage.background[n.getRawIndex()];
                    if (o) {
                        var r = o.transformCoordToLocal(t, e), a = o.shape;
                        if (!(a.x <= r[0] && r[0] <= a.x + a.width && a.y <= r[1] && r[1] <= a.y + a.height))return !1;
                        i = {node: n, offsetX: r[0], offsetY: r[1]}
                    }
                }, this), i
            }
        })
    }, function (t, e, i) {
        for (var n = i(2), o = i(79), r = function () {
        }, a = ["treemapZoomToNode", "treemapRender", "treemapMove"], s = 0; s < a.length; s++)n.registerAction({
            type: a[s],
            update: "updateView"
        }, r);
        n.registerAction({type: "treemapRootToNode", update: "updateView"}, function (t, e) {
            function i(e, i) {
                var n = o.retrieveTargetInfo(t, e);
                if (n) {
                    var r = e.getViewRoot();
                    r && (t.direction = o.aboveViewRoot(r, n.node) ? "rollUp" : "drillDown"), e.resetViewRoot(n.node)
                }
            }

            e.eachComponent({mainType: "series", subType: "treemap", query: t}, i)
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = {mainType: "series", subType: "treemap", query: i};
            t.eachComponent(n, function (t) {
                var n = e.getWidth(), r = e.getHeight(), a = t.option, s = a.size || [], l = b(w(a.width, s[0]), n), u = b(w(a.height, s[1]), r), h = m.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                }), g = i && i.type, x = v.retrieveTargetInfo(i, t), _ = "treemapRender" === g || "treemapMove" === g ? i.rootRect : null, M = t.getViewRoot(), T = v.getPathToRoot(M);
                if ("treemapMove" !== g) {
                    var I = "treemapZoomToNode" === g ? c(t, x, M, l, u) : _ ? [_.width, _.height] : [l, u], A = a.sort;
                    A && "asc" !== A && "desc" !== A && (A = "desc");
                    var L = {squareRatio: a.squareRatio, sort: A, leafDepth: a.leafDepth};
                    M.hostTree.clearLayouts();
                    var C = {x: 0, y: 0, width: I[0], height: I[1], area: I[0] * I[1]};
                    M.setLayout(C), o(M, L, !1, 0);
                    var C = M.getLayout();
                    S(T, function (t, e) {
                        var i = (T[e + 1] || M).getValue();
                        t.setLayout(p.extend({dataExtent: [i, i], borderWidth: 0}, C))
                    })
                }
                var D = t.getData().tree.root;
                D.setLayout(d(h, _, x), !0), t.setLayoutInfo(h), f(D, new y((-h.x), (-h.y), n, r), T, M, 0)
            })
        }

        function o(t, e, i, n) {
            var a, s;
            if (!t.isRemoved()) {
                var l = t.getLayout();
                a = l.width, s = l.height;
                var c = t.getModel("itemStyle.normal"), d = c.get("borderWidth"), f = c.get("gapWidth") / 2, p = d - f, g = t.getModel();
                t.setLayout({borderWidth: d}, !0), a = x(a - 2 * p, 0), s = x(s - 2 * p, 0);
                var m = a * s, v = r(t, g, m, e, i, n);
                if (v.length) {
                    var y = {x: p, y: p, width: a, height: s}, b = _(a, s), w = 1 / 0, S = [];
                    S.area = 0;
                    for (var M = 0, T = v.length; M < T;) {
                        var I = v[M];
                        S.push(I), S.area += I.getLayout().area;
                        var A = u(S, b, e.squareRatio);
                        A <= w ? (M++, w = A) : (S.area -= S.pop().getLayout().area, h(S, b, y, f, !1), b = _(y.width, y.height), S.length = S.area = 0, w = 1 / 0)
                    }
                    if (S.length && h(S, b, y, f, !0), !i) {
                        var L = g.get("childrenVisibleMin");
                        null != L && m < L && (i = !0)
                    }
                    for (var M = 0, T = v.length; M < T; M++)o(v[M], e, i, n + 1)
                }
            }
        }

        function r(t, e, i, n, o, r) {
            var u = t.children || [], h = n.sort;
            "asc" !== h && "desc" !== h && (h = null);
            var c = null != n.leafDepth && n.leafDepth <= r;
            if (o && !c)return t.viewChildren = [];
            u = p.filter(u, function (t) {
                return !t.isRemoved()
            }), s(u, h);
            var d = l(e, u, h);
            if (0 === d.sum)return t.viewChildren = [];
            if (d.sum = a(e, i, d.sum, h, u), 0 === d.sum)return t.viewChildren = [];
            for (var f = 0, g = u.length; f < g; f++) {
                var m = u[f].getValue() / d.sum * i;
                u[f].setLayout({area: m})
            }
            return c && (u.length && t.setLayout({isLeafRoot: !0}, !0), u.length = 0), t.viewChildren = u, t.setLayout({dataExtent: d.dataExtent}, !0), u
        }

        function a(t, e, i, n, o) {
            if (!n)return i;
            for (var r = t.get("visibleMin"), a = o.length, s = a, l = a - 1; l >= 0; l--) {
                var u = o["asc" === n ? a - l - 1 : l].getValue();
                u / i * e < r && (s = l, i -= u)
            }
            return "asc" === n ? o.splice(0, a - s) : o.splice(s, a - s), i
        }

        function s(t, e) {
            return e && t.sort(function (t, i) {
                return "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue()
            }), t
        }

        function l(t, e, i) {
            for (var n = 0, o = 0, r = e.length; o < r; o++)n += e[o].getValue();
            var a, s = t.get("visualDimension");
            if (e && e.length)if ("value" === s && i)a = [e[e.length - 1].getValue(), e[0].getValue()], "asc" === i && a.reverse(); else {
                var a = [1 / 0, -(1 / 0)];
                S(e, function (t) {
                    var e = t.getValue(s);
                    e < a[0] && (a[0] = e), e > a[1] && (a[1] = e)
                })
            } else a = [NaN, NaN];
            return {sum: n, dataExtent: a}
        }

        function u(t, e, i) {
            for (var n, o = 0, r = 1 / 0, a = 0, s = t.length; a < s; a++)n = t[a].getLayout().area,
            n && (n < r && (r = n), n > o && (o = n));
            var l = t.area * t.area, u = e * e * i;
            return l ? x(u * o / l, l / (u * r)) : 1 / 0
        }

        function h(t, e, i, n, o) {
            var r = e === i.width ? 0 : 1, a = 1 - r, s = ["x", "y"], l = ["width", "height"], u = i[s[r]], h = e ? t.area / e : 0;
            (o || h > i[l[a]]) && (h = i[l[a]]);
            for (var c = 0, d = t.length; c < d; c++) {
                var f = t[c], p = {}, g = h ? f.getLayout().area / h : 0, m = p[l[a]] = x(h - 2 * n, 0), v = i[s[r]] + i[l[r]] - u, y = c === d - 1 || v < g ? v : g, b = p[l[r]] = x(y - 2 * n, 0);
                p[s[a]] = i[s[a]] + _(n, m / 2), p[s[r]] = u + _(n, b / 2), u += y, f.setLayout(p, !0)
            }
            i[s[a]] += h, i[l[a]] -= h
        }

        function c(t, e, i, n, o) {
            var r = (e || {}).node, a = [n, o];
            if (!r || r === i)return a;
            for (var s, l = n * o, u = l * t.option.zoomToNodeRatio; s = r.parentNode;) {
                for (var h = 0, c = s.children, d = 0, f = c.length; d < f; d++)h += c[d].getValue();
                var p = r.getValue();
                if (0 === p)return a;
                u *= h / p;
                var m = s.getModel("itemStyle.normal").get("borderWidth");
                isFinite(m) && (u += 4 * m * m + 4 * m * Math.pow(u, .5)), u > g.MAX_SAFE_INTEGER && (u = g.MAX_SAFE_INTEGER), r = s
            }
            u < l && (u = l);
            var v = Math.pow(u / l, .5);
            return [n * v, o * v]
        }

        function d(t, e, i) {
            if (e)return {x: e.x, y: e.y};
            var n = {x: 0, y: 0};
            if (!i)return n;
            var o = i.node, r = o.getLayout();
            if (!r)return n;
            for (var a = [r.width / 2, r.height / 2], s = o; s;) {
                var l = s.getLayout();
                a[0] += l.x, a[1] += l.y, s = s.parentNode
            }
            return {x: t.width / 2 - a[0], y: t.height / 2 - a[1]}
        }

        function f(t, e, i, n, o) {
            var r = t.getLayout(), a = i[o], s = a && a === t;
            if (!(a && !s || o === i.length && t !== n)) {
                t.setLayout({isInView: !0, invisible: !s && !e.intersect(r), isAboveViewRoot: s}, !0);
                var l = new y(e.x - r.x, e.y - r.y, e.width, e.height);
                S(t.viewChildren || [], function (t) {
                    f(t, l, i, n, o + 1)
                })
            }
        }

        var p = i(1), g = i(4), m = i(12), v = i(79), y = i(8), v = i(79), x = Math.max, _ = Math.min, b = g.parsePercent, w = p.retrieve, S = p.each;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, s, u, c) {
            var d = t.getModel(), p = t.getLayout();
            if (p && !p.invisible && p.isInView) {
                var m, v = t.getModel(g), y = i[t.depth], x = o(v, e, y, s), _ = v.get("borderColor"), b = v.get("borderColorSaturation");
                null != b && (m = r(x, t), _ = a(b, m)), t.setVisual("borderColor", _);
                var w = t.viewChildren;
                if (w && w.length) {
                    var S = l(t, d, p, v, x, w);
                    f.each(w, function (t, e) {
                        if (t.depth >= u.length || t === u[t.depth]) {
                            var o = h(d, x, t, e, S, c);
                            n(t, o, i, s, u, c)
                        }
                    })
                } else m = r(x, t), t.setVisual("color", m)
            }
        }

        function o(t, e, i, n) {
            var o = f.extend({}, e);
            return f.each(["color", "colorAlpha", "colorSaturation"], function (r) {
                var a = t.get(r, !0);
                null == a && i && (a = i[r]), null == a && (a = e[r]), null == a && (a = n.get(r)), null != a && (o[r] = a)
            }), o
        }

        function r(t) {
            var e = s(t, "color");
            if (e) {
                var i = s(t, "colorAlpha"), n = s(t, "colorSaturation");
                return n && (e = d.modifyHSL(e, null, null, n)), i && (e = d.modifyAlpha(e, i)), e
            }
        }

        function a(t, e) {
            return null != e ? d.modifyHSL(e, null, null, t) : null
        }

        function s(t, e) {
            var i = t[e];
            if (null != i && "none" !== i)return i
        }

        function l(t, e, i, n, o, r) {
            if (r && r.length) {
                var a = u(e, "color") || null != o.color && "none" !== o.color && (u(e, "colorAlpha") || u(e, "colorSaturation"));
                if (a) {
                    var s = e.get("visualMin"), l = e.get("visualMax"), h = i.dataExtent.slice();
                    null != s && s < h[0] && (h[0] = s), null != l && l > h[1] && (h[1] = l);
                    var d = e.get("colorMappingBy"), f = {type: a.name, dataExtent: h, visual: a.range};
                    "color" !== f.type || "index" !== d && "id" !== d ? f.mappingMethod = "linear" : (f.mappingMethod = "category", f.loop = !0);
                    var p = new c(f);
                    return p.__drColorMappingBy = d, p
                }
            }
        }

        function u(t, e) {
            var i = t.get(e);
            return p(i) && i.length ? {name: e, range: i} : null
        }

        function h(t, e, i, n, o, r) {
            var a = f.extend({}, e);
            if (o) {
                var s = o.type, l = "color" === s && o.__drColorMappingBy, u = "index" === l ? n : "id" === l ? r.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
                a[s] = o.mapValueToVisual(u)
            }
            return a
        }

        var c = i(72), d = i(18), f = i(1), p = f.isArray, g = "itemStyle.normal";
        t.exports = function (t, e, i) {
            var o = {mainType: "series", subType: "treemap", query: i};
            t.eachComponent(o, function (t) {
                var e = t.getData().tree, i = e.root, o = t.getModel(g);
                if (!i.isRemoved()) {
                    var r = f.map(e.levelModels, function (t) {
                        return t ? t.get(g) : null
                    });
                    n(i, {}, r, o, t.getViewRoot().getAncestors(), t)
                }
            })
        }
    }, function (t, e, i) {
        "use strict";
        i(217), i(321)
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n) {
            var o = t.coordToPoint([e, n]), r = t.coordToPoint([i, n]);
            return {x1: o[0], y1: o[1], x2: r[0], y2: r[1]}
        }

        var o = i(1), r = i(3), a = i(10), s = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
        i(2).extendComponentView({
            type: "angleAxis", render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("polar", t.get("polarIndex")), n = t.axis, r = i.coordinateSystem, a = r.getRadiusAxis().getExtent(), l = n.getTicksCoords();
                    "category" !== n.type && l.pop(), o.each(s, function (e) {
                        t.get(e + ".show") && this["_" + e](t, r, l, a)
                    }, this)
                }
            }, _axisLine: function (t, e, i, n) {
                var o = t.getModel("axisLine.lineStyle"), a = new r.Circle({
                    shape: {cx: e.cx, cy: e.cy, r: n[1]},
                    style: o.getLineStyle(),
                    z2: 1,
                    silent: !0
                });
                a.style.fill = null, this.group.add(a)
            }, _axisTick: function (t, e, i, a) {
                var s = t.getModel("axisTick"), l = (s.get("inside") ? -1 : 1) * s.get("length"), u = o.map(i, function (t) {
                    return new r.Line({shape: n(e, a[1], a[1] + l, t)})
                });
                this.group.add(r.mergePath(u, {style: o.defaults(s.getModel("lineStyle").getLineStyle(), {stroke: t.get("axisLine.lineStyle.color")})}))
            }, _axisLabel: function (t, e, i, n) {
                for (var o = t.axis, s = t.get("data"), l = t.getModel("axisLabel"), u = l.getModel("textStyle"), h = t.getFormattedLabels(), c = l.get("margin"), d = o.getLabelsCoords(), f = 0; f < i.length; f++) {
                    var p = n[1], g = e.coordToPoint([p + c, d[f]]), m = e.cx, v = e.cy, y = Math.abs(g[0] - m) / p < .3 ? "center" : g[0] > m ? "left" : "right", x = Math.abs(g[1] - v) / p < .3 ? "middle" : g[1] > v ? "top" : "bottom", _ = u;
                    s && s[f] && s[f].textStyle && (_ = new a(s[f].textStyle, u)), this.group.add(new r.Text({
                        style: {
                            x: g[0],
                            y: g[1],
                            fill: _.getTextColor() || t.get("axisLine.lineStyle.color"),
                            text: h[f],
                            textAlign: y,
                            textVerticalAlign: x,
                            textFont: _.getFont()
                        }, silent: !0
                    }))
                }
            }, _splitLine: function (t, e, i, a) {
                var s = t.getModel("splitLine"), l = s.getModel("lineStyle"), u = l.get("color"), h = 0;
                u = u instanceof Array ? u : [u];
                for (var c = [], d = 0; d < i.length; d++) {
                    var f = h++ % u.length;
                    c[f] = c[f] || [], c[f].push(new r.Line({shape: n(e, a[0], a[1], i[d])}))
                }
                for (var d = 0; d < c.length; d++)this.group.add(r.mergePath(c[d], {
                    style: o.defaults({stroke: u[d % u.length]}, l.getLineStyle()),
                    silent: !0,
                    z: t.get("z")
                }))
            }, _splitArea: function (t, e, i, n) {
                var a = t.getModel("splitArea"), s = a.getModel("areaStyle"), l = s.get("color"), u = 0;
                l = l instanceof Array ? l : [l];
                for (var h = [], c = Math.PI / 180, d = -i[0] * c, f = Math.min(n[0], n[1]), p = Math.max(n[0], n[1]), g = t.get("clockwise"), m = 1; m < i.length; m++) {
                    var v = u++ % l.length;
                    h[v] = h[v] || [], h[v].push(new r.Sector({
                        shape: {
                            cx: e.cx,
                            cy: e.cy,
                            r0: f,
                            r: p,
                            startAngle: d,
                            endAngle: -i[m] * c,
                            clockwise: g
                        }, silent: !0
                    })), d = -i[m] * c
                }
                for (var m = 0; m < h.length; m++)this.group.add(r.mergePath(h[m], {
                    style: o.defaults({fill: l[m % l.length]}, s.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            return i && "axisAreaSelect" === i.type && e.findComponents({mainType: "parallelAxis", query: i})[0] === t
        }

        var o = i(1), r = i(51), a = i(113), s = i(3), l = ["axisLine", "axisLabel", "axisTick", "axisName"], u = i(2).extendComponentView({
            type: "parallelAxis",
            init: function (t, e) {
                u.superApply(this, "init", arguments), (this._brushController = new a(e.getZr())).on("brush", o.bind(this._onBrush, this))
            },
            render: function (t, e, i, a) {
                if (!n(t, e, a)) {
                    this.axisModel = t, this.api = i, this.group.removeAll();
                    var u = this._axisGroup;
                    if (this._axisGroup = new s.Group, this.group.add(this._axisGroup), t.get("show")) {
                        var h, c = e.getComponent("parallel", t.get("parallelIndex")).coordinateSystem, d = t.getAreaSelectStyle(), f = d.width, p = t.axis.dim, g = c.getAxisLayout(p), m = o.indexOf(c.dimensions, p), v = g.axisExpandWindow;
                        v && (m <= v[0] || m >= v[1]) && (h = !1);
                        var y = o.extend({axisLabelShow: h, strokeContainThreshold: f}, g), x = new r(t, y);
                        o.each(l, x.add, x), this._axisGroup.add(x.getGroup()), this._refreshBrushController(y, d, t, f), s.groupTransition(u, this._axisGroup, t)
                    }
                }
            },
            _refreshBrushController: function (t, e, i, n) {
                var r = i.axis, a = o.map(i.activeIntervals, function (t) {
                    return {
                        brushType: "lineX",
                        panelId: "pl",
                        range: [r.dataToCoord(t[0], !0), r.dataToCoord(t[1], !0)]
                    }
                }), l = r.getExtent(), u = l[1] - l[0], h = Math.min(30, .1 * Math.abs(u)), c = s.BoundingRect.create({
                    x: l[0],
                    y: -n / 2,
                    width: u,
                    height: n
                });
                c.x -= h, c.width += 2 * h, this._brushController.mount({
                    enableGlobalPan: !0,
                    rotation: t.rotation,
                    position: t.position
                }).setPanels([{panelId: "pl", rect: c}]).enableBrush({
                    brushType: "lineX",
                    brushStyle: e,
                    removeOnClick: !0
                }).updateCovers(a)
            },
            _onBrush: function (t, e) {
                var i = this.axisModel, n = i.axis, r = o.map(t, function (t) {
                    return [n.coordToData(t.range[0], !0), n.coordToData(t.range[1], !0)]
                });
                (!i.option.realtime === e.isEnd || e.removeOnClick) && this.api.dispatchAction({
                    type: "axisAreaSelect",
                    parallelAxisId: i.id,
                    intervals: r
                })
            },
            dispose: function () {
                this._brushController.dispose()
            }
        });
        t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            return {
                position: [t.cx, t.cy],
                rotation: i / 180 * Math.PI,
                labelDirection: -1,
                tickDirection: -1,
                nameDirection: 1,
                labelRotation: e.getModel("axisLabel").get("rotate"),
                z2: 1
            }
        }

        var o = i(1), r = i(3), a = i(51), s = ["axisLine", "axisLabel", "axisTick", "axisName"], l = ["splitLine", "splitArea"];
        i(2).extendComponentView({
            type: "radiusAxis", render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("polar", t.get("polarIndex")), r = i.coordinateSystem.getAngleAxis(), u = t.axis, h = i.coordinateSystem, c = u.getTicksCoords(), d = r.getExtent()[0], f = u.getExtent(), p = n(h, t, d), g = new a(t, p);
                    o.each(s, g.add, g), this.group.add(g.getGroup()), o.each(l, function (e) {
                        t.get(e + ".show") && this["_" + e](t, h, d, f, c)
                    }, this)
                }
            }, _splitLine: function (t, e, i, n, a) {
                var s = t.getModel("splitLine"), l = s.getModel("lineStyle"), u = l.get("color"), h = 0;
                u = u instanceof Array ? u : [u];
                for (var c = [], d = 0; d < a.length; d++) {
                    var f = h++ % u.length;
                    c[f] = c[f] || [], c[f].push(new r.Circle({shape: {cx: e.cx, cy: e.cy, r: a[d]}, silent: !0}))
                }
                for (var d = 0; d < c.length; d++)this.group.add(r.mergePath(c[d], {
                    style: o.defaults({
                        stroke: u[d % u.length],
                        fill: null
                    }, l.getLineStyle()), silent: !0
                }))
            }, _splitArea: function (t, e, i, n, a) {
                var s = t.getModel("splitArea"), l = s.getModel("areaStyle"), u = l.get("color"), h = 0;
                u = u instanceof Array ? u : [u];
                for (var c = [], d = a[0], f = 1; f < a.length; f++) {
                    var p = h++ % u.length;
                    c[p] = c[p] || [], c[p].push(new r.Sector({
                        shape: {
                            cx: e.cx,
                            cy: e.cy,
                            r0: d,
                            r: a[f],
                            startAngle: 0,
                            endAngle: 2 * Math.PI
                        }, silent: !0
                    })), d = a[f]
                }
                for (var f = 0; f < c.length; f++)this.group.add(r.mergePath(c[f], {
                    style: o.defaults({fill: u[f % u.length]}, l.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t) {
            var e = t.coordinateSystem, i = t.axis, n = {}, o = i.position, r = i.orient, a = e.getRect(), s = [a.x, a.x + a.width, a.y, a.y + a.height], l = {
                horizontal: {
                    top: s[2],
                    bottom: s[3]
                }, vertical: {left: s[0], right: s[1]}
            };
            n.position = ["vertical" === r ? l.vertical[o] : s[0], "horizontal" === r ? l.horizontal[o] : s[3]];
            var u = {horizontal: 0, vertical: 1};
            n.rotation = Math.PI / 2 * u[r];
            var h = {top: -1, bottom: 1, right: 1, left: -1};
            n.labelDirection = n.tickDirection = n.nameDirection = h[o], t.getModel("axisTick").get("inside") && (n.tickDirection = -n.tickDirection), t.getModel("axisLabel").get("inside") && (n.labelDirection = -n.labelDirection);
            var c = t.getModel("axisLabel").get("rotate");
            return n.labelRotation = "top" === o ? -c : c, n.labelInterval = i.getLabelInterval(), n.z2 = 1, n
        }

        var o = i(51), r = i(1), a = i(3), s = o.getInterval, l = o.ifIgnoreOnTick, u = ["axisLine", "axisLabel", "axisTick", "axisName"], h = "splitLine", c = i(2).extendComponentView({
            type: "singleAxis",
            render: function (t, e) {
                var i = this.group;
                i.removeAll();
                var a = n(t), s = new o(t, a);
                r.each(u, s.add, s), i.add(s.getGroup()), t.get(h + ".show") && this["_" + h](t, a.labelInterval)
            },
            _splitLine: function (t, e) {
                var i = t.axis, n = t.getModel("splitLine"), o = n.getModel("lineStyle"), r = o.get("width"), u = o.get("color"), h = s(n, e);
                u = u instanceof Array ? u : [u];
                for (var c = t.coordinateSystem.getRect(), d = i.isHorizontal(), f = [], p = 0, g = i.getTicksCoords(), m = [], v = [], y = 0; y < g.length; ++y)if (!l(i, y, h)) {
                    var x = i.toGlobalCoord(g[y]);
                    d ? (m[0] = x, m[1] = c.y, v[0] = x, v[1] = c.y + c.height) : (m[0] = c.x, m[1] = x, v[0] = c.x + c.width, v[1] = x);
                    var _ = p++ % u.length;
                    f[_] = f[_] || [], f[_].push(new a.Line(a.subPixelOptimizeLine({
                        shape: {
                            x1: m[0],
                            y1: m[1],
                            x2: v[0],
                            y2: v[1]
                        }, style: {lineWidth: r}, silent: !0
                    })))
                }
                for (var y = 0; y < f.length; ++y)this.group.add(a.mergePath(f[y], {
                    style: {
                        stroke: u[y % u.length],
                        lineDash: o.getLineDash(r),
                        lineWidth: r
                    }, silent: !0
                }))
            }
        });
        t.exports = c
    }, function (t, e, i) {
        var n = i(2), o = {type: "axisAreaSelect", event: "axisAreaSelected", update: "updateVisual"};
        n.registerAction(o, function (t, e) {
            e.eachComponent({mainType: "parallelAxis", query: t}, function (e) {
                e.axis.model.setActiveIntervals(t.intervals)
            })
        }), n.registerAction("parallelAxisExpand", function (t, e) {
            e.eachComponent({mainType: "parallel", query: t}, function (e) {
                e.setAxisExpand(t)
            })
        })
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(330)), i(332), i(327), i(328), i(329), i(350)
    }, function (t, e, i) {
        var n = i(2), o = i(1), r = i(173), a = i(10), s = ["#ddd"], l = n.extendComponentModel({
            type: "brush",
            dependencies: ["geo", "grid", "xAxis", "yAxis", "parallel", "series"],
            defaultOption: {
                toolbox: null,
                brushLink: null,
                seriesIndex: "all",
                geoIndex: null,
                xAxisIndex: null,
                yAxisIndex: null,
                brushType: "rect",
                brushMode: "single",
                transformable: !0,
                brushStyle: {
                    borderWidth: 1,
                    color: "rgba(120,140,180,0.3)",
                    borderColor: "rgba(120,140,180,0.8)",
                    width: null
                },
                throttleType: "fixRate",
                throttleDelay: 0,
                removeOnClick: !0
            },
            areas: [],
            brushType: null,
            brushOption: {},
            coordInfoList: [],
            optionUpdated: function (t, e) {
                var i = this.option;
                !e && r.replaceVisualOption(i, t, ["inBrush", "outOfBrush"]), i.inBrush = i.inBrush || {}, i.outOfBrush = i.outOfBrush || {color: s}
            },
            setAreas: function (t) {
                t && (this.areas = o.map(t, function (t) {
                    return this._mergeBrushOption(t)
                }, this))
            },
            setBrushOption: function (t) {
                this.brushOption = this._mergeBrushOption(t), this.brushType = this.brushOption.brushType
            },
            _mergeBrushOption: function (t) {
                var e = this.option;
                return o.merge({
                    brushType: e.brushType,
                    brushMode: e.brushMode,
                    transformable: e.transformable,
                    brushStyle: new a(e.brushStyle).getItemStyle(),
                    removeOnClick: e.removeOnClick
                }, t, !0)
            }
        });
        t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            (!n || n.$from !== t.id) && this._brushController.setPanels(s.makePanelOpts(t.coordInfoList)).enableBrush(t.brushOption).updateCovers(t.areas.slice())
        }

        var o = i(1), r = i(113), a = i(2), s = i(114);
        t.exports = a.extendComponentView({
            type: "brush", init: function (t, e) {
                this.ecModel = t, this.api = e, this.model, (this._brushController = new r(e.getZr())).on("brush", o.bind(this._onBrush, this)).mount()
            }, render: function (t) {
                return this.model = t, n.apply(this, arguments)
            }, updateView: n, updateLayout: n, updateVisual: n, dispose: function () {
                this._brushController.dispose()
            }, _onBrush: function (t, e) {
                var i = this.model.id;
                s.parseOutputRanges(t, this.model.coordInfoList, this.ecModel), (!e.isEnd || e.removeOnClick) && this.api.dispatchAction({
                    type: "brush",
                    brushId: i,
                    areas: o.clone(t),
                    $from: i
                })
            }
        })
    }, function (t, e, i) {
        var n = i(2);
        n.registerAction({type: "brush", event: "brush", update: "updateView"}, function (t, e) {
            e.eachComponent({mainType: "brush", query: t}, function (e) {
                e.setAreas(t.areas)
            })
        }), n.registerAction({type: "brushSelect", event: "brushSelected", update: "none"}, function () {
        })
    }, function (t, e, i) {
        function n(t) {
            var e = {};
            o.each(t, function (t) {
                e[t] = 1
            }), t.length = 0, o.each(e, function (e, i) {
                t.push(i)
            })
        }

        var o = i(1), r = ["rect", "polygon", "keep", "clear"];
        t.exports = function (t, e) {
            var i = t && t.brush;
            if (o.isArray(i) || (i = i ? [i] : []), i.length) {
                var a = [];
                o.each(i, function (t) {
                    var e = t.hasOwnProperty("toolbox") ? t.toolbox : [];
                    e instanceof Array && (a = a.concat(e))
                });
                var s = t && t.toolbox;
                o.isArray(s) && (s = s[0]), s || (s = {feature: {}}, t.toolbox = [s]);
                var l = s.feature || (s.feature = {}), u = l.brush || (l.brush = {}), h = u.type || (u.type = []);
                h.push.apply(h, a), n(h), e && !h.length && h.push.apply(h, r)
            }
        }
    }, function (t, e, i) {
        function n(t) {
            var e = ["x", "y"], i = ["width", "height"];
            return {
                point: function (e, i, n) {
                    var r = n.range, a = e[t];
                    return o(a, r)
                }, rect: function (n, r, a) {
                    var s = a.range;
                    return o(n[e[t]], s) || o(n[e[t]] + n[i[t]], s)
                }
            }
        }

        function o(t, e) {
            return e[0] <= t && t <= e[1]
        }

        function r(t, e, i, n, o) {
            for (var r = 0, s = o[o.length - 1]; r < o.length; r++) {
                var l = o[r];
                if (a(t, e, i, n, l[0], l[1], s[0], s[1]))return !0;
                s = l
            }
        }

        function a(t, e, i, n, o, r, a, u) {
            var h = l(i - t, o - a, n - e, r - u);
            if (s(h))return !1;
            var c = l(o - t, o - a, r - e, r - u) / h;
            if (c < 0 || c > 1)return !1;
            var d = l(i - t, o - t, n - e, r - e) / h;
            return !(d < 0 || d > 1)
        }

        function s(t) {
            return t <= 1e-6 && t >= -1e-6
        }

        function l(t, e, i, n) {
            return t * n - e * i
        }

        var u = i(244).contain, h = i(8), c = {
            lineX: n(0), lineY: n(1), rect: {
                point: function (t, e, i) {
                    return i.boundingRect.contain(t[0], t[1])
                }, rect: function (t, e, i) {
                    return i.boundingRect.intersect(t)
                }
            }, polygon: {
                point: function (t, e, i) {
                    return i.boundingRect.contain(t[0], t[1]) && u(i.range, t[0], t[1])
                }, rect: function (t, e, i) {
                    var n = i.range;
                    if (n.length <= 1)return !1;
                    var o = t.x, a = t.y, s = t.width, l = t.height, c = n[0];
                    return !!(u(n, o, a) || u(n, o + s, a) || u(n, o, a + l) || u(n, o + s, a + l) || h.create(t).contain(c[0], c[1]) || r(o, a, o + s, a, n) || r(o, a, o, a + l, n) || r(o + s, a, o + s, a + l, n) || r(o, a + l, o + s, a + l, n)) || void 0
                }
            }
        };
        t.exports = c
    }, function (t, e, i) {
        function n(t, e, i, n, r) {
            if (r) {
                var a = t.getZr();
                if (!a[x]) {
                    a[y] || (a[y] = o);
                    var s = g.createOrUpdate(a, y, i, e);
                    s(t, n)
                }
            }
        }

        function o(t, e) {
            if (!t.isDisposed()) {
                var i = t.getZr();
                i[x] = !0, t.dispatchAction({type: "brushSelect", batch: e}), i[x] = !1
            }
        }

        function r(t, e, i, n) {
            for (var o = i.getItemLayout(n), r = 0, a = e.length; r < a; r++) {
                var s = e[r];
                if (t[s.brushType](o, s.selectors, s))return !0
            }
        }

        function a(t) {
            var e = t.brushSelector;
            if (d.isString(e)) {
                var i = [];
                return d.each(p, function (t, n) {
                    i[n] = t[e]
                }), i
            }
            if (d.isFunction(e)) {
                var n = {};
                return d.each(p, function (t, i) {
                    n[i] = e
                }), n
            }
            return e
        }

        function s(t, e) {
            var i = t.option.seriesIndex;
            return null != i && "all" !== i && (d.isArray(i) ? d.indexOf(i, e) < 0 : e !== i)
        }

        function l(t) {
            var e = t.selectors = {};
            return d.each(p[t.brushType], function (i, n) {
                e[n] = function (n) {
                    return i(n, e, t)
                }
            }), t
        }

        function u(t) {
            return new f(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0])
        }

        var h = i(2), c = i(173), d = i(1), f = i(8), p = i(331), g = i(46), m = i(114), v = ["inBrush", "outOfBrush"], y = "__ecBrushSelect", x = "__ecInBrushSelectEvent", _ = h.PRIORITY.VISUAL.BRUSH;
        h.registerLayout(_, function (t, e, i) {
            t.eachComponent({mainType: "brush"}, function (e) {
                i && "takeGlobalCursor" === i.type && e.setBrushOption("brush" === i.key ? i.brushOption : {brushType: !1}), e.coordInfoList = m.makeCoordInfoList(e.option, t), m.parseInputRanges(e, t)
            })
        }), h.registerVisual(_, function (t, e, i) {
            var o, u, h = [];
            t.eachComponent({mainType: "brush"}, function (e, i) {
                function n(t) {
                    return "all" === _ || w[t]
                }

                function f(t) {
                    return !!t.length
                }

                function p(t, e) {
                    var i = t.coordinateSystem;
                    T |= i.hasAxisbrushed(), n(e) && i.eachActiveState(t.getData(), function (t, e) {
                        "active" === t && (S[e] = 1)
                    })
                }

                function g(t, i, o) {
                    var l = a(t);
                    if (l && !s(e, i) && (d.each(I, function (i) {
                            l[i.brushType] && m.controlSeries(i, e, t) && o.push(i), T |= f(o)
                        }), n(i) && f(o))) {
                        var u = t.getData();
                        u.each(function (t) {
                            r(l, o, u, t) && (S[t] = 1)
                        })
                    }
                }

                var y = {brushId: e.id, brushIndex: i, brushName: e.name, areas: d.clone(e.areas), selected: []};
                h.push(y);
                var x = e.option, _ = x.brushLink, w = [], S = [], M = [], T = 0;
                i || (o = x.throttleType, u = x.throttleDelay);
                var I = d.map(e.areas, function (t) {
                    return l(d.defaults({boundingRect: b[t.brushType](t)}, t))
                }), A = c.createVisualMappings(e.option, v, function (t) {
                    t.mappingMethod = "fixed"
                });
                d.isArray(_) && d.each(_, function (t) {
                    w[t] = 1
                }), t.eachSeries(function (t, e) {
                    var i = M[e] = [];
                    "parallel" === t.subType ? p(t, e, i) : g(t, e, i)
                }), t.eachSeries(function (t, e) {
                    var i = {seriesId: t.id, seriesIndex: e, seriesName: t.name, dataIndex: []};
                    y.selected.push(i);
                    var o = a(t), s = M[e], l = t.getData(), u = n(e) ? function (t) {
                        return S[t] ? (i.dataIndex.push(l.getRawIndex(t)), "inBrush") : "outOfBrush"
                    } : function (t) {
                        return r(o, s, l, t) ? (i.dataIndex.push(l.getRawIndex(t)), "inBrush") : "outOfBrush"
                    };
                    (n(e) ? T : f(s)) && c.applyVisual(v, A, l, u)
                })
            }), n(e, o, u, h, i)
        });
        var b = {
            lineX: d.noop, lineY: d.noop, rect: function (t) {
                return u(t.range)
            }, polygon: function (t) {
                for (var e, i = t.range, n = 0, o = i.length; n < o; n++) {
                    e = e || [[1 / 0, -(1 / 0)], [1 / 0, -(1 / 0)]];
                    var r = i[n];
                    r[0] < e[0][0] && (e[0][0] = r[0]), r[0] > e[0][1] && (e[0][1] = r[0]), r[1] < e[1][0] && (e[1][0] = r[1]), r[1] > e[1][1] && (e[1][1] = r[1])
                }
                return e && u(e)
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            e.update = "updateView", o.registerAction(e, function (e, i) {
                var n = {};
                return i.eachComponent({mainType: "geo", query: e}, function (i) {
                    i[t](e.name);
                    var o = i.coordinateSystem;
                    r.each(o.regions, function (t) {
                        n[t.name] = i.isSelected(t.name) || !1
                    })
                }), {selected: n, name: e.name}
            })
        }

        i(359), i(172), i(334), i(222);
        var o = i(2), r = i(1);
        n("toggleSelected", {type: "geoToggleSelect", event: "geoselectchanged"}), n("select", {
            type: "geoSelect",
            event: "geoselected"
        }), n("unSelect", {type: "geoUnSelect", event: "geounselected"})
    }, function (t, e, i) {
        "use strict";
        var n = i(230);
        t.exports = i(2).extendComponentView({
            type: "geo", init: function (t, e) {
                var i = new n(e, (!0));
                this._mapDraw = i, this.group.add(i.group)
            }, render: function (t, e, i, n) {
                if (!n || "geoToggleSelect" !== n.type || n.from !== this.uid) {
                    var o = this._mapDraw;
                    t.get("show") ? o.draw(t, e, i, this, n) : this._mapDraw.group.removeAll(), this.group.silent = t.get("silent")
                }
            }, dispose: function () {
                this._mapDraw && this._mapDraw.remove()
            }
        })
    }, function (t, e, i) {
        i(241), i(325), i(322)
    }, function (t, e, i) {
        "use strict";
        i(217), i(320), i(339), i(2).extendComponentView({type: "polar"})
    }, function (t, e, i) {
        i(375), i(376), i(338)
    }, function (t, e, i) {
        var n = i(51), o = i(1), r = i(3), a = ["axisLine", "axisLabel", "axisTick", "axisName"];
        t.exports = i(2).extendComponentView({
            type: "radar", render: function (t, e, i) {
                var n = this.group;
                n.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
            }, _buildAxes: function (t) {
                var e = t.coordinateSystem, i = e.getIndicatorAxes(), r = o.map(i, function (t) {
                    var i = new n(t.model, {
                        position: [e.cx, e.cy],
                        rotation: t.angle,
                        labelDirection: -1,
                        tickDirection: -1,
                        nameDirection: 1
                    });
                    return i
                });
                o.each(r, function (t) {
                    o.each(a, t.add, t), this.group.add(t.getGroup())
                }, this)
            }, _buildSplitLineAndArea: function (t) {
                function e(t, e, i) {
                    var n = i % e.length;
                    return t[n] = t[n] || [], n
                }

                var i = t.coordinateSystem, n = t.get("splitNumber"), a = i.getIndicatorAxes();
                if (a.length) {
                    var s = t.get("shape"), l = t.getModel("splitLine"), u = t.getModel("splitArea"), h = l.getModel("lineStyle"), c = u.getModel("areaStyle"), d = l.get("show"), f = u.get("show"), p = h.get("color"), g = c.get("color");
                    p = o.isArray(p) ? p : [p], g = o.isArray(g) ? g : [g];
                    var m = [], v = [];
                    if ("circle" === s)for (var y = a[0].getTicksCoords(), x = i.cx, _ = i.cy, b = 0; b < y.length; b++) {
                        if (d) {
                            var w = e(m, p, b);
                            m[w].push(new r.Circle({shape: {cx: x, cy: _, r: y[b]}}))
                        }
                        if (f && b < y.length - 1) {
                            var w = e(v, g, b);
                            v[w].push(new r.Ring({shape: {cx: x, cy: _, r0: y[b], r: y[b + 1]}}))
                        }
                    } else for (var S = o.map(a, function (t, e) {
                        var n = t.getTicksCoords();
                        return o.map(n, function (t) {
                            return i.coordToPoint(t, e)
                        })
                    }), M = [], b = 0; b <= n; b++) {
                        for (var T = [], I = 0; I < a.length; I++)T.push(S[I][b]);
                        if (T[0] && T.push(T[0].slice()), d) {
                            var w = e(m, p, b);
                            m[w].push(new r.Polyline({shape: {points: T}}))
                        }
                        if (f && M) {
                            var w = e(v, g, b - 1);
                            v[w].push(new r.Polygon({shape: {points: T.concat(M)}}))
                        }
                        M = T.slice().reverse()
                    }
                    var A = h.getLineStyle(), L = c.getAreaStyle();
                    o.each(v, function (t, e) {
                        this.group.add(r.mergePath(t, {
                            style: o.defaults({stroke: "none", fill: g[e % g.length]}, L),
                            silent: !0
                        }))
                    }, this), o.each(m, function (t, e) {
                        this.group.add(r.mergePath(t, {
                            style: o.defaults({fill: "none", stroke: p[e % p.length]}, A),
                            silent: !0
                        }))
                    }, this)
                }
            }
        })
    }, function (t, e, i) {
        i(217), i(323)
    }, function (t, e, i) {
        i(380), i(324), i(377);
        var n = i(2);
        n.extendComponentView({type: "single"})
    }, function (t, e, i) {
        var n = i(2);
        n.registerPreprocessor(i(347)), i(349), i(348), i(342), i(343)
    }, function (t, e, i) {
        var n = i(345), o = i(1), r = i(6), a = n.extend({
            type: "timeline.slider",
            defaultOption: {
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                orient: "horizontal",
                inverse: !1,
                tooltip: {trigger: "item"},
                symbol: "emptyCircle",
                symbolSize: 10,
                lineStyle: {show: !0, width: 2, color: "#304654"},
                label: {
                    position: "auto",
                    normal: {show: !0, interval: "auto", rotate: 0, textStyle: {color: "#304654"}},
                    emphasis: {show: !0, textStyle: {color: "#c23531"}}
                },
                itemStyle: {normal: {color: "#304654", borderWidth: 1}, emphasis: {color: "#c23531"}},
                checkpointStyle: {
                    symbol: "circle",
                    symbolSize: 13,
                    color: "#c23531",
                    borderWidth: 5,
                    borderColor: "rgba(194,53,49, 0.5)",
                    animation: !0,
                    animationDuration: 300,
                    animationEasing: "quinticInOut"
                },
                controlStyle: {
                    show: !0,
                    showPlayBtn: !0,
                    showPrevBtn: !0,
                    showNextBtn: !0,
                    itemSize: 22,
                    itemGap: 12,
                    position: "left",
                    playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
                    stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
                    nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
                    prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
                    normal: {color: "#304654", borderColor: "#304654", borderWidth: 1},
                    emphasis: {color: "#c23531", borderColor: "#c23531", borderWidth: 2}
                },
                data: []
            }
        });
        o.mixin(a, r.dataFormatMixin), t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            return u.getLayoutRect(t.getBoxLayoutParams(), {
                width: e.getWidth(),
                height: e.getHeight()
            }, t.get("padding"))
        }

        function o(t, e, i, n) {
            var o = l.makePath(t.get(e).replace(/^path:\/\//, ""), s.clone(n || {}), new p(i[0], i[1], i[2], i[3]), "center");
            return o
        }

        function r(t, e, i, n, o, r) {
            var a = e.get("color");
            if (o)o.setColor(a), i.add(o), r && r.onUpdate(o); else {
                var l = t.get("symbol");
                o = d.createSymbol(l, -1, -1, 2, 2, a), o.setStyle("strokeNoScale", !0), i.add(o), r && r.onCreate(o)
            }
            var u = e.getItemStyle(["color", "symbol", "symbolSize"]);
            o.setStyle(u), n = s.merge({rectHover: !0, z2: 100}, n, !0);
            var h = t.get("symbolSize");
            h = h instanceof Array ? h.slice() : [+h, +h], h[0] /= 2, h[1] /= 2, n.scale = h;
            var c = t.get("symbolOffset");
            if (c) {
                var f = n.position = n.position || [0, 0];
                f[0] += m.parsePercent(c[0], h[0]), f[1] += m.parsePercent(c[1], h[1])
            }
            var p = t.get("symbolRotate");
            return n.rotation = (p || 0) * Math.PI / 180 || 0, o.attr(n), o.updateTransform(), o
        }

        function a(t, e, i, n, o) {
            if (!t.dragging) {
                var r = n.getModel("checkpointStyle"), a = i.dataToCoord(n.getData().get(["value"], e));
                o || !r.get("animation", !0) ? t.attr({position: [a, 0]}) : (t.stopAnimation(!0), t.animateTo({position: [a, 0]}, r.get("animationDuration", !0), r.get("animationEasing", !0)))
            }
        }

        var s = i(1), l = i(3), u = i(12), h = i(346), c = i(344), d = i(26), f = i(22), p = i(8), g = i(19), m = i(4), v = i(9), y = v.encodeHTML, x = s.bind, _ = s.each, b = Math.PI;
        t.exports = h.extend({
            type: "timeline.slider", init: function (t, e) {
                this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
            }, render: function (t, e, i, n) {
                if (this.model = t, this.api = i, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
                    var o = this._layout(t, i), r = this._createGroup("mainGroup"), a = this._createGroup("labelGroup"), s = this._axis = this._createAxis(o, t);
                    t.formatTooltip = function (t) {
                        return y(s.scale.getLabel(t))
                    }, _(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function (e) {
                        this["_render" + e](o, r, s, t)
                    }, this), this._renderAxisLabel(o, a, s, t), this._position(o, t)
                }
                this._doPlayStop()
            }, remove: function () {
                this._clearTimer(), this.group.removeAll()
            }, dispose: function () {
                this._clearTimer()
            }, _layout: function (t, e) {
                var i = t.get("label.normal.position"), o = t.get("orient"), r = n(t, e);
                null == i || "auto" === i ? i = "horizontal" === o ? r.y + r.height / 2 < e.getHeight() / 2 ? "-" : "+" : r.x + r.width / 2 < e.getWidth() / 2 ? "+" : "-" : isNaN(i) && (i = {
                    horizontal: {
                        top: "-",
                        bottom: "+"
                    }, vertical: {left: "-", right: "+"}
                }[o][i]);
                var a = {
                    horizontal: "center",
                    vertical: i >= 0 || "+" === i ? "left" : "right"
                }, s = {horizontal: i >= 0 || "+" === i ? "top" : "bottom", vertical: "middle"}, l = {
                    horizontal: 0,
                    vertical: b / 2
                }, u = "vertical" === o ? r.height : r.width, h = t.getModel("controlStyle"), c = h.get("show"), d = c ? h.get("itemSize") : 0, f = c ? h.get("itemGap") : 0, p = d + f, g = t.get("label.normal.rotate") || 0;
                g = g * b / 180;
                var m, v, y, x, _ = h.get("position", !0), c = h.get("show", !0), w = c && h.get("showPlayBtn", !0), S = c && h.get("showPrevBtn", !0), M = c && h.get("showNextBtn", !0), T = 0, I = u;
                return "left" === _ || "bottom" === _ ? (w && (m = [0, 0], T += p), S && (v = [T, 0], T += p), M && (y = [I - d, 0], I -= p)) : (w && (m = [I - d, 0], I -= p), S && (v = [0, 0], T += p), M && (y = [I - d, 0], I -= p)), x = [T, I], t.get("inverse") && x.reverse(), {
                    viewRect: r,
                    mainLength: u,
                    orient: o,
                    rotation: l[o],
                    labelRotation: g,
                    labelPosOpt: i,
                    labelAlign: a[o],
                    labelBaseline: s[o],
                    playPosition: m,
                    prevBtnPosition: v,
                    nextBtnPosition: y,
                    axisExtent: x,
                    controlSize: d,
                    controlGap: f
                }
            }, _position: function (t, e) {
                function i(t) {
                    var e = t.position;
                    t.origin = [c[0][0] - e[0], c[1][0] - e[1]]
                }

                function n(t) {
                    return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
                }

                function o(t, e, i, n, o) {
                    t[n] += i[n][o] - e[n][o]
                }

                var r = this._mainGroup, a = this._labelGroup, s = t.viewRect;
                if ("vertical" === t.orient) {
                    var l = g.create(), u = s.x, h = s.y + s.height;
                    g.translate(l, l, [-u, -h]), g.rotate(l, l, -b / 2), g.translate(l, l, [u, h]), s = s.clone(), s.applyTransform(l)
                }
                var c = n(s), d = n(r.getBoundingRect()), f = n(a.getBoundingRect()), p = r.position, m = a.position;
                m[0] = p[0] = c[0][0];
                var v = t.labelPosOpt;
                if (isNaN(v)) {
                    var y = "+" === v ? 0 : 1;
                    o(p, d, c, 1, y), o(m, f, c, 1, 1 - y)
                } else {
                    var y = v >= 0 ? 0 : 1;
                    o(p, d, c, 1, y), m[1] = p[1] + v
                }
                r.attr("position", p), a.attr("position", m), r.rotation = a.rotation = t.rotation, i(r), i(a)
            }, _createAxis: function (t, e) {
                var i = e.getData(), n = e.get("axisType"), o = f.createScaleByModel(e, n), r = i.getDataExtent("value");
                o.setExtent(r[0], r[1]), this._customizeScale(o, i), o.niceTicks();
                var a = new c("value", o, t.axisExtent, n);
                return a.model = e, a
            }, _customizeScale: function (t, e) {
                t.getTicks = function () {
                    return e.mapArray(["value"], function (t) {
                        return t
                    })
                }, t.getTicksLabels = function () {
                    return s.map(this.getTicks(), t.getLabel, t)
                }
            }, _createGroup: function (t) {
                var e = this["_" + t] = new l.Group;
                return this.group.add(e), e
            }, _renderAxisLine: function (t, e, i, n) {
                var o = i.getExtent();
                n.get("lineStyle.show") && e.add(new l.Line({
                    shape: {x1: o[0], y1: 0, x2: o[1], y2: 0},
                    style: s.extend({lineCap: "round"}, n.getModel("lineStyle").getLineStyle()),
                    silent: !0,
                    z2: 1
                }))
            }, _renderAxisTick: function (t, e, i, n) {
                var o = n.getData(), a = i.scale.getTicks();
                _(a, function (t, a) {
                    var s = i.dataToCoord(t), u = o.getItemModel(a), h = u.getModel("itemStyle.normal"), c = u.getModel("itemStyle.emphasis"), d = {
                        position: [s, 0],
                        onclick: x(this._changeTimeline, this, a)
                    }, f = r(u, h, e, d);
                    l.setHoverStyle(f, c.getItemStyle()), u.get("tooltip") ? (f.dataIndex = a, f.dataModel = n) : f.dataIndex = f.dataModel = null
                }, this)
            }, _renderAxisLabel: function (t, e, i, n) {
                var o = n.getModel("label.normal");
                if (o.get("show")) {
                    var r = n.getData(), a = i.scale.getTicks(), s = f.getFormattedLabels(i, o.get("formatter")), u = i.getLabelInterval();
                    _(a, function (n, o) {
                        if (!i.isLabelIgnored(o, u)) {
                            var a = r.getItemModel(o), h = a.getModel("label.normal.textStyle"), c = a.getModel("label.emphasis.textStyle"), d = i.dataToCoord(n), f = new l.Text({
                                style: {
                                    text: s[o],
                                    textAlign: t.labelAlign,
                                    textVerticalAlign: t.labelBaseline,
                                    textFont: h.getFont(),
                                    fill: h.getTextColor()
                                },
                                position: [d, 0],
                                rotation: t.labelRotation - t.rotation,
                                onclick: x(this._changeTimeline, this, o),
                                silent: !1
                            });
                            e.add(f), l.setHoverStyle(f, c.getItemStyle())
                        }
                    }, this)
                }
            }, _renderControl: function (t, e, i, n) {
                function r(t, i, r, d) {
                    if (t) {
                        var f = {
                            position: t,
                            origin: [a / 2, 0],
                            rotation: d ? -s : 0,
                            rectHover: !0,
                            style: u,
                            onclick: r
                        }, p = o(n, i, c, f);
                        e.add(p), l.setHoverStyle(p, h)
                    }
                }

                var a = t.controlSize, s = t.rotation, u = n.getModel("controlStyle.normal").getItemStyle(), h = n.getModel("controlStyle.emphasis").getItemStyle(), c = [0, -a / 2, a, a], d = n.getPlayState(), f = n.get("inverse", !0);
                r(t.nextBtnPosition, "controlStyle.nextIcon", x(this._changeTimeline, this, f ? "-" : "+")), r(t.prevBtnPosition, "controlStyle.prevIcon", x(this._changeTimeline, this, f ? "+" : "-")), r(t.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), x(this._handlePlayClick, this, !d), !0)
            }, _renderCurrentPointer: function (t, e, i, n) {
                var o = n.getData(), s = n.getCurrentIndex(), l = o.getItemModel(s).getModel("checkpointStyle"), u = this, h = {
                    onCreate: function (t) {
                        t.draggable = !0, t.drift = x(u._handlePointerDrag, u), t.ondragend = x(u._handlePointerDragend, u), a(t, s, i, n, !0)
                    }, onUpdate: function (t) {
                        a(t, s, i, n)
                    }
                };
                this._currentPointer = r(l, l, this._mainGroup, {}, this._currentPointer, h)
            }, _handlePlayClick: function (t) {
                this._clearTimer(), this.api.dispatchAction({type: "timelinePlayChange", playState: t, from: this.uid})
            }, _handlePointerDrag: function (t, e, i) {
                this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
            }, _handlePointerDragend: function (t) {
                this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
            }, _pointerChangeTimeline: function (t, e) {
                var i = this._toAxisCoord(t)[0], n = this._axis, o = m.asc(n.getExtent().slice());
                i > o[1] && (i = o[1]), i < o[0] && (i = o[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
                var r = this._findNearestTick(i), a = this.model;
                (e || r !== a.getCurrentIndex() && a.get("realtime")) && this._changeTimeline(r)
            }, _doPlayStop: function () {
                function t() {
                    var t = this.model;
                    this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1));
                }

                this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(x(t, this), this.model.get("playInterval")))
            }, _toAxisCoord: function (t) {
                var e = this._mainGroup.getLocalTransform();
                return l.applyTransform(t, e, !0)
            }, _findNearestTick: function (t) {
                var e, i = this.model.getData(), n = 1 / 0, o = this._axis;
                return i.each(["value"], function (i, r) {
                    var a = o.dataToCoord(i), s = Math.abs(a - t);
                    s < n && (n = s, e = r)
                }), e
            }, _clearTimer: function () {
                this._timer && (clearTimeout(this._timer), this._timer = null)
            }, _changeTimeline: function (t) {
                var e = this.model.getCurrentIndex();
                "+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
                    type: "timelineChange",
                    currentIndex: t,
                    from: this.uid
                })
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(42), r = i(22), a = function (t, e, i, n) {
            o.call(this, t, e, i), this.type = n || "value", this._autoLabelInterval, this.model = null
        };
        a.prototype = {
            constructor: a, getLabelInterval: function () {
                var t = this.model, e = t.getModel("label.normal"), i = e.get("interval");
                if (null != i && "auto" != i)return i;
                var i = this._autoLabelInterval;
                return i || (i = this._autoLabelInterval = r.getAxisLabelInterval(n.map(this.scale.getTicks(), this.dataToCoord, this), r.getFormattedLabels(this, e.get("formatter")), e.getModel("textStyle").getFont(), "horizontal" === t.get("orient"))), i
            }, isLabelIgnored: function (t) {
                if ("category" === this.type) {
                    var e = this.getLabelInterval();
                    return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }
        }, n.inherits(a, o), t.exports = a
    }, function (t, e, i) {
        var n = i(13), o = i(14), r = i(1), a = i(6), s = n.extend({
            type: "timeline",
            layoutMode: "box",
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                axisType: "time",
                realtime: !0,
                left: "20%",
                top: null,
                right: "20%",
                bottom: 0,
                width: null,
                height: 40,
                padding: 5,
                controlPosition: "left",
                autoPlay: !1,
                rewind: !1,
                loop: !0,
                playInterval: 2e3,
                currentIndex: 0,
                itemStyle: {normal: {}, emphasis: {}},
                label: {normal: {textStyle: {color: "#000"}}, emphasis: {}},
                data: []
            },
            init: function (t, e, i) {
                this._data, this._names, this.mergeDefaultAndTheme(t, i), this._initData()
            },
            mergeOption: function (t) {
                s.superApply(this, "mergeOption", arguments), this._initData()
            },
            setCurrentIndex: function (t) {
                null == t && (t = this.option.currentIndex);
                var e = this._data.count();
                this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), t < 0 && (t = 0)), this.option.currentIndex = t
            },
            getCurrentIndex: function () {
                return this.option.currentIndex
            },
            isIndexMax: function () {
                return this.getCurrentIndex() >= this._data.count() - 1
            },
            setPlayState: function (t) {
                this.option.autoPlay = !!t
            },
            getPlayState: function () {
                return !!this.option.autoPlay
            },
            _initData: function () {
                var t = this.option, e = t.data || [], i = t.axisType, n = this._names = [];
                if ("category" === i) {
                    var s = [];
                    r.each(e, function (t, e) {
                        var i, o = a.getDataItemValue(t);
                        r.isObject(t) ? (i = r.clone(t), i.value = e) : i = e, s.push(i), r.isString(o) || null != o && !isNaN(o) || (o = ""), n.push(o + "")
                    }), e = s
                }
                var l = {category: "ordinal", time: "time"}[i] || "number", u = this._data = new o([{
                    name: "value",
                    type: l
                }], this);
                u.initData(e, n)
            },
            getData: function () {
                return this._data
            },
            getCategories: function () {
                if ("category" === this.get("axisType"))return this._names.slice()
            }
        });
        t.exports = s
    }, function (t, e, i) {
        var n = i(58);
        t.exports = n.extend({type: "timeline"})
    }, function (t, e, i) {
        function n(t) {
            var e = t.type, i = {number: "value", time: "time"};
            if (i[e] && (t.axisType = i[e], delete t.type), o(t), r(t, "controlPosition")) {
                var n = t.controlStyle || (t.controlStyle = {});
                r(n, "position") || (n.position = t.controlPosition), "none" !== n.position || r(n, "show") || (n.show = !1, delete n.position), delete t.controlPosition
            }
            a.each(t.data || [], function (t) {
                a.isObject(t) && !a.isArray(t) && (!r(t, "value") && r(t, "name") && (t.value = t.name), o(t))
            })
        }

        function o(t) {
            var e = t.itemStyle || (t.itemStyle = {}), i = e.emphasis || (e.emphasis = {}), n = t.label || t.label || {}, o = n.normal || (n.normal = {}), s = {
                normal: 1,
                emphasis: 1
            };
            a.each(n, function (t, e) {
                s[e] || r(o, e) || (o[e] = t)
            }), i.label && !r(n, "emphasis") && (n.emphasis = i.label, delete i.label)
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        var a = i(1);
        t.exports = function (t) {
            var e = t && t.timeline;
            a.isArray(e) || (e = e ? [e] : []), a.each(e, function (t) {
                t && n(t)
            })
        }
    }, function (t, e, i) {
        var n = i(2), o = i(1);
        n.registerAction({
            type: "timelineChange",
            event: "timelineChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            var i = e.getComponent("timeline");
            return i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e.resetOption("timeline"), o.defaults({currentIndex: i.option.currentIndex}, t)
        }), n.registerAction({
            type: "timelinePlayChange",
            event: "timelinePlayChanged",
            update: "update"
        }, function (t, e) {
            var i = e.getComponent("timeline");
            i && null != t.playState && i.setPlayState(t.playState)
        })
    }, function (t, e, i) {
        i(13).registerSubTypeDefaulter("timeline", function () {
            return "slider"
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            this.model = t, this.ecModel = e, this.api = i, this._brushType, this._brushMode
        }

        var o = i(25), r = i(1);
        n.defaultOption = {
            show: !0,
            type: ["rect", "polygon", "lineX", "lineY", "keep", "clear"],
            icon: {
                rect: "M7.3,34.7 M0.4,10V-0.2h9.8 M89.6,10V-0.2h-9.8 M0.4,60v10.2h9.8 M89.6,60v10.2h-9.8 M12.3,22.4V10.5h13.1 M33.6,10.5h7.8 M49.1,10.5h7.8 M77.5,22.4V10.5h-13 M12.3,31.1v8.2 M77.7,31.1v8.2 M12.3,47.6v11.9h13.1 M33.6,59.5h7.6 M49.1,59.5 h7.7 M77.5,47.6v11.9h-13",
                polygon: "M55.2,34.9c1.7,0,3.1,1.4,3.1,3.1s-1.4,3.1-3.1,3.1 s-3.1-1.4-3.1-3.1S53.5,34.9,55.2,34.9z M50.4,51c1.7,0,3.1,1.4,3.1,3.1c0,1.7-1.4,3.1-3.1,3.1c-1.7,0-3.1-1.4-3.1-3.1 C47.3,52.4,48.7,51,50.4,51z M55.6,37.1l1.5-7.8 M60.1,13.5l1.6-8.7l-7.8,4 M59,19l-1,5.3 M24,16.1l6.4,4.9l6.4-3.3 M48.5,11.6 l-5.9,3.1 M19.1,12.8L9.7,5.1l1.1,7.7 M13.4,29.8l1,7.3l6.6,1.6 M11.6,18.4l1,6.1 M32.8,41.9 M26.6,40.4 M27.3,40.2l6.1,1.6 M49.9,52.1l-5.6-7.6l-4.9-1.2",
                lineX: "M15.2,30 M19.7,15.6V1.9H29 M34.8,1.9H40.4 M55.3,15.6V1.9H45.9 M19.7,44.4V58.1H29 M34.8,58.1H40.4 M55.3,44.4 V58.1H45.9 M12.5,20.3l-9.4,9.6l9.6,9.8 M3.1,29.9h16.5 M62.5,20.3l9.4,9.6L62.3,39.7 M71.9,29.9H55.4",
                lineY: "M38.8,7.7 M52.7,12h13.2v9 M65.9,26.6V32 M52.7,46.3h13.2v-9 M24.9,12H11.8v9 M11.8,26.6V32 M24.9,46.3H11.8v-9 M48.2,5.1l-9.3-9l-9.4,9.2 M38.9-3.9V12 M48.2,53.3l-9.3,9l-9.4-9.2 M38.9,62.3V46.4",
                keep: "M4,10.5V1h10.3 M20.7,1h6.1 M33,1h6.1 M55.4,10.5V1H45.2 M4,17.3v6.6 M55.6,17.3v6.6 M4,30.5V40h10.3 M20.7,40 h6.1 M33,40h6.1 M55.4,30.5V40H45.2 M21,18.9h62.9v48.6H21V18.9z",
                clear: "M22,14.7l30.9,31 M52.9,14.7L22,45.7 M4.7,16.8V4.2h13.1 M26,4.2h7.8 M41.6,4.2h7.8 M70.3,16.8V4.2H57.2 M4.7,25.9v8.6 M70.3,25.9v8.6 M4.7,43.2v12.6h13.1 M26,55.8h7.8 M41.6,55.8h7.8 M70.3,43.2v12.6H57.2"
            },
            title: {rect: "矩形选择", polygon: "圈选", lineX: "横向选择", lineY: "纵向选择", keep: "保持选择", clear: "清除选择"}
        };
        var a = n.prototype;
        a.render = a.updateView = a.updateLayout = function (t, e, i) {
            var n, o, a;
            e.eachComponent({mainType: "brush"}, function (t) {
                n = t.brushType, o = t.brushOption.brushMode || "single", a |= t.areas.length
            }), this._brushType = n, this._brushMode = o, r.each(t.get("type", !0), function (e) {
                t.setIconStatus(e, ("keep" === e ? "multiple" === o : "clear" === e ? a : e === n) ? "emphasis" : "normal")
            })
        }, a.getIcons = function () {
            var t = this.model, e = t.get("icon", !0), i = {};
            return r.each(t.get("type", !0), function (t) {
                e[t] && (i[t] = e[t])
            }), i
        }, a.onclick = function (t, e, i) {
            var e = this.api, n = this._brushType, o = this._brushMode;
            "clear" === i ? e.dispatchAction({type: "brush", areas: []}) : e.dispatchAction({
                type: "takeGlobalCursor",
                key: "brush",
                brushOption: {
                    brushType: "keep" === i ? n : n !== i && i,
                    brushMode: "keep" === i ? "multiple" === o ? "single" : "multiple" : o
                }
            })
        }, o.register("brush", n), t.exports = n
    }, function (t, e, i) {
        i(356), i(357)
    }, function (t, e, i) {
        function n(t, e, i) {
            if (i[0] === i[1])return i.slice();
            for (var n = 200, o = (i[1] - i[0]) / n, r = i[0], a = [], s = 0; s <= n && r < i[1]; s++)a.push(r), r += o;
            return a.push(i[1]), a
        }

        var o = i(232), r = i(1), a = i(4), s = [20, 140], l = o.extend({
            type: "visualMap.continuous",
            defaultOption: {
                align: "auto",
                calculable: !1,
                range: null,
                realtime: !0,
                itemHeight: null,
                itemWidth: null,
                hoverLink: !0,
                hoverLinkDataSize: null,
                hoverLinkOnHandle: !0
            },
            optionUpdated: function (t, e) {
                l.superApply(this, "optionUpdated", arguments), this.resetTargetSeries(), this.resetExtent(), this.resetVisual(function (t) {
                    t.mappingMethod = "linear", t.dataExtent = this.getExtent()
                }), this._resetRange()
            },
            resetItemSize: function () {
                l.superApply(this, "resetItemSize", arguments);
                var t = this.itemSize;
                "horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = s[0]), (null == t[1] || isNaN(t[1])) && (t[1] = s[1])
            },
            _resetRange: function () {
                var t = this.getExtent(), e = this.option.range;
                !e || e.auto ? (t.auto = 1, this.option.range = t) : r.isArray(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]))
            },
            completeVisualOption: function () {
                o.prototype.completeVisualOption.apply(this, arguments), r.each(this.stateList, function (t) {
                    var e = this.option.controller[t].symbolSize;
                    e && e[0] !== e[1] && (e[0] = 0)
                }, this)
            },
            setSelected: function (t) {
                this.option.range = t.slice(), this._resetRange()
            },
            getSelected: function () {
                var t = this.getExtent(), e = a.asc((this.get("range") || []).slice());
                return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
            },
            getValueState: function (t) {
                var e = this.option.range, i = this.getExtent();
                return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], o = i.getData();
                    o.each(this.getDataDimension(o), function (e, i) {
                        t[0] <= e && e <= t[1] && n.push(i)
                    }, !0, this), e.push({seriesId: i.id, dataIndex: n})
                }, this), e
            },
            getVisualMeta: function (t) {
                function e(e, i) {
                    r.push({value: e, color: t(e, i)})
                }

                for (var i = n(this, "outOfRange", this.getExtent()), o = n(this, "inRange", this.option.range.slice()), r = [], a = 0, s = 0, l = o.length, u = i.length; s < u && (!o.length || i[s] <= o[0]); s++)i[s] < o[a] && e(i[s], "outOfRange");
                for (var h = 1; a < l; a++, h = 0)h && r.length && e(o[a], "outOfRange"), e(o[a], "inRange");
                for (var h = 1; s < u; s++)(!o.length || o[o.length - 1] < i[s]) && (h && (r.length && e(r[r.length - 1].value, "outOfRange"), h = 0), e(i[s], "outOfRange"));
                var c = r.length;
                return {stops: r, outerColors: [c ? r[0].color : "transparent", c ? r[c - 1].color : "transparent"]}
            }
        });
        t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            return new u.Polygon({shape: {points: t}, draggable: !!i, cursor: e, drift: i, ondragend: n})
        }

        function o(t, e) {
            return 0 === t ? [[0, 0], [e, 0], [e, -e]] : [[0, 0], [e, 0], [e, e]]
        }

        function r(t, e, i, n) {
            return t ? [[0, -y(e, x(i, 0))], [b, 0], [0, y(e, x(n - i, 0))]] : [[0, 0], [5, -5], [5, 5]]
        }

        function a(t, e, i) {
            var n = _ / 2, o = t.get("hoverLinkDataSize");
            return o && (n = m(o, e, i, !0) / 2), n
        }

        function s(t) {
            return !t.get("realtime") && t.get("hoverLinkOnHandle")
        }

        var l = i(233), u = i(3), h = i(1), c = i(4), d = i(81), f = i(87), p = i(234), g = i(6), m = c.linearMap, v = h.each, y = Math.min, x = Math.max, _ = 12, b = 6, w = l.extend({
            type: "visualMap.continuous",
            init: function () {
                w.superApply(this, "init", arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle, this._hoverLinkDataIndices = [], this._dragging, this._hovering
            },
            doRender: function (t, e, i, n) {
                n && "selectDataRange" === n.type && n.from === this.uid || this._buildView()
            },
            _buildView: function () {
                this.group.removeAll();
                var t = this.visualMapModel, e = this.group;
                this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
                var i = t.get("text");
                this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(e)
            },
            _renderEndsText: function (t, e, i) {
                if (e) {
                    var n = e[1 - i];
                    n = null != n ? n + "" : "";
                    var o = this.visualMapModel, r = o.get("textGap"), a = o.itemSize, s = this._shapes.barGroup, l = this._applyTransform([a[0] / 2, 0 === i ? -r : a[1] + r], s), h = this._applyTransform(0 === i ? "bottom" : "top", s), c = this._orient, d = this.visualMapModel.textStyleModel;
                    this.group.add(new u.Text({
                        style: {
                            x: l[0],
                            y: l[1],
                            textVerticalAlign: "horizontal" === c ? "middle" : h,
                            textAlign: "horizontal" === c ? h : "center",
                            text: n,
                            textFont: d.getFont(),
                            fill: d.getTextColor()
                        }
                    }))
                }
            },
            _renderBar: function (t) {
                var e = this.visualMapModel, i = this._shapes, o = e.itemSize, r = this._orient, a = this._useHandle, s = p.getItemAlign(e, this.api, o), l = i.barGroup = this._createBarGroup(s);
                l.add(i.outOfRange = n()), l.add(i.inRange = n(null, a ? "move" : null, h.bind(this._dragHandle, this, "all", !1), h.bind(this._dragHandle, this, "all", !0)));
                var u = e.textStyleModel.getTextRect("国"), c = x(u.width, u.height);
                a && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(l, 0, o, c, r, s), this._createHandle(l, 1, o, c, r, s)), this._createIndicator(l, o, c, r), t.add(l)
            },
            _createHandle: function (t, e, i, r, a) {
                var s = h.bind(this._dragHandle, this, e, !1), l = h.bind(this._dragHandle, this, e, !0), c = n(o(e, r), "move", s, l);
                c.position[0] = i[0], t.add(c);
                var d = this.visualMapModel.textStyleModel, f = new u.Text({
                    draggable: !0,
                    drift: s,
                    ondragend: l,
                    style: {x: 0, y: 0, text: "", textFont: d.getFont(), fill: d.getTextColor()}
                });
                this.group.add(f);
                var p = ["horizontal" === a ? r / 2 : 1.5 * r, "horizontal" === a ? 0 === e ? -(1.5 * r) : 1.5 * r : 0 === e ? -r / 2 : r / 2], g = this._shapes;
                g.handleThumbs[e] = c, g.handleLabelPoints[e] = p, g.handleLabels[e] = f
            },
            _createIndicator: function (t, e, i, o) {
                var r = n([[0, 0]], "move");
                r.position[0] = e[0], r.attr({invisible: !0, silent: !0}), t.add(r);
                var a = this.visualMapModel.textStyleModel, s = new u.Text({
                    silent: !0,
                    invisible: !0,
                    style: {x: 0, y: 0, text: "", textFont: a.getFont(), fill: a.getTextColor()}
                });
                this.group.add(s);
                var l = ["horizontal" === o ? i / 2 : b + 3, 0], h = this._shapes;
                h.indicator = r, h.indicatorLabel = s, h.indicatorLabelPoint = l
            },
            _dragHandle: function (t, e, i, n) {
                if (this._useHandle) {
                    if (this._dragging = !e, !e) {
                        var o = this._applyTransform([i, n], this._shapes.barGroup, !0);
                        this._updateInterval(t, o[1]), this._updateView()
                    }
                    e === !this.visualMapModel.get("realtime") && this.api.dispatchAction({
                        type: "selectDataRange",
                        from: this.uid,
                        visualMapId: this.visualMapModel.id,
                        selected: this._dataInterval.slice()
                    }), e ? !this._hovering && this._clearHoverLinkToSeries() : s(this.visualMapModel) && this._doHoverLinkToSeries(this._handleEnds[t], !1)
                }
            },
            _resetInterval: function () {
                var t = this.visualMapModel, e = this._dataInterval = t.getSelected(), i = t.getExtent(), n = [0, t.itemSize[1]];
                this._handleEnds = [m(e[0], i, n, !0), m(e[1], i, n, !0)]
            },
            _updateInterval: function (t, e) {
                e = e || 0;
                var i = this.visualMapModel, n = this._handleEnds;
                d(e, n, [0, i.itemSize[1]], "all" === t ? "rigid" : "push", t);
                var o = i.getExtent(), r = [0, i.itemSize[1]];
                this._dataInterval = [m(n[0], r, o, !0), m(n[1], r, o, !0)]
            },
            _updateView: function (t) {
                var e = this.visualMapModel, i = e.getExtent(), n = this._shapes, o = [0, e.itemSize[1]], r = t ? o : this._handleEnds, a = this._createBarVisual(this._dataInterval, i, r, "inRange"), s = this._createBarVisual(i, i, o, "outOfRange");
                n.inRange.setStyle({
                    fill: a.barColor,
                    opacity: a.opacity
                }).setShape("points", a.barPoints), n.outOfRange.setStyle({
                    fill: s.barColor,
                    opacity: s.opacity
                }).setShape("points", s.barPoints), this._updateHandle(r, a)
            },
            _createBarVisual: function (t, e, i, n) {
                var o = {
                    forceState: n,
                    convertOpacityToAlpha: !0
                }, r = this._makeColorGradient(t, o), a = [this.getControllerVisual(t[0], "symbolSize", o), this.getControllerVisual(t[1], "symbolSize", o)], s = this._createBarPoints(i, a);
                return {barColor: new f(0, 0, 0, 1, r), barPoints: s, handlesColor: [r[0].color, r[r.length - 1].color]}
            },
            _makeColorGradient: function (t, e) {
                var i = 100, n = [], o = (t[1] - t[0]) / i;
                n.push({color: this.getControllerVisual(t[0], "color", e), offset: 0});
                for (var r = 1; r < i; r++) {
                    var a = t[0] + o * r;
                    if (a > t[1])break;
                    n.push({color: this.getControllerVisual(a, "color", e), offset: r / i})
                }
                return n.push({color: this.getControllerVisual(t[1], "color", e), offset: 1}), n
            },
            _createBarPoints: function (t, e) {
                var i = this.visualMapModel.itemSize;
                return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
            },
            _createBarGroup: function (t) {
                var e = this._orient, i = this.visualMapModel.get("inverse");
                return new u.Group("horizontal" !== e || i ? "horizontal" === e && i ? {
                    scale: "bottom" === t ? [-1, 1] : [1, 1],
                    rotation: -Math.PI / 2
                } : "vertical" !== e || i ? {scale: "left" === t ? [1, 1] : [-1, 1]} : {scale: "left" === t ? [1, -1] : [-1, -1]} : {
                    scale: "bottom" === t ? [1, 1] : [-1, 1],
                    rotation: Math.PI / 2
                })
            },
            _updateHandle: function (t, e) {
                if (this._useHandle) {
                    var i = this._shapes, n = this.visualMapModel, o = i.handleThumbs, r = i.handleLabels;
                    v([0, 1], function (a) {
                        var s = o[a];
                        s.setStyle("fill", e.handlesColor[a]), s.position[1] = t[a];
                        var l = u.applyTransform(i.handleLabelPoints[a], u.getTransform(s, this.group));
                        r[a].setStyle({
                            x: l[0],
                            y: l[1],
                            text: n.formatValueText(this._dataInterval[a]),
                            textVerticalAlign: "middle",
                            textAlign: this._applyTransform("horizontal" === this._orient ? 0 === a ? "bottom" : "top" : "left", i.barGroup)
                        })
                    }, this)
                }
            },
            _showIndicator: function (t, e, i, n) {
                var o = this.visualMapModel, a = o.getExtent(), s = o.itemSize, l = [0, s[1]], h = m(t, a, l, !0), c = this._shapes, d = c.indicator;
                if (d) {
                    d.position[1] = h, d.attr("invisible", !1), d.setShape("points", r(!!i, n, h, s[1]));
                    var f = {convertOpacityToAlpha: !0}, p = this.getControllerVisual(t, "color", f);
                    d.setStyle("fill", p);
                    var g = u.applyTransform(c.indicatorLabelPoint, u.getTransform(d, this.group)), v = c.indicatorLabel;
                    v.attr("invisible", !1);
                    var y = this._applyTransform("left", c.barGroup), x = this._orient;
                    v.setStyle({
                        text: (i ? i : "") + o.formatValueText(e),
                        textVerticalAlign: "horizontal" === x ? y : "middle",
                        textAlign: "horizontal" === x ? "center" : y,
                        x: g[0],
                        y: g[1]
                    })
                }
            },
            _enableHoverLinkToSeries: function () {
                var t = this;
                this._shapes.barGroup.on("mousemove", function (e) {
                    if (t._hovering = !0, !t._dragging) {
                        var i = t.visualMapModel.itemSize, n = t._applyTransform([e.offsetX, e.offsetY], t._shapes.barGroup, !0, !0);
                        n[1] = y(x(0, n[1]), i[1]), t._doHoverLinkToSeries(n[1], 0 <= n[0] && n[0] <= i[0])
                    }
                }).on("mouseout", function () {
                    t._hovering = !1, !t._dragging && t._clearHoverLinkToSeries()
                })
            },
            _enableHoverLinkFromSeries: function () {
                var t = this.api.getZr();
                this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries()
            },
            _doHoverLinkToSeries: function (t, e) {
                var i = this.visualMapModel, n = i.itemSize;
                if (i.option.hoverLink) {
                    var o = [0, n[1]], r = i.getExtent();
                    t = y(x(o[0], t), o[1]);
                    var l = a(i, r, o), u = [t - l, t + l], h = m(t, o, r, !0), c = [m(u[0], o, r, !0), m(u[1], o, r, !0)];
                    u[0] < o[0] && (c[0] = -(1 / 0)), u[1] > o[1] && (c[1] = 1 / 0), e && (c[0] === -(1 / 0) ? this._showIndicator(h, c[1], "< ", l) : c[1] === 1 / 0 ? this._showIndicator(h, c[0], "> ", l) : this._showIndicator(h, h, "≈ ", l));
                    var d = this._hoverLinkDataIndices, f = [];
                    (e || s(i)) && (f = this._hoverLinkDataIndices = i.findTargetDataIndices(c));
                    var v = g.compressBatches(d, f);
                    this._dispatchHighDown("downplay", p.convertDataIndex(v[0])), this._dispatchHighDown("highlight", p.convertDataIndex(v[1]))
                }
            },
            _hoverLinkFromSeriesMouseOver: function (t) {
                var e = t.target;
                if (e && null != e.dataIndex) {
                    var i = e.dataModel || this.ecModel.getSeriesByIndex(e.seriesIndex), n = i.getData(e.dataType), o = n.getDimension(this.visualMapModel.getDataDimension(n)), r = n.get(o, e.dataIndex, !0);
                    isNaN(r) || this._showIndicator(r, r)
                }
            },
            _hideIndicator: function () {
                var t = this._shapes;
                t.indicator && t.indicator.attr("invisible", !0), t.indicatorLabel && t.indicatorLabel.attr("invisible", !0)
            },
            _clearHoverLinkToSeries: function () {
                this._hideIndicator();
                var t = this._hoverLinkDataIndices;
                this._dispatchHighDown("downplay", p.convertDataIndex(t)), t.length = 0
            },
            _clearHoverLinkFromSeries: function () {
                this._hideIndicator();
                var t = this.api.getZr();
                t.off("mouseover", this._hoverLinkFromSeriesMouseOver), t.off("mouseout", this._hideIndicator)
            },
            _applyTransform: function (t, e, i, n) {
                var o = u.getTransform(e, n ? null : this.group);
                return u[h.isArray(t) ? "applyTransform" : "transformDirection"](t, o, i)
            },
            _dispatchHighDown: function (t, e) {
                e && e.length && this.api.dispatchAction({type: t, batch: e})
            },
            dispose: function () {
                this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
            },
            remove: function () {
                this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
            }
        });
        t.exports = w
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.inverse;
            ("vertical" === t.orient ? !i : i) && e.reverse()
        }

        var o = i(232), r = i(1), a = i(72), s = i(243), l = i(4).reformIntervals, u = o.extend({
            type: "visualMap.piecewise",
            defaultOption: {
                selected: null,
                minOpen: !1,
                maxOpen: !1,
                align: "auto",
                itemWidth: 20,
                itemHeight: 14,
                itemSymbol: "roundRect",
                pieceList: null,
                categories: null,
                splitNumber: 5,
                selectedMode: "multiple",
                itemGap: 10,
                hoverLink: !0
            },
            optionUpdated: function (t, e) {
                u.superApply(this, "optionUpdated", arguments), this._pieceList = [], this.resetTargetSeries(), this.resetExtent();
                var i = this._mode = this._determineMode();
                h[this._mode].call(this), this._resetSelected(t, e);
                var n = this.option.categories;
                this.resetVisual(function (t, e) {
                    "categories" === i ? (t.mappingMethod = "category", t.categories = r.clone(n)) : (t.dataExtent = this.getExtent(), t.mappingMethod = "piecewise", t.pieceList = r.map(this._pieceList, function (t) {
                        var t = r.clone(t);
                        return "inRange" !== e && (t.visual = null), t
                    }))
                })
            },
            completeVisualOption: function () {
                function t(t, e, i) {
                    return t && t[e] && (r.isObject(t[e]) ? t[e].hasOwnProperty(i) : t[e] === i)
                }

                var e = this.option, i = {}, n = a.listVisualTypes(), l = this.isCategory();
                r.each(e.pieces, function (t) {
                    r.each(n, function (e) {
                        t.hasOwnProperty(e) && (i[e] = 1)
                    })
                }), r.each(i, function (i, n) {
                    var o = 0;
                    r.each(this.stateList, function (i) {
                        o |= t(e, i, n) || t(e.target, i, n)
                    }, this), !o && r.each(this.stateList, function (t) {
                        (e[t] || (e[t] = {}))[n] = s.get(n, "inRange" === t ? "active" : "inactive", l)
                    })
                }, this), o.prototype.completeVisualOption.apply(this, arguments)
            },
            _resetSelected: function (t, e) {
                var i = this.option, n = this._pieceList, o = (e ? i : t).selected || {};
                if (i.selected = o, r.each(n, function (t, e) {
                        var i = this.getSelectedMapKey(t);
                        o.hasOwnProperty(i) || (o[i] = !0)
                    }, this), "single" === i.selectedMode) {
                    var a = !1;
                    r.each(n, function (t, e) {
                        var i = this.getSelectedMapKey(t);
                        o[i] && (a ? o[i] = !1 : a = !0)
                    }, this)
                }
            },
            getSelectedMapKey: function (t) {
                return "categories" === this._mode ? t.value + "" : t.index + ""
            },
            getPieceList: function () {
                return this._pieceList
            },
            _determineMode: function () {
                var t = this.option;
                return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
            },
            setSelected: function (t) {
                this.option.selected = r.clone(t)
            },
            getValueState: function (t) {
                var e = a.findPieceIndex(t, this._pieceList);
                return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], o = i.getData();
                    o.each(this.getDataDimension(o), function (e, i) {
                        var o = a.findPieceIndex(e, this._pieceList);
                        o === t && n.push(i)
                    }, !0, this), e.push({seriesId: i.id, dataIndex: n})
                }, this), e
            },
            getRepresentValue: function (t) {
                var e;
                if (this.isCategory())e = t.value; else if (null != t.value)e = t.value; else {
                    var i = t.interval || [];
                    e = i[0] === -(1 / 0) && i[1] === 1 / 0 ? 0 : (i[0] + i[1]) / 2
                }
                return e
            },
            getVisualMeta: function (t) {
                function e(e, r) {
                    var a = o.getRepresentValue({interval: e});
                    r || (r = o.getValueState(a));
                    var s = t(a, r);
                    e[0] === -(1 / 0) ? n[0] = s : e[1] === 1 / 0 ? n[1] = s : i.push({
                        value: e[0],
                        color: s
                    }, {value: e[1], color: s})
                }

                if (!this.isCategory()) {
                    var i = [], n = [], o = this, a = this._pieceList.slice();
                    if (a.length) {
                        var s = a[0].interval[0];
                        s !== -(1 / 0) && a.unshift({interval: [-(1 / 0), s]}), s = a[a.length - 1].interval[1], s !== 1 / 0 && a.push({interval: [s, 1 / 0]})
                    } else a.push({interval: [-(1 / 0), 1 / 0]});
                    var l = -(1 / 0);
                    return r.each(a, function (t) {
                        var i = t.interval;
                        i && (i[0] > l && e([l, i[0]], "outOfRange"), e(i.slice()), l = i[1])
                    }, this), {stops: i, outerColors: n}
                }
            }
        }), h = {
            splitNumber: function () {
                var t = this.option, e = this._pieceList, i = t.precision, n = this.getExtent(), o = t.splitNumber;
                o = Math.max(parseInt(o, 10), 1), t.splitNumber = o;
                for (var a = (n[1] - n[0]) / o; +a.toFixed(i) !== a && i < 5;)i++;
                t.precision = i, a = +a.toFixed(i);
                var s = 0;
                t.minOpen && e.push({index: s++, interval: [-(1 / 0), n[0]], close: [0, 0]});
                for (var u = n[0], h = s + o; s < h; u += a) {
                    var c = s === o - 1 ? n[1] : u + a;
                    e.push({index: s++, interval: [u, c], close: [1, 1]})
                }
                t.maxOpen && e.push({
                    index: s++,
                    interval: [n[1], 1 / 0],
                    close: [0, 0]
                }), l(e), r.each(e, function (t) {
                    t.text = this.formatValueText(t.interval)
                }, this)
            }, categories: function () {
                var t = this.option;
                r.each(t.categories, function (t) {
                    this._pieceList.push({text: this.formatValueText(t, !0), value: t})
                }, this), n(t, this._pieceList)
            }, pieces: function () {
                var t = this.option, e = this._pieceList;
                r.each(t.pieces, function (t, i) {
                    r.isObject(t) || (t = {value: t});
                    var n = {text: "", index: i};
                    if (null != t.label && (n.text = t.label), t.hasOwnProperty("value")) {
                        var o = n.value = t.value;
                        n.interval = [o, o], n.close = [1, 1]
                    } else {
                        for (var s = n.interval = [], l = n.close = [0, 0], u = [1, 0, 1], h = [-(1 / 0), 1 / 0], c = [], d = 0; d < 2; d++) {
                            for (var f = [["gte", "gt", "min"], ["lte", "lt", "max"]][d], p = 0; p < 3 && null == s[d]; p++)s[d] = t[f[p]], l[d] = u[p], c[d] = 2 === p;
                            null == s[d] && (s[d] = h[d])
                        }
                        c[0] && s[1] === 1 / 0 && (l[0] = 0), c[1] && s[0] === -(1 / 0) && (l[1] = 0), s[0] === s[1] && l[0] && l[1] && (n.value = s[0])
                    }
                    n.visual = a.retrieveVisuals(t), e.push(n)
                }, this), n(t, e), l(e), r.each(e, function (t) {
                    var e = t.close, i = [["<", "≤"][e[1]], [">", "≥"][e[0]]];
                    t.text = t.text || this.formatValueText(null != t.value ? t.value : t.interval, !1, i)
                }, this)
            }
        };
        t.exports = u
    }, function (t, e, i) {
        var n = i(233), o = i(1), r = i(3), a = i(26), s = i(12), l = i(234), u = n.extend({
            type: "visualMap.piecewise",
            doRender: function () {
                function t(t) {
                    var a = t.piece, s = new r.Group;
                    s.onclick = o.bind(this._onItemClick, this, a), this._enableHoverLink(s, t.indexInModelPieceList);
                    var d = i.getRepresentValue(a);
                    if (this._createItemSymbol(s, d, [0, 0, c[0], c[1]]), f) {
                        var p = this.visualMapModel.getValueState(d);
                        s.add(new r.Text({
                            style: {
                                x: "right" === h ? -n : c[0] + n,
                                y: c[1] / 2,
                                text: a.text,
                                textVerticalAlign: "middle",
                                textAlign: h,
                                textFont: l,
                                fill: u,
                                opacity: "outOfRange" === p ? .5 : 1
                            }
                        }))
                    }
                    e.add(s)
                }

                var e = this.group;
                e.removeAll();
                var i = this.visualMapModel, n = i.get("textGap"), a = i.textStyleModel, l = a.getFont(), u = a.getTextColor(), h = this._getItemAlign(), c = i.itemSize, d = this._getViewData(), f = !d.endsText, p = !f;
                p && this._renderEndsText(e, d.endsText[0], c), o.each(d.viewPieceList, t, this), p && this._renderEndsText(e, d.endsText[1], c), s.box(i.get("orient"), e, i.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
            },
            _enableHoverLink: function (t, e) {
                function i(t) {
                    var i = this.visualMapModel;
                    i.option.hoverLink && this.api.dispatchAction({
                        type: t,
                        batch: l.convertDataIndex(i.findTargetDataIndices(e))
                    })
                }

                t.on("mouseover", o.bind(i, this, "highlight")).on("mouseout", o.bind(i, this, "downplay"))
            },
            _getItemAlign: function () {
                var t = this.visualMapModel, e = t.option;
                if ("vertical" === e.orient)return l.getItemAlign(t, this.api, t.itemSize);
                var i = e.align;
                return i && "auto" !== i || (i = "left"), i
            },
            _renderEndsText: function (t, e, i) {
                if (e) {
                    var n = new r.Group, o = this.visualMapModel.textStyleModel;
                    n.add(new r.Text({
                        style: {
                            x: i[0] / 2,
                            y: i[1] / 2,
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            text: e,
                            textFont: o.getFont(),
                            fill: o.getTextColor()
                        }
                    })), t.add(n)
                }
            },
            _getViewData: function () {
                var t = this.visualMapModel, e = o.map(t.getPieceList(), function (t, e) {
                    return {piece: t, indexInModelPieceList: e}
                }), i = t.get("text"), n = t.get("orient"), r = t.get("inverse");
                return ("horizontal" === n ? r : !r) ? e.reverse() : i && (i = i.slice().reverse()), {
                    viewPieceList: e,
                    endsText: i
                }
            },
            _createItemSymbol: function (t, e, i) {
                t.add(a.createSymbol(this.getControllerVisual(e, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(e, "color")))
            },
            _onItemClick: function (t) {
                var e = this.visualMapModel, i = e.option, n = o.clone(i.selected), r = e.getSelectedMapKey(t);
                "single" === i.selectedMode ? (n[r] = !0, o.each(n, function (t, e) {
                    n[e] = e === r
                })) : n[r] = !n[r], this.api.dispatchAction({
                    type: "selectDataRange",
                    from: this.uid,
                    visualMapId: this.visualMapModel.id,
                    selected: n
                })
            }
        });
        t.exports = u
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(235)), i(236), i(237), i(352), i(353), i(238)
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(235)), i(236), i(237), i(354), i(355), i(238)
    }, function (t, e, i) {
        function n(t, e, i, n, o) {
            l.call(this, t), this.map = e, this._nameCoordMap = {}, this.loadGeoJson(i, n, o)
        }

        function o(t, e, i, n) {
            var o = i.geoModel, r = i.seriesModel, a = o ? o.coordinateSystem : r ? r.coordinateSystem || (r.getReferringComponents("geo")[0] || {}).coordinateSystem : null;
            return a === this ? a[t](n) : null
        }

        var r = i(363), a = i(1), s = i(8), l = i(239), u = [i(361), i(362), i(360)];
        n.prototype = {
            constructor: n, type: "geo", dimensions: ["lng", "lat"], containCoord: function (t) {
                for (var e = this.regions, i = 0; i < e.length; i++)if (e[i].contain(t))return !0;
                return !1
            }, loadGeoJson: function (t, e, i) {
                try {
                    this.regions = t ? r(t) : []
                } catch (n) {
                    throw"Invalid geoJson format\n" + n
                }
                e = e || {}, i = i || {};
                for (var o = this.regions, s = {}, l = 0; l < o.length; l++) {
                    var h = o[l].name;
                    h = i[h] || h, o[l].name = h, s[h] = o[l], this.addGeoCoord(h, o[l].center);
                    var c = e[h];
                    c && o[l].transformTo(c.left, c.top, c.width, c.height)
                }
                this._regionsMap = s, this._rect = null, a.each(u, function (t) {
                    t(this)
                }, this)
            }, transformTo: function (t, e, i, n) {
                var o = this.getBoundingRect();
                o = o.clone(), o.y = -o.y - o.height;
                var r = this._viewTransform;
                r.transform = o.calculateTransform(new s(t, e, i, n)), r.decomposeTransform();
                var a = r.scale;
                a[1] = -a[1], r.updateTransform(), this._updateTransform()
            }, getRegion: function (t) {
                return this._regionsMap[t]
            }, getRegionByCoord: function (t) {
                for (var e = this.regions, i = 0; i < e.length; i++)if (e[i].contain(t))return e[i]
            }, addGeoCoord: function (t, e) {
                this._nameCoordMap[t] = e
            }, getGeoCoord: function (t) {
                return this._nameCoordMap[t]
            }, getBoundingRect: function () {
                if (this._rect)return this._rect;
                for (var t, e = this.regions, i = 0; i < e.length; i++) {
                    var n = e[i].getBoundingRect();
                    t = t || n.clone(), t.union(n)
                }
                return this._rect = t || new s(0, 0, 0, 0)
            }, dataToPoints: function (t) {
                var e = [];
                return t.mapArray(["lng", "lat"], function (t, i) {
                    return e[0] = t, e[1] = i, this.dataToPoint(e)
                }, this)
            }, dataToPoint: function (t) {
                if ("string" == typeof t && (t = this.getGeoCoord(t)), t)return l.prototype.dataToPoint.call(this, t)
            }, convertToPixel: a.curry(o, "dataToPoint"), convertFromPixel: a.curry(o, "pointToData")
        }, a.mixin(n, l), t.exports = n
    }, function (t, e, i) {
        "use strict";
        var n = i(6), o = i(13), r = i(10), a = i(1), s = i(67), l = i(172), u = o.extend({
            type: "geo",
            coordinateSystem: null,
            layoutMode: "box",
            init: function (t) {
                o.prototype.init.apply(this, arguments), n.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"])
            },
            optionUpdated: function () {
                var t = this.option, e = this;
                t.regions = l.getFilledRegions(t.regions, t.map), this._optionModelMap = a.reduce(t.regions || [], function (t, i) {
                    return i.name && (t[i.name] = new r(i, e)), t
                }, {}), this.updateSelectedMap(t.regions)
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                show: !0,
                left: "center",
                top: "center",
                aspectScale: .75,
                silent: !1,
                map: "",
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", color: "#eee"},
                    emphasis: {color: "rgba(255,215,0,0.8)"}
                },
                regions: []
            },
            getRegionModel: function (t) {
                return this._optionModelMap[t]
            },
            getFormattedLabel: function (t, e) {
                var i = this.get("label." + e + ".formatter"), n = {name: t};
                if ("function" == typeof i)return n.status = e, i(n);
                if ("string" == typeof i) {
                    var o = n.seriesName;
                    return i.replace("{a}", null != o ? o : "")
                }
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            }
        });
        a.mixin(u, s), t.exports = u
    }, function (t, e, i) {
        var n = i(1), o = {Russia: [100, 60], "United States of America": [-99, 38]};
        t.exports = function (t) {
            n.each(t.regions, function (t) {
                var e = o[t.name];
                if (e) {
                    var i = t.center;
                    i[0] = e[0], i[1] = e[1]
                }
            })
        }
    }, function (t, e, i) {
        for (var n = i(240), o = [126, 25], r = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], a = 0; a < r.length; a++)for (var s = 0; s < r[a].length; s++)r[a][s][0] /= 10.5, r[a][s][1] /= -14, r[a][s][0] += o[0], r[a][s][1] += o[1];
        t.exports = function (t) {
            "china" === t.map && t.regions.push(new n("南海诸岛", r, o))
        }
    }, function (t, e, i) {
        var n = i(1), o = {"南海诸岛": [32, 80], "广东": [0, -10], "香港": [10, 5], "澳门": [-10, 10], "天津": [5, 5]};
        t.exports = function (t) {
            n.each(t.regions, function (t) {
                var e = o[t.name];
                if (e) {
                    var i = t.center;
                    i[0] += e[0] / 10.5, i[1] += -e[1] / 14
                }
            })
        }
    }, function (t, e, i) {
        function n(t) {
            if (!t.UTF8Encoding)return t;
            for (var e = t.features, i = 0; i < e.length; i++)for (var n = e[i], r = n.geometry, a = r.coordinates, s = r.encodeOffsets, l = 0; l < a.length; l++) {
                var u = a[l];
                if ("Polygon" === r.type)a[l] = o(u, s[l]); else if ("MultiPolygon" === r.type)for (var h = 0; h < u.length; h++) {
                    var c = u[h];
                    u[h] = o(c, s[l][h])
                }
            }
            return t.UTF8Encoding = !1, t
        }

        function o(t, e) {
            for (var i = [], n = e[0], o = e[1], r = 0; r < t.length; r += 2) {
                var a = t.charCodeAt(r) - 64, s = t.charCodeAt(r + 1) - 64;
                a = a >> 1 ^ -(1 & a), s = s >> 1 ^ -(1 & s), a += n, s += o, n = a, o = s, i.push([a / 1024, s / 1024])
            }
            return i
        }

        function r(t) {
            for (var e = [], i = 0; i < t.length; i++)for (var n = 0; n < t[i].length; n++)e.push(t[i][n]);
            return e
        }

        var a = i(1), s = i(240);
        t.exports = function (t) {
            return n(t), a.map(a.filter(t.features, function (t) {
                return t.geometry && t.properties
            }), function (t) {
                var e = t.properties, i = t.geometry, n = i.coordinates;
                return "MultiPolygon" === i.type && (n = r(n)), new s(e.name, n, e.cp)
            })
        }
    }, function (t, e, i) {
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(13), r = i(1), a = i(30), s = i(53), l = i(4), u = o.extend({
            type: "baseParallelAxis", axis: null, activeIntervals: [], getAreaSelectStyle: function () {
                return a([["fill", "color"], ["lineWidth", "borderWidth"], ["stroke", "borderColor"], ["width", "width"], ["opacity", "opacity"]]).call(this.getModel("areaSelectStyle"))
            }, setActiveIntervals: function (t) {
                var e = this.activeIntervals = r.clone(t);
                if (e)for (var i = e.length - 1; i >= 0; i--)l.asc(e[i])
            }, getActiveState: function (t) {
                var e = this.activeIntervals;
                if (!e.length)return "normal";
                if (null == t)return "inactive";
                for (var i = 0, n = e.length; i < n; i++)if (e[i][0] <= t && t <= e[i][1])return "active";
                return "inactive"
            }
        }), h = {
            type: "value",
            dim: null,
            areaSelectStyle: {
                width: 20,
                borderWidth: 1,
                borderColor: "rgba(160,197,232)",
                color: "rgba(160,197,232)",
                opacity: .3
            },
            realtime: !0,
            z: 10
        };
        r.merge(u.prototype, i(52)), s("parallel", u, n, h), t.exports = u
    }, function (t, e, i) {
        function n(t, e, i) {
            this._axesMap = {}, this._axesLayout = {}, this.dimensions = t.dimensions, this._rect, this._model = t, this._init(t, e, i)
        }

        var o = i(12), r = i(22), a = i(1), s = i(366), l = i(3), u = i(19), h = a.each, c = Math.PI;
        n.prototype = {
            type: "parallel", constructor: n, _init: function (t, e, i) {
                var n = t.dimensions, o = t.parallelAxisIndex;
                h(n, function (t, i) {
                    var n = o[i], a = e.getComponent("parallelAxis", n), l = this._axesMap[t] = new s(t, r.createScaleByModel(a), [0, 0], a.get("type"), n), u = "category" === l.type;
                    l.onBand = u && a.get("boundaryGap"), l.inverse = a.get("inverse"), a.axis = l, l.model = a
                }, this)
            }, update: function (t, e) {
                this._updateAxesFromSeries(this._model, t)
            }, _updateAxesFromSeries: function (t, e) {
                e.eachSeries(function (i) {
                    if (t.contains(i, e)) {
                        var n = i.getData();
                        h(this.dimensions, function (t) {
                            var e = this._axesMap[t];
                            e.scale.unionExtent(n.getDataExtent(t)), r.niceScaleExtent(e, e.model)
                        }, this)
                    }
                }, this)
            }, resize: function (t, e) {
                this._rect = o.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                }), this._layoutAxes(t)
            }, getRect: function () {
                return this._rect
            }, _layoutAxes: function (t) {
                var e = this._rect, i = t.get("layout"), n = this._axesMap, o = this.dimensions, r = [e.width, e.height], a = "horizontal" === i ? 0 : 1, s = r[a], l = r[1 - a], d = [0, l];
                h(n, function (t) {
                    var e = t.inverse ? 1 : 0;
                    t.setExtent(d[e], d[1 - e])
                });
                var f, p = t.get("axisExpandable"), g = t.get("axisExpandWidth"), m = t.get("axisExpandCenter"), v = t.get("axisExpandCount") || 0;
                if (null != m) {
                    var y = Math.max(0, Math.floor(m - (v - 1) / 2)), x = y + v - 1;
                    x >= o.length && (x = o.length - 1, y = Math.max(0, Math.floor(x - v + 1))), f = [y, x]
                }
                var _ = p && f && g ? function (t, e, i) {
                    var n, o = f[1] - f[0], r = (e - g * o) / (i - 1 - o);
                    return n = t < f[0] ? (t - 1) * r : t <= f[1] ? f[0] * r + (t - f[0]) * g : t === i - 1 ? e : f[0] * r + o * g + (t - f[1]) * r, {
                        position: n,
                        axisNameAvailableWidth: f[0] < t && t < f[1] ? g : r
                    }
                } : function (t, e, i) {
                    var n = e / (i - 1);
                    return {position: n * t, axisNameAvailableWidth: n}
                };
                h(o, function (t, n) {
                    var r = _(n, s, o.length), a = {
                        horizontal: {x: r.position, y: l},
                        vertical: {x: 0, y: r.position}
                    }, h = {horizontal: c / 2, vertical: 0}, d = [a[i].x + e.x, a[i].y + e.y], p = h[i], g = u.create();
                    u.rotate(g, g, p), u.translate(g, g, d), this._axesLayout[t] = {
                        position: d,
                        rotation: p,
                        transform: g,
                        axisNameAvailableWidth: r.axisNameAvailableWidth,
                        tickDirection: 1,
                        labelDirection: 1,
                        axisExpandWindow: f
                    }
                }, this)
            }, getAxis: function (t) {
                return this._axesMap[t]
            }, dataToPoint: function (t, e) {
                return this.axisCoordToPoint(this._axesMap[e].dataToCoord(t), e)
            }, eachActiveState: function (t, e, i) {
                for (var n = this.dimensions, o = this._axesMap, r = this.hasAxisbrushed(), a = 0, s = t.count(); a < s; a++) {
                    var l, u = t.getValues(n, a);
                    if (r) {
                        l = "active";
                        for (var h = 0, c = n.length; h < c; h++) {
                            var d = n[h], f = o[d].model.getActiveState(u[h], h);
                            if ("inactive" === f) {
                                l = "inactive";
                                break
                            }
                        }
                    } else l = "normal";
                    e.call(i, l, a)
                }
            }, hasAxisbrushed: function () {
                for (var t = this.dimensions, e = this._axesMap, i = !1, n = 0, o = t.length; n < o; n++)"normal" !== e[t[n]].model.getActiveState() && (i = !0);
                return i
            }, axisCoordToPoint: function (t, e) {
                var i = this._axesLayout[e];
                return l.applyTransform([t, 0], i.transform)
            }, getAxisLayout: function (t) {
                return a.clone(this._axesLayout[t])
            }, findClosestAxisDim: function (t) {
                var e, i = 1 / 0;
                return a.each(this._axesLayout, function (n, o) {
                    var r = l.applyTransform(t, n.transform, !0), a = this._axesMap[o].getExtent();
                    if (!(r[0] < a[0] || r[0] > a[1])) {
                        var s = Math.abs(r[1]);
                        s < i && (i = s, e = o)
                    }
                }, this), e
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = i(42), r = function (t, e, i, n, r) {
            o.call(this, t, e, i), this.type = n || "value", this.axisIndex = r
        };
        r.prototype = {constructor: r, model: null}, n.inherits(r, o), t.exports = r
    }, function (t, e, i) {
        var n = i(1), o = i(13);
        i(364), o.extend({
            type: "parallel",
            dependencies: ["parallelAxis"],
            coordinateSystem: null,
            dimensions: null,
            parallelAxisIndex: null,
            layoutMode: "box",
            defaultOption: {
                zlevel: 0,
                z: 0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                layout: "horizontal",
                axisExpandable: !1,
                axisExpandCenter: null,
                axisExpandCount: 0,
                axisExpandWidth: 50,
                parallelAxisDefault: null
            },
            init: function () {
                o.prototype.init.apply(this, arguments), this.mergeOption({})
            },
            mergeOption: function (t) {
                var e = this.option;
                t && n.merge(e, t, !0), this._initDimensions()
            },
            contains: function (t, e) {
                var i = t.get("parallelIndex");
                return null != i && e.getComponent("parallel", i) === this
            },
            setAxisExpand: function (t) {
                n.each(["axisExpandable", "axisExpandCenter", "axisExpandCount", "axisExpandWidth"], function (e) {
                    t.hasOwnProperty(e) && (this.option[e] = t[e])
                }, this)
            },
            _initDimensions: function () {
                var t = this.dimensions = [], e = this.parallelAxisIndex = [], i = n.filter(this.dependentModels.parallelAxis, function (t) {
                    return t.get("parallelIndex") === this.componentIndex
                });
                n.each(i, function (i) {
                    t.push("dim" + i.get("dim")), e.push(i.componentIndex)
                })
            }
        })
    }, function (t, e, i) {
        function n(t) {
            if (!t.parallel) {
                var e = !1;
                r.each(t.series, function (t) {
                    t && "parallel" === t.type && (e = !0)
                }), e && (t.parallel = [{}])
            }
        }

        function o(t) {
            var e = a.normalizeToArray(t.parallelAxis);
            r.each(e, function (e) {
                if (r.isObject(e)) {
                    var i = e.parallelIndex || 0, n = a.normalizeToArray(t.parallel)[i];
                    n && n.parallelAxisDefault && r.merge(e, n.parallelAxisDefault, !1)
                }
            })
        }

        var r = i(1), a = i(6);
        t.exports = function (t) {
            n(t), o(t)
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            e = e || [0, 360], r.call(this, "angle", t, e), this.type = "category"
        }

        var o = i(1), r = i(42);
        n.prototype = {
            constructor: n,
            dataToAngle: r.prototype.dataToCoord,
            angleToData: r.prototype.coordToData
        }, o.inherits(n, r), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(1), r = i(13), a = i(53), s = r.extend({type: "polarAxis", axis: null});
        o.merge(s.prototype, i(52)), o.merge(s.prototype, i(83));
        var l = {
            angle: {startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: {rotate: !1}},
            radius: {splitNumber: 5}
        };
        a("angle", s, n, l.angle), a("radius", s, n, l.radius)
    }, function (t, e, i) {
        "use strict";
        var n = i(373), o = i(369), r = function (t) {
            this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new n, this._angleAxis = new o
        };
        r.prototype = {
            constructor: r, type: "polar", dimensions: ["radius", "angle"], containPoint: function (t) {
                var e = this.pointToCoord(t);
                return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
            }, containData: function (t) {
                return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
            }, getAxis: function (t) {
                return this["_" + t + "Axis"]
            }, getAxesByScale: function (t) {
                var e = [], i = this._angleAxis, n = this._radiusAxis;
                return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e
            }, getAngleAxis: function () {
                return this._angleAxis
            }, getRadiusAxis: function () {
                return this._radiusAxis
            }, getOtherAxis: function (t) {
                var e = this._angleAxis;
                return t === e ? this._radiusAxis : e
            }, getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
            }, dataToPoints: function (t) {
                return t.mapArray(this.dimensions, function (t, e) {
                    return this.dataToPoint([t, e])
                }, this)
            }, dataToPoint: function (t, e) {
                return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
            }, pointToData: function (t, e) {
                var i = this.pointToCoord(t);
                return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
            }, pointToCoord: function (t) {
                var e = t[0] - this.cx, i = t[1] - this.cy, n = this.getAngleAxis(), o = n.getExtent(), r = Math.min(o[0], o[1]), a = Math.max(o[0], o[1]);
                n.inverse ? r = a - 360 : a = r + 360;
                var s = Math.sqrt(e * e + i * i);
                e /= s, i /= s;
                for (var l = Math.atan2(-i, e) / Math.PI * 180, u = l < r ? 1 : -1; l < r || l > a;)l += 360 * u;
                return [s, l]
            }, coordToPoint: function (t) {
                var e = t[0], i = t[1] / 180 * Math.PI, n = Math.cos(i) * e + this.cx, o = -Math.sin(i) * e + this.cy;
                return [n, o]
            }
        }, t.exports = r
    }, function (t, e, i) {
        "use strict";
        i(370), i(2).extendComponentModel({
            type: "polar",
            dependencies: ["polarAxis", "angleAxis"],
            coordinateSystem: null,
            findAxisModel: function (t) {
                var e, i = this.ecModel;
                return i.eachComponent(t, function (t) {
                    var n = i.queryComponents({
                        mainType: "polar",
                        index: t.getShallow("polarIndex"),
                        id: t.getShallow("polarId")
                    })[0];
                    n === this && (e = t)
                }, this), e
            },
            defaultOption: {zlevel: 0, z: 0, center: ["50%", "50%"], radius: "80%"}
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            r.call(this, "radius", t, e), this.type = "category"
        }

        var o = i(1), r = i(42);
        n.prototype = {
            constructor: n,
            dataToRadius: r.prototype.dataToCoord,
            radiusToData: r.prototype.coordToData
        }, o.inherits(n, r), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            r.call(this, t, e, i), this.type = "value", this.angle = 0, this.name = "", this.model
        }

        var o = i(1), r = i(42);
        o.inherits(n, r), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            this._model = t, this.dimensions = [], this._indicatorAxes = o.map(t.getIndicatorModels(), function (t, e) {
                var i = "indicator_" + e, n = new r(i, new a);
                return n.name = t.get("name"), n.model = t, t.axis = n, this.dimensions.push(i), n
            }, this), this.resize(t, i), this.cx, this.cy, this.r, this.startAngle
        }

        var o = i(1), r = i(374), a = i(38), s = i(4), l = i(22);
        n.prototype.getIndicatorAxes = function () {
            return this._indicatorAxes
        }, n.prototype.dataToPoint = function (t, e) {
            var i = this._indicatorAxes[e];
            return this.coordToPoint(i.dataToCoord(t), e)
        }, n.prototype.coordToPoint = function (t, e) {
            var i = this._indicatorAxes[e], n = i.angle, o = this.cx + t * Math.cos(n), r = this.cy - t * Math.sin(n);
            return [o, r]
        }, n.prototype.pointToData = function (t) {
            var e = t[0] - this.cx, i = t[1] - this.cy, n = Math.sqrt(e * e + i * i);
            e /= n, i /= n;
            for (var o, r = Math.atan2(-i, e), a = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
                var u = this._indicatorAxes[l], h = Math.abs(r - u.angle);
                h < a && (o = u, s = l, a = h)
            }
            return [s, +(o && o.coodToData(n))]
        }, n.prototype.resize = function (t, e) {
            var i = t.get("center"), n = e.getWidth(), r = e.getHeight(), a = Math.min(n, r) / 2;
            this.cx = s.parsePercent(i[0], n), this.cy = s.parsePercent(i[1], r), this.startAngle = t.get("startAngle") * Math.PI / 180, this.r = s.parsePercent(t.get("radius"), a), o.each(this._indicatorAxes, function (t, e) {
                t.setExtent(0, this.r);
                var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
                i = Math.atan2(Math.sin(i), Math.cos(i)), t.angle = i
            }, this)
        }, n.prototype.update = function (t, e) {
            function i(t) {
                var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)), i = t / e;
                return 2 === i ? i = 5 : i *= 2, i * e
            }

            var n = this._indicatorAxes, r = this._model;
            o.each(n, function (t) {
                t.scale.setExtent(1 / 0, -(1 / 0))
            }), t.eachSeriesByType("radar", function (e, i) {
                if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === r) {
                    var a = e.getData();
                    o.each(n, function (t) {
                        t.scale.unionExtent(a.getDataExtent(t.dim))
                    })
                }
            }, this);
            var a = r.get("splitNumber");
            o.each(n, function (t, e) {
                var n = l.getScaleExtent(t, t.model);
                l.niceScaleExtent(t, t.model);
                var o = t.model, r = t.scale, u = o.get("min"), h = o.get("max"), c = r.getInterval();
                if (null != u && null != h)r.setInterval((h - u) / a); else if (null != u) {
                    var d;
                    do d = u + c * a, r.setExtent(+u, d), r.setInterval(c), c = i(c); while (d < n[1] && isFinite(d) && isFinite(n[1]))
                } else if (null != h) {
                    var f;
                    do f = h - c * a, r.setExtent(f, +h), r.setInterval(c), c = i(c); while (f > n[0] && isFinite(f) && isFinite(n[0]))
                } else {
                    var p = r.getTicks().length - 1;
                    p > a && (c = i(c));
                    var g = Math.round((n[0] + n[1]) / 2 / c) * c, m = Math.round(a / 2);
                    r.setExtent(s.round(g - m * c), s.round(g + (a - m) * c)), r.setInterval(c)
                }
            })
        }, n.dimensions = [], n.create = function (t, e) {
            var i = [];
            return t.eachComponent("radar", function (o) {
                var r = new n(o, t, e);
                i.push(r), o.coordinateSystem = r
            }), t.eachSeriesByType("radar", function (t) {
                "radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0])
            }), i
        }, i(23).register("radar", n), t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            return s.defaults({show: e}, t)
        }

        var o = i(82), r = o.valueAxis, a = i(10), s = i(1), l = i(52), u = i(2).extendComponentModel({
            type: "radar",
            optionUpdated: function () {
                var t = this.get("boundaryGap"), e = this.get("splitNumber"), i = this.get("scale"), n = this.get("axisLine"), o = this.get("axisTick"), r = this.get("axisLabel"), u = this.get("name.textStyle"), h = this.get("name.show"), c = this.get("name.formatter"), d = this.get("nameGap"), f = this.get("triggerEvent"), p = s.map(this.get("indicator") || [], function (p) {
                    if (null != p.max && p.max > 0 && !p.min ? p.min = 0 : null != p.min && p.min < 0 && !p.max && (p.max = 0), p = s.merge(s.clone(p), {
                            boundaryGap: t,
                            splitNumber: e,
                            scale: i,
                            axisLine: n,
                            axisTick: o,
                            axisLabel: r,
                            name: p.text,
                            nameLocation: "end",
                            nameGap: d,
                            nameTextStyle: u,
                            triggerEvent: f
                        }, !1), h || (p.name = ""), "string" == typeof c) {
                        var g = p.name;
                        p.name = c.replace("{value}", null != g ? g : "")
                    } else"function" == typeof c && (p.name = c(p.name, p));
                    var m = s.extend(new a(p, null, this.ecModel), l);
                    return m.mainType = "radar", m.componentIndex = this.componentIndex, m
                }, this);
                this.getIndicatorModels = function () {
                    return p
                }
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                center: ["50%", "50%"],
                radius: "75%",
                startAngle: 90,
                name: {show: !0},
                boundaryGap: [0, 0],
                splitNumber: 5,
                nameGap: 15,
                scale: !1,
                shape: "polygon",
                axisLine: s.merge({lineStyle: {color: "#bbb"}}, r.axisLine),
                axisLabel: n(r.axisLabel, !1),
                axisTick: n(r.axisTick, !1),
                splitLine: n(r.splitLine, !0),
                splitArea: n(r.splitArea, !0),
                indicator: []
            }
        });
        t.exports = u
    }, function (t, e, i) {
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(13), r = i(53), a = i(1), s = o.extend({
            type: "singleAxis",
            layoutMode: "box",
            axis: null,
            coordinateSystem: null
        }), l = {
            left: "5%",
            top: "5%",
            right: "5%",
            bottom: "5%",
            type: "value",
            position: "bottom",
            orient: "horizontal",
            axisLine: {show: !0, lineStyle: {width: 2, type: "solid"}},
            axisTick: {show: !0, length: 6, lineStyle: {width: 2}},
            axisLabel: {show: !0, interval: "auto"},
            splitLine: {show: !0, lineStyle: {type: "dashed", opacity: .2}}
        };
        a.merge(s.prototype, i(52)), r("single", s, n, l), t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            this.dimension = "x", this.dimensions = ["x"], this._axis = null, this._rect, this._init(t, e, i), this._model = t
        }

        var o = i(379), r = i(22), a = i(12);
        n.prototype = {
            type: "singleAxis", constructor: n, _init: function (t, e, i) {
                var n = this.dimension, a = new o(n, r.createScaleByModel(t), [0, 0], t.get("type"), t.get("position")), s = "category" === a.type;
                a.onBand = s && t.get("boundaryGap"), a.inverse = t.get("inverse"), a.orient = t.get("orient"), t.axis = a, a.model = t, this._axis = a
            }, update: function (t, e) {
                this._updateAxisFromSeries(t)
            }, _updateAxisFromSeries: function (t) {
                t.eachSeries(function (t) {
                    var e = t.getData(), i = this.dimension;
                    this._axis.scale.unionExtent(e.getDataExtent(t.coordDimToDataDim(i))), r.niceScaleExtent(this._axis, this._axis.model)
                }, this)
            }, resize: function (t, e) {
                this._rect = a.getLayoutRect({
                    left: t.get("left"),
                    top: t.get("top"),
                    right: t.get("right"),
                    bottom: t.get("bottom"),
                    width: t.get("width"),
                    height: t.get("height")
                }, {width: e.getWidth(), height: e.getHeight()}), this._adjustAxis()
            }, getRect: function () {
                return this._rect
            }, _adjustAxis: function () {
                var t = this._rect, e = this._axis, i = e.isHorizontal(), n = i ? [0, t.width] : [0, t.height], o = e.reverse ? 1 : 0;
                e.setExtent(n[o], n[1 - o]), this._updateAxisTransform(e, i ? t.x : t.y)
            }, _updateAxisTransform: function (t, e) {
                var i = t.getExtent(), n = i[0] + i[1], o = t.isHorizontal();
                t.toGlobalCoord = o ? function (t) {
                    return t + e
                } : function (t) {
                    return n - t + e
                }, t.toLocalCoord = o ? function (t) {
                    return t - e
                } : function (t) {
                    return n - t + e
                }
            }, getAxis: function () {
                return this._axis
            }, getBaseAxis: function () {
                return this._axis
            }, containPoint: function (t) {
                var e = this.getRect(), i = this.getAxis(), n = i.orient;
                return "horizontal" === n ? i.contain(i.toLocalCoord(t[0])) && t[1] >= e.y && t[1] <= e.y + e.height : i.contain(i.toLocalCoord(t[1])) && t[0] >= e.y && t[0] <= e.y + e.height
            }, pointToData: function (t) {
                var e = this.getAxis();
                return [e.coordToData(e.toLocalCoord(t["horizontal" === e.orient ? 0 : 1]))]
            }, dataToPoint: function (t) {
                var e = this.getAxis(), i = this.getRect(), n = [], o = "horizontal" === e.orient ? 0 : 1;
                return n[o] = e.toGlobalCoord(e.dataToCoord(+t)), n[1 - o] = 0 === o ? i.y + i.height / 2 : i.x + i.width / 2, n
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = i(42), r = i(22), a = function (t, e, i, n, r) {
            o.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom", this.orient = null, this._labelInterval = null
        };
        a.prototype = {
            constructor: a, model: null, isHorizontal: function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, getLabelInterval: function () {
                var t = this._labelInterval;
                if (!t) {
                    var e = this.model, i = e.getModel("axisLabel"), o = i.get("interval");
                    if ("category" !== this.type || "auto" !== o)return t = this._labelInterval = "auto" === o ? 0 : o;
                    t = this._labelInterval = r.getAxisLabelInterval(n.map(this.scale.getTicks(), this.dataToCoord, this), e.getFormattedLabels(), i.getModel("textStyle").getFont(), this.isHorizontal())
                }
                return t
            }, toGlobalCoord: null, toLocalCoord: null
        }, n.inherits(a, o), t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            var i = [];
            return t.eachComponent("singleAxis", function (n, r) {
                var a = new o(n, t, e);
                a.name = "single_" + r, a.resize(n, e), n.coordinateSystem = a, i.push(a)
            }), t.eachSeries(function (e) {
                if ("singleAxis" === e.get("coordinateSystem")) {
                    var i = t.queryComponents({
                        mainType: "singleAxis",
                        index: e.get("singleAxisIndex"),
                        id: e.get("singleAxisId")
                    })[0];
                    e.coordinateSystem = i.coordinateSystem
                }
            }), i
        }

        var o = i(378);
        i(23).register("single", {create: n, dimensions: o.prototype.dimensions})
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e
        }

        function o(t, e, i) {
            this.node1 = t, this.node2 = e, this.dataIndex = null == i ? -1 : i
        }

        var r = i(1), a = function (t) {
            this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
        }, s = a.prototype;
        s.type = "graph", s.isDirected = function () {
            return this._directed
        }, s.addNode = function (t, e) {
            t = t || "" + e;
            var i = this._nodesMap;
            if (!i[t]) {
                var o = new n(t, e);
                return o.hostGraph = this, this.nodes.push(o), i[t] = o, o
            }
        }, s.getNodeByIndex = function (t) {
            var e = this.data.getRawIndex(t);
            return this.nodes[e]
        }, s.getNodeById = function (t) {
            return this._nodesMap[t]
        }, s.addEdge = function (t, e, i) {
            var r = this._nodesMap, a = this._edgesMap;
            if ("number" == typeof t && (t = this.nodes[t]), "number" == typeof e && (e = this.nodes[e]), t instanceof n || (t = r[t]), e instanceof n || (e = r[e]), t && e) {
                var s = t.id + "-" + e.id;
                if (!a[s]) {
                    var l = new o(t, e, i);
                    return l.hostGraph = this, this._directed && (t.outEdges.push(l), e.inEdges.push(l)), t.edges.push(l), t !== e && e.edges.push(l), this.edges.push(l), a[s] = l, l
                }
            }
        }, s.getEdgeByIndex = function (t) {
            var e = this.edgeData.getRawIndex(t);
            return this.edges[e]
        }, s.getEdge = function (t, e) {
            t instanceof n && (t = t.id), e instanceof n && (e = e.id);
            var i = this._edgesMap;
            return this._directed ? i[t + "-" + e] : i[t + "-" + e] || i[e + "-" + t]
        }, s.eachNode = function (t, e) {
            for (var i = this.nodes, n = i.length, o = 0; o < n; o++)i[o].dataIndex >= 0 && t.call(e, i[o], o)
        }, s.eachEdge = function (t, e) {
            for (var i = this.edges, n = i.length, o = 0; o < n; o++)i[o].dataIndex >= 0 && i[o].node1.dataIndex >= 0 && i[o].node2.dataIndex >= 0 && t.call(e, i[o], o)
        }, s.breadthFirstTraverse = function (t, e, i, o) {
            if (e instanceof n || (e = this._nodesMap[e]), e) {
                for (var r = "out" === i ? "outEdges" : "in" === i ? "inEdges" : "edges", a = 0; a < this.nodes.length; a++)this.nodes[a].__visited = !1;
                if (!t.call(o, e, null))for (var s = [e]; s.length;)for (var l = s.shift(), u = l[r], a = 0; a < u.length; a++) {
                    var h = u[a], c = h.node1 === l ? h.node2 : h.node1;
                    if (!c.__visited) {
                        if (t.call(c, c, l))return;
                        s.push(c), c.__visited = !0
                    }
                }
            }
        }, s.update = function () {
            for (var t = this.data, e = this.edgeData, i = this.nodes, n = this.edges, o = 0, r = i.length; o < r; o++)i[o].dataIndex = -1;
            for (var o = 0, r = t.count(); o < r; o++)i[t.getRawIndex(o)].dataIndex = o;
            e.filterSelf(function (t) {
                var i = n[e.getRawIndex(t)];
                return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
            });
            for (var o = 0, r = n.length; o < r; o++)n[o].dataIndex = -1;
            for (var o = 0, r = e.count(); o < r; o++)n[e.getRawIndex(o)].dataIndex = o
        }, s.clone = function () {
            for (var t = new a(this._directed), e = this.nodes, i = this.edges, n = 0; n < e.length; n++)t.addNode(e[n].id, e[n].dataIndex);
            for (var n = 0; n < i.length; n++) {
                var o = i[n];
                t.addEdge(o.node1.id, o.node2.id, o.dataIndex)
            }
            return t
        }, n.prototype = {
            constructor: n, degree: function () {
                return this.edges.length
            }, inDegree: function () {
                return this.inEdges.length
            }, outDegree: function () {
                return this.outEdges.length
            }, getModel: function (t) {
                if (!(this.dataIndex < 0)) {
                    var e = this.hostGraph, i = e.data.getItemModel(this.dataIndex);
                    return i.getModel(t)
                }
            }
        }, o.prototype.getModel = function (t) {
            if (!(this.dataIndex < 0)) {
                var e = this.hostGraph, i = e.edgeData.getItemModel(this.dataIndex);
                return i.getModel(t)
            }
        };
        var l = function (t, e) {
            return {
                getValue: function (i) {
                    var n = this[t][e];
                    return n.get(n.getDimension(i || "value"), this.dataIndex)
                }, setVisual: function (i, n) {
                    this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, i, n)
                }, getVisual: function (i, n) {
                    return this[t][e].getItemVisual(this.dataIndex, i, n)
                }, setLayout: function (i, n) {
                    this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, i, n)
                }, getLayout: function () {
                    return this[t][e].getItemLayout(this.dataIndex)
                }, getGraphicEl: function () {
                    return this[t][e].getItemGraphicEl(this.dataIndex)
                }, getRawIndex: function () {
                    return this[t][e].getRawIndex(this.dataIndex)
                }
            }
        };
        r.mixin(n, l("hostGraph", "data")), r.mixin(o, l("hostGraph", "edgeData")), a.Node = n, a.Edge = o, t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = r.map(e || [], function (e) {
                return new a(e, t, t.ecModel)
            })
        }

        function o(t, e) {
            var i = e.children;
            t.parentNode !== e && (i.push(t), t.parentNode = e)
        }

        var r = i(1), a = i(10), s = i(14), l = i(242), u = i(29), h = function (t, e) {
            this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e
        };
        h.prototype = {
            constructor: h, isRemoved: function () {
                return this.dataIndex < 0
            }, eachNode: function (t, e, i) {
                "function" == typeof t && (i = e, e = t, t = null), t = t || {}, r.isString(t) && (t = {order: t});
                var n, o = t.order || "preorder", a = this[t.attr || "children"];
                "preorder" === o && (n = e.call(i, this));
                for (var s = 0; !n && s < a.length; s++)a[s].eachNode(t, e, i);
                "postorder" === o && e.call(i, this)
            }, updateDepthAndHeight: function (t) {
                var e = 0;
                this.depth = t;
                for (var i = 0; i < this.children.length; i++) {
                    var n = this.children[i];
                    n.updateDepthAndHeight(t + 1), n.height > e && (e = n.height)
                }
                this.height = e + 1
            }, getNodeById: function (t) {
                if (this.getId() === t)return this;
                for (var e = 0, i = this.children, n = i.length; e < n; e++) {
                    var o = i[e].getNodeById(t);
                    if (o)return o
                }
            }, contains: function (t) {
                if (t === this)return !0;
                for (var e = 0, i = this.children, n = i.length; e < n; e++) {
                    var o = i[e].contains(t);
                    if (o)return o
                }
            }, getAncestors: function (t) {
                for (var e = [], i = t ? this : this.parentNode; i;)e.push(i), i = i.parentNode;
                return e.reverse(), e
            }, getValue: function (t) {
                var e = this.hostTree.data;
                return e.get(e.getDimension(t || "value"), this.dataIndex)
            }, setLayout: function (t, e) {
                this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
            }, getLayout: function () {
                return this.hostTree.data.getItemLayout(this.dataIndex)
            }, getModel: function (t) {
                if (!(this.dataIndex < 0)) {
                    var e = this.hostTree, i = e.data.getItemModel(this.dataIndex), n = this.getLevelModel();
                    return i.getModel(t, (n || e.hostModel).getModel(t))
                }
            }, getLevelModel: function () {
                return (this.hostTree.levelModels || [])[this.depth]
            }, setVisual: function (t, e) {
                this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
            }, getVisual: function (t, e) {
                return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
            }, getRawIndex: function () {
                return this.hostTree.data.getRawIndex(this.dataIndex)
            }, getId: function () {
                return this.hostTree.data.getId(this.dataIndex)
            }
        }, n.prototype = {
            constructor: n, type: "tree", eachNode: function (t, e, i) {
                this.root.eachNode(t, e, i)
            }, getNodeByDataIndex: function (t) {
                var e = this.data.getRawIndex(t);
                return this._nodes[e]
            }, getNodeByName: function (t) {
                return this.root.getNodeByName(t)
            }, update: function () {
                for (var t = this.data, e = this._nodes, i = 0, n = e.length; i < n; i++)e[i].dataIndex = -1;
                for (var i = 0, n = t.count(); i < n; i++)e[t.getRawIndex(i)].dataIndex = i
            }, clearLayouts: function () {
                this.data.clearItemLayouts()
            }
        }, n.createTree = function (t, e, i) {
            function r(t, e) {
                c.push(t);
                var i = new h(t.name, a);
                e ? o(i, e) : a.root = i, a._nodes.push(i);
                var n = t.children;
                if (n)for (var s = 0; s < n.length; s++)r(n[s], i)
            }

            var a = new n(e, i), c = [];
            r(t), a.root.updateDepthAndHeight(0);
            var d = u([{name: "value"}], c), f = new s(d, e);
            return f.initData(c), l({mainData: f, struct: a, structAttr: "tree"}), a.update(), a
        }, t.exports = n
    }, function (t, e, i) {
        function n() {
            var t, e = [], i = {};
            return {
                add: function (t, n, r, a, s) {
                    return o.isString(a) && (s = a, a = 0), !i[t.id] && (i[t.id] = 1, e.push({
                        el: t,
                        target: n,
                        time: r,
                        delay: a,
                        easing: s
                    }), !0)
                }, done: function (e) {
                    return t = e, this
                }, start: function () {
                    function n() {
                        o--, o || (e.length = 0, i = {}, t && t())
                    }

                    for (var o = e.length, r = 0, a = e.length; r < a; r++) {
                        var s = e[r];
                        s.el.animateTo(s.target, s.time, s.delay, s.easing, n)
                    }
                    return this
                }
            }
        }

        var o = i(1);
        t.exports = {createWrap: n}
    }, function (t, e, i) {
        function n() {
            function t(e, n) {
                if (n >= i.length)return e;
                for (var r = -1, a = e.length, s = i[n++], l = {}, u = {}; ++r < a;) {
                    var h = s(e[r]), c = u[h];
                    c ? c.push(e[r]) : u[h] = [e[r]]
                }
                return o.each(u, function (e, i) {
                    l[i] = t(e, n)
                }), l
            }

            function e(t, r) {
                if (r >= i.length)return t;
                var a = [], s = n[r++];
                return o.each(t, function (t, i) {
                    a.push({key: i, values: e(t, r)})
                }), s ? a.sort(function (t, e) {
                    return s(t.key, e.key)
                }) : a
            }

            var i = [], n = [];
            return {
                key: function (t) {
                    return i.push(t), this
                }, sortKeys: function (t) {
                    return n[i.length - 1] = t, this
                }, entries: function (i) {
                    return e(t(i, 0), 0)
                }
            }
        }

        var o = i(1);
        t.exports = n
    }])
});