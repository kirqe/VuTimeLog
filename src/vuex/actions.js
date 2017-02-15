import * as types from './mutation_types'
import getters from './getters'
import api from '../api'

export default {
  // TRACKER
  start: ({commit}) => {
    commit(types.START)
  },
  stop: (store) => {
    store.commit(types.STOP)
    let newLog = getters.getNewLog(store.state)
    api.createNewLog(newLog).then(response => {
      store.commit(types.ADD_RECORD, response.data)
    }, response => {
      store.commit(types.NETWORK_PROBLEM)
    })
  },
  // PROJECTS
  fetchProjects: ({commit}) => {
    api.fetchProjects().then(response => {
      commit(types.FETCH_PROJECTS, response.data)
    })
  },
  updateProject: (store, id) => {
    let project = getters.getProjectById(store.state, id)
    api.updateProject(project)
  },
  setActiveProject: ({commit}, id) => {
    commit(types.SET_ACTIVE_PROJECT, id)
  },
  // LOGS
  setNote: ({commit}, event) => {
    commit(types.SET_NOTE, event.target.value)
  },
  deleteLog: ({commit}, id) => {
    api.deleteLog(id).then(response => {
      commit(types.DELETE_LOG, id)
    }, response => {
      commit(types.NETWORK_PROBLEM)
    })
  }
}
