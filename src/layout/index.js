'use strict'

require('angular')
  .module('app.layout', ['lib.router'])
  .run(function (routeHelper) {
    routeHelper.addRoutes([{
      url: '/',
      whenConfig: {
        template: '<bm-books></bm-books>'
      }
    }])
  })

require('./navbar')
