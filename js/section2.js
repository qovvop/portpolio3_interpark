$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"판타지",size:5 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
    
    var boxs = $('.RecommendSlide li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".RecommendSlide_imgbox").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".RecommendSlide_right > h4").eq(i).text(data.documents[i].title);
                
        $(".txtArea_txt").eq(i).text(data.documents[i].contents);
    }
    });




    $(function () {
        function prev3() {
            $('.RecommendSlide li:last').prependTo('.RecommendSlide');
            $('.RecommendSlide').css({marginLeft:-470}); 
            $('.RecommendSlide').stop().animate({ marginLeft: 0 }, 800);
        }
    
        function next3() {
            $('.RecommendSlide').stop().animate({ marginLeft: -470 }, function () {
                $('.RecommendSlide li:first').appendTo('.RecommendSlide');
                $('.RecommendSlide').css({ marginLeft: 0 });
            });
        }
    
        function slide3() {
            $('.RecommendSlide').stop().animate({ marginLeft: -470 }, function () {
                $('.RecommendSlide li:first').appendTo('.RecommendSlide');
                $('.RecommendSlide').css({ marginLeft: 0 });
            });
        }
    
        setInterval(slide3, 5000);
    
        $('.inter_prev').click(function () {
            prev3();
        });
    
        $('.inter_next').click(function () {
            next3();
        });
    });