<!--
 * @Author: your name
 * @Date: 2021-05-25 14:19:50
 * @LastEditTime: 2021-05-31 14:33:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /test-model/src/view/WeCenter/inedx.vue
-->

<template>
  <div>
     <el-button @click="ChangeUser">Click</el-button>
    <el-form
      :model="PersonalDetails"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
      :rules="PersonalDetailsRules"
    >
      <el-form-item label="姓名" prop="name">
        <el-input
          type="name"
          v-model="PersonalDetails.name"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="爱好" prop="hobby">
        <el-input
          type="hobby"
          v-model="PersonalDetails.hobby"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input
          type="age"
          v-model="PersonalDetails.age"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "WeCenter",
  data() {
    var TestName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的姓名"));
      } else if (value.length < 2 || value.length > 4) {
        callback(new Error("请输入正确的姓名"));
      }
      callback();
    };
    var TestHobby = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的爱好"));
      }
      callback();
    };
    var TestAge = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的年龄"));
      }
      callback();
    };
    return {
      PersonalDetails: {
        name: "",
        hobby: "",
        age: "",
      },
      PersonalDetailsRules: {
        name: [{ validator: TestName, trigger: "change" }],
        hobby: [{ validator: TestHobby, trigger: "change" }],
        age: [{ validator: TestAge, trigger: "change" }],
      },
    };
  },
  methods: {
    ChangeUser(){
      this.$store.commit('ChangeStats',2)
      console.log(this.$store.state.UserStatus)
      this.$store.dispatch('TestAction',3)
      console.log(this.$store.state.UserStatus)
    }
  },
};
</script>