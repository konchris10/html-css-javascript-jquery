// SCOPES in Javascript

var app = window.app || new Object();


app.interface = (function () {
	var fn = {};

	fn.log = function (m) {
		console.log(m);
	};

	return fn;
})();

app.interface.log('hallo Objekt!');