<template>
    <div>
        <my-header  :headColor="true"></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                    <div class="mm_warp">
                        <div class="mm_title">
                            <span class="mm_text_left">我的消息</span>
                            <div class="mm_text_right">
                                <strong>0</strong>条未读/2条消息</div>
                        </div>
                        <div class="mm_head">
                            <span class="mm_class_name">筛选类型:</span>
                            <ul class="mm_list">
                                <li class="mm_item">
                                    <span class="mm_item_color">全部</span>
                                </li>
                                <li class="mm_item">
                                    <span>系统消息</span>
                                </li>
                                <li class="mm_item">
                                    <span>充值提现</span>
                                </li>
                                <li class="mm_item">
                                    <span>安全</span>
                                </li>
                                <li class="mm_item">
                                    <span>认证</span>
                                </li>
                            </ul>
                        </div>
                        <div class="mm_add_check_box">
                            <div class="mm_add_check mm_add_check_up">
                                <img src="../../assets/img/ic_draw_1.png">
                            </div>
                            <strong class="mm_delet">删除</strong>
                        </div>
                        <ul class="mm_msg_list">
                            <li class="mm_msg_item">
                                <div class="mm_item_title_box">
                                    <div class="mm_check_item mm_check_item_up">
                                        <img src="../../assets/img/ic_draw_1.png">
                                    </div>
                                    <span class="mm_article_title">系统</span>
                                </div>
                                <div class="mm_item_content">
                                    TinyPNG做什TinyPNG使用智能有损压缩技术来减少 PNG文件的文件大小。通过选择性地减少图像中的颜色数量，需要较少的字节来存储数据。效果几乎是看不见的，但它在文件大小上有很大差异！
                                </div>
                                <div class="mm_time">
                                    <div class="mm_data">2012-12-23
                                        <strong>19：23</strong>
                                    </div>
                                </div>
                            </li>
                            <li class="mm_msg_item">
                                <div class="mm_item_title_box">
                                    <div class="mm_check_item ">
                                        <img src="../../assets/img/ic_draw_1.png">
                                    </div>
                                    <span class="mm_article_title">系统</span>
                                </div>
                                <div class="mm_item_content">
                                    TinyPNG做什TinyPNG使用智能有损压缩技术来减少 PNG文件的文件大小。通过选择性地减少图像中的颜色数量，需要较少的字节来存储数据。效果几乎是看不见的，但它在文件大小上有很大差异！ TinyPNG做什TinyPNG使用智能有损压缩技术来减少 PNG文件的文件大小。通过选择性地减少图像中的颜色数量，需要较少的字节来存储数据。效果几乎是看不见的，但它在文件大小上有很大差异！
                                </div>
                                <div class="mm_time">
                                    <div class="mm_data">2012-12-23
                                        <strong>19：23</strong>
                                    </div>
                                </div>
                            </li>
                            <li class="mm_msg_item">
                                <div class="mm_item_title_box">
                                    <div class="mm_check_item ">
                                        <img src="../../assets/img/ic_draw_1.png">
                                    </div>
                                    <span class="mm_article_title">系统</span>
                                </div>
                                <div class="mm_item_content">
                                    TinyPNG做什TinyPNG使用智能有损压缩技术来减少 PNG文件的文件大小。通过选择性地减少图像中的颜色数量，需要较少的字节来存储数据。效果几乎是看不见的，但它在文件大小上有很大差异！
                                </div>
                                <div class="mm_time">
                                    <div class="mm_data">2012-12-23
                                        <strong>19：23</strong>
                                    </div>
                                </div>
                            </li>
                            <li class="mm_msg_item">
                                <div class="mm_item_title_box">
                                    <div class="mm_check_item mm_check_item_up">
                                        <img src="../../assets/img/ic_draw_1.png">
                                    </div>
                                    <span class="mm_article_title">系统</span>
                                </div>
                                <div class="mm_item_content">
                                    TinyPNG做什TinyPNG使用智能有损压缩技术来减少 PNG文件的文件大小。通过选择性地减少图像中的颜色数量，需要较少的字节来存储数据。效果几乎是看不见的，但它在文件大小上有很大差异！
                                </div>
                                <div class="mm_time">
                                    <div class="mm_data">2012-12-23
                                        <strong>19：23</strong>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="mm_paging">
                            <el-pagination layout="prev, pager, next" :total="1000">
                            </el-pagination>
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
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
    data() {
        return {
            // popupStatus: false,
            sideBarActiveStatus: {
                stautsName: '我的信息',
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
            .mm_warp {
                padding: 38px 20px;
                .mm_title {
                    height: 48px;
                    line-height: 48px; // overflow: hidden;
                    border-bottom: 1px solid #F2F2F2;
                    .mm_text_left {
                        font-size: 16px;
                        color: #DC302E;
                        display: inline-block;
                        border-bottom: 2px solid #DC302E;
                        box-sizing: border-box;
                    }
                    .mm_text_right {
                        float: right;
                        font-size: 16px;
                        strong {
                            color: #DC302E;
                        }
                    }
                }
                .mm_add_check_box {
                    height: 48px;
                    line-height: 48px;
                    overflow: hidden;
                    border-bottom: 1px solid #F2F2F2;
                    .mm_add_check {
                        float: left;
                        width: 18px;
                        height: 18px;
                        text-align: 18px;
                        line-height: 18px;
                        border: 1px solid #A1A9B5;
                        border-radius: 18px;
                        margin-top: 15px;
                        box-sizing: border-box;
                        position: relative;
                        cursor: pointer;
                        &::after {
                            content: '全选';
                            position: absolute;
                            top: 0;
                            left: 29px;
                            width: 36px;
                        }
                        img {
                            position: absolute;
                            top: 6px;
                            left: 4px;
                        }
                    }
                    .mm_add_check_up {
                        background: #DC302E;
                        border: none;
                    }
                    .mm_delet {
                        float: right;
                        cursor: pointer;
                        color: #DC302E;
                        text-decoration: underline;
                    }
                }
                .mm_head {
                    overflow: hidden;
                    border-bottom: 1px solid #F2F2F2;
                    .mm_class_name {
                        float: left;
                        display: block;
                        height: 48px;
                        line-height: 48px;
                        font-size: 16px;
                        color: #666;
                    }
                    .mm_list {
                        float: left;
                        overflow: hidden;
                        .mm_item {
                            float: left;
                            margin-left: 20px;
                            height: 48px;
                            line-height: 48px;
                            span {
                                display: inline-block; // padding: 10px 10px;
                                text-align: center;
                                color: #666;
                                font-size: 16px;
                                height: 24px;
                                line-height: 24px;
                                padding: 0 5px;
                                cursor: pointer;
                            }
                            .mm_item_color {
                                background: #DC302E;
                                color: #FFF;
                            }
                        }
                    }
                }
                .mm_msg_list {
                    border-bottom: 1px solid #F2F2F2;
                    .mm_msg_item {
                        overflow: hidden;
                        padding: 20px 0;
                        color: #787878;
                        .mm_item_title_box {
                            float: left;
                            width: 60px;
                            height: 48px; // line-height: 48px;
                            .mm_check_item {
                                float: left;
                                width: 18px;
                                height: 18px;
                                text-align: 18px;
                                line-height: 18px;
                                border: 1px solid #A1A9B5;
                                border-radius: 18px; // margin-top: 15px;
                                box-sizing: border-box;
                                position: relative;
                                cursor: pointer;
                                img {
                                    position: absolute;
                                    top: 6px;
                                    left: 4px;
                                }
                            }
                            .mm_check_item_up {
                                background: #DC302E;
                                border: none;
                            }
                            .mm_article_title {
                                float: right;
                                margin-left: 12px;
                                font-size: 14px;
                            }
                        }
                        .mm_item_content {
                            float: left;
                            width: 700px;
                            margin-left: 30px;
                            font-size: 12px;
                        }
                        .mm_time {
                            float: right;
                            font-size: 12px;
                        }
                    }
                }
                .mm_paging {
                    padding-top: 20px;
                    .el-pagination {
                        text-align: center;
                        .btn-prev {
                            margin: 0 5px;
                            border-radius: 5px;
                            border-right: 1px solid #EAEAEA;
                            border-left: 1px solid #EAEAEA;
                            &:hover {
                                color: #DC302E;
                            }
                        }
                        .btn-next {
                            border-left: 1px solid #EAEAEA;
                            border-radius: 5px;
                            &:hover {
                                color: #DC302E;
                            }
                        }
                        .el-pager {
                            li {
                                margin: 0 5px;
                                border-left: 1px solid #EAEAEA;
                                border-right: 1px solid #EAEAEA;
                                border-radius: 5px; // color: #999;
                                &:hover {
                                    color: #DC302E;
                                }
                            }
                            .active {
                                background: #DC302E;
                                border-color: #DC302E;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>