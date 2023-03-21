// 모달창 닫기
$(document).mouseup(function (e) {
  if ($("button").has(e.target).length === 0) {
    $("#modal").hide();
  }
});

// 서브메뉴
$(document).ready(function () {
  $("#side_menu > ul > .sub_menu").hide();
  $("#side_menu > ul > li").click(function () {
    $("ul", this).slideToggle();
  });
});

// 가로로 움직이는 텍스트
$(function () {
  $(".marquee").marquee({
    duplicated: true,
    delayBeforeStart: 0,
    pauseOnHover: true,
  });
});

// ytPlayer

$(function () {
  // play list 선언
  var videos = [
    { videoURL: "X9HNUQWfzvg", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "9703gEdtZm4", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "V4OurL6FiQQ", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 }
  ];

  // play list 불러오기
  $("#myPlayer1").YTPlaylist(videos, false);
});

$(function () {
  // play list 선언
  var videos = [
    { videoURL: "DorzZhmlLN0", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "Dt7YPeilct8", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "hXlFbhIIewg", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 }
  ];

  // play list 불러오기
  $("#myPlayer2").YTPlaylist(videos, false);
});

$(function () {
  // play list 선언
  var videos = [
    { videoURL: "Doz9s4S42KQ", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "krD441cvA-4", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "7GotVgNcrFQ", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 }
  ];

  // play list 불러오기
  $("#myPlayer3").YTPlaylist(videos, false);
});

$(function () {
  // play list 선언
  var videos = [
    { videoURL: "RqUUZckJVv4", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "TkX8toqt02I", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 },
    { videoURL: "Amso2aDY0tU", containment: 'self', autoPlay: true, mute: true, startAt: 0, opacity: 1, loop: false, showControls: false, useOnMobile: true, stopMovieOnBlur: false, abundance: 0 }
  ];

  // play list 불러오기
  $("#myPlayer4").YTPlaylist(videos, false);
});