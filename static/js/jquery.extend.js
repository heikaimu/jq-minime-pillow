/*
 * @Description: 
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-05-26 09:50:40
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2021-05-26 12:24:57
 */
(function ($) {

  /**
   * div滚动到指定子节点
   * @param {*} ele - 子节点jquery对象
   * @param {*} duration - 动画时间
   * @param {*} offset - 偏移
   */
  $.fn.scrollToEle = function (ele, duration = 0, offset = 0) {
    $(this).animate({
      scrollTop: ele.offset().top - $(this).offset().top + $(this).scrollTop() - offset
    }, duration)
  }

  /**
   * 返回滚动区域当前激活的item index
   * @param {*} className - 块的类名
   * @param {*} cb - 回调函数
   */
  $.fn.scrollEleIndex = function (className, cb) {
    const itemOffsetTopList = [];
    const containerOffsetTop = $(this).offset().top;
    const containerScrollTop = $(this).scrollTop();
    $("." + className).each(function () {
      itemOffsetTopList.push($(this).offset().top - containerOffsetTop) - containerScrollTop;
    })

    $(this).off().on('scroll', function () {
      const containerScrollTop = $(this).scrollTop();
      for (let i = itemOffsetTopList.length - 1; i >= 0; i--) {
        if (containerScrollTop >= itemOffsetTopList[i]) {
          cb(i);
          return;
        }
      }
    })
  }

})(jQuery);