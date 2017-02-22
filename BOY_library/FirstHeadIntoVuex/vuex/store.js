import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import msn from './modules/message'
import cate from './modules/category'



// Initialize
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    msn,
    cate,
  },

})
