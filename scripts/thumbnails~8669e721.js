function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequirea5ce"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequirea5ce"] = parcelRequire;
}



parcelRequire("a1TJc");
parcelRequire("h90tK");
parcelRequire("1lES0");
parcelRequire("epDfQ");
parcelRequire("ePdDe");







var $2795bb3588ef9b49$exports = {};
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */ (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof $2795bb3588ef9b49$exports === 'object' && "object" === 'object') $2795bb3588ef9b49$exports = factory();
    else if (typeof define === 'function' && define.amd) define([], factory);
    else if (typeof $2795bb3588ef9b49$exports === 'object') $2795bb3588ef9b49$exports["ClipboardJS"] = factory();
    else root["ClipboardJS"] = factory();
})($2795bb3588ef9b49$exports, function() {
    return(/******/ (function() {
        /******/ var __webpack_modules__ = {
            /***/ 686: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "default": function() {
                        return(/* binding */ clipboard);
                    }
                });
                // EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
                var tiny_emitter = __webpack_require__(279);
                var tiny_emitter_default = /*#__PURE__*/ __webpack_require__.n(tiny_emitter);
                // EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
                var listen = __webpack_require__(370);
                var listen_default = /*#__PURE__*/ __webpack_require__.n(listen);
                // EXTERNAL MODULE: ./node_modules/select/src/select.js
                var src_select = __webpack_require__(817);
                var select_default = /*#__PURE__*/ __webpack_require__.n(src_select);
                /**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */ function command(type) {
                    try {
                        return document.execCommand(type);
                    } catch (err) {
                        return false;
                    }
                }
                /**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */ var ClipboardActionCut = function ClipboardActionCut(target) {
                    var selectedText = select_default()(target);
                    command('cut');
                    return selectedText;
                };
                /* harmony default export */ var actions_cut = ClipboardActionCut;
                /**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */ function createFakeElement(value) {
                    var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
                    var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS
                    fakeElement.style.fontSize = '12pt'; // Reset box model
                    fakeElement.style.border = '0';
                    fakeElement.style.padding = '0';
                    fakeElement.style.margin = '0'; // Move element out of screen horizontally
                    fakeElement.style.position = 'absolute';
                    fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically
                    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                    fakeElement.style.top = "".concat(yPosition, "px");
                    fakeElement.setAttribute('readonly', '');
                    fakeElement.value = value;
                    return fakeElement;
                }
                /**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */ var fakeCopyAction = function fakeCopyAction(value, options) {
                    var fakeElement = createFakeElement(value);
                    options.container.appendChild(fakeElement);
                    var selectedText = select_default()(fakeElement);
                    command('copy');
                    fakeElement.remove();
                    return selectedText;
                };
                /**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */ var ClipboardActionCopy = function ClipboardActionCopy(target) {
                    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                        container: document.body
                    };
                    var selectedText = '';
                    if (typeof target === 'string') selectedText = fakeCopyAction(target, options);
                    else if (target instanceof HTMLInputElement && ![
                        'text',
                        'search',
                        'url',
                        'tel',
                        'password'
                    ].includes(target === null || target === void 0 ? void 0 : target.type)) // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
                    selectedText = fakeCopyAction(target.value, options);
                    else {
                        selectedText = select_default()(target);
                        command('copy');
                    }
                    return selectedText;
                };
                /* harmony default export */ var actions_copy = ClipboardActionCopy;
                function _typeof(obj1) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else _typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return _typeof(obj1);
                }
                /**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */ var ClipboardActionDefault = function ClipboardActionDefault() {
                    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    };
                    // Defines base properties passed from constructor.
                    var _options$action = options.action, action = _options$action === void 0 ? 'copy' : _options$action, container = options.container, target = options.target, text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.
                    if (action !== 'copy' && action !== 'cut') throw new Error('Invalid "action" value, use either "copy" or "cut"');
                     // Sets the `target` property using an element that will be have its content copied.
                    if (target !== undefined) {
                        if (target && _typeof(target) === 'object' && target.nodeType === 1) {
                            if (action === 'copy' && target.hasAttribute('disabled')) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                            if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                        } else throw new Error('Invalid "target" value, use a valid Element');
                    } // Define selection strategy based on `text` property.
                    if (text) return actions_copy(text, {
                        container: container
                    });
                     // Defines which selection strategy based on `target` property.
                    if (target) return action === 'cut' ? actions_cut(target) : actions_copy(target, {
                        container: container
                    });
                };
                /* harmony default export */ var actions_default = ClipboardActionDefault;
                function clipboard_typeof(obj2) {
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") clipboard_typeof = function _typeof(obj) {
                        return typeof obj;
                    };
                    else clipboard_typeof = function _typeof(obj) {
                        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    };
                    return clipboard_typeof(obj2);
                }
                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
                }
                function _defineProperties(target, props) {
                    for(var i = 0; i < props.length; i++){
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) _defineProperties(Constructor, staticProps);
                    return Constructor;
                }
                function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: {
                            value: subClass,
                            writable: true,
                            configurable: true
                        }
                    });
                    if (superClass) _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o1, p1) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                        o.__proto__ = p;
                        return o;
                    };
                    return _setPrototypeOf(o1, p1);
                }
                function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                        var Super = _getPrototypeOf(Derived), result;
                        if (hasNativeReflectConstruct) {
                            var NewTarget = _getPrototypeOf(this).constructor;
                            result = Reflect.construct(Super, arguments, NewTarget);
                        } else result = Super.apply(this, arguments);
                        return _possibleConstructorReturn(this, result);
                    };
                }
                function _possibleConstructorReturn(self, call) {
                    if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) return call;
                    return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return self;
                }
                function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                    if (Reflect.construct.sham) return false;
                    if (typeof Proxy === "function") return true;
                    try {
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                        }));
                        return true;
                    } catch (e) {
                        return false;
                    }
                }
                function _getPrototypeOf(o2) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                        return o.__proto__ || Object.getPrototypeOf(o);
                    };
                    return _getPrototypeOf(o2);
                }
                /**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */ function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-".concat(suffix);
                    if (!element.hasAttribute(attribute)) return;
                    return element.getAttribute(attribute);
                }
                /**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */ var Clipboard1 = /*#__PURE__*/ function(_Emitter) {
                    _inherits(Clipboard, _Emitter);
                    var _super = _createSuper(Clipboard);
                    /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */ function Clipboard(trigger, options) {
                        var _this;
                        _classCallCheck(this, Clipboard);
                        _this = _super.call(this);
                        _this.resolveOptions(options);
                        _this.listenClick(trigger);
                        return _this;
                    }
                    /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */ _createClass(Clipboard, [
                        {
                            key: "resolveOptions",
                            value: function resolveOptions() {
                                var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                                };
                                this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
                                this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
                                this.text = typeof options.text === 'function' ? options.text : this.defaultText;
                                this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
                            }
                        },
                        {
                            key: "listenClick",
                            value: function listenClick(trigger) {
                                var _this2 = this;
                                this.listener = listen_default()(trigger, 'click', function(e) {
                                    return _this2.onClick(e);
                                });
                            }
                        },
                        {
                            key: "onClick",
                            value: function onClick(e) {
                                var trigger = e.delegateTarget || e.currentTarget;
                                var action = this.action(trigger) || 'copy';
                                var text = actions_default({
                                    action: action,
                                    container: this.container,
                                    target: this.target(trigger),
                                    text: this.text(trigger)
                                }); // Fires an event based on the copy operation result.
                                this.emit(text ? 'success' : 'error', {
                                    action: action,
                                    text: text,
                                    trigger: trigger,
                                    clearSelection: function clearSelection() {
                                        if (trigger) trigger.focus();
                                        window.getSelection().removeAllRanges();
                                    }
                                });
                            }
                        },
                        {
                            key: "defaultAction",
                            value: function defaultAction(trigger) {
                                return getAttributeValue('action', trigger);
                            }
                        },
                        {
                            key: "defaultTarget",
                            value: function defaultTarget(trigger) {
                                var selector = getAttributeValue('target', trigger);
                                if (selector) return document.querySelector(selector);
                            }
                        },
                        {
                            key: "defaultText",
                            /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */ value: function defaultText(trigger) {
                                return getAttributeValue('text', trigger);
                            }
                        },
                        {
                            key: "destroy",
                            value: function destroy() {
                                this.listener.destroy();
                            }
                        }
                    ], [
                        {
                            key: "copy",
                            value: function copy(target) {
                                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                                    container: document.body
                                };
                                return actions_copy(target, options);
                            }
                        },
                        {
                            key: "cut",
                            value: function cut(target) {
                                return actions_cut(target);
                            }
                        },
                        {
                            key: "isSupported",
                            value: function isSupported() {
                                var action1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [
                                    'copy',
                                    'cut'
                                ];
                                var actions = typeof action1 === 'string' ? [
                                    action1
                                ] : action1;
                                var support = !!document.queryCommandSupported;
                                actions.forEach(function(action) {
                                    support = support && !!document.queryCommandSupported(action);
                                });
                                return support;
                            }
                        }
                    ]);
                    return Clipboard;
                }(tiny_emitter_default());
                /* harmony default export */ var clipboard = Clipboard1;
            /***/ },
            /***/ 828: function(module) {
                var DOCUMENT_NODE_TYPE = 9;
                /**
 * A polyfill for Element.matches()
 */ if (typeof Element !== 'undefined' && !Element.prototype.matches) {
                    var proto = Element.prototype;
                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                }
                /**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */ function closest(element, selector) {
                    while(element && element.nodeType !== DOCUMENT_NODE_TYPE){
                        if (typeof element.matches === 'function' && element.matches(selector)) return element;
                        element = element.parentNode;
                    }
                }
                module.exports = closest;
            /***/ },
            /***/ 438: function(module, __unused_webpack_exports, __webpack_require__) {
                var closest = __webpack_require__(828);
                /**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */ function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);
                    element.addEventListener(type, listenerFn, useCapture);
                    return {
                        destroy: function() {
                            element.removeEventListener(type, listenerFn, useCapture);
                        }
                    };
                }
                /**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */ function delegate(elements, selector, type, callback, useCapture) {
                    // Handle the regular Element usage
                    if (typeof elements.addEventListener === 'function') return _delegate.apply(null, arguments);
                    // Handle Element-less usage, it defaults to global delegation
                    if (typeof type === 'function') // Use `document` as the first parameter, then apply arguments
                    // This is a short way to .unshift `arguments` without running into deoptimizations
                    return _delegate.bind(null, document).apply(null, arguments);
                    // Handle Selector-based usage
                    if (typeof elements === 'string') elements = document.querySelectorAll(elements);
                    // Handle Array-like based usage
                    return Array.prototype.map.call(elements, function(element) {
                        return _delegate(element, selector, type, callback, useCapture);
                    });
                }
                /**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */ function listener(element, selector, type, callback) {
                    return function(e) {
                        e.delegateTarget = closest(e.target, selector);
                        if (e.delegateTarget) callback.call(element, e);
                    };
                }
                module.exports = delegate;
            /***/ },
            /***/ 879: function(__unused_webpack_module, exports) {
                /**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.node = function(value) {
                    return value !== undefined && value instanceof HTMLElement && value.nodeType === 1;
                };
                /**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.nodeList = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return value !== undefined && (type === '[object NodeList]' || type === '[object HTMLCollection]') && 'length' in value && (value.length === 0 || exports.node(value[0]));
                };
                /**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.string = function(value) {
                    return typeof value === 'string' || value instanceof String;
                };
                /**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */ exports.fn = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return type === '[object Function]';
                };
            /***/ },
            /***/ 370: function(module, __unused_webpack_exports, __webpack_require__) {
                var is = __webpack_require__(879);
                var delegate = __webpack_require__(438);
                /**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listen(target, type, callback) {
                    if (!target && !type && !callback) throw new Error('Missing required arguments');
                    if (!is.string(type)) throw new TypeError('Second argument must be a String');
                    if (!is.fn(callback)) throw new TypeError('Third argument must be a Function');
                    if (is.node(target)) return listenNode(target, type, callback);
                    else if (is.nodeList(target)) return listenNodeList(target, type, callback);
                    else if (is.string(target)) return listenSelector(target, type, callback);
                    else throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
                }
                /**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);
                    return {
                        destroy: function() {
                            node.removeEventListener(type, callback);
                        }
                    };
                }
                /**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function(node) {
                        node.addEventListener(type, callback);
                    });
                    return {
                        destroy: function() {
                            Array.prototype.forEach.call(nodeList, function(node) {
                                node.removeEventListener(type, callback);
                            });
                        }
                    };
                }
                /**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */ function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                }
                module.exports = listen;
            /***/ },
            /***/ 817: function(module) {
                function select(element) {
                    var selectedText;
                    if (element.nodeName === 'SELECT') {
                        element.focus();
                        selectedText = element.value;
                    } else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
                        var isReadOnly = element.hasAttribute('readonly');
                        if (!isReadOnly) element.setAttribute('readonly', '');
                        element.select();
                        element.setSelectionRange(0, element.value.length);
                        if (!isReadOnly) element.removeAttribute('readonly');
                        selectedText = element.value;
                    } else {
                        if (element.hasAttribute('contenteditable')) element.focus();
                        var selection = window.getSelection();
                        var range = document.createRange();
                        range.selectNodeContents(element);
                        selection.removeAllRanges();
                        selection.addRange(range);
                        selectedText = selection.toString();
                    }
                    return selectedText;
                }
                module.exports = select;
            /***/ },
            /***/ 279: function(module) {
                function E() {
                // Keep this empty so it's easier to inherit from
                // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
                }
                E.prototype = {
                    on: function(name, callback, ctx) {
                        var e = this.e || (this.e = {
                        });
                        (e[name] || (e[name] = [])).push({
                            fn: callback,
                            ctx: ctx
                        });
                        return this;
                    },
                    once: function(name, callback, ctx) {
                        var self = this;
                        function listener() {
                            self.off(name, listener);
                            callback.apply(ctx, arguments);
                        }
                        listener._ = callback;
                        return this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                        var data = [].slice.call(arguments, 1);
                        var evtArr = ((this.e || (this.e = {
                        }))[name] || []).slice();
                        var i = 0;
                        var len = evtArr.length;
                        for(; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
                        return this;
                    },
                    off: function(name, callback) {
                        var e = this.e || (this.e = {
                        });
                        var evts = e[name];
                        var liveEvents = [];
                        if (evts && callback) {
                            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
                        }
                        // Remove event from queue to prevent memory leak
                        // Suggested by https://github.com/lazd
                        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
                        liveEvents.length ? e[name] = liveEvents : delete e[name];
                        return this;
                    }
                };
                module.exports = E;
                module.exports.TinyEmitter = E;
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {
        };
        /******/ /******/ // The require function
        /******/ function __webpack_require__1(moduleId) {
            /******/ // Check if module is in cache
            /******/ if (__webpack_module_cache__[moduleId]) /******/ return __webpack_module_cache__[moduleId].exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {
                }
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__1);
            /******/ /******/ // Return the exports of the module
            /******/ return module.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__1.n = function(module) {
                /******/ var getter = module && module.__esModule ? /******/ function() {
                    return module['default'];
                } : /******/ function() {
                    return module;
                };
                /******/ __webpack_require__1.d(getter, {
                    a: getter
                });
                /******/ return getter;
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__1.d = function(exports, definition) {
                /******/ for(var key in definition)/******/ if (__webpack_require__1.o(definition, key) && !__webpack_require__1.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
            /******/ __webpack_require__1.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        /******/ }();
        /******/ /************************************************************************/ /******/ // module exports must be returned from runtime so entry inlining is disabled
        /******/ // startup
        /******/ // Load entry module and return exports
        /******/ return __webpack_require__1(686);
    /******/ })().default);
});


