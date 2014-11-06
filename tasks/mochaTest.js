module.exports = function (grunt) {
  'use strict';
  var path = require('path');
  return {
    tests: {
      options: {
        require: require(path.join(process.cwd(), 'test/setup/node')),
        reporter: grunt.option('mocha-reporter') || 'nyan',
        clearRequireCache: true,
        mocha: require('mocha')
      },
      src: [
        'test/spec/*.spec.js'
      ]
    }
  };
};
