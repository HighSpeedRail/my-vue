<template>
  <div class="home">
    <p class="title">医医</p>
    <div class="login_input">
      <div class="weui-cell input_cell input_cell_top">
        <div class="weui-cell_bd">
          <input type="number" class="weui-input" pattern="^1(3|4|5|7|8|9)\d{9}$" placeholder="请输入手机号">
        </div>
      </div>
      <div class="weui-cell input_cell">
        <div class="weui-cell_bd">
          <input type="number" class="weui-input" placeholder="请输入验证码" v-model="code_num">
          <span class="v_code" @click="send_code">{{ code }}</span>
        </div>
      </div>
    </div>
    <div class="agreement">
      <input type="checkbox" name="checkbox1" id="agree">
      <label for="agree">我已阅读并同意《医医使用协议》</label>
    </div>
    <input type="button" class="login_btn" value="登录" @click="check_code">
  </div>
</template>

<script>
  require('./style.less');

  export default {
    name: 'home',
    data () {
      return {
        code: '短信验证码',
        flag: 0,
        random: 0,
        code_num: ''
      }
    },
    methods: {
      send_code: function () {
    		if (this.flag) return;
    		var that = this,
            num = 10,
            random = Math.round(Math.random() * 7 + 1);
        this.random = Math.round(Math.random() * 8999 + 1000);
        console.log(this.random, random);
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
      check_code: function () {
        if (this.random === 0) {
        	alert('请先获取验证码');
        	return;
        }
        if (this.random === +this.code_num) {
        	alert('success');
        } else {
        	alert('error');
        }
        this.random = 0;
        this.code_num = '';
      }
    }
  }
</script>
