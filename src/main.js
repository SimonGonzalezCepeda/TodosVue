// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueRouter from 'vue-router'
import Axios from 'axios'
import querystring from 'querystring'

import Todos from './components/Todos.vue'
import Tokens from './components/Tokens.vue'

window.querystring = querystring
window.axios = Axios
Vue.prototype.$http = Axios

const routes = [
  { path: '/todos', component: Todos },
  { path: '/tokens', component: Tokens }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.use(VueMaterial)
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
