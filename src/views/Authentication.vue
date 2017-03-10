<template lang="html">
  <div class="row auth">
    <div class="col-md-4">
      <login-component></login-component>
    </div>
    <div class="col-md-4 or">
      <h2 class="text-center">OR</h2>
    </div>
    <div class="col-md-4">
      <register-component></register-component>
    </div>
  </div>
</template>

<script>
import LoginComponent from 'components/authentication/LoginComponent'
import RegisterComponent from 'components/authentication/RegisterComponent'

export default {
  components: {
    LoginComponent,
    RegisterComponent
  }
}
</script>

<style lang="css">
  @media (min-width: 1200px) {
    .or h2{
      padding-top: 110px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .or h2{
      padding-top: 110px;
    }
  }

  .auth {
    padding: 0px 20px 10px 20px;
    border: 5px solid #eee;
    border-radius: 10px;
    margin-bottom: 15px;
  }
</style>
