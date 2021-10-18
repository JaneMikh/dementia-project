let isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false ) {
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
