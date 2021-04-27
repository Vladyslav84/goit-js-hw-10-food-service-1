import './styles.css';
import menuItemTpl from './templates/menuitem.hbs';
import menu from './menu.json'

const menuEl = document.querySelector('.js-menu');
const bodyEl = document.querySelector('body');
const swithBtn = document.querySelector('.theme-switch__toggle');

menuEl.insertAdjacentHTML('beforeend', menuItemTpl(menu));

reload();

swithBtn.addEventListener('click', onSwithBtnSwap)

function onSwithBtnSwap(evt) {
    evt.preventDefoult;
    if (!swithBtn.checked)
    {
        localStorage.removeItem('theme-dark');
        bodyEl.classList.remove('dark-theme');

        console.log(swithBtn.checked);

    } else
    {
        bodyEl.classList.add('dark-theme');
        localStorage.setItem('theme-dark', 'dark');
    }

};

function reload() {
    const saveTheme = localStorage.getItem('theme-dark');
    if (saveTheme)
    {
        console.log('reload');
        bodyEl.classList.add('dark-theme');
        swithBtn.checked = true;
    }
};