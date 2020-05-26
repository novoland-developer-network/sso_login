$(function () {
  let message = $(".message").show().remove()

  $("form").submit(function () {
    const name_input = $("#username")
    const name = $.trim(name_input.val())

    if (name === "" || name === null) {
      showTip("请输入有效的邮箱、手机号或用户名")
      name_input.trigger("focus")

      return false
    }
    return true
  })

  /**
   * 显示提示框
   * @param msg
   * @param autoHide
   */
  function showTip (msg, autoHide = true) {
    message.text(msg)
    message.addClass("ms-motion-slideUpIn")
    $(".form-field").before(message)

    if (autoHide) {
      setTimeout(function () {
        message.removeClass("ms-motion-slideUpIn").
          addClass("ms-motion-slideUpOut")
        setTimeout(function () {
          message = message.remove()
        }, 100)
      }, 3000)
    }
  }

})