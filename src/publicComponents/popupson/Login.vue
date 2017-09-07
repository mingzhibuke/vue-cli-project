<template>
    <div class="p_form">
        <p class="p_prompt"></p>
        <ul class="p_list">
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_pone_icon.png">
                <input class="p_inp" type="text" v-model="userLogin.username" placeholder="请输入您的手机号或用户名">
            </li>
            <li class="p_item">
                <img class="p_item_img" src="../../assets/img/user_password.png">
                <input class="p_inp" type="text" v-model="userLogin.password" placeholder="请输入您的密码">
            </li>
        </ul>
        <div class="p_select">
            <div class="p_select_left">
                <span class="selext_btn" :class="{'selext_btn_font_0':saveUserMsgStatus}" @click="saveUserPassword()">√</span>保持登录
            </div>
            <div class="p_select_right" @click="forgetTo()">
                忘记密码？
            </div>
        </div>
        <div class="p_login" @click="Login()">登录</div>
        <!-- <div class="p_third_party">
                                                                                <div class="p_third_title">
                                                                                    <span>第三方帐号登录</span>
                                                                                </div>
                                                                                <div class="p_third_party_warp">
                                                                                    <img src="../../assets/img/QQ.png">
                                                                                    <img src="../../assets/img/weixin.png">
                                                                                </div>
                                                                            </div> -->
        <el-button :plain="true" v-show="false"></el-button>
    </div>
</template>
<script>
import api from '../../api/api'  //接口登录
import { mapGetters, mapMutations } from 'vuex'
export default ({
    data() {
        return {
            saveUserMsgStatus: true,
            userLogin: {
                username: 13540006060,
                password: 'qwer1234'
            },
            ptompt: '',
        }
    },
    created() {
        let st = this.getcookie('st');
        if (st != '' && st != undefined) {
            this.AUTHHEADERSTVal(st);
            this.getUserInfo(2);
        }
    },
    computed: {
        ...mapGetters({
            loginSuccess: 'loginSuccess', //登录得信息store
            AUTHHEADERSTVal_st: 'AUTHHEADERSTVal_st',
            userAssetsData: 'userAssetsData' //用户的资产信息
        }),
    },
    methods: {
        ...mapMutations({
            userMsgFunction: 'userMsgFunction', //登录 注册状态切换
            revampPopupStatus: 'revampPopupStatus', //切换弹框显示状态值
            saveAuth_header_st: 'saveAuth_header_st', //保存st数据
            AUTHHEADERSTVal: 'AUTHHEADERSTVal', //保存全局header参数
            saveAssetsDatafunction: 'saveAssetsDatafunction' //用户资产信息保存
        }),
        saveUserPassword() {
            this.saveUserMsgStatus = !this.saveUserMsgStatus;
        },
        forgetTo() {
            this.$emit("tab-forget-password-assembly");
        },
        Login() {  //第一步 
            api.post(`auth/login-web?userName=${this.userLogin.username}&password=${this.userLogin.password}&deviceType=3`)
                .then(res => {
                    if (res.data.data.success) {
                        this.saveAuth_header_st(res.data.data.tgt); //保存全局
                        this.stApi(res.data.data.tgt);
                    } else {
                        this.$message.error('您输入的账号或密码不正确，请重新输入！');
                    }
                }).catch(err => {
                    // this.$message.error('服务器报错！');
                })
        },
        stApi(val) { //第二步 获取ST 存放header
            var self = this;
            api.post(`auth/ticket?ticket=${val}&service="http://app.5km.me"`)
                .then(res => {
                    self.AUTHHEADERSTVal(res.data.data.st);
                    self.setcookie('st', res.data.data.st, '');
                    // api.defaults.headers.common['AUTH_HEADER_ST'] = `${res.data.data.st}`; //添加请求头
                    self.getUserInfo(1);
                }).catch(err => {
                    // this.$message.error('服务器报错！');
                });
        },
        getUserInfo(val) {  //第三步 获取用户信息 登录成功
            api.get("v1/user/info")
                .then(res => {
                    if (res.data.data.success) {
                        this.loginSuccess.loginStatus = true;
                        this.userMsgFunction(res.data.data.data);
                        this.revampPopupStatus(false);
                        document.documentElement.style.overflow = 'auto';
                        if (val == 1) {
                            this.$message.success('恭喜你，登录成功！');
                        };
                        this.userAccountInfo();
                    } else {
                        this.$message.error('登录失败！');
                    }
                }).catch(err => {
                    // this.$message.error('服务器报错！');
                })
        },
        userAccountInfo() {
            api.get("v1/user/user-account")
                .then(res => {
                    // console.log(JSON.stringify(res));
                    this.saveAssetsDatafunction(res.data.data);
                    console.log(JSON.stringify(this.userAssetsData));
                }).catch(err => {

                })
        },
        setcookie(name, value, iday) {  //创建
            var odate = new Date();
            odate.setDate(odate.getDate() + iday);
            document.cookie = name + "=" + value + ";expires=" + odate;
        },
        getcookie(name) {  //获取
            var cookies = document.cookie;
            var arr1 = cookies.split("; ");
            for (var i = 0; i < arr1.length; i++) {
                var arr2 = arr1[i].split("=")
                if (name == arr2[0]) {
                    return arr2[1];
                }
            }
            return false;
        },
       
    }
})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.el-loading-mask {
    background: '';
}

