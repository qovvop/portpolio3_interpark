/* 서브 메뉴 */

$(function () {
    $("#submenu_nav>ul>li").click(function () {
        var i = $(this).index();
        $("#submenu_nav>ul>li").removeClass("on1");
        $("#submenu_nav>ul>li").eq(i).addClass("on1");
    })
});

/* 책소개 펼쳐보기 */

$(function () {
    $(".text_spread1").eq(0).click(function () {
        $(".introduction").height("auto");
        $(".text_spread1").eq(0).hide();
        $("#end1").show();
        $(".text_spread1").eq(1).show();
    });
});


/* 책소개 접어보기 */

$(function () {
    $(".text_spread1").eq(1).click(function () {
        $(".introduction").height("161px");
        $(".text_spread1").eq(1).hide();
        $("#end1").hide();
        $(".text_spread1").eq(0).show();
    });
});


/* 출판사 서평 펼쳐보기 */

$(function () {
    $(".text_spread2").eq(0).click(function () {
        $(".publisher").height("auto");
        $(".text_spread2").eq(0).hide();
        $("#end2").show();
        $(".text_spread2").eq(1).show();
    });
});


/* 출판사 서평 접어보기 */

$(function () {
    $(".text_spread2").eq(1).click(function () {
        $(".publisher").height("210px");
        $(".text_spread2").eq(1).hide();
        $("#end2").hide();
        $(".text_spread2").eq(0).show();
    });
});



/* 목차 펼쳐보기 */

$(function () {
    $(".text_spread4").eq(0).click(function () {
        $(".publisher").height("auto");
        $(".text_spread4").eq(0).hide();
        $("#end2").show();
        $(".text_spread4").eq(1).show();
    });
});


/* 목차 접어보기 */

$(function () {
    $(".text_spread4").eq(1).click(function () {
        $(".publisher").height("190px");
        $(".text_spread4").eq(1).hide();
        $("#end2").hide();
        $(".text_spread4").eq(0).show();
    });
});


/* 본문중에서 펼쳐보기 */

$(function () {
    $(".text_spread3").eq(0).click(function () {
        $(".maintext").height("auto");
        $(".text_spread3").eq(0).hide();
        $("#end5").show();
        $(".text_spread3").eq(1).show();
    });
});


/* 본문중에서 접어보기 */

$(function () {
    $(".text_spread3").eq(1).click(function () {
        $(".maintext").height("161px");
        $(".text_spread3").eq(1).hide();
        $("#end5").hide();
        $(".text_spread3").eq(0).show();
    });
});