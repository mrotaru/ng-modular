'use strict'

module.exports = component

let component = {
  templateUrl: 'books/list.html',
  controllerAs: 'vm',
  controller: controller
}

function controller (Books, $location) {
  let vm = this

  vm.$onInit = function () {
    Books.getAll()
      .then((books) => { vm.books = books })
  }

  vm.increaseRating = (book) => book.rating++
  vm.decreaseRating = (book) => book.rating--
  vm.showDetails = (id) => $location.path(`/details/${id}`)
  vm.setRating = (book, rating) => { book.rating = rating }
}
