$('.blog__item').hide();
let attr = $('.blog__tab.blog__tab--active').attr('data-tab');
$('.blog__item[data-tab="'+ attr +'"]').show();

let title = $('.blog__title');

$('.blog__tab').on('click', function(){
	
	$('.blog__tab.blog__tab--active').removeClass('blog__tab--active');
	$(this).addClass('blog__tab--active');

	let id = $(this).attr('data-tab');

	if (id == 'psyh') {
		title.text('Artykuły z psychologii');
	} else if (id == 'diet') {
		title.text('Artykuły żywieniowe');
	}	else if (id == 'fit') {
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

});