<template>
  <div id="demo">
    <div class="input_area">
      <label for="username">
        用户名：
      </label>
      <input type="text" v-model="username" id="username"> <br>
      <label for="age">
        年龄：
      </label>
      <input type="number" v-model="age" id="age"> <br>
      <label for="gender">
        性别：
      </label>
      <select id="gender" @change="gender_fn(gender)" v-model="gender">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div class="show_area">
      <table>
        <tr>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in userList">
          <th>{{ item.username }}</th>
          <th>{{ item.age }}</th>
          <th>{{ item.gender ? '男' : '女' }}</th>
          <th><button @click="remove(index)" style="background-color: red; color: white;">X</button></th>
        </tr>
      </table>
    </div>
    <br>
    <button @click="submit_data()">添加项目</button>
  </div>
</template>

<script>
  require('./patient.less');
  export default {
    name: 'demo',
    data () {
      return {
        username: '',
        age: '',
        gender: 1,
        userList: [
          {username: 'Li Lei', age: '12', gender: 0}
        ]
      }
    },
    methods: {
      gender_fn: function () {
        this.gender = arguments[0];
      },
      submit_data: function () {
        this.userList.push({
          username: this.username,
          age: this.age,
          gender: +this.gender
        });
        console.log(this.userList);
        this.username = this.age = null;
        this.gender = 1;
      },
      remove: function (index) {
        this.userList.splice(index, 1);
      }
    }
  }
</script>
