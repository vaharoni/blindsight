// Possible x: [-2, -1, 0, 1, 2]
// Possible y: [0, 1]
window.app.grids.horizontal = {
  getX: function(x) {
    var correction = x == 0 ? 0 : Math.abs(x) / x * 6.5;
    return app.layout.width / 2 + app.layout.length(x * 3 + correction);
  },

  getY: function(y) {
    var correction = y == 0 ? 0 : 3;
    return app.layout.height / 2 + app.layout.length(y - correction);
  }
}
