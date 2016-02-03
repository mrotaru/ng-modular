var jsdom = require('jsdom').jsdom;
var assert = require('assert');

before(function(){
  global.document = jsdom('<html><head><script></script></head><body></body></html>');
  global.window = global.document.defaultView;
  global.navigator = window.navigator = {};
  global.Node = window.Node;
  require('angular/angular');
  require('angular-mocks');

  global.angular = window.angular;
  global.inject = global.angular.mock.inject;
  global.ngModule = global.angular.mock.module;
});

describe("controller", function() {
  it("should control", function() {
    global.inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      ctrl = $controller('DashboardController', {
        $scope: scope
      });
    });
  });
});



