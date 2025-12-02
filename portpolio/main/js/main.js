//콘텐츠 스타일 지정
$(document).ready(function(){
    $(window).on('scroll mousemove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
	$('.cursor').css('left', e.pageX + 'px');
	$('.cursor').css('top', e.pageY + 'px');
    });
    $('.third .third_list .tit a').hover(function(){ /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
        $('.cursor').toggleClass('on');
    });
}) /* 끝 */