'use strict'

let angular = require('angular')

angular
  .module('lib.exception', ['lib.logger'])
  .provider('exceptionHandler', exceptionHandler)
  .config(config)

function exceptionHandler () {
  this.config = {
    appErrorPrefix: undefined
  }

  this.configure = function (_config) {
    angular.merge(this.config, _config)
  }

  this.$get = function () {
    return {config: this.config}
  }
}

function config ($provide, exceptionHandlerProvider) {
  $provide.decorator('$exceptionHandler', bmExceptionHandler)
  exceptionHandlerProvider.configure({
    appErrorPrefix: 'app'
  })

  function bmExceptionHandler ($delegate, $log, exceptionHandler) {
    return function (exception, cause) {
      var logger = $log.getInstance(exceptionHandler.config.appErrorPrefix)
      logger.error(exception)
    }
  }
}
