window.app = {
  version: '1.0.11',
  controllers: { nt: {}, bvt: {} },
  grids: {},
  shapes: {},
  models: {},
  locales: {},

  i18n: {
    locale: "he",

    t: function(key) {
      return app.locales[this.locale][key];
    },

    init: function() {
      var params = new URLSearchParams(window.location.search);
      if (params.has('locale') && params.get('locale').toLowerCase() === 'en' ) {
        this.locale = 'en';
      }
    }
  },

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
        app.currTrial.setup();
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
    this.instructions = false;
    this.inProgress = false;
    this.paused = false;
    this.done = false;

    this.setup = function() {
      this.instructions = true;
      this.paused = false;
      app.canvas.resetDimensions();
      app.canvas.clear();
      app.layout.resetProgress();
      app.layout.removePauseMessage();
      app.layout.showInstructions(this.controllerInstance.id);
    }

    this.start = function() {
      this.instructions = false;
      app.layout.removeInstructions();
      this.controllerInstance.setup();
      this.scheduleNext();
    }

    this.end = function() {
      this.done = true;
      app.controllers.navigation.stop();
    }

    this.pause = function() {
      this.paused = true;
      app.layout.showPauseMessage();
    }

    this.unpause = function() {
      this.paused = false;
      app.layout.removePauseMessage();
      if (!this.inProgress) {
        this.scheduleNext();
      }
    }

    this.scheduleNext = function() {
      var self = this;
      var ms = Math.random() * 1000 + 3000;
      this.inProgress = true;
      setTimeout(function() { self.next() }, ms);
    }

    this.next = function() {
      if (this.done) {
        this.inProgress = false;
        return;
      }

      if (this.paused) {
        this.inProgress = false;
        return;
      }

      var self = this;
      var nextFinished = function(callback) {
        return function() {
          if (callback) { callback() };
          self.inProgress = false;

          self.currIndex++;
          if (self.currIndex >= self.controllerInstance.params.length) {
            self.done = true;
          } else {
            self.scheduleNext();
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
  app.i18n.init();
  app.layout.init();
  app.sounds.init();
  app.canvas.init(app.layout.width, app.layout.height);
  app.calibrationCanvas.init();
  app.calibrationCanvas.show();
  app.controllers.navigation.init();
  $.each(app.controllers.nt, function(_key, controller) { controller.init() });
  $.each(app.controllers.bvt, function(_key, controller) { controller.init() });

  $(window).on('keydown', function(e) {
    if (!app.currTrial) {
      return;
    }

    if (e.which === 9 || e.which === 27) {
      // Tab or Esc
      if (app.currTrial.paused || app.currTrial.instructions || app.currTrial.done) {
        app.currTrial.end();
      } else {
        app.currTrial.pause();
      }
      e.preventDefault();
    } else if (app.currTrial && app.currTrial.paused && e.which !== 0 && !e.metaKey && !e.ctrlKey && !e.altKey) {
      app.currTrial.unpause();
    } else if (e.which === 32) {
      // Space
      if (app.currTrial.instructions) {
        app.currTrial.start();
      } else {
        app.layout.showSpacePress();
      }
    }
  });

  $('#instructions-glass').on('click', function() { app.currTrial.start() });
});
