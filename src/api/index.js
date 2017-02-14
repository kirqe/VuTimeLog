import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const ProjectsResource = Vue.resource('http://localhost:3000/' + 'projects{/id}')

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
  }
}
