const loader = document.querySelector(`.start-loader`);
const content = document.querySelector(`.content`);

export default function removeLoader() {
    loader.remove();
    content.classList.remove(`content--loading`);
}
