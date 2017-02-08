<template lang="html">
  <div>
    <h2>{{ sec | htime }}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    sec: 'getSeconds'
  })
}
</script>

<style lang="css">
</style>
