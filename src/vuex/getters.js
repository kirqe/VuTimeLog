export default {
  isStarted: state => state.started,
  isStopped: state => state.stopped,
  isTracking: state => state.istracking,
  getMinutes: state => Math.floor(state.newLog.time / 60),
  getSeconds: state => state.newLog.time,
  getProjects: state => state.projects,
  getActiveProject: state => state.activeProject,
  getNewLog: state => state.newLog,
  getLogs: state => state.activeProject.logs,
  getErrorStat: state => state.error,
  getAuthStat: state => state.user.authenticated,
  getUser: state => state.user
}
