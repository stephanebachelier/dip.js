module.exports = function (grunt) {
  'use strict';
  return {
    tests: {
      options: {
        reporter: grunt.option('mocha-reporter') || 'nyan',
        clearRequireCache: true,
        mocha: require('mocha')
      },
      src: [
        'test/test.js'
      ]
    }
  };
};
