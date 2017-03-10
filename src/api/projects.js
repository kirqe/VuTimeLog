import Vue from 'vue'
import axios from 'axios'
import auth from './auth'
Vue.prototype.$axios = axios

const Projects = 'http://localhost:3000/api/v1/projects/'

export default {
  fetchProjects: () => {
    return axios.get(Projects, auth.getHeader())
  },
  fetchProjectById: (id) => {
    return axios.get(Projects + id, auth.getHeader())
  },
  saveProject: (data) => {
    return axios.post(Projects, {project: data}, auth.getHeader())
  },
  // updateProject: (data) => {
  //   return ProjectsResource.update({ id: data.id }, data)
  // },
  deleteProject: (id) => {
    return axios.delete(Projects + id, auth.getHeader())
  }
}
