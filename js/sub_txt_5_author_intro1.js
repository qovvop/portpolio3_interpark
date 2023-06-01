/* 본문중에서 텍스트 가져오기 */
   
$(function(){
    $.get("./text/txt_5_author_intro1.txt", function(data) {
        $(".author_intro1").html(data);
    })     
});
