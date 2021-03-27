import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import authenticatedGuard from './router/authenticatedGuard'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
authenticatedGuard(router, store)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
