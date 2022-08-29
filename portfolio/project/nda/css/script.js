// 서브메뉴
$(document).ready(function () {
  $("#side_menu > ul > .sub_menu").hide();
  $("#side_menu > ul > li").click(function () {
    $("ul", this).slideToggle("fast");
  });
});

//  NDA history 슬라이드 배너
$(document).ready(function () {
  var $banner = $(".banner").find("ul");

  var $bannerWidth = $banner.children().outerWidth();
  //   var $bannerHeight = $banner.children().outerHeight();
  var $bannerLength = $banner.children().length;
  var rollingId;

  //정해진 초마다 함수 실행
  rollingId = setInterval(function () {
    rollingStart();
  }, 5000);

  //마우스 오버시 슬라이드 멈춤
  $banner.mouseover(function () {
    clearInterval(rollingId);
    $(this).css("cursor", "pointer");
  });
  //마우스 아웃 슬라이드 재시작
  $banner.mouseout(function () {
    rollingId = setInterval(function () {
      rollingStart();
    }, 3000);
    $(this).css("cursor", "default");
  });

  function rollingStart() {
    $banner.css("width", $bannerWidth * $bannerLength + "px");
    // $banner.css("height", $bannerHeight + "px");
    $banner.animate({ left: -$bannerWidth + "px" }, 1500, function () {
      $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
      $(this).find("li:first").remove();
      $(this).css("left", 0);
    });
  }
});
