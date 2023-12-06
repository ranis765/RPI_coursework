$(document).ready(function() {
	$('.header__burger').click(function() {
	  $('.header__burger,.header__nav').toggleClass('active'); /*тоггл - при клике добавляет/убирает класс active*/
	  $('body').toggleClass('lock'); /*тоже самое с тегом Body*/
	});
  });