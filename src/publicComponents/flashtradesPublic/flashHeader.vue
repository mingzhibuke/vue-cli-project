<template>
    <div class="fl_header">
        <div class="fl_head">
            <img class="fl_logo" src="../../assets/img/logo_gzl_3.png">
            <ul class="fl_nav">
                <li class="fl_item" v-for="(item,index) in navData" :key="index" :class="{'fl_items_color_red':index==flashnav}" @click="active(index)">
                    <router-link :to="{name:`${item.routerUrl}`,params:{active:index}}">
                        <span class="fl_items_text">{{item.navName}}</span>
                    </router-link>
                </li>
            </ul>
            <div class="fl_right_main">
                <img class="fl_login_logo" src="../../assets/img/ic_body.png">
                <div class="fl_login_massage">
                    <span class="fl_login_phone_nummber">158***4062</span>
                    <span class="fl_sign_out_btn">退出</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default {
    data() {
        return {
            navData: [{
                navName: '行情中心',
                routerUrl: 'flashcenter'
            }, {
                navName: '唐卡TKC交易',
                routerUrl: 'flashTkc'
            }],
        }
    },
    created() {
       this.activeValfunction(this.activeVal);
    },
    computed: {
        ...mapGetters({
            flashnav: 'flashnav',
        }),
    },
    props: ['activeVal'],
    methods: {
        ...mapMutations({
            activeValfunction: types.HAEDER_FLASH_STATUS //登录 注册状态切换
        }),
        active(index) {
            this.activeValfunction(index);
        }
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/global.scss';
.fl_header {
    .fl_head {
        width: 1170px;
        height: 80px;
        line-height: 80px;
        background: #131313;
        margin: 0 auto;
        position: relative; // overflow: hidden;
        .fl_logo {
            position: absolute;
            top: 20px;
            left: 0;
        }
        .fl_nav {
            float: left;
            padding-left: 200px;
            overflow: hidden;
            .fl_item {
                float: left;
                font-size: 14px;
                color: #A1A9B5;
                cursor: pointer;
                box-sizing: border-box;
                margin-right: 33px;
                position: relative;
                a {
                    text-decoration: none;
                    &:hover {
                        color: #FFF;
                        transition: all 1s;
                    }
                }
            }
            .fl_items_color_red {
                .fl_items_text {
                    color: #FFF;
                }
                .fl_items_text::after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    background: #FFF;
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
                    background: #FFF;
                }
            }
        }
        .fl_right_main {
            float: right;
            position: relative;
            .fl_login_massage {
                display: inline-block;
                font-size: 14px;
                color: #A1A9B5;
                height: 50px;
                line-height: 50px;
                margin-right: 59px;
                .fl_login_phone_nummber {
                    display: inline-block;
                    padding: 0 6px;
                }
                .fl_sign_out_btn {
                    cursor: pointer;
                }
            }
            .fl_login_logo {
                position: absolute;
                top: 28px;
                left: -26px;
            }
        }
    }
}
</style>
