$(function () {
  // 移动端输入时隐藏底部
  if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) {
    $('input').focus(function () {
      console.log(123)
      $('footer').hide()
    }).blur(function () {
      $('footer').show()
    })
  }
})

// 安卓横屏时隐藏底部
function rotate() {
  if (window.orientation === 90 || window.orientation === -90) {
    if (/(Android)/i.test(navigator.userAgent)){
      $("footer").hide()
    }
  }else{
    $("footer").show()
  }
}
window.addEventListener("load", rotate, false);
window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", rotate, false);
