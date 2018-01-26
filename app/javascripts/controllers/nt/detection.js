var controller = function() {
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
    [-2, 2], [], [], [-1, -2], [], [-1, 1], [1, 2], [], [1, 2], [], [], [-2, 1], [], [1, 2]],

    this.run = async function(params) {
    var TrialDot = new app.shapes.dotClass(app.grids.fourByFour, 1.5);
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'yellow');
    var fixationDot = FixationDot.new(0,0);
    fixationDot.show();

    await app.sleep(2000);

    for (i = 0; this.work && i < params.length; i++) {
      if (params[i].length > 0) {
        var dot = TrialDot.new.apply(TrialDot, params[i]);
        dot.show();
        await app.sleep(500);
        dot.hide();
      }
      await app.sleep(3500);
    }
  }
}
app.controllers.nt.detection = app.buildTrialController(controller);
