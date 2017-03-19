<template>
  <div class="tracker-wrap">
    <div class="tracker" :class="{active:istracking}">
      <state-title-component></state-title-component>
      <time-component :newLog="newLog"></time-component>
      <note-component :newLog="newLog"></note-component>
      <controls-component></controls-component>
    </div>
    <summary-component :project="project"></summary-component>
    <div class="dropdown">
      <button class="btn btn-block btn-default dropdown-toggle dp" type="button" data-toggle="dropdown">Options
      <span class="caret"></span></button>
      <ul class="dropdown-menu btn-block">
        <li><a :href="project.export_pdf" download='repoert'>Export as PDF</a></li>
        <li><a @click.prevent="deleteProject(project.id)">Delete this project (no confirmation)</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
import StateTitleComponent from './StateTitleComponent'
import TimeComponent from './TimeComponent'
import NoteComponent from './NoteComponent'
import ControlsComponent from './ControlsComponent'
import SummaryComponent from './SummaryComponent'
import { mapGetters } from 'vuex'

export default {
  components: {
    StateTitleComponent,
    TimeComponent,
    NoteComponent,
    ControlsComponent,
    SummaryComponent
  },
  computed: mapGetters({
    istracking: 'isTracking'
  }),
  methods: {
    deleteProject (id) {
      this.$store.dispatch('deleteProject', id)
      this.$router.push('/projects')
    }
  },
  props: ['project', 'newLog']
}
</script>

<style lang="css" scoped>
  .tracker {
    padding: 0px 20px 10px 20px;
    border: 5px solid #eee;
    border-radius: 10px;
    margin-bottom: 15px;
  }
  .active {
    border-color: #71CA71;
  }
  .error {
    border-color: #E68F8D;
  }
  .dp {
    margin-bottom: 15px;
  }
</style>
