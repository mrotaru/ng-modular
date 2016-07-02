'use strict'

module.exports = require('angular')
  .module('app', [require('angular-route')])
  .provider('routeHelper', require('./routeHelper.js'))
  .config(function (routeHelperProvider) {
    routeHelperProvider.config({
      resolveAlways: function () {
        return {} 
      }
    })
  })
  .run(['$route', function () {
    // if ng-view is in an XHR-loaded template
    // https://github.com/angular/angular.js/issues/1213#issuecomment-23963063 
  }])
