'use strict';

angular
  .module("lib.logger")
  .factory("Logger", Logger);

function Logger() {
  var service = {
    log: log
  }
  return service;

  function log(param) {
    console.log("logger.log:", param);
  }
}
