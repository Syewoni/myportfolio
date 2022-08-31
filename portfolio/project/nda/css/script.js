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
    $("ul", this).slideToggle("fast");
  });
});
