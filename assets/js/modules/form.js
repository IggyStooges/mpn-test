const formWrapper = document.querySelector(`.registration__wrapper`);
const form = formWrapper.querySelector(`.registration__form`);
const submitBtn = form.querySelector(`.form__btn`);
const successContainer = document.querySelector(`.registration__success`);

export default function formInit() {
  form.addEventListener(`click`, () => {
    submitBtn.removeAttribute(`disabled`);
  });
  form.addEventListener(`submit`, (e) => {
    e.preventDefault();
    formWrapper.classList.add(`submitted`);
    [formWrapper, successContainer].forEach(element => element.classList.add(`submitted`))
  })
}