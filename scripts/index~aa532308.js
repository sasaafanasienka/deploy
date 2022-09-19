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
parcelRequire.register("9b0vI", function(module, exports) {

$parcel$export(module.exports, "default", () => (parcelRequire("5hSNN")).default);
$parcel$export(module.exports, "Navigation", () => (parcelRequire("ha22a")).default);
$parcel$export(module.exports, "Pagination", () => (parcelRequire("9oDXP")).default);

var $5hSNN = parcelRequire("5hSNN");

var $liRRE = parcelRequire("liRRE");

var $hMA3u = parcelRequire("hMA3u");

var $aAlzk = parcelRequire("aAlzk");

var $ha22a = parcelRequire("ha22a");

var $9oDXP = parcelRequire("9oDXP");

var $eE8jm = parcelRequire("eE8jm");

var $4ZWcI = parcelRequire("4ZWcI");

var $bgy79 = parcelRequire("bgy79");

var $3l042 = parcelRequire("3l042");

var $8lmSk = parcelRequire("8lmSk");

var $ag9Tg = parcelRequire("ag9Tg");

var $b02yM = parcelRequire("b02yM");

var $lc6K7 = parcelRequire("lc6K7");

var $ekC8M = parcelRequire("ekC8M");

var $Xz5Fs = parcelRequire("Xz5Fs");

var $aXtn0 = parcelRequire("aXtn0");

var $vRkFc = parcelRequire("vRkFc");

var $2yK9T = parcelRequire("2yK9T");

var $274Ut = parcelRequire("274Ut");

var $bFGtw = parcelRequire("bFGtw");

var $4wG0m = parcelRequire("4wG0m");

var $g61En = parcelRequire("g61En");

var $kaGF8 = parcelRequire("kaGF8");

var $iy6JS = parcelRequire("iy6JS");

});
parcelRequire.register("5hSNN", function(module, exports) {

$parcel$export(module.exports, "default", () => $3d990cdaf831417a$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");

var $1p0YI = parcelRequire("1p0YI");

var $9xOxO = parcelRequire("9xOxO");

var $5NHaU = parcelRequire("5NHaU");

var $8Ae79 = parcelRequire("8Ae79");

var $jeWeZ = parcelRequire("jeWeZ");

var $9DkOf = parcelRequire("9DkOf");

var $gafBh = parcelRequire("gafBh");

var $395U8 = parcelRequire("395U8");

var $bIaqu = parcelRequire("bIaqu");

var $bQUIX = parcelRequire("bQUIX");

var $dnaHJ = parcelRequire("dnaHJ");

var $adAVw = parcelRequire("adAVw");

var $6zB3T = parcelRequire("6zB3T");

var $fHuEu = parcelRequire("fHuEu");

var $9HrOQ = parcelRequire("9HrOQ");

var $3VEDh = parcelRequire("3VEDh");

var $3iWnp = parcelRequire("3iWnp");

var $3Md7A = parcelRequire("3Md7A");

var $38E92 = parcelRequire("38E92");
const $3d990cdaf831417a$var$prototypes = {
    eventsEmitter: $9DkOf.default,
    update: $gafBh.default,
    translate: $395U8.default,
    transition: $bIaqu.default,
    slide: $bQUIX.default,
    loop: $dnaHJ.default,
    grabCursor: $adAVw.default,
    events: $6zB3T.default,
    breakpoints: $fHuEu.default,
    checkOverflow: $3iWnp.default,
    classes: $9HrOQ.default,
    images: $3VEDh.default
};
const $3d990cdaf831417a$var$extendedDefaults = {
};
class $3d990cdaf831417a$var$Swiper {
    constructor(){
        let el;
        let params;
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') params = args[0];
        else [el, params] = args;
        if (!params) params = {
        };
        params = $hVkLy.extend({
        }, params);
        if (el && !params.el) params.el = el;
        if (params.el && $brB5Z.default(params.el).length > 1) {
            const swipers = [];
            $brB5Z.default(params.el).each((containerEl)=>{
                const newParams = $hVkLy.extend({
                }, params, {
                    el: containerEl
                });
                swipers.push(new $3d990cdaf831417a$var$Swiper(newParams));
            });
            return swipers;
        } // Swiper Instance
        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = $1p0YI.getSupport();
        swiper.device = $9xOxO.getDevice({
            userAgent: params.userAgent
        });
        swiper.browser = $5NHaU.getBrowser();
        swiper.eventsListeners = {
        };
        swiper.eventsAnyListeners = [];
        swiper.modules = [
            ...swiper.__modules__
        ];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);
        const allModulesParams = {
        };
        swiper.modules.forEach((mod)=>{
            mod({
                swiper: swiper,
                extendParams: $38E92.default(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }); // Extend defaults with modules params
        const swiperParams = $hVkLy.extend({
        }, $3Md7A.default, allModulesParams); // Extend defaults with passed params
        swiper.params = $hVkLy.extend({
        }, swiperParams, $3d990cdaf831417a$var$extendedDefaults, params);
        swiper.originalParams = $hVkLy.extend({
        }, swiper.params);
        swiper.passedParams = $hVkLy.extend({
        }, params); // add event listeners
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName)=>{
            swiper.on(eventName, swiper.params.on[eventName]);
        });
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);
         // Save Dom lib
        swiper.$ = $brB5Z.default; // Extend Swiper
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el: el,
            // Classes
            classNames: [],
            // Slides
            slides: $brB5Z.default(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            // isDirection
            isHorizontal () {
                return swiper.params.direction === 'horizontal';
            },
            isVertical () {
                return swiper.params.direction === 'vertical';
            },
            // Indexes
            activeIndex: 0,
            realIndex: 0,
            //
            isBeginning: true,
            isEnd: false,
            // Props
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            // Locks
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            // Touch Events
            touchEvents: function touchEvents() {
                const touch = [
                    'touchstart',
                    'touchmove',
                    'touchend',
                    'touchcancel'
                ];
                const desktop = [
                    'pointerdown',
                    'pointermove',
                    'pointerup'
                ];
                swiper.touchEventsTouch = {
                    start: touch[0],
                    move: touch[1],
                    end: touch[2],
                    cancel: touch[3]
                };
                swiper.touchEventsDesktop = {
                    start: desktop[0],
                    move: desktop[1],
                    end: desktop[2]
                };
                return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
            }(),
            touchEventsData: {
                isTouched: undefined,
                isMoved: undefined,
                allowTouchCallbacks: undefined,
                touchStartTime: undefined,
                isScrolling: undefined,
                currentTranslate: undefined,
                startTranslate: undefined,
                allowThresholdMove: undefined,
                // Form elements to match
                focusableElements: swiper.params.focusableElements,
                // Last click time
                lastClickTime: $hVkLy.now(),
                clickTimeout: undefined,
                // Velocities
                velocities: [],
                allowMomentumBounce: undefined,
                isTouchEvent: undefined,
                startMoving: undefined
            },
            // Clicks
            allowClick: true,
            // Touches
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            // Images
            imagesToLoad: [],
            imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init
        if (swiper.params.init) swiper.init();
         // Return app instance
        return swiper;
    }
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit('enable');
    }
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit('disable');
    }
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter((className)=>{
            return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
    }
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter((className)=>{
            return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
    }
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each((slideEl)=>{
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl: slideEl,
                classNames: classNames
            });
            swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
    }
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = 'current';
        if (exact === void 0) exact = false;
        const swiper = this;
        const { params: params , slides: slides , slidesGrid: slidesGrid , slidesSizesGrid: slidesSizesGrid , size: swiperSize , activeIndex: activeIndex  } = swiper;
        let spv = 1;
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex].swiperSlideSize;
            let breakLoop;
            for(let i = activeIndex + 1; i < slides.length; i += 1)if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for(let i1 = activeIndex - 1; i1 >= 0; i1 -= 1)if (slides[i1] && !breakLoop) {
                slideSize += slides[i1].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else {
            // eslint-disable-next-line
            if (view === 'current') for(let i = activeIndex + 1; i < slides.length; i += 1){
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
            else // previous
            for(let i2 = activeIndex - 1; i2 >= 0; i2 -= 1){
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i2] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const { snapGrid: snapGrid , params: params  } = swiper; // Breakpoints
        if (params.breakpoints) swiper.setBreakpoint();
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        function setTranslate() {
            const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
            const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
            swiper.setTranslate(newTranslate);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        let translated;
        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
            setTranslate();
            if (swiper.params.autoHeight) swiper.updateAutoHeight();
        } else {
            if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
            else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
            if (!translated) setTranslate();
        }
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
        swiper.emit('update');
    }
    changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        const swiper = this;
        const currentDirection = swiper.params.direction;
        if (!newDirection) // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') return swiper;
        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each((slideEl)=>{
            if (newDirection === 'vertical') slideEl.style.width = '';
            else slideEl.style.height = '';
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
    }
    mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el
        const $el = $brB5Z.default(el || swiper.params.el);
        el = $el[0];
        if (!el) return false;
        el.swiper = swiper;
        const getWrapperSelector = ()=>{
            return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };
        const getWrapper = ()=>{
            if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                const res = $brB5Z.default(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items
                res.children = (options)=>$el.children(options)
                ;
                return res;
            }
            if (!$el.children) return $brB5Z.default($el).children(getWrapperSelector());
            return $el.children(getWrapperSelector());
        }; // Find Wrapper
        let $wrapperEl = getWrapper();
        if ($wrapperEl.length === 0 && swiper.params.createElements) {
            const document = $bMYlU.getDocument();
            const wrapper = document.createElement('div');
            $wrapperEl = $brB5Z.default(wrapper);
            wrapper.className = swiper.params.wrapperClass;
            $el.append(wrapper);
            $el.children(`.${swiper.params.slideClass}`).each((slideEl)=>{
                $wrapperEl.append(slideEl);
            });
        }
        Object.assign(swiper, {
            $el: $el,
            el: el,
            $wrapperEl: $wrapperEl,
            wrapperEl: $wrapperEl[0],
            mounted: true,
            // RTL
            rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
            rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
            wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
    }
    init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint
        if (swiper.params.breakpoints) swiper.setBreakpoint();
         // Add Classes
        swiper.addClasses(); // Create loop
        if (swiper.params.loop) swiper.loopCreate();
         // Update size
        swiper.updateSize(); // Update slides
        swiper.updateSlides();
        if (swiper.params.watchOverflow) swiper.checkOverflow();
         // Set Grab Cursor
        if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
        if (swiper.params.preloadImages) swiper.preloadImages();
         // Slide To Initial Slide
        if (swiper.params.loop) swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
         // Attach events
        swiper.attachEvents(); // Init Flag
        swiper.initialized = true; // Emit
        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        const swiper = this;
        const { params: params , $el: $el , $wrapperEl: $wrapperEl , slides: slides  } = swiper;
        if (typeof swiper.params === 'undefined' || swiper.destroyed) return null;
        swiper.emit('beforeDestroy'); // Init Flag
        swiper.initialized = false; // Detach events
        swiper.detachEvents(); // Destroy loop
        if (params.loop) swiper.loopDestroy();
         // Cleanup styles
        if (cleanStyles) {
            swiper.removeClasses();
            $el.removeAttr('style');
            $wrapperEl.removeAttr('style');
            if (slides && slides.length) slides.removeClass([
                params.slideVisibleClass,
                params.slideActiveClass,
                params.slideNextClass,
                params.slidePrevClass
            ].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
        swiper.emit('destroy'); // Detach emitter events
        Object.keys(swiper.eventsListeners).forEach((eventName)=>{
            swiper.off(eventName);
        });
        if (deleteInstance !== false) {
            swiper.$el[0].swiper = null;
            $hVkLy.deleteProps(swiper);
        }
        swiper.destroyed = true;
        return null;
    }
    static extendDefaults(newDefaults) {
        $hVkLy.extend($3d990cdaf831417a$var$extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
        return $3d990cdaf831417a$var$extendedDefaults;
    }
    static get defaults() {
        return $3Md7A.default;
    }
    static installModule(mod) {
        if (!$3d990cdaf831417a$var$Swiper.prototype.__modules__) $3d990cdaf831417a$var$Swiper.prototype.__modules__ = [];
        const modules = $3d990cdaf831417a$var$Swiper.prototype.__modules__;
        if (typeof mod === 'function' && modules.indexOf(mod) < 0) modules.push(mod);
    }
    static use(module) {
        if (Array.isArray(module)) {
            module.forEach((m)=>$3d990cdaf831417a$var$Swiper.installModule(m)
            );
            return $3d990cdaf831417a$var$Swiper;
        }
        $3d990cdaf831417a$var$Swiper.installModule(module);
        return $3d990cdaf831417a$var$Swiper;
    }
}
Object.keys($3d990cdaf831417a$var$prototypes).forEach((prototypeGroup)=>{
    Object.keys($3d990cdaf831417a$var$prototypes[prototypeGroup]).forEach((protoMethod)=>{
        $3d990cdaf831417a$var$Swiper.prototype[protoMethod] = $3d990cdaf831417a$var$prototypes[prototypeGroup][protoMethod];
    });
});
$3d990cdaf831417a$var$Swiper.use([
    $8Ae79.default,
    $jeWeZ.default
]);
var $3d990cdaf831417a$export$2e2bcd8739ae039 = $3d990cdaf831417a$var$Swiper;

});
parcelRequire.register("bMYlU", function(module, exports) {

$parcel$export(module.exports, "getDocument", () => $8952fe2316cd3686$export$f65ca476c09acec0);
$parcel$export(module.exports, "getWindow", () => $8952fe2316cd3686$export$38b2d434cce3ea22);
/**
 * SSR Window 4.0.2
 * Better handling for window object in SSR environment
 * https://github.com/nolimits4web/ssr-window
 *
 * Copyright 2021, Vladimir Kharlampidi
 *
 * Licensed under MIT
 *
 * Released on: December 13, 2021
 */ /* eslint-disable no-param-reassign */ function $8952fe2316cd3686$var$isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
}
function $8952fe2316cd3686$export$8b58be045bf06082(target = {
}, src = {
}) {
    Object.keys(src).forEach((key)=>{
        if (typeof target[key] === 'undefined') target[key] = src[key];
        else if ($8952fe2316cd3686$var$isObject(src[key]) && $8952fe2316cd3686$var$isObject(target[key]) && Object.keys(src[key]).length > 0) $8952fe2316cd3686$export$8b58be045bf06082(target[key], src[key]);
    });
}
const $8952fe2316cd3686$export$3fdcb9b4d81368d8 = {
    body: {
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    activeElement: {
        blur () {
        },
        nodeName: ''
    },
    querySelector () {
        return null;
    },
    querySelectorAll () {
        return [];
    },
    getElementById () {
        return null;
    },
    createEvent () {
        return {
            initEvent () {
            }
        };
    },
    createElement () {
        return {
            children: [],
            childNodes: [],
            style: {
            },
            setAttribute () {
            },
            getElementsByTagName () {
                return [];
            }
        };
    },
    createElementNS () {
        return {
        };
    },
    importNode () {
        return null;
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    }
};
function $8952fe2316cd3686$export$f65ca476c09acec0() {
    const doc = typeof document !== 'undefined' ? document : {
    };
    $8952fe2316cd3686$export$8b58be045bf06082(doc, $8952fe2316cd3686$export$3fdcb9b4d81368d8);
    return doc;
}
const $8952fe2316cd3686$export$8582633f185c62bb = {
    document: $8952fe2316cd3686$export$3fdcb9b4d81368d8,
    navigator: {
        userAgent: ''
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
    },
    history: {
        replaceState () {
        },
        pushState () {
        },
        go () {
        },
        back () {
        }
    },
    CustomEvent: function CustomEvent() {
        return this;
    },
    addEventListener () {
    },
    removeEventListener () {
    },
    getComputedStyle () {
        return {
            getPropertyValue () {
                return '';
            }
        };
    },
    Image () {
    },
    Date () {
    },
    screen: {
    },
    setTimeout () {
    },
    clearTimeout () {
    },
    matchMedia () {
        return {
        };
    },
    requestAnimationFrame (callback) {
        if (typeof setTimeout === 'undefined') {
            callback();
            return null;
        }
        return setTimeout(callback, 0);
    },
    cancelAnimationFrame (id) {
        if (typeof setTimeout === 'undefined') return;
        clearTimeout(id);
    }
};
function $8952fe2316cd3686$export$38b2d434cce3ea22() {
    const win = typeof window !== 'undefined' ? window : {
    };
    $8952fe2316cd3686$export$8b58be045bf06082(win, $8952fe2316cd3686$export$8582633f185c62bb);
    return win;
}

});

parcelRequire.register("brB5Z", function(module, exports) {

$parcel$export(module.exports, "default", () => $854efdb770ed184a$export$2e2bcd8739ae039);

var $47Bbl = parcelRequire("47Bbl");
const $854efdb770ed184a$var$Methods = {
    addClass: $47Bbl.addClass,
    removeClass: $47Bbl.removeClass,
    hasClass: $47Bbl.hasClass,
    toggleClass: $47Bbl.toggleClass,
    attr: $47Bbl.attr,
    removeAttr: $47Bbl.removeAttr,
    transform: $47Bbl.transform,
    transition: $47Bbl.transition,
    on: $47Bbl.on,
    off: $47Bbl.off,
    trigger: $47Bbl.trigger,
    transitionEnd: $47Bbl.transitionEnd,
    outerWidth: $47Bbl.outerWidth,
    outerHeight: $47Bbl.outerHeight,
    styles: $47Bbl.styles,
    offset: $47Bbl.offset,
    css: $47Bbl.css,
    each: $47Bbl.each,
    html: $47Bbl.html,
    text: $47Bbl.text,
    is: $47Bbl.is,
    index: $47Bbl.index,
    eq: $47Bbl.eq,
    append: $47Bbl.append,
    prepend: $47Bbl.prepend,
    next: $47Bbl.next,
    nextAll: $47Bbl.nextAll,
    prev: $47Bbl.prev,
    prevAll: $47Bbl.prevAll,
    parent: $47Bbl.parent,
    parents: $47Bbl.parents,
    closest: $47Bbl.closest,
    find: $47Bbl.find,
    children: $47Bbl.children,
    filter: $47Bbl.filter,
    remove: $47Bbl.remove
};
Object.keys($854efdb770ed184a$var$Methods).forEach((methodName)=>{
    Object.defineProperty($47Bbl.$.fn, methodName, {
        value: $854efdb770ed184a$var$Methods[methodName],
        writable: true
    });
});
var $854efdb770ed184a$export$2e2bcd8739ae039 = $47Bbl.$;

});
parcelRequire.register("47Bbl", function(module, exports) {

$parcel$export(module.exports, "$", () => $3004a86efa0937ef$export$3d8c2f653ac9d0b9);
$parcel$export(module.exports, "html", () => $3004a86efa0937ef$export$c0bb0b647f701bb5);
$parcel$export(module.exports, "addClass", () => $3004a86efa0937ef$export$d2cf6cd1dc7067d3);
$parcel$export(module.exports, "removeClass", () => $3004a86efa0937ef$export$c2255604a80b4506);
$parcel$export(module.exports, "toggleClass", () => $3004a86efa0937ef$export$4a80062ca50b57c7);
$parcel$export(module.exports, "hasClass", () => $3004a86efa0937ef$export$4ea3d958472af68f);
$parcel$export(module.exports, "attr", () => $3004a86efa0937ef$export$7aabe8b3a840d2fd);
$parcel$export(module.exports, "removeAttr", () => $3004a86efa0937ef$export$842f2b51efdcb631);
$parcel$export(module.exports, "transform", () => $3004a86efa0937ef$export$51186ad6e864892a);
$parcel$export(module.exports, "transition", () => $3004a86efa0937ef$export$66bb15e2994e6a26);
$parcel$export(module.exports, "on", () => $3004a86efa0937ef$export$af631764ddc44097);
$parcel$export(module.exports, "parents", () => $3004a86efa0937ef$export$7901f6cd558b9a93);
$parcel$export(module.exports, "off", () => $3004a86efa0937ef$export$8c8705df4a2dcec9);
$parcel$export(module.exports, "trigger", () => $3004a86efa0937ef$export$e614dc9140f7ae71);
$parcel$export(module.exports, "transitionEnd", () => $3004a86efa0937ef$export$358dc01d65cad417);
$parcel$export(module.exports, "outerWidth", () => $3004a86efa0937ef$export$e823f88e4111159a);
$parcel$export(module.exports, "styles", () => $3004a86efa0937ef$export$9dd6ff9ea0189349);
$parcel$export(module.exports, "outerHeight", () => $3004a86efa0937ef$export$fc5b8aac72846d1e);
$parcel$export(module.exports, "offset", () => $3004a86efa0937ef$export$cc800923e997bb8);
$parcel$export(module.exports, "css", () => $3004a86efa0937ef$export$dbf350e5966cf602);
$parcel$export(module.exports, "each", () => $3004a86efa0937ef$export$79b2f7037acddd43);
$parcel$export(module.exports, "index", () => $3004a86efa0937ef$export$b610b8812bbcded9);
$parcel$export(module.exports, "filter", () => $3004a86efa0937ef$export$3dea766d36a8935f);
$parcel$export(module.exports, "text", () => $3004a86efa0937ef$export$6f093cfa640b7166);
$parcel$export(module.exports, "is", () => $3004a86efa0937ef$export$226b3eccf92c9ed9);
$parcel$export(module.exports, "eq", () => $3004a86efa0937ef$export$9663ddc1cf085b32);
$parcel$export(module.exports, "append", () => $3004a86efa0937ef$export$10d8903dec122b9d);
$parcel$export(module.exports, "parent", () => $3004a86efa0937ef$export$91124bb58bc04465);
$parcel$export(module.exports, "prepend", () => $3004a86efa0937ef$export$68159836694e22c1);
$parcel$export(module.exports, "next", () => $3004a86efa0937ef$export$48cfd1e771a65c4f);
$parcel$export(module.exports, "nextAll", () => $3004a86efa0937ef$export$3cd99760d81ede63);
$parcel$export(module.exports, "prev", () => $3004a86efa0937ef$export$232faf9add678146);
$parcel$export(module.exports, "prevAll", () => $3004a86efa0937ef$export$5a01ccd45552d0b4);
$parcel$export(module.exports, "closest", () => $3004a86efa0937ef$export$ff7f7c97cdce86e);
$parcel$export(module.exports, "find", () => $3004a86efa0937ef$export$71aa6c912b956294);
$parcel$export(module.exports, "children", () => $3004a86efa0937ef$export$bacb5cc5a11aef16);
$parcel$export(module.exports, "remove", () => $3004a86efa0937ef$export$cd7f480d6b8286c3);

var $bMYlU = parcelRequire("bMYlU");
/* eslint-disable no-proto */ function $3004a86efa0937ef$var$makeReactive(obj) {
    const proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
        get () {
            return proto;
        },
        set ($3004a86efa0937ef$export$2ab9a8f9f1186f14) {
            proto.__proto__ = $3004a86efa0937ef$export$2ab9a8f9f1186f14;
        }
    });
}
class $3004a86efa0937ef$var$Dom7 extends Array {
    constructor(items){
        if (typeof items === 'number') super(items);
        else {
            super(...items || []);
            $3004a86efa0937ef$var$makeReactive(this);
        }
    }
}
function $3004a86efa0937ef$var$arrayFlat(arr = []) {
    const res = [];
    arr.forEach((el)=>{
        if (Array.isArray(el)) res.push(...$3004a86efa0937ef$var$arrayFlat(el));
        else res.push(el);
    });
    return res;
}
function $3004a86efa0937ef$var$arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
}
function $3004a86efa0937ef$var$arrayUnique(arr) {
    const uniqueArray = [];
    for(let i = 0; i < arr.length; i += 1)if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    return uniqueArray;
}
function $3004a86efa0937ef$var$toCamelCase(string) {
    return string.toLowerCase().replace(/-(.)/g, (match, group)=>group.toUpperCase()
    );
}
// eslint-disable-next-line
function $3004a86efa0937ef$var$qsa(selector, context) {
    if (typeof selector !== 'string') return [
        selector
    ];
    const a = [];
    const res = context.querySelectorAll(selector);
    for(let i = 0; i < res.length; i += 1)a.push(res[i]);
    return a;
}
function $3004a86efa0937ef$export$3d8c2f653ac9d0b9(selector, context) {
    const window = $bMYlU.getWindow();
    const document = $bMYlU.getDocument();
    let arr = [];
    if (!context && selector instanceof $3004a86efa0937ef$var$Dom7) return selector;
    if (!selector) return new $3004a86efa0937ef$var$Dom7(arr);
    if (typeof selector === 'string') {
        const $3004a86efa0937ef$export$c0bb0b647f701bb5 = selector.trim();
        if ($3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<') >= 0 && $3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('>') >= 0) {
            let toCreate = 'div';
            if ($3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<li') === 0) toCreate = 'ul';
            if ($3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<tr') === 0) toCreate = 'tbody';
            if ($3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<td') === 0 || $3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<th') === 0) toCreate = 'tr';
            if ($3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<tbody') === 0) toCreate = 'table';
            if ($3004a86efa0937ef$export$c0bb0b647f701bb5.indexOf('<option') === 0) toCreate = 'select';
            const tempParent = document.createElement(toCreate);
            tempParent.innerHTML = $3004a86efa0937ef$export$c0bb0b647f701bb5;
            for(let i = 0; i < tempParent.childNodes.length; i += 1)arr.push(tempParent.childNodes[i]);
        } else arr = $3004a86efa0937ef$var$qsa(selector.trim(), context || document);
         // arr = qsa(selector, document);
    } else if (selector.nodeType || selector === window || selector === document) arr.push(selector);
    else if (Array.isArray(selector)) {
        if (selector instanceof $3004a86efa0937ef$var$Dom7) return selector;
        arr = selector;
    }
    return new $3004a86efa0937ef$var$Dom7($3004a86efa0937ef$var$arrayUnique(arr));
}
$3004a86efa0937ef$export$3d8c2f653ac9d0b9.fn = $3004a86efa0937ef$var$Dom7.prototype;
// eslint-disable-next-line
function $3004a86efa0937ef$export$d2cf6cd1dc7067d3(...classes) {
    const classNames = $3004a86efa0937ef$var$arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.add(...classNames);
    });
    return this;
}
function $3004a86efa0937ef$export$c2255604a80b4506(...classes) {
    const classNames = $3004a86efa0937ef$var$arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        el.classList.remove(...classNames);
    });
    return this;
}
function $3004a86efa0937ef$export$4a80062ca50b57c7(...classes) {
    const classNames = $3004a86efa0937ef$var$arrayFlat(classes.map((c)=>c.split(' ')
    ));
    this.forEach((el)=>{
        classNames.forEach((className)=>{
            el.classList.toggle(className);
        });
    });
}
function $3004a86efa0937ef$export$4ea3d958472af68f(...classes) {
    const classNames = $3004a86efa0937ef$var$arrayFlat(classes.map((c)=>c.split(' ')
    ));
    return $3004a86efa0937ef$var$arrayFilter(this, (el)=>{
        return classNames.filter((className)=>el.classList.contains(className)
        ).length > 0;
    }).length > 0;
}
function $3004a86efa0937ef$export$7aabe8b3a840d2fd(attrs, $3004a86efa0937ef$export$2ab9a8f9f1186f14) {
    if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
    } // Set attrs
    for(let i = 0; i < this.length; i += 1){
        if (arguments.length === 2) // String
        this[i].setAttribute(attrs, $3004a86efa0937ef$export$2ab9a8f9f1186f14);
        else // Object
        for(const attrName in attrs){
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
        }
    }
    return this;
}
function $3004a86efa0937ef$export$842f2b51efdcb631($3004a86efa0937ef$export$7aabe8b3a840d2fd) {
    for(let i = 0; i < this.length; i += 1)this[i].removeAttribute($3004a86efa0937ef$export$7aabe8b3a840d2fd);
    return this;
}
function $3004a86efa0937ef$export$977f3f6a9323c0f6(props, $3004a86efa0937ef$export$2ab9a8f9f1186f14) {
    if (arguments.length === 1 && typeof props === 'string') {
        // Get prop
        if (this[0]) return this[0][props];
    } else {
        // Set props
        for(let i = 0; i < this.length; i += 1){
            if (arguments.length === 2) // String
            this[i][props] = $3004a86efa0937ef$export$2ab9a8f9f1186f14;
            else // Object
            for(const propName in props)this[i][propName] = props[propName];
        }
        return this;
    }
    return this;
}
function $3004a86efa0937ef$export$4051a07651545597(key, $3004a86efa0937ef$export$2ab9a8f9f1186f14) {
    let el;
    if (typeof $3004a86efa0937ef$export$2ab9a8f9f1186f14 === 'undefined') {
        el = this[0];
        if (!el) return undefined; // Get value
        if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) return el.dom7ElementDataStorage[key];
        const dataKey = el.getAttribute(`data-${key}`);
        if (dataKey) return dataKey;
        return undefined;
    } // Set value
    for(let i = 0; i < this.length; i += 1){
        el = this[i];
        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {
        };
        el.dom7ElementDataStorage[key] = $3004a86efa0937ef$export$2ab9a8f9f1186f14;
    }
    return this;
}
function $3004a86efa0937ef$export$33f1b464f736cf21(key) {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
            el.dom7ElementDataStorage[key] = null;
            delete el.dom7ElementDataStorage[key];
        }
    }
}
function $3004a86efa0937ef$export$ff416b0d33795a06() {
    const el = this[0];
    if (!el) return undefined;
    const $3004a86efa0937ef$export$ff416b0d33795a06 = {
    }; // eslint-disable-line
    if (el.dataset) for(const dataKey in el.dataset)$3004a86efa0937ef$export$ff416b0d33795a06[dataKey] = el.dataset[dataKey];
    else for(let i = 0; i < el.attributes.length; i += 1){
        const $3004a86efa0937ef$export$7aabe8b3a840d2fd = el.attributes[i];
        if ($3004a86efa0937ef$export$7aabe8b3a840d2fd.name.indexOf('data-') >= 0) $3004a86efa0937ef$export$ff416b0d33795a06[$3004a86efa0937ef$var$toCamelCase($3004a86efa0937ef$export$7aabe8b3a840d2fd.name.split('data-')[1])] = $3004a86efa0937ef$export$7aabe8b3a840d2fd.value;
    }
    for(const key in $3004a86efa0937ef$export$ff416b0d33795a06){
        if ($3004a86efa0937ef$export$ff416b0d33795a06[key] === 'false') $3004a86efa0937ef$export$ff416b0d33795a06[key] = false;
        else if ($3004a86efa0937ef$export$ff416b0d33795a06[key] === 'true') $3004a86efa0937ef$export$ff416b0d33795a06[key] = true;
        else if (parseFloat($3004a86efa0937ef$export$ff416b0d33795a06[key]) === $3004a86efa0937ef$export$ff416b0d33795a06[key] * 1) $3004a86efa0937ef$export$ff416b0d33795a06[key] *= 1;
    }
    return $3004a86efa0937ef$export$ff416b0d33795a06;
}
function $3004a86efa0937ef$export$b02c28252f48c6ac($3004a86efa0937ef$export$2ab9a8f9f1186f14) {
    if (typeof $3004a86efa0937ef$export$2ab9a8f9f1186f14 === 'undefined') {
        // get value
        const el = this[0];
        if (!el) return undefined;
        if (el.multiple && el.nodeName.toLowerCase() === 'select') {
            const values = [];
            for(let i = 0; i < el.selectedOptions.length; i += 1)values.push(el.selectedOptions[i].value);
            return values;
        }
        return el.value;
    } // set value
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (Array.isArray($3004a86efa0937ef$export$2ab9a8f9f1186f14) && el.multiple && el.nodeName.toLowerCase() === 'select') for(let j = 0; j < el.options.length; j += 1)el.options[j].selected = $3004a86efa0937ef$export$2ab9a8f9f1186f14.indexOf(el.options[j].value) >= 0;
        else el.value = $3004a86efa0937ef$export$2ab9a8f9f1186f14;
    }
    return this;
}
function $3004a86efa0937ef$export$2ab9a8f9f1186f14($3004a86efa0937ef$export$2ab9a8f9f1186f14) {
    return this.val($3004a86efa0937ef$export$2ab9a8f9f1186f14);
}
function $3004a86efa0937ef$export$51186ad6e864892a($3004a86efa0937ef$export$51186ad6e864892a) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transform = $3004a86efa0937ef$export$51186ad6e864892a;
    return this;
}
function $3004a86efa0937ef$export$66bb15e2994e6a26(duration) {
    for(let i = 0; i < this.length; i += 1)this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
    return this;
}
function $3004a86efa0937ef$export$af631764ddc44097(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        if ($3004a86efa0937ef$export$3d8c2f653ac9d0b9(target).is(targetSelector)) listener.apply(target, eventData);
        else {
            const $3004a86efa0937ef$export$7901f6cd558b9a93 = $3004a86efa0937ef$export$3d8c2f653ac9d0b9(target).parents(); // eslint-disable-line
            for(let k = 0; k < $3004a86efa0937ef$export$7901f6cd558b9a93.length; k += 1)if ($3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$7901f6cd558b9a93[k]).is(targetSelector)) listener.apply($3004a86efa0937ef$export$7901f6cd558b9a93[k], eventData);
        }
    }
    function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];
        if (eventData.indexOf(e) < 0) eventData.unshift(e);
        listener.apply(this, eventData);
    }
    const events = eventType.split(' ');
    let j;
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (!targetSelector) for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {
            };
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
                listener: listener,
                proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
        }
        else // Live events
        for(j = 0; j < events.length; j += 1){
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {
            };
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
                listener: listener,
                proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
        }
    }
    return this;
}
function $3004a86efa0937ef$export$8c8705df4a2dcec9(...args) {
    let [eventType, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
    }
    if (!capture) capture = false;
    const events = eventType.split(' ');
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            let handlers;
            if (!targetSelector && el.dom7Listeners) handlers = el.dom7Listeners[event];
            else if (targetSelector && el.dom7LiveListeners) handlers = el.dom7LiveListeners[event];
            if (handlers && handlers.length) for(let k = handlers.length - 1; k >= 0; k -= 1){
                const handler = handlers[k];
                if (listener && handler.listener === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                } else if (!listener) {
                    el.removeEventListener(event, handler.proxyListener, capture);
                    handlers.splice(k, 1);
                }
            }
        }
    }
    return this;
}
function $3004a86efa0937ef$export$d2de3aaeafa91619(...args) {
    const dom = this;
    let [eventName, targetSelector, listener, capture] = args;
    if (typeof args[1] === 'function') {
        [eventName, listener, capture] = args;
        targetSelector = undefined;
    }
    function onceHandler(...eventArgs) {
        listener.apply(this, eventArgs);
        dom.off(eventName, targetSelector, onceHandler, capture);
        if (onceHandler.dom7proxy) delete onceHandler.dom7proxy;
    }
    onceHandler.dom7proxy = listener;
    return dom.on(eventName, targetSelector, onceHandler, capture);
}
function $3004a86efa0937ef$export$e614dc9140f7ae71(...args) {
    const window = $bMYlU.getWindow();
    const events = args[0].split(' ');
    const eventData = args[1];
    for(let i = 0; i < events.length; i += 1){
        const event = events[i];
        for(let j = 0; j < this.length; j += 1){
            const el = this[j];
            if (window.CustomEvent) {
                const evt = new window.CustomEvent(event, {
                    detail: eventData,
                    bubbles: true,
                    cancelable: true
                });
                el.dom7EventData = args.filter(($3004a86efa0937ef$export$4051a07651545597, dataIndex)=>dataIndex > 0
                );
                el.dispatchEvent(evt);
                el.dom7EventData = [];
                delete el.dom7EventData;
            }
        }
    }
    return this;
}
function $3004a86efa0937ef$export$358dc01d65cad417(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
    }
    if (callback) dom.on('transitionend', fireCallBack);
    return this;
}
function $3004a86efa0937ef$export$70f051812b89bf32(callback) {
    const dom = this;
    function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('animationend', fireCallBack);
    }
    if (callback) dom.on('animationend', fireCallBack);
    return this;
}
function $3004a86efa0937ef$export$7e3df82ee760448c() {
    const window = $bMYlU.getWindow();
    if (this[0] === window) return window.innerWidth;
    if (this.length > 0) return parseFloat(this.css('width'));
    return null;
}
function $3004a86efa0937ef$export$e823f88e4111159a(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const $3004a86efa0937ef$export$9dd6ff9ea0189349 = this.styles();
            return this[0].offsetWidth + parseFloat($3004a86efa0937ef$export$9dd6ff9ea0189349.getPropertyValue('margin-right')) + parseFloat($3004a86efa0937ef$export$9dd6ff9ea0189349.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
    }
    return null;
}
function $3004a86efa0937ef$export$ac607276a8fe9f0a() {
    const window = $bMYlU.getWindow();
    if (this[0] === window) return window.innerHeight;
    if (this.length > 0) return parseFloat(this.css('height'));
    return null;
}
function $3004a86efa0937ef$export$fc5b8aac72846d1e(includeMargins) {
    if (this.length > 0) {
        if (includeMargins) {
            const $3004a86efa0937ef$export$9dd6ff9ea0189349 = this.styles();
            return this[0].offsetHeight + parseFloat($3004a86efa0937ef$export$9dd6ff9ea0189349.getPropertyValue('margin-top')) + parseFloat($3004a86efa0937ef$export$9dd6ff9ea0189349.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
    }
    return null;
}
function $3004a86efa0937ef$export$cc800923e997bb8() {
    if (this.length > 0) {
        const window = $bMYlU.getWindow();
        const document = $bMYlU.getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9 = el === window ? window.scrollY : el.scrollTop;
        const $3004a86efa0937ef$export$6eddf9bc7f2b7d80 = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9 - clientTop,
            left: box.left + $3004a86efa0937ef$export$6eddf9bc7f2b7d80 - clientLeft
        };
    }
    return null;
}
function $3004a86efa0937ef$export$fe8985bb6374093c() {
    for(let i = 0; i < this.length; i += 1)this[i].style.display = 'none';
    return this;
}
function $3004a86efa0937ef$export$57bf213be019eeb0() {
    const window = $bMYlU.getWindow();
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.style.display === 'none') el.style.display = '';
        if (window.getComputedStyle(el, null).getPropertyValue('display') === 'none') // Still not visible
        el.style.display = 'block';
    }
    return this;
}
function $3004a86efa0937ef$export$9dd6ff9ea0189349() {
    const window = $bMYlU.getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {
    };
}
function $3004a86efa0937ef$export$dbf350e5966cf602(props, $3004a86efa0937ef$export$2ab9a8f9f1186f14) {
    const window = $bMYlU.getWindow();
    let i;
    if (arguments.length === 1) {
        if (typeof props === 'string') {
            // .css('width')
            if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
            // .css({ width: '100px' })
            for(i = 0; i < this.length; i += 1)for(const $3004a86efa0937ef$export$977f3f6a9323c0f6 in props)this[i].style[$3004a86efa0937ef$export$977f3f6a9323c0f6] = props[$3004a86efa0937ef$export$977f3f6a9323c0f6];
            return this;
        }
    }
    if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for(i = 0; i < this.length; i += 1)this[i].style[props] = $3004a86efa0937ef$export$2ab9a8f9f1186f14;
        return this;
    }
    return this;
}
function $3004a86efa0937ef$export$79b2f7037acddd43(callback) {
    if (!callback) return this;
    this.forEach((el, $3004a86efa0937ef$export$b610b8812bbcded9)=>{
        callback.apply(el, [
            el,
            $3004a86efa0937ef$export$b610b8812bbcded9
        ]);
    });
    return this;
}
function $3004a86efa0937ef$export$3dea766d36a8935f(callback) {
    const result = $3004a86efa0937ef$var$arrayFilter(this, callback);
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9(result);
}
function $3004a86efa0937ef$export$c0bb0b647f701bb5($3004a86efa0937ef$export$c0bb0b647f701bb5) {
    if (typeof $3004a86efa0937ef$export$c0bb0b647f701bb5 === 'undefined') return this[0] ? this[0].innerHTML : null;
    for(let i = 0; i < this.length; i += 1)this[i].innerHTML = $3004a86efa0937ef$export$c0bb0b647f701bb5;
    return this;
}
function $3004a86efa0937ef$export$6f093cfa640b7166($3004a86efa0937ef$export$6f093cfa640b7166) {
    if (typeof $3004a86efa0937ef$export$6f093cfa640b7166 === 'undefined') return this[0] ? this[0].textContent.trim() : null;
    for(let i = 0; i < this.length; i += 1)this[i].textContent = $3004a86efa0937ef$export$6f093cfa640b7166;
    return this;
}
function $3004a86efa0937ef$export$226b3eccf92c9ed9(selector) {
    const window = $bMYlU.getWindow();
    const document = $bMYlU.getDocument();
    const el = this[0];
    let compareWith;
    let i;
    if (!el || typeof selector === 'undefined') return false;
    if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $3004a86efa0937ef$export$3d8c2f653ac9d0b9(selector);
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    if (selector === document) return el === document;
    if (selector === window) return el === window;
    if (selector.nodeType || selector instanceof $3004a86efa0937ef$var$Dom7) {
        compareWith = selector.nodeType ? [
            selector
        ] : selector;
        for(i = 0; i < compareWith.length; i += 1){
            if (compareWith[i] === el) return true;
        }
        return false;
    }
    return false;
}
function $3004a86efa0937ef$export$b610b8812bbcded9() {
    let child = this[0];
    let i;
    if (child) {
        i = 0; // eslint-disable-next-line
        while((child = child.previousSibling) !== null)if (child.nodeType === 1) i += 1;
        return i;
    }
    return undefined;
}
function $3004a86efa0937ef$export$9663ddc1cf085b32($3004a86efa0937ef$export$b610b8812bbcded9) {
    if (typeof $3004a86efa0937ef$export$b610b8812bbcded9 === 'undefined') return this;
    const length = this.length;
    if ($3004a86efa0937ef$export$b610b8812bbcded9 > length - 1) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
    if ($3004a86efa0937ef$export$b610b8812bbcded9 < 0) {
        const returnIndex = length + $3004a86efa0937ef$export$b610b8812bbcded9;
        if (returnIndex < 0) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
        return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([
            this[returnIndex]
        ]);
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([
        this[$3004a86efa0937ef$export$b610b8812bbcded9]
    ]);
}
function $3004a86efa0937ef$export$10d8903dec122b9d(...els) {
    let newChild;
    const document = $bMYlU.getDocument();
    for(let k = 0; k < els.length; k += 1){
        newChild = els[k];
        for(let i = 0; i < this.length; i += 1){
            if (typeof newChild === 'string') {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = newChild;
                while(tempDiv.firstChild)this[i].appendChild(tempDiv.firstChild);
            } else if (newChild instanceof $3004a86efa0937ef$var$Dom7) for(let j = 0; j < newChild.length; j += 1)this[i].appendChild(newChild[j]);
            else this[i].appendChild(newChild);
        }
    }
    return this;
}
function $3004a86efa0937ef$export$9ceefe31f12a3778($3004a86efa0937ef$export$91124bb58bc04465) {
    $3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$91124bb58bc04465).append(this);
    return this;
}
function $3004a86efa0937ef$export$68159836694e22c1(newChild) {
    const document = $bMYlU.getDocument();
    let i;
    let j;
    for(i = 0; i < this.length; i += 1){
        if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
            for(j = tempDiv.childNodes.length - 1; j >= 0; j -= 1)this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        } else if (newChild instanceof $3004a86efa0937ef$var$Dom7) for(j = 0; j < newChild.length; j += 1)this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        else this[i].insertBefore(newChild, this[i].childNodes[0]);
    }
    return this;
}
function $3004a86efa0937ef$export$44da2b52169043ea($3004a86efa0937ef$export$91124bb58bc04465) {
    $3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$91124bb58bc04465).prepend(this);
    return this;
}
function $3004a86efa0937ef$export$86b68c7dbeb53c22(selector) {
    const before = $3004a86efa0937ef$export$3d8c2f653ac9d0b9(selector);
    for(let i = 0; i < this.length; i += 1){
        if (before.length === 1) before[0].parentNode.insertBefore(this[i], before[0]);
        else if (before.length > 1) for(let j = 0; j < before.length; j += 1)before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
    }
}
function $3004a86efa0937ef$export$c4f94c8b3850a5a9(selector) {
    const after = $3004a86efa0937ef$export$3d8c2f653ac9d0b9(selector);
    for(let i = 0; i < this.length; i += 1){
        if (after.length === 1) after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
        else if (after.length > 1) for(let j = 0; j < after.length; j += 1)after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
    }
}
function $3004a86efa0937ef$export$48cfd1e771a65c4f(selector) {
    if (this.length > 0) {
        if (selector) {
            if (this[0].nextElementSibling && $3004a86efa0937ef$export$3d8c2f653ac9d0b9(this[0].nextElementSibling).is(selector)) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([
                this[0].nextElementSibling
            ]);
            return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
        }
        if (this[0].nextElementSibling) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([
            this[0].nextElementSibling
        ]);
        return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
}
function $3004a86efa0937ef$export$3cd99760d81ede63(selector) {
    const nextEls = [];
    let el = this[0];
    if (!el) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
    while(el.nextElementSibling){
        const $3004a86efa0937ef$export$48cfd1e771a65c4f = el.nextElementSibling; // eslint-disable-line
        if (selector) {
            if ($3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$48cfd1e771a65c4f).is(selector)) nextEls.push($3004a86efa0937ef$export$48cfd1e771a65c4f);
        } else nextEls.push($3004a86efa0937ef$export$48cfd1e771a65c4f);
        el = $3004a86efa0937ef$export$48cfd1e771a65c4f;
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9(nextEls);
}
function $3004a86efa0937ef$export$232faf9add678146(selector) {
    if (this.length > 0) {
        const el = this[0];
        if (selector) {
            if (el.previousElementSibling && $3004a86efa0937ef$export$3d8c2f653ac9d0b9(el.previousElementSibling).is(selector)) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([
                el.previousElementSibling
            ]);
            return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
        }
        if (el.previousElementSibling) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([
            el.previousElementSibling
        ]);
        return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
}
function $3004a86efa0937ef$export$5a01ccd45552d0b4(selector) {
    const prevEls = [];
    let el = this[0];
    if (!el) return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
    while(el.previousElementSibling){
        const $3004a86efa0937ef$export$232faf9add678146 = el.previousElementSibling; // eslint-disable-line
        if (selector) {
            if ($3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$232faf9add678146).is(selector)) prevEls.push($3004a86efa0937ef$export$232faf9add678146);
        } else prevEls.push($3004a86efa0937ef$export$232faf9add678146);
        el = $3004a86efa0937ef$export$232faf9add678146;
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9(prevEls);
}
function $3004a86efa0937ef$export$9866dd70b0dcd4c3(selector) {
    return this.nextAll(selector).add(this.prevAll(selector));
}
function $3004a86efa0937ef$export$91124bb58bc04465(selector) {
    const $3004a86efa0937ef$export$7901f6cd558b9a93 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode !== null) {
        if (selector) {
            if ($3004a86efa0937ef$export$3d8c2f653ac9d0b9(this[i].parentNode).is(selector)) $3004a86efa0937ef$export$7901f6cd558b9a93.push(this[i].parentNode);
        } else $3004a86efa0937ef$export$7901f6cd558b9a93.push(this[i].parentNode);
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$7901f6cd558b9a93);
}
function $3004a86efa0937ef$export$7901f6cd558b9a93(selector) {
    const $3004a86efa0937ef$export$7901f6cd558b9a93 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        let $3004a86efa0937ef$export$91124bb58bc04465 = this[i].parentNode; // eslint-disable-line
        while($3004a86efa0937ef$export$91124bb58bc04465){
            if (selector) {
                if ($3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$91124bb58bc04465).is(selector)) $3004a86efa0937ef$export$7901f6cd558b9a93.push($3004a86efa0937ef$export$91124bb58bc04465);
            } else $3004a86efa0937ef$export$7901f6cd558b9a93.push($3004a86efa0937ef$export$91124bb58bc04465);
            $3004a86efa0937ef$export$91124bb58bc04465 = $3004a86efa0937ef$export$91124bb58bc04465.parentNode;
        }
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$7901f6cd558b9a93);
}
function $3004a86efa0937ef$export$ff7f7c97cdce86e(selector) {
    let $3004a86efa0937ef$export$ff7f7c97cdce86e = this; // eslint-disable-line
    if (typeof selector === 'undefined') return $3004a86efa0937ef$export$3d8c2f653ac9d0b9([]);
    if (!$3004a86efa0937ef$export$ff7f7c97cdce86e.is(selector)) $3004a86efa0937ef$export$ff7f7c97cdce86e = $3004a86efa0937ef$export$ff7f7c97cdce86e.parents(selector).eq(0);
    return $3004a86efa0937ef$export$ff7f7c97cdce86e;
}
function $3004a86efa0937ef$export$71aa6c912b956294(selector) {
    const foundElements = [];
    for(let i = 0; i < this.length; i += 1){
        const found = this[i].querySelectorAll(selector);
        for(let j = 0; j < found.length; j += 1)foundElements.push(found[j]);
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9(foundElements);
}
function $3004a86efa0937ef$export$bacb5cc5a11aef16(selector) {
    const $3004a86efa0937ef$export$bacb5cc5a11aef16 = []; // eslint-disable-line
    for(let i = 0; i < this.length; i += 1){
        const childNodes = this[i].children;
        for(let j = 0; j < childNodes.length; j += 1)if (!selector || $3004a86efa0937ef$export$3d8c2f653ac9d0b9(childNodes[j]).is(selector)) $3004a86efa0937ef$export$bacb5cc5a11aef16.push(childNodes[j]);
    }
    return $3004a86efa0937ef$export$3d8c2f653ac9d0b9($3004a86efa0937ef$export$bacb5cc5a11aef16);
}
function $3004a86efa0937ef$export$cd7f480d6b8286c3() {
    for(let i = 0; i < this.length; i += 1)if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    return this;
}
function $3004a86efa0937ef$export$3f780019ff766da6() {
    return this.remove();
}
function $3004a86efa0937ef$export$e16d8520af44a096(...els) {
    const dom = this;
    let i;
    let j;
    for(i = 0; i < els.length; i += 1){
        const toAdd = $3004a86efa0937ef$export$3d8c2f653ac9d0b9(els[i]);
        for(j = 0; j < toAdd.length; j += 1)dom.push(toAdd[j]);
    }
    return dom;
}
function $3004a86efa0937ef$export$6e22c362a0406a2c() {
    for(let i = 0; i < this.length; i += 1){
        const el = this[i];
        if (el.nodeType === 1) {
            for(let j = 0; j < el.childNodes.length; j += 1)if (el.childNodes[j].parentNode) el.childNodes[j].parentNode.removeChild(el.childNodes[j]);
            el.textContent = '';
        }
    }
    return this;
}
// eslint-disable-next-line
function $3004a86efa0937ef$export$3f99968195accfaf(...args) {
    const window = $bMYlU.getWindow();
    let [left, top, duration, easing, callback] = args;
    if (args.length === 4 && typeof easing === 'function') {
        callback = easing;
        [left, top, duration, callback, easing] = args;
    }
    if (typeof easing === 'undefined') easing = 'swing';
    return this.each(function $3004a86efa0937ef$export$e3607ec2d7a891c4() {
        const el = this;
        let currentTop;
        let currentLeft;
        let maxTop;
        let maxLeft;
        let newTop;
        let newLeft;
        let $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9; // eslint-disable-line
        let $3004a86efa0937ef$export$6eddf9bc7f2b7d80; // eslint-disable-line
        let animateTop = top > 0 || top === 0;
        let animateLeft = left > 0 || left === 0;
        if (typeof easing === 'undefined') easing = 'swing';
        if (animateTop) {
            currentTop = el.scrollTop;
            if (!duration) el.scrollTop = top;
        }
        if (animateLeft) {
            currentLeft = el.scrollLeft;
            if (!duration) el.scrollLeft = left;
        }
        if (!duration) return;
        if (animateTop) {
            maxTop = el.scrollHeight - el.offsetHeight;
            newTop = Math.max(Math.min(top, maxTop), 0);
        }
        if (animateLeft) {
            maxLeft = el.scrollWidth - el.offsetWidth;
            newLeft = Math.max(Math.min(left, maxLeft), 0);
        }
        let startTime = null;
        if (animateTop && newTop === currentTop) animateTop = false;
        if (animateLeft && newLeft === currentLeft) animateLeft = false;
        function render(time = new Date().getTime()) {
            if (startTime === null) startTime = time;
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
            let done;
            if (animateTop) $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9 = currentTop + easeProgress * (newTop - currentTop);
            if (animateLeft) $3004a86efa0937ef$export$6eddf9bc7f2b7d80 = currentLeft + easeProgress * (newLeft - currentLeft);
            if (animateTop && newTop > currentTop && $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9 >= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateTop && newTop < currentTop && $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9 <= newTop) {
                el.scrollTop = newTop;
                done = true;
            }
            if (animateLeft && newLeft > currentLeft && $3004a86efa0937ef$export$6eddf9bc7f2b7d80 >= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (animateLeft && newLeft < currentLeft && $3004a86efa0937ef$export$6eddf9bc7f2b7d80 <= newLeft) {
                el.scrollLeft = newLeft;
                done = true;
            }
            if (done) {
                if (callback) callback();
                return;
            }
            if (animateTop) el.scrollTop = $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9;
            if (animateLeft) el.scrollLeft = $3004a86efa0937ef$export$6eddf9bc7f2b7d80;
            window.requestAnimationFrame(render);
        }
        window.requestAnimationFrame(render);
    });
} // scrollTop(top, duration, easing, callback) {
function $3004a86efa0937ef$export$3e0c8fa3b5e4b3b9(...args) {
    let [top, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [top, duration, callback, easing] = args;
    const dom = this;
    if (typeof top === 'undefined') {
        if (dom.length > 0) return dom[0].scrollTop;
        return null;
    }
    return dom.scrollTo(undefined, top, duration, easing, callback);
}
function $3004a86efa0937ef$export$6eddf9bc7f2b7d80(...args) {
    let [left, duration, easing, callback] = args;
    if (args.length === 3 && typeof easing === 'function') [left, duration, callback, easing] = args;
    const dom = this;
    if (typeof left === 'undefined') {
        if (dom.length > 0) return dom[0].scrollLeft;
        return null;
    }
    return dom.scrollTo(left, undefined, duration, easing, callback);
}
// eslint-disable-next-line
function $3004a86efa0937ef$export$e3607ec2d7a891c4(initialProps, initialParams) {
    const window = $bMYlU.getWindow();
    const els = this;
    const a = {
        props: Object.assign({
        }, initialProps),
        params: Object.assign({
            duration: 300,
            easing: 'swing' // or 'linear'
        }, initialParams),
        elements: els,
        animating: false,
        que: [],
        easingProgress (easing, progress) {
            if (easing === 'swing') return 0.5 - Math.cos(progress * Math.PI) / 2;
            if (typeof easing === 'function') return easing(progress);
            return progress;
        },
        stop () {
            if (a.frameId) window.cancelAnimationFrame(a.frameId);
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            a.que = [];
        },
        done (complete) {
            a.animating = false;
            a.elements.each((el)=>{
                const element = el;
                delete element.dom7AnimateInstance;
            });
            if (complete) complete(els);
            if (a.que.length > 0) {
                const que = a.que.shift();
                a.animate(que[0], que[1]);
            }
        },
        animate (props, params) {
            if (a.animating) {
                a.que.push([
                    props,
                    params
                ]);
                return a;
            }
            const elements = []; // Define & Cache Initials & Units
            a.elements.each((el, $3004a86efa0937ef$export$b610b8812bbcded9)=>{
                let initialFullValue;
                let initialValue;
                let unit;
                let finalValue;
                let finalFullValue;
                if (!el.dom7AnimateInstance) a.elements[$3004a86efa0937ef$export$b610b8812bbcded9].dom7AnimateInstance = a;
                elements[$3004a86efa0937ef$export$b610b8812bbcded9] = {
                    container: el
                };
                Object.keys(props).forEach(($3004a86efa0937ef$export$977f3f6a9323c0f6)=>{
                    initialFullValue = window.getComputedStyle(el, null).getPropertyValue($3004a86efa0937ef$export$977f3f6a9323c0f6).replace(',', '.');
                    initialValue = parseFloat(initialFullValue);
                    unit = initialFullValue.replace(initialValue, '');
                    finalValue = parseFloat(props[$3004a86efa0937ef$export$977f3f6a9323c0f6]);
                    finalFullValue = props[$3004a86efa0937ef$export$977f3f6a9323c0f6] + unit;
                    elements[$3004a86efa0937ef$export$b610b8812bbcded9][$3004a86efa0937ef$export$977f3f6a9323c0f6] = {
                        initialFullValue: initialFullValue,
                        initialValue: initialValue,
                        unit: unit,
                        finalValue: finalValue,
                        finalFullValue: finalFullValue,
                        currentValue: initialValue
                    };
                });
            });
            let startTime = null;
            let time;
            let elementsDone = 0;
            let propsDone = 0;
            let done;
            let began = false;
            a.animating = true;
            function render() {
                time = new Date().getTime();
                let progress;
                let easeProgress; // let el;
                if (!began) {
                    began = true;
                    if (params.begin) params.begin(els);
                }
                if (startTime === null) startTime = time;
                if (params.progress) // eslint-disable-next-line
                params.progress(els, Math.max(Math.min((time - startTime) / params.duration, 1), 0), startTime + params.duration - time < 0 ? 0 : startTime + params.duration - time, startTime);
                elements.forEach((element)=>{
                    const el = element;
                    if (done || el.done) return;
                    Object.keys(props).forEach(($3004a86efa0937ef$export$977f3f6a9323c0f6)=>{
                        if (done || el.done) return;
                        progress = Math.max(Math.min((time - startTime) / params.duration, 1), 0);
                        easeProgress = a.easingProgress(params.easing, progress);
                        const { initialValue: initialValue , finalValue: finalValue , unit: unit  } = el[$3004a86efa0937ef$export$977f3f6a9323c0f6];
                        el[$3004a86efa0937ef$export$977f3f6a9323c0f6].currentValue = initialValue + easeProgress * (finalValue - initialValue);
                        const currentValue = el[$3004a86efa0937ef$export$977f3f6a9323c0f6].currentValue;
                        if (finalValue > initialValue && currentValue >= finalValue || finalValue < initialValue && currentValue <= finalValue) {
                            el.container.style[$3004a86efa0937ef$export$977f3f6a9323c0f6] = finalValue + unit;
                            propsDone += 1;
                            if (propsDone === Object.keys(props).length) {
                                el.done = true;
                                elementsDone += 1;
                            }
                            if (elementsDone === elements.length) done = true;
                        }
                        if (done) {
                            a.done(params.complete);
                            return;
                        }
                        el.container.style[$3004a86efa0937ef$export$977f3f6a9323c0f6] = currentValue + unit;
                    });
                });
                if (done) return; // Then call
                a.frameId = window.requestAnimationFrame(render);
            }
            a.frameId = window.requestAnimationFrame(render);
            return a;
        }
    };
    if (a.elements.length === 0) return els;
    let animateInstance;
    for(let i = 0; i < a.elements.length; i += 1)if (a.elements[i].dom7AnimateInstance) animateInstance = a.elements[i].dom7AnimateInstance;
    else a.elements[i].dom7AnimateInstance = a;
    if (!animateInstance) animateInstance = a;
    if (initialProps === 'stop') animateInstance.stop();
    else animateInstance.animate(a.props, a.params);
    return els;
}
function $3004a86efa0937ef$export$fa6813432f753b0d() {
    const els = this;
    for(let i = 0; i < els.length; i += 1)if (els[i].dom7AnimateInstance) els[i].dom7AnimateInstance.stop();
}
const $3004a86efa0937ef$var$noTrigger = 'resize scroll'.split(' ');
function $3004a86efa0937ef$var$shortcut(name) {
    function eventHandler(...args) {
        if (typeof args[0] === 'undefined') {
            for(let i = 0; i < this.length; i += 1)if ($3004a86efa0937ef$var$noTrigger.indexOf(name) < 0) {
                if (name in this[i]) this[i][name]();
                else $3004a86efa0937ef$export$3d8c2f653ac9d0b9(this[i]).trigger(name);
            }
            return this;
        }
        return this.on(name, ...args);
    }
    return eventHandler;
}
const $3004a86efa0937ef$export$64ef1bee2b9504c1 = $3004a86efa0937ef$var$shortcut('click');
const $3004a86efa0937ef$export$2cc7ff91bcacba5e = $3004a86efa0937ef$var$shortcut('blur');
const $3004a86efa0937ef$export$d7ddd398f22d79ef = $3004a86efa0937ef$var$shortcut('focus');
const $3004a86efa0937ef$export$e7fa4ea7f1bfcb53 = $3004a86efa0937ef$var$shortcut('focusin');
const $3004a86efa0937ef$export$d0dc5134b51e78ad = $3004a86efa0937ef$var$shortcut('focusout');
const $3004a86efa0937ef$export$d26052c770f81a55 = $3004a86efa0937ef$var$shortcut('keyup');
const $3004a86efa0937ef$export$e65a0c4970da3025 = $3004a86efa0937ef$var$shortcut('keydown');
const $3004a86efa0937ef$export$563caf6ae76a8875 = $3004a86efa0937ef$var$shortcut('keypress');
const $3004a86efa0937ef$export$853c27de4ce0f746 = $3004a86efa0937ef$var$shortcut('submit');
const $3004a86efa0937ef$export$d8a7b8f475ec0161 = $3004a86efa0937ef$var$shortcut('change');
const $3004a86efa0937ef$export$8b0cb8993e7a9391 = $3004a86efa0937ef$var$shortcut('mousedown');
const $3004a86efa0937ef$export$6d0a9e0f4f73830a = $3004a86efa0937ef$var$shortcut('mousemove');
const $3004a86efa0937ef$export$c367b5bd9b361db9 = $3004a86efa0937ef$var$shortcut('mouseup');
const $3004a86efa0937ef$export$474cd8abd87e2f89 = $3004a86efa0937ef$var$shortcut('mouseenter');
const $3004a86efa0937ef$export$996a190879e3098b = $3004a86efa0937ef$var$shortcut('mouseleave');
const $3004a86efa0937ef$export$c3a736a37c400eb8 = $3004a86efa0937ef$var$shortcut('mouseout');
const $3004a86efa0937ef$export$41b161f130dc7f9 = $3004a86efa0937ef$var$shortcut('mouseover');
const $3004a86efa0937ef$export$9f22968b38117503 = $3004a86efa0937ef$var$shortcut('touchstart');
const $3004a86efa0937ef$export$3c6ab5207a63e8f7 = $3004a86efa0937ef$var$shortcut('touchend');
const $3004a86efa0937ef$export$3086217c4efdbcc9 = $3004a86efa0937ef$var$shortcut('touchmove');
const $3004a86efa0937ef$export$4380c87abf28fdf = $3004a86efa0937ef$var$shortcut('resize');
const $3004a86efa0937ef$export$209876d7b1ac8f3 = $3004a86efa0937ef$var$shortcut('scroll');
var $3004a86efa0937ef$export$2e2bcd8739ae039 = $3004a86efa0937ef$export$3d8c2f653ac9d0b9;

});


parcelRequire.register("hVkLy", function(module, exports) {

$parcel$export(module.exports, "deleteProps", () => $d0c7de3d7881975c$export$8694e5c03a4df8e6);
$parcel$export(module.exports, "nextTick", () => $d0c7de3d7881975c$export$bdd553fddd433dcb);
$parcel$export(module.exports, "now", () => $d0c7de3d7881975c$export$461939dd4422153);
$parcel$export(module.exports, "getTranslate", () => $d0c7de3d7881975c$export$5ec402b7fcf74398);
$parcel$export(module.exports, "isObject", () => $d0c7de3d7881975c$export$a6cdc56e425d0d0a);
$parcel$export(module.exports, "extend", () => $d0c7de3d7881975c$export$8b58be045bf06082);
$parcel$export(module.exports, "setCSSProperty", () => $d0c7de3d7881975c$export$a607267f322101fd);
$parcel$export(module.exports, "animateCSSModeScroll", () => $d0c7de3d7881975c$export$a5dd2b4b1a116d6d);

var $bMYlU = parcelRequire("bMYlU");
function $d0c7de3d7881975c$export$8694e5c03a4df8e6(obj) {
    const object = obj;
    Object.keys(object).forEach((key)=>{
        try {
            object[key] = null;
        } catch (e) {
        }
        try {
            delete object[key];
        } catch (e1) {
        }
    });
}
function $d0c7de3d7881975c$export$bdd553fddd433dcb(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}
function $d0c7de3d7881975c$export$461939dd4422153() {
    return Date.now();
}
function $d0c7de3d7881975c$export$3735103072e4a80(el) {
    const window = $bMYlU.getWindow();
    let style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}
function $d0c7de3d7881975c$export$5ec402b7fcf74398(el, axis) {
    if (axis === void 0) axis = 'x';
    const window = $bMYlU.getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = $d0c7de3d7881975c$export$3735103072e4a80(el, null);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(',').length > 6) curTransform = curTransform.split(', ').map((a)=>a.replace(',', '.')
        ).join(', ');
         // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
    }
    if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }
    if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
}
function $d0c7de3d7881975c$export$a6cdc56e425d0d0a(o) {
    return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
function $d0c7de3d7881975c$var$isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}
function $d0c7de3d7881975c$export$8b58be045bf06082() {
    const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    const noExtend = [
        '__proto__',
        'constructor',
        'prototype'
    ];
    for(let i = 1; i < arguments.length; i += 1){
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
        if (nextSource !== undefined && nextSource !== null && !$d0c7de3d7881975c$var$isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key)=>noExtend.indexOf(key) < 0
            );
            for(let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1){
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) {
                    if ($d0c7de3d7881975c$export$a6cdc56e425d0d0a(to[nextKey]) && $d0c7de3d7881975c$export$a6cdc56e425d0d0a(nextSource[nextKey])) {
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else $d0c7de3d7881975c$export$8b58be045bf06082(to[nextKey], nextSource[nextKey]);
                    } else if (!$d0c7de3d7881975c$export$a6cdc56e425d0d0a(to[nextKey]) && $d0c7de3d7881975c$export$a6cdc56e425d0d0a(nextSource[nextKey])) {
                        to[nextKey] = {
                        };
                        if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey];
                        else $d0c7de3d7881975c$export$8b58be045bf06082(to[nextKey], nextSource[nextKey]);
                    } else to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
function $d0c7de3d7881975c$export$a607267f322101fd(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}
function $d0c7de3d7881975c$export$a5dd2b4b1a116d6d(_ref) {
    let { swiper: swiper , targetPosition: targetPosition , side: side  } = _ref;
    const window = $bMYlU.getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? 'next' : 'prev';
    const isOutOfBound = (current, target)=>{
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };
    const animate = ()=>{
        time = new Date().getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.scrollSnapType = '';
            setTimeout(()=>{
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            });
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}

});

