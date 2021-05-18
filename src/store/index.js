import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isSignedIn: false,
  },
  mutations: {
    TOGGLE_ISLOADING(state) {
      state.isLoading = !state.isLoading
    },
    TOGGLE_SIGNEDIN_STATUS(state, payload) {
      state.isSignedIn = payload
    },
  },
  actions: {
    updateLoadingStatus({ commit }) {
      commit('TOGGLE_ISLOADING')
    },
    updateSignedInStatus({ commit }, status) {
      commit('TOGGLE_SIGNEDIN_STATUS', status)
    },
  },
  modules: {},
  getters: {
    isLoading: state => state.isLoading,
    isSignedIn: state => state.isSignedIn,
  },
})
