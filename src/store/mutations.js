/*
 * @Author: your name
 * @Date: 2021-04-15 11:28:47
 * @LastEditTime: 2021-05-25 17:39:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /test-model/src/store/mutations.js
 */
export default{
    // 修改state中的状态值
    ChangeTestData(state,test_data){
        state.TestDate = test_data
    },
    ChangeStats(state,value){
        state.UserStatus =value
    }
}