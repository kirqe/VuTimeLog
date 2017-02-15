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
  newLog: {
    project_id: null,
    name: '',
    time: null
  },
  network: false,
  projects: [],
  activeProject: {
    id: 10,
    title: 'Mollitia perspiciatis vitae ut quis asperiores nihil.',
    rate: '38.0',
    created_at: '02/10/2017',
    logs_count: 2,
    total_time: 1894,
    earned: '19.99',
    logs: [
      {
        id: 50,
        name: 'Rerum blanditiis non excepturi quo eum.',
        time: 949
      },
      {
        id: 3,
        name: 'Rerum non natus quia ut reiciendis perspiciatis quos.',
        time: 945
      }
    ]
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
