import * as types from './mutation_types'
import getters from './getters'
import api from '../api'

export default {
  start: ({commit}) => {
    commit(types.START)
  },
  stop: (store) => {
    store.commit(types.STOP)
    let ap = getters.getActiveProject(store.state)
    let newLog = getters.getNewLog(store.state)
    api.createNewLog(newLog, ap.id).then(response => {
      store.commit(types.ADD_RECORD, response.body)
    })
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
  deleteLog: ({commit}, id) => {
    api.deleteLog(id).then(response => {
      commit(types.DELETE_LOG, id)
    })
    console.log(id)
  }
}
