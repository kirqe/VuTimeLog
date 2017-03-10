// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import filters from './filters'
import VueRouter from 'vue-router'

// Views
import Home from './views/Home'
import Tracker from './views/Tracker'
import Projects from './views/Projects'
import About from './views/About'
import Authentication from './views/Authentication'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/tracker', component: Tracker },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', name: 'project', component: Tracker },
  { path: '/about', component: About },
  { path: '/auth', component: Authentication }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: 'app',
  components: { App },
  router,
  filters
})
// .$mount('#app')
