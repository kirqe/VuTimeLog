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
      <button type="button" name="button" class="btn btn-primary" @click="login(cred)">Login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      cred: {
        email: 'test3@test.com',
        password: 'test'
      }
    }
  },
  methods: mapActions(['login'])
}
</script>

<style lang="css">
</style>
