const hamburger = document.querySelector(".hamburger")
const bars = document.querySelector(".fa-bars") 
const xmark = document.querySelector(".fa-xmark")
const listNav =document.querySelector('.list-nav')
const register =document.querySelector('.register')

hamburger.addEventListener("click", function(){

    bars.classList.toggle('toggle')
    xmark.classList.toggle('toggleblock')
    listNav.classList.toggle('activeone')
    register.classList.toggle('activeone')
    
})





// jquery
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  const togglescrollTop = function() {
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
  window.addEventListener('load', togglescrollTop);
  document.addEventListener('scroll', togglescrollTop);
  scrollTop.addEventListener('click', window.scrollTo({
    top: 0,
    behavior: 'smooth'
  }));
}


(function ($) {
  "use strict";

    // Price carousel
    $(".price-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      margin: 45,
      dots: false,
      loop: true,
      nav : true,
      navText : [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
      ],
      responsive: {
          0:{
              items:1
          },
          768:{
              items:2
          }
      }
  });


})(jQuery);