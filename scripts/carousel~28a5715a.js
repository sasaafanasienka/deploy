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






var $9b0vI = parcelRequire("9b0vI");




$9b0vI.default.use([
    $9b0vI.Navigation,
    $9b0vI.Pagination
]);
const $6cfcf3b2758bcf0f$var$carouselSlider = new $9b0vI.default('.carousel__slider', {
    // mobile-style
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    slideClass: 'carousel__slide',
    navigation: {
        nextEl: '.carousel__button--next',
        prevEl: '.carousel__button--prev'
    },
    pagination: {
        el: '.carousel__pagination',
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3
    },
    breakpoints: {
        900: {
            spaceBetween: 20,
            slidesPerView: 'auto',
            loop: true,
            // initialSlide: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            pagination: {
                dynamicBullets: false
            }
        }
    }
});


//# sourceMappingURL=carousel~28a5715a.js.map
