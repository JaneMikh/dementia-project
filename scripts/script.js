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
//Вот накой черт я потратил на тебя столько времени?! надо быть внимательней....><
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
