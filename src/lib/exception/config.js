module.exports = config;

function config($provide) {
  $provide.decorator('$exceptionHandler', fooExceptionHandler);

  fooExceptionHandler.$inject = ['$delegate', '$log', 'exceptionHandler'];
  function fooExceptionHandler($delegate, $log, exceptionHandler) {
    return function(exception, cause) {
      var loger = $log.getInstance(exceptionHandler.config.appErrorPrefix);
      var errorData = {exception: exception, cause: cause};
      $delegate(exception, cause);
      logger.error(exception.message, errorData);
      throw { message: exception.message };
    }
  }
}
