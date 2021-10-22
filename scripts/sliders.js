//Слайдер с новостями
var splide = new Splide('#splide-news', {
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
    prev  : 'splide__arrow--prev news__arrow-prev',
		next  : 'splide__arrow--next news__arrow-next',
  }
});
splide.mount();

//Слайдер с проектами
var splide = new Splide('#splide-projects', {
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
  classes: {
    prev  : 'splide__arrow--prev projects__arrow-prev',
		next  : 'splide__arrow--next projects__arrow-next',
  }
});
splide.mount();
