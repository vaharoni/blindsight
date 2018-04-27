var controller = function() {
  this.id = 'ntDetection';
  this.trigger = '#nt-detection';
  this.name = 'NT localization';

  // Ruby:
  //   (([-2,-1,1,2].product([-2,1,1,2]) * 6) + [[]] * 64).shuffle
  this.params = [[2, 1], [], [], [-2, 1], [1, 1], [2, -2], [2, -2], [], [1, 1], [-2, 1], [2, 1], [1, 1], [2, 2], [], [],
    [-2, 2], [-1, 2], [-1, -2], [2, 1], [], [], [1, 2], [], [], [-1, 1], [], [-1, 1], [-1, -2], [], [2, 1], [], [],
    [1, -2], [], [], [-2, -2], [], [-1, 1], [], [], [-1, 1], [], [], [1, 1], [2, 1], [2, 2], [], [-1, 2], [1, 1],
    [2, 1], [], [-2, -2], [-1, 2], [2, 1], [1, 1], [2, 2], [-1, 1], [2, -2], [-2, 2], [-2, 1], [], [-1, 1], [], [], [],
    [1, -2], [1, 1], [2, 1], [-2, 2], [-2, 1], [], [-1, -2], [1, 1], [], [-1, -2], [], [], [2, 2], [1, 1], [], [-2, 1],
    [1, -2], [], [-2, -2], [2, 1], [], [1, -2], [1, 1], [-2, -2], [], [], [], [1, 2], [2, 1], [-1, 1], [-2, 2], [],
    [-1, 1], [2, 1], [], [-2, -2], [-2, 2], [2, -2], [-1, 1], [2, 2], [2, -2], [-2, -2], [1, -2], [], [], [], [-2, 1],
    [], [1, -2], [-2, 1], [], [-1, 2], [], [-2, 1], [], [-2, 1], [], [], [-1, 1], [], [], [-2, 1], [2, 2], [1, 1],
    [-2, 1], [], [], [], [1, 2], [2, 1], [1, 1], [-1, 1], [], [-1, 2], [], [2, -2], [], [], [-1, 2], [-1, -2], [],
    [-2, 2], [], [], [-1, -2], [], [-1, 1], [1, 2], [], [1, 2], [], [], [-2, 1], [], [1, 2]];

  this.paramToCsv = function(param) {
    return param.length === 0 ? "Catch" : (Math.abs(param[0]) === 1 ? "Near" : "Far") + "," + (param[0] < 0 ? "Left" : "Right");
  }

  this.setup = function() {
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'red');
    FixationDot.new(0,0).show();
  }

  this.run = function(param, done) {
    var TrialDot = new app.shapes.dotClass(app.grids.fourByFour, 1.5);

    if (param.length > 0) {
      var dot = TrialDot.new.apply(TrialDot, param);
      dot.show();
      setTimeout(done(dot.hide), 400);
    } else {
      setTimeout(done(), 400);
    }
    app.sounds.both();
  }
}
app.controllers.nt.detection = app.buildTrialController(controller);
