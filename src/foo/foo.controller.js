'use strict';

angular
  .module("app.foo")
  .controller("FoosController", FoosController);

FoosController.$inject = ["$scope", "$route"];

function FoosController($scope, $route) {
  console.log('FoosController args:', arguments);
  console.log('$route.current:', $route.current);
  var vm = this;

  activate();

  function activate() {
    $scope.foo = "foo from Foo ctrl";
//    Foo.getData().then(function(foos){
//      vm.foos = foos;
//    });
  }
}
