<template lang="html">
  <div>
    <log-component v-for="log in logs" :log="log"></log-component>
  </div>
</template>

<script>
import LogComponent from './LogComponent'

export default {
  components: {
    LogComponent
  },
  props: ['logs']
}
</script>

<style lang="css" scoped>
</style>
