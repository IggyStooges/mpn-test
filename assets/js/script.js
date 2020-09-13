import initCarousel from "./modules/slider.js"
import removeLoader from "./modules/start-loader.js"
import initMap from "./modules/map.js"
import formInit from "./modules/form.js"
const LOADER_TIME_OUT = 2001;


window.onload = function() {
  setTimeout(() => {
    removeLoader();
    initCarousel();
    initMap();
    formInit();
    }, LOADER_TIME_OUT)
};
