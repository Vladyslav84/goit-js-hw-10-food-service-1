import './styles.css';
// import * as tamplate from './menu.json';
import menuItemTpl from './templates/menuitem.hbs';
import menu from './menu.json'

// console.log(menuItemTpl(menu));
// console.log(menu);

const menuEl = document.querySelector('.js-menu');

menuEl.insertAdjacentHTML('beforeend', menuItemTpl(menu));

console.log(menuEl);
