window.app.shapes.imageClass = function(grid) {
  this.new = function(x, y, imageSelector, size) {
    var sizeInPixels = app.layout.length(size);

    return {
      show: function() {
        app.canvas.context.drawImage($(imageSelector)[0],
          grid.getX(x) - sizeInPixels / 2,
          grid.getY(y) - sizeInPixels / 2, sizeInPixels, sizeInPixels);
      },

      hide: function() {
        app.canvas.inBackColor(function(c) {
          c.fillRect(grid.getX(x) - sizeInPixels / 2 - 5, grid.getY(y) - sizeInPixels / 2 - 5,
            sizeInPixels + 10, sizeInPixels + 10);
        })
      }
    }
  }
}
