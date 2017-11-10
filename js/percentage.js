    var brandingBar = new ProgressBar.Circle(branding,  {
          strokeWidth: 4,
          trailWidth: 2,
          trailColor: '#047378',
          from: { color: '#19bd9a', width: 4 },
          to: { color: '#19bd9a', width: 4 },
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
              
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText("<span class=\"value\">" + (-value) + "</span>" + "<span class=\"percents\">%</span>");
            }
          }
        });
        
        
        var webDesignBar = new ProgressBar.Circle(web_design,  {
          strokeWidth: 4,
          trailWidth: 2,
          trailColor: '#047378',
          from: { color: '#19bd9a', width: 4 },
          to: { color: '#19bd9a', width: 4 },
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
              
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText("<span class=\"value\">" + (-value) + "</span>" + "<span class=\"percents\">%</span>");
            }
          }
        });
        

        
        var uiUxBar = new ProgressBar.Circle(ui_ux,  {
          strokeWidth: 4,
          trailWidth: 2,
          trailColor: '#047378',
          from: { color: '#19bd9a', width: 4 },
          to: { color: '#19bd9a', width: 4 },
          step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
              
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
              circle.setText('');
            } else {
              circle.setText("<span class=\"value\">" + (-value) + "</span>" + "<span class=\"percents\">%</span>");
            }
          }
        });
        
$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
       brandingBar.animate(-0.8);
       webDesignBar.animate(-0.75); 
       uiUxBar.animate(-0.6);  
   }
});

  