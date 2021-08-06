var $card = $('.program__card');
var lastCard = $(".program__list .program__card").length - 1;

var dayText = $('.program__buttons > span');
var day = 0;

var programNext = function () {
    var prependList = function () {
        if ($('.program__card').hasClass('activeNow')) {
            var $slicedCard = $('.program__card').slice(lastCard).removeClass('transformThis activeNow');
            $('.program__list').prepend($slicedCard);
        }
    }
    $('.program__card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');

    setTimeout(function () {
        prependList();

        $card.each(function (index, item) {
            if ($(item).hasClass('activeNow')) {
                day = $(item).find('.program__day').text();
                dayText.text(day);
            }
        });

    }, 150);
}

var programPrev = function () {
    var appendToList = function () {
        if ($('.program__card').hasClass('activeNow')) {
            var $slicedCard = $('.program__card').slice(0, 1).addClass('transformPrev');
            $('.program__list').append($slicedCard);
        }
    }

    $('.program__card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');

    setTimeout(function () {
        appendToList();

        $card.each(function (index, item) {
            if ($(item).hasClass('activeNow')) {
                day = $(item).find('.program__day').text();
                dayText.text(day);
            }
        });

    }, 150);
}

$('.program__button--next').on('click', function (e) {
    e.preventDefault();
    clearInterval(programTimer);
    programNext();
});

$('.program__button--prev').on('click', function (e) {
    e.preventDefault();
    clearInterval(programTimer);
    programPrev();
});

var programTimer = setInterval(programNext, 3000);
