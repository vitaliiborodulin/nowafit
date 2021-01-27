// var fixNav = 50;
// 	$(window).scroll(function () {
// 		var scroll = $(this).scrollTop();
// 		if (scroll >= fixNav) {
// 			$('.header').addClass('header--sticky');
// 		} else {
// 			$('.header').removeClass('header--sticky');
// 		}
// 	});

$('.header__menu a').on('click', function (e) {
	// e.preventDefault();

	$('.header__menu a').removeClass('active').filter(this).addClass('active');

	// var selector = $(this).attr('href');
	// var h = $(selector);

	// $('html, body').animate({
	// 	scrollTop: h.offset().top - 40
	// }, 400);

});