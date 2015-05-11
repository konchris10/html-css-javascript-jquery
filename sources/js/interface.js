// INTERFACE
// Module Block Pattern
var gek = window.gek || {};

gek.interface = (function (user) {
'use strict';
// - - - - -
	// Deklaration
	var 
		fn    = function () {},
		data  = {},
	endvar;

	// Funktionsobjekte
	fn.onSubmit = function (event) {
		console.log('submit!');
		event.preventDefault();

		data.url    = event.target.getAttribute('action');
		data.target = event.target;
		data.data   = {key : 'value'};
		// - - - -
		user.login(data);
	};

	fn.onClick = function (event) {
		console.log('click!');
		event.preventDefault();
	};

	

	// Publikation
	return fn;
// - - - - -
})(gek.user);


window.onload = function () {
	// Variablendeklaration
	var
		collection = [],
	endvar;
	// Eventlistener
	document
		.querySelector('#form-login')
		.addEventListener('submit', gek.interface.onSubmit );

	collection = document.querySelectorAll('.nav');
	for (var i=0; i<collection.length; i++) {
		collection[i].addEventListener('click', gek.interface.onClick);
	}

}
