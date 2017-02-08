<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="header">
          <h2 id="title">TimeLog</h2>&nbsp;/&nbsp;
          <span id="nav-links">
            <router-link to="/tracker">Tracker</router-link>
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

export default {
  store
}
</script>

<style scoped>
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
</style>
