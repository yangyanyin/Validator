import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Va from './components/validator/va'
import Dialogs from './components/dialog/dialog'

Vue.config.productionTip = false

Vue.prototype.$validate = Va
Vue.prototype.$Dialogs = Dialogs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
