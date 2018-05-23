import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Other from '@/components/Other'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/index', name: 'index', component: Home },
    { path: '/paintings', name: 'other', component: Other },
    { path: '/:post', name: 'project', component: Project, props: true }
  ]
})
