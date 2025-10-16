$(document).ready(function(){
    /***********************시작 :: 지금 pc 버전인지 모바일인지 체크**************************/
    
    let mobile_size = 1024
    let window_w 
    let device_status //pc or mobile

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){ //브라우저 넓이가 1024 이상일때
            device_status = 'PC'
        }else{
            device_status = 'Mobile'
        }
        console.log(device_status)
    }

    device_chk() //html의 로딩이 완료 된 이후 단 1번 실행

    $(window).resize(function(){ //브라우저가 리사이즈 될 때 마다 실행
        device_chk()
    })
    
    /***********************끝 :: 지금 pc 버전인지 모바일인지 체크**************************/


    //pc ver. menu over start

    //메뉴에 마우스를 오버 했을 때, header에 menu_pc 클래스 추가
    //마우스를 오버 한 메뉴의 1차 메뉴 li에 over 클래스 추가
    //메뉴를 오버했을때 나온 배경색 밖으로 마우스가 나갔을 때 클래스 제거
    // $('header .gnb').hover(
    //     function() { // 마우스를 올렸을 때
    //         $('header').addClass('menu_pc');
    //     },
    //     function() { // 마우스를 뗐을 때
    //         $('header').removeClass('menu_pc');
    //     }
    // );
    // $('header .gnb .gnb_wrap ul.depth1 > li').hover(
    //     function() { // 마우스를 올렸을 때
    //         $(this).addClass('over');
    //     },
    //     function() { // 마우스를 뗐을 때
    //         $(this).removeClass('over');
    //     }
    // );
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'PC'){ //pc일때만 실행
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
        
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })
    $('header .util .search .sch_open').on('focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    //pc ver. menu over end



    //visual swiper start
    let visual_time = 5000
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: visual_time,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        
    });
    
    
    $('.visual .btn_wrap .stop').on('click', function(){
        $('.visual .btn_wrap .paging .bar span').stop() //animate 종료
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .btn_wrap .play').css('display', 'flex') //css 추가
    })
    $('.visual .btn_wrap .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .btn_wrap .stop').css('display', 'flex') //css 추가
        updateCurrent()
    })


    // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
    const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
    $('.visual .paging .total').text(totalSlides); // 총 개수 표시

    // 현재 슬라이드 번호 표시 함수
    function updateCurrent() {
        let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
        $('.visual .paging .current').text(realIndex);
        //슬라이드가 교체 되면 제일 먼저 넓이를 0으로 초기화 ↓
        $('.visual .btn_wrap .paging .bar span').stop() //animate 종료
        $('.visual .btn_wrap .paging .bar span').width(0)
        $('.visual .btn_wrap .paging .bar span').animate({
            width : '100%'
        }, visual_time)
    }

    // 처음 로드 시 한번 실행
    updateCurrent();

    // 슬라이드 변경될 때마다 실행
    visual_swiper.on('slideChange', function () {
        updateCurrent();
    });
    //visual swiper end

})