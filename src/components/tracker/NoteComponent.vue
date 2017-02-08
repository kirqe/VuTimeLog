<template lang="html">
  <div class="form-group">
    <input type="text" @input="setNote" :disabled="isTracking" class="form-control" placeholder="what are you working on?" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters(['isTracking']),
  methods: mapActions(['setNote'])
}
</script>

<style lang="css">
</style>
