import * as types from './mutation_types'
import getters from './getters'
import api from '../api'
import router from '../router'
// import _ from 'underscore'

export default {
  // TRACKER
  start: ({commit, state}) => {
    if (!getters.isStarted(state)) {
      commit(types.START)
    }
  },
  stop: ({commit, dispatch, state}) => {
    commit(types.STOP)
    let newLog = getters.getNewLog(state)
    api.createNewLog(newLog).then(response => {
      commit(types.ADD_LOG, response.data)
      dispatch('fetchProject', newLog.project_id)
    }, response => {
      commit(types.ERROR)
    })
  },
  // PROJECTS
  fetchProjects: ({commit}) => {
    api.fetchProjects().then(response => {
      commit(types.FETCH_PROJECTS, response.data)
    })
  },
  fetchProject: ({commit}, id) => {
    if (id) {
      api.fetchProjectById(id).then(response => {
        commit(types.SET_ACTIVE_PROJECT, response.data)
      })
    }
  },
  saveProject: ({commit}, project) => {
    api.saveProject(project).then(response => {
      commit(types.ADD_PROJECT, response.data)
    })
  },
  deleteProject: ({commit}, id) => {
    api.deleteProject(id).then(response => {
      commit(types.DELETE_PROJECT, id)
    })
  },
  updateProject: (project) => {
    api.updateProject(project)
  },
  setActiveProject: ({commit}, project) => {
    commit(types.SET_ACTIVE_PROJECT, project)
  },
  // LOGS
  setNote: ({commit}, event) => {
    commit(types.SET_NOTE, event.target.value)
  },
  deleteLog: ({commit, dispatch, state}, id) => {
    let proj = getters.getActiveProject(state)
    api.deleteLog(id).then(response => {
      commit(types.DELETE_LOG, id)
      dispatch('fetchProject', proj.id)
    }, response => {
      commit(types.ERROR)
    })
  },
  register: ({dispatch, commit}, cred) => {
    api.register(cred).then(response => {
      commit(types.REGISTER)
      let cred = {
        email: response.data.email,
        password: response.data.password
      }
      dispatch('login', cred)
    }, response => {
      commit(types.ERROR)
    })
  },
  login: ({commit}, cred) => {
    api.login(cred).then(response => {
      window.localStorage.setItem('access_token', response.data.access_token)
      commit(types.LOGIN, response.data.access_token)
      router.push('/projects')
    }, response => {
      commit(types.ERROR)
      router.push('/auth')
    })
  },
  logout: ({commit}) => {
    commit(types.LOGOUT)
    window.localStorage.removeItem('access_token')
    router.push('/')
  },
  jwtAuth: ({commit}) => {
    let tkn = window.localStorage.getItem('access_token')
    if (tkn) {
      commit(types.LOGIN, tkn)
    }
  }
}
