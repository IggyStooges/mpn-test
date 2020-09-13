const location = document.querySelector(`#location`);
const map = location.querySelector(`#map`);
const infrastrutureList = location.querySelector(`.map__infrastructure`);
const openInfrastructureListBtn = location.querySelector(`.map__infrastructure-open-btn`);

export default function initMap() {
  ymaps.ready(init);
  function init(){ 
      var myMap = new ymaps.Map("map", {
          center: [55.76, 37.64],
          zoom: 7
      });
  }

  openInfrastructureListBtn.addEventListener(`click`, () => {
    [openInfrastructureListBtn, infrastrutureList].forEach(element => element.classList.toggle(`opened`))
  })
}