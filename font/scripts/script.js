const headerButton = document.querySelector(".header__button");
const dropdownMenu = document.querySelector(".dropdown-menu");

headerButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle("dropdown-menu_click_open")
})
