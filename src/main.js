// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import KsVueScrollmagic from 'ks-vue-scrollmagic'
import VueHeadful from 'vue-headful'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/sass/main.scss';

Vue.use(BootstrapVue)
Vue.use(KsVueScrollmagic)
Vue.component('vue-headful', VueHeadful)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
