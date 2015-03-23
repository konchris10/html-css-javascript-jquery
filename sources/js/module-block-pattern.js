// Scopes in Javascript

// Imediate Evoked Function Expression (IEFE)
// Selbstausführende Funktion

var app = window.app || new Object();

app.interface = (function () {
'use strict';
// - - - - -
//
	// Deklaration, Initialisierung
	var 
		a = undefined,
		b = undefined,
		log       = function () {},
		buildUser = function () {},
		fn  = {},
	endvar;

	// Funktionsobjekte
	buildUser = function (data, target) {
		var content = undefined;

		var obj = document.createElement('p');
		obj.setAttribute('class', 'user');

		var txt1 = document.createTextNode(data.username);
		var txt2 = document.createTextNode(data.last);

		obj.appendChild(txt1);
		obj.appendChild(txt2);

		document.querySelector(target).innerHTML = '';
		document.querySelector(target).appendChild(obj);
	};

	// Eventhandler
	fn = {
		onSubmit : 	function (event) {
						console.log('interface submit');
						
						var 
							xhr  = undefined,
							url  = undefined,
							data = {},
						endvar;


						event.preventDefault();
						// Daten sammeln
						data.email    = document.querySelector('#f-email').value;
						data.password = document.querySelector('#f-password').value;

						// Per AJAX die login.php laden
						url = event.target.getAttribute('action');

						xhr = new XMLHttpRequest();

						xhr.open('post', url);
						xhr.send(data);

						xhr.onreadystatechange = function () {
							switch (xhr.readyState) {
								case 0:
									console.log('kein ajax!');
									break;
								case 1:
									console.log('ajax opened!');
									break;
								case 2:
									console.log('ajax sent!');
									break;
								case 3:
									console.log('ajax head response!');
									break;
								case 4:
									console.log('ajax ready!');	
									// JSON parsen = deserialisieren
									data = JSON.parse(xhr.responseText);
									buildUser(data, 'aside');
									break;


							}
						};

					},
		onClick  : 	function (event) {
						console.log('interface click');
						event.preventDefault();
						event.stopPropagation();


						// for (var member in event) console.log(member);

					},
	};

	// Publikation
	return fn;

// - - - - -
})();

window.onload = function () {
'use strict';
// - - - - -

	// Eventlistener
	var collection = document.querySelectorAll('form[action*=login]');
	for (var i=0; i<collection.length; i++) {
		collection[i].addEventListener('submit', app.interface.onSubmit);
	}

	var navs = document.querySelectorAll('.nav');
	for (var i=0; i<navs.length; i++) {
		navs[i].addEventListener('click', app.interface.onClick);
	}

// - - - - -
};













