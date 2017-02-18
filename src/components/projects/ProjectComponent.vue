<template lang="html">
  <div class="project">
    <router-link :to="{name: 'project', params: {id: project.id}}">
    {{project.title}}</router-link> -
    <span class="label earned">Earned: $ {{project.earned}}</span>
    <span class="label rate">{{project.rate}}/h</span>
    <span class="label rate">logs: {{project.logs_count}}</span>
  </div>
</template>

<script>
export default {
  props: ['project']
}
</script>

<style lang="css">
  .project {
    padding: 3px;
    border-bottom: 1px solid #eee;
  }
  .project:hover .del {
    display: block;
    cursor: pointer;
  }
  .del {
    color: #E0E0E0;
    display: none;
  }
  .earned {
    background-color: #71CA71;
  }
  .rate {
    background-color: #607D8B;
  }
  .date {
    background-color: #607D8B;
  }
</style>
