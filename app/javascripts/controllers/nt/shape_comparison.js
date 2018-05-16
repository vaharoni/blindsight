var controller = function() {
  this.id = 'ntShapeComparison';
  this.trigger = '#nt-shape-comparison';
  this.name = 'NT shape comparison';

  // Ruby:
  //  (%w(R T).product([1, 2]).product(%w(R T).product([-1, -2])) * 8).shuffle
  this.params = [[["R", 1], ["R", -2]], [["R", 1], ["T", -2]], [["R", 2], ["R", -1]], [["T", 2], ["R", -1]],
    [["R", 2], ["R", -1]], [["T", 2], ["T", -1]], [["T", 2], ["T", -1]], [["R", 2], ["R", -1]], [["T", 2], ["R", -1]],
    [["R", 2], ["T", -1]], [["R", 2], ["R", -1]], [["R", 1], ["T", -1]], [["R", 1], ["R", -1]], [["R", 1], ["R", -2]],
    [["T", 1], ["T", -1]], [["T", 1], ["R", -1]], [["R", 1], ["R", -2]], [["T", 1], ["T", -1]], [["T", 2], ["T", -1]],
    [["R", 1], ["T", -1]], [["T", 1], ["R", -2]], [["T", 1], ["R", -2]], [["R", 2], ["T", -1]], [["R", 1], ["R", -1]],
    [["R", 2], ["R", -2]], [["R", 1], ["R", -1]], [["T", 1], ["R", -2]], [["T", 1], ["R", -1]], [["R", 1], ["T", -2]],
    [["T", 1], ["R", -2]], [["R", 1], ["T", -2]], [["T", 1], ["R", -2]], [["T", 1], ["T", -2]], [["T", 2], ["T", -2]],
    [["T", 1], ["R", -1]], [["R", 1], ["T", -1]], [["T", 2], ["R", -1]], [["T", 2], ["T", -2]], [["R", 1], ["T", -2]],
    [["T", 1], ["R", -2]], [["T", 2], ["T", -1]], [["R", 1], ["R", -1]], [["R", 1], ["T", -1]], [["T", 2], ["T", -2]],
    [["T", 2], ["R", -2]], [["R", 1], ["R", -2]], [["T", 1], ["T", -1]], [["R", 1], ["T", -2]], [["T", 2], ["R", -2]],
    [["R", 2], ["T", -2]], [["T", 2], ["T", -1]], [["R", 2], ["T", -1]], [["R", 1], ["T", -1]], [["R", 2], ["R", -2]],
    [["R", 2], ["R", -2]], [["R", 2], ["T", -2]], [["R", 1], ["T", -1]], [["T", 1], ["R", -2]], [["T", 1], ["T", -2]],
    [["T", 2], ["R", -2]], [["R", 2], ["R", -1]], [["T", 2], ["R", -1]], [["R", 1], ["R", -1]], [["R", 2], ["R", -2]],
    [["R", 2], ["R", -2]], [["R", 1], ["R", -1]], [["R", 2], ["T", -1]], [["T", 2], ["T", -1]], [["T", 2], ["R", -2]],
    [["R", 2], ["R", -2]], [["T", 2], ["R", -2]], [["T", 2], ["T", -2]], [["T", 1], ["R", -1]], [["T", 2], ["T", -2]],
    [["T", 1], ["T", -2]], [["R", 1], ["R", -2]], [["T", 1], ["T", -1]], [["R", 1], ["R", -2]], [["T", 2], ["R", -2]],
    [["T", 2], ["R", -1]], [["T", 1], ["R", -1]], [["R", 1], ["R", -1]], [["T", 1], ["T", -2]], [["T", 1], ["T", -1]],
    [["R", 2], ["T", -1]], [["T", 1], ["T", -2]], [["T", 2], ["R", -1]], [["T", 1], ["R", -1]], [["T", 2], ["T", -2]],
    [["R", 2], ["T", -2]], [["T", 1], ["R", -2]], [["T", 2], ["R", -2]], [["R", 2], ["T", -2]], [["R", 1], ["R", -2]],
    [["R", 2], ["T", -2]], [["T", 1], ["T", -2]], [["R", 2], ["R", -1]], [["T", 2], ["T", -2]], [["R", 2], ["T", -2]],
    [["R", 2], ["R", -2]], [["R", 1], ["T", -2]], [["T", 1], ["R", -1]], [["T", 2], ["T", -1]], [["R", 2], ["T", -2]],
    [["R", 1], ["R", -1]], [["R", 1], ["T", -2]], [["R", 2], ["R", -2]], [["R", 2], ["T", -1]], [["R", 1], ["R", -2]],
    [["R", 2], ["R", -1]], [["R", 1], ["T", -1]], [["R", 2], ["T", -2]], [["T", 2], ["R", -1]], [["T", 1], ["T", -2]],
    [["T", 1], ["T", -2]], [["T", 1], ["T", -1]], [["T", 1], ["T", -1]], [["T", 2], ["T", -1]], [["R", 2], ["R", -1]],
    [["R", 2], ["T", -1]], [["R", 1], ["T", -2]], [["R", 1], ["T", -1]], [["R", 2], ["T", -1]], [["T", 2], ["R", -1]],
    [["T", 2], ["T", -2]], [["T", 1], ["T", -1]], [["T", 2], ["R", -2]], [["T", 1], ["R", -1]]];

  this.paramToCsv = function(param) {
    return (param[1][1] === -1 ? "Near" : "Far") + "," + (param[0][0] === param[1][0] ? app.i18n.t("same") : app.i18n.t("different"));
  }

  this.setup = function() {
    // We use 0.8 instead of 6.5 diameter for the fixation dot (as described in paper), but we maintain a virtual
    // perimeter of 6.5 by the grid, effectively pushing shapes away from the fixation dot by an extra 6.5/2 degrees.
    var FixationDot = new app.shapes.dotClass(app.grids.horizontal, 0.8, 'red');
    FixationDot.new(0,0).show();
  }

  this.run = function(param, done) {
    var Triangle = new app.shapes.triangleClass(app.grids.horizontal, 1, 3, 'black');
    var Rectangle = new app.shapes.rectangleClass(app.grids.horizontal, 1, 3, 'black');

    var drawShape = function(arr) {
      var shape = arr[0] === "R" ? Rectangle.new(arr[1], 1) : Triangle.new(arr[1], 1);
      shape.show();
      return shape;
    }

    var right = drawShape(param[0]);
    var left = drawShape(param[1]);
    right.show();
    left.show();
    app.sounds.both();

    setTimeout(done(function() {
      right.hide();
      left.hide();
    }), 300);
  }
}
app.controllers.nt.shapeComparison = app.buildTrialController(controller);
