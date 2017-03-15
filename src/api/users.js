import Vue from 'vue'
import axios from 'axios'
import auth from './auth'
Vue.prototype.$axios = axios

const Users = 'http://localhost:3000/api/v1/users/'

export default {
  fetchUserById: (id) => {
    return axios.get(Users + id, auth.getHeader())
  }
}
