//Открытие попап карты - Коми
const komi = document.querySelector('.map__komi-button');
const komiMap = document.querySelector('.map__komi')
const komiPopup = document.querySelector('.map__popup');
komi.addEventListener('click', () => {
    komiPopup.classList.toggle('map__popup_show')
})
komiMap.style.fill = '#9a34a8';
komi.addEventListener('mouseover', () => {
    komiMap.style.fill = '#6d097a';
});
komi.addEventListener('mouseout', () => {
    komiMap.style.fill = '#9a34a8';
});

//Изменение размера карты
/*
const originalViewBox = komiMap.getAttribute('transform');
const mq = window.matchMedia("(max-width: 320px)");

function updateViewBox() {
    if (mq.matches) {

        komiMap.setAttribute('transform', 'scale(0.88)');
    } else {
        komiMap.setAttribute('transform', originalViewBox);
    }
};
updateViewBox();
mq.addListener(updateViewBox);
*/
//Вот накой черт я потратил на тебя столько времени?! надо быть внимательней....><
