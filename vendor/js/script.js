//Открытие попап карты - Коми
const komi = document.querySelector('.map__komi-button');
const komiMap = document.querySelector('.map__komi')
const komiPopup = document.querySelector('.map__popup');
komi.addEventListener('click', () => {
    komiPopup.classList.toggle('map__popup_show')
})

komi.addEventListener('mouseover', () => {
    komiMap.style.fill = '#6d097a';
});
komi.addEventListener('mouseout', () => {
    komiMap.style.fill = '#9a34a8';
});
