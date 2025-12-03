//콘텐츠 스타일 지정
$(document).ready(function(){

	gsap.registerPlugin(ScrollTrigger);

	$(function(){

		// 등장 애니메이션을 넣고 싶은 섹션들
		const sections = [
			".iam",
			".about",
			".skill",
			".work",
			".contact"
		];

		sections.forEach(selector => {

			gsap.from(selector, {
				opacity: 0,
				y: 80,
				duration: 1,
				ease: "power2.out",
				scrollTrigger: {
					trigger: selector,
					start: "top 80%",   // 화면 아래에서 자연스럽게 시작
					end: "bottom 60%",
					toggleActions: "play none none reverse"
				}
			});
		});

		$('.about_list li').each(function(){

			// 이미지 요소 만들어서 li 안에 추가
			let imgTag = $('<img class="hover_img">');
			$(this).append(imgTag);
		
		});
		
		$('.about_list li').on('mouseenter', function(){
		
			let imgSrc = $(this).data('img'); // data-img 값 가져오기
		
			// 현재 li에 들어있는 hover_img 태그에 이미지 넣기
			$(this).find('.hover_img')
				.attr('src', 'images/about/' + imgSrc)
				.css({ opacity: 1 });
		
		});
		
		$('.about_list li').on('mouseleave', function(){
		
			$(this).find('.hover_img')
				.css({ opacity: 0 });
		
		});
		
		
	});




	
	// 스킬 게이지 애니메이션
	$('.skill li').hover(
		function(){ 
			// 마우스를 올렸을 때
			
			let per = $(this).data('percent'); // data-percent 읽기
			
			// 게이지 채우기
			$(this).find('.gauge_fill').css({
				'width' : per + '%'
			});

			// 퍼센트 텍스트 적용
			$(this).find('.gauge_text').text(per + '%');
		},
		function(){
			// 마우스를 벗어났을 때 게이지 초기화
			$(this).find('.gauge_fill').css({
				'width' : '0%'
			});
		}
	);
}) /* 끝 */