// Possible x values: [-3, -2, -1, 0, 1, 2, 3]
// Possible y values: [-1, 0, 1]
window.app.grids.sixByThree = {
  getX: function(x) {
    return app.layout.width / 2 + app.layout.length(x * 3);
  },

  getY: function(y) {
    return app.layout.height / 2 + app.layout.length(y * 3);
  }
}
