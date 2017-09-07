<template>
    <div>
        <my-header  :headColor="true" ></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                    <div class="se_warp">
                        <div class="se_msg">
                            <span class="po_user_msg">
                                您当前安全状态为:
                            </span>
                            <div class="po_warp">
                                <div class="po_msg_left">
                                    <img src="../../assets/img/ic_phone.png">
                                    <div class="po_box">
                                        <span class="po_title">手机</span>
                                        <p class="po_text">已绑定
                                            <strong>{{usercldata.username}}</strong>
                                        </p>
                                    </div>
                                </div>
                                <!--<div class="po_msg_left">-->
                                    <!--<img src="../../assets/img/ic_money.png">-->
                                    <!--<div class="po_box">-->
                                        <!--<span class="po_title">资金密码</span>-->
                                        <!--<p class="po_text">-->
                                            <!--<a class="po_set">未绑定</a>-->
                                        <!--</p>-->
                                    <!--</div>-->
                                <!--</div>-->
                            </div>
                        </div>
                        <div class="po_set_box">
                            <div class="po_title_n">
                                账户安全策略
                            </div>
                            <ul class="po_set_list">
                                <li class="po_items">
                                    <img class="po_fun_img" src="../../assets/img/ic_user_verify.png">
                                    <div class="po_msg_right">
                                        <div class="po_inside_l">
                                            <span class="po_fun_title">登录验证</span>
                                            <span class="po_fun_status">登录时的验证方式</span>
                                        </div>
                                        <div class="po_inside_r">
                                            <span class="po_fun_title">通过
                                                <strong>“登录密码”</strong>
                                            </span>
                                            <span class="po_fun_status po_color_blue">更改</span>
                                        </div>
                                    </div>
                                    <li class="po_items">
                                        <img class="po_fun_img" src="../../assets/img/ic_Set_verify.png">
                                        <div class="po_msg_right" style="border:none;">
                                            <div class="po_inside_l">
                                                <span class="po_fun_title">修改设置验证</span>
                                                <span class="po_fun_status">更改安全中心的各项设置时</span>
                                            </div>
                                            <div class="po_inside_r">
                                                <span class="po_fun_title">通过
                                                    <strong>“短信验证码”</strong>
                                                </span>
                                                <span class="po_fun_status po_color_blue">更改</span>
                                            </div>
                                        </div>
                                    </li>
                            </ul>
                            <div class="po_title_n">
                                资产安全策略
                            </div>
                            <ul class="po_set_list">
                                <li class="po_items">
                                    <img class="po_fun_img" src="../../assets/img/ic_money_verify.png">
                                    <div class="po_msg_right">
                                        <div class="po_inside_l">
                                            <span class="po_fun_title">提现验证</span>
                                            <span class="po_fun_status">进行各种提现操作时</span>
                                        </div>
                                        <div class="po_inside_r">
                                            <!-- <span class="po_fun_title">通过
                                                            <strong>“登录密码”</strong>
                                                        </span> -->
                                            <span class="po_fun_status">未启用</span>
                                        </div>
                                    </div>
                                    <li class="po_items">
                                        <img class="po_fun_img" src="../../assets/img/ic_deal_verify.png">
                                        <div class="po_msg_right" style="border:none;">
                                            <div class="po_inside_l">
                                                <span class="po_fun_title">交易验证</span>
                                                <span class="po_fun_status">进行人民币现货交易，美元现货交易时</span>
                                            </div>
                                            <div class="po_inside_r">
                                                <span class="po_fun_title">
                                                    <strong>“不验证资金密码”</strong>
                                                </span>
                                                <span class="po_fun_status po_color_blue">修改</span>
                                            </div>
                                        </div>
                                    </li>
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
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
    data() {
        return {
            // popupStatus: false,
            usercldata:'',
            sideBarActiveStatus: {
                stautsName: '安全策略',
                // StautsNav: 0
            },
        }
    },
    created() {
      this.cluserlist();
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
        cluserlist(){
            api.get('/v1/user/info').then(res =>{
                if(res.data.code = 200){
                    this.usercldata = res.data.data.data;
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
            .se_warp {
                padding: 50px;
                background: #FFF;
                .se_msg {
                    padding: 40px 42px;
                    background: #F2F2F2;
                    overflow: hidden;
                    .po_user_msg {
                        font-size: 16px;
                        color: #202730;
                    }
                    .po_warp {
                        overflow: hidden;
                        .po_msg_left {
                            float: left;
                            width: 50%;
                            position: relative;
                            img {
                                position: absolute;
                                top: 20px;
                                left: 0;
                            }
                            .po_box {
                                padding: 20px 0 0 40px;
                                .po_title {
                                    font-size: 16px;
                                    color: #202730;
                                }
                            }
                        } // .po_msg_right {
                        //     float: left;
                        //     width: 50%;
                        //     padding-left:22px;
                        // }
                    }
                }
                .po_title_n {
                    padding: 40px 0 12px 0;
                    color: #202730;
                    font-size: 16px;
                }
                .po_set_list {
                    border-top: 1px solid #F2F2F2;
                    border-bottom: 1px solid #F2F2F2;
                    box-sizing: border-box;
                    .po_items {
                        position: relative;
                        height: 80px;
                        line-height: 80px;
                        padding-left: 80px;
                        .po_fun_img {
                            position: absolute;
                            left: 0;
                            top: 26px;
                        }
                        .po_msg_right {
                            overflow: hidden;
                            box-sizing: border-box;
                            border-bottom: 1px solid #F2F2F2;
                            .po_inside_l {
                                float: left;
                                width: 50%;
                                .po_fun_title {
                                    display: inline-block;
                                    width: 150px;
                                }
                                .po_fun_status {
                                    color: #A1A9B5;
                                    cursor: pointer;
                                }
                            }
                            .po_inside_r {
                                float: left;
                                width: 50%;
                                overflow: hidden;
                                .po_fun_title {
                                    float: left;
                                    strong {
                                        color: #DC302E;
                                    }
                                }
                                .po_fun_status {
                                    float: right;
                                    color: #A1A9B5;
                                    cursor: pointer;
                                    text-decoration: underline;
                                }
                                .po_color_blue {
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
</style>