parcelRequire.register("1p0YI", function(module, exports) {

$parcel$export(module.exports, "getSupport", () => $1058e2860f03e45e$export$d61c7b85ff180578);

var $bMYlU = parcelRequire("bMYlU");
let $1058e2860f03e45e$var$support;
function $1058e2860f03e45e$var$calcSupport() {
    const window = $bMYlU.getWindow();
    const document = $bMYlU.getDocument();
    return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: (function checkPassiveListener() {
            let supportsPassive = false;
            try {
                const opts = Object.defineProperty({
                }, 'passive', {
                    // eslint-disable-next-line
                    get () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener('testPassiveListener', null, opts);
            } catch (e) {
            }
            return supportsPassive;
        })(),
        gestures: (function checkGestures() {
            return 'ongesturestart' in window;
        })()
    };
}
function $1058e2860f03e45e$export$d61c7b85ff180578() {
    if (!$1058e2860f03e45e$var$support) $1058e2860f03e45e$var$support = $1058e2860f03e45e$var$calcSupport();
    return $1058e2860f03e45e$var$support;
}

});

parcelRequire.register("9xOxO", function(module, exports) {

$parcel$export(module.exports, "getDevice", () => $6f2e67339d19b6f1$export$30c823bc834d6ab4);

var $bMYlU = parcelRequire("bMYlU");

var $1p0YI = parcelRequire("1p0YI");
let $6f2e67339d19b6f1$var$deviceCached;
function $6f2e67339d19b6f1$var$calcDevice(_temp) {
    let { userAgent: userAgent  } = _temp === void 0 ? {
    } : _temp;
    const support = $1p0YI.getSupport();
    const window = $bMYlU.getWindow();
    const platform = window.navigator.platform;
    const ua = userAgent || window.navigator.userAgent;
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === 'Win32';
    let macos = platform === 'MacIntel'; // iPadOs 13 fix
    const iPadScreens = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810'
    ];
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [
            0,
            1,
            '13_0_0'
        ];
        macos = false;
    } // Android
    if (android && !windows) {
        device.os = 'android';
        device.android = true;
    }
    if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
    } // Export object
    return device;
}
function $6f2e67339d19b6f1$export$30c823bc834d6ab4(overrides) {
    if (overrides === void 0) overrides = {
    };
    if (!$6f2e67339d19b6f1$var$deviceCached) $6f2e67339d19b6f1$var$deviceCached = $6f2e67339d19b6f1$var$calcDevice(overrides);
    return $6f2e67339d19b6f1$var$deviceCached;
}

});

