const $indicator = $('.indicators>li>a');
const $container = $('.slides-container');
let nowIdx = 0;

//인디케이터에 대한 클릭이벤트 구문
$indicator.on('click', function(evt){
    evt.preventDefault();

    //이번에 선택한 인디케이터의 인덱스 번호
    nowIdx = $indicator.index(this);

    //활성화 표시
    $indicator.eq(nowIdx).parent().addClass('on');
    $indicator.eq(nowIdx).parent().siblings().removeClass('on');

    //컨테이너 이동
    $container.stop().animate({
        left:-478*nowIdx
    });
});

//이전버튼
$('.prev').on('click', function(evt){
    evt.preventDefault();

    //인덱스 추출 0~5
    if(nowIdx>0){
        nowIdx--;
    }

    //활성화 표시
    $indicator.eq(nowIdx).parent().addClass('on');
    $indicator.eq(nowIdx).parent().siblings().removeClass('on');

    //컨테이너 이동
    $container.stop().animate({
        left:-478*nowIdx
    });    
});

//다음버튼
$('.next').on('click', function(evt){
    evt.preventDefault();

    //인덱스 추출 0~5
    if(nowIdx<5){
        nowIdx++;
    }

    //활성화 표시
    $indicator.eq(nowIdx).parent().addClass('on');
    $indicator.eq(nowIdx).parent().siblings().removeClass('on');

    //컨테이너 이동
    $container.stop().animate({
        left:-478*nowIdx
    });    
});

//자동실행
setInterval(function(){
    if(nowIdx<5){
        nowIdx++;
    }else{
        nowIdx=0;
    }

    //활성화 표시
    $indicator.eq(nowIdx).parent().addClass('on');
    $indicator.eq(nowIdx).parent().siblings().removeClass('on');

    //컨테이너 이동
    $container.stop().animate({
        left:-478*nowIdx
    });  

}, 2000);