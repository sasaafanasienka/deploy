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








var $hMMjP = parcelRequire("hMMjP");
class $26af47200b4da312$var$Switcher {
    constructor(){
        this.container = document.querySelector('.milestones__tabs');
        this.buttons = Array.from(document.querySelectorAll('.milestones__tab-button'));
        this.switcher = document.querySelector('.milestones__tab-switcher');
        this.switcherIndicator = this.switcher.querySelector('div');
        this.currentTab = 0;
    }
    init = ()=>{
        const tabs = new $hMMjP.default({
            tabSelector: '.milestones__container',
            btnSelector: '.milestones__tab-button',
            initialTab: 0
        });
        tabs.init();
        this.switcherIndicator.style.transform = 'translate(-12px)';
        this.switcher.addEventListener('click', ()=>{
            this.goTo(tabs);
        });
        this.buttons.forEach((el, index)=>{
            el.addEventListener('click', ()=>{
                this.moveIndicatorByButton(index);
            });
        });
    };
    goTo = (tabsInstance)=>{
        const targetIndex = this.currentTab === 0 ? 1 : 0;
        tabsInstance.goTo(targetIndex);
        this.currentTab = targetIndex;
        this.moveIndicator();
    };
    moveIndicator = ()=>{
        this.switcherIndicator.style.transform = `translate(${12 * (this.currentTab === 0 ? -1 : 1)}px)`;
    };
    moveIndicatorByButton = (index)=>{
        this.currentTab = index;
        this.moveIndicator();
    };
}
var $26af47200b4da312$export$2e2bcd8739ae039 = $26af47200b4da312$var$Switcher;


const $90b22ce6c1f5c28e$var$switcher = new $26af47200b4da312$export$2e2bcd8739ae039();
$90b22ce6c1f5c28e$var$switcher.init();




//# sourceMappingURL=milestones~4bc6ba27.js.map
