<template lang="html">
  <div v-show="isAdding" class="add-project ">
    <form class="form-inline well">
      <div class="row">
        <div class="form-group col-md-6">
          <input type="text" v-model="project.title" class="form-control" id="projectName" placeholder="Project name">
        </div>
        <div class="form-group col-md-4">
          <input type="number" v-model="project.rate" class="form-control" id="projectRate" placeholder="$/hour">
        </div>
        <div class="form-group col-md-2">
          <button @click.prevent="saveProject(project)" type="submit" class="btn btn-success form-control">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      isAdding: true,
      project: {
        title: '',
        rate: ''
      }
    }
  },
  methods: mapActions(['saveProject'])
}
</script>

<style lang="css" scoped>
  .form-control {
    width: 100%
  }
</style>
