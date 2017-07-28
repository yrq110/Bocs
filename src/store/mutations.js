// import * as types from './mutation-types'
const mutations = {
  // [types.NET_STATUS] (state, netStatus) {
  //   state.netStatus = netStatus
  // },
  LOGIN_SUCCESS (state) {
    state.isLogin = true
  },
  SET_USER_INFO (state) {
  },
  ADD_NEW_BOOK (state) {
    state.number = state.number - 1
  },
  DELETE_BOOK (state, id) {
  },
  UPDATE_BOOK (state, id) {
  },
  ADD_READING_PLAN (state, id) {
  },
  DELETE_READING_PLAN (state, id) {
  },
  UPDATE_READING_PLAN (state, id) {

  }
}

export default mutations
