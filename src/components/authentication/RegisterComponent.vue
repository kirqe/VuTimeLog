<template lang="html">
  <div>
    <h2>Register</h2>
    <div class="form-group">
      <input type="text" placeholder="Your name" class="form-control" v-model="cred.name"/>
    </div>
    <div class="form-group">
      <input type="text" placeholder="Your email" class="form-control" v-model="cred.email"/>
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password" class="form-control" v-model="cred.password"/>
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password confirmation" class="form-control" v-model="cred.password_confirmatin"/>
    </div>
    <div class="form-group">
      <button type="button" name="button" class="btn btn-primary">Register</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cred: {
        email: '',
        password: '',
        password_confirmatin: ''
      }
    }
  }
}
</script>

<style lang="css">
</style>
