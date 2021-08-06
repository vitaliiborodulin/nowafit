$('.popup-link').magnificPopup({
	type: 'image'
});

$('.popup-youtube').magnificPopup({
	// disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,

	fixedContentPos: false
});
