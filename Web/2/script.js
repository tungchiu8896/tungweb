$(function () {
  /* document ready喔個js檔只要執行一次就可以 */
  // 移除行動裝置的背景影片
  if ($(window).width() < 821) {
    $("#about video").remove();
  }

  // 交替漢堡按鈕
  $(".hamburger").click(function () {
    // .hamburger交替切換 .is-active
    $(this).toggleClass("is-active");
    // .navigation 交替切換 .show
    $(".navigation").toggleClass("show");
  });

  // 滑動至指定位置
  $(".menu a").click(function () {
    let btn = $(this).attr("href");
    let pos = $(btn).offset();
    $("html,body").animate({ scrollTop: pos.top }, 1000);
  });

  // 滑動至頂
  $("#gotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

  // 置頂按鈕淡入淡出
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#gotop").stop().fadeTo('fast',1);
    } else {
      $("#gotop").stop().fadeOut('fast');
    }
  });
});

// jQuery Smoove
$('.smoove').smoove({
  offset:'20%'
});
