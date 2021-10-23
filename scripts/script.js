/*Начало - info*/
let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
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

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
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


var splide = new Splide("#splide", {
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
});

splide.mount();
