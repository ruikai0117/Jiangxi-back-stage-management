/*
 * @Author: your name
 * @Date: 2021-04-15 09:58:55
 * @LastEditTime: 2021-05-25 14:21:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /测试/Jiangxi-back-stage-management/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'


Vue.component('home-test',()=> import('../components/Home/home-test'))
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
