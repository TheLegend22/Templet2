// global $, console, alert
$(function () {

	'use strict';

	// Adjust Header Height
	var myHeader     = $('.header'),

		myBxSlider   = $('.bxslider');

	myHeader.height($(window).height());

	$(window).resize(function () {

		myHeader.height($(window).height()); 

		myBxSlider.each(function() {

		$(this).css('paddingTop', ( $(window).height() - $('.bxslider li').height() ) / 2);

	});
	});

	// Links Add Actives Class
	
	$('.links li a').click(function () {
		
		$(this).parent().addClass('active').siblings().removeClass('active');

	});

	// Adjust Bxslider List Item Center
	
	myBxSlider.each(function() {

		$(this).css('paddingTop', ( $(window).height() - $('.bxslider li').height() ) / 2);

	});

	// Bxslider

	myBxSlider.bxSlider({
	
	pager : false

	});

	// Smooth Scroll To Div
	
	$('.links li a').click(function() {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top

		}, 1000);
	});


	// Slider Testimonials 

	(function autoSlider() {

		$('.slider .active').each(function() {

			if (!$(this).is(':last-child')) {

				$(this).delay(3000).fadeOut(1000, function() {

					$(this).removeClass('active').next().addClass('active').fadeIn();

					autoSlider();
				});

			} else {

				$(this).delay(3000).fadeOut(1000, function() {

					$(this).removeClass('active');

					$('.slider div').eq(0).addClass('active').fadeIn();

					autoSlider();

				});

			}

		});

	}());

	// Start Shuffle MixItUp

	var mixer = mixitup('#items');

	//  Adjust Shuffle Links

	$('.shuffle li').click(function() {
		
		$(this).addClass('selected').siblings().removeClass('selected');				
	});


	// Start niceScroll

	$('body').niceScroll({

		cursorcolor : "#ff0333",
		cursorwidth: "10px",
		scrollspeed : 250,
	});	

}); 











