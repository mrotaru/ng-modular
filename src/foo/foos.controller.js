'use strict';

angular
  .module("app.foo")
  .controller("FoosController", FoosController);

FoosController.$inject = ["$scope", "$log", "$route", "Foos"];

function FoosController($scope, $log, $route, Foos) {
  var vm = this;
  var logger = $log.getInstance('c:foos');

  activate();

  function activate() {
    Foos.getFoos().then(function(foos){
      logger.debug('got foos', foos);
      vm.foos = foos;
    }).catch(function(err) {
      logger.error(err)
    });
  }
}
