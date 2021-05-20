import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
const ls = new SecureLS({ isCompression: false })

export default createStore({
  state: {
    isLoading: false,
    isSignedIn: false,
    searchKeyword: '',
    sessionToken: '',
    userId: '',
  },
  mutations: {
    TOGGLE_ISLOADING(state) {
      state.isLoading = !state.isLoading
    },
    TOGGLE_SIGNEDIN_STATUS(state, payload) {
      state.isSignedIn = payload
    },
    UPDATE_SEARCH_KEYWORD(state, value) {
      state.searchKeyword = value
    },
    SET_SESSION_TOKEN(state, token) {
      state.sessionToken = token
    },
    SET_USERID(state, id) {
      state.userId = id
    },
  },
  actions: {
    updateLoadingStatus({ commit }) {
      commit('TOGGLE_ISLOADING')
    },
    updateSignedInStatus({ commit }, status) {
      commit('TOGGLE_SIGNEDIN_STATUS', status)
    },
    updateSearchKeyword({ commit }, value) {
      commit('UPDATE_SEARCH_KEYWORD', value)
    },
    updateSessionToken({ commit }, token) {
      commit('SET_SESSION_TOKEN', token)
    },
    updateUserId({ commit }, id) {
      commit('SET_USERID', id)
    },
  },
  modules: {},
  getters: {
    isLoading: state => state.isLoading,
    isSignedIn: state => state.isSignedIn,
    searchKeyword: state => state.searchKeyword,
    sessionToken: state => state.sessionToken,
    userId: state => state.userId,
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key),
      },
    }),
  ],
})
