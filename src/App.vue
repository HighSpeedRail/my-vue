<template>
  <div id="app">
    <div class="content">
      <div class="loading_view">
        <h1>微 笑</h1>
        <p>让沟通更简单</p>
        <p class="loading_icon"><i class="weui-loading"></i></p>
      </div>
      <router-view class="router_view"></router-view>
    </div>
  </div>
</template>

<script>
  document.documentElement.style.fontSize = '100px';

  require('../node_modules/weui/dist/style/weui.min.css');
  require('./App.less');

  export default {
    name: 'app',
    mounted: function () {
    	var that = this;
    	setTimeout(function () {
        that.$nextTick(function () {
          that.$el.getElementsByClassName('content')[0].style.marginLeft = '-100%';
        })
      },2000);
    }
  }
</script>
