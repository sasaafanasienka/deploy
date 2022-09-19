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
parcelRequire("ePdDe");
parcelRequire("epDfQ");




var $9b0vI = parcelRequire("9b0vI");




class $9c99f8c6ce04a1b5$var$Dropdowns {
    constructor({ dropdownSelector: // groupSelector,
    dropdownSelector , toggleSelector: toggleSelector , contentSelector: contentSelector , activeClass: activeClass = 'js--active' , eventType: eventType = 'click' , initialDropdowns: initialDropdowns = [] , isMultiple: isMultiple = false , toggleTexts: toggleTexts ,  }){
        // this.group = document.querySelectorAll(groupSelector);
        this.dropdowns = [];
        this.dropdownsElements = document.querySelectorAll(dropdownSelector);
        this.toggleSelector = toggleSelector;
        this.contentSelector = contentSelector;
        this.activeClass = activeClass;
        this.eventType = eventType;
        this.openedDropdowns = new Set(initialDropdowns);
        this.isMultiple = isMultiple;
        this.toggleTexts = toggleTexts;
        // this.closeOnFocusOut = closeOnFocusOut;
        this.timeoutsToResetHeights = new Map([]);
    }
    init() {
        for(let i = 0; i < this.dropdownsElements.length; i += 1){
            const dropdown = this.dropdownsElements[i];
            const toggle = dropdown.querySelector(this.toggleSelector) ?? dropdown;
            const content = dropdown.querySelector(this.contentSelector);
            if (!content) {
                if (toggle !== dropdown) toggle.remove();
            } else {
                this.dropdowns.push({
                    index: i,
                    dropdownElement: dropdown,
                    toggleElement: toggle,
                    contentElement: content,
                    contentInnerElement: content.firstElementChild
                });
                toggle.addEventListener(this.eventType, ()=>{
                    this.toggle(i);
                });
            }
        }
        this.closeMultiple(this.dropdowns.map((d)=>d.index
        ).filter((d)=>!this.openedDropdowns.has(d)
        ));
        // setTimeout(() => {
        // });
        this.openMultiple(this.openedDropdowns);
    }
    toggle(i) {
        if (this.openedDropdowns.has(i)) return this.close(i);
        return this.open(i);
    }
    open(i) {
        const dropdown = this.dropdowns[i];
        const { dropdownElement: dropdownElement , contentElement: contentElement , contentInnerElement: contentInnerElement , toggleElement: toggleElement ,  } = dropdown;
        const heightToSet = contentInnerElement.clientHeight;
        const duration = parseFloat(getComputedStyle(contentElement).transitionDuration) * 1000;
        if (!this.isMultiple) this.openedDropdowns.forEach((dropdownIndex)=>{
            if (i !== dropdownIndex) this.close(dropdownIndex);
        });
        if (this.toggleTexts) toggleElement.textContent = this.toggleTexts.open;
        const timeoutId = setTimeout(()=>{
            contentElement.style.height = 'auto';
            this.deleteTimeout(i);
        }, duration);
        this.timeoutsToResetHeights.set(i, timeoutId);
        contentElement.style.height = `${heightToSet}px`;
        dropdownElement.classList.add(this.activeClass);
        this.openedDropdowns.add(i);
        return dropdown;
    }
    close(i) {
        const dropdown = this.dropdowns[i];
        const { dropdownElement: dropdownElement , contentElement: contentElement , contentInnerElement: contentInnerElement , toggleElement: toggleElement ,  } = dropdown;
        const heightToStartWith = contentInnerElement.clientHeight;
        this.deleteTimeout(i);
        if (this.toggleTexts) toggleElement.textContent = this.toggleTexts.close;
        contentElement.style.height = `${heightToStartWith}px`;
        setTimeout(()=>{
            contentElement.style.height = '0px';
        }, 0);
        dropdownElement.classList.remove(this.activeClass);
        this.openedDropdowns.delete(i);
        return dropdown;
    }
    openMultiple(indexes) {
        indexes.forEach((index)=>{
            this.open(index);
        });
    }
    closeMultiple(indexes) {
        indexes.forEach((index)=>{
            this.close(index);
        });
    }
    deleteTimeout(i) {
        const timeoutId = Number(this.timeoutsToResetHeights.get(i));
        if (timeoutId) {
            clearTimeout(timeoutId);
            this.timeoutsToResetHeights.delete(i);
        }
    }
}
var $9c99f8c6ce04a1b5$export$2e2bcd8739ae039 = $9c99f8c6ce04a1b5$var$Dropdowns;


const $5eae2ad5104e347c$export$d07517a676ce386f = {
    lg: 1024,
    md: 811,
    sm: 570,
    xs: 400
};


const { md: $d7b5dfc9d5325d8e$var$md  } = {
    ...$5eae2ad5104e347c$export$d07517a676ce386f
}; // lg, md, sm, xs
const $d7b5dfc9d5325d8e$var$faqDropdowns = new $9c99f8c6ce04a1b5$export$2e2bcd8739ae039({
    dropdownSelector: '.faq__item',
    contentSelector: '.faq__content'
});
$d7b5dfc9d5325d8e$var$faqDropdowns.init();
$9b0vI.default.use([
    $9b0vI.Navigation,
    $9b0vI.Pagination
]);
// eslint-disable-next-line no-unused-vars
const $d7b5dfc9d5325d8e$var$quoteSliderContainer = document.querySelector('.quote-slider__wrapper');
const $d7b5dfc9d5325d8e$var$quoteSlidesLength = $d7b5dfc9d5325d8e$var$quoteSliderContainer.childNodes.length;
const $d7b5dfc9d5325d8e$var$quotesSlider = new $9b0vI.default($d7b5dfc9d5325d8e$var$quoteSliderContainer, {
    spaceBetween: 20,
    slideClass: 'quote-slider__slide',
    navigation: $d7b5dfc9d5325d8e$var$quoteSlidesLength > 1 ? {
        nextEl: '.quote-slider__button-next',
        prevEl: '.quote-slider__button-prev'
    } : false,
    pagination: {
        el: '.quote-slider__pagination',
        clickable: true
    },
    breakpoints: {
        [$d7b5dfc9d5325d8e$var$md]: {
            slidesPerView: 2,
            navigation: $d7b5dfc9d5325d8e$var$quoteSlidesLength > 2 ? {
                nextEl: '.quote-slider__button-next',
                prevEl: '.quote-slider__button-prev'
            } : false
        }
    }
});
const $d7b5dfc9d5325d8e$var$videosSlider = new $9b0vI.default('.video-slider__wrapper', {
    spaceBetween: 15,
    slideClass: 'video-slider__slide',
    slidesPerView: 1,
    navigation: {
        nextEl: '.video-slider__button-next',
        prevEl: '.video-slider__button-prev'
    },
    pagination: {
        el: '.video-slider__pagination',
        clickable: true
    }
});


//# sourceMappingURL=module~a8e2420a.js.map
