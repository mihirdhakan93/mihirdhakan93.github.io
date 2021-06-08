// Add background to navbar after hero image
$(window).on("scroll", function () {
  var hero = document.getElementById("hero");
  if ($(window).scrollTop() > hero.clientHeight) {
    $("nav").addClass("nav-bg");
  } else {
    $("nav").removeClass("nav-bg");
  }
});

// Only show the navbar when scrolling up and hide upon scroll down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 10) {
    document.getElementById("navbar").style.top = "0";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};

// for animating elements on scroll
$(function () {
  var $animation_elements = $(".animation-element");
  var $window = $(window);

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;
    var window_middle_position =
      (window_bottom_position + window_top_position) / 2;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_top_position = $element.offset().top;
      var element_trigger_position = element_top_position - 200;
      //check to see if this current container is within viewport
      if (element_trigger_position <= window_middle_position) {
        $element.addClass("trigger");
      }
    });
  }

  $window.on("scroll resize load", check_if_in_view);
});
