<template>
  <div class="tracker" :class="{active:istracking}">
    <state-title-component></state-title-component>
    <time-component></time-component>
    <note-component></note-component>
    <controls-component></controls-component>
    <hr/>
    <total-earnings-component></total-earnings-component>
  </div>
</template>

<script>
import StateTitleComponent from './StateTitleComponent'
import TimeComponent from './TimeComponent'
import NoteComponent from './NoteComponent'
import ControlsComponent from './ControlsComponent'
import TotalEarningsComponent from './TotalEarningsComponent'

import { mapGetters } from 'vuex'

export default {
  components: {
    StateTitleComponent,
    TimeComponent,
    NoteComponent,
    ControlsComponent,
    TotalEarningsComponent
  },
  computed: mapGetters({
    istracking: 'isTracking'
  })
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
    border-color: #4CAF50;
  }
  .error {
    border-color: #E68F8D;
  }
</style>