class $e687968641cb4de4$var$LinkDropdown {
    constructor({ dropdownClass: dropdownClass ,  }){
        this.select = document.querySelector(`.${dropdownClass}`);
        this.optionsContainer = this.select.querySelector('.select__options');
        this.options = this.select.querySelectorAll('.select__option');
        this.optionItemsHeight = this.options.length * 66 > 300 ? 300 : this.select.querySelectorAll('.select__option').length * 66;
        this.value = this.select.querySelector('.select__value');
    }
    init = ()=>{
        this.select.addEventListener('click', this.toggleSelect);
        // this.value.textContent = this.options[0].textContent;
        // this.optionsContainer.addEventListener('click', this.changeSelect);
        // this.input.value = this.options[0].value;
        this.optionsContainer.style.height = 0;
        this.optionsContainer.style.overflow = this.optionItemsHeight < 300 ? 'hidden' : 'scroll';
    };
    toggleSelect = ()=>{
        if (this.select.classList.contains('opened')) this.closeSelect();
        else this.openSelect();
    };
    openSelect = ()=>{
        this.select.classList.add('opened');
        setTimeout(()=>{
            this.optionsContainer.style.height = `${this.optionItemsHeight}px`;
        }, 0);
    };
    closeSelect = ()=>{
        this.optionsContainer.style.height = 0;
        setTimeout(()=>{
            this.select.classList.remove('opened');
        }, 300);
    };
}
var $e687968641cb4de4$export$2e2bcd8739ae039 = $e687968641cb4de4$var$LinkDropdown;


