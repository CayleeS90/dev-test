

$(function () {
	// allows hero to fill the screen
	$(window).on("load resize", function () {
		$(".fill-screen").css("height", window.innerHeight);
	});
	//initialize WOW for animation
	new WOW().init();
	$(".navbar-toggle").on("click", function () {
	  $(this).toggleClass("active");
	});
		// sliding carousel
	$('.carousel').carousel();
	$('#myCarousel').on('slide.bs.carousel', function () {
  });
	//hover over quote
	$(".hover-over").hover(function () {
		$(this).find(".hover-over-container").show();
	}, function () {
		$(this).find(".hover-over-container").hide();
	});
	 //smooth scrolling
	$("nav a").bind("click", function () {
		$("html, body").stop().animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1500, "easeInOutExpo");
		event.preventDefault();
	});
});

