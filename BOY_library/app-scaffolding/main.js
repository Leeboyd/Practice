import Vue from 'vue'
import App from './components/App.vue'
import router from './router.js'

//--------------------------------
// 第三方套件
//--------------------------------
import Cookies from "js-cookie"
import moment from "moment"
import 'babel-polyfill'

export {
  Cookies,
  router,
  moment
}
new Vue({
  el: '#app',
  router: router,
  render: (h) => h(App),
})
