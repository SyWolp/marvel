export default {
  namespaced: true,
  state: {
    userid: '',
    username: '',
    userstatus : false
  },
  mutations: {
    async UPDATE_USER_ID(state, payload) {
      state.userid = payload;
    },
    async UPDATE_USER_NAME(state, payload) {
      state.username = payload;
    },
    async UPDATE_USER_STATUS(state, payload) {
      state.userstatus = payload;
    },
  },
  actions: {
    async updateUserInfo({ commit }, payload) {
      console.log(payload);
      commit('UPDATE_USER_ID', payload.id);
      commit('UPDATE_USER_NAME', payload.username);
      commit('UPDATE_USER_STATUS', payload.status);
    }
  }
};