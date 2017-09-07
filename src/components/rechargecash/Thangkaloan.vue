<template>
    <div>
        <my-header :headColor="true"></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                  <div id="o_header">
                    <p>唐卡TKC账户 (账户折合:0.00 CNY)</p>
                  </div>
                  <div id="o_nr">
                    <ul>
                      <li>
                        <div id="o_sty_lf">
                          <p>可用唐卡</p>
                          <span>{{tkcdata.tkc_available}}</span>
                          <small>TKC</small>
                        </div></li>
                      <li>
                        <div id="o_sty_rt">
                          <p>不可用唐卡</p>
                          <span>{{tkcdata.tkc_locked}}</span>
                          <small>TKC</small>
                        </div></li>
                    </ul>
                  </div>
                  <div id="o_foot">
                    <ul>
                      <li>交易</li>
                      <li>
                        <router-link :to="{name:'tangka',params:{headColor:true,moduleName:'充值提现',tab:'first'}}">充值</router-link>
                      </li>
                      <li>
                        <router-link :to="{name:'tangka',params:{headColor:true,moduleName:'充值提现',tab:'second'}}">提现</router-link>
                      </li>
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
             tkcdata:'',
            sideBarActiveStatus: {
                stautsName: '唐卡现贷',
                // StautsNav: 0
            }
        }
    },
    created() {
     this.tkc()
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
      tkc(){
        api.get('/v1/user/user-account').then(res =>{
          if(res.data.code == 200){
            this.tkcdata = res.data.data;
            this.tkcdata.tkc_available = Math.floor(this.tkcdata.tkc_available * 100) / 100;
          }
        }).catch(err =>{

        });
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
        #o_header {
            width: 100%;
            margin: 40px 0 20px 0;
        p {
            font-size: 18px;
            font-weight: 600;
            padding-left: 35px;
          }
        }
      #o_nr{
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
          background: #202730 100%;
          p{
            font-weight: 500;
            color: white;
          }
        }
        div{
          margin-top:25px;
          text-align: center;
          overflow: hidden;
        }
        #o_sty_lf{
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
        #o_sty_rt{
          width: 448px;
          height: 70px;
          span{
            font-size: 36px;
            color: #A1A9B5;
          }
          small{
            font-size: 14px;
            color: #A1A9B5;
          }
         }
       }
     }
          #o_foot{
            width: 100%;
            li{
              width: 120px;
              height: 36px;
              display: inline-block;
              text-align: center;
              line-height: 36px;
              margin: 20px 0 0 35px;
              color: white;
              cursor: pointer;
              a{
                color: white;
                display: block;
                text-decoration: none;
              }
            }
            li{
              background: #DC302E;
            }
            li:last-child{
              background: #202730;
            }
          }

}
</style>
