'use strict'

require('toastr')

let core = require('angular')
  .module('app.core', [

    // angular built-in modules
    require('angular-route'),

    // reusable common modules
    require('../lib/exception'),
    require('../lib/router'),
    require('../lib/logger')

    // third party libs available to all modules (part of core)
    // toastr; will be global
  ])
  .config(require('./config.js'))
  .run(['$route', function () {
    // if ng-view is in an XHR-loaded template
    // https://github.com/angular/angular.js/issues/1213#issuecomment-23963063
  }])

let constants = require('./constants.js')
for (let constant in constants) {
  core.constant(constant, constants[constant])
}

module.exports = core
