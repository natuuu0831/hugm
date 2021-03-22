
/*----- Radio Botton -----*/
$(function() {
  $('[name="buy"]:radio').change( function() {
    if($('[id=select_radio1]').prop('checked')){
      $('.cart_btn_area').hide();
      $('.btn_area01').show();
    } else if ($('[id=select_radio2]').prop('checked')) {
      $('.cart_btn_area').hide();
      $('.btn_area02').show();
    } 
  });
});


/*----- Slick Option -----*/
$(function() {
$('.slide-box .slides').slick({
      autoplay:true,
      infinite: true,
      dots: true,
      arrows: true,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
 });
});