import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
Vue.prototype.$axios = axios

const Projects = 'http://localhost:3000/api/v1/projects/'
const Logs = 'http://localhost:3000/api/v1/logs/'
const config = {
  //
}
// http://codeheaven.io/how-to-use-axios-as-your-http-client/

export default {
  fetchProjects: () => {
    return axios.get(Projects)
  },
  fetchProjectById: (id) => {
    return axios.get(Projects + id)
  },
  saveProject: (data) => {
    return axios.post(Projects, {project: data})
  },
  // updateProject: (data) => {
  //   return ProjectsResource.update({ id: data.id }, data)
  // },
  deleteProject: (id) => {
    return axios.delete(Projects + id)
  },
  createNewLog: (data) => {
    return axios.post(Logs, {log: data}, config)
  },
  deleteLog: (id) => {
    return axios.delete(Logs + id, config)
  }
}
