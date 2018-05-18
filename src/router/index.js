/*import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Home.vue'
import Project from '@/Project.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/index', name: 'index', component: Home },
    { path: '/:project', name: 'project', props:true, component: Project }
  ]
})*/

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/index', name: 'index', component: Home },
    { path: '/:post', name: 'project', component: Project, props: true }
  ]
})
