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
  [types.DELETE_PROJECT] (state, id) {
    state.projects = _.filter(state.projects, (project) => {
      return project.id !== id
    })
    state.activeProject = null
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
  [types.ADD_LOG] (state, data) {
    getters.getActiveProject(state).logs.unshift(data)
    clearNewLog(state)
  },
  [types.DELETE_LOG] (state, id) {
    state.activeProject.logs = _.filter(state.activeProject.logs, (log) => {
      return log.id !== id
    })
  },
  [types.SET_NOTE] (state, note) {
    state.newLog.name = note
  },
  [types.ERROR] (state) {
    state.error = true
    let toggle = () => {
      state.error = false
    }
    clearNewLog(state)
    setTimeout(toggle, 3000)
  },
  [types.REGISTER] (state) {
    //
  },
  [types.LOGIN] (state) {
    state.user.authenticated = true
  },
  [types.LOGOUT] (state) {
    state.user.authenticated = false
  }
}

function tick (state) {
  state.newLog.time ++
}

function clearNewLog (state) {
  state.newLog.name = ''
  state.newLog.time = 0
}
