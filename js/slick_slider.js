$(document).ready(function() {
  $('.blog').slick({
    dots: true,
    dotsClass: "my-dots",
    arrows : false,
    vertical: true,
    autoplay:true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
  });
});