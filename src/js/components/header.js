var fixNav = 50;
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		if (scroll >= fixNav) {
			$('.header').addClass('header--sticky');
		} else {
			$('.header').removeClass('header--sticky');
		}
	});