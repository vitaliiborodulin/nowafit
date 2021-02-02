const agree = $('#feed-check');
const submitBtn = $('.feedback__btn');
const agreeText = $('.feedback__agree-text');

agree.on('change', function(){
	if (agree.prop('checked')) {
		submitBtn.attr('disabled', false);
		agreeText.removeClass('feedback__agree--error');
	} else {
		submitBtn.attr('disabled', true);
		agreeText.addClass('feedback__agree--error');
	}
})