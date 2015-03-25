// Das Module Block Pattern
// Scopes und das IEFE - Immediate Evoked Function Expression Pattern

var gek = window.gek || new Object();


gek.interface = (function () {
	var 
		a  = 1,   // privat!
		fn = {},  // public
	endvar;

	fn.log = function (m) {
		console.log(m);
	};

	return fn;
})();

gek.interface.log('hallo Objekt!');

gek.interface.a // undefined