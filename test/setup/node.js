var path = require('path');

global.should = require('chai-as-promised').should;
global.Dip = require(path.join(process.cwd(), 'lib/dip'));
global.sinon = require('sinon');
