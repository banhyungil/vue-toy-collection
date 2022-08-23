import { createRouter, createWebHistory } from 'vue-router'
import FandiaryView from '@/views/FandiaryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FandiaryView
    },
    {
      path: '/fandiary',
      name: 'fandiary',
      component: FandiaryView
    },
    {
      path: '/mars',
      name: 'mars',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/MarsView.vue')
    },
    {
      path: '/movieCinema',
      name: 'movieCinema',
      component: () => import('@/views/MovieCinemaView.vue')
    },
    {
      path: '/bucket',
      name: 'bueckt',
      component: () => import('@/views/BucketView.vue')
    }
  ]
})

export default router
