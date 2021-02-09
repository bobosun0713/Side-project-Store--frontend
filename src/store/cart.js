import { collectionCart } from '@/db'
import firebase from 'firebase'

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
              let data = doc.data()
              return { ...data }
            })
            console.log()

            commit('SET_CART_DATA', documents)
            dispatch('updateLoading', false)
            resolve()
          })
          .catch((error) => {
            reject(error.status)
          })
      })
    },

    deleteCart({ dispatch }, data) {
      console.log(data.product)
      collectionCart
        .doc(data.getUserInfo)
        .update({
          products: firebase.firestore.FieldValue.arrayRemove({
            ...data.product,
          }),
        })
        .then(() => {
          dispatch('getCart')
        })
    },

    addCartTotal({ commit }, total) {
      commit('SET_CART_TOTAL', total)
    },
  },
}

export default cart
