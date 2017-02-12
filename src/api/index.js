import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const ProjectsResource = Vue.resource('http://localhost:3000/' + 'projects{/id}')

export default {
  fetchProjects: () => {
    return ProjectsResource.get()
  }
}
