<template>
    <div>
        <my-header  :headColor="false"></my-header>
        <div class="h_main">
            <div class="content">
                <div class="article_detail">
                    <div class="article_detail_content">
                        <div class="title_01">
                            <span>突破</span>价值壁垒</div>
                        <div class="title_02">
                            <span>破冰</span>实体经济</div>
                        <div class="article_detail_text">光轴链融合国际前沿性互联网技术与前瞻性经济模型</div>
                    </div>
                </div>
                <data-show></data-show>
                <culomn-list></culomn-list>
                <div class="introduce">
                    <div class="massage_warp">
                        <span class="block"></span>
                        <p class="massage_text">光轴链使用区块链底层技术，融合社会结构，顺应市场规律， 穿透行业壁垒，将人与社会、技术与商业、货币与价值有机结合， 形成前瞻型商业模式和技术风口。
                        </p>
                    </div>
                    <my-footer></my-footer>
                </div>
            </div>
        </div>
        <my-popup v-show="popupStatus" @actice-close-popup="close()"></my-popup>
    </div>
</template>
<script>
import api from '../api/api'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../vuex/mie-types'
import myHeader from '../publicComponents/Header'  //公用头部组件
import dataShow from '../publicComponents/chartdata/DataDisplay'  //数据展示组件
import culomnList from '../publicComponents/home/ColumnHome'  //栏目展示组件
import myFooter from '../publicComponents/Footer'  //底部组件
import myPopup from '../publicComponents/popupson/LoginPopup'  //弹框组件
export default ({
    data() {
        return {
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
        login() {
            this.revampPopupStatus(true);
            this.loginTagfunction("login");
            document.documentElement.style.overflow = 'hidden';
        },
        close() {
            this.revampPopupStatus(false);
            document.documentElement.style.overflow = 'auto';
        },
        register() {
            this.revampPopupStatus(true);
            this.loginTagfunction("register");
            document.documentElement.style.overflow = 'hidden';
        },
    },
    components: {
        myHeader,
        dataShow,
        culomnList,
        myFooter,
        myPopup
    }
})
</script>
<style lang="scss">
@import '../assets/sass/global.scss';
.h_main {
    min-width: 1170px;
    background: #F0F0F0;
    .content {
        background: url('../assets/img/img_home_bg_1.png') no-repeat center top;
        background-size: 2560px;
        padding-top: 126px;
        .article_detail {
            width: 1170px; // height: 331px;
            margin: 0 auto;
            .article_detail_content {
                padding-top: 90px;
                padding-left: 90px;
                padding-bottom: 79px;
                .title_01 {
                    font-size: 48px;
                    span {
                        font-weight: bold;
                    }
                }
                .title_02 {
                    font-size: 48px;
                    span {
                        font-weight: bold;
                        margin-left: 130px;
                    }
                }
                .article_detail_text {
                    // display: inline-block;
                    font-size: 15px;
                    border-left: 2px solid #DC302E;
                    padding-left: 10px;
                    margin-top: 6px;
                }
            }
        }
        .introduce {
            background: url('../assets/img/img_home_bg_2.png') no-repeat center bottom;
            background-size: 2560px 100%;
            .massage_warp {
                width: 1170px;
                margin: 0 auto;
                text-align: center;
                .block {
                    display: inline-block;
                    width: 80px;
                    height: 6px;
                    background: #DC302E;
                }
                .massage_text {
                    padding: 27px 200px 218px 200px;
                    font-size: 28px;
                    font-weight: bold;
                    color: #000;
                    line-height: 60px;
                }
            }
        }
    }
}
</style>