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
            $('header .gnb .gnb_wrap .depth1 > li > ul.depth2').hide()
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
        }
        
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'PC'){ //pc일때만 실행
            $(this).removeClass('over')
            $(this).find('.depth2').hide()
        }
    })
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc')
    })
    $('header .util .search .sch_open').on('focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    //pc ver. menu over end

    //mobile ver. menu over start

    //닫혀있는 메뉴를 클릭하면, 기존에 열려 있던 메뉴를 닫고, 클릭한 자신만 열림(li에 open 클래스 추가)
    //열려있는 메뉴를 클릭하면, 나 자신을 닫고 끝(open 클래스 제거)
    //열린메뉴와 닫힌메뉴의 구별법은 open클래스의 유무
    //1차 메뉴 a에 링크 이동을 못하게 막아야 함

    $('header .gnb .gnb_wrap .depth1 > li > a').on('click', function(e){
        if(device_status == 'Mobile')
            e.preventDefault();
            if($(this).parent().hasClass('open') == true){ //열려있는 메뉴를 다시 클릭 했을 때
                $(this).parent().removeClass('open')
                $(this).next().slideUp() //2차 메뉴 슬라이드로 닫기

            }else{ //열려있는 메뉴가 아닌 다른 메뉴를 눌렀을 때
                $('header .gnb .gnb_wrap .depth1 > li').removeClass('open') //모든 li의 클래스 삭제
                $('header .gnb .gnb_wrap .depth1 > li > ul.depth2').slideUp() //모든 2차 메뉴 닫기
                $(this).parent().addClass('open')
                $(this).next().slideDown() //2차 메뉴 슬라이드로 열기
            }
    })

    //모바일버전 메뉴 열기 닫기
    //열기를 클릭하면 header에 menu_mo 클래스 추가
    //닫기를 클릭하면 header에 menu_mo 클래스 제거
    
    
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_mo')
    })
    $('header .gnb .gnb_wrap .gnb_close').on('click', function(){
        $('header').removeClass('menu_mo')
    })


    //mobile ver. menu over end
    //header fixed start
    //pc와 모바일 둘 다 추가
    //스크롤이 조금만 되어도 fixed 클래스 추가
    //탑 버튼을 누르던 스크롤을 올리던 꼭대기로 가면 fixed 클래스 삭제

    let scrolling //브라우저가 스크롤 된 값

    function scroll_chk(){
        scrolling = $(window).scrollTop()//현재 스크롤 된 값
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //문서가 로딩 되고 나서 단 한 번 실행
    $(window).scroll(function(){
        scroll_chk() //스크롤 될 때 마다 실행
    })

    //header fixed end



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

    //find swiper start

    const find1_swiper = new Swiper('.find .item1 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.find .item1 .next',
            prevEl: '.find .item1 .prev',
        }
    });

    const find2_swiper = new Swiper('.find .item2 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.find .item2 .next',
            prevEl: '.find .item2 .prev',
        }
    });
    //find swiper end

})