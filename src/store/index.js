import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: false,
    isSignedIn: false,
    sessionToken: '',
  },
  mutations: {
    TOGGLE_ISLOADING(state) {
      state.isLoading = !state.isLoading
    },
    TOGGLE_SIGNEDIN_STATUS(state, payload) {
      state.isSignedIn = payload
    },
    SET_SESSION_TOKEN(state, token) {
      state.sessionToken = token
    },
  },
  actions: {
    updateLoadingStatus({ commit }) {
      commit('TOGGLE_ISLOADING')
    },
    updateSignedInStatus({ commit }, status) {
      commit('TOGGLE_SIGNEDIN_STATUS', status)
    },
    updateSessionToken({ commit }, token) {
      console.log("token in store", token)
      commit('SET_SESSION_TOKEN', token)
    },
  },
  modules: {},
  getters: {
    isLoading: state => state.isLoading,
    isSignedIn: state => state.isSignedIn,
    sessionToken: state => state.sessionToken,
  },
})
