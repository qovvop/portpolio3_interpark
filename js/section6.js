$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "문학", size: 8 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {


        var boxs = $('.month_imgbox');


        for (var i = 0; i < boxs.length; i++) {

            $(".month_imgbox img").eq(i).attr("src", data.documents[i].thumbnail);

            $(".month_contentbox > p").eq(i).text(data.documents[i].title);

            $(".month_contentbox > .price").eq(i).text(data.documents[i].price + "원");

            $(".month_contentbox > .saleprice").eq(i).text(data.documents[i].sale_price + "원");
        }
    });



/* 주목! 이달의책 버튼 */

$(function () {
    function prev4() {
        $('.section6_left_bottom > ul > li:last').prependTo('.section6_left_bottom > ul');
        $('.section6_left_bottom > ul').css({ marginLeft: -370 });
        $('.section6_left_bottom > ul').stop().animate({ marginLeft: 0 }, 500);
    }

    function next4() {
        $('.section6_left_bottom > ul').stop().animate({ marginLeft: -370 }, function () {
            $('.section6_left_bottom > ul li:first').appendTo('.section6_left_bottom > ul');
            $('.section6_left_bottom > ul').css({ marginLeft: 0 });
        });
    }

    function slide4() {
        $('.section6_left_bottom > ul').stop().animate({ marginLeft: -370 }, function () {
            $('.section6_left_bottom > ul li:first').appendTo('.section6_left_bottom > ul');
            $('.section6_left_bottom > ul').css({ marginLeft: 0 });
        });
    }

    setInterval(slide4, 3000);

    $('.month_prev').click(function () {
        prev4();
    });

    $('.month_next').click(function () {
        next4();
    });
});





/** 특가할인 **/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "개발", size: 4 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.sale_content li');

        for (var i = 0; i < boxs.length; i++) {

            $(".sale_imgbox img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".sale1 > h6").eq(i).text(data.documents[i].title);
            $(".sale1 > p").eq(i).text("정가 " + data.documents[i].price + "원");
            $(".sale1 > span").eq(i).text(data.documents[i].sale_price + "원");
        }
    });




/** 정가인하 **/
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "장난감", size: 4 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {

        var boxs = $('.sale_content li');

        for (var i = 0; i < boxs.length; i++) {

            $(".sale_imgbox2 img").eq(i).attr("src", data.documents[i].thumbnail);
            $(".sale2 > h6").eq(i).text(data.documents[i].title);
            $(".sale2 > p").eq(i).text("정가 " + data.documents[i].price + "원");
            $(".sale2 > span").eq(i).text(data.documents[i].sale_price + "원");
        }
    });







/* 특가할인 & 정가인하 */

$(function () {

    $(".section6_right_nav>li").mouseover(function () {
        var i = $(this).index();
        $(".section6_right_nav>li").removeClass("sale_on");
        $(".section6_right_nav>li").eq(i).addClass("sale_on");
        $(".kind>li").stop().hide();
        $(".kind>li").eq(i).stop().show();
    })

});