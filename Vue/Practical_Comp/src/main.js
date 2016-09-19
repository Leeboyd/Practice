import Vue from 'vue'
import App from './App'
import Home from './views/Home.vue'
import Editor from './components/Editor.vue'
import Services from './views/Services.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const router = new VueRouter()

router.map({
  '/home': {
    component: Home,
  },

  '/editor': {
    component: Editor,
  },

  '/services': {
    component: Services,
  },
})

router.redirect({
  '*': '/home',
})

// Start the app on the #app div
router.start(App, 'app')


// /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// })
