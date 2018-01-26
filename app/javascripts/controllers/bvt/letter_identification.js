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
    [-2, -2, "A"]];

  this.setup = function() {
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'yellow');
    FixationDot.new(0,0).show();
  }

  this.run = function(param, done) {
    var Letter = new app.shapes.letterClass(app.grids.fourByFour, 72, 'white');

    setTimeout(function() {
      var letter = Letter.new.apply(Letter, param);
      letter.show();
      setTimeout(done(letter.hide), 500);
    }, 1500)
  }
}
app.controllers.bvt.letterIdentification = app.buildTrialController(controller);