class $3525b8e7e46e857b$var$ThumbTabs {
    constructor({ containerSelector: containerSelector , btnSelector: btnSelector , tabSelector: tabSelector , imageSelector: imageSelector , contentBtnSelector: contentBtnSelector , linkSelector: linkSelector ,  }){
        this.btnSelector = btnSelector;
        this.contentBtnSelector = contentBtnSelector;
        this.container = document.querySelector(containerSelector);
        this.buttons = Array.from(document.querySelectorAll(btnSelector));
        this.tabs = Array.from(document.querySelectorAll(tabSelector));
        this.image = document.querySelector(imageSelector);
        this.link = document.querySelector(linkSelector);
        this.contentCards = Array.from(document.querySelectorAll(contentBtnSelector));
    }
    init = ()=>{
        this.addUniqueId(this.tabs, 'thumb-tab');
        this.addUniqueId(this.buttons, 'thumb-button');
        this.container.addEventListener('click', (event)=>{
            if (event.target.closest(this.btnSelector)) {
                const index = event.target.closest(this.btnSelector).id.split('--')[1];
                this.addActiveClass(this.tabs, +index);
                this.addActiveClass(this.buttons, +index);
                this.openFirstImage(+index);
            }
            if (event.target.closest(this.contentBtnSelector)) {
                const trigger = event.target.closest(this.contentBtnSelector);
                this.setActiveContentCard(trigger);
                const url = trigger.getAttribute('data-src');
                const linkUrl = trigger.getAttribute('data-link');
                this.openImage(url, linkUrl);
            }
        });
        this.addActiveClass(this.buttons, 0);
        this.addActiveClass(this.tabs, 0);
        this.openFirstImage(0);
    };
    addUniqueId = (elems, prefix)=>{
        elems.forEach((el, index)=>el.setAttribute('id', `${prefix}--${index}`)
        );
    };
    addActiveClass = (elems, targetIndex)=>{
        elems.forEach((elem, index)=>{
            if (targetIndex !== index) elem.classList.remove('js--active');
            else elem.classList.add('js--active');
        });
    };
    openFirstImage = (indexOfContainer)=>{
        const buttons = Array.from(this.tabs[indexOfContainer].querySelectorAll(this.contentBtnSelector));
        this.setActiveContentCard(buttons[0]);
        buttons[0].classList.add('active');
        this.openImage(buttons[0].getAttribute('data-src'), buttons[0].getAttribute('data-link'));
    };
    openImage = (url, linkUrl)=>{
        console.log(linkUrl);
        this.image.setAttribute('src', url);
        this.link.setAttribute('href', linkUrl);
    };
    setActiveContentCard = (elem)=>{
        this.contentCards.forEach((el)=>el.classList.remove('active')
        );
        elem.classList.add('active');
    };
}
var $3525b8e7e46e857b$export$2e2bcd8739ae039 = $3525b8e7e46e857b$var$ThumbTabs;


