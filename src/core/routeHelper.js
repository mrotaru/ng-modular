'use strict'

let angular = require('angular')

module.exports = function routeHelperProvider ($routeProvider) {
  let config = {}
  let routes = []

  this.config = (cfg) => {
    angular.merge(config, cfg)
  }

  this.$get = function ($rootScope) {

    let currentTitle = ''

    $rootScope.$on('$routeChangeSuccess',
      function(event, current, previous) {
        if (current.$$route.title) {
          currentTitle = current.$$route.title
        }
      }
    )

    return {
      addRoutes,
      getRoutes: () => routes,
      getCurrentTitle: () => currentTitle
    }

    function addRoutes (_routes) {
      routes = routes.concat(_routes)
      _routes.forEach(function (route) {
        let resolve = route.whenConfig.resolve || {}
        route.whenConfig.resolve = angular.extend(resolve, config.resolveAlways)
        if (route.nav && route.nav.title) {
          route.whenConfig.title = route.nav.title
        }
        $routeProvider.when(route.url, route.whenConfig)
      })
      $routeProvider.otherwise({redirectTo: '/'})
    }
  }
}

