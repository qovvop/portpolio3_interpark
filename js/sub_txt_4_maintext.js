/* 본문중에서 텍스트 가져오기 */
   
$(function(){
    $.get("./text/txt_4_maintext.txt", function(data) {
        $(".maintext").html(data);
    })     
});
