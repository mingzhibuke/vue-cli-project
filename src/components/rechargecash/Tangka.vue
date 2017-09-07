<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="s_massage_right">
          <div class="o_ct">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="唐卡充值" name="first">
                <div class="o_center">
                  <ul>
                    <li>充值到:</li>
                    <li>
                      <img src="../../assets/img/logo_gzl_5.png">
                      <span>光轴链唐卡账户</span>
                      <p>余额:
                        <small>0</small>
                        TKC
                      </p>
                      <img src="../../assets/img/btn_select_right.png" class="o_posi">
                    </li>
                  </ul>
                </div>
                <div class="o_quantity">
                  <ul>
                    <li>充值数量:</li>
                    <li><input v-model="Tknumber" type="text" placeholder="请输入充值数量">
                      <b>TKC</b></li>
                  </ul>
                  <p>您当前还可以充值1000 TKC</p>
                </div>
                <div class="o_way">
                  <ul>
                    <li>支付方式:</li>
                    <li>
                      <img src="../../assets/img/logo_tkc_red.png">
                      <span>TKC钱包</span>
                      <p>可用:
                        <small>0</small>
                      </p>
                    </li>
                  </ul>
                </div>
                <div class="o_btn">
                  <button type="button" @click="showtime">立即充值</button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="唐卡提现" name="second">
                <div class="o_center1">
                  <ul>
                    <li>提现账户:</li>
                    <li>
                      <img src="../../assets/img/logo_gzl_5.png">
                      <span>光轴链唐卡账户</span>
                      <p>余额:
                        <small>0</small>
                        TKC
                      </p>
                      <img src="../../assets/img/btn_select_right.png" class="o_posi1">
                    </li>
                  </ul>
                </div>
                <div class="o_quantity1">
                  <ul>
                    <li>提现数量:</li>
                    <li><input type="text" placeholder="请输入充值数量">
                      <b>TKC</b></li>
                  </ul>
                  <p>您当前还可以充值1000 TKC</p>
                </div>
                <div class="o_way1">
                  <ul>
                    <li>支付方式:</li>
                    <li>
                      <img src="../../assets/img/logo_tkc_red.png">
                      <span>TKC钱包</span>
                      <p>可用:<small>0</small>TKC</p>
                    </li>
                  </ul>
                </div>
                <div class="o_btn1">
                  <button type="button">立即提现</button>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <div class="Paybox">
        <div class="paywrap">
          <p><img src="../../assets/img/btn_login_x.png" @click="clo"></p>
          <p><span><img src="../../assets/img/erweima.png"></span></p>
          <p>请确认充值金额: <span>1000</span> 个TKC</p>
          <p>使用TKC钱包扫描此二维码完成充值</p>
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
  import api from '../../api/api'
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {
        activeName: 'first',
        // popupStatus: false,
        sideBarActiveStatus: {
          stautsName: '唐卡',
          // StautsNav: 0
        },
        Tknumber:''
      }
    },
    created() {
      this.$route.params.tab ? this.activeName = this.$route.params.tab : this.activeName = 'first';
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

      },
      ...mapMutations({
        loginTagfunction: types.LOGIN_TAG_REGISTER,//登录 注册状态切换
        revampPopupStatus: 'revampPopupStatus' //切换弹框显示状态值
      }),
      close() {  //关闭弹窗 登录 注册
        this.revampPopupStatus(false);
        document.documentElement.style.overflow = 'auto';
      },
      showtime(){
        $('.Paybox').show();

      },
      clo(){
        $('.Paybox').hide();

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
      //tabs标签页
      .o_ct {
        margin: 40px 0 0 35px;
        .el-tabs__item {
          font-size: 16px;
          color: #A1A9B5;
        }
        .el-tabs__header {
          margin: 0 0 30px;
        }
        .el-tabs__item.is-active {
          color: red;
        }
        .el-tabs__active-bar {
          background: red;
          z-index: 1;
        }
        //唐卡充值
        .o_center {
          height: 80px;
          margin-bottom: 40px;
          ul {
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
            }
            li:first-child {
              height: 80px;
              line-height: 80px;
              padding: 0 15px;
            }
            li:last-child {
              width: 278px;
              height: 80px;
              margin-left: 14px;
              background: #F9F9F9;
              position: relative;
              img:first-child {
                padding: 15px 30px;
                width: 40px;
                height: 23px;
              }
              span {
                font-size: 15px;
                font-weight: 600;
                position: absolute;
                top: 15px;
                left: 95px;
              }
              p {
                width: inherit;
                text-align: center;
                position: absolute;
                top: 40px;
                small {
                  color: red;
                }
              }
              .o_posi {
                position: absolute;
                right: 20px;
                top: 30px;
              }
            }
          }
        }
        .o_quantity {
          height: 80px;
          margin-bottom: 60px;
          ul {
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
            }
            li:first-child {
              height: 80px;
              line-height: 80px;
              padding: 0 15px;
            }
            li:last-child {
              position: relative;
              input {
                width: 277px;
                height: 38px;
                border: 1px solid #DDDDDD;
                margin-top: 20px;
              }
              b {
                position: absolute;
                right: 10px;
                bottom: 10px;
              }
            }
          }
          p {
            padding-left: 92px;
            font-size: 12px;
            color: #DC302E;
          }
        }
        .o_way {
          height: 80px;
          margin-bottom: 40px;
          ul {
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
            }
            li:first-child {
              height: 80px;
              line-height: 80px;
              padding: 0 15px;
            }
            li:last-child {
              width: 278px;
              height: 80px;
              background: #F9F9F9;
              position: relative;
              img:first-child {
                padding: 15px 30px;
                width: 35px;
                height: 30px;
              }
              span {
                font-size: 15px;
                font-weight: 600;
                position: absolute;
                top: 15px;
                left: 95px;
              }
              p {
                width: inherit;
                text-align: center;
                position: absolute;
                top: 40px;
                small {
                  color: red;
                }
              }
            }
          }
        }
        .o_btn {
          button {
            width: 120px;
            height: 36px;
            margin-left: 92px;
            color: white;
            background: #DC302E;
            cursor: pointer
          }
        }
        .o_center1 {
          height: 80px;
          margin-bottom: 40px;
          ul {
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
            }
            li:first-child {
              height: 80px;
              line-height: 80px;
              padding: 0 15px;
            }
            li:last-child {
              width: 278px;
              height: 80px;
              background: #F9F9F9;
              position: relative;
              img:first-child {
                padding: 15px 30px;
                width: 40px;
                height: 23px;
              }
              span {
                font-size: 15px;
                font-weight: 600;
                position: absolute;
                top: 15px;
                left: 95px;
              }
              p {
                width: inherit;
                text-align: center;
                position: absolute;
                top: 40px;
                small {
                  color: red;
                }
              }
              .o_posi1 {
                position: absolute;
                right: 20px;
                top: 30px;
              }
            }
          }
        }
        .o_quantity1 {
          height: 80px;
          margin-bottom: 60px;
          ul {
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
            }
            li:first-child {
              height: 80px;
              line-height: 80px;
              padding: 0 15px;
            }
            li:last-child {
              position: relative;
              input {
                width: 277px;
                height: 38px;
                border: 1px solid #DDDDDD;
                margin-top: 20px;
              }
              b {
                position: absolute;
                right: 10px;
                bottom: 10px;
              }
            }
          }
          p {
            padding-left: 92px;
            font-size: 12px;
            color: #DC302E;
          }
        }
        .o_way1 {
          height: 80px;
          margin-bottom: 40px;
          ul {
            font-size: 0;
            li {
              display: inline-block;
              font-size: 14px;
            }
            li:first-child {
              height: 80px;
              line-height: 80px;
              padding: 0 15px;
            }
            li:last-child {
              width: 278px;
              height: 80px;
              background: #F9F9F9;
              position: relative;
              img:first-child {
                padding: 15px 30px;
                width: 35px;
                height: 30px;
              }
              span {
                font-size: 15px;
                font-weight: 600;
                position: absolute;
                top: 15px;
                left: 95px;
              }
              p {
                width: inherit;
                text-align: center;
                position: absolute;
                top: 40px;
                small {
                  color: red;
                }
              }
            }
          }
        }
        .o_btn1 {
          button {
            width: 120px;
            height: 36px;
            margin-left: 92px;
            color: white;
            background: #DC302E;
            cursor: pointer
          }
        }
      }
    }
  }

  .Paybox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: 999;
    .paywrap {
      width: 400px;
      height: 378px;
      background: #ffffff;
      margin: 0 auto;
      position: relative;
      top: 30%;
      z-index: 999;
      p {
        font-size: 16px;
        color: #2E2E2E;
        font-weight: bold;
      }
      p:nth-child(1) {
        padding: 20px 0;
        margin-bottom: 20px;
        img {
          float: right;
          padding-right: 15px;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      }
      p:nth-child(2) {
        text-align: center;
        img {
          width: 186px;
          height: 186px;
        }
      }
      p:nth-child(3) {
        margin: 20px 0;
        text-align: center;
        span {
          color: #DC302E;
        }
      }
      p:nth-child(4) {
        margin: 20px 0;
        text-align: center;
      }
    }
  }
</style>
