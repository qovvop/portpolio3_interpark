/* 책소개 텍스트 가져오기 */
   
$(function(){
    $.get("./text/txt_1_introduction.txt", function(data) {
        $(".introduction").html(data);
    })     
});