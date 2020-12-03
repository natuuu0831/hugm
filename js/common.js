$(function () {
  $("body").hide();
  $(window).on("load", function () {
    $("body").fadeIn(2000);
  });
  var flug = true;
  $(window).on("scroll", function () {
    if(!flug) return;
    setTimeout(function(){
      $('[class^="scroll"]').each(function () {
        var height = window.parent.screen.height;
        var scrollTop = $(window).scrollTop();
        var scrollBtm = scrollTop + height - height / 2;
        var targetTop = $(this).offset().top;
        var targetBtm = targetTop + height;
        console.log(scrollBtm, targetTop)
        if (scrollBtm > targetTop && scrollTop < targetBtm) {
          $(this).addClass("scrollIn");
        } else {
          $(this).removeClass("scrollIn");
        }
      });
      flug = true;
      return flug;
    }, 200);
  });
});
