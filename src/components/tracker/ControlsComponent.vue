<template lang="html">
  <div class="form-group">
    <button :disabled='isStarted' @click='start' class="btn btn-success">Start</button>
    <button :disabled='!isStarted' @click='stop' class="btn btn-danger">Stop</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters(['isStarted', 'isStopped']),
  methods: mapActions(['start', 'stop'])
}
</script>

<style lang="css">
</style>
