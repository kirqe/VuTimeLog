<template lang="html">
  <div class="projects">
    <project-component v-for="project in projects" :project="project"></project-component>
  </div>
</template>

<script>
import ProjectComponent from './ProjectComponent'
export default {
  components: {
    ProjectComponent
  },
  props: ['projects']
}
</script>

<style lang="css" scoped>
  .projects {
    margin-bottom: 30px;
  }
</style>
