module.exports = configRoutes;

configRoutes.$inject = ["RouteHelper"];

function configRoutes(RouteHelper) {
  RouteHelper.configureRoutes([{
    url: '/',
    config: {
      templateUrl: '/views/dashboard/dashboard.page.html',
      controller: 'DashboardController',
      controllerAs: 'vm',
      title: 'Dashboard',
      settings: {
        nav: 1
      }
    }
  }]);
}
