webpackJsonp([0],Array(20).concat([
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(67)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(61),
  /* template */
  __webpack_require__(70),
  /* scopeId */
  "data-v-33cd53a2",
  /* cssModules */
  null
)
Component.options.__file = "/Users/benedictasamoah/Documents/sturta/appraisal/src/views/auth/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-33cd53a2", Component.options)
  } else {
    hotAPI.reload("data-v-33cd53a2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(30);
var isBuffer = __webpack_require__(55);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(23);
var normalizeHeaderName = __webpack_require__(49);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(26);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(26);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(23);
var settle = __webpack_require__(41);
var buildURL = __webpack_require__(44);
var parseHeaders = __webpack_require__(50);
var isURLSameOrigin = __webpack_require__(48);
var createError = __webpack_require__(29);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(43);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(46);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(40);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ff982d270031d4a9afb4ba2170d6aa4d.png";

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getApiUrl() {
  var hn = window.location.hostname;
  var vs = 'v1/';
  if (hn === 'localhost') {
    return 'http://localhost:8989/api/' + vs;
  } else {
    return 'http://api.appraisal.webworkerme.com/api/' + vs;
  }
}
var API_URL = getApiUrl();
/* harmony default export */ __webpack_exports__["a"] = ({
  createAuth: API_URL + 'auth/create',
  signAuth: API_URL + 'auth/signin',
  getProfile: API_URL + 'profile/get/'
});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Url */
/* unused harmony export Http */
/* unused harmony export Resource */
/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

function Promise$1(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

Promise$1.reject = function (r) {
    return new Promise$1(function (resolve, reject) {
        reject(r);
    });
};

Promise$1.resolve = function (x) {
    return new Promise$1(function (resolve, reject) {
        resolve(x);
    });
};

Promise$1.all = function all(iterable) {
    return new Promise$1(function (resolve, reject) {
        var count = 0, result = [];

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

Promise$1.race = function race(iterable) {
    return new Promise$1(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            Promise$1.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = Promise$1.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x['then'];

            if (x !== null && typeof x === 'object' && typeof then === 'function') {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;

                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var promise = this;

    nextTick(function () {
        if (promise.state !== PENDING) {
            while (promise.deferred.length) {
                var deferred = promise.deferred.shift(),
                    onResolved = deferred[0],
                    onRejected = deferred[1],
                    resolve = deferred[2],
                    reject = deferred[3];

                try {
                    if (promise.state === RESOLVED) {
                        if (typeof onResolved === 'function') {
                            resolve(onResolved.call(undefined, promise.value));
                        } else {
                            resolve(promise.value);
                        }
                    } else if (promise.state === REJECTED) {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected.call(undefined, promise.value));
                        } else {
                            reject(promise.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var promise = this;

    return new Promise$1(function (resolve, reject) {
        promise.deferred.push([onResolved, onRejected, resolve, reject]);
        promise.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};

/**
 * Promise adapter.
 */

if (typeof Promise === 'undefined') {
    window.Promise = Promise$1;
}

function PromiseObj(executor, context) {

    if (executor instanceof Promise) {
        this.promise = executor;
    } else {
        this.promise = new Promise(executor.bind(context));
    }

    this.context = context;
}

PromiseObj.all = function (iterable, context) {
    return new PromiseObj(Promise.all(iterable), context);
};

PromiseObj.resolve = function (value, context) {
    return new PromiseObj(Promise.resolve(value), context);
};

PromiseObj.reject = function (reason, context) {
    return new PromiseObj(Promise.reject(reason), context);
};

PromiseObj.race = function (iterable, context) {
    return new PromiseObj(Promise.race(iterable), context);
};

var p$1 = PromiseObj.prototype;

p$1.bind = function (context) {
    this.context = context;
    return this;
};

p$1.then = function (fulfilled, rejected) {

    if (fulfilled && fulfilled.bind && this.context) {
        fulfilled = fulfilled.bind(this.context);
    }

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.then(fulfilled, rejected), this.context);
};

p$1.catch = function (rejected) {

    if (rejected && rejected.bind && this.context) {
        rejected = rejected.bind(this.context);
    }

    return new PromiseObj(this.promise.catch(rejected), this.context);
};

p$1.finally = function (callback) {

    return this.then(function (value) {
        callback.call(this);
        return value;
    }, function (reason) {
        callback.call(this);
        return Promise.reject(reason);
    }
    );
};

/**
 * Utility functions.
 */

var ref = {};
var hasOwnProperty = ref.hasOwnProperty;
var ref$1 = [];
var slice = ref$1.slice;
var debug = false, ntick;

var inBrowser = typeof window !== 'undefined';

function Util (ref) {
    var config = ref.config;
    var nextTick = ref.nextTick;

    ntick = nextTick;
    debug = config.debug || !config.silent;
}

function warn(msg) {
    if (typeof console !== 'undefined' && debug) {
        console.warn('[VueResource warn]: ' + msg);
    }
}

function error(msg) {
    if (typeof console !== 'undefined') {
        console.error(msg);
    }
}

function nextTick(cb, ctx) {
    return ntick(cb, ctx);
}

function trim(str) {
    return str ? str.replace(/^\s*|\s*$/g, '') : '';
}

function trimEnd(str, chars) {

    if (str && chars === undefined) {
        return str.replace(/\s+$/, '');
    }

    if (!str || !chars) {
        return str;
    }

    return str.replace(new RegExp(("[" + chars + "]+$")), '');
}

function toLower(str) {
    return str ? str.toLowerCase() : '';
}

function toUpper(str) {
    return str ? str.toUpperCase() : '';
}

var isArray = Array.isArray;

function isString(val) {
    return typeof val === 'string';
}

function isFunction(val) {
    return typeof val === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
}

function isBlob(obj) {
    return typeof Blob !== 'undefined' && obj instanceof Blob;
}

function isFormData(obj) {
    return typeof FormData !== 'undefined' && obj instanceof FormData;
}

function when(value, fulfilled, rejected) {

    var promise = PromiseObj.resolve(value);

    if (arguments.length < 2) {
        return promise;
    }

    return promise.then(fulfilled, rejected);
}

function options(fn, obj, opts) {

    opts = opts || {};

    if (isFunction(opts)) {
        opts = opts.call(obj);
    }

    return merge(fn.bind({$vm: obj, $options: opts}), fn, {$options: opts});
}

function each(obj, iterator) {

    var i, key;

    if (isArray(obj)) {
        for (i = 0; i < obj.length; i++) {
            iterator.call(obj[i], obj[i], i);
        }
    } else if (isObject(obj)) {
        for (key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                iterator.call(obj[key], obj[key], key);
            }
        }
    }

    return obj;
}

var assign = Object.assign || _assign;

function merge(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source, true);
    });

    return target;
}

function defaults(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {

        for (var key in source) {
            if (target[key] === undefined) {
                target[key] = source[key];
            }
        }

    });

    return target;
}

function _assign(target) {

    var args = slice.call(arguments, 1);

    args.forEach(function (source) {
        _merge(target, source);
    });

    return target;
}

function _merge(target, source, deep) {
    for (var key in source) {
        if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
            if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
                target[key] = {};
            }
            if (isArray(source[key]) && !isArray(target[key])) {
                target[key] = [];
            }
            _merge(target[key], source[key], deep);
        } else if (source[key] !== undefined) {
            target[key] = source[key];
        }
    }
}

/**
 * Root Prefix Transform.
 */

function root (options$$1, next) {

    var url = next(options$$1);

    if (isString(options$$1.root) && !/^(https?:)?\//.test(url)) {
        url = trimEnd(options$$1.root, '/') + '/' + url;
    }

    return url;
}

/**
 * Query Parameter Transform.
 */

function query (options$$1, next) {

    var urlParams = Object.keys(Url.options.params), query = {}, url = next(options$$1);

    each(options$$1.params, function (value, key) {
        if (urlParams.indexOf(key) === -1) {
            query[key] = value;
        }
    });

    query = Url.params(query);

    if (query) {
        url += (url.indexOf('?') == -1 ? '?' : '&') + query;
    }

    return url;
}

/**
 * URL Template v2.0.6 (https://github.com/bramstein/url-template)
 */

function expand(url, params, variables) {

    var tmpl = parse(url), expanded = tmpl.expand(params);

    if (variables) {
        variables.push.apply(variables, tmpl.vars);
    }

    return expanded;
}

function parse(template) {

    var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

    return {
        vars: variables,
        expand: function expand(context) {
            return template.replace(/\{([^{}]+)\}|([^{}]+)/g, function (_, expression, literal) {
                if (expression) {

                    var operator = null, values = [];

                    if (operators.indexOf(expression.charAt(0)) !== -1) {
                        operator = expression.charAt(0);
                        expression = expression.substr(1);
                    }

                    expression.split(/,/g).forEach(function (variable) {
                        var tmp = /([^:*]*)(?::(\d+)|(\*))?/.exec(variable);
                        values.push.apply(values, getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                        variables.push(tmp[1]);
                    });

                    if (operator && operator !== '+') {

                        var separator = ',';

                        if (operator === '?') {
                            separator = '&';
                        } else if (operator !== '#') {
                            separator = operator;
                        }

                        return (values.length !== 0 ? operator : '') + values.join(separator);
                    } else {
                        return values.join(',');
                    }

                } else {
                    return encodeReserved(literal);
                }
            });
        }
    };
}

function getValues(context, operator, key, modifier) {

    var value = context[key], result = [];

    if (isDefined(value) && value !== '') {
        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            value = value.toString();

            if (modifier && modifier !== '*') {
                value = value.substring(0, parseInt(modifier, 10));
            }

            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
        } else {
            if (modifier === '*') {
                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : null));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            result.push(encodeValue(operator, value[k], k));
                        }
                    });
                }
            } else {
                var tmp = [];

                if (Array.isArray(value)) {
                    value.filter(isDefined).forEach(function (value) {
                        tmp.push(encodeValue(operator, value));
                    });
                } else {
                    Object.keys(value).forEach(function (k) {
                        if (isDefined(value[k])) {
                            tmp.push(encodeURIComponent(k));
                            tmp.push(encodeValue(operator, value[k].toString()));
                        }
                    });
                }

                if (isKeyOperator(operator)) {
                    result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                } else if (tmp.length !== 0) {
                    result.push(tmp.join(','));
                }
            }
        }
    } else {
        if (operator === ';') {
            result.push(encodeURIComponent(key));
        } else if (value === '' && (operator === '&' || operator === '?')) {
            result.push(encodeURIComponent(key) + '=');
        } else if (value === '') {
            result.push('');
        }
    }

    return result;
}

function isDefined(value) {
    return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
    return operator === ';' || operator === '&' || operator === '?';
}

function encodeValue(operator, value, key) {

    value = (operator === '+' || operator === '#') ? encodeReserved(value) : encodeURIComponent(value);

    if (key) {
        return encodeURIComponent(key) + '=' + value;
    } else {
        return value;
    }
}

function encodeReserved(str) {
    return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
        if (!/%[0-9A-Fa-f]/.test(part)) {
            part = encodeURI(part);
        }
        return part;
    }).join('');
}

/**
 * URL Template (RFC 6570) Transform.
 */

function template (options) {

    var variables = [], url = expand(options.url, options.params, variables);

    variables.forEach(function (key) {
        delete options.params[key];
    });

    return url;
}

/**
 * Service for URL templating.
 */

