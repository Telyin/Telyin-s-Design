$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 6000,
		disableOnInteraction: true,
	},

	//effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .btn_prev',  
	},

    }); //swiper 종료
    
    
    $('.visual .btn_stop').on('click', function(){
        visual_swiper.autoplay.stop();
        $(this).hide();
        $('.visual .ctrl_btn .btn_play').show();
    })
    $('.visual .btn_play').on('click', function(){
        visual_swiper.autoplay.start();
        $(this).hide();
        $('.visual .ctrl_btn .btn_stop').show();
    })//정지 재생 버튼

    //브라우저에서 스크롤이 되면 header에 fixed 클래스 추가
    //1. 조금이라도 스크롤 되면 header에 fixed 클래스 추가
    //2. 다시 맨 위로 올라가면 header에 fixed 클래스 제거
    //3. 스크롤 된 중간에서 새로고침 해도 fixed 클래스 유지
    
     //문서가 로딩 됐을 때 단 한 번 실행
    let scrolling
    function scroll_chk(){ //함수를 정의하는 명령어
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else(
            $('header').removeClass('fixed')
        )
    }
   //브라우저가 스크롤 될 때 마다 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    //이 아래는 GPT가 짠 코드임
    // $(function () {
    //     function checkScroll() {
    //         if ($(window).scrollTop() > 0) {
    //             $('header').addClass('fixed');
    //         } else {
    //             $('header').removeClass('fixed');
    //         }
    //     }
    
    //     // 페이지 로드 시 즉시 실행
    //     checkScroll();
    
    //     // 스크롤 할 때마다 실행
    //     $(window).on('scroll', function () {
    //         checkScroll();
    //     });
    // });

    
        const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.book .ctrl_wrap .ctrl_btn .btn_next',
            prevEl: '.book .ctrl_wrap .ctrl_btn .btn_prev',
        },
    });



        const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        // 	delay: 2500,
        // 	disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.story .ctrl_wrap .ctrl_btn .btn_next',
            prevEl: '.story .ctrl_wrap .ctrl_btn .btn_prev',
        },
    });

    $('footer .top').on('click', function(){
        let scrolling = $(window).scrollTop()
        console.log(scrolling)
        // $(window).scrollTop(0)
        $('html, body').animate({
            scrollTop : 0
        }, 500)
    })
}) //document ready