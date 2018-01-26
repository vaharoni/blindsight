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
  },

  buildTrialController: function(controllerConstructor) {
    var instance;

    var builder = function() {
      this.start = async function() {
        console.log("Starting " + instance.name);
        await instance.run.call(this, instance.params);
        console.log("Finishing " + instance.name);
      }
    }
    builder.prototype = new app.trialProto();

    controllerConstructor.prototype.init = function() {
      $(this.trigger).on('click', function() {
        app.currTrial = new builder();
        app.currTrial.start();
      })
    }

    instance = new controllerConstructor();
    return instance;
  },

  trialProto: function() {
    this.work = true;

    this.stop = function() {
      this.work = false;
    };
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
        app.canvas.clear();
      }
    }
  });
});
