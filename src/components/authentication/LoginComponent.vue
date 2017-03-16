<template lang="html">
  <div>
    <h2>Login</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <input type="text" placeholder="Your email" class="form-control" name="email" v-model="cred.email" v-validate="'required|email'"/>
        <span v-show="errors.has('email')" class="danger">{{ errors.first('email') }}</span>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Your password" class="form-control" name="password" v-model="cred.password" v-validate="'required'"/>
        <span v-show="errors.has('password')" class="danger">{{ errors.first('password') }}</span>
      </div>
      <div class="form-group">
        <button type="submit" name="button" class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cred: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll().then(() => {
        this.$store.dispatch('login', this.cred)
      }, () => {
        return
      })
    }
  }
}
</script>

<style lang="css">
  .danger {
    color: #d9534f;
  }
</style>
