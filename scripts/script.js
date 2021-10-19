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
    prev  : 'splide__arrow--prev slider__arrow-prev',
		next  : 'splide__arrow--next slider__arrow-next',
  }
});

splide.mount();s