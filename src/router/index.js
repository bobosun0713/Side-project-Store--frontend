import Vue from 'vue'
import VueRouter from 'vue-router'
import Cookies from 'js-cookie'

// page
import Default from '../views/Default.vue'
import Home from '../views/index/Home.vue'
import Product from '../views/Product.vue'
import Login from '../views/Login.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import Checkout from '../views/Checkout.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Default,
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'product', name: 'Product', component: Product },
      { path: 'login', name: 'Login', component: Login },
      {
        path: 'shopping',
        name: 'ShoppingCart',
        component: ShoppingCart,
        meta: { requiresAuth: true },
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: Checkout,
        meta: { requiresAuth: true },
      },
      { path: 'success', name: 'Success', component: Success },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  let User = Cookies.get('UID')
  if (to.meta.requiresAuth) {
    if (!User) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
