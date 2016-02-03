var angular = require('angular');

var controller = require('./controller.js');
var router = require('./router.js');
var service = require('./service.js');

angular
  .module('app.dashboard', [])
  .controller('DashboardController', controller)
  .factory('DashboardService', service)
  .run(router);
