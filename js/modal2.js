

// Получить модальный

var modalcallback = document.getElementById("modal-callback");
// Получить кнопку, которая открывает модальный

var btncallback = document.getElementById("button-callback");

// Получить элемент <span>, который закрывает модальный
var sv = document.getElementsByClassName("modal__close")[0];

var but = document.getElementById("contact");

function clearInputs() {
	var inputs = document.getElementsByTagName('input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].value = '';
	}
}



// Когда пользователь нажимает на кнопку, откройте модальный

but.onclick = function () {
	
	clearInputs();
}

btncallback.onclick = function () {
	modalcallback.style.display = "block";
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно

sv.onclick = function () {
	modalcallback.style.display = "none";
	clearInputs();
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его

window.onclick = function (event) {
	if (event.target == modalcallback) {
		modalcallback.style.display = "none";
	}
}

let firstname = document.getElementById("name");
let tel = document.getElementById("tel-number");
let comment = document.getElementById("comment");


but.addEventListener('click', function () {
	let val = firstname.value;
	let ad = tel.value;
	if (val, ad) {
		
	} else {
		alert("Введите имя и номер телефона!");
	}
});



