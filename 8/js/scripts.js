const button = document.querySelector('.main-nav__button'); // находим кнопку
const nav = document.querySelector('.main-nav'); // находим навигацию
const closedClass = 'main-nav--closed'; // класс, который будем добавлять или удалять с навигации

button.addEventListener('click', () => { // слушаем клике на кнопке
  nav.classList.toggle(closedClass); // Как только на кнопке произойдёт клик у навигации смениться класс main-nav--closed
});
