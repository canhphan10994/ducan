$(document).ready(function() {
  /***************************
   ************************ READY *****************
   ***************************/

  // GLOBAL
  $('#brands a').attr('href', '../index.html');
  // toggle menu
  let menuList = $('.toggle__list li');
  for (let item of menuList) {
    $(item.firstElementChild).attr('href', '../html/productlist.html');
  }

  // NAVBAR
  let navBar = $('#navbar ul li');
  for (let item of navBar) {
    if (item.innerText == 'Giới thiệu') {
      $(item.firstElementChild).attr('href', '../html/reviews.html');
    }
    if (item.innerText == 'Tin tức') {
      $(item.firstElementChild).attr('href', '../html/news.html');
    }
    if (item.innerText == 'Khuyến mãi') {
      $(item.firstElementChild).attr('href', '../html/news.html');
    }
    if (item.innerText == 'Liên Hệ') {
      $(item.firstElementChild).attr('href', '../html/contact.html');
    }
  }

  // Product
  $('.product').click( () =>{
    window.location.replace('http://127.0.0.1:8080/html/product.html');
  });

});
