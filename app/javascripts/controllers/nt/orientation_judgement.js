var controller = function() {
  this.id = 'ntOrientationJudgement';
  this.trigger = '#nt-orientation-judgement';
  this.name = 'NT judgement of orientation';

  // Ruby:
  //  (([-3, -2, -1, 1, 2, 3]).product([-1, 0, 1], [-1, 0, 1]) * 2).shuffle
  this.params = [[1, 0, -1], [2, -1, 1], [-2, 0, 1], [-2, -1, 1], [3, -1, -1], [-3, 1, 0], [-1, 1, 1], [-1, 1, 0],
    [-1, -1, 0], [2, 1, 0], [-2, -1, 1], [-2, 1, -1], [-3, -1, -1], [-3, 1, 1], [3, 0, 1], [1, 0, 0], [1, 1, 0],
    [-2, 1, -1], [-1, 0, 0], [2, 0, 1], [-1, 1, -1], [3, 1, 0], [-3, 1, -1], [2, 0, -1], [1, -1, -1], [1, 1, -1],
    [3, 1, 1], [3, -1, 1], [1, -1, 0], [-2, 0, -1], [-2, -1, -1], [1, -1, 0], [3, 1, -1], [3, -1, -1], [2, 0, 0],
    [-1, 0, 0], [-3, -1, 0], [3, -1, 0], [2, 1, -1], [-2, 0, 1], [2, 0, 1], [-1, -1, -1], [3, 0, 0], [-3, -1, 0],
    [-1, -1, 0], [3, -1, 0], [-2, 1, 1], [-1, 1, 1], [-1, -1, 1], [-3, -1, 1], [3, 1, 0], [-2, 1, 0], [-2, 0, -1],
    [3, 0, -1], [-1, 0, -1], [-1, 0, -1], [-3, 0, 0], [-3, 1, 0], [-3, -1, -1], [-2, -1, -1], [2, -1, -1], [-3, 0, -1],
    [1, 1, 1], [-3, 0, 1], [-3, 1, 1], [1, 0, 1], [1, -1, 1], [-2, 0, 0], [1, 0, 1], [1, 1, 0], [1, -1, -1],
    [-3, 0, -1], [-3, -1, 1], [2, 1, 1], [-3, 0, 0], [3, 1, 1], [2, 0, 0], [-1, -1, 1], [1, 1, -1], [-2, 0, 0],
    [-1, 0, 1], [3, 0, -1], [-1, -1, -1], [2, 1, 0], [-1, 1, 0], [1, 0, 0], [-2, 1, 1], [1, 1, 1], [-2, -1, 0],
    [1, -1, 1], [3, 1, -1], [2, -1, 0], [-3, 0, 1], [2, 1, -1], [-3, 1, -1], [1, 0, -1], [-1, 0, 1], [3, -1, 1],
    [-1, 1, -1], [2, -1, 1], [-2, 1, 0], [3, 0, 1], [2, 0, -1], [2, 1, 1], [2, -1, -1], [2, -1, 0], [-2, -1, 0],
    [3, 0, 0]];

  this.paramToCsv = function(param) {
    var orientation = param[2] === -1 ? "\\" : (param[2] === 0 ? "|" : "/");
    return (Math.abs(param[0]) === 1 ? "Near" : "Far") + "," + (param[0] < 0 ? "Left" : "Right") + "," + orientation;
  }

  this.setup = function() {
    var FixationDot = new app.shapes.dotClass(app.grids.sixByThree, 0.8, 'red');
    FixationDot.new(0,0).show();
  }

  this.run = function(param, done) {
    var Rectangle = new app.shapes.rectangleClass(app.grids.sixByThree, 1, 3, 'black');
    var rect = Rectangle.new.apply(Rectangle, param);
    rect.show();
    app.sounds.chooseEffect(param[0]);
    setTimeout(done(rect.hide), 300);
  }
}
app.controllers.nt.orientationJudgement = app.buildTrialController(controller);
