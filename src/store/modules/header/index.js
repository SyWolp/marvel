export default {
  namespaced: true,
  state: {
    showList: false,
  },
  mutations: {
    async UPDATE_HEADER_STATUS(state, payload) {
      state.showList = payload;
    },
  },
  actions: {
    async showHeaderList({ commit }, payload) {
      console.log(payload);
      commit('UPDATE_HEADER_STATUS', payload);
    }
  }
};