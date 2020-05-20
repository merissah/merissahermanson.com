import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Art from '@/components/Art'
import Animations from '@/components/Animations'
import Design from '@/components/Design'
import Intelligence from '@/components/Intelligence'
import DownDetector from '@/components/DownDetector'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '*', redirect: '/' },
    { path: '/', name: 'home', component: Home },
    { path: '/index', name: 'index', component: Home },
    { path: '/paintings', name: 'art', component: Art },
    { path: '/animations', name: 'animations', component: Animations },
    { path: '/study/speedtestIntelligence', name: 'intelligence', component: Intelligence, props: true },
    { path: '/study/downDetector', name: 'down-detector', component: DownDetector, props: true },
    { path: '/design/:post', name: 'design', component: Design, props: true }
  ]
})
