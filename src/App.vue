<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="header">
          <h2 id="title"><span class="emphasize">Vu</span>TimeLog</h2>&nbsp;/&nbsp;
          <span id="nav-links">
            <router-link v-show="getActiveProject !== null" to="/tracker">Tracker</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/about">About</router-link>
          </span>
          <hr/>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters(['getActiveProject']),
  store
}
</script>

<style lang="css" scoped>
  .header {
    font-size: 16px;
  }
  #title, #nav-links {
    display: inline-block;
  }
  #title {
    margin-right: 10px;
  }
  #nav-links a {
    padding-right: 2px;
  }
  .emphasize {
    color: #71CA71;
  }
</style>
