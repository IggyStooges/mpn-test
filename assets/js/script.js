import initCarousel from "./modules/slider.js";
import removeLoader from "./modules/start-loader.js";
import initMap from "./modules/map.js";
import formInit from "./modules/form.js";
import mobileMenuInit from "./modules/mobile-menu.js";

const LOADER_TIME_OUT = 2001;


window.onload = function() {
  setTimeout(() => {
    removeLoader();
    initCarousel();
    initMap();
    formInit();
    mobileMenuInit();
    }, LOADER_TIME_OUT)
};
