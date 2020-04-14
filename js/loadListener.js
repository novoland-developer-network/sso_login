/*
 * 遮罩层和背景图/表单加载顺序
 */

// 执行到这一行就执行
const template = $('#form-section').remove().removeClass('hide')

$(function () {
  // 如果有缓存，直接触发
  if ($('#bgImage')[0].complete) {
    $('.mask').hide()
    $('body').prepend(template)
  }

  // 如果没有缓存，在加载成功之后再执行
  $('img').on('load', function () {
    $('.mask').hide()
    $('body').prepend(template)
  })
})
