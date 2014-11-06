/* global Dip:true */
describe('dip test suite', function () {
  'use strict';

  var store;
  var dip;

  beforeEach(function () {
    // will use the default store
    store = new Dip.DefaultStore();
    dip = new Dip({store: store});
  });

  it('should return a promise on get', function () {
    expect(dip.getItem('foo').then).to.be.a('function');
  });

  it('should return a promise on set', function () {
    expect(dip.setItem().then).to.be.a('function');
  });

  it('should return the correct value on get', function (done) {
    // default value
    store.db.foo = {
      value: 'bar'
    };

    dip.getItem('foo').then(function (value) {
      expect(value).to.equal('bar');
      done();
    });
  });

  it('should set the value in the store', function (done) {
    dip.setItem('john', 'doe');
    dip.getItem('john').then(function (value) {
      expect(value).to.equal('doe');
      done();
    });
  });
});
