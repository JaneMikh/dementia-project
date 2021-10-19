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
});
splide.mount();
