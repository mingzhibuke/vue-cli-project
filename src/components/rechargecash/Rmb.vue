<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="s_massage_right">
          <div class="l_content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <!--人民币充值-->
              <el-tab-pane label="人民币充值" name="first">
                <div class="l_content_left">
                  <div class="l_account">
                    充值账户:
                    <span class="l_account_left">充值到余额账户</span>
                    <span class="l_account_right">余额:{{cny_available}}元</span>
                  </div>
                  <div class="l_number">
                    充值账号:
                    <span class="l_number_right">187****4476</span>
                  </div>
                  <div class="l_money">
                    充值金额:
                    <el-input v-model="recharge" placeholder="请输入充值金额"></el-input>
                    <p class="l_money_left">元</p>
                    <p class="l_money_right">
                      *充值金额最低为100元或为100元的整数倍支付宝手机费为0.6%
                    </p>
                  </div>
                  <div class="l_method">
                    <p class="l_method_title">充值方式:</p>
                    <div class="l_method_content">
                      <div class="l_pay_1">
                        <img src="../../assets/img/ic_alipay.png" alt="">
                        <p class="l_pay">支付宝</p>
                        <p class="l_select">
                          <img src="../../assets/img/btn_select_right.png" alt="">
                        </p>
                      </div>
                      <!--<div class="l_pay_2">-->
                      <!--<img src="../../assets/img/ic_card.png" alt="">-->
                      <!--<p class="l_pay">银行卡</p>-->
                      <!--<p class="l_select">-->
                      <!--<img src="../../assets/img/btn_select_right.png" alt="">-->
                      <!--</p>-->
                      <!--</div>-->
                      <!--<div class="l_pay_3">-->
                      <!--工商银行-->
                      <!--<span>62346547********653</span>-->
                      <!--<img src="../../assets/img/ic_draw_1.png" alt="" style="margin-left: 20px">-->
                      <!--</div>-->
                      <!--<div class="l_pay_4">-->
                      <!--建行银行-->
                      <!--<span>62346547********653</span>-->
                      <!--</div>-->
                      <button class='l_paybtn' @click="payment">
                        确认付款
                      </button>
                    </div>
                  </div>
                </div>
  
              </el-tab-pane>
              <!--人民币提现-->
              <el-tab-pane label="人民币提现" name="second">
                <div class="l_content_right">
                  <div class="l_account">
                    提现账户:
                    <span class="l_account_left">余额账户</span>
                    <span class="l_account_right">可提现:{{cny_available}}元</span>
                  </div>
                  <div class="l_money" style="margin-top: 60px">
                    充值金额:
                    <el-input v-model="deposit" placeholder="请输入提现金额"></el-input>
                    <p class="l_money_left">元</p>
                    <p class="l_money_right">
                      提示：提现金额必须为10的整数倍，最低为10元
                    </p>
                  </div>
  
                  <div class="l_method" style="margin-top: 40px">
                    <p class="l_method_title">提现到:</p>
                    <div class="l_method_content">
                      <div class="l_pay_1">
                        <img src="../../assets/img/ic_alipay.png" alt="">
                        <p class="l_pay">支付宝</p>
                        <p class="l_select">
                          <img src="../../assets/img/btn_select_right.png" alt="">
                        </p>
                      </div>
                      <div class="l_explain">
                        <p class="l_explain_title">
                          *说明:
                        </p>
                        <p class="l_explain_content">
                          因未开通支付宝信用卡支付，请超过 500元支付时使用支付宝储蓄卡功能支付
                        </p>
                      </div>
                      <button class='l_paybtn' @click="Withdraw">
                        确认提现
                      </button>
  
                    </div>
                  </div>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <my-footer></my-footer>
    </section>
    <my-popup v-show="popupStatus" @actice-close-popup="close()"></my-popup>
  </div>
