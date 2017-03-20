import * as types from './mutation_types'
import getters from './getters'
import api from '../api'
import router from '../router'
// import _ from 'underscore'

export default {
  // TRACKER
  start: (store) => {
    if (!getters.isStarted(store.state)) {
      store.commit(types.START)
    }
  },
  stop: (store) => {
    store.commit(types.STOP)
    let newLog = getters.getNewLog(store.state)
    api.createNewLog(newLog).then(response => {
      store.commit(types.ADD_LOG, response.data)
      store.dispatch('fetchProject', newLog.project_id)
    }, response => {
      store.commit(types.ERROR)
    })
  },
  // PROJECTS
  fetchProjects: ({commit}) => {
    api.fetchProjects().then(response => {
      commit(types.FETCH_PROJECTS, response.data)
    })
  },
  fetchProject: ({store, commit}, id) => {
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
  updateProject: (store, project) => {
    api.updateProject(project)
  },
  setActiveProject: ({commit}, project) => {
    commit(types.SET_ACTIVE_PROJECT, project)
  },
  // LOGS
  setNote: ({commit}, event) => {
    commit(types.SET_NOTE, event.target.value)
  },
  deleteLog: (store, id) => {
    let proj = getters.getActiveProject(store.state)
    api.deleteLog(id).then(response => {
      store.commit(types.DELETE_LOG, id)
      store.dispatch('fetchProject', proj.id)
    }, response => {
      store.commit(types.ERROR)
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
      commit(types.LOGIN)
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
    if (window.localStorage.getItem('access_token')) {
      commit(types.LOGIN)
    }
  }
}
