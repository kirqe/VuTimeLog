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
  counter: 0,
  status: null,
  rate: 0,
  newRecord: {},
  errors: [],
  records: [
    { id: '1486424772177', title: 'Project init and setup', time: 600 },
    { id: '1486424773888', title: 'Configure webpack, lol', time: 1000 },
    { id: '1486424775654', title: 'Modeling users', time: 300 }
  ]
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
