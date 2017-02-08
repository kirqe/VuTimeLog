<template lang="html">
  <div>
    <transition name="slide-fade">
      <h3 v-show="istracking" class="state">{{status}}</h3>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      status: 'Tracking'
    }
  },
  computed: mapGetters({
    istracking: 'isTracking'
  })
}
</script>

<style lang="css" scoped>
  .state {
    color: #4CAF50;
  }
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transition: translateX(10px);
    opacity: 0;
  }
</style>
