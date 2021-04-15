<!--
 * @Author: Hou Ruikai
 * @Date: 2021-04-15 10:28:25
 * @LastEditTime: 2021-04-15 15:01:49
 * @LastEditors: Please set LastEditors
 * @Description:测试模型-项目级-通用组件
 * @FilePath: /测试/Jiangxi-back-stage-management/src/components/Home/home.vue
-->
<template>
    <div>
        <p @click="Push">
 $one,测试是否可以获取子组件中的数据
        </p>
    </div>
</template>

<script>
    export default {    
        name:'home-test',
        data() {
            return {
                HomeArray:1,
            }
        },
        methods: {
            Push(){
                this.$emit("NumberSize",Math.round(Math.random()*10))
            }
        }
    }
</script>

<style  scoped>

</style>