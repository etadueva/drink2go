import { openTheMenu } from './toggle-menu.js';

import Swiper, { Navigation, Pagination } from 'swiper';

// Swiper.use([Navigation, Pagination]);
import 'swiper/css/bundle';

new Swiper('.swiper', {
  modules: [Navigation, Pagination],
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
