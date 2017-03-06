import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  started: false,
  stopped: false,
  istracking: false,
  error: false,
  projects: [],
  activeProject: null,
  newLog: {
    project_id: null,
    name: '',
    time: null
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
