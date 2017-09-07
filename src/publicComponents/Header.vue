<template>
    <div>
        <header>
            <div class="head_warp">
                <ul class="left_nav">
                    <li class="items">
                        <div class="box">
                            <span class="c_title">TKC/CNY:</span>
                            <span class="c_nummber">{{dataVal.TKC.close_price}}</span>
                            <img class="c_img" src="../assets/img/ic_arrows_red_thin.png">
                        </div>
                    </li>
                    <li class="items">
                        <div class="box">
                            <span class="c_title">BTC/CNY:</span>
                            <span class="c_nummber">{{dataVal.BTC.last}}</span>
                            <img class="c_img" src="../assets/img/ic_arrows_red_thin.png">
                        </div>
                    </li>
                    <li class="items">
                        <div class="box">
                            <span class="c_title">LTC/CNY:</span>
                            <span class="c_nummber">{{dataVal.LTC.last}}</span>
                            <img class="c_img" src="../assets/img/ic_arrows_green_thin.png">
                        </div>
                    </li>
                </ul>
                <div class="right_main">
                    <img class="login_logo" src="../assets/img/ic_body.png" v-show="loginSuccess.loginStatus">
                    <div class="login_massage" v-show="loginSuccess.loginStatus">
                        <span class="login_phone_nummber">{{loginSuccess.userMassage.username}}</span>
                        <span class="sign_out_btn" @click="logout()">退出</span>
                    </div>
                    <div class="sidebar">
                        <div class="open_nav" @click="navActive()">
                            <span class="right_text">网站导航</span>
                            <img class="right_img" v-if="!navStatus" src="../assets/img/nav_leftbar.png">
                            <img class="right_img" style="width:12px;height:12px;" v-else src="../assets/img/tab_button_onclick_icon_2.png">
                        </div>
                        <div class="nav_warp" v-show="navStatus">
                            <div class="triangle"></div>
                            <el-row :gutter="20">
                                <el-col :span="6">
                                    <div class="grid-content-nav">
                                        <span class="nav_title">行情交易</span>
                                        <div class="nav_box">
                                            <ul class="nav_list">
                                                <li class="nav_item">
    
                                                    <span class="nav_module_name" @click="urlTotouter('buyandsell',{headColor:true})">唐卡</span>
                                                </li>
                                                <li class="nav_item">
    
                                                    <span class="nav_module_name" @click="urlTotouter('btqchart',{headColor:true})">比特币</span>
                                                    <!-- <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
                                                                                        <span class="nav_module_name">比特币</span>
                                                                                    </el-tooltip> -->
                                                </li>
                                                <li class="nav_item">
    
                                                    <span class="nav_module_name" @click="urlTotouter('ltqchart',{headColor:true})">莱特币</span>
                                                    <!-- <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
                                                                                        <span class="nav_module_name">莱特币</span>
                                                                                    </el-tooltip> -->
                                                </li>
                                                <li class="nav_item">
    
                                                    <!-- <span class="nav_module_name" @click="urlTotouter('flashcenter',{active:0})">闪电交易</span> -->
                                                    <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
                                                        <span class="nav_module_name">闪电交易</span>
                                                    </el-tooltip>
                                                </li>
                                                <li class="nav_item">
                                                    <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
    
                                                        <span class="nav_module_name">唐卡TKC交易</span>
                                                    </el-tooltip>
                                                    <!-- <span class="nav_module_name" @click="urlTotouter('flashTkc',{active:1})">唐卡TKC交易</span> -->
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content-nav">
                                        <span class="nav_title">充值提现</span>
                                        <div class="nav_box">
                                            <ul class="nav_list">
                                                <li class="nav_item">
                                                    <!-- <router-link :to="{name:'bitcoin',params:{headColor:true,moduleName:'充值提现'}}">人民</router-link> -->
                                                    <span class="nav_module_name" @click="urlTotouter('bitcoin',{headColor:true,moduleName:'充值提现'})">人民</span>
                                                </li>
                                                <li class="nav_item">
                                                    <!-- <router-link :to="{name:'rmb',params:{headColor:true,moduleName:'充值提现'}}">唐卡</router-link> -->
                                                    <span class="nav_module_name" @click="urlTotouter('rmb',{headColor:true,moduleName:'充值提现'})">唐卡</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content-nav">
                                        <span class="nav_title"> 用户中心</span>
                                        <div class="nav_box">
                                            <ul class="nav_list">
                                                <li class="nav_item">
                                                    <!-- <router-link :to="{name:'security',params:{headColor:true,moduleName:'用户中心'}}">安全中心</router-link> -->
                                                    <span class="nav_module_name" @click="urlTotouter('security',{headColor:true,moduleName:'用户中心'})">安全中心</span>
                                                </li>
                                                <li class="nav_item">
                                                    <!-- <router-link :to="{name:'basicInfo',params:{headColor:true,moduleName:'用户中心'}}">用户中心</router-link> -->
                                                    <span class="nav_module_name" @click="urlTotouter('basicInfo',{headColor:true,moduleName:'用户中心'})">用户中心</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </el-col>
                                <el-col :span="6">
                                    <div class="grid-content-nav">
                                        <span class="nav_title">更多</span>
                                        <div class="nav_box">
                                            <ul class="nav_list">
                                                <li class="nav_item">
                                                    <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
                                                        <span class="nav_module_name">下载</span>
                                                    </el-tooltip>
                                                </li>
                                                <li class="nav_item">
                                                    <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
                                                        <span class="nav_module_name">帮助</span>
                                                    </el-tooltip>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_warp" :class="{'header_warp_color':headColor}">
                <div class="header_nav">
                    <div class="logo_box">
                        <img class="Logo" src="../assets/img/logo_gzl_2.png">
                    </div>
                    <ul class="nav_list">
                        <li class="items" v-for="(item,index) in navData" :key="index" :class="{'items_color_red':index === navActiveStatus}">
                            <!-- <router-link :to="{name:`${item.routerUrl}`,params:{headColor:item.headColor}}"> -->
                            <span class="items_text" @click="itemActiveColor(item.routerUrl,{headColor:true},index)">{{item.text}}</span>
                            <!-- </router-link> -->
    
                            <!-- <div class="sub" v-show="index === itemsTextStatus">                                                                                                                                                                                                                                                                                                                                                     </div> -->
                        </li>
                    </ul>
                    <div class="nav_right" v-show="!loginSuccess.loginStatus">
                        <span class="login_btn login_btn_background_red" @click="login()">登录</span>
                        <span class="login_btn login_btn_background_whide" @click="register()">注册</span>
                    </div>
                    <div class="nav_login_success" v-show="loginSuccess.loginStatus">
                        <div class="success_nummber">
                            <span>净资产</span>
                            ￥{{showToAssets? userAssetsData.cny_available:'---'}}
                            <div class="eye_img" @click="hideOrShow()">
                                <img v-if="showToAssets" src="../assets/img/ic_eye_open.png">
                                <img v-else src="../assets/img/ic_eye_close.png">
                            </div>
                        </div>
                        <div class="right_silder" @click="tabActive()">
                            <img :class="{'img_show':arrowTag}" src="../assets/img/ic_arrows_up_2.png">
                        </div>
                        <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                            <div class="eye_assets_warp" v-show="arrowTag">
                                <div class="triangle"></div>
                                <el-row :gutter="20" class="bg-purple-white">
                                    <el-col :span="24">
                                        <div>人名币账户</div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="bg-purple-red">
                                    <el-col :span="9">
                                        <div class="grid-content bg-purple">
                                            总资产
                                            <span class="as_nummber">￥{{showToAssets? userAssetsData.cny_locked+userAssetsData.cny_available:'---'}}</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="grid-content bg-purple">
                                            <span class="short"></span>
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div class="grid-content bg-purple">
                                            净资产
                                            <span class="as_nummber">￥{{showToAssets? userAssetsData.cny_available:'---'}}</span>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="bg-purple-white">
                                    <el-col :span="24">
                                        <div>唐卡账户</div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="bg-purple-red">
                                    <el-col :span="9">
                                        <div class="grid-content bg-purple">
                                            总资产
                                            <span class="as_nummber">{{showToAssets? userAssetsData.tkc_locked+userAssetsData.tkc_available:'---'}}</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="6">
                                        <div class="grid-content bg-purple">
                                            <span class="short"></span>
                                        </div>
                                    </el-col>
                                    <el-col :span="9">
                                        <div class="grid-content bg-purple">
                                            净资产
                                            <span class="as_nummber">{{showToAssets? userAssetsData.tkc_available:'---'}}</span>
                                        </div>
                                    </el-col>
                                </el-row>
                                <el-row :gutter="20" class="bg-purple-white grid-padding">
                                    <el-col :span="24">
                                        <div class="grid-content">
                                            <span class="recharge_btn" @click="routerToRecharge('first')">充值</span>
                                            <span class="wds_btn" @click="routerToRecharge('second')">提现</span>
                                        </div>
                                    </el-col>
                                </el-row>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </header>
        <el-button :plain="true" v-show="false"></el-button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../vuex/mie-types'
