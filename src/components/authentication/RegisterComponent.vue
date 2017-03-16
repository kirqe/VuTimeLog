<template lang="html">
  <div>
    <h2>Register</h2>
    <form @submit.prevent="submit">
      <div class="form-group">
        <input type="text" placeholder="Your name" class="form-control" name="name" v-model="user.name" v-validate="'required'"/>
        <span v-show="errors.has('name')" class="danger">{{errors.first('name')}}</span>
      </div>
      <div class="form-group">
        <input type="email" placeholder="Your email" class="form-control" name="email" v-model="user.email" v-validate="'required|email'"/>
        <span v-show="errors.has('email')" class="danger">{{errors.first('email')}}</span>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" class="form-control" name="password" v-model="user.password" v-validate="'required|confirmed'"/>
        <span v-show="errors.has('password')" class="danger">{{errors.first('password')}}</span>
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password confirmation" class="form-control" name="password_confirmation" v-model="user.password_confirmation" v-validate="'required'"/>
        <span v-show="errors.has('password_confirmation')" class="danger">{{errors.first('password_confirmation')}}</span>
      </div>
      <div class="form-group">
        <button type="submit" name="button" class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmatin: ''
      }
    }
  },
  methods: {
    submit () {
      this.$validator.validateAll().then(() => {
        this.$store.dispatch('register', this.user)
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
