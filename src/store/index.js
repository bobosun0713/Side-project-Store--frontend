import Vue from 'vue'
import Vuex from 'vuex'

import { collectionCart } from '@/db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    productDate: [],
  },
  mutations: {
    UPDATE_LOADING(state, loading) {
      state.isLoading = loading
    },
  },
  actions: {
    updateCart({ commit }, data) {
      commit('UPDATE_LOADING', true)
      collectionCart.add({ data }).then(() => {
        commit('UPDATE_LOADING', false)
      })
    },
  },
})
