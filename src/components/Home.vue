<template>
  <div class="home">
    <h2>导航栏</h2>
    <ul>
      <li><router-link to="/patient">患者管理</router-link></li>
      <li><router-link to="/doctor">医生列表</router-link></li>
    </ul>
    <router-view class="home_link"></router-view>
  </div>
</template>

<script>
  require('./home.less');
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
  h2 {font-weight: normal;}
  ul {text-align: center; list-style: none; margin: 0; padding: 0; height: 100%;}
  li {display: inline-block; width: 32%;}
  .home_link {margin-top: .5rem;}
</style>-->
