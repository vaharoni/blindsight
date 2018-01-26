window.app.canvas = new function() {
  this.init = function() {
    $('#canvas').attr('height', app.layout.height).attr('width', app.layout.width);
    this.context = $('#canvas')[0].getContext('2d');
    this.context.fillStyle = 'white';
    this.context.strokeStyle = 'white';
  }

  this.inColor = function(callback, color) {
    var prevFill = self.canvas.fillStyle;
    var prevStroke = self.canvas.strokeStyle;
    this.context.fillStyle = color;
    this.context.strokeStyle = color;
    callback(this.context);
    this.context.fillStyle = prevFill;
    this.context.strokeStyle = prevStroke;
  },

  this.inForeColor = function(callback, color) {
    this.inColor(callback, color || 'white')
  }

  this.inBackColor = function(callback, color) {
    this.inColor(callback, color || 'black')
  }
}()
