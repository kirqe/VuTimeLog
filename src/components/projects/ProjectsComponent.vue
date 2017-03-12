<template lang="html">
  <div class="projects">
    <h3 class="text-center" v-show="projects.length === 0">No projects here yet</h3>
    <add-project-component></add-project-component>
    <project-component v-for="project in projects" :project="project"></project-component>
  </div>
</template>

<script>
import ProjectComponent from './ProjectComponent'
import AddProjectComponent from './AddProjectComponent'

export default {
  components: {
    ProjectComponent,
    AddProjectComponent
  },
  props: ['projects']
}
</script>

<style lang="css" scoped>
  .projects {
    margin-bottom: 30px;
  }
</style>
