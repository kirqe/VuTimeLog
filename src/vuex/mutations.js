import * as types from './mutation_types'
import getters from './getters'
import _ from 'underscore'

export default {
  // TRACKER
  [types.START] (state) {
    state.started = true
    state.stopped = false
    state.istracking = true
    state.interval = setInterval(() => tick(state), 1000)
  },
  [types.STOP] (state) {
    state.stopped = true
    state.started = false
    state.istracking = false
    state.interval = clearInterval(state.interval)
  },
  // PROJECTS
  [types.ADD_PROJECT] (state, project) {
    state.projects.unshift(project)
  },
  [types.FETCH_PROJECTS] (state, projects) {
    state.projects = projects
  },
  [types.RENAME_PROJECT] (state, data) {
    getters.getProjectById(state, data.id).title = data.title
  },
  [types.SET_ACTIVE_PROJECT] (state, data) {
    state.activeProject = data
    state.newLog.project_id = data.id
  },
  // LOGS
  [types.SET_NOTE] (state, note) {
    state.newLog.name = note
  },
  [types.ADD_RECORD] (state, data) {
    let ap = getters.getActiveProject(state)
    ap.logs.unshift(data)
    clearNewLog(state)
  },
  [types.DELETE_LOG] (state, id) {
    state.activeProject.logs = _.filter(state.activeProject.logs, (log) => {
      return log.id !== id
    })
  },
  [types.NETWORK_PROBLEM] (state) {
    state.network = true
    let toggle = () => {
      state.network = false
    }
    clearNewLog(state)
    setTimeout(toggle, 3000)
  }
}

function tick (state) {
  state.newLog.time ++
}

function clearNewLog (state) {
  state.newLog.name = ''
  state.newLog.time = 0
}
