import { collectionCart } from '@/db'
const cart = {
  state: {
    cartData: [],
    fareTotal: 50,
    cartTotal: 0,
  },
  mutations: {
    SET_CART_DATA(state, data) {
      state.cartData = data
    },
    SET_CART_TOTAL(state, total) {
      state.cartTotal += total
    },
  },
  actions: {
    getCart({ commit, dispatch }) {
      dispatch('updateLoading', true)
      return new Promise((resolve, reject) => {
        collectionCart
          .get()
          .then((carts) => {
            let documents = carts.docs.map((doc) => {
              let id = doc.id
              let data = doc.data()
              return { id, ...data }
            })
            commit('SET_CART_DATA', documents)
            dispatch('updateLoading', false)
            resolve()
          })
          .catch((error) => {
            reject(error.status)
          })
      })
    },

    deleteCart({ dispatch }, id) {
      collectionCart
        .doc(id)
        .delete()
        .then(() => {
          dispatch('getCart')
        })
    },

    addToCart(data) {
      collectionCart.add({ data })
    },

    addCartTotal({ commit }, total) {
      commit('SET_CART_TOTAL', total)
    },
  },
}

export default cart
