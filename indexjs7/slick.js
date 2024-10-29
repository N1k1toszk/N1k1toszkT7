"use strict"
$(document).ready(function () {
	$(".gallery").slick({
		dots: true,
		infinite: true,
		speed: 100,
		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: $('#prev'),
		nextArrow: $('#next'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			}
		]
	});
});