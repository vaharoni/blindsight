window.app = {
  controllers: { step: {}, nt: {}, bvt: {} },
  grids: {},
  shapes: {},
  models: {},

  export: function() {
    var str = "";
    $.each(app.controllers.bvt, function(_key, controller) { str += controller.export() + "\n" });
    $.each(app.controllers.nt, function(_key, controller) { str += controller.export() + "\n" });
    console.log(str);
  },

  buildTrialController: function(controllerConstructor) {
    controllerConstructor.prototype = app.controllerProto;
    return new controllerConstructor();
  },

  controllerProto: {
    init: function() {
      var self = this;
      $(this.trigger).on('click', function() {
        app.currTrial = new app.trialContext(self);
        app.currTrial.start();
      })
    },

    export: function() {
      var str = this.name + "\n";
      for (i = 0; i < this.params.length; i++) {
        str += (i + 1) + "," + this.paramToCsv(this.params[i]) + "\n";
      }
      return str;
    }
  },

  trialContext: function(controller) {
    this.controllerInstance = controller;
    this.currIndex = 0;
    this.inProgress = false;
    this.done = false;

    this.start = function() {
      app.canvas.resetDimensions();
      app.canvas.clear();
      this.controllerInstance.setup();
      this.next();
    }

    this.end = function() {
      app.controllers.step.two.stop();
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
          if (callback) { callback() };
          self.inProgress = false;

          self.currIndex++;
          if (self.currIndex >= self.controllerInstance.params.length) {
            self.done = true;
          }
        }
      }

      app.layout.showProgress(this.currIndex + 1, this.controllerInstance.params.length);

      var param = this.controllerInstance.params[this.currIndex];
      this.controllerInstance.run(param, nextFinished);
    }
  }
}

$('document').ready(function(){
  app.layout.init();
  app.canvas.init();
  app.sounds.init();
  $.each(app.controllers, function(_key, controllerGroup) {
    $.each(controllerGroup, function(_name, controller) {
      controller.init();
    });
  });

  $(window).on('keydown', function(e) {
    // Tab or Esc
    if (e.which === 9 || e.which === 27) {
      if (app.currTrial) {
        app.currTrial.end();
      }
      e.preventDefault();
    }

    // Right Arrow
    if (e.which === 39) {
      if (app.currTrial && !app.currTrial.inProgress) {
        app.currTrial.next();
      }
    }

    // Space
    if (e.which === 32) {
      app.layout.showSpacePress();
    }
  });
});
