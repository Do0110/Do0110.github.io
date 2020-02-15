$(function(){
  $('.header-item_btn').click(function() {
    //クリックされた要素のhrefを取得
    var menu = $(this).attr("href");
    //スクロール位置
    var scroll_point = $(menu).offset().top;
    $('html,body').animate({
      scrollTop: scroll_point
    },500);
  });

  $('.header-bar').click(function() {
    $('.modal').slideDown();

    return false;
  })

  $('.modal-menu_ret').click(function() {
    $('.modal').slideUp();

    return false;
  })

    //スクロールが100に達したらボタン表示
  var topBtn = $('.top-btn');    
  topBtn.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          topBtn.fadeIn();
      } else {
          topBtn.fadeOut();
      }
  });

    //スクロールが100に達したらボタン表示
  var contacBtn = $('.contact-top_btn');    
  contacBtn.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        contacBtn.fadeIn();
      } else {
        contacBtn.fadeOut();
      }
  });
  
  //スルスルっとスクロールでトップへもどる
  $('.top-btn').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
  $('.contact-top_btn').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });
  //（１）ページの概念・初期ページを設定
  var page=0;

  //（２）イメージの数を最後のページ数として変数化
  var lastPage =parseInt($("#slide img").length-1);

  //（３）最初に全部のイメージを一旦非表示にします
      $("#slide img").css("display","none");

  //（４）初期ページを表示
            $("#slide img").eq(page).css("display","block");

  //（５）ページ切換用、自作関数作成
  function changePage(){
                          $("#slide img").fadeOut(1500);
                          $("#slide img").eq(page).fadeIn(1500);
  };

  //（６）～秒間隔でイメージ切換の発火設定
  var Timer;
  function startTimer(){
  Timer =setInterval(function(){
            if(page === lastPage){
                          page = 0;
                          changePage();
                }else{
                          page ++;
                          changePage();
            };
      },5000);
  }
  //（７）～秒間隔でイメージ切換の停止設定
  function stopTimer(){
  clearInterval(Timer);
  }

  //（８）タイマースタート
  startTimer();

//   //（１）ページの概念・初期ページを設定
//   var page = 0;

// //（２）イメージの数を最後のページ数として変数化
//   var lastPage =parseInt($(".main-top_slide img").length-1);

// //（３）最初に全部のイメージを一旦非表示にします
//   $(".main-top_slide img").css("display","none");

// //（４）初期ページを表示
//   $(".main-top_slide img").eq(page).css("display","block");

// //（５）ページ切換用、自作関数作成
// // var change;
//   function changePage(){
//     $(".main-top_slide img").fadeOut(1000);
//     $(".main-top_slide img").eq(page).fadeIn(1000);
//   };

// //（６）～秒間隔でイメージ切換の発火設定
//   var Timer;

//   function startTimer(){
//     Timer =setInterval(function(){
//       if(page == lastPage){
//         page = 0;
//         changePage();
//       }else{
//         page ++;
//         changePage();
//       };
//     },5000);
//     //↑↑91行目の「,」の後ろに数値を入れると間隔が設定できるが挙動がおかしくなる

//   }
// //（７）～秒間隔でイメージ切換の停止設定
//   function stopTimer(){
//   clearInterval(Timer);
//   }

// //（８）タイマースタート
//   startTimer();


// 特徴コンテンツ横スクロール
  const obj = $(".main-chara_item");
  const oddIn = $(".main-chara_item_1, .main-chara_item_3");
  const evenIn = $(".main-chara_item_2, .main-chara_item_4");
  $(window).on('scroll',function(){
    obj.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'opacity': '1'
        });
      } else {
        $(this).css({
          'opacity': '0'
        });
      }
    });
    oddIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(-32,0px)'
        });
      }
    });
    evenIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(32px,0)'
        });
      }
    });
  });
});
