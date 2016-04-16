module.exports = DashboardController;

DashboardController.$inject = ['$scope', '$log', 'DashboardService'];

function DashboardController($scope, $log, DashboardService) {
  var vm = this;
  vm.foo = "foo/42";
  vm.result = null;
  var logger = $log.getInstance('c:dashboard');

  activate();

  function activate() {
    vm.result = DashboardService.getData(vm.foo);
    logger.log('result:', vm.result);
  }
}
