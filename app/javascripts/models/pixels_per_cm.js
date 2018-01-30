window.app.models.pixelsPerCm = {
  val: function() {
    if (!this._val) {
      this._val = this.load() || 45;
    }
    return this._val;
  },

  load: function() {
    Cookies.get('pixelsPerCm');
  },

  save: function() {
    Cookies.set('pixelsPerCm', this.val());
  }
}
