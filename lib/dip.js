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

  var Store = function () {
    this.db = Object.create(null); // create a hashmap
  };

  Store.prototype = {
    get: function (key) {
      return this.db[key] ? this.db[key] : null;
    },

    set: function (key, value) {
      this.db[key] = value;
      return value;
    }
  };

  // code goes here
  var Dip = function (options) {
    if (options.store) {
      this.store = options.store;
    }
  };

  Dip.prototype.get = function (key) {
    return this.store.hasOwnProperty(key) ? this.store[key] : null;
  };

  Dip.prototype.set = function (key, value) {
    this.store[key] = value; // overwrite any existing value

    // return self to help chaining calls
    return this;
  };

  return Dip;
}));
