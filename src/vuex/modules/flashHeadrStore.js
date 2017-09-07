import * as types from '../mie-types'
import api from '../../api/api'

/**
 *配置 判断得是flashtradesPage文件夹 页面的跳转路由判断
 */
const state = {
  flashnav: 0

}
const actions = { //异步
  // activeChangeStatus({
  //   commit
  // }, msg) {
  //   commit(types.SKIP_ROUTER_STATUS, msg)
  // }
}
const mutations = { //改变state状态 方式提交(commit) 一个mutation  //同步
  [types.HAEDER_FLASH_STATUS](state, msg) {
    state.flashnav = msg;
  }
}
const getters = { //计算属性
  flashnavs: state => {
    return state.flashnav;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
