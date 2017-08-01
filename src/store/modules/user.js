import * as types from '../mutation-types'
import lockr from 'lockr'

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
      commit(types.SET_BOOKS_DATA, [
        {
          id: 0,
          name: 'hello'
        },
        {
          id: 1,
          name: 'hello'
        }
      ])

      commit(types.SET_PLANS_DATA, [
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
      cover: 'http://img11.360buyimg.com/n1/jfs/t2047/63/2033152973/398005/5ea9044e/56ea5e6aN38c0f2b8.jpg',
      info: {
        author: 'yrq110',
        date: '2017',
        publisher: '机械工业出版社',
        url: 'http://item.jd.com/10974436.html'
      }
    })
  },

  deleteBook ({ commit }, bookID) {
    commit(types.DELETE_BOOK, bookID)
  },

  updateBook ({ commit }, book) {
    commit(types.UPDATE_BOOK, {
      id: book.id,
      name: book.name,
      cover: book.img
    })
  },

  flashBooks ({ commit }) {
    commit(types.FLASH_BOOKS)
  },

  addPlan ({ commit }, plan) {
    commit(types.ADD_PLAN, plan)
  },

  deletePlan ({ commit }, planID) {
    commit(types.DELETE_PLAN, planID)
  },

  flashPlans ({ commit }) {
    commit(types.FLASH_PLANS)
  }
}

const mutations = {
  [types.LOGIN_SUCCESS] (state) {
    state.isLogin = true
  },
  [types.LOGIN_FAILURE] (state) {
    state.isLogin = false
  },
  [types.SET_BOOKS_DATA] (state, books) {
    lockr.set('books', books)
    state.books = books
  },
  [types.FLASH_BOOKS] (state) {
    state.books = lockr.get('books')
  },
  [types.SET_PLANS_DATA] (state, plans) {
    lockr.set('plans', plans)
    state.plans = plans
  },
  [types.FLASH_PLANS] (state) {
    state.plans = lockr.get('plans')
  },
  [types.ADD_BOOK] (state, book) {
    if (state.books.filter(e => e.id === book.id).length === 0) {
      state.books = [
        ...state.books,
        book
      ]
      lockr.set('books', state.books)
    } else {
      state.alertMessage = '已添加'
    }
  },
  [types.DELETE_BOOK] (state, bookID) {
    state.books = state.books.filter(e => e.id !== bookID)
    lockr.set('books', state.books)
  },
  [types.UPDATE_BOOK] (state, book) {
    state.books.map(e => {
      if (e.id === book.id) {
        e = book
      }
    })
  },
  [types.ADD_PLAN] (state, plan) {
    if (state.plans.filter(e => e.id === plan.id).length === 0) {
      state.plans = [
        ...state.plans,
        plan
      ]
      lockr.set('plans', state.plans)
    } else {
      state.alertMessage = '已添加'
    }
  },
  [types.DELETE_PLAN] (state, planID) {
    state.plans = state.plans.filter(e => e.id !== planID)
    lockr.set('plans', state.plans)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
