'use strict'

require('angular')
  .module('lib.logger', [])
  .config(loggerConfig)

function config ($provide) {
  $provide.decorator('$log', decorator)

  decorator.$inject = ['$delegate']
  function decorator ($log) {
    const fns = ['log', 'info', 'warn', 'debug', 'error']

    $log.getInstance = function (context = null) {
      let instance = {
        context: context
      }
      for (let fn of fns) {
        instance[fn] = (message, ...args) => {
          let stack = (new Error()).stack.split(/\n/)
          let location = stack[2].match(/(http.*)$/)[1]
          $log[fn].apply(this, [`[${context}] ${message}`, ...args, location])
        }
      }
      return instance
    }
    return $log
  }
}
