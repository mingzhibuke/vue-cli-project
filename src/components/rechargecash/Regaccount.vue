<template>
  <div>
    <div class="Modify_popup"  v-if="!modal.show">
      <div class="Modify_content">
        <img class="wk_close" src="../../assets/img/btn_login_x.png" alt=""  @click="amend">
        <p>修改绑定支付宝账号 </p>
        <div class="wk_alipay">支付宝账号:
          <input type="text" v-model="updateAlPayNum">
        </div>
        <div class="wk_btn">
          <button class="wk_btn_ensure" @click="bindAlpay(0,updateAlPayNum)">确定</button>
          <button class="wk_btn_off">取消</button>
        </div>
      </div>
    </div>
    <my-header :headColor="true"></my-header>
    <section class="main">

      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="s_massage_right">
          <div class="wk_content">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <!--人民币充值-->
              <el-tab-pane label="银行卡管理" name="first">
                <div class="wk_material_left">
                  <div class="wk_title">
                    您还没有绑定的银行卡,填写下面信息即可绑定

                  </div>
                  <form class="wk_content_input">
                    <ul>
                      <li>
                        <p style="letter-spacing: 16px">姓名:</p>
                        <input type="text" placeholder="请填写您的真实姓名" name="" v-model="name">
                      </li>
                      <li>
                        <p style="letter-spacing: 6px">证件号:</p>
                        <input type="text" placeholder="请填写您的证件号" v-model="cardNum">
                      </li>
                      <li>
                        <p style="letter-spacing: 1px">银行卡号:</p>
                        <input type="text" placeholder="请填写您的银行卡号">
                      </li>
                      <li>
                        <p style="letter-spacing: 6px">手机号:</p>
                        <input type="text" placeholder="银行预留手机号">
                      </li>
                      <li>
                        <p style="letter-spacing: 6px;position: relative">验证码:</p>
                        <input type="text">
                        <span style="position: absolute;left: 200px;cursor: pointer"  @click="wk_verification()">发送验证码</span>
                      </li>
                    </ul>
                    <button  class="wk_present"  @click="bindInfo()">绑定</button>
                  </form>
                </div>
              </el-tab-pane>
              <!--人民币提现-->
              <el-tab-pane label="支付宝管理" name="second">
                <div class="wk_material_right" v-if="alipayStauts">
                  <p class="wk_bound"> 已绑定支付宝:
                    <span class="wk_number">186******60</span>
                  </p>
                  <p class="amend" @click="amend">修改</p>
                </div>
                <div class="wk_material_right2" v-else>
                  <div class="wk_title">
                    您还没有已绑定的银支付宝,填写下面信息即可绑定

                  </div>
                  <form class="wk_content_input">
                    <ul>
                      <li>
                        <p>支付宝账户:</p>
                        <input type="text" v-model="alpayNum">
                      </li>
                    </ul>
                    <button class="wk_present" @click="bindAlpay(1,alpayNum)">绑定</button>
                  </form>
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
        //修改绑定支付宝弹框
      modal:{
        show:true
      },
      activeName: 'first',
      // popupStatus: false,
      sideBarActiveStatus: {
        stautsName: '资金账户管理',
        // StautsNav: 0
      },
      alipayStauts: true,

      name:'',
      alpayNum:'',
      cardNum:'',
      updateAlPayNum:'',
      userState : 0

    }
  },
  created() {

    api.post('/v1/user-certification/check').then(res=>{

      this.userState = res.data.data.state;

    });

    this.alipayStauts = this.loginSuccess.userMassage.payBind;


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
    wk_verification(){
        api.post('/v1/account/tkc/send-code').then(res=>{
            console.log(res)
        })
    },

    bindAlpay(type,phone){

      if (this.userState == 0){

        alert('请先实名认证');

        return false

      }

      api.post('/v1/user-certification/updateAliPay?phone='+this.phone+'&type='+type).then(res=>{

        console.log(res.data)

      })

    },

    bindInfo(){


    },
    //修改支付宝绑定
    amend(){
      this.modal.show=!this.modal.show
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

.Modify_popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 200;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  .Modify_content {
    width: 660px;
    height: 360px;
    background-color: #ffffff;
    z-index: 1003;
    text-align: center;
    position: relative;
    .wk_close {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 18px;
      cursor: pointer;
    }
    p {
      font-size: 24px;
      font-weight: bold;
      color: #000000;
      margin-top: 50px;
    }
    .wk_alipay {
      margin-top: 70px;
      font-size: 18px;
      color: #1C1D1F;
      width: 500px;
      margin-left: 70px;
      input {
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        padding: 10px;
      }
    }
    .wk_btn {
      margin-top: 60px;
      .wk_btn_ensure {
        width: 140px;
        height: 40px;
        color: #ffffff;
        margin-left: 20px;
        background-color:#DC302E ;
        cursor: pointer;
      }
      .wk_btn_off {
        border: 2px solid #CCCCCC;
        width: 140px;
        height: 40px;
        color: #DC302E;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
}

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
  .wk_content {
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
    .wk_material_left {
      width: 300px;
      height: 800px;
      .wk_title {
        width: 284px;
        font-size: 12px;
        background: #FFE2E2;
        color: #DC302E;
        text-align: center;
        padding: 6px 0 6px 15px;
        margin: 16px auto;
      }

      .wk_content_input {
        width: 300px;
        height: 800px;
        .wk_verification{
          cursor: pointer;
        }
        .wk_present {
          width: 120px;
          height: 36px;
          text-align: center;
          color: #ffffff;
          background: #DC302E;
          margin-left: 86px;
          margin-top: 30px;
        }
        p {
          float: left;
          font-size: 16px;
          width: 88px;
          color: #1C1D1F;
          display: flex;
        }

        ul {
          li {
            line-height: 50px;
            width: 300px;
            height: 50px;
            margin-top: 20px;
            input {
              padding: 16px 0px 10px 10px;
              float: left;
              border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            }
          }
        }
      }
    }
    .wk_material_right {
      width: 900px;
      height: 100px;
      background: #F2F2F2;
      margin-top: 16px;
      overflow: hidden;
      .wk_bound {
        margin-top: 40px;
        margin-left: 50px;
        float: left;
      }
      .amend {
        float: left;
        margin-top: 40px;
        margin-left: 70px;
        color: #2966A3;
        border-bottom: 1px solid #2966A3;
        cursor: pointer;
      }
    }
    .wk_material_right2 {
      width: 300px;
      height: 800px;
      .wk_title {
        width: 284px;
        font-size: 12px;
        background: #FFE2E2;
        color: #DC302E;
        text-align: center;
        padding: 6px 0 6px 15px;
        margin: 16px auto;
      }
      .wk_content_input {
        width: 300px;
        height: 800px;
        .wk_present {
          width: 120px;
          height: 36px;
          text-align: center;
          color: #ffffff;
          background: #DC302E;
          margin-left: 106px;
          margin-top: 30px;
        }
        p {
          float: left;
          font-size: 16px;
          width: 88px;
          color: #1C1D1F;
          display: flex;
        }

        ul {
          li {
            line-height: 50px;
            width: 300px;
            height: 50px;
            margin-top: 20px;
            input {
              padding: 16px 0px 10px 10px;
              float: left;
              margin-left: 20px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.12);
            }
          }
        }
      }
    }
  }
}
</style>

















