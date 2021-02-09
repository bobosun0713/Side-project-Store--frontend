import Vue from 'vue'
import Vuex from 'vuex'

import product from '@/store/product'
import cart from '@/store/cart'

Vue.use(Vuex)

// 全域loading
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

export default new Vuex.Store({
  modules: {
    global,
    product,
    cart,
  },
})
