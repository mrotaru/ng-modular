var angular = require('angular');

angular
  .module('lib.exception', ['lib.logger'])
  .provider('exceptionHandler', require('./service.js'))
  .config(require('./config.js'))
