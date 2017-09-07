<template>
    <div class="s_main">
        <ul class="sidebar_list">
            <li class="s_item" v-for="(item,index) in listData[0].data" :key="index">
                <div class="s_box" @click="revampShowStatus(index)">
                    <span class="s_title">{{item.dataTitle}}</span>
                    <img class="s_img" :class="{'s_img_transform':item.showStatus}" src="../../assets/img/ic_arrows_up_1.png">
                </div>
                <ul class="s_next_list" v-show="item.showStatus">
                    <li class="next_item" v-for="(nextItem,index) in item.nextlist" :class="{'next_item_color':nextItem.nextName == sideBarActiveStatus.stautsName}" :key="index">
                        <router-link :to="{name:`${nextItem.routerUrl}`,params:{navNmae:nextItem.nextName,moduleName:listData[0].moduleName}}">{{nextItem.nextName}}</router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default ({
    data() {
        return {
            listData: '',
            userSidNav: [{
                moduleName: '用户中心',
                data: [{
                    dataTitle: "安全中心",
                    showStatus: true,
                    nextlist: [
                        {
                            nextName: '安全设置',
                            routerUrl: 'security',
                        },
                        // {
                        //     nextName: '安全策略',
                        //     routerUrl: 'policy',
                        // },
                        {
                            nextName: '安全记录',
                            routerUrl: 'record',
                        }]
                }, {
                    dataTitle: "用户中心",
                    showStatus: true,
                    nextlist: [
                        {
                            nextName: '基本信息',
                            routerUrl: 'basicInfo',
                        },
                        {
                            nextName: '实名认证',
                            routerUrl: 'verified',
                        },
                        {
                            nextName: '获奖信息',
                            routerUrl: 'winmsg',
                        }
                        ,
                        {
                            nextName: '我的信息',
                            routerUrl: 'mymessage',
                        }]
                }]
            }],
            bitcionSidNav: [{
                moduleName: '充值提现',
                data: [
                    {
                        dataTitle: "唐卡交易区",
                        showStatus: true,
                        nextlist: [
                            {
                                nextName: '人民币现贷',
                                routerUrl: 'bitcoin',
                            },
                            {
                                nextName: '唐卡现贷',
                                routerUrl: 'thangkaloan',
                            },
                            {
                                nextName: '空头交易',
                                routerUrl: 'shortAccount',
                            }]
                    }, {
                        dataTitle: "充值提现",
                        showStatus: true,
                        nextlist: [
                            {
                                nextName: '人民币',
                                routerUrl: 'rmb',
                            },
                            {
                                nextName: '唐卡',
                                routerUrl: 'tangka',
                            },
                            {
                                nextName: '资金账户管理',
                                routerUrl: 'regaccount',
                            }]
                    }
                ]
            }]
        }
    },
    created() {
        console.log(JSON.stringify(this.sideBarActiveStatus));
        let sideNavNam = this.sideNavNam;
        console.log(sideNavNam);
        if (sideNavNam == '用户中心') {
            this.listData = this.userSidNav;
        } else if (sideNavNam == '充值提现') {
            this.listData = this.bitcionSidNav;
        }
    },
    props: [
        'sideBarActiveStatus',
        'sideNavNam'  //侧导航栏参数
    ],
    methods: {
        revampShowStatus(index) {
            this.listData[0].data[index].showStatus = !this.listData[0].data[index].showStatus;
        }
    }

})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.s_main {
    width: 170px;
    height: 760px;
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