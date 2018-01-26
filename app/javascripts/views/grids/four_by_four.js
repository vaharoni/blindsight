// Possible x and y values: [-2, -1, 0, 1, 2]
window.app.grids.fourByFour = {
  getX: function(x) {
    return app.layout.width / 2 + x * 3 * app.layout.pixelsPerCm;
  },

  getY: function(y) {
    var correction = y == 0 ? 0 : Math.abs(y) / y * 1.5;
    return app.layout.height / 2 + (y * 3 - correction) * app.layout.pixelsPerCm;
  }
}
