// AJAX

var gek = window.gek || new Object();

gek.ajax = (function () {
'use strict';
// - - - - -
	// Deklaration / Inititalisierung
	var 
		DEBUG = true,
		fn    = {},
		xhr   = new XMLHttpRequest(),
	endvar;

	// Funktionsobjekte

	// Eventhandler
	fn.log = function (m) {
		if (DEBUG) {
			console.log(m);
		};
	};

	fn.onReadyStateChange = function (event) {
		fn.log('ready state changed!');

		switch (xhr.readyState) {
			case 0:
				fn.log('no ajax!');
				break;
			case 1:
				fn.log('ajax opened!');
				break;
			case 2:
				fn.log('ajax sent!');
				break;
			case 3:
				fn.log('header response received!');
				break;
			case 4:
				fn.log('ajax response completed!');
				gek.interface.setContent(xhr.responseText);
				break;
		};
	};

	fn.loadContent = function (url) {
		xhr.open('GET', url);
		xhr.send();

		xhr.addEventListener('readystatechange', fn.onReadyStateChange);
	};

	// Publikation
	return fn;
// - - - - -
})();

gek.ajax.log('hallo Ajax!');











