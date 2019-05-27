$(document).ready(function() {
  /***************************
   ************************ READY *****************
   ***************************/

  // GLOBAL
  $('#brands a').attr('href', '../index.html');
  // toggle menu
  let menuList = $('.toggle__list li');
  for (let item of menuList) {
    $(item.firstElementChild).attr('href', 'productlist.html');
  }
  
  

  // NAVBAR
  let navBar = $('#navbar ul li');
  for (let item of navBar) {
    if (item.innerText == 'Giới thiệu') {
      $(item.firstElementChild).attr('href', 'reviews.html');
    }
    if (item.innerText == 'Tin tức') {
      $(item.firstElementChild).attr('href', 'news.html');
    }
    if (item.innerText == 'Khuyến mãi') {
      $(item.firstElementChild).attr('href', 'news.html');
    }
    if (item.innerText == 'Liên Hệ') {
      $(item.firstElementChild).attr('href', 'contact.html');
    }
  }
  
  //NEW
  $('.new__inner .new__title').attr('href', 'newdetail.html');

  // Product
  $('.product').click( () =>{
    window.location.replace('https://canhphan10994.github.io/ducans/html/product.html');
  });

});
