import Vue from 'vue'
import Router from 'vue-router'
import routerPath from './routerPath'
import routerComponent from './routerComponent'
// import { menuDataList } from '@/constants/common/menuDataList'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (from.path === to.path) {
      return;
    }

    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    // {
    //   path: routerPath.PROFILE,
    //   name:'/',
    //   meta: {
    //     menuNm: 'PROFILE',
    //   },
    //   props: true,
    //   component: routerComponent.PROFILE,
    // },
    {
      path: routerPath.PROFILE,
      name:'profile',
      meta: {
        menuNm: 'PROFILE',
      },
      props: true,
      component: routerComponent.PROFILE,
    },
    {
      path: routerPath.PROJECT,
      name:'project',
      meta: {
        menuNm: 'PROJECT',
      },
      props: true,
      component: routerComponent.PROJECT,
    },
    { path: '*', redirect: routerPath.PROFILE}
  ]
})

export default router