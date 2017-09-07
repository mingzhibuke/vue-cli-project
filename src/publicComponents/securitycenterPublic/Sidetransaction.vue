<template>
    <div class="s_main_trans">
        <ul class="sidebar_list">
            <li class="s_item" v-for="(item,index) in listData[0].data" :key="index">
                <div class="s_box" @click="revampShowStatus(index)">
                    <span class="s_title">{{item.dataTitle}}</span>
                    <img class="s_img" :class="{'s_img_transform':item.showStatus}" src="../../assets/img/ic_arrows_up_1.png">
                </div>
                <ul class="s_next_list" v-show="item.showStatus">
                    <li class="next_item" v-for="(nextItem,index) in item.nextlist" :class="{'next_item_color':nextItem.routerUrl == sideBarActiveStatus.stautsName}" :key="index">
                        <router-link :to="{name:`${nextItem.routerUrl}`,params:{navNmae:nextItem.nextName,moduleName:listData[0].moduleName}}" v-if="nextItem.jumpStatus">{{nextItem.nextName}}</router-link>
                        <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right" v-else>
                            <span class="s_next_name">{{nextItem.nextName}}</span>
                        </el-tooltip>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="sidebar_list">
            <li class="s_item">
                <el-tooltip class="item" effect="dark" content="该功能正在内测,稍后开通。" placement="right">
                    <div class="s_box" @click="activeRouter()">
                        <span class="s_title">闪电交易</span>
                        <span class="s_hot">HOT</span>
                        <img class="s_hot_img" src="../../assets/img/ic_arrows_red.png">
                    </div>
                </el-tooltip>
            </li>
        </ul>
    </div>
</template>
<script>
export default ({
    data() {
        return {
            listData: [{
                moduleName: '行情交易',
                data: [
                    {
                        dataTitle: "唐卡交易",
                        showStatus: true,
                        nextlist: [
                            {
                                nextName: '买入/卖出',
                                routerUrl: 'buyandsell',
                                jumpStatus: true
                            },
                            {
                                nextName: '空头交易',
                                routerUrl: 'beartading',
                                jumpStatus: true
                            },
                            {
                                nextName: '行情图表',
                                routerUrl: 'qchart',
                                jumpStatus: true
                            },
                            {
                                nextName: '委托管理',
                                routerUrl: 'emanagement',
                                jumpStatus: true
                            },
                            {
                                nextName: '交易记录',
                                routerUrl: 'transcord',
                                jumpStatus: true
                            }]
                    }, {
                        dataTitle: "比特币交易",
                        showStatus: true,
                        nextlist: [
                            {
                                nextName: '买入/卖出',
                                routerUrl: 'btbuyandsell',
                                jumpStatus: false
                            },
                            {
                                nextName: '行情图表',
                                routerUrl: 'btqchart',
                                jumpStatus: true
                            },
                            {
                                nextName: '委托管理',
                                routerUrl: 'btemanagement',
                                jumpStatus: false
                            },
                            {
                                nextName: '交易记录',
                                routerUrl: 'bttranscord',
                                jumpStatus: false
                            }]
                    }, {
                        dataTitle: "莱特币",
                        showStatus: true,
                        nextlist: [
                            {
                                nextName: '买入/卖出',
                                routerUrl: 'ltbuyandsell',
                                jumpStatus: false
                            },
                            {
                                nextName: '行情图表',
                                routerUrl: 'ltqchart',
                                jumpStatus: true
                            },
                            {
                                nextName: '委托管理',
                                routerUrl: 'ltemanagement',
                                jumpStatus: false
                            },
                            {
                                nextName: '交易记录',
                                routerUrl: 'lttranscord',
                                jumpStatus: false
                            }]
                    }
                ]
            }]

        }
    },
    created() {
    },
    props: [
        'sideBarActiveStatus',
        'sideNavNam'  //侧导航栏参数
    ],
    methods: {
        revampShowStatus(index) {
            this.listData[0].data[index].showStatus = !this.listData[0].data[index].showStatus;
        },
        activeRouter() {
            // this.$router.push("/flashcenter");
        }
    }

})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.s_main_trans {
    width: 170px; // height: 760px;
    background: #FFF;
    .sidebar_list {
        .s_item {
            cursor: pointer;
            .s_box {
                height: 60px;
                line-height: 60px;
                overflow: hidden;
                padding: 0 16px 0 20px;
                .s_title {
                    display: inline-block;
                    font-size: 18px;
                    font-weight: bold;
                    height: 18px;
                    line-height: 18px;
                    padding-left: 4px;
                    border-left: 2px solid #DC302E;
                }
                .s_hot {
                    display: inline-block;
                    height: 16px;
                    width: 37px;
                    text-align: center;
                    line-height: 16px;
                    border-radius: 10px;
                    background: #DC302E;
                    color: #FFF;
                    font-size: 12px;
                }
                .s_hot_img {
                    float: right;
                    margin-top: 22px;
                    transform: rotate(0deg);
                }
                .s_img {
                    float: right;
                    margin-top: 25px;
                    transform: rotate(180deg);
                }
                .s_img_transform {
                    transform: rotate(0deg);
                }
            }
            .s_next_list {
                .next_item {
                    height: 48px;
                    line-height: 48px;
                    padding-left: 40px;
                    font-size: 16px;
                    color: #1C1D1F;
                    a {
                        display: block;
                        text-decoration: none;
                    }
                    &:hover {
                        background: #FFF5F5;
                        a {
                            color: #DC302E;
                        }
                    }
                    .s_next_name {
                        display: block;
                        text-decoration: none;
                    }
                }
                .next_item_color {
                    background: #FFF5F5;
                    a {
                        color: #DC302E;
                    }
                }
            }
        }
    }
}
</style>