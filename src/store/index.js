import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import state from './state'
import mutations from './mutations'
import actions from './actions'

const vuexPersist = new VuexPersist({
  key: 'cd-works',
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: state,
  mutations: mutations,
  actions: actions,
  getters: {},
  modules: {
  }
})
