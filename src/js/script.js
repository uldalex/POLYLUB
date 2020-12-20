 const ready = require('./utils/documentReady.js');

// ready(function(){
//   console.log('DOM героически построен!');
// });

 const $ = require('jquery');
const { get } = require('jquery');
 $( document ).ready(function() {
 $(window).scroll(function() {
   if ($(".page-header").length) {
      let sticky = $(".page-header")[0].offsetTop;
      let open = 300;
      if (window.pageYOffset > 300) {
        $(".page-header").addClass("page-header--open");

      }
      else if (window.pageYOffset > 100) {
        $(".page-header").addClass("page-header--fixed");

      } else {
        $(".page-header").removeClass("page-header--fixed");
        $(".page-header").removeClass("page-header--open");
 
      }
   }
 });
});
$(document).ready(function() { 
    $('#who-trigger').trigger( "click" );

 });

 $("#doctor").on('click', function(){
 $(".product-doctors").addClass('product-doctors--open');    
 })                  
$(".news-block__list-faq li").on('click', function(){
 $(this).find('.news-block__closet').toggleClass("news-block__closet--open");
 $(this).toggleClass("open");
 $(this).siblings('li').find('.news-block__closet').removeClass("news-block__closet--open");
 $(this).siblings('li').removeClass('open')
})
document.addEventListener( 'DOMContentLoaded', function () {
        var splide =new Splide( '#news-content', {
            direction   : 'ttb',
            type: 'loop',
            perMove: 1,
            heightRatio: 0.58,
            perPage: 5,
            autoplay: true,
            breakpoints: {
            1200: {
                    heightRatio: 0.72,
                    },
            1024: {
                heightRatio: 0.85,
                },
            768: {
                heightRatio: 0.6,
            },
            600: {
                heightRatio: 2,
            },
          }
           
            } ).mount();
        } );
