// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import filters from './filters'
import VueRouter from 'vue-router'

// Views
import Tracker from './views/Tracker'
import Projects from './views/Projects'
import About from './views/About'

Vue.use(VueRouter)

const routes = [
  { path: '/tracker', component: Tracker },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: Projects },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: 'app',
  components: { App },
  router,
  filters
}).$mount('#app')
