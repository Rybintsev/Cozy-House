$('#burger').on('click', function() {
	$('.topnav-item__burger,.topnav-item__menu').toggleClass('active');
	$('body').toggleClass('lock');
});

$(document).ready(function() {
	$('.pets__slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:3,
		slidesToScroll:1,
		speed:500,
		autoplay:true,
		autoplaySpeed:2500,
		easeing: "ease",
		responsive:[
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 2,
				}
			},{
				breakpoint: 1100,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
});

$('a').click(function() {
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 700);
	return false;
});
