var Dip = require('../lib/dip');
var expect = require('chai').expect;

describe('dip test suite', function () {
  'use strict';

  var store;
  var dip;

  before(function () {
    store = {
      foo: 'bar'
    };
  });

  beforeEach(function () {
    dip = new Dip({store: store});
  });

  it('should return the correct value on get', function (done) {
    expect(dip.get('foo')).to.equal('bar');
    done();
  });
});
