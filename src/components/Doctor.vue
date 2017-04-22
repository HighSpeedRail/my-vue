<template>
    <div id="doctor">
      <p>房价计算器</p>
      <div>
        <label for="unitPrice">房屋单价:</label>
        <input type="text" id="unitPrice" v-model="unitPrice">
        元／平米
      </div>
      <div>
        <label for="mm">房屋面积:</label>
        <input type="text" id="mm" v-model="mm">
        平方米
      </div>
      <div>
        <label for="num">按揭成数:</label>
        <select id="num" v-model="num">
          <option value="1">1成</option>
          <option value="3">3成</option>
          <option value="6">6成</option>
        </select>
      </div>
      <div>
        <label></label>
        <button @click="calculate()">计算</button><button @click="reset()">重置</button>
      </div>
      <div>
        <label for="price">房屋总价:</label>
        <input type="text" id="price" v-model="res.price">
        万元
      </div>
      <div>
        <label for="first">首付金额:</label>
        <input type="text" id="first" v-model="res.first">
        万元
      </div>
      <div>
        <label for="loan">贷款金额:</label>
        <input type="text" id="loan" v-model="res.loan">
        万元
      </div>
    </div>
</template>

<script>
	export default {
		name: 'doctor',
		props: [],
		data () {
			return {
        unitPrice: '',
        mm: '',
        num: 1,
        res: {
        	price: '',
          first: '',
          loan: ''
        }
      }
		},
		methods: {
			calculate: function () {
        this.res.price = +this.unitPrice * +this.mm;
        this.res.first = this.res.price * 0.1 * this.num;
        this.res.loan = this.res.price - this.res.first;
      },
      reset: function () {
				this.unitPrice = this.mm = this.res.price = this.res.first = this.res.loan = '';
				this.num = 1;
      }
    },
		components: {}
	}
</script>

<style>
  #doctor {
    text-align: left;
    margin: .5rem auto;
    line-height: .5rem;
    width: 8rem;
    border: 1px solid red;
    border-radius: .1rem;
  }
  #doctor p {
    margin: 0;
    padding: .2rem;
    background-color: red;
    color: white;
    height: .5rem;
    border-radius: .1rem .1rem 0 0;
    font-weight: bold;
  }
  #doctor div {
    font-size: .4rem;
    width: 7.5rem;
    margin: .2rem auto;
  }
  #doctor label {
    font-size: inherit;
    margin-right: .2rem;
  }
  #doctor input {
    border: .01rem solid #333;
  }
  #doctor select {
    font-size: .5rem;
    height: .6rem;
    width: 2rem;

  }
  #doctor option {
    font-size: .2rem;
  }
  #doctor button {
    margin-right: .5rem;
    margin-top: .2rem;
  }
</style>
