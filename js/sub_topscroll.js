/* 스크롤 내리면 생기는 top 버튼 */

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $("#top_btn").stop().fadeIn();
        }
        else {
            $("#top_btn").stop().fadeOut();
        }
    });

    $("#top_btn").click(function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 400);
        return false;
    });
});