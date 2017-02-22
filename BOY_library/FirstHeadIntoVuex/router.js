import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Foo = Vue.extend({
    template: '<div class="col-xs-10"><h1>This is foo!</h1></div>'
})

const Home = Vue.extend({
    template: '<div class="col-xs-10"><h1>This is 後台首頁唷!</h1></div>'
})

import ChattingRoom from './views/ChattingRoom.vue'


export default new Router({
  // mode: 'history',
  // scrollBehavior: () => ({ y: 0 }),
  routes: [
    // { path: '/top/:page(\\d+)?', component: createListView('top') },
    // { path: '/new/:page(\\d+)?', component: createListView('new') },
    // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
    { path: '/home', component: Home, meta: { adminOnly: true }},
    { path: '/foo', component: Foo },
    { path: '/chattingroom', component: ChattingRoom },
    { path: '*', redirect: '/home' }
  ]
})
