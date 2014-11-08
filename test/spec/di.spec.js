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

  describe('getter', function () {
    it('should return the correct value on get', function (done) {
      // default value
      store.db.foo = {
        value: 'bar'
      };

      dip.getItem('foo').should.eventually.equal('bar').notify(done);
    });

    it('should reject on null key', function (done) {
      var resolvedFn = sinon.spy();
      var rejectedFn = sinon.spy();

      dip.getItem(null)
        .then(resolvedFn)
        .catch(function () {
          rejectedFn();
        })
        .then(function () {
          resolvedFn.called.should.be.false;
          rejectedFn.called.should.be.true;
          done();
        });

    });

    it('should reject on undefined key', function (done) {
      var resolvedFn = sinon.spy();
      var rejectedFn = sinon.spy();

      // equivalent to dip.getItem(), but explained here for documentation purpose
      dip.getItem(undefined)
        .then(resolvedFn)
        .catch(rejectedFn)
        .then(function () {
          resolvedFn.called.should.be.false;
          rejectedFn.called.should.be.true;
          done();
        });
    });
  });

  describe('setter', function () {
    it('should set the value in the store', function (done) {
      dip.setItem('john', 'doe').then(function () {
        dip.getItem('john').should.eventually.equal('doe').notify(done);
      });
    });

    it('should reject on null key', function (done) {
      var resolvedFn = sinon.spy();
      var rejectedFn = sinon.spy();

      dip.setItem(null, 'foo')
        .then(resolvedFn)
        .catch(function () {
          rejectedFn();
        })
        .then(function () {
          resolvedFn.called.should.be.false;
          rejectedFn.called.should.be.true;
          done();
        });

    });

    it('should reject on undefined key', function (done) {
      var resolvedFn = sinon.spy();
      var rejectedFn = sinon.spy();

      // equivalent to dip.getItem(), but explained here for documentation purpose
      dip.getItem(undefined, 'foo')
        .then(resolvedFn)
        .catch(rejectedFn)
        .then(function () {
          resolvedFn.called.should.be.false;
          rejectedFn.called.should.be.true;
          done();
        });
    });
  });
});
