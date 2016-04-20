module.exports = DashboardController;

DashboardController.$inject = ['$scope', '$log', 'DashboardService'];

function DashboardController($scope, $log, DashboardService) {
  var vm = this;
  vm.token = null;
  var logger = $log.getInstance('c:dashboard');

  activate();

  function activate() {
    DashboardService.getToken().then(function(token){
      vm.token = token;
      logger.debug('got token:', token);
    });
  }
}
