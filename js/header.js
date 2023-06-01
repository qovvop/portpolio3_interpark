$(function(){
    $('.headerTop_leftMenu li a:last').css({'background-color':'#fff' , 'border-bottom':'none'});
});

/**헤더탑 왼쪽 메뉴바 클릭**/
$(function(){
    $('.headerTop_leftMenu li a').click(function(e){
        e.preventDefault();
        $('.headerTop_leftMenu li a').css({'border-bototm':'1px solid #e9e9e9','background-color':'#f4f6f9'});
        $(this).css({'background-color':'#fff' , 'border-bottom':'none'});
    });
});

/**헤더탑 오른쪽 메뉴바 호버**/
$(function(){
    $('.headerTop_rightMenu > li').hover(function(){
        $(this).find('.headerTop_rightMenu_sub').stop().toggle();
    });
});

/**전체카테고리선택**/
$(function(){
    $('.all_navBox').hide();
    $('.all_nav').click(function(){
        $(this).find('.all_navBox ').stop().slideToggle();
    });
});

/**전체카테고리 X클릭 닫히기**/
$(function(){
    $('closeX').click(function(){
        $('.all_navBox').stop().hide();
    });
});