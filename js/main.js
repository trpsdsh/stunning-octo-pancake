const swiper = new Swiper('.swiper', {
    effect: 'fade',
    loop: true, 
    autoplay:{
        delay:2000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });