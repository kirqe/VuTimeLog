import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const ProjectsResource = Vue.resource('http://localhost:3000/' + 'projects{/id}')
const LogsResource = Vue.resource('http://localhost:3000/' + 'projects{/id}/' + 'logs')

export default {
  fetchProjects: () => {
    return ProjectsResource.get()
  },
  addNewProject: (data) => {
    return ProjectsResource.save(data)
  },
  updateProject: (data) => {
    return ProjectsResource.update({ id: data.id }, data)
  },
  deleteProject: (id) => {
    return ProjectsResource.remove({ id: id })
  },
  createNewLog: (data, id) => {
    return LogsResource.save({id: id}, data)
  }
}
