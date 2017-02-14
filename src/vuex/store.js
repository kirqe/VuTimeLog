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
  status: null,
  rate: 0,
  newLog: {
    name: '',
    time: 0
  },
  errors: [],
  projects: [],
  activeProject: {
    id: 4,
    title: 'Sit veniam ut voluptatem illum quia excepturi.',
    rate: '16.0',
    created_at: '02/10/2017',
    logs_count: 4,
    earned: '9.42',
    logs: [
      {
        id: 7,
        name: 'Rem aut est enim quidem doloremque rerum.',
        time: 982
      },
      {
        id: 16,
        name: 'Ab sit vel qui voluptatibus velit sapiente sint nisi et.',
        time: 239
      },
      {
        id: 25,
        name: 'Facilis ducimus repellendus minima qui repudiandae deleniti pariatur.',
        time: 473
      },
      {
        id: 28,
        name: 'Ut eligendi distinctio eos libero quia nemo pariatur sint accusamus.',
        time: 425
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
