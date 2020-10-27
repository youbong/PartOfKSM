const routerComponent = {
  INTRO : () => import('@/pages/intro/Intro.vue'),
  PROFILE : () => import('@/pages/profile/Profile.vue'),
  PROJECT : () => import('@/pages/project/Project.vue'),
  INTRODUCE : () => import('@/pages/introduce/Introduce.vue'),
}

export default routerComponent;