var path = require('path');

var chai = require('chai');
chai.use(require('chai-as-promised'));
global.should = chai.should();
global.Dip = require(path.join(process.cwd(), 'lib/dip'));
global.sinon = require('sinon');
