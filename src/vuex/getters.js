import _ from 'underscore'

export default {
  isStarted: state => state.started,
  isStopped: state => state.stopped,
  isTracking: state => state.istracking,
  getMinutes: state => Math.floor(state.newLog.time / 60),
  getSeconds: state => state.newLog.time,
  getProjects: state => state.projects,
  getActiveProject: state => state.activeProject,
  getLatestProject: (state) => {
    let l = _.last(state.projects)
    console.log(l)
    return l
  },
  getProjectById: (state, id) => {
    return _.findWhere(state.projects, { id: id })
  },
  getNewLog: state => state.newLog,
  getRecords: state => state.activeProject.logs,
  getNote: state => state.note
}
