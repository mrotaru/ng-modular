module.exports = config;

config.$inject = ['$provide', 'exceptionHandlerProvider'];
function config($provide, exceptionHandlerProvider) {
  $provide.decorator('$exceptionHandler', fooExceptionHandler);
  exceptionHandlerProvider.configure('app');

  fooExceptionHandler.$inject = ['$delegate', '$log', 'exceptionHandler'];
  function fooExceptionHandler($delegate, $log, exceptionHandler) {
    return function(exception, cause) {
      var logger = $log.getInstance(exceptionHandler.config.appErrorPrefix);
      logger.error(exception);
    }
  }
}
