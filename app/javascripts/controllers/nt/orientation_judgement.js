var controller = function() {
  this.trigger = '#nt-orientation-judgement';

  this.name = 'NT judgement of orientation';

  // Ruby:
  //  (%w(R T).product([1, 2]).product(%w(R T).product([-1, -2])) * 8).shuffle
  this.params = [],

    this.run = async function(params) {
    var FixationDot = new app.shapes.dotClass(app.grids.sixBySix, 0.8, 'yellow');
    var fixationDot = FixationDot.new(0,0);
    fixationDot.show();

    var Rectangle = new app.shapes.rectangleClass(app.grids.sixBySix, 1, 3, 'white');
    var shape = Rectangle.new(3, 3);
    shape.show()
    var shape = Rectangle.new(-3, -3);
    shape.show()
    var shape = Rectangle.new(-2, -2);
    shape.show()
    var shape = Rectangle.new(2, 2);
    shape.show()
    var shape = Rectangle.new(-1, -1);
    shape.show()
    var shape = Rectangle.new(1, 1);
    shape.show()

    // var drawShape = function(arr) {
    //   var shape = arr[0] == "R" ? Rectangle.new(arr[1], 1) : Triangle.new(arr[1], 1);
    //   shape.show();
    //   return shape;
    // }

    // await app.sleep(2000);

    // for (i = 0; this.work && i < params.length; i++) {
    //   var right = drawShape(params[i][0]);
    //   var left = drawShape(params[i][1]);
    //   await app.sleep(500);
    //   right.hide();
    //   left.hide();
    //   await app.sleep(3500);
    // }
  }
}
app.controllers.nt.orientationJudgement = app.buildTrialController(controller);
