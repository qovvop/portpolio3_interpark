/* 이벤트 기획전 1 */

$(function() {
	function prevsub1() {
		$('.re_slide1 li:last').prependTo('.re_slide1 ul');
		$('.re_slide1 ul').css({marginLeft:-160}); 
		$('.re_slide1 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub1() {
		$('.re_slide1 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide1 li:first').appendTo('.re_slide1 ul');
			$('.re_slide1 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub1() {
		$('.re_slide1 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide1 li:first').appendTo('.re_slide1 ul');
			$('.re_slide1 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub1, 4000);

	$('.sub1_prev').click(function () {
		prevsub1();
	});

	$('.sub1_next').click(function () {
		nextsub1();
	});
});



/* 이벤트 기획전 2 */

$(function() {
	function prevsub2() {
		$('.re_slide2 li:last').prependTo('.re_slide2 ul');
		$('.re_slide2 ul').css({marginLeft:-160}); 
		$('.re_slide2 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub2() {
		$('.re_slide2 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide2 li:first').appendTo('.re_slide2 ul');
			$('.re_slide2 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub2() {
		$('.re_slide2 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide2 li:first').appendTo('.re_slide2 ul');
			$('.re_slide2 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub2, 4000);

	$('.sub2_prev').click(function () {
		prevsub2();
	});

	$('.sub2_next').click(function () {
		nextsub2();
	});
});



/* 이벤트 기획전 3 */

$(function() {
	function prevsub3() {
		$('.re_slide3 li:last').prependTo('.re_slide3 ul');
		$('.re_slide3 ul').css({marginLeft:-160}); 
		$('.re_slide3 ul').stop().animate({ marginLeft: 0 }, 800);
	}

	function nextsub3() {
		$('.re_slide3 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide3 li:first').appendTo('.re_slide3 ul');
			$('.re_slide3 ul').css({ marginLeft: 0 });
		});
	}

	function slidesub3() {
		$('.re_slide3 ul').stop().animate({ marginLeft: -160 }, function () {
			$('.re_slide3 li:first').appendTo('.re_slide3 ul');
			$('.re_slide3 ul').css({ marginLeft: 0 });
		});
	}

	setInterval(slidesub3, 4000);

	$('.sub3_prev').click(function () {
		prevsub3();
	});

	$('.sub3_next').click(function () {
		nextsub3();
	});
});