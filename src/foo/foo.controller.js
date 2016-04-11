'use strict';

angular
  .module("app.foo")
  .controller("FoosController", FoosController);

FoosController.$inject = ["$scope", "$route", "Foos", "Logger"];

function FoosController($scope, $route, Foos, Logger) {
  var vm = this;

  activate();

  function activate() {
    Foos.getFoo(2).then(function(foo){
      console.log('got foo', foo);
    }).catch(function(err) { console.error(err) });
    Foos.getFoos().then(function(foos){
      console.log('got foos', foos);
      vm.foos = foos;
    }).catch(function(err) { console.error(err) });
  }
}
