$('.sert__list').owlCarousel({
	loop: true,
	nav: true,
	margin: 10,
	dots: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		780: {
			items: 2
		},
		1000: {
			items: 3
		}
	}
})

$('.reviews__list').owlCarousel({
	loop: true,
	margin: 15,
	dots: true,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		540: {
			items: 2,
		},
		780: {
			items: 3,
		},
		1000: {
			items: 4
		},
		1450: {
			items: 5,
			// slideBy: 1
		}
	}
});

// reviewsCount = $('.reviews__item').length;
// reviewsChange.attr('max', reviewsCount - 1);


// reviewsSlider.on('changed.owl.carousel', function (event) {
// 	console.log(event.item.index);
// 	reviewsChange.val(event.item.index);

// });

// reviewsChange.on("change", function (e) {
// 	e.preventDefault();
// 	console.log(reviewsChange.val());
// 	reviewsSlider.trigger('to.owl.carousel', [reviewsChange.val(), 1, true]);
// });