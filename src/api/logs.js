import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const Logs = 'http://localhost:3000/api/v1/logs/'

const config = {
  headers: {
    'Authorization': 'Bearer: ' + window.localStorage.getItem('access_token')
  }
}
// http://codeheaven.io/how-to-use-axios-as-your-http-client/

export default {
  createNewLog: (data) => {
    return axios.post(Logs, {log: data}, config)
  },
  deleteLog: (id) => {
    return axios.delete(Logs + id, config)
  }
}
