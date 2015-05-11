// JAVASCRIPT

// Objektbasiert!

a = 1;

// Einfachen Variablen
// Call by Value
var a = 1; // Number
a = 'Wert';
a.concat('b');

a += 'b';
a = true;

console.log('1' !== 1);


function b (a) {
	return a;
}

// Komplexe Typen
// Call by Reference
var obj = {
	key1 : 	'value',
	key2 : 	function (a) {
				return a;
			},
};

var arr = [true, 'zwei', 3];
console.log(arr.length);

// Funktionales Objekt
var fn = function () {};
console.log(typeof fn);


// Funktionen
function log (m) {
	console.log(m);
}




