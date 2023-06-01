$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세이", size: 3 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {


        var boxs = $('.readerRecommend_slide ul li');


        for (var i = 0; i < boxs.length; i++) {

            $(".content_left img").eq(i).attr("src", data.documents[i].thumbnail);

            $(".content_right > h3").eq(i).text(data.documents[i].title);

            $(".content_right > span").eq(i).text(data.documents[i].contents);

            $(".content_right > p").eq(i).text(data.documents[i].publisher);
        }
    });




/* 미디어 추천 버튼 */

$(function () {
    $(".media_prev").click(function () {
        var current = $('.readerRecommend_slide li:visible');
        var prev = current.prev('.readerRecommend_slide li');
        
        if(prev.length === 0){
            prev = $('.readerRecommend_slide li:last');
        }

        current.hide();
        prev.fadeIn(500);

        var index = prev.index();
        $('.dot1 li i').css('color','rgb(204, 204, 204)');
        $('.dot1 li i').eq(index).css('color','#4cc1ec');
    });

    $(".media_next").click(function () {
        var current = $('.readerRecommend_slide li:visible');
        var next = current.next('.readerRecommend_slide li');
        
        if(next.length === 0){
            next = $('.readerRecommend_slide li:first');
        }

        current.hide();
        next.fadeIn(500);
        
        var index = next.index();
        $('.dot1 li i').css('color','rgb(204, 204, 204)');
        $('.dot1 li i').eq(index).css('color','#4cc1ec');
    });

    $(".dot1 li").click(function () {
        var index = $(this).index();
        $('.dot1 li i').css('color','rgb(204, 204, 204)');
        $(this).children("i").css('color','#4cc1ec');
        $('.readerRecommend_slide li').hide().eq(index).stop().fadeIn(500);

    });


});



/* 이 책 어때 버튼 */

$(function () {
    var wid = $(".how").width();
    var i = $(".dot2 li.on").index();
    var len = $(".how>ul>li").length;
    $(".how_prev").click(function () {
        if (i == 0) {
            i = len - 1;
        } else {
            i = i - 1;
        }

        showSlide();
    });

    $(".how_next").click(function () {
        if (i == 3) {
            i = 0;
        } else {
            i = i + 1;
        }
        showSlide();
    });

    $(".dot2 li").click(function () {
        i = $(this).index();
        showSlide();
    });

    function showSlide() {
        $(".dot2 li").removeClass("on");
        $(".dot2 li").eq(i).addClass("on");
        $(".how>ul>li").stop(true, true).fadeOut();
        $(".how>ul>li").eq(i).stop(true, true).fadeIn();
    }

});