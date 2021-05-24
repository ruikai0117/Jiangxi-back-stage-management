<!--
 * @Author: Hou Ruikai
 * @Date: 2021-04-15 10:21:11
 * @LastEditTime: 2021-05-24 15:51:31
 * @LastEditors: Please set LastEditors
 * @Description: 测试模型 view为页面
 * @FilePath: /测试/Jiangxi-back-stage-management/src/view/Home/index.vue
-->
<template>
  <div>
    <div class="TestGetChildren">
      <h3>hello，world</h3>
      <home-test
        :show.sync="IsShow"
        @click.native="Native"
        @NumberSize="GetChildren"
        v-model="VModelKey"
      />
      <!-- 
        * @click.native="Native" native修饰符是用来在自定义组件上绑定原生事件的
        * @NumberSize="GetChildren" NumberSize是子组件发射的自定义事件，用于子传父，组件传值
        * v-model="VModelKey" 在自定义组件中使用v-model实现双向绑定. 
        需要子组件中对input标签value熟悉做处理 并绑定input事件来进行事件发射以来达到父子组件的双向绑定
        详情见home-test组件中

        * :show.sync="IsShow""其实是语法糖。是其一种简写形式。 
        在这里它省略了一个方法。this.IsShow = false。并且省略了一个在自定义组件上事件绑定的过程
       -->

      <div class="test-is-show" v-if="IsShow">test-is-show</div>
      <div>v-model:{{ VModelKey }}</div>
      <button @click="changeValue">toggle</button>
      <!-- 用于测试.sync的作用 -->

      <button v-on:click="TransitonShow = !TransitonShow">transition显示隐藏</button>
      <transition name="fade">
        <p v-if="TransitonShow">hello</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      IsShow: true,
      VModelKey: "组件v-model",
      TransitonShow: true,
    };
  },
  methods: {
    changeValue() {
      this.IsShow = !this.IsShow;
    },
    GetChildren(e) {
      this.IsShow = e > 3;
      console.log(e);
    },
    Native() {
      console.log("native是用来给自定义组件绑定原生事件时使用的修饰符");
    },
  },
  mounted() {},
};
</script>

<style  scoped>
.TestGetChildren {
  width: 200px;
  height: 200px;
  border: 1px solid pink;
}
.test-is-show {
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aquamarine;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>