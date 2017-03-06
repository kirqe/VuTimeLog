<template>
  <div class="row" v-if="project">
    <div v-show="err" class="col-md-12">
      <div class="alert alert-danger">Failed to proceed request</div>
    </div>
    <div class="col-md-4">
      <tracker-component :project="project" :newLog="newLog"></tracker-component>
    </div>
    <div class="col-md-8">
      <div class="info hidden-sm hidden-xs" v-show="project.logs.length === 0">
        <h3 >No logs here yet. Start logging time.</h3>
        <img src="../assets/arrow.png"/>
      </div>
      <logs-component :logs="project.logs"></logs-component>
    </div>
  </div>
</template>

<script>
import TrackerComponent from '../components/tracker/TrackerComponent'
import LogsComponent from '../components/logs/LogsComponent'
import LoaderComponent from '../components/LoaderComponent'

import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    TrackerComponent,
    LogsComponent,
    LoaderComponent
  },
  computed: mapGetters({
    project: 'getActiveProject',
    newLog: 'getNewLog',
    err: 'getErrorStat'
  }),
  methods: mapActions(['fetchProject']),
  beforeMount () {
    this.fetchProject(this.$route.params.id)
  }
}
</script>

<style>
</style>
