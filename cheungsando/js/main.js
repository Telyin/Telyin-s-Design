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
})//document ready