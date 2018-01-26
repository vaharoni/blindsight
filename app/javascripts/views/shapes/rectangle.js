window.app.shapes.rectangleClass = function(grid, width, height, color) {
  // slant is either 0 (default), -1, or 1
  this.new = function(x, y, slant) {
    slant = slant || 0;

    var draw = function(correction) {
      // correction = correction || 0;
      //
      // return function(c) {
      //   var slantedHeight = slant * (height / 2) / Math.sqrt(2);
      //
      //   var startX = grid.getX(x) + app.layout.length(slantedHeight - width / 2);
      //   var startY = grid.getY(y) - app.layout.length(Math.abs(slantedHeight));
      //
      //   c.beginPath();
      //   c.moveTo(startX, startY);
      //   c.lineTo(startX + app.layout.length(width), startY);
      //   c.lineTo(startX + app.layout.length(width - slantedHeight), startY + slantedHeight * 2);
      //   c.fill();
      // }

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
