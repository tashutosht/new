// Smooth scrolling for anchor links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  
  // Toggle navigation menu on mobile
  $(document).ready(function() {
    $('.menu-toggle').on('click', function() {
      $(this).toggleClass('open');
      $('.nav').toggleClass('open');
    });
  });
  