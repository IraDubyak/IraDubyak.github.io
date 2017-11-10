$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#start_change');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('#navbar').css('background-color', '#0f1011');
          $('#navbar').css('opacity', '0.8');
          $('#navbar').css('padding-top', '15px');
          $('#navbar').css('padding-bottom', '15px');
       } else {
          $('#navbar').css('background-color', 'transparent');
          $('#navbar').css('opacity', '1');
          $('#navbar').css('padding-top', '40px');
          $('#navbar').css('padding-bottom', '40px');
       }
   });

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