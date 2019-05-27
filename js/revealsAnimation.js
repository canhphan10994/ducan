$(document).ready(function() {
  /***************************************
  ************* INDEX PAGE ***************
  *****************************************/
  window.sr = ScrollReveal();

  sr.reveal('.services', {
    duration: 2000,
    origin: 'left',
    distance:'100px'
  });

  sr.reveal('.socials', {
    duration: 2000,
    origin: 'right',
    distance:'100px'
  });

  sr.reveal('#brands', {
    duration: 2000,
    origin: 'left',
    distance:'100px'
  });

  sr.reveal('.header__search', {
    duration: 2000,
    origin: 'right',
    distance:'100px'
  });

  sr.reveal('.nav__menu', {
    duration: 2000,
    origin: 'bottom',
    distance:'50px'
  });

  sr.reveal('#services', {
    duration: 2000,
    origin: 'bottom',
    distance:'50px',
    viewFactor: 0.2
  });

  sr.reveal('.products__categories', {
    duration: 2000,
    origin: 'left',
    distance:'100px',
    viewFactor: 0.2
  });

  sr.reveal('.products__categories__subs', {
    duration: 2000,
    origin: 'right',
    distance:'100px',
    viewFactor: 0.2
  });

  sr.reveal('.products__main', {
    duration: 2000,
    origin: 'bottom',
    distance:'200px',
    viewFactor: 0.2
  });

  sr.reveal('#brands_show', {
    duration: 2000,
    origin: 'right',
    distance:'200px',
    viewFactor: 0.2
  });

  sr.reveal('#news', {
    duration: 2000,
    origin: 'top',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#guide', {
    duration: 2000,
    origin: 'bottom',
    distance:'300px',
    viewFactor: 0.2
  });

  sr.reveal('#newsletter', {
    duration: 2000,
    origin: 'bottom',
    distance:'100px',
    viewFactor: 0.2
  });

  /***************************************
  ************* PRODUCTS PAGE ***************
  *****************************************/
  sr.reveal('.showcase__side__notice', {
    duration: 2000,
    origin: 'left',
    distance:'200px'
  });

  sr.reveal('#showcase__product__center', {
    duration: 2000,
    origin: 'right',
    distance:'200px'
  });

  sr.reveal('.products__inner .product', {
    duration: 2000,
    origin: 'bottom',
    distance:'200px',
    viewFactor: 0.2
  });

});