function Url(url, params) {

    var self = this || {}, options$$1 = url, transform;

    if (isString(url)) {
        options$$1 = {url: url, params: params};
    }

    options$$1 = merge({}, Url.options, self.$options, options$$1);

    Url.transforms.forEach(function (handler) {

        if (isString(handler)) {
            handler = Url.transform[handler];
        }

        if (isFunction(handler)) {
            transform = factory(handler, transform, self.$vm);
        }

    });

    return transform(options$$1);
}

/**
 * Url options.
 */

Url.options = {
    url: '',
    root: null,
    params: {}
};

/**
 * Url transforms.
 */

Url.transform = {template: template, query: query, root: root};
Url.transforms = ['template', 'query', 'root'];

/**
 * Encodes a Url parameter string.
 *
 * @param {Object} obj
 */

Url.params = function (obj) {

    var params = [], escape = encodeURIComponent;

    params.add = function (key, value) {

        if (isFunction(value)) {
            value = value();
        }

        if (value === null) {
            value = '';
        }

        this.push(escape(key) + '=' + escape(value));
    };

    serialize(params, obj);

    return params.join('&').replace(/%20/g, '+');
};

/**
 * Parse a URL and return its components.
 *
 * @param {String} url
 */

Url.parse = function (url) {

    var el = document.createElement('a');

    if (document.documentMode) {
        el.href = url;
        url = el.href;
    }

    el.href = url;

    return {
        href: el.href,
        protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
        port: el.port,
        host: el.host,
        hostname: el.hostname,
        pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
        search: el.search ? el.search.replace(/^\?/, '') : '',
        hash: el.hash ? el.hash.replace(/^#/, '') : ''
    };
};

function factory(handler, next, vm) {
    return function (options$$1) {
        return handler.call(vm, options$$1, next);
    };
}

function serialize(params, obj, scope) {

    var array = isArray(obj), plain = isPlainObject(obj), hash;

    each(obj, function (value, key) {

        hash = isObject(value) || isArray(value);

        if (scope) {
            key = scope + '[' + (plain || hash ? key : '') + ']';
        }

        if (!scope && array) {
            params.add(value.name, value.value);
        } else if (hash) {
            serialize(params, value, key);
        } else {
            params.add(key, value);
        }
    });
}

/**
 * XDomain client (Internet Explorer).
 */

function xdrClient (request) {
    return new PromiseObj(function (resolve) {

        var xdr = new XDomainRequest(), handler = function (ref) {
                var type = ref.type;


                var status = 0;

                if (type === 'load') {
                    status = 200;
                } else if (type === 'error') {
                    status = 500;
                }

                resolve(request.respondWith(xdr.responseText, {status: status}));
            };

        request.abort = function () { return xdr.abort(); };

        xdr.open(request.method, request.getUrl());

        if (request.timeout) {
            xdr.timeout = request.timeout;
        }

        xdr.onload = handler;
        xdr.onabort = handler;
        xdr.onerror = handler;
        xdr.ontimeout = handler;
        xdr.onprogress = function () {};
        xdr.send(request.getBody());
    });
}

/**
 * CORS Interceptor.
 */

var SUPPORTS_CORS = inBrowser && 'withCredentials' in new XMLHttpRequest();

function cors (request) {

    if (inBrowser) {

        var orgUrl = Url.parse(location.href);
        var reqUrl = Url.parse(request.getUrl());

        if (reqUrl.protocol !== orgUrl.protocol || reqUrl.host !== orgUrl.host) {

            request.crossOrigin = true;
            request.emulateHTTP = false;

            if (!SUPPORTS_CORS) {
                request.client = xdrClient;
            }
        }
    }

}

/**
 * Form data Interceptor.
 */

function form (request) {

    if (isFormData(request.body)) {
        request.headers.delete('Content-Type');
    } else if (isObject(request.body) && request.emulateJSON) {
        request.body = Url.params(request.body);
        request.headers.set('Content-Type', 'application/x-www-form-urlencoded');
    }

}

/**
 * JSON Interceptor.
 */

function json (request) {

    var type = request.headers.get('Content-Type') || '';

    if (isObject(request.body) && type.indexOf('application/json') === 0) {
        request.body = JSON.stringify(request.body);
    }

    return function (response) {

        return response.bodyText ? when(response.text(), function (text) {

            var type = response.headers.get('Content-Type') || '';

            if (type.indexOf('application/json') === 0 || isJson(text)) {

                try {
                    response.body = JSON.parse(text);
                } catch (e) {
                    response.body = null;
                }

            } else {
                response.body = text;
            }

            return response;

        }) : response;

    };
}

function isJson(str) {

    var start = str.match(/^\s*(\[|\{)/);
    var end = {'[': /]\s*$/, '{': /}\s*$/};

    return start && end[start[1]].test(str);
}

/**
 * JSONP client (Browser).
 */

function jsonpClient (request) {
    return new PromiseObj(function (resolve) {

        var name = request.jsonp || 'callback', callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2), body = null, handler, script;

        handler = function (ref) {
            var type = ref.type;


            var status = 0;

            if (type === 'load' && body !== null) {
                status = 200;
            } else if (type === 'error') {
                status = 500;
            }

            if (status && window[callback]) {
                delete window[callback];
                document.body.removeChild(script);
            }

            resolve(request.respondWith(body, {status: status}));
        };

        window[callback] = function (result) {
            body = JSON.stringify(result);
        };

        request.abort = function () {
            handler({type: 'abort'});
        };

        request.params[name] = callback;

        if (request.timeout) {
            setTimeout(request.abort, request.timeout);
        }

        script = document.createElement('script');
        script.src = request.getUrl();
        script.type = 'text/javascript';
        script.async = true;
        script.onload = handler;
        script.onerror = handler;

        document.body.appendChild(script);
    });
}

/**
 * JSONP Interceptor.
 */

function jsonp (request) {

    if (request.method == 'JSONP') {
        request.client = jsonpClient;
    }

}

/**
 * Before Interceptor.
 */

function before (request) {

    if (isFunction(request.before)) {
        request.before.call(this, request);
    }

}

/**
 * HTTP method override Interceptor.
 */

function method (request) {

    if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
        request.headers.set('X-HTTP-Method-Override', request.method);
        request.method = 'POST';
    }

}

/**
 * Header Interceptor.
 */

function header (request) {

    var headers = assign({}, Http.headers.common,
        !request.crossOrigin ? Http.headers.custom : {},
        Http.headers[toLower(request.method)]
    );

    each(headers, function (value, name) {
        if (!request.headers.has(name)) {
            request.headers.set(name, value);
        }
    });

}

/**
 * XMLHttp client (Browser).
 */

function xhrClient (request) {
    return new PromiseObj(function (resolve) {

        var xhr = new XMLHttpRequest(), handler = function (event) {

                var response = request.respondWith(
                'response' in xhr ? xhr.response : xhr.responseText, {
                    status: xhr.status === 1223 ? 204 : xhr.status, // IE9 status bug
                    statusText: xhr.status === 1223 ? 'No Content' : trim(xhr.statusText)
                });

                each(trim(xhr.getAllResponseHeaders()).split('\n'), function (row) {
                    response.headers.append(row.slice(0, row.indexOf(':')), row.slice(row.indexOf(':') + 1));
                });

                resolve(response);
            };

        request.abort = function () { return xhr.abort(); };

        xhr.open(request.method, request.getUrl(), true);

        if (request.timeout) {
            xhr.timeout = request.timeout;
        }

        if (request.responseType && 'responseType' in xhr) {
            xhr.responseType = request.responseType;
        }

        if (request.withCredentials || request.credentials) {
            xhr.withCredentials = true;
        }

        if (!request.crossOrigin) {
            request.headers.set('X-Requested-With', 'XMLHttpRequest');
        }

        // deprecated use downloadProgress
        if (isFunction(request.progress) && request.method === 'GET') {
            xhr.addEventListener('progress', request.progress);
        }

        if (isFunction(request.downloadProgress)) {
            xhr.addEventListener('progress', request.downloadProgress);
        }

        // deprecated use uploadProgress
        if (isFunction(request.progress) && /^(POST|PUT)$/i.test(request.method)) {
            xhr.upload.addEventListener('progress', request.progress);
        }

        if (isFunction(request.uploadProgress) && xhr.upload) {
            xhr.upload.addEventListener('progress', request.uploadProgress);
        }

        request.headers.forEach(function (value, name) {
            xhr.setRequestHeader(name, value);
        });

        xhr.onload = handler;
        xhr.onabort = handler;
        xhr.onerror = handler;
        xhr.ontimeout = handler;
        xhr.send(request.getBody());
    });
}

/**
 * Http client (Node).
 */

function nodeClient (request) {

    var client = __webpack_require__(59);

    return new PromiseObj(function (resolve) {

        var url = request.getUrl();
        var body = request.getBody();
        var method = request.method;
        var headers = {}, handler;

        request.headers.forEach(function (value, name) {
            headers[name] = value;
        });

        client(url, {body: body, method: method, headers: headers}).then(handler = function (resp) {

            var response = request.respondWith(resp.body, {
                status: resp.statusCode,
                statusText: trim(resp.statusMessage)
            });

            each(resp.headers, function (value, name) {
                response.headers.set(name, value);
            });

            resolve(response);

        }, function (error$$1) { return handler(error$$1.response); });
    });
}

/**
 * Base client.
 */

function Client (context) {

    var reqHandlers = [sendRequest], resHandlers = [];

    if (!isObject(context)) {
        context = null;
    }

    function Client(request) {
        while (reqHandlers.length) {

            var handler = reqHandlers.pop();

            if (isFunction(handler)) {

                var response = (void 0), next = (void 0);

                response = handler.call(context, request, function (val) { return next = val; }) || next;

                if (isObject(response)) {
                    return new PromiseObj(function (resolve, reject) {

                        resHandlers.forEach(function (handler) {
                            response = when(response, function (response) {
                                return handler.call(context, response) || response;
                            }, reject);
                        });

                        when(response, resolve, reject);

                    }, context);
                }

                if (isFunction(response)) {
                    resHandlers.unshift(response);
                }

            } else {
                warn(("Invalid interceptor of type " + (typeof handler) + ", must be a function"));
            }
        }
    }

    Client.use = function (handler) {
        reqHandlers.push(handler);
    };

    return Client;
}

function sendRequest(request) {

    var client = request.client || (inBrowser ? xhrClient : nodeClient);

    return client(request);
}

/**
 * HTTP Headers.
 */

var Headers = function Headers(headers) {
    var this$1 = this;


    this.map = {};

    each(headers, function (value, name) { return this$1.append(name, value); });
};

Headers.prototype.has = function has (name) {
    return getName(this.map, name) !== null;
};

Headers.prototype.get = function get (name) {

    var list = this.map[getName(this.map, name)];

    return list ? list.join() : null;
};

Headers.prototype.getAll = function getAll (name) {
    return this.map[getName(this.map, name)] || [];
};

Headers.prototype.set = function set (name, value) {
    this.map[normalizeName(getName(this.map, name) || name)] = [trim(value)];
};

Headers.prototype.append = function append (name, value) {

    var list = this.map[getName(this.map, name)];

    if (list) {
        list.push(trim(value));
    } else {
        this.set(name, value);
    }
};

Headers.prototype.delete = function delete$1 (name) {
    delete this.map[getName(this.map, name)];
};

Headers.prototype.deleteAll = function deleteAll () {
    this.map = {};
};

