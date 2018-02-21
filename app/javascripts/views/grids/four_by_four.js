// Possible x and y values: [-2, -1, 0, 1, 2]
window.app.grids.fourByFour = {
  getX: function(x) {
    var correction = x === 0 ? 0 : Math.abs(x) / x;
    return app.layout.width / 2 + app.layout.length(x * 3 + correction);
  },

  getY: function(y) {
    var correction = y === 0 ? 0 : Math.abs(y) / y * 1.5;
    return app.layout.height / 2 + app.layout.length(y * 3 - correction);
  }
}
