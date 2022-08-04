export default {
  namespaced: true,
  state: {
    showList: false,
    showPage: 0,
    sidePage: false,
    showClass: ""
  },
  mutations: {
    async UPDATE_HEADER_STATUS(state, payload) {
      state.showList = payload;
    },
    async UPDATE_PAGE_STATUS(state, payload) {
      state.showPage = payload;
    },
    async UPDATE_SIDE_PAGE(state, payload) {
      state.sidePage = payload.status;
      state.showClass = payload.class;
    },
  },
  actions: {
    async showHeaderList({ commit }, payload) {
      commit('UPDATE_HEADER_STATUS', payload);
    },
    async showHeaderPage({commit}, payload) {
      commit('UPDATE_PAGE_STATUS', payload);
    },
    async showSidePage({commit}, payload) {
      console.log(payload);
      commit('UPDATE_SIDE_PAGE', payload);
    }
  }
};