Headers.prototype.forEach = function forEach (callback, thisArg) {
        var this$1 = this;

    each(this.map, function (list, name) {
        each(list, function (value) { return callback.call(thisArg, value, name, this$1); });
    });
};

function getName(map, name) {
    return Object.keys(map).reduce(function (prev, curr) {
        return toLower(name) === toLower(curr) ? curr : prev;
    }, null);
}

function normalizeName(name) {

    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
    }

    return trim(name);
}

/**
 * HTTP Response.
 */

var Response = function Response(body, ref) {
    var url = ref.url;
    var headers = ref.headers;
    var status = ref.status;
    var statusText = ref.statusText;


    this.url = url;
    this.ok = status >= 200 && status < 300;
    this.status = status || 0;
    this.statusText = statusText || '';
    this.headers = new Headers(headers);
    this.body = body;

    if (isString(body)) {

        this.bodyText = body;

    } else if (isBlob(body)) {

        this.bodyBlob = body;

        if (isBlobText(body)) {
            this.bodyText = blobText(body);
        }
    }
};

Response.prototype.blob = function blob () {
    return when(this.bodyBlob);
};

Response.prototype.text = function text () {
    return when(this.bodyText);
};

Response.prototype.json = function json () {
    return when(this.text(), function (text) { return JSON.parse(text); });
};

Object.defineProperty(Response.prototype, 'data', {

    get: function get() {
        return this.body;
    },

    set: function set(body) {
        this.body = body;
    }

});

function blobText(body) {
    return new PromiseObj(function (resolve) {

        var reader = new FileReader();

        reader.readAsText(body);
        reader.onload = function () {
            resolve(reader.result);
        };

    });
}

function isBlobText(body) {
    return body.type.indexOf('text') === 0 || body.type.indexOf('json') !== -1;
}

/**
 * HTTP Request.
 */

var Request = function Request(options$$1) {

    this.body = null;
    this.params = {};

    assign(this, options$$1, {
        method: toUpper(options$$1.method || 'GET')
    });

    if (!(this.headers instanceof Headers)) {
        this.headers = new Headers(this.headers);
    }
};

Request.prototype.getUrl = function getUrl () {
    return Url(this);
};

Request.prototype.getBody = function getBody () {
    return this.body;
};

Request.prototype.respondWith = function respondWith (body, options$$1) {
    return new Response(body, assign(options$$1 || {}, {url: this.getUrl()}));
};

/**
 * Service for sending network requests.
 */

var COMMON_HEADERS = {'Accept': 'application/json, text/plain, */*'};
var JSON_CONTENT_TYPE = {'Content-Type': 'application/json;charset=utf-8'};

function Http(options$$1) {

    var self = this || {}, client = Client(self.$vm);

    defaults(options$$1 || {}, self.$options, Http.options);

    Http.interceptors.forEach(function (handler) {

        if (isString(handler)) {
            handler = Http.interceptor[handler];
        }

        if (isFunction(handler)) {
            client.use(handler);
        }

    });

    return client(new Request(options$$1)).then(function (response) {

        return response.ok ? response : PromiseObj.reject(response);

    }, function (response) {

        if (response instanceof Error) {
            error(response);
        }

        return PromiseObj.reject(response);
    });
}

Http.options = {};

Http.headers = {
    put: JSON_CONTENT_TYPE,
    post: JSON_CONTENT_TYPE,
    patch: JSON_CONTENT_TYPE,
    delete: JSON_CONTENT_TYPE,
    common: COMMON_HEADERS,
    custom: {}
};

Http.interceptor = {before: before, method: method, jsonp: jsonp, json: json, form: form, header: header, cors: cors};
Http.interceptors = ['before', 'method', 'jsonp', 'json', 'form', 'header', 'cors'];

['get', 'delete', 'head', 'jsonp'].forEach(function (method$$1) {

    Http[method$$1] = function (url, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1}));
    };

});

['post', 'put', 'patch'].forEach(function (method$$1) {

    Http[method$$1] = function (url, body, options$$1) {
        return this(assign(options$$1 || {}, {url: url, method: method$$1, body: body}));
    };

});

/**
 * Service for interacting with RESTful services.
 */

function Resource(url, params, actions, options$$1) {

    var self = this || {}, resource = {};

    actions = assign({},
        Resource.actions,
        actions
    );

    each(actions, function (action, name) {

        action = merge({url: url, params: assign({}, params)}, options$$1, action);

        resource[name] = function () {
            return (self.$http || Http)(opts(action, arguments));
        };
    });

    return resource;
}

function opts(action, args) {

    var options$$1 = assign({}, action), params = {}, body;

    switch (args.length) {

        case 2:

            params = args[0];
            body = args[1];

            break;

        case 1:

            if (/^(POST|PUT|PATCH)$/i.test(options$$1.method)) {
                body = args[0];
            } else {
                params = args[0];
            }

            break;

        case 0:

            break;

        default:

            throw 'Expected up to 2 arguments [params, body], got ' + args.length + ' arguments';
    }

    options$$1.body = body;
    options$$1.params = assign({}, options$$1.params, params);

    return options$$1;
}

Resource.actions = {

    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}

};

/**
 * Install plugin.
 */

function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    Util(Vue);

    Vue.url = Url;
    Vue.http = Http;
    Vue.resource = Resource;
    Vue.Promise = PromiseObj;

    Object.defineProperties(Vue.prototype, {

        $url: {
            get: function get() {
                return options(Vue.url, this, this.$options.url);
            }
        },

        $http: {
            get: function get() {
                return options(Vue.http, this, this.$options.http);
            }
        },

        $resource: {
            get: function get() {
                return Vue.resource.bind(this);
            }
        },

        $promise: {
            get: function get() {
                var this$1 = this;

                return function (executor) { return new Vue.Promise(executor, this$1); };
            }
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);
var bind = __webpack_require__(30);
var Axios = __webpack_require__(37);
var defaults = __webpack_require__(24);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(27);
axios.CancelToken = __webpack_require__(36);
axios.isCancel = __webpack_require__(28);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(51);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(27);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(24);
var utils = __webpack_require__(23);
var InterceptorManager = __webpack_require__(38);
var dispatchRequest = __webpack_require__(39);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);
var transformData = __webpack_require__(42);
var isCancel = __webpack_require__(28);
var defaults = __webpack_require__(24);
var isAbsoluteURL = __webpack_require__(47);
var combineURLs = __webpack_require__(45);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(29);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(23);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_session__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
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







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_axios___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vue_session___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["navtype", "authtype", "profs", "hwt", "dataAsync"],
  data: function data() {
    var now = new Date();
    var newYear = new Date(now.getFullYear() + 1, 0, 26);
    return {
      timeCount: newYear - now,
      curUser: "",
      searchData: "",
      ventData: [],
      loading1: false,
      help: false,
      hwta: false,
      formHelp: {
        ticket: ""
      }
    };
  },

  watch: {
    profs: function profs(val, oldval) {
      val !== "" && val !== false && val && val !== oldval ? this.curUser = val : this.curUser;
    },
    dataAsync: function dataAsync(val) {
      this.curUser = val;
    },
    hwt: function hwt(val) {
      this.hwta = val;
    }
  },
  created: function created() {
    var self = this;
    if (self.$session.has("usrid")) {
      self.curUser = this.$session.get("usrid");
      self.authtype = true;
    }
  },

  methods: {
    logout: function logout() {
      this.$session.destroy();
      this.$router.push("/");
      location.reload();
    }
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "889554153001a83508f257dd40194e08.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(53)
__webpack_require__(54)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(58),
  /* scopeId */
  "data-v-8e6fe5b0",
  /* cssModules */
  null
)
Component.options.__file = "/Users/benedictasamoah/Documents/sturta/appraisal/src/components/appNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] appNav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e6fe5b0", Component.options)
  } else {
    hotAPI.reload("data-v-8e6fe5b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "home-nav"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [(_vm.navtype !== 'Trans') ? _c('div', {
    staticStyle: {
      "float": "left",
      "margin-top": "-30px"
    }
  }, [_c('img', {
    staticClass: "app-nav-logo",
    attrs: {
      "src": __webpack_require__(31)
    }
  })]) : _c('div', {
    staticStyle: {
      "float": "left",
      "margin-top": "-30px"
    }
  }, [_c('img', {
    staticClass: "app-nav-logo",
    attrs: {
      "src": __webpack_require__(31)
    }
  })])]), _vm._v(" "), (_vm.navtype === 'Home' || _vm.navtype === 'Create') ? _c('div', {
    staticClass: "menu-nav"
  }, [(_vm.authtype === true) ? _c('span', {
    staticStyle: {
      "float": "right"
    }
  }, [_c('Dropdown', {
    staticStyle: {
      "margin-left": "15px",
      "padding-left": "10px",
      "padding-top": "3px",
      "margin-top": "7px"
    },
    attrs: {
      "placement": "bottom-end"
    }
  }, [_c('a', {
    staticClass: "a-h"
  }, [(_vm.curUser.image === 'default') ? _c('span', [_c('Icon', {
    staticClass: "authIcon",
    attrs: {
      "type": "ios-arrow-down"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "authImage",
    attrs: {
      "src": __webpack_require__(56)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "authName"
  }, [_vm._v(_vm._s(_vm.curUser.name))])], 1) : _c('span', [_c('Icon', {
    staticClass: "authIcon",
    attrs: {
      "type": "arrow-down-b"
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "authImage",
    attrs: {
      "src": _vm.curUser.image
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "authName"
  }, [_vm._v(_vm._s(_vm.curUser.name))])], 1)]), _vm._v(" "), _c('DropdownMenu', {
    attrs: {
      "slot": "list"
    },
    slot: "list"
  }, [_c('router-link', {
    staticClass: "a-h",
    attrs: {
      "to": "/dashboard"
    }
  }, [_c('DropdownItem', [_vm._v("Dashboard")])], 1), _vm._v(" "), _c('router-link', {
    staticClass: "a-h",
    attrs: {
      "to": "#"
    }
  }, [_c('DropdownItem', [_vm._v("Bids")])], 1), _vm._v(" "), _c('router-link', {
    staticClass: "a-h",
    attrs: {
      "to": "#"
    }
  }, [_c('DropdownItem', [_vm._v("Account Settings")])], 1), _vm._v(" "), _c('a', {
    staticClass: "a-h",
    on: {
      "click": function($event) {
        _vm.logout()
      }
    }
  }, [_c('DropdownItem', [_vm._v("Log Out")])], 1)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.authtype === false) ? _c('span', {
    staticStyle: {
      "float": "right",
      "margin-top": "5px"
    }
  }, [_c('a', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "href": "/authenticate?signUp=true"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "icon": "person-add"
    }
  }, [_vm._v("Sign up")])], 1), _vm._v(" "), _c('a', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "href": "/authenticate?signUp=false"
    }
  }, [_c('Button', {
    style: ({
      color: '#424040'
    }),
    attrs: {
      "type": "ghost"
    }
  }, [_vm._v("Sign in\n            "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-thin-right"
    }
  })], 1)], 1)]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.authtype === false && _vm.navtype === 'Auth') ? _c('span', {
    staticClass: "m-hide",
    staticStyle: {
      "float": "right",
      "margin-top": "5px"
    }
  }, [_c('a', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "href": "/authenticate?signUp=true"
    }
  }, [_c('Button', {
    attrs: {
      "type": "primary",
      "icon": "person-add"
    }
  }, [_vm._v("Sign up")])], 1), _vm._v(" "), _c('a', {
    staticStyle: {
      "margin-left": "10px"
    },
    attrs: {
      "href": "/authenticate?signUp=false"
    }
  }, [_c('Button', {
    style: ({
      color: '#424040'
    }),
    attrs: {
      "type": "ghost"
    }
  }, [_vm._v("Sign in\n          "), _c('Icon', {
    attrs: {
      "type": "ios-arrow-thin-right"
    }
  })], 1)], 1)]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8e6fe5b0", module.exports)
  }
}

