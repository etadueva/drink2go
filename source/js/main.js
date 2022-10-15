import { openTheMenu } from './toggle-menu.js';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const promoSlider = document.querySelector('.swiper');
const swiperPagination = document.querySelector('.swiper__pagination')
const swiperButtonPrev = document.querySelector('.swiper__button--prev');
const swiperButtonNext = document.querySelector('.swiper__button--next');

const swiper = new Swiper(promoSlider, {
  direction: 'vertical',
  loop: true,

  pagination: {
    el: swiperPagination,
  },

  navigation: {
    nextEl: swiperButtonNext,
    prevEl: swiperButtonPrev,
  }
});

openTheMenu();
