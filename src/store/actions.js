/*
 * @Author: your name
 * @Date: 2021-04-15 11:28:47
 * @LastEditTime: 2021-05-25 18:00:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /test-model/src/store/actions.js
 */
export default {
    // 异步操作
    AsyncHronous: ({ commit }, formal_parameter) => {
        commit('ChangeTestData', formal_parameter)
    },
    TestAction:({commit},value) => {
        commit('ChangeStats', value)
    }
}