$(function () {
  $(".opening__text").fadeIn(100);

  $(window).on("load", function () {
    setTimeout(function () {
      $("#opening").fadeOut(1000);
      $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        arrows: false,
        fade: true,
        speed: 3000,
        touchMove: false,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover: false,
      });
    }, 3500);
  });
});