parcelRequire.register("5NHaU", function(module, exports) {

$parcel$export(module.exports, "getBrowser", () => $439305053ce41172$export$89e15fc796a4a429);

var $bMYlU = parcelRequire("bMYlU");
let $439305053ce41172$var$browser;
function $439305053ce41172$var$calcBrowser() {
    const window = $bMYlU.getWindow();
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }
    return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
}
function $439305053ce41172$export$89e15fc796a4a429() {
    if (!$439305053ce41172$var$browser) $439305053ce41172$var$browser = $439305053ce41172$var$calcBrowser();
    return $439305053ce41172$var$browser;
}

});

parcelRequire.register("8Ae79", function(module, exports) {

$parcel$export(module.exports, "default", () => $63fca250982bf878$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");
function $63fca250982bf878$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , on: on , emit: emit  } = _ref;
    const window = $bMYlU.getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
    };
    const createObserver = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries)=>{
            animationFrame = window.requestAnimationFrame(()=>{
                const { width: width , height: height  } = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2)=>{
                    let { contentBoxSize: contentBoxSize , contentRect: contentRect , target: target  } = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                });
                if (newWidth !== width || newHeight !== height) resizeHandler();
            });
        });
        observer.observe(swiper.el);
    };
    const removeObserver = ()=>{
        if (animationFrame) window.cancelAnimationFrame(animationFrame);
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el);
            observer = null;
        }
    };
    const orientationChangeHandler = ()=>{
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
    };
    on('init', ()=>{
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
            createObserver();
            return;
        }
        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', ()=>{
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
    });
}

});

parcelRequire.register("jeWeZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $e01c8081fb003bb0$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");
function $e01c8081fb003bb0$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    const observers = [];
    const window = $bMYlU.getWindow();
    const attach = function(target, options) {
        if (options === void 0) options = {
        };
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc((mutations)=>{
            // The observerUpdate event should only be triggered
            // once despite the number of mutations.  Additional
            // triggers are redundant and are very costly
            if (mutations.length === 1) {
                emit('observerUpdate', mutations[0]);
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit('observerUpdate', mutations[0]);
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate);
            else window.setTimeout(observerUpdate, 0);
        });
        observer.observe(target, {
            attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
            childList: typeof options.childList === 'undefined' ? true : options.childList,
            characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
    };
    const init = ()=>{
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = swiper.$el.parents();
            for(let i = 0; i < containerParents.length; i += 1)attach(containerParents[i]);
        } // Observe container
        attach(swiper.$el[0], {
            childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
        attach(swiper.$wrapperEl[0], {
            attributes: false
        });
    };
    const destroy = ()=>{
        observers.forEach((observer)=>{
            observer.disconnect();
        });
        observers.splice(0, observers.length);
    };
    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
}

});

parcelRequire.register("9DkOf", function(module, exports) {

$parcel$export(module.exports, "default", () => $7037e5e790da8bf6$export$2e2bcd8739ae039);
var /* eslint-disable no-underscore-dangle */ $7037e5e790da8bf6$export$2e2bcd8739ae039 = {
    on (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event)=>{
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    },
    once (events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            handler.apply(self, args);
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
    },
    onAny (handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler);
        return self;
    },
    offAny (handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1);
        return self;
    },
    off (events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach((event)=>{
            if (typeof handler === 'undefined') self.eventsListeners[event] = [];
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler, index)=>{
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1);
            });
        });
        return self;
    },
    emit () {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event)=>{
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler)=>{
                eventHandler.apply(context, [
                    event,
                    ...data
                ]);
            });
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler)=>{
                eventHandler.apply(context, data);
            });
        });
        return self;
    }
};

});

parcelRequire.register("gafBh", function(module, exports) {

$parcel$export(module.exports, "default", () => $bc49ae624cddd1ec$export$2e2bcd8739ae039);

var $i6Y0s = parcelRequire("i6Y0s");

var $7xMW6 = parcelRequire("7xMW6");

var $hvWK1 = parcelRequire("hvWK1");

var $kWD1z = parcelRequire("kWD1z");

var $P2EMY = parcelRequire("P2EMY");

var $3xC2H = parcelRequire("3xC2H");

var $airWF = parcelRequire("airWF");

var $dmwRW = parcelRequire("dmwRW");

var $ikBvJ = parcelRequire("ikBvJ");
var $bc49ae624cddd1ec$export$2e2bcd8739ae039 = {
    updateSize: $i6Y0s.default,
    updateSlides: $7xMW6.default,
    updateAutoHeight: $hvWK1.default,
    updateSlidesOffset: $kWD1z.default,
    updateSlidesProgress: $P2EMY.default,
    updateProgress: $3xC2H.default,
    updateSlidesClasses: $airWF.default,
    updateActiveIndex: $dmwRW.default,
    updateClickedSlide: $ikBvJ.default
};

});
parcelRequire.register("i6Y0s", function(module, exports) {

$parcel$export(module.exports, "default", () => $d2f7558b60a0022f$export$2e2bcd8739ae039);
function $d2f7558b60a0022f$export$2e2bcd8739ae039() {
    const swiper = this;
    let width;
    let height;
    const $el = swiper.$el;
    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) width = swiper.params.width;
    else width = $el[0].clientWidth;
    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) height = swiper.params.height;
    else height = $el[0].clientHeight;
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
     // Subtract paddings
    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
    });
}

});

parcelRequire.register("7xMW6", function(module, exports) {

$parcel$export(module.exports, "default", () => $57e1932ac565c316$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
function $57e1932ac565c316$export$2e2bcd8739ae039() {
    const swiper = this;
    function getDirectionLabel(property) {
        if (swiper.isHorizontal()) return property;
         // prettier-ignore
        return ({
            'width': 'height',
            'margin-top': 'margin-left',
            'margin-bottom ': 'margin-right',
            'margin-left': 'margin-top',
            'margin-right': 'margin-bottom',
            'padding-left': 'padding-top',
            'padding-right': 'padding-bottom',
            'marginRight': 'marginBottom'
        })[property];
    }
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const { $wrapperEl: $wrapperEl , size: swiperSize , rtlTranslate: rtl , wrongRTL: wrongRTL  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === 'function') offsetBefore = params.slidesOffsetBefore.call(swiper);
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === 'function') offsetAfter = params.slidesOffsetAfter.call(swiper);
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === 'undefined') return;
    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    swiper.virtualSize = -spaceBetween; // reset margins
    if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
    });
    else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
    }); // reset cssMode offsets
    if (params.centeredSlides && params.cssMode) {
        $hVkLy.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        $hVkLy.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slidesLength);
     // Calc slides
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter((key)=>{
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;
    for(let i = 0; i < slidesLength; i += 1){
        slideSize = 0;
        const slide = slides.eq(i);
        if (gridEnabled) swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        if (slide.css('display') === 'none') continue; // eslint-disable-line
        if (params.slidesPerView === 'auto') {
            if (shouldResetSlideSize) slides[i].style[getDirectionLabel('width')] = ``;
            const slideStyles = getComputedStyle(slide[0]);
            const currentTransform = slide[0].style.transform;
            const currentWebKitTransform = slide[0].style.webkitTransform;
            if (currentTransform) slide[0].style.transform = 'none';
            if (currentWebKitTransform) slide[0].style.webkitTransform = 'none';
            if (params.roundLengths) slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
            else {
                // eslint-disable-next-line
                const width = getDirectionPropertyValue(slideStyles, 'width');
                const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                const boxSizing = slideStyles.getPropertyValue('box-sizing');
                if (boxSizing && boxSizing === 'border-box') slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth: clientWidth , offsetWidth: offsetWidth  } = slide[0];
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }
            if (currentTransform) slide[0].style.transform = currentTransform;
            if (currentWebKitTransform) slide[0].style.webkitTransform = currentWebKitTransform;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
        }
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 0.001) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) $wrapperEl.css({
        width: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (params.setWrapperSize) $wrapperEl.css({
        [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
    });
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
     // Remove last grid elements depending on width
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for(let i = 0; i < snapGrid.length; i += 1){
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }
    if (snapGrid.length === 0) snapGrid = [
        0
    ];
    if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex)=>{
            if (!params.cssMode) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).css({
            [key]: `${spaceBetween}px`
        });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap)=>{
            if (snap < 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue)=>{
            allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex)=>{
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex)=>{
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }
    Object.assign(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        $hVkLy.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        $hVkLy.setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v)=>v + addToSnapGrid
        );
        swiper.slidesGrid = swiper.slidesGrid.map((v)=>v + addToSlidesGrid
        );
    }
    if (slidesLength !== previousSlidesLength) swiper.emit('slidesLengthChange');
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit('slidesGridLengthChange');
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);
        if (slidesLength <= params.maxBackfaceHiddenSlides) {
            if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) swiper.$el.removeClass(backFaceHiddenClass);
    }
}

});

