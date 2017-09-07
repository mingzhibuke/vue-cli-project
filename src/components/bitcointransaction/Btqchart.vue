<template>
    <div>
        <my-header :headColor="true"></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                    修改内容
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
import sideBar from '../../publicComponents/securitycenterPublic/Sidetransaction'  //侧栏菜单组件
import myFooter from '../../publicComponents/Footer'  //底部组件
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
    data() {
        return {
            popupStatus: false,
            sideBarActiveStatus: {
                stautsName: 'btqchart',
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
    }
}
</style>
