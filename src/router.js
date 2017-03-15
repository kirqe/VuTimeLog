// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
  { path: '/auth', component: Authentication },
  { path: '*', component: Projects }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})

router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('access_token')
  if (to.path === '/' || to.path === '/auth') {
    next()
  } else if (token) {
    next()
  } else {
    router.push('/')
  }
})

export default router
