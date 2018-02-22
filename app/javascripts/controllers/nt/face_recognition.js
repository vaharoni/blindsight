var controller = function() {
  this.id = 'ntFaceRecognition';
  this.trigger = '#nt-face-recognition';
  this.name = 'NT Face Recognition';

  // Ruby:
  //   ([*1..12].product([0,1]) * 4).shuffle
  this.params = [[1, 0], [3, 0], [11, 1], [12, 0], [6, 0], [4, 1], [2, 0], [9, 1], [1, 1], [2, 0],
    [5, 1], [9, 1], [4, 1], [2, 0], [7, 1], [12, 0], [2, 1], [2, 1], [3, 0], [5, 0], [6, 1], [10, 1], [11, 1], [8, 1],
    [11, 1], [5, 0], [12, 1], [2, 0], [5, 0], [4, 0], [7, 0], [6, 0], [1, 1], [1, 1], [10, 1], [10, 1], [12, 1], [3, 0],
    [12, 1], [10, 0], [5, 1], [11, 1], [3, 1], [7, 1], [12, 1], [11, 0], [7, 0], [9, 0], [11, 0], [1, 1], [4, 1],
    [3, 1], [6, 0], [3, 0], [11, 0], [10, 0], [6, 1], [7, 0], [3, 1], [8, 0], [5, 1], [2, 1], [6, 0], [4, 0], [12, 0],
    [6, 1], [8, 0], [9, 0], [8, 1], [5, 0], [1, 0], [10, 1], [10, 0], [1, 0], [12, 0], [6, 1], [8, 0], [8, 0], [10, 0],
    [7, 1], [9, 0], [7, 1], [8, 1], [8, 1], [11, 0], [1, 0], [2, 1], [7, 0], [3, 1], [9, 1], [9, 1], [9, 0], [4, 0],
    [4, 0], [4, 1], [5, 1]];

  this.paramToCsv = function(param) {
    return $('#image' + param[0]).attr('src').match(/\/([^\/]*)\..*$/)[1] + ',' + (param[1] === 0 ? 'Small' : 'Big');
  }

  this.setup = function() {
    var FixationDot = new app.shapes.dotClass(app.grids.horizontal, 0.8, 'yellow');
    this.fixationDot = FixationDot.new(0, 0);
    this.fixationDot.show();
  }

  this.run = function(param, done) {
    var TrialImage = new app.shapes.imageClass(app.grids.horizontal);
    var image = TrialImage.new(0, 0, '#image' + param[0], param[1] * 6 + 6);
    image.show();
    app.sounds.both();

    var self = this;
    setTimeout(function() {
      image.hide();
      self.fixationDot.show();
      done()();
    }, 500);
  }
}
app.controllers.nt.faceRecognition = app.buildTrialController(controller);
