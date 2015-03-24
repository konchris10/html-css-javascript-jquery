// JAVASCRIPT

// Einfache Objekttypen -> call by value
// number ist ein 64 bit float (aka double float)
var a = 1;
var b = 'hallo Welt';
console.log(a+a+b);
a = true;


// Komplexe Objekttypen -> call by reference
a = {
	key1 : 'value',
	key2 : 'value'
};


a = {
	"key1" : "value",
	"key2" : "value"
};


a = [true, "zwei", 3];
b = 2;

c = function (a) {
	console.log(a);
};


c(b);

console.log(typeof c) ;


// Objektbasiertheit
window = function () {
	var document;
	var navigator;

	document.body;
	document.images[0];
	document.forms[0];
	document.anchors[0];




	var a = 2;
	console.log(a);

}

window = undefined;
console.log('- - - - -')
var d;

console.log(d);
console.log(typeof d);

var e = '';
if (!e) { console.log('e gibt es nicht ...')};

console.log(e);
console.log(typeof e);

// for (var member in window) {
// 	console.log(member + ' [' + typeof window[member] + ']');
// }

// Falsy values
// false, null, undefined, '', 0


console.log(false === '0');















