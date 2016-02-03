'use strict';

/**
 * The provided config object will be used by RouteHelper. This
 * provider is to be run during the core module's `config` phase.
 *
 *  `$routeProvider`
 *  `resolveAlways` - used when a route has config.resolve
 *  `docTitle` - set title for a route
 */
angular
  .module("lib.router")
  .provider("RouteHelperConfig", RouteHelperConfig);

function RouteHelperConfig() {
  this.config = {};
  this.$get = function() {
    return {
      config: this.config
    }
  }
}

/**
 * Has two methods: `configRoutes` and `getRoutes`
 */
angular
  .module("lib.router")
  .factory("RouteHelper", RouteHelper);

RouteHelper.$inject = [ "$location", "$rootScope", "$route", "Logger", "RouteHelperConfig"];
function RouteHelper($location, $rootScope, $route, logger, RouteHelperConfig) {
  var handlingRouteChangeError = false;
  var routes = [];
  var $routeProvider = RouteHelperConfig.config.$routeProvider;

  var service = {
    configureRoutes: configureRoutes,
    getRoutes: getRoutes
  }
  init();
  return service;

  function init() {
    _handleRoutingErrors();
    _handleRoutingSuccess();
  }

  function configureRoutes(routes) {
    console.log('configureRoutes', routes);
    routes.forEach(function(route) {
      route.config.resolve = angular.extend(
        route.config.resolve || {},
        RouteHelperConfig.config.resolveAlways
      );
      $routeProvider.when(route.url, route.config);
    });
    $routeProvider.otherwise({redirectTo: '/'});
  }

  function getRoutes() {
    for (var prop in $route.routes) {
      if ($route.routes.hasOwnProperty(prop)) {
        var route = $route.routes[prop];
        var isRoute = !!route.title;
        if (isRoute) {
          routes.push(route);
        }
      }
    }
    return routes;
  }

  function _handleRoutingErrors() {
    $rootScope.$on('$routeChangeError', routeChangeError);
    function routeChangeError(event, current, previous, rejection) {
      if (handlingRouteChangeError) {
        return;
      }
      handlingRouteChangeError = true;
      var destination = (current && (current.title || current.name || current.loadedTemplateUrl)) ||
        'unknown target';
      var msg = 'Error routing to ' + destination + '. ' + (rejection.msg || '');
      logger.warning(msg, [current]);
      $location.path('/');
    }
  }

  function _handleRoutingSuccess() {
    $rootScope.$on('$routeChangeSuccess', updateDocTitle);
    function updateDocTitle(event, current, previous) {
      handlingRouteChangeError = false;
      var title = RouteHelperConfig.config.docTitle + ' ' + (current.title || '');
      $rootScope.title = title; // data bind to <title>
    }
  }

}