parcelRequire.register("hvWK1", function(module, exports) {

$parcel$export(module.exports, "default", () => $cc02e5b33dec098d$export$2e2bcd8739ae039);

var $brB5Z = parcelRequire("brB5Z");
function $cc02e5b33dec098d$export$2e2bcd8739ae039(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;
    if (typeof speed === 'number') swiper.setTransition(speed);
    else if (speed === true) swiper.setTransition(swiper.params.speed);
    const getSlideByIndex = (index)=>{
        if (isVirtual) return swiper.slides.filter((el)=>parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index
        )[0];
        return swiper.slides.eq(index)[0];
    }; // Find slides currently in view
    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) (swiper.visibleSlides || $brB5Z.default([])).each((slide)=>{
            activeSlides.push(slide);
        });
        else for(i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1){
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        }
    } else activeSlides.push(getSlideByIndex(swiper.activeIndex));
     // Find new height from highest slide in view
    for(i = 0; i < activeSlides.length; i += 1)if (typeof activeSlides[i] !== 'undefined') {
        const height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
    }
     // Update Height
    if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
}

});

parcelRequire.register("kWD1z", function(module, exports) {

$parcel$export(module.exports, "default", () => $f3f77edb590278a0$export$2e2bcd8739ae039);
function $f3f77edb590278a0$export$2e2bcd8739ae039() {
    const swiper = this;
    const slides = swiper.slides;
    for(let i = 0; i < slides.length; i += 1)slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
}

});

parcelRequire.register("P2EMY", function(module, exports) {

$parcel$export(module.exports, "default", () => $0996d3230b83693f$export$2e2bcd8739ae039);

var $brB5Z = parcelRequire("brB5Z");
function $0996d3230b83693f$export$2e2bcd8739ae039(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const { slides: slides , rtlTranslate: rtl , snapGrid: snapGrid  } = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides
    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    for(let i = 0; i < slides.length; i += 1){
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
        }
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
    swiper.visibleSlides = $brB5Z.default(swiper.visibleSlides);
}

});

parcelRequire.register("3xC2H", function(module, exports) {

$parcel$export(module.exports, "default", () => $2941f69b7b27b89b$export$2e2bcd8739ae039);
function $2941f69b7b27b89b$export$2e2bcd8739ae039(translate) {
    const swiper = this;
    if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let { progress: progress , isBeginning: isBeginning , isEnd: isEnd  } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
    }
    Object.assign(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit('reachBeginning toEdge');
    if (isEnd && !wasEnd) swiper.emit('reachEnd toEdge');
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit('fromEdge');
    swiper.emit('progress', progress);
}

});

parcelRequire.register("airWF", function(module, exports) {

$parcel$export(module.exports, "default", () => $77f1432fd71af951$export$2e2bcd8739ae039);
function $77f1432fd71af951$export$2e2bcd8739ae039() {
    const swiper = this;
    const { slides: slides , params: params , $wrapperEl: $wrapperEl , activeIndex: activeIndex , realIndex: realIndex  } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
    let activeSlide;
    if (isVirtual) activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
    else activeSlide = slides.eq(activeIndex);
     // Active classes
    activeSlide.addClass(params.slideActiveClass);
    if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
    } // Next Slide
    let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
    if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
    } // Prev Slide
    let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
    if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
    }
    if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        if (prevSlide.hasClass(params.slideDuplicateClass)) $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        else $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
    }
    swiper.emitSlidesClasses();
}

});

parcelRequire.register("dmwRW", function(module, exports) {

$parcel$export(module.exports, "default", () => $9ba6d38634900723$export$2e2bcd8739ae039);
function $9ba6d38634900723$export$2e2bcd8739ae039(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { slidesGrid: slidesGrid , snapGrid: snapGrid , params: params , activeIndex: previousIndex , realIndex: previousRealIndex , snapIndex: previousSnapIndex  } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    if (typeof activeIndex === 'undefined') {
        for(let i = 0; i < slidesGrid.length; i += 1){
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) activeIndex = i;
                else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) activeIndex = i + 1;
            } else if (translate >= slidesGrid[i]) activeIndex = i;
        } // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
    }
    if (snapGrid.indexOf(translate) >= 0) snapIndex = snapGrid.indexOf(translate);
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit('snapIndexChange');
        }
        return;
    } // Get real index
    const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');
    if (previousRealIndex !== realIndex) swiper.emit('realIndexChange');
    if (swiper.initialized || swiper.params.runCallbacksOnInit) swiper.emit('slideChange');
}

});

parcelRequire.register("ikBvJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $d587311859cfd2aa$export$2e2bcd8739ae039);

var $brB5Z = parcelRequire("brB5Z");
function $d587311859cfd2aa$export$2e2bcd8739ae039(e) {
    const swiper = this;
    const params = swiper.params;
    const slide = $brB5Z.default(e).closest(`.${params.slideClass}`)[0];
    let slideFound = false;
    let slideIndex;
    if (slide) {
        for(let i = 0; i < swiper.slides.length; i += 1)if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
        }
    }
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) swiper.clickedIndex = parseInt($brB5Z.default(slide).attr('data-swiper-slide-index'), 10);
        else swiper.clickedIndex = slideIndex;
    } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) swiper.slideToClickedSlide();
}

});


parcelRequire.register("395U8", function(module, exports) {

$parcel$export(module.exports, "default", () => $24a6cadd479bcf1d$export$2e2bcd8739ae039);

var $hhdg1 = parcelRequire("hhdg1");

var $g6NTC = parcelRequire("g6NTC");

var $59YBN = parcelRequire("59YBN");

var $CGJFA = parcelRequire("CGJFA");

var $hP8TR = parcelRequire("hP8TR");
var $24a6cadd479bcf1d$export$2e2bcd8739ae039 = {
    getTranslate: $hhdg1.default,
    setTranslate: $g6NTC.default,
    minTranslate: $59YBN.default,
    maxTranslate: $CGJFA.default,
    translateTo: $hP8TR.default
};

});
parcelRequire.register("hhdg1", function(module, exports) {

$parcel$export(module.exports, "default", () => $c93e4ed8ee9444de$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
function $c93e4ed8ee9444de$export$2e2bcd8739ae039(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
    const swiper = this;
    const { params: params , rtlTranslate: rtl , translate: translate , $wrapperEl: $wrapperEl  } = swiper;
    if (params.virtualTranslate) return rtl ? -translate : translate;
    if (params.cssMode) return translate;
    let currentTranslate = $hVkLy.getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}

});

parcelRequire.register("g6NTC", function(module, exports) {

$parcel$export(module.exports, "default", () => $bba3e932f7437417$export$2e2bcd8739ae039);
function $bba3e932f7437417$export$2e2bcd8739ae039(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl , params: params , $wrapperEl: $wrapperEl , wrapperEl: wrapperEl , progress: progress  } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate;
    else y = translate;
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    else if (!params.virtualTranslate) $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);
    swiper.emit('setTranslate', swiper.translate, byController);
}

});

parcelRequire.register("59YBN", function(module, exports) {

$parcel$export(module.exports, "default", () => $3c1ccea2b7dda98f$export$2e2bcd8739ae039);
function $3c1ccea2b7dda98f$export$2e2bcd8739ae039() {
    return -this.snapGrid[0];
}

});

parcelRequire.register("CGJFA", function(module, exports) {

$parcel$export(module.exports, "default", () => $0744b32053208a25$export$2e2bcd8739ae039);
function $0744b32053208a25$export$2e2bcd8739ae039() {
    return -this.snapGrid[this.snapGrid.length - 1];
}

});

parcelRequire.register("hP8TR", function(module, exports) {

$parcel$export(module.exports, "default", () => $cf9e1a6a5c9547a2$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
function $cf9e1a6a5c9547a2$export$2e2bcd8739ae039(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) translate = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (translateBounds === void 0) translateBounds = true;
    const swiper = this;
    const { params: params , wrapperEl: wrapperEl  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) return false;
    const minTranslate = swiper.minTranslate();
    const maxTranslate = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
    else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
    else newTranslate = translate; // Update progress
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        if (speed === 0) wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        else {
            if (!swiper.support.smoothScroll) {
                $hVkLy.animateCSSModeScroll({
                    swiper: swiper,
                    targetPosition: -newTranslate,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: -newTranslate,
                behavior: 'smooth'
            });
        }
        return true;
    }
    if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionEnd');
        }
    } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
        if (runCallbacks) {
            swiper.emit('beforeTransitionStart', speed, internal);
            swiper.emit('transitionStart');
        }
        if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                if (!swiper || swiper.destroyed) return;
                if (e.target !== this) return;
                swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
                swiper.onTranslateToWrapperTransitionEnd = null;
                delete swiper.onTranslateToWrapperTransitionEnd;
                if (runCallbacks) swiper.emit('transitionEnd');
            };
            swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
    }
    return true;
}

});


parcelRequire.register("bIaqu", function(module, exports) {

$parcel$export(module.exports, "default", () => $886be42ecb7aa284$export$2e2bcd8739ae039);

var $k8sDz = parcelRequire("k8sDz");

var $DSi0D = parcelRequire("DSi0D");

var $e7xP5 = parcelRequire("e7xP5");
var $886be42ecb7aa284$export$2e2bcd8739ae039 = {
    setTransition: $k8sDz.default,
    transitionStart: $DSi0D.default,
    transitionEnd: $e7xP5.default
};

});
parcelRequire.register("k8sDz", function(module, exports) {

$parcel$export(module.exports, "default", () => $ea8ac4beca151d64$export$2e2bcd8739ae039);
function $ea8ac4beca151d64$export$2e2bcd8739ae039(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) swiper.$wrapperEl.transition(duration);
    swiper.emit('setTransition', duration, byController);
}

});

parcelRequire.register("DSi0D", function(module, exports) {

$parcel$export(module.exports, "default", () => $077dc1640cb172ff$export$2e2bcd8739ae039);

var $5EES4 = parcelRequire("5EES4");
function $077dc1640cb172ff$export$2e2bcd8739ae039(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params: params  } = swiper;
    if (params.cssMode) return;
    if (params.autoHeight) swiper.updateAutoHeight();
    $5EES4.default({
        swiper: swiper,
        runCallbacks: runCallbacks,
        direction: direction,
        step: 'Start'
    });
}

});
parcelRequire.register("5EES4", function(module, exports) {

$parcel$export(module.exports, "default", () => $41e0645a29ddfd0a$export$2e2bcd8739ae039);
function $41e0645a29ddfd0a$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , runCallbacks: runCallbacks , direction: direction , step: step  } = _ref;
    const { activeIndex: activeIndex , previousIndex: previousIndex  } = swiper;
    let dir = direction;
    if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';
        else if (activeIndex < previousIndex) dir = 'prev';
        else dir = 'reset';
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
            return;
        }
        swiper.emit(`slideChangeTransition${step}`);
        if (dir === 'next') swiper.emit(`slideNextTransition${step}`);
        else swiper.emit(`slidePrevTransition${step}`);
    }
}

});


parcelRequire.register("e7xP5", function(module, exports) {

$parcel$export(module.exports, "default", () => $a47bf4b0cfd1a8c7$export$2e2bcd8739ae039);

var $5EES4 = parcelRequire("5EES4");
function $a47bf4b0cfd1a8c7$export$2e2bcd8739ae039(runCallbacks, direction) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params: params  } = swiper;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    $5EES4.default({
        swiper: swiper,
        runCallbacks: runCallbacks,
        direction: direction,
        step: 'End'
    });
}

});


parcelRequire.register("bQUIX", function(module, exports) {

$parcel$export(module.exports, "default", () => $8a108d405ecdf192$export$2e2bcd8739ae039);

var $g2lQx = parcelRequire("g2lQx");

var $gYPzO = parcelRequire("gYPzO");

var $9cdXh = parcelRequire("9cdXh");

var $knWsG = parcelRequire("knWsG");

var $80aGn = parcelRequire("80aGn");

var $35sdM = parcelRequire("35sdM");

var $eKxhA = parcelRequire("eKxhA");
var $8a108d405ecdf192$export$2e2bcd8739ae039 = {
    slideTo: $g2lQx.default,
    slideToLoop: $gYPzO.default,
    slideNext: $9cdXh.default,
    slidePrev: $knWsG.default,
    slideReset: $80aGn.default,
    slideToClosest: $35sdM.default,
    slideToClickedSlide: $eKxhA.default
};

});
parcelRequire.register("g2lQx", function(module, exports) {

$parcel$export(module.exports, "default", () => $bacdc781595d6365$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
function $bacdc781595d6365$export$2e2bcd8739ae039(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index !== 'number' && typeof index !== 'string') throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    const { params: params , snapGrid: snapGrid , slidesGrid: slidesGrid , previousIndex: previousIndex , activeIndex: activeIndex , rtlTranslate: rtl , wrapperEl: wrapperEl , enabled: enabled  } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) return false;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) swiper.emit('beforeSlideChangeStart');
    const translate = -snapGrid[snapIndex]; // Update progress
    swiper.updateProgress(translate); // Normalize slideIndex
    if (params.normalizeSlideIndex) for(let i = 0; i < slidesGrid.length; i += 1){
        const normalizedTranslate = -Math.floor(translate * 100);
        const normalizedGrid = Math.floor(slidesGrid[i] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
        if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i;
            else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
        } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
    }
     // Directions locks
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
            if ((activeIndex || 0) !== slideIndex) return false;
        }
    }
    let direction;
    if (slideIndex > activeIndex) direction = 'next';
    else if (slideIndex < activeIndex) direction = 'prev';
    else direction = 'reset'; // Update Index
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== 'slide') swiper.setTranslate(translate);
        if (direction !== 'reset') {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = 'none';
                swiper._immediateVirtual = true;
            }
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
            if (isVirtual) requestAnimationFrame(()=>{
                swiper.wrapperEl.style.scrollSnapType = '';
                swiper._swiperImmediateVirtual = false;
            });
        } else {
            if (!swiper.support.smoothScroll) {
                $hVkLy.animateCSSModeScroll({
                    swiper: swiper,
                    targetPosition: t,
                    side: isH ? 'left' : 'top'
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? 'left' : 'top']: t,
                behavior: 'smooth'
            });
        }
        return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction);
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}

});

parcelRequire.register("gYPzO", function(module, exports) {

$parcel$export(module.exports, "default", () => $c5ca4200cb4b1d3f$export$2e2bcd8739ae039);
function $c5ca4200cb4b1d3f$export$2e2bcd8739ae039(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (typeof index === 'string') {
        /**
     * The `index` argument converted from `string` to `number`.
     * @type {number}
     */ const indexAsNumber = parseInt(index, 10);
        /**
     * Determines whether the `index` argument is a valid `number`
     * after being converted from the `string` type.
     * @type {boolean}
     */ const isValidNumber = isFinite(indexAsNumber);
        if (!isValidNumber) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
         // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
        index = indexAsNumber;
    }
    const swiper = this;
    let newIndex = index;
    if (swiper.params.loop) newIndex += swiper.loopedSlides;
    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
}

});

parcelRequire.register("9cdXh", function(module, exports) {

$parcel$export(module.exports, "default", () => $6b200f3bd6923b56$export$2e2bcd8739ae039);
function $6b200f3bd6923b56$export$2e2bcd8739ae039(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { animating: animating , enabled: enabled , params: params  } = swiper;
    if (!enabled) return swiper;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

});

parcelRequire.register("knWsG", function(module, exports) {

$parcel$export(module.exports, "default", () => $ed734de9c0f92418$export$2e2bcd8739ae039);
function $ed734de9c0f92418$export$2e2bcd8739ae039(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const { params: params , animating: animating , snapGrid: snapGrid , slidesGrid: slidesGrid , rtlTranslate: rtlTranslate , enabled: enabled  } = swiper;
    if (!enabled) return swiper;
    if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val)=>normalize(val)
    );
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex)=>{
            if (normalizedTranslate >= snap) // prevSnap = snap;
            prevSnapIndex = snapIndex;
        });
        if (typeof prevSnapIndex !== 'undefined') prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

});

parcelRequire.register("80aGn", function(module, exports) {

$parcel$export(module.exports, "default", () => $5d369c26e06b9f5d$export$2e2bcd8739ae039);
function $5d369c26e06b9f5d$export$2e2bcd8739ae039(speed, runCallbacks, internal) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
}

});

parcelRequire.register("35sdM", function(module, exports) {

$parcel$export(module.exports, "default", () => $23f7baddd4500f8d$export$2e2bcd8739ae039);
function $23f7baddd4500f8d$export$2e2bcd8739ae039(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) speed = this.params.speed;
    if (runCallbacks === void 0) runCallbacks = true;
    if (threshold === void 0) threshold = 0.5;
    const swiper = this;
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) index += swiper.params.slidesPerGroup;
    } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];
        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) index -= swiper.params.slidesPerGroup;
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
}

});

parcelRequire.register("eKxhA", function(module, exports) {

$parcel$export(module.exports, "default", () => $abcf2dce75974ee5$export$2e2bcd8739ae039);

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");
function $abcf2dce75974ee5$export$2e2bcd8739ae039() {
    const swiper = this;
    const { params: params , $wrapperEl: $wrapperEl  } = swiper;
    const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($brB5Z.default(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        if (params.centeredSlides) {
            if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
                swiper.loopFix();
                slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
                $hVkLy.nextTick(()=>{
                    swiper.slideTo(slideToIndex);
                });
            } else swiper.slideTo(slideToIndex);
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            $hVkLy.nextTick(()=>{
                swiper.slideTo(slideToIndex);
            });
        } else swiper.slideTo(slideToIndex);
    } else swiper.slideTo(slideToIndex);
}

});


parcelRequire.register("dnaHJ", function(module, exports) {

$parcel$export(module.exports, "default", () => $9bc5ba001dfbda65$export$2e2bcd8739ae039);

var $9npmd = parcelRequire("9npmd");

var $3ghGo = parcelRequire("3ghGo");

var $iMiwF = parcelRequire("iMiwF");
var $9bc5ba001dfbda65$export$2e2bcd8739ae039 = {
    loopCreate: $9npmd.default,
    loopFix: $3ghGo.default,
    loopDestroy: $iMiwF.default
};

});
parcelRequire.register("9npmd", function(module, exports) {

$parcel$export(module.exports, "default", () => $6d39ee757eecba0b$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");
function $6d39ee757eecba0b$export$2e2bcd8739ae039() {
    const swiper = this;
    const document = $bMYlU.getDocument();
    const { params: params , $wrapperEl: $wrapperEl  } = swiper; // Remove duplicated slides
    const $selector = $wrapperEl.children().length > 0 ? $brB5Z.default($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
    let slides = $selector.children(`.${params.slideClass}`);
    if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
        if (blankSlidesNum !== params.slidesPerGroup) {
            for(let i = 0; i < blankSlidesNum; i += 1){
                const blankNode = $brB5Z.default(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
                $selector.append(blankNode);
            }
            slides = $selector.children(`.${params.slideClass}`);
        }
    }
    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;
    if (swiper.loopedSlides > slides.length) swiper.loopedSlides = slides.length;
    const prependSlides = [];
    const appendSlides = [];
    slides.each((el, index)=>{
        const slide = $brB5Z.default(el);
        if (index < swiper.loopedSlides) appendSlides.push(el);
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
        slide.attr('data-swiper-slide-index', index);
    });
    for(let i = 0; i < appendSlides.length; i += 1)$selector.append($brB5Z.default(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
    for(let i1 = prependSlides.length - 1; i1 >= 0; i1 -= 1)$selector.prepend($brB5Z.default(prependSlides[i1].cloneNode(true)).addClass(params.slideDuplicateClass));
}

});

parcelRequire.register("3ghGo", function(module, exports) {

$parcel$export(module.exports, "default", () => $260095226ee498dc$export$2e2bcd8739ae039);
function $260095226ee498dc$export$2e2bcd8739ae039() {
    const swiper = this;
    swiper.emit('beforeLoopFix');
    const { activeIndex: activeIndex , slides: slides , loopedSlides: loopedSlides , allowSlidePrev: allowSlidePrev , allowSlideNext: allowSlideNext , snapGrid: snapGrid , rtlTranslate: rtl  } = swiper;
    let newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const snapTranslate = -snapGrid[activeIndex];
    const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
    if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);
        if (slideChanged && diff !== 0) swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
}

});

parcelRequire.register("iMiwF", function(module, exports) {

$parcel$export(module.exports, "default", () => $dabb148e7a564e54$export$2e2bcd8739ae039);
function $dabb148e7a564e54$export$2e2bcd8739ae039() {
    const swiper = this;
    const { $wrapperEl: $wrapperEl , params: params , slides: slides  } = swiper;
    $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
    slides.removeAttr('data-swiper-slide-index');
}

});


parcelRequire.register("adAVw", function(module, exports) {

$parcel$export(module.exports, "default", () => $7707c3263bfef18a$export$2e2bcd8739ae039);

var $7x9ad = parcelRequire("7x9ad");

var $h59xU = parcelRequire("h59xU");
var $7707c3263bfef18a$export$2e2bcd8739ae039 = {
    setGrabCursor: $7x9ad.default,
    unsetGrabCursor: $h59xU.default
};

});
parcelRequire.register("7x9ad", function(module, exports) {

$parcel$export(module.exports, "default", () => $57c2b92df88bd20d$export$2e2bcd8739ae039);
function $57c2b92df88bd20d$export$2e2bcd8739ae039(moving) {
    const swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? 'grabbing' : 'grab';
}

});

parcelRequire.register("h59xU", function(module, exports) {

$parcel$export(module.exports, "default", () => $c6fa4ee4b5d090a3$export$2e2bcd8739ae039);
function $c6fa4ee4b5d090a3$export$2e2bcd8739ae039() {
    const swiper = this;
    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
}

});


parcelRequire.register("6zB3T", function(module, exports) {

$parcel$export(module.exports, "default", () => $4c92c2abb6f1a4cf$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");

var $cpwrx = parcelRequire("cpwrx");

var $ht2bT = parcelRequire("ht2bT");

var $llZFE = parcelRequire("llZFE");

var $eKSoB = parcelRequire("eKSoB");

var $baFnG = parcelRequire("baFnG");

var $2tfEP = parcelRequire("2tfEP");
let $4c92c2abb6f1a4cf$var$dummyEventAttached = false;
function $4c92c2abb6f1a4cf$var$dummyEventListener() {
}
const $4c92c2abb6f1a4cf$var$events = (swiper, method)=>{
    const document = $bMYlU.getDocument();
    const { params: params , touchEvents: touchEvents , el: el , wrapperEl: wrapperEl , device: device , support: support  } = swiper;
    const capture = !!params.nested;
    const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    const swiperMethod = method; // Touch Events
    if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture: capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);
        if (touchEvents.cancel) el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
    } // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]('click', swiper.onClick, true);
    if (params.cssMode) wrapperEl[domMethod]('scroll', swiper.onScroll);
     // Resize handler
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', $eKSoB.default, true);
    else swiper[swiperMethod]('observerUpdate', $eKSoB.default, true);
};
function $4c92c2abb6f1a4cf$var$attachEvents() {
    const swiper = this;
    const document = $bMYlU.getDocument();
    const { params: params , support: support  } = swiper;
    swiper.onTouchStart = $cpwrx.default.bind(swiper);
    swiper.onTouchMove = $ht2bT.default.bind(swiper);
    swiper.onTouchEnd = $llZFE.default.bind(swiper);
    if (params.cssMode) swiper.onScroll = $2tfEP.default.bind(swiper);
    swiper.onClick = $baFnG.default.bind(swiper);
    if (support.touch && !$4c92c2abb6f1a4cf$var$dummyEventAttached) {
        document.addEventListener('touchstart', $4c92c2abb6f1a4cf$var$dummyEventListener);
        $4c92c2abb6f1a4cf$var$dummyEventAttached = true;
    }
    $4c92c2abb6f1a4cf$var$events(swiper, 'on');
}
function $4c92c2abb6f1a4cf$var$detachEvents() {
    const swiper = this;
    $4c92c2abb6f1a4cf$var$events(swiper, 'off');
}
var $4c92c2abb6f1a4cf$export$2e2bcd8739ae039 = {
    attachEvents: $4c92c2abb6f1a4cf$var$attachEvents,
    detachEvents: $4c92c2abb6f1a4cf$var$detachEvents
};

});
parcelRequire.register("cpwrx", function(module, exports) {

$parcel$export(module.exports, "default", () => $9090fc62dbca7603$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");
function $9090fc62dbca7603$var$closestElement(selector, base) {
    if (base === void 0) base = this;
    function __closestFrom(el) {
        if (!el || el === $bMYlU.getDocument() || el === $bMYlU.getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);
        if (!found && !el.getRootNode) return null;
        return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
}
function $9090fc62dbca7603$export$2e2bcd8739ae039(event) {
    const swiper = this;
    const document = $bMYlU.getDocument();
    const window = $bMYlU.getWindow();
    const data = swiper.touchEventsData;
    const { params: params , touches: touches , enabled: enabled  } = swiper;
    if (!enabled) return;
    if (swiper.animating && params.preventInteractionOnTransition) return;
    if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    let $targetEl = $brB5Z.default(e.target);
    if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }
    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) $targetEl = $brB5Z.default(event.path[0]);
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element
    if (params.noSwiping && (isTargetShadow ? $9090fc62dbca7603$var$closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
    }
    if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }
    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
    const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') event.preventDefault();
        else return;
    }
    Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = $hVkLy.now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;
    if (e.type !== 'touchstart') {
        let preventDefault = true;
        if ($targetEl.is(data.focusableElements)) {
            preventDefault = false;
            if ($targetEl[0].nodeName === 'SELECT') data.isTouched = false;
        }
        if (document.activeElement && $brB5Z.default(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) document.activeElement.blur();
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) e.preventDefault();
    }
    if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
    swiper.emit('touchStart', e);
}

});

parcelRequire.register("ht2bT", function(module, exports) {

$parcel$export(module.exports, "default", () => $cb76d820f7709940$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");
function $cb76d820f7709940$export$2e2bcd8739ae039(event) {
    const document = $bMYlU.getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params: params , touches: touches , rtlTranslate: rtl , enabled: enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) swiper.emit('touchMoveOpposite', e);
        return;
    }
    if (data.isTouchEvent && e.type !== 'touchmove') return;
    const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
    if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
    }
    if (!swiper.allowTouchMove) {
        if (!$brB5Z.default(e.target).is(data.focusableElements)) swiper.allowClick = false;
        if (data.isTouched) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY
            });
            data.touchStartTime = $hVkLy.now();
        }
        return;
    }
    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) // Vertical
        {
            if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                data.isTouched = false;
                data.isMoved = false;
                return;
            }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
    }
    if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $brB5Z.default(e.target).is(data.focusableElements)) {
            data.isMoved = true;
            swiper.allowClick = false;
            return;
        }
    }
    if (data.allowTouchCallbacks) swiper.emit('touchMove', e);
    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
    if (typeof data.isScrolling === 'undefined') {
        let touchAngle;
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false;
        else // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
    }
    if (data.isScrolling) swiper.emit('touchMoveOpposite', e);
    if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
    }
    if (data.isScrolling) {
        data.isTouched = false;
        return;
    }
    if (!data.startMoving) return;
    swiper.allowClick = false;
    if (!params.cssMode && e.cancelable) e.preventDefault();
    if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
    if (!data.isMoved) {
        if (params.loop && !params.cssMode) swiper.loopFix();
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
        if (swiper.animating) swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        data.allowMomentumBounce = false; // Grab Cursor
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
        swiper.emit('sliderFirstMove', e);
    }
    swiper.emit('sliderMove', e);
    data.isMoved = true;
    let diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) resistanceRatio = 0;
    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
    }
    if (disableParentSwiper) e.preventedByNestedSwiper = true;
     // Directions locks
    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
     // Threshold
    if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
            if (!data.allowThresholdMove) {
                data.allowThresholdMove = true;
                touches.startX = touches.currentX;
                touches.startY = touches.currentY;
                data.currentTranslate = data.startTranslate;
                touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                return;
            }
        } else {
            data.currentTranslate = data.startTranslate;
            return;
        }
    }
    if (!params.followFinger || params.cssMode) return; // Update active index in free mode
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
     // Update progress
    swiper.updateProgress(data.currentTranslate); // Update translate
    swiper.setTranslate(data.currentTranslate);
}

});

