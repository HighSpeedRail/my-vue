import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Agreement from '@/components/Agreement'
import children from './routes'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children
    },
    {
      path: '/reg',
      name: 'Register',
      component: Register
    },
    {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
})
