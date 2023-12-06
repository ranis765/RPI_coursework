

// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("auditbutton");


// Получить элемент <span>, который закрывает модальный
var svg = document.getElementsByClassName("modal__close")[0];



// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function () {
	modal.style.display = "block";
}


// Когда пользователь нажимает на <span> (x), закройте модальное окно
svg.onclick = function () {
	modal.style.display = "none";
	
}


// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}


}







