import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Agreement from '@/components/Agreement'
import Content from '@/components/content/Content'
import children from '@/components/content/Children'

Vue.use(Router);
Vue.use(Resource);

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/reg',
      component: Register
    },
    {
      path: '/agreement',
      component: Agreement
    },
    {
      path: '/content',
      component: Content,
      children
    }
  ]
})
