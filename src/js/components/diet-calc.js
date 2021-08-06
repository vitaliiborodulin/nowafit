var calc = $('.diet-calculator');
var weeks = $('.diet-calculator #weeks');
var weight = $('.diet-calculator #weight');
var age = $('.diet-calculator #age');
var height = $('.diet-calculator #height');
var age = $('.diet-calculator #age');
var cal = $('.diet-calculator #cal');

// var resultDiv = calc.children().eq(1);

calc.on('click', '#return', function () {
    window.location.reload();
});

calc.on('submit', function (e) {
    e.preventDefault();

    var supportLevel = ((10 * parseInt(weight.val())) + (6.25 * parseInt(height.val())) - (5 * parseInt(age.val())) - 161) * parseInt(cal.val());
    // console.log('supportLevel:', supportLevel);

    var deficit = supportLevel * 0.25;
    // console.log('deficit:', deficit);

    var daysToKg = 7700 / deficit;
    // console.log('daysToKg:', daysToKg);

    var fatLoss = parseInt(weeks.val()) * 7 / daysToKg;
    // console.log('fatLoss:', fatLoss);

    var result = fatLoss + (parseInt(weight.val()) / 15);
    // console.log('result:', result);

    var finalResult = Math.round((result) * 100) / 100;
    calc.html('<div class="diet-calculator__result--wraper"><div class="diet-calculator__result"><div class="diet-calculator__score"><span>' + finalResult + '</span><span>kg</span></div><div class="diet-calculator__weeks"><span>' + weeks.val() + '</span><span>tygodni</span></div></div><div class="diet-calculator__disclaimer">* Wynik jest wynikiem przykładowym i może różnić się od rzeczywistości</div><button type="button" class="btn btn-w diet-calculator__btn" id="return">Powrót do obliczeń</button></div>');

    console.log('finalResult:', finalResult);

})
