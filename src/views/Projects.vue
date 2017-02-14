<template lang="html">
  <div class="row">
    <div class="col-md-12">
      <loader-component :list="projects"></loader-component>
      <projects-component :projects="projects"></projects-component>
    </div>
  </div>
</template>

<script>
import ProjectsComponent from '../components/projects/ProjectsComponent'
import LoaderComponent from '../components/LoaderComponent'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ProjectsComponent,
    LoaderComponent
  },
  computed: mapGetters({
    projects: 'getProjects'
  }),
  methods: mapActions(['fetchProjects']),
  mounted () {
    this.fetchProjects()
  }
}
</script>

<style lang="css">
</style>
