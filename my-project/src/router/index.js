import Vue from 'vue'
import Router from 'vue-router'
import ele from '@/components/ele'
import resource from 'vue-resource'

Vue.use(Router)
Vue.use(resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ele',
      component: ele
    }
  ]
})