parcelRequire.register("llZFE", function(module, exports) {

$parcel$export(module.exports, "default", () => $f8bb65ad6e9b785d$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
function $f8bb65ad6e9b785d$export$2e2bcd8739ae039(event) {
    const swiper = this;
    const data = swiper.touchEventsData;
    const { params: params , touches: touches , rtlTranslate: rtl , slidesGrid: slidesGrid , enabled: enabled  } = swiper;
    if (!enabled) return;
    let e = event;
    if (e.originalEvent) e = e.originalEvent;
    if (data.allowTouchCallbacks) swiper.emit('touchEnd', e);
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
        data.isMoved = false;
        data.startMoving = false;
        return;
    } // Return Grab Cursor
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
     // Time diff
    const touchEndTime = $hVkLy.now();
    const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
    if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit('doubleTap doubleClick', e);
    }
    data.lastClickTime = $hVkLy.now();
    $hVkLy.nextTick(()=>{
        if (!swiper.destroyed) swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate;
    else currentPos = -data.currentTranslate;
    if (params.cssMode) return;
    if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
            currentPos: currentPos
        });
        return;
    } // Find current slide
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for(let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup){
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (typeof slidesGrid[i + increment] !== 'undefined') {
            if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                stopIndex = i;
                groupSize = slidesGrid[i + increment] - slidesGrid[i];
            }
        } else if (currentPos >= slidesGrid[i]) {
            stopIndex = i;
            groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
        if (swiper.isBeginning) rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        else if (swiper.isEnd) rewindFirstIndex = 0;
    } // Find current slide size
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (swiper.swipeDirection === 'next') {
            if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
            else swiper.slideTo(stopIndex);
        }
        if (swiper.swipeDirection === 'prev') {
            if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);
            else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex);
            else swiper.slideTo(stopIndex);
        }
    } else {
        // Short swipes
        if (!params.shortSwipes) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
        if (!isNavButtonTarget) {
            if (swiper.swipeDirection === 'next') swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
            if (swiper.swipeDirection === 'prev') swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment);
        else swiper.slideTo(stopIndex);
    }
}

});

parcelRequire.register("eKSoB", function(module, exports) {

$parcel$export(module.exports, "default", () => $abdf8e701cc3b7f2$export$2e2bcd8739ae039);
function $abdf8e701cc3b7f2$export$2e2bcd8739ae039() {
    const swiper = this;
    const { params: params , el: el  } = swiper;
    if (el && el.offsetWidth === 0) return; // Breakpoints
    if (params.breakpoints) swiper.setBreakpoint();
     // Save locks
    const { allowSlideNext: allowSlideNext , allowSlidePrev: allowSlidePrev , snapGrid: snapGrid  } = swiper; // Disable locks on resize
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    else swiper.slideTo(swiper.activeIndex, 0, false, true);
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.run();
     // Return locks after resize
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}

});

parcelRequire.register("baFnG", function(module, exports) {

$parcel$export(module.exports, "default", () => $8220ba423cd9f6d3$export$2e2bcd8739ae039);
function $8220ba423cd9f6d3$export$2e2bcd8739ae039(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}

});

parcelRequire.register("2tfEP", function(module, exports) {

$parcel$export(module.exports, "default", () => $1cca6f78ec68842a$export$2e2bcd8739ae039);
function $1cca6f78ec68842a$export$2e2bcd8739ae039() {
    const swiper = this;
    const { wrapperEl: wrapperEl , rtlTranslate: rtlTranslate , enabled: enabled  } = swiper;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;
     // eslint-disable-next-line
    if (swiper.translate === 0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    swiper.emit('setTranslate', swiper.translate, false);
}

});


parcelRequire.register("fHuEu", function(module, exports) {

$parcel$export(module.exports, "default", () => $b6e2a602a225ef69$export$2e2bcd8739ae039);

var $hBOUK = parcelRequire("hBOUK");

var $enwPS = parcelRequire("enwPS");
var $b6e2a602a225ef69$export$2e2bcd8739ae039 = {
    setBreakpoint: $hBOUK.default,
    getBreakpoint: $enwPS.default
};

});
parcelRequire.register("hBOUK", function(module, exports) {

$parcel$export(module.exports, "default", () => $cd1d62e909a9a210$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
const $cd1d62e909a9a210$var$isGridEnabled = (swiper, params)=>{
    return swiper.grid && params.grid && params.grid.rows > 1;
};
function $cd1d62e909a9a210$export$2e2bcd8739ae039() {
    const swiper = this;
    const { activeIndex: activeIndex , initialized: initialized , loopedSlides: loopedSlides = 0 , params: params , $el: $el  } = swiper;
    const breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = $cd1d62e909a9a210$var$isGridEnabled(swiper, params);
    const isMultiRow = $cd1d62e909a9a210$var$isGridEnabled(swiper, breakpointParams);
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') $el.addClass(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } // Toggle navigation, pagination, scrollbar
    [
        'navigation',
        'pagination',
        'scrollbar'
    ].forEach((prop)=>{
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    if (directionChanged && initialized) swiper.changeDirection();
    $hVkLy.extend(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();
    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);
    if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakpointParams);
}

});

parcelRequire.register("enwPS", function(module, exports) {

$parcel$export(module.exports, "default", () => $a77caf2633310868$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");
function $a77caf2633310868$export$2e2bcd8739ae039(breakpoints, base, containerEl) {
    if (base === void 0) base = 'window';
    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    let breakpoint = false;
    const window = $bMYlU.getWindow();
    const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints).map((point)=>{
        if (typeof point === 'string' && point.indexOf('@') === 0) {
            const minRatio = parseFloat(point.substr(1));
            const value = currentHeight * minRatio;
            return {
                value: value,
                point: point
            };
        }
        return {
            value: point,
            point: point
        };
    });
    points.sort((a, b)=>parseInt(a.value, 10) - parseInt(b.value, 10)
    );
    for(let i = 0; i < points.length; i += 1){
        const { point: point , value: value  } = points[i];
        if (base === 'window') {
            if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
        } else if (value <= containerEl.clientWidth) breakpoint = point;
    }
    return breakpoint || 'max';
}

});


parcelRequire.register("9HrOQ", function(module, exports) {

$parcel$export(module.exports, "default", () => $70fdb583408080fe$export$2e2bcd8739ae039);

var $02R2i = parcelRequire("02R2i");

var $fJyIP = parcelRequire("fJyIP");
var $70fdb583408080fe$export$2e2bcd8739ae039 = {
    addClasses: $02R2i.default,
    removeClasses: $fJyIP.default
};

});
parcelRequire.register("02R2i", function(module, exports) {

$parcel$export(module.exports, "default", () => $008953e4b22722e3$export$2e2bcd8739ae039);
function $008953e4b22722e3$var$prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item)=>{
        if (typeof item === 'object') Object.keys(item).forEach((classNames)=>{
            if (item[classNames]) resultClasses.push(prefix + classNames);
        });
        else if (typeof item === 'string') resultClasses.push(prefix + item);
    });
    return resultClasses;
}
function $008953e4b22722e3$export$2e2bcd8739ae039() {
    const swiper = this;
    const { classNames: classNames , params: params , rtl: rtl , $el: $el , device: device , support: support  } = swiper; // prettier-ignore
    const suffixes = $008953e4b22722e3$var$prepareClasses([
        'initialized',
        params.direction,
        {
            'pointer-events': !support.touch
        },
        {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        },
        {
            'autoheight': params.autoHeight
        },
        {
            'rtl': rtl
        },
        {
            'grid': params.grid && params.grid.rows > 1
        },
        {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        },
        {
            'android': device.android
        },
        {
            'ios': device.ios
        },
        {
            'css-mode': params.cssMode
        },
        {
            'centered': params.cssMode && params.centeredSlides
        },
        {
            'watch-progress': params.watchSlidesProgress
        }
    ], params.containerModifierClass);
    classNames.push(...suffixes);
    $el.addClass([
        ...classNames
    ].join(' '));
    swiper.emitContainerClasses();
}

});

parcelRequire.register("fJyIP", function(module, exports) {

$parcel$export(module.exports, "default", () => $b745fe10f996f9a2$export$2e2bcd8739ae039);
function $b745fe10f996f9a2$export$2e2bcd8739ae039() {
    const swiper = this;
    const { $el: $el , classNames: classNames  } = swiper;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
}

});


parcelRequire.register("3VEDh", function(module, exports) {

$parcel$export(module.exports, "default", () => $2dc636c141569451$export$2e2bcd8739ae039);

var $6sd39 = parcelRequire("6sd39");

var $6JW0Y = parcelRequire("6JW0Y");
var $2dc636c141569451$export$2e2bcd8739ae039 = {
    loadImage: $6sd39.default,
    preloadImages: $6JW0Y.default
};

});
parcelRequire.register("6sd39", function(module, exports) {

$parcel$export(module.exports, "default", () => $4b2f7b07c438a642$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");
function $4b2f7b07c438a642$export$2e2bcd8739ae039(imageEl, src, srcset, sizes, checkForComplete, callback) {
    const window = $bMYlU.getWindow();
    let image;
    function onReady() {
        if (callback) callback();
    }
    const isPicture = $brB5Z.default(imageEl).parent('picture')[0];
    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
            image = new window.Image();
            image.onload = onReady;
            image.onerror = onReady;
            if (sizes) image.sizes = sizes;
            if (srcset) image.srcset = srcset;
            if (src) image.src = src;
        } else onReady();
    } else // image already loaded...
    onReady();
}

});

parcelRequire.register("6JW0Y", function(module, exports) {

$parcel$export(module.exports, "default", () => $4e83f2933885275a$export$2e2bcd8739ae039);
function $4e83f2933885275a$export$2e2bcd8739ae039() {
    const swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');
    function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
            if (swiper.params.updateOnImagesReady) swiper.update();
            swiper.emit('imagesReady');
        }
    }
    for(let i = 0; i < swiper.imagesToLoad.length; i += 1){
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
}

});


parcelRequire.register("3iWnp", function(module, exports) {

$parcel$export(module.exports, "default", () => $268055ed2073305a$export$2e2bcd8739ae039);
function $268055ed2073305a$var$checkOverflow() {
    const swiper = this;
    const { isLocked: wasLocked , params: params  } = swiper;
    const { slidesOffsetBefore: slidesOffsetBefore  } = params;
    if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else swiper.isLocked = swiper.snapGrid.length === 1;
    if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
    if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
    if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
}
var $268055ed2073305a$export$2e2bcd8739ae039 = {
    checkOverflow: $268055ed2073305a$var$checkOverflow
};

});

parcelRequire.register("3Md7A", function(module, exports) {

$parcel$export(module.exports, "default", () => $2c00086c7298ff55$export$2e2bcd8739ae039);
var $2c00086c7298ff55$export$2e2bcd8739ae039 = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
};

});

parcelRequire.register("38E92", function(module, exports) {

$parcel$export(module.exports, "default", () => $24914263874101fd$export$2e2bcd8739ae039);

var $hVkLy = parcelRequire("hVkLy");
function $24914263874101fd$export$2e2bcd8739ae039(params, allModulesParams) {
    return function extendParams(obj) {
        if (obj === void 0) obj = {
        };
        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];
        if (typeof moduleParams !== 'object' || moduleParams === null) {
            $hVkLy.extend(allModulesParams, obj);
            return;
        }
        if ([
            'navigation',
            'pagination',
            'scrollbar'
        ].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) params[moduleParamName] = {
            auto: true
        };
        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
            $hVkLy.extend(allModulesParams, obj);
            return;
        }
        if (params[moduleParamName] === true) params[moduleParamName] = {
            enabled: true
        };
        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) params[moduleParamName].enabled = true;
        if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
        };
        $hVkLy.extend(allModulesParams, obj);
    };
}

});


parcelRequire.register("liRRE", function(module, exports) {

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");
function $f8250fc4c00449e3$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    extendParams({
        virtual: {
            enabled: false,
            slides: [],
            cache: true,
            renderSlide: null,
            renderExternal: null,
            renderExternalUpdate: true,
            addSlidesBefore: 0,
            addSlidesAfter: 0
        }
    });
    let cssModeTimeout;
    swiper.virtual = {
        cache: {
        },
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
    };
    function renderSlide(slide, index) {
        const params = swiper.params.virtual;
        if (params.cache && swiper.virtual.cache[index]) return swiper.virtual.cache[index];
        const $slideEl = params.renderSlide ? $brB5Z.default(params.renderSlide.call(swiper, slide, index)) : $brB5Z.default(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
    }
    function update(force) {
        const { slidesPerView: slidesPerView , slidesPerGroup: slidesPerGroup , centeredSlides: centeredSlides  } = swiper.params;
        const { addSlidesBefore: addSlidesBefore , addSlidesAfter: addSlidesAfter  } = swiper.params.virtual;
        const { from: previousFrom , to: previousTo , slides: slides , slidesGrid: previousSlidesGrid , offset: previousOffset  } = swiper.virtual;
        if (!swiper.params.cssMode) swiper.updateActiveIndex();
        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';
        else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;
        if (centeredSlides) {
            slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
            slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
            slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
            slidesBefore = slidesPerGroup + addSlidesBefore;
        }
        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
            from: from,
            to: to,
            offset: offset,
            slidesGrid: swiper.slidesGrid
        });
        function onRendered() {
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();
            if (swiper.lazy && swiper.params.lazy.enabled) swiper.lazy.load();
            emit('virtualUpdate');
        }
        if (previousFrom === from && previousTo === to && !force) {
            if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) swiper.slides.css(offsetProp, `${offset}px`);
            swiper.updateProgress();
            emit('virtualUpdate');
            return;
        }
        if (swiper.params.virtual.renderExternal) {
            swiper.params.virtual.renderExternal.call(swiper, {
                offset: offset,
                from: from,
                to: to,
                slides: function getSlides() {
                    const slidesToRender = [];
                    for(let i = from; i <= to; i += 1)slidesToRender.push(slides[i]);
                    return slidesToRender;
                }()
            });
            if (swiper.params.virtual.renderExternalUpdate) onRendered();
            else emit('virtualUpdate');
            return;
        }
        const prependIndexes = [];
        const appendIndexes = [];
        if (force) swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        else {
            for(let i = previousFrom; i <= previousTo; i += 1)if (i < from || i > to) swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
        }
        for(let i1 = 0; i1 < slides.length; i1 += 1)if (i1 >= from && i1 <= to) {
            if (typeof previousTo === 'undefined' || force) appendIndexes.push(i1);
            else {
                if (i1 > previousTo) appendIndexes.push(i1);
                if (i1 < previousFrom) prependIndexes.push(i1);
            }
        }
        appendIndexes.forEach((index)=>{
            swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b)=>b - a
        ).forEach((index)=>{
            swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
    }
    function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.push(slides[i]);
        } else swiper.virtual.slides.push(slides);
        update(true);
    }
    function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;
        if (Array.isArray(slides)) {
            for(let i = 0; i < slides.length; i += 1)if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
            newActiveIndex = activeIndex + slides.length;
            numberOfNewSlides = slides.length;
        } else swiper.virtual.slides.unshift(slides);
        if (swiper.params.virtual.cache) {
            const cache = swiper.virtual.cache;
            const newCache = {
            };
            Object.keys(cache).forEach((cachedIndex)=>{
                const $cachedEl = cache[cachedIndex];
                const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
                if (cachedElIndex) $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
            });
            swiper.virtual.cache = newCache;
        }
        update(true);
        swiper.slideTo(newActiveIndex, 0);
    }
    function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;
        if (Array.isArray(slidesIndexes)) for(let i = slidesIndexes.length - 1; i >= 0; i -= 1){
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes[i]];
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        else {
            swiper.virtual.slides.splice(slidesIndexes, 1);
            if (swiper.params.virtual.cache) delete swiper.virtual.cache[slidesIndexes];
            if (slidesIndexes < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
        }
        update(true);
        swiper.slideTo(activeIndex, 0);
    }
    function removeAllSlides() {
        swiper.virtual.slides = [];
        if (swiper.params.virtual.cache) swiper.virtual.cache = {
        };
        update(true);
        swiper.slideTo(0, 0);
    }
    on('beforeInit', ()=>{
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
        if (!swiper.params.initialSlide) update();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode && !swiper._immediateVirtual) {
            clearTimeout(cssModeTimeout);
            cssModeTimeout = setTimeout(()=>{
                update();
            }, 100);
        } else update();
    });
    on('init update resize', ()=>{
        if (!swiper.params.virtual.enabled) return;
        if (swiper.params.cssMode) $hVkLy.setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
    });
    Object.assign(swiper.virtual, {
        appendSlide: appendSlide,
        prependSlide: prependSlide,
        removeSlide: removeSlide,
        removeAllSlides: removeAllSlides,
        update: update
    });
}

});

parcelRequire.register("hMA3u", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");
function $cf22e330da25aaee$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    const document = $bMYlU.getDocument();
    const window = $bMYlU.getWindow();
    swiper.keyboard = {
        enabled: false
    };
    extendParams({
        keyboard: {
            enabled: false,
            onlyInViewport: true,
            pageUpDown: true
        }
    });
    function handle(event) {
        if (!swiper.enabled) return;
        const { rtlTranslate: rtl  } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) return false;
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) return false;
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return undefined;
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) return undefined;
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
            let inView = false; // Check that swiper should be inside of visible area of window
            if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) return undefined;
            const $el = swiper.$el;
            const swiperWidth = $el[0].clientWidth;
            const swiperHeight = $el[0].clientHeight;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const swiperOffset = swiper.$el.offset();
            if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
            const swiperCoord = [
                [
                    swiperOffset.left,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top
                ],
                [
                    swiperOffset.left,
                    swiperOffset.top + swiperHeight
                ],
                [
                    swiperOffset.left + swiperWidth,
                    swiperOffset.top + swiperHeight
                ]
            ];
            for(let i = 0; i < swiperCoord.length; i += 1){
                const point = swiperCoord[i];
                if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                    if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                    inView = true;
                }
            }
            if (!inView) return undefined;
        }
        if (swiper.isHorizontal()) {
            if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
            if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
            if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
            }
            if (isPageDown || isArrowDown) swiper.slideNext();
            if (isPageUp || isArrowUp) swiper.slidePrev();
        }
        emit('keyPress', kc);
        return undefined;
    }
    function enable() {
        if (swiper.keyboard.enabled) return;
        $brB5Z.default(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
    }
    function disable() {
        if (!swiper.keyboard.enabled) return;
        $brB5Z.default(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
    }
    on('init', ()=>{
        if (swiper.params.keyboard.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.keyboard.enabled) disable();
    });
    Object.assign(swiper.keyboard, {
        enable: enable,
        disable: disable
    });
}

});

parcelRequire.register("aAlzk", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");
function $7b4dff49afabded3$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    const window = $bMYlU.getWindow();
    extendParams({
        mousewheel: {
            enabled: false,
            releaseOnEdges: false,
            invert: false,
            forceToAxis: false,
            sensitivity: 1,
            eventsTarget: 'container',
            thresholdDelta: null,
            thresholdTime: null
        }
    });
    swiper.mousewheel = {
        enabled: false
    };
    let timeout;
    let lastScrollTime = $hVkLy.now();
    let lastEventBeforeSnap;
    const recentWheelEvents = [];
    function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY
        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy
        if ('detail' in e) sY = e.detail;
        if ('wheelDelta' in e) sY = -e.wheelDelta / 120;
        if ('wheelDeltaY' in e) sY = -e.wheelDeltaY / 120;
        if ('wheelDeltaX' in e) sX = -e.wheelDeltaX / 120;
         // side scrolling on FF with DOMMouseScroll
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
            sX = sY;
            sY = 0;
        }
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
        if ('deltaY' in e) pY = e.deltaY;
        if ('deltaX' in e) pX = e.deltaX;
        if (e.shiftKey && !pX) {
            // if user scrolls with shift he wants horizontal scroll
            pX = pY;
            pY = 0;
        }
        if ((pX || pY) && e.deltaMode) {
            if (e.deltaMode === 1) {
                // delta in LINE units
                pX *= LINE_HEIGHT;
                pY *= LINE_HEIGHT;
            } else {
                // delta in PAGE units
                pX *= PAGE_HEIGHT;
                pY *= PAGE_HEIGHT;
            }
        } // Fall-back if spin cannot be determined
        if (pX && !sX) sX = pX < 1 ? -1 : 1;
        if (pY && !sY) sY = pY < 1 ? -1 : 1;
        return {
            spinX: sX,
            spinY: sY,
            pixelX: pX,
            pixelY: pY
        };
    }
    function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
    }
    function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
    }
    function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
        if (swiper.params.mousewheel.thresholdTime && $hVkLy.now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) // Prevent if time between scrolls is below configured threshold
        return false;
         // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
        if (newEvent.delta >= 6 && $hVkLy.now() - lastScrollTime < 60) // Return false as a default
        return true;
         // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
        if (newEvent.direction < 0) {
            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                swiper.slideNext();
                emit('scroll', newEvent.raw);
            }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
            swiper.slidePrev();
            emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
        lastScrollTime = new window.Date().getTime(); // Return false as a default
        return false;
    }
    function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;
        if (newEvent.direction < 0) {
            if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
            return true;
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) // Return true to animate scroll on edges
        return true;
        return false;
    }
    function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;
        if (swiper.params.cssMode) e.preventDefault();
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = $brB5Z.default(swiper.params.mousewheel.eventsTarget);
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);
        if (params.forceToAxis) {
            if (swiper.isHorizontal()) {
                if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                else return true;
            } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
            else return true;
        } else delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions
        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.
        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
            // Register the new event in a variable which stores the relevant data
            const newEvent = {
                time: $hVkLy.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta),
                raw: event
            }; // Keep the most recent events
            if (recentWheelEvents.length >= 2) recentWheelEvents.shift(); // only store the last N events
            const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
            recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
            //   If direction has changed or
            //   if the scroll is quicker than the previous one:
            //     Animate the slider.
            // Else (this is the first time the wheel is moved):
            //     Animate the slider.
            if (prevEvent) {
                if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) animateSlider(newEvent);
            } else animateSlider(newEvent);
             // If it's time to release the scroll:
            //   Return now so you don't hit the preventDefault.
            if (releaseScroll(newEvent)) return true;
        } else {
            // Freemode or scrollContainer:
            // If we recently snapped after a momentum scroll, then ignore wheel events
            // to give time for the deceleration to finish. Stop ignoring after 500 msecs
            // or if it's a new scroll (larger delta or inverse sign as last event before
            // an end-of-momentum snap).
            const newEvent = {
                time: $hVkLy.now(),
                delta: Math.abs(delta),
                direction: Math.sign(delta)
            };
            const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
            if (!ignoreWheelEvents) {
                lastEventBeforeSnap = undefined;
                if (swiper.params.loop) swiper.loopFix();
                let position = swiper.getTranslate() + delta * params.sensitivity;
                const wasBeginning = swiper.isBeginning;
                const wasEnd = swiper.isEnd;
                if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                swiper.setTransition(0);
                swiper.setTranslate(position);
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) swiper.updateSlidesClasses();
                if (swiper.params.freeMode.sticky) {
                    // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                    // the end of a momentum scroll by storing recent (N=15?) wheel events.
                    // 1. do all N events have decreasing or same (absolute value) delta?
                    // 2. did all N events arrive in the last M (M=500?) msecs?
                    // 3. does the earliest event have an (absolute value) delta that's
                    //    at least P (P=1?) larger than the most recent event's delta?
                    // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                    // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                    // Snap immediately and ignore remaining wheel events in this scroll.
                    // See comment above for "remaining wheel events in this scroll" determination.
                    // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                    clearTimeout(timeout);
                    timeout = undefined;
                    if (recentWheelEvents.length >= 15) recentWheelEvents.shift(); // only store the last N events
                    const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                    const firstEvent = recentWheelEvents[0];
                    recentWheelEvents.push(newEvent);
                    if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                    recentWheelEvents.splice(0);
                    else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                        // We're at the end of the deceleration of a momentum scroll, so there's no need
                        // to wait for more events. Snap ASAP on the next tick.
                        // Also, because there's some remaining momentum we'll bias the snap in the
                        // direction of the ongoing scroll because it's better UX for the scroll to snap
                        // in the same direction as the scroll instead of reversing to snap.  Therefore,
                        // if it's already scrolled more than 20% in the current direction, keep going.
                        const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        timeout = $hVkLy.nextTick(()=>{
                            swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                        }, 0); // no delay; move on next tick
                    }
                    if (!timeout) // if we get here, then we haven't detected the end of a momentum scroll, so
                    // we'll consider a scroll "complete" when there haven't been any wheel events
                    // for 500ms.
                    timeout = $hVkLy.nextTick(()=>{
                        const snapToThreshold = 0.5;
                        lastEventBeforeSnap = newEvent;
                        recentWheelEvents.splice(0);
                        swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                    }, 500);
                } // Emit event
                if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay
                if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
                if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
            }
        }
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        return false;
    }
    function events(method) {
        let target = swiper.$el;
        if (swiper.params.mousewheel.eventsTarget !== 'container') target = $brB5Z.default(swiper.params.mousewheel.eventsTarget);
        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
    }
    function enable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.removeEventListener('wheel', handle);
            return true;
        }
        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
    }
    function disable() {
        if (swiper.params.cssMode) {
            swiper.wrapperEl.addEventListener(event, handle);
            return true;
        }
        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
    }
    on('init', ()=>{
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) disable();
        if (swiper.params.mousewheel.enabled) enable();
    });
    on('destroy', ()=>{
        if (swiper.params.cssMode) enable();
        if (swiper.mousewheel.enabled) disable();
    });
    Object.assign(swiper.mousewheel, {
        enable: enable,
        disable: disable
    });
}

});

