// Javascript ist objektbasiert

// Global unamed object
//function () {};



// Einfache Objetkttypen -> call by value
var a = 1;
var a = 3.141592;
var a = true;
var a = 'Wert';
a.concat('neuer Wert');
a = a + 'neuer Wert';

var a = new Number(1);
var a = new String('1');
var a = new Boolean(true);
var a = new Object();
var a = new Array();
var a = new Function();

console.log(a.length);


// Komplexe Objekttypen -> call by reference
var a = {};
console.log(typeof a);
a = {
	key : 'value',
	obj : { key : 'value' },
	arr : [true, 'zwei', 3]
};
a.key;
for (var member in a) {
	console.log(member);
	console.log(a[member]);
}


var a = [true, 'zwei', 3];
console.log(typeof a);
console.log(a[0]);

for (var i=0; i<a.length; i++) {

}

var a = function () {
	var log = function () {};
};
a.log();
a();


function a () {};


var a = [1,2,3];
a.length



Math.abs();
Math.PI;

var d = new Date()
RexExp();

JSON.parse()
JSON.stringify()

// DOM Javascript für den Browser
window
	document
		head
		body
		images[]
		forms[]
		anchors[]
		getElementById()
		getElementsByClassName()
		getElementsByTagName()
		querySelector()
		querySelectorAll()
		geolocation
			coords
				len
				lat
	navigator
	setTimeout()
	setInterval()
















