//각각의 콘텐츠 페이지 스타일


/* 
    인터렉티브의 시작은 콘텐츠 영역이 브라우저 상단에 닿았을 때
    영역의 상단값 보다 스크롤 된 값이 크면 인터렉티브 시작
    ceo_area_start < ceo_scroll = 인터렉티브의 시작


    인터렉티브의 종료는 콘텐츠 영역이 브라우저 하단 위로 올라올 때
    ceo_area_end - ceo_win_h < ceo_scroll =인터렉티브 종료


    //콘텐츠 영역 안에 들어가기전 (시작전)
    //콘텐츠 영역 안에 들어갔을때 (진행중)
    //콘텐츠 영역 안에 벗어났을때 (종료)
*/
$(document).ready(function(){
    let ceo_length = $('.ctn_ceo').length
    function ceo_ani(){
        let ceo_win_h = $(window).height() //브라우저의 높이
        let ceo_scroll = $(window).scrollTop() //현재 스크롤 된 값
        let ceo_area_name = $('.ctn_ceo .ceo_head') //선택자
        let ceo_obj_wrap = $('.ctn_ceo .ceo_head .ceo_photo') //애니메이션 대상
        let ceo_obj = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img') //넓이가 조정되는 대상
        let ceo_obj_start = 50
        let ceo_obj_end = 100
        let ceo_obj_count //현재 계산한 넓이값
        let ceo_obj_bg = $('.ctn_ceo .ceo_head .ceo_photo .ceo_img .bg') //배경 투명도
        let ceo_obj_bg_start = 0
        let ceo_obj_bg_end = 0.4
        let ceo_obj_bg_count //현재 투명도값
        let ceo_area_start = ceo_area_name.offset().top //시작위치
        let ceo_area_end = ceo_area_start + ceo_area_name.height() - ceo_win_h //끝 위치
        let ceo_total = ceo_area_end - ceo_area_start //전체 스크롤 값
        let ceo_diff //진행중 이후로 스크롤 된 값
        let ceo_per //스크롤 된 값이 몇 %인지
        
        // console.log(ceo_total)

        /* 
            애니메이션이 진행중일 때
            몇% 스크롤 했는지 계산해야 함 
            ex) 1000px 동안 인터렉티브가 되어야 하는데, 100px스크롤을 했을땐 10%가 진행되었음
            현재스크롤 된 값(ceo_diff) x 100 / 전쳇값(ceo_total)

            처음 넓이값 50과 종료 넓이값 100
            진행률이 50% = 75
            (종료값 - 처음값) * 진행률/100 + 처음값
            (50) * 0.5 + 50 = 75
        */

        // console.log(ceo_area_start, ceo_area_end, ceo_scroll)
        if(ceo_scroll > ceo_area_end){
            //console.log('end')
            ceo_obj_wrap.attr('data-status', 'end')
            ceo_obj.width(ceo_obj_end + '%')
            ceo_obj.height(ceo_obj_end + '%')
            ceo_obj_bg.css('opacity', ceo_obj_bg_end)
        }else if(ceo_scroll < ceo_area_start){
            //console.log('standby')
            ceo_obj_wrap.attr('data-status', 'start')
            ceo_obj.width(ceo_obj_start + '%')
            ceo_obj.height(ceo_obj_start + '%')
            ceo_obj_bg.css('opacity', ceo_obj_bg_start)
        }else{
            //console.log('working')
            ceo_obj_wrap.attr('data-status', 'ing')
            ceo_diff = ceo_scroll - ceo_area_start
            ceo_per = ceo_diff * 100 / ceo_total
            //console.log(ceo_diff, ceo_total, ceo_per)
            ceo_obj_count = ceo_obj_start + (ceo_obj_end - ceo_obj_start) * (ceo_per / 100)
            ceo_obj_count = ceo_obj_count * 1.2
            if(ceo_obj_count > ceo_obj_end){ //100보다 크면 100으로 고정
                ceo_obj_count = ceo_obj_end
            }
            ceo_obj.width(ceo_obj_count + '%')
            ceo_obj.height(ceo_obj_count + '%')
            ceo_obj_bg_count = ceo_obj_bg_start + (ceo_obj_bg_end - ceo_obj_bg_start) * (ceo_per / 100)
            ceo_obj_bg_count = ceo_obj_bg_count * 1.2
            if(ceo_obj_bg_count > ceo_obj_bg_end){
                ceo_obj_bg_count = ceo_obj_bg_end
            }
            ceo_obj_bg.css('opacity', ceo_obj_bg_count)
        }
    }
    // console.log($('ctn_ceo').length)
    if(ceo_length > 0){
        ceo_ani()
    }
    $(window).scroll(function(){
        if(ceo_length > 0){
            ceo_ani()
        }
    })
})//끝