import Vue from 'vue'
import Router from 'vue-router'
import ele from '@/components/ele'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ele',
      component: ele
    }
  ]
})
