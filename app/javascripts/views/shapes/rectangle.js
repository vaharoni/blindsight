window.app.shapes.rectangleClass = function(grid, width, height, color) {
  this.new = function(x, y) {

    var draw = function(correction) {
      correction = correction || 0;

      return function(c) {
        var startX = grid.getX(x) - app.layout.length(width / 2);
        var startY = grid.getY(y) - app.layout.length(height / 2);
        c.fillRect(startX - correction, startY - correction,
          app.layout.length(width) + correction * 2, app.layout.length(height) + correction * 2);
      }
    }

    return {
      show: function() {
        app.canvas.inForeColor(draw(), color);
      },

      hide: function() {
        app.canvas.inBackColor(draw(1));
      }
    }
  }
}
