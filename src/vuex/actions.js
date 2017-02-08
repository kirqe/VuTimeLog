import * as types from './mutation_types'

export default {
  start: ({commit}) => {
    commit(types.START)
  },
  stop: ({commit}) => {
    commit(types.STOP)
    commit(types.ADD_RECORD)
  },
  setNote: ({commit}, event) => {
    commit(types.SET_NOTE, event.target.value)
  },
  deleteRecord: ({commit}, event) => {
    commit(types.DELETE_RECORD, event)
  }
}
