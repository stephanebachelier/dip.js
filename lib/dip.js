(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.dip = factory();
  }

}(this, function () {
  'use strict';

  var store = Object.create(null);

  // code goes here
  var dip = function (options) {
    if (options.store) {
      this.store = options.store;
    }
  };

  dip.prototype.get = function (key) {
    return this.store.hasOwnProperty(key) ? this.store[key] : null;
  };

  return dip;
}));
