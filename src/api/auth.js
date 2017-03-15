import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// const Projects = 'http://localhost:3000/api/v1/projects/'
// const Logs = 'http://localhost:3000/api/v1/logs/'
const Auth = 'http://localhost:3000/api/v1/auth/'
const Users = 'http://localhost:3000/api/v1/users/'

// http://codeheaven.io/how-to-use-axios-as-your-http-client/

export default {
  login: (cred) => {
    return axios.post(Auth, cred)
  },
  register: (cred) => {
    return axios.post(Users, cred)
  },
  getHeader: () => {
    return {
      headers: {
        'Authorization': 'Bearer: ' + window.localStorage.getItem('access_token')
      }
    }
  }
}
