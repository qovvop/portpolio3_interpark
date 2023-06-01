$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설", size: 6 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.section5_contents1 > li');

        for (var i = 0; i < boxs.length; i++) {
            $(".section5_contents1 > li > img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".section5_contents1 > li > h6").eq(i).text(data.documents[i].title);
            $(".section5_contents1 > li > span").eq(i).text(data.documents[i].price + " 원");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "인문/교양", size: 6 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.section5_contents2 > li');

        for (var i = 0; i < boxs.length; i++) {
            $(".section5_contents2 > li > img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".section5_contents2 > li > h6").eq(i).text(data.documents[i].title);
            $(".section5_contents2 > li > span").eq(i).text(data.documents[i].price + " 원");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제", size: 6 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.section5_contents3 > li');

        for (var i = 0; i < boxs.length; i++) {
            $(".section5_contents3 > li > img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".section5_contents3 > li > h6").eq(i).text(data.documents[i].title);
            $(".section5_contents3 > li > span").eq(i).text(data.documents[i].price + " 원");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "아동/어린이", size: 6 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.section5_contents4 > li');

        for (var i = 0; i < boxs.length; i++) {
            $(".section5_contents4 > li > img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".section5_contents4 > li > h6").eq(i).text(data.documents[i].title);
            $(".section5_contents4 > li > span").eq(i).text(data.documents[i].price + " 원");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어학", size: 6 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.section5_contents5 > li');

        for (var i = 0; i < boxs.length; i++) {
            $(".section5_contents5 > li > img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".section5_contents5 > li > h6").eq(i).text(data.documents[i].title);
            $(".section5_contents5 > li > span").eq(i).text(data.documents[i].price + " 원");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "외국", size: 6 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.section5_contents6 > li');

        for (var i = 0; i < boxs.length; i++) {
            $(".section5_contents6 > li > img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".section5_contents6 > li > h6").eq(i).text(data.documents[i].title);
            $(".section5_contents6 > li > span").eq(i).text(data.documents[i].price + " 원");
        }
    });




/* 분야별 추천 - NAV */

$(function () {
    var i = 0;
    $(".section5_category > li").mouseenter(function () {
        i = ($(this).index()) + 1
        $(".section5_bottom > div").hide()

        $(".section5_category > li").css({
            "border-bottom": "none",
            "color": "#000   "
        })

        $(".section5_category > li:hover").css({
            "border-bottom": "2px solid #e66a57",
            "color": "#e66a57"
        })

        $(".section5_bottom > div:nth-of-type" + "(" + i + ")").stop().fadeIn("fast")
    })
});




/** 분야별추천 이전,다음버튼 **/

$(function () {
    $(".section5_prev").click(function () {
        var current = $(".section5box:visible");
        var prev = current.prev(".section5box");

        if (prev.length === 0) {
            prev = $(".section5box:last");
        }

        current.hide();
        prev.fadeIn("fast");

        var index = prev.index();

        $(".section5_category > li").css("border-bottom", "none");
        $(".section5_category > li")
            .eq(index)
            .css("border-bottom", "2px solid #e66a57");
    });

    $(".section5_next").click(function () {
        var current = $(".section5box:visible");
        var next = current.next(".section5box");

        if (next.length === 0) {
            next = $(".section5box:first");
        }

        current.hide();
        next.fadeIn("fast");

        var index = next.index();

        $(".section5_category > li").css("border-bottom", "none");
        $(".section5_category > li")
            .eq(index)
            .css("border-bottom", "2px solid #e66a57");
    });
});