// INTERFACE

var gek = window.gek || new Object();

gek.interface = (function ($, window, document) {
'use strict'; // PFLICHT!
// - - - - -
	// Deklaration / Inititalisierung
	var 
		DEBUG = true,
		fn = {},
		loadContent = function () {},
	endvar;

	// Funktionsobjekte
	fn.log = function (m) {
		if (DEBUG) {
			console.log(m);
		};
	};
	fn.loadContent = function (url) {
		var request = undefined;

		request = $.ajax({
			url      : url,
			type     : 'get',
			dataType : 'xml', // 'html', 'xml', 'script', 'json', 'jsonp'

			data : {key : 'value'}

		});

		request
			.done(function (response) {
				fn.log('ajax success!');
				fn.log(response);
				// fn.setContent(response);
			})
			.fail(function (xhr, state, errorThrown) {
				fn.log('ajax error!' + state);
			})
			.always(function () {
				fn.log('ajax always!');
			});
	};
	fn.setContent = function (response) {
		fn.log(response);

		$('.content-main main')
			.hide()
			.prepend(response)
			.fadeIn(1000)
			;

		// var context = document.querySelector('.content-main main');
		// context.innerHTML = response;
	};

	// Eventhandler

	fn.onClick = function (event) {
		var url = undefined;

		event.preventDefault();
		event.stopPropagation();

		fn.log(event.target);

		url = event.target.getAttribute('href');
		fn.loadContent(url);

		jQuery('.nav').off('click','a', gek.interface.onClick);

	};


	// Publikation
	return fn;
// - - - - -
})(jQuery, window, document);

gek.interface.log('hallo Interface!');


jQuery(document).ready(function () {
'use strict';
// - - - - -

	// Eventlistener
	jQuery('.nav').one('click','a', gek.interface.onClick);

// - - - - -
});


// // DOM Prüfung, um DOM Zugriffe zu gewährleisten!
// window.onload = function () {
// 	// Eventlistener
// 	var collection = document.querySelectorAll('.nav');
	
// 	for (var i=0; i<collection.length; i++) {
// 		collection[i].addEventListener(
// 			'click',                   // Eventtyp
// 			gek.interface.onClick,     // Eventhandler
// 			true                      // useCapturing?
// 		);
// 	}
// };









