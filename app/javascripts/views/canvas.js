window.app.canvas = new function() {
  this.init = function() {
    this.resetDimensions();
    this.context = $('#canvas')[0].getContext('2d');
    this.context.fillStyle = 'white';
    this.context.strokeStyle = 'white';
    this.context.font = '24px serif';
  }

  this.resetDimensions = function() {
    $('#canvas').attr('height', app.layout.height).attr('width', app.layout.width);
  }

  this.inColor = function(callback, color) {
    var prevFill = this.context.fillStyle;
    var prevStroke = this.context.strokeStyle;
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

  this.inFontStyle = function(callback, size, style) {
    style = style || 'serif';
    var prevFontStyle = this.context.font;
    this.context.font = size + 'px ' + style;
    callback(this.context);
    this.context.font = prevFontStyle;
  }

  this.clear = function() {
    this.inBackColor(function(c) {
      c.fillRect(0, 0, app.layout.width, app.layout.height)
    });
  }
}()
