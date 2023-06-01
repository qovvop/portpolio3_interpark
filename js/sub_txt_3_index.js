/* 목차 텍스트 가져오기 */
   
$(function(){
    $.get("./text/txt_3_index.txt", function(data) {
        $(".index").html(data);
    })     
});
