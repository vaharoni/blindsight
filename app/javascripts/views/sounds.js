window.app.sounds = {
  init: function() {
    createjs.Sound.registerSound("app/media/left.mp3", 'left');
    createjs.Sound.registerSound("app/media/right.mp3", 'right');
    createjs.Sound.registerSound("app/media/both.mp3", 'both');
  },

  left: function() {
    createjs.Sound.play('left');
  },

  right: function() {
    createjs.Sound.play('right');
  },

  both: function() {
    createjs.Sound.play('both');
  },

  chooseEffect: function (coord) {
    if (coord < 0) {
      this.left();
    } else if (coord > 0) {
      this.right();
    } else {
      this.both();
    }
  }
}
