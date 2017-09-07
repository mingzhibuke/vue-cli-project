import * as types from '../mie-types'
import api from '../../api/api'

/**
 *配置 判断得是flashtradesPage文件夹 页面的跳转路由判断
 */
const state = {
  BTC: '',
  TKC: '',
  LTC: ''

}
const actions = { //异步
  // activeChangeStatus({
  //   commit
  // }, msg) {
  //   commit(types.SKIP_ROUTER_STATUS, msg)
  // }
}
const mutations = { //改变state状态 方式提交(commit) 一个mutation  //同步
  BTCval(state, msg) {
    state.BTC = msg;
  },
  TKCval(state, msg) {
    state.TKC = msg;
  },
  LTCval(state, msg) {
    state.LTC = msg;
  },
}
const getters = { //计算属性
  BTCvals: state => {
    return state.BTC;
  },
  TKCvals: state => {
    return state.TKC;
  },
  LTCvals: state => {
    return state. LTC;
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
