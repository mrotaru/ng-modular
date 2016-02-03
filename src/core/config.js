'use strict';

var core = angular.module("app.core");

core.value('config', {
  appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
  appTitle: 'Angular Modular Demo',
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
