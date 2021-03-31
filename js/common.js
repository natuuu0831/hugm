$(function () {
  $("main, header, footer").hide();
  $(".menu-trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnav").stop().fadeToggle();
  });
  var headerHight = $("header").outerHeight();
  $(document).on("click", 'a[href^="#"]', function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);

    var position = target.offset().top - headerHight;
    $("html, body").animate({ scrollTop: position }, 550, "swing");
    return false;
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
function footer(rootDir) {
  $.ajax({
    url: rootDir + "include/footer.html",
    cache: false,
    async: false,
    dataType: "html",
  }).done(function (data) {
    data = data.replace(/\{\$root\}/g, rootDir);
    document.write(data);
  });
}
function header(rootDir) {
  $.ajax({
    url: rootDir + "include/header.html",
    cache: false,
    async: false,
    dataType: "html",
  }).done(function (data) {
    data = data.replace(/\{\$root\}/g, rootDir);
    document.write(data);
  });
}
