const mainNav = document.querySelector(`.main-nav`);
const openBtn = mainNav.querySelector(`.main-nav__open`);

export default function mobileMenuInit() {
  openBtn.addEventListener(`click`, () => {
    mainNav.classList.toggle(`opened`);
  });
}