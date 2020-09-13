import Swiper, { Pagination, Autoplay } from "swiper";

Swiper.use([Pagination, Autoplay]);

export default function initCarousel() {
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 2500,
    },
    simulateTouch: false,
    pagination: {
      el: ".main-banner__dots",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="dots__item swiper-pagination-bullet"></span>`;
      },
      bulletActiveClass: `active`
    },
  });
}
