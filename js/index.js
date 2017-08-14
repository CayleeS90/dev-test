// allows hero to fill the screen
$(function () {
	$(window).on("load resize", function () {
		$(".fill-screen").css("height", window.innerHeight);
	});
	//initialize WOW for animation
	new WOW().init();
});
//	js for animated menu button
$(function () {
	$(".navbar-toggle").on("click", function () {
	$(this).toggleClass("active");
	});
		// sliding carousel
	$('.carousel').carousel();
	$('#myCarousel').on('slide.bs.carousel', function () {
  });
});
//hover over quote
	$(".hover-over").hover(function() {
			$(this).find(".hover-over-container").show();
		}, function() {
			$(this).find(".hover-over-container").hide();
		});

