var pixelsPerCm = 45;

window.Mom = new function() {
  var self = this;

  self.resetHeight = function() {
    self.width = $('body').width();
    self.height = $('body').height();
    $('body').css('line-height', self.height + 'px');
  }

  self.fullScreen = function() {
    var el = document.documentElement,
      rfs = el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen;

    rfs.call(el);
  }

  self.start = function() {
    // self.fullScreen();
    $('.panel').toggleClass('d-none');
    self.cycle();
  }

  self.sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  self.cycle = async function() {
    self.drawCross();
    await self.sleep(1000);
    self.drawCross('black');
    await self.sleep(self.randomGap());

    if (Math.random() > 0.143) {
      self.setLocation();
      self.drawCircle();
      await self.sleep(100);
      self.drawCircle('black');
    } else {
      self.currRelativeY = null;
      self.currRelativeX = null;
    }
  }

  self.randomGap = function() {
    return Math.round(Math.random() * 400 + 800);
  }

  self.drawCross = function(color) {
    self.inFillColor(color, function(radiusCorrection) {
      var radius = 0.65 / 2 * pixelsPerCm + radiusCorrection;
      self.canvas.arc(self.width / 2, self.height / 2, radius, 0, Math.PI * 2, true);
      self.canvas.fill();

      // self.canvas.fillRect(Math.round(self.width / 2 - 1), Math.round(self.height / 2 - 20), 3, 40);
      // self.canvas.fillRect(Math.round(self.width / 2 - 20), Math.round(self.height / 2 - 1), 40, 3);
    });
  }

  self.setLocation = function() {
    var slot = Math.round(Math.random() * 5 + 1);
    var side = Math.round(Math.random()) == 0 ? -1 : 1;

    self.currRelativeY = 0;
    self.currRelativeX = (Math.random() * 0.9 - 0.5) * self.width;
  }

  self.drawCircle = function(color) {
    self.inFillColor(color, function(radiusCorrection) {
      var radius = 20 + radiusCorrection;
      self.canvas.arc(self.currRelativeX + self.width / 2, self.currRelativeY + self.height / 2, radius, 0, Math.PI * 2, true);
      self.canvas.fill();
    })
  }

  self.inFillColor = function (color, callback) {
    var prev = self.canvas.fillStyle;
    self.canvas.fillStyle = color || 'white';

    var radiusCorrection = color == 'black' ? 1 : 0;
    callback(radiusCorrection);
    self.canvas.fillStyle = prev;
  }

  $(document).ready(function() {
    self.resetHeight();
    $('#canvas').attr('height', self.height).attr('width', self.width);
    self.canvas = $('#canvas')[0].getContext('2d');
    self.canvas.fillStyle = 'white';
    self.canvas.strokeStyle = 'white';
    $(window).on('resize', self.resetHeight);
    $('#start').on('click', self.start);
  });
}
