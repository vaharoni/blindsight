window.app.controllers.step.two = {
  init: function() {
    $('.bvt, .nt').on('click', function() {
      $('#step-2, #step-3').toggleClass('d-none');
    });
  },

  stop: function() {
    $('#step-2').removeClass('d-none');
    $('#step-3').addClass('d-none');
  }
}
