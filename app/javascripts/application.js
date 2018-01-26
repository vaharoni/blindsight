window.app = {
  controllers: { step: {}, nt: {}, bvt: {} },
  grids: {},
  shapes: {},

  buildTrialController: function(controllerConstructor) {
    var instance;

    var context = function(controllerInstance) {
      this.controllerInstance = controllerInstance;
    }
    context.prototype = new app.contextProto();

    controllerConstructor.prototype.init = function() {
      $(this.trigger).on('click', function() {
        app.currTrial = new context(instance);
        app.currTrial.start();
      })
    }

    instance = new controllerConstructor();
    return instance;
  },

  contextProto: function() {
    this.currIndex = 0;
    this.inProgress = false;
    this.done = false;

    this.start = function() {
      this.controllerInstance.setup();
      this.next();
    }

    this.end = function() {
      app.controllers.step.two.stop();
      app.canvas.clear();
    }

    this.next = function() {
      if (this.done) {
        this.end();
        return;
      }

      this.inProgress = true;
      var self = this;
      var nextFinished = function(callback) {
        return function() {
          callback();
          self.inProgress = false;

          self.currIndex++;
          if (self.currIndex >= self.controllerInstance.params.length) {
            self.done = true;
          }
        }
      }

      $('#trial-index').text((this.currIndex + 1) + ' / ' + this.controllerInstance.params.length);
      var param = this.controllerInstance.params[this.currIndex];
      this.controllerInstance.run(param, nextFinished);
    }
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
    if (e.key === 'Tab') {
      if (app.currTrial) {
        app.currTrial.end();
      }
    }

    if (e.key === 'ArrowRight') {
      if (app.currTrial && !app.currTrial.inProgress) {
        app.currTrial.next();
      }
    }
  });
});
