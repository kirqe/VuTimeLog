<template lang="html">
  <span v-show="list.length === 0" >
    <div class="loader text-center"></div>
  </span>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang="css" scoped>
  div.loader {
    border: 6px solid #f3f3f3;
    border-top: 6px solid #71CA71;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s linear infinite;
    display: block;
    margin: 0 auto;
    margin: 50px auto;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
