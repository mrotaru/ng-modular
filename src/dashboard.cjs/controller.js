module.exports = DashboardController;

DashboardController.$inject = ['$scope', 'DashboardService'];

function DashboardController($scope, DashboardService) {
  var vm = this;
  vm.foo = "foo/42";
  vm.result = null;

  activate();

  function activate() {
    console.log('activating controller');
    vm.result = DashboardService.getData(vm.foo);
    console.log('result:', vm.result);
  }
}
