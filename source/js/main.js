import { openTheMenu } from './toggle-menu.js';

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

const map = L.map('map').setView([59.968137, 30.316272], 16);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([59.968137, 30.316272]).addTo(map)
  .openPopup();

openTheMenu();
