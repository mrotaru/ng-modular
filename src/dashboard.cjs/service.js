module.exports = DashboardService;

DashboardService.$inject = ['Data'];

function DashboardService(Data) {
  var service = {
    getData: getData
  }
  init();
  return service;

  function init() {
    console.log('init DashboardService');
  }

  function getData(url) {
    if(!url)
      return 'no url';
    return url.split('/').pop();
  }
}
