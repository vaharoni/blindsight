window.app.shapes.letterClass = function(grid, size, color) {
  this.new = function(x, y, letter) {

    return {
      show: function() {
        app.canvas.inForeColor(function() {
          app.canvas.inFontStyle(function(c) {
            c.fillText(letter, grid.getX(x), grid.getY(y));
          }, size)
        }, color);
      },

      hide: function() {
        app.canvas.inBackColor(function(c) {
          c.beginPath();
          c.arc(grid.getX(x), grid.getY(y), size + 10, 0, Math.PI * 2, true);
          c.fill();
        });
      }
    }
  }
}
