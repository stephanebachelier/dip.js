var Dip = require('../lib/dip');
var expect = require('chai').expect;

describe('dip test suite', function () {
  'use strict';

  var store;

  before(function () {
    store = {
      foo: 'bar'
    };
  });

  it('should ...', function (done) {
    var _dip = new Dip({store: store});

    expect(_dip.get('foo')).to.equal('bar');
    done();
  });
});
