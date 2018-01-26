window.app.layout = {
  pixelsPerCm: 45,

  init: function() {
    this.resetHeight();
    $(window).on('resize', this.resetHeight);
  },

  resetHeight: function() {
    this.width = $('body').width();
    this.height = $('body').height();
    // $('body').css('line-height', this.height + 'px');
  },

  fullScreen: function() {
    var el = document.documentElement,
      rfs = el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen;

    rfs.call(el);
  }
}
