import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Validator = () => import('./components/validator/Validator')
const Dialog = () => import('./components/dialog/DialogPage')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/validator',
          name: 'Validator',
          component: Validator
        },
        {
          path: '/dialog',
          name: 'Dialog',
          component: Dialog
        },
      ]
    },
    
  ]
})
