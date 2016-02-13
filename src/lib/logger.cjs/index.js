angular
  .module('lib.logger', [])
  .provider('Logger', Logger);

function Logger() {
  var config = {
    enabled: true,
    filter: '*'
  };
  this.enable = () => { config.enabled = true; }
  this.disable = () => { config.enabled = false; }
  this.setFilter = (f) => { config.filter = f; }

  this.$get = ['$log', function($log) {

    var logger = {
      log:   function(msg) { this._log('log', msg) },
      info:  function(msg) { this._log('info', msg) },
      warn:  function(msg) { this._log('warn', msg) },
      debug: function(msg) { this._log('debug', msg) },
      error: function(msg) { this._log('error', msg) },
      _log: _log
    }

    function _log(type, msg) {
      if(!config.enabled)
        return;
      $log[type](`[${this.loggerScope}] ${msg}`);
    }

    function instantiate(loggerScope) {
      let ret = Object.create(logger);
      ret.loggerScope = loggerScope;
      return ret;
    }

    return instantiate;
  }];

}
