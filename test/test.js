var dip = require('../lib/dip');
var expect = require('chai').expect;

describe('dip test suite', function () {
  'use strict';

  it('should ...', function (done) {
    var store = {
      foo: 'bar'
    };

    var _dip = new dip({store: store});

    expect(_dip.get('foo')).to.equal('bar');
    done();
  });
});
