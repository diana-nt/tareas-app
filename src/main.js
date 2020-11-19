import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js'
import router from './router.js'
import { i18n } from './plugins/i18n.js'


Vue.config.productionTip = false

new Vue({
  store,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')


