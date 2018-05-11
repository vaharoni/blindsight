window.app.sounds = {
  init: function() {
    createjs.Sound.registerSound("app/media/sounds/left.mp3", 'left');
    createjs.Sound.registerSound("app/media/sounds/right.mp3", 'right');
    createjs.Sound.registerSound("app/media/sounds/both.mp3", 'both');
  },

  ensureContext: function() {
    if (createjs.WebAudioPlugin.context && createjs.WebAudioPlugin.context.state === "suspended") {
      createjs.WebAudioPlugin.context.resume();
    }
  },

  left: function() {
    this.ensureContext();
    createjs.Sound.play('left');
  },

  right: function() {
    this.ensureContext();
    createjs.Sound.play('right');
  },

  both: function() {
    this.ensureContext();
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
