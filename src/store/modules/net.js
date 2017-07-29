import * as types from '../mutation-types'

const state = {
  isLogin: false,
  books: {},
  plans: {}
}

const getters = {}

const actions = {
  login_action ({ commit }, { name, pwd }) {
    const usrName = name
    if (usrName === '123') {
      commit(types.LOGIN_SUCCESS)
    } else {
      commit(types.LOGIN_FAILURE)
    }
  }
}

const mutations = {
  [types.LOGIN_SUCCESS] (state) {
    state.isLogin = true
  },
  [types.LOGIN_FAILURE] (state) {
    state.isLogin = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
