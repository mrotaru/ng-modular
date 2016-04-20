module.exports = DashboardService;

DashboardService.$inject = ['$q', 'Data'];

function DashboardService($q, Data) {
  var token = null;
  var service = {
    getToken: getToken
  }
  return service;

  function getToken() {
    if(token) return $q.when(token);
    return Data.get('/token/42');
  }
}
