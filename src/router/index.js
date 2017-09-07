import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import store from '../vuex/store'

console.log(store.getters.popupStatus);

Vue.use(Router)

//首页
const home = r => require.ensure([], () => r(require('@/components/Home')), 'home');
//安全中心
const security = r => require.ensure([], () => r(require('@/components/securitycenter/Securitycenter')), 'security'); //安全设置
const policy = r => require.ensure([], () => r(require('@/components/securitycenter/Securitypolicy')), 'policy'); //安全策略
const record = r => require.ensure([], () => r(require('@/components/securitycenter/Safetyrecord')), 'record'); //安全策略
//用户中心
const basicInfo = r => require.ensure([], () => r(require('@/components/usercenter/BasicInformation')), 'basicInfo'); //基本信息
const verified = r => require.ensure([], () => r(require('@/components/usercenter/Verified')), 'verified'); //实名认证
const winmsg = r => require.ensure([], () => r(require('@/components/usercenter/Winingmessage')), 'winmsg'); //实名认证
const mymessage = r => require.ensure([], () => r(require('@/components/usercenter/Mymessage')), 'mymessage'); //我的消息
//充值提现
const bitcoin = r => require.ensure([], () => r(require('@/components/rechargecash/Bitcoin')), 'bitcoin'); //人名币现贷
const thangkaloan = r => require.ensure([], () => r(require('@/components/rechargecash/Thangkaloan')), 'thangkaloan'); //唐卡现贷
const rmb = r => require.ensure([], () => r(require('@/components/rechargecash/Rmb')), 'rmb'); //人名币
const tangka = r => require.ensure([], () => r(require('@/components/rechargecash/Tangka')), 'tangka'); //唐卡
const regaccount = r => require.ensure([], () => r(require('@/components/rechargecash/Regaccount')), 'regaccount'); //资金账户管理
const shortAccount = r => require.ensure([], () => r(require('@/components/rechargecash/shortAccount')), 'shortAccount'); //空头账号
//交易行情
//-----唐卡交易
const buyandsell = r => require.ensure([], () => r(require('@/components/marketTransaction/Thangkabuyandsell')), 'buyandsell'); //买入/卖出
const beartading = r => require.ensure([], () => r(require('@/components/marketTransaction/Beartading')), 'beartading'); //空头交易
const qchart = r => require.ensure([], () => r(require('@/components/marketTransaction/Quotationchart')), 'qchart'); //行情图表
const emanagement = r => require.ensure([], () => r(require('@/components/marketTransaction/Entrumanagement')), 'emanagement'); //委托管理
const transcord = r => require.ensure([], () => r(require('@/components/marketTransaction/Transactionrecord')), 'transcord'); //交易记录
//-----比特币交易
const btbuyandsell = r => require.ensure([], () => r(require('@/components/bitcointransaction/Btbuyandsell')), 'btbuyandsell'); //买入/卖出
const btqchart = r => require.ensure([], () => r(require('@/components/bitcointransaction/Btqchart')), 'btqchart'); //比特币图表
const btemanagement = r => require.ensure([], () => r(require('@/components/bitcointransaction/Btemanagement')), 'btemanagement'); //委托管理
const bttranscord = r => require.ensure([], () => r(require('@/components/bitcointransaction/Bttranscord')), 'bttranscord'); //交易记录
//-----莱特币交易
const ltbuyandsell = r => require.ensure([], () => r(require('@/components/lttcointransaction/Ltbuyandsell')), 'ltbuyandsell'); //买入/卖出
const ltqchart = r => require.ensure([], () => r(require('@/components/lttcointransaction/Ltqchart')), 'ltqchart'); //比特币图表
const ltemanagement = r => require.ensure([], () => r(require('@/components/lttcointransaction/Ltemanagement')), 'ltemanagement'); //委托管理
const lttranscord = r => require.ensure([], () => r(require('@/components/lttcointransaction/Lttranscord')), 'lttranscord'); //交易记录
//-----闪电交易中心
const flashcenter = r => require.ensure([], () => r(require('@/components/flashtradesPage/FlashMarketCenter')), 'flashcenter'); //闪电交易
const flashTkc = r => require.ensure([], () => r(require('@/components/flashtradesPage/FlashTkc')), 'flashTkc'); //唐卡TKC交易
export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/security',
      name: 'security',
      component: security,
      meta: {
        auth: true //设置登录阀门
      }
    }, {
      path: '/policy',
      name: 'policy',
      component: policy,
      meta: {
        auth: true
      }
    },
    {
      path: '/record',
      name: 'record',
      component: record,
      meta: {
        auth: true
      }
    }, {
      path: '/basicInfo',
      name: 'basicInfo',
      component: basicInfo,
      meta: {
        auth: true
      }
    }, {
      path: '/verified',
      name: 'verified',
      component: verified,
      meta: {
        auth: true
      }
    }, {
      path: '/mymessage',
      name: 'mymessage',
      component: mymessage,
      meta: {
        auth: true
      }
    }, {
      path: '/winmsg',
      name: 'winmsg',
      component: winmsg,
      meta: {
        auth: true
      }
    }, {
      path: '/bitcoin',
      name: 'bitcoin',
      component: bitcoin,
      meta: {
        auth: true
      }
    }, {
      path: '/thangkaloan',
      name: 'thangkaloan',
      component: thangkaloan,
      meta: {
        auth: true
      }
    }, {
      path: '/rmb',
      name: 'rmb',
      component: rmb,
      meta: {
        auth: true
      }
    }, {
      path: '/tangka',
      name: 'tangka',
      component: tangka,
      meta: {
        auth: true
      }
    }, {
      path: '/regaccount',
      name: 'regaccount',
      component: regaccount,
      meta: {
        auth: true
      }
    }, {
      path: '/buyandsell',
      name: 'buyandsell',
      component: buyandsell,
      meta: {
        auth: true
      }
    }, {
      path: '/beartading',
      name: 'beartading',
      component: beartading,
      meta: {
        auth: true
      }
    }, {
      path: '/qchart',
      name: 'qchart',
      component: qchart,
      meta: {
        auth: true
      }
    }, {
      path: '/emanagement',
      name: 'emanagement',
      component: emanagement,
      meta: {
        auth: true
      }
    }, {
      path: '/transcord',
      name: 'transcord',
      component: transcord,
      meta: {
        auth: true
      }
    }, {
      path: '/btbuyandsell',
      name: 'btbuyandsell',
      component: btbuyandsell,
      meta: {
        auth: true
      }
    }, {
      path: '/btqchart',
      name: 'btqchart',
      component: btqchart,
      meta: {
        auth: true
      }
    }, {
      path: '/btemanagement',
      name: 'btemanagement',
      component: btemanagement,
      meta: {
        auth: true
      }
    }, {
      path: '/bttranscord',
      name: 'bttranscord',
      component: bttranscord,
      meta: {
        auth: true
      }
    }, {
      path: '/ltbuyandsell',
      name: 'ltbuyandsell',
      component: ltbuyandsell,
      meta: {
        auth: true
      }
    }, {
      path: '/ltqchart',
      name: 'ltqchart',
      component: ltqchart,
      meta: {
        auth: true
      }
    }, {
      path: '/ltemanagement',
      name: 'ltemanagement',
      component: ltemanagement,
      meta: {
        auth: true
      }
    }, {
      path: '/lttranscord',
      name: 'lttranscord',
      component: lttranscord,
      meta: {
        auth: true
      }
    }, {
      path: '/flashcenter',
      name: 'flashcenter',
      component: flashcenter,
      meta: {
        auth: true
      }
    }, {
      path: '/flashTkc',
      name: 'flashTkc',
      component: flashTkc,
      meta: {
        auth: true
      }
    }, {
      path: '/shortAccount',
      name: 'shortAccount',
      component: shortAccount,
      meta: {
        auth: true
      }
    }
  ]
})
