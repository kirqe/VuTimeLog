import Vue from 'vue'
// import VueResource from 'vue-resource'
import axios from 'axios'
import projects from './projects'
import logs from './logs'
import auth from './auth'

Vue.prototype.$axios = axios

// http://codeheaven.io/how-to-use-axios-as-your-http-client/

export default {
  ...projects,
  ...logs,
  ...auth
}