</template>
<script>
import myHeader from '../../publicComponents/Header' //头部组件
import myPopup from '../../publicComponents/popupson/LoginPopup' //登录弹框组件
import sideBar from '../../publicComponents/securitycenterPublic/Sidebar'  //侧栏菜单组件
import myFooter from '../../publicComponents/Footer'  //底部组件
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
import api from '../../api/api'

export default ({
  data() {
    return {
      //充值金额
      recharge: '',
      //提现金额
      deposit: '',
      cny_available: '',
      activeName: 'first',
      // popupStatus: false,
      input: '',
      sideBarActiveStatus: {
        stautsName: '人民币',
        // StautsNav: 0
      }
    }
  },
  created() {
    this.$route.params.tab ? this.activeName = this.$route.params.tab : this.activeName = 'first';
    //    用户余额
    api.get('/v1/user/user-account').then(res => {
      this.cny_available = res.data.data.cny_available
    })
  },
  computed: {
    ...mapGetters({
      loginfunction: 'loginfunction',
      loginSuccess: 'loginSuccess', //登录成功  用户信息
      popupStatus: 'popupStatus'  //弹框 注册 登录 的状态判断
    }),
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    ...mapMutations({
      loginTagfunction: types.LOGIN_TAG_REGISTER,//登录 注册状态切换
      revampPopupStatus: 'revampPopupStatus' //切换弹框显示状态值
    }),
    close() {  //关闭弹窗 登录 注册
      this.revampPopupStatus(false);
      document.documentElement.style.overflow = 'auto';
    },
    //支付宝充值确认付款
    payment() {
      let reg = /^[1-9]\d*$|^0$/;
      if (reg.test(this.recharge) && (this.recharge) % 100 === 0) {
        api.post('/v1/account/cny/recharge-alipay', {
          money: this.recharge,
          type: '1'
        }).then(res => {
          let redirect = res.data.data.data.redirect;
          if (redirect.length > 0) {
            api.post(`/v1/account/cny/redirect-alipay-pay?redirect=${redirect}`).then(res => {
              console.log(res.data.data);
              let val = res.data.data;
              // var a = $("<a href=`../../../static/pay.html?val=${val}` target='_blank' ></a>").get(0);
              // var e = document.createEvent('MouseEvents');
              // e.initEvent('click', true, true);
              // a.dispatchEvent(e);
              window.location.href = `../../../static/pay.html?val=${val}`;
              // var a = document.createElement("a");
              // a.setAttribute('href', `../../../static/pay.html?val=${val}`);
              // a.setAttribute("target", '_black');
              // document.body.appendChild(a);
              // a.click();
              // document.body.removeChild(a);
              // var OpenWindow = window.open("Content-type:text/html;charset=utf-8");
              // //写成一行 
              // OpenWindow.document.write("<TITLE></TITLE>")
              // OpenWindow.document.write(val)
              // OpenWindow.document.write("</BODY>")
              // OpenWindow.document.write("</HTML>")
              // OpenWindow.document.close()
              // OpenWindow();
              // var url = `../../../static/pay.html?val=${val}`;
              // var f = document.createElement('form');
              // f.setAttribute("action", `../../../static/pay.html?val=${val}`);
              // f.setAttribute("method", "post");
              // f.setAttribute("target", '_black');
              // document.body.appendChild(f);
              // f.submit();
            })

          }
        }).catch(res => {

        })
      } else {
        this.$message({
          message: '充值金额最低为100元或为100元的整数倍',
          type: 'warning'
        });
      }
    },
    //支付宝提现确认
    Withdraw() {

      let reg = /^[1-9]\d*$|^0$/;
      if (reg.test(this.deposit) && (this.deposit) % 10 === 0) {
        api.post('/v1/account/cny/withdraw-submit', {
          withdrawAmount: this.deposit,
        }).then(res => {
          console.log(res.data.data)
        }).catch(res => {

        })
      } else {
        this.$message({
          message: '提现最低为10元或为10元的整数倍',
          type: 'warning'
        });
      }
    }
  },
  components: {
    myHeader,
    myPopup,
    sideBar,
    myFooter
  }
})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.main {
  min-width: 1170px;
  background: #F0F0F0;
  padding-top: 110px;
  margin: 0 auto;
  .main_warp {
    width: 1170px;
    margin: 0 auto;
    overflow: hidden;
    padding-bottom: 80px;
    .s_massage_left {
      float: left;
      width: 170px;
    }
    .s_massage_right {
      float: right;
      width: 970px;
      background: #FFF;
      height: 760px;
    }
  }
}

