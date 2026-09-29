"use strict";
(self.webpackChunkdpi_client = self.webpackChunkdpi_client || []).push([
  [610],
  {
    98966: function (se, H, o) {
      o.d(H, {
        cG: function () {
          return u;
        },
        Fs: function () {
          return D;
        },
        SO: function () {
          return _;
        },
        om: function () {
          return f;
        },
      });
      var B = o(15009),
        v = o.n(B),
        g = o(99289),
        E = o.n(g),
        j = o(26800),
        y = function () {
          return "/api/v1";
        },
        $ = o(75981),
        _ = function () {
          return (0, j.request)("".concat(y(), "/works"), { method: "GET" });
        },
        f = (function () {
          var P = E()(
            v()().mark(function Y() {
              var z, W, V, M, S, C;
              return v()().wrap(function (I) {
                for (;;)
                  switch ((I.prev = I.next)) {
                    case 0:
                      return (
                        (I.next = 2),
                        (0, j.request)(
                          "".concat(y(), "/athenas/").concat($.Zf.SUPPLY),
                          { method: "GET" },
                        )
                      );
                    case 2:
                      return (
                        (S = I.sent),
                        (C =
                          (z =
                            S == null ||
                            (W = S.jigsaws) === null ||
                            W === void 0 ||
                            (V = W[0]) === null ||
                            V === void 0 ||
                            (M = V.content) === null ||
                            M === void 0
                              ? void 0
                              : M.medias) !== null && z !== void 0
                            ? z
                            : []),
                        I.abrupt("return", C)
                      );
                    case 5:
                    case "end":
                      return I.stop();
                  }
              }, Y);
            }),
          );
          return function () {
            return P.apply(this, arguments);
          };
        })(),
        D = function () {
          return (0, j.request)("".concat(y(), "/categories"), {
            method: "GET",
          });
        },
        u = function () {
          return (0, j.request)(
            "".concat(y(), "/athenas/").concat($.Zf.ABOUT),
            { method: "GET" },
          );
        };
    },
    10776: function (se, H, o) {
      (o.r(H),
        o.d(H, {
          default: function () {
            return ft;
          },
        }));
      var B = o(97857),
        v = o.n(B),
        g = o(67294),
        E = o(29323),
        j = o(71217),
        y = o(70405),
        $ = o(29449),
        _ = o(37222),
        f = o(47271),
        D = o(9783),
        u = o.n(D),
        P = function (t, r) {
          var e = typeof Symbol == "function" && t[Symbol.iterator];
          if (!e) return t;
          var s = e.call(t),
            n,
            i = [],
            l;
          try {
            for (; (r === void 0 || r-- > 0) && !(n = s.next()).done;)
              i.push(n.value);
          } catch (a) {
            l = { error: a };
          } finally {
            try {
              n && !n.done && (e = s.return) && e.call(s);
            } finally {
              if (l) throw l.error;
            }
          }
          return i;
        };
      function Y(t, r) {
        t === void 0 && (t = !1);
        var e = P((0, g.useState)(t), 2),
          s = e[0],
          n = e[1],
          i = (0, g.useMemo)(function () {
            var l = r === void 0 ? !t : r,
              a = function () {
                return n(function (w) {
                  return w === t ? l : t;
                });
              },
              c = function (w) {
                return n(w);
              },
              h = function () {
                return n(t);
              },
              p = function () {
                return n(l);
              };
            return { toggle: a, set: c, setLeft: h, setRight: p };
          }, []);
        return [s, i];
      }
      var z = Y,
        W = function (t, r) {
          var e = typeof Symbol == "function" && t[Symbol.iterator];
          if (!e) return t;
          var s = e.call(t),
            n,
            i = [],
            l;
          try {
            for (; (r === void 0 || r-- > 0) && !(n = s.next()).done;)
              i.push(n.value);
          } catch (a) {
            l = { error: a };
          } finally {
            try {
              n && !n.done && (e = s.return) && e.call(s);
            } finally {
              if (l) throw l.error;
            }
          }
          return i;
        };
      function V(t) {
        t === void 0 && (t = !1);
        var r = W(z(t), 2),
          e = r[0],
          s = r[1],
          n = s.toggle,
          i = s.set,
          l = (0, g.useMemo)(function () {
            var a = function () {
                return i(!0);
              },
              c = function () {
                return i(!1);
              };
            return {
              toggle: n,
              set: function (p) {
                return i(!!p);
              },
              setTrue: a,
              setFalse: c,
            };
          }, []);
        return [e, l];
      }
      var M = o(83204),
        S = function (t, r) {
          var e = typeof Symbol == "function" && t[Symbol.iterator];
          if (!e) return t;
          var s = e.call(t),
            n,
            i = [],
            l;
          try {
            for (; (r === void 0 || r-- > 0) && !(n = s.next()).done;)
              i.push(n.value);
          } catch (a) {
            l = { error: a };
          } finally {
            try {
              n && !n.done && (e = s.return) && e.call(s);
            } finally {
              if (l) throw l.error;
            }
          }
          return i;
        },
        C = function (t, r) {
          var e = r || {},
            s = e.onEnter,
            n = e.onLeave,
            i = e.onChange,
            l = S(V(!1), 2),
            a = l[0],
            c = l[1],
            h = c.setTrue,
            p = c.setFalse;
          return (
            (0, M.Z)(
              "mouseenter",
              function () {
                (s?.(), h(), i?.(!0));
              },
              { target: t },
            ),
            (0, M.Z)(
              "mouseleave",
              function () {
                (n?.(), p(), i?.(!1));
              },
              { target: t },
            ),
            a
          );
        },
        A = (function () {
          if (typeof Map < "u") return Map;
          function t(r, e) {
            var s = -1;
            return (
              r.some(function (n, i) {
                return n[0] === e ? ((s = i), !0) : !1;
              }),
              s
            );
          }
          return (function () {
            function r() {
              this.__entries__ = [];
            }
            return (
              Object.defineProperty(r.prototype, "size", {
                get: function () {
                  return this.__entries__.length;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (r.prototype.get = function (e) {
                var s = t(this.__entries__, e),
                  n = this.__entries__[s];
                return n && n[1];
              }),
              (r.prototype.set = function (e, s) {
                var n = t(this.__entries__, e);
                ~n
                  ? (this.__entries__[n][1] = s)
                  : this.__entries__.push([e, s]);
              }),
              (r.prototype.delete = function (e) {
                var s = this.__entries__,
                  n = t(s, e);
                ~n && s.splice(n, 1);
              }),
              (r.prototype.has = function (e) {
                return !!~t(this.__entries__, e);
              }),
              (r.prototype.clear = function () {
                this.__entries__.splice(0);
              }),
              (r.prototype.forEach = function (e, s) {
                s === void 0 && (s = null);
                for (var n = 0, i = this.__entries__; n < i.length; n++) {
                  var l = i[n];
                  e.call(s, l[1], l[0]);
                }
              }),
              r
            );
          })();
        })(),
        I =
          typeof window < "u" &&
          typeof document < "u" &&
          window.document === document,
        G = (function () {
          return typeof o.g < "u" && o.g.Math === Math
            ? o.g
            : typeof self < "u" && self.Math === Math
              ? self
              : typeof window < "u" && window.Math === Math
                ? window
                : Function("return this")();
        })(),
        Q = (function () {
          return typeof requestAnimationFrame == "function"
            ? requestAnimationFrame.bind(G)
            : function (t) {
                return setTimeout(function () {
                  return t(Date.now());
                }, 1e3 / 60);
              };
        })(),
        ve = 2;
      function me(t, r) {
        var e = !1,
          s = !1,
          n = 0;
        function i() {
          (e && ((e = !1), t()), s && a());
        }
        function l() {
          Q(i);
        }
        function a() {
          var c = Date.now();
          if (e) {
            if (c - n < ve) return;
            s = !0;
          } else ((e = !0), (s = !1), setTimeout(l, r));
          n = c;
        }
        return a;
      }
      var pe = 20,
        ge = [
          "top",
          "right",
          "bottom",
          "left",
          "width",
          "height",
          "size",
          "weight",
        ],
        ye = typeof MutationObserver < "u",
        xe = (function () {
          function t() {
            ((this.connected_ = !1),
              (this.mutationEventsAdded_ = !1),
              (this.mutationsObserver_ = null),
              (this.observers_ = []),
              (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
              (this.refresh = me(this.refresh.bind(this), pe)));
          }
          return (
            (t.prototype.addObserver = function (r) {
              (~this.observers_.indexOf(r) || this.observers_.push(r),
                this.connected_ || this.connect_());
            }),
            (t.prototype.removeObserver = function (r) {
              var e = this.observers_,
                s = e.indexOf(r);
              (~s && e.splice(s, 1),
                !e.length && this.connected_ && this.disconnect_());
            }),
            (t.prototype.refresh = function () {
              var r = this.updateObservers_();
              r && this.refresh();
            }),
            (t.prototype.updateObservers_ = function () {
              var r = this.observers_.filter(function (e) {
                return (e.gatherActive(), e.hasActive());
              });
              return (
                r.forEach(function (e) {
                  return e.broadcastActive();
                }),
                r.length > 0
              );
            }),
            (t.prototype.connect_ = function () {
              !I ||
                this.connected_ ||
                (document.addEventListener(
                  "transitionend",
                  this.onTransitionEnd_,
                ),
                window.addEventListener("resize", this.refresh),
                ye
                  ? ((this.mutationsObserver_ = new MutationObserver(
                      this.refresh,
                    )),
                    this.mutationsObserver_.observe(document, {
                      attributes: !0,
                      childList: !0,
                      characterData: !0,
                      subtree: !0,
                    }))
                  : (document.addEventListener(
                      "DOMSubtreeModified",
                      this.refresh,
                    ),
                    (this.mutationEventsAdded_ = !0)),
                (this.connected_ = !0));
            }),
            (t.prototype.disconnect_ = function () {
              !I ||
                !this.connected_ ||
                (document.removeEventListener(
                  "transitionend",
                  this.onTransitionEnd_,
                ),
                window.removeEventListener("resize", this.refresh),
                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                this.mutationEventsAdded_ &&
                  document.removeEventListener(
                    "DOMSubtreeModified",
                    this.refresh,
                  ),
                (this.mutationsObserver_ = null),
                (this.mutationEventsAdded_ = !1),
                (this.connected_ = !1));
            }),
            (t.prototype.onTransitionEnd_ = function (r) {
              var e = r.propertyName,
                s = e === void 0 ? "" : e,
                n = ge.some(function (i) {
                  return !!~s.indexOf(i);
                });
              n && this.refresh();
            }),
            (t.getInstance = function () {
              return (
                this.instance_ || (this.instance_ = new t()),
                this.instance_
              );
            }),
            (t.instance_ = null),
            t
          );
        })(),
        ae = function (t, r) {
          for (var e = 0, s = Object.keys(r); e < s.length; e++) {
            var n = s[e];
            Object.defineProperty(t, n, {
              value: r[n],
              enumerable: !1,
              writable: !1,
              configurable: !0,
            });
          }
          return t;
        },
        J = function (t) {
          var r = t && t.ownerDocument && t.ownerDocument.defaultView;
          return r || G;
        },
        oe = ne(0, 0, 0, 0);
      function te(t) {
        return parseFloat(t) || 0;
      }
      function le(t) {
        for (var r = [], e = 1; e < arguments.length; e++)
          r[e - 1] = arguments[e];
        return r.reduce(function (s, n) {
          var i = t["border-" + n + "-width"];
          return s + te(i);
        }, 0);
      }
      function Ce(t) {
        for (
          var r = ["top", "right", "bottom", "left"], e = {}, s = 0, n = r;
          s < n.length;
          s++
        ) {
          var i = n[s],
            l = t["padding-" + i];
          e[i] = te(l);
        }
        return e;
      }
      function Ie(t) {
        var r = t.getBBox();
        return ne(0, 0, r.width, r.height);
      }
      function Re(t) {
        var r = t.clientWidth,
          e = t.clientHeight;
        if (!r && !e) return oe;
        var s = J(t).getComputedStyle(t),
          n = Ce(s),
          i = n.left + n.right,
          l = n.top + n.bottom,
          a = te(s.width),
          c = te(s.height);
        if (
          (s.boxSizing === "border-box" &&
            (Math.round(a + i) !== r && (a -= le(s, "left", "right") + i),
            Math.round(c + l) !== e && (c -= le(s, "top", "bottom") + l)),
          !Ne(t))
        ) {
          var h = Math.round(a + i) - r,
            p = Math.round(c + l) - e;
          (Math.abs(h) !== 1 && (a -= h), Math.abs(p) !== 1 && (c -= p));
        }
        return ne(n.left, n.top, a, c);
      }
      var be = (function () {
        return typeof SVGGraphicsElement < "u"
          ? function (t) {
              return t instanceof J(t).SVGGraphicsElement;
            }
          : function (t) {
              return (
                t instanceof J(t).SVGElement && typeof t.getBBox == "function"
              );
            };
      })();
      function Ne(t) {
        return t === J(t).document.documentElement;
      }
      function Se(t) {
        return I ? (be(t) ? Ie(t) : Re(t)) : oe;
      }
      function Te(t) {
        var r = t.x,
          e = t.y,
          s = t.width,
          n = t.height,
          i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object,
          l = Object.create(i.prototype);
        return (
          ae(l, {
            x: r,
            y: e,
            width: s,
            height: n,
            top: e,
            right: r + s,
            bottom: n + e,
            left: r,
          }),
          l
        );
      }
      function ne(t, r, e, s) {
        return { x: t, y: r, width: e, height: s };
      }
      var Le = (function () {
          function t(r) {
            ((this.broadcastWidth = 0),
              (this.broadcastHeight = 0),
              (this.contentRect_ = ne(0, 0, 0, 0)),
              (this.target = r));
          }
          return (
            (t.prototype.isActive = function () {
              var r = Se(this.target);
              return (
                (this.contentRect_ = r),
                r.width !== this.broadcastWidth ||
                  r.height !== this.broadcastHeight
              );
            }),
            (t.prototype.broadcastRect = function () {
              var r = this.contentRect_;
              return (
                (this.broadcastWidth = r.width),
                (this.broadcastHeight = r.height),
                r
              );
            }),
            t
          );
        })(),
        _e = (function () {
          function t(r, e) {
            var s = Te(e);
            ae(this, { target: r, contentRect: s });
          }
          return t;
        })(),
        we = (function () {
          function t(r, e, s) {
            if (
              ((this.activeObservations_ = []),
              (this.observations_ = new A()),
              typeof r != "function")
            )
              throw new TypeError(
                "The callback provided as parameter 1 is not a function.",
              );
            ((this.callback_ = r),
              (this.controller_ = e),
              (this.callbackCtx_ = s));
          }
          return (
            (t.prototype.observe = function (r) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(r instanceof J(r).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(r) ||
                  (e.set(r, new Le(r)),
                  this.controller_.addObserver(this),
                  this.controller_.refresh());
              }
            }),
            (t.prototype.unobserve = function (r) {
              if (!arguments.length)
                throw new TypeError("1 argument required, but only 0 present.");
              if (!(typeof Element > "u" || !(Element instanceof Object))) {
                if (!(r instanceof J(r).Element))
                  throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                !e.has(r) ||
                  (e.delete(r),
                  e.size || this.controller_.removeObserver(this));
              }
            }),
            (t.prototype.disconnect = function () {
              (this.clearActive(),
                this.observations_.clear(),
                this.controller_.removeObserver(this));
            }),
            (t.prototype.gatherActive = function () {
              var r = this;
              (this.clearActive(),
                this.observations_.forEach(function (e) {
                  e.isActive() && r.activeObservations_.push(e);
                }));
            }),
            (t.prototype.broadcastActive = function () {
              if (!!this.hasActive()) {
                var r = this.callbackCtx_,
                  e = this.activeObservations_.map(function (s) {
                    return new _e(s.target, s.broadcastRect());
                  });
                (this.callback_.call(r, e, r), this.clearActive());
              }
            }),
            (t.prototype.clearActive = function () {
              this.activeObservations_.splice(0);
            }),
            (t.prototype.hasActive = function () {
              return this.activeObservations_.length > 0;
            }),
            t
          );
        })(),
        de = typeof WeakMap < "u" ? new WeakMap() : new A(),
        ue = (function () {
          function t(r) {
            if (!(this instanceof t))
              throw new TypeError("Cannot call a class as a function.");
            if (!arguments.length)
              throw new TypeError("1 argument required, but only 0 present.");
            var e = xe.getInstance(),
              s = new we(r, e, this);
            de.set(this, s);
          }
          return t;
        })();
      ["observe", "unobserve", "disconnect"].forEach(function (t) {
        ue.prototype[t] = function () {
          var r;
          return (r = de.get(this))[t].apply(r, arguments);
        };
      });
      var Ee = (function () {
          return typeof G.ResizeObserver < "u" ? G.ResizeObserver : ue;
        })(),
        Me = Ee,
        je = o(27347),
        Pe = o(48002),
        Ae = o(52982),
        Oe = o(59682),
        He = o(40351),
        De = (0, He.Z)(g.useLayoutEffect),
        ze = De,
        We = Ae.Z ? ze : Oe.Z,
        Ge = We,
        Fe = function (t, r) {
          var e = typeof Symbol == "function" && t[Symbol.iterator];
          if (!e) return t;
          var s = e.call(t),
            n,
            i = [],
            l;
          try {
            for (; (r === void 0 || r-- > 0) && !(n = s.next()).done;)
              i.push(n.value);
          } catch (a) {
            l = { error: a };
          } finally {
            try {
              n && !n.done && (e = s.return) && e.call(s);
            } finally {
              if (l) throw l.error;
            }
          }
          return i;
        };
      function Ze(t) {
        var r = Fe((0, je.Z)(), 2),
          e = r[0],
          s = r[1];
        return (
          Ge(
            function () {
              var n = (0, Pe.n)(t);
              if (!!n) {
                var i = new Me(function (l) {
                  l.forEach(function (a) {
                    var c = a.target,
                      h = c.clientWidth,
                      p = c.clientHeight;
                    s({ width: h, height: p });
                  });
                });
                return (
                  i.observe(n),
                  function () {
                    i.disconnect();
                  }
                );
              }
            },
            [],
            t,
          ),
          e
        );
      }
      var $e = Ze,
        Ue = o(94184),
        k = o.n(Ue),
        K = {
          wrap: "wrap___YZKN6",
          top: "top___mTANI",
          content: "content___PUW5s",
          item: "item___xuvlV",
          title: "title___Tun4b",
          bold: "bold___l9qPb",
        },
        d = o(85893),
        ht = function t(r, e) {
          return r < e ? t(r - e, e) : r;
        },
        Be = (0, E.Pi)(function (t) {
          var r = t.list,
            e = r === void 0 ? [] : r,
            s = t.currIndex,
            n = s === void 0 ? -1 : s,
            i = t.leftScrollTop,
            l = i === void 0 ? 0 : i,
            a = t.isMiddleNeedReset,
            c = t.setIsMiddleNeedReset,
            h = t.onItem,
            p = (0, g.useRef)(null),
            b = (0, g.useRef)(null),
            w = (0, g.useRef)(null),
            F = (0, g.useRef)(null),
            Z = C(p),
            ee = $e(w),
            U = $e(F),
            x = function () {
              var L;
              (L = b.current) === null || L === void 0 || L.start();
            },
            N = function () {
              var L;
              (L = b.current) === null || L === void 0 || L.stop();
            };
          return (
            (0, g.useEffect)(
              function () {
                if (a) {
                  var T;
                  (N(),
                    (T = b.current) === null ||
                      T === void 0 ||
                      T.translateTo(0),
                    c(!1));
                  return;
                }
                if (Z) {
                  N();
                  return;
                }
                x();
              },
              [Z, a],
            ),
            (0, d.jsxs)("div", {
              className: K.wrap,
              ref: p,
              children: [
                (0, d.jsx)("div", { className: K.top }),
                (0, d.jsx)(_.Marquee, {
                  ref: b,
                  className: K.content,
                  children: e.map(function (T, L) {
                    var he;
                    return (0, d.jsxs)(
                      "div",
                      {
                        className: K.item,
                        ref: L === 0 ? w : void 0,
                        onClick: function () {
                          return h?.(L);
                        },
                        children: [
                          (0, d.jsx)(_.MagicImage, {
                            rootStyle: {
                              width: (0, f.oV)(170),
                              height: (0, f.oV)(170),
                            },
                            hashName:
                              (he = T.cover) === null || he === void 0
                                ? void 0
                                : he.hashName,
                          }),
                          (0, d.jsx)("div", {
                            className: k()(K.title, u()({}, K.bold, n === L)),
                            ref: L === 0 ? F : void 0,
                            children: (0, f.hD)(L + 1),
                          }),
                        ],
                      },
                      T.id,
                    );
                  }),
                }),
              ],
            })
          );
        }),
        Ye = Be,
        ce = o(26800),
        m = {
          wrap: "wrap___E3PBA",
          top: "top___KI_9Q",
          topLeft: "topLeft___lkVIv",
          topLeftCategory: "topLeftCategory___j6vcY",
          topLeftCategoryItem: "topLeftCategoryItem___CRtvf",
          topLeftCategoryItem__checked: "topLeftCategoryItem__checked___IOxsB",
          topRight: "topRight___OOk0J",
          center: "center___F8M54",
          item: "item___QubxR",
          itemTop: "itemTop___VPQvw",
          itemTopLeft: "itemTopLeft___SBG8u",
          itemTopMiddle: "itemTopMiddle___wPCgI",
          itemTopRight: "itemTopRight___jbDse",
          itemHide: "itemHide___z9D6b",
          itemHideLeft: "itemHideLeft___bnfhh",
          itemHideMiddle: "itemHideMiddle___Lew63",
          itemHideRight: "itemHideRight___vpHVS",
          show: "show___L9pCp",
          link: "link___eysXu",
        },
        ke = 1310,
        Ve = 840,
        Je = (0, E.Pi)(function (t) {
          var r,
            e,
            s,
            n = t.item,
            i = t.toggleCollapse,
            l = (0, ce.useIntl)(),
            a = l.formatMessage;
          return (0, d.jsxs)(
            "div",
            {
              className: m.item,
              id: "right-item-".concat(n.id),
              children: [
                (0, d.jsxs)("div", {
                  className: m.itemTop,
                  children: [
                    (0, d.jsxs)("div", {
                      className: m.itemTopLeft,
                      children: [
                        n[(0, f.ti)("name")],
                        n.link &&
                          (0, d.jsxs)("a", {
                            className: m.link,
                            href: n.link,
                            target: "_blank",
                            children: [
                              (0, d.jsx)("span", {
                                style: { paddingLeft: "4px" },
                                children: "(",
                              }),
                              a({ id: "dpi.link" }),
                              (0, d.jsx)("span", { children: ")" }),
                            ],
                          }),
                      ],
                    }),
                    (0, d.jsxs)("div", {
                      className: m.itemTopMiddle,
                      onClick: function () {
                        i(n.id);
                      },
                      children: [
                        (0, d.jsx)("span", {
                          style: { color: "#959595" },
                          children: a({ id: "dpi.type" }),
                        }),
                        (0, d.jsx)("span", {
                          className: k()(
                            "v-html-text",
                            "v-html-text__left-space",
                          ),
                          dangerouslySetInnerHTML: {
                            __html: (0, f.YU)(
                              (r = n.categories) === null ||
                                r === void 0 ||
                                (e = r.map(function (c) {
                                  return c[(0, f.ti)("name")];
                                })) === null ||
                                e === void 0
                                ? void 0
                                : e.join(", "),
                            ),
                          },
                        }),
                      ],
                    }),
                    (0, d.jsx)("div", {
                      className: m.itemTopRight,
                      onClick: function () {
                        i(n.id);
                      },
                      children: a({ id: "dpi.info" }),
                    }),
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: k()(m.itemHide, u()({}, m.show, !n.isCollapse)),
                  children: [
                    (0, d.jsxs)("div", {
                      className: m.itemHideLeft,
                      children: [
                        (0, d.jsxs)("div", {
                          className: m.normal,
                          children: [
                            (0, d.jsx)("span", {
                              style: { color: "#959595" },
                              children: a({ id: "dpi.client" }),
                            }),
                            (0, d.jsx)("span", {
                              className: k()(
                                "v-html-text",
                                "v-html-text__left-space",
                              ),
                              dangerouslySetInnerHTML: {
                                __html: (0, f.YU)(n[(0, f.ti)("client")]),
                              },
                            }),
                          ],
                        }),
                        (0, d.jsxs)("div", {
                          className: m.normal,
                          children: [
                            (0, d.jsx)("span", {
                              style: { color: "#959595" },
                              children: a({ id: "dpi.year" }),
                            }),
                            (0, d.jsx)("span", {
                              className: k()(
                                "v-html-text",
                                "v-html-text__left-space",
                              ),
                              dangerouslySetInnerHTML: {
                                __html: (0, f.YU)(n.year),
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, d.jsx)("div", {
                      className: m.itemHideMiddle,
                      onClick: function () {
                        i(n.id);
                      },
                      children:
                        (s = n[(0, f.ti)("extends")]) === null || s === void 0
                          ? void 0
                          : s.map(function (c, h) {
                              return (0, d.jsxs)(
                                "div",
                                {
                                  className: m.normal,
                                  children: [
                                    (0, d.jsx)("span", {
                                      style: { color: "#959595" },
                                      children: c.param,
                                    }),
                                    (0, d.jsx)("span", {
                                      className: k()(
                                        "v-html-text",
                                        "v-html-text__left-space",
                                      ),
                                      dangerouslySetInnerHTML: {
                                        __html: (0, f.YU)(c.value),
                                      },
                                    }),
                                  ],
                                },
                                h,
                              );
                            }),
                    }),
                    (0, d.jsx)("div", {
                      className: m.itemHideRight,
                      onClick: function () {
                        i(n.id);
                      },
                      dangerouslySetInnerHTML: {
                        __html: (0, f.YU)(n[(0, f.ti)("description")] || ""),
                      },
                    }),
                  ],
                }),
                (0, d.jsx)("div", { style: { width: "100%", height: "20px" } }),
                (0, d.jsx)(_.Carousel, {
                  eventId: n.id,
                  medias: n.medias,
                  SWIPER_HEIGHT: Ve,
                  SECTION_WIDTH: ke,
                  mobile: !1,
                }),
              ],
            },
            n.id,
          );
        }),
        Xe = (0, E.Pi)(function (t) {
          var r = t.categories,
            e = r === void 0 ? [] : r,
            s = t.currCategoryId,
            n = t.onCategory,
            i = t.list,
            l = i === void 0 ? [] : i,
            a = t.currIndex,
            c = a === void 0 ? -1 : a,
            h = t.isRightNeedReset,
            p = t.toggleCollapse,
            b = t.calRandomIndex,
            w = t.setShowRandomImg,
            F = t.setIsRightNeedReset,
            Z = (0, ce.useIntl)(),
            ee = Z.formatMessage,
            U = (0, g.useRef)(null);
          return (
            (0, g.useEffect)(
              function () {
                if (U.current) {
                  if (h) {
                    ((U.current.scrollTop = 0), F(!1));
                    return;
                  }
                  if (c !== -1) {
                    var x, N;
                    (x = document.getElementById(
                      "right-item-".concat(
                        (N = l[c]) === null || N === void 0 ? void 0 : N.id,
                      ),
                    )) === null ||
                      x === void 0 ||
                      x.scrollIntoView({ behavior: "smooth" });
                  }
                }
              },
              [c, h],
            ),
            (0, d.jsxs)("div", {
              className: m.wrap,
              style: { width: (0, f.oV)(ke) },
              children: [
                (0, d.jsxs)("div", {
                  className: m.top,
                  children: [
                    (0, d.jsx)("div", {
                      className: m.topLeft,
                      children: (0, d.jsx)("div", {
                        className: m.topLeftCategory,
                        children: e.map(function (x, N) {
                          return (0, d.jsxs)(
                            g.Fragment,
                            {
                              children: [
                                N !== 0 &&
                                  (0, d.jsx)("span", { children: ", " }),
                                (0, d.jsx)("span", {
                                  className: k()(
                                    m.topLeftCategoryItem,
                                    u()(
                                      {},
                                      m.topLeftCategoryItem__checked,
                                      s === x.id,
                                    ),
                                  ),
                                  onClick: function () {
                                    return n(x.id);
                                  },
                                  children: x[(0, f.ti)("name")],
                                }),
                              ],
                            },
                            x.id,
                          );
                        }),
                      }),
                    }),
                    (0, d.jsx)("div", {
                      className: m.topRight,
                      onClick: function (N) {
                        (N.stopPropagation(), b(), w(!0));
                      },
                      children: ee({ id: "dpi.open-supply" }),
                    }),
                  ],
                }),
                (0, d.jsx)("div", {
                  className: m.center,
                  ref: U,
                  children: l.map(function (x) {
                    return (0, d.jsx)(Je, {
                      item: x,
                      key: x.id,
                      toggleCollapse: p,
                    });
                  }),
                }),
              ],
            })
          );
        }),
        Qe = Xe,
        Ke = o(55375),
        X = o(75981),
        R = {
          wrap: "wrap___w9f2L",
          top: "top___ZMmMH",
          topTitle: "topTitle___zVXmV",
          center: "center___VdsXD",
          desc: "desc___N0MlC",
          spec: "spec___ZMlIp",
          contact: "contact___d_DhG",
          title: "title___dajdA",
          list: "list___uGXAE",
          listItem: "listItem___JMnLv",
          listItemLeft: "listItemLeft___xmI_w",
          listItemRight: "listItemRight___dGPds",
          bottom: "bottom___OijZk",
          bottomText: "bottomText____QRej",
        },
        qe = (0, E.Pi)(function (t) {
          var r = t.info,
            e = r === void 0 ? {} : r,
            s = t.onStudioClick,
            n = (0, ce.useIntl)(),
            i = n.formatMessage,
            l = (0, g.useRef)(null);
          return (0, d.jsxs)("div", {
            className: R.wrap,
            children: [
              (0, d.jsx)("div", {
                className: R.top,
                children: (0, d.jsx)("div", {
                  className: R.topTitle,
                  onClick: function () {
                    (l.current && (l.current.scrollTop = 0), s());
                  },
                  children: i({ id: "dpi.title" }),
                }),
              }),
              (0, d.jsxs)("div", {
                className: R.center,
                ref: l,
                children: [
                  (0, d.jsx)("div", {
                    className: k()(R.desc, R.spec),
                    dangerouslySetInnerHTML: {
                      __html: (0, f.YU)(e[(0, f.ti)("description")] || ""),
                    },
                  }),
                  (e.jigsaws || []).map(function (a) {
                    var c;
                    return (0, d.jsxs)(
                      g.Fragment,
                      {
                        children: [
                          (0, d.jsx)("p", {
                            className: R.title,
                            children: a[(0, f.ti)("name")],
                          }),
                          [X.kb.RICH_TEXT, X.kb.CONTACT].includes(a.mode) &&
                            (0, d.jsx)("div", {
                              className: k()(
                                R.desc,
                                u()({}, R.contact, a.mode === X.kb.CONTACT),
                              ),
                              dangerouslySetInnerHTML: {
                                __html: (0, f.YU)(
                                  a.content[(0, f.ti)("description")] || "",
                                ),
                              },
                            }),
                          a.mode === X.kb.ROWS &&
                            (0, d.jsx)("div", {
                              className: R.list,
                              children:
                                (c = a.content.rows) === null || c === void 0
                                  ? void 0
                                  : c.map(function (h, p) {
                                      return (0, d.jsxs)(
                                        "div",
                                        {
                                          className: R.listItem,
                                          children: [
                                            (0, d.jsx)("span", {
                                              className: R.listItemLeft,
                                              children: h.year,
                                            }),
                                            (0, d.jsx)("span", {
                                              className: R.listItemRight,
                                              dangerouslySetInnerHTML: {
                                                __html: (0, f.YU)(
                                                  h[(0, f.ti)("description")],
                                                ),
                                              },
                                            }),
                                          ],
                                        },
                                        p,
                                      );
                                    }),
                            }),
                        ],
                      },
                      a.id,
                    );
                  }),
                ],
              }),
              (0, d.jsx)("div", {
                className: R.bottom,
                children: (0, d.jsx)("span", {
                  className: R.bottomText,
                  children: Ke.nK,
                }),
              }),
            ],
          });
        }),
        et = qe,
        tt = o(19632),
        nt = o.n(tt),
        rt = o(15009),
        O = o.n(rt),
        it = o(99289),
        re = o.n(it),
        st = o(12444),
        at = o.n(st),
        ot = o(72004),
        lt = o.n(ot),
        q = o(68949),
        dt = o(37384),
        ie = o(98966),
        ut = (function () {
          function t(r) {
            var e = this,
              s = r.app;
            (at()(this, t),
              u()(this, "app", void 0),
              u()(this, "load", new dt.m({ status: "loading" })),
              u()(this, "works", []),
              u()(this, "categories", []),
              u()(this, "currCategoryId", -1),
              u()(this, "showDetail", !1),
              u()(this, "currIndex", -1),
              u()(this, "lastIndex", -1),
              u()(this, "showRandomImg", !1),
              u()(this, "randomImgList", []),
              u()(this, "randomIndex", -1),
              u()(this, "aboutInfo", {}),
              u()(this, "leftScrollTop", 0),
              u()(this, "isMiddleNeedReset", !1),
              u()(this, "isRightNeedReset", !1),
              u()(this, "setWorks", function (n) {
                e.works = n
                  .map(function (i) {
                    return v()(v()({}, i), {}, { isCollapse: !0 });
                  })
                  .filter(function (i) {
                    return !!i.nameCn || !!i.nameEn;
                  });
              }),
              u()(this, "setRandomImgList", function (n) {
                e.randomImgList = n;
              }),
              u()(this, "calRandomIndex", function () {
                e.randomIndex = Math.floor(
                  Math.random() * e.randomImgList.length,
                );
              }),
              u()(this, "setCurrIndex", function (n) {
                var i =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !0;
                ((e.currIndex = n), i && (e.lastIndex = n));
              }),
              u()(this, "setShowRandomImg", function (n) {
                e.showRandomImg = n;
              }),
              u()(this, "setAboutInfo", function (n) {
                var i, l, a, c;
                e.aboutInfo = v()(
                  v()({}, n || {}),
                  {},
                  {
                    descriptionCn: (0, f.ZE)(
                      (i = n.descriptionCn) !== null && i !== void 0 ? i : "",
                    ),
                    descriptionEn: (0, f.ZE)(
                      (l = n.descriptionEn) !== null && l !== void 0 ? l : "",
                    ),
                    jigsaws:
                      (a =
                        (c = n.jigsaws) === null || c === void 0
                          ? void 0
                          : c.map(function (h) {
                              var p, b, w, F, Z, ee, U;
                              return v()(
                                v()(
                                  v()({}, h),
                                  [X.kb.RICH_TEXT, X.kb.CONTACT].includes(
                                    h.mode,
                                  ) && {
                                    content: {
                                      descriptionCn: (0, f.ZE)(
                                        (p =
                                          (b = h.content) === null ||
                                          b === void 0
                                            ? void 0
                                            : b.descriptionCn) !== null &&
                                          p !== void 0
                                          ? p
                                          : "",
                                      ),
                                      descriptionEn: (0, f.ZE)(
                                        (w =
                                          (F = h.content) === null ||
                                          F === void 0
                                            ? void 0
                                            : F.descriptionEn) !== null &&
                                          w !== void 0
                                          ? w
                                          : "",
                                      ),
                                    },
                                  },
                                ),
                                h.mode === X.kb.ROWS && {
                                  content: {
                                    rows:
                                      (Z =
                                        (ee = h.content) === null ||
                                        ee === void 0 ||
                                        (U = ee.rows) === null ||
                                        U === void 0
                                          ? void 0
                                          : U.map(function (x) {
                                              var N, T;
                                              return v()(
                                                v()({}, x),
                                                {},
                                                {
                                                  descriptionCn: (0, f.ZE)(
                                                    (N = x.descriptionCn) !==
                                                      null && N !== void 0
                                                      ? N
                                                      : "",
                                                  ),
                                                  descriptionEn: (0, f.ZE)(
                                                    (T = x.descriptionEn) !==
                                                      null && T !== void 0
                                                      ? T
                                                      : "",
                                                  ),
                                                },
                                              );
                                            })) !== null && Z !== void 0
                                        ? Z
                                        : [],
                                  },
                                },
                              );
                            })) !== null && a !== void 0
                        ? a
                        : [],
                  },
                );
              }),
              u()(this, "setCategories", function (n) {
                e.categories = n;
              }),
              u()(this, "setCurrCategoryId", function (n) {
                e.currCategoryId = n;
              }),
              u()(this, "setLeftScrollTop", function (n) {
                e.leftScrollTop = n;
              }),
              u()(this, "setIsMiddleNeedReset", function (n) {
                e.isMiddleNeedReset = n;
              }),
              u()(this, "setIsRightNeedReset", function (n) {
                e.isRightNeedReset = n;
              }),
              u()(this, "toggleCollapse", function (n) {
                typeof n > "u" ||
                  (e.works = e.works.map(function (i) {
                    return v()(
                      v()({}, i),
                      {},
                      { isCollapse: n === i.id ? !i.isCollapse : i.isCollapse },
                    );
                  }));
              }),
              u()(this, "onStudioClick", function () {
                (e.setCurrCategoryId(-1),
                  e.setIsMiddleNeedReset(!0),
                  e.setIsRightNeedReset(!0),
                  e.setCurrIndex(-1));
              }),
              u()(this, "onCategoryClick", function (n) {
                typeof n > "u" ||
                  (n !== e.currCategoryId &&
                    (e.setCurrCategoryId(n),
                    e.setIsMiddleNeedReset(!0),
                    e.setIsRightNeedReset(!0),
                    e.setCurrIndex(-1)));
              }),
              u()(
                this,
                "init",
                re()(
                  O()().mark(function n() {
                    return O()().wrap(
                      function (l) {
                        for (;;)
                          switch ((l.prev = l.next)) {
                            case 0:
                              if (e.load.status !== "content") {
                                l.next = 2;
                                break;
                              }
                              return l.abrupt("return");
                            case 2:
                              return (
                                (l.prev = 2),
                                e.load.showLoading(),
                                (l.next = 6),
                                Promise.all([
                                  e.fetchWorks(),
                                  e.fetchAboutInfo(),
                                  e.fetchCategories(),
                                ])
                              );
                            case 6:
                              (e.fetchRandomImgs(),
                                e.load.showContent(),
                                (l.next = 14));
                              break;
                            case 10:
                              ((l.prev = 10),
                                (l.t0 = l.catch(2)),
                                (0, f.T_)({
                                  error: l.t0,
                                  showErrorNotification: !1,
                                }),
                                e.load.showContent());
                            case 14:
                            case "end":
                              return l.stop();
                          }
                      },
                      n,
                      null,
                      [[2, 10]],
                    );
                  }),
                ),
              ),
              u()(
                this,
                "fetchWorks",
                re()(
                  O()().mark(function n() {
                    var i;
                    return O()().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return ((a.prev = 0), (a.next = 3), (0, ie.SO)());
                            case 3:
                              ((i = a.sent),
                                e.setWorks(i || []),
                                (a.next = 11));
                              break;
                            case 7:
                              ((a.prev = 7),
                                (a.t0 = a.catch(0)),
                                (0, f.T_)({
                                  error: a.t0,
                                  showErrorNotification: !1,
                                }),
                                e.setWorks([]));
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 7]],
                    );
                  }),
                ),
              ),
              u()(
                this,
                "fetchRandomImgs",
                re()(
                  O()().mark(function n() {
                    var i;
                    return O()().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return ((a.prev = 0), (a.next = 3), (0, ie.om)());
                            case 3:
                              ((i = a.sent),
                                e.setRandomImgList(i || []),
                                (a.next = 11));
                              break;
                            case 7:
                              ((a.prev = 7),
                                (a.t0 = a.catch(0)),
                                (0, f.T_)({
                                  error: a.t0,
                                  showErrorNotification: !1,
                                }),
                                e.setRandomImgList([]));
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 7]],
                    );
                  }),
                ),
              ),
              u()(
                this,
                "fetchAboutInfo",
                re()(
                  O()().mark(function n() {
                    var i;
                    return O()().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return ((a.prev = 0), (a.next = 3), (0, ie.cG)());
                            case 3:
                              ((i = a.sent),
                                e.setAboutInfo(i || {}),
                                (a.next = 11));
                              break;
                            case 7:
                              ((a.prev = 7),
                                (a.t0 = a.catch(0)),
                                (0, f.T_)({
                                  error: a.t0,
                                  showErrorNotification: !1,
                                }),
                                e.setAboutInfo({}));
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 7]],
                    );
                  }),
                ),
              ),
              u()(
                this,
                "fetchCategories",
                re()(
                  O()().mark(function n() {
                    var i;
                    return O()().wrap(
                      function (a) {
                        for (;;)
                          switch ((a.prev = a.next)) {
                            case 0:
                              return ((a.prev = 0), (a.next = 3), (0, ie.Fs)());
                            case 3:
                              ((i = a.sent),
                                e.setCategories(
                                  [
                                    {
                                      id: -1,
                                      nameCn: "\u5168\u90E8",
                                      nameEn: "ALL PROJECTS",
                                    },
                                  ].concat(nt()(i || [])),
                                ),
                                (a.next = 11));
                              break;
                            case 7:
                              ((a.prev = 7),
                                (a.t0 = a.catch(0)),
                                (0, f.T_)({
                                  error: a.t0,
                                  showErrorNotification: !1,
                                }),
                                e.setCategories([]));
                            case 11:
                            case "end":
                              return a.stop();
                          }
                      },
                      n,
                      null,
                      [[0, 7]],
                    );
                  }),
                ),
              ),
              u()(this, "dispose", function () {
                e.load.reset();
              }),
              (0, q.ky)(this, {
                isLoading: q.Fl,
                middleProps: q.Fl,
                rightProps: q.Fl,
                informationProps: q.Fl,
                randomImg: q.Fl,
              }),
              (this.app = s));
          }
          return (
            lt()(t, [
              {
                key: "isLoading",
                get: function () {
                  return this.load.status !== "content";
                },
              },
              {
                key: "middleProps",
                get: function () {
                  var e = this;
                  return {
                    list: this.works.filter(function (s) {
                      var n, i;
                      return e.currCategoryId === -1
                        ? !0
                        : ((n =
                            (i = s.categories) !== null && i !== void 0
                              ? i
                              : []) === null || n === void 0
                            ? void 0
                            : n.findIndex(function (l) {
                                return l.id === e.currCategoryId;
                              })) > -1;
                    }),
                    currIndex: this.currIndex,
                    lastIndex: this.lastIndex,
                    leftScrollTop: this.leftScrollTop,
                    isMiddleNeedReset: this.isMiddleNeedReset,
                    setIsMiddleNeedReset: this.setIsMiddleNeedReset,
                    onItem: function (n) {
                      return e.setCurrIndex(n);
                    },
                  };
                },
              },
              {
                key: "rightProps",
                get: function () {
                  var e = this;
                  return {
                    list: this.works.filter(function (s) {
                      var n, i;
                      return e.currCategoryId === -1
                        ? !0
                        : ((n =
                            (i = s.categories) !== null && i !== void 0
                              ? i
                              : []) === null || n === void 0
                            ? void 0
                            : n.findIndex(function (l) {
                                return l.id === e.currCategoryId;
                              })) > -1;
                    }),
                    currIndex: this.currIndex,
                    lastIndex: this.lastIndex,
                    isRightNeedReset: this.isRightNeedReset,
                    toggleCollapse: this.toggleCollapse,
                    setCurrIndex: this.setCurrIndex,
                    calRandomIndex: this.calRandomIndex,
                    setShowRandomImg: this.setShowRandomImg,
                    setIsRightNeedReset: this.setIsRightNeedReset,
                    categories: this.categories,
                    currCategoryId: this.currCategoryId,
                    onCategory: this.onCategoryClick,
                  };
                },
              },
              {
                key: "informationProps",
                get: function () {
                  return {
                    info: this.aboutInfo,
                    onStudioClick: this.onStudioClick,
                  };
                },
              },
              {
                key: "randomImg",
                get: function () {
                  return this.randomImgList[this.randomIndex];
                },
              },
            ]),
            t
          );
        })(),
        fe = {
          main: "main___T9lJJ",
          random: "random___eiJdr",
          randomImg: "randomImg___RPAal",
        },
        ct = (0, E.Pi)(function () {
          var t = (0, j.fv)(function () {
              return new ut({ app: $.Up });
            }),
            r = t.isLoading,
            e = t.middleProps,
            s = t.rightProps,
            n = t.informationProps,
            i = t.randomImg,
            l = t.showRandomImg,
            a = t.init,
            c = t.dispose,
            h = t.setShowRandomImg;
          return (
            (0, g.useEffect)(function () {
              return (
                a(),
                function () {
                  c();
                }
              );
            }, []),
            (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(y.ql, {
                  children: (0, d.jsx)("title", { children: (0, f.$R)() }),
                }),
                (0, d.jsx)("main", {
                  className: "v-main",
                  onClick: function () {
                    h(!1);
                  },
                  children: r
                    ? (0, d.jsx)(_.Loading, { isPage: !0 })
                    : (0, d.jsxs)("div", {
                        className: fe.main,
                        children: [
                          (0, d.jsx)(et, v()({}, n)),
                          (0, d.jsx)(Ye, v()({}, e)),
                          (0, d.jsx)(Qe, v()({}, s)),
                        ],
                      }),
                }),
                !!i &&
                  !!l &&
                  (0, d.jsx)("div", {
                    className: fe.random,
                    children: (0, d.jsx)(_.MagicImage, {
                      rootStyle: { width: "auto", height: "auto" },
                      hashName: i?.hashName,
                      className: fe.randomImg,
                    }),
                  }),
              ],
            })
          );
        }),
        ft = ct;
    },
    37384: function (se, H, o) {
      o.d(H, {
        m: function () {
          return _;
        },
      });
      var B = o(12444),
        v = o.n(B),
        g = o(72004),
        E = o.n(g),
        j = o(9783),
        y = o.n(j),
        $ = o(68949),
        _ = (function () {
          function S() {
            var C = this,
              A =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              I = A.status,
              G = I === void 0 ? "loading" : I;
            (v()(this, S),
              y()(this, "status", "loading"),
              y()(this, "ssrDone", !1),
              y()(this, "setSSRDone", function (Q) {
                return (C.ssrDone = Q);
              }),
              y()(this, "setStatus", function (Q) {
                C.status = Q;
              }),
              y()(this, "showLoading", function () {
                C.setStatus("loading");
              }),
              y()(this, "showContent", function () {
                C.setStatus("content");
              }),
              y()(this, "showError", function () {
                C.setStatus("error");
              }),
              y()(this, "showEmpty", function () {
                C.setStatus("empty");
              }),
              y()(this, "reset", function () {
                (C.showLoading(), C.setSSRDone(!1));
              }),
              (0, $.ky)(this, { isNotContent: $.Fl }),
              this.setStatus(G));
          }
          return (
            E()(S, [
              {
                key: "isNotContent",
                get: function () {
                  return this.status !== "content";
                },
              },
            ]),
            S
          );
        })(),
        f = o(15009),
        D = o(19632),
        u = o(99289),
        P = o(97857),
        Y = o(55375),
        z = o(47271),
        W = {
          pageNum: 1,
          pageSize: 16,
          data: [],
          hasMore: !0,
          refreshLoading: !1,
          loadMoreLoading: !1,
          status: "loading",
        },
        V = null,
        M = null;
    },
    29449: function (se, H, o) {
      o.d(H, {
        Up: function () {
          return W;
        },
      });
      var B = o(15009),
        v = o.n(B),
        g = o(99289),
        E = o.n(g),
        j = o(72004),
        y = o.n(j),
        $ = o(12444),
        _ = o.n($),
        f = o(9783),
        D = o.n(f),
        u = o(67294),
        P = o(68949),
        Y = y()(function M() {
          (_()(this, M),
            D()(this, "env", { appName: "dpi-client", appVersion: "1.0.4" }),
            (0, P.ky)(this));
        }),
        z = y()(function M() {
          (_()(this, M),
            D()(this, "env", void 0),
            D()(
              this,
              "init",
              E()(
                v()().mark(function S() {
                  return v()().wrap(function (A) {
                    for (;;)
                      switch ((A.prev = A.next)) {
                        case 0:
                        case "end":
                          return A.stop();
                      }
                  }, S);
                }),
              ),
            ),
            (this.env = new Y()));
        }),
        W = new z(),
        V = (0, u.createContext)({});
    },
  },
]);
