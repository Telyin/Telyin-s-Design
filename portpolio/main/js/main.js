//콘텐츠 스타일 지정
$(document).ready(function(){
	$('.head_wrap ul li a').click(function(e){
		e.preventDefault(); // a태그 기본 이동 막기
		
		let href = $(this).attr('href');   // 예: #about
		let targetTop = $(href).offset().top; // 이동할 위치
		 
		$('html, body').animate({
			scrollTop : targetTop
		}, 700); // 0.6초 동안 부드럽게 이동
	});
	
}) /* 끝 */