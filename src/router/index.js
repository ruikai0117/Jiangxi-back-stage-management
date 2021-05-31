/*
 * @Author: your name
 * @Date: 2021-04-15 09:58:55
 * @LastEditTime: 2021-05-31 15:27:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /测试/Jiangxi-back-stage-management/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

/**
 * 把公共组件注册成全局组件，就可以节省引入组件的工作量。
 * require.context 可以给这个函数传入三个参数：一个要搜索的目录，一个标记表示是否还搜索其子目录， 以及一个匹配文件的正则表达式。
 */
 let AllElement = require.context('@/components', true, /\.vue$/)
 AllElement.keys().map(key => {
   const component = AllElement(key).default
   Vue.component(component.name, component)
 })
// Vue.component('home-test',()=> import('../components/Home/home-test'))
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../view/Home/index')
    },
    {
      path:'/WeCenter',
      name:'WeCenter',
      component:() => import('../view/WeCenter/inedx')
    }
  ]
})
