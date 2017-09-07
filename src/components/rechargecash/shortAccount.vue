<template>
    <div>
        <my-header :headColor="true"></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                  <div class="o_header1">
                    <p>空头账户<span style="color: #DC302E;float: right;font-size: 14px;margin-right: 36px;">交易结束钱，账户处于被锁定状态</span></p>
                  </div>
                  <div class="o_nr1">
                    <ul>
                      <li>
                        <div class="o_sty_lf1">
                          <p>可用人民币</p>
                          <span>111</span>
                          <small>CNY</small>
                        </div></li>
                      <li>
                        <div class="o_sty_rt1">
                          <p>不可提现</p>
                          <span>1111</span>
                          <small>CNY</small>
                        </div></li>
                    </ul>
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
import api from '../../api/api'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
    data() {
        return {
            // popupStatus: false,
            tkcdata: '',
            sideBarActiveStatus: {
                stautsName: '空头交易',
                // StautsNav: 0
            }
        }
    },
    created() {

    },
    computed: {
        ...mapGetters({
            loginfunction: 'loginfunction',
            loginSuccess: 'loginSuccess', //登录成功  用户信息
            popupStatus: 'popupStatus'  //弹框 注册 登录 的状态判断
        }),
    },
    methods: {
        ...mapMutations({
            loginTagfunction: types.LOGIN_TAG_REGISTER,//登录 注册状态切换
            revampPopupStatus: 'revampPopupStatus' //切换弹框显示状态值
        }),
        close() {  //关闭弹窗 登录 注册
            this.revampPopupStatus(false);
            document.documentElement.style.overflow = 'auto';
        },
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
      .o_header1 {
        width: 100%;
        margin: 40px 0 20px 0;
        p {
          font-size: 18px;
          font-weight: 600;
          padding-left: 35px;
        }
      }
      .o_nr1{
        width: 100%;
        ul{
          width: 100%;
          font-size: 0;
        }
        li:first-child{
          margin-left: 33px;
        }
        li{
          font-size: 16px;
          display: inline-block;
          width: 452px;
          height: 120px;
          background: #F2F2F2 100%;
          p{font-weight: 600;}
        }
        div{
          margin-top:25px;
          text-align: center;
          overflow: hidden;
        }
        .o_sty_lf1{
          width: 450px;
          height: 70px;
          border-right:2px solid #A1A9B5;
          span{
            font-size: 36px;
            color: #DC302E;
          }
          small{
            font-size: 14px;
            color: #DC302E;
          }
        }
        .o_sty_rt1{
          width: 448px;
          height: 70px;
          span{
            font-size: 36px;
            color: #202730;
          }
          small{
            font-size: 14px;
            color: #0E0000;
          }
        }
      }
    }
}
</style>
