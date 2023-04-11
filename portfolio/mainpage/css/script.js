// 마우스커서
$(function () {
  $(document).mousemove(function (e) {
    $('.mouse').css("top", e.pageY);
    $('.mouse').css("left", e.pageX);
  });

});





$(document).ready(function () {
  // aos
  AOS.init();

  // 프로젝트 마우스 이벤트

  // lx 하우시스
  $("#lx").mouseover(function () {
    $(".phone").attr("src", "./portfolio/mainpage/images/lx.png");
  });
  // 맥 딜리버리
  $("#mc").mouseover(function () {
    $(".phone").attr("src", "./portfolio/mainpage/images/mc.png");
  });
  // 룬느
  $("#lunne").mouseover(function () {
    $(".phone").attr("src", "./portfolio/mainpage/images/lunne.png");
  });
  // NDA
  $("#nda").mouseover(function () {
    $(".phone").attr("src", "./portfolio/mainpage/images/nda.png");
  });

  // footer 메뉴 색상 변경
  $(window).scroll(function () {
    if ($(this).scrollTop() > 4000) {
      gnb.style.color = "#e1dfdd";
    } else {
      gnb.style.color = "#000";
    }
  });

});

