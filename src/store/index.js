import Vue from 'vue'
//Vuex公共部分
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
import state from './state'
import actions from './actions'
import getters from './getters'
const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})
export default store;