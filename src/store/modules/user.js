import * as types from '../mutation-types'

const state = {
  isLogin: true,
  books: [],
  plans: [],
  alertMessage: ''
}

const getters = {}

const actions = {
  loginAction ({ commit, rootState }, { name, pwd }) {
    const usrName = name
    if (usrName === '123' && pwd === '123') {
      commit(types.LOGIN_SUCCESS)
      commit(types.ALL_BOOKS_DATA, [
        {
          id: 0,
          name: 'hello'
        },
        {
          id: 1,
          name: 'hello'
        }
      ])

      commit(types.ALL_PLANS_DATA, [
        {
          id: 0,
          beginDate: '2017-03-09',
          endDate: '2017-03-15',
          left: '10',
          progress: 50
        },
        {
          id: 1,
          beginDate: '',
          endDate: '',
          progress: 50
        },
        {
          id: 2,
          beginDate: '',
          endDate: ''
        }
      ])
    } else {
      commit(types.LOGIN_FAILURE)
    }
  },

  addBook ({ commit }, book) {
    commit(types.ADD_BOOK, {
      id: book.id,
      name: book.name,
      img: book.img
    })
  },

  deleteBook ({ commit }, bookID) {
    commit(types.DELETE_BOOK, bookID)
  },

  updateBook ({ commit }, book) {
    commit(types.UPDATE_BOOK, {
      id: book.id,
      name: book.name,
      img: book.img
    })
  }
}

const mutations = {
  [types.LOGIN_SUCCESS] (state) {
    state.isLogin = true
  },
  [types.LOGIN_FAILURE] (state) {
    state.isLogin = false
  },
  [types.ALL_BOOKS_DATA] (state, books) {
    state.books = books
  },
  [types.ALL_PLANS_DATA] (state, plans) {
    state.plans = plans
  },
  [types.ADD_BOOK] (state, book) {
    if (state.books.filter(e => e.id === book.id).length === 0) {
      state.books = [
        ...state.books,
        book
      ]
    } else {
      state.alertMessage = '已添加'
    }
  },
  [types.DELETE_BOOK] (state, bookID) {
    state.books = state.books.filter(e => e.id !== bookID)
  },
  [types.UPDATE_BOOK] (state, book) {
    state.books.map(e => {
      if (e.id === book.id) {
        e = book
      }
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
