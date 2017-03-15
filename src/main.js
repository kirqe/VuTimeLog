// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import filters from './filters'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: 'app',
  components: { App },
  router,
  filters
})
// .$mount('#app')
