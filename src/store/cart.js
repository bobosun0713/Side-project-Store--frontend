import { collectionCart } from '@/db'
import firebase from 'firebase'
import Cookies from 'js-cookie'

const cart = {
  state: {
    cartData: [],
    fareTotal: 50,
    isAddLoading: false,
  },
  getters: {
    getCartTotal(state) {
      let num = 0
      state.cartData.map((val) => {
        num += val.quantity * val.price
      })
      return num
    },
    getCartList(state) {
      return state.cartData.map((item) => item)
    },
  },
  mutations: {
    SET_CART_DATA(state, data) {
      state.cartData = data
    },

    UPDATE_ADD_LOADING(state, loading) {
      state.isAddLoading = loading
    },
  },
  actions: {
    getCart({ commit, dispatch }) {
      dispatch('updateLoading', true)
      return new Promise((resolve, reject) => {
        collectionCart
          .doc(Cookies.get('UID'))
          .get()
          .then((carts) => {
            // let documents = carts.map((doc) => {
            //   let data = doc.data()
            //   console.log(data)
            //   // return { ...data }
            // })
            console.log(carts.data().products)

            commit('SET_CART_DATA', carts.data().products)
            dispatch('updateLoading', false)
            resolve()
          })
          .catch((error) => {
            reject(error.status)
          })
      })
    },

    deleteCart({ dispatch }, data) {
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

    addCartQuantity({ commit, dispatch }, num) {
      commit('UPDATE_ADD_LOADING', true)
      collectionCart
        .doc(num.getUserInfo)
        .update({
          products: firebase.firestore.FieldValue.arrayRemove({
            ...num.product,
          }),
        })
        .then(() => {
          collectionCart
            .doc(num.getUserInfo)
            .update({
              products: firebase.firestore.FieldValue.arrayUnion({
                ...num.cartProduct,
              }),
            })
            .then(() => {
              dispatch('getCart')
              commit('UPDATE_ADD_LOADING', false)
            })
        })
    },
  },
}

export default cart
