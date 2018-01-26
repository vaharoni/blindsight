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
    [-1, 1], [2, 1], [1, 2], [1, -2], [2, 1], [-2, -2], [-2, 1]];


  this.setup = function() {
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'yellow');
    FixationDot.new(0, 0).show();
  }

  this.run = function(param, done) {
    var TrialDot = new app.shapes.dotClass(app.grids.fourByFour, 1.5);

    setTimeout(function() {
      var dot = TrialDot.new.apply(TrialDot, param);
      dot.show();
      setTimeout(done(dot.hide), 500);
    }, 1500)
  }
}
app.controllers.bvt.localization = app.buildTrialController(controller);
