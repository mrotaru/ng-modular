module.exports = config;

function config($provide) {
  $provide.decorator('$log', decorator);

  decorator.$inject = ['$delegate'];
  function decorator($log) {
    const fns = ['log', 'info', 'warn', 'debug', 'error'];

    $log.getInstance = function(context) {
      let instance = {
        context: context
      };
      for(let fn of fns) {
        instance[fn] = (message, ...args) => {
          $log[fn].apply(this, [`[${context}] ${message}`].concat(args));
        }
      }
      return instance;
    }
    return $log;
  }
}
