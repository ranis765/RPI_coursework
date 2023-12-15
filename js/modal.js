// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var modalOpen = document.getElementById("auditbutton");

// Получить элемент <span>, который закрывает модальный
var modalClose = document.getElementsByClassName("modal__close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
modalOpen.onclick = function () {
	modal.style.display = "block";
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно
modalClose.onclick = function () {
	modal.style.display = "none";
}
// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}







