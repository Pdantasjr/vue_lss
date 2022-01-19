import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toggle: ''
  },
  mutations: {
    toggleNav(state, payload) {
      state.toggle = payload
    }
  },
  getters: {
    toggleSidebarClass: state => {
      return state.toggle
    },
  }
})
