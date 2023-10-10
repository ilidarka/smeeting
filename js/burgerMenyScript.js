let burgerMenu = document.querySelector('.burger-menu');
let burgerButton = document.querySelector('.burger-button');

burgerButton.addEventListener('click', () => {
    burgerButton.style.display = 'none';
    burgerMenu.style.display = 'flex';
});
