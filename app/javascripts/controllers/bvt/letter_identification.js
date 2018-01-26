var controller = function() {
  this.trigger = '#bvt-letter-identification';

  this.name = 'BVT Letter Identification';

  // Ruby:
  //  ([-2,-1,1,2].product([-2,1,1,2], %w(L A C)) * 2).shuffle
  this.params = [[-1, 2, "C"], [1, 1, "A"], [2, 1, "A"], [-2, -2, "C"], [-1, 2, "C"], [2, 1, "L"], [1, 1, "A"],
    [2, 2, "A"], [-1, 2, "L"], [-1, 1, "C"], [2, 1, "L"], [1, 1, "L"], [-1, 1, "C"], [2, 2, "L"], [2, 1, "C"],
    [1, 1, "C"], [1, 2, "L"], [1, -2, "C"], [-1, -2, "C"], [-1, 2, "L"], [2, 2, "L"], [-1, 1, "L"], [-1, 2, "A"],
    [1, 2, "A"], [-2, 2, "A"], [1, 1, "L"], [-2, 1, "C"], [-1, 1, "A"], [1, 2, "C"], [1, 1, "L"], [2, -2, "L"],
    [2, 2, "C"], [-1, -2, "L"], [2, 1, "L"], [1, 2, "L"], [1, 1, "C"], [-1, 1, "C"], [-2, 1, "C"], [2, -2, "A"],
    [1, 1, "A"], [1, -2, "L"], [1, -2, "A"], [-1, 1, "A"], [-2, 1, "L"], [-2, 1, "L"], [-2, 1, "C"], [1, 2, "C"],
    [-2, 1, "L"], [-2, -2, "L"], [2, 1, "A"], [-2, -2, "C"], [-1, 2, "A"], [1, 1, "C"], [1, 1, "L"], [2, 1, "C"],
    [2, 1, "A"], [2, 2, "C"], [-2, 1, "A"], [-1, 1, "L"], [2, 1, "C"], [-2, 2, "C"], [-1, 1, "A"], [2, 2, "A"],
    [-2, 2, "L"], [-2, 1, "C"], [2, 1, "C"], [-1, 1, "A"], [-1, 1, "C"], [2, -2, "L"], [-1, -2, "A"], [-1, -2, "L"],
    [-1, 1, "L"], [2, -2, "A"], [2, -2, "C"], [-2, 1, "A"], [1, 1, "A"], [2, -2, "C"], [2, 1, "L"], [-2, 2, "C"],
    [-1, -2, "C"], [-2, -2, "L"], [-2, 1, "A"], [1, 1, "C"], [-2, 1, "A"], [-1, -2, "A"], [-2, 2, "L"], [1, -2, "A"],
    [1, -2, "L"], [1, 2, "A"], [-1, 1, "L"], [2, 1, "A"], [-2, 2, "A"], [-2, 1, "L"], [-2, -2, "A"], [1, -2, "C"],
    [-2, -2, "A"]],

    this.run = async function(params) {
    var Letter = new app.shapes.letterClass(app.grids.fourByFour, 72, 'white');
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'yellow');
    var fixationDot = FixationDot.new(0,0);
    fixationDot.show();

    await app.sleep(2000);

    for (i = 0; this.work && i < params.length; i++) {
      var letter = Letter.new.apply(Letter, params[i])
      letter.show();
      await app.sleep(500);
      letter.hide();
      await app.sleep(3500);
    }
  }
}
app.controllers.bvt.letterIdentification = app.buildTrialController(controller);