/***/ }),
/* 59 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "social",
  data: function data() {
    return {
      email: "",
      password: ""
    };
  },
  created: function created() {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "fbappid",
        cookie: true,
        xfbml: true,
        version: "v2.8"
      });

      FB.AppEvents.logPageView();
    };
    (function (d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
  mounted: function mounted() {
    var _this = this;

    if (process.browser) {
      window.gapi.load("auth2", function () {
        var auth2 = window.gapi.auth2.init({
          client_id: "google-id",
          cookiepolicy: "single_host_origin"
        });
        auth2.attachClickHandler(_this.$refs.googleBtn, {}, function (googleUser) {
          var res = googleUser;
          _this.$emit("done", res);
        }, function (error) {
          return console.log(error);
        });
      });
    }
  },

  methods: {
    facebookLogin: function facebookLogin(data, callback) {
      var vm = this;
      FB.api("/me", "GET", {
        fields: "email,name,picture.type(large)"
      }, function (FBResponse) {
        var res = FBResponse;
        vm.$emit("doneFB", res);
      });
    },
    doFB: function doFB() {
      var vm = this;
      window.FB.login(function (response) {
        if (response.status === "connected") {
          vm.facebookLogin(response.authResponse, function () {
            // vm.$router.push({ name: 'redirect' })
            // console.log(response.authResponse)
          });
        }
      });
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_session__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_appNav__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_appNav___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_appNav__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_social__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_social___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_social__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_resource__["a" /* default */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Authentication",
  components: {
    social: __WEBPACK_IMPORTED_MODULE_5__components_social___default.a,
    appNav: __WEBPACK_IMPORTED_MODULE_4__components_appNav___default.a
  },
  data: function data() {
    var _ref;

    var EmailPhone = function EmailPhone(rule, value, callback) {
      var emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (value === "") {
        callback(new Error("Please enter your e-mail"));
      } else if (!emailregex.test(String(value).toLowerCase())) {
        callback(new Error("Please enter a valid email"));
      } else {
        callback();
      }
    };
    return _ref = {
      showUp: true,
      passcontinue: false
    }, _defineProperty(_ref, "showUp", true), _defineProperty(_ref, "navtype", "Auth"), _defineProperty(_ref, "authActive", false), _defineProperty(_ref, "kews", []), _defineProperty(_ref, "user", {
      phone: "",
      countryAbbr: "gh",
      countryCode: ""
    }), _defineProperty(_ref, "phoneVal", false), _defineProperty(_ref, "authActive", false), _defineProperty(_ref, "showMobNav", false), _defineProperty(_ref, "redirect", "/dashboard"), _defineProperty(_ref, "curYear", ""), _defineProperty(_ref, "psw_info", ""), _defineProperty(_ref, "setPassword", false), _defineProperty(_ref, "authSignUp", "authSignUp"), _defineProperty(_ref, "current", 3), _defineProperty(_ref, "loading", true), _defineProperty(_ref, "socialPassword", ""), _defineProperty(_ref, "social", {}), _defineProperty(_ref, "signupValidate", {
      email: "",
      name: "",
      password: "",
      tc: [],
      timezone: "",
      phone: ""
    }), _defineProperty(_ref, "phoneChex", {
      phone: ""
    }), _defineProperty(_ref, "signupRuleValidate", {
      password: [{
        required: true,
        message: "Please fill in the password.",
        trigger: "blur"
      }, {
        type: "string",
        min: 6,
        message: "The password length cannot be less than 6 bits",
        trigger: "blur"
      }],
      tc: [{
        required: true,
        type: "array",
        message: "Agree to terms & conditions",
        trigger: "change"
      }],
      name: [{
        required: true,
        message: "Please fill in your fullname.",
        trigger: "blur"
      }, {
        type: "string",
        min: 6,
        message: "Full name length cannot be less than 6 bits",
        trigger: "blur"
      }]
    }), _defineProperty(_ref, "logValidate", {
      email: "",
      password: "",
      phone: ""
    }), _defineProperty(_ref, "ruleValidate", {
      email: [{
        required: true,
        message: "Mailbox cannot be empty",
        trigger: "blur"
      }, { type: "email", message: "Incorrect email format", trigger: "blur" }],
      password: [{
        required: true,
        message: "Please fill in the password.",
        trigger: "blur"
      }, {
        type: "string",
        min: 6,
        message: "The password length cannot be less than 6 bits",
        trigger: "blur"
      }]
    }), _ref;
  },

  beforeCreate: function beforeCreate() {
    if (this.$session.has("usrid")) {
      var user = this.$session.get("usrid");
      this.$router.push("/dashboard");
    }
  },
  created: function created() {
    this.defLoad();
    this.$Message.config({
      top: 80,
      duration: 10
    });
    !this.$route.query.redir ? this.redirect = "/" : this.redirect = this.$route.query.redir;
  },

  methods: {
    loadingSync: function loadingSync(e) {
      var msg = this.$Message.loading({
        content: e,
        duration: 20
      });
    },
    phoneValidate: function phoneValidate() {
      var emval = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.signupValidate.email === "") {
        this.$Message.destroy();
        this.$Message.error("Email required");
      } else if (!emval.test(String(this.signupValidate.email).toLowerCase())) {
        this.$Message.destroy();
        this.$Message.error("Please enter a valid email");
      } else {
        this.$Message.destroy();
        this.passcontinue = true;
      }
    },
    addUser: function addUser(user) {
      var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].createAuth;
      return __WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.post(url, user).then(function (response) {
        return Promise.resolve(response.data);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    },
    authUser: function authUser(user) {
      var url = __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].signAuth;
      return __WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.post(url, user).then(function (response) {
        return Promise.resolve(response.data);
      }).catch(function (error) {
        return Promise.reject(error);
      });
    },
    upSubmit: function upSubmit(create) {
      var _this = this;

      this.$refs[create].validate(function (valid) {
        if (valid) {
          _this.$Message.destroy();
          _this.loadingSync("Hold on a second");
          _this.signupValidate.timezone = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
          _this.addUser(JSON.stringify(_this.signupValidate)).then(function (response) {
            _this.$Message.destroy();
            _this.loadingSync("Logging in");
            if (!response.error) {
              _this.$session.start();
              _this.$session.set("usrid", response);
              _this.$router.push(_this.redirect);
              _this.$Message.destroy();
              _this.$Message.success("logged in");
            } else if (response.error === "Account exist") {
              _this.$Message.error(response.error + " please sign in");
            } else {
              _this.$Message.error(response.error);
            }
          }).catch(function (errors) {
            console.log("Failed");
          });
        } else {
          _this.$Message.error("Oops Error, please provide valid sign up information!");
        }
      });
    },
    logSubmit: function logSubmit(auth) {
      var _this2 = this;

      this.$refs[auth].validate(function (valid) {
        if (valid) {
          _this2.$Message.destroy();
          _this2.loadingSync("Hold on a second");
          _this2.logValidate.timezone = new Date().toString().match(/\(([A-Za-z\s].*)\)/)[1];
          _this2.authUser(JSON.stringify(_this2.logValidate)).then(function (response) {
            _this2.$Message.destroy();
            _this2.loadingSync("Logging in");
            if (!response.error) {
              _this2.$session.start();
              _this2.$session.set("usrid", response);
              _this2.$router.push(_this2.redirect);
              _this2.$Message.destroy();
              _this2.$Message.success("logged in");
            } else {
              _this2.$Message.destroy();
              _this2.$Message.error(response.error);
            }
          }).catch(function (errors) {
            console.log("Failed");
          });
        } else {
          _this2.$Message.error("Oops Error, please provide valid sign in information!");
        }
      });
    },
    defLoad: function defLoad() {
      var d = new Date();
      this.curYear = d.getFullYear();
      this.$route.query.signUp === "true" ? this.showUp = true : this.showUp = false;
      this.$route.query.signUp === "true" ? document.title = "Appraisal - Create Account" : document.title = "Appraisal - Sign In";
    }
  }
});

