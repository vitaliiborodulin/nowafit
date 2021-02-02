$('#blog-select').on('change', function(){
	let id = $('#blog-select').val();

	if (id == 'psyh') {
		title.text('Artykuły z psychologii');
	} else if (id == 'diet') {
		title.text('Artykuły żywieniowe');
	} else if (id == 'fit') {
		title.text('Artykuły fitness');
	} else if (id == 'all') {
		title.text('Wszystkie artykuły');
	}

	if (id == 'all'){
		$('.blog__item').show();
	} else {
		$('.blog__item').hide();
		let content = $('.blog__item[data-tab="'+ id +'"]');
		content.show();
	}

})