parcelRequire.register("ha22a", function(module, exports) {

$parcel$export(module.exports, "default", () => $c7e4f2bea5628629$export$2e2bcd8739ae039);

var $2uy4h = parcelRequire("2uy4h");

var $brB5Z = parcelRequire("brB5Z");
function $c7e4f2bea5628629$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled'
        }
    });
    swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
    };
    function getEl(el) {
        let $el;
        if (el) {
            $el = $brB5Z.default(el);
            if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) $el = swiper.$el.find(el);
        }
        return $el;
    }
    function toggleEl($el, disabled) {
        const params = swiper.params.navigation;
        if ($el && $el.length > 0) {
            $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
            if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;
            if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
    }
    function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const { $nextEl: $nextEl , $prevEl: $prevEl  } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
    }
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
    }
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
    }
    function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = $2uy4h.default(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: 'swiper-button-next',
            prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);
        if ($nextEl && $nextEl.length > 0) $nextEl.on('click', onNextClick);
        if ($prevEl && $prevEl.length > 0) $prevEl.on('click', onPrevClick);
        Object.assign(swiper.navigation, {
            $nextEl: $nextEl,
            nextEl: $nextEl && $nextEl[0],
            $prevEl: $prevEl,
            prevEl: $prevEl && $prevEl[0]
        });
        if (!swiper.enabled) {
            if ($nextEl) $nextEl.addClass(params.lockClass);
            if ($prevEl) $prevEl.addClass(params.lockClass);
        }
    }
    function destroy() {
        const { $nextEl: $nextEl , $prevEl: $prevEl  } = swiper.navigation;
        if ($nextEl && $nextEl.length) {
            $nextEl.off('click', onNextClick);
            $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
        if ($prevEl && $prevEl.length) {
            $prevEl.off('click', onPrevClick);
            $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
    }
    on('init', ()=>{
        if (swiper.params.navigation.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            update();
        }
    });
    on('toEdge fromEdge lock unlock', ()=>{
        update();
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $nextEl: $nextEl , $prevEl: $prevEl  } = swiper.navigation;
        if ($nextEl) $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        if ($prevEl) $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
    });
    on('click', (_s, e)=>{
        const { $nextEl: $nextEl , $prevEl: $prevEl  } = swiper.navigation;
        const targetEl = e.target;
        if (swiper.params.navigation.hideOnClick && !$brB5Z.default(targetEl).is($prevEl) && !$brB5Z.default(targetEl).is($nextEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if ($nextEl) isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            else if ($prevEl) isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit('navigationShow');
            else emit('navigationHide');
            if ($nextEl) $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            if ($prevEl) $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
        init();
        update();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
        destroy();
    };
    Object.assign(swiper.navigation, {
        enable: enable,
        disable: disable,
        update: update,
        init: init,
        destroy: destroy
    });
}

});
parcelRequire.register("2uy4h", function(module, exports) {

$parcel$export(module.exports, "default", () => $1d08cf544ba51352$export$2e2bcd8739ae039);

var $bMYlU = parcelRequire("bMYlU");
function $1d08cf544ba51352$export$2e2bcd8739ae039(swiper, originalParams, params, checkProps) {
    const document = $bMYlU.getDocument();
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key)=>{
        if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];
            if (!element) {
                element = document.createElement('div');
                element.className = checkProps[key];
                swiper.$el.append(element);
            }
            params[key] = element;
            originalParams[key] = element;
        }
    });
    return params;
}

});


parcelRequire.register("9oDXP", function(module, exports) {

$parcel$export(module.exports, "default", () => $6d755af793aefe15$export$2e2bcd8739ae039);

var $brB5Z = parcelRequire("brB5Z");

var $hC1bz = parcelRequire("hC1bz");

var $2uy4h = parcelRequire("2uy4h");
function $6d755af793aefe15$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    const pfx = 'swiper-pagination';
    extendParams({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: false,
            hideOnClick: false,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: false,
            type: 'bullets',
            // 'bullets' or 'progressbar' or 'fraction' or 'custom'
            dynamicBullets: false,
            dynamicMainBullets: 1,
            formatFractionCurrent: (number)=>number
            ,
            formatFractionTotal: (number)=>number
            ,
            bulletClass: `${pfx}-bullet`,
            bulletActiveClass: `${pfx}-bullet-active`,
            modifierClass: `${pfx}-`,
            currentClass: `${pfx}-current`,
            totalClass: `${pfx}-total`,
            hiddenClass: `${pfx}-hidden`,
            progressbarFillClass: `${pfx}-progressbar-fill`,
            progressbarOppositeClass: `${pfx}-progressbar-opposite`,
            clickableClass: `${pfx}-clickable`,
            lockClass: `${pfx}-lock`,
            horizontalClass: `${pfx}-horizontal`,
            verticalClass: `${pfx}-vertical`,
            paginationDisabledClass: `${pfx}-disabled`
        }
    });
    swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
    };
    let bulletSize;
    let dynamicBulletIndex = 0;
    function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }
    function setSideBullets($bulletEl, position) {
        const { bulletActiveClass: bulletActiveClass  } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
    }
    function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total
        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
        if (swiper.params.loop) {
            current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
            if (current > slidesLength - 1 - swiper.loopedSlides * 2) current -= slidesLength - swiper.loopedSlides * 2;
            if (current > total - 1) current -= total;
            if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') current = swiper.snapIndex;
        else current = swiper.activeIndex || 0;
         // Types
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
            const bullets = swiper.pagination.bullets;
            let firstIndex;
            let lastIndex;
            let midIndex;
            if (params.dynamicBullets) {
                bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);
                if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
                    dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
                    if (dynamicBulletIndex > params.dynamicMainBullets - 1) dynamicBulletIndex = params.dynamicMainBullets - 1;
                    else if (dynamicBulletIndex < 0) dynamicBulletIndex = 0;
                }
                firstIndex = Math.max(current - dynamicBulletIndex, 0);
                lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                midIndex = (lastIndex + firstIndex) / 2;
            }
            bullets.removeClass([
                '',
                '-next',
                '-next-next',
                '-prev',
                '-prev-prev',
                '-main'
            ].map((suffix)=>`${params.bulletActiveClass}${suffix}`
            ).join(' '));
            if ($el.length > 1) bullets.each((bullet)=>{
                const $bullet = $brB5Z.default(bullet);
                const bulletIndex = $bullet.index();
                if (bulletIndex === current) $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) $bullet.addClass(`${params.bulletActiveClass}-main`);
                    if (bulletIndex === firstIndex) setSideBullets($bullet, 'prev');
                    if (bulletIndex === lastIndex) setSideBullets($bullet, 'next');
                }
            });
            else {
                const $bullet = bullets.eq(current);
                const bulletIndex = $bullet.index();
                $bullet.addClass(params.bulletActiveClass);
                if (params.dynamicBullets) {
                    const $firstDisplayedBullet = bullets.eq(firstIndex);
                    const $lastDisplayedBullet = bullets.eq(lastIndex);
                    for(let i = firstIndex; i <= lastIndex; i += 1)bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
                    if (swiper.params.loop) {
                        if (bulletIndex >= bullets.length) {
                            for(let i = params.dynamicMainBullets; i >= 0; i -= 1)bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                            bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                        } else {
                            setSideBullets($firstDisplayedBullet, 'prev');
                            setSideBullets($lastDisplayedBullet, 'next');
                        }
                    } else {
                        setSideBullets($firstDisplayedBullet, 'prev');
                        setSideBullets($lastDisplayedBullet, 'next');
                    }
                }
            }
            if (params.dynamicBullets) {
                const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                const offsetProp = rtl ? 'right' : 'left';
                bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
            }
        }
        if (params.type === 'fraction') {
            $el.find($hC1bz.default(params.currentClass)).text(params.formatFractionCurrent(current + 1));
            $el.find($hC1bz.default(params.totalClass)).text(params.formatFractionTotal(total));
        }
        if (params.type === 'progressbar') {
            let progressbarDirection;
            if (params.progressbarOpposite) progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
            else progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
            const scale = (current + 1) / total;
            let scaleX = 1;
            let scaleY = 1;
            if (progressbarDirection === 'horizontal') scaleX = scale;
            else scaleY = scale;
            $el.find($hC1bz.default(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }
        if (params.type === 'custom' && params.renderCustom) {
            $el.html(params.renderCustom(swiper, current + 1, total));
            emit('paginationRender', $el[0]);
        } else emit('paginationUpdate', $el[0]);
        if (swiper.params.watchOverflow && swiper.enabled) $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    }
    function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';
        if (params.type === 'bullets') {
            let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) numberOfBullets = slidesLength;
            for(let i = 0; i < numberOfBullets; i += 1)if (params.renderBullet) paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            else paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            $el.html(paginationHTML);
            swiper.pagination.bullets = $el.find($hC1bz.default(params.bulletClass));
        }
        if (params.type === 'fraction') {
            if (params.renderFraction) paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
            else paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type === 'progressbar') {
            if (params.renderProgressbar) paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
            else paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
            $el.html(paginationHTML);
        }
        if (params.type !== 'custom') emit('paginationRender', swiper.pagination.$el[0]);
    }
    function init() {
        swiper.params.pagination = $2uy4h.default(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
            el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = $brB5Z.default(params.el);
        if ($el.length === 0) return;
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
            $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper
            if ($el.length > 1) $el = $el.filter((el)=>{
                if ($brB5Z.default(el).parents('.swiper')[0] !== swiper.el) return false;
                return true;
            });
        }
        if (params.type === 'bullets' && params.clickable) $el.addClass(params.clickableClass);
        $el.addClass(params.modifierClass + params.type);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (params.type === 'bullets' && params.dynamicBullets) {
            $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
            dynamicBulletIndex = 0;
            if (params.dynamicMainBullets < 1) params.dynamicMainBullets = 1;
        }
        if (params.type === 'progressbar' && params.progressbarOpposite) $el.addClass(params.progressbarOppositeClass);
        if (params.clickable) $el.on('click', $hC1bz.default(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = $brB5Z.default(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
        });
        Object.assign(swiper.pagination, {
            $el: $el,
            el: $el[0]
        });
        if (!swiper.enabled) $el.addClass(params.lockClass);
    }
    function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        if (params.clickable) $el.off('click', $hC1bz.default(params.bulletClass));
    }
    on('init', ()=>{
        if (swiper.params.pagination.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            render();
            update();
        }
    });
    on('activeIndexChange', ()=>{
        if (swiper.params.loop) update();
        else if (typeof swiper.snapIndex === 'undefined') update();
    });
    on('snapIndexChange', ()=>{
        if (!swiper.params.loop) update();
    });
    on('slidesLengthChange', ()=>{
        if (swiper.params.loop) {
            render();
            update();
        }
    });
    on('snapGridLengthChange', ()=>{
        if (!swiper.params.loop) {
            render();
            update();
        }
    });
    on('destroy', ()=>{
        destroy();
    });
    on('enable disable', ()=>{
        const { $el: $el  } = swiper.pagination;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
    });
    on('lock unlock', ()=>{
        update();
    });
    on('click', (_s, e)=>{
        const targetEl = e.target;
        const { $el: $el  } = swiper.pagination;
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$brB5Z.default(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
            if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
            const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
            if (isHidden === true) emit('paginationShow');
            else emit('paginationHide');
            $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        if (swiper.pagination.$el) swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        init();
        render();
        update();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        if (swiper.pagination.$el) swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        destroy();
    };
    Object.assign(swiper.pagination, {
        enable: enable,
        disable: disable,
        render: render,
        update: update,
        init: init,
        destroy: destroy
    });
}

});
parcelRequire.register("hC1bz", function(module, exports) {

$parcel$export(module.exports, "default", () => $cd26e7b2e25f850c$export$2e2bcd8739ae039);
function $cd26e7b2e25f850c$export$2e2bcd8739ae039(classes) {
    if (classes === void 0) classes = '';
    return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.')}`;
}

});


parcelRequire.register("eE8jm", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");

var $2uy4h = parcelRequire("2uy4h");
function $aa9b3f8abf6ccbf3$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    const document = $bMYlU.getDocument();
    let isTouched = false;
    let timeout = null;
    let dragTimeout = null;
    let dragStartPos;
    let dragSize;
    let trackSize;
    let divider;
    extendParams({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: false,
            draggable: false,
            snapOnRelease: true,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled'
        }
    });
    swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
    };
    function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar: scrollbar , rtlTranslate: rtl , progress: progress  } = swiper;
        const { $dragEl: $dragEl , $el: $el  } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;
        if (rtl) {
            newPos = -newPos;
            if (newPos > 0) {
                newSize = dragSize - newPos;
                newPos = 0;
            } else if (-newPos + dragSize > trackSize) newSize = trackSize + newPos;
        } else if (newPos < 0) {
            newSize = dragSize + newPos;
            newPos = 0;
        } else if (newPos + dragSize > trackSize) newSize = trackSize - newPos;
        if (swiper.isHorizontal()) {
            $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
            $dragEl[0].style.width = `${newSize}px`;
        } else {
            $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
            $dragEl[0].style.height = `${newSize}px`;
        }
        if (params.hide) {
            clearTimeout(timeout);
            $el[0].style.opacity = 1;
            timeout = setTimeout(()=>{
                $el[0].style.opacity = 0;
                $el.transition(400);
            }, 1000);
        }
    }
    function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
    }
    function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const { scrollbar: scrollbar  } = swiper;
        const { $dragEl: $dragEl , $el: $el  } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
        if (swiper.params.scrollbar.dragSize === 'auto') dragSize = trackSize * divider;
        else dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        if (swiper.isHorizontal()) $dragEl[0].style.width = `${dragSize}px`;
        else $dragEl[0].style.height = `${dragSize}px`;
        if (divider >= 1) $el[0].style.display = 'none';
        else $el[0].style.display = '';
        if (swiper.params.scrollbar.hide) $el[0].style.opacity = 0;
        if (swiper.params.watchOverflow && swiper.enabled) scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    }
    function getPointerPosition(e) {
        if (swiper.isHorizontal()) return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    }
    function setDragPosition(e) {
        const { scrollbar: scrollbar , rtlTranslate: rtl  } = swiper;
        const { $el: $el  } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
        if (rtl) positionRatio = 1 - positionRatio;
        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }
    function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar: scrollbar , $wrapperEl: $wrapperEl  } = swiper;
        const { $el: $el , $dragEl: $dragEl  } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);
        if (params.hide) $el.css('opacity', 1);
        if (swiper.params.cssMode) swiper.$wrapperEl.css('scroll-snap-type', 'none');
        emit('scrollbarDragStart', e);
    }
    function onDragMove(e) {
        const { scrollbar: scrollbar , $wrapperEl: $wrapperEl  } = swiper;
        const { $el: $el , $dragEl: $dragEl  } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
    }
    function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const { scrollbar: scrollbar , $wrapperEl: $wrapperEl  } = swiper;
        const { $el: $el  } = scrollbar;
        if (!isTouched) return;
        isTouched = false;
        if (swiper.params.cssMode) {
            swiper.$wrapperEl.css('scroll-snap-type', '');
            $wrapperEl.transition('');
        }
        if (params.hide) {
            clearTimeout(dragTimeout);
            dragTimeout = $hVkLy.nextTick(()=>{
                $el.css('opacity', 0);
                $el.transition(400);
            }, 1000);
        }
        emit('scrollbarDragEnd', e);
        if (params.snapOnRelease) swiper.slideToClosest();
    }
    function events(method) {
        const { scrollbar: scrollbar , touchEventsTouch: touchEventsTouch , touchEventsDesktop: touchEventsDesktop , params: params , support: support  } = swiper;
        const $el = scrollbar.$el;
        if (!$el) return;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
            passive: false,
            capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        if (!support.touch) {
            target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
            document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
            document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
            target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
            target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
            target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
    }
    function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('on');
    }
    function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('off');
    }
    function init() {
        const { scrollbar: scrollbar , $el: $swiperEl  } = swiper;
        swiper.params.scrollbar = $2uy4h.default(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
            el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = $brB5Z.default(params.el);
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) $el = $swiperEl.find(params.el);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
        if ($dragEl.length === 0) {
            $dragEl = $brB5Z.default(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
            $el.append($dragEl);
        }
        Object.assign(scrollbar, {
            $el: $el,
            el: $el[0],
            $dragEl: $dragEl,
            dragEl: $dragEl[0]
        });
        if (params.draggable) enableDraggable();
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    }
    function destroy() {
        disableDraggable();
    }
    on('init', ()=>{
        if (swiper.params.scrollbar.enabled === false) // eslint-disable-next-line
        disable();
        else {
            init();
            updateSize();
            setTranslate();
        }
    });
    on('update resize observerUpdate lock unlock', ()=>{
        updateSize();
    });
    on('setTranslate', ()=>{
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        setTransition(duration);
    });
    on('enable disable', ()=>{
        const { $el: $el  } = swiper.scrollbar;
        if ($el) $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
    });
    on('destroy', ()=>{
        destroy();
    });
    const enable = ()=>{
        swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.$el) swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        init();
        updateSize();
        setTranslate();
    };
    const disable = ()=>{
        swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        if (swiper.scrollbar.$el) swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        destroy();
    };
    Object.assign(swiper.scrollbar, {
        enable: enable,
        disable: disable,
        updateSize: updateSize,
        setTranslate: setTranslate,
        init: init,
        destroy: destroy
    });
}

});

parcelRequire.register("4ZWcI", function(module, exports) {

var $brB5Z = parcelRequire("brB5Z");
function $3a3a0209f25e5cc4$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        parallax: {
            enabled: false
        }
    });
    const setTransform = (el, progress)=>{
        const { rtl: rtl  } = swiper;
        const $el = $brB5Z.default(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');
        if (x || y) {
            x = x || '0';
            y = y || '0';
        } else if (swiper.isHorizontal()) {
            x = p;
            y = '0';
        } else {
            y = p;
            x = '0';
        }
        if (x.indexOf('%') >= 0) x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        else x = `${x * progress * rtlFactor}px`;
        if (y.indexOf('%') >= 0) y = `${parseInt(y, 10) * progress}%`;
        else y = `${y * progress}px`;
        if (typeof opacity !== 'undefined' && opacity !== null) {
            const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
            $el[0].style.opacity = currentOpacity;
        }
        if (typeof scale === 'undefined' || scale === null) $el.transform(`translate3d(${x}, ${y}, 0px)`);
        else {
            const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
            $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
    };
    const setTranslate = ()=>{
        const { $el: $el , slides: slides , progress: progress , snapGrid: snapGrid  } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
            setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex)=>{
            let slideProgress = slideEl.progress;
            if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
            slideProgress = Math.min(Math.max(slideProgress, -1), 1);
            $brB5Z.default(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((el)=>{
                setTransform(el, slideProgress);
            });
        });
    };
    const setTransition = function(duration) {
        if (duration === void 0) duration = swiper.params.speed;
        const { $el: $el  } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((parallaxEl)=>{
            const $parallaxEl = $brB5Z.default(parallaxEl);
            let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
            if (duration === 0) parallaxDuration = 0;
            $parallaxEl.transition(parallaxDuration);
        });
    };
    on('beforeInit', ()=>{
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
    });
    on('init', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTranslate', ()=>{
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
    });
    on('setTransition', (_swiper, duration)=>{
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
    });
}

});

parcelRequire.register("bgy79", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");

var $hVkLy = parcelRequire("hVkLy");
function $833ba6b809bb9057$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    const window = $bMYlU.getWindow();
    extendParams({
        zoom: {
            enabled: false,
            maxRatio: 3,
            minRatio: 1,
            toggle: true,
            containerClass: 'swiper-zoom-container',
            zoomedSlideClass: 'swiper-slide-zoomed'
        }
    });
    swiper.zoom = {
        enabled: false
    };
    let currentScale = 1;
    let isScaling = false;
    let gesturesEnabled;
    let fakeGestureTouched;
    let fakeGestureMoved;
    const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
    };
    const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {
        },
        touchesCurrent: {
        }
    };
    const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
    };
    let scale = 1;
    Object.defineProperty(swiper.zoom, 'scale', {
        get () {
            return scale;
        },
        set (value) {
            if (scale !== value) {
                const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
                const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
                emit('zoomChange', value, imageEl, slideEl);
            }
            scale = value;
        }
    });
    function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
    } // Events
    function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;
        if (!support.gestures) {
            if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) return;
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches(e);
        }
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
            gesture.$slideEl = $brB5Z.default(e.target).closest(`.${swiper.params.slideClass}`);
            if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
            gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
            if (gesture.$imageWrapEl.length === 0) {
                gesture.$imageEl = undefined;
                return;
            }
        }
        if (gesture.$imageEl) gesture.$imageEl.transition(0);
        isScaling = true;
    }
    function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) return;
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches(e);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
            if (e.type === 'gesturechange') onGestureStart(e);
            return;
        }
        if (support.gestures) zoom.scale = e.scale * currentScale;
        else zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        if (zoom.scale > gesture.maxRatio) zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        if (zoom.scale < params.minRatio) zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;
        if (!support.gestures) {
            if (!fakeGestureTouched || !fakeGestureMoved) return;
            if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) return;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
    }
    function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    }
    function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
        if (!image.isMoved) {
            image.width = gesture.$imageEl[0].offsetWidth;
            image.height = gesture.$imageEl[0].offsetHeight;
            image.startX = $hVkLy.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
            image.startY = $hVkLy.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
            gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
            gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
            gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
        if (!image.isMoved && !isScaling) {
            if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                image.isTouched = false;
                return;
            }
            if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                image.isTouched = false;
                return;
            }
        }
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
        if (image.currentX < image.minX) image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        if (image.currentX > image.maxX) image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        if (image.currentY < image.minY) image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        if (image.currentY > image.maxY) image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
         // Velocity
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (!image.isTouched || !image.isMoved) {
            image.isTouched = false;
            image.isMoved = false;
            return;
        }
        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
    }
    function onTransitionEnd() {
        const zoom = swiper.zoom;
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
            if (gesture.$imageEl) gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
            if (gesture.$imageWrapEl) gesture.$imageWrapEl.transform('translate3d(0,0,0)');
            zoom.scale = 1;
            currentScale = 1;
            gesture.$slideEl = undefined;
            gesture.$imageEl = undefined;
            gesture.$imageWrapEl = undefined;
        }
    }
    function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (e && e.target) gesture.$slideEl = $brB5Z.default(e.target).closest(`.${swiper.params.slideClass}`);
            if (!gesture.$slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
                else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = 'hidden';
            swiper.wrapperEl.style.touchAction = 'none';
        }
        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;
        if (typeof image.touchesStart.x === 'undefined' && e) {
            touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
            touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
            touchX = image.touchesStart.x;
            touchY = image.touchesStart.y;
        }
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        if (e) {
            slideWidth = gesture.$slideEl[0].offsetWidth;
            slideHeight = gesture.$slideEl[0].offsetHeight;
            offsetX = gesture.$slideEl.offset().left + window.scrollX;
            offsetY = gesture.$slideEl.offset().top + window.scrollY;
            diffX = offsetX + slideWidth / 2 - touchX;
            diffY = offsetY + slideHeight / 2 - touchY;
            imageWidth = gesture.$imageEl[0].offsetWidth;
            imageHeight = gesture.$imageEl[0].offsetHeight;
            scaledWidth = imageWidth * zoom.scale;
            scaledHeight = imageHeight * zoom.scale;
            translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            translateMaxX = -translateMinX;
            translateMaxY = -translateMinY;
            translateX = diffX * zoom.scale;
            translateY = diffY * zoom.scale;
            if (translateX < translateMinX) translateX = translateMinX;
            if (translateX > translateMaxX) translateX = translateMaxX;
            if (translateY < translateMinY) translateY = translateMinY;
            if (translateY > translateMaxY) translateY = translateMaxY;
        } else {
            translateX = 0;
            translateY = 0;
        }
        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
    }
    function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;
        if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            else gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
            gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }
        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;
        if (swiper.params.cssMode) {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.style.touchAction = '';
        }
        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
    } // Toggle Zoom
    function zoomToggle(e) {
        const zoom = swiper.zoom;
        if (zoom.scale && zoom.scale !== 1) // Zoom Out
        zoomOut();
        else // Zoom In
        zoomIn(e);
    }
    function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
            passive: false,
            capture: true
        } : true;
        return {
            passiveListener: passiveListener,
            activeListenerWithCapture: activeListenerWithCapture
        };
    }
    function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
    }
    function toggleGestures(method) {
        const { passiveListener: passiveListener  } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
    }
    function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
    }
    function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
    } // Attach/Detach Events
    function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const { passiveListener: passiveListener , activeListenerWithCapture: activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const { passiveListener: passiveListener , activeListenerWithCapture: activeListenerWithCapture  } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image
        if (support.gestures) {
            swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
            swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
            swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
            swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);
            if (swiper.touchEvents.cancel) swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
        } // Move image
        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
    }
    on('init', ()=>{
        if (swiper.params.zoom.enabled) enable();
    });
    on('destroy', ()=>{
        disable();
    });
    on('touchStart', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
    });
    on('touchEnd', (_s, e)=>{
        if (!swiper.zoom.enabled) return;
        onTouchEnd(e);
    });
    on('doubleTap', (_s, e)=>{
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) zoomToggle(e);
    });
    on('transitionEnd', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) onTransitionEnd();
    });
    on('slideChange', ()=>{
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) onTransitionEnd();
    });
    Object.assign(swiper.zoom, {
        enable: enable,
        disable: disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
    });
}

});

