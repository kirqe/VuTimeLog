import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const ProjectsResource = Vue.resource('http://localhost:3000/' + 'projects{/proj_id}')
const LogsResource = Vue.resource('http://localhost:3000/' + 'projects{/proj_id}/' + 'logs{/log_id/}')

export default {
  fetchProjects: () => {
    return ProjectsResource.get()
  },
  addNewProject: (data) => {
    return ProjectsResource.save(data)
  },
  updateProject: (data) => {
    return ProjectsResource.update({ proj_id: data.id }, data)
  },
  deleteProject: (id) => {
    return ProjectsResource.remove({ proj_id: id })
  },
  createNewLog: (data, id) => {
    return LogsResource.save({proj_id: id}, data)
  },
  deleteLog: (id) => {
    return LogsResource.remove({log_id: id})
  }
}
