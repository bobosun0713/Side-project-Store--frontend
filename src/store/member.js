import Cookies from 'js-cookie'
const member = {
  state: {
    userUID: '',
  },
  mutations: {
    SET_USER_INFO(state, UID) {
      state.userUID = UID
      Cookies.set('UID', state.userUID)
    },
    REMOVE_USER_INFO(state) {
      state.userUID = ''
      Cookies.remove('UID')
    },
  },
  actions: {
    // 登入
    signIn({ commit }, UID) {
      alert('1')
      commit('SET_USER_INFO', UID)
    },
    // 登出
    signOut({ commit }) {
      commit('REMOVE_USER_INFO')
    },
  },
}
export default member
