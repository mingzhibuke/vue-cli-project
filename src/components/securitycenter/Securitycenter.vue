<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="s_massage_right">
          <div class="se_warp">
            <div class="se_msg">
              <img class="se_grade_img" src="../../assets/img/ic_security_high.png" v-if="num>=2">
              <img class="se_grade_img" src="../../assets/img/ic_security_low.png" v-else>
              <div class="se_grade_msg">
                <!-- <el-progress type="circle" :percentage="25" :show-text="false" :width="135"></el-progress> -->
                <span class="se_msg_text">{{useraqlist.username}},您的账户安全级别低，建议提升安全设置</span>
                <!--<div class="se_set_btn">-->
                <!--您可以：-->
                <!--<span style="cursor: pointer;">设置资金密码</span>-->
                <!--</div>-->
              </div>
            </div>
            <div class="se_set_box">
              <div class="se_title">
                您已设置
                <span>{{num}}</span>个保护项,还有
                <span>{{2 - num}}</span>个保护项可设置


              </div>
              <ul class="se_set_list">
                <li class="se_items">
                  <img class="se_fun_img" src="../../assets/img/ic_email.png">
                  <div class="se_msg_right">
                    <div class="se_inside_l">
                      <span class="se_fun_title">绑定邮箱</span>
                      <span class="se_fun_status">{{useraqlist.email ? useraqlist.email : '未绑定' }}</span>
                    </div>
                    <div class="se_inside_r">
                      <span class="se_fun_title">{{useraqlist.email ? useraqlist.email : '未绑定邮箱邮箱'}}</span>
                      <span class="se_fun_status">{{useraqlist.email ? useraqlist.email : '绑定'}}</span>
                    </div>
                  </div>
                </li>
                <li class="se_items">
                  <img class="se_fun_img" src="../../assets/img/ic_phone.png">
                  <div class="se_msg_right">
                    <div class="se_inside_l">
                      <span class="se_fun_title">绑定手机</span>
                      <span class="se_fun_status se_color_red">{{useraqlist.username ? '已绑定' : '未绑定'}}</span>
                    </div>
                    <div class="se_inside_r">
                      <span class="se_fun_title">您已绑定手机{{useraqlist.username ? useraqlist.username : ''}}</span>
                      <span class="se_fun_status se_color_blue" v-show="!useraqlist.username">修改</span>
                    </div>
                  </div>
                </li>
                <li class="se_items">
                  <img class="se_fun_img" src="../../assets/img/ic_lock.png">
                  <div class="se_msg_right">
                    <div class="se_inside_l">
                      <span class="se_fun_title">密码登录</span>
                      <span class="se_fun_status">已设置</span>
                    </div>
                    <div class="se_inside_r">
                      <span class="se_fun_title">登录时使用</span>
                      <span class="se_fun_status">重置</span>
                    </div>
                  </div>
                </li>
                <!--<li class="se_items">-->
                <!--<img class="se_fun_img" src="../../assets/img/ic_money.png">-->
                <!--<div class="se_msg_right">-->
                <!--<div class="se_inside_l">-->
                <!--<span class="se_fun_title">资金密码</span>-->
                <!--<span class="se_fun_status">未设置</span>-->
                <!--</div>-->
                <!--<div class="se_inside_r">-->
                <!--<span class="se_fun_title" style="color: #A1A9B5;">账户资金变动时，需要验证该资金和密码</span>-->
                <!--<span class="se_fun_status" style="color: #2966A3;" @click="closer">设置</span>-->
                <!--</div>-->
                <!--</div>-->
                <!--</li>-->
              </ul>
            </div>
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
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {
        // popupStatus: false,
        useraqlist: '',
        sideBarActiveStatus: {
          stautsName: '安全设置',
          StautsNav: 0
        },
        num: 0,
      }
    },
    created() {
      this.userlist();
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
      //资金密码模块暂未开放
      closer(){
        this.$message({
          message: '此功能暂未开放',
          type: 'warning'
        });
      },
      //
      userlist(){
        api.get('/v1/user/info').then(res => {
          if (res.data.code = 200) {
            this.useraqlist = res.data.data.data;
            if (this.useraqlist.email) {
              this.num += 1;
            };
            if (this.useraqlist.username) {
              this.num += 1;
            }
          }
        }).catch(err => {

        });
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
        .se_warp {
          padding: 50px;
          background: #FFF;
          .se_msg {
            padding: 16px 29px;
            background: #F2F2F2;
            overflow: hidden;
            .se_grade_img {
              float: left;
              margin-top: 38px;
            }
            .se_grade_msg {
              float: left;
              width: 500px;
              height: 200px;
              text-align: center;
              line-height: 210px;
              font-size: 18px;
              margin-left: 20px;
              .se_grade_text {
                color: #202730;
                float: right;
              }
              .se_set_btn {
                padding-top: 37px;
                font-size: 16px;
                span {
                  color: #36629B;
                  margin-left: 10px;
                }
              }
            }
          }
          .se_set_box {
            padding-top: 40px;
            .se_title {
              font-size: 16px;
              padding: 10px 0;
              span {
                color: #DC302E;
              }
            }
            .se_set_list {
              border-top: 1px solid #F2F2F2;
              box-sizing: border-box;
              .se_items {
                position: relative;
                height: 80px;
                line-height: 80px;
                padding-left: 80px;
                .se_fun_img {
                  position: absolute;
                  left: 0;
                  top: 26px;
                }
                .se_msg_right {
                  overflow: hidden;
                  box-sizing: border-box;
                  border-bottom: 1px solid #F2F2F2;
                  .se_inside_l {
                    float: left;
                    width: 48%;
                    overflow: hidden;
                    .se_fun_title {
                      float: left;
                    }
                    .se_fun_status {
                      float: right;
                      color: #A1A9B5;
                      cursor: pointer;
                    }
                    .se_color_red {
                      color: #DC302E;
                    }
                  }
                  .se_inside_r {
                    float: right;
                    width: 48%;
                    overflow: hidden;
                    .se_fun_title {
                      float: left;
                    }
                    .se_fun_status {
                      float: right;
                      color: #A1A9B5;
                      cursor: pointer;
                      text-decoration: underline;
                    }
                    .se_color_blue {
                      color: #2966A3;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
