$('.cource__answer:first').show();
$('.cource__question:first').addClass('cource__question--open');

$('.cource__question').on('click', function(){
	let question = $(this);
	let answer = $(this).next();

	$('.cource__question').not(question).removeClass('cource__question--open');
	question.toggleClass('cource__question--open');

	$('.cource__answer:visible').not(answer).slideUp(200);
	answer.slideToggle(200);

})