/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 66 */,
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(65)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(60),
  /* template */
  __webpack_require__(71),
  /* scopeId */
  "data-v-c20cc05a",
  /* cssModules */
  null
)
Component.options.__file = "/Users/benedictasamoah/Documents/sturta/appraisal/src/components/social.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] social.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c20cc05a", Component.options)
  } else {
    hotAPI.reload("data-v-c20cc05a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('appNav', {
    attrs: {
      "authtype": _vm.authActive,
      "navtype": _vm.navtype
    }
  }), _vm._v(" "), _c('Row', {
    staticClass: "body-pad",
    attrs: {
      "type": "flex",
      "align": "middle",
      "justify": "center"
    }
  }, [_c('Col', {
    attrs: {
      "xs": 24,
      "sm": 16,
      "md": 8
    }
  }, [_c('transition', {
    attrs: {
      "mode": "out-in"
    }
  }, [(_vm.showUp && _vm.passcontinue === false) ? _c('Form', {
    attrs: {
      "label-position": "top"
    }
  }, [_c('h1', [_vm._v("Let's get started")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_c('span', {
    staticStyle: {
      "color": "#000"
    }
  }, [_vm._v("Welcome!, Enter your email to continue")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('em', [_vm._v("Your description here Similar to that of the appraiser portal assignment..")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "label": "Email",
      "prop": "email"
    }
  }, [_c('Input', {
    attrs: {
      "size": "large",
      "placeholder": "Enter your email"
    },
    model: {
      value: (_vm.signupValidate.email),
      callback: function($$v) {
        _vm.$set(_vm.signupValidate, "email", $$v)
      },
      expression: "signupValidate.email"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "long": ""
    },
    on: {
      "click": function($event) {
        _vm.phoneValidate()
      }
    }
  }, [_vm._v("Create Account")])], 1), _vm._v(" "), _c('hr', {
    staticClass: "hr-text",
    attrs: {
      "data-content": "OR"
    }
  }), _vm._v(" "), _c('social')], 1) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "mode": "out-in"
    }
  }, [(_vm.showUp && _vm.passcontinue) ? _c('Form', {
    ref: "signupValidate",
    attrs: {
      "model": _vm.signupValidate,
      "rules": _vm.signupRuleValidate,
      "label-position": "top"
    }
  }, [_c('h1', [_vm._v("Continue to complete")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_c('span', {
    staticStyle: {
      "color": "#000"
    }
  }, [_vm._v("Please enter your full-name and password to complete registration")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "label": "Full name",
      "prop": "name"
    }
  }, [_c('Input', {
    attrs: {
      "placeholder": "Enter your name"
    },
    model: {
      value: (_vm.signupValidate.name),
      callback: function($$v) {
        _vm.$set(_vm.signupValidate, "name", $$v)
      },
      expression: "signupValidate.name"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "Password",
      "prop": "password"
    }
  }, [_c('Input', {
    attrs: {
      "type": "password",
      "placeholder": "Enter your password"
    },
    model: {
      value: (_vm.signupValidate.password),
      callback: function($$v) {
        _vm.$set(_vm.signupValidate, "password", $$v)
      },
      expression: "signupValidate.password"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "Agree to Terms and conditions",
      "prop": "tc"
    }
  }, [_c('CheckboxGroup', {
    model: {
      value: (_vm.signupValidate.tc),
      callback: function($$v) {
        _vm.$set(_vm.signupValidate, "tc", $$v)
      },
      expression: "signupValidate.tc"
    }
  }, [_c('Checkbox', {
    attrs: {
      "label": "Terms and conditions"
    }
  })], 1)], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "long": ""
    },
    on: {
      "click": function($event) {
        _vm.upSubmit('signupValidate')
      }
    }
  }, [_vm._v("Complete")])], 1)], 1) : _vm._e()], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "mode": "out-in"
    }
  }, [(!_vm.showUp) ? _c('Form', {
    ref: "logValidate",
    attrs: {
      "model": _vm.logValidate,
      "rules": _vm.ruleValidate,
      "label-position": "top"
    }
  }, [_c('h1', [_vm._v("Sign In")]), _vm._v(" "), _c('h3', [_c('span', {
    staticStyle: {
      "color": "#000"
    }
  }, [_vm._v("Please enter your email & password to log in")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('FormItem', {
    staticStyle: {
      "margin-top": "10px"
    },
    attrs: {
      "label": "Email",
      "prop": "email"
    }
  }, [_c('Input', {
    attrs: {
      "size": "large",
      "placeholder": "Enter your email"
    },
    model: {
      value: (_vm.logValidate.email),
      callback: function($$v) {
        _vm.$set(_vm.logValidate, "email", $$v)
      },
      expression: "logValidate.email"
    }
  })], 1), _vm._v(" "), _c('FormItem', {
    attrs: {
      "label": "Password",
      "prop": "password"
    }
  }, [_c('Input', {
    attrs: {
      "type": "password",
      "placeholder": "Enter your password"
    },
    model: {
      value: (_vm.logValidate.password),
      callback: function($$v) {
        _vm.$set(_vm.logValidate, "password", $$v)
      },
      expression: "logValidate.password"
    }
  })], 1), _vm._v(" "), _c('FormItem', [_c('Button', {
    attrs: {
      "type": "primary",
      "size": "large",
      "long": ""
    },
    on: {
      "click": function($event) {
        _vm.logSubmit('logValidate')
      }
    }
  }, [_vm._v("Log In")])], 1), _vm._v(" "), _c('hr', {
    staticClass: "hr-text",
    attrs: {
      "data-content": "OR"
    }
  }), _vm._v(" "), _c('social')], 1) : _vm._e()], 1)], 1), _vm._v(" "), _c('svg', {
    staticClass: "coconut-left",
    attrs: {
      "id": "b1d80de4-06cb-4b2d-9c4c-b14d42818646",
      "data-name": "Layer 1",
      "xmlns": "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "width": "1009.54",
      "height": "750.39",
      "viewBox": "0 0 1009.54 750.39"
    }
  }, [_c('defs', [_c('linearGradient', {
    attrs: {
      "id": "fd95d79a-5cd9-41a5-a6ba-ef65272c784a",
      "x1": "361.1",
      "y1": "819.7",
      "x2": "361.1",
      "y2": "219",
      "gradientUnits": "userSpaceOnUse"
    }
  }, [_c('stop', {
    attrs: {
      "offset": "0",
      "stop-color": "gray",
      "stop-opacity": "0.25"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "0.54",
      "stop-color": "gray",
      "stop-opacity": "0.12"
    }
  }), _vm._v(" "), _c('stop', {
    attrs: {
      "offset": "1",
      "stop-color": "gray",
      "stop-opacity": "0.1"
    }
  })], 1)], 1), _vm._v(" "), _c('title', [_vm._v("in progress")]), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M681.78,180c-64.72-1.67-126.36-17.19-185.22-34.17S379.4,110,316.23,101c-40.63-5.79-87.1-6.61-119.83,9.58C164.89,126.14,154.71,153,149.24,178c-4.12,18.77-6.54,38.52,4.74,56.09,7.84,12.2,21.74,22.45,31.36,34.14,33.47,40.66,9.81,90.79-26.45,130.49-17,18.62-36.75,36.38-49.88,56.21s-19.2,42.53-7.71,62.76c11.38,20,38.51,35.09,67.9,45.68,59.69,21.51,130,27.66,198.61,31.15,151.83,7.72,304.46,4.37,456.69,1,56.34-1.24,112.92-2.49,168.34-9,30.78-3.59,62.55-9.3,84.9-23.07,28.36-17.48,35.39-47.08,16.38-69-31.88-36.77-120-45.91-142.31-85.37-12.26-21.72.33-45.91,18.16-66.06,38.24-43.21,102.33-81.12,105.7-130.52,2.32-33.92-28.49-67.9-76.13-83.95-49.93-16.82-119.18-14.71-156,13.14C805.59,170.4,738.93,181.44,681.78,180Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#6c63ff",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('g', {
    attrs: {
      "opacity": "0.8"
    }
  }, [_c('path', {
    attrs: {
      "d": "M1034,253.58s-11.28-4.58-47.16,11.88-40.36,14.37-49.65,11.85-14.47-3.11-24.43-16.85c0,0-7-38.07-13.82-44s-35.68,3.37-35.68,3.37S828.64,227.79,822,181.5c0,0,4.68-34.88-1.7-45.59,0,0,12.88,5.55,34.12-3.41s38.24,9.66,38.24,9.66,5.36,13.87,4.8,22.13,2.83,11.38,13,7.38c0,0,5-7.08-2.07-18.78s-12.08-20.42-10.11-29.51,7.62-21.68,25.79-28S966.93,87.88,978.78,83s14.71-8.15,14.71-8.15-7.29,7.31,9.89,38.27,6.23,44.41,6.23,44.41-9.14,21.78-49.48,20c0,0-38.87,1.42-17.68,17.9,0,0,13.57-2.76,33.87-9.21s34.93,20.17,38.57,38.69S1034,253.58,1034,253.58Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#6c63ff"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M981.76,98.29l.21-.06c1.56,5.91-15.81,29.65-30.66,48.53l-.17-.13C972.08,120,983,102.83,981.76,98.29Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#444053"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M951.44,146.24l.09.24c-11.86,15.08-26.78,33.08-38.72,46.41-1.14,1.27-2.27,2.6-3.35,4l-.35-.27c1.1-1.37,2.23-2.71,3.37-4C924.42,179.27,939.59,161.31,951.44,146.24Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#444053"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M909.4,196.22l.24.4c-21.73,27.13-23.17,69.25-23.22,69.62L881.84,261C881.89,260.58,887.52,223.53,909.4,196.22Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#444053"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1008.81,238.87s-25.62-13.32-45.59-8.54-64.92-16.9-64.92-16.9-19.09-7.75-22.93-16.59c0,0-13.09-13.85-13.84-21S848,150.65,839.72,150",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1005.1,251.69s-12.9-8.69-11.4-18.83",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M985.31,262.92s-18.46-6.7-20.31-33",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M955.53,269.72s-17.64-14.63-11.78-40.2",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M919.74,262.57s-11.74-24.63-1.29-40.65",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1009.11,222.63s-13.35,4.24-10.48,11.26",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M993,198.41s-17.86,5.66-18.28,30.93",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M968.1,192.58S951.85,212.64,953,230.87",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M939.64,200.45s-16.15,15.43-14.09,24",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M929.9,195s-15.14,2.71-17.25-2.26",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M910.23,176.72s7.65,10.13,9.62,7.86",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M986.05,170.31s-38.16,2.77-46.79-8.73",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M902.2,125.68s17.91,38.43,30.91,43.33",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M921,107.37s11,35.35,24.62,46.39",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M1002.11,141.14s-29,12.45-46.44-.15",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10",
      "stroke-width": "0.75"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M946.84,99.83s6.63,26,15.56,32.27",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10",
      "stroke-width": "0.75"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M997.73,112s-16.31,6.17-22.4,1.44",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10",
      "stroke-width": "0.75"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M896.26,185.21s0,22.65-6.17,24.26",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M845.84,214.56s24.5,2.1,35.79-10.54",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M889.94,158.45s-5.92,23-22.27,29.16",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M831.15,190.36s17.34,6,32.25-9.32",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M870.67,138.7s-1.64,19.51-12.25,28.64",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M831.81,160.63s14.39.09,17.76-4.59",
      "transform": "translate(-95.23 -74.8)",
      "fill": "none",
      "stroke": "#444053",
      "stroke-miterlimit": "10"
    }
  })]), _vm._v(" "), _c('ellipse', {
    attrs: {
      "cx": "262.87",
      "cy": "734.89",
      "rx": "218",
      "ry": "15.5",
      "fill": "#6c63ff",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M484.39,725.3c3-5.39,6.59-10.47,9.49-15.93,2.65-5,4.72-10.3,7.11-15.44,4.09-8.8,9.13-17.12,13.72-25.68,3-5.61,5.9-11.72,5.32-18.06-.55-6-4.07-11.2-5.43-17-5.54-23.81-18.87-45.67-27-68.7-2.08-5.84-4.1-11.72-6.7-17.36-5-10.85-12-20.6-19-30.27a85.48,85.48,0,0,0-8.4-10.44c-2.51-2.51-5.33-4.72-7.61-7.44-4.7-5.6-6.9-13.66-12.78-18-.1.26-.21.51-.32.77C428.58,471,414.46,463.91,406.27,455a157.44,157.44,0,0,1-13.13-17.25l-17.83-25.77c-3.07-4.44-6.2-9-7.44-14.29-1.52-6.38-.11-13.18-1.61-19.56a24.67,24.67,0,0,0-5.45-10.36c.17-.05.35-.12.53-.16,3.4-.91,7-1.07,10.37-1.88,7.35-1.75,13.74-6.45,21.06-8.33,3.74-1,7.73-1.2,11.12-3a9.24,9.24,0,0,0,4.3-9.82c-2.37-12.55,4.25-25.27,3.13-38-.3-3.52-1.2-6.95-1.78-10.44-1.35-8.1-1.1-16.4-.62-24.62a52,52,0,0,1,8.15-10.13c4.5-4.34,9.87-8,13-13.43,2.73-4.81,3.39-10.62,2.7-16.12-.49-4-1.85-8.21-5-10.64s-7.67-2.61-11.48-1.34c-.53.17-1.05.38-1.56.6a13.11,13.11,0,0,0-10.34-.6c-3.8,1.26-7.06,3.77-10.12,6.38a23.13,23.13,0,0,0-4.72,5c-1.93,3-2.49,6.7-3.22,10.23a100,100,0,0,1-6.75,19.79c-.54,1.12-2,3.13-3.18,5.05l-2.14-.44c-.93,8.91-8.39,15.45-12.93,23.15-2.21,3.74-3.76,7.83-5.75,11.7a113.41,113.41,0,0,1-7.59,12.17q-4.05,6-8.11,11.89a169,169,0,0,1-11,14.88c-3.67-.3-7.34-.57-11-.63a89.29,89.29,0,0,0-18.31,1.63,51,51,0,0,1-.65-6.41c0-.13,0-.26,0-.39,0-.52.06-1.14.13-1.81a37,37,0,0,0-1.77-62.6,26.91,26.91,0,0,0,.38-3.4c0-.67,0-1.35,0-2,0-.34,0-.68-.07-1a13.22,13.22,0,0,0-.34-2c-.08-.32-.17-.64-.28-1a9.45,9.45,0,0,0-.83-1.8.86.86,0,0,0-.07-.1c-.13-.21-.26-.42-.41-.62s-.13-.16-.19-.24a4.78,4.78,0,0,0-.34-.42l-.25-.26c-.11-.12-.22-.24-.34-.35l-.28-.25-.35-.31-.32-.24-.36-.27-.35-.23-.36-.23c-.12-.08-.25-.15-.38-.22l-.37-.21-.4-.2-.37-.18-.44-.19-.36-.16-.48-.18-.34-.13-.52-.18-.31-.1-.57-.18-.27-.08-.62-.17-.24-.07-.65-.16-.19-.05-.72-.16-.12,0-1.06-.23q-6.57-1.35-13.22-2.33c-3.63-.54-7.35-1-10.93-.19-4.94,1.1-9.06,4.44-13.68,6.51-5.46,2.46-11.52,3.11-17.34,4.46s-11.81,3.66-15.46,8.43c-2.78,3.64-3.89,8.27-4.72,12.78-6.92,37.64.54,76.25,1.95,114.51.55,14.89-.12,30.81-8.56,43l24.58-.65c1.18,0,2.37-.07,3.57-.14s2.4-.16,3.58-.3a23.68,23.68,0,0,0,8.91-2.67,15.37,15.37,0,0,0,3.47-2.7c3.34-3.44,5.12-8.25,6.75-12.85.55-1.55,1.1-3.12,1.59-4.7.2-.66.39-1.32.56-2l.08-.32.28.13c1,1.88,2.13,3.72,3.33,5.5,4.29,6.32,9.73,11.72,15.13,17.09,10.73,10.65,21.7,21.49,35.15,28.33,4.54,2.29,9.45,4.22,12.91,8,1.7,1.83,3.17,4.18,5.58,4.81,1.5.39,3.15,0,4.58.64,2.1.88,2.87,3.41,3.84,5.49s3.16,4.2,5.24,3.25a10.51,10.51,0,0,0,3.92,10.43,7.66,7.66,0,0,1,2.54,2.28,8.29,8.29,0,0,1,.52,2.68,10.59,10.59,0,0,0,3.79,6.49c-1.95,3.23-.39,7.86-.34,11.89,0,3.38-1.11,6.64-1.87,9.93-2.21,9.65-1,19.75.8,29.48,1,5.37,2.27,10.93,5.77,15.1,1.14,1.35,2.5,2.52,3.7,3.83a35.6,35.6,0,0,1,5.65,8.61,67.5,67.5,0,0,1,6.13,19.64,35.76,35.76,0,0,0,2.9,9.9c2.19,4.78.19,10.66,2.15,15.54.89,2.19,2.53,4.06,3.06,6.35.75,3.33-1,6.66-1.47,10.05-1.14,7.94,4.59,15.31,5.11,23.31a1.84,1.84,0,0,1-.28,1.35c-.39.44-1.06.43-1.59.68-1,.48-1.27,1.83-1.59,2.95s-1.22,2.39-2.33,2.05c-16.43,8.79-33.44,16.91-49.87,25.7l-7.5,4-40.11,21.43a2.9,2.9,0,0,0-1.61,2.62c0,.48.06,1,.1,1.45-2.81.7-5.51,1.54-7.43,1.89-.79.15-1.58.3-2.36.47a2.52,2.52,0,0,0,.36-1,2,2,0,0,0-1.77-2,6.41,6.41,0,0,0-2.89.38,42.15,42.15,0,0,1-7,1.29c-2.81.27-5.67.26-8.39,1s-5.4,2.39-6.5,5a12.13,12.13,0,0,0-.72,4.72,72.25,72.25,0,0,0,2.18,18.34,1.56,1.56,0,0,0,.73,1.17c.35.14.77,0,1.12.16a1.5,1.5,0,0,1,.65.82c1.68,3.82,2.07,8.08,2.52,12.24q1,9.25,2.53,18.45c.6,3.58,1.34,7.32,3.67,10.08,2.56,3,6.61,4.33,10.52,4.86,8.25,1.11,16.58-.56,24.72-2.27,1.52-.32,3.15-.71,4.17-1.89a4.71,4.71,0,0,0,1-3.33c-.19-4.11-3.93-7-7.33-9.31L284,791.56a2,2,0,0,1-1-2.26l.3-6.07-.9,0c1-4.28,2.61-8.39,5.76-11.33,2.17-2,5-3.4,7.27-5.22a18,18,0,0,0,10.11,3.71c6-8.08,14.45-13.58,22.9-19a224,224,0,0,1,21.25-11.86q8.86-4.38,18-8.21c8.6-3.62,17.36-6.85,26.13-10,5.85-2.1,11.75-4.17,17.14-7.27,14-8.09,23.89-24.24,22-40.41-2.38-20.4,2.71-41.66,2.37-62.2-.1-6-.32-12-2.14-17.75a9.48,9.48,0,0,1,1.19,1c3.64,3.4,4.52,8.8,8,12.68,2.71,3.05,6.83,5,8.47,8.72,1.25,2.85,1.07,6.7,3.68,8.34.74.47,1.62.67,2.36,1.13a7.9,7.9,0,0,1,2.19,2.37c2.77,3.95,5.64,8.18,5.94,13,.13,1.91-.05,4.12,1.35,5.41.4.37.91.64,1.12,1.14.44,1-.72,2.06-.92,3.17-.29,1.54,1.23,2.71,2.17,4a6.29,6.29,0,0,1,0,7.41c-8.2,10.65-9.68,25-16.85,36.39-2.48,3.93-5.24,7.65-7.64,11.63-7.38,12.22-11.11,26.26-14.73,40.09a22.15,22.15,0,0,0,6.15,6.86,34,34,0,0,1-6.85,12.65,31.84,31.84,0,0,0-2.26,2.83,5.5,5.5,0,0,0-2.23-1.68,79.23,79.23,0,0,0-2,17.5c0,3.88.53,8.31,3.68,10.55a13.05,13.05,0,0,0,4.09,1.69l6.86,2a7.17,7.17,0,0,0,3.79.37c.81-.23,1.53-.73,2.36-.89a5.79,5.79,0,0,1,2.66.35l5.93,1.73a39.2,39.2,0,0,1,5.86,2.07c1.69.81,3.25,1.86,4.91,2.76a59.33,59.33,0,0,0,8.57,3.52L481.26,816a37.19,37.19,0,0,0,8.86,2.3c2.1.18,4.23,0,6.3.36,1.58.27,3.11.84,4.7,1a12.32,12.32,0,0,0,7.4-2.2,6.61,6.61,0,0,0,2.14-1.93c1.5-2.34.21-5.43-1.25-7.79-2.71-4.38-6.1-8.48-10.57-11-1.81-1-3.77-1.74-5.64-2.66-5.32-2.6-9.33-6.94-14.36-9.91a3.41,3.41,0,0,0-4.31.29c-4.18-2.71-8.7-5.36-11-9.77a22,22,0,0,1-2-6.75c2.35.56,4.72,1,7.11,1.39C472.53,754.25,476.78,738.9,484.39,725.3ZM388.32,298.81c-.2,1.13-.42,2.25-.66,3.37-2,9.39-4.86,19.91-11.4,26.9a25,25,0,0,1-7.38,4.87l-.73.36C372.86,321.73,380.36,310.07,388.32,298.81Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "url(#fd95d79a-5cd9-41a5-a6ba-ef65272c784a)"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M398,243.11c.74-3.49,1.3-7.15,3.23-10.16a23.21,23.21,0,0,1,4.73-5c3.06-2.59,6.33-5.08,10.14-6.34s8.29-1.09,11.49,1.33,4.55,6.59,5.05,10.57c.68,5.47,0,11.23-2.71,16-3.1,5.41-8.48,9-13,13.34a51.62,51.62,0,0,0-8.47,10.56,30.09,30.09,0,0,1-3.86,5.64,7.33,7.33,0,0,1-6.13,2.45c-1.93-.31-3.5-1.65-5-2.93-1.85-1.62-6.83-4.51-7-7.08-.12-2.08,3.77-6.8,4.72-8.75A98.52,98.52,0,0,0,398,243.11Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#fbbebe"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M398,243.11c.74-3.49,1.3-7.15,3.23-10.16a23.21,23.21,0,0,1,4.73-5c3.06-2.59,6.33-5.08,10.14-6.34s8.29-1.09,11.49,1.33,4.55,6.59,5.05,10.57c.68,5.47,0,11.23-2.71,16-3.1,5.41-8.48,9-13,13.34a51.62,51.62,0,0,0-8.47,10.56,30.09,30.09,0,0,1-3.86,5.64,7.33,7.33,0,0,1-6.13,2.45c-1.93-.31-3.5-1.65-5-2.93-1.85-1.62-6.83-4.51-7-7.08-.12-2.08,3.77-6.8,4.72-8.75A98.52,98.52,0,0,0,398,243.11Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M293,343.06a89.71,89.71,0,0,1,24.57-3c13.83.2,28.07,3.55,41.24-.69a71.54,71.54,0,0,0,9.89-4.29c2.65-1.32,5.35-2.68,7.38-4.84,6.55-6.94,9.37-17.39,11.42-26.72s2.58-18.91,3.11-28.44c3.41,1.59,7,3.16,10.78,2.84s7.55-3.2,7.53-7c-.56,8.83-1,17.77.49,26.49.58,3.46,1.48,6.87,1.79,10.37,1.12,12.64-5.51,25.27-3.14,37.74a9.15,9.15,0,0,1-4.3,9.75c-3.4,1.83-7.4,2.06-11.14,3-7.33,1.87-13.73,6.53-21.09,8.27-3.43.81-7,1-10.38,1.87-4.86,1.28-9.27,4.06-14.22,4.94-3.71.66-7.53.21-11.28.53-3.26.27-6.46,1.13-9.73,1.21-8,.2-15.57-4.33-20.89-10.34S296.34,350.34,293,343.06Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#6c63ff"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M293,343.06a89.71,89.71,0,0,1,24.57-3c13.83.2,28.07,3.55,41.24-.69a71.54,71.54,0,0,0,9.89-4.29c2.65-1.32,5.35-2.68,7.38-4.84,6.55-6.94,9.37-17.39,11.42-26.72s2.58-18.91,3.11-28.44c3.41,1.59,7,3.16,10.78,2.84s7.55-3.2,7.53-7c-.56,8.83-1,17.77.49,26.49.58,3.46,1.48,6.87,1.79,10.37,1.12,12.64-5.51,25.27-3.14,37.74a9.15,9.15,0,0,1-4.3,9.75c-3.4,1.83-7.4,2.06-11.14,3-7.33,1.87-13.73,6.53-21.09,8.27-3.43.81-7,1-10.38,1.87-4.86,1.28-9.27,4.06-14.22,4.94-3.71.66-7.53.21-11.28.53-3.26.27-6.46,1.13-9.73,1.21-8,.2-15.57-4.33-20.89-10.34S296.34,350.34,293,343.06Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M652.63,355.35a68.84,68.84,0,1,1-68.84,68.83,68.84,68.84,0,0,1,68.84-68.83m0-17a85.84,85.84,0,1,0,85.84,85.83,85.93,85.93,0,0,0-85.84-85.83Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "544.69",
      "y": "243.47",
      "width": "20.12",
      "height": "21.18",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "689.04",
      "y": "330.53",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(180.31 -386.14) rotate(31)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "724.34",
      "y": "364.89",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(611.53 -523.68) rotate(61)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "724.81",
      "y": "461.5",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1429.42 24.26) rotate(122)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "560.79",
      "y": "364.89",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1080.79 -16.57) rotate(119)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "560.33",
      "y": "461.5",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(573.26 -336.6) rotate(58)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "596.1",
      "y": "330.53",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1206.2 246.52) rotate(149)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "544.69",
      "y": "434.11",
      "width": "20.12",
      "height": "21.18",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "689.04",
      "y": "496.66",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(-256.63 357.71) rotate(-31)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "596.1",
      "y": "496.66",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(769.26 1179.44) rotate(-149)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "449.38",
      "y": "340.91",
      "width": "24.36",
      "height": "18",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "736.3",
      "y": "415.71",
      "width": "24.36",
      "height": "18",
      "transform": "translate(1401.72 774.62) rotate(-180)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M812.55,231.44a68.84,68.84,0,1,1-68.84,68.83,68.84,68.84,0,0,1,68.84-68.83m0-17a85.84,85.84,0,1,0,85.84,85.83,85.93,85.93,0,0,0-85.84-85.83Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "704.61",
      "y": "119.57",
      "width": "20.12",
      "height": "21.18",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "848.96",
      "y": "206.62",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(139.34 -486.21) rotate(31)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "884.26",
      "y": "240.98",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(585.55 -727.39) rotate(61)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "884.73",
      "y": "337.59",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1569 -300.93) rotate(122)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "720.71",
      "y": "240.98",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1209.86 -340.41) rotate(119)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "720.25",
      "y": "337.59",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(543.35 -530.46) rotate(58)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "756.02",
      "y": "206.62",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1439.38 -65.97) rotate(149)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "704.61",
      "y": "310.2",
      "width": "20.12",
      "height": "21.18",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "848.96",
      "y": "372.75",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(-169.97 422.38) rotate(-31)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "756.02",
      "y": "372.75",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1130.07 1031.68) rotate(-149)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "609.29",
      "y": "217",
      "width": "24.36",
      "height": "18",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "896.21",
      "y": "291.8",
      "width": "24.36",
      "height": "18",
      "transform": "translate(1721.56 526.8) rotate(-180)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M492.67,226.14c.81,0,1.62,0,2.43,0a68.84,68.84,0,0,1-2.34,137.64c-.81,0-1.62,0-2.44,0a68.84,68.84,0,0,1,2.35-137.64m0-17h0a85.84,85.84,0,0,0-2.94,171.63c1,0,2,.05,3,.05a85.84,85.84,0,0,0,2.93-171.63c-1,0-2-.05-3-.05Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "483.31",
      "y": "189.04",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(-88.01 -91.8) rotate(1.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "531.97",
      "y": "202.99",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(108.44 -335.49) rotate(32.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "566.07",
      "y": "238.55",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(441.2 -452.09) rotate(62.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "563.18",
      "y": "335.12",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(1085.12 -11.13) rotate(123.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "402.62",
      "y": "232.88",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(738.64 -59.76) rotate(120.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "398.8",
      "y": "329.42",
      "width": "20.12",
      "height": "21.18",
      "transform": "matrix(0.5, 0.87, -0.87, 0.5, 403.55, -258.9)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "439.09",
      "y": "199.76",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(848.74 101.67) rotate(150.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "476.7",
      "y": "379.55",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(-81.4 -91.46) rotate(1.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "526.21",
      "y": "369.02",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(-212.04 232.91) rotate(-29.01)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "433.33",
      "y": "365.79",
      "width": "20.12",
      "height": "21.18",
      "transform": "translate(515.14 858.69) rotate(-147.01)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "384.73",
      "y": "283.18",
      "width": "24.36",
      "height": "18",
      "transform": "translate(-84.85 -88.4) rotate(1.99)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('rect', {
    attrs: {
      "x": "576.3",
      "y": "289.83",
      "width": "24.36",
      "height": "18",
      "transform": "translate(1071.01 543.1) rotate(-178.01)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M271,733.91a20.66,20.66,0,0,0-7.09,2.21c-3,1.83-4.85,5.06-6.17,8.32-3.31,8.18-4,17.16-4.14,26-.12,7.12.12,14.41,2.67,21.05A13.3,13.3,0,0,0,259.8,797a12.56,12.56,0,0,0,4.83,2.34c3.8,1,8.21,1,11.32-1.4,3.46-2.71,4.33-7.48,5.06-11.81,1-5.84,2.39-12,6.73-16.07,3.22-3,7.83-4.5,10.17-8.22,2.79-4.42,1.32-10.19-.46-15.11-1.55-4.26-3.82-12.91-8.28-15.09S275.64,733.07,271,733.91Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#fbbebe"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M435.47,754.86a33.45,33.45,0,0,1-7,12.91c-2,2.28-4.45,5.05-3.4,7.88a7.05,7.05,0,0,0,1.86,2.49c14.66,14.35,35.17,21.33,55.52,23.87a1.91,1.91,0,0,0,1,0c.6-.27.74-1,.82-1.67a21.13,21.13,0,0,0,0-6.4c-1-5-5.35-8.47-9.61-11.21s-8.92-5.4-11.3-9.87c-3-5.56-1.71-12.8-5.24-18-2.86-4.23-8.17-6-13.21-6.83-1.75-.27-5.47-2.19-7-1.3C436.35,747.63,436,753.12,435.47,754.86Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#fbbebe"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M269,733.39a2,2,0,0,0-1.77-2,6.4,6.4,0,0,0-2.89.37,42.25,42.25,0,0,1-7,1.28c-2.81.27-5.68.26-8.41,1s-5.4,2.37-6.51,5a12.39,12.39,0,0,0-.72,4.69,71.64,71.64,0,0,0,2.18,18.21,1.58,1.58,0,0,0,.74,1.17c.35.14.77,0,1.12.16a1.48,1.48,0,0,1,.65.81c1.69,3.8,2.08,8,2.53,12.16q1,9.19,2.53,18.32c.6,3.55,1.34,7.28,3.68,10,2.56,3,6.62,4.29,10.53,4.82,8.26,1.1,16.6-.56,24.76-2.26a7.22,7.22,0,0,0,4.17-1.87,4.66,4.66,0,0,0,1-3.31c-.19-4.08-3.94-7-7.34-9.24l-4.68-3.15a2.43,2.43,0,0,1-.82-.74,2.64,2.64,0,0,1-.23-1.5l.3-6a17.18,17.18,0,0,0-15,9.31c-.65,1.29-1.26,2.8-2.61,3.3-1.67.63-3.53-.78-4.09-2.47a10.76,10.76,0,0,1,.15-5.28c2.74-14.68,2.1-29.77,3.77-44.61a10.16,10.16,0,0,1,1.49-4.7C267.34,735.74,268.85,734.76,269,733.39Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M473.24,790.31c.69,1.14,1.76,2,2.4,3.18s.63,2.9-.52,3.57a3.52,3.52,0,0,1-2.16.22,73.1,73.1,0,0,1-39.53-17.88,27.71,27.71,0,0,1-4.84-5.31c-1.29-2-2.38-4.35-4.58-5.17a78.17,78.17,0,0,0-2,17.38c0,3.85.53,8.25,3.68,10.48a13.17,13.17,0,0,0,4.1,1.67l6.87,1.94a7.31,7.31,0,0,0,3.8.37c.81-.22,1.53-.73,2.36-.88a5.84,5.84,0,0,1,2.67.34l5.93,1.73a39.24,39.24,0,0,1,5.87,2c1.69.8,3.26,1.85,4.91,2.74a58.76,58.76,0,0,0,8.59,3.49l10.44,3.62a36.83,36.83,0,0,0,8.88,2.28c2.1.18,4.23,0,6.31.36,1.58.27,3.11.84,4.71,1a12.45,12.45,0,0,0,7.4-2.19,6.69,6.69,0,0,0,2.15-1.91c1.5-2.33.21-5.4-1.26-7.75-2.71-4.34-6.1-8.41-10.58-10.89-1.82-1-3.78-1.74-5.65-2.65-5.32-2.58-9.35-6.89-14.38-9.84C474.06,779.45,471,786.64,473.24,790.31Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M326.61,370a43.25,43.25,0,0,1-18.46,7.18,74.46,74.46,0,0,1-10.45.56,265.8,265.8,0,0,1-43.46-3.63c5.72-6.3,11.5-13,13.66-21.26a34.92,34.92,0,0,0,.65-13.32,99.7,99.7,0,0,0-4.06-16.77,116.2,116.2,0,0,0,18.37-.47c3.48-.35,12-3.52,15-1.12,2.81,2.23.69,10.12.64,13.76,0,.13,0,.26,0,.39a44.28,44.28,0,0,0,3.51,16.06C306.41,361.22,315.82,369.3,326.61,370Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#fbbebe"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M298.54,334.88a36.68,36.68,0,0,1-30,4.6,99.7,99.7,0,0,0-4.06-16.77,116.2,116.2,0,0,0,18.37-.47c3.48-.35,12-3.52,15-1.12C300.71,323.35,298.59,331.24,298.54,334.88Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('circle', {
    attrs: {
      "cx": "183.27",
      "cy": "227.74",
      "r": "36.6",
      "fill": "#fbbebe"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M433.79,487.74a17,17,0,0,1-8.25,14.69,32.6,32.6,0,0,1-9,3.15c-16.74,4-33.89,7.29-51.08,6.31-3.72-.21-7.5-.65-10.84-2.28s-6.19-4.68-6.69-8.36a7.92,7.92,0,0,0-.53-2.66,7.5,7.5,0,0,0-2.54-2.26A10.41,10.41,0,0,1,341,486c-2.09.93-4.27-1.17-5.25-3.24s-1.75-4.57-3.85-5.44c-1.43-.61-3.08-.25-4.59-.64-2.41-.62-3.88-3-5.58-4.78-3.47-3.71-8.39-5.63-12.93-7.91-13.47-6.79-24.45-17.55-35.2-28.13-5.41-5.33-10.86-10.7-15.15-17-1.21-1.77-2.3-3.59-3.33-5.46a153.52,153.52,0,0,1-8.44-19.31c-1.36-3.54-2.74-7.28-2.18-11,.05-.34.12-.68.2-1a21.05,21.05,0,0,1,3.32-6.71c3.72-5.47,8.6-10.65,15-12.33s12.79.35,19.29,1.73a49.15,49.15,0,0,0,6.55,1c6.89.49,13.71-1.36,20.37-3.2l7.26-2c3.64-1,5.46-5.4,9.14-6.17a12.83,12.83,0,0,1,4.93.25c7.47,1.42,15,3.25,21.57,7.05a35.54,35.54,0,0,1,4.19,2.85c4.68,3.7,8.38,8.63,9.74,14.39,1.5,6.33.09,13.09,1.61,19.42,1.24,5.23,4.38,9.79,7.46,14.2L393,438.09a158.57,158.57,0,0,0,13.15,17.14C415.73,465.66,433.55,473.55,433.79,487.74Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#6c63ff"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M386.07,243.11c.74-3.49,1.29-7.15,3.22-10.16a23.21,23.21,0,0,1,4.73-5c3.07-2.59,6.33-5.08,10.14-6.34s8.29-1.09,11.49,1.33,4.55,6.59,5.05,10.57c.68,5.47,0,11.23-2.71,16-3.1,5.41-8.48,9-13,13.34a52,52,0,0,0-8.47,10.56,30.09,30.09,0,0,1-3.86,5.64,7.33,7.33,0,0,1-6.13,2.45c-1.92-.31-3.5-1.65-5-2.93-1.85-1.62-6.84-4.51-7-7.08-.12-2.08,3.77-6.8,4.72-8.75A99.19,99.19,0,0,0,386.07,243.11Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#fbbebe"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M514.7,667.07c-4.6,8.49-9.64,16.76-13.74,25.5-2.39,5.11-4.46,10.37-7.12,15.34-2.9,5.42-6.47,10.46-9.5,15.82-7.63,13.51-11.88,28.75-15.81,43.76a87.17,87.17,0,0,1-31.16-11c-.65-.38-1.27-.78-1.87-1.21a22.24,22.24,0,0,1-6.29-6.93c3.63-13.73,7.36-27.69,14.75-39.82,2.41-4,5.17-7.65,7.65-11.55,7.19-11.3,8.67-25.56,16.88-36.14a6.21,6.21,0,0,0,0-7.36c-.95-1.23-2.46-2.4-2.18-3.92.21-1.11,1.37-2.11.92-3.15-.21-.5-.72-.77-1.12-1.13-1.4-1.29-1.22-3.49-1.34-5.38-.31-4.79-3.18-9-6-12.91a8,8,0,0,0-2.19-2.36c-.74-.45-1.62-.65-2.36-1.11-2.62-1.64-2.43-5.46-3.69-8.29-1.64-3.73-5.77-5.63-8.48-8.66-3.45-3.85-4.33-9.22-8-12.59a10,10,0,0,0-1.19-1c1.82,5.65,2,11.68,2.13,17.63.35,20.39-4.75,41.5-2.36,61.76,1.88,16.07-8,32.11-22.05,40.14-5.4,3.08-11.3,5.14-17.16,7.23-8.79,3.11-17.55,6.32-26.17,9.92q-9.14,3.78-18,8.15a227.43,227.43,0,0,0-21.29,11.78c-8.46,5.38-16.92,10.85-22.93,18.88-5.81-.16-11.13-3.65-14.81-8.15s-6-10-8.11-15.36c-1.87-4.65-3.71-9.45-3.85-14.46A2.86,2.86,0,0,1,280,728l40.17-21.29,7.51-4c16.45-8.73,33.49-16.8,49.94-25.52,1.11.33,2-.93,2.33-2s.56-2.45,1.6-2.93c.52-.25,1.2-.24,1.59-.68a1.9,1.9,0,0,0,.28-1.33c-.53-8-6.27-15.27-5.12-23.16.49-3.36,2.22-6.67,1.47-10-.53-2.29-2.17-4.14-3.06-6.31-2-4.85,0-10.69-2.16-15.44a35.7,35.7,0,0,1-2.9-9.84,66.83,66.83,0,0,0-6.14-19.5,35.55,35.55,0,0,0-5.65-8.55c-1.21-1.3-2.57-2.46-3.72-3.81-3.49-4.14-4.78-9.66-5.77-15-1.8-9.67-3-19.7-.8-29.28.76-3.27,1.92-6.51,1.87-9.86-.05-4.43-2-9.6,1.08-12.8a9.94,9.94,0,0,1,4.5-2.31c7.08-2.11,14.45-3.07,21.78-4L412.35,496c3.84-.51,7.77-1,11.16-2.91,4.55-2.51,7.57-7.16,9.42-12,5.89,4.3,8.09,12.31,12.79,17.86,2.29,2.71,5.12,4.9,7.63,7.39a85.62,85.62,0,0,1,8.41,10.37c7,9.61,14,19.29,19,30.07,2.61,5.6,4.63,11.44,6.71,17.25,8.19,22.87,21.54,44.58,27.08,68.22,1.36,5.78,4.89,11,5.44,16.91C520.61,655.43,517.71,661.49,514.7,667.07Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M339,477.13a10.3,10.3,0,0,0-1.24,4.95c.75-3.7,5.84-5.75,6.17-9.41.15-1.69-.16-1.61-1.2-.72C341.15,473.32,340.46,475.68,339,477.13Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M354.51,488.37a7.63,7.63,0,0,0-2.32,3.43,8.7,8.7,0,0,0-.47,6c.75-.35,1-1.27,1.23-2.07a14.44,14.44,0,0,1,1.59-3.54c.6-1,3.37-3.23,3.36-4.28C357.87,486.3,355.25,487.8,354.51,488.37Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M356.3,364.49a37.74,37.74,0,0,1-7.72,5.14c-7.25,3.67-15.28,5.61-22.58,9.17a111.8,111.8,0,0,0-10.48,6.11l-21.7,13.75a23.27,23.27,0,0,0-4.78,3.63c-2.61,2.78-2.6,7.67-5,10.65s-6.54,4.66-10.53,4.86a34.21,34.21,0,0,1-11.73-2,60.9,60.9,0,0,1-6.7-2.44,31.57,31.57,0,0,1-6.44-3.68c-3.87-2.92-7-7.17-7.58-12a23.7,23.7,0,0,1,1.29-9.78,37.53,37.53,0,0,1,2.31-5.93,23.86,23.86,0,0,1,1.84-3.12c5-7.06,13.77-10.37,22.26-12,4.46-.87,9-1.4,13.51-2.16a49.15,49.15,0,0,0,6.55,1c6.89.49,13.71-1.36,20.37-3.2l7.26-2c3.64-1,5.46-5.4,9.14-6.17a12.83,12.83,0,0,1,4.93.25c7.47,1.42,15,3.25,21.57,7.05A35.54,35.54,0,0,1,356.3,364.49Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M374,267.35c-.93,8.85-8.4,15.35-13,23-2.21,3.71-3.76,7.78-5.75,11.62a115.18,115.18,0,0,1-7.6,12.1l-8.13,11.8c-4.78,6.94-9.61,13.94-15.72,19.75-10.65,1.81-19.58,9.72-29.68,13.56-8.08,3.07-16.89,3.49-25.37,5.14s-17.27,5-22.25,12a31.41,31.41,0,0,0-4.16,9,23.32,23.32,0,0,0-1.28,9.77c.61,4.82,3.7,9.06,7.57,12s8.5,4.68,13.14,6.12a34.45,34.45,0,0,0,11.73,2c4-.2,8.06-1.74,10.54-4.86s2.36-7.87,5-10.65a23.34,23.34,0,0,1,4.79-3.63l21.7-13.75A111.8,111.8,0,0,1,326,376.25c7.3-3.57,15.33-5.5,22.58-9.17s14-9.73,15.45-17.73c4.42-24.58,21.43-45.3,36-65.6-.48-.1-.33-1.19-.51-1.65-1.86-4.82-6-8.45-10.66-10.74S379,268.43,374,267.35Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#6c63ff"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M297.28,267.53a13.56,13.56,0,0,0-1.51-7.72c-2.41-4-7.46-5.41-12-6.35q-6.59-1.35-13.24-2.32c-3.64-.53-7.37-1-10.95-.18-5,1.09-9.07,4.4-13.7,6.46-5.47,2.44-11.53,3.08-17.37,4.43s-11.82,3.64-15.48,8.38c-2.78,3.6-3.89,8.2-4.72,12.68-6.93,37.39.53,75.74,1.95,113.74.55,14.79-.12,30.6-8.57,42.75l24.61-.65c6.3-.16,13.07-.49,18-4.38,4.36-3.42,6.42-8.93,8.29-14.15,1.47-4.11,2.95-8.3,3.14-12.66.39-8.93-4.68-17.7-3-26.49,1.23-6.56,6-11.86,11.11-16.17s10.79-8,14.92-13.28c7.38-9.33,8.79-22.08,7.87-33.93-.55-7.05-1.81-14.1-1.2-21.15.46-5.27,2.13-10.71,5.58-14.82C294.89,277.06,296.94,274.14,297.28,267.53Z",
      "transform": "translate(-95.23 -74.8)",
      "fill": "#3f3d56"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M295.77,259.81c-2.37-3.94-7.29-5.36-11.8-6.3a11.63,11.63,0,0,1,5.84,4.6,13.48,13.48,0,0,1,1.51,7.72c-.34,6.6-2.39,9.52-6.31,14.19-3.45,4.11-5.12,9.54-5.58,14.82-.61,7.05.65,14.1,1.2,21.15.92,11.85-.49,24.6-7.86,33.93-4.14,5.24-9.82,9-14.92,13.28s-9.89,9.61-11.12,16.17c-1.65,8.79,3.42,17.56,3,26.49-.19,4.36-1.68,8.55-3.15,12.66-1.86,5.22-3.93,10.72-8.29,14.14-5,3.89-11.73,4.23-18,4.39l-17.43.46c-.39.64-.79,1.28-1.22,1.89l24.61-.65c6.3-.16,13.07-.49,18-4.38,4.36-3.42,6.42-8.93,8.29-14.15,1.47-4.11,2.95-8.3,3.14-12.66.39-8.93-4.68-17.7-3-26.49,1.23-6.56,6-11.86,11.11-16.17s10.79-8,14.92-13.28c7.38-9.33,8.79-22.08,7.87-33.93-.55-7.05-1.81-14.1-1.2-21.15.46-5.27,2.13-10.71,5.58-14.82,3.92-4.66,6-7.58,6.31-14.19A13.56,13.56,0,0,0,295.77,259.81Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  }), _vm._v(" "), _c('path', {
    attrs: {
      "d": "M480.67,645.18,435.5,755.33a22.24,22.24,0,0,1-6.29-6.93c3.63-13.73,7.36-27.69,14.75-39.82,2.41-4,5.17-7.65,7.65-11.55,7.19-11.3,8.67-25.56,16.88-36.14a6.21,6.21,0,0,0,0-7.36c-.95-1.23-2.46-2.4-2.18-3.92.21-1.11,1.37-2.11.92-3.15-.21-.5-.72-.77-1.12-1.13-1.4-1.29-1.22-3.49-1.34-5.38-.31-4.79-3.18-9-6-12.91a8,8,0,0,0-2.19-2.36c-.74-.45-1.62-.65-2.36-1.11-2.62-1.64-2.43-5.46-3.69-8.29-1.64-3.73-5.77-5.63-8.48-8.66-3.45-3.85-4.33-9.22-8-12.59l-.31-.78L437.26,572Z",
      "transform": "translate(-95.23 -74.8)",
      "opacity": "0.1"
    }
  })])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-33cd53a2", module.exports)
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('Form', {
    staticStyle: {
      "margin-top": "20px"
    }
  }, [_c('FormItem', [_c('Button', {
    ref: "fbBtn",
    staticClass: "pad15 fb-btn",
    staticStyle: {
      "font-size": "16px",
      "color": "#fff"
    },
    attrs: {
      "type": "primary",
      "size": "large",
      "long": ""
    },
    on: {
      "click": _vm.doFB
    }
  }, [_c('div', {
    staticClass: "wrr"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 32 32"
    }
  }, [_c('path', {
    staticClass: "st0",
    attrs: {
      "d": "M32 30c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h28c1.1 0 2 .9 2 2v213z"
    }
  }), _vm._v(" "), _c('path', {
    staticClass: "st1",
    attrs: {
      "id": "f",
      "d": "M22 32V20h4l1-5h-5v-2c0-2 1-3 3-3h2V5h-4c-3.7 0-6 2.9-6 7v3h-4v5h4v12h-178z"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "text"
  }, [_vm._v("Continue with Facebook")])])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c20cc05a", module.exports)
  }
}

/***/ })
]));
//# sourceMappingURL=0.chunk.js.map