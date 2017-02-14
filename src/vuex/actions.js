import * as types from './mutation_types'
import getters from './getters'
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
  updateProject: (store, id) => {
    let project = getters.getProjectById(store.state, id)
    api.updateProject(project)
  },
  setActiveProject: ({commit}, id) => {
    commit(types.SET_ACTIVE_PROJECT, id)
  },
  setNote: ({commit}, event) => {
    commit(types.SET_NOTE, event.target.value)
  },
  deleteRecord: ({commit}, event) => {
    commit(types.DELETE_RECORD, event)
  }
}
