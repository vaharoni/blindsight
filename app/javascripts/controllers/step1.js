window.app.controllers.step.one = {
  init: function() {
    $('#step-1').removeClass('d-none');

    $('#start').on('click', function() {
      app.layout.fullScreen();
      $('#step-1, #step-2').toggleClass('d-none');
    });
  },
}
