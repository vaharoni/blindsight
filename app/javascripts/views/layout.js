window.app.layout = {
  pixelsPerCm: 45,

  init: function() {
    this.resetDimensions();
    $(window).on('resize', this.resetDimensions);
  },

  resetDimensions: function() {
    this.width = $(document).width();
    this.height = $(document).height();
  },

  length: function(cm) {
    return cm * this.pixelsPerCm;
  }

  // For some reason moving programmatically to full screen did not change the height correctly.
  // fullScreen: function() {
  //   var el = document.documentElement,
  //     rfs = el.requestFullscreen
  //       || el.webkitRequestFullScreen
  //       || el.mozRequestFullScreen
  //       || el.msRequestFullscreen;
  //
  //   rfs.call(el);
  // },
}
