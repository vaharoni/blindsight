app.controllers.bvt.letterIdentification = {
  // Ruby:
  //  ([-2,-1,1,2].product([-2,1,1,2], %w(L A C)) * 2).shuffle
  order: [[1, 2, "A"], [2, -2, "A"], [-1, -2, "A"], [-2, -2, "L"], [-2, 2, "A"], [2, 1, "L"], [2, -2, "A"],
    [-1, 1, "A"], [2, 1, "C"], [1, 1, "L"], [2, 2, "L"], [-1, 2, "C"], [-1, 2, "A"], [-2, 1, "A"], [1, -2, "C"],
    [-2, 1, "L"], [2, -2, "C"], [-2, 1, "C"], [-1, 1, "A"], [-2, 1, "A"], [2, 1, "A"], [1, 1, "L"], [-1, 1, "A"],
    [-2, -2, "A"], [-1, 1, "A"], [-2, 1, "L"], [-2, 1, "A"], [2, 1, "C"], [2, 1, "A"], [-2, -2, "C"], [2, 2, "C"],
    [2, 2, "C"], [1, 1, "A"], [1, 2, "C"], [-1, 1, "C"], [2, 1, "A"], [-1, -2, "A"], [2, -2, "C"], [-1, 1, "L"],
    [-1, 1, "C"], [1, 1, "C"], [-1, 2, "L"], [1, 1, "L"], [-2, 1, "C"], [1, 1, "L"], [-2, 2, "L"], [-1, 1, "L"],
    [-1, 2, "A"], [1, -2, "A"], [-1, -2, "L"], [2, -2, "L"], [1, 1, "A"], [-1, 1, "C"], [-2, 1, "C"], [-2, 1, "C"],
    [2, 2, "A"], [2, 2, "A"], [2, 1, "C"], [-2, 1, "A"], [-2, -2, "C"], [2, 1, "L"], [-1, -2, "C"], [2, 1, "L"],
    [-1, -2, "L"], [1, 1, "C"], [2, 1, "A"], [-2, -2, "A"], [1, 2, "C"], [1, 2, "A"], [1, 2, "L"], [-2, 1, "L"],
    [1, -2, "L"], [1, 1, "A"], [1, -2, "A"], [-2, 2, "A"], [1, -2, "L"], [2, 1, "L"], [1, -2, "C"], [-1, 2, "L"],
    [-2, 2, "C"], [-1, 1, "C"], [-2, 2, "L"], [2, -2, "L"], [2, 2, "L"], [-2, 2, "C"], [2, 1, "C"], [-1, 1, "L"],
    [1, 2, "L"], [1, 1, "A"], [-1, 1, "L"], [-2, 1, "L"], [-1, -2, "C"], [1, 1, "C"], [1, 1, "C"], [-1, 2, "C"],
    [-2, -2, "L"]],

  init: function() {
    var self = this;
    $('#bvt-letter-identification').on('click', function() {
      app.currTrial = new self.trial(self.order);
      app.currTrial.start();
    })
  },

  trial: function(order) {
    this.start = async function() {
      console.log('starting letter identification');

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

      console.log('letter identification done');
    }
  }
}
app.controllers.bvt.localization.trial.prototype = new app.trialProto();
