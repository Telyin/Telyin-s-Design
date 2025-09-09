$(document).ready(function(){
    console.log('111111')

    $('.box').on('mouseenter', function(){
        $('.box').addClass('on')
    })//mouseenter
    $('.box').on('mouseleave', function(){
        console.log('내려갔다')
        $('.box').removeClass('on')
    })
})//$(document).ready html 로딩이 끝나고 나서 작동 시작 명령

console.log('연결되었습니다')