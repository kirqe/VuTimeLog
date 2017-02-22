<template lang="html">
  <div class="row">
    <div class="col-md-12">
      <projects-component :projects="projects"></projects-component>
    </div>
  </div>
</template>

<script>
import ProjectsComponent from '../components/projects/ProjectsComponent'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ProjectsComponent
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
