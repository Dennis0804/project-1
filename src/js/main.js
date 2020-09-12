//jquery 插件使用
//实现翻页效果
(function ($) {
  $(window).on("load", function () {
    let page = document.querySelectorAll(".animated-sections");
    if (page[0]) {
      PageTransitions.init({ menu: "nav.main-menu" });
    }
  });
})(jQuery);


