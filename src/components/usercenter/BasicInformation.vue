<template>
    <div>
        <my-header :headColor="true"></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                    <ul class="bi_content">
                        <li class="bi_item">
                            <img src="../../assets/img/ic_user.png">
                            <div class="bi_text">
                                帐号名:
                                <strong>{{userdata.nickname}}</strong>
                            </div>
                        </li>
                        <li class="bi_item">
                            <img style="top:13px;" src="../../assets/img/ic_email.png">
                            <div class="bi_text">
                                邮&emsp;箱:
                                <strong class="bi_color_gray">
                              {{userdata.email = 'null' ? '未绑定' : userdata.email}}</strong>
                            </div>
                            <div class="bi_btn">绑定</div>
                        </li>
                        <li class="bi_item">
                            <img src="../../assets/img/ic_phone.png">
                            <div class="bi_text">
                                手&emsp;机:
                                <strong>{{userdata.username}}</strong>
                            </div>
                            <div class="bi_btn bi_btn_blue">修改</div>
                        </li>
                        <li class="bi_item">
                            <img src="../../assets/img/ic_lock.png">
                            <div class="bi_text">
                                登录密码
                            </div>
                            <div class="bi_btn bi_btn_blue">重置</div>
                        </li>
                    </ul>
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
          userdata:'',
          sideBarActiveStatus: {
          stautsName: '基本信息',
                // StautsNav: 1
            },
        }
    },
    created() {
      this.userinfo();
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
      //用户基本信息
      userinfo(){
        api.get('/v1/user/info').then(res =>{
            if(res.data.code = 200){
              this.userdata = res.data.data.data;
            }
        }).catch(err =>{

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
            .bi_content {
                padding: 70px 90px;
                .bi_item {
                    padding-left: 48px;
                    width: 270px;
                    position: relative;
                    overflow: hidden;
                    height: 48px;
                    line-height: 48px;
                    margin-bottom: 30px;
                    img {
                        position: absolute;
                        top: 10px;
                        left: 0;
                    }
                    .bi_text {
                        float: left;
                        font-size: 16px;
                        color: #202730;
                        strong {
                            margin-left: 10px;
                        }
                        .bi_color_gray {
                            color: #A1A9B5;
                        }
                    }
                    .bi_btn {
                        float: right;
                        text-decoration: underline;
                        cursor: pointer;
                        color: #DC302E;
                        font-size: 16px;
                    }
                    .bi_btn_blue {
                        color: #2966A3;
                    }
                }
            }
        }
    }
}
</style>
