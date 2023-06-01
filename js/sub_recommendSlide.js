$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"인문학",size:12 },
    headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
    })
    .done(function( data ) {
        
    
    var boxs = $('.re_slide1 li');
        
        
    for(var i=0; i<boxs.length; i++){
        
        $(".recommend_box img").eq(i).attr("src", data.documents[i].thumbnail);
        
        $(".recommend_box p").eq(i).text(data.documents[i].title);
    }
    });



    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"소설",size:12 },
        headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
        })
        .done(function( data ) {
            
        
        var boxs = $('.re_slide2 li');
            
            
        for(var i=0; i<boxs.length; i++){
            
            $(".recommend_box2 img").eq(i).attr("src", data.documents[i].thumbnail);
            
            $(".recommend_box2 p").eq(i).text(data.documents[i].title);
        }
        });



        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query:"에세이",size:12 },
            headers:{Authorization: "KakaoAK 4f8fd0ea2b58d54fc209c75db615c0e7"}
            })
            .done(function( data ) {
                
            
            var boxs = $('.re_slide3 li');
                
                
            for(var i=0; i<boxs.length; i++){
                
                $(".recommend_box3 img").eq(i).attr("src", data.documents[i].thumbnail);
                
                $(".recommend_box3 p").eq(i).text(data.documents[i].title);
            }
            });