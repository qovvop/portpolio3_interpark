/* 출판사 서평 텍스트 가져오기 */
   
$(function(){
    $.get("./text/txt_2_publisher.txt", function(data) {
        $(".publisher").html(data);
    })     
});
