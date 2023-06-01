/* 라이브북 슬라이드 */
$(function () {

    var index = 0;

    $('.live_btn_pre').click(function () {
        $('.live_content li:last').prependTo('.live_content');

        $('.live_content').css('margin-left', -374);    // $('.live_content').css({marginLeft:-1000}); 

        $('.live_content').stop().animate({ marginLeft: 0 }, 550);

        index--;

        $('.dot li').css('color','rgb(204, 204, 204)');

        $('.dot li').eq(index).css('color','#4cc1ec');

        if(index === -1){
            index = 8;
        }
    });

    $('.live_btn_next').click(function () {
        $('.live_content').stop().animate({ marginLeft: -374 }, function () {

            $('.live_content li:first').appendTo('.live_content');

            $('.live_content').css({ marginLeft: 0 });

        });

        index++;

        $('.dot li').css('color','rgb(204, 204, 204)');

        $('.dot li').eq(index).css('color','#4cc1ec');

        if(index === 9){
            index = 0;
            $('.dot li').eq(0).css('color','#4cc1ec');
        }
    });
});