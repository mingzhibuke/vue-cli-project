import * as types from '../mie-types'
import api from '../../api/api'

/**
 *配置 
 */
const state = {
  navActiveStatus: 0

}
const actions = { //异步
  // activeChangeStatus({
  //   commit
  // }, msg) {
  //   commit(types.SKIP_ROUTER_STATUS, msg)
  // }
}
const mutations = { //改变state状态 方式提交(commit) 一个mutation  //同步
  [types.HAEDER_ACTIVE_STATUS](state, msg) {
    state.navActiveStatus = msg;
  }
}
const getters = { //计算属性
  navActiveStatus: state => {
    return state.navActiveStatus;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
