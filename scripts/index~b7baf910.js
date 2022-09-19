function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
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
parcelRequire.register("a1TJc", function(module, exports) {
const $74d539c759b733c1$var$dropdownLinks = document.querySelectorAll('.header__navbar-link');
$74d539c759b733c1$var$dropdownLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        const dropdownList = link.nextElementSibling;
        link.classList.toggle('js--active');
        dropdownList.classList.toggle('js--active');
    });
}); // const menuToggler = document.querySelector('.header__mobile-button--burger');
 // // menuToggler.addEventListener('click', () => {
 // // 	menuToggler.classList.toggle('open');
 // // });
 //
 // const burgerMutationObserver = new MutationObserver((mutations) => {
 // 	for (let i = 0; i < mutations.length; i++) {
 // 		if (mutations[i].target.classList.contains('open')) {
 // 			document.querySelector('html').style.overflowY = 'hidden';
 // 		} else document.querySelector('html').style.overflowY = 'auto';
 // 		break;
 // 	}
 // });
 //
 // burgerMutationObserver.observe(menuToggler, {
 // 	attributes: true,
 // 	attributeOldValue: true,
 // });

});

parcelRequire.register("h90tK", function(module, exports) {


var $a9N2P = parcelRequire("a9N2P");
const $c7b3a5fcf454acb8$var$templateNav = document.querySelectorAll('.navbar__dd-list');
const $c7b3a5fcf454acb8$var$navbarLinks = document.querySelectorAll('.navbar__link');
$c7b3a5fcf454acb8$var$navbarLinks.forEach((link, i)=>{
    $a9N2P.default(link, {
        arrow: false,
        content: $c7b3a5fcf454acb8$var$templateNav[i].innerHTML,
        allowHTML: true,
        trigger: 'click',
        placement: 'bottom-start',
        interactive: true,
        appendTo: ()=>document.body
    });
});
const $c7b3a5fcf454acb8$var$buttonForScrollUp = document.querySelector('.btn-up');
const $c7b3a5fcf454acb8$var$calcScrollPixelsFromTop = ()=>{
    const numberOfScrollYPixels = window.scrollY;
    if (numberOfScrollYPixels >= 1300) $c7b3a5fcf454acb8$var$buttonForScrollUp.classList.add('js--show');
    else $c7b3a5fcf454acb8$var$buttonForScrollUp.classList.remove('js--show');
};
window.addEventListener('scroll', $c7b3a5fcf454acb8$var$calcScrollPixelsFromTop);
const $c7b3a5fcf454acb8$var$scrollUp = ()=>{
    if (!$c7b3a5fcf454acb8$var$buttonForScrollUp) return false;
    $c7b3a5fcf454acb8$var$buttonForScrollUp.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};
$c7b3a5fcf454acb8$var$scrollUp();

});
parcelRequire.register("a9N2P", function(module, exports) {

$parcel$export(module.exports, "default", () => $7650c9dce81215cc$export$2e2bcd8739ae039);

var $e2LKo = parcelRequire("e2LKo");
var $g8OEA = parcelRequire("g8OEA");
var $7650c9dce81215cc$export$c96c811c44a42da5 = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
var $7650c9dce81215cc$var$BOX_CLASS = "tippy-box";
var $7650c9dce81215cc$var$CONTENT_CLASS = "tippy-content";
var $7650c9dce81215cc$var$BACKDROP_CLASS = "tippy-backdrop";
var $7650c9dce81215cc$var$ARROW_CLASS = "tippy-arrow";
var $7650c9dce81215cc$var$SVG_ARROW_CLASS = "tippy-svg-arrow";
var $7650c9dce81215cc$var$TOUCH_OPTIONS = {
    passive: true,
    capture: true
};
var $7650c9dce81215cc$var$TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
};
function $7650c9dce81215cc$var$hasOwnProperty(obj, key) {
    return ({
    }).hasOwnProperty.call(obj, key);
}
function $7650c9dce81215cc$var$getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
        var v = value[index];
        return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }
    return value;
}
function $7650c9dce81215cc$var$isType(value, type) {
    var str = ({
    }).toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
function $7650c9dce81215cc$var$invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
}
function $7650c9dce81215cc$var$debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) return fn;
    var timeout;
    return function(arg) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            fn(arg);
        }, ms);
    };
}
function $7650c9dce81215cc$var$removeProperties(obj, keys) {
    var clone = Object.assign({
    }, obj);
    keys.forEach(function(key) {
        delete clone[key];
    });
    return clone;
}
function $7650c9dce81215cc$var$splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
}
function $7650c9dce81215cc$var$normalizeToArray(value) {
    return [].concat(value);
}
function $7650c9dce81215cc$var$pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) arr.push(value);
}
function $7650c9dce81215cc$var$unique(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}
function $7650c9dce81215cc$var$getBasePlacement(placement) {
    return placement.split('-')[0];
}
function $7650c9dce81215cc$var$arrayFrom(value) {
    return [].slice.call(value);
}
function $7650c9dce81215cc$var$removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function(acc, key) {
        if (obj[key] !== undefined) acc[key] = obj[key];
        return acc;
    }, {
    });
}
function $7650c9dce81215cc$var$div() {
    return document.createElement('div');
}
function $7650c9dce81215cc$var$isElement(value) {
    return [
        'Element',
        'Fragment'
    ].some(function(type) {
        return $7650c9dce81215cc$var$isType(value, type);
    });
}
function $7650c9dce81215cc$var$isNodeList(value) {
    return $7650c9dce81215cc$var$isType(value, 'NodeList');
}
function $7650c9dce81215cc$var$isMouseEvent(value) {
    return $7650c9dce81215cc$var$isType(value, 'MouseEvent');
}
function $7650c9dce81215cc$var$isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
}
function $7650c9dce81215cc$var$getArrayOfElements(value) {
    if ($7650c9dce81215cc$var$isElement(value)) return [
        value
    ];
    if ($7650c9dce81215cc$var$isNodeList(value)) return $7650c9dce81215cc$var$arrayFrom(value);
    if (Array.isArray(value)) return value;
    return $7650c9dce81215cc$var$arrayFrom(document.querySelectorAll(value));
}
function $7650c9dce81215cc$var$setTransitionDuration(els, value) {
    els.forEach(function(el) {
        if (el) el.style.transitionDuration = value + "ms";
    });
}
function $7650c9dce81215cc$var$setVisibilityState(els, state) {
    els.forEach(function(el) {
        if (el) el.setAttribute('data-state', state);
    });
}
function $7650c9dce81215cc$var$getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;
    var _normalizeToArray = $7650c9dce81215cc$var$normalizeToArray(elementOrElements), element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body
    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
}
function $7650c9dce81215cc$var$isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX, clientY = event.clientY;
    return popperTreeData.every(function(_ref) {
        var popperRect = _ref.popperRect, popperState = _ref.popperState, props = _ref.props;
        var interactiveBorder = props.interactiveBorder;
        var basePlacement = $7650c9dce81215cc$var$getBasePlacement(popperState.placement);
        var offsetData = popperState.modifiersData.offset;
        if (!offsetData) return true;
        var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
        var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
        var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
        var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
        var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
        var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
        var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
        var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
        return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
}
function $7650c9dce81215cc$var$updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...
    [
        'transitionend',
        'webkitTransitionEnd'
    ].forEach(function(event) {
        box[method](event, listener);
    });
}
/**
 * Compared to xxx.contains, this function works for dom structures with shadow
 * dom
 */ function $7650c9dce81215cc$var$actualContains(parent, child) {
    var target = child;
    while(target){
        var _target$getRootNode;
        if (parent.contains(target)) return true;
        target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }
    return false;
}
var $7650c9dce81215cc$var$currentInput = {
    isTouch: false
};
var $7650c9dce81215cc$var$lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */ function $7650c9dce81215cc$var$onDocumentTouchStart() {
    if ($7650c9dce81215cc$var$currentInput.isTouch) return;
    $7650c9dce81215cc$var$currentInput.isTouch = true;
    if (window.performance) document.addEventListener('mousemove', $7650c9dce81215cc$var$onDocumentMouseMove);
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */ function $7650c9dce81215cc$var$onDocumentMouseMove() {
    var now = performance.now();
    if (now - $7650c9dce81215cc$var$lastMouseMoveTime < 20) {
        $7650c9dce81215cc$var$currentInput.isTouch = false;
        document.removeEventListener('mousemove', $7650c9dce81215cc$var$onDocumentMouseMove);
    }
    $7650c9dce81215cc$var$lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */ function $7650c9dce81215cc$var$onWindowBlur() {
    var activeElement = document.activeElement;
    if ($7650c9dce81215cc$var$isReferenceElement(activeElement)) {
        var instance = activeElement._tippy;
        if (activeElement.blur && !instance.state.isVisible) activeElement.blur();
    }
}
function $7650c9dce81215cc$var$bindGlobalEventListeners() {
    document.addEventListener('touchstart', $7650c9dce81215cc$var$onDocumentTouchStart, $7650c9dce81215cc$var$TOUCH_OPTIONS);
    window.addEventListener('blur', $7650c9dce81215cc$var$onWindowBlur);
}
var $7650c9dce81215cc$var$isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var $7650c9dce81215cc$var$isIE11 = $7650c9dce81215cc$var$isBrowser ? !!window.msCrypto : false;
function $7650c9dce81215cc$var$createMemoryLeakWarning(method) {
    var txt = method === 'destroy' ? 'n already-' : ' ';
    return [
        method + "() was called on a" + txt + "destroyed instance. This is a no-op but",
        'indicates a potential memory leak.'
    ].join(' ');
}
function $7650c9dce81215cc$var$clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}
function $7650c9dce81215cc$var$getDevMessage(message) {
    return $7650c9dce81215cc$var$clean("\n  %ctippy.js\n\n  %c" + $7650c9dce81215cc$var$clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}
function $7650c9dce81215cc$var$getFormattedMessage(message) {
    return [
        $7650c9dce81215cc$var$getDevMessage(message),
        'color: #00C584; font-size: 1.3em; font-weight: bold;',
        'line-height: 1.5',
        'color: #a6a095;'
    ];
} // Assume warnings and errors never have the same message
var $7650c9dce81215cc$var$visitedMessages;
function $7650c9dce81215cc$var$resetVisitedMessages() {
    $7650c9dce81215cc$var$visitedMessages = new Set();
}
function $7650c9dce81215cc$var$warnWhen(condition, message) {
    if (condition && !$7650c9dce81215cc$var$visitedMessages.has(message)) {
        var _console;
        $7650c9dce81215cc$var$visitedMessages.add(message);
        (_console = console).warn.apply(_console, $7650c9dce81215cc$var$getFormattedMessage(message));
    }
}
function $7650c9dce81215cc$var$errorWhen(condition, message) {
    if (condition && !$7650c9dce81215cc$var$visitedMessages.has(message)) {
        var _console2;
        $7650c9dce81215cc$var$visitedMessages.add(message);
        (_console2 = console).error.apply(_console2, $7650c9dce81215cc$var$getFormattedMessage(message));
    }
}
function $7650c9dce81215cc$var$validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    $7650c9dce81215cc$var$errorWhen(didPassFalsyValue, [
        'tippy() was passed',
        '`' + String(targets) + '`',
        'as its targets (first) argument. Valid types are: String, Element,',
        'Element[], or NodeList.'
    ].join(' '));
    $7650c9dce81215cc$var$errorWhen(didPassPlainObject, [
        'tippy() was passed a plain object which is not supported as an argument',
        'for virtual positioning. Use props.getReferenceClientRect instead.'
    ].join(' '));
}
var $7650c9dce81215cc$var$pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
};
var $7650c9dce81215cc$var$renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
};
var $7650c9dce81215cc$var$defaultProps = Object.assign({
    appendTo: $7650c9dce81215cc$var$TIPPY_DEFAULT_APPEND_TO,
    aria: {
        content: 'auto',
        expanded: 'auto'
    },
    delay: 0,
    duration: [
        300,
        250
    ],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [
        0,
        10
    ],
    onAfterUpdate: function onAfterUpdate() {
    },
    onBeforeUpdate: function onBeforeUpdate() {
    },
    onCreate: function onCreate() {
    },
    onDestroy: function onDestroy() {
    },
    onHidden: function onHidden() {
    },
    onHide: function onHide() {
    },
    onMount: function onMount() {
    },
    onShow: function onShow() {
    },
    onShown: function onShown() {
    },
    onTrigger: function onTrigger() {
    },
    onUntrigger: function onUntrigger() {
    },
    onClickOutside: function onClickOutside() {
    },
    placement: 'top',
    plugins: [],
    popperOptions: {
    },
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
}, $7650c9dce81215cc$var$pluginProps, $7650c9dce81215cc$var$renderProps);
var $7650c9dce81215cc$var$defaultKeys = Object.keys($7650c9dce81215cc$var$defaultProps);
var $7650c9dce81215cc$var$setDefaultProps = function setDefaultProps(partialProps) {
    var keys = Object.keys(partialProps);
    keys.forEach(function(key) {
        $7650c9dce81215cc$var$defaultProps[key] = partialProps[key];
    });
};
function $7650c9dce81215cc$var$getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function(acc, plugin) {
        var name = plugin.name, defaultValue = plugin.defaultValue;
        if (name) {
            var _name;
            acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = $7650c9dce81215cc$var$defaultProps[name]) != null ? _name : defaultValue;
        }
        return acc;
    }, {
    });
    return Object.assign({
    }, passedProps, pluginProps);
}
function $7650c9dce81215cc$var$getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys($7650c9dce81215cc$var$getExtendedPassedProps(Object.assign({
    }, $7650c9dce81215cc$var$defaultProps, {
        plugins: plugins
    }))) : $7650c9dce81215cc$var$defaultKeys;
    var props = propKeys.reduce(function(acc, key) {
        var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();
        if (!valueAsString) return acc;
        if (key === 'content') acc[key] = valueAsString;
        else try {
            acc[key] = JSON.parse(valueAsString);
        } catch (e) {
            acc[key] = valueAsString;
        }
        return acc;
    }, {
    });
    return props;
}
function $7650c9dce81215cc$var$evaluateProps(reference, props) {
    var out = Object.assign({
    }, props, {
        content: $7650c9dce81215cc$var$invokeWithArgsOrReturn(props.content, [
            reference
        ])
    }, props.ignoreAttributes ? {
    } : $7650c9dce81215cc$var$getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({
    }, $7650c9dce81215cc$var$defaultProps.aria, out.aria);
    out.aria = {
        expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
        content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
}
function $7650c9dce81215cc$var$validateProps(partialProps, plugins) {
    if (partialProps === void 0) partialProps = {
    };
    if (plugins === void 0) plugins = [];
    var keys = Object.keys(partialProps);
    keys.forEach(function(prop) {
        var nonPluginProps = $7650c9dce81215cc$var$removeProperties($7650c9dce81215cc$var$defaultProps, Object.keys($7650c9dce81215cc$var$pluginProps));
        var didPassUnknownProp = !$7650c9dce81215cc$var$hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`
        if (didPassUnknownProp) didPassUnknownProp = plugins.filter(function(plugin) {
            return plugin.name === prop;
        }).length === 0;
        $7650c9dce81215cc$var$warnWhen(didPassUnknownProp, [
            "`" + prop + "`",
            "is not a valid prop. You may have spelled it incorrectly, or if it's",
            'a plugin, forgot to pass it in an array as props.plugins.',
            '\n\n',
            'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n',
            'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'
        ].join(' '));
    });
}
var $7650c9dce81215cc$var$innerHTML = function innerHTML() {
    return 'innerHTML';
};
function $7650c9dce81215cc$var$dangerouslySetInnerHTML(element, html) {
    element[$7650c9dce81215cc$var$innerHTML()] = html;
}
function $7650c9dce81215cc$var$createArrowElement(value) {
    var arrow = $7650c9dce81215cc$var$div();
    if (value === true) arrow.className = $7650c9dce81215cc$var$ARROW_CLASS;
    else {
        arrow.className = $7650c9dce81215cc$var$SVG_ARROW_CLASS;
        if ($7650c9dce81215cc$var$isElement(value)) arrow.appendChild(value);
        else $7650c9dce81215cc$var$dangerouslySetInnerHTML(arrow, value);
    }
    return arrow;
}
function $7650c9dce81215cc$var$setContent(content, props) {
    if ($7650c9dce81215cc$var$isElement(props.content)) {
        $7650c9dce81215cc$var$dangerouslySetInnerHTML(content, '');
        content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
        if (props.allowHTML) $7650c9dce81215cc$var$dangerouslySetInnerHTML(content, props.content);
        else content.textContent = props.content;
    }
}
function $7650c9dce81215cc$var$getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = $7650c9dce81215cc$var$arrayFrom(box.children);
    return {
        box: box,
        content: boxChildren.find(function(node) {
            return node.classList.contains($7650c9dce81215cc$var$CONTENT_CLASS);
        }),
        arrow: boxChildren.find(function(node) {
            return node.classList.contains($7650c9dce81215cc$var$ARROW_CLASS) || node.classList.contains($7650c9dce81215cc$var$SVG_ARROW_CLASS);
        }),
        backdrop: boxChildren.find(function(node) {
            return node.classList.contains($7650c9dce81215cc$var$BACKDROP_CLASS);
        })
    };
}
function $7650c9dce81215cc$var$render(instance) {
    var popper = $7650c9dce81215cc$var$div();
    var box1 = $7650c9dce81215cc$var$div();
    box1.className = $7650c9dce81215cc$var$BOX_CLASS;
    box1.setAttribute('data-state', 'hidden');
    box1.setAttribute('tabindex', '-1');
    var content1 = $7650c9dce81215cc$var$div();
    content1.className = $7650c9dce81215cc$var$CONTENT_CLASS;
    content1.setAttribute('data-state', 'hidden');
    $7650c9dce81215cc$var$setContent(content1, instance.props);
    popper.appendChild(box1);
    box1.appendChild(content1);
    onUpdate(instance.props, instance.props);
    function onUpdate(prevProps, nextProps) {
        var _getChildren = $7650c9dce81215cc$var$getChildren(popper), box = _getChildren.box, content = _getChildren.content, arrow = _getChildren.arrow;
        if (nextProps.theme) box.setAttribute('data-theme', nextProps.theme);
        else box.removeAttribute('data-theme');
        if (typeof nextProps.animation === 'string') box.setAttribute('data-animation', nextProps.animation);
        else box.removeAttribute('data-animation');
        if (nextProps.inertia) box.setAttribute('data-inertia', '');
        else box.removeAttribute('data-inertia');
        box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;
        if (nextProps.role) box.setAttribute('role', nextProps.role);
        else box.removeAttribute('role');
        if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) $7650c9dce81215cc$var$setContent(content, instance.props);
        if (nextProps.arrow) {
            if (!arrow) box.appendChild($7650c9dce81215cc$var$createArrowElement(nextProps.arrow));
            else if (prevProps.arrow !== nextProps.arrow) {
                box.removeChild(arrow);
                box.appendChild($7650c9dce81215cc$var$createArrowElement(nextProps.arrow));
            }
        } else if (arrow) box.removeChild(arrow);
    }
    return {
        popper: popper,
        onUpdate: onUpdate
    };
} // Runtime check to identify if the render function is the default one; this
// way we can apply default CSS transitions logic and it can be tree-shaken away
$7650c9dce81215cc$var$render.$$tippy = true;
var $7650c9dce81215cc$var$idCounter = 1;
var $7650c9dce81215cc$var$mouseMoveListeners = []; // Used by `hideAll()`
var $7650c9dce81215cc$var$mountedInstances = [];
function $7650c9dce81215cc$var$createTippy(reference, passedProps) {
    var props = $7650c9dce81215cc$var$evaluateProps(reference, Object.assign({
    }, $7650c9dce81215cc$var$defaultProps, $7650c9dce81215cc$var$getExtendedPassedProps($7650c9dce81215cc$var$removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================
    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = $7650c9dce81215cc$var$debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================
    var id1 = $7650c9dce81215cc$var$idCounter++;
    var popperInstance = null;
    var plugins = $7650c9dce81215cc$var$unique(props.plugins);
    var state1 = {
        // Is the instance currently enabled?
        isEnabled: true,
        // Is the tippy currently showing and not transitioning out?
        isVisible: false,
        // Has the instance been destroyed?
        isDestroyed: false,
        // Is the tippy currently mounted to the DOM?
        isMounted: false,
        // Has the tippy finished transitioning in?
        isShown: false
    };
    var instance1 = {
        // properties
        id: id1,
        reference: reference,
        popper: $7650c9dce81215cc$var$div(),
        popperInstance: popperInstance,
        props: props,
        state: state1,
        plugins: plugins,
        // methods
        clearDelayTimeouts: clearDelayTimeouts,
        setProps: setProps,
        setContent: setContent,
        show: show,
        hide: hide,
        hideWithInteractivity: hideWithInteractivity,
        enable: enable,
        disable: disable,
        unmount: unmount,
        destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser
    /* istanbul ignore if */ if (!props.render) return instance1;
     // ===========================================================================
    // Initial mutations
    // ===========================================================================
    var _props$render = props.render(instance1), popper1 = _props$render.popper, onUpdate = _props$render.onUpdate;
    popper1.setAttribute('data-tippy-root', '');
    popper1.id = "tippy-" + instance1.id;
    instance1.popper = popper1;
    reference._tippy = instance1;
    popper1._tippy = instance1;
    var pluginsHooks = plugins.map(function(plugin) {
        return plugin.fn(instance1);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [
        instance1
    ]);
    if (props.showOnCreate) scheduleShow();
     // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding
    popper1.addEventListener('mouseenter', function() {
        if (instance1.props.interactive && instance1.state.isVisible) instance1.clearDelayTimeouts();
    });
    popper1.addEventListener('mouseleave', function() {
        if (instance1.props.interactive && instance1.props.trigger.indexOf('mouseenter') >= 0) getDocument().addEventListener('mousemove', debouncedOnMouseMove);
    });
    // 🔒 Private methods
    // ===========================================================================
    function getNormalizedTouchSettings() {
        var touch = instance1.props.touch;
        return Array.isArray(touch) ? touch : [
            touch,
            0
        ];
    }
    function getIsCustomTouchBehavior() {
        return getNormalizedTouchSettings()[0] === 'hold';
    }
    function getIsDefaultRenderFn() {
        var _instance$props$rende;
        // @ts-ignore
        return !!((_instance$props$rende = instance1.props.render) != null && _instance$props$rende.$$tippy);
    }
    function getCurrentTarget() {
        return currentTarget || reference;
    }
    function getDocument() {
        var parent = getCurrentTarget().parentNode;
        return parent ? $7650c9dce81215cc$var$getOwnerDocument(parent) : document;
    }
    function getDefaultTemplateChildren() {
        return $7650c9dce81215cc$var$getChildren(popper1);
    }
    function getDelay(isShow) {
        // For touch or keyboard input, force `0` delay for UX reasons
        // Also if the instance is mounted but not visible (transitioning out),
        // ignore delay
        if (instance1.state.isMounted && !instance1.state.isVisible || $7650c9dce81215cc$var$currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
            return 0;
        }
        return $7650c9dce81215cc$var$getValueAtIndexOrReturn(instance1.props.delay, isShow ? 0 : 1, $7650c9dce81215cc$var$defaultProps.delay);
    }
    function handleStyles(fromHide) {
        if (fromHide === void 0) {
            fromHide = false;
        }
        popper1.style.pointerEvents = instance1.props.interactive && !fromHide ? '' : 'none';
        popper1.style.zIndex = "" + instance1.props.zIndex;
    }
    function invokeHook(hook, args, shouldInvokePropsHook) {
        if (shouldInvokePropsHook === void 0) {
            shouldInvokePropsHook = true;
        }
        pluginsHooks.forEach(function(pluginHooks) {
            if (pluginHooks[hook]) {
                pluginHooks[hook].apply(pluginHooks, args);
            }
        });
        if (shouldInvokePropsHook) {
            var _instance$props;
            (_instance$props = instance1.props)[hook].apply(_instance$props, args);
        }
    }
    function handleAriaContentAttribute() {
        var aria = instance1.props.aria;
        if (!aria.content) {
            return;
        }
        var attr = "aria-" + aria.content;
        var id = popper1.id;
        var nodes = $7650c9dce81215cc$var$normalizeToArray(instance1.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            var currentValue = node.getAttribute(attr);
            if (instance1.state.isVisible) {
                node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
            } else {
                var nextValue = currentValue && currentValue.replace(id, '').trim();
                if (nextValue) {
                    node.setAttribute(attr, nextValue);
                } else {
                    node.removeAttribute(attr);
                }
            }
        });
    }
    function handleAriaExpandedAttribute() {
        if (hasAriaExpanded || !instance1.props.aria.expanded) {
            return;
        }
        var nodes = $7650c9dce81215cc$var$normalizeToArray(instance1.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            if (instance1.props.interactive) {
                node.setAttribute('aria-expanded', instance1.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
            } else {
                node.removeAttribute('aria-expanded');
            }
        });
    }
    function cleanupInteractiveMouseListeners() {
        getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
        $7650c9dce81215cc$var$mouseMoveListeners = $7650c9dce81215cc$var$mouseMoveListeners.filter(function(listener) {
            return listener !== debouncedOnMouseMove;
        });
    }
    function onDocumentPress(event) {
        // Moved finger to scroll instead of an intentional tap outside
        if ($7650c9dce81215cc$var$currentInput.isTouch) {
            if (didTouchMove || event.type === 'mousedown') {
                return;
            }
        }
        var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper
        if (instance1.props.interactive && $7650c9dce81215cc$var$actualContains(popper1, actualTarget)) {
            return;
        } // Clicked on the event listeners target
        if ($7650c9dce81215cc$var$normalizeToArray(instance1.props.triggerTarget || reference).some(function(el) {
            return $7650c9dce81215cc$var$actualContains(el, actualTarget);
        })) {
            if ($7650c9dce81215cc$var$currentInput.isTouch) {
                return;
            }
            if (instance1.state.isVisible && instance1.props.trigger.indexOf('click') >= 0) {
                return;
            }
        } else {
            invokeHook('onClickOutside', [
                instance1,
                event
            ]);
        }
        if (instance1.props.hideOnClick === true) {
            instance1.clearDelayTimeouts();
            instance1.hide(); // `mousedown` event is fired right before `focus` if pressing the
            // currentTarget. This lets a tippy with `focus` trigger know that it
            // should not show
            didHideDueToDocumentMouseDown = true;
            setTimeout(function() {
                didHideDueToDocumentMouseDown = false;
            }); // The listener gets added in `scheduleShow()`, but this may be hiding it
            // before it shows, and hide()'s early bail-out behavior can prevent it
            // from being cleaned up
            if (!instance1.state.isMounted) {
                removeDocumentPress();
            }
        }
    }
    function onTouchMove() {
        didTouchMove = true;
    }
    function onTouchStart() {
        didTouchMove = false;
    }
    function addDocumentPress() {
        var doc = getDocument();
        doc.addEventListener('mousedown', onDocumentPress, true);
        doc.addEventListener('touchend', onDocumentPress, $7650c9dce81215cc$var$TOUCH_OPTIONS);
        doc.addEventListener('touchstart', onTouchStart, $7650c9dce81215cc$var$TOUCH_OPTIONS);
        doc.addEventListener('touchmove', onTouchMove, $7650c9dce81215cc$var$TOUCH_OPTIONS);
    }
    function removeDocumentPress() {
        var doc = getDocument();
        doc.removeEventListener('mousedown', onDocumentPress, true);
        doc.removeEventListener('touchend', onDocumentPress, $7650c9dce81215cc$var$TOUCH_OPTIONS);
        doc.removeEventListener('touchstart', onTouchStart, $7650c9dce81215cc$var$TOUCH_OPTIONS);
        doc.removeEventListener('touchmove', onTouchMove, $7650c9dce81215cc$var$TOUCH_OPTIONS);
    }
    function onTransitionedOut(duration, callback) {
        onTransitionEnd(duration, function() {
            if (!instance1.state.isVisible && popper1.parentNode && popper1.parentNode.contains(popper1)) {
                callback();
            }
        });
    }
    function onTransitionedIn(duration, callback) {
        onTransitionEnd(duration, callback);
    }
    function onTransitionEnd(duration, callback) {
        var box = getDefaultTemplateChildren().box;
        function listener(event) {
            if (event.target === box) {
                $7650c9dce81215cc$var$updateTransitionEndListener(box, 'remove', listener);
                callback();
            }
        } // Make callback synchronous if duration is 0
        // `transitionend` won't fire otherwise
        if (duration === 0) {
            return callback();
        }
        $7650c9dce81215cc$var$updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
        $7650c9dce81215cc$var$updateTransitionEndListener(box, 'add', listener);
        currentTransitionEndListener = listener;
    }
    function on(eventType, handler, options) {
        if (options === void 0) {
            options = false;
        }
        var nodes = $7650c9dce81215cc$var$normalizeToArray(instance1.props.triggerTarget || reference);
        nodes.forEach(function(node) {
            node.addEventListener(eventType, handler, options);
            listeners.push({
                node: node,
                eventType: eventType,
                handler: handler,
                options: options
            });
        });
    }
    function addListeners() {
        if (getIsCustomTouchBehavior()) {
            on('touchstart', onTrigger, {
                passive: true
            });
            on('touchend', onMouseLeave, {
                passive: true
            });
        }
        $7650c9dce81215cc$var$splitBySpaces(instance1.props.trigger).forEach(function(eventType) {
            if (eventType === 'manual') {
                return;
            }
            on(eventType, onTrigger);
            switch(eventType){
                case 'mouseenter':
                    on('mouseleave', onMouseLeave);
                    break;
                case 'focus':
                    on($7650c9dce81215cc$var$isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
                    break;
                case 'focusin':
                    on('focusout', onBlurOrFocusOut);
                    break;
            }
        });
    }
    function removeListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function onTrigger(event) {
        var _lastTriggerEvent;
        var shouldScheduleClickHide = false;
        if (!instance1.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
            return;
        }
        var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
        lastTriggerEvent = event;
        currentTarget = event.currentTarget;
        handleAriaExpandedAttribute();
        if (!instance1.state.isVisible && $7650c9dce81215cc$var$isMouseEvent(event)) {
            // If scrolling, `mouseenter` events can be fired if the cursor lands
            // over a new target, but `mousemove` events don't get fired. This
            // causes interactive tooltips to get stuck open until the cursor is
            // moved
            $7650c9dce81215cc$var$mouseMoveListeners.forEach(function(listener) {
                return listener(event);
            });
        } // Toggle show/hide when clicking click-triggered tooltips
        if (event.type === 'click' && (instance1.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance1.props.hideOnClick !== false && instance1.state.isVisible) {
            shouldScheduleClickHide = true;
        } else {
            scheduleShow(event);
        }
        if (event.type === 'click') {
            isVisibleFromClick = !shouldScheduleClickHide;
        }
        if (shouldScheduleClickHide && !wasFocused) {
            scheduleHide(event);
        }
    }
    function onMouseMove(event) {
        var target = event.target;
        var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper1.contains(target);
        if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
            return;
        }
        var popperTreeData = getNestedPopperTree().concat(popper1).map(function(popper) {
            var _instance$popperInsta;
            var instance = popper._tippy;
            var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;
            if (state) {
                return {
                    popperRect: popper.getBoundingClientRect(),
                    popperState: state,
                    props: props
                };
            }
            return null;
        }).filter(Boolean);
        if ($7650c9dce81215cc$var$isCursorOutsideInteractiveBorder(popperTreeData, event)) {
            cleanupInteractiveMouseListeners();
            scheduleHide(event);
        }
    }
    function onMouseLeave(event) {
        var shouldBail = isEventListenerStopped(event) || instance1.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;
        if (shouldBail) {
            return;
        }
        if (instance1.props.interactive) {
            instance1.hideWithInteractivity(event);
            return;
        }
        scheduleHide(event);
    }
    function onBlurOrFocusOut(event) {
        if (instance1.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
            return;
        } // If focus was moved to within the popper
        if (instance1.props.interactive && event.relatedTarget && popper1.contains(event.relatedTarget)) {
            return;
        }
        scheduleHide(event);
    }
    function isEventListenerStopped(event) {
        return $7650c9dce81215cc$var$currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }
    function createPopperInstance() {
        destroyPopperInstance();
        var _instance$props2 = instance1.props, popperOptions = _instance$props2.popperOptions, placement = _instance$props2.placement, offset = _instance$props2.offset, getReferenceClientRect = _instance$props2.getReferenceClientRect, moveTransition = _instance$props2.moveTransition;
        var arrow = getIsDefaultRenderFn() ? $7650c9dce81215cc$var$getChildren(popper1).arrow : null;
        var computedReference = getReferenceClientRect ? {
            getBoundingClientRect: getReferenceClientRect,
            contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
        } : reference;
        var tippyModifier = {
            name: '$$tippy',
            enabled: true,
            phase: 'beforeWrite',
            requires: [
                'computeStyles'
            ],
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (getIsDefaultRenderFn()) {
                    var _getDefaultTemplateCh = getDefaultTemplateChildren(), box = _getDefaultTemplateCh.box;
                    [
                        'placement',
                        'reference-hidden',
                        'escaped'
                    ].forEach(function(attr) {
                        if (attr === 'placement') {
                            box.setAttribute('data-placement', state.placement);
                        } else {
                            if (state.attributes.popper["data-popper-" + attr]) {
                                box.setAttribute("data-" + attr, '');
                            } else {
                                box.removeAttribute("data-" + attr);
                            }
                        }
                    });
                    state.attributes.popper = {
                    };
                }
            }
        };
        var modifiers = [
            {
                name: 'offset',
                options: {
                    offset: offset
                }
            },
            {
                name: 'preventOverflow',
                options: {
                    padding: {
                        top: 2,
                        bottom: 2,
                        left: 5,
                        right: 5
                    }
                }
            },
            {
                name: 'flip',
                options: {
                    padding: 5
                }
            },
            {
                name: 'computeStyles',
                options: {
                    adaptive: !moveTransition
                }
            },
            tippyModifier
        ];
        if (getIsDefaultRenderFn() && arrow) {
            modifiers.push({
                name: 'arrow',
                options: {
                    element: arrow,
                    padding: 3
                }
            });
        }
        modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
        instance1.popperInstance = $e2LKo.createPopper(computedReference, popper1, Object.assign({
        }, popperOptions, {
            placement: placement,
            onFirstUpdate: onFirstUpdate,
            modifiers: modifiers
        }));
    }
    function destroyPopperInstance() {
        if (instance1.popperInstance) {
            instance1.popperInstance.destroy();
            instance1.popperInstance = null;
        }
    }
    function mount() {
        var appendTo = instance1.props.appendTo;
        var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
        // it's directly after the reference element so the elements inside the
        // tippy can be tabbed to
        // If there are clipping issues, the user can specify a different appendTo
        // and ensure focus management is handled correctly manually
        var node = getCurrentTarget();
        if (instance1.props.interactive && appendTo === $7650c9dce81215cc$var$TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
            parentNode = node.parentNode;
        } else {
            parentNode = $7650c9dce81215cc$var$invokeWithArgsOrReturn(appendTo, [
                node
            ]);
        } // The popper element needs to exist on the DOM before its position can be
        // updated as Popper needs to read its dimensions
        if (!parentNode.contains(popper1)) {
            parentNode.appendChild(popper1);
        }
        instance1.state.isMounted = true;
        createPopperInstance();
        /* istanbul ignore else */ if (false) {
            // Accessibility check
            $7650c9dce81215cc$var$warnWhen(instance1.props.interactive && appendTo === $7650c9dce81215cc$var$defaultProps.appendTo && node.nextElementSibling !== popper1, [
                'Interactive tippy element may not be accessible via keyboard',
                'navigation because it is not directly after the reference element',
                'in the DOM source order.',
                '\n\n',
                'Using a wrapper <div> or <span> tag around the reference element',
                'solves this by creating a new parentNode context.',
                '\n\n',
                'Specifying `appendTo: document.body` silences this warning, but it',
                'assumes you are using a focus management solution to handle',
                'keyboard navigation.',
                '\n\n',
                'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'
            ].join(' '));
        }
    }
    function getNestedPopperTree() {
        return $7650c9dce81215cc$var$arrayFrom(popper1.querySelectorAll('[data-tippy-root]'));
    }
    function scheduleShow(event) {
        instance1.clearDelayTimeouts();
        if (event) {
            invokeHook('onTrigger', [
                instance1,
                event
            ]);
        }
        addDocumentPress();
        var delay = getDelay(true);
        var _getNormalizedTouchSe = getNormalizedTouchSettings(), touchValue = _getNormalizedTouchSe[0], touchDelay = _getNormalizedTouchSe[1];
        if ($7650c9dce81215cc$var$currentInput.isTouch && touchValue === 'hold' && touchDelay) {
            delay = touchDelay;
        }
        if (delay) {
            showTimeout = setTimeout(function() {
                instance1.show();
            }, delay);
        } else {
            instance1.show();
        }
    }
    function scheduleHide(event) {
        instance1.clearDelayTimeouts();
        invokeHook('onUntrigger', [
            instance1,
            event
        ]);
        if (!instance1.state.isVisible) {
            removeDocumentPress();
            return;
        } // For interactive tippies, scheduleHide is added to a document.body handler
        // from onMouseLeave so must intercept scheduled hides from mousemove/leave
        // events when trigger contains mouseenter and click, and the tip is
        // currently shown as a result of a click.
        if (instance1.props.trigger.indexOf('mouseenter') >= 0 && instance1.props.trigger.indexOf('click') >= 0 && [
            'mouseleave',
            'mousemove'
        ].indexOf(event.type) >= 0 && isVisibleFromClick) {
            return;
        }
        var delay = getDelay(false);
        if (delay) {
            hideTimeout = setTimeout(function() {
                if (instance1.state.isVisible) {
                    instance1.hide();
                }
            }, delay);
        } else {
            // Fixes a `transitionend` problem when it fires 1 frame too
            // late sometimes, we don't want hide() to be called.
            scheduleHideAnimationFrame = requestAnimationFrame(function() {
                instance1.hide();
            });
        }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================
    function enable() {
        instance1.state.isEnabled = true;
    }
    function disable() {
        // Disabling the instance should also hide it
        // https://github.com/atomiks/tippy.js-react/issues/106
        instance1.hide();
        instance1.state.isEnabled = false;
    }
    function clearDelayTimeouts() {
        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
        cancelAnimationFrame(scheduleHideAnimationFrame);
    }
    function setProps(partialProps) {
        /* istanbul ignore else */ if (false) {
            $7650c9dce81215cc$var$warnWhen(instance1.state.isDestroyed, $7650c9dce81215cc$var$createMemoryLeakWarning('setProps'));
        }
        if (instance1.state.isDestroyed) {
            return;
        }
        invokeHook('onBeforeUpdate', [
            instance1,
            partialProps
        ]);
        removeListeners();
        var prevProps = instance1.props;
        var nextProps = $7650c9dce81215cc$var$evaluateProps(reference, Object.assign({
        }, prevProps, $7650c9dce81215cc$var$removeUndefinedProps(partialProps), {
            ignoreAttributes: true
        }));
        instance1.props = nextProps;
        addListeners();
        if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
            cleanupInteractiveMouseListeners();
            debouncedOnMouseMove = $7650c9dce81215cc$var$debounce(onMouseMove, nextProps.interactiveDebounce);
        } // Ensure stale aria-expanded attributes are removed
        if (prevProps.triggerTarget && !nextProps.triggerTarget) {
            $7650c9dce81215cc$var$normalizeToArray(prevProps.triggerTarget).forEach(function(node) {
                node.removeAttribute('aria-expanded');
            });
        } else if (nextProps.triggerTarget) {
            reference.removeAttribute('aria-expanded');
        }
        handleAriaExpandedAttribute();
        handleStyles();
        if (onUpdate) {
            onUpdate(prevProps, nextProps);
        }
        if (instance1.popperInstance) {
            createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
            // and the nested ones get re-rendered first.
            // https://github.com/atomiks/tippyjs-react/issues/177
            // TODO: find a cleaner / more efficient solution(!)
            getNestedPopperTree().forEach(function(nestedPopper) {
                // React (and other UI libs likely) requires a rAF wrapper as it flushes
                // its work in one
                requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
            });
        }
        invokeHook('onAfterUpdate', [
            instance1,
            partialProps
        ]);
    }
    function setContent(content) {
        instance1.setProps({
            content: content
        });
    }
    function show() {
        /* istanbul ignore else */ if (false) {
            $7650c9dce81215cc$var$warnWhen(instance1.state.isDestroyed, $7650c9dce81215cc$var$createMemoryLeakWarning('show'));
        } // Early bail-out
        var isAlreadyVisible = instance1.state.isVisible;
        var isDestroyed = instance1.state.isDestroyed;
        var isDisabled = !instance1.state.isEnabled;
        var isTouchAndTouchDisabled = $7650c9dce81215cc$var$currentInput.isTouch && !instance1.props.touch;
        var duration = $7650c9dce81215cc$var$getValueAtIndexOrReturn(instance1.props.duration, 0, $7650c9dce81215cc$var$defaultProps.duration);
        if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
            return;
        } // Normalize `disabled` behavior across browsers.
        // Firefox allows events on disabled elements, but Chrome doesn't.
        // Using a wrapper element (i.e. <span>) is recommended.
        if (getCurrentTarget().hasAttribute('disabled')) {
            return;
        }
        invokeHook('onShow', [
            instance1
        ], false);
        if (instance1.props.onShow(instance1) === false) {
            return;
        }
        instance1.state.isVisible = true;
        if (getIsDefaultRenderFn()) {
            popper1.style.visibility = 'visible';
        }
        handleStyles();
        addDocumentPress();
        if (!instance1.state.isMounted) {
            popper1.style.transition = 'none';
        } // If flipping to the opposite side after hiding at least once, the
        // animation will use the wrong placement without resetting the duration
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh2 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh2.box, content = _getDefaultTemplateCh2.content;
            $7650c9dce81215cc$var$setTransitionDuration([
                box,
                content
            ], 0);
        }
        onFirstUpdate = function onFirstUpdate() {
            var _instance$popperInsta2;
            if (!instance1.state.isVisible || ignoreOnFirstUpdate) {
                return;
            }
            ignoreOnFirstUpdate = true; // reflow
            void popper1.offsetHeight;
            popper1.style.transition = instance1.props.moveTransition;
            if (getIsDefaultRenderFn() && instance1.props.animation) {
                var _getDefaultTemplateCh3 = getDefaultTemplateChildren(), _box = _getDefaultTemplateCh3.box, _content = _getDefaultTemplateCh3.content;
                $7650c9dce81215cc$var$setTransitionDuration([
                    _box,
                    _content
                ], duration);
                $7650c9dce81215cc$var$setVisibilityState([
                    _box,
                    _content
                ], 'visible');
            }
            handleAriaContentAttribute();
            handleAriaExpandedAttribute();
            $7650c9dce81215cc$var$pushIfUnique($7650c9dce81215cc$var$mountedInstances, instance1); // certain modifiers (e.g. `maxSize`) require a second update after the
            // popper has been positioned for the first time
            (_instance$popperInsta2 = instance1.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
            invokeHook('onMount', [
                instance1
            ]);
            if (instance1.props.animation && getIsDefaultRenderFn()) {
                onTransitionedIn(duration, function() {
                    instance1.state.isShown = true;
                    invokeHook('onShown', [
                        instance1
                    ]);
                });
            }
        };
        mount();
    }
    function hide() {
        /* istanbul ignore else */ if (false) {
            $7650c9dce81215cc$var$warnWhen(instance1.state.isDestroyed, $7650c9dce81215cc$var$createMemoryLeakWarning('hide'));
        } // Early bail-out
        var isAlreadyHidden = !instance1.state.isVisible;
        var isDestroyed = instance1.state.isDestroyed;
        var isDisabled = !instance1.state.isEnabled;
        var duration = $7650c9dce81215cc$var$getValueAtIndexOrReturn(instance1.props.duration, 1, $7650c9dce81215cc$var$defaultProps.duration);
        if (isAlreadyHidden || isDestroyed || isDisabled) {
            return;
        }
        invokeHook('onHide', [
            instance1
        ], false);
        if (instance1.props.onHide(instance1) === false) {
            return;
        }
        instance1.state.isVisible = false;
        instance1.state.isShown = false;
        ignoreOnFirstUpdate = false;
        isVisibleFromClick = false;
        if (getIsDefaultRenderFn()) {
            popper1.style.visibility = 'hidden';
        }
        cleanupInteractiveMouseListeners();
        removeDocumentPress();
        handleStyles(true);
        if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh4 = getDefaultTemplateChildren(), box = _getDefaultTemplateCh4.box, content = _getDefaultTemplateCh4.content;
            if (instance1.props.animation) {
                $7650c9dce81215cc$var$setTransitionDuration([
                    box,
                    content
                ], duration);
                $7650c9dce81215cc$var$setVisibilityState([
                    box,
                    content
                ], 'hidden');
            }
        }
        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        if (instance1.props.animation) {
            if (getIsDefaultRenderFn()) {
                onTransitionedOut(duration, instance1.unmount);
            }
        } else {
            instance1.unmount();
        }
    }
    function hideWithInteractivity(event) {
        /* istanbul ignore else */ if (false) {
            $7650c9dce81215cc$var$warnWhen(instance1.state.isDestroyed, $7650c9dce81215cc$var$createMemoryLeakWarning('hideWithInteractivity'));
        }
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
        $7650c9dce81215cc$var$pushIfUnique($7650c9dce81215cc$var$mouseMoveListeners, debouncedOnMouseMove);
        debouncedOnMouseMove(event);
    }
    function unmount() {
        /* istanbul ignore else */ if (false) {
            $7650c9dce81215cc$var$warnWhen(instance1.state.isDestroyed, $7650c9dce81215cc$var$createMemoryLeakWarning('unmount'));
        }
        if (instance1.state.isVisible) {
            instance1.hide();
        }
        if (!instance1.state.isMounted) {
            return;
        }
        destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
        // tree by default. This seems mainly for interactive tippies, but we should
        // find a workaround if possible
        getNestedPopperTree().forEach(function(nestedPopper) {
            nestedPopper._tippy.unmount();
        });
        if (popper1.parentNode) {
            popper1.parentNode.removeChild(popper1);
        }
        $7650c9dce81215cc$var$mountedInstances = $7650c9dce81215cc$var$mountedInstances.filter(function(i) {
            return i !== instance1;
        });
        instance1.state.isMounted = false;
        invokeHook('onHidden', [
            instance1
        ]);
    }
    function destroy() {
        /* istanbul ignore else */ if (false) {
            $7650c9dce81215cc$var$warnWhen(instance1.state.isDestroyed, $7650c9dce81215cc$var$createMemoryLeakWarning('destroy'));
        }
        if (instance1.state.isDestroyed) {
            return;
        }
        instance1.clearDelayTimeouts();
        instance1.unmount();
        removeListeners();
        delete reference._tippy;
        instance1.state.isDestroyed = true;
        invokeHook('onDestroy', [
            instance1
        ]);
    }
    return instance1; // ===========================================================================
}
function $7650c9dce81215cc$var$tippy(targets, optionalProps) {
    if (optionalProps === void 0) optionalProps = {
    };
    var plugins = $7650c9dce81215cc$var$defaultProps.plugins.concat(optionalProps.plugins || []);
    $7650c9dce81215cc$var$bindGlobalEventListeners();
    var passedProps = Object.assign({
    }, optionalProps, {
        plugins: plugins
    });
    var elements = $7650c9dce81215cc$var$getArrayOfElements(targets);
    var isSingleContentElement, isMoreThanOneReferenceElement;
    var instances = elements.reduce(function(acc, reference) {
        var instance = reference && $7650c9dce81215cc$var$createTippy(reference, passedProps);
        if (instance) acc.push(instance);
        return acc;
    }, []);
    return $7650c9dce81215cc$var$isElement(targets) ? instances[0] : instances;
}
$7650c9dce81215cc$var$tippy.defaultProps = $7650c9dce81215cc$var$defaultProps;
$7650c9dce81215cc$var$tippy.setDefaultProps = $7650c9dce81215cc$var$setDefaultProps;
$7650c9dce81215cc$var$tippy.currentInput = $7650c9dce81215cc$var$currentInput;
var $7650c9dce81215cc$export$a9608aab345f7e75 = function $7650c9dce81215cc$export$a9608aab345f7e75(_temp) {
    var _ref = _temp === void 0 ? {
    } : _temp, excludedReferenceOrInstance = _ref.exclude, duration = _ref.duration;
    $7650c9dce81215cc$var$mountedInstances.forEach(function(instance) {
        var isExcluded = false;
        if (excludedReferenceOrInstance) isExcluded = $7650c9dce81215cc$var$isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
        if (!isExcluded) {
            var originalDuration = instance.props.duration;
            instance.setProps({
                duration: duration
            });
            instance.hide();
            if (!instance.state.isDestroyed) instance.setProps({
                duration: originalDuration
            });
        }
    });
};
// every time the popper is destroyed (i.e. a new target), removing the styles
// and causing transitions to break for singletons when the console is open, but
// most notably for non-transform styles being used, `gpuAcceleration: false`.
var $7650c9dce81215cc$var$applyStylesModifier = Object.assign({
}, $g8OEA.default, {
    effect: function effect(_ref) {
        var state = _ref.state;
        var initialStyles = {
            popper: {
                position: state.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: {
                position: 'absolute'
            },
            reference: {
            }
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
         // intentionally return no cleanup function
    // return () => { ... }
    }
});
var $7650c9dce81215cc$export$374c483667c1ea9b = function $7650c9dce81215cc$export$374c483667c1ea9b(tippyInstances, optionalProps) {
    var _optionalProps$popper;
    if (optionalProps === void 0) optionalProps = {
    };
    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;
    function setTriggerTargets() {
        triggerTargets = individualInstances.map(function(instance) {
            return $7650c9dce81215cc$var$normalizeToArray(instance.props.triggerTarget || instance.reference);
        }).reduce(function(acc, item) {
            return acc.concat(item);
        }, []);
    }
    function setReferences() {
        references = individualInstances.map(function(instance) {
            return instance.reference;
        });
    }
    function enableInstances(isEnabled) {
        individualInstances.forEach(function(instance) {
            if (isEnabled) instance.enable();
            else instance.disable();
        });
    }
    function interceptSetProps(singleton) {
        return individualInstances.map(function(instance) {
            var originalSetProps = instance.setProps;
            instance.setProps = function(props) {
                originalSetProps(props);
                if (instance.reference === currentTarget) singleton.setProps(props);
            };
            return function() {
                instance.setProps = originalSetProps;
            };
        });
    } // have to pass singleton, as it maybe undefined on first call
    function prepareInstance(singleton, target) {
        var index = triggerTargets.indexOf(target); // bail-out
        if (target === currentTarget) return;
        currentTarget = target;
        var overrideProps = (overrides || []).concat('content').reduce(function(acc, prop) {
            acc[prop] = individualInstances[index].props[prop];
            return acc;
        }, {
        });
        singleton.setProps(Object.assign({
        }, overrideProps, {
            getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function() {
                var _references$index;
                return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
            }
        }));
    }
    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
        fn: function fn() {
            return {
                onDestroy: function onDestroy() {
                    enableInstances(true);
                },
                onHidden: function onHidden() {
                    currentTarget = null;
                },
                onClickOutside: function onClickOutside(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        currentTarget = null;
                    }
                },
                onShow: function onShow(instance) {
                    if (instance.props.showOnCreate && !shownOnCreate) {
                        shownOnCreate = true;
                        prepareInstance(instance, references[0]);
                    }
                },
                onTrigger: function onTrigger(instance, event) {
                    prepareInstance(instance, event.currentTarget);
                }
            };
        }
    };
    var singleton1 = $7650c9dce81215cc$var$tippy($7650c9dce81215cc$var$div(), Object.assign({
    }, $7650c9dce81215cc$var$removeProperties(optionalProps, [
        'overrides'
    ]), {
        plugins: [
            plugin
        ].concat(optionalProps.plugins || []),
        triggerTarget: triggerTargets,
        popperOptions: Object.assign({
        }, optionalProps.popperOptions, {
            modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [
                $7650c9dce81215cc$var$applyStylesModifier
            ])
        })
    }));
    var originalShow = singleton1.show;
    singleton1.show = function(target) {
        originalShow(); // first time, showOnCreate or programmatic call with no params
        // default to showing first instance
        if (!currentTarget && target == null) return prepareInstance(singleton1, references[0]);
         // triggered from event (do nothing as prepareInstance already called by onTrigger)
        // programmatic call with no params when already visible (do nothing again)
        if (currentTarget && target == null) return;
         // target is index of instance
        if (typeof target === 'number') return references[target] && prepareInstance(singleton1, references[target]);
         // target is a child tippy instance
        if (individualInstances.indexOf(target) >= 0) {
            var ref = target.reference;
            return prepareInstance(singleton1, ref);
        } // target is a ReferenceElement
        if (references.indexOf(target) >= 0) return prepareInstance(singleton1, target);
    };
    singleton1.showNext = function() {
        var first = references[0];
        if (!currentTarget) return singleton1.show(0);
        var index = references.indexOf(currentTarget);
        singleton1.show(references[index + 1] || first);
    };
    singleton1.showPrevious = function() {
        var last = references[references.length - 1];
        if (!currentTarget) return singleton1.show(last);
        var index = references.indexOf(currentTarget);
        var target = references[index - 1] || last;
        singleton1.show(target);
    };
    var originalSetProps1 = singleton1.setProps;
    singleton1.setProps = function(props) {
        overrides = props.overrides || overrides;
        originalSetProps1(props);
    };
    singleton1.setInstances = function(nextInstances) {
        enableInstances(true);
        interceptSetPropsCleanups.forEach(function(fn) {
            return fn();
        });
        individualInstances = nextInstances;
        enableInstances(false);
        setReferences();
        setTriggerTargets();
        interceptSetPropsCleanups = interceptSetProps(singleton1);
        singleton1.setProps({
            triggerTarget: triggerTargets
        });
    };
    interceptSetPropsCleanups = interceptSetProps(singleton1);
    return singleton1;
};
var $7650c9dce81215cc$var$BUBBLING_EVENTS_MAP = {
    mouseover: 'mouseenter',
    focusin: 'focus',
    click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */ function $7650c9dce81215cc$export$10b1921597150314(targets, props) {
    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = $7650c9dce81215cc$var$removeProperties(props, [
        'target'
    ]);
    var parentProps = Object.assign({
    }, nativeProps, {
        trigger: 'manual',
        touch: false
    });
    var childProps = Object.assign({
        touch: $7650c9dce81215cc$var$defaultProps.touch
    }, nativeProps, {
        showOnCreate: true
    });
    var returnValue = $7650c9dce81215cc$var$tippy(targets, parentProps);
    var normalizedReturnValue = $7650c9dce81215cc$var$normalizeToArray(returnValue);
    function onTrigger(event) {
        if (!event.target || disabled) return;
        var targetNode = event.target.closest(target);
        if (!targetNode) return;
         // Get relevant trigger with fallbacks:
        // 1. Check `data-tippy-trigger` attribute on target node
        // 2. Fallback to `trigger` passed to `delegate()`
        // 3. Fallback to `defaultProps.trigger`
        var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || $7650c9dce81215cc$var$defaultProps.trigger; // @ts-ignore
        if (targetNode._tippy) return;
        if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') return;
        if (event.type !== 'touchstart' && trigger.indexOf($7650c9dce81215cc$var$BUBBLING_EVENTS_MAP[event.type]) < 0) return;
        var instance = $7650c9dce81215cc$var$tippy(targetNode, childProps);
        if (instance) childTippyInstances = childTippyInstances.concat(instance);
    }
    function on(node, eventType, handler, options) {
        if (options === void 0) options = false;
        node.addEventListener(eventType, handler, options);
        listeners.push({
            node: node,
            eventType: eventType,
            handler: handler,
            options: options
        });
    }
    function addEventListeners(instance) {
        var reference = instance.reference;
        on(reference, 'touchstart', onTrigger, $7650c9dce81215cc$var$TOUCH_OPTIONS);
        on(reference, 'mouseover', onTrigger);
        on(reference, 'focusin', onTrigger);
        on(reference, 'click', onTrigger);
    }
    function removeEventListeners() {
        listeners.forEach(function(_ref) {
            var node = _ref.node, eventType = _ref.eventType, handler = _ref.handler, options = _ref.options;
            node.removeEventListener(eventType, handler, options);
        });
        listeners = [];
    }
    function applyMutations(instance2) {
        var originalDestroy = instance2.destroy;
        var originalEnable = instance2.enable;
        var originalDisable = instance2.disable;
        instance2.destroy = function(shouldDestroyChildInstances) {
            if (shouldDestroyChildInstances === void 0) shouldDestroyChildInstances = true;
            if (shouldDestroyChildInstances) childTippyInstances.forEach(function(instance) {
                instance.destroy();
            });
            childTippyInstances = [];
            removeEventListeners();
            originalDestroy();
        };
        instance2.enable = function() {
            originalEnable();
            childTippyInstances.forEach(function(instance) {
                return instance.enable();
            });
            disabled = false;
        };
        instance2.disable = function() {
            originalDisable();
            childTippyInstances.forEach(function(instance) {
                return instance.disable();
            });
            disabled = true;
        };
        addEventListeners(instance2);
    }
    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
}
var $7650c9dce81215cc$export$dd8ded329c01db79 = {
    name: 'animateFill',
    defaultValue: false,
    fn: function fn(instance) {
        var _instance$props$rende;
        // @ts-ignore
        if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) return {
        };
        var _getChildren = $7650c9dce81215cc$var$getChildren(instance.popper), box = _getChildren.box, content = _getChildren.content;
        var backdrop = instance.props.animateFill ? $7650c9dce81215cc$var$createBackdropElement() : null;
        return {
            onCreate: function onCreate() {
                if (backdrop) {
                    box.insertBefore(backdrop, box.firstElementChild);
                    box.setAttribute('data-animatefill', '');
                    box.style.overflow = 'hidden';
                    instance.setProps({
                        arrow: false,
                        animation: 'shift-away'
                    });
                }
            },
            onMount: function onMount() {
                if (backdrop) {
                    var transitionDuration = box.style.transitionDuration;
                    var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
                    // tooltip element. `clip-path` is the other alternative but is not
                    // well-supported and is buggy on some devices.
                    content.style.transitionDelay = Math.round(duration / 10) + "ms";
                    backdrop.style.transitionDuration = transitionDuration;
                    $7650c9dce81215cc$var$setVisibilityState([
                        backdrop
                    ], 'visible');
                }
            },
            onShow: function onShow() {
                if (backdrop) backdrop.style.transitionDuration = '0ms';
            },
            onHide: function onHide() {
                if (backdrop) $7650c9dce81215cc$var$setVisibilityState([
                    backdrop
                ], 'hidden');
            }
        };
    }
};
function $7650c9dce81215cc$var$createBackdropElement() {
    var backdrop = $7650c9dce81215cc$var$div();
    backdrop.className = $7650c9dce81215cc$var$BACKDROP_CLASS;
    $7650c9dce81215cc$var$setVisibilityState([
        backdrop
    ], 'hidden');
    return backdrop;
}
var $7650c9dce81215cc$var$mouseCoords = {
    clientX: 0,
    clientY: 0
};
var $7650c9dce81215cc$var$activeInstances = [];
function $7650c9dce81215cc$var$storeMouseCoords(_ref) {
    var clientX = _ref.clientX, clientY = _ref.clientY;
    $7650c9dce81215cc$var$mouseCoords = {
        clientX: clientX,
        clientY: clientY
    };
}
function $7650c9dce81215cc$var$addMouseCoordsListener(doc) {
    doc.addEventListener('mousemove', $7650c9dce81215cc$var$storeMouseCoords);
}
function $7650c9dce81215cc$var$removeMouseCoordsListener(doc) {
    doc.removeEventListener('mousemove', $7650c9dce81215cc$var$storeMouseCoords);
}
var $7650c9dce81215cc$export$ac81526b64504ab6 = {
    name: 'followCursor',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        var doc = $7650c9dce81215cc$var$getOwnerDocument(instance.props.triggerTarget || reference);
        var isInternalUpdate = false;
        var wasFocusEvent = false;
        var isUnmounted = true;
        var prevProps = instance.props;
        function getIsInitialBehavior() {
            return instance.props.followCursor === 'initial' && instance.state.isVisible;
        }
        function addListener() {
            doc.addEventListener('mousemove', onMouseMove);
        }
        function removeListener() {
            doc.removeEventListener('mousemove', onMouseMove);
        }
        function unsetGetReferenceClientRect() {
            isInternalUpdate = true;
            instance.setProps({
                getReferenceClientRect: null
            });
            isInternalUpdate = false;
        }
        function onMouseMove(event) {
            // If the instance is interactive, avoid updating the position unless it's
            // over the reference element
            var isCursorOverReference = event.target ? reference.contains(event.target) : true;
            var $7650c9dce81215cc$export$ac81526b64504ab6 = instance.props.followCursor;
            var clientX = event.clientX, clientY = event.clientY;
            var rect1 = reference.getBoundingClientRect();
            var relativeX = clientX - rect1.left;
            var relativeY = clientY - rect1.top;
            if (isCursorOverReference || !instance.props.interactive) instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                    var rect = reference.getBoundingClientRect();
                    var x = clientX;
                    var y = clientY;
                    if ($7650c9dce81215cc$export$ac81526b64504ab6 === 'initial') {
                        x = rect.left + relativeX;
                        y = rect.top + relativeY;
                    }
                    var top = $7650c9dce81215cc$export$ac81526b64504ab6 === 'horizontal' ? rect.top : y;
                    var right = $7650c9dce81215cc$export$ac81526b64504ab6 === 'vertical' ? rect.right : x;
                    var bottom = $7650c9dce81215cc$export$ac81526b64504ab6 === 'horizontal' ? rect.bottom : y;
                    var left = $7650c9dce81215cc$export$ac81526b64504ab6 === 'vertical' ? rect.left : x;
                    return {
                        width: right - left,
                        height: bottom - top,
                        top: top,
                        right: right,
                        bottom: bottom,
                        left: left
                    };
                }
            });
        }
        function create() {
            if (instance.props.followCursor) {
                $7650c9dce81215cc$var$activeInstances.push({
                    instance: instance,
                    doc: doc
                });
                $7650c9dce81215cc$var$addMouseCoordsListener(doc);
            }
        }
        function destroy() {
            $7650c9dce81215cc$var$activeInstances = $7650c9dce81215cc$var$activeInstances.filter(function(data) {
                return data.instance !== instance;
            });
            if ($7650c9dce81215cc$var$activeInstances.filter(function(data) {
                return data.doc === doc;
            }).length === 0) $7650c9dce81215cc$var$removeMouseCoordsListener(doc);
        }
        return {
            onCreate: create,
            onDestroy: destroy,
            onBeforeUpdate: function onBeforeUpdate() {
                prevProps = instance.props;
            },
            onAfterUpdate: function onAfterUpdate(_, _ref2) {
                var $7650c9dce81215cc$export$ac81526b64504ab6 = _ref2.followCursor;
                if (isInternalUpdate) return;
                if ($7650c9dce81215cc$export$ac81526b64504ab6 !== undefined && prevProps.followCursor !== $7650c9dce81215cc$export$ac81526b64504ab6) {
                    destroy();
                    if ($7650c9dce81215cc$export$ac81526b64504ab6) {
                        create();
                        if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) addListener();
                    } else {
                        removeListener();
                        unsetGetReferenceClientRect();
                    }
                }
            },
            onMount: function onMount() {
                if (instance.props.followCursor && !wasFocusEvent) {
                    if (isUnmounted) {
                        onMouseMove($7650c9dce81215cc$var$mouseCoords);
                        isUnmounted = false;
                    }
                    if (!getIsInitialBehavior()) addListener();
                }
            },
            onTrigger: function onTrigger(_, event) {
                if ($7650c9dce81215cc$var$isMouseEvent(event)) $7650c9dce81215cc$var$mouseCoords = {
                    clientX: event.clientX,
                    clientY: event.clientY
                };
                wasFocusEvent = event.type === 'focus';
            },
            onHidden: function onHidden() {
                if (instance.props.followCursor) {
                    unsetGetReferenceClientRect();
                    removeListener();
                    isUnmounted = true;
                }
            }
        };
    }
};
function $7650c9dce81215cc$var$getProps(props, modifier) {
    var _props$popperOptions;
    return {
        popperOptions: Object.assign({
        }, props.popperOptions, {
            modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function(_ref) {
                var name = _ref.name;
                return name !== modifier.name;
            }), [
                modifier
            ])
        })
    };
}
var $7650c9dce81215cc$export$e2b668424a9c728 = {
    name: 'inlinePositioning',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference;
        function isEnabled() {
            return !!instance.props.inlinePositioning;
        }
        var placement1;
        var cursorRectIndex = -1;
        var isInternalUpdate = false;
        var triedPlacements = [];
        var modifier = {
            name: 'tippyInlinePositioning',
            enabled: true,
            phase: 'afterWrite',
            fn: function fn(_ref2) {
                var state = _ref2.state;
                if (isEnabled()) {
                    if (triedPlacements.indexOf(state.placement) !== -1) triedPlacements = [];
                    if (placement1 !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
                        triedPlacements.push(state.placement);
                        instance.setProps({
                            // @ts-ignore - unneeded DOMRect properties
                            getReferenceClientRect: function getReferenceClientRect() {
                                return _getReferenceClientRect(state.placement);
                            }
                        });
                    }
                    placement1 = state.placement;
                }
            }
        };
        function _getReferenceClientRect(placement) {
            return $7650c9dce81215cc$var$getInlineBoundingClientRect($7650c9dce81215cc$var$getBasePlacement(placement), reference.getBoundingClientRect(), $7650c9dce81215cc$var$arrayFrom(reference.getClientRects()), cursorRectIndex);
        }
        function setInternalProps(partialProps) {
            isInternalUpdate = true;
            instance.setProps(partialProps);
            isInternalUpdate = false;
        }
        function addModifier() {
            if (!isInternalUpdate) setInternalProps($7650c9dce81215cc$var$getProps(instance.props, modifier));
        }
        return {
            onCreate: addModifier,
            onAfterUpdate: addModifier,
            onTrigger: function onTrigger(_, event) {
                if ($7650c9dce81215cc$var$isMouseEvent(event)) {
                    var rects = $7650c9dce81215cc$var$arrayFrom(instance.reference.getClientRects());
                    var cursorRect = rects.find(function(rect) {
                        return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
                    });
                    var index = rects.indexOf(cursorRect);
                    cursorRectIndex = index > -1 ? index : cursorRectIndex;
                }
            },
            onHidden: function onHidden() {
                cursorRectIndex = -1;
            }
        };
    }
};
function $7650c9dce81215cc$var$getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) return boundingRect;
     // There are two rects and they are disjoined
    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) return clientRects[cursorRectIndex] || boundingRect;
    switch(currentBasePlacement){
        case 'top':
        case 'bottom':
            var firstRect = clientRects[0];
            var lastRect = clientRects[clientRects.length - 1];
            var isTop = currentBasePlacement === 'top';
            var top = firstRect.top;
            var bottom = lastRect.bottom;
            var left = isTop ? firstRect.left : lastRect.left;
            var right = isTop ? firstRect.right : lastRect.right;
            var width = right - left;
            var height = bottom - top;
            return {
                top: top,
                bottom: bottom,
                left: left,
                right: right,
                width: width,
                height: height
            };
        case 'left':
        case 'right':
            var minLeft = Math.min.apply(Math, clientRects.map(function(rects) {
                return rects.left;
            }));
            var maxRight = Math.max.apply(Math, clientRects.map(function(rects) {
                return rects.right;
            }));
            var measureRects = clientRects.filter(function(rect) {
                return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
            });
            var _top = measureRects[0].top;
            var _bottom = measureRects[measureRects.length - 1].bottom;
            var _left = minLeft;
            var _right = maxRight;
            var _width = _right - _left;
            var _height = _bottom - _top;
            return {
                top: _top,
                bottom: _bottom,
                left: _left,
                right: _right,
                width: _width,
                height: _height
            };
        default:
            return boundingRect;
    }
}
var $7650c9dce81215cc$export$4bd4b47501432316 = {
    name: 'sticky',
    defaultValue: false,
    fn: function fn(instance) {
        var reference = instance.reference, popper = instance.popper;
        function getReference() {
            return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
        }
        function shouldCheck(value) {
            return instance.props.sticky === true || instance.props.sticky === value;
        }
        var prevRefRect = null;
        var prevPopRect = null;
        function updatePosition() {
            var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
            var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;
            if (currentRefRect && $7650c9dce81215cc$var$areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && $7650c9dce81215cc$var$areRectsDifferent(prevPopRect, currentPopRect)) {
                if (instance.popperInstance) instance.popperInstance.update();
            }
            prevRefRect = currentRefRect;
            prevPopRect = currentPopRect;
            if (instance.state.isMounted) requestAnimationFrame(updatePosition);
        }
        return {
            onMount: function onMount() {
                if (instance.props.sticky) updatePosition();
            }
        };
    }
};
function $7650c9dce81215cc$var$areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    return true;
}
$7650c9dce81215cc$var$tippy.setDefaultProps({
    render: $7650c9dce81215cc$var$render
});
var $7650c9dce81215cc$export$2e2bcd8739ae039 = $7650c9dce81215cc$var$tippy;

});
parcelRequire.register("g8OEA", function(module, exports) {

$parcel$export(module.exports, "default", () => $bc04af748f55319c$export$2e2bcd8739ae039);

var $eyTVg = parcelRequire("eyTVg");

var $d6xDx = parcelRequire("d6xDx");
// and applies them to the HTMLElements such as popper and arrow
function $bc04af748f55319c$var$applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name1) {
        var style = state.styles[name1] || {
        };
        var attributes = state.attributes[name1] || {
        };
        var element = state.elements[name1]; // arrow is optional + virtual elements
        if (!$d6xDx.isHTMLElement(element) || !$eyTVg.default(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? '' : value);
        });
    });
}
function $bc04af748f55319c$var$effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: '0',
            top: '0',
            margin: '0'
        },
        arrow: {
            position: 'absolute'
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style1 = styleProperties.reduce(function(style, property) {
                style[property] = '';
                return style;
            }, {
            }); // arrow is optional + virtual elements
            if (!$d6xDx.isHTMLElement(element) || !$eyTVg.default(element)) return;
            Object.assign(element.style, style1);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
var $bc04af748f55319c$export$2e2bcd8739ae039 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: $bc04af748f55319c$var$applyStyles,
    effect: $bc04af748f55319c$var$effect,
    requires: [
        'computeStyles'
    ]
};

});
parcelRequire.register("eyTVg", function(module, exports) {

$parcel$export(module.exports, "default", () => $a99f9ebca3ba2730$export$2e2bcd8739ae039);
function $a99f9ebca3ba2730$export$2e2bcd8739ae039(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
}

});

parcelRequire.register("d6xDx", function(module, exports) {

$parcel$export(module.exports, "isElement", () => $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d);
$parcel$export(module.exports, "isHTMLElement", () => $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa);
$parcel$export(module.exports, "isShadowRoot", () => $98a5ed6e9cc93b6b$export$af51f0f06c0f328a);

var $4bJEZ = parcelRequire("4bJEZ");
function $98a5ed6e9cc93b6b$export$45a5e7f76e0caa8d(node) {
    var OwnElement = $4bJEZ.default(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function $98a5ed6e9cc93b6b$export$1b3bfaa9684536aa(node) {
    var OwnElement = $4bJEZ.default(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function $98a5ed6e9cc93b6b$export$af51f0f06c0f328a(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') return false;
    var OwnElement = $4bJEZ.default(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}

});
parcelRequire.register("4bJEZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $30cb9ba4921cb24c$export$2e2bcd8739ae039);
function $30cb9ba4921cb24c$export$2e2bcd8739ae039(node) {
    if (node == null) return window;
    if (node.toString() !== '[object Window]') {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}

});




parcelRequire.register("e2LKo", function(module, exports) {

$parcel$export(module.exports, "createPopper", () => $a3964a39831c9644$export$8f7491d57c8f97a9);

var $8yRgr = parcelRequire("8yRgr");

var $jZBtg = parcelRequire("jZBtg");

var $i4AAK = parcelRequire("i4AAK");

var $3daoF = parcelRequire("3daoF");

var $g8OEA = parcelRequire("g8OEA");

var $e0EP7 = parcelRequire("e0EP7");

var $45jb7 = parcelRequire("45jb7");

var $lDwp4 = parcelRequire("lDwp4");

var $7b3sC = parcelRequire("7b3sC");

var $iZmmk = parcelRequire("iZmmk");


var $a3964a39831c9644$export$d34966752335dd47 = [
    $jZBtg.default,
    $i4AAK.default,
    $3daoF.default,
    $g8OEA.default,
    $e0EP7.default,
    $45jb7.default,
    $lDwp4.default,
    $7b3sC.default,
    $iZmmk.default
];
var $a3964a39831c9644$export$8f7491d57c8f97a9 = /*#__PURE__*/ $8yRgr.popperGenerator({
    defaultModifiers: $a3964a39831c9644$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules

});
parcelRequire.register("8yRgr", function(module, exports) {

$parcel$export(module.exports, "popperGenerator", () => $63bad0d90002a387$export$ed5e13716264f202);

var $2o8wS = parcelRequire("2o8wS");

var $jNRCw = parcelRequire("jNRCw");

var $9tSP8 = parcelRequire("9tSP8");

var $kefRd = parcelRequire("kefRd");


var $6mXpF = parcelRequire("6mXpF");

var $7ivY0 = parcelRequire("7ivY0");




var $87bIy = parcelRequire("87bIy");


var $d6xDx = parcelRequire("d6xDx");

var $63bad0d90002a387$var$INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var $63bad0d90002a387$var$INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var $63bad0d90002a387$var$DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
};
function $63bad0d90002a387$var$areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === 'function');
    });
}
function $63bad0d90002a387$export$ed5e13716264f202(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? $63bad0d90002a387$var$DEFAULT_OPTIONS : _generatorOptions$def2;
    return function $63bad0d90002a387$export$8f7491d57c8f97a9(reference1, popper1, options1) {
        if (options1 === void 0) options1 = defaultOptions;
        var state1 = {
            placement: 'bottom',
            orderedModifiers: [],
            options: Object.assign({
            }, $63bad0d90002a387$var$DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference1,
                popper: popper1
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state1,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === 'function' ? setOptionsAction(state1.options) : setOptionsAction;
                cleanupModifierEffects();
                state1.options = Object.assign({
                }, defaultOptions, state1.options, options);
                state1.scrollParents = {
                    reference: $d6xDx.isElement(reference1) ? $9tSP8.default(reference1) : reference1.contextElement ? $9tSP8.default(reference1.contextElement) : [],
                    popper: $9tSP8.default(popper1)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = $6mXpF.default($87bIy.default([].concat(defaultModifiers, state1.options.modifiers))); // Strip out disabled modifiers
                state1.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                }); // Validate the provided modifiers so that the consumer will get warned
                var modifiers, _ref, name, flipModifier, _ref2, name1, _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, margin;
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state1.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!$63bad0d90002a387$var$areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state1.rects = {
                    reference: $2o8wS.default(reference, $kefRd.default(popper), state1.options.strategy === 'fixed'),
                    popper: $jNRCw.default(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state1.reset = false;
                state1.placement = state1.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state1.orderedModifiers.forEach(function(modifier) {
                    return state1.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state1.orderedModifiers.length; index++){
                    if (state1.reset === true) {
                        state1.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state1.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === 'function') state1 = fn({
                        state: state1,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state1;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: $7ivY0.default(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state1);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!$63bad0d90002a387$var$areValidElements(reference1, popper1)) return instance;
        instance.setOptions(options1).then(function(state) {
            if (!isDestroyed && options1.onFirstUpdate) options1.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state1.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options = _ref3$options === void 0 ? {
                } : _ref3$options, effect = _ref3.effect;
                if (typeof effect === 'function') {
                    var cleanupFn = effect({
                        state: state1,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {
                    };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var $63bad0d90002a387$export$8f7491d57c8f97a9 = /*#__PURE__*/ $63bad0d90002a387$export$ed5e13716264f202(); // eslint-disable-next-line import/no-unused-modules

});
parcelRequire.register("2o8wS", function(module, exports) {

$parcel$export(module.exports, "default", () => $1bd47066b42a5b5d$export$2e2bcd8739ae039);

var $fBOtw = parcelRequire("fBOtw");

var $2jjsC = parcelRequire("2jjsC");

var $eyTVg = parcelRequire("eyTVg");

var $d6xDx = parcelRequire("d6xDx");

var $bjNq5 = parcelRequire("bjNq5");

var $rbFoR = parcelRequire("rbFoR");

var $aHPzD = parcelRequire("aHPzD");

var $iABBo = parcelRequire("iABBo");
function $1bd47066b42a5b5d$var$isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = $iABBo.round(rect.width) / element.offsetWidth || 1;
    var scaleY = $iABBo.round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function $1bd47066b42a5b5d$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = $d6xDx.isHTMLElement(offsetParent);
    var offsetParentIsScaled = $d6xDx.isHTMLElement(offsetParent) && $1bd47066b42a5b5d$var$isElementScaled(offsetParent);
    var documentElement = $rbFoR.default(offsetParent);
    var rect = $fBOtw.default(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ($eyTVg.default(offsetParent) !== 'body' || $aHPzD.default(documentElement)) scroll = $2jjsC.default(offsetParent);
        if ($d6xDx.isHTMLElement(offsetParent)) {
            offsets = $fBOtw.default(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = $bjNq5.default(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}

});
parcelRequire.register("fBOtw", function(module, exports) {

$parcel$export(module.exports, "default", () => $b5d1770c17971102$export$2e2bcd8739ae039);

var $d6xDx = parcelRequire("d6xDx");

var $iABBo = parcelRequire("iABBo");
function $b5d1770c17971102$export$2e2bcd8739ae039(element, includeScale) {
    if (includeScale === void 0) includeScale = false;
    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if ($d6xDx.isHTMLElement(element) && includeScale) {
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
        // Fallback to 1 in case both values are `0`
        if (offsetWidth > 0) scaleX = $iABBo.round(rect.width) / offsetWidth || 1;
        if (offsetHeight > 0) scaleY = $iABBo.round(rect.height) / offsetHeight || 1;
    }
    return {
        width: rect.width / scaleX,
        height: rect.height / scaleY,
        top: rect.top / scaleY,
        right: rect.right / scaleX,
        bottom: rect.bottom / scaleY,
        left: rect.left / scaleX,
        x: rect.left / scaleX,
        y: rect.top / scaleY
    };
}

});
parcelRequire.register("iABBo", function(module, exports) {

$parcel$export(module.exports, "max", () => $d888c1c5c6139f87$export$8960430cfd85939f);
$parcel$export(module.exports, "min", () => $d888c1c5c6139f87$export$96ec731ed4dcb222);
$parcel$export(module.exports, "round", () => $d888c1c5c6139f87$export$2077e0241d6afd3c);
var $d888c1c5c6139f87$export$8960430cfd85939f = Math.max;
var $d888c1c5c6139f87$export$96ec731ed4dcb222 = Math.min;
var $d888c1c5c6139f87$export$2077e0241d6afd3c = Math.round;

});


parcelRequire.register("2jjsC", function(module, exports) {

$parcel$export(module.exports, "default", () => $1aec7390888aa5e7$export$2e2bcd8739ae039);

var $8ZJoe = parcelRequire("8ZJoe");

var $4bJEZ = parcelRequire("4bJEZ");

var $d6xDx = parcelRequire("d6xDx");

var $in80S = parcelRequire("in80S");
function $1aec7390888aa5e7$export$2e2bcd8739ae039(node) {
    if (node === $4bJEZ.default(node) || !$d6xDx.isHTMLElement(node)) return $8ZJoe.default(node);
    else return $in80S.default(node);
}

});
parcelRequire.register("8ZJoe", function(module, exports) {

$parcel$export(module.exports, "default", () => $68c73aba05e12bb4$export$2e2bcd8739ae039);

var $4bJEZ = parcelRequire("4bJEZ");
function $68c73aba05e12bb4$export$2e2bcd8739ae039(node) {
    var win = $4bJEZ.default(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}

});

parcelRequire.register("in80S", function(module, exports) {

$parcel$export(module.exports, "default", () => $d60097371f30bca0$export$2e2bcd8739ae039);
function $d60097371f30bca0$export$2e2bcd8739ae039(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}

});


parcelRequire.register("bjNq5", function(module, exports) {

$parcel$export(module.exports, "default", () => $83d7cdd03a66c6bd$export$2e2bcd8739ae039);

var $fBOtw = parcelRequire("fBOtw");

var $rbFoR = parcelRequire("rbFoR");

var $8ZJoe = parcelRequire("8ZJoe");
function $83d7cdd03a66c6bd$export$2e2bcd8739ae039(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return $fBOtw.default($rbFoR.default(element)).left + $8ZJoe.default(element).scrollLeft;
}

});
parcelRequire.register("rbFoR", function(module, exports) {

$parcel$export(module.exports, "default", () => $051b9280bc9384db$export$2e2bcd8739ae039);

var $d6xDx = parcelRequire("d6xDx");
function $051b9280bc9384db$export$2e2bcd8739ae039(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (($d6xDx.isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

});


parcelRequire.register("aHPzD", function(module, exports) {

$parcel$export(module.exports, "default", () => $7cb5ecfccce08936$export$2e2bcd8739ae039);

var $cNC5V = parcelRequire("cNC5V");
function $7cb5ecfccce08936$export$2e2bcd8739ae039(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = $cNC5V.default(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

});
parcelRequire.register("cNC5V", function(module, exports) {

$parcel$export(module.exports, "default", () => $95179c71c901ae5b$export$2e2bcd8739ae039);

var $4bJEZ = parcelRequire("4bJEZ");
function $95179c71c901ae5b$export$2e2bcd8739ae039(element) {
    return $4bJEZ.default(element).getComputedStyle(element);
}

});



parcelRequire.register("jNRCw", function(module, exports) {

$parcel$export(module.exports, "default", () => $e6ac2fccfcb26231$export$2e2bcd8739ae039);

var $fBOtw = parcelRequire("fBOtw");
function $e6ac2fccfcb26231$export$2e2bcd8739ae039(element) {
    var clientRect = $fBOtw.default(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}

});

parcelRequire.register("9tSP8", function(module, exports) {

$parcel$export(module.exports, "default", () => $6e71595481654e2c$export$2e2bcd8739ae039);

var $5Jtdk = parcelRequire("5Jtdk");

var $88D2t = parcelRequire("88D2t");

var $4bJEZ = parcelRequire("4bJEZ");

var $aHPzD = parcelRequire("aHPzD");
function $6e71595481654e2c$export$2e2bcd8739ae039(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = $5Jtdk.default(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = $4bJEZ.default(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], $aHPzD.default(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat($6e71595481654e2c$export$2e2bcd8739ae039($88D2t.default(target)));
}

});
parcelRequire.register("5Jtdk", function(module, exports) {

$parcel$export(module.exports, "default", () => $42c7d101bf7d5a5d$export$2e2bcd8739ae039);

var $88D2t = parcelRequire("88D2t");

var $aHPzD = parcelRequire("aHPzD");

var $eyTVg = parcelRequire("eyTVg");

var $d6xDx = parcelRequire("d6xDx");
function $42c7d101bf7d5a5d$export$2e2bcd8739ae039(node) {
    if ([
        'html',
        'body',
        '#document'
    ].indexOf($eyTVg.default(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ($d6xDx.isHTMLElement(node) && $aHPzD.default(node)) return node;
    return $42c7d101bf7d5a5d$export$2e2bcd8739ae039($88D2t.default(node));
}

});
parcelRequire.register("88D2t", function(module, exports) {

$parcel$export(module.exports, "default", () => $5ecd5a6819f6d2de$export$2e2bcd8739ae039);

var $eyTVg = parcelRequire("eyTVg");

var $rbFoR = parcelRequire("rbFoR");

var $d6xDx = parcelRequire("d6xDx");
function $5ecd5a6819f6d2de$export$2e2bcd8739ae039(element) {
    if ($eyTVg.default(element) === 'html') return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || element.parentNode || ($d6xDx.isShadowRoot(element) ? element.host : null) || // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    $rbFoR.default(element) // fallback
    );
}

});



parcelRequire.register("kefRd", function(module, exports) {

$parcel$export(module.exports, "default", () => $eba16a63ee488722$export$2e2bcd8739ae039);

var $4bJEZ = parcelRequire("4bJEZ");

var $eyTVg = parcelRequire("eyTVg");

var $cNC5V = parcelRequire("cNC5V");

var $d6xDx = parcelRequire("d6xDx");

var $1mZNr = parcelRequire("1mZNr");

var $88D2t = parcelRequire("88D2t");
function $eba16a63ee488722$var$getTrueOffsetParent(element) {
    if (!$d6xDx.isHTMLElement(element) || $cNC5V.default(element).position === 'fixed') return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function $eba16a63ee488722$var$getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;
    if (isIE && $d6xDx.isHTMLElement(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = $cNC5V.default(element);
        if (elementCss.position === 'fixed') return null;
    }
    var currentNode = $88D2t.default(element);
    if ($d6xDx.isShadowRoot(currentNode)) currentNode = currentNode.host;
    while($d6xDx.isHTMLElement(currentNode) && [
        'html',
        'body'
    ].indexOf($eyTVg.default(currentNode)) < 0){
        var css = $cNC5V.default(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || [
            'transform',
            'perspective'
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function $eba16a63ee488722$export$2e2bcd8739ae039(element) {
    var window = $4bJEZ.default(element);
    var offsetParent = $eba16a63ee488722$var$getTrueOffsetParent(element);
    while(offsetParent && $1mZNr.default(offsetParent) && $cNC5V.default(offsetParent).position === 'static')offsetParent = $eba16a63ee488722$var$getTrueOffsetParent(offsetParent);
    if (offsetParent && ($eyTVg.default(offsetParent) === 'html' || $eyTVg.default(offsetParent) === 'body' && $cNC5V.default(offsetParent).position === 'static')) return window;
    return offsetParent || $eba16a63ee488722$var$getContainingBlock(element) || window;
}

});
parcelRequire.register("1mZNr", function(module, exports) {

$parcel$export(module.exports, "default", () => $0ff7c807099d5305$export$2e2bcd8739ae039);

var $eyTVg = parcelRequire("eyTVg");
function $0ff7c807099d5305$export$2e2bcd8739ae039(element) {
    return [
        'table',
        'td',
        'th'
    ].indexOf($eyTVg.default(element)) >= 0;
}

});


parcelRequire.register("6mXpF", function(module, exports) {

$parcel$export(module.exports, "default", () => $4a32e2579d0de4f9$export$2e2bcd8739ae039);

var $3ZIUY = parcelRequire("3ZIUY");
function $4a32e2579d0de4f9$var$order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function $4a32e2579d0de4f9$export$2e2bcd8739ae039(modifiers) {
    // order based on dependencies
    var orderedModifiers = $4a32e2579d0de4f9$var$order(modifiers); // order based on phase
    return $3ZIUY.modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}

});
parcelRequire.register("3ZIUY", function(module, exports) {

$parcel$export(module.exports, "top", () => $2e89e95ac593bfb0$export$1e95b668f3b82d);
$parcel$export(module.exports, "bottom", () => $2e89e95ac593bfb0$export$40e543e69a8b3fbb);
$parcel$export(module.exports, "right", () => $2e89e95ac593bfb0$export$79ffe56a765070d2);
$parcel$export(module.exports, "left", () => $2e89e95ac593bfb0$export$eabcd2c8791e7bf4);
$parcel$export(module.exports, "auto", () => $2e89e95ac593bfb0$export$dfb5619354ba860);
$parcel$export(module.exports, "basePlacements", () => $2e89e95ac593bfb0$export$aec2ce47c367b8c3);
$parcel$export(module.exports, "start", () => $2e89e95ac593bfb0$export$b3571188c770cc5a);
$parcel$export(module.exports, "end", () => $2e89e95ac593bfb0$export$bd5df0f255a350f8);
$parcel$export(module.exports, "clippingParents", () => $2e89e95ac593bfb0$export$390fd549c5303b4d);
$parcel$export(module.exports, "viewport", () => $2e89e95ac593bfb0$export$d7b7311ec04a3e8f);
$parcel$export(module.exports, "popper", () => $2e89e95ac593bfb0$export$ae5ab1c730825774);
$parcel$export(module.exports, "reference", () => $2e89e95ac593bfb0$export$ca50aac9f3ba507f);
$parcel$export(module.exports, "variationPlacements", () => $2e89e95ac593bfb0$export$368f9a87e87fa4e1);
$parcel$export(module.exports, "placements", () => $2e89e95ac593bfb0$export$803cd8101b6c182b);
$parcel$export(module.exports, "modifierPhases", () => $2e89e95ac593bfb0$export$d087d3878fdf71d5);
var $2e89e95ac593bfb0$export$1e95b668f3b82d = 'top';
var $2e89e95ac593bfb0$export$40e543e69a8b3fbb = 'bottom';
var $2e89e95ac593bfb0$export$79ffe56a765070d2 = 'right';
var $2e89e95ac593bfb0$export$eabcd2c8791e7bf4 = 'left';
var $2e89e95ac593bfb0$export$dfb5619354ba860 = 'auto';
var $2e89e95ac593bfb0$export$aec2ce47c367b8c3 = [
    $2e89e95ac593bfb0$export$1e95b668f3b82d,
    $2e89e95ac593bfb0$export$40e543e69a8b3fbb,
    $2e89e95ac593bfb0$export$79ffe56a765070d2,
    $2e89e95ac593bfb0$export$eabcd2c8791e7bf4
];
var $2e89e95ac593bfb0$export$b3571188c770cc5a = 'start';
var $2e89e95ac593bfb0$export$bd5df0f255a350f8 = 'end';
var $2e89e95ac593bfb0$export$390fd549c5303b4d = 'clippingParents';
var $2e89e95ac593bfb0$export$d7b7311ec04a3e8f = 'viewport';
var $2e89e95ac593bfb0$export$ae5ab1c730825774 = 'popper';
var $2e89e95ac593bfb0$export$ca50aac9f3ba507f = 'reference';
var $2e89e95ac593bfb0$export$368f9a87e87fa4e1 = /*#__PURE__*/ $2e89e95ac593bfb0$export$aec2ce47c367b8c3.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + $2e89e95ac593bfb0$export$b3571188c770cc5a,
        placement + "-" + $2e89e95ac593bfb0$export$bd5df0f255a350f8
    ]);
}, []);
var $2e89e95ac593bfb0$export$803cd8101b6c182b = /*#__PURE__*/ [].concat($2e89e95ac593bfb0$export$aec2ce47c367b8c3, [
    $2e89e95ac593bfb0$export$dfb5619354ba860
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + $2e89e95ac593bfb0$export$b3571188c770cc5a,
        placement + "-" + $2e89e95ac593bfb0$export$bd5df0f255a350f8
    ]);
}, []); // modifiers that need to read the DOM
var $2e89e95ac593bfb0$export$421679a7c3d56e = 'beforeRead';
var $2e89e95ac593bfb0$export$aafa59e2e03f2942 = 'read';
var $2e89e95ac593bfb0$export$6964f6c886723980 = 'afterRead'; // pure-logic modifiers
var $2e89e95ac593bfb0$export$c65e99957a05207c = 'beforeMain';
var $2e89e95ac593bfb0$export$f22da7240b7add18 = 'main';
var $2e89e95ac593bfb0$export$bab79516f2d662fe = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)
var $2e89e95ac593bfb0$export$8d4d2d70e7d46032 = 'beforeWrite';
var $2e89e95ac593bfb0$export$68d8715fc104d294 = 'write';
var $2e89e95ac593bfb0$export$70a6e5159acce2e6 = 'afterWrite';
var $2e89e95ac593bfb0$export$d087d3878fdf71d5 = [
    $2e89e95ac593bfb0$export$421679a7c3d56e,
    $2e89e95ac593bfb0$export$aafa59e2e03f2942,
    $2e89e95ac593bfb0$export$6964f6c886723980,
    $2e89e95ac593bfb0$export$c65e99957a05207c,
    $2e89e95ac593bfb0$export$f22da7240b7add18,
    $2e89e95ac593bfb0$export$bab79516f2d662fe,
    $2e89e95ac593bfb0$export$8d4d2d70e7d46032,
    $2e89e95ac593bfb0$export$68d8715fc104d294,
    $2e89e95ac593bfb0$export$70a6e5159acce2e6
];

});


parcelRequire.register("7ivY0", function(module, exports) {

$parcel$export(module.exports, "default", () => $550302ce282a655b$export$2e2bcd8739ae039);
function $550302ce282a655b$export$2e2bcd8739ae039(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}

});

parcelRequire.register("87bIy", function(module, exports) {

$parcel$export(module.exports, "default", () => $5e881110320a085b$export$2e2bcd8739ae039);
function $5e881110320a085b$export$2e2bcd8739ae039(modifiers) {
    var merged1 = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({
        }, existing, current, {
            options: Object.assign({
            }, existing.options, current.options),
            data: Object.assign({
            }, existing.data, current.data)
        }) : current;
        return merged;
    }, {
    }); // IE11 does not support Object.values
    return Object.keys(merged1).map(function(key) {
        return merged1[key];
    });
}

});


parcelRequire.register("jZBtg", function(module, exports) {

$parcel$export(module.exports, "default", () => $e8e0c7c69245c49b$export$2e2bcd8739ae039);

var $4bJEZ = parcelRequire("4bJEZ");
var $e8e0c7c69245c49b$var$passive = {
    passive: true
};
function $e8e0c7c69245c49b$var$effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = $4bJEZ.default(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, $e8e0c7c69245c49b$var$passive);
    });
    if (resize) window.addEventListener('resize', instance.update, $e8e0c7c69245c49b$var$passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener('scroll', instance.update, $e8e0c7c69245c49b$var$passive);
        });
        if (resize) window.removeEventListener('resize', instance.update, $e8e0c7c69245c49b$var$passive);
    };
} // eslint-disable-next-line import/no-unused-modules
var $e8e0c7c69245c49b$export$2e2bcd8739ae039 = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {
    },
    effect: $e8e0c7c69245c49b$var$effect,
    data: {
    }
};

});

parcelRequire.register("i4AAK", function(module, exports) {

$parcel$export(module.exports, "default", () => $d284fc136785a15e$export$2e2bcd8739ae039);

var $7rVZ1 = parcelRequire("7rVZ1");
function $d284fc136785a15e$var$popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = $7rVZ1.default({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: 'absolute',
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $d284fc136785a15e$export$2e2bcd8739ae039 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: $d284fc136785a15e$var$popperOffsets,
    data: {
    }
};

});
parcelRequire.register("7rVZ1", function(module, exports) {

$parcel$export(module.exports, "default", () => $56c8084ae97fa384$export$2e2bcd8739ae039);

var $eJ303 = parcelRequire("eJ303");

var $ekVLF = parcelRequire("ekVLF");

var $wPDJ2 = parcelRequire("wPDJ2");

var $3ZIUY = parcelRequire("3ZIUY");
function $56c8084ae97fa384$export$2e2bcd8739ae039(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? $eJ303.default(placement) : null;
    var variation = placement ? $ekVLF.default(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case $3ZIUY.top:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case $3ZIUY.bottom:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case $3ZIUY.right:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case $3ZIUY.left:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? $wPDJ2.default(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === 'y' ? 'height' : 'width';
        switch(variation){
            case $3ZIUY.start:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case $3ZIUY.end:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}

});
parcelRequire.register("eJ303", function(module, exports) {

$parcel$export(module.exports, "default", () => $ab879862a948a1f3$export$2e2bcd8739ae039);

function $ab879862a948a1f3$export$2e2bcd8739ae039(placement) {
    return placement.split('-')[0];
}

});

parcelRequire.register("ekVLF", function(module, exports) {

$parcel$export(module.exports, "default", () => $a6ffbe6b3b795e7b$export$2e2bcd8739ae039);
function $a6ffbe6b3b795e7b$export$2e2bcd8739ae039(placement) {
    return placement.split('-')[1];
}

});

parcelRequire.register("wPDJ2", function(module, exports) {

$parcel$export(module.exports, "default", () => $062b0bd957edc577$export$2e2bcd8739ae039);
function $062b0bd957edc577$export$2e2bcd8739ae039(placement) {
    return [
        'top',
        'bottom'
    ].indexOf(placement) >= 0 ? 'x' : 'y';
}

});



parcelRequire.register("3daoF", function(module, exports) {

$parcel$export(module.exports, "default", () => $256aa699194dfe79$export$2e2bcd8739ae039);

var $3ZIUY = parcelRequire("3ZIUY");

var $kefRd = parcelRequire("kefRd");

var $4bJEZ = parcelRequire("4bJEZ");

var $rbFoR = parcelRequire("rbFoR");

var $cNC5V = parcelRequire("cNC5V");

var $eJ303 = parcelRequire("eJ303");

var $ekVLF = parcelRequire("ekVLF");

var $iABBo = parcelRequire("iABBo");
var $256aa699194dfe79$var$unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function $256aa699194dfe79$var$roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: $iABBo.round(x * dpr) / dpr || 0,
        y: $iABBo.round(y * dpr) / dpr || 0
    };
}
function $256aa699194dfe79$export$378fa78a8fea596f(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = $3ZIUY.left;
    var sideY = $3ZIUY.top;
    var win = window;
    if (adaptive) {
        var offsetParent = $kefRd.default(popper);
        var heightProp = 'clientHeight';
        var widthProp = 'clientWidth';
        if (offsetParent === $4bJEZ.default(popper)) {
            offsetParent = $rbFoR.default(popper);
            if ($cNC5V.default(offsetParent).position !== 'static' && position === 'absolute') {
                heightProp = 'scrollHeight';
                widthProp = 'scrollWidth';
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        if (placement === $3ZIUY.top || (placement === $3ZIUY.left || placement === $3ZIUY.right) && variation === $3ZIUY.end) {
            sideY = $3ZIUY.bottom;
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === $3ZIUY.left || (placement === $3ZIUY.top || placement === $3ZIUY.bottom) && variation === $3ZIUY.end) {
            sideX = $3ZIUY.right;
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && $256aa699194dfe79$var$unsetSides);
    var _ref4 = roundOffsets === true ? $256aa699194dfe79$var$roundOffsetsByDPR({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}
function $256aa699194dfe79$var$computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty, property;
    var commonStyles = {
        placement: $eJ303.default(state.placement),
        variation: $ekVLF.default(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === 'fixed'
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, $256aa699194dfe79$export$378fa78a8fea596f(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, $256aa699194dfe79$export$378fa78a8fea596f(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-placement': state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $256aa699194dfe79$export$2e2bcd8739ae039 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: $256aa699194dfe79$var$computeStyles,
    data: {
    }
};

});

parcelRequire.register("e0EP7", function(module, exports) {

$parcel$export(module.exports, "default", () => $a330bb739738cf18$export$2e2bcd8739ae039);

var $eJ303 = parcelRequire("eJ303");

var $3ZIUY = parcelRequire("3ZIUY");
function $a330bb739738cf18$export$7fa02d8595b015ed(placement, rects, offset) {
    var basePlacement = $eJ303.default(placement);
    var invertDistance = [
        $3ZIUY.left,
        $3ZIUY.top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === 'function' ? offset(Object.assign({
    }, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        $3ZIUY.left,
        $3ZIUY.right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function $a330bb739738cf18$var$offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = $3ZIUY.placements.reduce(function(acc, placement) {
        acc[placement] = $a330bb739738cf18$export$7fa02d8595b015ed(placement, state.rects, offset);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $a330bb739738cf18$export$2e2bcd8739ae039 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: [
        'popperOffsets'
    ],
    fn: $a330bb739738cf18$var$offset
};

});

parcelRequire.register("45jb7", function(module, exports) {

$parcel$export(module.exports, "default", () => $2f96817885d7e372$export$2e2bcd8739ae039);

var $6Bsng = parcelRequire("6Bsng");

var $eJ303 = parcelRequire("eJ303");

var $aPSRh = parcelRequire("aPSRh");

var $fq1Ka = parcelRequire("fq1Ka");

var $2hM5X = parcelRequire("2hM5X");

var $3ZIUY = parcelRequire("3ZIUY");

var $ekVLF = parcelRequire("ekVLF");
function $2f96817885d7e372$var$getExpandedFallbackPlacements(placement) {
    if ($eJ303.default(placement) === $3ZIUY.auto) return [];
    var oppositePlacement = $6Bsng.default(placement);
    return [
        $aPSRh.default(placement),
        oppositePlacement,
        $aPSRh.default(oppositePlacement)
    ];
}
function $2f96817885d7e372$var$flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = $eJ303.default(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        $6Bsng.default(preferredPlacement)
    ] : $2f96817885d7e372$var$getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat($eJ303.default(placement) === $3ZIUY.auto ? $2hM5X.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement1 = placements[i];
        var _basePlacement = $eJ303.default(placement1);
        var isStartVariation = $ekVLF.default(placement1) === $3ZIUY.start;
        var isVertical = [
            $3ZIUY.top,
            $3ZIUY.bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? 'width' : 'height';
        var overflow = $fq1Ka.default(state, {
            placement: placement1,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? $3ZIUY.right : $3ZIUY.left : isStartVariation ? $3ZIUY.bottom : $3ZIUY.top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = $6Bsng.default(mainVariationSide);
        var altVariationSide = $6Bsng.default(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement1;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement1, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i1 = numberOfChecks; _i1 > 0; _i1--){
            var _ret = _loop(_i1);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
var $2f96817885d7e372$export$2e2bcd8739ae039 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: $2f96817885d7e372$var$flip,
    requiresIfExists: [
        'offset'
    ],
    data: {
        _skip: false
    }
};

});
parcelRequire.register("6Bsng", function(module, exports) {

$parcel$export(module.exports, "default", () => $4cec354ece277182$export$2e2bcd8739ae039);
var $4cec354ece277182$var$hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function $4cec354ece277182$export$2e2bcd8739ae039(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return $4cec354ece277182$var$hash[matched];
    });
}

});

parcelRequire.register("aPSRh", function(module, exports) {

$parcel$export(module.exports, "default", () => $7e39388afe8fd057$export$2e2bcd8739ae039);
var $7e39388afe8fd057$var$hash = {
    start: 'end',
    end: 'start'
};
function $7e39388afe8fd057$export$2e2bcd8739ae039(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return $7e39388afe8fd057$var$hash[matched];
    });
}

});

parcelRequire.register("fq1Ka", function(module, exports) {

$parcel$export(module.exports, "default", () => $b39aa2f9306db321$export$2e2bcd8739ae039);

var $5CpG0 = parcelRequire("5CpG0");

var $rbFoR = parcelRequire("rbFoR");

var $fBOtw = parcelRequire("fBOtw");

var $7rVZ1 = parcelRequire("7rVZ1");

var $cNoUv = parcelRequire("cNoUv");

var $3ZIUY = parcelRequire("3ZIUY");

var $d6xDx = parcelRequire("d6xDx");

var $2bVTQ = parcelRequire("2bVTQ");

var $3a0dK = parcelRequire("3a0dK");
function $b39aa2f9306db321$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? $3ZIUY.clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? $3ZIUY.viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? $3ZIUY.popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = $2bVTQ.default(typeof padding !== 'number' ? padding : $3a0dK.default(padding, $3ZIUY.basePlacements));
    var altContext = elementContext === $3ZIUY.popper ? $3ZIUY.reference : $3ZIUY.popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = $5CpG0.default($d6xDx.isElement(element) ? element : element.contextElement || $rbFoR.default(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = $fBOtw.default(state.elements.reference);
    var popperOffsets = $7rVZ1.default({
        reference: referenceClientRect,
        element: popperRect,
        strategy: 'absolute',
        placement: placement
    });
    var popperClientRect = $cNoUv.default(Object.assign({
    }, popperRect, popperOffsets));
    var elementClientRect = elementContext === $3ZIUY.popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === $3ZIUY.popper && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                $3ZIUY.right,
                $3ZIUY.bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                $3ZIUY.top,
                $3ZIUY.bottom
            ].indexOf(key) >= 0 ? 'y' : 'x';
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}

});
parcelRequire.register("5CpG0", function(module, exports) {

$parcel$export(module.exports, "default", () => $41746b27f6218672$export$2e2bcd8739ae039);

var $3ZIUY = parcelRequire("3ZIUY");

var $4MNDv = parcelRequire("4MNDv");

var $9kHsx = parcelRequire("9kHsx");

var $9tSP8 = parcelRequire("9tSP8");

var $kefRd = parcelRequire("kefRd");

var $rbFoR = parcelRequire("rbFoR");

var $cNC5V = parcelRequire("cNC5V");

var $d6xDx = parcelRequire("d6xDx");

var $fBOtw = parcelRequire("fBOtw");

var $88D2t = parcelRequire("88D2t");

var $ellK5 = parcelRequire("ellK5");

var $eyTVg = parcelRequire("eyTVg");

var $cNoUv = parcelRequire("cNoUv");

var $iABBo = parcelRequire("iABBo");
function $41746b27f6218672$var$getInnerBoundingClientRect(element) {
    var rect = $fBOtw.default(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function $41746b27f6218672$var$getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === $3ZIUY.viewport ? $cNoUv.default($4MNDv.default(element)) : $d6xDx.isElement(clippingParent) ? $41746b27f6218672$var$getInnerBoundingClientRect(clippingParent) : $cNoUv.default($9kHsx.default($rbFoR.default(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function $41746b27f6218672$var$getClippingParents(element) {
    var clippingParents = $9tSP8.default($88D2t.default(element));
    var canEscapeClipping = [
        'absolute',
        'fixed'
    ].indexOf($cNC5V.default(element).position) >= 0;
    var clipperElement = canEscapeClipping && $d6xDx.isHTMLElement(element) ? $kefRd.default(element) : element;
    if (!$d6xDx.isElement(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return $d6xDx.isElement(clippingParent) && $ellK5.default(clippingParent, clipperElement) && $eyTVg.default(clippingParent) !== 'body';
    });
} // Gets the maximum area that the element is visible in due to any number of
function $41746b27f6218672$export$2e2bcd8739ae039(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? $41746b27f6218672$var$getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = $41746b27f6218672$var$getClientRectFromMixedType(element, clippingParent);
        accRect.top = $iABBo.max(rect.top, accRect.top);
        accRect.right = $iABBo.min(rect.right, accRect.right);
        accRect.bottom = $iABBo.min(rect.bottom, accRect.bottom);
        accRect.left = $iABBo.max(rect.left, accRect.left);
        return accRect;
    }, $41746b27f6218672$var$getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}

});
parcelRequire.register("4MNDv", function(module, exports) {

$parcel$export(module.exports, "default", () => $37c225d49e918c6b$export$2e2bcd8739ae039);

var $4bJEZ = parcelRequire("4bJEZ");

var $rbFoR = parcelRequire("rbFoR");

var $bjNq5 = parcelRequire("bjNq5");
function $37c225d49e918c6b$export$2e2bcd8739ae039(element) {
    var win = $4bJEZ.default(element);
    var html = $rbFoR.default(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
        // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
        // errors due to floating point numbers, so we need to check precision.
        // Safari returns a number <= 0, usually < -1 when pinch-zoomed
        // Feature detection fails in mobile emulation mode in Chrome.
        // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
        // 0.001
        // Fallback here: "Not Safari" userAgent
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + $bjNq5.default(element),
        y: y
    };
}

});

parcelRequire.register("9kHsx", function(module, exports) {

$parcel$export(module.exports, "default", () => $6cb7b16a24759d72$export$2e2bcd8739ae039);

var $rbFoR = parcelRequire("rbFoR");

var $cNC5V = parcelRequire("cNC5V");

var $bjNq5 = parcelRequire("bjNq5");

var $8ZJoe = parcelRequire("8ZJoe");

var $iABBo = parcelRequire("iABBo");
function $6cb7b16a24759d72$export$2e2bcd8739ae039(element) {
    var _element$ownerDocumen;
    var html = $rbFoR.default(element);
    var winScroll = $8ZJoe.default(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = $iABBo.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = $iABBo.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + $bjNq5.default(element);
    var y = -winScroll.scrollTop;
    if ($cNC5V.default(body || html).direction === 'rtl') x += $iABBo.max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}

});

parcelRequire.register("ellK5", function(module, exports) {

$parcel$export(module.exports, "default", () => $a713e46d1a16fece$export$2e2bcd8739ae039);

var $d6xDx = parcelRequire("d6xDx");
function $a713e46d1a16fece$export$2e2bcd8739ae039(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && $d6xDx.isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next)
    } // Give up, the result is false
    return false;
}

});

parcelRequire.register("cNoUv", function(module, exports) {

$parcel$export(module.exports, "default", () => $950d624f2d59e88c$export$2e2bcd8739ae039);
function $950d624f2d59e88c$export$2e2bcd8739ae039(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}

});


parcelRequire.register("2bVTQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $198985865496074e$export$2e2bcd8739ae039);

var $hZOmC = parcelRequire("hZOmC");
function $198985865496074e$export$2e2bcd8739ae039(paddingObject) {
    return Object.assign({
    }, $hZOmC.default(), paddingObject);
}

});
parcelRequire.register("hZOmC", function(module, exports) {

$parcel$export(module.exports, "default", () => $d19f335b8f35ec35$export$2e2bcd8739ae039);
function $d19f335b8f35ec35$export$2e2bcd8739ae039() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}

});


parcelRequire.register("3a0dK", function(module, exports) {

$parcel$export(module.exports, "default", () => $24d27a140f178159$export$2e2bcd8739ae039);
function $24d27a140f178159$export$2e2bcd8739ae039(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}

});


parcelRequire.register("2hM5X", function(module, exports) {

$parcel$export(module.exports, "default", () => $1aa279fa58755a4a$export$2e2bcd8739ae039);

var $ekVLF = parcelRequire("ekVLF");

var $3ZIUY = parcelRequire("3ZIUY");

var $fq1Ka = parcelRequire("fq1Ka");

var $eJ303 = parcelRequire("eJ303");
function $1aa279fa58755a4a$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, placement1 = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? $3ZIUY.placements : _options$allowedAutoP;
    var variation = $ekVLF.default(placement1);
    var placements = variation ? flipVariations ? $3ZIUY.variationPlacements : $3ZIUY.variationPlacements.filter(function(placement) {
        return $ekVLF.default(placement) === variation;
    }) : $3ZIUY.basePlacements;
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = $fq1Ka.default(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[$eJ303.default(placement)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}

});


parcelRequire.register("lDwp4", function(module, exports) {

$parcel$export(module.exports, "default", () => $fc06601977373d48$export$2e2bcd8739ae039);

var $3ZIUY = parcelRequire("3ZIUY");

var $eJ303 = parcelRequire("eJ303");

var $wPDJ2 = parcelRequire("wPDJ2");

var $1v58a = parcelRequire("1v58a");

var $9N2WV = parcelRequire("9N2WV");

var $jNRCw = parcelRequire("jNRCw");

var $kefRd = parcelRequire("kefRd");

var $fq1Ka = parcelRequire("fq1Ka");

var $ekVLF = parcelRequire("ekVLF");

var $hZOmC = parcelRequire("hZOmC");

var $iABBo = parcelRequire("iABBo");
function $fc06601977373d48$var$preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = $fq1Ka.default(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = $eJ303.default(state.placement);
    var variation = $ekVLF.default(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = $wPDJ2.default(basePlacement);
    var altAxis = $1v58a.default(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === 'y' ? $3ZIUY.top : $3ZIUY.left;
        var altSide = mainAxis === 'y' ? $3ZIUY.bottom : $3ZIUY.right;
        var len = mainAxis === 'y' ? 'height' : 'width';
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === $3ZIUY.start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === $3ZIUY.start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? $jNRCw.default(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : $hZOmC.default();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = $9N2WV.within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && $kefRd.default(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = $9N2WV.within(tether ? $iABBo.min(min, tetherMin) : min, offset, tether ? $iABBo.max(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === 'x' ? $3ZIUY.top : $3ZIUY.left;
        var _altSide = mainAxis === 'x' ? $3ZIUY.bottom : $3ZIUY.right;
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === 'y' ? 'height' : 'width';
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            $3ZIUY.top,
            $3ZIUY.left
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? $9N2WV.withinMaxClamp(_tetherMin, _offset, _tetherMax) : $9N2WV.within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $fc06601977373d48$export$2e2bcd8739ae039 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: $fc06601977373d48$var$preventOverflow,
    requiresIfExists: [
        'offset'
    ]
};

});
parcelRequire.register("1v58a", function(module, exports) {

$parcel$export(module.exports, "default", () => $117caa8bfa49c53b$export$2e2bcd8739ae039);
function $117caa8bfa49c53b$export$2e2bcd8739ae039(axis) {
    return axis === 'x' ? 'y' : 'x';
}

});

parcelRequire.register("9N2WV", function(module, exports) {

$parcel$export(module.exports, "within", () => $720afa5761e0363d$export$f28d906d67a997f3);
$parcel$export(module.exports, "withinMaxClamp", () => $720afa5761e0363d$export$86c8af6d3ef0b4a);

var $iABBo = parcelRequire("iABBo");
function $720afa5761e0363d$export$f28d906d67a997f3(min, value, max) {
    return $iABBo.max(min, $iABBo.min(value, max));
}
function $720afa5761e0363d$export$86c8af6d3ef0b4a(min, value, max) {
    var v = $720afa5761e0363d$export$f28d906d67a997f3(min, value, max);
    return v > max ? max : v;
}

});


parcelRequire.register("7b3sC", function(module, exports) {

$parcel$export(module.exports, "default", () => $539c3eb46bc0c50d$export$2e2bcd8739ae039);

var $eJ303 = parcelRequire("eJ303");

var $jNRCw = parcelRequire("jNRCw");

var $ellK5 = parcelRequire("ellK5");

var $kefRd = parcelRequire("kefRd");

var $wPDJ2 = parcelRequire("wPDJ2");

var $9N2WV = parcelRequire("9N2WV");

var $2bVTQ = parcelRequire("2bVTQ");

var $3a0dK = parcelRequire("3a0dK");

var $3ZIUY = parcelRequire("3ZIUY");

var $539c3eb46bc0c50d$var$toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : padding;
    return $2bVTQ.default(typeof padding !== 'number' ? padding : $3a0dK.default(padding, $3ZIUY.basePlacements));
};
function $539c3eb46bc0c50d$var$arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = $eJ303.default(state.placement);
    var axis = $wPDJ2.default(basePlacement);
    var isVertical = [
        $3ZIUY.left,
        $3ZIUY.right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = $539c3eb46bc0c50d$var$toPaddingObject(options.padding, state);
    var arrowRect = $jNRCw.default(arrowElement);
    var minProp = axis === 'y' ? $3ZIUY.top : $3ZIUY.left;
    var maxProp = axis === 'y' ? $3ZIUY.bottom : $3ZIUY.right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = $kefRd.default(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = $9N2WV.within(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function $539c3eb46bc0c50d$var$effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === 'string') {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!$ellK5.default(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
var $539c3eb46bc0c50d$export$2e2bcd8739ae039 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: $539c3eb46bc0c50d$var$arrow,
    effect: $539c3eb46bc0c50d$var$effect,
    requires: [
        'popperOffsets'
    ],
    requiresIfExists: [
        'preventOverflow'
    ]
};

});

parcelRequire.register("iZmmk", function(module, exports) {

$parcel$export(module.exports, "default", () => $dd2f448e6dbb0944$export$2e2bcd8739ae039);

var $3ZIUY = parcelRequire("3ZIUY");

var $fq1Ka = parcelRequire("fq1Ka");
function $dd2f448e6dbb0944$var$getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function $dd2f448e6dbb0944$var$isAnySideFullyClipped(overflow) {
    return [
        $3ZIUY.top,
        $3ZIUY.right,
        $3ZIUY.bottom,
        $3ZIUY.left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function $dd2f448e6dbb0944$var$hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = $fq1Ka.default(state, {
        elementContext: 'reference'
    });
    var popperAltOverflow = $fq1Ka.default(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = $dd2f448e6dbb0944$var$getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = $dd2f448e6dbb0944$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = $dd2f448e6dbb0944$var$isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = $dd2f448e6dbb0944$var$isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        'data-popper-reference-hidden': isReferenceHidden,
        'data-popper-escaped': hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
var $dd2f448e6dbb0944$export$2e2bcd8739ae039 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: [
        'preventOverflow'
    ],
    fn: $dd2f448e6dbb0944$var$hide
};

});





parcelRequire.register("1lES0", function(module, exports) {

var $hMMjP = parcelRequire("hMMjP");

var $6iD1U = parcelRequire("6iD1U");

var $4MZjG = parcelRequire("4MZjG");
const $0fb7748d25d00eb1$var$menu = new $6iD1U.default({
    menuSelector: 'menu',
    togglersSelector: 'menu-toggler',
    closersSelector: 'menu-closer'
});
$0fb7748d25d00eb1$var$menu.init();
const $0fb7748d25d00eb1$var$menuButtonsNumber = new $4MZjG.default();
$0fb7748d25d00eb1$var$menuButtonsNumber.init();
const $0fb7748d25d00eb1$var$menuTabs = new $hMMjP.default({
    tabSelector: '.menu__cards',
    btnSelector: '.menu__link-button'
});
$0fb7748d25d00eb1$var$menuTabs.init();

});
parcelRequire.register("hMMjP", function(module, exports) {

$parcel$export(module.exports, "default", () => $cf2c6673f98bf38d$export$2e2bcd8739ae039);

class $cf2c6673f98bf38d$var$Tabs {
    constructor({ tabSelector: tabSelector , btnSelector: btnSelector , navSelector: navSelector , activeClass: activeClass = 'js--active' , eventType: eventType = 'click' , initialTab: initialTab = 0 , hasMovingBackground: hasMovingBackground = false , movingBackgroundClass: movingBackgroundClass = 'tabs__background' , searchParameterName: searchParameterName , tabNameAttribute: tabNameAttribute = 'data-tab-name' ,  }){
        this.tabs = document.querySelectorAll(tabSelector);
        this.tabsNames = new Array(this.tabs.length);
        this.btns = document.querySelectorAll(btnSelector);
        this.nav = document.querySelector(navSelector) || this.btns[0]?.parentNode;
        this.activeClass = activeClass;
        this.eventType = eventType;
        this.initialTab = initialTab;
        this.currentTabIndex = 0;
        this.prev = [];
        this.movingBackground = undefined;
        this.hasMovingBackground = hasMovingBackground;
        this.movingBackgroundClass = movingBackgroundClass;
        this.searchParameterName = searchParameterName;
        this.tabNameAttribute = tabNameAttribute;
    }
    init() {
        this.initBtns();
        this.initUnderline();
        this.initSearchParamsLogic();
        this.setInitTabIndex();
        this.goTo(this.currentTabIndex);
        return this;
    }
    goTo(_id) {
        const id = typeof _id === 'string' ? this.tabsNames.indexOf(_id) : _id;
        if (this.prev.length && this.prev[this.prev.length - 1] === id) this.prev.pop();
        else this.prev.push(this.currentTabIndex);
        this.currentTabIndex = id;
        // set active class to current tab
        this.tabs.forEach((tab)=>{
            tab.classList.remove(this.activeClass);
        });
        this.tabs[id].classList.add(this.activeClass);
        // set active class to current button
        if (this.btns.length) {
            this.btns.forEach((btn)=>{
                btn.classList.remove(this.activeClass);
            });
            this.btns[id].classList.add(this.activeClass);
        }
        // set background position
        if (this.hasMovingBackground) {
            this.movingBackground.style.left = `${this.btns[id].offsetLeft}px`;
            this.movingBackground.style.top = `${this.btns[id].offsetTop}px`;
            this.movingBackground.style.width = `${this.btns[id].offsetWidth}px`;
            this.movingBackground.style.height = `${this.btns[id].offsetHeight}px`;
        }
        // set url parameter
        if (this.searchParameterName) {
            const url = new URL(window.location);
            url.searchParams.set(this.searchParameterName, this.tabsNames[id]);
            // eslint-disable-next-line no-restricted-globals
            history.replaceState(null, null, url.toString());
        }
        return this.tabs[id];
    }
    goToNext() {
        return this.goTo(this.currentTabIndex + 1);
    }
    goToPrev() {
        return this.goTo(this.prev[this.prev.length - 1]);
    }
    initBtns() {
        if (!this.btns.length) return;
        this.btns.forEach((btn, i)=>{
            btn.addEventListener(this.eventType, ()=>{
                this.goTo(i);
            });
        });
    }
    initUnderline() {
        if (!this.hasMovingBackground) return;
        let movingBackground = this.nav.querySelector(`.${this.movingBackgroundClass}`);
        if (!movingBackground) {
            movingBackground = document.createElement('span');
            movingBackground.classList.add(this.movingBackgroundClass);
            this.nav.append(movingBackground);
        }
        this.movingBackground = movingBackground;
    }
    initSearchParamsLogic() {
        if (!this.searchParameterName) return;
        for(let i = 0; i < this.tabs.length; i += 1)this.tabsNames[i] = this.tabs[i].getAttribute(this.tabNameAttribute) || `${i}`;
    }
    setInitTabIndex() {
        if (typeof this.initialTab === 'number') this.currentTabIndex = this.initialTab;
        else this.currentTabIndex = this.tabsNames.indexOf(this.initialTab);
        return this.currentTabIndex;
    }
}
var $cf2c6673f98bf38d$export$2e2bcd8739ae039 = $cf2c6673f98bf38d$var$Tabs;

});

parcelRequire.register("6iD1U", function(module, exports) {

$parcel$export(module.exports, "default", () => $4962b306cae42569$export$2e2bcd8739ae039);
class $4962b306cae42569$var$MenuModule {
    constructor(settings){
        this.settings = settings;
        this.overlay = settings.overlay ? settings.overlay : false;
        this.menu = document.querySelector(`.${settings.menuSelector}`);
        this.togglers = Array.from(document.querySelectorAll(`.${settings.togglersSelector}`));
        this.closers = Array.from(document.querySelectorAll(`.${settings.closersSelector}`));
        this.scrollBlock = settings.scrollBlock ? settings.scrollBlock : true;
        this.htmlElement = document.querySelector('html');
        this.overlayElem = document.querySelector('.page-overlay');
    }
    init = ()=>{
        if (this.menu) {
            this.togglers.forEach((item)=>{
                item.addEventListener('click', this.toggleMenu);
            });
            this.closers.forEach((item)=>{
                item.addEventListener('click', this.closeMenu);
            });
        }
    };
    toggleMenu = ()=>{
        if (this.scrollBlock) {
            if (this.menu.classList.contains(`${this.settings.menuSelector}--opened`)) this.htmlElement.style.overflowY = 'auto';
            else this.htmlElement.style.overflowY = 'hidden';
        }
        this.menu.classList.toggle(`${this.settings.menuSelector}--opened`);
        if (this.overlay) this.toggleOverlay();
        this.togglers.forEach((el)=>{
            el.classList.toggle('open');
        });
    };
    closeMenu = ()=>{
        this.menu.classList.remove(`${this.settings.menuSelector}--opened`);
        if (this.overlay) this.hideOverlay();
        this.togglers.forEach((el)=>{
            el.classList.remove('open');
        });
        if (this.scrollBlock) document.querySelector('html').style.overflowY = 'auto';
    };
    toggleOverlay = ()=>{
        if (this.overlayElem.classList.contains('page-overlay--showed')) this.hideOverlay();
        else this.showOverlay();
    };
    showOverlay = ()=>{
        this.overlayElem.classList.add('page-overlay--showed');
        setTimeout(()=>{
            this.overlayElem.classList.add('page-overlay--full-opacity');
        }, 0);
    };
    hideOverlay = ()=>{
        this.overlayElem.classList.remove('page-overlay--full-opacity');
        setTimeout(()=>{
            this.overlayElem.classList.remove('page-overlay--showed');
        }, 500);
    };
}
var $4962b306cae42569$export$2e2bcd8739ae039 = $4962b306cae42569$var$MenuModule;

});

parcelRequire.register("4MZjG", function(module, exports) {

$parcel$export(module.exports, "default", () => $37cb355184372344$export$2e2bcd8739ae039);
class $37cb355184372344$var$MenuButtonsNumber {
    constructor(){
        this.buttons = Array.from(document.querySelectorAll('.menu__link-button'));
    }
    init = ()=>{
        window.addEventListener('resize', this.initStylesAndNumbers);
        this.initStylesAndNumbers();
    };
    initStylesAndNumbers = ()=>{
        const windowWidth = document.documentElement.clientWidth;
        const { length: length  } = this.buttons;
        const elemWithoutBorder = length % 2 === 0 ? length / 2 - 1 : (length + 1) / 2 - 1;
        this.buttons.forEach((item, index)=>{
            item.childNodes[1].textContent = index < 9 ? `0${index + 1}` : index + 1;
            if (index === elemWithoutBorder && windowWidth > 811 || index === length - 1) item.childNodes[5].classList.add('menu__link-button-divider--hidden');
            else item.childNodes[5].classList.remove('menu__link-button-divider--hidden');
        });
    };
}
var $37cb355184372344$export$2e2bcd8739ae039 = $37cb355184372344$var$MenuButtonsNumber;

});


parcelRequire.register("ePdDe", function(module, exports) {
parcelRequire("hMMjP");

var $6iD1U = parcelRequire("6iD1U");
parcelRequire("4MZjG");
const $acb0671e1370a7ed$var$mobileMenu = new $6iD1U.default({
    menuSelector: 'mobile-menu',
    togglersSelector: 'mobile-menu-toggler',
    closersSelector: 'mobile-menu-closer',
    overlay: true
});
$acb0671e1370a7ed$var$mobileMenu.init();
class $acb0671e1370a7ed$var$MobileMenuDropdown {
    constructor(props){
        this.buttons = Array.from(document.querySelectorAll('.mobile-menu__dropdown-button'));
    }
    init = ()=>{
        this.closeAll();
        this.buttons.forEach((el)=>{
            el.addEventListener('click', ()=>{
                this.toggle(el);
            });
        });
    };
    toggle = (el)=>{
        if (el.nextElementSibling.classList.contains('mobile-menu__dropdown--opened')) {
            console.log('sdfsdfsdfsd');
            this.close(el);
        } else {
            this.closeAll();
            this.open(el);
        }
    };
    open = (el)=>{
        el.nextElementSibling.classList.add('mobile-menu__dropdown--opened');
    };
    close = (el)=>{
        el.nextElementSibling.classList.remove('mobile-menu__dropdown--opened');
    };
    closeAll = ()=>{
        this.buttons.forEach((el)=>{
            this.close(el);
        });
    };
}
const $acb0671e1370a7ed$var$mobDropdown = new $acb0671e1370a7ed$var$MobileMenuDropdown();
$acb0671e1370a7ed$var$mobDropdown.init();

});

parcelRequire.register("epDfQ", function(module, exports) {


});


//# sourceMappingURL=index~b7baf910.js.map
