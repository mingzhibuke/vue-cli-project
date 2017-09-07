import * as types from '../mie-types'
import api from '../../api/api'

/**
 *配置
 */
const state = {
  auth_header_st: '', //保存st信息
  loginfunction: 'login', //判断得登录 注册切换
  loginSuccess: { //保存用户得信息 判断登录状态
    loginStatus: false,
    userMassage: {
      "available_amount": '',
      "isMember": '',
      "photo2": "",
      "payBind": "",
      "photo3": "",
      "bindMobile": "",
      "photo1": "",
      "realAuth": "",
      "nickname": "",
      "realAuthLevel": "",
      "locked_amount": "",
      "email": "",
      "username": ""
    },
    assetsData: { //用户资产数据
      "tkc_locked": '',
      "cooperate_available": '',
      "cny_available": '',
      "tkc_available": '',
      "cny_locked": '',
      "cooperate_locked": ''
    }
  },
  popupStatus: false, //弹框得状态判断
  AUTHHEADERST: '' //保存header

}
const actions = { //异步
  // activeChangeStatus({
  //   commit
  // }, msg) {
  //   commit(types.SKIP_ROUTER_STATUS, msg)
  // }
  revampPopupStatus(state, msg) {
    state.popupStatus = msg
  }
}
const mutations = { //改变state状态 方式提交(commit) 一个mutation  //同步
  [types.LOGIN_TAG_REGISTER](state, msg) {
    state.loginfunction = msg;
  },
  userMsgFunction(state, msg) { //保存用户信息
    state.loginSuccess.userMassage = msg
  },
  revampPopupStatus(state, msg) {
    state.popupStatus = msg
  },
  saveAuth_header_st(state, msg) {
    state.auth_header_st = msg
  },
  revampLoginStatus(state, msg) {
    state.loginSuccess.loginStatus = msg
  },
  AUTHHEADERSTVal(state, msg) { //保存得header信息
    state.AUTHHEADERST = msg
  },
  saveAssetsDatafunction(state, msg) { //保存用户资产信息
    state.loginSuccess.assetsData = msg
  }
}
const getters = { //计算属性
  loginfunction: state => {
    return state.loginfunction;
  },
  loginSuccess: state => {
    return state.loginSuccess;
  },
  popupStatus: state => {
    return state.popupStatus;
  },
  auth_header_st: state => {
    return state.auth_header_st;
  },
  AUTHHEADERSTVal_st: state => {
    return state.AUTHHEADERST;
  },
  userAssetsData: state => {
    return state.loginSuccess.assetsData
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
