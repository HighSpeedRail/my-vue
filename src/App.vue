<template>
  <div id="app">
    <h1>Welcome to Your Vue.js App</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  document.documentElement.style.fontSize = '100px';
  export default {
    name: 'app'
  }
</script>

<style>
#app {
  font-family: Arial, 'Avenir', Helvetica, sans-serif;
  font-size: .5rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: .6rem;
}
</style>
