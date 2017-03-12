<template lang="html">
  <div>
    <h2>Login</h2>
    <div class="form-group">
      <input type="text" placeholder="Your email" class="form-control" v-model="cred.email"/>
    </div>
    <div class="form-group">
      <input type="password" placeholder="Your password" class="form-control" v-model="cred.password"/>
    </div>
    <div class="form-group">
      <button type="button" name="button" class="btn btn-primary" @click="submit()">Login</button>
    </div>
  </div>
</template>

<script>
import api from '../../api'

export default {
  data () {
    return {
      cred: {
        email: 'test1@test.com',
        password: 'test'
      }
    }
  },
  methods: {
    submit () {
      api.login(this.cred).then((res) => {
        window.localStorage.setItem('access_token', res.data.access_token)
        this.$router.push('/projects')
        this.$store.dispatch('login')
      })
    }
  }
}
</script>

<style lang="css">
</style>