.p_form {
    padding: 0 42px;
    .p_prompt {
        color: red;
        font-size: 14px;
    }
    .p_list {
        padding-top: 16px;
        .p_item {
            position: relative;
            padding-left: 50px;
            height: 50px;
            border: 1px solid #A8A8A8;
            margin-bottom: 16px;
            .p_item_img {
                position: absolute;
                top: 18px;
                left: 15px;
            }
            .p_inp {
                width: 100%;
                font-size: 16px;
                color: #A8A8A8;
                height: 50px;
                border: none;
            } // ::-webkit-input-placeholder{}
            .p_var_inp {
                width: 50%;
                font-size: 16px;
                color: #A8A8A8;
                height: 50px;
                border: none;
            }
            .verification_Code {
                position: absolute;
                top: 0;
                right: 0;
                width: 40%;
                height: 50px;
                img {
                    width: 100%;
                    height: 50px;
                }
                span {
                    display: inline-block;
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    color: #59C3AA;
                    text-align: center;
                }
            }
        }
    }
    .p_select {
        overflow: hidden;
        height: 30px;
        line-height: 30px;
        .p_select_left {
            float: left;
            font-size: 16px;
            color: #A1A9B5;
            position: relative;
            padding-left: 30px;
            .selext_btn {
                position: absolute;
                top: 0;
                left: 0;
                display: inline-block;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                border-radius: 3px;
                box-sizing: border-box;
                border: 1px solid #A1A9B5;
                margin-right: 10px;
                margin-top: 5px;
                font-size: 12px;
                cursor: pointer;
            }
            .selext_btn_font_0 {
                font-size: 0;
            }
        }
        .p_select_right {
            float: right;
            font-size: 16px;
            color: #A1A9B5;
            cursor: pointer;
            &:hover {
                // content: '';
                text-decoration: underline;
            }
        }
    }
    .p_login {
        width: 100%;
        height: 44px;
        background: #DC302E;
        line-height: 44px;
        font-size: 16px;
        color: #FFF;
        text-align: center;
        margin: 16px 0;
        cursor: pointer;
        &:hover {
            background: #CE2929;
            transition: 1s all;
        }
    }
}

.p_third_party {
    padding-top: 29px;
    .p_third_title {
        border-bottom: 1px solid #838383;
        height: 1px;
        text-align: center;
        position: relative;
        span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 112px;
            height: 22px;
            display: inline-block;
            background: #FFF;
            font-size: 16px;
            margin-top: -11px;
            margin-left: -56px;
            padding: 0 5px;
        }
    }
    .p_third_party_warp {
        padding-top: 20px;
        text-align: center;
        img {
            margin: 0 10px;
        }
    }
}
</style>