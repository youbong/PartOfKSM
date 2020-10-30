import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import routerPath from './router/routerPath'
// import apiPath from './services/apiPath'
import VScrollLock from 'v-scroll-lock';

import store from './store';

Vue.config.productionTip = false

Vue.prototype.$routerPath = routerPath;
// Vue.prototype.$apiPath = apiPath;

Vue.use(VScrollLock);

Vue.wrap
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')