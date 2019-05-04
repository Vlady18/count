$(document).ready(function(){
  $('.slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 600,
	cssEase: 'linear',
	arrows: true,
	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  });
  $(window).on('scroll', function(){
  if( $(window).scrollTop()>670 ){
    $('.top_line').addClass('navbar-fixed-top');
  } else {
    $('.top_line').removeClass('navbar-fixed-top');
  }
});
   $(".slider").on('afterChange', function(event, slick, currentSlide){
     $(".digit_big").text(currentSlide + 1);
  });
  $('.but_icon').click(function(event){
  event.preventDefault();
  // $('#overlay').toggleClass('dbbl');
  $('#overlay').css({'top': '0px', 'opacity': '1'})
  $('.top_line').removeClass('navbar-fixed-top')
  $('body').css('overflow', 'hidden')
    $('html').css('overflow', 'hidden')
  });
  $('.close_br').click(function(event){
    event.preventDefault();
  	  $('#overlay').css({'top': '-1000px', 'opacity': '0'})
  $('body').css('overflow', 'auto')

    $('html').css('overflow', 'auto')

  });

 $("nav ul li").on("click","a", function (event) {
    // debugger;
    //console.log($(this).parent())
    if($(this).hasClass('parent_li')){
    	
      $(this).siblings('ul').toggleClass('dbbl');
    }
     else{
    	$('#overlay').removeClass('dbbl');
    }

  });


new WOW().init();

// $(window).scroll(function() {
// 		$('.box_info').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("fadeInUp");
// 			}
// 		});
// 		$('.photo').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("fadeInUp");
// 			}
// 		});
// 		$('.send_button').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("rollIn");
// 			}
// 		});
// 		$('.ab_img-item').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("rotateInUpLeft");
// 			}
// 		});
// 		$('.serv_left').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("bounceInUp");
// 			}
// 		});
// 		$('.serv_right').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("slideInRight");
// 			}
// 		});
// 		$('.wrap_advantages_first').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("slideInLeft");
// 			}
// 		});
// 		$('.wrap_advantages_sec').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("slideInRight");
// 			}
// 		});
// 		$('.doc_right-box').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("zoomIn");
// 			}
// 		});
// 		$('.wrap_water p').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("fadeInUp");
// 			}
// 		});
// 		$('.ques_main').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 			if (imagePos < topOfWindow+600) {
// 				$(this).addClass("fadeInLeft");
// 			}
// 		});
// });
});