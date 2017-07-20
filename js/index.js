// allows hero to fill the screen
$(function() {
	$(window).on("load resize", function () {
		$(".fill-screen").css("height", window.innerHeight);
	});
	//initialize WOW for animation
	new WOW().init();
});

$(function() {
	//	js for animated menu button
	 $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
	 });
		// sliding carousel
	$('.carousel').carousel();
	$('#myCarousel').on('slide.bs.carousel', function () {
  });
});