.l_content {
  width: 889px;
  margin-left: 50px;
  margin-top: 30px;

  .el-tabs__item.is-active {
    font-size: 16px;
    color: #DC302E;
    letter-spacing: 0;
    line-height: 16px;
    font-weight: bold;
  }
  .el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    background-color: #DC302E;
  }
  .l_content_left,
  .l_content_right {
    margin-top: 8px;
    font-size: 14px;
    color: #999999;
    .l_account {
      margin-top: 20px;
      position: relative;
      width: 210px;
      height: 50px;
      .l_account_left,
      {
        margin-left: 16px;
        color: #2e2e2e;
        font-weight: bold;
        letter-spacing: 1.4px;
      }
      .l_account_right {
        position: absolute;
        bottom: 0px;
        display: inline-block;
        font-size: 12px;
        color: #DC302E;
        right: 40px;
        width: 130px;
        left: 84px;
      }
    }
    .l_number {
      margin-top: 40px;
      .l_number_right {
        margin-left: 16px;
        color: #2e2e2e;
        font-weight: bold;
        font-size: 12px;
      }
    }
    .l_money {
      margin-top: 46px;
      width: 800px;
      height: 80px;
      position: relative;
      .el-input {
        position: absolute;
        font-size: 2px;
        top: -10px;
        left: 86px;
      }

      .el-input,
      .el-input__inner {
        width: 332px;
        display: inline-block;
        border-radius: 0px;
        height: 38px;
      }
      .l_money_left {
        position: absolute;
        color: #2E2E2E;
        left: 384px;
        font-weight: bold;
        top: 0;
      }
      .l_money_right {
        position: absolute;
        top: 40px;
        left: 86px;
        font-size: 10px;
      }
    }
    .l_method {
      margin-top: 26px;
      width: 400px;
      height: 400px;
      .l_method_title {
        width: 72px;
        height: 20px;
        float: left;
      }
      .l_method_content {
        width: 277px;
        height: 276px;
        float: left;
        margin-left: 14px;
        .l_pay_1,
        .l_pay_2 {
          height: 23px;
          width: 277px;
          img {
            float: left;
          }
          p {
            float: left;
            margin-left: 8px;
            font-size: 14px;
            color: #1C1D1F;
            line-height: 20px;
          }
          .l_select {
            width: 18px;
            height: 18px;
            border-radius: 50px;
            margin-left: 40px;
          }
        }
        .l_pay_2 {
          margin-top: 40px;
        }
        .l_pay_3,
        .l_pay_4 {
          padding-left: 20px;
          width: 310px;
          height: 38px;
          line-height: 38px;
          margin-top: 24px;
        }
        .l_pay_3 {
          background-color: #202730;
          color: #ffffff;
        }
        .l_pay_4 {
          background: #F2F2F2;
          color: #A1A9B5;
        }
        .l_paybtn {
          background-color: #DC302E;
          color: #ffffff;
          width: 140px;
          text-align: center;
          height: 38px;
          margin-top: 24px;
          cursor: pointer;
        }
      }
    }
  }
  .l_content_right {
    .l_explain {
      width: 380px;
      height: 60px;
      margin-top: 28px;
      background: #F9F9F9;
      padding: 20px 0 0 24px;
      .l_explain_title {
        width: 50px;
        height: 50px;
        float: left;
      }
      .l_explain_content {
        width: 288px;
        height: 40px;
        float: left;
        margin-left: 10px;
      }
    }
  }
}
</style>
