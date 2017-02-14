$(document).ready(function(){

	$(window).scroll(function(){
		if($('.navbar').offset().top > 50){
			$('.navbar-fixed-top').addClass('top-nav-collapse');
		}else{
			$('.navbar-fixed-top').removeClass('top-nav-collapse');
		}
	})

	$('.page-scroll a').on('click', function(){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $((anchor).attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	})
})