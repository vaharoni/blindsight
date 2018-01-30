window.app.controllers.step.two = {
  init: function() {
    $('.bvt, .nt').on('click', function() {
      $('#step-2, #step-3').toggleClass('d-none');
    });

    $('#calibrate-minus').on('click', function() {
      app.models.pixelsPerCm.decrement();
      app.calibrationCanvas.reset();
    });

    $('#calibrate-plus').on('click', function() {
      app.models.pixelsPerCm.increment();
      app.calibrationCanvas.reset();
    });

    $('#calibrate-reset').on('click', function() {
      app.models.pixelsPerCm.reset();
      app.calibrationCanvas.reset();
    });
  },

  stop: function() {
    $('#step-2').removeClass('d-none');
    $('#step-3').addClass('d-none');
  }
}
