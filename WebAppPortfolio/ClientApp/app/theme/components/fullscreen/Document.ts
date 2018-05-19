interface Document {
    exitFullscreen: void;
    msExitFullscreen: () =>  void;
    mozCancelFullScreen: () => void;
    webkitExitFullscreen: void;
    mozFullScreenElement: () => void;
    msFullscreenElement: void;
}