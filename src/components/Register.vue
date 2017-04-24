<template>
  <div class="register">
    <p class="title">微笑</p>
    <p class="warning" :class="styleObj">{{ warning }}</p>
    <div class="login_input">
      <div class="weui-cell input_cell input_cell_top">
        <div class="weui-cell_bd">
          <input type="number" class="weui-input" placeholder="请输入手机号" v-model="cellphone">
        </div>
      </div>
      <div class="weui-cell input_cell">
        <div class="weui-cell_bd">
          <input type="number" class="weui-input" placeholder="请输入验证码" v-model="code_num">
          <span class="v_code" @click="send_code">{{ code }}</span>
        </div>
      </div>
    </div>
    <div class="agree">
      <input type="checkbox" name="checkbox1" id="agree" v-model="agree">
      <label for="agree">我已阅读并同意 <router-link to="/agreement">《微笑使用协议》</router-link></label>
    </div>
    <input type="button" class="login_btn" value="完成注册" @click="login">
    <p class="patient_app">如果您目前不在中国，请使用<router-link to="/patient_app">国际版</router-link></p>
  </div>
</template>

<script>
  require('./style.less');

  export default {
    name: 'home',
    data () {
      return {
        cellphone: '',
        code: '获取验证码',
        flag: 0,
        random: 0,
        code_num: '',
        warning: '',
        styleObj: {
          login_success: false
        },
        agree: ''
      }
    },
    methods: {
      send_code: function () {
        if (this.flag) return;
        var that = this,
          num = 10,
          random = Math.round(Math.random() * 7 + 1);
        this.random = Math.round(Math.random() * 8999 + 1000);
        setTimeout(function () {
          alert(that.random);
        }, random * 1000);
        this.code = num-- + '秒';
        this.flag = setInterval(function () {
          that.code = num-- + '秒';
          if (num < 0) {
            clearInterval(that.flag);
            that.code = '短信验证码';
            that.flag = 0;
          }
        }, 1000);
      },
      login: function () {
        this.styleObj.login_success = false;
        /*if (this.cellphone === '') {
          this.warning = '手机号不能为空';
          return;
        }
        if (!/^1(3|4|5|7|8|9)\d{9}$/.test(this.cellphone)) {
          this.warning = '手机号不合法';
          return;
        }
        if (this.random === 0) {
          this.warning = '请先获取验证码';
          return;
        }
        if (!this.agree) {
          this.warning = '请先阅读微笑协议';
          return;
        }
        if (this.random !== +this.code_num) {
          this.warning = '验证码错误';
          return;
        }*/
        this.$http.post('/reg', {cellphone: this.cellphone}, function (res) {
          if (res.bodyText === 'Reg success') {
            this.styleObj.login_success = true;
            this.warning = '注册成功';
          }
        });
        this.random = 0;
        this.code_num = '';
        this.cellphone = '';
        this.agree = false
        if (this.flag) {
          clearInterval(this.flag);
          this.code = '获取验证码';
        }
        var that = this;
        setTimeout(function () {
          that.styleObj.login_success = false;
          that.warning = '正在建设，再等等吧';
        }, 1000);
      }
    }
  }
</script>
