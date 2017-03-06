<template lang="html">
  <div class="record">
    <span class="label time">{{ log.time | htime }}</span> - {{log.name}}
    <span class="del pull-right" @click="deleteLog(log.id)"><i class="glyphicon glyphicon-trash"></i></span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: mapActions({
    deleteLog: 'deleteLog'
  }),
  props: ['log']
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
    color: #E68F8D;
    display: none;
  }
</style>
