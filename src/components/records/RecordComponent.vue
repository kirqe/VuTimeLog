<template lang="html">
  <div class="record">
    <span class="label time">{{ record.time | htime }}</span> - {{record.name}}
    <span class="del pull-right" @click="deleteLog(record.id)">x</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions({
    deleteLog: 'deleteLog'
  }),
  props: ['record']
}
</script>

<style lang="css" scoped>
  .time {
    background-color: #71CA71;
  }
  .record {
    border: 3px solid #eee;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  .record:hover .del {
    display: block;
    cursor: pointer;
  }
  .del {
    color: #E0E0E0;
    display: none;
  }
</style>