parcelRequire.register("3l042", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");
function $26e361f8fb3ec08a$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    extendParams({
        lazy: {
            checkInView: false,
            enabled: false,
            loadPrevNext: false,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: false,
            scrollingElement: '',
            elementClass: 'swiper-lazy',
            loadingClass: 'swiper-lazy-loading',
            loadedClass: 'swiper-lazy-loaded',
            preloaderClass: 'swiper-lazy-preloader'
        }
    });
    swiper.lazy = {
    };
    let scrollHandlerAttached = false;
    let initialImageLoaded = false;
    function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) loadInDuplicate = true;
        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) $images.push($slideEl[0]);
        if ($images.length === 0) return;
        $images.each((imageEl)=>{
            const $imageEl = $brB5Z.default(imageEl);
            $imageEl.addClass(params.loadingClass);
            const background = $imageEl.attr('data-background');
            const src = $imageEl.attr('data-src');
            const srcset = $imageEl.attr('data-srcset');
            const sizes = $imageEl.attr('data-sizes');
            const $pictureEl = $imageEl.parent('picture');
            swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, ()=>{
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
                if (background) {
                    $imageEl.css('background-image', `url("${background}")`);
                    $imageEl.removeAttr('data-background');
                } else {
                    if (srcset) {
                        $imageEl.attr('srcset', srcset);
                        $imageEl.removeAttr('data-srcset');
                    }
                    if (sizes) {
                        $imageEl.attr('sizes', sizes);
                        $imageEl.removeAttr('data-sizes');
                    }
                    if ($pictureEl.length) $pictureEl.children('source').each((sourceEl)=>{
                        const $source = $brB5Z.default(sourceEl);
                        if ($source.attr('data-srcset')) {
                            $source.attr('srcset', $source.attr('data-srcset'));
                            $source.removeAttr('data-srcset');
                        }
                    });
                    if (src) {
                        $imageEl.attr('src', src);
                        $imageEl.removeAttr('data-src');
                    }
                }
                $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                $slideEl.find(`.${params.preloaderClass}`).remove();
                if (swiper.params.loop && loadInDuplicate) {
                    const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                    if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                        const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                        loadInSlide(originalSlide.index(), false);
                    } else {
                        const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                        loadInSlide(duplicatedSlide.index(), false);
                    }
                }
                emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                if (swiper.params.autoHeight) swiper.updateAutoHeight();
            });
            emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
    }
    function load() {
        const { $wrapperEl: $wrapperEl , params: swiperParams , slides: slides , activeIndex: activeIndex  } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;
        if (slidesPerView === 'auto') slidesPerView = 0;
        function slideExist(index) {
            if (isVirtual) {
                if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) return true;
            } else if (slides[index]) return true;
            return false;
        }
        function slideIndex(slideEl) {
            if (isVirtual) return $brB5Z.default(slideEl).attr('data-swiper-slide-index');
            return $brB5Z.default(slideEl).index();
        }
        if (!initialImageLoaded) initialImageLoaded = true;
        if (swiper.params.watchSlidesProgress) $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((slideEl)=>{
            const index = isVirtual ? $brB5Z.default(slideEl).attr('data-swiper-slide-index') : $brB5Z.default(slideEl).index();
            loadInSlide(index);
        });
        else if (slidesPerView > 1) {
            for(let i = activeIndex; i < activeIndex + slidesPerView; i += 1)if (slideExist(i)) loadInSlide(i);
        } else loadInSlide(activeIndex);
        if (params.loadPrevNext) {
            if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
                const amount = params.loadPrevNextAmount;
                const spv = Math.ceil(slidesPerView);
                const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
                for(let i = activeIndex + spv; i < maxIndex; i += 1)if (slideExist(i)) loadInSlide(i);
                 // Prev Slides
                for(let i1 = minIndex; i1 < activeIndex; i1 += 1)if (slideExist(i1)) loadInSlide(i1);
            } else {
                const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
                if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
                const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
                if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
            }
        }
    }
    function checkInViewOnLoad() {
        const window = $bMYlU.getWindow();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? $brB5Z.default(swiper.params.lazy.scrollingElement) : $brB5Z.default(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const { rtlTranslate: rtl  } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [
            [
                swiperOffset.left,
                swiperOffset.top
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top
            ],
            [
                swiperOffset.left,
                swiperOffset.top + swiper.height
            ],
            [
                swiperOffset.left + swiper.width,
                swiperOffset.top + swiper.height
            ]
        ];
        for(let i = 0; i < swiperCoord.length; i += 1){
            const point = swiperCoord[i];
            if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
                if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                inView = true;
            }
        }
        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
            passive: true,
            capture: false
        } : false;
        if (inView) {
            load();
            $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
            scrollHandlerAttached = true;
            $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
    }
    on('beforeInit', ()=>{
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) swiper.params.preloadImages = false;
    });
    on('init', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('scroll', ()=>{
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) load();
    });
    on('scrollbarDragMove resize _freeModeNoMomentumRelease', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('transitionStart', ()=>{
        if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
                if (swiper.params.lazy.checkInView) checkInViewOnLoad();
                else load();
            }
        }
    });
    on('transitionEnd', ()=>{
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            if (swiper.params.lazy.checkInView) checkInViewOnLoad();
            else load();
        }
    });
    on('slideChange', ()=>{
        const { lazy: lazy , cssMode: cssMode , watchSlidesProgress: watchSlidesProgress , touchReleaseOnEdges: touchReleaseOnEdges , resistanceRatio: resistanceRatio  } = swiper.params;
        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) load();
    });
    on('destroy', ()=>{
        if (!swiper.$el) return;
        swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
    });
    Object.assign(swiper.lazy, {
        load: load,
        loadInSlide: loadInSlide
    });
}

});

parcelRequire.register("8lmSk", function(module, exports) {

var $hVkLy = parcelRequire("hVkLy");
function $6132076fad361453$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        controller: {
            control: undefined,
            inverse: false,
            by: 'slide' // or 'container'
        }
    });
    swiper.controller = {
        control: undefined
    };
    function LinearSpline(x, y) {
        const binarySearch = function search() {
            let maxIndex;
            let minIndex;
            let guess;
            return (array, val)=>{
                minIndex = -1;
                maxIndex = array.length;
                while(maxIndex - minIndex > 1){
                    guess = maxIndex + minIndex >> 1;
                    if (array[guess] <= val) minIndex = guess;
                    else maxIndex = guess;
                }
                return maxIndex;
            };
        }();
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
        let i1;
        let i3;
        this.interpolate = function interpolate(x2) {
            if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
            i3 = binarySearch(this.x, x2);
            i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
            // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
            return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
        return this;
    } // xxx: for now i will just save one spline function to to
    function getInterpolateFunction(c) {
        if (!swiper.controller.spline) swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
    }
    function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;
        function setControlledTranslate(c) {
            // this will create an Interpolate function based on the snapGrids
            // x is the Grid of the scrolled scroller and y will be the controlled scroller
            // it makes sense to create this only once and recall it for the interpolation
            // the function does a lot of value caching for performance
            const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
            if (swiper.params.controller.by === 'slide') {
                getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                // but it did not work out
                controlledTranslate = -swiper.controller.spline.interpolate(-translate);
            }
            if (!controlledTranslate || swiper.params.controller.by === 'container') {
                multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
            }
            if (swiper.params.controller.inverse) controlledTranslate = c.maxTranslate() - controlledTranslate;
            c.updateProgress(controlledTranslate);
            c.setTranslate(controlledTranslate, swiper);
            c.updateActiveIndex();
            c.updateSlidesClasses();
        }
        if (Array.isArray(controlled)) {
            for(let i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTranslate(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTranslate(controlled);
    }
    function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;
        function setControlledTransition(c) {
            c.setTransition(duration, swiper);
            if (duration !== 0) {
                c.transitionStart();
                if (c.params.autoHeight) $hVkLy.nextTick(()=>{
                    c.updateAutoHeight();
                });
                c.$wrapperEl.transitionEnd(()=>{
                    if (!controlled) return;
                    if (c.params.loop && swiper.params.controller.by === 'slide') c.loopFix();
                    c.transitionEnd();
                });
            }
        }
        if (Array.isArray(controlled)) {
            for(i = 0; i < controlled.length; i += 1)if (controlled[i] !== byController && controlled[i] instanceof Swiper) setControlledTransition(controlled[i]);
        } else if (controlled instanceof Swiper && byController !== controlled) setControlledTransition(controlled);
    }
    function removeSpline() {
        if (!swiper.controller.control) return;
        if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
        }
    }
    on('beforeInit', ()=>{
        swiper.controller.control = swiper.params.controller.control;
    });
    on('update', ()=>{
        removeSpline();
    });
    on('resize', ()=>{
        removeSpline();
    });
    on('observerUpdate', ()=>{
        removeSpline();
    });
    on('setTranslate', (_s, translate, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', (_s, duration, byController)=>{
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
        setTranslate: setTranslate,
        setTransition: setTransition
    });
}

});

parcelRequire.register("ag9Tg", function(module, exports) {

var $hC1bz = parcelRequire("hC1bz");

var $brB5Z = parcelRequire("brB5Z");
function $77831207f649ca8a$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        a11y: {
            enabled: true,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null
        }
    });
    let liveRegion = null;
    function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
    }
    function getRandomNumber(size) {
        if (size === void 0) size = 16;
        const randomChar = ()=>Math.round(16 * Math.random()).toString(16)
        ;
        return 'x'.repeat(size).replace(/x/g, randomChar);
    }
    function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
    }
    function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
    }
    function addElRole($el, role) {
        $el.attr('role', role);
    }
    function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
    }
    function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
    }
    function addElLabel($el, label) {
        $el.attr('aria-label', label);
    }
    function addElId($el, id) {
        $el.attr('id', id);
    }
    function addElLive($el, live) {
        $el.attr('aria-live', live);
    }
    function disableEl($el) {
        $el.attr('aria-disabled', true);
    }
    function enableEl($el) {
        $el.attr('aria-disabled', false);
    }
    function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = $brB5Z.default(e.target);
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
            if (!(swiper.isEnd && !swiper.params.loop)) swiper.slideNext();
            if (swiper.isEnd) notify(params.lastSlideMessage);
            else notify(params.nextSlideMessage);
        }
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
            if (!(swiper.isBeginning && !swiper.params.loop)) swiper.slidePrev();
            if (swiper.isBeginning) notify(params.firstSlideMessage);
            else notify(params.prevSlideMessage);
        }
        if (swiper.pagination && $targetEl.is($hC1bz.default(swiper.params.pagination.bulletClass))) $targetEl[0].click();
    }
    function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const { $nextEl: $nextEl , $prevEl: $prevEl  } = swiper.navigation;
        if ($prevEl && $prevEl.length > 0) {
            if (swiper.isBeginning) {
                disableEl($prevEl);
                makeElNotFocusable($prevEl);
            } else {
                enableEl($prevEl);
                makeElFocusable($prevEl);
            }
        }
        if ($nextEl && $nextEl.length > 0) {
            if (swiper.isEnd) {
                disableEl($nextEl);
                makeElNotFocusable($nextEl);
            } else {
                enableEl($nextEl);
                makeElFocusable($nextEl);
            }
        }
    }
    function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
    }
    function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
    }
    function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each((bulletEl)=>{
            const $bulletEl = $brB5Z.default(bulletEl);
            if (swiper.params.pagination.clickable) {
                makeElFocusable($bulletEl);
                if (!swiper.params.pagination.renderBullet) {
                    addElRole($bulletEl, 'button');
                    addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
                }
            }
            if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) $bulletEl.attr('aria-current', 'true');
            else $bulletEl.removeAttr('aria-current');
        });
    }
    const initNavEl = ($el, wrapperId, message)=>{
        makeElFocusable($el);
        if ($el[0].tagName !== 'BUTTON') {
            addElRole($el, 'button');
            $el.on('keydown', onEnterOrSpaceKey);
        }
        addElLabel($el, message);
        addElControls($el, wrapperId);
    };
    const handleFocus = (e)=>{
        const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
    };
    const initSlides = ()=>{
        const params = swiper.params.a11y;
        if (params.itemRoleDescriptionMessage) addElRoleDescription($brB5Z.default(swiper.slides), params.itemRoleDescriptionMessage);
        addElRole($brB5Z.default(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter((el)=>!el.classList.contains(swiper.params.slideDuplicateClass)
        ).length : swiper.slides.length;
        swiper.slides.each((slideEl, index)=>{
            const $slideEl = $brB5Z.default(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
        });
    };
    const init = ()=>{
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container
        const $containerEl = swiper.$el;
        if (params.containerRoleDescriptionMessage) addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        if (params.containerMessage) addElLabel($containerEl, params.containerMessage);
         // Wrapper
        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide
        initSlides(); // Navigation
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl && $nextEl.length) initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        if ($prevEl && $prevEl.length) initNavEl($prevEl, wrapperId, params.prevSlideMessage);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.on('keydown', $hC1bz.default(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.on('focus', handleFocus, true);
    };
    function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;
        if (swiper.navigation && swiper.navigation.$nextEl) $nextEl = swiper.navigation.$nextEl;
        if (swiper.navigation && swiper.navigation.$prevEl) $prevEl = swiper.navigation.$prevEl;
        if ($nextEl) $nextEl.off('keydown', onEnterOrSpaceKey);
        if ($prevEl) $prevEl.off('keydown', onEnterOrSpaceKey);
         // Pagination
        if (hasClickablePagination()) swiper.pagination.$el.off('keydown', $hC1bz.default(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
         // Tab focus
        swiper.$el.off('focus', handleFocus, true);
    }
    on('beforeInit', ()=>{
        liveRegion = $brB5Z.default(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    });
    on('afterInit', ()=>{
        if (!swiper.params.a11y.enabled) return;
        init();
    });
    on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', ()=>{
        if (!swiper.params.a11y.enabled) return;
        initSlides();
    });
    on('fromEdge toEdge afterInit lock unlock', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
    });
    on('paginationUpdate', ()=>{
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
    });
    on('destroy', ()=>{
        if (!swiper.params.a11y.enabled) return;
        destroy();
    });
}

});

parcelRequire.register("b02yM", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");
function $8021ae2c6cee2f3d$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        history: {
            enabled: false,
            root: '',
            replaceState: false,
            key: 'slides',
            keepQuery: false
        }
    });
    let initialized = false;
    let paths = {
    };
    const slugify = (text)=>{
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    };
    const getPathValues = (urlOverride)=>{
        const window = $bMYlU.getWindow();
        let location;
        if (urlOverride) location = new URL(urlOverride);
        else location = window.location;
        const pathArray = location.pathname.slice(1).split('/').filter((part)=>part !== ''
        );
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
            key: key,
            value: value
        };
    };
    const setHistory = (key, index)=>{
        const window = $bMYlU.getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;
        if (swiper.params.url) location = new URL(swiper.params.url);
        else location = window.location;
        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));
        if (swiper.params.history.root.length > 0) {
            let root = swiper.params.history.root;
            if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
            value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) value = `${key}/${value}`;
        if (swiper.params.history.keepQuery) value += location.search;
        const currentState = window.history.state;
        if (currentState && currentState.value === value) return;
        if (swiper.params.history.replaceState) window.history.replaceState({
            value: value
        }, null, value);
        else window.history.pushState({
            value: value
        }, null, value);
    };
    const scrollToSlide = (speed, value, runCallbacks)=>{
        if (value) for(let i = 0, length = swiper.slides.length; i < length; i += 1){
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                const index = slide.index();
                swiper.slideTo(index, speed, runCallbacks);
            }
        }
        else swiper.slideTo(0, speed, runCallbacks);
    };
    const setHistoryPopState = ()=>{
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
    };
    const init = ()=>{
        const window = $bMYlU.getWindow();
        if (!swiper.params.history) return;
        if (!window.history || !window.history.pushState) {
            swiper.params.history.enabled = false;
            swiper.params.hashNavigation.enabled = true;
            return;
        }
        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
        if (!swiper.params.history.replaceState) window.addEventListener('popstate', setHistoryPopState);
    };
    const destroy = ()=>{
        const window = $bMYlU.getWindow();
        if (!swiper.params.history.replaceState) window.removeEventListener('popstate', setHistoryPopState);
    };
    on('init', ()=>{
        if (swiper.params.history.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.history.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHistory(swiper.params.history.key, swiper.activeIndex);
    });
}

});

parcelRequire.register("lc6K7", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $brB5Z = parcelRequire("brB5Z");
function $f6dff2f57bcb4732$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , emit: emit , on: on  } = _ref;
    let initialized = false;
    const document = $bMYlU.getDocument();
    const window = $bMYlU.getWindow();
    extendParams({
        hashNavigation: {
            enabled: false,
            replaceState: false,
            watchState: false
        }
    });
    const onHashChange = ()=>{
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
        if (newHash !== activeSlideHash) {
            const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
            if (typeof newIndex === 'undefined') return;
            swiper.slideTo(newIndex);
        }
    };
    const setHash = ()=>{
        if (!initialized || !swiper.params.hashNavigation.enabled) return;
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
            window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
            emit('hashSet');
        } else {
            const slide = swiper.slides.eq(swiper.activeIndex);
            const hash = slide.attr('data-hash') || slide.attr('data-history');
            document.location.hash = hash || '';
            emit('hashSet');
        }
    };
    const init = ()=>{
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');
        if (hash) {
            const speed = 0;
            for(let i = 0, length = swiper.slides.length; i < length; i += 1){
                const slide = swiper.slides.eq(i);
                const slideHash = slide.attr('data-hash') || slide.attr('data-history');
                if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                    const index = slide.index();
                    swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                }
            }
        }
        if (swiper.params.hashNavigation.watchState) $brB5Z.default(window).on('hashchange', onHashChange);
    };
    const destroy = ()=>{
        if (swiper.params.hashNavigation.watchState) $brB5Z.default(window).off('hashchange', onHashChange);
    };
    on('init', ()=>{
        if (swiper.params.hashNavigation.enabled) init();
    });
    on('destroy', ()=>{
        if (swiper.params.hashNavigation.enabled) destroy();
    });
    on('transitionEnd _freeModeNoMomentumRelease', ()=>{
        if (initialized) setHash();
    });
    on('slideChange', ()=>{
        if (initialized && swiper.params.cssMode) setHash();
    });
}

});

parcelRequire.register("ekC8M", function(module, exports) {

var $bMYlU = parcelRequire("bMYlU");

var $hVkLy = parcelRequire("hVkLy");
function $a6f084df3f37c7a0$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on , emit: emit  } = _ref;
    let timeout;
    swiper.autoplay = {
        running: false,
        paused: false
    };
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3000,
            waitForTransition: true,
            disableOnInteraction: true,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;
        if ($activeSlideEl.attr('data-swiper-autoplay')) delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        clearTimeout(timeout);
        timeout = $hVkLy.nextTick(()=>{
            let autoplayResult;
            if (swiper.params.autoplay.reverseDirection) {
                if (swiper.params.loop) {
                    swiper.loopFix();
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.isBeginning) {
                    autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
                    emit('autoplay');
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                    emit('autoplay');
                } else stop();
            } else if (swiper.params.loop) {
                swiper.loopFix();
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.isEnd) {
                autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
                emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
                emit('autoplay');
            } else stop();
            if (swiper.params.cssMode && swiper.autoplay.running) run();
            else if (autoplayResult === false) run();
        }, delay);
    }
    function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
    }
    function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;
        if (timeout) {
            clearTimeout(timeout);
            timeout = undefined;
        }
        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
    }
    function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
            swiper.autoplay.paused = false;
            run();
        } else [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
    }
    function onVisibilityChange() {
        const document = $bMYlU.getDocument();
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) pause();
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
            run();
            swiper.autoplay.paused = false;
        }
    }
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) stop();
        else run();
    }
    function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) stop();
        else {
            emit('autoplayPause');
            pause();
        }
        [
            'transitionend',
            'webkitTransitionEnd'
        ].forEach((event)=>{
            swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
    }
    function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) return;
        swiper.autoplay.paused = false;
        emit('autoplayResume');
        run();
    }
    function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
            swiper.$el.on('mouseenter', onMouseEnter);
            swiper.$el.on('mouseleave', onMouseLeave);
        }
    }
    function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
    }
    on('init', ()=>{
        if (swiper.params.autoplay.enabled) {
            start();
            const document = $bMYlU.getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
            attachMouseEvents();
        }
    });
    on('beforeTransitionStart', (_s, speed, internal)=>{
        if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) swiper.autoplay.pause(speed);
            else stop();
        }
    });
    on('sliderFirstMove', ()=>{
        if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) stop();
            else pause();
        }
    });
    on('touchEnd', ()=>{
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) run();
    });
    on('destroy', ()=>{
        detachMouseEvents();
        if (swiper.autoplay.running) stop();
        const document = $bMYlU.getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
        pause: pause,
        run: run,
        start: start,
        stop: stop
    });
}

});

parcelRequire.register("Xz5Fs", function(module, exports) {

var $hVkLy = parcelRequire("hVkLy");

var $brB5Z = parcelRequire("brB5Z");
function $0b30bb07205459de$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        thumbs: {
            swiper: null,
            multipleActiveThumbs: true,
            autoScrollOffset: 0,
            slideThumbActiveClass: 'swiper-slide-thumb-active',
            thumbsContainerClass: 'swiper-thumbs'
        }
    });
    let initialized = false;
    let swiperCreated = false;
    swiper.thumbs = {
        swiper: null
    };
    function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $brB5Z.default(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;
        if (thumbsSwiper.params.loop) slideToIndex = parseInt($brB5Z.default(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        else slideToIndex = clickedIndex;
        if (swiper.params.loop) {
            let currentIndex = swiper.activeIndex;
            if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
                swiper.loopFix(); // eslint-disable-next-line
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                currentIndex = swiper.activeIndex;
            }
            const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
            if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
            else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
            else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
            else slideToIndex = prevIndex;
        }
        swiper.slideTo(slideToIndex);
    }
    function init() {
        const { thumbs: thumbsParams  } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;
        if (thumbsParams.swiper instanceof SwiperClass) {
            swiper.thumbs.swiper = thumbsParams.swiper;
            Object.assign(swiper.thumbs.swiper.originalParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            Object.assign(swiper.thumbs.swiper.params, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
        } else if ($hVkLy.isObject(thumbsParams.swiper)) {
            const thumbsSwiperParams = Object.assign({
            }, thumbsParams.swiper);
            Object.assign(thumbsSwiperParams, {
                watchSlidesProgress: true,
                slideToClickedSlide: false
            });
            swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
            swiperCreated = true;
        }
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
    }
    function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
            let currentThumbsIndex = thumbsSwiper.activeIndex;
            let newThumbsIndex;
            let direction;
            if (thumbsSwiper.params.loop) {
                if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
                    thumbsSwiper.loopFix(); // eslint-disable-next-line
                    thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
                    currentThumbsIndex = thumbsSwiper.activeIndex;
                } // Find actual thumbs index to slide to
                const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
                if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
                else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
                else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
                else newThumbsIndex = prevThumbsIndex;
                direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
            } else {
                newThumbsIndex = swiper.realIndex;
                direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
            }
            if (useOffset) newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
            if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                if (thumbsSwiper.params.centeredSlides) {
                    if (newThumbsIndex > currentThumbsIndex) newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                    else newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                } else newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup;
                thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
            }
        } // Activate thumbs
        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) thumbsToActivate = swiper.params.slidesPerView;
        if (!swiper.params.thumbs.multipleActiveThumbs) thumbsToActivate = 1;
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) for(let i = 0; i < thumbsToActivate; i += 1)thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
        else for(let i1 = 0; i1 < thumbsToActivate; i1 += 1)thumbsSwiper.slides.eq(swiper.realIndex + i1).addClass(thumbActiveClass);
    }
    on('beforeInit', ()=>{
        const { thumbs: thumbs  } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
    });
    on('slideChange update resize observerUpdate', ()=>{
        update();
    });
    on('setTransition', (_s, duration)=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
    });
    on('beforeDestroy', ()=>{
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        if (swiperCreated) thumbsSwiper.destroy();
    });
    Object.assign(swiper.thumbs, {
        init: init,
        update: update
    });
}

});

