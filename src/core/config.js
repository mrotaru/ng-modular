'use strict';

var core = angular.module("app.core");

core.value('config', {
  apperrorprefix: '[ng-modular error] ', //configure the exceptionhandler decorator
  apptitle: 'angular modular demo',
  version: '1.0.0'
});


core.config(coreConfig);

coreConfig.$inject = ["$routeProvider", "RouteHelperConfigProvider"];

function coreConfig($routeProvider, RouteHelperConfigProvider) {
  RouteHelperConfigProvider.config.$routeProvider = $routeProvider;
  RouteHelperConfigProvider.config.docTitle = 'NG-Modular: ';
  RouteHelperConfigProvider.config.resolveAlways = {
     ready: ['data', function (data) {
        return data.ready();
     }]
  };
}
