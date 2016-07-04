'use strict'

module.exports = function () {
  this.$get = function (Data) {
    return {
      getById: (id) => Data.request({url: `author/${id}`}),
      getAll: () => Data.request({url: 'authors'})
    }
  }
}
