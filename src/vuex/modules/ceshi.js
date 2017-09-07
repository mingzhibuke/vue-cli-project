import * as types from '../mie-types'
import api from '../../api/api'

/**
 *配置
 */
const state = {
  name: '测试的哈'

}
const actions = { //异步
  // activeChangeStatus({
  //   commit
  // }, msg) {
  //   commit(types.SKIP_ROUTER_STATUS, msg)
  // }
}
const mutations = { //改变state状态 方式提交(commit) 一个mutation  //同步
  [types.MY_NAME](state, msg) {
    state.name = msg;
  }
}
const getters = { //计算属性
  myName: state => {
    return state.name;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
