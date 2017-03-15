import * as types from './mutation_types'
import getters from './getters'
import api from '../api'
import router from '../router'
// import _ from 'underscore'

export default {
  // TRACKER
  start: ({commit}) => {
    commit(types.START)
  },
  stop: (store) => {
    store.commit(types.STOP)
    let newLog = getters.getNewLog(store.state)
    api.createNewLog(newLog).then(response => {
      store.commit(types.ADD_LOG, response.data)
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
  deleteLog: ({store, commit}, id) => {
    api.deleteLog(id).then(response => {
      commit(types.DELETE_LOG, id)
    }, response => {
      commit(types.ERROR)
    })
  },
  login: ({commit}, cred) => {
    if (window.localStorage.getItem('access_token')) {
      commit(types.LOGIN)
      router.push('/projects')
    } else {
      api.login(cred).then(response => {
        window.localStorage.setItem('access_token', response.data.access_token)
        commit(types.LOGIN)
        router.push('/projects')
      })
    }
  },
  logout: ({commit}) => {
    commit(types.LOGOUT)
    window.localStorage.removeItem('access_token')
    router.push('/')
  },
  jwtAuth ({commit}) {
    if (window.localStorage.getItem('access_token')) {
      commit(types.LOGIN)
    }
  }
}
