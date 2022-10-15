import { openTheMenu } from './toggle-menu.js';

import Swiper, { Navigation, Pagination } from '../../node_modules/swiper/swiper-bundle';

swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
  // modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

  openTheMenu();