parcelRequire.register("aXtn0", function(module, exports) {

var $hVkLy = parcelRequire("hVkLy");
function $7fa6325a7c06673e$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , emit: emit , once: once  } = _ref;
    extendParams({
        freeMode: {
            enabled: false,
            momentum: true,
            momentumRatio: 1,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 1,
            sticky: false,
            minimumVelocity: 0.02
        }
    });
    function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
            currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
    }
    function onTouchMove() {
        const { touchEventsData: data , touches: touches  } = swiper; // Velocity
        if (data.velocities.length === 0) data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
        });
        data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
            time: $hVkLy.now()
        });
    }
    function onTouchEnd(_ref2) {
        let { currentPos: currentPos  } = _ref2;
        const { params: params , $wrapperEl: $wrapperEl , rtlTranslate: rtl , snapGrid: snapGrid , touchEventsData: data  } = swiper; // Time diff
        const touchEndTime = $hVkLy.now();
        const timeDiff = touchEndTime - data.touchStartTime;
        if (currentPos < -swiper.minTranslate()) {
            swiper.slideTo(swiper.activeIndex);
            return;
        }
        if (currentPos > -swiper.maxTranslate()) {
            if (swiper.slides.length < snapGrid.length) swiper.slideTo(snapGrid.length - 1);
            else swiper.slideTo(swiper.slides.length - 1);
            return;
        }
        if (params.freeMode.momentum) {
            if (data.velocities.length > 1) {
                const lastMoveEvent = data.velocities.pop();
                const velocityEvent = data.velocities.pop();
                const distance = lastMoveEvent.position - velocityEvent.position;
                const time = lastMoveEvent.time - velocityEvent.time;
                swiper.velocity = distance / time;
                swiper.velocity /= 2;
                if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) swiper.velocity = 0;
                 // this implies that the user stopped moving a finger then released.
                // There would be no events with distance zero, so the last event is stale.
                if (time > 150 || $hVkLy.now() - lastMoveEvent.time > 300) swiper.velocity = 0;
            } else swiper.velocity = 0;
            swiper.velocity *= params.freeMode.momentumVelocityRatio;
            data.velocities.length = 0;
            let momentumDuration = 1000 * params.freeMode.momentumRatio;
            const momentumDistance = swiper.velocity * momentumDuration;
            let newPosition = swiper.translate + momentumDistance;
            if (rtl) newPosition = -newPosition;
            let doBounce = false;
            let afterBouncePosition;
            const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
            let needsLoopFix;
            if (newPosition < swiper.maxTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition + swiper.maxTranslate() < -bounceAmount) newPosition = swiper.maxTranslate() - bounceAmount;
                    afterBouncePosition = swiper.maxTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.maxTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (newPosition > swiper.minTranslate()) {
                if (params.freeMode.momentumBounce) {
                    if (newPosition - swiper.minTranslate() > bounceAmount) newPosition = swiper.minTranslate() + bounceAmount;
                    afterBouncePosition = swiper.minTranslate();
                    doBounce = true;
                    data.allowMomentumBounce = true;
                } else newPosition = swiper.minTranslate();
                if (params.loop && params.centeredSlides) needsLoopFix = true;
            } else if (params.freeMode.sticky) {
                let nextSlide;
                for(let j = 0; j < snapGrid.length; j += 1)if (snapGrid[j] > -newPosition) {
                    nextSlide = j;
                    break;
                }
                if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') newPosition = snapGrid[nextSlide];
                else newPosition = snapGrid[nextSlide - 1];
                newPosition = -newPosition;
            }
            if (needsLoopFix) once('transitionEnd', ()=>{
                swiper.loopFix();
            });
             // Fix duration
            if (swiper.velocity !== 0) {
                if (rtl) momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                else momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                if (params.freeMode.sticky) {
                    // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                    // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                    // It's easy to see this when simulating touch with mouse events. To fix this,
                    // limit single-slide swipes to the default slide duration. This also has the
                    // nice side effect of matching slide speed if the user stopped moving before
                    // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                    // For faster swipes, also apply limits (albeit higher ones).
                    const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                    const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                    if (moveDistance < currentSlideSize) momentumDuration = params.speed;
                    else if (moveDistance < 2 * currentSlideSize) momentumDuration = params.speed * 1.5;
                    else momentumDuration = params.speed * 2.5;
                }
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            }
            if (params.freeMode.momentumBounce && doBounce) {
                swiper.updateProgress(afterBouncePosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                swiper.animating = true;
                $wrapperEl.transitionEnd(()=>{
                    if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                    emit('momentumBounce');
                    swiper.setTransition(params.speed);
                    setTimeout(()=>{
                        swiper.setTranslate(afterBouncePosition);
                        $wrapperEl.transitionEnd(()=>{
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }, 0);
                });
            } else if (swiper.velocity) {
                emit('_freeModeNoMomentumRelease');
                swiper.updateProgress(newPosition);
                swiper.setTransition(momentumDuration);
                swiper.setTranslate(newPosition);
                swiper.transitionStart(true, swiper.swipeDirection);
                if (!swiper.animating) {
                    swiper.animating = true;
                    $wrapperEl.transitionEnd(()=>{
                        if (!swiper || swiper.destroyed) return;
                        swiper.transitionEnd();
                    });
                }
            } else swiper.updateProgress(newPosition);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
        } else if (params.freeMode) emit('_freeModeNoMomentumRelease');
        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
    }
    Object.assign(swiper, {
        freeMode: {
            onTouchStart: onTouchStart,
            onTouchMove: onTouchMove,
            onTouchEnd: onTouchEnd
        }
    });
}

});

parcelRequire.register("vRkFc", function(module, exports) {
function $05fc440bb7e8be8f$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams  } = _ref;
    extendParams({
        grid: {
            rows: 1,
            fill: 'column'
        }
    });
    let slidesNumberEvenToRows;
    let slidesPerRow;
    let numFullColumns;
    const initSlides = (slidesLength)=>{
        const { slidesPerView: slidesPerView  } = swiper.params;
        const { rows: rows , fill: fill  } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);
        if (Math.floor(slidesLength / rows) === slidesLength / rows) slidesNumberEvenToRows = slidesLength;
        else slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        if (slidesPerView !== 'auto' && fill === 'row') slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
    };
    const updateSlide = (i, slide, slidesLength, getDirectionLabel)=>{
        const { slidesPerGroup: slidesPerGroup , spaceBetween: spaceBetween  } = swiper.params;
        const { rows: rows , fill: fill  } = swiper.params.grid; // Set slides order
        let newSlideOrderIndex;
        let column;
        let row;
        if (fill === 'row' && slidesPerGroup > 1) {
            const groupIndex = Math.floor(i / (slidesPerGroup * rows));
            const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
            const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
            slide.css({
                '-webkit-order': newSlideOrderIndex,
                order: newSlideOrderIndex
            });
        } else if (fill === 'column') {
            column = Math.floor(i / rows);
            row = i - column * rows;
            if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                row += 1;
                if (row >= rows) {
                    row = 0;
                    column += 1;
                }
            }
        } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
        }
        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
    };
    const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel)=>{
        const { spaceBetween: spaceBetween , centeredSlides: centeredSlides , roundLengths: roundLengths  } = swiper.params;
        const { rows: rows  } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
            [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });
        if (centeredSlides) {
            snapGrid.splice(0, snapGrid.length);
            const newSlidesGrid = [];
            for(let i = 0; i < snapGrid.length; i += 1){
                let slidesGridItem = snapGrid[i];
                if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
            }
            snapGrid.push(...newSlidesGrid);
        }
    };
    swiper.grid = {
        initSlides: initSlides,
        updateSlide: updateSlide,
        updateWrapperSize: updateWrapperSize
    };
}

});

parcelRequire.register("2yK9T", function(module, exports) {

var $chL5P = parcelRequire("chL5P");

var $k31Li = parcelRequire("k31Li");

var $1Reuv = parcelRequire("1Reuv");

var $kR6Dq = parcelRequire("kR6Dq");

var $a6SjZ = parcelRequire("a6SjZ");
function $1dd28fe5005fadbb$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper  } = _ref;
    Object.assign(swiper, {
        appendSlide: $chL5P.default.bind(swiper),
        prependSlide: $k31Li.default.bind(swiper),
        addSlide: $1Reuv.default.bind(swiper),
        removeSlide: $kR6Dq.default.bind(swiper),
        removeAllSlides: $a6SjZ.default.bind(swiper)
    });
}

});
parcelRequire.register("chL5P", function(module, exports) {

$parcel$export(module.exports, "default", () => $8f1b9a3cc1348845$export$2e2bcd8739ae039);
function $8f1b9a3cc1348845$export$2e2bcd8739ae039(slides) {
    const swiper = this;
    const { $wrapperEl: $wrapperEl , params: params  } = swiper;
    if (params.loop) swiper.loopDestroy();
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
    } else $wrapperEl.append(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
}

});

parcelRequire.register("k31Li", function(module, exports) {

$parcel$export(module.exports, "default", () => $e98574505ce24b83$export$2e2bcd8739ae039);
function $e98574505ce24b83$export$2e2bcd8739ae039(slides) {
    const swiper = this;
    const { params: params , $wrapperEl: $wrapperEl , activeIndex: activeIndex  } = swiper;
    if (params.loop) swiper.loopDestroy();
    let newActiveIndex = activeIndex + 1;
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.prepend(slides[i]);
        newActiveIndex = activeIndex + slides.length;
    } else $wrapperEl.prepend(slides);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    swiper.slideTo(newActiveIndex, 0, false);
}

});

parcelRequire.register("1Reuv", function(module, exports) {

$parcel$export(module.exports, "default", () => $15a5fb48a6badf9e$export$2e2bcd8739ae039);
function $15a5fb48a6badf9e$export$2e2bcd8739ae039(index, slides) {
    const swiper = this;
    const { $wrapperEl: $wrapperEl , params: params , activeIndex: activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    const baseLength = swiper.slides.length;
    if (index <= 0) {
        swiper.prependSlide(slides);
        return;
    }
    if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
    }
    let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    const slidesBuffer = [];
    for(let i = baseLength - 1; i >= index; i -= 1){
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
    }
    if (typeof slides === 'object' && 'length' in slides) {
        for(let i = 0; i < slides.length; i += 1)if (slides[i]) $wrapperEl.append(slides[i]);
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else $wrapperEl.append(slides);
    for(let i1 = 0; i1 < slidesBuffer.length; i1 += 1)$wrapperEl.append(slidesBuffer[i1]);
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

});

parcelRequire.register("kR6Dq", function(module, exports) {

$parcel$export(module.exports, "default", () => $f2ede76da9a166cd$export$2e2bcd8739ae039);
function $f2ede76da9a166cd$export$2e2bcd8739ae039(slidesIndexes) {
    const swiper = this;
    const { params: params , $wrapperEl: $wrapperEl , activeIndex: activeIndex  } = swiper;
    let activeIndexBuffer = activeIndex;
    if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
    }
    let newActiveIndex = activeIndexBuffer;
    let indexToRemove;
    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for(let i = 0; i < slidesIndexes.length; i += 1){
            indexToRemove = slidesIndexes[i];
            if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
        newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
    }
    if (params.loop) swiper.loopCreate();
    if (!params.observer) swiper.update();
    if (params.loop) swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    else swiper.slideTo(newActiveIndex, 0, false);
}

});

parcelRequire.register("a6SjZ", function(module, exports) {

$parcel$export(module.exports, "default", () => $75c49a0be67c666a$export$2e2bcd8739ae039);
function $75c49a0be67c666a$export$2e2bcd8739ae039() {
    const swiper = this;
    const slidesIndexes = [];
    for(let i = 0; i < swiper.slides.length; i += 1)slidesIndexes.push(i);
    swiper.removeSlide(slidesIndexes);
}

});


parcelRequire.register("274Ut", function(module, exports) {

var $8wrrq = parcelRequire("8wrrq");

var $dmyXw = parcelRequire("dmyXw");

var $aPFWC = parcelRequire("aPFWC");
function $18a00b386858db7e$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        fadeEffect: {
            crossFade: false,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { slides: slides  } = swiper;
        const params = swiper.params.fadeEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = swiper.slides.eq(i);
            const offset = $slideEl[0].swiperSlideOffset;
            let tx = -offset;
            if (!swiper.params.virtualTranslate) tx -= swiper.translate;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
            }
            const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
            const $targetEl = $dmyXw.default(params, $slideEl);
            $targetEl.css({
                opacity: slideOpacity
            }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl: transformEl  } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        $aPFWC.default({
            swiper: swiper,
            duration: duration,
            transformEl: transformEl,
            allSlides: true
        });
    };
    $8wrrq.default({
        effect: 'fade',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

});
parcelRequire.register("8wrrq", function(module, exports) {

$parcel$export(module.exports, "default", () => $634699268de2eec3$export$2e2bcd8739ae039);
function $634699268de2eec3$export$2e2bcd8739ae039(params) {
    const { effect: effect , swiper: swiper , on: on , setTranslate: setTranslate , setTransition: setTransition , overwriteParams: overwriteParams , perspective: perspective , recreateShadows: recreateShadows , getEffectParams: getEffectParams  } = params;
    on('beforeInit', ()=>{
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
        if (perspective && perspective()) swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        const overwriteParamsResult = overwriteParams ? overwriteParams() : {
        };
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on('setTranslate', ()=>{
        if (swiper.params.effect !== effect) return;
        setTranslate();
    });
    on('setTransition', (_s, duration)=>{
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
    });
    on('transitionEnd', ()=>{
        if (swiper.params.effect !== effect) return;
        if (recreateShadows) {
            if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows
            swiper.slides.each((slideEl)=>{
                const $slideEl = swiper.$(slideEl);
                $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
            }); // create new one
            recreateShadows();
        }
    });
    let requireUpdateOnVirtual;
    on('virtualUpdate', ()=>{
        if (swiper.params.effect !== effect) return;
        if (!swiper.slides.length) requireUpdateOnVirtual = true;
        requestAnimationFrame(()=>{
            if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                setTranslate();
                requireUpdateOnVirtual = false;
            }
        });
    });
}

});

parcelRequire.register("dmyXw", function(module, exports) {

$parcel$export(module.exports, "default", () => $9ba87291cda0ef05$export$2e2bcd8739ae039);
function $9ba87291cda0ef05$export$2e2bcd8739ae039(effectParams, $slideEl) {
    if (effectParams.transformEl) return $slideEl.find(effectParams.transformEl).css({
        'backface-visibility': 'hidden',
        '-webkit-backface-visibility': 'hidden'
    });
    return $slideEl;
}

});

parcelRequire.register("aPFWC", function(module, exports) {

$parcel$export(module.exports, "default", () => $7e2f34165c77d403$export$2e2bcd8739ae039);
function $7e2f34165c77d403$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , duration: duration , transformEl: transformEl , allSlides: allSlides  } = _ref;
    const { slides: slides , activeIndex: activeIndex , $wrapperEl: $wrapperEl  } = swiper;
    if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;
        if (allSlides) $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        else $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        $transitionEndTarget.transitionEnd(()=>{
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            const triggerEvents = [
                'webkitTransitionEnd',
                'transitionend'
            ];
            for(let i = 0; i < triggerEvents.length; i += 1)$wrapperEl.trigger(triggerEvents[i]);
        });
    }
}

});


parcelRequire.register("bFGtw", function(module, exports) {

var $brB5Z = parcelRequire("brB5Z");

var $8wrrq = parcelRequire("8wrrq");
function $87f478b734bce432$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 20,
            shadowScale: 0.94
        }
    });
    const createSlideShadows = ($slideEl, progress, isHorizontal)=>{
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
            shadowBefore = $brB5Z.default(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
            shadowAfter = $brB5Z.default(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.each((slideEl)=>{
            const progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows($brB5Z.default(slideEl), progress, isHorizontal);
        });
    };
    const setTranslate = ()=>{
        const { $el: $el , $wrapperEl: $wrapperEl , slides: slides , width: swiperWidth , height: swiperHeight , rtlTranslate: rtl , size: swiperSize , browser: browser  } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;
        if (params.shadow) {
            if (isHorizontal) {
                $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = $brB5Z.default('<div class="swiper-cube-shadow"></div>');
                    $wrapperEl.append($cubeShadowEl);
                }
                $cubeShadowEl.css({
                    height: `${swiperWidth}px`
                });
            } else {
                $cubeShadowEl = $el.find('.swiper-cube-shadow');
                if ($cubeShadowEl.length === 0) {
                    $cubeShadowEl = $brB5Z.default('<div class="swiper-cube-shadow"></div>');
                    $el.append($cubeShadowEl);
                }
            }
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let slideIndex = i;
            if (isVirtual) slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
            let slideAngle = slideIndex * 90;
            let round = Math.floor(slideAngle / 360);
            if (rtl) {
                slideAngle = -slideAngle;
                round = Math.floor(-slideAngle / 360);
            }
            const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            let tx = 0;
            let ty = 0;
            let tz = 0;
            if (slideIndex % 4 === 0) {
                tx = -round * 4 * swiperSize;
                tz = 0;
            } else if ((slideIndex - 1) % 4 === 0) {
                tx = 0;
                tz = -round * 4 * swiperSize;
            } else if ((slideIndex - 2) % 4 === 0) {
                tx = swiperSize + round * 4 * swiperSize;
                tz = swiperSize;
            } else if ((slideIndex - 3) % 4 === 0) {
                tx = -swiperSize;
                tz = 3 * swiperSize + swiperSize * 4 * round;
            }
            if (rtl) tx = -tx;
            if (!isHorizontal) {
                ty = tx;
                tx = 0;
            }
            const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
            if (progress <= 1 && progress > -1) {
                wrapperRotate = slideIndex * 90 + progress * 90;
                if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
            }
            $slideEl.transform(transform);
            if (params.slideShadows) createSlideShadows($slideEl, progress, isHorizontal);
        }
        $wrapperEl.css({
            '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
            'transform-origin': `50% 50% -${swiperSize / 2}px`
        });
        if (params.shadow) {
            if (isHorizontal) $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
            else {
                const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                const scale1 = params.shadowScale;
                const scale2 = params.shadowScale / multiplier;
                const offset = params.shadowOffset;
                $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
            }
        }
        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
        $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
    };
    const setTransition = (duration)=>{
        const { $el: $el , slides: slides  } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) $el.find('.swiper-cube-shadow').transition(duration);
    };
    $8wrrq.default({
        effect: 'cube',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        recreateShadows: recreateShadows,
        getEffectParams: ()=>swiper.params.cubeEffect
        ,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
    });
}

});

parcelRequire.register("4wG0m", function(module, exports) {

var $brB5Z = parcelRequire("brB5Z");

var $36RFV = parcelRequire("36RFV");

var $8wrrq = parcelRequire("8wrrq");

var $dmyXw = parcelRequire("dmyXw");

var $aPFWC = parcelRequire("aPFWC");
function $34babbd8673f8719$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
            transformEl: null
        }
    });
    const createSlideShadows = ($slideEl, progress, params)=>{
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) shadowBefore = $36RFV.default(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
        if (shadowAfter.length === 0) shadowAfter = $36RFV.default(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
    };
    const recreateShadows = ()=>{
        // Set shadows
        const params = swiper.params.flipEffect;
        swiper.slides.each((slideEl)=>{
            const $slideEl = $brB5Z.default(slideEl);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min(slideEl.progress, 1), -1);
            createSlideShadows($slideEl, progress, params);
        });
    };
    const setTranslate = ()=>{
        const { slides: slides , rtlTranslate: rtl  } = swiper;
        const params = swiper.params.flipEffect;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            let progress = $slideEl[0].progress;
            if (swiper.params.flipEffect.limitRotation) progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
            const offset = $slideEl[0].swiperSlideOffset;
            const rotate = -180 * progress;
            let rotateY = rotate;
            let rotateX = 0;
            let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let ty = 0;
            if (!swiper.isHorizontal()) {
                ty = tx;
                tx = 0;
                rotateX = -rotateY;
                rotateY = 0;
            } else if (rtl) rotateY = -rotateY;
            $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
            if (params.slideShadows) createSlideShadows($slideEl, progress, params);
            const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            const $targetEl = $dmyXw.default(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl: transformEl  } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        $aPFWC.default({
            swiper: swiper,
            duration: duration,
            transformEl: transformEl
        });
    };
    $8wrrq.default({
        effect: 'flip',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        recreateShadows: recreateShadows,
        getEffectParams: ()=>swiper.params.flipEffect
        ,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

});
parcelRequire.register("36RFV", function(module, exports) {

$parcel$export(module.exports, "default", () => $243b916eab19d937$export$2e2bcd8739ae039);

var $brB5Z = parcelRequire("brB5Z");
function $243b916eab19d937$export$2e2bcd8739ae039(params, $slideEl, side) {
    const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
    const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
    let $shadowEl = $shadowContainer.children(`.${shadowClass}`);
    if (!$shadowEl.length) {
        $shadowEl = $brB5Z.default(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
    }
    return $shadowEl;
}

});


parcelRequire.register("g61En", function(module, exports) {

var $36RFV = parcelRequire("36RFV");

var $8wrrq = parcelRequire("8wrrq");

var $dmyXw = parcelRequire("dmyXw");
function $bb7e7c93f5da4fc2$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: true,
            transformEl: null
        }
    });
    const setTranslate = ()=>{
        const { width: swiperWidth , height: swiperHeight , slides: slides , slidesSizesGrid: slidesSizesGrid  } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center
        for(let i = 0, length = slides.length; i < length; i += 1){
            const $slideEl = slides.eq(i);
            const slideSize = slidesSizesGrid[i];
            const slideOffset = $slideEl[0].swiperSlideOffset;
            const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
            const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
            let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
            let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
            let translateZ = -translate * Math.abs(offsetMultiplier);
            let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
            if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) stretch = parseFloat(params.stretch) / 100 * slideSize;
            let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
            let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
            let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
            if (Math.abs(translateX) < 0.001) translateX = 0;
            if (Math.abs(translateY) < 0.001) translateY = 0;
            if (Math.abs(translateZ) < 0.001) translateZ = 0;
            if (Math.abs(rotateY) < 0.001) rotateY = 0;
            if (Math.abs(rotateX) < 0.001) rotateX = 0;
            if (Math.abs(scale) < 0.001) scale = 0;
            const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
            const $targetEl = $dmyXw.default(params, $slideEl);
            $targetEl.transform(slideTransform);
            $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
            if (params.slideShadows) {
                // Set shadows
                let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                if ($shadowBeforeEl.length === 0) $shadowBeforeEl = $36RFV.default(params, $slideEl, isHorizontal ? 'left' : 'top');
                if ($shadowAfterEl.length === 0) $shadowAfterEl = $36RFV.default(params, $slideEl, isHorizontal ? 'right' : 'bottom');
                if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
        }
    };
    const setTransition = (duration)=>{
        const { transformEl: transformEl  } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    };
    $8wrrq.default({
        effect: 'coverflow',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true
            })
    });
}

});

parcelRequire.register("kaGF8", function(module, exports) {

var $36RFV = parcelRequire("36RFV");

var $8wrrq = parcelRequire("8wrrq");

var $dmyXw = parcelRequire("dmyXw");

var $aPFWC = parcelRequire("aPFWC");
function $eaf5d5b1e301105c$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        creativeEffect: {
            transformEl: null,
            limitProgress: 1,
            shadowPerProgress: false,
            progressMultiplier: 1,
            perspective: true,
            prev: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            },
            next: {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                opacity: 1,
                scale: 1
            }
        }
    });
    const getTranslateValue = (value)=>{
        if (typeof value === 'string') return value;
        return `${value}px`;
    };
    const setTranslate = ()=>{
        const { slides: slides , $wrapperEl: $wrapperEl , slidesSizesGrid: slidesSizesGrid  } = swiper;
        const params = swiper.params.creativeEffect;
        const { progressMultiplier: multiplier  } = params;
        const isCenteredSlides = swiper.params.centeredSlides;
        if (isCenteredSlides) {
            const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
            $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
            let originalProgress = progress;
            if (!isCenteredSlides) originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
            const offset = $slideEl[0].swiperSlideOffset;
            const t = [
                swiper.params.cssMode ? -offset - swiper.translate : -offset,
                0,
                0
            ];
            const r = [
                0,
                0,
                0
            ];
            let custom = false;
            if (!swiper.isHorizontal()) {
                t[1] = t[0];
                t[0] = 0;
            }
            let data = {
                translate: [
                    0,
                    0,
                    0
                ],
                rotate: [
                    0,
                    0,
                    0
                ],
                scale: 1,
                opacity: 1
            };
            if (progress < 0) {
                data = params.next;
                custom = true;
            } else if (progress > 0) {
                data = params.prev;
                custom = true;
            } // set translate
            t.forEach((value, index)=>{
                t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
            }); // set rotates
            r.forEach((value, index)=>{
                r[index] = data.rotate[index] * Math.abs(progress * multiplier);
            });
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const translateString = t.join(', ');
            const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
            const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
            const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
            const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows
            if (custom && data.shadow || !custom) {
                let $shadowEl = $slideEl.children('.swiper-slide-shadow');
                if ($shadowEl.length === 0 && data.shadow) $shadowEl = $36RFV.default(params, $slideEl);
                if ($shadowEl.length) {
                    const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                    $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                }
            }
            const $targetEl = $dmyXw.default(params, $slideEl);
            $targetEl.transform(transform).css({
                opacity: opacityString
            });
            if (data.origin) $targetEl.css('transform-origin', data.origin);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl: transformEl  } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        $aPFWC.default({
            swiper: swiper,
            duration: duration,
            transformEl: transformEl,
            allSlides: true
        });
    };
    $8wrrq.default({
        effect: 'creative',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        perspective: ()=>swiper.params.creativeEffect.perspective
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

});

parcelRequire.register("iy6JS", function(module, exports) {

var $36RFV = parcelRequire("36RFV");

var $8wrrq = parcelRequire("8wrrq");

var $dmyXw = parcelRequire("dmyXw");

var $aPFWC = parcelRequire("aPFWC");
function $d810a12b8d751bd1$export$2e2bcd8739ae039(_ref) {
    let { swiper: swiper , extendParams: extendParams , on: on  } = _ref;
    extendParams({
        cardsEffect: {
            slideShadows: true,
            transformEl: null,
            rotate: true
        }
    });
    const setTranslate = ()=>{
        const { slides: slides , activeIndex: activeIndex  } = swiper;
        const params = swiper.params.cardsEffect;
        const { startTranslate: startTranslate , isTouched: isTouched  } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;
        for(let i = 0; i < slides.length; i += 1){
            const $slideEl = slides.eq(i);
            const slideProgress = $slideEl[0].progress;
            const progress = Math.min(Math.max(slideProgress, -4), 4);
            let offset = $slideEl[0].swiperSlideOffset;
            if (swiper.params.centeredSlides && !swiper.params.cssMode) swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
            if (swiper.params.centeredSlides && swiper.params.cssMode) offset -= slides[0].swiperSlideOffset;
            let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
            let tY = 0;
            const tZ = -100 * Math.abs(progress);
            let scale = 1;
            let rotate = -2 * progress;
            let tXAdd = 8 - Math.abs(progress) * 0.75;
            const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
            const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
            const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
            if (isSwipeToNext || isSwipeToPrev) {
                const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                rotate += -28 * progress * subProgress;
                scale += -0.5 * subProgress;
                tXAdd += 96 * subProgress;
                tY = `${-25 * subProgress * Math.abs(progress)}%`;
            }
            if (progress < 0) // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
            else if (progress > 0) // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
            else tX = `${tX}px`;
            if (!swiper.isHorizontal()) {
                const prevY = tY;
                tY = tX;
                tX = prevY;
            }
            const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
            const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;
            if (params.slideShadows) {
                // Set shadows
                let $shadowEl = $slideEl.find('.swiper-slide-shadow');
                if ($shadowEl.length === 0) $shadowEl = $36RFV.default(params, $slideEl);
                if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
            }
            $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
            const $targetEl = $dmyXw.default(params, $slideEl);
            $targetEl.transform(transform);
        }
    };
    const setTransition = (duration)=>{
        const { transformEl: transformEl  } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        $aPFWC.default({
            swiper: swiper,
            duration: duration,
            transformEl: transformEl
        });
    };
    $8wrrq.default({
        effect: 'cards',
        swiper: swiper,
        on: on,
        setTranslate: setTranslate,
        setTransition: setTransition,
        perspective: ()=>true
        ,
        overwriteParams: ()=>({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
    });
}

});



//# sourceMappingURL=index~aa532308.js.map
