import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/index', name: 'index', component: Home },
  ]
})
