<template>
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated bounceOutLeft">
        <div class="popup_warp">
            <div class="block_module">
            </div>
            <div class="p_warp " :class="{'p_warp_r':registerClass}">
                <div class="p_head">
                    <span class="head_title">{{loginMsgInterface.loginText}}</span>
                    <img @click="closePopup()" class="close_btn" src="../../assets/img/btn_login_x.png">
                </div>
                <div class="p_logo_box">
                    <img class="p_logo" src="../../assets/img/logo_gzl_1.png">
                </div>
                <div class="p_msg">
                    没有账号?
                    <span class="register_btn" @click="LogonImmediately()">{{loginMsgInterface.registerText}}</span>
                </div>
                <my-login v-show="loginfunction === 'login'" @tab-forget-password-assembly="forgetTo()"></my-login>
                <my-register v-show="loginfunction === 'register'"></my-register>
                <my-forget v-show="loginfunction === 'forget'"></my-forget>
            </div>
        </div>
    </transition>
</template>
<script>
import myLogin from './Login'  //登录组件
import myRegister from './Register'  //注册组件
import myForget from './Forget'   //忘记密码组件
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
    data() {
        return {
            loginMsgInterface: {   //界面选择状态 登录 注册 忘记密码 文字改变
                loginText: '登录',
                registerText: '立即注册',
            },
            registerClass: false,
            animatedStatus: false
        }
    },
    computed: {
        ...mapGetters({
            loginfunction: 'loginfunction',
        }),
    },
    created() {
        // this.animatedStatus = true;
    },
    components: {
        myLogin,
        myRegister,
        myForget
    },
    watch: {
        loginfunction: function (newVal, oldVal) {
            if (newVal != oldVal) {
                if (newVal === 'login') {
                    this.loginMsgInterface.loginText = '登录';
                    this.loginMsgInterface.registerText = '立即注册';
                    this.registerClass = false;
                } else if (newVal === 'register') {
                    this.loginMsgInterface.loginText = '注册';
                    this.loginMsgInterface.registerText = '立即登陆';
                    this.registerClass = true;
                }
            }
        }
    },
    methods: {
        ...mapMutations({
            loginTagfunction: types.LOGIN_TAG_REGISTER
        }),
        closePopup() {
            this.$emit("actice-close-popup");
        },
        LogonImmediately() {
            let val = this.loginMsgInterface.registerText;
            if (val === "立即注册") {
                this.loginTagfunction("register");
            } else if (val === "立即登陆") {
                this.loginTagfunction("login");
            }
        },
        forgetTo() {
            this.loginTagfunction("forget");
            this.loginMsgInterface.loginText = '忘记密码';
            this.loginMsgInterface.registerText = '立即登陆';
        }
    },
    activated() {

        // console.log(this);
    }
})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.popup_warp {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto;
    z-index:9999;
    .block_module {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #000;
        opacity: .5;
    }
    .p_warp {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 390px;
        height: 586px;
        background: #FFF;
        margin-top: -293px;
        margin-left: -195px;
        .p_head {
            height: 45px;
            line-height: 45px;
            background: #F6F6F6;
            overflow: hidden;
            padding: 0 19px;
            .head_title {
                font-size: 18px;
                color: #202730;
            }
            .close_btn {
                float: right;
                width: 25.5px;
                height: 25.5px;
                margin-top: 9px;
                cursor: pointer;
            }
        }
        .p_logo_box {
            text-align: center;
            padding: 35px 0;
            .p_logo {}
        }
        .p_msg {
            padding: 0 42px;
            text-align: right;
            font-size: 16px;
            color: #A1A9B5;
            .register_btn {
                color: red;
                cursor: pointer;
            }
        }
    }
    .p_warp_r {
        height: 700px;
        margin-top: -350px;
    }
}
</style>