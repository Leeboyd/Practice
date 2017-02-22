import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'
import store from './vuex/store'

if (process.env.NODE_ENV === 'production') {
  Vue.config.debug = false
  Vue.config.devtools = false
}

//--------------------------------
// 第三方套件
//--------------------------------
import * as moment from 'moment'
window.moment = moment;

import Cookies from "js-cookie"
window.Cookies = Cookies;

import $ from 'jquery'
import jQuery from 'jquery'
window.$ = $
window.jQuery = jQuery;

import shortid from 'shortid'

import 'babel-polyfill'

export {
  shortid
}

//--------------------------------
// Navigation Hooking
//--------------------------------
router.beforeEach((to, from, next) => {
  // if (to.meta.adminOnly && !Cookies.get('access_token') && !cognito.isValid) {
  if (to.meta.adminOnly && !Cookies.get('access_token')) {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router: router,
  render: (h) => h(App),
  store: store
})
