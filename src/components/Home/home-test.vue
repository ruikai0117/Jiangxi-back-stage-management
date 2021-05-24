<!--
 * @Author: Hou Ruikai
 * @Date: 2021-04-15 10:28:25
 * @LastEditTime: 2021-05-24 15:13:40
 * @LastEditors: Please set LastEditors
 * @Description:测试模型-项目级-通用组件
 * @FilePath: /测试/Jiangxi-back-stage-management/src/components/Home/home.vue
-->
<template>
  <div>
    <p @click="Push">$one,测试是否可以获取子组件中的数据</p>
    <!-- 绑定一个名为‘Push’的方法做事件发射，发射的事件名为‘NumberSize’，并且传递付组件所需要的值。 -->
    <input
      type="text"
      :value="VModelKey"
      @input="$emit('input', $event.target.value)"
    />
    <!--:value即是让该输入框的值恒等于它所绑定的值，所以 :value="VModelKey"，此时VModelKey该值为夫组件传递过来的。
    oninput事件在用户输入时触发，它是在元素值发生变化时立即触发；利用input原生属性的特性在该事件上做名为‘input’的事件发射操作，并且传递的参数为此时当前该输入框的值
    ($event.target.value)，
    父组件中再对该值做处理利用prop传递过来，v-model此时便做了隐式处理 -->
    <div v-if="show">
      <p>默认初始值是{{ show }}，所以是显示的</p>
      <button @click.stop="closeDiv">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-test",
  props: {
    VModelKey: String,
    show:Boolean
  },
  data() {
    return {
      HomeArray: 1,
    };
  },
  methods: {
    Push() {
      this.$emit("NumberSize", Math.round(Math.random() * 10));
    },
    closeDiv(){
        this.$emit('update:show', false); //触发 input 事件，并传入新值
    }
  },
  mounted() {},
};
</script>

<style  scoped>
</style>