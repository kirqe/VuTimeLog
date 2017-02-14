<template lang="html">
  <div class="summary">
    <h4>Project summary: </h4>
    <hr/>
    <h4>Title: {{project.title}}</h4>
    <h4>Created: {{project.created_at}}</h4>
    <h4>Logs count: {{project.logs_count}}</h4>
    <hr/>
    <div class="form-group">
      <em>Earnings for this project according to your rate</em>
      <input type="number" class="form-control" v-model.number="project.rate" placeholder="what's your rate per hour?"/>
      <h4 v-show="project.rate">Earned: $ {{earnings}}</h4>
    </div>
  </div>
</template>

<script>
import _ from 'underscore'

export default {
  computed: {
    earnings () {
      let sum = _.reduce(this.project.logs, (s, f) => { return f.time + s }, 0)
      let earnings = ((sum / 3600) * this.project.rate).toFixed(2)
      return earnings
    }
  },
  props: ['project']
}
</script>

<style lang="css" scoped>
  .summary {
    padding: 10px 20px;
    border: 5px solid #eee;
    border-radius: 10px;
    margin-bottom: 15px;
  }
</style>
