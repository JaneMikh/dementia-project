var splide = new Splide('.splide', {
  type: 'loop',
  perPage: 4,
  focus: '1',
  width: '86vw',
  breakpoints: {
    840: {
      perPage: 3,
      width: '92vw',
    },
    620: {
      perPage: 2,
      width: '86vw',
    },
  },
});
splide.mount();


