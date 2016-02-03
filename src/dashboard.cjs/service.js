module.exports = DashboardService;

DashboardService.$inject = [];

function DashboardService() {
  var service = {
    getData: getData
  }
  init();
  return service;

  function init() {
    console.log('init DashboardService');
  }

  function getData(url) {
    return url.split('/').pop();
  }
}

