import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Agreement from '@/components/Agreement'
import children from './routes'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
})
