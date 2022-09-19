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


class $09e10fceeb4dff25$var$VideoFullscreen {
    constructor(settings){
        this.openButton = document.querySelector(settings.videoButtonSelector);
        this.modal = document.querySelector(settings.videoModal);
        this.video = document.querySelector(settings.videoFile);
        this.notIos = this.modal.requestFullscreen;
    }
    init = ()=>{
        if (this.openButton && this.modal) this.openButton.addEventListener('click', this.openModal);
    };
    openModal = ()=>{
        if (this.notIos) this.modal.requestFullscreen().then(()=>{
            this.video.play();
            this.modal.classList.add('video-modal--opened');
            document.addEventListener('fullscreenchange', this.closeModal);
            document.addEventListener('keyup', this.playPauseByKeyBoard);
        });
        else this.modal.webkitEnterFullscreen().then(()=>{
            this.video.play();
            this.video.click();
            this.modal.classList.add('video-modal--opened');
            document.addEventListener('fullscreenchange', this.closeModal);
            document.addEventListener('keyup', this.playPauseByKeyBoard);
        });
    };
    closeModal = (event)=>{
        if (this.notIos) {
            if (!document.fullscreenElement || event.keyCode === 27) {
                this.modal.classList.remove('video-modal--opened');
                document.removeEventListener('fullscreenchange', this.closeModal);
                this.video.pause();
                this.video.currentTime = 0;
            }
        } else if (!document.webkitDisplayingFullscreen || event.keyCode === 27) {
            this.modal.classList.remove('video-modal--opened');
            document.removeEventListener('fullscreenchange', this.closeModal);
            this.video.pause();
            this.video.currentTime = 0;
        }
    };
    playPause = ()=>{
        if (this.video.paused) this.video.play();
        else this.video.pause();
    };
    playPauseByKeyBoard = (event)=>{
        if (event.keyCode === 32) this.playPause();
    };
}
var $09e10fceeb4dff25$export$2e2bcd8739ae039 = $09e10fceeb4dff25$var$VideoFullscreen;


const $6ebd3b5412c535fd$var$videoFullscreen = new $09e10fceeb4dff25$export$2e2bcd8739ae039({
    videoButtonSelector: '.animated-video__image-wrapper',
    videoModal: '.video-modal',
    videoFile: '.video-modal__file'
});
$6ebd3b5412c535fd$var$videoFullscreen.init();







//# sourceMappingURL=animated-video~39ef7080.js.map
