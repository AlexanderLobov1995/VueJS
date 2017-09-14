<template>
    <div>
        <h1>{{msg}}</h1>
        <h2 v-if="show">It' should be displayed</h2>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        show: true
      }
    }
  }
</script>
<style>
    h1 {
        color: green;
    }
    h2 {
        color: blue;
    }
</style>