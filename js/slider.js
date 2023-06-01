/**  슬라이드 왼쪽_마우스를올려 확인해주세요_팝업 **/
$(function(){
    $('.mOverBanner').click(function(){
        $(this).find('.mOverBanner_pop').stop().fadeToggle();
    });
    $('.mOverBanner_popButton img').click(function(){
        $('.mOverBanner_pop').stop().fadeOut();
    });
});

/** 슬라이드 이전,다음버튼 hover**/
$(function(){
    $('.slideList').hover(function(){
        $('.slideButton-prev').stop().show();
        $('.slideButton-next').stop().show();
    }, function(){
        $('.slideButton-prev').stop().hide();
        $('.slideButton-next').stop().hide();
    });
});

/** 슬라이드_메인_이전,다음버튼 클릭 **/
$(function(){
    $('.slideMain_wrap').not(":first").hide();

    $('.slideButton-next').click(function(){
        var slideNow = $('.slideMain_wrap:visible');
        var slideNext = slideNow.next('.slideMain_wrap');

        if (slideNext.length===0){
            slideNext = $('.slideMain_wrap:first');
        }
        slideNow.hide();
        slideNext.show();

        var index = slideNext.index();
        index2 = index-2;
        $('.slideBottom_sub_hotclick li').css('background', 'rgba(0, 0, 0, 0.3)');
        $('.slideBottom_sub_hotclick li').eq(index2).css('background', 'rgba(0, 0, 0, 0.7)');

        index3 = index-11;
        $('.slideBottom_sub_event li').css('background', 'rgba(0, 0, 0, 0.3)');
        $('.slideBottom_sub_event li').eq(index3).css('background', 'rgba(0, 0, 0, 0.7)');

        if(index2 === 0){
            $('.slideBottom_sub_hotclick').stop().show();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(0).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index2 === 8){
            $('.slideBottom_sub_hotclick').stop().hide();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(1).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index2 === 9){
            $('.slideBottom_sub_event').stop().show();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(2).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index2 === 13){
            $('.slideBottom_sub_event').stop().hide();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(3).css('box-shadow','0 4px 0 0px #f2394b inset');
        }
    });

    $('.slideButton-prev').click(function(){
        var slideNow = $('.slideMain_wrap:visible');
        var slidePrev = slideNow.prev('.slideMain_wrap');
        if (slidePrev.length === 0) {
            slidePrev = $('.slideMain_wrap:last');
        }
        slideNow.hide();
        slidePrev.show();

        var index = slidePrev.index();
        index2 = index-2;
        $('.slideBottom_sub_hotclick li').css('background', 'rgba(0, 0, 0, 0.3)');
        $('.slideBottom_sub_hotclick li').eq(index2).css('background', 'rgba(0, 0, 0, 0.7)');

        index3 = index-11;
        $('.slideBottom_sub_event li').css('background', 'rgba(0, 0, 0, 0.3)');
        $('.slideBottom_sub_event li').eq(index3).css('background', 'rgba(0, 0, 0, 0.7)');

        if(index2 === 0){
            $('.slideBottom_sub_hotclick').stop().show();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(0).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index2 === 8){
            $('.slideBottom_sub_hotclick').stop().hide();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(1).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index2 === 9){
            $('.slideBottom_sub_event').stop().show();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(2).css('box-shadow','0 4px 0 0px #f2394b inset');
        }else if(index2 === 13){
            $('.slideBottom_sub_event').stop().hide();
            $('.sliderBottom_section').css('box-shadow','none');
            $('.sliderBottom_section').eq(3).css('box-shadow','0 4px 0 0px #f2394b inset');
        }
    });
});


