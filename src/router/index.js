import { createRouter, createWebHistory } from 'vue-router'

import holiday from '../components/holiday.vue'
import westholiday from '../components/Westholiday.vue'

const routes = [
  {
    path: '/Chinese-holiday',
    name: 'holiday',
    component: holiday
  },
  {
    path: '/West-holiday',
    name: 'Westholiday',
    component:westholiday
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
    console.log(to);
    document.title = '測驗 - ' + to.name
})


export default router
