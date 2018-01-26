app.controllers.bvt.localization = {
  // Ruby:
  //  ([-2,-1,1,2].product([-2,1,1,2]) * 6).shuffle
  order: [[-2, 1], [2, -2], [1, 1], [-1, 1], [2, 1], [-1, 1], [-1, -2], [-2, -2], [-1, 2], [1, 1], [-2, 1],
    [-1, -2], [2, 1], [2, 1], [1, 1], [-1, 1], [-2, 1], [1, 2], [2, 1], [-1, -2], [1, -2], [2, 1], [1, -2], [2, 1],
    [-2, 1], [-2, 2], [-2, 2], [2, -2], [-2, 1], [-1, 2], [-2, 2], [2, 1], [-2, -2], [1, 1], [1, -2], [-1, 2], [-2, 1],
    [-2, -2], [-2, -2], [1, -2], [1, 1], [-1, 1], [-1, 1], [2, 1], [-2, -2], [2, 2], [1, 1], [-2, 1], [1, 1], [2, -2],
    [-1, 1], [2, 2], [2, -2], [-1, 1], [1, 2], [-1, 1], [-1, -2], [2, 2], [-1, 2], [1, 1], [2, 2], [2, 1], [-2, 2],
    [2, 2], [1, 1], [-2, 1], [2, 1], [1, 1], [2, -2], [-1, 2], [1, 1], [-1, 1], [-1, -2], [-2, 1], [-1, 1], [-1, 2],
    [-1, -2], [-2, 1], [1, 2], [1, 2], [2, 2], [-2, 2], [2, -2], [-1, 1], [-2, 1], [-2, 2], [1, 1], [1, 2], [1, -2],
    [-1, 1], [2, 1], [1, 2], [1, -2], [2, 1], [-2, -2], [-2, 1]],

  init: function() {
    var self = this;
    $('#bvt-localization').on('click', function() {
      app.currTrial = new self.trial(self.order);
      app.currTrial.start();
    })
  },

  trial: function(order) {
    this.start = async function() {
      console.log('starting localization');

      var TrialDot = new app.shapes.dotClass(1.5, app.grids.fourByFour);
      var FixationDot = new app.shapes.dotClass(0.8, app.grids.fourByFour, 'yellow');
      var fixationDot = FixationDot.new(0,0);
      fixationDot.show();

      await app.sleep(3500);

      for (i = 0; this.work && i < order.length; i++) {
        var dot = TrialDot.new(order[i][0], order[i][1]);
        dot.show();
        await app.sleep(500);
        dot.hide();
        await app.sleep(3500);
      }

      console.log('done localization');
    }
  }
}
app.controllers.bvt.localization.trial.prototype = new app.trialProto();
