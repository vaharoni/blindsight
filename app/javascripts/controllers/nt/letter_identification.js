var controller = function() {
  this.trigger = '#nt-letter-identification';

  this.name = 'NT Letter Identification';

  // Ruby:
  //  ([-2,-1,1,2].product([-2,1,1,2], %w(T S M)) * 2).shuffle
  this.params = [[2, 2, "S"], [-1, 2, "M"], [-2, 1, "M"], [2, 2, "M"], [-2, -2, "M"], [-2, 1, "S"], [-1, 1, "M"],
    [-1, -2, "T"], [-1, 1, "M"], [-1, 2, "S"], [1, -2, "M"], [2, 2, "S"], [2, -2, "T"], [-1, -2, "M"], [1, 1, "M"],
    [2, 1, "M"], [1, 1, "T"], [1, 1, "T"], [1, -2, "M"], [2, 1, "S"], [-2, -2, "M"], [-1, 1, "T"], [1, -2, "S"],
    [-2, 1, "S"], [-2, -2, "T"], [1, 1, "S"], [-2, 1, "T"], [-1, 1, "M"], [2, 1, "S"], [-2, 1, "T"], [1, 2, "S"],
    [-2, 1, "T"], [-1, 2, "T"], [-1, -2, "M"], [-1, 2, "M"], [-2, 2, "T"], [-2, -2, "S"], [1, 1, "S"], [-2, 1, "M"],
    [2, 1, "T"], [2, 1, "T"], [2, 1, "S"], [2, 2, "T"], [1, -2, "T"], [-1, 2, "T"], [-2, 2, "M"], [2, 1, "T"],
    [1, 2, "M"], [1, 2, "M"], [-1, 1, "S"], [1, 1, "S"], [-2, 2, "M"], [1, 1, "M"], [2, 1, "T"], [-1, 1, "T"],
    [1, 1, "M"], [2, 1, "S"], [-1, -2, "T"], [2, -2, "M"], [-2, 1, "T"], [2, -2, "M"], [-2, 1, "M"], [1, 2, "S"],
    [-2, 2, "T"], [1, 1, "T"], [2, -2, "S"], [1, -2, "T"], [-2, 2, "S"], [2, 1, "M"], [1, 1, "M"], [-2, 1, "S"],
    [-2, 1, "M"], [-1, 1, "T"], [-1, 1, "S"], [-2, -2, "T"], [-1, -2, "S"], [2, 1, "M"], [2, 2, "T"], [1, 2, "T"],
    [2, 2, "M"], [-2, 2, "S"], [1, 1, "T"], [1, 2, "T"], [-2, -2, "S"], [-1, 1, "S"], [-2, 1, "S"], [-1, 2, "S"],
    [2, 1, "M"], [1, 1, "S"], [2, -2, "S"], [-1, 1, "T"], [1, -2, "S"], [2, -2, "T"], [-1, 1, "M"], [-1, -2, "S"],
    [-1, 1, "S"]],

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
app.controllers.nt.letterIdentification = app.buildTrialController(controller);
