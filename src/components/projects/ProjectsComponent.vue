<template lang="html">
  <div class="projects">
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
