var controller = function() {
  this.trigger = '#bvt-localization';

  this.name = 'BVT localization';

  // Ruby:
  //  ([-2,-1,1,2].product([-2,1,1,2]) * 6).shuffle
  this.params = [[-2, 1], [2, -2], [1, 1], [-1, 1], [2, 1], [-1, 1], [-1, -2], [-2, -2], [-1, 2], [1, 1], [-2, 1],
    [-1, -2], [2, 1], [2, 1], [1, 1], [-1, 1], [-2, 1], [1, 2], [2, 1], [-1, -2], [1, -2], [2, 1], [1, -2], [2, 1],
    [-2, 1], [-2, 2], [-2, 2], [2, -2], [-2, 1], [-1, 2], [-2, 2], [2, 1], [-2, -2], [1, 1], [1, -2], [-1, 2], [-2, 1],
    [-2, -2], [-2, -2], [1, -2], [1, 1], [-1, 1], [-1, 1], [2, 1], [-2, -2], [2, 2], [1, 1], [-2, 1], [1, 1], [2, -2],
    [-1, 1], [2, 2], [2, -2], [-1, 1], [1, 2], [-1, 1], [-1, -2], [2, 2], [-1, 2], [1, 1], [2, 2], [2, 1], [-2, 2],
    [2, 2], [1, 1], [-2, 1], [2, 1], [1, 1], [2, -2], [-1, 2], [1, 1], [-1, 1], [-1, -2], [-2, 1], [-1, 1], [-1, 2],
    [-1, -2], [-2, 1], [1, 2], [1, 2], [2, 2], [-2, 2], [2, -2], [-1, 1], [-2, 1], [-2, 2], [1, 1], [1, 2], [1, -2],
    [-1, 1], [2, 1], [1, 2], [1, -2], [2, 1], [-2, -2], [-2, 1]],

  this.run = async function(params) {
    var TrialDot = new app.shapes.dotClass(app.grids.fourByFour, 1.5);
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'yellow');
    var fixationDot = FixationDot.new(0,0);
    fixationDot.show();

    await app.sleep(2000);

    for (i = 0; this.work && i < params.length; i++) {
      var dot = TrialDot.new.apply(TrialDot, params[i]);
      dot.show();
      await app.sleep(500);
      dot.hide();
      await app.sleep(3500);
    }
  }
}
app.controllers.bvt.localization = app.buildTrialController(controller);
