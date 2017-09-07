import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './vuex/store'
import 'element-ui/lib/theme-default/index.css'
import animate from 'animate.css'
// import VueWebsocket from "vue-websocket"
// Vue.use(VueWebsocket);

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(animate)

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(m => m.meta.auth)) {
//     // 对路由进行验证
//     if (store.getters.loginSuccess.loginStatus) { // 已经登陆
//       next()
//     } else {
//       // 未登录,弹框跳出
//       window.popup = 'false';
//       next('/'
//       //   {
//       //   path: '/',
//       //   params: {
//       //     referrer: to.fullPath,
//       //   }
//       // }
//     )
//     }
//   } else {
//     next()
//   }
// })
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
