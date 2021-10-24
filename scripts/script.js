const headerButton = document.querySelector(".header__button");
const dropdownMenu = document.querySelector(".dropdown-menu");

headerButton.addEventListener('click', function() {
  dropdownMenu.classList.toggle("dropdown-menu_click_open")
})

// Слайдер блока header
let viewport = document.querySelector(".sliders").offsetWidth;
let btnSlide = document.querySelectorAll(".header__switch");
let slider = document.querySelector(".sliders__list");
let nameArticle = document.querySelector(".header__name-article");
let linkArticle = document.querySelector(".header__link_type_article");
let slideName = document.querySelectorAll(".sliders__name-article");
let slideLink = document.querySelectorAll(".sliders__link");

window.onload = function () {
  slider.style.left = 0;
  nameArticle.textContent = slideName[0].textContent;
  linkArticle.setAttribute("href", slideLink[0].textContent);
  for (let a=0; a<btnSlide.length; a++) {
    if (a===0) {
      btnSlide[a].classList.add("header__switch_type_activ");
    } else {
      btnSlide[a].classList.remove("header__switch_type_activ");
    }
  }
}

for (let i=0; i<btnSlide.length; i++) {
  btnSlide[i].addEventListener('click', function() {
    slider.style.left = -(i) * viewport + "px";
    nameArticle.textContent = slideName[i].textContent;
    linkArticle.setAttribute("href", slideLink[i].textContent);
    for (let a=0; a<btnSlide.length; a++) {
      if (a===i) {
        btnSlide[a].classList.add("header__switch_type_activ");
      } else {
        btnSlide[a].classList.remove("header__switch_type_activ");
      }
    }
  })
}

window.addEventListener('resize', ()=>{
  viewport = document.querySelector(".sliders").offsetWidth;
  nameArticle.textContent = slideName[0].textContent;
  slider.style.left = 0;
  for (let a=0; a<btnSlide.length; a++) {
    if (a===0) {
      btnSlide[a].classList.add("header__switch_type_activ");
    } else {
      btnSlide[a].classList.remove("header__switch_type_activ");
    }
  }
})
//конец слайдера блока header


// document.addEventListener('DOMContentLoaded', function () {
//   new Splide( '#image-slider', {
//     // type: "slide";
//     cover: true,
// 		// heightRatio: 0.5,
//     rewind: true,
//     width: 100%,
//   }).mount();
// });
/*Начало - info*/
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      dealWithScrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", dealWithScrolling, false);

const purplePuzzle = document.querySelector(".test__img-purple-puzzle");
const bigGreenPuzzle = document.querySelector(".test__img-green-puzzle");
const smallGreenPuzzle = document.querySelector(".definition__img-puzzle");

function dealWithScrolling(e) {
  if (isPartiallyVisible(smallGreenPuzzle)) {
    smallGreenPuzzle.classList.add("active");
  } else {
    smallGreenPuzzle.classList.remove("active");
  }

  if (isPartiallyVisible(bigGreenPuzzle)) {
    bigGreenPuzzle.classList.add("active");
  } else {
    bigGreenPuzzle.classList.remove("active");
  }

  if (isPartiallyVisible(purplePuzzle)) {
    purplePuzzle.classList.add("active");
  } else {
    purplePuzzle.classList.remove("active");
  }
}

function isPartiallyVisible(el) {
  const elementBoundary = el.getBoundingClientRect();

  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  const height = elementBoundary.height;

  return top + height >= 0 && height + window.innerHeight >= bottom;
}

// function isFullyVisible(el) {
//   let elementBoundary = el.getBoundingClientRect();

//   let top = elementBoundary.top;
//   let bottom = elementBoundary.bottom;

//   return ((top >= 0) && (bottom <= window.innerHeight));
// }

/*Конец - info*/

//Слайдер с новостями
var splide = new Splide('#splide-news', {
  pagination: 0,
  type: 'loop',
  gap: '15px',
  focus: '1',
  perPage: 3,
  width: '80%',
  breakpoints: {
    840: {
      perPage: 3,
      gap: '14px',
      width: '88%'
    },
    620: {
      perPage: 2,
      gap: '10px',
      width: '90%',
    },
  },
  classes: {
    prev: 'splide__arrow--prev splide__arrow_news_prev',
		next: 'splide__arrow--next splide__arrow_news_next',
  }
});
splide.mount();

//Слайдер с проектами
var splide = new Splide('#splide-projects', {
  pagination: 0,
  type: 'loop',
  perPage: 4,
  gap: '59px',
  focus: '1',
  width: '80%',
  breakpoints: {
    840: {
      perPage: 3,
      width: '83%',
      gap: '56px',
    },
    620: {
      perPage: 2,
      width: '70%',
      gap: '42px',
    },
  },
  classes: {
    prev: 'splide__arrow--prev splide__arrow_projects_prev',
		next: 'splide__arrow--next splide__arrow_projects_next',
  },
});
splide.mount();

//Слайдер с партнерами
var splide = new Splide("#splide-partners", {
  type: "loop",
  perPage: 6,
  perMove: 1,
  gap: 31.15,
  pagination: 0,
  fixedWidth: 97.98,
  breakpoints: {
    840: {
      perPage: 5,
      gap: 25.48,
      fixedWidth: 78.96,
    },
    620: {
      perPage: 4,
      gap: 9.56,
      fixedWidth: 51.63,
    },
  },
  classes: {
    prev: "splide__arrow--prev splide__arrow_partners_prev",
    next: "splide__arrow--next splide__arrow_partners_next",
  },
});

splide.mount();


//Открытие попап карты - Коми
const komi = document.querySelector(".map__komi-button");
const komiMap = document.querySelector(".map__komi");
const komiPopup = document.querySelector(".map__popup");
komi.addEventListener("click", () => {
  komiPopup.classList.toggle("map__popup_show");
});
komiMap.style.fill = "#9a34a8";
komi.addEventListener("mouseover", () => {
  komiMap.style.fill = "#6d097a";
});
komi.addEventListener("mouseout", () => {
  komiMap.style.fill = "#9a34a8";
});

//Изменение размера карты
const originalViewBox = komiMap.getAttribute("transform");
const mq = window.matchMedia("(max-width: 320px)");

function updateViewBox() {
  if (mq.matches) {
    komiMap.setAttribute("transform", "scale(0.88)");
  } else {
    komiMap.setAttribute("transform", originalViewBox);
  }
}
updateViewBox();
mq.addListener(updateViewBox);

//анимация для блока fund//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const fundElement1 = entry.target.querySelector(".fund__element1");
    if (entry.isIntersecting) {
      fundElement1.classList.add("fund__element1-animation");
      return;
    }

    fundElement1.classList.remove("fund__element1-animation");
  });
});

observer.observe(document.querySelector(".fund"));
