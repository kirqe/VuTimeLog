<template>
  <div class="row">
    <div class="col-md-4">
      <tracker-component></tracker-component>
    </div>
    <div class="col-md-8">
      <records-component :records="records"></records-component>
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
    records: 'getRecords'
  })
}
</script>

<style>
</style>
