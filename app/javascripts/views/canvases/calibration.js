var calibrationConstructor = function() {
  this.width = 600;
  this.height = 100;

  this.show = function() {
    var w = app.layout.length(3);
    var h = app.layout.length(1);

    var self = this;
    this.inForeColor(function(c) {
      c.fillRect((self.width - w) / 2, 0, w, h)
    })
  }

  this.reset = function() {
    this.clear();
    this.show();
  }
}
calibrationConstructor.prototype = new app.canvasClass('#calibration-canvas');
window.app.calibrationCanvas = new calibrationConstructor();

