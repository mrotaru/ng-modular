'use strict'

module.exports = {
  templateUrl: 'books/single.html',
  controllerAs: 'vm',
  controller: controller,
  bindings: {
    id: '@'
  }
}

function controller (Books) {
  let vm = this

  vm.$onInit = function () {
    Books.getById(vm.id)
      .then((res) => { vm.book = res.data })
      .catch(err => console.log(err))
  }
}
