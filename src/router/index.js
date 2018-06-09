import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Programming from '@/pages/Programming'
import Photography from '@/pages/Photography'
import Homepage from '@/pages/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/programming',
      name: 'Programming',
      component: Programming
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photography
    },
    {
      path: '/homepage',
      name: 'Homepage',
      component: Homepage
    }
  ]
})
