$(function () {
  $(".opening__text").fadeIn(600);
});
$(window).on("load", function () {
  var ww = $(window).width();
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
    $("#stories").slick({
      slidesToShow: ww > 767 ? 4 : 2,
      autoplaySpeed: 3000,
      dots: false,
      arrows: true,
      speed: 500,
      touchMove: true,
      swipe: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      infinite: false,
    });
  }, 2000);

  var headerHight = $("header").outerHeight();
  var hash = location.hash;
  if (hash) {
    $("body,html").stop().scrollTop(0);
    var target = $(hash == "#" || hash == "" ? "html" : hash);

    setTimeout(function () {
      var position = target.offset().top - headerHight;
      $("body,html").stop().scrollTop(position);
    }, 2000);
  }
});
