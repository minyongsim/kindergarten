(function($){

    $('.depth1 > li').each(function(){
        $(this).hover(
            function(){
                $(this).find('.depth2')
                .stop().slideDown(500)
            },
            function(){
                 $(this).find('.depth2')
                 .stop().slideUp(500)
                }
        )
    })

    // $('.depth1 > li').hover(
    //     function(){
    //         $(this).find('.depth2')//.find후손을 가르킨다 
    //         .stop().slideDown(700)
    //     },
    //     function(){
    //         $(this).find('.depth2')
    //         .stop().slideUp(700)
    //     }
    // )






})(jQuery)