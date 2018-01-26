window.app.shapes.triangleClass = function(grid, width, height, color) {
  this.new = function(x, y) {

    var draw = function(correction) {
      correction = correction || 0;

      return function(c) {
        var midX = grid.getX(x);
        var startX = midX - app.layout.length(width / 2);
        var startY = grid.getY(y) + app.layout.length(height / 2);
        c.beginPath();
        c.moveTo(startX - correction, startY + correction);
        c.lineTo(startX + app.layout.length(width) + correction, startY + correction);
        c.lineTo(midX, startY - app.layout.length(height) - correction);
        c.fill();
      }
    }

    return {
      show: function() {
        app.canvas.inForeColor(draw(), color);
      },

      hide: function() {
        app.canvas.inBackColor(draw(2));
      }
    }
  }
}
