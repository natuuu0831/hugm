$(function () {
  $(".opening__text").fadeIn(600);
});
$(window).on("load", function () {
  setTimeout(function () {
    $("#opening").fadeOut(1000);
    $("main, header, footer").fadeIn(2000);
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
  }, 4500);
});
