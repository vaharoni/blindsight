window.app = {
  controllers: { step: {}, nt: {}, bvt: {} },
  grids: {},
  shapes: {},

  // Usage:
  //  async function() {
  //    await app.sleep(100);
  //  }
  sleep: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

$('document').ready(function(){
  app.layout.init();
  app.canvas.init();
  $.each(app.controllers, function(_key, controllerGroup) {
    $.each(controllerGroup, function(_name, controller) {
      controller.init();
    });
  });

  $(document).on('keydown', function(e) {
    if (e.key == 'Escape') {
      if (app.currTrial) {
        app.currTrial.stop();
        app.controllers.step.two.stop();
      }
    }
  });
});
