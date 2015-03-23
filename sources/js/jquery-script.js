
var app = window.app || new Object();

app.interface = (function ($) {
'use strict';
// - - - - -

	var 
		fn = {},
		request = undefined,
		buildUser = function () {},

	endvar;

	$.ajaxSetup({
				type     : 'post',
				dataType : 'json'
		  });

	buildUser = function (data, target) {


		$(target).empty();
		$('<p>').html(data.username).hide().appendTo(target).fadeIn(1000);
	};

	fn = {
		onSubmit : function (event) {
			console.log('jQuery on Submit!');
			event.preventDefault();


			request = $.ajax($(event.target).attr('action'));
			request
				.done(function (response) {
					console.log('ajax success!');
					buildUser(response, 'aside');
				})
				.fail(function (xhr) {
					console.log('ajax fail!');
				})
				.always(function () {
					console.log('ajax always!');
				});


		},
		onClick  : function (event) {
			console.log('jQuery on Click!');
			event.preventDefault();

			console.log(event.data);
		},
	};


	return fn;
// - - - - -
})(jQuery);


$(document).ready(function () {

	// Eventlistener mit jQuery
	$('form').on('submit', app.interface.onSubmit);
	$('nav').on('click', 'a[href]', {key:'value'}, app.interface.onClick);

});
