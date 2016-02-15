angular
  .module('lib.logger', [])
  .provider('Logger', Logger);

function Logger() {
  let config = {
    enabled: true,
  };
  this.enable  = () => { config.enabled = true; }
  this.disable = () => { config.enabled = false; }
  this.$get = ['$log', function($log) {
    function _log() {
      return function(msg) {
        if(config.enabled)
          $log.log(msg);
      }
    }
    return _log;
  }];

}
