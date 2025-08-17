$(function(){
  //변수 ht에 브라우저의 높이값을 지정
  let ht = $(window).height();
  $("section").height(ht);

  //브라우저가 리사이즈 될 때마다, 브라우저와 section의 높이값을 갱신
  $(window).on("resize", function(){
  let ht = $(window).height();
  $("section").height(ht);   
  });

  //마우스의 움직임에 반응하는 서브 이미지설정
  $("section").on("mousemove", function(e) {
    let posX = e.pageX;
    let posY = e.pageY;

    //첫번째 박스의 이미지 위치 값을 마우스 커서의 위치값과 연동
    /* 이미지의 현재 위치 값에서 마우스 커서의 위치를 빼주면 이미지는 마우스가 움직일 때마다 반대방향으로 움직이고, 마우스 커서의 위치값을 더해주면 마우스가 움직이는 방향으로 움직임 */

    /* posX 와 posY를 나누는 수치가 커질수로 마우스의 움직이에 따른 서브이미지의 움직임의 폭이 작아지고, 나누는 수치가 적을수록 서브 이미지의 움직임의 폭은 커짐 */
    $(".p11").css({right:20-(posX/30), bottom:20-(posY/30)});
    $(".p12").css({right:130+(posX/20), bottom:-40+(posY/20)});
    $(".p13").css({right:60+(posX/20), top:180+(posY/20)});

    $(".p21").css({right:180-(posX/30), bottom:-480-(posY/30)});
    $(".p22").css({right:130+(posX/50), bottom:-40+(posY/50)});

    $(".p31").css({right:180-(posX/30), bottom:30-(posY/30)});
    $(".p32").css({right:110+(posX/20), bottom:-270+(posY/20)});
    $(".p33").css({right:-70+(posX/20), bottom:-130+(posY/20)});

    $(".p41").css({right:20-(posX/30), bottom:-120-(posY/30)});
    $(".p42").css({right:0-(posX/20), bottom:-180+(posY/20)});
  });

  //주메뉴 클릭시, 자동으로 상하 스크롤시키기
  $("#menu li").on("click", function(){
    let ht = $(window).height();
    //변수 i에 현재 클릭한 li의 순서값을 저장
    let i = $(this).index();
    console.log(i);
    let nowTop = i*ht;
    $("html , body").stop().animate({scrollTop:nowTop}, 1400);
  });

  //화면이 스크롤될때마다 현재 영역에 해당하는 메뉴 활성화하기
  $(window).on("scroll", function(e){
    //a요소 링크기능 막아주는 역할
    e.preventDefault();

    let ht = $(window).height();
    let scroll = $(window).scrollTop();

    // if(scroll >= ht*0 && scroll < ht*1) {
    //   $("#menu li").removeClass("on");
    //   $("#menu li").eq(0).addClass("on");
    // }
    // if(scroll >= ht*1 && scroll < ht*2) {
    //   $("#menu li").removeClass("on");
    //   $("#menu li").eq(1).addClass("on");
    // }
    // if(scroll >= ht*2 && scroll < ht*3) {
    //   $("#menu li").removeClass("on");
    //   $("#menu li").eq(2).addClass("on");
    // }
    // if(scroll >= ht*3 && scroll < ht*4) {
    //   $("#menu li").removeClass("on");
    //   $("#menu li").eq(3).addClass("on");
    // }
    for(let i = 0; i < 4; i++) {
       if(scroll >= ht*i && scroll < ht*(i+1)) {
      $("#menu li").removeClass("on");
      $("#menu li").eq(i).addClass("on");
    }
    }
  });

/*   $("선택자").on("mousewheel", function(event, delta){
    if(delta>0) {
      마우스 휠을 올렸을 때 구문
    } else if(delta < 0) {
      마우스 휠을 내렸을 때 구문
    }
  }); */

  // $(".wheel").on("mousewheel", function(event, delta){
  //   if(delta>0) {
  //     //마우스 휠을 올렸을 때 구문
  //     //배경색 : red
  //     //<p>마우스 휠을 올렸습니다.</p>
  //     $(this).css("background","red");
  //     $(".wheel p").text("마우스 휠을 올렸습니다.");
  //   } else if(delta < 0) {
  //     //마우스 휠을 내렸을 때 구문
  //     //배경색 : blue
  //     //<p>마우스 휠을 내렸습니다.</p>
  //      $(this).css("background","blue");
  //      $(".wheel p").text("마우스 휠을 내렸습니다.");
  //   }
  // });

    $("section").on("mousewheel", function(event, delta){
    if(delta>0) {
      //마우스 휠을 올렸을 때 구문
      let prev = $(this).prev().offset().top;
      $("html, body").stop().animate({scrollTop:prev},1400, "easeOutBounce");
    } else if(delta < 0) {
      //마우스 휠을 내렸을 때 구문
      let next = $(this).next().offset().top;
      $("html, body").stop().animate({scrollTop:next},1400, "easeOutBounce")
    }
  });
});