import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Va from './config/va'

Vue.config.productionTip = false

Vue.prototype.$validate = Va

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
