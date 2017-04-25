<template>
  <div class="home">
    <p class="title">微 笑</p>
    <p class="warning">{{ warning }}</p>
    <div class="login_input">
      <div class="weui-cell input_cell input_cell_top">
        <div class="weui-cell_bd">
          <input type="number" class="weui-input" placeholder="请输入手机号" v-model="cellphone">
        </div>
      </div>
      <div class="weui-cell input_cell">
        <div class="weui-cell_bd">
          <input type="password" class="weui-input" placeholder="请输入密码" v-model="password">
        </div>
      </div>
    </div>
    <div class="agree">
      <input type="checkbox" name="checkbox1" id="agree" v-model="agree">
      <label for="agree">我已阅读并同意
        <router-link to="/agreement">《微笑使用协议》</router-link>
      </label>
    </div>
    <input type="button" class="login_btn" value="登录" @click="login">
    <router-link to="/reg" class="reg">注册新账号 ></router-link>
  </div>
</template>

<script>
  require('./style.less');

  export default {
    name: 'home',
    data () {
      return {
        cellphone: $route.params.cellphone,
        password: '',
        code: '获取验证码',
        flag: 0,
        warning: '',
        agree: ''
      }
    },
    methods: {
      login: function () {
        if (this.cellphone === '') {
          this.warning = '手机号不能为空';
          return;
        }
        if (!/^1(3|4|5|7|8|9)\d{9}$/.test(this.cellphone)) {
          this.warning = '手机号不合法';
          return;
        }
        if (this.password === '') {
          this.warning = '密码不能为空';
        }
        if (!/^[0-9a-zA-Z]{6,12}$/.test(this.password)) {
        	this.warning = '密码只能是6-12位数字字母';
        	return;
        }
        if (!this.agree) {
          this.warning = '请先阅读微笑协议';
          return;
        }
        var that = this;
        this.$http.post('/index', {cellphone: this.cellphone, password: this.password}).then(res => {
          console.log(res + 'aaaaa');
          if (res.bodyText === 'Pass') {
            that.warning = '手机号密码验证通过';
          } else {
            that.warning = '手机号密码验证失败'
          }
        });
        setTimeout(function () {
          that.warning = '正在建设，再等等吧';
        }, 2000);
      }
    }
  }
</script>
