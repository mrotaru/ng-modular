var angular = require('angular');

angular
  .module('lib.logger', [])
  .config(['$provide', require('./config.js')])
