'use strict';

angular
  .module("app.foo")
  .controller("FoosController", FoosController);

FoosController.$inject = ["$scope", "$route", "Foos", "Logger"];

function FoosController($scope, $route, Foos, Logger) {
  var vm = this;

  activate();

  function activate() {
    Foos.getFoos().then(function(foos){
      console.log('got foos', foos);
      vm.foos = foos;
    }).catch(function(err) { console.error(err) });
  }
}
