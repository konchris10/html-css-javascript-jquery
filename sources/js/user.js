// USER
// Module Block Pattern
var gek = window.gek || {};

gek.user = (function () {
'use strict';
// - - - - -
	// Deklaration
	var 
		fn = function () {},
	endvar;

	// Funktionsobjekte
	fn.login = function (data) {
		console.log('login!');

		var xhr = new XMLHttpRequest(); // W3!
		var onReadyStateChange = function () {};

		// var xhr = new ActiveXObject('MSXML2.0'); // MSIE only!

		// Funktionsobjekte
		onReadyStateChange = function () {

			switch (xhr.readyState) {
				case 0:
					console.log('Kein Ajax!');
					break;
				case 1:
					console.log('Ajax opened!');
					break;
				case 2:
					console.log('Ajax sent!');
					break;
				case 3:
					console.log('Response header received!');
					break;
				case 4:
					console.log('Resonse data received!');
					console.log(xhr.responseText);
					document.querySelector('main').innerHTML = xhr.responseText;
					break;
			};

		}; 

		//if (data.url && typeof data.url === 'string') {
		 xhr.addEventListener('readystatechange', fn.login.onReadyStateChange);
			
		 xhr.open('post', data.url);
		 xhr.send(data.data);


		//}

	};

	// Publikation
	return fn;
// - - - - -
})();