'use strict'

require('toastr')

module.exports = require('angular')
  .module('app.core', [

    // angular built-in modules
    require('angular-route'),

    // reusable common modules
    require('../lib/exception'),
    require('../lib/router'),
    require('../lib/logger'),

    // third party libs available to all modules (part of core)
    // toastr; will be global
  ])
  .config(function (routeHelperProvider, exceptionHandlerProvider) {
    routeHelperProvider.config({
      resolveAlways: function () {
        return {}
      }
    })

    exceptionHandlerProvider.configure({
      appErrorPrefix: 'Modular Demo'
    })
  })
  .run(['$route', function () {
    // if ng-view is in an XHR-loaded template
    // https://github.com/angular/angular.js/issues/1213#issuecomment-23963063
  }])
