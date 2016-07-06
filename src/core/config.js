'use strict'

module.exports = function (routeHelperProvider, exceptionHandlerProvider) {
  routeHelperProvider.config({
    resolveAlways: function () {
      return {}
    }
  })

  exceptionHandlerProvider.configure({
    appErrorPrefix: 'Modular Demo'
  })
}
