import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    TOGGLE_ISLOADING(state) {
      state.isLoading = !state.isLoading
    },
  },
  actions: {
    updateLoadingStatus({ commit }) {
      commit('TOGGLE_ISLOADING')
    },
  },
  modules: {},
  getters: {
    isLoading: state => state.isLoading,
  },
})
