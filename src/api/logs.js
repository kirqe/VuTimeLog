import Vue from 'vue'
import axios from 'axios'
import auth from './auth'
Vue.prototype.$axios = axios

const Logs = 'http://localhost:3000/api/v1/logs/'

export default {
  createNewLog: (data) => {
    return axios.post(Logs, {log: data}, auth.getHeader())
  },
  deleteLog: (id) => {
    return axios.delete(Logs + id, auth.getHeader())
  }
}
