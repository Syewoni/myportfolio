// 마우스커서
$(function () {
  $(document).mousemove(function (e) {
    $(".mouse").css("top", e.pageY);
    $(".mouse").css("left", e.pageX);
  });
});
