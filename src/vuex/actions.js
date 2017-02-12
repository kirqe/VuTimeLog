import * as types from './mutation_types'
import api from '../api'

export default {
  start: ({commit}) => {
    commit(types.START)
  },
  stop: ({commit}) => {
    commit(types.STOP)
    commit(types.ADD_RECORD)
  },
  fetchProjects: ({commit}) => {
    api.fetchProjects().then(response => {
      commit(types.FETCH_PROJECTS, response)
    })
  },
  setNote: ({commit}, event) => {
    commit(types.SET_NOTE, event.target.value)
  },
  deleteRecord: ({commit}, event) => {
    commit(types.DELETE_RECORD, event)
  }
}