const $742a46b5bea12234$var$linkDropdown = new $e687968641cb4de4$export$2e2bcd8739ae039({
    dropdownClass: 'thumbnails__form-select'
});
$742a46b5bea12234$var$linkDropdown.init();
const $742a46b5bea12234$var$thumbTabs = new $3525b8e7e46e857b$export$2e2bcd8739ae039({
    containerSelector: '.thumbnails__form',
    btnSelector: '.thumbnails__form-button',
    tabSelector: '.thumbnails__form-content',
    imageSelector: '.thumbnails__preview-image',
    contentBtnSelector: '.thumbnails__content-card',
    linkSelector: '.thumbnails__preview-link'
});
$742a46b5bea12234$var$thumbTabs.init();
const $742a46b5bea12234$var$clipboard = new (/*@__PURE__*/$parcel$interopDefault($2795bb3588ef9b49$exports))('.clipboard');
const $742a46b5bea12234$var$defaultMessage = document.querySelector('.thumbnails__copy-button-text.default');
const $742a46b5bea12234$var$successMessage = document.querySelector('.thumbnails__copy-button-text.success');
const $742a46b5bea12234$var$errorMessage = document.querySelector('.thumbnails__copy-button-text.error');
$742a46b5bea12234$var$clipboard.on('success', ()=>{
    console.log('success');
    $742a46b5bea12234$var$defaultMessage.classList.remove('active');
    $742a46b5bea12234$var$successMessage.classList.add('active');
    setTimeout(()=>{
        $742a46b5bea12234$var$successMessage.classList.remove('active');
        $742a46b5bea12234$var$defaultMessage.classList.add('active');
    }, 2000);
});
$742a46b5bea12234$var$clipboard.on('error', ()=>{
    console.log('error');
    $742a46b5bea12234$var$defaultMessage.classList.remove('active');
    $742a46b5bea12234$var$successMessage.classList.add('active');
    setTimeout(()=>{
        $742a46b5bea12234$var$successMessage.classList.remove('active');
        $742a46b5bea12234$var$defaultMessage.classList.add('active');
    }, 2000);
});




//# sourceMappingURL=thumbnails~8669e721.js.map
