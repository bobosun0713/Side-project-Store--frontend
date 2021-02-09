import Cookies from 'js-cookie'
const member = {
  state: {
    userUID: '',
  },
  getters: {
    getUserInfo(state) {
      return !state.userUID ? Cookies.get('UID') : state.userUID
    },
  },
  mutations: {
    SET_USER_INFO(state, UID) {
      Cookies.set('UID', UID)
      state.userUID = Cookies.get('UID')
    },
    REMOVE_USER_INFO(state) {
      Cookies.remove('UID')
      state.userUID = ''
    },
  },
  actions: {
    // 登入
    signIn({ commit }, UID) {
      commit('SET_USER_INFO', UID)
    },
    // 登出
    signOut({ commit }) {
      commit('REMOVE_USER_INFO')
    },
  },
}
export default member
