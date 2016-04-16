module.exports = DashboardService;

DashboardService.$inject = ['Data'];

function DashboardService(Data) {
  var service = {
    getData: getData
  }
  init();
  return service;

  function init() {
  }

  function getData(url) {
    if(!url)
      throw new Error('no url');
    return url.split('/').pop();
  }
}
