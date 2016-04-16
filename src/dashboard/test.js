var jsdom = require('jsdom').jsdom;
var assert = require('assert');

global.document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = global.document.defaultView;
global.navigator = window.navigator = {};
global.Node = window.Node;

global.window.mocha = true;

require('angular/angular');
require('angular-mocks');

global.angular = window.angular;
global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;

var controller = require('./controller.js');
var service = require('./service.js');

angular
  .module('app.dashboard', [])
  .factory('DashboardService', service)

var injector = angular.injector(['app.dashboard']);
var svc = injector.get('DashboardService');
assert.equal(svc.getData("a/42"), "42", "should return 42");

(function c() {
  global.window.setup();
  var scope, ctrl;

  inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('DashboardController', {
      $scope: scope
    });
  });
  global.window.teardown();
})();
