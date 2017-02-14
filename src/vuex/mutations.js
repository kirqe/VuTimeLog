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
  [types.FETCH_PROJECTS] (state, projects) {
    state.projects = projects.body
  },
  [types.RENAME_PROJECT] (state, data) {
    getters.getProjectById(state, data.id).title = data.title
  },
  [types.SET_ACTIVE_PROJECT] (state, id) {
    state.activeProject = getters.getProjectById(state, id)
  },
  // LOGS
  [types.SET_NOTE] (state, note) {
    state.newLog.name = note
  },
  [types.ADD_RECORD] (state, data) {
    let ap = getters.getActiveProject(state)
    ap.logs.unshift(data)
    state.newLog.name = ''
    state.newLog.time = 0
  },
  [types.DELETE_RECORD] (state, id) {
    state.records = _.filter(state.records, (record) => {
      return record.id !== id
    })
  }
}

function tick (state) {
  state.newLog.time ++
}
