export default {
  namespaced: true,
  state: {
    showList: false,
    showPage: 0
  },
  mutations: {
    async UPDATE_HEADER_STATUS(state, payload) {
      state.showList = payload;
    },
    async UPDATE_PAGE_STATUS(state, payload) {
      state.showPage = payload;
    },
  },
  actions: {
    async showHeaderList({ commit }, payload) {
      console.log(payload);
      commit('UPDATE_HEADER_STATUS', payload);
      commit('UPDATE_PAGE_STATUS', payload);
    }
  }
};