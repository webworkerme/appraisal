webpackJsonp([2],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(64)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(63),
  /* template */
  __webpack_require__(69),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/benedictasamoah/Documents/sturta/appraisal/src/views/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-25ae2b7e", Component.options)
  } else {
    hotAPI.reload("data-v-25ae2b7e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

var STORAGE = null;
var VueSession = {
    key: 'vue-session-key',
    flash_key: 'vue-session-flash-key',
    setAll: function(all){
        STORAGE.setItem(VueSession.key,JSON.stringify(all));
    }
}

VueSession.install = function(Vue, options) {
    if(options && 'persist' in options && options.persist) STORAGE = window.localStorage;
    else STORAGE = window.sessionStorage;
    Vue.prototype.$session = {
        flash: {
            parent: function(){
                return Vue.prototype.$session;
            },
            get: function(key){
                var all = this.parent().getAll();
                var all_flash = all[VueSession.flash_key] || {};

                var flash_value = all_flash[key];

                this.remove(key);

                return flash_value;
            },
            set: function(key, value){
                var all = this.parent().getAll();
                var all_flash = all[VueSession.flash_key] || {};

                all_flash[key] = value;
                all[VueSession.flash_key] = all_flash;

                VueSession.setAll(all);
            },
            remove: function(key){
                var all = this.parent().getAll();
                var all_flash = all[VueSession.flash_key] || {};

                delete all_flash[key];

                all[VueSession.flash_key] = all_flash;
                VueSession.setAll(all);
            }
        },
        getAll: function(){
            var all = JSON.parse(STORAGE.getItem(VueSession.key));
            return all || {};
        },
        set: function(key,value){
            if(key == 'session-id') return false;
            var all = this.getAll();

            if(!('session-id' in all)){
                this.start();
                all = this.getAll();
            }

            all[key] = value;

            VueSession.setAll(all);
        },
        get: function(key){
            var all = this.getAll();
            return all[key];
        },
        start: function(){
            var all = this.getAll();
            all['session-id'] = 'sess:'+Date.now();

            VueSession.setAll(all);
        },
        renew: function(sessionId){
            var all = this.getAll();
            all['session-id'] = 'sess:' + sessionId;
            VueSession.setAll(all);
        },
        exists: function(){
            var all = this.getAll();
            return 'session-id' in all;
        },
        has: function(key){
            var all = this.getAll();
            return key in all;
        },
        remove: function(key){
            var all = this.getAll();
            delete all[key];

            VueSession.setAll(all);
        },
        clear: function(){
            var all = this.getAll();

            VueSession.setAll({'session-id': all['session-id']});
        },
        destroy: function(){
            VueSession.setAll({});
        },
        id: function(){
            return this.get('session-id');
        }
    }
};

module.exports = VueSession;


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_session__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_session__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_session___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.addScripts("/src/assets/js/app.min.js");
  },

  beforeCreate: function beforeCreate() {
    if (this.$session.has("usrid")) {
      var user = this.$session.get("usrid");
      this.$router.push("/dashboard");
    }
  },
  methods: {
    addScripts: function addScripts(e) {
      var create = document.createElement("script");
      create.setAttribute("src", e);
      document.head.appendChild(create);
    }
  }
});

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "navbar navbar--extended",
    style: ({
      'position': 'absolute'
    })
  }, [_c('nav', {
    staticClass: "nav__mobile"
  }), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "navbar__inner"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "navbar__menu-mob"
  }, [_c('a', {
    attrs: {
      "href": "",
      "id": "toggle"
    }
  }, [_c('svg', {
    attrs: {
      "role": "img",
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 448 512"
    }
  }, [_c('path', {
    attrs: {
      "fill": "currentColor",
      "d": "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
    }
  })])])])])])]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "hero__sub"
  }, [_c('span', {
    staticClass: "scroll",
    attrs: {
      "id": "scrollToNext"
    }
  }, [_c('svg', {
    staticClass: "hero__sub__down",
    staticStyle: {
      "enable-background": "new 0 0 512 512"
    },
    attrs: {
      "version": "1.1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "x": "0px",
      "y": "0px",
      "fill": "currentColor",
      "width": "512px",
      "height": "512px",
      "viewBox": "0 0 512 512",
      "xml:space": "preserve"
    }
  }, [_c('path', {
    attrs: {
      "d": "M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3z"
    }
  })])])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "navbar__logo",
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "app-nav-logo",
    attrs: {
      "src": "/src/images/logo.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar__menu",
    staticStyle: {
      "padding-right": "40px"
    }
  }, [_c('ul', [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Header Option 1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/authenticate"
    }
  }, [_vm._v("Log In / Sign Up")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hero"
  }, [_c('div', {
    staticClass: "hero__overlay hero__overlay--gradient"
  }), _vm._v(" "), _c('div', {
    staticClass: "hero__mask"
  }), _vm._v(" "), _c('div', {
    staticClass: "hero__inner"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "hero__content"
  }, [_c('div', {
    staticClass: "hero__content__inner",
    attrs: {
      "id": "navConverter"
    }
  }, [_c('h1', {
    staticClass: "hero__title"
  }, [_vm._v("All Orders, From All Clients, In One Website For Free")]), _vm._v(" "), _c('p', {
    staticClass: "hero__text text-center"
  }, [_vm._v("\n              Your description here Similar to that of the appraiser portal, however there are differences\n              Lender or client will be able to request one or multiple appraisers for any one assignment..\n            ")]), _vm._v(" "), _c('a', {
    staticClass: "button button__accent",
    attrs: {
      "href": "/authenticate"
    }
  }, [_vm._v("Get Started for Free")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "steps landing__section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h2', [_vm._v("How it works")]), _vm._v(" "), _c('p', [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry.")])]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "steps__inner"
  }, [_c('div', {
    staticClass: "step"
  }, [_c('div', {
    staticClass: "step__media"
  }, [_c('img', {
    staticClass: "step__image",
    attrs: {
      "src": "/src/assets/images/undraw_designer.svg"
    }
  })]), _vm._v(" "), _c('h4', [_vm._v("Option 1")]), _vm._v(" "), _c('p', {
    staticClass: "step__text"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('div', {
    staticClass: "step__media"
  }, [_c('img', {
    staticClass: "step__image",
    attrs: {
      "src": "/src/assets/images/undraw_responsive.svg"
    }
  })]), _vm._v(" "), _c('h4', [_vm._v("Option 2")]), _vm._v(" "), _c('p', {
    staticClass: "step__text"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")])]), _vm._v(" "), _c('div', {
    staticClass: "step"
  }, [_c('div', {
    staticClass: "step__media"
  }, [_c('img', {
    staticClass: "step__image",
    attrs: {
      "src": "/src/assets/images/undraw_creation.svg"
    }
  })]), _vm._v(" "), _c('h4', [_vm._v("Option 3")]), _vm._v(" "), _c('p', {
    staticClass: "step__text"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expanded landing__section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "expanded__inner"
  }, [_c('div', {
    staticClass: "expanded__media"
  }, [_c('img', {
    staticClass: "expanded__image",
    attrs: {
      "src": "/src/assets/images/undraw_browser.svg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "expanded__content"
  }, [_c('h2', {
    staticClass: "expanded__title"
  }, [_vm._v("Lorem Ipsum is simply dummy text.")]), _vm._v(" "), _c('p', {
    staticClass: "expanded__text"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply d0s.")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expanded landing__section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "expanded__inner"
  }, [_c('div', {
    staticClass: "expanded__media"
  }, [_c('img', {
    staticClass: "expanded__image",
    attrs: {
      "src": "/src/assets/images/undraw_frameworks.svg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "expanded__content"
  }, [_c('h2', {
    staticClass: "expanded__title"
  }, [_vm._v("Lorem Ipsum is simply dummy text.")]), _vm._v(" "), _c('p', {
    staticClass: "expanded__text"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dnce.")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expanded landing__section"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "expanded__inner"
  }, [_c('div', {
    staticClass: "expanded__media"
  }, [_c('img', {
    staticClass: "expanded__image",
    attrs: {
      "src": "/src/assets/images/together.svg"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "expanded__content"
  }, [_c('h2', {
    staticClass: "expanded__title"
  }, [_vm._v("Lorem Ipsum is simply dummy text.")]), _vm._v(" "), _c('p', {
    staticClass: "expanded__text"
  }, [_vm._v("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dnce.")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cta cta--reverse"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "cta__inner"
  }, [_c('h2', {
    staticClass: "cta__title"
  }, [_vm._v("Get started now")]), _vm._v(" "), _c('p', {
    staticClass: "cta__sub cta__sub--center"
  }, [_vm._v("A since the 1500s.Lorem Ipsum is simply.")]), _vm._v(" "), _c('a', {
    staticClass: "button button__accent",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Get Started For Free")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer footer--dark"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "footer__inner"
  }, [_c('a', {
    staticClass: "footer__textLogo",
    attrs: {
      "href": "index.html"
    }
  }, [_vm._v("Appraisal")]), _vm._v(" "), _c('div', {
    staticClass: "footer__data"
  }, [_c('div', {
    staticClass: "footer__data__item"
  }, [_c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_vm._v("Option 1")])]), _vm._v(" "), _c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_vm._v("Option 1")])])]), _vm._v(" "), _c('div', {
    staticClass: "footer__data__item"
  }, [_c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_vm._v("Option 1")])]), _vm._v(" "), _c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_vm._v("Option 1")])])]), _vm._v(" "), _c('div', {
    staticClass: "footer__data__item"
  }, [_c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_vm._v("Twitter")])]), _vm._v(" "), _c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#",
      "target": "_blank"
    }
  }, [_vm._v("Facebook")])]), _vm._v(" "), _c('div', {
    staticClass: "footer__row"
  }, [_c('a', {
    staticClass: "footer__link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("© 2018 Appraisal")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-25ae2b7e", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=2.chunk.js.map