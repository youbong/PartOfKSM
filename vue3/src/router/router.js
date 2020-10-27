import Vue from 'vue'
import Router from 'vue-router'
import routerPath from './routerPath'
import routerComponent from './routerComponent'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: routerPath.PROFILE,
      name:'Profile',
      meta: {
        menuNm: 'PROFILE',
      },
      component: routerComponent.PROFILE,
    },
    {
      path: routerPath.PROJECT,
      name:'Project',
      meta: {
        menuNm: 'PROJECT',
      },
      component: routerComponent.PROJECT,
    },
    { path: '*', redirect: routerPath.PROFILE}
  ]
})

export default router