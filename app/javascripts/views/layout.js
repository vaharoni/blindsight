window.app.layout = {
  init: function() {
    this.resetDimensions();
    this.setupPause();
    this.showVersion();

    var self = this;
    $(window).on('resize', function() {
      self.resetDimensions();
    });
  },

  length: function(cm) {
    return cm * app.models.pixelsPerCm.val();
  },

  showVersion: function() {
    $('.version').text('Version ' + app.version);
  },

  resetDimensions: function() {
    this.width = $(window).width();
    this.height = $(window).height();
  },

  setupPause: function() {
    $('.pause-template').html("<p>- PAUSE -</p>" + app.i18n.t('pauseText1') + "<br/>" + app.i18n.t('pauseText2'));
  },

  resetProgress: function() {
    $('#trial-index').text('');
    this.resetSpacePress();
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
  },

  showPauseMessage: function() {
    $('#pause-glass').removeClass('d-none');
  },

  removePauseMessage: function() {
    $('#pause-glass').addClass('d-none');
  },

  showInstructions: function(controllerId) {
    $('.instructions-template').html("<p>" + app.i18n.t(controllerId) + "</p><p>" + app.i18n.t('instructionsSuffix') + "</p>");
    $('#instructions-glass').removeClass('d-none');
  },

  removeInstructions: function() {
    $('#instructions-glass').addClass('d-none');
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
