<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="header">
          <h2 id="title"><span class="emphasize">Vu</span>TimeLog</h2>
          <span v-if="getUser.authenticated" id="nav-links">
            /&nbsp;
            <router-link v-show="getActiveProject !== null" to="/tracker">Tracker</router-link>
            <router-link to="/projects">Projects</router-link>
            <a @click="logout()">Logout</a>
            <router-link to="/about" id="abt">About</router-link>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  methods: mapActions(['logout', 'jwtAuth']),
  computed: mapGetters(['getActiveProject', 'getUser']),
  mounted () {
    this.jwtAuth()
  },
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
  #abt {
    color: #eee;
  }
</style>
