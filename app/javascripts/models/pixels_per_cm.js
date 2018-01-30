window.app.models.pixelsPerCm = {
  default: 45,

  val: function() {
    if (!this._val) {
      this._val = this.load() || this.default;
    }
    return this._val;
  },

  reset: function() {
    this._val = this.default;
    this.save();
  },

  increment: function(by) {
    by = by || 5;
    this._val = this.val() + by;
    this.save();
  },

  decrement: function(by) {
    by = by || 5;
    this._val = this.val() - by;
    this.save();
  },

  load: function() {
    return window.localStorage.getItem('pixelsPerCm') * 1;
  },

  save: function() {
    window.localStorage.setItem('pixelsPerCm', this._val);
  }
}
