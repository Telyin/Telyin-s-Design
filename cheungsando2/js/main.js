$(document).ready(function(){
    /* 
        .tour .list ul li에
        마우스를 올린 li에만 
        on 클래스를 추가해야 함
    */
    $('.tour .list ul li').on('mouseenter', function(){
        //console.log('오버확인')
        $('.tour .list ul li').removeClass('on')
        $(this).addClass('on')
    })
    $('.tour .list ul li').on('mouseleave', function(){
        $('.tour .list ul li').removeClass('on')
    })

    $('footer .right_area .family .open').on('click', function(){
        $('footer .right_area .family').addClass('open')
    })
    $('footer .right_area .family .close').on('click', function(){
        $('footer .right_area .family').removeClass('open')
    })
    $('footer .right_area .top').on('click', function(){
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
        // $(window).scrollTop(0)
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
})//document ready