import api from '../api/api'
export default ({
    data() {
        return {
            // navData: ['首页', '唐卡TKC', '比特币BTC', '莱特币LTC', '资产', 'APP'],
            navData: [{
                text: '首页',
                routerUrl: 'home',
            }, {
                text: '唐卡TKC',
                routerUrl: 'buyandsell',
            }, {
                text: '比特币BTC',
                routerUrl: 'btqchart',
            }, {
                text: '莱特币LTC',
                routerUrl: 'ltqchart',
            }, {
                text: '资产',
                routerUrl: 'home',
            }],
            arrowTag: false,
            navStatus: false,
            showToAssets: true,
            dataVal: {
                TKC: '',
                BTC: '',
                LTC: ''
            },
            intervalifunction: '', //设置循环

        }
    },
    created() {
        // this.intervalifunction = setInterval(() => {
        this.tickerApi();
        // }, 3000);
    },
    props: [
        'headColor'
    ],
    computed: {
        ...mapGetters({
            navActiveStatus: 'navActiveStatus',  //点击导航菜单状态
            loginSuccess: 'loginSuccess', //登录得信息
            authHeaderSt: 'auth_header_st',  //存储的st值
            BTCvals: 'BTCvals',
            TKCvals: 'TKCvals',
            LTCvals: 'LTCvals',
            userAssetsData: 'userAssetsData' //用户的资产信息
        }),
    },
    methods: {
        ...mapMutations({
            navListActive: types.HAEDER_ACTIVE_STATUS,//菜单栏状态切换
            loginTagfunction: types.LOGIN_TAG_REGISTER, //登录 注册状态切换
            revampPopupStatus: 'revampPopupStatus', //登录 注册 弹出框设置  登录  登出 设置状态
            revampLoginStatus: 'revampLoginStatus', //改变登录的状态
            BTCval: 'BTCval', //存储数据
            TKCval: 'TKCval',
            LTCval: 'LTCval'
        }),
        routerToRecharge(val) {
            this.$router.push({ name: 'rmb',params:{navNmae:'人民币',moduleName:'充值提现',tab:val}});
        },
        tickerApi() {  //请求  TKC: '', BTC: '',LTC: ''
            api.get("/v1/market/ticker/tkc")
                .then(res => {
                    this.dataVal.TKC = res.data.data;
                    this.TKCval(res.data.data);
                }).catch(err => {

                });
            api.get("/v1/market/ticker/btc")
                .then(res => {
                    this.dataVal.BTC = res.data.data;
                    this.BTCval(res.data.data);
                }).catch(err => {

                });
            api.get("/v1/market/ticker/ltc")
                .then(res => {
                    this.dataVal.LTC = res.data.data;
                    this.LTCval(res.data.data);
                }).catch(err => {

                });
        },
        itemActiveColor(url, val, index) {
            this.navListActive(index);
            // if (this.loginSuccess.loginStatus) {
            this.$router.push({ name: url, params: val });
            // } else {
            //     this.$message.warning('请登录！');
            //     this.revampPopupStatus(true);
            //     this.loginTagfunction('login');
            //     this.navStatus = false;
            // }
        },
        login() {
            this.revampPopupStatus(true);
            this.loginTagfunction("login");
            document.documentElement.style.overflow = 'hidden';
        },
        register() {
            this.revampPopupStatus(true);
            this.loginTagfunction("register");
            document.documentElement.style.overflow = 'hidden';
        },
        tabActive() {
            this.arrowTag = !this.arrowTag;
        },
        navActive() {
            this.navStatus = !this.navStatus;
        },
        hideOrShow() {
            this.showToAssets = !this.showToAssets;
        },
        logout() {
            var self = this;
            api.post('auth/logout', {
                AUTH_HEADER_ST1: this.authHeaderSt
            }).then(res => {
                if (res.data.code == 200) {
                    self.$message.success('退出账号成功！');
                    self.revampLoginStatus(false);
                    self.delAllCookie();
                } else {
                    self.$message.error('退出账号失败！');
                }
            }).catch(err => {

            })

        },
        delAllCookie() {
            var myDate = new Date();
            myDate.setTime(-1000);//设置时间    
            var data = document.cookie;
            var dataArray = data.split("; ");
            for (var i = 0; i < dataArray.length; i++) {
                var varName = dataArray[i].split("=");
                document.cookie = varName[0] + "=''; expires=" + myDate.toGMTString();
            }

        },
        urlTotouter(url, val) {
            if (this.loginSuccess.loginStatus) {
                this.$router.push({ name: url, params: val });
            } else {
                this.$message.warning('请登录！');
                this.revampPopupStatus(true);
                this.loginTagfunction('login');
                this.navStatus = false;
            }

        },
        beforeDestroy() {
            clearInterval(this.intervalifunction); //清除循环
        },
    }
})
</script>
<style lang="scss">
@import '../assets/sass/global.scss';
header {
    position: relative;
    width: 100%;
    height: 50px;
    background: #1E1E1E;
    .head_warp {
        width: 1170px;
        margin: 0 auto;
        .left_nav {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            overflow: hidden;
            .items {
                float: left;
                margin-right: 53px;
                .box {
                    font-size: 14px;
                    .c_title {
                        color: #FFF;
                    }
                    .c_nummber {
                        display: inline-block;
                        padding: 0 6px;
                        color: #FF0200;
                    }
                    .c_img {

                        width: 10px;
                        height: 13px;
                    }
                }
            }
        }
        .right_main {
            float: right;
            position: relative;
            .login_massage {
                display: inline-block;
                font-size: 14px;
                color: #FFF;
                height: 50px;
                line-height: 50px;
                margin-right: 59px;
                .login_phone_nummber {
                    display: inline-block;
                    padding: 0 6px;
                }
                .sign_out_btn {
                    cursor: pointer;
                }
            }
            .login_logo {
                position: absolute;
                top: 15px;
                left: -26px;
            }
            .sidebar {
                display: inline-block;
                height: 50px;
                line-height: 50px;

                position: relative;
                .right_text {
                    font-size: 15px;
                    color: #FFF;
                    cursor: pointer;
                }
                img {
                    cursor: pointer;
                }
                .nav_warp {
                    position: absolute;
                    right: 0;
                    top: 50px;
                    width: 560px;
                    background: #FFF;
                    z-index: 999;
                    box-shadow: 0 0 10px #888888;
                    .el-row {
                        .el-col {
                            .grid-content-nav {
                                text-align: center;
                                .nav_title {
                                    font-size: 16px;
                                    font-weight: bold;
                                }
                                .nav_box {
                                    .nav_list {
                                        .nav_item {
                                            font-size: 14px;
                                            cursor: pointer; // a {
                                            //     &:hover {
                                            //         color: #FF0200;
                                            //         text-decoration: underline;
                                            //     }
                                            // }
                                            .nav_module_name {
                                                &:hover {
                                                    color: #FF0200;
                                                    text-decoration: underline;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .triangle {
                        position: absolute;
                        top: -7.5px;
                        right: 45px;
                        width: 15px;
                        height: 15px;
                        background: #FFF;
                        transform: rotate(45deg);
                    }
                }
            }
        }
    }
    .header_warp {
        height: 80px;
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        .header_nav {
            max-width: 1170px;
            height: 80px;
            margin: 0 auto;
            .logo_box {
                // display: inline-block;
                float: left;
                height: 80px;
                margin-right: 74px;
                .Logo {
                    margin-top: 20px;
                }
            }
            .nav_list {
                float: left;
                overflow: hidden;
                .items {
                    float: left;
                    height: 80px;
                    line-height: 80px;
                    position: relative;
                    font-size: 14px;
                    color: #A1A9B5;
                    margin-right: 33px;
                    cursor: pointer;
                    box-sizing: border-box;
                    a {
                        text-decoration: none;
                        &:hover {
                            color: red;
                            transition: all 1s;
                        }
                    }
                    .sub {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        .sub_box {
                            width: 10px;
                            border: 1px solid red;
                            margin: 0 auto;
                        }
                    }
                }
                .items_color_red {
                    color: red;
                    .items_text::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 100%;
                        height: 2px;
                        background: red;
                        left: 0px;
                        bottom: 20px;
                    }
                    &::after {
                        content: '';
                        display: block;
                        position: absolute;
                        width: 10px;
                        height: 4px;
                        left: calc((100% - 10px) / 2);
                        bottom: 19px;
                        background: red;
                    }
                }
            }
            .nav_right {
                float: right;
                height: 80px;
                line-height: 80px;
                .login_btn {
                    display: inline-block;
                    width: 80px;
                    height: 42px;
                    line-height: 42px;
                    font-size: 15px;
                    text-align: center;
                    color: #FFF;
                    border: 1px solid #DC302E;
                    margin-right: 10px;
                    cursor: pointer;
                }
                .login_btn_background_red {
                    background: #DC302E;
                }
                .login_btn_background_whide {
                    color: #DC302E;
                }
            }
            .nav_login_success {
                float: right;
                margin-top: 19px;
                width: 281px;
                position: relative;
                .success_nummber {
                    float: left;
                    overflow: hidden;
                    font-size: 15px;
                    width: 248px;
                    height: 42px;
                    line-height: 42px;
                    color: #FFF;
                    background: #DC302E;
                    span {
                        margin: 0 10px;
                    }
                    .eye_img {
                        float: right;
                        height: 42px;
                        line-height: 42px;
                        margin-right: 10px;
                        cursor: pointer;
                    }
                }
                .right_silder {
                    float: right;
                    width: 32px;
                    height: 42px;
                    line-height: 42px;
                    background: #DC302E;
                    text-align: center;
                    cursor: pointer;
                    .img_show {
                        transform: rotate(180deg);
                    }
                }
                .eye_assets_warp {
                    position: absolute;
                    top: 60px;
                    right: 0;
                    width: 560px;
                    background: #FFF;
                    z-index: 200;
                    .triangle {
                        position: absolute;
                        top: -7.5px;
                        right: 5px;
                        width: 15px;
                        height: 15px;
                        background: #FFF;
                        transform: rotate(45deg);
                    }
                    .el-row {
                        .el-col {
                            height: 48px;
                            line-height: 48px;
                            .grid-content {
                                text-align: center;
                                .short {
                                    height: 10px;
                                    border: 1px solid red;
                                }
                                .as_nummber {
                                    color: red;
                                }
                                .recharge_btn {
                                    display: inline-block;
                                    width: 225px;
                                    height: 45px;
                                    line-height: 45px;
                                    text-align: center;
                                    background: #DC302E;
                                    color: #FFF;
                                    font-size: 16px;
                                    cursor: pointer;
                                }
                                .wds_btn {
                                    display: inline-block;
                                    width: 225px;
                                    height: 45px;
                                    line-height: 45px;
                                    text-align: center;
                                    color: #DC302E;
                                    font-size: 16px;
                                    box-sizing: border-box;
                                    border: 1px solid #DC302E;
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                    .grid-padding {
                        padding: 40px 0;
                        .el-col {
                            .recharge_btn {
                                display: inline-block;
                                width: 225px;
                                height: 45px;
                                line-height: 45px;
                                text-align: center;
                                background: #DC302E;
                                color: #FFF;
                                font-size: 16px;
                                margin-right: 20px;
                            }
                            .wds_btn {
                                display: inline-block;
                                width: 225px;
                                height: 45px;
                                line-height: 45px;
                                text-align: center;
                                color: #DC302E;
                                font-size: 16px;
                                box-sizing: border-box;
                                border: 1px solid #DC302E;
                                margin-left: 20px;
                            }
                        }
                    }
                    .bg-purple-red {
                        background: #FEF4F4;
                    }
                    .bg-purple-white {
                        background: #FFF;
                    }
                }
            }
        }
    }
    .header_warp_color {
        background: #FFF;
    }
}
</style>