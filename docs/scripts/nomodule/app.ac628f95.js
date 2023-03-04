!(function () {
  'use strict';
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : 'undefined' != typeof self && self;
  var t = {};
  (function (t) {
    var e = '1.9.3';
    function i(t) {
      var e, i, n, o;
      for (i = 1, n = arguments.length; i < n; i++)
        for (e in (o = arguments[i])) t[e] = o[e];
      return t;
    }
    var n =
      Object.create ||
      (function () {
        function t() {}
        return function (e) {
          return (t.prototype = e), new t();
        };
      })();
    function o(t, e) {
      var i = Array.prototype.slice;
      if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
      var n = i.call(arguments, 2);
      return function () {
        return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments);
      };
    }
    var s = 0;
    function a(t) {
      return '_leaflet_id' in t || (t._leaflet_id = ++s), t._leaflet_id;
    }
    function r(t, e, i) {
      var n, o, s, a;
      return (
        (a = function () {
          (n = !1), o && (s.apply(i, o), (o = !1));
        }),
        (s = function () {
          n
            ? (o = arguments)
            : (t.apply(i, arguments), setTimeout(a, e), (n = !0));
        }),
        s
      );
    }
    function h(t, e, i) {
      var n = e[1],
        o = e[0],
        s = n - o;
      return t === n && i ? t : ((((t - o) % s) + s) % s) + o;
    }
    function l() {
      return !1;
    }
    function u(t, e) {
      if (!1 === e) return t;
      var i = Math.pow(10, void 0 === e ? 6 : e);
      return Math.round(t * i) / i;
    }
    function d(t) {
      return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
    }
    function c(t) {
      return d(t).split(/\s+/);
    }
    function _(t, e) {
      for (var i in (Object.prototype.hasOwnProperty.call(t, 'options') ||
        (t.options = t.options ? n(t.options) : {}),
      e))
        t.options[i] = e[i];
      return t.options;
    }
    function m(t, e, i) {
      var n = [];
      for (var o in t)
        n.push(
          encodeURIComponent(i ? o.toUpperCase() : o) +
            '=' +
            encodeURIComponent(t[o])
        );
      return (e && -1 !== e.indexOf('?') ? '&' : '?') + n.join('&');
    }
    var p = /\{ *([\w_ -]+) *\}/g;
    function f(t, e) {
      return t.replace(p, function (t, i) {
        var n = e[i];
        if (void 0 === n)
          throw new Error('No value provided for variable ' + t);
        return 'function' == typeof n && (n = n(e)), n;
      });
    }
    var g =
      Array.isArray ||
      function (t) {
        return '[object Array]' === Object.prototype.toString.call(t);
      };
    function v(t, e) {
      for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
      return -1;
    }
    var y = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';
    function b(t) {
      return window['webkit' + t] || window['moz' + t] || window['ms' + t];
    }
    var x = 0;
    function w(t) {
      var e = +new Date(),
        i = Math.max(0, 16 - (e - x));
      return (x = e + i), window.setTimeout(t, i);
    }
    var P = window.requestAnimationFrame || b('RequestAnimationFrame') || w,
      T =
        window.cancelAnimationFrame ||
        b('CancelAnimationFrame') ||
        b('CancelRequestAnimationFrame') ||
        function (t) {
          window.clearTimeout(t);
        };
    function M(t, e, i) {
      if (!i || P !== w) return P.call(window, o(t, e));
      t.call(e);
    }
    function z(t) {
      t && T.call(window, t);
    }
    var Z = {
      __proto__: null,
      extend: i,
      create: n,
      bind: o,
      get lastId() {
        return s;
      },
      stamp: a,
      throttle: r,
      wrapNum: h,
      falseFn: l,
      formatNum: u,
      trim: d,
      splitWords: c,
      setOptions: _,
      getParamString: m,
      template: f,
      isArray: g,
      indexOf: v,
      emptyImageUrl: y,
      requestFn: P,
      cancelFn: T,
      requestAnimFrame: M,
      cancelAnimFrame: z,
    };
    function k() {}
    function C(t) {
      if ('undefined' != typeof L && L && L.Mixin) {
        t = g(t) ? t : [t];
        for (var e = 0; e < t.length; e++)
          t[e] === L.Mixin.Events &&
            console.warn(
              'Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.',
              new Error().stack
            );
      }
    }
    (k.extend = function (t) {
      var e = function () {
          _(this),
            this.initialize && this.initialize.apply(this, arguments),
            this.callInitHooks();
        },
        o = (e.__super__ = this.prototype),
        s = n(o);
      for (var a in ((s.constructor = e), (e.prototype = s), this))
        Object.prototype.hasOwnProperty.call(this, a) &&
          'prototype' !== a &&
          '__super__' !== a &&
          (e[a] = this[a]);
      return (
        t.statics && i(e, t.statics),
        t.includes && (C(t.includes), i.apply(null, [s].concat(t.includes))),
        i(s, t),
        delete s.statics,
        delete s.includes,
        s.options &&
          ((s.options = o.options ? n(o.options) : {}),
          i(s.options, t.options)),
        (s._initHooks = []),
        (s.callInitHooks = function () {
          if (!this._initHooksCalled) {
            o.callInitHooks && o.callInitHooks.call(this),
              (this._initHooksCalled = !0);
            for (var t = 0, e = s._initHooks.length; t < e; t++)
              s._initHooks[t].call(this);
          }
        }),
        e
      );
    }),
      (k.include = function (t) {
        var e = this.prototype.options;
        return (
          i(this.prototype, t),
          t.options &&
            ((this.prototype.options = e), this.mergeOptions(t.options)),
          this
        );
      }),
      (k.mergeOptions = function (t) {
        return i(this.prototype.options, t), this;
      }),
      (k.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1),
          i =
            'function' == typeof t
              ? t
              : function () {
                  this[t].apply(this, e);
                };
        return (
          (this.prototype._initHooks = this.prototype._initHooks || []),
          this.prototype._initHooks.push(i),
          this
        );
      });
    var S = {
      on: function (t, e, i) {
        if ('object' == typeof t) for (var n in t) this._on(n, t[n], e);
        else
          for (var o = 0, s = (t = c(t)).length; o < s; o++)
            this._on(t[o], e, i);
        return this;
      },
      off: function (t, e, i) {
        if (arguments.length)
          if ('object' == typeof t) for (var n in t) this._off(n, t[n], e);
          else {
            t = c(t);
            for (
              var o = 1 === arguments.length, s = 0, a = t.length;
              s < a;
              s++
            )
              o ? this._off(t[s]) : this._off(t[s], e, i);
          }
        else delete this._events;
        return this;
      },
      _on: function (t, e, i, n) {
        if ('function' == typeof e) {
          if (!1 === this._listens(t, e, i)) {
            i === this && (i = void 0);
            var o = { fn: e, ctx: i };
            n && (o.once = !0),
              (this._events = this._events || {}),
              (this._events[t] = this._events[t] || []),
              this._events[t].push(o);
          }
        } else console.warn('wrong listener type: ' + typeof e);
      },
      _off: function (t, e, i) {
        var n, o, s;
        if (this._events && (n = this._events[t]))
          if (1 !== arguments.length)
            if ('function' == typeof e) {
              var a = this._listens(t, e, i);
              if (!1 !== a) {
                var r = n[a];
                this._firingCount &&
                  ((r.fn = l), (this._events[t] = n = n.slice())),
                  n.splice(a, 1);
              }
            } else console.warn('wrong listener type: ' + typeof e);
          else {
            if (this._firingCount)
              for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
            delete this._events[t];
          }
      },
      fire: function (t, e, n) {
        if (!this.listens(t, n)) return this;
        var o = i({}, e, {
          type: t,
          target: this,
          sourceTarget: (e && e.sourceTarget) || this,
        });
        if (this._events) {
          var s = this._events[t];
          if (s) {
            this._firingCount = this._firingCount + 1 || 1;
            for (var a = 0, r = s.length; a < r; a++) {
              var h = s[a],
                l = h.fn;
              h.once && this.off(t, l, h.ctx), l.call(h.ctx || this, o);
            }
            this._firingCount--;
          }
        }
        return n && this._propagateEvent(o), this;
      },
      listens: function (t, e, i, n) {
        'string' != typeof t && console.warn('"string" type argument expected');
        var o = e;
        'function' != typeof e && ((n = !!e), (o = void 0), (i = void 0));
        var s = this._events && this._events[t];
        if (s && s.length && !1 !== this._listens(t, o, i)) return !0;
        if (n)
          for (var a in this._eventParents)
            if (this._eventParents[a].listens(t, e, i, n)) return !0;
        return !1;
      },
      _listens: function (t, e, i) {
        if (!this._events) return !1;
        var n = this._events[t] || [];
        if (!e) return !!n.length;
        i === this && (i = void 0);
        for (var o = 0, s = n.length; o < s; o++)
          if (n[o].fn === e && n[o].ctx === i) return o;
        return !1;
      },
      once: function (t, e, i) {
        if ('object' == typeof t) for (var n in t) this._on(n, t[n], e, !0);
        else
          for (var o = 0, s = (t = c(t)).length; o < s; o++)
            this._on(t[o], e, i, !0);
        return this;
      },
      addEventParent: function (t) {
        return (
          (this._eventParents = this._eventParents || {}),
          (this._eventParents[a(t)] = t),
          this
        );
      },
      removeEventParent: function (t) {
        return this._eventParents && delete this._eventParents[a(t)], this;
      },
      _propagateEvent: function (t) {
        for (var e in this._eventParents)
          this._eventParents[e].fire(
            t.type,
            i({ layer: t.target, propagatedFrom: t.target }, t),
            !0
          );
      },
    };
    (S.addEventListener = S.on),
      (S.removeEventListener = S.clearAllEventListeners = S.off),
      (S.addOneTimeEventListener = S.once),
      (S.fireEvent = S.fire),
      (S.hasEventListeners = S.listens);
    var E = k.extend(S);
    function A(t, e, i) {
      (this.x = i ? Math.round(t) : t), (this.y = i ? Math.round(e) : e);
    }
    var B =
      Math.trunc ||
      function (t) {
        return t > 0 ? Math.floor(t) : Math.ceil(t);
      };
    function O(t, e, i) {
      return t instanceof A
        ? t
        : g(t)
        ? new A(t[0], t[1])
        : null == t
        ? t
        : 'object' == typeof t && 'x' in t && 'y' in t
        ? new A(t.x, t.y)
        : new A(t, e, i);
    }
    function I(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    function R(t, e) {
      return !t || t instanceof I ? t : new I(t, e);
    }
    function j(t, e) {
      if (t)
        for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++)
          this.extend(i[n]);
    }
    function D(t, e) {
      return t instanceof j ? t : new j(t, e);
    }
    function N(t, e, i) {
      if (isNaN(t) || isNaN(e))
        throw new Error('Invalid LatLng object: (' + t + ', ' + e + ')');
      (this.lat = +t), (this.lng = +e), void 0 !== i && (this.alt = +i);
    }
    function H(t, e, i) {
      return t instanceof N
        ? t
        : g(t) && 'object' != typeof t[0]
        ? 3 === t.length
          ? new N(t[0], t[1], t[2])
          : 2 === t.length
          ? new N(t[0], t[1])
          : null
        : null == t
        ? t
        : 'object' == typeof t && 'lat' in t
        ? new N(t.lat, 'lng' in t ? t.lng : t.lon, t.alt)
        : void 0 === e
        ? null
        : new N(t, e, i);
    }
    (A.prototype = {
      clone: function () {
        return new A(this.x, this.y);
      },
      add: function (t) {
        return this.clone()._add(O(t));
      },
      _add: function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      },
      subtract: function (t) {
        return this.clone()._subtract(O(t));
      },
      _subtract: function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      },
      divideBy: function (t) {
        return this.clone()._divideBy(t);
      },
      _divideBy: function (t) {
        return (this.x /= t), (this.y /= t), this;
      },
      multiplyBy: function (t) {
        return this.clone()._multiplyBy(t);
      },
      _multiplyBy: function (t) {
        return (this.x *= t), (this.y *= t), this;
      },
      scaleBy: function (t) {
        return new A(this.x * t.x, this.y * t.y);
      },
      unscaleBy: function (t) {
        return new A(this.x / t.x, this.y / t.y);
      },
      round: function () {
        return this.clone()._round();
      },
      _round: function () {
        return (
          (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this
        );
      },
      floor: function () {
        return this.clone()._floor();
      },
      _floor: function () {
        return (
          (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this
        );
      },
      ceil: function () {
        return this.clone()._ceil();
      },
      _ceil: function () {
        return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
      },
      trunc: function () {
        return this.clone()._trunc();
      },
      _trunc: function () {
        return (this.x = B(this.x)), (this.y = B(this.y)), this;
      },
      distanceTo: function (t) {
        var e = (t = O(t)).x - this.x,
          i = t.y - this.y;
        return Math.sqrt(e * e + i * i);
      },
      equals: function (t) {
        return (t = O(t)).x === this.x && t.y === this.y;
      },
      contains: function (t) {
        return (
          (t = O(t)),
          Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        );
      },
      toString: function () {
        return 'Point(' + u(this.x) + ', ' + u(this.y) + ')';
      },
    }),
      (I.prototype = {
        extend: function (t) {
          var e, i;
          if (!t) return this;
          if (t instanceof A || 'number' == typeof t[0] || 'x' in t)
            e = i = O(t);
          else if (((e = (t = R(t)).min), (i = t.max), !e || !i)) return this;
          return (
            this.min || this.max
              ? ((this.min.x = Math.min(e.x, this.min.x)),
                (this.max.x = Math.max(i.x, this.max.x)),
                (this.min.y = Math.min(e.y, this.min.y)),
                (this.max.y = Math.max(i.y, this.max.y)))
              : ((this.min = e.clone()), (this.max = i.clone())),
            this
          );
        },
        getCenter: function (t) {
          return O(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            t
          );
        },
        getBottomLeft: function () {
          return O(this.min.x, this.max.y);
        },
        getTopRight: function () {
          return O(this.max.x, this.min.y);
        },
        getTopLeft: function () {
          return this.min;
        },
        getBottomRight: function () {
          return this.max;
        },
        getSize: function () {
          return this.max.subtract(this.min);
        },
        contains: function (t) {
          var e, i;
          return (
            (t =
              'number' == typeof t[0] || t instanceof A
                ? O(t)
                : R(t)) instanceof I
              ? ((e = t.min), (i = t.max))
              : (e = i = t),
            e.x >= this.min.x &&
              i.x <= this.max.x &&
              e.y >= this.min.y &&
              i.y <= this.max.y
          );
        },
        intersects: function (t) {
          t = R(t);
          var e = this.min,
            i = this.max,
            n = t.min,
            o = t.max,
            s = o.x >= e.x && n.x <= i.x,
            a = o.y >= e.y && n.y <= i.y;
          return s && a;
        },
        overlaps: function (t) {
          t = R(t);
          var e = this.min,
            i = this.max,
            n = t.min,
            o = t.max,
            s = o.x > e.x && n.x < i.x,
            a = o.y > e.y && n.y < i.y;
          return s && a;
        },
        isValid: function () {
          return !(!this.min || !this.max);
        },
        pad: function (t) {
          var e = this.min,
            i = this.max,
            n = Math.abs(e.x - i.x) * t,
            o = Math.abs(e.y - i.y) * t;
          return R(O(e.x - n, e.y - o), O(i.x + n, i.y + o));
        },
        equals: function (t) {
          return (
            !!t &&
            ((t = R(t)),
            this.min.equals(t.getTopLeft()) &&
              this.max.equals(t.getBottomRight()))
          );
        },
      }),
      (j.prototype = {
        extend: function (t) {
          var e,
            i,
            n = this._southWest,
            o = this._northEast;
          if (t instanceof N) (e = t), (i = t);
          else {
            if (!(t instanceof j)) return t ? this.extend(H(t) || D(t)) : this;
            if (((e = t._southWest), (i = t._northEast), !e || !i)) return this;
          }
          return (
            n || o
              ? ((n.lat = Math.min(e.lat, n.lat)),
                (n.lng = Math.min(e.lng, n.lng)),
                (o.lat = Math.max(i.lat, o.lat)),
                (o.lng = Math.max(i.lng, o.lng)))
              : ((this._southWest = new N(e.lat, e.lng)),
                (this._northEast = new N(i.lat, i.lng))),
            this
          );
        },
        pad: function (t) {
          var e = this._southWest,
            i = this._northEast,
            n = Math.abs(e.lat - i.lat) * t,
            o = Math.abs(e.lng - i.lng) * t;
          return new j(
            new N(e.lat - n, e.lng - o),
            new N(i.lat + n, i.lng + o)
          );
        },
        getCenter: function () {
          return new N(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        getSouthWest: function () {
          return this._southWest;
        },
        getNorthEast: function () {
          return this._northEast;
        },
        getNorthWest: function () {
          return new N(this.getNorth(), this.getWest());
        },
        getSouthEast: function () {
          return new N(this.getSouth(), this.getEast());
        },
        getWest: function () {
          return this._southWest.lng;
        },
        getSouth: function () {
          return this._southWest.lat;
        },
        getEast: function () {
          return this._northEast.lng;
        },
        getNorth: function () {
          return this._northEast.lat;
        },
        contains: function (t) {
          t =
            'number' == typeof t[0] || t instanceof N || 'lat' in t
              ? H(t)
              : D(t);
          var e,
            i,
            n = this._southWest,
            o = this._northEast;
          return (
            t instanceof j
              ? ((e = t.getSouthWest()), (i = t.getNorthEast()))
              : (e = i = t),
            e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
          );
        },
        intersects: function (t) {
          t = D(t);
          var e = this._southWest,
            i = this._northEast,
            n = t.getSouthWest(),
            o = t.getNorthEast(),
            s = o.lat >= e.lat && n.lat <= i.lat,
            a = o.lng >= e.lng && n.lng <= i.lng;
          return s && a;
        },
        overlaps: function (t) {
          t = D(t);
          var e = this._southWest,
            i = this._northEast,
            n = t.getSouthWest(),
            o = t.getNorthEast(),
            s = o.lat > e.lat && n.lat < i.lat,
            a = o.lng > e.lng && n.lng < i.lng;
          return s && a;
        },
        toBBoxString: function () {
          return [
            this.getWest(),
            this.getSouth(),
            this.getEast(),
            this.getNorth(),
          ].join(',');
        },
        equals: function (t, e) {
          return (
            !!t &&
            ((t = D(t)),
            this._southWest.equals(t.getSouthWest(), e) &&
              this._northEast.equals(t.getNorthEast(), e))
          );
        },
        isValid: function () {
          return !(!this._southWest || !this._northEast);
        },
      }),
      (N.prototype = {
        equals: function (t, e) {
          return (
            !!t &&
            ((t = H(t)),
            Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
              (void 0 === e ? 1e-9 : e))
          );
        },
        toString: function (t) {
          return 'LatLng(' + u(this.lat, t) + ', ' + u(this.lng, t) + ')';
        },
        distanceTo: function (t) {
          return U.distance(this, H(t));
        },
        wrap: function () {
          return U.wrapLatLng(this);
        },
        toBounds: function (t) {
          var e = (180 * t) / 40075017,
            i = e / Math.cos((Math.PI / 180) * this.lat);
          return D([this.lat - e, this.lng - i], [this.lat + e, this.lng + i]);
        },
        clone: function () {
          return new N(this.lat, this.lng, this.alt);
        },
      });
    var W,
      F = {
        latLngToPoint: function (t, e) {
          var i = this.projection.project(t),
            n = this.scale(e);
          return this.transformation._transform(i, n);
        },
        pointToLatLng: function (t, e) {
          var i = this.scale(e),
            n = this.transformation.untransform(t, i);
          return this.projection.unproject(n);
        },
        project: function (t) {
          return this.projection.project(t);
        },
        unproject: function (t) {
          return this.projection.unproject(t);
        },
        scale: function (t) {
          return 256 * Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t / 256) / Math.LN2;
        },
        getProjectedBounds: function (t) {
          if (this.infinite) return null;
          var e = this.projection.bounds,
            i = this.scale(t);
          return new I(
            this.transformation.transform(e.min, i),
            this.transformation.transform(e.max, i)
          );
        },
        infinite: !1,
        wrapLatLng: function (t) {
          var e = this.wrapLng ? h(t.lng, this.wrapLng, !0) : t.lng;
          return new N(
            this.wrapLat ? h(t.lat, this.wrapLat, !0) : t.lat,
            e,
            t.alt
          );
        },
        wrapLatLngBounds: function (t) {
          var e = t.getCenter(),
            i = this.wrapLatLng(e),
            n = e.lat - i.lat,
            o = e.lng - i.lng;
          if (0 === n && 0 === o) return t;
          var s = t.getSouthWest(),
            a = t.getNorthEast();
          return new j(
            new N(s.lat - n, s.lng - o),
            new N(a.lat - n, a.lng - o)
          );
        },
      },
      U = i({}, F, {
        wrapLng: [-180, 180],
        R: 6371e3,
        distance: function (t, e) {
          var i = Math.PI / 180,
            n = t.lat * i,
            o = e.lat * i,
            s = Math.sin(((e.lat - t.lat) * i) / 2),
            a = Math.sin(((e.lng - t.lng) * i) / 2),
            r = s * s + Math.cos(n) * Math.cos(o) * a * a,
            h = 2 * Math.atan2(Math.sqrt(r), Math.sqrt(1 - r));
          return this.R * h;
        },
      }),
      G = 6378137,
      V = {
        R: G,
        MAX_LATITUDE: 85.0511287798,
        project: function (t) {
          var e = Math.PI / 180,
            i = this.MAX_LATITUDE,
            n = Math.max(Math.min(i, t.lat), -i),
            o = Math.sin(n * e);
          return new A(
            this.R * t.lng * e,
            (this.R * Math.log((1 + o) / (1 - o))) / 2
          );
        },
        unproject: function (t) {
          var e = 180 / Math.PI;
          return new N(
            (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
            (t.x * e) / this.R
          );
        },
        bounds: ((W = G * Math.PI), new I([-W, -W], [W, W])),
      };
    function q(t, e, i, n) {
      if (g(t))
        return (
          (this._a = t[0]),
          (this._b = t[1]),
          (this._c = t[2]),
          void (this._d = t[3])
        );
      (this._a = t), (this._b = e), (this._c = i), (this._d = n);
    }
    function K(t, e, i, n) {
      return new q(t, e, i, n);
    }
    q.prototype = {
      transform: function (t, e) {
        return this._transform(t.clone(), e);
      },
      _transform: function (t, e) {
        return (
          (e = e || 1),
          (t.x = e * (this._a * t.x + this._b)),
          (t.y = e * (this._c * t.y + this._d)),
          t
        );
      },
      untransform: function (t, e) {
        return (
          (e = e || 1),
          new A((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        );
      },
    };
    var J = i({}, U, {
        code: 'EPSG:3857',
        projection: V,
        transformation: (function () {
          var t = 0.5 / (Math.PI * V.R);
          return K(t, 0.5, -t, 0.5);
        })(),
      }),
      Y = i({}, J, { code: 'EPSG:900913' });
    function X(t) {
      return document.createElementNS('http://www.w3.org/2000/svg', t);
    }
    function $(t, e) {
      var i,
        n,
        o,
        s,
        a,
        r,
        h = '';
      for (i = 0, o = t.length; i < o; i++) {
        for (n = 0, s = (a = t[i]).length; n < s; n++)
          h += (n ? 'L' : 'M') + (r = a[n]).x + ' ' + r.y;
        h += e ? (jt.svg ? 'z' : 'x') : '';
      }
      return h || 'M0 0';
    }
    var Q,
      tt = document.documentElement.style,
      et = 'ActiveXObject' in window,
      it = et && !document.addEventListener,
      nt = 'msLaunchUri' in navigator && !('documentMode' in document),
      ot = Rt('webkit'),
      st = Rt('android'),
      at = Rt('android 2') || Rt('android 3'),
      rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
      ht = st && Rt('Google') && rt < 537 && !('AudioNode' in window),
      lt = !!window.opera,
      ut = !nt && Rt('chrome'),
      dt = Rt('gecko') && !ot && !lt && !et,
      ct = !ut && Rt('safari'),
      _t = Rt('phantom'),
      mt = 'OTransition' in tt,
      pt = 0 === navigator.platform.indexOf('Win'),
      ft = et && 'transition' in tt,
      gt =
        'WebKitCSSMatrix' in window &&
        'm11' in new window.WebKitCSSMatrix() &&
        !at,
      vt = 'MozPerspective' in tt,
      yt = !window.L_DISABLE_3D && (ft || gt || vt) && !mt && !_t,
      bt = 'undefined' != typeof orientation || Rt('mobile'),
      xt = bt && ot,
      wt = bt && gt,
      Lt = !window.PointerEvent && window.MSPointerEvent,
      Pt = !(!window.PointerEvent && !Lt),
      Tt = 'ontouchstart' in window || !!window.TouchEvent,
      Mt = !window.L_NO_TOUCH && (Tt || Pt),
      zt = bt && lt,
      Zt = bt && dt,
      kt =
        (window.devicePixelRatio ||
          window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
      Ct = (function () {
        var t = !1;
        try {
          var e = Object.defineProperty({}, 'passive', {
            get: function () {
              t = !0;
            },
          });
          window.addEventListener('testPassiveEventSupport', l, e),
            window.removeEventListener('testPassiveEventSupport', l, e);
        } catch (i) {}
        return t;
      })(),
      St = !!document.createElement('canvas').getContext,
      Et = !(!document.createElementNS || !X('svg').createSVGRect),
      At =
        !!Et &&
        (((Q = document.createElement('div')).innerHTML = '<svg/>'),
        'http://www.w3.org/2000/svg' ===
          (Q.firstChild && Q.firstChild.namespaceURI)),
      Bt =
        !Et &&
        (function () {
          try {
            var t = document.createElement('div');
            t.innerHTML = '<v:shape adj="1"/>';
            var e = t.firstChild;
            return (
              (e.style.behavior = 'url(#default#VML)'),
              e && 'object' == typeof e.adj
            );
          } catch (i) {
            return !1;
          }
        })(),
      Ot = 0 === navigator.platform.indexOf('Mac'),
      It = 0 === navigator.platform.indexOf('Linux');
    function Rt(t) {
      return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
    }
    var jt = {
        ie: et,
        ielt9: it,
        edge: nt,
        webkit: ot,
        android: st,
        android23: at,
        androidStock: ht,
        opera: lt,
        chrome: ut,
        gecko: dt,
        safari: ct,
        phantom: _t,
        opera12: mt,
        win: pt,
        ie3d: ft,
        webkit3d: gt,
        gecko3d: vt,
        any3d: yt,
        mobile: bt,
        mobileWebkit: xt,
        mobileWebkit3d: wt,
        msPointer: Lt,
        pointer: Pt,
        touch: Mt,
        touchNative: Tt,
        mobileOpera: zt,
        mobileGecko: Zt,
        retina: kt,
        passiveEvents: Ct,
        canvas: St,
        svg: Et,
        vml: Bt,
        inlineSvg: At,
        mac: Ot,
        linux: It,
      },
      Dt = jt.msPointer ? 'MSPointerDown' : 'pointerdown',
      Nt = jt.msPointer ? 'MSPointerMove' : 'pointermove',
      Ht = jt.msPointer ? 'MSPointerUp' : 'pointerup',
      Wt = jt.msPointer ? 'MSPointerCancel' : 'pointercancel',
      Ft = { touchstart: Dt, touchmove: Nt, touchend: Ht, touchcancel: Wt },
      Ut = { touchstart: te, touchmove: Qt, touchend: Qt, touchcancel: Qt },
      Gt = {},
      Vt = !1;
    function qt(t, e, i) {
      return (
        'touchstart' === e && $t(),
        Ut[e]
          ? ((i = Ut[e].bind(this, i)), t.addEventListener(Ft[e], i, !1), i)
          : (console.warn('wrong event specified:', e), l)
      );
    }
    function Kt(t, e, i) {
      Ft[e]
        ? t.removeEventListener(Ft[e], i, !1)
        : console.warn('wrong event specified:', e);
    }
    function Jt(t) {
      Gt[t.pointerId] = t;
    }
    function Yt(t) {
      Gt[t.pointerId] && (Gt[t.pointerId] = t);
    }
    function Xt(t) {
      delete Gt[t.pointerId];
    }
    function $t() {
      Vt ||
        (document.addEventListener(Dt, Jt, !0),
        document.addEventListener(Nt, Yt, !0),
        document.addEventListener(Ht, Xt, !0),
        document.addEventListener(Wt, Xt, !0),
        (Vt = !0));
    }
    function Qt(t, e) {
      if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || 'mouse')) {
        for (var i in ((e.touches = []), Gt)) e.touches.push(Gt[i]);
        (e.changedTouches = [e]), t(e);
      }
    }
    function te(t, e) {
      e.MSPOINTER_TYPE_TOUCH &&
        e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
        Je(e),
        Qt(t, e);
    }
    function ee(t) {
      var e,
        i,
        n = {};
      for (i in t) (e = t[i]), (n[i] = e && e.bind ? e.bind(t) : e);
      return (
        (t = n),
        (n.type = 'dblclick'),
        (n.detail = 2),
        (n.isTrusted = !1),
        (n._simulated = !0),
        n
      );
    }
    var ie = 200;
    function ne(t, e) {
      t.addEventListener('dblclick', e);
      var i,
        n = 0;
      function o(t) {
        if (1 === t.detail) {
          if (
            'mouse' !== t.pointerType &&
            (!t.sourceCapabilities || t.sourceCapabilities.firesTouchEvents)
          ) {
            var o = Xe(t);
            if (
              !o.some(function (t) {
                return t instanceof HTMLLabelElement && t.attributes.for;
              }) ||
              o.some(function (t) {
                return (
                  t instanceof HTMLInputElement ||
                  t instanceof HTMLSelectElement
                );
              })
            ) {
              var s = Date.now();
              s - n <= ie ? 2 == ++i && e(ee(t)) : (i = 1), (n = s);
            }
          }
        } else i = t.detail;
      }
      return t.addEventListener('click', o), { dblclick: e, simDblclick: o };
    }
    function oe(t, e) {
      t.removeEventListener('dblclick', e.dblclick),
        t.removeEventListener('click', e.simDblclick);
    }
    var se,
      ae,
      re,
      he,
      le,
      ue = ze([
        'transform',
        'webkitTransform',
        'OTransform',
        'MozTransform',
        'msTransform',
      ]),
      de = ze([
        'webkitTransition',
        'transition',
        'OTransition',
        'MozTransition',
        'msTransition',
      ]),
      ce =
        'webkitTransition' === de || 'OTransition' === de
          ? de + 'End'
          : 'transitionend';
    function _e(t) {
      return 'string' == typeof t ? document.getElementById(t) : t;
    }
    function me(t, e) {
      var i = t.style[e] || (t.currentStyle && t.currentStyle[e]);
      if ((!i || 'auto' === i) && document.defaultView) {
        var n = document.defaultView.getComputedStyle(t, null);
        i = n ? n[e] : null;
      }
      return 'auto' === i ? null : i;
    }
    function pe(t, e, i) {
      var n = document.createElement(t);
      return (n.className = e || ''), i && i.appendChild(n), n;
    }
    function fe(t) {
      var e = t.parentNode;
      e && e.removeChild(t);
    }
    function ge(t) {
      for (; t.firstChild; ) t.removeChild(t.firstChild);
    }
    function ve(t) {
      var e = t.parentNode;
      e && e.lastChild !== t && e.appendChild(t);
    }
    function ye(t) {
      var e = t.parentNode;
      e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
    }
    function be(t, e) {
      if (void 0 !== t.classList) return t.classList.contains(e);
      var i = Pe(t);
      return i.length > 0 && new RegExp('(^|\\s)' + e + '(\\s|$)').test(i);
    }
    function xe(t, e) {
      if (void 0 !== t.classList)
        for (var i = c(e), n = 0, o = i.length; n < o; n++)
          t.classList.add(i[n]);
      else if (!be(t, e)) {
        var s = Pe(t);
        Le(t, (s ? s + ' ' : '') + e);
      }
    }
    function we(t, e) {
      void 0 !== t.classList
        ? t.classList.remove(e)
        : Le(t, d((' ' + Pe(t) + ' ').replace(' ' + e + ' ', ' ')));
    }
    function Le(t, e) {
      void 0 === t.className.baseVal
        ? (t.className = e)
        : (t.className.baseVal = e);
    }
    function Pe(t) {
      return (
        t.correspondingElement && (t = t.correspondingElement),
        void 0 === t.className.baseVal ? t.className : t.className.baseVal
      );
    }
    function Te(t, e) {
      'opacity' in t.style
        ? (t.style.opacity = e)
        : 'filter' in t.style && Me(t, e);
    }
    function Me(t, e) {
      var i = !1,
        n = 'DXImageTransform.Microsoft.Alpha';
      try {
        i = t.filters.item(n);
      } catch (o) {
        if (1 === e) return;
      }
      (e = Math.round(100 * e)),
        i
          ? ((i.Enabled = 100 !== e), (i.Opacity = e))
          : (t.style.filter += ' progid:' + n + '(opacity=' + e + ')');
    }
    function ze(t) {
      for (var e = document.documentElement.style, i = 0; i < t.length; i++)
        if (t[i] in e) return t[i];
      return !1;
    }
    function Ze(t, e, i) {
      var n = e || new A(0, 0);
      t.style[ue] =
        (jt.ie3d
          ? 'translate(' + n.x + 'px,' + n.y + 'px)'
          : 'translate3d(' + n.x + 'px,' + n.y + 'px,0)') +
        (i ? ' scale(' + i + ')' : '');
    }
    function ke(t, e) {
      (t._leaflet_pos = e),
        jt.any3d
          ? Ze(t, e)
          : ((t.style.left = e.x + 'px'), (t.style.top = e.y + 'px'));
    }
    function Ce(t) {
      return t._leaflet_pos || new A(0, 0);
    }
    if ('onselectstart' in document)
      (se = function () {
        De(window, 'selectstart', Je);
      }),
        (ae = function () {
          He(window, 'selectstart', Je);
        });
    else {
      var Se = ze([
        'userSelect',
        'WebkitUserSelect',
        'OUserSelect',
        'MozUserSelect',
        'msUserSelect',
      ]);
      (se = function () {
        if (Se) {
          var t = document.documentElement.style;
          (re = t[Se]), (t[Se] = 'none');
        }
      }),
        (ae = function () {
          Se && ((document.documentElement.style[Se] = re), (re = void 0));
        });
    }
    function Ee() {
      De(window, 'dragstart', Je);
    }
    function Ae() {
      He(window, 'dragstart', Je);
    }
    function Be(t) {
      for (; -1 === t.tabIndex; ) t = t.parentNode;
      t.style &&
        (Oe(),
        (he = t),
        (le = t.style.outline),
        (t.style.outline = 'none'),
        De(window, 'keydown', Oe));
    }
    function Oe() {
      he &&
        ((he.style.outline = le),
        (he = void 0),
        (le = void 0),
        He(window, 'keydown', Oe));
    }
    function Ie(t) {
      do {
        t = t.parentNode;
      } while (!((t.offsetWidth && t.offsetHeight) || t === document.body));
      return t;
    }
    function Re(t) {
      var e = t.getBoundingClientRect();
      return {
        x: e.width / t.offsetWidth || 1,
        y: e.height / t.offsetHeight || 1,
        boundingClientRect: e,
      };
    }
    var je = {
      __proto__: null,
      TRANSFORM: ue,
      TRANSITION: de,
      TRANSITION_END: ce,
      get: _e,
      getStyle: me,
      create: pe,
      remove: fe,
      empty: ge,
      toFront: ve,
      toBack: ye,
      hasClass: be,
      addClass: xe,
      removeClass: we,
      setClass: Le,
      getClass: Pe,
      setOpacity: Te,
      testProp: ze,
      setTransform: Ze,
      setPosition: ke,
      getPosition: Ce,
      get disableTextSelection() {
        return se;
      },
      get enableTextSelection() {
        return ae;
      },
      disableImageDrag: Ee,
      enableImageDrag: Ae,
      preventOutline: Be,
      restoreOutline: Oe,
      getSizedParentNode: Ie,
      getScale: Re,
    };
    function De(t, e, i, n) {
      if (e && 'object' == typeof e) for (var o in e) Ue(t, o, e[o], i);
      else for (var s = 0, a = (e = c(e)).length; s < a; s++) Ue(t, e[s], i, n);
      return this;
    }
    var Ne = '_leaflet_events';
    function He(t, e, i, n) {
      if (1 === arguments.length) We(t), delete t[Ne];
      else if (e && 'object' == typeof e) for (var o in e) Ge(t, o, e[o], i);
      else if (((e = c(e)), 2 === arguments.length))
        We(t, function (t) {
          return -1 !== v(e, t);
        });
      else for (var s = 0, a = e.length; s < a; s++) Ge(t, e[s], i, n);
      return this;
    }
    function We(t, e) {
      for (var i in t[Ne]) {
        var n = i.split(/\d/)[0];
        (e && !e(n)) || Ge(t, n, null, null, i);
      }
    }
    var Fe = {
      mouseenter: 'mouseover',
      mouseleave: 'mouseout',
      wheel: !('onwheel' in window) && 'mousewheel',
    };
    function Ue(t, e, i, n) {
      var o = e + a(i) + (n ? '_' + a(n) : '');
      if (t[Ne] && t[Ne][o]) return this;
      var s = function (e) {
          return i.call(n || t, e || window.event);
        },
        r = s;
      !jt.touchNative && jt.pointer && 0 === e.indexOf('touch')
        ? (s = qt(t, e, s))
        : jt.touch && 'dblclick' === e
        ? (s = ne(t, s))
        : 'addEventListener' in t
        ? 'touchstart' === e ||
          'touchmove' === e ||
          'wheel' === e ||
          'mousewheel' === e
          ? t.addEventListener(
              Fe[e] || e,
              s,
              !!jt.passiveEvents && { passive: !1 }
            )
          : 'mouseenter' === e || 'mouseleave' === e
          ? ((s = function (e) {
              (e = e || window.event), ei(t, e) && r(e);
            }),
            t.addEventListener(Fe[e], s, !1))
          : t.addEventListener(e, r, !1)
        : t.attachEvent('on' + e, s),
        (t[Ne] = t[Ne] || {}),
        (t[Ne][o] = s);
    }
    function Ge(t, e, i, n, o) {
      o = o || e + a(i) + (n ? '_' + a(n) : '');
      var s = t[Ne] && t[Ne][o];
      if (!s) return this;
      !jt.touchNative && jt.pointer && 0 === e.indexOf('touch')
        ? Kt(t, e, s)
        : jt.touch && 'dblclick' === e
        ? oe(t, s)
        : 'removeEventListener' in t
        ? t.removeEventListener(Fe[e] || e, s, !1)
        : t.detachEvent('on' + e, s),
        (t[Ne][o] = null);
    }
    function Ve(t) {
      return (
        t.stopPropagation
          ? t.stopPropagation()
          : t.originalEvent
          ? (t.originalEvent._stopped = !0)
          : (t.cancelBubble = !0),
        this
      );
    }
    function qe(t) {
      return Ue(t, 'wheel', Ve), this;
    }
    function Ke(t) {
      return (
        De(t, 'mousedown touchstart dblclick contextmenu', Ve),
        (t._leaflet_disable_click = !0),
        this
      );
    }
    function Je(t) {
      return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
    }
    function Ye(t) {
      return Je(t), Ve(t), this;
    }
    function Xe(t) {
      if (t.composedPath) return t.composedPath();
      for (var e = [], i = t.target; i; ) e.push(i), (i = i.parentNode);
      return e;
    }
    function $e(t, e) {
      if (!e) return new A(t.clientX, t.clientY);
      var i = Re(e),
        n = i.boundingClientRect;
      return new A(
        (t.clientX - n.left) / i.x - e.clientLeft,
        (t.clientY - n.top) / i.y - e.clientTop
      );
    }
    var Qe =
      jt.linux && jt.chrome
        ? window.devicePixelRatio
        : jt.mac
        ? 3 * window.devicePixelRatio
        : window.devicePixelRatio > 0
        ? 2 * window.devicePixelRatio
        : 1;
    function ti(t) {
      return jt.edge
        ? t.wheelDeltaY / 2
        : t.deltaY && 0 === t.deltaMode
        ? -t.deltaY / Qe
        : t.deltaY && 1 === t.deltaMode
        ? 20 * -t.deltaY
        : t.deltaY && 2 === t.deltaMode
        ? 60 * -t.deltaY
        : t.deltaX || t.deltaZ
        ? 0
        : t.wheelDelta
        ? (t.wheelDeltaY || t.wheelDelta) / 2
        : t.detail && Math.abs(t.detail) < 32765
        ? 20 * -t.detail
        : t.detail
        ? (t.detail / -32765) * 60
        : 0;
    }
    function ei(t, e) {
      var i = e.relatedTarget;
      if (!i) return !0;
      try {
        for (; i && i !== t; ) i = i.parentNode;
      } catch (n) {
        return !1;
      }
      return i !== t;
    }
    var ii = {
        __proto__: null,
        on: De,
        off: He,
        stopPropagation: Ve,
        disableScrollPropagation: qe,
        disableClickPropagation: Ke,
        preventDefault: Je,
        stop: Ye,
        getPropagationPath: Xe,
        getMousePosition: $e,
        getWheelDelta: ti,
        isExternalTarget: ei,
        addListener: De,
        removeListener: He,
      },
      ni = E.extend({
        run: function (t, e, i, n) {
          this.stop(),
            (this._el = t),
            (this._inProgress = !0),
            (this._duration = i || 0.25),
            (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
            (this._startPos = Ce(t)),
            (this._offset = e.subtract(this._startPos)),
            (this._startTime = +new Date()),
            this.fire('start'),
            this._animate();
        },
        stop: function () {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function () {
          (this._animId = M(this._animate, this)), this._step();
        },
        _step: function (t) {
          var e = +new Date() - this._startTime,
            i = 1e3 * this._duration;
          e < i
            ? this._runFrame(this._easeOut(e / i), t)
            : (this._runFrame(1), this._complete());
        },
        _runFrame: function (t, e) {
          var i = this._startPos.add(this._offset.multiplyBy(t));
          e && i._round(), ke(this._el, i), this.fire('step');
        },
        _complete: function () {
          z(this._animId), (this._inProgress = !1), this.fire('end');
        },
        _easeOut: function (t) {
          return 1 - Math.pow(1 - t, this._easeOutPower);
        },
      }),
      oi = E.extend({
        options: {
          crs: J,
          center: void 0,
          zoom: void 0,
          minZoom: void 0,
          maxZoom: void 0,
          layers: [],
          maxBounds: void 0,
          renderer: void 0,
          zoomAnimation: !0,
          zoomAnimationThreshold: 4,
          fadeAnimation: !0,
          markerZoomAnimation: !0,
          transform3DLimit: 8388608,
          zoomSnap: 1,
          zoomDelta: 1,
          trackResize: !0,
        },
        initialize: function (t, e) {
          (e = _(this, e)),
            (this._handlers = []),
            (this._layers = {}),
            (this._zoomBoundLayers = {}),
            (this._sizeChanged = !0),
            this._initContainer(t),
            this._initLayout(),
            (this._onResize = o(this._onResize, this)),
            this._initEvents(),
            e.maxBounds && this.setMaxBounds(e.maxBounds),
            void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
            e.center &&
              void 0 !== e.zoom &&
              this.setView(H(e.center), e.zoom, { reset: !0 }),
            this.callInitHooks(),
            (this._zoomAnimated =
              de && jt.any3d && !jt.mobileOpera && this.options.zoomAnimation),
            this._zoomAnimated &&
              (this._createAnimProxy(),
              De(this._proxy, ce, this._catchTransitionEnd, this)),
            this._addLayers(this.options.layers);
        },
        setView: function (t, e, n) {
          return (
            (e = void 0 === e ? this._zoom : this._limitZoom(e)),
            (t = this._limitCenter(H(t), e, this.options.maxBounds)),
            (n = n || {}),
            this._stop(),
            this._loaded &&
            !n.reset &&
            !0 !== n &&
            (void 0 !== n.animate &&
              ((n.zoom = i({ animate: n.animate }, n.zoom)),
              (n.pan = i({ animate: n.animate, duration: n.duration }, n.pan))),
            this._zoom !== e
              ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, n.zoom)
              : this._tryAnimatedPan(t, n.pan))
              ? (clearTimeout(this._sizeTimer), this)
              : (this._resetView(t, e, n.pan && n.pan.noMoveStart), this)
          );
        },
        setZoom: function (t, e) {
          return this._loaded
            ? this.setView(this.getCenter(), t, { zoom: e })
            : ((this._zoom = t), this);
        },
        zoomIn: function (t, e) {
          return (
            (t = t || (jt.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom + t, e)
          );
        },
        zoomOut: function (t, e) {
          return (
            (t = t || (jt.any3d ? this.options.zoomDelta : 1)),
            this.setZoom(this._zoom - t, e)
          );
        },
        setZoomAround: function (t, e, i) {
          var n = this.getZoomScale(e),
            o = this.getSize().divideBy(2),
            s = (t instanceof A ? t : this.latLngToContainerPoint(t))
              .subtract(o)
              .multiplyBy(1 - 1 / n),
            a = this.containerPointToLatLng(o.add(s));
          return this.setView(a, e, { zoom: i });
        },
        _getBoundsCenterZoom: function (t, e) {
          (e = e || {}), (t = t.getBounds ? t.getBounds() : D(t));
          var i = O(e.paddingTopLeft || e.padding || [0, 0]),
            n = O(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.getBoundsZoom(t, !1, i.add(n));
          if (
            (o = 'number' == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) ===
            1 / 0
          )
            return { center: t.getCenter(), zoom: o };
          var s = n.subtract(i).divideBy(2),
            a = this.project(t.getSouthWest(), o),
            r = this.project(t.getNorthEast(), o);
          return {
            center: this.unproject(a.add(r).divideBy(2).add(s), o),
            zoom: o,
          };
        },
        fitBounds: function (t, e) {
          if (!(t = D(t)).isValid()) throw new Error('Bounds are not valid.');
          var i = this._getBoundsCenterZoom(t, e);
          return this.setView(i.center, i.zoom, e);
        },
        fitWorld: function (t) {
          return this.fitBounds(
            [
              [-90, -180],
              [90, 180],
            ],
            t
          );
        },
        panTo: function (t, e) {
          return this.setView(t, this._zoom, { pan: e });
        },
        panBy: function (t, e) {
          if (((e = e || {}), !(t = O(t).round()).x && !t.y))
            return this.fire('moveend');
          if (!0 !== e.animate && !this.getSize().contains(t))
            return (
              this._resetView(
                this.unproject(this.project(this.getCenter()).add(t)),
                this.getZoom()
              ),
              this
            );
          if (
            (this._panAnim ||
              ((this._panAnim = new ni()),
              this._panAnim.on(
                {
                  step: this._onPanTransitionStep,
                  end: this._onPanTransitionEnd,
                },
                this
              )),
            e.noMoveStart || this.fire('movestart'),
            !1 !== e.animate)
          ) {
            xe(this._mapPane, 'leaflet-pan-anim');
            var i = this._getMapPanePos().subtract(t).round();
            this._panAnim.run(
              this._mapPane,
              i,
              e.duration || 0.25,
              e.easeLinearity
            );
          } else this._rawPanBy(t), this.fire('move').fire('moveend');
          return this;
        },
        flyTo: function (t, e, i) {
          if (!1 === (i = i || {}).animate || !jt.any3d)
            return this.setView(t, e, i);
          this._stop();
          var n = this.project(this.getCenter()),
            o = this.project(t),
            s = this.getSize(),
            a = this._zoom;
          (t = H(t)), (e = void 0 === e ? a : e);
          var r = Math.max(s.x, s.y),
            h = r * this.getZoomScale(a, e),
            l = o.distanceTo(n) || 1,
            u = 1.42,
            d = u * u;
          function c(t) {
            var e =
                (h * h - r * r + (t ? -1 : 1) * d * d * l * l) /
                (2 * (t ? h : r) * d * l),
              i = Math.sqrt(e * e + 1) - e;
            return i < 1e-9 ? -18 : Math.log(i);
          }
          function _(t) {
            return (Math.exp(t) - Math.exp(-t)) / 2;
          }
          function m(t) {
            return (Math.exp(t) + Math.exp(-t)) / 2;
          }
          function p(t) {
            return _(t) / m(t);
          }
          var f = c(0);
          function g(t) {
            return r * (m(f) / m(f + u * t));
          }
          function v(t) {
            return (r * (m(f) * p(f + u * t) - _(f))) / d;
          }
          function y(t) {
            return 1 - Math.pow(1 - t, 1.5);
          }
          var b = Date.now(),
            x = (c(1) - f) / u,
            w = i.duration ? 1e3 * i.duration : 1e3 * x * 0.8;
          function L() {
            var i = (Date.now() - b) / w,
              s = y(i) * x;
            i <= 1
              ? ((this._flyToFrame = M(L, this)),
                this._move(
                  this.unproject(n.add(o.subtract(n).multiplyBy(v(s) / l)), a),
                  this.getScaleZoom(r / g(s), a),
                  { flyTo: !0 }
                ))
              : this._move(t, e)._moveEnd(!0);
          }
          return this._moveStart(!0, i.noMoveStart), L.call(this), this;
        },
        flyToBounds: function (t, e) {
          var i = this._getBoundsCenterZoom(t, e);
          return this.flyTo(i.center, i.zoom, e);
        },
        setMaxBounds: function (t) {
          return (
            (t = D(t)),
            this.listens('moveend', this._panInsideMaxBounds) &&
              this.off('moveend', this._panInsideMaxBounds),
            t.isValid()
              ? ((this.options.maxBounds = t),
                this._loaded && this._panInsideMaxBounds(),
                this.on('moveend', this._panInsideMaxBounds))
              : ((this.options.maxBounds = null), this)
          );
        },
        setMinZoom: function (t) {
          var e = this.options.minZoom;
          return (
            (this.options.minZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire('zoomlevelschange'),
            this.getZoom() < this.options.minZoom)
              ? this.setZoom(t)
              : this
          );
        },
        setMaxZoom: function (t) {
          var e = this.options.maxZoom;
          return (
            (this.options.maxZoom = t),
            this._loaded &&
            e !== t &&
            (this.fire('zoomlevelschange'),
            this.getZoom() > this.options.maxZoom)
              ? this.setZoom(t)
              : this
          );
        },
        panInsideBounds: function (t, e) {
          this._enforcingBounds = !0;
          var i = this.getCenter(),
            n = this._limitCenter(i, this._zoom, D(t));
          return (
            i.equals(n) || this.panTo(n, e), (this._enforcingBounds = !1), this
          );
        },
        panInside: function (t, e) {
          var i = O((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
            n = O(e.paddingBottomRight || e.padding || [0, 0]),
            o = this.project(this.getCenter()),
            s = this.project(t),
            a = this.getPixelBounds(),
            r = R([a.min.add(i), a.max.subtract(n)]),
            h = r.getSize();
          if (!r.contains(s)) {
            this._enforcingBounds = !0;
            var l = s.subtract(r.getCenter()),
              u = r.extend(s).getSize().subtract(h);
            (o.x += l.x < 0 ? -u.x : u.x),
              (o.y += l.y < 0 ? -u.y : u.y),
              this.panTo(this.unproject(o), e),
              (this._enforcingBounds = !1);
          }
          return this;
        },
        invalidateSize: function (t) {
          if (!this._loaded) return this;
          t = i({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
          var e = this.getSize();
          (this._sizeChanged = !0), (this._lastCenter = null);
          var n = this.getSize(),
            s = e.divideBy(2).round(),
            a = n.divideBy(2).round(),
            r = s.subtract(a);
          return r.x || r.y
            ? (t.animate && t.pan
                ? this.panBy(r)
                : (t.pan && this._rawPanBy(r),
                  this.fire('move'),
                  t.debounceMoveend
                    ? (clearTimeout(this._sizeTimer),
                      (this._sizeTimer = setTimeout(
                        o(this.fire, this, 'moveend'),
                        200
                      )))
                    : this.fire('moveend')),
              this.fire('resize', { oldSize: e, newSize: n }))
            : this;
        },
        stop: function () {
          return (
            this.setZoom(this._limitZoom(this._zoom)),
            this.options.zoomSnap || this.fire('viewreset'),
            this._stop()
          );
        },
        locate: function (t) {
          if (
            ((t = this._locateOptions = i({ timeout: 1e4, watch: !1 }, t)),
            !('geolocation' in navigator))
          )
            return (
              this._handleGeolocationError({
                code: 0,
                message: 'Geolocation not supported.',
              }),
              this
            );
          var e = o(this._handleGeolocationResponse, this),
            n = o(this._handleGeolocationError, this);
          return (
            t.watch
              ? (this._locationWatchId = navigator.geolocation.watchPosition(
                  e,
                  n,
                  t
                ))
              : navigator.geolocation.getCurrentPosition(e, n, t),
            this
          );
        },
        stopLocate: function () {
          return (
            navigator.geolocation &&
              navigator.geolocation.clearWatch &&
              navigator.geolocation.clearWatch(this._locationWatchId),
            this._locateOptions && (this._locateOptions.setView = !1),
            this
          );
        },
        _handleGeolocationError: function (t) {
          if (this._container._leaflet_id) {
            var e = t.code,
              i =
                t.message ||
                (1 === e
                  ? 'permission denied'
                  : 2 === e
                  ? 'position unavailable'
                  : 'timeout');
            this._locateOptions.setView && !this._loaded && this.fitWorld(),
              this.fire('locationerror', {
                code: e,
                message: 'Geolocation error: ' + i + '.',
              });
          }
        },
        _handleGeolocationResponse: function (t) {
          if (this._container._leaflet_id) {
            var e = new N(t.coords.latitude, t.coords.longitude),
              i = e.toBounds(2 * t.coords.accuracy),
              n = this._locateOptions;
            if (n.setView) {
              var o = this.getBoundsZoom(i);
              this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o);
            }
            var s = { latlng: e, bounds: i, timestamp: t.timestamp };
            for (var a in t.coords)
              'number' == typeof t.coords[a] && (s[a] = t.coords[a]);
            this.fire('locationfound', s);
          }
        },
        addHandler: function (t, e) {
          if (!e) return this;
          var i = (this[t] = new e(this));
          return this._handlers.push(i), this.options[t] && i.enable(), this;
        },
        remove: function () {
          if (
            (this._initEvents(!0),
            this.options.maxBounds &&
              this.off('moveend', this._panInsideMaxBounds),
            this._containerId !== this._container._leaflet_id)
          )
            throw new Error(
              'Map container is being reused by another instance'
            );
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch (e) {
            (this._container._leaflet_id = void 0),
              (this._containerId = void 0);
          }
          var t;
          for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
          this._stop(),
          fe(this._mapPane),
          this._clearControlPos && this._clearControlPos(),
          this._resizeRequest &&
            (z(this._resizeRequest), (this._resizeRequest = null)),
          this._clearHandlers(),
          this._loaded && this.fire('unload'),
          this._layers))
            this._layers[t].remove();
          for (t in this._panes) fe(this._panes[t]);
          return (
            (this._layers = []),
            (this._panes = []),
            delete this._mapPane,
            delete this._renderer,
            this
          );
        },
        createPane: function (t, e) {
          var i = pe(
            'div',
            'leaflet-pane' +
              (t ? ' leaflet-' + t.replace('Pane', '') + '-pane' : ''),
            e || this._mapPane
          );
          return t && (this._panes[t] = i), i;
        },
        getCenter: function () {
          return (
            this._checkIfLoaded(),
            this._lastCenter && !this._moved()
              ? this._lastCenter.clone()
              : this.layerPointToLatLng(this._getCenterLayerPoint())
          );
        },
        getZoom: function () {
          return this._zoom;
        },
        getBounds: function () {
          var t = this.getPixelBounds();
          return new j(
            this.unproject(t.getBottomLeft()),
            this.unproject(t.getTopRight())
          );
        },
        getMinZoom: function () {
          return void 0 === this.options.minZoom
            ? this._layersMinZoom || 0
            : this.options.minZoom;
        },
        getMaxZoom: function () {
          return void 0 === this.options.maxZoom
            ? void 0 === this._layersMaxZoom
              ? 1 / 0
              : this._layersMaxZoom
            : this.options.maxZoom;
        },
        getBoundsZoom: function (t, e, i) {
          (t = D(t)), (i = O(i || [0, 0]));
          var n = this.getZoom() || 0,
            o = this.getMinZoom(),
            s = this.getMaxZoom(),
            a = t.getNorthWest(),
            r = t.getSouthEast(),
            h = this.getSize().subtract(i),
            l = R(this.project(r, n), this.project(a, n)).getSize(),
            u = jt.any3d ? this.options.zoomSnap : 1,
            d = h.x / l.x,
            c = h.y / l.y,
            _ = e ? Math.max(d, c) : Math.min(d, c);
          return (
            (n = this.getScaleZoom(_, n)),
            u &&
              ((n = Math.round(n / (u / 100)) * (u / 100)),
              (n = e ? Math.ceil(n / u) * u : Math.floor(n / u) * u)),
            Math.max(o, Math.min(s, n))
          );
        },
        getSize: function () {
          return (
            (this._size && !this._sizeChanged) ||
              ((this._size = new A(
                this._container.clientWidth || 0,
                this._container.clientHeight || 0
              )),
              (this._sizeChanged = !1)),
            this._size.clone()
          );
        },
        getPixelBounds: function (t, e) {
          var i = this._getTopLeftPoint(t, e);
          return new I(i, i.add(this.getSize()));
        },
        getPixelOrigin: function () {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        getPixelWorldBounds: function (t) {
          return this.options.crs.getProjectedBounds(
            void 0 === t ? this.getZoom() : t
          );
        },
        getPane: function (t) {
          return 'string' == typeof t ? this._panes[t] : t;
        },
        getPanes: function () {
          return this._panes;
        },
        getContainer: function () {
          return this._container;
        },
        getZoomScale: function (t, e) {
          var i = this.options.crs;
          return (e = void 0 === e ? this._zoom : e), i.scale(t) / i.scale(e);
        },
        getScaleZoom: function (t, e) {
          var i = this.options.crs;
          e = void 0 === e ? this._zoom : e;
          var n = i.zoom(t * i.scale(e));
          return isNaN(n) ? 1 / 0 : n;
        },
        project: function (t, e) {
          return (
            (e = void 0 === e ? this._zoom : e),
            this.options.crs.latLngToPoint(H(t), e)
          );
        },
        unproject: function (t, e) {
          return (
            (e = void 0 === e ? this._zoom : e),
            this.options.crs.pointToLatLng(O(t), e)
          );
        },
        layerPointToLatLng: function (t) {
          var e = O(t).add(this.getPixelOrigin());
          return this.unproject(e);
        },
        latLngToLayerPoint: function (t) {
          return this.project(H(t))._round()._subtract(this.getPixelOrigin());
        },
        wrapLatLng: function (t) {
          return this.options.crs.wrapLatLng(H(t));
        },
        wrapLatLngBounds: function (t) {
          return this.options.crs.wrapLatLngBounds(D(t));
        },
        distance: function (t, e) {
          return this.options.crs.distance(H(t), H(e));
        },
        containerPointToLayerPoint: function (t) {
          return O(t).subtract(this._getMapPanePos());
        },
        layerPointToContainerPoint: function (t) {
          return O(t).add(this._getMapPanePos());
        },
        containerPointToLatLng: function (t) {
          var e = this.containerPointToLayerPoint(O(t));
          return this.layerPointToLatLng(e);
        },
        latLngToContainerPoint: function (t) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(H(t)));
        },
        mouseEventToContainerPoint: function (t) {
          return $e(t, this._container);
        },
        mouseEventToLayerPoint: function (t) {
          return this.containerPointToLayerPoint(
            this.mouseEventToContainerPoint(t)
          );
        },
        mouseEventToLatLng: function (t) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
        },
        _initContainer: function (t) {
          var e = (this._container = _e(t));
          if (!e) throw new Error('Map container not found.');
          if (e._leaflet_id)
            throw new Error('Map container is already initialized.');
          De(e, 'scroll', this._onScroll, this), (this._containerId = a(e));
        },
        _initLayout: function () {
          var t = this._container;
          (this._fadeAnimated = this.options.fadeAnimation && jt.any3d),
            xe(
              t,
              'leaflet-container' +
                (jt.touch ? ' leaflet-touch' : '') +
                (jt.retina ? ' leaflet-retina' : '') +
                (jt.ielt9 ? ' leaflet-oldie' : '') +
                (jt.safari ? ' leaflet-safari' : '') +
                (this._fadeAnimated ? ' leaflet-fade-anim' : '')
            );
          var e = me(t, 'position');
          'absolute' !== e &&
            'relative' !== e &&
            'fixed' !== e &&
            'sticky' !== e &&
            (t.style.position = 'relative'),
            this._initPanes(),
            this._initControlPos && this._initControlPos();
        },
        _initPanes: function () {
          var t = (this._panes = {});
          (this._paneRenderers = {}),
            (this._mapPane = this.createPane('mapPane', this._container)),
            ke(this._mapPane, new A(0, 0)),
            this.createPane('tilePane'),
            this.createPane('overlayPane'),
            this.createPane('shadowPane'),
            this.createPane('markerPane'),
            this.createPane('tooltipPane'),
            this.createPane('popupPane'),
            this.options.markerZoomAnimation ||
              (xe(t.markerPane, 'leaflet-zoom-hide'),
              xe(t.shadowPane, 'leaflet-zoom-hide'));
        },
        _resetView: function (t, e, i) {
          ke(this._mapPane, new A(0, 0));
          var n = !this._loaded;
          (this._loaded = !0),
            (e = this._limitZoom(e)),
            this.fire('viewprereset');
          var o = this._zoom !== e;
          this._moveStart(o, i)._move(t, e)._moveEnd(o),
            this.fire('viewreset'),
            n && this.fire('load');
        },
        _moveStart: function (t, e) {
          return t && this.fire('zoomstart'), e || this.fire('movestart'), this;
        },
        _move: function (t, e, i, n) {
          void 0 === e && (e = this._zoom);
          var o = this._zoom !== e;
          return (
            (this._zoom = e),
            (this._lastCenter = t),
            (this._pixelOrigin = this._getNewPixelOrigin(t)),
            n
              ? i && i.pinch && this.fire('zoom', i)
              : ((o || (i && i.pinch)) && this.fire('zoom', i),
                this.fire('move', i)),
            this
          );
        },
        _moveEnd: function (t) {
          return t && this.fire('zoomend'), this.fire('moveend');
        },
        _stop: function () {
          return (
            z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
          );
        },
        _rawPanBy: function (t) {
          ke(this._mapPane, this._getMapPanePos().subtract(t));
        },
        _getZoomSpan: function () {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function () {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function () {
          if (!this._loaded) throw new Error('Set map center and zoom first.');
        },
        _initEvents: function (t) {
          (this._targets = {}), (this._targets[a(this._container)] = this);
          var e = t ? He : De;
          e(
            this._container,
            'click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup',
            this._handleDOMEvent,
            this
          ),
            this.options.trackResize &&
              e(window, 'resize', this._onResize, this),
            jt.any3d &&
              this.options.transform3DLimit &&
              (t ? this.off : this.on).call(this, 'moveend', this._onMoveEnd);
        },
        _onResize: function () {
          z(this._resizeRequest),
            (this._resizeRequest = M(function () {
              this.invalidateSize({ debounceMoveend: !0 });
            }, this));
        },
        _onScroll: function () {
          (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
        },
        _onMoveEnd: function () {
          var t = this._getMapPanePos();
          Math.max(Math.abs(t.x), Math.abs(t.y)) >=
            this.options.transform3DLimit &&
            this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function (t, e) {
          for (
            var i,
              n = [],
              o = 'mouseout' === e || 'mouseover' === e,
              s = t.target || t.srcElement,
              r = !1;
            s;

          ) {
            if (
              (i = this._targets[a(s)]) &&
              ('click' === e || 'preclick' === e) &&
              this._draggableMoved(i)
            ) {
              r = !0;
              break;
            }
            if (i && i.listens(e, !0)) {
              if (o && !ei(s, t)) break;
              if ((n.push(i), o)) break;
            }
            if (s === this._container) break;
            s = s.parentNode;
          }
          return n.length || r || o || !this.listens(e, !0) || (n = [this]), n;
        },
        _isClickDisabled: function (t) {
          for (; t && t !== this._container; ) {
            if (t._leaflet_disable_click) return !0;
            t = t.parentNode;
          }
        },
        _handleDOMEvent: function (t) {
          var e = t.target || t.srcElement;
          if (
            !(
              !this._loaded ||
              e._leaflet_disable_events ||
              ('click' === t.type && this._isClickDisabled(e))
            )
          ) {
            var i = t.type;
            'mousedown' === i && Be(e), this._fireDOMEvent(t, i);
          }
        },
        _mouseEvents: [
          'click',
          'dblclick',
          'mouseover',
          'mouseout',
          'contextmenu',
        ],
        _fireDOMEvent: function (t, e, n) {
          if ('click' === t.type) {
            var o = i({}, t);
            (o.type = 'preclick'), this._fireDOMEvent(o, o.type, n);
          }
          var s = this._findEventTargets(t, e);
          if (n) {
            for (var a = [], r = 0; r < n.length; r++)
              n[r].listens(e, !0) && a.push(n[r]);
            s = a.concat(s);
          }
          if (s.length) {
            'contextmenu' === e && Je(t);
            var h = s[0],
              l = { originalEvent: t };
            if (
              'keypress' !== t.type &&
              'keydown' !== t.type &&
              'keyup' !== t.type
            ) {
              var u = h.getLatLng && (!h._radius || h._radius <= 10);
              (l.containerPoint = u
                ? this.latLngToContainerPoint(h.getLatLng())
                : this.mouseEventToContainerPoint(t)),
                (l.layerPoint = this.containerPointToLayerPoint(
                  l.containerPoint
                )),
                (l.latlng = u
                  ? h.getLatLng()
                  : this.layerPointToLatLng(l.layerPoint));
            }
            for (r = 0; r < s.length; r++)
              if (
                (s[r].fire(e, l, !0),
                l.originalEvent._stopped ||
                  (!1 === s[r].options.bubblingMouseEvents &&
                    -1 !== v(this._mouseEvents, e)))
              )
                return;
          }
        },
        _draggableMoved: function (t) {
          return (
            ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
              t.dragging.moved()) ||
            (this.boxZoom && this.boxZoom.moved())
          );
        },
        _clearHandlers: function () {
          for (var t = 0, e = this._handlers.length; t < e; t++)
            this._handlers[t].disable();
        },
        whenReady: function (t, e) {
          return (
            this._loaded
              ? t.call(e || this, { target: this })
              : this.on('load', t, e),
            this
          );
        },
        _getMapPanePos: function () {
          return Ce(this._mapPane) || new A(0, 0);
        },
        _moved: function () {
          var t = this._getMapPanePos();
          return t && !t.equals([0, 0]);
        },
        _getTopLeftPoint: function (t, e) {
          return (
            t && void 0 !== e
              ? this._getNewPixelOrigin(t, e)
              : this.getPixelOrigin()
          ).subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function (t, e) {
          var i = this.getSize()._divideBy(2);
          return this.project(t, e)
            ._subtract(i)
            ._add(this._getMapPanePos())
            ._round();
        },
        _latLngToNewLayerPoint: function (t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return this.project(t, e)._subtract(n);
        },
        _latLngBoundsToNewLayerBounds: function (t, e, i) {
          var n = this._getNewPixelOrigin(i, e);
          return R([
            this.project(t.getSouthWest(), e)._subtract(n),
            this.project(t.getNorthWest(), e)._subtract(n),
            this.project(t.getSouthEast(), e)._subtract(n),
            this.project(t.getNorthEast(), e)._subtract(n),
          ]);
        },
        _getCenterLayerPoint: function () {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        _getCenterOffset: function (t) {
          return this.latLngToLayerPoint(t).subtract(
            this._getCenterLayerPoint()
          );
        },
        _limitCenter: function (t, e, i) {
          if (!i) return t;
          var n = this.project(t, e),
            o = this.getSize().divideBy(2),
            s = new I(n.subtract(o), n.add(o)),
            a = this._getBoundsOffset(s, i, e);
          return Math.abs(a.x) <= 1 && Math.abs(a.y) <= 1
            ? t
            : this.unproject(n.add(a), e);
        },
        _limitOffset: function (t, e) {
          if (!e) return t;
          var i = this.getPixelBounds(),
            n = new I(i.min.add(t), i.max.add(t));
          return t.add(this._getBoundsOffset(n, e));
        },
        _getBoundsOffset: function (t, e, i) {
          var n = R(
              this.project(e.getNorthEast(), i),
              this.project(e.getSouthWest(), i)
            ),
            o = n.min.subtract(t.min),
            s = n.max.subtract(t.max);
          return new A(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
        },
        _rebound: function (t, e) {
          return t + e > 0
            ? Math.round(t - e) / 2
            : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
        },
        _limitZoom: function (t) {
          var e = this.getMinZoom(),
            i = this.getMaxZoom(),
            n = jt.any3d ? this.options.zoomSnap : 1;
          return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t));
        },
        _onPanTransitionStep: function () {
          this.fire('move');
        },
        _onPanTransitionEnd: function () {
          we(this._mapPane, 'leaflet-pan-anim'), this.fire('moveend');
        },
        _tryAnimatedPan: function (t, e) {
          var i = this._getCenterOffset(t)._trunc();
          return !(
            (!0 !== (e && e.animate) && !this.getSize().contains(i)) ||
            (this.panBy(i, e), 0)
          );
        },
        _createAnimProxy: function () {
          var t = (this._proxy = pe(
            'div',
            'leaflet-proxy leaflet-zoom-animated'
          ));
          this._panes.mapPane.appendChild(t),
            this.on(
              'zoomanim',
              function (t) {
                var e = ue,
                  i = this._proxy.style[e];
                Ze(
                  this._proxy,
                  this.project(t.center, t.zoom),
                  this.getZoomScale(t.zoom, 1)
                ),
                  i === this._proxy.style[e] &&
                    this._animatingZoom &&
                    this._onZoomTransitionEnd();
              },
              this
            ),
            this.on('load moveend', this._animMoveEnd, this),
            this._on('unload', this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function () {
          fe(this._proxy),
            this.off('load moveend', this._animMoveEnd, this),
            delete this._proxy;
        },
        _animMoveEnd: function () {
          var t = this.getCenter(),
            e = this.getZoom();
          Ze(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
        },
        _catchTransitionEnd: function (t) {
          this._animatingZoom &&
            t.propertyName.indexOf('transform') >= 0 &&
            this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function () {
          return !this._container.getElementsByClassName(
            'leaflet-zoom-animated'
          ).length;
        },
        _tryAnimatedZoom: function (t, e, i) {
          if (this._animatingZoom) return !0;
          if (
            ((i = i || {}),
            !this._zoomAnimated ||
              !1 === i.animate ||
              this._nothingToAnimate() ||
              Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold)
          )
            return !1;
          var n = this.getZoomScale(e),
            o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
          return !(
            (!0 !== i.animate && !this.getSize().contains(o)) ||
            (M(function () {
              this._moveStart(!0, !1)._animateZoom(t, e, !0);
            }, this),
            0)
          );
        },
        _animateZoom: function (t, e, i, n) {
          this._mapPane &&
            (i &&
              ((this._animatingZoom = !0),
              (this._animateToCenter = t),
              (this._animateToZoom = e),
              xe(this._mapPane, 'leaflet-zoom-anim')),
            this.fire('zoomanim', { center: t, zoom: e, noUpdate: n }),
            this._tempFireZoomEvent ||
              (this._tempFireZoomEvent = this._zoom !== this._animateToZoom),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            setTimeout(o(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function () {
          this._animatingZoom &&
            (this._mapPane && we(this._mapPane, 'leaflet-zoom-anim'),
            (this._animatingZoom = !1),
            this._move(this._animateToCenter, this._animateToZoom, void 0, !0),
            this._tempFireZoomEvent && this.fire('zoom'),
            delete this._tempFireZoomEvent,
            this.fire('move'),
            this._moveEnd(!0));
        },
      });
    function si(t, e) {
      return new oi(t, e);
    }
    var ai = k.extend({
        options: { position: 'topright' },
        initialize: function (t) {
          _(this, t);
        },
        getPosition: function () {
          return this.options.position;
        },
        setPosition: function (t) {
          var e = this._map;
          return (
            e && e.removeControl(this),
            (this.options.position = t),
            e && e.addControl(this),
            this
          );
        },
        getContainer: function () {
          return this._container;
        },
        addTo: function (t) {
          this.remove(), (this._map = t);
          var e = (this._container = this.onAdd(t)),
            i = this.getPosition(),
            n = t._controlCorners[i];
          return (
            xe(e, 'leaflet-control'),
            -1 !== i.indexOf('bottom')
              ? n.insertBefore(e, n.firstChild)
              : n.appendChild(e),
            this._map.on('unload', this.remove, this),
            this
          );
        },
        remove: function () {
          return this._map
            ? (fe(this._container),
              this.onRemove && this.onRemove(this._map),
              this._map.off('unload', this.remove, this),
              (this._map = null),
              this)
            : this;
        },
        _refocusOnMap: function (t) {
          this._map &&
            t &&
            t.screenX > 0 &&
            t.screenY > 0 &&
            this._map.getContainer().focus();
        },
      }),
      ri = function (t) {
        return new ai(t);
      };
    oi.include({
      addControl: function (t) {
        return t.addTo(this), this;
      },
      removeControl: function (t) {
        return t.remove(), this;
      },
      _initControlPos: function () {
        var t = (this._controlCorners = {}),
          e = 'leaflet-',
          i = (this._controlContainer = pe(
            'div',
            e + 'control-container',
            this._container
          ));
        function n(n, o) {
          var s = e + n + ' ' + e + o;
          t[n + o] = pe('div', s, i);
        }
        n('top', 'left'),
          n('top', 'right'),
          n('bottom', 'left'),
          n('bottom', 'right');
      },
      _clearControlPos: function () {
        for (var t in this._controlCorners) fe(this._controlCorners[t]);
        fe(this._controlContainer),
          delete this._controlCorners,
          delete this._controlContainer;
      },
    });
    var hi = ai.extend({
        options: {
          collapsed: !0,
          position: 'topright',
          autoZIndex: !0,
          hideSingleBase: !1,
          sortLayers: !1,
          sortFunction: function (t, e, i, n) {
            return i < n ? -1 : n < i ? 1 : 0;
          },
        },
        initialize: function (t, e, i) {
          for (var n in (_(this, i),
          (this._layerControlInputs = []),
          (this._layers = []),
          (this._lastZIndex = 0),
          (this._handlingClick = !1),
          t))
            this._addLayer(t[n], n);
          for (n in e) this._addLayer(e[n], n, !0);
        },
        onAdd: function (t) {
          this._initLayout(),
            this._update(),
            (this._map = t),
            t.on('zoomend', this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.on('add remove', this._onLayerChange, this);
          return this._container;
        },
        addTo: function (t) {
          return ai.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
        },
        onRemove: function () {
          this._map.off('zoomend', this._checkDisabledLayers, this);
          for (var t = 0; t < this._layers.length; t++)
            this._layers[t].layer.off('add remove', this._onLayerChange, this);
        },
        addBaseLayer: function (t, e) {
          return this._addLayer(t, e), this._map ? this._update() : this;
        },
        addOverlay: function (t, e) {
          return this._addLayer(t, e, !0), this._map ? this._update() : this;
        },
        removeLayer: function (t) {
          t.off('add remove', this._onLayerChange, this);
          var e = this._getLayer(a(t));
          return (
            e && this._layers.splice(this._layers.indexOf(e), 1),
            this._map ? this._update() : this
          );
        },
        expand: function () {
          xe(this._container, 'leaflet-control-layers-expanded'),
            (this._section.style.height = null);
          var t = this._map.getSize().y - (this._container.offsetTop + 50);
          return (
            t < this._section.clientHeight
              ? (xe(this._section, 'leaflet-control-layers-scrollbar'),
                (this._section.style.height = t + 'px'))
              : we(this._section, 'leaflet-control-layers-scrollbar'),
            this._checkDisabledLayers(),
            this
          );
        },
        collapse: function () {
          return we(this._container, 'leaflet-control-layers-expanded'), this;
        },
        _initLayout: function () {
          var t = 'leaflet-control-layers',
            e = (this._container = pe('div', t)),
            i = this.options.collapsed;
          e.setAttribute('aria-haspopup', !0), Ke(e), qe(e);
          var n = (this._section = pe('section', t + '-list'));
          i &&
            (this._map.on('click', this.collapse, this),
            De(
              e,
              { mouseenter: this._expandSafely, mouseleave: this.collapse },
              this
            ));
          var o = (this._layersLink = pe('a', t + '-toggle', e));
          (o.href = '#'),
            (o.title = 'Layers'),
            o.setAttribute('role', 'button'),
            De(
              o,
              {
                keydown: function (t) {
                  13 === t.keyCode && this._expandSafely();
                },
                click: function (t) {
                  Je(t), this._expandSafely();
                },
              },
              this
            ),
            i || this.expand(),
            (this._baseLayersList = pe('div', t + '-base', n)),
            (this._separator = pe('div', t + '-separator', n)),
            (this._overlaysList = pe('div', t + '-overlays', n)),
            e.appendChild(n);
        },
        _getLayer: function (t) {
          for (var e = 0; e < this._layers.length; e++)
            if (this._layers[e] && a(this._layers[e].layer) === t)
              return this._layers[e];
        },
        _addLayer: function (t, e, i) {
          this._map && t.on('add remove', this._onLayerChange, this),
            this._layers.push({ layer: t, name: e, overlay: i }),
            this.options.sortLayers &&
              this._layers.sort(
                o(function (t, e) {
                  return this.options.sortFunction(
                    t.layer,
                    e.layer,
                    t.name,
                    e.name
                  );
                }, this)
              ),
            this.options.autoZIndex &&
              t.setZIndex &&
              (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
            this._expandIfNotCollapsed();
        },
        _update: function () {
          if (!this._container) return this;
          ge(this._baseLayersList),
            ge(this._overlaysList),
            (this._layerControlInputs = []);
          var t,
            e,
            i,
            n,
            o = 0;
          for (i = 0; i < this._layers.length; i++)
            (n = this._layers[i]),
              this._addItem(n),
              (e = e || n.overlay),
              (t = t || !n.overlay),
              (o += n.overlay ? 0 : 1);
          return (
            this.options.hideSingleBase &&
              ((t = t && o > 1),
              (this._baseLayersList.style.display = t ? '' : 'none')),
            (this._separator.style.display = e && t ? '' : 'none'),
            this
          );
        },
        _onLayerChange: function (t) {
          this._handlingClick || this._update();
          var e = this._getLayer(a(t.target)),
            i = e.overlay
              ? 'add' === t.type
                ? 'overlayadd'
                : 'overlayremove'
              : 'add' === t.type
              ? 'baselayerchange'
              : null;
          i && this._map.fire(i, e);
        },
        _createRadioElement: function (t, e) {
          var i =
              '<input type="radio" class="leaflet-control-layers-selector" name="' +
              t +
              '"' +
              (e ? ' checked="checked"' : '') +
              '/>',
            n = document.createElement('div');
          return (n.innerHTML = i), n.firstChild;
        },
        _addItem: function (t) {
          var e,
            i = document.createElement('label'),
            n = this._map.hasLayer(t.layer);
          t.overlay
            ? (((e = document.createElement('input')).type = 'checkbox'),
              (e.className = 'leaflet-control-layers-selector'),
              (e.defaultChecked = n))
            : (e = this._createRadioElement(
                'leaflet-base-layers_' + a(this),
                n
              )),
            this._layerControlInputs.push(e),
            (e.layerId = a(t.layer)),
            De(e, 'click', this._onInputClick, this);
          var o = document.createElement('span');
          o.innerHTML = ' ' + t.name;
          var s = document.createElement('span');
          return (
            i.appendChild(s),
            s.appendChild(e),
            s.appendChild(o),
            (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
              i
            ),
            this._checkDisabledLayers(),
            i
          );
        },
        _onInputClick: function () {
          var t,
            e,
            i = this._layerControlInputs,
            n = [],
            o = [];
          this._handlingClick = !0;
          for (var s = i.length - 1; s >= 0; s--)
            (t = i[s]),
              (e = this._getLayer(t.layerId).layer),
              t.checked ? n.push(e) : t.checked || o.push(e);
          for (s = 0; s < o.length; s++)
            this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
          for (s = 0; s < n.length; s++)
            this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
          (this._handlingClick = !1), this._refocusOnMap();
        },
        _checkDisabledLayers: function () {
          for (
            var t,
              e,
              i = this._layerControlInputs,
              n = this._map.getZoom(),
              o = i.length - 1;
            o >= 0;
            o--
          )
            (t = i[o]),
              (e = this._getLayer(t.layerId).layer),
              (t.disabled =
                (void 0 !== e.options.minZoom && n < e.options.minZoom) ||
                (void 0 !== e.options.maxZoom && n > e.options.maxZoom));
        },
        _expandIfNotCollapsed: function () {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function () {
          var t = this._section;
          De(t, 'click', Je),
            this.expand(),
            setTimeout(function () {
              He(t, 'click', Je);
            });
        },
      }),
      li = function (t, e, i) {
        return new hi(t, e, i);
      },
      ui = ai.extend({
        options: {
          position: 'topleft',
          zoomInText: '<span aria-hidden="true">+</span>',
          zoomInTitle: 'Zoom in',
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          zoomOutTitle: 'Zoom out',
        },
        onAdd: function (t) {
          var e = 'leaflet-control-zoom',
            i = pe('div', e + ' leaflet-bar'),
            n = this.options;
          return (
            (this._zoomInButton = this._createButton(
              n.zoomInText,
              n.zoomInTitle,
              e + '-in',
              i,
              this._zoomIn
            )),
            (this._zoomOutButton = this._createButton(
              n.zoomOutText,
              n.zoomOutTitle,
              e + '-out',
              i,
              this._zoomOut
            )),
            this._updateDisabled(),
            t.on('zoomend zoomlevelschange', this._updateDisabled, this),
            i
          );
        },
        onRemove: function (t) {
          t.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },
        disable: function () {
          return (this._disabled = !0), this._updateDisabled(), this;
        },
        enable: function () {
          return (this._disabled = !1), this._updateDisabled(), this;
        },
        _zoomIn: function (t) {
          !this._disabled &&
            this._map._zoom < this._map.getMaxZoom() &&
            this._map.zoomIn(
              this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
            );
        },
        _zoomOut: function (t) {
          !this._disabled &&
            this._map._zoom > this._map.getMinZoom() &&
            this._map.zoomOut(
              this._map.options.zoomDelta * (t.shiftKey ? 3 : 1)
            );
        },
        _createButton: function (t, e, i, n, o) {
          var s = pe('a', i, n);
          return (
            (s.innerHTML = t),
            (s.href = '#'),
            (s.title = e),
            s.setAttribute('role', 'button'),
            s.setAttribute('aria-label', e),
            Ke(s),
            De(s, 'click', Ye),
            De(s, 'click', o, this),
            De(s, 'click', this._refocusOnMap, this),
            s
          );
        },
        _updateDisabled: function () {
          var t = this._map,
            e = 'leaflet-disabled';
          we(this._zoomInButton, e),
            we(this._zoomOutButton, e),
            this._zoomInButton.setAttribute('aria-disabled', 'false'),
            this._zoomOutButton.setAttribute('aria-disabled', 'false'),
            (this._disabled || t._zoom === t.getMinZoom()) &&
              (xe(this._zoomOutButton, e),
              this._zoomOutButton.setAttribute('aria-disabled', 'true')),
            (this._disabled || t._zoom === t.getMaxZoom()) &&
              (xe(this._zoomInButton, e),
              this._zoomInButton.setAttribute('aria-disabled', 'true'));
        },
      });
    oi.mergeOptions({ zoomControl: !0 }),
      oi.addInitHook(function () {
        this.options.zoomControl &&
          ((this.zoomControl = new ui()), this.addControl(this.zoomControl));
      });
    var di = function (t) {
        return new ui(t);
      },
      ci = ai.extend({
        options: {
          position: 'bottomleft',
          maxWidth: 100,
          metric: !0,
          imperial: !0,
        },
        onAdd: function (t) {
          var e = 'leaflet-control-scale',
            i = pe('div', e),
            n = this.options;
          return (
            this._addScales(n, e + '-line', i),
            t.on(n.updateWhenIdle ? 'moveend' : 'move', this._update, this),
            t.whenReady(this._update, this),
            i
          );
        },
        onRemove: function (t) {
          t.off(
            this.options.updateWhenIdle ? 'moveend' : 'move',
            this._update,
            this
          );
        },
        _addScales: function (t, e, i) {
          t.metric && (this._mScale = pe('div', e, i)),
            t.imperial && (this._iScale = pe('div', e, i));
        },
        _update: function () {
          var t = this._map,
            e = t.getSize().y / 2,
            i = t.distance(
              t.containerPointToLatLng([0, e]),
              t.containerPointToLatLng([this.options.maxWidth, e])
            );
          this._updateScales(i);
        },
        _updateScales: function (t) {
          this.options.metric && t && this._updateMetric(t),
            this.options.imperial && t && this._updateImperial(t);
        },
        _updateMetric: function (t) {
          var e = this._getRoundNum(t),
            i = e < 1e3 ? e + ' m' : e / 1e3 + ' km';
          this._updateScale(this._mScale, i, e / t);
        },
        _updateImperial: function (t) {
          var e,
            i,
            n,
            o = 3.2808399 * t;
          o > 5280
            ? ((e = o / 5280),
              (i = this._getRoundNum(e)),
              this._updateScale(this._iScale, i + ' mi', i / e))
            : ((n = this._getRoundNum(o)),
              this._updateScale(this._iScale, n + ' ft', n / o));
        },
        _updateScale: function (t, e, i) {
          (t.style.width = Math.round(this.options.maxWidth * i) + 'px'),
            (t.innerHTML = e);
        },
        _getRoundNum: function (t) {
          var e = Math.pow(10, (Math.floor(t) + '').length - 1),
            i = t / e;
          return (
            e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
          );
        },
      }),
      _i = function (t) {
        return new ci(t);
      },
      mi =
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',
      pi = ai.extend({
        options: {
          position: 'bottomright',
          prefix:
            '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
            (jt.inlineSvg ? mi + ' ' : '') +
            'Leaflet</a>',
        },
        initialize: function (t) {
          _(this, t), (this._attributions = {});
        },
        onAdd: function (t) {
          for (var e in ((t.attributionControl = this),
          (this._container = pe('div', 'leaflet-control-attribution')),
          Ke(this._container),
          t._layers))
            t._layers[e].getAttribution &&
              this.addAttribution(t._layers[e].getAttribution());
          return (
            this._update(),
            t.on('layeradd', this._addAttribution, this),
            this._container
          );
        },
        onRemove: function (t) {
          t.off('layeradd', this._addAttribution, this);
        },
        _addAttribution: function (t) {
          t.layer.getAttribution &&
            (this.addAttribution(t.layer.getAttribution()),
            t.layer.once(
              'remove',
              function () {
                this.removeAttribution(t.layer.getAttribution());
              },
              this
            ));
        },
        setPrefix: function (t) {
          return (this.options.prefix = t), this._update(), this;
        },
        addAttribution: function (t) {
          return t
            ? (this._attributions[t] || (this._attributions[t] = 0),
              this._attributions[t]++,
              this._update(),
              this)
            : this;
        },
        removeAttribution: function (t) {
          return t
            ? (this._attributions[t] &&
                (this._attributions[t]--, this._update()),
              this)
            : this;
        },
        _update: function () {
          if (this._map) {
            var t = [];
            for (var e in this._attributions)
              this._attributions[e] && t.push(e);
            var i = [];
            this.options.prefix && i.push(this.options.prefix),
              t.length && i.push(t.join(', ')),
              (this._container.innerHTML = i.join(
                ' <span aria-hidden="true">|</span> '
              ));
          }
        },
      });
    oi.mergeOptions({ attributionControl: !0 }),
      oi.addInitHook(function () {
        this.options.attributionControl && new pi().addTo(this);
      });
    var fi = function (t) {
      return new pi(t);
    };
    (ai.Layers = hi),
      (ai.Zoom = ui),
      (ai.Scale = ci),
      (ai.Attribution = pi),
      (ri.layers = li),
      (ri.zoom = di),
      (ri.scale = _i),
      (ri.attribution = fi);
    var gi = k.extend({
      initialize: function (t) {
        this._map = t;
      },
      enable: function () {
        return this._enabled || ((this._enabled = !0), this.addHooks()), this;
      },
      disable: function () {
        return this._enabled
          ? ((this._enabled = !1), this.removeHooks(), this)
          : this;
      },
      enabled: function () {
        return !!this._enabled;
      },
    });
    gi.addTo = function (t, e) {
      return t.addHandler(e, this), this;
    };
    var vi,
      yi = { Events: S },
      bi = jt.touch ? 'touchstart mousedown' : 'mousedown',
      xi = E.extend({
        options: { clickTolerance: 3 },
        initialize: function (t, e, i, n) {
          _(this, n),
            (this._element = t),
            (this._dragStartTarget = e || t),
            (this._preventOutline = i);
        },
        enable: function () {
          this._enabled ||
            (De(this._dragStartTarget, bi, this._onDown, this),
            (this._enabled = !0));
        },
        disable: function () {
          this._enabled &&
            (xi._dragging === this && this.finishDrag(!0),
            He(this._dragStartTarget, bi, this._onDown, this),
            (this._enabled = !1),
            (this._moved = !1));
        },
        _onDown: function (t) {
          if (
            this._enabled &&
            ((this._moved = !1), !be(this._element, 'leaflet-zoom-anim'))
          )
            if (t.touches && 1 !== t.touches.length)
              xi._dragging === this && this.finishDrag();
            else if (
              !(
                xi._dragging ||
                t.shiftKey ||
                (1 !== t.which && 1 !== t.button && !t.touches) ||
                ((xi._dragging = this),
                this._preventOutline && Be(this._element),
                Ee(),
                se(),
                this._moving)
              )
            ) {
              this.fire('down');
              var e = t.touches ? t.touches[0] : t,
                i = Ie(this._element);
              (this._startPoint = new A(e.clientX, e.clientY)),
                (this._startPos = Ce(this._element)),
                (this._parentScale = Re(i));
              var n = 'mousedown' === t.type;
              De(document, n ? 'mousemove' : 'touchmove', this._onMove, this),
                De(
                  document,
                  n ? 'mouseup' : 'touchend touchcancel',
                  this._onUp,
                  this
                );
            }
        },
        _onMove: function (t) {
          if (this._enabled)
            if (t.touches && t.touches.length > 1) this._moved = !0;
            else {
              var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                i = new A(e.clientX, e.clientY)._subtract(this._startPoint);
              (i.x || i.y) &&
                (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance ||
                  ((i.x /= this._parentScale.x),
                  (i.y /= this._parentScale.y),
                  Je(t),
                  this._moved ||
                    (this.fire('dragstart'),
                    (this._moved = !0),
                    xe(document.body, 'leaflet-dragging'),
                    (this._lastTarget = t.target || t.srcElement),
                    window.SVGElementInstance &&
                      this._lastTarget instanceof window.SVGElementInstance &&
                      (this._lastTarget =
                        this._lastTarget.correspondingUseElement),
                    xe(this._lastTarget, 'leaflet-drag-target')),
                  (this._newPos = this._startPos.add(i)),
                  (this._moving = !0),
                  (this._lastEvent = t),
                  this._updatePosition()));
            }
        },
        _updatePosition: function () {
          var t = { originalEvent: this._lastEvent };
          this.fire('predrag', t),
            ke(this._element, this._newPos),
            this.fire('drag', t);
        },
        _onUp: function () {
          this._enabled && this.finishDrag();
        },
        finishDrag: function (t) {
          we(document.body, 'leaflet-dragging'),
            this._lastTarget &&
              (we(this._lastTarget, 'leaflet-drag-target'),
              (this._lastTarget = null)),
            He(document, 'mousemove touchmove', this._onMove, this),
            He(document, 'mouseup touchend touchcancel', this._onUp, this),
            Ae(),
            ae(),
            this._moved &&
              this._moving &&
              this.fire('dragend', {
                noInertia: t,
                distance: this._newPos.distanceTo(this._startPos),
              }),
            (this._moving = !1),
            (xi._dragging = !1);
        },
      });
    function wi(t, e) {
      if (!e || !t.length) return t.slice();
      var i = e * e;
      return (t = Ti((t = zi(t, i)), i));
    }
    function Li(t, e, i) {
      return Math.sqrt(Ei(t, e, i, !0));
    }
    function Pi(t, e, i) {
      return Ei(t, e, i);
    }
    function Ti(t, e) {
      var i = t.length,
        n = new (typeof Uint8Array != void 0 + '' ? Uint8Array : Array)(i);
      (n[0] = n[i - 1] = 1), Mi(t, n, e, 0, i - 1);
      var o,
        s = [];
      for (o = 0; o < i; o++) n[o] && s.push(t[o]);
      return s;
    }
    function Mi(t, e, i, n, o) {
      var s,
        a,
        r,
        h = 0;
      for (a = n + 1; a <= o - 1; a++)
        (r = Ei(t[a], t[n], t[o], !0)) > h && ((s = a), (h = r));
      h > i && ((e[s] = 1), Mi(t, e, i, n, s), Mi(t, e, i, s, o));
    }
    function zi(t, e) {
      for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
        Si(t[n], t[o]) > e && (i.push(t[n]), (o = n));
      return o < s - 1 && i.push(t[s - 1]), i;
    }
    function Zi(t, e, i, n, o) {
      var s,
        a,
        r,
        h = n ? vi : Ci(t, i),
        l = Ci(e, i);
      for (vi = l; ; ) {
        if (!(h | l)) return [t, e];
        if (h & l) return !1;
        (r = Ci((a = ki(t, e, (s = h || l), i, o)), i)),
          s === h ? ((t = a), (h = r)) : ((e = a), (l = r));
      }
    }
    function ki(t, e, i, n, o) {
      var s,
        a,
        r = e.x - t.x,
        h = e.y - t.y,
        l = n.min,
        u = n.max;
      return (
        8 & i
          ? ((s = t.x + (r * (u.y - t.y)) / h), (a = u.y))
          : 4 & i
          ? ((s = t.x + (r * (l.y - t.y)) / h), (a = l.y))
          : 2 & i
          ? ((s = u.x), (a = t.y + (h * (u.x - t.x)) / r))
          : 1 & i && ((s = l.x), (a = t.y + (h * (l.x - t.x)) / r)),
        new A(s, a, o)
      );
    }
    function Ci(t, e) {
      var i = 0;
      return (
        t.x < e.min.x ? (i |= 1) : t.x > e.max.x && (i |= 2),
        t.y < e.min.y ? (i |= 4) : t.y > e.max.y && (i |= 8),
        i
      );
    }
    function Si(t, e) {
      var i = e.x - t.x,
        n = e.y - t.y;
      return i * i + n * n;
    }
    function Ei(t, e, i, n) {
      var o,
        s = e.x,
        a = e.y,
        r = i.x - s,
        h = i.y - a,
        l = r * r + h * h;
      return (
        l > 0 &&
          ((o = ((t.x - s) * r + (t.y - a) * h) / l) > 1
            ? ((s = i.x), (a = i.y))
            : o > 0 && ((s += r * o), (a += h * o))),
        (r = t.x - s),
        (h = t.y - a),
        n ? r * r + h * h : new A(s, a)
      );
    }
    function Ai(t) {
      return !g(t[0]) || ('object' != typeof t[0][0] && void 0 !== t[0][0]);
    }
    function Bi(t) {
      return (
        console.warn(
          'Deprecated use of _flat, please use L.LineUtil.isFlat instead.'
        ),
        Ai(t)
      );
    }
    function Oi(t, e) {
      var i, n, o, s, a, r, h, l;
      if (!t || 0 === t.length) throw new Error('latlngs not passed');
      Ai(t) ||
        (console.warn('latlngs are not flat! Only the first ring will be used'),
        (t = t[0]));
      var u = [];
      for (var d in t) u.push(e.project(H(t[d])));
      var c = u.length;
      for (i = 0, n = 0; i < c - 1; i++) n += u[i].distanceTo(u[i + 1]) / 2;
      if (0 === n) l = u[0];
      else
        for (i = 0, s = 0; i < c - 1; i++)
          if (((a = u[i]), (r = u[i + 1]), (s += o = a.distanceTo(r)) > n)) {
            (h = (s - n) / o),
              (l = [r.x - h * (r.x - a.x), r.y - h * (r.y - a.y)]);
            break;
          }
      return e.unproject(O(l));
    }
    var Ii = {
      __proto__: null,
      simplify: wi,
      pointToSegmentDistance: Li,
      closestPointOnSegment: Pi,
      clipSegment: Zi,
      _getEdgeIntersection: ki,
      _getBitCode: Ci,
      _sqClosestPointOnSegment: Ei,
      isFlat: Ai,
      _flat: Bi,
      polylineCenter: Oi,
    };
    function Ri(t, e, i) {
      var n,
        o,
        s,
        a,
        r,
        h,
        l,
        u,
        d,
        c = [1, 4, 2, 8];
      for (o = 0, l = t.length; o < l; o++) t[o]._code = Ci(t[o], e);
      for (a = 0; a < 4; a++) {
        for (u = c[a], n = [], o = 0, s = (l = t.length) - 1; o < l; s = o++)
          (r = t[o]),
            (h = t[s]),
            r._code & u
              ? h._code & u ||
                (((d = ki(h, r, u, e, i))._code = Ci(d, e)), n.push(d))
              : (h._code & u &&
                  (((d = ki(h, r, u, e, i))._code = Ci(d, e)), n.push(d)),
                n.push(r));
        t = n;
      }
      return t;
    }
    function ji(t, e) {
      var i, n, o, s, a, r, h, l, u;
      if (!t || 0 === t.length) throw new Error('latlngs not passed');
      Ai(t) ||
        (console.warn('latlngs are not flat! Only the first ring will be used'),
        (t = t[0]));
      var d = [];
      for (var c in t) d.push(e.project(H(t[c])));
      var _ = d.length;
      for (r = h = l = 0, i = 0, n = _ - 1; i < _; n = i++)
        (o = d[i]),
          (s = d[n]),
          (a = o.y * s.x - s.y * o.x),
          (h += (o.x + s.x) * a),
          (l += (o.y + s.y) * a),
          (r += 3 * a);
      return (u = 0 === r ? d[0] : [h / r, l / r]), e.unproject(O(u));
    }
    var Di = { __proto__: null, clipPolygon: Ri, polygonCenter: ji },
      Ni = {
        project: function (t) {
          return new A(t.lng, t.lat);
        },
        unproject: function (t) {
          return new N(t.y, t.x);
        },
        bounds: new I([-180, -90], [180, 90]),
      },
      Hi = {
        R: 6378137,
        R_MINOR: 6356752.314245179,
        bounds: new I(
          [-20037508.34279, -15496570.73972],
          [20037508.34279, 18764656.23138]
        ),
        project: function (t) {
          var e = Math.PI / 180,
            i = this.R,
            n = t.lat * e,
            o = this.R_MINOR / i,
            s = Math.sqrt(1 - o * o),
            a = s * Math.sin(n),
            r =
              Math.tan(Math.PI / 4 - n / 2) /
              Math.pow((1 - a) / (1 + a), s / 2);
          return (
            (n = -i * Math.log(Math.max(r, 1e-10))), new A(t.lng * e * i, n)
          );
        },
        unproject: function (t) {
          for (
            var e,
              i = 180 / Math.PI,
              n = this.R,
              o = this.R_MINOR / n,
              s = Math.sqrt(1 - o * o),
              a = Math.exp(-t.y / n),
              r = Math.PI / 2 - 2 * Math.atan(a),
              h = 0,
              l = 0.1;
            h < 15 && Math.abs(l) > 1e-7;
            h++
          )
            (e = s * Math.sin(r)),
              (e = Math.pow((1 - e) / (1 + e), s / 2)),
              (r += l = Math.PI / 2 - 2 * Math.atan(a * e) - r);
          return new N(r * i, (t.x * i) / n);
        },
      },
      Wi = { __proto__: null, LonLat: Ni, Mercator: Hi, SphericalMercator: V },
      Fi = i({}, U, {
        code: 'EPSG:3395',
        projection: Hi,
        transformation: (function () {
          var t = 0.5 / (Math.PI * Hi.R);
          return K(t, 0.5, -t, 0.5);
        })(),
      }),
      Ui = i({}, U, {
        code: 'EPSG:4326',
        projection: Ni,
        transformation: K(1 / 180, 1, -1 / 180, 0.5),
      }),
      Gi = i({}, F, {
        projection: Ni,
        transformation: K(1, 0, -1, 0),
        scale: function (t) {
          return Math.pow(2, t);
        },
        zoom: function (t) {
          return Math.log(t) / Math.LN2;
        },
        distance: function (t, e) {
          var i = e.lng - t.lng,
            n = e.lat - t.lat;
          return Math.sqrt(i * i + n * n);
        },
        infinite: !0,
      });
    (F.Earth = U),
      (F.EPSG3395 = Fi),
      (F.EPSG3857 = J),
      (F.EPSG900913 = Y),
      (F.EPSG4326 = Ui),
      (F.Simple = Gi);
    var Vi = E.extend({
      options: {
        pane: 'overlayPane',
        attribution: null,
        bubblingMouseEvents: !0,
      },
      addTo: function (t) {
        return t.addLayer(this), this;
      },
      remove: function () {
        return this.removeFrom(this._map || this._mapToAdd);
      },
      removeFrom: function (t) {
        return t && t.removeLayer(this), this;
      },
      getPane: function (t) {
        return this._map.getPane(t ? this.options[t] || t : this.options.pane);
      },
      addInteractiveTarget: function (t) {
        return (this._map._targets[a(t)] = this), this;
      },
      removeInteractiveTarget: function (t) {
        return delete this._map._targets[a(t)], this;
      },
      getAttribution: function () {
        return this.options.attribution;
      },
      _layerAdd: function (t) {
        var e = t.target;
        if (e.hasLayer(this)) {
          if (
            ((this._map = e),
            (this._zoomAnimated = e._zoomAnimated),
            this.getEvents)
          ) {
            var i = this.getEvents();
            e.on(i, this),
              this.once(
                'remove',
                function () {
                  e.off(i, this);
                },
                this
              );
          }
          this.onAdd(e), this.fire('add'), e.fire('layeradd', { layer: this });
        }
      },
    });
    oi.include({
      addLayer: function (t) {
        if (!t._layerAdd)
          throw new Error('The provided object is not a Layer.');
        var e = a(t);
        return (
          this._layers[e] ||
            ((this._layers[e] = t),
            (t._mapToAdd = this),
            t.beforeAdd && t.beforeAdd(this),
            this.whenReady(t._layerAdd, t)),
          this
        );
      },
      removeLayer: function (t) {
        var e = a(t);
        return this._layers[e]
          ? (this._loaded && t.onRemove(this),
            delete this._layers[e],
            this._loaded &&
              (this.fire('layerremove', { layer: t }), t.fire('remove')),
            (t._map = t._mapToAdd = null),
            this)
          : this;
      },
      hasLayer: function (t) {
        return a(t) in this._layers;
      },
      eachLayer: function (t, e) {
        for (var i in this._layers) t.call(e, this._layers[i]);
        return this;
      },
      _addLayers: function (t) {
        for (var e = 0, i = (t = t ? (g(t) ? t : [t]) : []).length; e < i; e++)
          this.addLayer(t[e]);
      },
      _addZoomLimit: function (t) {
        (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
          ((this._zoomBoundLayers[a(t)] = t), this._updateZoomLevels());
      },
      _removeZoomLimit: function (t) {
        var e = a(t);
        this._zoomBoundLayers[e] &&
          (delete this._zoomBoundLayers[e], this._updateZoomLevels());
      },
      _updateZoomLevels: function () {
        var t = 1 / 0,
          e = -1 / 0,
          i = this._getZoomSpan();
        for (var n in this._zoomBoundLayers) {
          var o = this._zoomBoundLayers[n].options;
          (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
            (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
        }
        (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
          (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
          i !== this._getZoomSpan() && this.fire('zoomlevelschange'),
          void 0 === this.options.maxZoom &&
            this._layersMaxZoom &&
            this.getZoom() > this._layersMaxZoom &&
            this.setZoom(this._layersMaxZoom),
          void 0 === this.options.minZoom &&
            this._layersMinZoom &&
            this.getZoom() < this._layersMinZoom &&
            this.setZoom(this._layersMinZoom);
      },
    });
    var qi = Vi.extend({
        initialize: function (t, e) {
          var i, n;
          if ((_(this, e), (this._layers = {}), t))
            for (i = 0, n = t.length; i < n; i++) this.addLayer(t[i]);
        },
        addLayer: function (t) {
          var e = this.getLayerId(t);
          return (
            (this._layers[e] = t), this._map && this._map.addLayer(t), this
          );
        },
        removeLayer: function (t) {
          var e = t in this._layers ? t : this.getLayerId(t);
          return (
            this._map &&
              this._layers[e] &&
              this._map.removeLayer(this._layers[e]),
            delete this._layers[e],
            this
          );
        },
        hasLayer: function (t) {
          return (
            ('number' == typeof t ? t : this.getLayerId(t)) in this._layers
          );
        },
        clearLayers: function () {
          return this.eachLayer(this.removeLayer, this);
        },
        invoke: function (t) {
          var e,
            i,
            n = Array.prototype.slice.call(arguments, 1);
          for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
          return this;
        },
        onAdd: function (t) {
          this.eachLayer(t.addLayer, t);
        },
        onRemove: function (t) {
          this.eachLayer(t.removeLayer, t);
        },
        eachLayer: function (t, e) {
          for (var i in this._layers) t.call(e, this._layers[i]);
          return this;
        },
        getLayer: function (t) {
          return this._layers[t];
        },
        getLayers: function () {
          var t = [];
          return this.eachLayer(t.push, t), t;
        },
        setZIndex: function (t) {
          return this.invoke('setZIndex', t);
        },
        getLayerId: function (t) {
          return a(t);
        },
      }),
      Ki = function (t, e) {
        return new qi(t, e);
      },
      Ji = qi.extend({
        addLayer: function (t) {
          return this.hasLayer(t)
            ? this
            : (t.addEventParent(this),
              qi.prototype.addLayer.call(this, t),
              this.fire('layeradd', { layer: t }));
        },
        removeLayer: function (t) {
          return this.hasLayer(t)
            ? (t in this._layers && (t = this._layers[t]),
              t.removeEventParent(this),
              qi.prototype.removeLayer.call(this, t),
              this.fire('layerremove', { layer: t }))
            : this;
        },
        setStyle: function (t) {
          return this.invoke('setStyle', t);
        },
        bringToFront: function () {
          return this.invoke('bringToFront');
        },
        bringToBack: function () {
          return this.invoke('bringToBack');
        },
        getBounds: function () {
          var t = new j();
          for (var e in this._layers) {
            var i = this._layers[e];
            t.extend(i.getBounds ? i.getBounds() : i.getLatLng());
          }
          return t;
        },
      }),
      Yi = function (t, e) {
        return new Ji(t, e);
      },
      Xi = k.extend({
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          crossOrigin: !1,
        },
        initialize: function (t) {
          _(this, t);
        },
        createIcon: function (t) {
          return this._createIcon('icon', t);
        },
        createShadow: function (t) {
          return this._createIcon('shadow', t);
        },
        _createIcon: function (t, e) {
          var i = this._getIconUrl(t);
          if (!i) {
            if ('icon' === t)
              throw new Error(
                'iconUrl not set in Icon options (see the docs).'
              );
            return null;
          }
          var n = this._createImg(i, e && 'IMG' === e.tagName ? e : null);
          return (
            this._setIconStyles(n, t),
            (this.options.crossOrigin || '' === this.options.crossOrigin) &&
              (n.crossOrigin =
                !0 === this.options.crossOrigin
                  ? ''
                  : this.options.crossOrigin),
            n
          );
        },
        _setIconStyles: function (t, e) {
          var i = this.options,
            n = i[e + 'Size'];
          'number' == typeof n && (n = [n, n]);
          var o = O(n),
            s = O(
              ('shadow' === e && i.shadowAnchor) ||
                i.iconAnchor ||
                (o && o.divideBy(2, !0))
            );
          (t.className = 'leaflet-marker-' + e + ' ' + (i.className || '')),
            s &&
              ((t.style.marginLeft = -s.x + 'px'),
              (t.style.marginTop = -s.y + 'px')),
            o && ((t.style.width = o.x + 'px'), (t.style.height = o.y + 'px'));
        },
        _createImg: function (t, e) {
          return ((e = e || document.createElement('img')).src = t), e;
        },
        _getIconUrl: function (t) {
          return (
            (jt.retina && this.options[t + 'RetinaUrl']) ||
            this.options[t + 'Url']
          );
        },
      });
    function $i(t) {
      return new Xi(t);
    }
    var Qi = Xi.extend({
        options: {
          iconUrl: 'marker-icon.png',
          iconRetinaUrl: 'marker-icon-2x.png',
          shadowUrl: 'marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41],
        },
        _getIconUrl: function (t) {
          return (
            'string' != typeof Qi.imagePath &&
              (Qi.imagePath = this._detectIconPath()),
            (this.options.imagePath || Qi.imagePath) +
              Xi.prototype._getIconUrl.call(this, t)
          );
        },
        _stripUrl: function (t) {
          var e = function (t, e, i) {
            var n = e.exec(t);
            return n && n[i];
          };
          return (
            (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) &&
            e(t, /^(.*)marker-icon\.png$/, 1)
          );
        },
        _detectIconPath: function () {
          var t = pe('div', 'leaflet-default-icon-path', document.body),
            e = me(t, 'background-image') || me(t, 'backgroundImage');
          if ((document.body.removeChild(t), (e = this._stripUrl(e)))) return e;
          var i = document.querySelector('link[href$="leaflet.css"]');
          return i
            ? i.href.substring(0, i.href.length - 'leaflet.css'.length - 1)
            : '';
        },
      }),
      tn = gi.extend({
        initialize: function (t) {
          this._marker = t;
        },
        addHooks: function () {
          var t = this._marker._icon;
          this._draggable || (this._draggable = new xi(t, t, !0)),
            this._draggable
              .on(
                {
                  dragstart: this._onDragStart,
                  predrag: this._onPreDrag,
                  drag: this._onDrag,
                  dragend: this._onDragEnd,
                },
                this
              )
              .enable(),
            xe(t, 'leaflet-marker-draggable');
        },
        removeHooks: function () {
          this._draggable
            .off(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            )
            .disable(),
            this._marker._icon &&
              we(this._marker._icon, 'leaflet-marker-draggable');
        },
        moved: function () {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function (t) {
          var e = this._marker,
            i = e._map,
            n = this._marker.options.autoPanSpeed,
            o = this._marker.options.autoPanPadding,
            s = Ce(e._icon),
            a = i.getPixelBounds(),
            r = i.getPixelOrigin(),
            h = R(a.min._subtract(r).add(o), a.max._subtract(r).subtract(o));
          if (!h.contains(s)) {
            var l = O(
              (Math.max(h.max.x, s.x) - h.max.x) / (a.max.x - h.max.x) -
                (Math.min(h.min.x, s.x) - h.min.x) / (a.min.x - h.min.x),
              (Math.max(h.max.y, s.y) - h.max.y) / (a.max.y - h.max.y) -
                (Math.min(h.min.y, s.y) - h.min.y) / (a.min.y - h.min.y)
            ).multiplyBy(n);
            i.panBy(l, { animate: !1 }),
              this._draggable._newPos._add(l),
              this._draggable._startPos._add(l),
              ke(e._icon, this._draggable._newPos),
              this._onDrag(t),
              (this._panRequest = M(this._adjustPan.bind(this, t)));
          }
        },
        _onDragStart: function () {
          (this._oldLatLng = this._marker.getLatLng()),
            this._marker.closePopup && this._marker.closePopup(),
            this._marker.fire('movestart').fire('dragstart');
        },
        _onPreDrag: function (t) {
          this._marker.options.autoPan &&
            (z(this._panRequest),
            (this._panRequest = M(this._adjustPan.bind(this, t))));
        },
        _onDrag: function (t) {
          var e = this._marker,
            i = e._shadow,
            n = Ce(e._icon),
            o = e._map.layerPointToLatLng(n);
          i && ke(i, n),
            (e._latlng = o),
            (t.latlng = o),
            (t.oldLatLng = this._oldLatLng),
            e.fire('move', t).fire('drag', t);
        },
        _onDragEnd: function (t) {
          z(this._panRequest),
            delete this._oldLatLng,
            this._marker.fire('moveend').fire('dragend', t);
        },
      }),
      en = Vi.extend({
        options: {
          icon: new Qi(),
          interactive: !0,
          keyboard: !0,
          title: '',
          alt: 'Marker',
          zIndexOffset: 0,
          opacity: 1,
          riseOnHover: !1,
          riseOffset: 250,
          pane: 'markerPane',
          shadowPane: 'shadowPane',
          bubblingMouseEvents: !1,
          autoPanOnFocus: !0,
          draggable: !1,
          autoPan: !1,
          autoPanPadding: [50, 50],
          autoPanSpeed: 10,
        },
        initialize: function (t, e) {
          _(this, e), (this._latlng = H(t));
        },
        onAdd: function (t) {
          (this._zoomAnimated =
            this._zoomAnimated && t.options.markerZoomAnimation),
            this._zoomAnimated && t.on('zoomanim', this._animateZoom, this),
            this._initIcon(),
            this.update();
        },
        onRemove: function (t) {
          this.dragging &&
            this.dragging.enabled() &&
            ((this.options.draggable = !0), this.dragging.removeHooks()),
            delete this.dragging,
            this._zoomAnimated && t.off('zoomanim', this._animateZoom, this),
            this._removeIcon(),
            this._removeShadow();
        },
        getEvents: function () {
          return { zoom: this.update, viewreset: this.update };
        },
        getLatLng: function () {
          return this._latlng;
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = H(t)),
            this.update(),
            this.fire('move', { oldLatLng: e, latlng: this._latlng })
          );
        },
        setZIndexOffset: function (t) {
          return (this.options.zIndexOffset = t), this.update();
        },
        getIcon: function () {
          return this.options.icon;
        },
        setIcon: function (t) {
          return (
            (this.options.icon = t),
            this._map && (this._initIcon(), this.update()),
            this._popup && this.bindPopup(this._popup, this._popup.options),
            this
          );
        },
        getElement: function () {
          return this._icon;
        },
        update: function () {
          if (this._icon && this._map) {
            var t = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(t);
          }
          return this;
        },
        _initIcon: function () {
          var t = this.options,
            e = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),
            i = t.icon.createIcon(this._icon),
            n = !1;
          i !== this._icon &&
            (this._icon && this._removeIcon(),
            (n = !0),
            t.title && (i.title = t.title),
            'IMG' === i.tagName && (i.alt = t.alt || '')),
            xe(i, e),
            t.keyboard &&
              ((i.tabIndex = '0'), i.setAttribute('role', 'button')),
            (this._icon = i),
            t.riseOnHover &&
              this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex,
              }),
            this.options.autoPanOnFocus &&
              De(i, 'focus', this._panOnFocus, this);
          var o = t.icon.createShadow(this._shadow),
            s = !1;
          o !== this._shadow && (this._removeShadow(), (s = !0)),
            o && (xe(o, e), (o.alt = '')),
            (this._shadow = o),
            t.opacity < 1 && this._updateOpacity(),
            n && this.getPane().appendChild(this._icon),
            this._initInteraction(),
            o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function () {
          this.options.riseOnHover &&
            this.off({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex,
            }),
            this.options.autoPanOnFocus &&
              He(this._icon, 'focus', this._panOnFocus, this),
            fe(this._icon),
            this.removeInteractiveTarget(this._icon),
            (this._icon = null);
        },
        _removeShadow: function () {
          this._shadow && fe(this._shadow), (this._shadow = null);
        },
        _setPos: function (t) {
          this._icon && ke(this._icon, t),
            this._shadow && ke(this._shadow, t),
            (this._zIndex = t.y + this.options.zIndexOffset),
            this._resetZIndex();
        },
        _updateZIndex: function (t) {
          this._icon && (this._icon.style.zIndex = this._zIndex + t);
        },
        _animateZoom: function (t) {
          var e = this._map
            ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
            .round();
          this._setPos(e);
        },
        _initInteraction: function () {
          if (
            this.options.interactive &&
            (xe(this._icon, 'leaflet-interactive'),
            this.addInteractiveTarget(this._icon),
            tn)
          ) {
            var t = this.options.draggable;
            this.dragging &&
              ((t = this.dragging.enabled()), this.dragging.disable()),
              (this.dragging = new tn(this)),
              t && this.dragging.enable();
          }
        },
        setOpacity: function (t) {
          return (
            (this.options.opacity = t), this._map && this._updateOpacity(), this
          );
        },
        _updateOpacity: function () {
          var t = this.options.opacity;
          this._icon && Te(this._icon, t), this._shadow && Te(this._shadow, t);
        },
        _bringToFront: function () {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function () {
          this._updateZIndex(0);
        },
        _panOnFocus: function () {
          var t = this._map;
          if (t) {
            var e = this.options.icon.options,
              i = e.iconSize ? O(e.iconSize) : O(0, 0),
              n = e.iconAnchor ? O(e.iconAnchor) : O(0, 0);
            t.panInside(this._latlng, {
              paddingTopLeft: n,
              paddingBottomRight: i.subtract(n),
            });
          }
        },
        _getPopupAnchor: function () {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function () {
          return this.options.icon.options.tooltipAnchor;
        },
      });
    function nn(t, e) {
      return new en(t, e);
    }
    var on = Vi.extend({
        options: {
          stroke: !0,
          color: '#3388ff',
          weight: 3,
          opacity: 1,
          lineCap: 'round',
          lineJoin: 'round',
          dashArray: null,
          dashOffset: null,
          fill: !1,
          fillColor: null,
          fillOpacity: 0.2,
          fillRule: 'evenodd',
          interactive: !0,
          bubblingMouseEvents: !0,
        },
        beforeAdd: function (t) {
          this._renderer = t.getRenderer(this);
        },
        onAdd: function () {
          this._renderer._initPath(this),
            this._reset(),
            this._renderer._addPath(this);
        },
        onRemove: function () {
          this._renderer._removePath(this);
        },
        redraw: function () {
          return this._map && this._renderer._updatePath(this), this;
        },
        setStyle: function (t) {
          return (
            _(this, t),
            this._renderer &&
              (this._renderer._updateStyle(this),
              this.options.stroke &&
                t &&
                Object.prototype.hasOwnProperty.call(t, 'weight') &&
                this._updateBounds()),
            this
          );
        },
        bringToFront: function () {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        bringToBack: function () {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function () {
          return this._path;
        },
        _reset: function () {
          this._project(), this._update();
        },
        _clickTolerance: function () {
          return (
            (this.options.stroke ? this.options.weight / 2 : 0) +
            (this._renderer.options.tolerance || 0)
          );
        },
      }),
      sn = on.extend({
        options: { fill: !0, radius: 10 },
        initialize: function (t, e) {
          _(this, e),
            (this._latlng = H(t)),
            (this._radius = this.options.radius);
        },
        setLatLng: function (t) {
          var e = this._latlng;
          return (
            (this._latlng = H(t)),
            this.redraw(),
            this.fire('move', { oldLatLng: e, latlng: this._latlng })
          );
        },
        getLatLng: function () {
          return this._latlng;
        },
        setRadius: function (t) {
          return (this.options.radius = this._radius = t), this.redraw();
        },
        getRadius: function () {
          return this._radius;
        },
        setStyle: function (t) {
          var e = (t && t.radius) || this._radius;
          return on.prototype.setStyle.call(this, t), this.setRadius(e), this;
        },
        _project: function () {
          (this._point = this._map.latLngToLayerPoint(this._latlng)),
            this._updateBounds();
        },
        _updateBounds: function () {
          var t = this._radius,
            e = this._radiusY || t,
            i = this._clickTolerance(),
            n = [t + i, e + i];
          this._pxBounds = new I(this._point.subtract(n), this._point.add(n));
        },
        _update: function () {
          this._map && this._updatePath();
        },
        _updatePath: function () {
          this._renderer._updateCircle(this);
        },
        _empty: function () {
          return (
            this._radius && !this._renderer._bounds.intersects(this._pxBounds)
          );
        },
        _containsPoint: function (t) {
          return (
            t.distanceTo(this._point) <= this._radius + this._clickTolerance()
          );
        },
      });
    function an(t, e) {
      return new sn(t, e);
    }
    var rn = sn.extend({
      initialize: function (t, e, n) {
        if (
          ('number' == typeof e && (e = i({}, n, { radius: e })),
          _(this, e),
          (this._latlng = H(t)),
          isNaN(this.options.radius))
        )
          throw new Error('Circle radius cannot be NaN');
        this._mRadius = this.options.radius;
      },
      setRadius: function (t) {
        return (this._mRadius = t), this.redraw();
      },
      getRadius: function () {
        return this._mRadius;
      },
      getBounds: function () {
        var t = [this._radius, this._radiusY || this._radius];
        return new j(
          this._map.layerPointToLatLng(this._point.subtract(t)),
          this._map.layerPointToLatLng(this._point.add(t))
        );
      },
      setStyle: on.prototype.setStyle,
      _project: function () {
        var t = this._latlng.lng,
          e = this._latlng.lat,
          i = this._map,
          n = i.options.crs;
        if (n.distance === U.distance) {
          var o = Math.PI / 180,
            s = this._mRadius / U.R / o,
            a = i.project([e + s, t]),
            r = i.project([e - s, t]),
            h = a.add(r).divideBy(2),
            l = i.unproject(h).lat,
            u =
              Math.acos(
                (Math.cos(s * o) - Math.sin(e * o) * Math.sin(l * o)) /
                  (Math.cos(e * o) * Math.cos(l * o))
              ) / o;
          (isNaN(u) || 0 === u) && (u = s / Math.cos((Math.PI / 180) * e)),
            (this._point = h.subtract(i.getPixelOrigin())),
            (this._radius = isNaN(u) ? 0 : h.x - i.project([l, t - u]).x),
            (this._radiusY = h.y - a.y);
        } else {
          var d = n.unproject(
            n.project(this._latlng).subtract([this._mRadius, 0])
          );
          (this._point = i.latLngToLayerPoint(this._latlng)),
            (this._radius = this._point.x - i.latLngToLayerPoint(d).x);
        }
        this._updateBounds();
      },
    });
    function hn(t, e, i) {
      return new rn(t, e, i);
    }
    var ln = on.extend({
      options: { smoothFactor: 1, noClip: !1 },
      initialize: function (t, e) {
        _(this, e), this._setLatLngs(t);
      },
      getLatLngs: function () {
        return this._latlngs;
      },
      setLatLngs: function (t) {
        return this._setLatLngs(t), this.redraw();
      },
      isEmpty: function () {
        return !this._latlngs.length;
      },
      closestLayerPoint: function (t) {
        for (
          var e, i, n = 1 / 0, o = null, s = Ei, a = 0, r = this._parts.length;
          a < r;
          a++
        )
          for (var h = this._parts[a], l = 1, u = h.length; l < u; l++) {
            var d = s(t, (e = h[l - 1]), (i = h[l]), !0);
            d < n && ((n = d), (o = s(t, e, i)));
          }
        return o && (o.distance = Math.sqrt(n)), o;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error('Must add layer to map before using getCenter()');
        return Oi(this._defaultShape(), this._map.options.crs);
      },
      getBounds: function () {
        return this._bounds;
      },
      addLatLng: function (t, e) {
        return (
          (e = e || this._defaultShape()),
          (t = H(t)),
          e.push(t),
          this._bounds.extend(t),
          this.redraw()
        );
      },
      _setLatLngs: function (t) {
        (this._bounds = new j()), (this._latlngs = this._convertLatLngs(t));
      },
      _defaultShape: function () {
        return Ai(this._latlngs) ? this._latlngs : this._latlngs[0];
      },
      _convertLatLngs: function (t) {
        for (var e = [], i = Ai(t), n = 0, o = t.length; n < o; n++)
          i
            ? ((e[n] = H(t[n])), this._bounds.extend(e[n]))
            : (e[n] = this._convertLatLngs(t[n]));
        return e;
      },
      _project: function () {
        var t = new I();
        (this._rings = []),
          this._projectLatlngs(this._latlngs, this._rings, t),
          this._bounds.isValid() &&
            t.isValid() &&
            ((this._rawPxBounds = t), this._updateBounds());
      },
      _updateBounds: function () {
        var t = this._clickTolerance(),
          e = new A(t, t);
        this._rawPxBounds &&
          (this._pxBounds = new I([
            this._rawPxBounds.min.subtract(e),
            this._rawPxBounds.max.add(e),
          ]));
      },
      _projectLatlngs: function (t, e, i) {
        var n,
          o,
          s = t[0] instanceof N,
          a = t.length;
        if (s) {
          for (o = [], n = 0; n < a; n++)
            (o[n] = this._map.latLngToLayerPoint(t[n])), i.extend(o[n]);
          e.push(o);
        } else for (n = 0; n < a; n++) this._projectLatlngs(t[n], e, i);
      },
      _clipPoints: function () {
        var t = this._renderer._bounds;
        if (
          ((this._parts = []), this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else {
            var e,
              i,
              n,
              o,
              s,
              a,
              r,
              h = this._parts;
            for (e = 0, n = 0, o = this._rings.length; e < o; e++)
              for (i = 0, s = (r = this._rings[e]).length; i < s - 1; i++)
                (a = Zi(r[i], r[i + 1], t, i, !0)) &&
                  ((h[n] = h[n] || []),
                  h[n].push(a[0]),
                  (a[1] === r[i + 1] && i !== s - 2) || (h[n].push(a[1]), n++));
          }
      },
      _simplifyPoints: function () {
        for (
          var t = this._parts,
            e = this.options.smoothFactor,
            i = 0,
            n = t.length;
          i < n;
          i++
        )
          t[i] = wi(t[i], e);
      },
      _update: function () {
        this._map &&
          (this._clipPoints(), this._simplifyPoints(), this._updatePath());
      },
      _updatePath: function () {
        this._renderer._updatePoly(this);
      },
      _containsPoint: function (t, e) {
        var i,
          n,
          o,
          s,
          a,
          r,
          h = this._clickTolerance();
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (i = 0, s = this._parts.length; i < s; i++)
          for (n = 0, o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++)
            if ((e || 0 !== n) && Li(t, r[o], r[n]) <= h) return !0;
        return !1;
      },
    });
    function un(t, e) {
      return new ln(t, e);
    }
    ln._flat = Bi;
    var dn = ln.extend({
      options: { fill: !0 },
      isEmpty: function () {
        return !this._latlngs.length || !this._latlngs[0].length;
      },
      getCenter: function () {
        if (!this._map)
          throw new Error('Must add layer to map before using getCenter()');
        return ji(this._defaultShape(), this._map.options.crs);
      },
      _convertLatLngs: function (t) {
        var e = ln.prototype._convertLatLngs.call(this, t),
          i = e.length;
        return (
          i >= 2 && e[0] instanceof N && e[0].equals(e[i - 1]) && e.pop(), e
        );
      },
      _setLatLngs: function (t) {
        ln.prototype._setLatLngs.call(this, t),
          Ai(this._latlngs) && (this._latlngs = [this._latlngs]);
      },
      _defaultShape: function () {
        return Ai(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
      },
      _clipPoints: function () {
        var t = this._renderer._bounds,
          e = this.options.weight,
          i = new A(e, e);
        if (
          ((t = new I(t.min.subtract(i), t.max.add(i))),
          (this._parts = []),
          this._pxBounds && this._pxBounds.intersects(t))
        )
          if (this.options.noClip) this._parts = this._rings;
          else
            for (var n, o = 0, s = this._rings.length; o < s; o++)
              (n = Ri(this._rings[o], t, !0)).length && this._parts.push(n);
      },
      _updatePath: function () {
        this._renderer._updatePoly(this, !0);
      },
      _containsPoint: function (t) {
        var e,
          i,
          n,
          o,
          s,
          a,
          r,
          h,
          l = !1;
        if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
        for (o = 0, r = this._parts.length; o < r; o++)
          for (s = 0, a = (h = (e = this._parts[o]).length) - 1; s < h; a = s++)
            (i = e[s]),
              (n = e[a]),
              i.y > t.y != n.y > t.y &&
                t.x < ((n.x - i.x) * (t.y - i.y)) / (n.y - i.y) + i.x &&
                (l = !l);
        return l || ln.prototype._containsPoint.call(this, t, !0);
      },
    });
    function cn(t, e) {
      return new dn(t, e);
    }
    var _n = Ji.extend({
      initialize: function (t, e) {
        _(this, e), (this._layers = {}), t && this.addData(t);
      },
      addData: function (t) {
        var e,
          i,
          n,
          o = g(t) ? t : t.features;
        if (o) {
          for (e = 0, i = o.length; e < i; e++)
            ((n = o[e]).geometries ||
              n.geometry ||
              n.features ||
              n.coordinates) &&
              this.addData(n);
          return this;
        }
        var s = this.options;
        if (s.filter && !s.filter(t)) return this;
        var a = mn(t, s);
        return a
          ? ((a.feature = xn(t)),
            (a.defaultOptions = a.options),
            this.resetStyle(a),
            s.onEachFeature && s.onEachFeature(t, a),
            this.addLayer(a))
          : this;
      },
      resetStyle: function (t) {
        return void 0 === t
          ? this.eachLayer(this.resetStyle, this)
          : ((t.options = i({}, t.defaultOptions)),
            this._setLayerStyle(t, this.options.style),
            this);
      },
      setStyle: function (t) {
        return this.eachLayer(function (e) {
          this._setLayerStyle(e, t);
        }, this);
      },
      _setLayerStyle: function (t, e) {
        t.setStyle &&
          ('function' == typeof e && (e = e(t.feature)), t.setStyle(e));
      },
    });
    function mn(t, e) {
      var i,
        n,
        o,
        s,
        a = 'Feature' === t.type ? t.geometry : t,
        r = a ? a.coordinates : null,
        h = [],
        l = e && e.pointToLayer,
        u = (e && e.coordsToLatLng) || fn;
      if (!r && !a) return null;
      switch (a.type) {
        case 'Point':
          return pn(l, t, (i = u(r)), e);
        case 'MultiPoint':
          for (o = 0, s = r.length; o < s; o++)
            (i = u(r[o])), h.push(pn(l, t, i, e));
          return new Ji(h);
        case 'LineString':
        case 'MultiLineString':
          return (n = gn(r, 'LineString' === a.type ? 0 : 1, u)), new ln(n, e);
        case 'Polygon':
        case 'MultiPolygon':
          return (n = gn(r, 'Polygon' === a.type ? 1 : 2, u)), new dn(n, e);
        case 'GeometryCollection':
          for (o = 0, s = a.geometries.length; o < s; o++) {
            var d = mn(
              {
                geometry: a.geometries[o],
                type: 'Feature',
                properties: t.properties,
              },
              e
            );
            d && h.push(d);
          }
          return new Ji(h);
        case 'FeatureCollection':
          for (o = 0, s = a.features.length; o < s; o++) {
            var c = mn(a.features[o], e);
            c && h.push(c);
          }
          return new Ji(h);
        default:
          throw new Error('Invalid GeoJSON object.');
      }
    }
    function pn(t, e, i, n) {
      return t ? t(e, i) : new en(i, n && n.markersInheritOptions && n);
    }
    function fn(t) {
      return new N(t[1], t[0], t[2]);
    }
    function gn(t, e, i) {
      for (var n, o = [], s = 0, a = t.length; s < a; s++)
        (n = e ? gn(t[s], e - 1, i) : (i || fn)(t[s])), o.push(n);
      return o;
    }
    function vn(t, e) {
      return void 0 !== (t = H(t)).alt
        ? [u(t.lng, e), u(t.lat, e), u(t.alt, e)]
        : [u(t.lng, e), u(t.lat, e)];
    }
    function yn(t, e, i, n) {
      for (var o = [], s = 0, a = t.length; s < a; s++)
        o.push(e ? yn(t[s], Ai(t[s]) ? 0 : e - 1, i, n) : vn(t[s], n));
      return !e && i && o.push(o[0].slice()), o;
    }
    function bn(t, e) {
      return t.feature ? i({}, t.feature, { geometry: e }) : xn(e);
    }
    function xn(t) {
      return 'Feature' === t.type || 'FeatureCollection' === t.type
        ? t
        : { type: 'Feature', properties: {}, geometry: t };
    }
    var wn = {
      toGeoJSON: function (t) {
        return bn(this, {
          type: 'Point',
          coordinates: vn(this.getLatLng(), t),
        });
      },
    };
    function Ln(t, e) {
      return new _n(t, e);
    }
    en.include(wn),
      rn.include(wn),
      sn.include(wn),
      ln.include({
        toGeoJSON: function (t) {
          var e = !Ai(this._latlngs);
          return bn(this, {
            type: (e ? 'Multi' : '') + 'LineString',
            coordinates: yn(this._latlngs, e ? 1 : 0, !1, t),
          });
        },
      }),
      dn.include({
        toGeoJSON: function (t) {
          var e = !Ai(this._latlngs),
            i = e && !Ai(this._latlngs[0]),
            n = yn(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
          return (
            e || (n = [n]),
            bn(this, { type: (i ? 'Multi' : '') + 'Polygon', coordinates: n })
          );
        },
      }),
      qi.include({
        toMultiPoint: function (t) {
          var e = [];
          return (
            this.eachLayer(function (i) {
              e.push(i.toGeoJSON(t).geometry.coordinates);
            }),
            bn(this, { type: 'MultiPoint', coordinates: e })
          );
        },
        toGeoJSON: function (t) {
          var e =
            this.feature && this.feature.geometry && this.feature.geometry.type;
          if ('MultiPoint' === e) return this.toMultiPoint(t);
          var i = 'GeometryCollection' === e,
            n = [];
          return (
            this.eachLayer(function (e) {
              if (e.toGeoJSON) {
                var o = e.toGeoJSON(t);
                if (i) n.push(o.geometry);
                else {
                  var s = xn(o);
                  'FeatureCollection' === s.type
                    ? n.push.apply(n, s.features)
                    : n.push(s);
                }
              }
            }),
            i
              ? bn(this, { geometries: n, type: 'GeometryCollection' })
              : { type: 'FeatureCollection', features: n }
          );
        },
      });
    var Pn = Ln,
      Tn = Vi.extend({
        options: {
          opacity: 1,
          alt: '',
          interactive: !1,
          crossOrigin: !1,
          errorOverlayUrl: '',
          zIndex: 1,
          className: '',
        },
        initialize: function (t, e, i) {
          (this._url = t), (this._bounds = D(e)), _(this, i);
        },
        onAdd: function () {
          this._image ||
            (this._initImage(),
            this.options.opacity < 1 && this._updateOpacity()),
            this.options.interactive &&
              (xe(this._image, 'leaflet-interactive'),
              this.addInteractiveTarget(this._image)),
            this.getPane().appendChild(this._image),
            this._reset();
        },
        onRemove: function () {
          fe(this._image),
            this.options.interactive &&
              this.removeInteractiveTarget(this._image);
        },
        setOpacity: function (t) {
          return (
            (this.options.opacity = t),
            this._image && this._updateOpacity(),
            this
          );
        },
        setStyle: function (t) {
          return t.opacity && this.setOpacity(t.opacity), this;
        },
        bringToFront: function () {
          return this._map && ve(this._image), this;
        },
        bringToBack: function () {
          return this._map && ye(this._image), this;
        },
        setUrl: function (t) {
          return (this._url = t), this._image && (this._image.src = t), this;
        },
        setBounds: function (t) {
          return (this._bounds = D(t)), this._map && this._reset(), this;
        },
        getEvents: function () {
          var t = { zoom: this._reset, viewreset: this._reset };
          return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
        },
        setZIndex: function (t) {
          return (this.options.zIndex = t), this._updateZIndex(), this;
        },
        getBounds: function () {
          return this._bounds;
        },
        getElement: function () {
          return this._image;
        },
        _initImage: function () {
          var t = 'IMG' === this._url.tagName,
            e = (this._image = t ? this._url : pe('img'));
          xe(e, 'leaflet-image-layer'),
            this._zoomAnimated && xe(e, 'leaflet-zoom-animated'),
            this.options.className && xe(e, this.options.className),
            (e.onselectstart = l),
            (e.onmousemove = l),
            (e.onload = o(this.fire, this, 'load')),
            (e.onerror = o(this._overlayOnError, this, 'error')),
            (this.options.crossOrigin || '' === this.options.crossOrigin) &&
              (e.crossOrigin =
                !0 === this.options.crossOrigin
                  ? ''
                  : this.options.crossOrigin),
            this.options.zIndex && this._updateZIndex(),
            t
              ? (this._url = e.src)
              : ((e.src = this._url), (e.alt = this.options.alt));
        },
        _animateZoom: function (t) {
          var e = this._map.getZoomScale(t.zoom),
            i = this._map._latLngBoundsToNewLayerBounds(
              this._bounds,
              t.zoom,
              t.center
            ).min;
          Ze(this._image, i, e);
        },
        _reset: function () {
          var t = this._image,
            e = new I(
              this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
              this._map.latLngToLayerPoint(this._bounds.getSouthEast())
            ),
            i = e.getSize();
          ke(t, e.min),
            (t.style.width = i.x + 'px'),
            (t.style.height = i.y + 'px');
        },
        _updateOpacity: function () {
          Te(this._image, this.options.opacity);
        },
        _updateZIndex: function () {
          this._image &&
            void 0 !== this.options.zIndex &&
            null !== this.options.zIndex &&
            (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function () {
          this.fire('error');
          var t = this.options.errorOverlayUrl;
          t && this._url !== t && ((this._url = t), (this._image.src = t));
        },
        getCenter: function () {
          return this._bounds.getCenter();
        },
      }),
      Mn = function (t, e, i) {
        return new Tn(t, e, i);
      },
      zn = Tn.extend({
        options: {
          autoplay: !0,
          loop: !0,
          keepAspectRatio: !0,
          muted: !1,
          playsInline: !0,
        },
        _initImage: function () {
          var t = 'VIDEO' === this._url.tagName,
            e = (this._image = t ? this._url : pe('video'));
          if (
            (xe(e, 'leaflet-image-layer'),
            this._zoomAnimated && xe(e, 'leaflet-zoom-animated'),
            this.options.className && xe(e, this.options.className),
            (e.onselectstart = l),
            (e.onmousemove = l),
            (e.onloadeddata = o(this.fire, this, 'load')),
            t)
          ) {
            for (
              var i = e.getElementsByTagName('source'), n = [], s = 0;
              s < i.length;
              s++
            )
              n.push(i[s].src);
            this._url = i.length > 0 ? n : [e.src];
          } else {
            g(this._url) || (this._url = [this._url]),
              !this.options.keepAspectRatio &&
                Object.prototype.hasOwnProperty.call(e.style, 'objectFit') &&
                (e.style.objectFit = 'fill'),
              (e.autoplay = !!this.options.autoplay),
              (e.loop = !!this.options.loop),
              (e.muted = !!this.options.muted),
              (e.playsInline = !!this.options.playsInline);
            for (var a = 0; a < this._url.length; a++) {
              var r = pe('source');
              (r.src = this._url[a]), e.appendChild(r);
            }
          }
        },
      });
    function Zn(t, e, i) {
      return new zn(t, e, i);
    }
    var kn = Tn.extend({
      _initImage: function () {
        var t = (this._image = this._url);
        xe(t, 'leaflet-image-layer'),
          this._zoomAnimated && xe(t, 'leaflet-zoom-animated'),
          this.options.className && xe(t, this.options.className),
          (t.onselectstart = l),
          (t.onmousemove = l);
      },
    });
    function Cn(t, e, i) {
      return new kn(t, e, i);
    }
    var Sn = Vi.extend({
      options: {
        interactive: !1,
        offset: [0, 0],
        className: '',
        pane: void 0,
        content: '',
      },
      initialize: function (t, e) {
        t && (t instanceof N || g(t))
          ? ((this._latlng = H(t)), _(this, e))
          : (_(this, t), (this._source = e)),
          this.options.content && (this._content = this.options.content);
      },
      openOn: function (t) {
        return (
          (t = arguments.length ? t : this._source._map).hasLayer(this) ||
            t.addLayer(this),
          this
        );
      },
      close: function () {
        return this._map && this._map.removeLayer(this), this;
      },
      toggle: function (t) {
        return (
          this._map
            ? this.close()
            : (arguments.length ? (this._source = t) : (t = this._source),
              this._prepareOpen(),
              this.openOn(t._map)),
          this
        );
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && Te(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && Te(this._container, 1),
          this.bringToFront(),
          this.options.interactive &&
            (xe(this._container, 'leaflet-interactive'),
            this.addInteractiveTarget(this._container));
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (Te(this._container, 0),
            (this._removeTimeout = setTimeout(
              o(fe, void 0, this._container),
              200
            )))
          : fe(this._container),
          this.options.interactive &&
            (we(this._container, 'leaflet-interactive'),
            this.removeInteractiveTarget(this._container));
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = H(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = 'hidden'),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ''),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && ve(this._container), this;
      },
      bringToBack: function () {
        return this._map && ye(this._container), this;
      },
      _prepareOpen: function (t) {
        var e = this._source;
        if (!e._map) return !1;
        if (e instanceof Ji) {
          e = null;
          var i = this._source._layers;
          for (var n in i)
            if (i[n]._map) {
              e = i[n];
              break;
            }
          if (!e) return !1;
          this._source = e;
        }
        if (!t)
          if (e.getCenter) t = e.getCenter();
          else if (e.getLatLng) t = e.getLatLng();
          else {
            if (!e.getBounds)
              throw new Error('Unable to get source layer LatLng.');
            t = e.getBounds().getCenter();
          }
        return this.setLatLng(t), this._map && this.update(), !0;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            e =
              'function' == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ('string' == typeof e) t.innerHTML = e;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(e);
          }
          this.fire('contentupdate');
        }
      },
      _updatePosition: function () {
        if (this._map) {
          var t = this._map.latLngToLayerPoint(this._latlng),
            e = O(this.options.offset),
            i = this._getAnchor();
          this._zoomAnimated
            ? ke(this._container, t.add(i))
            : (e = e.add(t).add(i));
          var n = (this._containerBottom = -e.y),
            o = (this._containerLeft =
              -Math.round(this._containerWidth / 2) + e.x);
          (this._container.style.bottom = n + 'px'),
            (this._container.style.left = o + 'px');
        }
      },
      _getAnchor: function () {
        return [0, 0];
      },
    });
    oi.include({
      _initOverlay: function (t, e, i, n) {
        var o = e;
        return (
          o instanceof t || (o = new t(n).setContent(e)), i && o.setLatLng(i), o
        );
      },
    }),
      Vi.include({
        _initOverlay: function (t, e, i, n) {
          var o = i;
          return (
            o instanceof t
              ? (_(o, n), (o._source = this))
              : (o = e && !n ? e : new t(n, this)).setContent(i),
            o
          );
        },
      });
    var En = Sn.extend({
        options: {
          pane: 'popupPane',
          offset: [0, 7],
          maxWidth: 300,
          minWidth: 50,
          maxHeight: null,
          autoPan: !0,
          autoPanPaddingTopLeft: null,
          autoPanPaddingBottomRight: null,
          autoPanPadding: [5, 5],
          keepInView: !1,
          closeButton: !0,
          autoClose: !0,
          closeOnEscapeKey: !0,
          className: '',
        },
        openOn: function (t) {
          return (
            !(t = arguments.length ? t : this._source._map).hasLayer(this) &&
              t._popup &&
              t._popup.options.autoClose &&
              t.removeLayer(t._popup),
            (t._popup = this),
            Sn.prototype.openOn.call(this, t)
          );
        },
        onAdd: function (t) {
          Sn.prototype.onAdd.call(this, t),
            t.fire('popupopen', { popup: this }),
            this._source &&
              (this._source.fire('popupopen', { popup: this }, !0),
              this._source instanceof on || this._source.on('preclick', Ve));
        },
        onRemove: function (t) {
          Sn.prototype.onRemove.call(this, t),
            t.fire('popupclose', { popup: this }),
            this._source &&
              (this._source.fire('popupclose', { popup: this }, !0),
              this._source instanceof on || this._source.off('preclick', Ve));
        },
        getEvents: function () {
          var t = Sn.prototype.getEvents.call(this);
          return (
            (void 0 !== this.options.closeOnClick
              ? this.options.closeOnClick
              : this._map.options.closePopupOnClick) &&
              (t.preclick = this.close),
            this.options.keepInView && (t.moveend = this._adjustPan),
            t
          );
        },
        _initLayout: function () {
          var t = 'leaflet-popup',
            e = (this._container = pe(
              'div',
              t +
                ' ' +
                (this.options.className || '') +
                ' leaflet-zoom-animated'
            )),
            i = (this._wrapper = pe('div', t + '-content-wrapper', e));
          if (
            ((this._contentNode = pe('div', t + '-content', i)),
            Ke(e),
            qe(this._contentNode),
            De(e, 'contextmenu', Ve),
            (this._tipContainer = pe('div', t + '-tip-container', e)),
            (this._tip = pe('div', t + '-tip', this._tipContainer)),
            this.options.closeButton)
          ) {
            var n = (this._closeButton = pe('a', t + '-close-button', e));
            n.setAttribute('role', 'button'),
              n.setAttribute('aria-label', 'Close popup'),
              (n.href = '#close'),
              (n.innerHTML = '<span aria-hidden="true">&#215;</span>'),
              De(
                n,
                'click',
                function (t) {
                  Je(t), this.close();
                },
                this
              );
          }
        },
        _updateLayout: function () {
          var t = this._contentNode,
            e = t.style;
          (e.width = ''), (e.whiteSpace = 'nowrap');
          var i = t.offsetWidth;
          (i = Math.min(i, this.options.maxWidth)),
            (i = Math.max(i, this.options.minWidth)),
            (e.width = i + 1 + 'px'),
            (e.whiteSpace = ''),
            (e.height = '');
          var n = t.offsetHeight,
            o = this.options.maxHeight,
            s = 'leaflet-popup-scrolled';
          o && n > o ? ((e.height = o + 'px'), xe(t, s)) : we(t, s),
            (this._containerWidth = this._container.offsetWidth);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(
              this._latlng,
              t.zoom,
              t.center
            ),
            i = this._getAnchor();
          ke(this._container, e.add(i));
        },
        _adjustPan: function () {
          if (this.options.autoPan)
            if (
              (this._map._panAnim && this._map._panAnim.stop(),
              this._autopanning)
            )
              this._autopanning = !1;
            else {
              var t = this._map,
                e = parseInt(me(this._container, 'marginBottom'), 10) || 0,
                i = this._container.offsetHeight + e,
                n = this._containerWidth,
                o = new A(this._containerLeft, -i - this._containerBottom);
              o._add(Ce(this._container));
              var s = t.layerPointToContainerPoint(o),
                a = O(this.options.autoPanPadding),
                r = O(this.options.autoPanPaddingTopLeft || a),
                h = O(this.options.autoPanPaddingBottomRight || a),
                l = t.getSize(),
                u = 0,
                d = 0;
              s.x + n + h.x > l.x && (u = s.x + n - l.x + h.x),
                s.x - u - r.x < 0 && (u = s.x - r.x),
                s.y + i + h.y > l.y && (d = s.y + i - l.y + h.y),
                s.y - d - r.y < 0 && (d = s.y - r.y),
                (u || d) &&
                  (this.options.keepInView && (this._autopanning = !0),
                  t.fire('autopanstart').panBy([u, d]));
            }
        },
        _getAnchor: function () {
          return O(
            this._source && this._source._getPopupAnchor
              ? this._source._getPopupAnchor()
              : [0, 0]
          );
        },
      }),
      An = function (t, e) {
        return new En(t, e);
      };
    oi.mergeOptions({ closePopupOnClick: !0 }),
      oi.include({
        openPopup: function (t, e, i) {
          return this._initOverlay(En, t, e, i).openOn(this), this;
        },
        closePopup: function (t) {
          return (t = arguments.length ? t : this._popup) && t.close(), this;
        },
      }),
      Vi.include({
        bindPopup: function (t, e) {
          return (
            (this._popup = this._initOverlay(En, this._popup, t, e)),
            this._popupHandlersAdded ||
              (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !0)),
            this
          );
        },
        unbindPopup: function () {
          return (
            this._popup &&
              (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup,
              }),
              (this._popupHandlersAdded = !1),
              (this._popup = null)),
            this
          );
        },
        openPopup: function (t) {
          return (
            this._popup &&
              (this instanceof Ji || (this._popup._source = this),
              this._popup._prepareOpen(t || this._latlng) &&
                this._popup.openOn(this._map)),
            this
          );
        },
        closePopup: function () {
          return this._popup && this._popup.close(), this;
        },
        togglePopup: function () {
          return this._popup && this._popup.toggle(this), this;
        },
        isPopupOpen: function () {
          return !!this._popup && this._popup.isOpen();
        },
        setPopupContent: function (t) {
          return this._popup && this._popup.setContent(t), this;
        },
        getPopup: function () {
          return this._popup;
        },
        _openPopup: function (t) {
          if (this._popup && this._map) {
            Ye(t);
            var e = t.layer || t.target;
            this._popup._source !== e || e instanceof on
              ? ((this._popup._source = e), this.openPopup(t.latlng))
              : this._map.hasLayer(this._popup)
              ? this.closePopup()
              : this.openPopup(t.latlng);
          }
        },
        _movePopup: function (t) {
          this._popup.setLatLng(t.latlng);
        },
        _onKeyPress: function (t) {
          13 === t.originalEvent.keyCode && this._openPopup(t);
        },
      });
    var Bn = Sn.extend({
        options: {
          pane: 'tooltipPane',
          offset: [0, 0],
          direction: 'auto',
          permanent: !1,
          sticky: !1,
          opacity: 0.9,
        },
        onAdd: function (t) {
          Sn.prototype.onAdd.call(this, t),
            this.setOpacity(this.options.opacity),
            t.fire('tooltipopen', { tooltip: this }),
            this._source &&
              (this.addEventParent(this._source),
              this._source.fire('tooltipopen', { tooltip: this }, !0));
        },
        onRemove: function (t) {
          Sn.prototype.onRemove.call(this, t),
            t.fire('tooltipclose', { tooltip: this }),
            this._source &&
              (this.removeEventParent(this._source),
              this._source.fire('tooltipclose', { tooltip: this }, !0));
        },
        getEvents: function () {
          var t = Sn.prototype.getEvents.call(this);
          return this.options.permanent || (t.preclick = this.close), t;
        },
        _initLayout: function () {
          var t =
            'leaflet-tooltip ' +
            (this.options.className || '') +
            ' leaflet-zoom-' +
            (this._zoomAnimated ? 'animated' : 'hide');
          (this._contentNode = this._container = pe('div', t)),
            this._container.setAttribute('role', 'tooltip'),
            this._container.setAttribute('id', 'leaflet-tooltip-' + a(this));
        },
        _updateLayout: function () {},
        _adjustPan: function () {},
        _setPosition: function (t) {
          var e,
            i,
            n = this._map,
            o = this._container,
            s = n.latLngToContainerPoint(n.getCenter()),
            a = n.layerPointToContainerPoint(t),
            r = this.options.direction,
            h = o.offsetWidth,
            l = o.offsetHeight,
            u = O(this.options.offset),
            d = this._getAnchor();
          'top' === r
            ? ((e = h / 2), (i = l))
            : 'bottom' === r
            ? ((e = h / 2), (i = 0))
            : 'center' === r
            ? ((e = h / 2), (i = l / 2))
            : 'right' === r
            ? ((e = 0), (i = l / 2))
            : 'left' === r
            ? ((e = h), (i = l / 2))
            : a.x < s.x
            ? ((r = 'right'), (e = 0), (i = l / 2))
            : ((r = 'left'), (e = h + 2 * (u.x + d.x)), (i = l / 2)),
            (t = t.subtract(O(e, i, !0)).add(u).add(d)),
            we(o, 'leaflet-tooltip-right'),
            we(o, 'leaflet-tooltip-left'),
            we(o, 'leaflet-tooltip-top'),
            we(o, 'leaflet-tooltip-bottom'),
            xe(o, 'leaflet-tooltip-' + r),
            ke(o, t);
        },
        _updatePosition: function () {
          var t = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(t);
        },
        setOpacity: function (t) {
          (this.options.opacity = t), this._container && Te(this._container, t);
        },
        _animateZoom: function (t) {
          var e = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          );
          this._setPosition(e);
        },
        _getAnchor: function () {
          return O(
            this._source &&
              this._source._getTooltipAnchor &&
              !this.options.sticky
              ? this._source._getTooltipAnchor()
              : [0, 0]
          );
        },
      }),
      On = function (t, e) {
        return new Bn(t, e);
      };
    oi.include({
      openTooltip: function (t, e, i) {
        return this._initOverlay(Bn, t, e, i).openOn(this), this;
      },
      closeTooltip: function (t) {
        return t.close(), this;
      },
    }),
      Vi.include({
        bindTooltip: function (t, e) {
          return (
            this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
            (this._tooltip = this._initOverlay(Bn, this._tooltip, t, e)),
            this._initTooltipInteractions(),
            this._tooltip.options.permanent &&
              this._map &&
              this._map.hasLayer(this) &&
              this.openTooltip(),
            this
          );
        },
        unbindTooltip: function () {
          return (
            this._tooltip &&
              (this._initTooltipInteractions(!0),
              this.closeTooltip(),
              (this._tooltip = null)),
            this
          );
        },
        _initTooltipInteractions: function (t) {
          if (t || !this._tooltipHandlersAdded) {
            var e = t ? 'off' : 'on',
              i = { remove: this.closeTooltip, move: this._moveTooltip };
            this._tooltip.options.permanent
              ? (i.add = this._openTooltip)
              : ((i.mouseover = this._openTooltip),
                (i.mouseout = this.closeTooltip),
                (i.click = this._openTooltip),
                this._map
                  ? this._addFocusListeners()
                  : (i.add = this._addFocusListeners)),
              this._tooltip.options.sticky && (i.mousemove = this._moveTooltip),
              this[e](i),
              (this._tooltipHandlersAdded = !t);
          }
        },
        openTooltip: function (t) {
          return (
            this._tooltip &&
              (this instanceof Ji || (this._tooltip._source = this),
              this._tooltip._prepareOpen(t) &&
                (this._tooltip.openOn(this._map),
                this.getElement
                  ? this._setAriaDescribedByOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._setAriaDescribedByOnLayer, this))),
            this
          );
        },
        closeTooltip: function () {
          if (this._tooltip) return this._tooltip.close();
        },
        toggleTooltip: function () {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        isTooltipOpen: function () {
          return this._tooltip.isOpen();
        },
        setTooltipContent: function (t) {
          return this._tooltip && this._tooltip.setContent(t), this;
        },
        getTooltip: function () {
          return this._tooltip;
        },
        _addFocusListeners: function () {
          this.getElement
            ? this._addFocusListenersOnLayer(this)
            : this.eachLayer &&
              this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function (t) {
          var e = t.getElement();
          e &&
            (De(
              e,
              'focus',
              function () {
                (this._tooltip._source = t), this.openTooltip();
              },
              this
            ),
            De(e, 'blur', this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function (t) {
          var e = t.getElement();
          e && e.setAttribute('aria-describedby', this._tooltip._container.id);
        },
        _openTooltip: function (t) {
          !this._tooltip ||
            !this._map ||
            (this._map.dragging && this._map.dragging.moving()) ||
            ((this._tooltip._source = t.layer || t.target),
            this.openTooltip(this._tooltip.options.sticky ? t.latlng : void 0));
        },
        _moveTooltip: function (t) {
          var e,
            i,
            n = t.latlng;
          this._tooltip.options.sticky &&
            t.originalEvent &&
            ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
            (i = this._map.containerPointToLayerPoint(e)),
            (n = this._map.layerPointToLatLng(i))),
            this._tooltip.setLatLng(n);
        },
      });
    var In = Xi.extend({
      options: {
        iconSize: [12, 12],
        html: !1,
        bgPos: null,
        className: 'leaflet-div-icon',
      },
      createIcon: function (t) {
        var e = t && 'DIV' === t.tagName ? t : document.createElement('div'),
          i = this.options;
        if (
          (i.html instanceof Element
            ? (ge(e), e.appendChild(i.html))
            : (e.innerHTML = !1 !== i.html ? i.html : ''),
          i.bgPos)
        ) {
          var n = O(i.bgPos);
          e.style.backgroundPosition = -n.x + 'px ' + -n.y + 'px';
        }
        return this._setIconStyles(e, 'icon'), e;
      },
      createShadow: function () {
        return null;
      },
    });
    function Rn(t) {
      return new In(t);
    }
    Xi.Default = Qi;
    var jn = Vi.extend({
      options: {
        tileSize: 256,
        opacity: 1,
        updateWhenIdle: jt.mobile,
        updateWhenZooming: !0,
        updateInterval: 200,
        zIndex: 1,
        bounds: null,
        minZoom: 0,
        maxZoom: void 0,
        maxNativeZoom: void 0,
        minNativeZoom: void 0,
        noWrap: !1,
        pane: 'tilePane',
        className: '',
        keepBuffer: 2,
      },
      initialize: function (t) {
        _(this, t);
      },
      onAdd: function () {
        this._initContainer(),
          (this._levels = {}),
          (this._tiles = {}),
          this._resetView();
      },
      beforeAdd: function (t) {
        t._addZoomLimit(this);
      },
      onRemove: function (t) {
        this._removeAllTiles(),
          fe(this._container),
          t._removeZoomLimit(this),
          (this._container = null),
          (this._tileZoom = void 0);
      },
      bringToFront: function () {
        return (
          this._map && (ve(this._container), this._setAutoZIndex(Math.max)),
          this
        );
      },
      bringToBack: function () {
        return (
          this._map && (ye(this._container), this._setAutoZIndex(Math.min)),
          this
        );
      },
      getContainer: function () {
        return this._container;
      },
      setOpacity: function (t) {
        return (this.options.opacity = t), this._updateOpacity(), this;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      isLoading: function () {
        return this._loading;
      },
      redraw: function () {
        if (this._map) {
          this._removeAllTiles();
          var t = this._clampZoom(this._map.getZoom());
          t !== this._tileZoom && ((this._tileZoom = t), this._updateLevels()),
            this._update();
        }
        return this;
      },
      getEvents: function () {
        var t = {
          viewprereset: this._invalidateAll,
          viewreset: this._resetView,
          zoom: this._resetView,
          moveend: this._onMoveEnd,
        };
        return (
          this.options.updateWhenIdle ||
            (this._onMove ||
              (this._onMove = r(
                this._onMoveEnd,
                this.options.updateInterval,
                this
              )),
            (t.move = this._onMove)),
          this._zoomAnimated && (t.zoomanim = this._animateZoom),
          t
        );
      },
      createTile: function () {
        return document.createElement('div');
      },
      getTileSize: function () {
        var t = this.options.tileSize;
        return t instanceof A ? t : new A(t, t);
      },
      _updateZIndex: function () {
        this._container &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._container.style.zIndex = this.options.zIndex);
      },
      _setAutoZIndex: function (t) {
        for (
          var e,
            i = this.getPane().children,
            n = -t(-1 / 0, 1 / 0),
            o = 0,
            s = i.length;
          o < s;
          o++
        )
          (e = i[o].style.zIndex),
            i[o] !== this._container && e && (n = t(n, +e));
        isFinite(n) &&
          ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
      },
      _updateOpacity: function () {
        if (this._map && !jt.ielt9) {
          Te(this._container, this.options.opacity);
          var t = +new Date(),
            e = !1,
            i = !1;
          for (var n in this._tiles) {
            var o = this._tiles[n];
            if (o.current && o.loaded) {
              var s = Math.min(1, (t - o.loaded) / 200);
              Te(o.el, s),
                s < 1
                  ? (e = !0)
                  : (o.active ? (i = !0) : this._onOpaqueTile(o),
                    (o.active = !0));
            }
          }
          i && !this._noPrune && this._pruneTiles(),
            e &&
              (z(this._fadeFrame),
              (this._fadeFrame = M(this._updateOpacity, this)));
        }
      },
      _onOpaqueTile: l,
      _initContainer: function () {
        this._container ||
          ((this._container = pe(
            'div',
            'leaflet-layer ' + (this.options.className || '')
          )),
          this._updateZIndex(),
          this.options.opacity < 1 && this._updateOpacity(),
          this.getPane().appendChild(this._container));
      },
      _updateLevels: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom;
        if (void 0 !== t) {
          for (var i in this._levels)
            (i = Number(i)),
              this._levels[i].el.children.length || i === t
                ? ((this._levels[i].el.style.zIndex = e - Math.abs(t - i)),
                  this._onUpdateLevel(i))
                : (fe(this._levels[i].el),
                  this._removeTilesAtZoom(i),
                  this._onRemoveLevel(i),
                  delete this._levels[i]);
          var n = this._levels[t],
            o = this._map;
          return (
            n ||
              (((n = this._levels[t] = {}).el = pe(
                'div',
                'leaflet-tile-container leaflet-zoom-animated',
                this._container
              )),
              (n.el.style.zIndex = e),
              (n.origin = o
                .project(o.unproject(o.getPixelOrigin()), t)
                .round()),
              (n.zoom = t),
              this._setZoomTransform(n, o.getCenter(), o.getZoom()),
              l(n.el.offsetWidth),
              this._onCreateLevel(n)),
            (this._level = n),
            n
          );
        }
      },
      _onUpdateLevel: l,
      _onRemoveLevel: l,
      _onCreateLevel: l,
      _pruneTiles: function () {
        if (this._map) {
          var t,
            e,
            i = this._map.getZoom();
          if (i > this.options.maxZoom || i < this.options.minZoom)
            this._removeAllTiles();
          else {
            for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
            for (t in this._tiles)
              if ((e = this._tiles[t]).current && !e.active) {
                var n = e.coords;
                this._retainParent(n.x, n.y, n.z, n.z - 5) ||
                  this._retainChildren(n.x, n.y, n.z, n.z + 2);
              }
            for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
          }
        }
      },
      _removeTilesAtZoom: function (t) {
        for (var e in this._tiles)
          this._tiles[e].coords.z === t && this._removeTile(e);
      },
      _removeAllTiles: function () {
        for (var t in this._tiles) this._removeTile(t);
      },
      _invalidateAll: function () {
        for (var t in this._levels)
          fe(this._levels[t].el),
            this._onRemoveLevel(Number(t)),
            delete this._levels[t];
        this._removeAllTiles(), (this._tileZoom = void 0);
      },
      _retainParent: function (t, e, i, n) {
        var o = Math.floor(t / 2),
          s = Math.floor(e / 2),
          a = i - 1,
          r = new A(+o, +s);
        r.z = +a;
        var h = this._tileCoordsToKey(r),
          l = this._tiles[h];
        return l && l.active
          ? ((l.retain = !0), !0)
          : (l && l.loaded && (l.retain = !0),
            a > n && this._retainParent(o, s, a, n));
      },
      _retainChildren: function (t, e, i, n) {
        for (var o = 2 * t; o < 2 * t + 2; o++)
          for (var s = 2 * e; s < 2 * e + 2; s++) {
            var a = new A(o, s);
            a.z = i + 1;
            var r = this._tileCoordsToKey(a),
              h = this._tiles[r];
            h && h.active
              ? (h.retain = !0)
              : (h && h.loaded && (h.retain = !0),
                i + 1 < n && this._retainChildren(o, s, i + 1, n));
          }
      },
      _resetView: function (t) {
        var e = t && (t.pinch || t.flyTo);
        this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
      },
      _animateZoom: function (t) {
        this._setView(t.center, t.zoom, !0, t.noUpdate);
      },
      _clampZoom: function (t) {
        var e = this.options;
        return void 0 !== e.minNativeZoom && t < e.minNativeZoom
          ? e.minNativeZoom
          : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
          ? e.maxNativeZoom
          : t;
      },
      _setView: function (t, e, i, n) {
        var o = Math.round(e);
        o =
          (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)
            ? void 0
            : this._clampZoom(o);
        var s = this.options.updateWhenZooming && o !== this._tileZoom;
        (n && !s) ||
          ((this._tileZoom = o),
          this._abortLoading && this._abortLoading(),
          this._updateLevels(),
          this._resetGrid(),
          void 0 !== o && this._update(t),
          i || this._pruneTiles(),
          (this._noPrune = !!i)),
          this._setZoomTransforms(t, e);
      },
      _setZoomTransforms: function (t, e) {
        for (var i in this._levels)
          this._setZoomTransform(this._levels[i], t, e);
      },
      _setZoomTransform: function (t, e, i) {
        var n = this._map.getZoomScale(i, t.zoom),
          o = t.origin
            .multiplyBy(n)
            .subtract(this._map._getNewPixelOrigin(e, i))
            .round();
        jt.any3d ? Ze(t.el, o, n) : ke(t.el, o);
      },
      _resetGrid: function () {
        var t = this._map,
          e = t.options.crs,
          i = (this._tileSize = this.getTileSize()),
          n = this._tileZoom,
          o = this._map.getPixelWorldBounds(this._tileZoom);
        o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
          (this._wrapX = e.wrapLng &&
            !this.options.noWrap && [
              Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x),
              Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y),
            ]),
          (this._wrapY = e.wrapLat &&
            !this.options.noWrap && [
              Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x),
              Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y),
            ]);
      },
      _onMoveEnd: function () {
        this._map && !this._map._animatingZoom && this._update();
      },
      _getTiledPixelBounds: function (t) {
        var e = this._map,
          i = e._animatingZoom
            ? Math.max(e._animateToZoom, e.getZoom())
            : e.getZoom(),
          n = e.getZoomScale(i, this._tileZoom),
          o = e.project(t, this._tileZoom).floor(),
          s = e.getSize().divideBy(2 * n);
        return new I(o.subtract(s), o.add(s));
      },
      _update: function (t) {
        var e = this._map;
        if (e) {
          var i = this._clampZoom(e.getZoom());
          if (
            (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom)
          ) {
            var n = this._getTiledPixelBounds(t),
              o = this._pxBoundsToTileRange(n),
              s = o.getCenter(),
              a = [],
              r = this.options.keepBuffer,
              h = new I(
                o.getBottomLeft().subtract([r, -r]),
                o.getTopRight().add([r, -r])
              );
            if (
              !(
                isFinite(o.min.x) &&
                isFinite(o.min.y) &&
                isFinite(o.max.x) &&
                isFinite(o.max.y)
              )
            )
              throw new Error('Attempted to load an infinite number of tiles');
            for (var l in this._tiles) {
              var u = this._tiles[l].coords;
              (u.z === this._tileZoom && h.contains(new A(u.x, u.y))) ||
                (this._tiles[l].current = !1);
            }
            if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i);
            else {
              for (var d = o.min.y; d <= o.max.y; d++)
                for (var c = o.min.x; c <= o.max.x; c++) {
                  var _ = new A(c, d);
                  if (((_.z = this._tileZoom), this._isValidTile(_))) {
                    var m = this._tiles[this._tileCoordsToKey(_)];
                    m ? (m.current = !0) : a.push(_);
                  }
                }
              if (
                (a.sort(function (t, e) {
                  return t.distanceTo(s) - e.distanceTo(s);
                }),
                0 !== a.length)
              ) {
                this._loading || ((this._loading = !0), this.fire('loading'));
                var p = document.createDocumentFragment();
                for (c = 0; c < a.length; c++) this._addTile(a[c], p);
                this._level.el.appendChild(p);
              }
            }
          }
        }
      },
      _isValidTile: function (t) {
        var e = this._map.options.crs;
        if (!e.infinite) {
          var i = this._globalTileRange;
          if (
            (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x)) ||
            (!e.wrapLat && (t.y < i.min.y || t.y > i.max.y))
          )
            return !1;
        }
        if (!this.options.bounds) return !0;
        var n = this._tileCoordsToBounds(t);
        return D(this.options.bounds).overlaps(n);
      },
      _keyToBounds: function (t) {
        return this._tileCoordsToBounds(this._keyToTileCoords(t));
      },
      _tileCoordsToNwSe: function (t) {
        var e = this._map,
          i = this.getTileSize(),
          n = t.scaleBy(i),
          o = n.add(i);
        return [e.unproject(n, t.z), e.unproject(o, t.z)];
      },
      _tileCoordsToBounds: function (t) {
        var e = this._tileCoordsToNwSe(t),
          i = new j(e[0], e[1]);
        return this.options.noWrap || (i = this._map.wrapLatLngBounds(i)), i;
      },
      _tileCoordsToKey: function (t) {
        return t.x + ':' + t.y + ':' + t.z;
      },
      _keyToTileCoords: function (t) {
        var e = t.split(':'),
          i = new A(+e[0], +e[1]);
        return (i.z = +e[2]), i;
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        e &&
          (fe(e.el),
          delete this._tiles[t],
          this.fire('tileunload', {
            tile: e.el,
            coords: this._keyToTileCoords(t),
          }));
      },
      _initTile: function (t) {
        xe(t, 'leaflet-tile');
        var e = this.getTileSize();
        (t.style.width = e.x + 'px'),
          (t.style.height = e.y + 'px'),
          (t.onselectstart = l),
          (t.onmousemove = l),
          jt.ielt9 && this.options.opacity < 1 && Te(t, this.options.opacity);
      },
      _addTile: function (t, e) {
        var i = this._getTilePos(t),
          n = this._tileCoordsToKey(t),
          s = this.createTile(this._wrapCoords(t), o(this._tileReady, this, t));
        this._initTile(s),
          this.createTile.length < 2 && M(o(this._tileReady, this, t, null, s)),
          ke(s, i),
          (this._tiles[n] = { el: s, coords: t, current: !0 }),
          e.appendChild(s),
          this.fire('tileloadstart', { tile: s, coords: t });
      },
      _tileReady: function (t, e, i) {
        e && this.fire('tileerror', { error: e, tile: i, coords: t });
        var n = this._tileCoordsToKey(t);
        (i = this._tiles[n]) &&
          ((i.loaded = +new Date()),
          this._map._fadeAnimated
            ? (Te(i.el, 0),
              z(this._fadeFrame),
              (this._fadeFrame = M(this._updateOpacity, this)))
            : ((i.active = !0), this._pruneTiles()),
          e ||
            (xe(i.el, 'leaflet-tile-loaded'),
            this.fire('tileload', { tile: i.el, coords: t })),
          this._noTilesToLoad() &&
            ((this._loading = !1),
            this.fire('load'),
            jt.ielt9 || !this._map._fadeAnimated
              ? M(this._pruneTiles, this)
              : setTimeout(o(this._pruneTiles, this), 250)));
      },
      _getTilePos: function (t) {
        return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
      },
      _wrapCoords: function (t) {
        var e = new A(
          this._wrapX ? h(t.x, this._wrapX) : t.x,
          this._wrapY ? h(t.y, this._wrapY) : t.y
        );
        return (e.z = t.z), e;
      },
      _pxBoundsToTileRange: function (t) {
        var e = this.getTileSize();
        return new I(
          t.min.unscaleBy(e).floor(),
          t.max.unscaleBy(e).ceil().subtract([1, 1])
        );
      },
      _noTilesToLoad: function () {
        for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
        return !0;
      },
    });
    function Dn(t) {
      return new jn(t);
    }
    var Nn = jn.extend({
      options: {
        minZoom: 0,
        maxZoom: 18,
        subdomains: 'abc',
        errorTileUrl: '',
        zoomOffset: 0,
        tms: !1,
        zoomReverse: !1,
        detectRetina: !1,
        crossOrigin: !1,
        referrerPolicy: !1,
      },
      initialize: function (t, e) {
        (this._url = t),
          (e = _(this, e)).detectRetina && jt.retina && e.maxZoom > 0
            ? ((e.tileSize = Math.floor(e.tileSize / 2)),
              e.zoomReverse
                ? (e.zoomOffset--,
                  (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                : (e.zoomOffset++,
                  (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
              (e.minZoom = Math.max(0, e.minZoom)))
            : e.zoomReverse
            ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
            : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
          'string' == typeof e.subdomains &&
            (e.subdomains = e.subdomains.split('')),
          this.on('tileunload', this._onTileRemove);
      },
      setUrl: function (t, e) {
        return (
          this._url === t && void 0 === e && (e = !0),
          (this._url = t),
          e || this.redraw(),
          this
        );
      },
      createTile: function (t, e) {
        var i = document.createElement('img');
        return (
          De(i, 'load', o(this._tileOnLoad, this, e, i)),
          De(i, 'error', o(this._tileOnError, this, e, i)),
          (this.options.crossOrigin || '' === this.options.crossOrigin) &&
            (i.crossOrigin =
              !0 === this.options.crossOrigin ? '' : this.options.crossOrigin),
          'string' == typeof this.options.referrerPolicy &&
            (i.referrerPolicy = this.options.referrerPolicy),
          (i.alt = ''),
          (i.src = this.getTileUrl(t)),
          i
        );
      },
      getTileUrl: function (t) {
        var e = {
          r: jt.retina ? '@2x' : '',
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl(),
        };
        if (this._map && !this._map.options.crs.infinite) {
          var n = this._globalTileRange.max.y - t.y;
          this.options.tms && (e.y = n), (e['-y'] = n);
        }
        return f(this._url, i(e, this.options));
      },
      _tileOnLoad: function (t, e) {
        jt.ielt9 ? setTimeout(o(t, this, null, e), 0) : t(null, e);
      },
      _tileOnError: function (t, e, i) {
        var n = this.options.errorTileUrl;
        n && e.getAttribute('src') !== n && (e.src = n), t(i, e);
      },
      _onTileRemove: function (t) {
        t.tile.onload = null;
      },
      _getZoomForUrl: function () {
        var t = this._tileZoom,
          e = this.options.maxZoom;
        return (
          this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
        );
      },
      _getSubdomain: function (t) {
        var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
        return this.options.subdomains[e];
      },
      _abortLoading: function () {
        var t, e;
        for (t in this._tiles)
          if (
            this._tiles[t].coords.z !== this._tileZoom &&
            (((e = this._tiles[t].el).onload = l), (e.onerror = l), !e.complete)
          ) {
            e.src = y;
            var i = this._tiles[t].coords;
            fe(e),
              delete this._tiles[t],
              this.fire('tileabort', { tile: e, coords: i });
          }
      },
      _removeTile: function (t) {
        var e = this._tiles[t];
        if (e)
          return (
            e.el.setAttribute('src', y), jn.prototype._removeTile.call(this, t)
          );
      },
      _tileReady: function (t, e, i) {
        if (this._map && (!i || i.getAttribute('src') !== y))
          return jn.prototype._tileReady.call(this, t, e, i);
      },
    });
    function Hn(t, e) {
      return new Nn(t, e);
    }
    var Wn = Nn.extend({
      defaultWmsParams: {
        service: 'WMS',
        request: 'GetMap',
        layers: '',
        styles: '',
        format: 'image/jpeg',
        transparent: !1,
        version: '1.1.1',
      },
      options: { crs: null, uppercase: !1 },
      initialize: function (t, e) {
        this._url = t;
        var n = i({}, this.defaultWmsParams);
        for (var o in e) o in this.options || (n[o] = e[o]);
        var s = (e = _(this, e)).detectRetina && jt.retina ? 2 : 1,
          a = this.getTileSize();
        (n.width = a.x * s), (n.height = a.y * s), (this.wmsParams = n);
      },
      onAdd: function (t) {
        (this._crs = this.options.crs || t.options.crs),
          (this._wmsVersion = parseFloat(this.wmsParams.version));
        var e = this._wmsVersion >= 1.3 ? 'crs' : 'srs';
        (this.wmsParams[e] = this._crs.code), Nn.prototype.onAdd.call(this, t);
      },
      getTileUrl: function (t) {
        var e = this._tileCoordsToNwSe(t),
          i = this._crs,
          n = R(i.project(e[0]), i.project(e[1])),
          o = n.min,
          s = n.max,
          a = (
            this._wmsVersion >= 1.3 && this._crs === Ui
              ? [o.y, o.x, s.y, s.x]
              : [o.x, o.y, s.x, s.y]
          ).join(','),
          r = Nn.prototype.getTileUrl.call(this, t);
        return (
          r +
          m(this.wmsParams, r, this.options.uppercase) +
          (this.options.uppercase ? '&BBOX=' : '&bbox=') +
          a
        );
      },
      setParams: function (t, e) {
        return i(this.wmsParams, t), e || this.redraw(), this;
      },
    });
    function Fn(t, e) {
      return new Wn(t, e);
    }
    (Nn.WMS = Wn), (Hn.wms = Fn);
    var Un = Vi.extend({
        options: { padding: 0.1 },
        initialize: function (t) {
          _(this, t), a(this), (this._layers = this._layers || {});
        },
        onAdd: function () {
          this._container ||
            (this._initContainer(),
            this._zoomAnimated && xe(this._container, 'leaflet-zoom-animated')),
            this.getPane().appendChild(this._container),
            this._update(),
            this.on('update', this._updatePaths, this);
        },
        onRemove: function () {
          this.off('update', this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function () {
          var t = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd,
          };
          return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
        },
        _onAnimZoom: function (t) {
          this._updateTransform(t.center, t.zoom);
        },
        _onZoom: function () {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function (t, e) {
          var i = this._map.getZoomScale(e, this._zoom),
            n = this._map.getSize().multiplyBy(0.5 + this.options.padding),
            o = this._map.project(this._center, e),
            s = n
              .multiplyBy(-i)
              .add(o)
              .subtract(this._map._getNewPixelOrigin(t, e));
          jt.any3d ? Ze(this._container, s, i) : ke(this._container, s);
        },
        _reset: function () {
          for (var t in (this._update(),
          this._updateTransform(this._center, this._zoom),
          this._layers))
            this._layers[t]._reset();
        },
        _onZoomEnd: function () {
          for (var t in this._layers) this._layers[t]._project();
        },
        _updatePaths: function () {
          for (var t in this._layers) this._layers[t]._update();
        },
        _update: function () {
          var t = this.options.padding,
            e = this._map.getSize(),
            i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
          (this._bounds = new I(i, i.add(e.multiplyBy(1 + 2 * t)).round())),
            (this._center = this._map.getCenter()),
            (this._zoom = this._map.getZoom());
        },
      }),
      Gn = Un.extend({
        options: { tolerance: 0 },
        getEvents: function () {
          var t = Un.prototype.getEvents.call(this);
          return (t.viewprereset = this._onViewPreReset), t;
        },
        _onViewPreReset: function () {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function () {
          Un.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function () {
          var t = (this._container = document.createElement('canvas'));
          De(t, 'mousemove', this._onMouseMove, this),
            De(
              t,
              'click dblclick mousedown mouseup contextmenu',
              this._onClick,
              this
            ),
            De(t, 'mouseout', this._handleMouseOut, this),
            (t._leaflet_disable_events = !0),
            (this._ctx = t.getContext('2d'));
        },
        _destroyContainer: function () {
          z(this._redrawRequest),
            delete this._ctx,
            fe(this._container),
            He(this._container),
            delete this._container;
        },
        _updatePaths: function () {
          if (!this._postponeUpdatePaths) {
            for (var t in ((this._redrawBounds = null), this._layers))
              this._layers[t]._update();
            this._redraw();
          }
        },
        _update: function () {
          if (!this._map._animatingZoom || !this._bounds) {
            Un.prototype._update.call(this);
            var t = this._bounds,
              e = this._container,
              i = t.getSize(),
              n = jt.retina ? 2 : 1;
            ke(e, t.min),
              (e.width = n * i.x),
              (e.height = n * i.y),
              (e.style.width = i.x + 'px'),
              (e.style.height = i.y + 'px'),
              jt.retina && this._ctx.scale(2, 2),
              this._ctx.translate(-t.min.x, -t.min.y),
              this.fire('update');
          }
        },
        _reset: function () {
          Un.prototype._reset.call(this),
            this._postponeUpdatePaths &&
              ((this._postponeUpdatePaths = !1), this._updatePaths());
        },
        _initPath: function (t) {
          this._updateDashArray(t), (this._layers[a(t)] = t);
          var e = (t._order = { layer: t, prev: this._drawLast, next: null });
          this._drawLast && (this._drawLast.next = e),
            (this._drawLast = e),
            (this._drawFirst = this._drawFirst || this._drawLast);
        },
        _addPath: function (t) {
          this._requestRedraw(t);
        },
        _removePath: function (t) {
          var e = t._order,
            i = e.next,
            n = e.prev;
          i ? (i.prev = n) : (this._drawLast = n),
            n ? (n.next = i) : (this._drawFirst = i),
            delete t._order,
            delete this._layers[a(t)],
            this._requestRedraw(t);
        },
        _updatePath: function (t) {
          this._extendRedrawBounds(t),
            t._project(),
            t._update(),
            this._requestRedraw(t);
        },
        _updateStyle: function (t) {
          this._updateDashArray(t), this._requestRedraw(t);
        },
        _updateDashArray: function (t) {
          if ('string' == typeof t.options.dashArray) {
            var e,
              i,
              n = t.options.dashArray.split(/[, ]+/),
              o = [];
            for (i = 0; i < n.length; i++) {
              if (((e = Number(n[i])), isNaN(e))) return;
              o.push(e);
            }
            t.options._dashArray = o;
          } else t.options._dashArray = t.options.dashArray;
        },
        _requestRedraw: function (t) {
          this._map &&
            (this._extendRedrawBounds(t),
            (this._redrawRequest =
              this._redrawRequest || M(this._redraw, this)));
        },
        _extendRedrawBounds: function (t) {
          if (t._pxBounds) {
            var e = (t.options.weight || 0) + 1;
            (this._redrawBounds = this._redrawBounds || new I()),
              this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
              this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
          }
        },
        _redraw: function () {
          (this._redrawRequest = null),
            this._redrawBounds &&
              (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
            this._clear(),
            this._draw(),
            (this._redrawBounds = null);
        },
        _clear: function () {
          var t = this._redrawBounds;
          if (t) {
            var e = t.getSize();
            this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
          } else
            this._ctx.save(),
              this._ctx.setTransform(1, 0, 0, 1, 0, 0),
              this._ctx.clearRect(
                0,
                0,
                this._container.width,
                this._container.height
              ),
              this._ctx.restore();
        },
        _draw: function () {
          var t,
            e = this._redrawBounds;
          if ((this._ctx.save(), e)) {
            var i = e.getSize();
            this._ctx.beginPath(),
              this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
              this._ctx.clip();
          }
          this._drawing = !0;
          for (var n = this._drawFirst; n; n = n.next)
            (t = n.layer),
              (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
                t._updatePath();
          (this._drawing = !1), this._ctx.restore();
        },
        _updatePoly: function (t, e) {
          if (this._drawing) {
            var i,
              n,
              o,
              s,
              a = t._parts,
              r = a.length,
              h = this._ctx;
            if (r) {
              for (h.beginPath(), i = 0; i < r; i++) {
                for (n = 0, o = a[i].length; n < o; n++)
                  (s = a[i][n]), h[n ? 'lineTo' : 'moveTo'](s.x, s.y);
                e && h.closePath();
              }
              this._fillStroke(h, t);
            }
          }
        },
        _updateCircle: function (t) {
          if (this._drawing && !t._empty()) {
            var e = t._point,
              i = this._ctx,
              n = Math.max(Math.round(t._radius), 1),
              o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
            1 !== o && (i.save(), i.scale(1, o)),
              i.beginPath(),
              i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1),
              1 !== o && i.restore(),
              this._fillStroke(i, t);
          }
        },
        _fillStroke: function (t, e) {
          var i = e.options;
          i.fill &&
            ((t.globalAlpha = i.fillOpacity),
            (t.fillStyle = i.fillColor || i.color),
            t.fill(i.fillRule || 'evenodd')),
            i.stroke &&
              0 !== i.weight &&
              (t.setLineDash &&
                t.setLineDash((e.options && e.options._dashArray) || []),
              (t.globalAlpha = i.opacity),
              (t.lineWidth = i.weight),
              (t.strokeStyle = i.color),
              (t.lineCap = i.lineCap),
              (t.lineJoin = i.lineJoin),
              t.stroke());
        },
        _onClick: function (t) {
          for (
            var e,
              i,
              n = this._map.mouseEventToLayerPoint(t),
              o = this._drawFirst;
            o;
            o = o.next
          )
            (e = o.layer).options.interactive &&
              e._containsPoint(n) &&
              (('click' !== t.type && 'preclick' !== t.type) ||
                !this._map._draggableMoved(e)) &&
              (i = e);
          this._fireEvent(!!i && [i], t);
        },
        _onMouseMove: function (t) {
          if (
            this._map &&
            !this._map.dragging.moving() &&
            !this._map._animatingZoom
          ) {
            var e = this._map.mouseEventToLayerPoint(t);
            this._handleMouseHover(t, e);
          }
        },
        _handleMouseOut: function (t) {
          var e = this._hoveredLayer;
          e &&
            (we(this._container, 'leaflet-interactive'),
            this._fireEvent([e], t, 'mouseout'),
            (this._hoveredLayer = null),
            (this._mouseHoverThrottled = !1));
        },
        _handleMouseHover: function (t, e) {
          if (!this._mouseHoverThrottled) {
            for (var i, n, s = this._drawFirst; s; s = s.next)
              (i = s.layer).options.interactive &&
                i._containsPoint(e) &&
                (n = i);
            n !== this._hoveredLayer &&
              (this._handleMouseOut(t),
              n &&
                (xe(this._container, 'leaflet-interactive'),
                this._fireEvent([n], t, 'mouseover'),
                (this._hoveredLayer = n))),
              this._fireEvent(!!this._hoveredLayer && [this._hoveredLayer], t),
              (this._mouseHoverThrottled = !0),
              setTimeout(
                o(function () {
                  this._mouseHoverThrottled = !1;
                }, this),
                32
              );
          }
        },
        _fireEvent: function (t, e, i) {
          this._map._fireDOMEvent(e, i || e.type, t);
        },
        _bringToFront: function (t) {
          var e = t._order;
          if (e) {
            var i = e.next,
              n = e.prev;
            i &&
              ((i.prev = n),
              n ? (n.next = i) : i && (this._drawFirst = i),
              (e.prev = this._drawLast),
              (this._drawLast.next = e),
              (e.next = null),
              (this._drawLast = e),
              this._requestRedraw(t));
          }
        },
        _bringToBack: function (t) {
          var e = t._order;
          if (e) {
            var i = e.next,
              n = e.prev;
            n &&
              ((n.next = i),
              i ? (i.prev = n) : n && (this._drawLast = n),
              (e.prev = null),
              (e.next = this._drawFirst),
              (this._drawFirst.prev = e),
              (this._drawFirst = e),
              this._requestRedraw(t));
          }
        },
      });
    function Vn(t) {
      return jt.canvas ? new Gn(t) : null;
    }
    var qn = (function () {
        try {
          return (
            document.namespaces.add('lvml', 'urn:schemas-microsoft-com:vml'),
            function (t) {
              return document.createElement('<lvml:' + t + ' class="lvml">');
            }
          );
        } catch (t) {}
        return function (t) {
          return document.createElement(
            '<' + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      })(),
      Kn = {
        _initContainer: function () {
          this._container = pe('div', 'leaflet-vml-container');
        },
        _update: function () {
          this._map._animatingZoom ||
            (Un.prototype._update.call(this), this.fire('update'));
        },
        _initPath: function (t) {
          var e = (t._container = qn('shape'));
          xe(e, 'leaflet-vml-shape ' + (this.options.className || '')),
            (e.coordsize = '1 1'),
            (t._path = qn('path')),
            e.appendChild(t._path),
            this._updateStyle(t),
            (this._layers[a(t)] = t);
        },
        _addPath: function (t) {
          var e = t._container;
          this._container.appendChild(e),
            t.options.interactive && t.addInteractiveTarget(e);
        },
        _removePath: function (t) {
          var e = t._container;
          fe(e), t.removeInteractiveTarget(e), delete this._layers[a(t)];
        },
        _updateStyle: function (t) {
          var e = t._stroke,
            i = t._fill,
            n = t.options,
            o = t._container;
          (o.stroked = !!n.stroke),
            (o.filled = !!n.fill),
            n.stroke
              ? (e || (e = t._stroke = qn('stroke')),
                o.appendChild(e),
                (e.weight = n.weight + 'px'),
                (e.color = n.color),
                (e.opacity = n.opacity),
                n.dashArray
                  ? (e.dashStyle = g(n.dashArray)
                      ? n.dashArray.join(' ')
                      : n.dashArray.replace(/( *, *)/g, ' '))
                  : (e.dashStyle = ''),
                (e.endcap = n.lineCap.replace('butt', 'flat')),
                (e.joinstyle = n.lineJoin))
              : e && (o.removeChild(e), (t._stroke = null)),
            n.fill
              ? (i || (i = t._fill = qn('fill')),
                o.appendChild(i),
                (i.color = n.fillColor || n.color),
                (i.opacity = n.fillOpacity))
              : i && (o.removeChild(i), (t._fill = null));
        },
        _updateCircle: function (t) {
          var e = t._point.round(),
            i = Math.round(t._radius),
            n = Math.round(t._radiusY || i);
          this._setPath(
            t,
            t._empty()
              ? 'M0 0'
              : 'AL ' + e.x + ',' + e.y + ' ' + i + ',' + n + ' 0,23592600'
          );
        },
        _setPath: function (t, e) {
          t._path.v = e;
        },
        _bringToFront: function (t) {
          ve(t._container);
        },
        _bringToBack: function (t) {
          ye(t._container);
        },
      },
      Jn = jt.vml ? qn : X,
      Yn = Un.extend({
        _initContainer: function () {
          (this._container = Jn('svg')),
            this._container.setAttribute('pointer-events', 'none'),
            (this._rootGroup = Jn('g')),
            this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function () {
          fe(this._container),
            He(this._container),
            delete this._container,
            delete this._rootGroup,
            delete this._svgSize;
        },
        _update: function () {
          if (!this._map._animatingZoom || !this._bounds) {
            Un.prototype._update.call(this);
            var t = this._bounds,
              e = t.getSize(),
              i = this._container;
            (this._svgSize && this._svgSize.equals(e)) ||
              ((this._svgSize = e),
              i.setAttribute('width', e.x),
              i.setAttribute('height', e.y)),
              ke(i, t.min),
              i.setAttribute('viewBox', [t.min.x, t.min.y, e.x, e.y].join(' ')),
              this.fire('update');
          }
        },
        _initPath: function (t) {
          var e = (t._path = Jn('path'));
          t.options.className && xe(e, t.options.className),
            t.options.interactive && xe(e, 'leaflet-interactive'),
            this._updateStyle(t),
            (this._layers[a(t)] = t);
        },
        _addPath: function (t) {
          this._rootGroup || this._initContainer(),
            this._rootGroup.appendChild(t._path),
            t.addInteractiveTarget(t._path);
        },
        _removePath: function (t) {
          fe(t._path),
            t.removeInteractiveTarget(t._path),
            delete this._layers[a(t)];
        },
        _updatePath: function (t) {
          t._project(), t._update();
        },
        _updateStyle: function (t) {
          var e = t._path,
            i = t.options;
          e &&
            (i.stroke
              ? (e.setAttribute('stroke', i.color),
                e.setAttribute('stroke-opacity', i.opacity),
                e.setAttribute('stroke-width', i.weight),
                e.setAttribute('stroke-linecap', i.lineCap),
                e.setAttribute('stroke-linejoin', i.lineJoin),
                i.dashArray
                  ? e.setAttribute('stroke-dasharray', i.dashArray)
                  : e.removeAttribute('stroke-dasharray'),
                i.dashOffset
                  ? e.setAttribute('stroke-dashoffset', i.dashOffset)
                  : e.removeAttribute('stroke-dashoffset'))
              : e.setAttribute('stroke', 'none'),
            i.fill
              ? (e.setAttribute('fill', i.fillColor || i.color),
                e.setAttribute('fill-opacity', i.fillOpacity),
                e.setAttribute('fill-rule', i.fillRule || 'evenodd'))
              : e.setAttribute('fill', 'none'));
        },
        _updatePoly: function (t, e) {
          this._setPath(t, $(t._parts, e));
        },
        _updateCircle: function (t) {
          var e = t._point,
            i = Math.max(Math.round(t._radius), 1),
            n =
              'a' +
              i +
              ',' +
              (Math.max(Math.round(t._radiusY), 1) || i) +
              ' 0 1,0 ',
            o = t._empty()
              ? 'M0 0'
              : 'M' +
                (e.x - i) +
                ',' +
                e.y +
                n +
                2 * i +
                ',0 ' +
                n +
                2 * -i +
                ',0 ';
          this._setPath(t, o);
        },
        _setPath: function (t, e) {
          t._path.setAttribute('d', e);
        },
        _bringToFront: function (t) {
          ve(t._path);
        },
        _bringToBack: function (t) {
          ye(t._path);
        },
      });
    function Xn(t) {
      return jt.svg || jt.vml ? new Yn(t) : null;
    }
    jt.vml && Yn.include(Kn),
      oi.include({
        getRenderer: function (t) {
          var e =
            t.options.renderer ||
            this._getPaneRenderer(t.options.pane) ||
            this.options.renderer ||
            this._renderer;
          return (
            e || (e = this._renderer = this._createRenderer()),
            this.hasLayer(e) || this.addLayer(e),
            e
          );
        },
        _getPaneRenderer: function (t) {
          if ('overlayPane' === t || void 0 === t) return !1;
          var e = this._paneRenderers[t];
          return (
            void 0 === e &&
              ((e = this._createRenderer({ pane: t })),
              (this._paneRenderers[t] = e)),
            e
          );
        },
        _createRenderer: function (t) {
          return (this.options.preferCanvas && Vn(t)) || Xn(t);
        },
      });
    var $n = dn.extend({
      initialize: function (t, e) {
        dn.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
      },
      setBounds: function (t) {
        return this.setLatLngs(this._boundsToLatLngs(t));
      },
      _boundsToLatLngs: function (t) {
        return [
          (t = D(t)).getSouthWest(),
          t.getNorthWest(),
          t.getNorthEast(),
          t.getSouthEast(),
        ];
      },
    });
    function Qn(t, e) {
      return new $n(t, e);
    }
    (Yn.create = Jn),
      (Yn.pointsToPath = $),
      (_n.geometryToLayer = mn),
      (_n.coordsToLatLng = fn),
      (_n.coordsToLatLngs = gn),
      (_n.latLngToCoords = vn),
      (_n.latLngsToCoords = yn),
      (_n.getFeature = bn),
      (_n.asFeature = xn),
      oi.mergeOptions({ boxZoom: !0 });
    var to = gi.extend({
      initialize: function (t) {
        (this._map = t),
          (this._container = t._container),
          (this._pane = t._panes.overlayPane),
          (this._resetStateTimeout = 0),
          t.on('unload', this._destroy, this);
      },
      addHooks: function () {
        De(this._container, 'mousedown', this._onMouseDown, this);
      },
      removeHooks: function () {
        He(this._container, 'mousedown', this._onMouseDown, this);
      },
      moved: function () {
        return this._moved;
      },
      _destroy: function () {
        fe(this._pane), delete this._pane;
      },
      _resetState: function () {
        (this._resetStateTimeout = 0), (this._moved = !1);
      },
      _clearDeferredResetState: function () {
        0 !== this._resetStateTimeout &&
          (clearTimeout(this._resetStateTimeout),
          (this._resetStateTimeout = 0));
      },
      _onMouseDown: function (t) {
        if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
        this._clearDeferredResetState(),
          this._resetState(),
          se(),
          Ee(),
          (this._startPoint = this._map.mouseEventToContainerPoint(t)),
          De(
            document,
            {
              contextmenu: Ye,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseMove: function (t) {
        this._moved ||
          ((this._moved = !0),
          (this._box = pe('div', 'leaflet-zoom-box', this._container)),
          xe(this._container, 'leaflet-crosshair'),
          this._map.fire('boxzoomstart')),
          (this._point = this._map.mouseEventToContainerPoint(t));
        var e = new I(this._point, this._startPoint),
          i = e.getSize();
        ke(this._box, e.min),
          (this._box.style.width = i.x + 'px'),
          (this._box.style.height = i.y + 'px');
      },
      _finish: function () {
        this._moved &&
          (fe(this._box), we(this._container, 'leaflet-crosshair')),
          ae(),
          Ae(),
          He(
            document,
            {
              contextmenu: Ye,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown,
            },
            this
          );
      },
      _onMouseUp: function (t) {
        if (
          (1 === t.which || 1 === t.button) &&
          (this._finish(), this._moved)
        ) {
          this._clearDeferredResetState(),
            (this._resetStateTimeout = setTimeout(
              o(this._resetState, this),
              0
            ));
          var e = new j(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          );
          this._map.fitBounds(e).fire('boxzoomend', { boxZoomBounds: e });
        }
      },
      _onKeyDown: function (t) {
        27 === t.keyCode &&
          (this._finish(), this._clearDeferredResetState(), this._resetState());
      },
    });
    oi.addInitHook('addHandler', 'boxZoom', to),
      oi.mergeOptions({ doubleClickZoom: !0 });
    var eo = gi.extend({
      addHooks: function () {
        this._map.on('dblclick', this._onDoubleClick, this);
      },
      removeHooks: function () {
        this._map.off('dblclick', this._onDoubleClick, this);
      },
      _onDoubleClick: function (t) {
        var e = this._map,
          i = e.getZoom(),
          n = e.options.zoomDelta,
          o = t.originalEvent.shiftKey ? i - n : i + n;
        'center' === e.options.doubleClickZoom
          ? e.setZoom(o)
          : e.setZoomAround(t.containerPoint, o);
      },
    });
    oi.addInitHook('addHandler', 'doubleClickZoom', eo),
      oi.mergeOptions({
        dragging: !0,
        inertia: !0,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: 0.2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0,
      });
    var io = gi.extend({
      addHooks: function () {
        if (!this._draggable) {
          var t = this._map;
          (this._draggable = new xi(t._mapPane, t._container)),
            this._draggable.on(
              {
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd,
              },
              this
            ),
            this._draggable.on('predrag', this._onPreDragLimit, this),
            t.options.worldCopyJump &&
              (this._draggable.on('predrag', this._onPreDragWrap, this),
              t.on('zoomend', this._onZoomEnd, this),
              t.whenReady(this._onZoomEnd, this));
        }
        xe(this._map._container, 'leaflet-grab leaflet-touch-drag'),
          this._draggable.enable(),
          (this._positions = []),
          (this._times = []);
      },
      removeHooks: function () {
        we(this._map._container, 'leaflet-grab'),
          we(this._map._container, 'leaflet-touch-drag'),
          this._draggable.disable();
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      moving: function () {
        return this._draggable && this._draggable._moving;
      },
      _onDragStart: function () {
        var t = this._map;
        if (
          (t._stop(),
          this._map.options.maxBounds && this._map.options.maxBoundsViscosity)
        ) {
          var e = D(this._map.options.maxBounds);
          (this._offsetLimit = R(
            this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),
            this._map
              .latLngToContainerPoint(e.getSouthEast())
              .multiplyBy(-1)
              .add(this._map.getSize())
          )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            ));
        } else this._offsetLimit = null;
        t.fire('movestart').fire('dragstart'),
          t.options.inertia && ((this._positions = []), (this._times = []));
      },
      _onDrag: function (t) {
        if (this._map.options.inertia) {
          var e = (this._lastTime = +new Date()),
            i = (this._lastPos =
              this._draggable._absPos || this._draggable._newPos);
          this._positions.push(i), this._times.push(e), this._prunePositions(e);
        }
        this._map.fire('move', t).fire('drag', t);
      },
      _prunePositions: function (t) {
        for (; this._positions.length > 1 && t - this._times[0] > 50; )
          this._positions.shift(), this._times.shift();
      },
      _onZoomEnd: function () {
        var t = this._map.getSize().divideBy(2),
          e = this._map.latLngToLayerPoint([0, 0]);
        (this._initialWorldOffset = e.subtract(t).x),
          (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
      },
      _viscousLimit: function (t, e) {
        return t - (t - e) * this._viscosity;
      },
      _onPreDragLimit: function () {
        if (this._viscosity && this._offsetLimit) {
          var t = this._draggable._newPos.subtract(this._draggable._startPos),
            e = this._offsetLimit;
          t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
            t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
            t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
            t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
            (this._draggable._newPos = this._draggable._startPos.add(t));
        }
      },
      _onPreDragWrap: function () {
        var t = this._worldWidth,
          e = Math.round(t / 2),
          i = this._initialWorldOffset,
          n = this._draggable._newPos.x,
          o = ((n - e + i) % t) + e - i,
          s = ((n + e + i) % t) - e - i,
          a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
        (this._draggable._absPos = this._draggable._newPos.clone()),
          (this._draggable._newPos.x = a);
      },
      _onDragEnd: function (t) {
        var e = this._map,
          i = e.options,
          n = !i.inertia || t.noInertia || this._times.length < 2;
        if ((e.fire('dragend', t), n)) e.fire('moveend');
        else {
          this._prunePositions(+new Date());
          var o = this._lastPos.subtract(this._positions[0]),
            s = (this._lastTime - this._times[0]) / 1e3,
            a = i.easeLinearity,
            r = o.multiplyBy(a / s),
            h = r.distanceTo([0, 0]),
            l = Math.min(i.inertiaMaxSpeed, h),
            u = r.multiplyBy(l / h),
            d = l / (i.inertiaDeceleration * a),
            c = u.multiplyBy(-d / 2).round();
          c.x || c.y
            ? ((c = e._limitOffset(c, e.options.maxBounds)),
              M(function () {
                e.panBy(c, {
                  duration: d,
                  easeLinearity: a,
                  noMoveStart: !0,
                  animate: !0,
                });
              }))
            : e.fire('moveend');
        }
      },
    });
    oi.addInitHook('addHandler', 'dragging', io),
      oi.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
    var no = gi.extend({
      keyCodes: {
        left: [37],
        right: [39],
        down: [40],
        up: [38],
        zoomIn: [187, 107, 61, 171],
        zoomOut: [189, 109, 54, 173],
      },
      initialize: function (t) {
        (this._map = t),
          this._setPanDelta(t.options.keyboardPanDelta),
          this._setZoomDelta(t.options.zoomDelta);
      },
      addHooks: function () {
        var t = this._map._container;
        t.tabIndex <= 0 && (t.tabIndex = '0'),
          De(
            t,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.on(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      removeHooks: function () {
        this._removeHooks(),
          He(
            this._map._container,
            {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown,
            },
            this
          ),
          this._map.off(
            { focus: this._addHooks, blur: this._removeHooks },
            this
          );
      },
      _onMouseDown: function () {
        if (!this._focused) {
          var t = document.body,
            e = document.documentElement,
            i = t.scrollTop || e.scrollTop,
            n = t.scrollLeft || e.scrollLeft;
          this._map._container.focus(), window.scrollTo(n, i);
        }
      },
      _onFocus: function () {
        (this._focused = !0), this._map.fire('focus');
      },
      _onBlur: function () {
        (this._focused = !1), this._map.fire('blur');
      },
      _setPanDelta: function (t) {
        var e,
          i,
          n = (this._panKeys = {}),
          o = this.keyCodes;
        for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
        for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
        for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
        for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t];
      },
      _setZoomDelta: function (t) {
        var e,
          i,
          n = (this._zoomKeys = {}),
          o = this.keyCodes;
        for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
        for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t;
      },
      _addHooks: function () {
        De(document, 'keydown', this._onKeyDown, this);
      },
      _removeHooks: function () {
        He(document, 'keydown', this._onKeyDown, this);
      },
      _onKeyDown: function (t) {
        if (!(t.altKey || t.ctrlKey || t.metaKey)) {
          var e,
            i = t.keyCode,
            n = this._map;
          if (i in this._panKeys) {
            if (!n._panAnim || !n._panAnim._inProgress)
              if (
                ((e = this._panKeys[i]),
                t.shiftKey && (e = O(e).multiplyBy(3)),
                n.options.maxBounds &&
                  (e = n._limitOffset(O(e), n.options.maxBounds)),
                n.options.worldCopyJump)
              ) {
                var o = n.wrapLatLng(
                  n.unproject(n.project(n.getCenter()).add(e))
                );
                n.panTo(o);
              } else n.panBy(e);
          } else if (i in this._zoomKeys)
            n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
          else {
            if (27 !== i || !n._popup || !n._popup.options.closeOnEscapeKey)
              return;
            n.closePopup();
          }
          Ye(t);
        }
      },
    });
    oi.addInitHook('addHandler', 'keyboard', no),
      oi.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60,
      });
    var oo = gi.extend({
      addHooks: function () {
        De(this._map._container, 'wheel', this._onWheelScroll, this),
          (this._delta = 0);
      },
      removeHooks: function () {
        He(this._map._container, 'wheel', this._onWheelScroll, this);
      },
      _onWheelScroll: function (t) {
        var e = ti(t),
          i = this._map.options.wheelDebounceTime;
        (this._delta += e),
          (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
          this._startTime || (this._startTime = +new Date());
        var n = Math.max(i - (+new Date() - this._startTime), 0);
        clearTimeout(this._timer),
          (this._timer = setTimeout(o(this._performZoom, this), n)),
          Ye(t);
      },
      _performZoom: function () {
        var t = this._map,
          e = t.getZoom(),
          i = this._map.options.zoomSnap || 0;
        t._stop();
        var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
          o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
          s = i ? Math.ceil(o / i) * i : o,
          a = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
        (this._delta = 0),
          (this._startTime = null),
          a &&
            ('center' === t.options.scrollWheelZoom
              ? t.setZoom(e + a)
              : t.setZoomAround(this._lastMousePos, e + a));
      },
    });
    oi.addInitHook('addHandler', 'scrollWheelZoom', oo);
    var so = 600;
    oi.mergeOptions({
      tapHold: jt.touchNative && jt.safari && jt.mobile,
      tapTolerance: 15,
    });
    var ao = gi.extend({
      addHooks: function () {
        De(this._map._container, 'touchstart', this._onDown, this);
      },
      removeHooks: function () {
        He(this._map._container, 'touchstart', this._onDown, this);
      },
      _onDown: function (t) {
        if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
          var e = t.touches[0];
          (this._startPos = this._newPos = new A(e.clientX, e.clientY)),
            (this._holdTimeout = setTimeout(
              o(function () {
                this._cancel(),
                  this._isTapValid() &&
                    (De(document, 'touchend', Je),
                    De(
                      document,
                      'touchend touchcancel',
                      this._cancelClickPrevent
                    ),
                    this._simulateEvent('contextmenu', e));
              }, this),
              so
            )),
            De(
              document,
              'touchend touchcancel contextmenu',
              this._cancel,
              this
            ),
            De(document, 'touchmove', this._onMove, this);
        }
      },
      _cancelClickPrevent: function t() {
        He(document, 'touchend', Je), He(document, 'touchend touchcancel', t);
      },
      _cancel: function () {
        clearTimeout(this._holdTimeout),
          He(document, 'touchend touchcancel contextmenu', this._cancel, this),
          He(document, 'touchmove', this._onMove, this);
      },
      _onMove: function (t) {
        var e = t.touches[0];
        this._newPos = new A(e.clientX, e.clientY);
      },
      _isTapValid: function () {
        return (
          this._newPos.distanceTo(this._startPos) <=
          this._map.options.tapTolerance
        );
      },
      _simulateEvent: function (t, e) {
        var i = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0,
          view: window,
          screenX: e.screenX,
          screenY: e.screenY,
          clientX: e.clientX,
          clientY: e.clientY,
        });
        (i._simulated = !0), e.target.dispatchEvent(i);
      },
    });
    oi.addInitHook('addHandler', 'tapHold', ao),
      oi.mergeOptions({ touchZoom: jt.touch, bounceAtZoomLimits: !0 });
    var ro = gi.extend({
      addHooks: function () {
        xe(this._map._container, 'leaflet-touch-zoom'),
          De(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      removeHooks: function () {
        we(this._map._container, 'leaflet-touch-zoom'),
          He(this._map._container, 'touchstart', this._onTouchStart, this);
      },
      _onTouchStart: function (t) {
        var e = this._map;
        if (
          t.touches &&
          2 === t.touches.length &&
          !e._animatingZoom &&
          !this._zooming
        ) {
          var i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]);
          (this._centerPoint = e.getSize()._divideBy(2)),
            (this._startLatLng = e.containerPointToLatLng(this._centerPoint)),
            'center' !== e.options.touchZoom &&
              (this._pinchStartLatLng = e.containerPointToLatLng(
                i.add(n)._divideBy(2)
              )),
            (this._startDist = i.distanceTo(n)),
            (this._startZoom = e.getZoom()),
            (this._moved = !1),
            (this._zooming = !0),
            e._stop(),
            De(document, 'touchmove', this._onTouchMove, this),
            De(document, 'touchend touchcancel', this._onTouchEnd, this),
            Je(t);
        }
      },
      _onTouchMove: function (t) {
        if (t.touches && 2 === t.touches.length && this._zooming) {
          var e = this._map,
            i = e.mouseEventToContainerPoint(t.touches[0]),
            n = e.mouseEventToContainerPoint(t.touches[1]),
            s = i.distanceTo(n) / this._startDist;
          if (
            ((this._zoom = e.getScaleZoom(s, this._startZoom)),
            !e.options.bounceAtZoomLimits &&
              ((this._zoom < e.getMinZoom() && s < 1) ||
                (this._zoom > e.getMaxZoom() && s > 1)) &&
              (this._zoom = e._limitZoom(this._zoom)),
            'center' === e.options.touchZoom)
          ) {
            if (((this._center = this._startLatLng), 1 === s)) return;
          } else {
            var a = i._add(n)._divideBy(2)._subtract(this._centerPoint);
            if (1 === s && 0 === a.x && 0 === a.y) return;
            this._center = e.unproject(
              e.project(this._pinchStartLatLng, this._zoom).subtract(a),
              this._zoom
            );
          }
          this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
            z(this._animRequest);
          var r = o(
            e._move,
            e,
            this._center,
            this._zoom,
            { pinch: !0, round: !1 },
            void 0
          );
          (this._animRequest = M(r, this, !0)), Je(t);
        }
      },
      _onTouchEnd: function () {
        this._moved && this._zooming
          ? ((this._zooming = !1),
            z(this._animRequest),
            He(document, 'touchmove', this._onTouchMove, this),
            He(document, 'touchend touchcancel', this._onTouchEnd, this),
            this._map.options.zoomAnimation
              ? this._map._animateZoom(
                  this._center,
                  this._map._limitZoom(this._zoom),
                  !0,
                  this._map.options.zoomSnap
                )
              : this._map._resetView(
                  this._center,
                  this._map._limitZoom(this._zoom)
                ))
          : (this._zooming = !1);
      },
    });
    oi.addInitHook('addHandler', 'touchZoom', ro),
      (oi.BoxZoom = to),
      (oi.DoubleClickZoom = eo),
      (oi.Drag = io),
      (oi.Keyboard = no),
      (oi.ScrollWheelZoom = oo),
      (oi.TapHold = ao),
      (oi.TouchZoom = ro),
      (t.Bounds = I),
      (t.Browser = jt),
      (t.CRS = F),
      (t.Canvas = Gn),
      (t.Circle = rn),
      (t.CircleMarker = sn),
      (t.Class = k),
      (t.Control = ai),
      (t.DivIcon = In),
      (t.DivOverlay = Sn),
      (t.DomEvent = ii),
      (t.DomUtil = je),
      (t.Draggable = xi),
      (t.Evented = E),
      (t.FeatureGroup = Ji),
      (t.GeoJSON = _n),
      (t.GridLayer = jn),
      (t.Handler = gi),
      (t.Icon = Xi),
      (t.ImageOverlay = Tn),
      (t.LatLng = N),
      (t.LatLngBounds = j),
      (t.Layer = Vi),
      (t.LayerGroup = qi),
      (t.LineUtil = Ii),
      (t.Map = oi),
      (t.Marker = en),
      (t.Mixin = yi),
      (t.Path = on),
      (t.Point = A),
      (t.PolyUtil = Di),
      (t.Polygon = dn),
      (t.Polyline = ln),
      (t.Popup = En),
      (t.PosAnimation = ni),
      (t.Projection = Wi),
      (t.Rectangle = $n),
      (t.Renderer = Un),
      (t.SVG = Yn),
      (t.SVGOverlay = kn),
      (t.TileLayer = Nn),
      (t.Tooltip = Bn),
      (t.Transformation = q),
      (t.Util = Z),
      (t.VideoOverlay = zn),
      (t.bind = o),
      (t.bounds = R),
      (t.canvas = Vn),
      (t.circle = hn),
      (t.circleMarker = an),
      (t.control = ri),
      (t.divIcon = Rn),
      (t.extend = i),
      (t.featureGroup = Yi),
      (t.geoJSON = Ln),
      (t.geoJson = Pn),
      (t.gridLayer = Dn),
      (t.icon = $i),
      (t.imageOverlay = Mn),
      (t.latLng = H),
      (t.latLngBounds = D),
      (t.layerGroup = Ki),
      (t.map = si),
      (t.marker = nn),
      (t.point = O),
      (t.polygon = cn),
      (t.polyline = un),
      (t.popup = An),
      (t.rectangle = Qn),
      (t.setOptions = _),
      (t.stamp = a),
      (t.svg = Xn),
      (t.svgOverlay = Cn),
      (t.tileLayer = Hn),
      (t.tooltip = On),
      (t.transformation = K),
      (t.version = e),
      (t.videoOverlay = Zn);
    var ho = window.L;
    (t.noConflict = function () {
      return (window.L = ho), this;
    }),
      (window.L = t);
  })(t);
  const e = t.map('map', { scrollWheelZoom: !1 });
  t
    .tileLayer(
      'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
      { minZoom: 13 }
    )
    .addTo(e),
    e.setView([33.983265, -118.306799], 18),
    [
      {
        case_number: '2017-04514',
        slug: 'eddie-rosendo-lino',
        first_name: 'Eddie',
        middle_name: 'Rosendo',
        last_name: 'Lino',
        death_date: '2017-06-18T00:00:00.000Z',
        death_year: 2017,
        age: 23,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304107484,
        latitude: 33.9904336958,
      },
      {
        case_number: '2017-03454',
        slug: 'alex-david-lomeli',
        first_name: 'Alex',
        middle_name: 'David',
        last_name: 'Lomeli',
        death_date: '2017-05-07T00:00:00.000Z',
        death_year: 2017,
        age: 18,
        race: 'Latino',
        gender: 'male',
        image: null,
        longitude: -118.300290584,
        latitude: 33.9793646958,
      },
      {
        case_number: '2017-03455',
        slug: 'carlos-alberto-martinez',
        first_name: 'Carlos',
        middle_name: 'Alberto',
        last_name: 'Martinez',
        death_date: '2017-05-07T00:00:00.000Z',
        death_year: 2017,
        age: 61,
        race: 'Latino',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/6c1c486b-acc7-4539-8eab-a53c1930aefe.jpeg',
        longitude: -118.300290584,
        latitude: 33.9793646958,
      },
      {
        case_number: '2017-02656',
        slug: 'lloyd-allen-craig',
        first_name: 'Lloyd',
        middle_name: 'Allen',
        last_name: 'Craig',
        death_date: '2017-04-05T00:00:00.000Z',
        death_year: 2017,
        age: 33,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304618084,
        latitude: 33.9914742958,
      },
      {
        case_number: '2017-01306',
        slug: 'jenell-gamble-kendrick',
        first_name: 'Jenell',
        middle_name: null,
        last_name: 'Gamble-Kendrick',
        death_date: '2017-02-14T00:00:00.000Z',
        death_year: 2017,
        age: 73,
        race: 'black',
        gender: 'female',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/7272e31f-42af-4536-8c56-9fc4c1bc1d93.jpeg',
        longitude: -118.307344784,
        latitude: 33.9860941958,
      },
      {
        case_number: '2017-00343',
        slug: 'brandon-tatum',
        first_name: 'Brandon',
        middle_name: null,
        last_name: 'Tatum',
        death_date: '2017-01-11T00:00:00.000Z',
        death_year: 2017,
        age: 23,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/31140bd0-60c1-44f1-8ebc-c122b36c0b95.jpeg',
        longitude: -118.30673575401306,
        latitude: 33.983398480211264,
      },
      {
        case_number: '2016-08972',
        slug: 'tyrone-davis-jr',
        first_name: 'Tyrone',
        middle_name: null,
        last_name: 'Davis',
        death_date: '2016-12-10T00:00:00.000Z',
        death_year: 2016,
        age: 16,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.307115484,
        latitude: 33.9897150958,
      },
      {
        case_number: '2016-08043',
        slug: 'edwardo-garcia-hernandez',
        first_name: 'Edwardo',
        middle_name: null,
        last_name: 'Garcia Hernandez',
        death_date: '2016-11-05T00:00:00.000Z',
        death_year: 2016,
        age: 20,
        race: 'Latino',
        gender: 'male',
        image: null,
        longitude: -118.308092884,
        latitude: 33.9848401958,
      },
      {
        case_number: '2016-05614',
        slug: 'dewayne-parham',
        first_name: 'DeWayne',
        middle_name: null,
        last_name: 'Parham',
        death_date: '2016-07-31T00:00:00.000Z',
        death_year: 2016,
        age: 42,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/09f092cf-52de-4ab3-a7d8-d70e63aaaea0.jpeg',
        longitude: -118.30672502517699,
        latitude: 33.98302,
      },
      {
        case_number: '2016-05536',
        slug: 'marcus-wilkerson',
        first_name: 'Marcus',
        middle_name: 'Jarrod',
        last_name: 'Wilkerson',
        death_date: '2016-07-29T00:00:00.000Z',
        death_year: 2016,
        age: 46,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308908925,
        latitude: 33.9823622562,
      },
      {
        case_number: '2016-04935',
        slug: 'abrey-tony-white',
        first_name: 'Abrey',
        middle_name: 'Tony',
        last_name: 'White',
        death_date: '2016-07-04T00:00:00.000Z',
        death_year: 2016,
        age: 33,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/d9d91d6d-f84b-43ce-b6fb-2eabb352f917.jpeg',
        longitude: -118.3068323135376,
        latitude: 33.98315383033896,
      },
      {
        case_number: '2016-04213',
        slug: 'gareth-lopez',
        first_name: 'Gareth',
        middle_name: null,
        last_name: 'Lopez',
        death_date: '2016-06-07T00:00:00.000Z',
        death_year: 2016,
        age: 34,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304367484,
        latitude: 33.9877070958,
      },
      {
        case_number: '2016-01692',
        slug: 'deontae-deshon-ruffin',
        first_name: 'Deontae',
        middle_name: 'Deshon',
        last_name: 'Ruffin',
        death_date: '2016-02-29T00:00:00.000Z',
        death_year: 2016,
        age: 24,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.302431084,
        latitude: 33.9905553958,
      },
      {
        case_number: '2016-01525',
        slug: 'kenneth-elliot-durden',
        first_name: 'Kenneth',
        middle_name: 'Elliot',
        last_name: 'Durden',
        death_date: '2016-02-23T00:00:00.000Z',
        death_year: 2016,
        age: 50,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/f47bbed2-5196-4c06-b316-2fd14877d5e6.jpeg',
        longitude: -118.30683767795561,
        latitude: 33.98289,
      },
      {
        case_number: '2015-05723',
        slug: 'marcus-edward-mcclendon',
        first_name: 'Marcus',
        middle_name: 'Edward',
        last_name: 'McClendon',
        death_date: '2015-08-18T00:00:00.000Z',
        death_year: 2015,
        age: 52,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/cfdb38d7-2bc1-4aaa-baad-74d07b35f31e.jpeg',
        longitude: -118.306613984,
        latitude: 33.9796058958,
      },
      {
        case_number: '2015-01373',
        slug: 'jermaine-malone',
        first_name: 'Jermaine',
        middle_name: null,
        last_name: 'Malone',
        death_date: '2015-02-22T00:00:00.000Z',
        death_year: 2015,
        age: 37,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.306628984,
        latitude: 33.9929929958,
      },
      {
        case_number: '2015-00566',
        slug: 'keion-jeffrey-coleman',
        first_name: 'Keion',
        middle_name: 'Jeffrey',
        last_name: 'Coleman',
        death_date: '2015-01-21T00:00:00.000Z',
        death_year: 2015,
        age: 18,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304589684,
        latitude: 33.9784857958,
      },
      {
        case_number: '2014-05979',
        slug: 'michael-allen-white',
        first_name: 'Michael',
        middle_name: 'Allen',
        last_name: 'White',
        death_date: '2014-08-31T00:00:00.000Z',
        death_year: 2014,
        age: 30,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308582984,
        latitude: 33.9930459958,
      },
      {
        case_number: '2014-02932',
        slug: 'kevin-quincy-williams',
        first_name: 'Kevin',
        middle_name: 'Quincy',
        last_name: 'Williams',
        death_date: '2014-04-25T00:00:00.000Z',
        death_year: 2014,
        age: 32,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/1bf4b350-dada-463f-ba90-ab2336eff3f5.jpeg',
        longitude: -118.308503984,
        latitude: 33.9799959958,
      },
      {
        case_number: '2012-08481',
        slug: 'jorge-herrera',
        first_name: 'Jorge',
        middle_name: 'Alberto',
        last_name: 'Herrera',
        death_date: '2012-12-22T00:00:00.000Z',
        death_year: 2012,
        age: 24,
        race: 'Latino',
        gender: 'male',
        image: null,
        longitude: -118.302245984,
        latitude: 33.9800529967,
      },
      {
        case_number: '2012-06331',
        slug: 'patrick-louis-davion-caruthers',
        first_name: 'Patrick',
        middle_name: 'Louis-Davion',
        last_name: 'Caruthers',
        death_date: '2012-09-25T00:00:00.000Z',
        death_year: 2012,
        age: 19,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.302426084,
        latitude: 33.9832383967,
      },
      {
        case_number: '2012-04147',
        slug: 'jose-zamarripa',
        first_name: 'Jose',
        middle_name: null,
        last_name: 'Zamarripa',
        death_date: '2012-06-22T00:00:00.000Z',
        death_year: 2012,
        age: 26,
        race: 'Latino',
        gender: 'male',
        image: null,
        longitude: -118.302401084,
        latitude: 33.9829774967,
      },
      {
        case_number: '2012-03692',
        slug: 'cleo-hughes',
        first_name: 'Cleo',
        middle_name: null,
        last_name: 'Hughes',
        death_date: '2012-06-03T00:00:00.000Z',
        death_year: 2012,
        age: 79,
        race: 'black',
        gender: 'female',
        image: null,
        longitude: -118.306161984,
        latitude: 33.9789349967,
      },
      {
        case_number: '2012-00849',
        slug: 'john-doe-20',
        first_name: 'John',
        middle_name: 'Joseph',
        last_name: 'Sullivan',
        death_date: '2012-02-04T00:00:00.000Z',
        death_year: 2012,
        age: 53,
        race: 'white',
        gender: 'male',
        image: null,
        longitude: -118.302567984,
        latitude: 33.9820729967,
      },
      {
        case_number: '2011-08488',
        slug: 'andre-lockhart',
        first_name: 'Andre',
        middle_name: null,
        last_name: 'Lockhart',
        death_date: '2011-12-27T00:00:00.000Z',
        death_year: 2011,
        age: 28,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.300193484,
        latitude: 33.9923303967,
      },
      {
        case_number: '2010-06394',
        slug: 'donnell-washington',
        first_name: 'Donnell',
        middle_name: 'L.',
        last_name: 'Washington',
        death_date: '2010-09-27T00:00:00.000Z',
        death_year: 2010,
        age: 30,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.300774984,
        latitude: 33.9844109967,
      },
      {
        case_number: '2010-02165',
        slug: 'che-grady',
        first_name: 'Che',
        middle_name: 'Yuseff',
        last_name: 'Grady',
        death_date: '2010-03-27T00:00:00.000Z',
        death_year: 2010,
        age: 39,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/che_grady.jpg',
        longitude: -118.308612984,
        latitude: 33.9860579967,
      },
      {
        case_number: '2010-00568',
        slug: 'dontae-cotton',
        first_name: 'Dontae',
        middle_name: 'Lamont',
        last_name: 'Cotton',
        death_date: '2010-01-24T00:00:00.000Z',
        death_year: 2010,
        age: 28,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/dontae_cotton_dmv.jpg',
        longitude: -118.306130984,
        latitude: 33.9853039967,
      },
      {
        case_number: '2009-07666',
        slug: 'mulindwa-traylor',
        first_name: 'Mulindwa',
        middle_name: 'K.',
        last_name: 'Traylor',
        death_date: '2009-11-10T00:00:00.000Z',
        death_year: 2009,
        age: 24,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.302689,
        latitude: 33.992595,
      },
      {
        case_number: '2009-06265',
        slug: 'kadeemi-forman',
        first_name: 'Kadeemi',
        middle_name: 'Rashad',
        last_name: 'Forman',
        death_date: '2009-09-10T00:00:00.000Z',
        death_year: 2009,
        age: 19,
        race: 'black',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/FormanKadeemi.jpg',
        longitude: -118.307256,
        latitude: 33.977193,
      },
      {
        case_number: '2009-06140',
        slug: 'keith-moore',
        first_name: 'Keith',
        middle_name: 'Dwayne',
        last_name: 'Moore',
        death_date: '2009-09-05T00:00:00.000Z',
        death_year: 2009,
        age: 20,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304154,
        latitude: 33.992335,
      },
      {
        case_number: '2009-05352',
        slug: 'jesse-mcwayne',
        first_name: 'Jesse',
        middle_name: 'Unique',
        last_name: 'McWayne',
        death_date: '2009-08-02T00:00:00.000Z',
        death_year: 2009,
        age: 19,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.307317,
        latitude: 33.987804,
      },
      {
        case_number: '2008-05101',
        slug: 'alcus-mallory',
        first_name: 'Alcus ',
        middle_name: null,
        last_name: 'Mallory',
        death_date: '2008-07-22T00:00:00.000Z',
        death_year: 2008,
        age: 15,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.30462,
        latitude: 33.980606,
      },
      {
        case_number: '2008-04434',
        slug: 'edward-adams-jr',
        first_name: 'Edward',
        middle_name: null,
        last_name: 'Adams',
        death_date: '2008-06-20T00:00:00.000Z',
        death_year: 2008,
        age: 53,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308312,
        latitude: 33.980765,
      },
      {
        case_number: '2008-04313',
        slug: 'matthew-denney',
        first_name: 'Matthew',
        middle_name: null,
        last_name: 'Denney',
        death_date: '2008-06-16T00:00:00.000Z',
        death_year: 2008,
        age: 20,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308492,
        latitude: 33.985905,
      },
      {
        case_number: '2008-03916',
        slug: 'james-hill',
        first_name: 'James',
        middle_name: null,
        last_name: 'Hill',
        death_date: '2008-05-29T00:00:00.000Z',
        death_year: 2008,
        age: 64,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304643384,
        latitude: 33.9745754958,
      },
      {
        case_number: '2008-03491',
        slug: 'luis-leon',
        first_name: 'Luis',
        middle_name: null,
        last_name: 'Leon',
        death_date: '2008-05-09T00:00:00.000Z',
        death_year: 2008,
        age: 19,
        race: 'Latino',
        gender: 'male',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/luis_alberto_leon_19.jpg',
        longitude: -118.30125,
        latitude: 33.989512,
      },
      {
        case_number: '2008-00358',
        slug: 'rosa-garcia',
        first_name: 'Rosa',
        middle_name: null,
        last_name: 'Garcia',
        death_date: '2008-01-13T00:00:00.000Z',
        death_year: 2008,
        age: 35,
        race: 'Latino',
        gender: 'female',
        image: null,
        longitude: -118.30247,
        latitude: 33.974576,
      },
      {
        case_number: '2007-08079',
        slug: 'shontae-blanche',
        first_name: 'Shontae',
        middle_name: null,
        last_name: 'Blanche',
        death_date: '2007-11-05T00:00:00.000Z',
        death_year: 2007,
        age: 22,
        race: 'black',
        gender: 'female',
        image:
          'http://s3-us-west-2.amazonaws.com/homicide.latimes.com/media/homicide/blanche_shontae_1.jpg',
        longitude: -118.308933,
        latitude: 33.989725,
      },
      {
        case_number: '2007-08130',
        slug: 'baby-blanche',
        first_name: 'Baby',
        middle_name: null,
        last_name: 'Blanche',
        death_date: '2007-11-05T00:00:00.000Z',
        death_year: 2007,
        age: 0,
        race: 'black',
        gender: 'female',
        image: null,
        longitude: -118.308933,
        latitude: 33.989725,
      },
      {
        case_number: '2006-03978',
        slug: 'christopher-keith-wilson',
        first_name: 'Christopher',
        middle_name: 'Keith',
        last_name: 'Wilson',
        death_date: '2006-05-24T00:00:00.000Z',
        death_year: 2006,
        age: 48,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.305614,
        latitude: 33.991214,
      },
      {
        case_number: '2006-01162',
        slug: 'freddy-solis-jr',
        first_name: 'Freddy',
        middle_name: null,
        last_name: 'Solis Jr.',
        death_date: '2006-02-11T00:00:00.000Z',
        death_year: 2006,
        age: 14,
        race: 'Latino',
        gender: 'male',
        image: null,
        longitude: -118.301369,
        latitude: 33.992589,
      },
      {
        case_number: '2005-08890',
        slug: 'eric-bruce-woods',
        first_name: 'Eric',
        middle_name: 'Bruce',
        last_name: 'Woods',
        death_date: '2005-11-24T00:00:00.000Z',
        death_year: 2005,
        age: 36,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.304784,
        latitude: 33.987298,
      },
      {
        case_number: '2005-06676',
        slug: 'melvin-green-jr',
        first_name: 'Melvin',
        middle_name: null,
        last_name: 'Greenberg',
        death_date: '2005-08-30T00:00:00.000Z',
        death_year: 2005,
        age: 58,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308590984,
        latitude: 33.9893208958,
      },
      {
        case_number: '2005-02017',
        slug: 'gregory-jay-price',
        first_name: 'Gregory',
        middle_name: 'Jay',
        last_name: 'Price',
        death_date: '2005-03-12T00:00:00.000Z',
        death_year: 2005,
        age: 51,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.306482,
        latitude: 33.979607,
      },
      {
        case_number: '2004-08656',
        slug: 'corey-antione-toliver',
        first_name: 'Corey',
        middle_name: 'Antione',
        last_name: 'Toliver',
        death_date: '2004-11-12T00:00:00.000Z',
        death_year: 2004,
        age: 26,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.3002686,
        latitude: 33.9798195,
      },
      {
        case_number: '2004-08514',
        slug: 'cheryl-ann-edwards',
        first_name: 'Cheryl',
        middle_name: 'Ann',
        last_name: 'Edwards',
        death_date: '2004-11-09T00:00:00.000Z',
        death_year: 2004,
        age: 41,
        race: 'black',
        gender: 'female',
        image: null,
        longitude: -118.30137,
        latitude: 33.992091,
      },
      {
        case_number: '2004-03810',
        slug: 'shaunte-bragg',
        first_name: 'Shaunte',
        middle_name: null,
        last_name: 'Bragg',
        death_date: '2004-05-17T00:00:00.000Z',
        death_year: 2004,
        age: 34,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.303877,
        latitude: 33.991717,
      },
      {
        case_number: '2004-01913',
        slug: 'michael-anthony-grant',
        first_name: 'Michael',
        middle_name: 'Anthony',
        last_name: 'Grant',
        death_date: '2004-03-05T00:00:00.000Z',
        death_year: 2004,
        age: 23,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.305447,
        latitude: 33.988509,
      },
      {
        case_number: '2004-01340',
        slug: 'gregory-john-gabriel',
        first_name: 'Gregory',
        middle_name: 'John',
        last_name: 'Gabriel',
        death_date: '2004-02-15T00:00:00.000Z',
        death_year: 2004,
        age: 12,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308609,
        latitude: 33.990215,
      },
      {
        case_number: '2004-00409',
        slug: 'carl-peters',
        first_name: 'Carl',
        middle_name: null,
        last_name: 'Peters',
        death_date: '2004-01-06T00:00:00.000Z',
        death_year: 2004,
        age: 42,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.3002094,
        latitude: 33.9883405,
      },
      {
        case_number: '2003-05654',
        slug: 'lafayette-monte-davis',
        first_name: 'Lafayette',
        middle_name: 'Monte',
        last_name: 'Davis',
        death_date: '2003-07-26T00:00:00.000Z',
        death_year: 2003,
        age: 32,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.301406,
        latitude: 33.9929739,
      },
      {
        case_number: '2003-03490',
        slug: 'norman-antonio-moore-jr',
        first_name: 'Norman',
        middle_name: 'Antonio',
        last_name: 'Moore',
        death_date: '2003-05-08T00:00:00.000Z',
        death_year: 2003,
        age: 27,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308591,
        latitude: 33.9893209,
      },
      {
        case_number: '2003-03221',
        slug: 'wesley-brice-keene',
        first_name: 'Wesley',
        middle_name: 'Brice',
        last_name: 'Keene',
        death_date: '2003-04-28T00:00:00.000Z',
        death_year: 2003,
        age: 18,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.3008041,
        latitude: 33.9777903,
      },
      {
        case_number: '2003-02573',
        slug: 'maurice-rico-marks',
        first_name: 'Maurice',
        middle_name: 'Rico',
        last_name: 'Marks',
        death_date: '2003-04-01T00:00:00.000Z',
        death_year: 2003,
        age: 21,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.305655,
        latitude: 33.989962,
      },
      {
        case_number: '2002-07313',
        slug: 'hilgard-r-andrews',
        first_name: 'Hilgard',
        middle_name: 'R.',
        last_name: 'Andrews',
        death_date: '2002-09-29T00:00:00.000Z',
        death_year: 2002,
        age: 45,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.30867,
        latitude: 33.99011,
      },
      {
        case_number: '2002-07040',
        slug: 'chima-patrick-anyanwu',
        first_name: 'Chima',
        middle_name: 'Patrick',
        last_name: 'Anyanwu',
        death_date: '2002-09-18T00:00:00.000Z',
        death_year: 2002,
        age: 21,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.305298,
        latitude: 33.977559,
      },
      {
        case_number: '2002-04720',
        slug: 'uchechukwu-odi-ofoegbu',
        first_name: 'Uchechukwu',
        middle_name: 'Odi',
        last_name: 'Ofoegbu',
        death_date: '2002-06-23T00:00:00.000Z',
        death_year: 2002,
        age: 21,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.300672,
        latitude: 33.977565,
      },
      {
        case_number: '2002-04719',
        slug: 'lyndon-craig-cox-ii',
        first_name: 'Lyndon',
        middle_name: 'Craig',
        last_name: 'Cox',
        death_date: '2002-06-23T00:00:00.000Z',
        death_year: 2002,
        age: 25,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.300672,
        latitude: 33.977565,
      },
      {
        case_number: '2001-07195',
        slug: 'von-anthony-harris',
        first_name: 'Von',
        middle_name: 'Anthony',
        last_name: 'Harris',
        death_date: '2001-10-03T00:00:00.000Z',
        death_year: 2001,
        age: 42,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.306537,
        latitude: 33.991722,
      },
      {
        case_number: '2001-06708',
        slug: 'jason-esquite-flores',
        first_name: 'Jason',
        middle_name: 'Esquite',
        last_name: 'Flores',
        death_date: '2001-09-15T00:00:00.000Z',
        death_year: 2001,
        age: 20,
        race: 'Latino',
        gender: 'male',
        image: null,
        longitude: -118.304738,
        latitude: 33.986121,
      },
      {
        case_number: '2000-08216',
        slug: 'paul-david-mitchell',
        first_name: 'Paul',
        middle_name: 'David',
        last_name: 'Mitchell',
        death_date: '2000-11-22T00:00:00.000Z',
        death_year: 2e3,
        age: 44,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308623,
        latitude: 33.974956,
      },
      {
        case_number: '2000-08217',
        slug: 'mardress-brooks',
        first_name: 'Mardress',
        middle_name: null,
        last_name: 'Brooks',
        death_date: '2000-11-22T00:00:00.000Z',
        death_year: 2e3,
        age: 35,
        race: 'black',
        gender: 'female',
        image: null,
        longitude: -118.301170984,
        latitude: 33.9844109958,
      },
      {
        case_number: '2000-05112',
        slug: 'grover-tinner-jr',
        first_name: 'Grover',
        middle_name: null,
        last_name: 'Tinner',
        death_date: '2000-07-18T00:00:00.000Z',
        death_year: 2e3,
        age: 48,
        race: 'black',
        gender: 'male',
        image: null,
        longitude: -118.308289084,
        latitude: 33.9824444958,
      },
    ].forEach((i) => {
      t.circleMarker([i.latitude, i.longitude])
        .addTo(e)
        .bindTooltip(i.first_name + ' ' + i.last_name, { permanent: !0 });
    });
})();
//# sourceMappingURL=app.ac628f95.js.map
