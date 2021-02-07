import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入共用sass
import '@/assets/scss/main.scss'

// fontawesome
import '@/plugin/fontawesome.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
