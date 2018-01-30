window.app.layout = {
  init: function() {
    this.resetDimensions();
    $(window).on('resize', this.resetDimensions);
  },

  resetDimensions: function() {
    this.width = $(document).width();
    this.height = $(document).height();
  },

  length: function(cm) {
    return cm * app.models.pixelsPerCm.val();
  },

  showProgress: function(curr, total) {
    $('#trial-index').text(curr + ' / ' + total);
    this.resetSpacePress();
  },

  showSpacePress: function() {
    $('#space-press').removeClass('d-none');
  },

  resetSpacePress: function() {
    $('#space-press').addClass('d-none');
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
