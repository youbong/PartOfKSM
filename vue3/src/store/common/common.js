import { CHANGE_SUB_MENU_ACTION } from './action';
import { CHANGE_SUB_MENU_MUTATION } from './mutation';

export default {
  state: {
    subMenuId: ''
  },
  actions: {
    [CHANGE_SUB_MENU_ACTION](context, changedId) {
      this.commit({
        type: CHANGE_SUB_MENU_MUTATION,
        changedId: changedId,
      });
    },
  },
  mutations: {
    [CHANGE_SUB_MENU_MUTATION](state, payload) {
      const { changedId } = payload;
      state.subMenuId = changedId;
    },
  }
}

export { CHANGE_SUB_MENU_ACTION };