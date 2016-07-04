'use strict'

require('angular')
  .module('lib.router')
  .run(function (routeHelper) {
    routeHelper.addRoutes([{
      url: '/about',
      whenConfig: {
        templateUrl: 'about/view.html'
      }
    }])
  })
