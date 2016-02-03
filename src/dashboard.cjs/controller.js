module.exports = DashboardController;

DashboardController.$inject = ['$scope', 'DashboardService'];

function DashboardController($scope, DashboardService) {

  activate();

  $scope.foo = "foo/42";
  $scope.result = null;

  function activate() {
    console.log('activating controller');
    $scope.result = DashboardService.getData($scope.foo);
  }
}
