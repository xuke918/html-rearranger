var $h1Below = $('h1');
var $h1Above = $('h1');
var $liAbove = $('.above');
var $liBelow = $('.below');

$h1Below.html('Below ground veggies');
$('body').prepend('<h1>Below ground veggies</h1>');

$h1Above.html('Adove ground veggies');
$('body').append('<h1>Above ground veggies</h1>');

$('ul').append($liAbove);
