var controller = function() {
  this.id = 'ntLetterIdentification';
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
    [-1, 1, "S"]];

  this.paramToCsv = function(param) {
    return (Math.abs(param[0]) === 1 ? "Near" : "Far") + "," + (param[0] < 0 ? "Left" : "Right") + "," + param[2];
  }

  this.setup = function() {
    var FixationDot = new app.shapes.dotClass(app.grids.fourByFour, 0.8, 'red');
    FixationDot.new(0,0).show();
  }

  this.run = function(param, done) {
    var Letter = new app.shapes.letterClass(app.grids.fourByFour, 72, 'black');
    var letter = Letter.new.apply(Letter, param)
    letter.show();
    app.sounds.chooseEffect(param[0]);
    setTimeout(done(letter.hide), 300);
  }
}
app.controllers.nt.letterIdentification = app.buildTrialController(controller);
