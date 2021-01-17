import Vue from 'vue'
import Router from 'vue-router'
import BubbleChart from '@/components/BubbleChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'bubble',
      component: BubbleChart
    }
  ]
})
