var $h1Below = $('<h1>');
var $h1Above = $('<h1>');
var $liAbove = $('<ul>');
var $liBelow = $('<ul>');

$h1Below.html('Below ground veggies');
$('body').append($h1Below);
$('body').append($liAbove);

$h1Above.html('Above ground veggies');
$('body').append($h1Above);
$('body').append($liBelow);

$('ul li').each(function () {
  if ($(this).hasClass('below')) {
    $liAbove.append($(this));
  } else {
    $liBelow.append($(this));
  }
});
