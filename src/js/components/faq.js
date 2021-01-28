// $('.faq__answer:first').show()
// $('.faq__question:first').addClass('faq__question--open');

$('.cource__question').on('click', function(){
	let question = $(this);
	let answer = $(this).next();

	$('.cource__question').not(question).removeClass('cource__question--open');
	question.toggleClass('cource__question--open');

	$('.cource__answer:visible').not(answer).slideUp(200);
	answer.slideToggle(200);

})