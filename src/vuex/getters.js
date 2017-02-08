export default {
  isStarted: state => state.started,
  isStopped: state => state.stopped,
  isTracking: state => state.istracking,
  getMinutes: state => Math.floor(state.counter / 60),
  getSeconds: state => state.counter,
  getRecords: state => state.records,
  getNote: state => state.note
}
