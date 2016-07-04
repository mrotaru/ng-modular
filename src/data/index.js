'use strict'

require('angular')
  .module('core.data', [])
  .provider('Data', Data)

function Data () {
  let data = {
    books: () => require('./books.json'),
    book: (id) => require('./books.json').find((book) => book.id === id),
    authors: () => require('./authors.json'),
    author: (id) => require('./authors.json').find(author => author.id === id)
  }

  this.$get = function ($q) {
    let beforeHook = (param) => $q.when({value: param, completed: false})

    let mockHttp = {
      get: (url) => {
        let [endpoint, id] = url.split('/')
        let res = data[endpoint](Number.parseInt(id))
        return res
          ? $q.when({ code: 200, data: res })
          : $q.reject({ code: 404, data: { message: 'Not found' } })
      }
    }

    return {
      setBeforeHook: (hook) => { beforeHook = hook },
      request: function (param) {
        return beforeHook(param).then(function (hookRes) {
          if (hookRes.completed) {
            return hookRes.err
              ? $q.reject(hookRes.err)
              : $q.when(hookRes.value)
          } else {
            return mockHttp.get(param.url)
          }
        })
      }
    }
  }
}
