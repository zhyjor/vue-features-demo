import Vue from 'vue'
import Router from 'vue-router'
import root from '@/components/root'
import draw from '@/components/drawerLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: root
    },
    {
      path: '/draw',
      name: 'draw',
      component: draw
    }
  ]
})
