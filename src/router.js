import Vue from 'vue'
import Router from 'vue-router';
import TobeProcesse from './pages/TobeProcesse'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tobeProcesse',
      component: TobeProcesse
    },
    {
      path: '/processing',
      name: 'processing',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/Processing.vue')
    },
    {
      path: '/processed',
      name: 'processed',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/Processed.vue')
    }
  ]
})
