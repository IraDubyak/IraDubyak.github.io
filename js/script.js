$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#navbar").addClass("scrolling");
    } else {
        $("#navbar").removeClass("scrolling");
    }
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 1000, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
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

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.menu li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
function myFunction() {
    var x = document.getElementById("navbar");
    if ((x.className === "navbar_menu")||(x.className === "navbar_menu scrolling")) {
        x.className += " responsive";
    } 
    else {
        x.className = "navbar_menu scrolling";
    }
}
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") {
    c = "";
  } 
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      addClass(x[i], "show");
    } 
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

$(".tab").click(function (e) {
    $(this).addClass("active").siblings().removeClass("active");
});

$(".menu li:not(:first-child)").click(function (e) {
    $(".filterDiv").addClass("change_height");
});

$(".menu li:first-child").click(function (e) {
    $(".filterDiv").removeClass("change_height");
});
function initMap() {

    var uluru = {lat: 51.522556, lng: 0.031546};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        mapTypeControl:false,
        panControl: false,
        mapTypeControl:false,
        overviewMapControl:false,
        rotateControl:false,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_TOP
        },
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.LARGE,
          position: google.maps.ControlPosition.LEFT_CENTER
        },
            
        fullscreenControl: true ,
        fullscreenControlOptions: {
            position: google.maps.ControlPosition.TOP_LEFT ,
        } ,
          styles: [
            {
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "elementType": "labels.icon",
              "stylers": [
                {
                  "visibility": "off"
                }
              ]
            },
            {
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "elementType": "labels.text.stroke",
              "stylers": [
                {
                  "color": "#f5f5f5"
                }
              ]
            },
            {
              "featureType": "administrative.land_parcel",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#bdbdbd"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "poi",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "poi.park",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#ffffff"
                }
              ]
            },
            {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#757575"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#dadada"
                }
              ]
            },
            {
              "featureType": "road.highway",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#616161"
                }
              ]
            },
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            },
            {
              "featureType": "transit.line",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#e5e5e5"
                }
              ]
            },
            {
              "featureType": "transit.station",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#eeeeee"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "geometry",
              "stylers": [
                {
                  "color": "#c9c9c9"
                }
              ]
            },
            {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                {
                  "color": "#9e9e9e"
                }
              ]
            }
        ]
        });
          
        var imageMarker = 'images/map-marker.svg';
        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: imageMarker
        });
    }
        var brandingBar = new ProgressBar.Circle(branding, {
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
   if (wS > (hT+hH-wH)){
       brandingBar.animate(-0.8);
       webDesignBar.animate(-0.75); 
       uiUxBar.animate(-0.6);  
   }
});
