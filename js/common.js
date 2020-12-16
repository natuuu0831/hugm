$(function () {
  $("main, header, footer").hide();
  $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnav").stop().fadeToggle();
  });
});

$(window).on("load", function () {
  $("#main, #header, #footer").fadeIn(2000);
});

var flug = true;
$(window).on("scroll", function () {
  if (!flug) return;
  setTimeout(function () {
    $('[class^="scroll"]').each(function () {
      var height = window.parent.screen.height;
      var scrollTop = $(window).scrollTop();
      var scrollBtm = scrollTop + height - height / 2;
      var targetTop = $(this).offset().top;
      if (scrollBtm > targetTop) {
        $(this).addClass("scrollIn");
      }
    });
    flug = true;
    return flug;
  }, 200);
});
/*----- include -----*/
function footer() {
  $.ajax({
    url: "/include/footer.html",
    cache: false,
    async: false,
    dataType: "html",
  }).done(function (data) {
    document.write(data);
  });
}
function header(){
  $.ajax({
    url: "/include/header.html",
    cache: false,
    async: false,
    dataType: 'html'
  }).done( function(data){
    document.write(data);
  });
}
