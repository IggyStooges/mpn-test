const LOADER_TIME_OUT = 2001;
const loader = document.querySelector(`.start-loader`);
const content = document.querySelector(`.content`);

export default function removeLoader() {
  setTimeout(() => {
    console.log(111)
    loader.remove();
    content.classList.remove(`content--loading`);
  }, LOADER_TIME_OUT)
}
