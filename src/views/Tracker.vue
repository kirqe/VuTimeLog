<template>
  <div class="row">
    <div class="col-md-4">
      <tracker-component :project="project" :newLog="newLog"></tracker-component>
    </div>
    <div class="col-md-8">
      <div class="info hidden-sm hidden-xs" v-show="project.logs.length === 0">
        <h3 >No logs here yet. Start logging time.</h3>
        <img src="../assets/arrow.png"/>
      </div>
      <records-component :records="project.logs"></records-component>
    </div>
  </div>
</template>

<script>
import TrackerComponent from '../components/tracker/TrackerComponent'
import RecordsComponent from '../components/records/RecordsComponent'

import { mapGetters } from 'vuex'

export default {
  components: {
    TrackerComponent,
    RecordsComponent
  },
  computed: mapGetters({
    project: 'getActiveProject',
    newLog: 'getNewLog'
  })
}
</script>

<style>
</style>
