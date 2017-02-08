<template lang="html">
  <div class="form-group">
    <input type="text" class="form-control" v-model="rate" placeholder="what's your rate per hour?"/>
    <h2 v-show="rate" class="">$ {{earnings}}</h2>
  </div>
</template>

<script>
import _ from 'underscore'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      rate: ''
    }
  },
  computed: {
    ...mapGetters({
      records: 'getRecords'
    }),
    earnings () {
      let sum = _.reduce(this.records, (s, f) => { return f.time + s }, 0)
      let earnings = ((sum / 3600) * this.rate).toFixed(2)
      return earnings
    }
  }
}
</script>

<style lang="css" scoped>
</style>
