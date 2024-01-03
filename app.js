// Light and Dark Mode
let html = document.getElementById('html');
let imgToggle = document.getElementById('img-toggle');
let BtnToggle = document.getElementById('btn-toggle');

BtnToggle.addEventListener('click', () => {
    html.classList.toggle('dark');

    if (imgToggle.src.includes('images/moon.png')) {
        imgToggle.src = 'images/sun.png';
    } else {
        imgToggle.src = 'images/moon.png';
    }
});

let imgToggle2 = document.getElementById('img-toggle2');
let BtnToggle2 = document.getElementById('btn-toggle2');

BtnToggle2.addEventListener('click', () => {
    html.classList.toggle('dark');

    if (imgToggle2.src.includes('images/moon.png')) {
        imgToggle2.src = 'images/sun.png';
    } else {
        imgToggle2.src = 'images/moon.png';
    }
});

// Mobile Menu
let MainMenu = document.getElementById('main-menu');
let BtnMenu = document.getElementById('mobile-btn');

BtnMenu.addEventListener('click', () => {
    MainMenu.classList.toggle('hidden');
});