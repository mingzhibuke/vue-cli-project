import Vue from 'vue'
import Vuex from 'vuex'

//引入模块状态
import ceshi from './modules/ceshi' //测试

import logintag from './modules/logintagstore' //引入的登录注册模块状态
import headerStauts from './modules/headerStatusStore' //头部状态管理 登录前  登录后  点击 
import flashnav from './modules/flashHeadrStore'
import dataCNY from './modules/dataCNY'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    //模块引入状态
    ceshi,
    logintag,
    headerStauts,
    flashnav,
    dataCNY
  }
})
