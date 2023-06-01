$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "장편소설", size: 5 },
    headers: { Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7" }
})
    .done(function (data) {


        var boxs = $('.special_slide li');


        for (var i = 0; i < boxs.length; i++) {

            $(".special_imgbox img").eq(i).attr("src", data.documents[i].thumbnail);

            $(".special_textbox > p").eq(i).text(data.documents[i].title);

            $(".special_textbox > span > del").eq(i).text(data.documents[i].price);

            $(".special_textbox > span > h5").eq(i).text(data.documents[i].sale_price + "원");
        }
    });




/* cd 슬라이드 */

$(function () {
    function prev7() {
        $('.cd_content1 ul li:last').prependTo('.cd_content1 ul');
        $('.cd_content1 ul').css({ marginLeft: -345 });
        $('.cd_content1 ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next7() {
        $('.cd_content1 ul').stop().animate({ marginLeft: -345 }, function () {
            $('.cd_content1 ul li:first').appendTo('.cd_content1 ul');
            $('.cd_content1 ul').css({ marginLeft: 0 });
        });
    }

    $('.cd_prev').click(function () {
        prev7();
    });

    $('.cd_next').click(function () {
        next7();
    });
});




/* dvd 슬라이드 */

$(function () {
    function prev8() {
        $('.dvd_content1 ul li:last').prependTo('.dvd_content1 ul');
        $('.dvd_content1 ul').css({ marginLeft: -345 });
        $('.dvd_content1 ul').stop().animate({ marginLeft: 0 }, 800);
    }

    function next8() {
        $('.dvd_content1 ul').stop().animate({ marginLeft: -345 }, function () {
            $('.dvd_content1 ul li:first').appendTo('.dvd_content1 ul');
            $('.dvd_content1 ul').css({ marginLeft: 0 });
        });
    }

    $('.dvd_prev').click(function () {
        prev8();
    });

    $('.dvd_next').click(function () {
        next8();
    });
});





/* 특별판 Special Ed. 버튼 */

$(function () {
    function prev5() {
        $('.special_slide > li:last').prependTo('.special_slide');
    }

    function next5() {
        $('.special_slide > li:first').appendTo('.special_slide');
    }

    $('.special_prev').click(function () {
        prev5();
    });

    $('.special_next').click(function () {
        next5();
    });
});