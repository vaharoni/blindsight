window.app.shapes.rectangleClass = function(grid, width, height, color) {
  // slant is either 0 (default), -1, or 1
  this.new = function(x, y, rotation) {
    rotation = rotation || 0;

    var draw = function(correction) {
      correction = correction || 0;

      return function(c) {
        var degree = (90 - rotation * 45) / 180 * Math.PI;
        var centerX = grid.getX(x);
        var centerY = grid.getY(y);

        var offsetX = app.layout.length(Math.cos(degree) * height / 2);
        var offsetY = app.layout.length(Math.sin(degree) * (height / 2));

        var p1 = { x: centerX + offsetX - app.layout.length(width / 2), y: centerY - offsetY }
        var p2 = { x: centerX + offsetX + app.layout.length(width / 2), y: centerY - offsetY }
        var p3 = { x: centerX - offsetX + app.layout.length(width / 2), y: centerY + offsetY }
        var p4 = { x: centerX - offsetX - app.layout.length(width / 2), y: centerY + offsetY }

        c.beginPath();
        c.moveTo(p1.x - correction, p1.y - correction);
        c.lineTo(p2.x + correction, p2.y - correction);
        c.lineTo(p3.x + correction, p3.y + correction);
        c.lineTo(p4.x - correction, p4.y + correction);
        c.fill();
      }
    }

    return {
      show: function() {
        app.canvas.inForeColor(draw(), color);
      },

      hide: function() {
        app.canvas.inBackColor(draw(4));
      }
    }
  }
}
