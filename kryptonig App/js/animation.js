$(window).scroll(function() {
  $('.reveal-img').each(function() {
     var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();

     if (imagePos < topOfWindow + $(window).height() - 100) {
        $(this).css('opacity', '1');
        $(this).css('transform', 'translateY(0)');
     }
  });
});