const global = {
  state: {
    isLoading: false,
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.isLoading = loading
    },
  },
  actions: {
    updateLoading({ commit }, loading) {
      commit('SET_LOADING', loading)
    },
  },
}

export default global
