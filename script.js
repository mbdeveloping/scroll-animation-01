
    // $(function () { // wait for document ready
    //     let controller = new ScrollMagic.Controller();

	// 	// build scene
	// 	let scene = new ScrollMagic.Scene({triggerElement: "#main-wrapper", duration: 1228})
	// 					.setPin("#main-wrapper")
	// 					.addIndicators({name: "1 (duration: 1228)"}) // add indicators (requires plugin)
	// 					.addTo(controller);
	// });

	const animBtn = $('#anim-btn');
	const circle1 = $('#circle-1');
	const circle2 = $('#circle-2');
	const circle3 = $('#circle-3');
	const circle4 = $('#circle-4');

	animBtn.on('click', () => {
		console.log('animating');
		TweenMax.to(circle1, 1, {y: ($('#circle-1-pos').offset().top - circle1.offset().top) - circle1.height() / 2});
		TweenMax.to(circle2, 1, {y: ($('#circle-2-pos').offset().top - circle2.offset().top) - circle2.height() / 2});
		TweenMax.to(circle3, 1, {y: ($('#circle-3-pos').offset().top - circle3.offset().top) - circle3.height() / 2});
		TweenMax.to(circle4, 1, {y: ($('#circle-4-pos').offset().top - circle4.offset().top) - circle4.height() / 2});
	})

	$(window).on('scroll', () => {
		TweenMax.to(circle1, .1, {y:$(window).scrollTop() * 0.8 - (circle1.height() / 2)});
		TweenMax.to(circle2, .1, {y:$(window).scrollTop() * 0.9 - (circle2.height() / 2)});
		TweenMax.to(circle3, .1, {y:$(window).scrollTop() * 1 - (circle3.height() / 2)});
		TweenMax.to(circle4, .1, {y:$(window).scrollTop() * 1.1 - (circle4.height() / 2)});
	});