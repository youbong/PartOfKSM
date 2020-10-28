import Vue from 'vue'
import Vuex from 'vuex'

import common, { CHANGE_SUB_MENU_ACTION } from './common/common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
  }
});

export{
  CHANGE_SUB_MENU_ACTION
};