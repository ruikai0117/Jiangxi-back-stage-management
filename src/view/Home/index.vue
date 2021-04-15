<!--
 * @Author: Hou Ruikai
 * @Date: 2021-04-15 10:21:11
 * @LastEditTime: 2021-04-15 17:36:35
 * @LastEditors: Please set LastEditors
 * @Description: 测试模型 view为页面
 * @FilePath: /测试/Jiangxi-back-stage-management/src/view/Home/index.vue
-->
<template>
  <div>
    <div class="TestGetChildren">
      <h3>hello，world</h3>
      <home-test @NumberSize="GetChildren" />

      <div class="test-is-show" v-if="IsShow">test-is-show</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      IsShow: true,
    };
  },
  methods: {
    GetChildren(e) {
      this.IsShow = e > 3;
      console.log(e);
    },
  },
  mounted() {
    setTimeout(() => {
      this.IsShow = this.$children[0].HomeArray > 3;
    }, 100);
  },
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
</style>