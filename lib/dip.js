(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.Dip = factory();
  }

}(this, function () {
  'use strict';

  var Store = function () {
    this.db = Object.create(null); // create a hashmap
  };

  Store.prototype = {
    get: function (key) {
      var self = this;

      return new Promise(function (resolve, reject) {
        try {
          if (!self.db[key]) {
            self.db[key] = {};
          }

          // resolve promise if value exists
          if (self.db[key].value) {
            resolve(self.db[key].value);
          }
          else {
            // recording a pending while value not defined
            self.db[key].pending = {
              resolve: resolve,
              reject: reject
            };
          }
        }
        catch (e) {
          reject(e);
        }
      });
    },

    set: function (key, value) {
      var self = this;

      return new Promise(function (resolve, reject) {
        try {
          if (!self.db[key]) {
            // only record value in the store as no pending promise exists
            self.db[key] = {
              value: value
            };
          }
          else {
            self.db[key].value = value;
            if (self.db[key].pending) {
              // if a pending promise exists resolve it
              self.db[key].pending.resolve(value);

              // clean pending promise reference as it has already been resolved
              // thus no need to keep a reference as the getter would resolve
              // immediately any new promise
              delete self.db[key].pending;
            }
          }
        }
        catch (e) {
          reject(e);
        }
      });
    }
  };

  // code goes here
  var Dip = function (options) {
    this.store = options && options.store ? options.store : new Store();
  };

  Dip.DefaultStore = Store;

  Dip.prototype.get = function (key) {
    return this.store.get(key);
  };

  Dip.prototype.set = function (key, value) {
    return this.store.set(key, value);
  };

  return Dip;
}));
