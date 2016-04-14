module.exports = config;

function config($provide) {
  $provide.decorator('$exceptionHandler', fooExceptionHandler);

  function fooExceptionHandler($delegate, exceptionHandler, Logger) {
    return function(exception, cause) {
      var log = Logger();
      var appErrorPrefix = exceptionHandler.config.appErrorPrefix || '';
      var errorData = {exception: exception, cause: cause};
      exception.message = appErrorPrefix + exception.message;
      $delegate(exception, cause);
      log(exception.message, errorData);
      throw { message: exception.message };
    }
  }
}