/** 슬라이드_메인_셋인터벌 **/
function slide() {
    var now = $('.slideMain_wrap:visible');
    var next = now.next('.slideMain_wrap');

    if (next.length === 0) {
        next = $('.slideMain_wrap:first');
    }

    now.hide();
    next.show();

    var index = next.index();
    index2 = index-2;
    $('.slideBottom_sub_hotclick li').css('background', 'rgba(0, 0, 0, 0.3)');
    $('.slideBottom_sub_hotclick li').eq(index2).css('background', 'rgba(0, 0, 0, 0.7)');

    index3 = index-11;
    $('.slideBottom_sub_event li').css('background', 'rgba(0, 0, 0, 0.3)');
    $('.slideBottom_sub_event li').eq(index3).css('background', 'rgba(0, 0, 0, 0.7)')


    if(index2 === 0){
        $('.slideBottom_sub_hotclick').stop().show();
        $('.sliderBottom_section').css('box-shadow','none');
        $('.sliderBottom_section').eq(0).css('box-shadow','0 4px 0 0px #f2394b inset');
    }else if(index2 === 8){
        $('.slideBottom_sub_hotclick').stop().hide();
        $('.sliderBottom_section').css('box-shadow','none');
        $('.sliderBottom_section').eq(1).css('box-shadow','0 4px 0 0px #f2394b inset');
    }else if(index2 === 9){
        $('.slideBottom_sub_event').stop().show();
        $('.sliderBottom_section').css('box-shadow','none');
        $('.sliderBottom_section').eq(2).css('box-shadow','0 4px 0 0px #f2394b inset');
    }else if(index2 === 13){
        $('.slideBottom_sub_event').stop().hide();
        $('.sliderBottom_section').css('box-shadow','none');
        $('.sliderBottom_section').eq(3).css('box-shadow','0 4px 0 0px #f2394b inset');
    }
}

setInterval(slide, 3000);



/** 슬라이드_베스트셀러_오늘/주간 클릭**/
$(function(){
    $('.BestSellTabs > ul > li').click(function(){
        $('.BestSellTabs > ul > li').css({'border-left':'none', 'border-bottom':'1px solid rgba(255, 255, 255, 0.3)'});

        $(this).css({'border-left':'none', 'border-bottom':'none'});
    });
});


/** 베스트셀러_콘텐츠 **/
$(function(){
    $('.BestSellTabs > ul > li:first').click(function(){
        $('.todayBestsell').show();
        $('.weekBestsell').hide();
    });

    $('.BestSellTabs > ul > li:last').click(function(){
        $('.weekBestsell').show();
        $('.todayBestsell').hide();
    });
});

/** 슬라이드_바텀_hover_sub메뉴 **/
$(function(){
    $('.sliderBottom_section').hover(function(){
        $(this).find('.slideBottom_sub_hotclick').show();
        $(this).find('.slideBottom_sub_event').show();
    });
});

/** 슬라이드_바텀탭_마우스오버 **/
$(function slideTab(){
    $('.sliderBottom_section').eq(0).mouseenter(function(){
        $(".slideMain_wrap").stop().hide();
        $(".slideMain_wrap").eq(0).stop().show();
    });

    $('.sliderBottom_section').eq(1).mouseenter(function(){
        $(".slideMain_wrap").stop().hide();
        $(".slideMain_wrap").eq(8).stop().show();
    });

    $('.sliderBottom_section').eq(2).mouseenter(function(){
        $(".slideMain_wrap").stop().hide();
        $(".slideMain_wrap").eq(9).stop().show();
    });

    $('.sliderBottom_section').eq(3).mouseenter(function(){
        $(".slideMain_wrap").stop().hide();
        $(".slideMain_wrap").eq(13).stop().show();
    });
});


/** 슬라이드_바텀_서브_마우스오버 **/
$(function(){
    $('.slideBottom_sub_hotclick li').mouseover(function(){
        var index = $(this).index();
        $('.slideBottom_sub_hotclick li').css('background','rgba(0, 0, 0, 0.4)');

        $(this).css('background','rgba(0, 0, 0, 0.7)');

        $('.slideMain_wrap').stop().hide();
        $('.slideMain_wrap:eq(' + index + ')').stop().show();
    });

    $('.slideBottom_sub_event li').mouseover(function(){
        var index = $(this).index();
        index2 = index+9

        $('.slideBottom_sub_event li').css('background','rgba(0, 0, 0, 0.4)');

        $(this).css('background','rgba(0, 0, 0, 0.7)');

        $('.slideMain_wrap').stop().hide();
        $('.slideMain_wrap:eq(' + index2 + ')').stop().show();
    });
});




/** 슬라이드_바텀_section_빨간 라인 **/
$(function(){
    $('.sliderBottom_section').hover(function(){
        $('.sliderBottom_section').css('box-shadow','none');

        $(".slideBottom_sub_hotclick, .slideBottom_sub_event").stop().hide();

        $(this).find(".slideBottom_sub_hotclick, .slideBottom_sub_event").stop().show();

        $(this).css('box-shadow','0 4px 0 0px #f2394b inset');

    });
});



