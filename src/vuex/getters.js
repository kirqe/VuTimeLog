import _ from 'underscore'

export default {
  isStarted: state => state.started,
  isStopped: state => state.stopped,
  isTracking: state => state.istracking,
  getMinutes: state => Math.floor(state.counter / 60),
  getSeconds: state => state.counter,
  getProjects: state => state.projects,
  getActiveProject: state => state.activeProject,
  getProjectById: (state, id) => {
    return _.findWhere(state.projects, { id: id })
  },
  getRecords: state => state.activeProject.logs,
  getNote: state => state.note
}
