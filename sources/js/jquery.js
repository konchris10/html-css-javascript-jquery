// jQuery
(function ($) {
'use strict';
// - - - - -
	
	// Deklaration
	var fn = {};

	// Funktion
	fn = {
		loadPage :  	function (event) {
							var url;
							var request = undefined;

							console.log('click!');
							event.preventDefault();

							url = $( event.target ).attr('href');
							request = $.ajax({
								url  : url,
								type : 'post',
								dataType : 'html',

								// success  : function (response) {},
								// error    : function (xhr) {},
								before   : function () {},
								// complete : function () {}

							});
							request
								.done(   function (response) { $('main').html(response); } )
								.fail(   function ()         { console.log('fail!')})
								.always( function ()         { console.log('always!')})
								;

						},
		onSubmit : 		function (event) {
							console.log('submit!');
							event.preventDefault();
						}
	}
	// Eventlistener
	$(document).ready(function () {
		$('.nav').on('click', 'a[href]', {key : 'value'} ,fn.loadPage);

	});


// - - - - -
})(jQuery);

