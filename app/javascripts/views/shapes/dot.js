// var Dot = new app.shapes.dotClass(10, grid);
// var dot1 = Dot.new(3, 4)
// dot1.show();
// dot1.hide();
window.app.shapes.dotClass = function(grid, diameter, color) {
  this.new = function(x, y) {

    var draw = function(radiusCorrection) {
      radiusCorrection = radiusCorrection || 0;

      return function(c) {
        c.beginPath();
        c.arc(grid.getX(x), grid.getY(y), diameter / 2 * app.layout.pixelsPerCm + radiusCorrection, 0, Math.PI * 2, true);
        c.fill();
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
