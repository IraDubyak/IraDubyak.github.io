$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#navbar").addClass("scrolling");
    } else {
        $("#navbar").removeClass("scrolling");
    }
});

$(document).ready(function(){    
  $('.up_button').hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 20) {
      $('.up_button').fadeIn();
    } else {
      $('.up_button').fadeOut();
    }
  });

  $('.up_button').click(function() {
    $('body, html').animate({scrollTop: 0}, 800);
  });

  $('.down_button').click(function() {
    $('body, html').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

function myFunction() {
    var x = document.getElementById("navbar");
    if ((x.className === "navbar_menu")||(x.className === "navbar_menu scrolling")) {
        x.className += " responsive";
    } 
    else {
        x.className = "navbar_menu scrolling";
    }
}