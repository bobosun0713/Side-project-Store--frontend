import { collectionProduct } from '@/db'

const product = {
  state: {
    isLoading: false,
    productData: [],
  },
  mutations: {
    SET_PRODUCT_DATA(state, data) {
      state.productData = data
    },
  },
  actions: {
    getProducts({ commit, dispatch }) {
      dispatch('updateLoading', true)
      return new Promise((resolve, reject) => {
        collectionProduct
          .get()
          .then((products) => {
            let documents = products.docs.map((doc) => doc.data())
            // console.log(documents)
            commit('SET_PRODUCT_DATA', documents)
            dispatch('updateLoading', false)
            resolve()
          })
          .catch((error) => {
            reject(error.status)
          })
      })
    },
  },
}
export default product
