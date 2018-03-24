import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/index'
import Detail from '@/components/pages/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
