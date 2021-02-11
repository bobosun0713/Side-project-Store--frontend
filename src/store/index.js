import Vue from 'vue'
import Vuex from 'vuex'

import global from '@/store/global'
import member from '@/store/member'
import product from '@/store/product'
import cart from '@/store/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    product,
    cart,
    member,
  },
})
