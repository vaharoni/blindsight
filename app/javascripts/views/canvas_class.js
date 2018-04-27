window.app.canvasClass = function(selector) {
  this.selector = selector;

  this.init = function(width, height) {
    this.elm = $(this.selector);
    this.resetDimensions(width, height);
    this.context = this.elm[0].getContext('2d');
    this.context.fillStyle = 'black';
    this.context.strokeStyle = 'black';
    this.context.font = '24px serif';
  }

  this.resetDimensions = function(width, height) {
    this.width = this.width || width;
    this.height = this.height || height;
    this.elm.attr('height', this.height).attr('width', this.width);
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
    this.inColor(callback, color || 'black')
  }

  this.inBackColor = function(callback, color) {
    this.inColor(callback, color || 'white')
  }

  this.inFontStyle = function(callback, size, style) {
    style = style || 'serif';
    var prevFontStyle = this.context.font;
    this.context.font = size + 'px ' + style;
    callback(this.context);
    this.context.font = prevFontStyle;
  }

  this.clear = function() {
    var self = this;
    this.inBackColor(function(c) {
      c.fillRect(0, 0, self.width, self.height)
    });
  }
}
