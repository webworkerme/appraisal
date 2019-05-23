webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "object" == ( false ? "undefined" : _typeof(module)) ? module.exports = t(__webpack_require__(0)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["iview/locale"] = t(require("vue")) : e["iview/locale"] = t(e.Vue);
}("undefined" != typeof self ? self : this, function (e) {
  return function (e) {
    var t = {};function o(r) {
      if (t[r]) return t[r].exports;var a = t[r] = { i: r, l: !1, exports: {} };return e[r].call(a.exports, a, a.exports, o), a.l = !0, a.exports;
    }return o.m = e, o.c = t, o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
    }, o.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return o.d(t, "a", t), t;
    }, o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, o.p = "/dist/locale/", o(o.s = 5);
  }([function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function (e) {
      n || void 0 !== window.iview && ("langs" in iview || (iview.langs = {}), iview.langs[e.i.locale] = e);
    };var r,
        a = o(1);var n = ((r = a) && r.__esModule ? r : { default: r }).default.prototype.$isServer;
  }, function (t, o) {
    t.exports = e;
  },,,, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });var r,
        a = o(0);var n = { i: { locale: "en-US", select: { placeholder: "Select", noMatch: "No matching data", loading: "Loading" }, table: { noDataText: "No Data", noFilteredDataText: "No filter data", confirmFilter: "Confirm", resetFilter: "Reset", clearFilter: "All" }, datepicker: { selectDate: "Select date", selectTime: "Select time", startTime: "Start Time", endTime: "End Time", clear: "Clear", ok: "OK", datePanelLabel: "[mmmm] [yyyy]", month: "Month", month1: "January", month2: "February", month3: "March", month4: "April", month5: "May", month6: "June", month7: "July", month8: "August", month9: "September", month10: "October", month11: "November", month12: "December", year: "Year", weekStartDay: "0", weeks: { sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat" }, months: { m1: "Jan", m2: "Feb", m3: "Mar", m4: "Apr", m5: "May", m6: "Jun", m7: "Jul", m8: "Aug", m9: "Sep", m10: "Oct", m11: "Nov", m12: "Dec" } }, transfer: { titles: { source: "Source", target: "Target" }, filterPlaceholder: "Search here", notFoundText: "Not Found" }, modal: { okText: "OK", cancelText: "Cancel" }, poptip: { okText: "OK", cancelText: "Cancel" }, page: { prev: "Previous Page", next: "Next Page", total: "Total", item: "item", items: "items", prev5: "Previous 5 Pages", next5: "Next 5 Pages", page: "/page", goto: "Goto", p: "" }, rate: { star: "Star", stars: "Stars" }, tree: { emptyText: "No Data" } } };(0, ((r = a) && r.__esModule ? r : { default: r }).default)(n), t.default = n;
  }]);
});
//# sourceMappingURL=en-US.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var util = {};
util.title = function (title) {
  title = title ? title + ' - Home' : 'Appraisal';
  window.document.title = title;
};

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var routers = [{
  path: '/',
  meta: {
    title: ''
  },
  component: function component(resolve) {
    return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(22)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  }
}, {
  path: '/authenticate',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(20)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  }
}, {
  path: '/dashboard',
  component: function component(resolve) {
    return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(21)]; (resolve.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);
  }
}];
/* harmony default export */ __webpack_exports__["a"] = (routers);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(19),
  /* scopeId */
  "data-v-c28356a4",
  /* cssModules */
  null
)
Component.options.__file = "/Users/benedictasamoah/Documents/sturta/appraisal/src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c28356a4", Component.options)
  } else {
    hotAPI.reload("data-v-c28356a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {},
    beforeDestroy: function beforeDestroy() {},

    methods: {}
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_en_US__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_en_US___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_en_US__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_router__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__libs_util__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_iview_dist_styles_iview_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_iview_dist_styles_iview_css__);








__webpack_require__(10);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_iview___default.a, { locale: __WEBPACK_IMPORTED_MODULE_2_iview_dist_locale_en_US___default.a });

var RouterConfig = {
  mode: 'history',
  routes: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */]
};
var router = new __WEBPACK_IMPORTED_MODULE_3_vue_router__["a" /* default */](RouterConfig);

router.beforeEach(function (to, from, next) {
  __WEBPACK_IMPORTED_MODULE_1_iview___default.a.LoadingBar.start();
  __WEBPACK_IMPORTED_MODULE_5__libs_util__["a" /* default */].title(to.meta.title);
  next();
});

router.afterEach(function (to, from, next) {
  __WEBPACK_IMPORTED_MODULE_1_iview___default.a.LoadingBar.finish();
  window.scrollTo(0, 0);
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: router,
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_6__app_vue___default.a);
  }
});

/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('router-view')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c28356a4", module.exports)
  }
}

/***/ })
],[14]);
//# sourceMappingURL=main.js.map