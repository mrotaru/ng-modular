'use strict';

var core = angular.module("app.core");

core.value('config', {
  appErrorPrefix: '[ng-modular error] ', //configure the exceptionhandler decorator
  appTitle: 'angular modular demo',
  version: '1.0.0'
});

core.config(coreConfig);

coreConfig.$inject = ["$routeProvider", "$logProvider", "RouteHelperConfigProvider"];
function coreConfig($routeProvider, $logProvider, RouteHelperConfigProvider) {
  $logProvider.debugEnabled(true);
  RouteHelperConfigProvider.config.$routeProvider = $routeProvider;
  RouteHelperConfigProvider.config.docTitle = 'NG-Modular: ';
  RouteHelperConfigProvider.config.resolveAlways = {
     ready: ['Data', function (Data) {
        return Data.get('/token/123');
     }]
  };
}
