<template lang="html">
  <div>
    <record-component v-for="record in records" :record="record"></record-component>
  </div>
</template>

<script>
import RecordComponent from './RecordComponent'

export default {
  components: {
    RecordComponent
  },
  props: ['records']
}
</script>

<style lang="css" scoped>
</style>
