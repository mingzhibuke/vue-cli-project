<template>
    <div class="data_module_warp">
        <div class="module_head">
            <div class="msg">
                <div class="box">
                    <img class="msg_img" src="../../assets/img/ic_horn.png">
                    <span>温馨提示:</span>
                </div>
                数字资产是创新的投资产品，价格波动比较大，具有较高的投资风险，请您投资前对数字资产充分认知，理性判断自己的投资能力，审慎做出投资决策
            </div>
            <div class="title">
                交易行情
            </div>
            <div class="column">
                <ul class="column_list">
                    <li class="items" @click="selectedActive(0)" :class="{'items_color':selectedStatus === 0}">
                        <el-tooltip class="item" effect="dark" content="功能尚未开通" placement="top">
                            <div class="box">比特币BTC
                                <img v-if="selectedStatus === 0" src="../../assets/img/bitebi_1.png">
                                <img v-else src="../../assets/img/bitebi_2.png">
                            </div>
                        </el-tooltip>
                    </li>
                    <li class="items" @click="selectedActive(1)" :class="{'items_color':selectedStatus === 1}">
                        <div class="box">唐卡TKC
                            <img v-if="selectedStatus === 1" src="../../assets/img/laite_1.png">
                            <img v-else src="../../assets/img/laite_2.png">
                        </div>
                    </li>
                    <li class="items" @click="selectedActive(2)" :class="{'items_color':selectedStatus === 2}">
                        <el-tooltip class="item" effect="dark" content="功能尚未开通" placement="top">
                            <div class="box">莱特币LTC
                                <img v-if="selectedStatus === 2" src="../../assets/img/tangka_1.png">
                                <img v-else src="../../assets/img/tangka_2.png">
                            </div>
                        </el-tooltip>
                    </li>
                </ul>
            </div>
            <div class="data_table">
                <div class="data_head_list">
                    <ul class="list">
                        <li class="items">
                            24H成交量
                            <img src="../../assets/img/logo_tkc_black.png">
                            <span class="nummber">{{TKCvals.trade_amount}}</span>
                        </li>
                        <li class="items">
                            24H成交笔数
                            <span class="nummber">{{TKCvals.trade_count}}</span>
                        </li>
                        <li class="items">
                            每笔成交量
                            <span class="nummber">{{TKCvals.avg_amount}}</span>
                        </li>
                    </ul>
                    <ul class="sub_list">
                        <li class="price-box">
                            <span class="icon">￥</span>
                            <span class="nummber">4.98</span>
                            <img src="../../assets/img/ic_arrows_green_thin.png">
                        </li>
                        <li class="price-box">
                            最低价
                            <span class="icon">￥</span>
                            <span class="nummber">{{TKCvals.min_price}}</span>
                        </li>
                        <li class="price-box">
                            最高价
                            <span class="icon icon_color_red">￥</span>
                            <span class="nummber nummber_color_red">{{TKCvals.max_price}}</span>
                        </li>
                        <li class="price-box">
                            涨跌
                            <span class="nummber nummber_color_red">{{TKCvals.rise_fall}}</span>
                        </li>
                        <li class="total_box">
                            当日均价:
                            <span class="nummber">{{TKCvals.avg_price}}</span>
                        </li>
                    </ul>
                </div>
                <div class="fix">
                    <div class="sub_flasg">
                        <graphic-Display></graphic-Display>
                    </div>
                    <div class="sub_tx">
                        <div class="tx_title_text">
                            <span class="d_msg">买卖盘</span>
                            <div class="index_depth">
                                <div class="depth_info_text" v-on:mouseenter="padingTolistShow()" v-on:mouseleave="padingTolistHide()">
                                    深度
                                    <span class="nummber">0</span>
                                    <img :class="{'transform90':padingListStatus}" src="../../assets/img/ic_arrows_down_2.png">
                                    <ul class="change_depth" v-show="padingListStatus">
                                        <li v-for="(item,index) in padingToMaxVal" :key="index" @click="paddingActive(index+1)">{{index+1}}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="user_data">
                            <ul class="list seller_list" v-show="sellerData.length>0">
                                <li class="item" v-for="(seller,index) in sellerData" :key="index">
                                    <span class="tx_left">卖{{sellerData.length-index}}</span>
                                    <span class="tx_text">￥&nbsp;{{seller.price}}</span>
                                    <span class="tx_right">{{seller.amount}}</span>
                                </li>
                            </ul>
                            <ul class="list seller_list" v-show="!sellerData.length>0">
                                <li class="item" v-for="(seller,index) in 5" :key="index">
                                    <span class="tx_left">卖{{5-index}}</span>
                                    <span class="tx_text">￥&nbsp;--</span>
                                    <span class="tx_right">--</span>
                                </li>
                            </ul>
                            <ul class="list buyers_list" v-show="buyersData.length>0">
                                <li class="item item_red" v-for="(buyers,index) in buyersData" :key="index">
                                    <span class="tx_left">买{{index+1}}</span>
                                    <span class="tx_text">￥&nbsp;{{buyers.price}}</span>
                                    <span class="tx_right">{{buyers.amount}}</span>
                                </li>
                            </ul>
                            <ul class="list buyers_list" v-show="!buyersData.length>0">
                                <li class="item item_red" v-for="(buyers,index) in 5" :key="index">
                                    <span class="tx_left">买{{index+1}}</span>
                                    <span class="tx_text">￥&nbsp;--</span>
                                    <span class="tx_right">--</span>
                                </li>
                            </ul>
                        </div>
                        <div class="complate_data">
                            <div class="com_title">实时成交</div>
                            <ul class="complate_list" v-show="records.length>0">
                                <li class="item item_red" v-for="(record,index) in records" :key="index">
                                    <span class="tx_left">{{record.ticks | timeFormmatter('HH:mm:ss')}}</span>
                                    <span class="tx_text">￥&nbsp;{{record.price}}</span>
                                    <span class="tx_right">{{record.amount}}</span>
                                </li>
                            </ul>
                            <ul class="complate_list" v-show="!buyersData.length>0">
                                <li class="item item_red" v-for="(record,index) in 10" :key="index">
                                    <span class="tx_left">--:--:--</span>
                                    <span class="tx_text">￥&nbsp;--</span>
                                    <span class="tx_right">--</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    
        </div>
        <el-button :plain="true" v-show="false"></el-button>
    </div>
</template>
<script>
import graphicDisplay from './Graphicdisplay'  //图表展示
import api from '../../api/api'
import timeFormmatter from '../../filters/timestampFormatter'
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
    data() {
        return {
            selectedStatus: 1,
            sellerData: [
            ],
            buyersData: [
            ],
            sellerToAll: [
            ],
            buyerToAll: [
            ],
            records: [
            ],
            intervalifunction: '', //设置循环
            padingToMaxVal: 0,  //设置最大深度值
            padingListStatus: false, //判断深度分页显示与隐藏
            ws: function () { }, //websocket 实例
            lockReconnect: '', //避免重复连接
            wsUrl: 'ws://192.168.11.247:9002/ws/?token=' + Math.random() + '&room=1234',  //请求的地址
            timeout: 100000, //心跳测试
            timeoutObj: null //
        }
    },
    created() {
        this.intervalifunction = setInterval(() => {
            this.dataListApi();  //请求数据接口
        }, 3000);
        // console.log(this.TKC);
        // this.overView();
        // this.createWebSocket(this.wsUrl);
    },
    computed: {
        ...mapGetters({
            navActiveStatus: 'navActiveStatus',  //点击导航菜单状态
            loginSuccess: 'loginSuccess', //登录得信息
            authHeaderSt: 'auth_header_st',  //存储的st值
            BTCvals: 'BTCvals',
            TKCvals: 'TKCvals',
            LTCvals: 'LTCvals'
        }),
    },
    methods: {
        ...mapMutations({
            navListActive: types.HAEDER_ACTIVE_STATUS,//菜单栏状态切换
            loginTagfunction: types.LOGIN_TAG_REGISTER, //登录 注册状态切换
            revampPopupStatus: 'revampPopupStatus', //登录 注册 弹出框设置  登录  登出 设置状态
            BTCval: 'BTCval', //存储数据
            TKCval: 'TKCval',
            LTCval: 'LTCval'
        }),
        selectedActive(index) {
            this.selectedStatus = 1;
        },
        // createWebSocket(url) {  //webscoket配置请求开始
        //     try {
        //         this.ws = new WebSocket(url);
        //         this.initEventHandle();
        //     } catch (e) {
        //         this.reconnect(url);
        //     }
        // },
        // initEventHandle() {
        //     var self = this;
        //     this.ws.onclose = function () {
        //         self.reconnect(this.wsUrl);
        //     };
        //     this.ws.onerror = function () {
        //         self.reconnect(this.wsUrl);
        //     };
        //     this.ws.onopen = function () {
        //         //心跳检测重置
        //         //console.log("连接打开...")
        //         self.reset();
        //         this.timeoutObj = setInterval(function () {
        //             //这里发送一个心跳，后端收到后，返回一个心跳消息，
        //             //onmessage拿到返回的心跳就说明连接正常
        //             // console.log("发送心跳包...")
        //             // console.log(self.ws);
        //             //发送心跳信息
        //             self.ws.send('{"code":"1","data":{"ping":"xxx"}}');
        //         }, this.timeout)
        //     };
        //     this.ws.onmessage = function (event) {
        //         //如果获取到消息，心跳检测重置
        //         //拿到任何消息都说明当前连接是正常的
        //         //console.log(event)
        //         var data = event.data;
        //         console.log(data);
        //     }
        // },
        // reconnect(url) {
        //     var self = this;
        //     if (this.lockReconnect) return;
        //     this.lockReconnect = true;
        //     //没连接上会一直重连，设置延迟避免请求过多
        //     setTimeout(function () {
        //         self.createWebSocket(url);
        //         self.lockReconnect = false;
        //     }, 500);
        // },
        // reset() {   //webscoket 结束
        //     clearTimeout(this.timeoutObj);
        //     return this;
        // },
        dataListApi() {
            api.get('/v1/market/tape/trades')
                .then(res => {
                    if (res.data.code == 200) {
                        this.sellerToAll = res.data.data.sells;
                        this.buyerToAll = res.data.data.buys;
                        this.records = res.data.data.records;
                        this.paddingActive(0);
                        if (this.buyerToAll.length > this.sellerToAll.length) {
                            this.pagingTab(this.buyerToAll);
                        } else if (this.sellerToAll.length > this.buyerToAll.length) {
                            this.pagingTab(this.sellerToAll);
                        } else if (this.sellerToAll.length == this.buyerToAll.lengt) {
                            this.pagingTab(this.sellerToAll);
                        };
                    } else {
                        this.$message.error('数据请求失败!');
                    }

                }).catch(err => {
                    // this.$message.error('数据请求失败!');
                })
        },
        padingTolistShow() {  //移入
            this.padingListStatus = true;
        },
        padingTolistHide() { //移出
            this.padingListStatus = false;
        },
        pagingTab(val) {  //保存最大深度值 买入和卖出做判断
            var r = /^[+-]?[1-9]?[0-9]*\.[0-9]*$/;
            let padingNummber = val.length / 5;
            console.log(padingNummber);
            if (r.test(padingNummber)) {
                if (Math.ceil(padingNummber) == 1) {
                    this.padingToMaxVal = 0;
                } else {
                    this.padingToMaxVal = Math.ceil(padingNummber);
                };
            } else {
                if (padingNummber == 0 || padingNummber == 1) {
                    this.padingToMaxVal = 0;
                } else {
                    this.padingToMaxVal = padingNummber - 1;
                };
            }
        },
        paddingActive(val) {  //深度判断当前分页值  显示的买入和卖出的分页值
            let newbuyerlist = this.dataArrayslice(this.buyerToAll);
            newbuyerlist[val] ? this.buyersData = newbuyerlist[val] : this.buyersData = [];
            let newsellerlist = this.dataArrayslice(this.sellerToAll);
            newsellerlist[val] ? this.sellerData = newsellerlist[val].reverse() : this.sellerData = [];
        },
        dataArrayslice(val) {  //平均分成几份数据
            var result = [];
            for (var i = 0, len = val.length; i < len; i += 5) {
                result.push(val.slice(i, i + 5));
            };
            return result;
        },
        // overView() {  //图表数据
        //     api.get(`/v1/market/real-info?ticks=${new Date().getTime()}`)
        //         .then(res => {
        //             console.log(JSON.stringify(res));
        //         }).catch(err => {

        //         })
        // }
    },
    components: {
        graphicDisplay
    },
    filters: {
        timeFormmatter
    },
    beforeDestroy() {
        clearInterval(this.intervalifunction); //清除循环
    },
})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.data_module_warp {
    .module_head {
        width: 1170px;
        margin: 0 auto;
        background: #FFF;
        .msg {
            height: 40px;
            line-height: 40px;
            background: #DC302E;
            text-align: center;
            color: #FFF;
            font-size: 14px;
            .box {
                position: relative;
                display: inline-block;
                .msg_img {
                    position: absolute;
                    top: 12px;
                    left: -26px;
                }
            }
        }
        .title {
            font-size: 36px;
            font-weight: bold;
            text-align: center;
            padding: 40px 0;
        }
        .column {
            text-align: center;
            .column_list {
                display: inline-block;
                border-right: 1px solid #A1A9B5;
                overflow: hidden;
                .items {
                    float: left;
                    width: 200px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    font-size: 18px;
                    color: #A1A9B5;
                    border-top: 1px solid #A1A9B5;
                    border-bottom: 1px solid #A1A9B5;
                    border-left: 1px solid #A1A9B5;
                    cursor: pointer;
                    .box {
                        display: inline-block;
                        position: relative;
                        padding-left: 34px;
                        span {
                            margin-left: 20px;
                        }
                        img {
                            position: absolute;
                            top: 8px;
                            left: 0;
                        }
                    }
                }
                .items_color {
                    color: #FFF;
                    background: #DC302E;
                    border-top: 1px solid #DC302E;
                    border-bottom: 1px solid #DC302E;
                    border-left: 1px solid #DC302E;
                }
            }
        }
        .data_table {
            padding: 40px 20px;
            .data_head_list {
                border-left: 1px solid #E3E3E3;
                border-right: 1px solid #E3E3E3;
                border-top: 1px solid #E3E3E3;
                .list {
                    overflow: hidden;
                    border-bottom: 1px solid #E3E3E3;
                    .items {
                        float: left;
                        width: 33.33%;
                        text-align: center;
                        height: 74px;
                        line-height: 74px;
                        font-size: 18px;
                        color: #A1A9B5;
                        align-items: center;
                        .nummber {
                            font-size: 24px;
                            font-weight: bold;
                            color: #000;
                        }
                        img {
                            margin: 0 6px; // vertical-align: middle;
                        }
                    }
                }
                .sub_list {
                    overflow: hidden;
                    border-bottom: 1px solid #E3E3E3;
                    .price-box {
                        float: left;
                        width: 18%;
                        text-align: center;
                        height: 74px;
                        line-height: 74px;
                        font-size: 18px;
                        color: #A1A9B5;
                        box-sizing: border-box;
                        -webkit-box-sizing: border-box;
                        border-right: 1px solid #E3E3E3;

                        img {
                            margin: 0 6px;
                        }
                        .icon {
                            color: #06B944;
                            font-size: 24px;
                        }
                        .nummber {
                            color: #06B944;
                            font-size: 24px;
                        }
                        .nummber_color_red {
                            color: #DC302E;
                        }
                        .icon_color_red {
                            color: #DC302E;
                        }
                    }
                    .total_box {
                        float: left;
                        width: 28%;
                        text-align: center;
                        height: 74px;
                        line-height: 74px;
                        font-size: 18px;
                        color: #A1A9B5;
                        .nummber {
                            color: #000;
                            font-size: 24px;
                        }
                    }
                }
            }
            .fix {
                overflow: hidden;
                .sub_flasg {
                    width: 72%;
                    float: left;
                    box-sizing: border-box;
                }
                .sub_tx {
                    width: 28%;
                    float: right;
                    .tx_title_text {
                        height: 39px;
                        line-height: 39px;
                        position: relative;
                        padding: 10px;
                        .d_msg {
                            display: block;
                            font-size: 14px;
                            color: #777;
                        }
                        .index_depth {
                            position: absolute;
                            right: 10px;
                            top: 10px;
                            .depth_info_text {
                                position: relative;
                                height: 39px;
                                width: 80px;
                                line-height: 39px;
                                text-align: center;
                                font-size: 14px;
                                cursor: pointer;
                                .transform90 {
                                    transform: rotate(-180deg);
                                }
                                &:hover {
                                    box-sizing: border-box;
                                    border: 1px solid #E3E3E3;
                                }
                                .change_depth {
                                    position: absolute;
                                    top: 38px;
                                    left: -1px;
                                    background: #FFF; // display: none;
                                    z-index: 999;

                                    li {
                                        width: 80px;
                                        height: 39px;
                                        line-height: 39px;
                                        box-sizing: border-box;
                                        border: 1px solid #E3E3E3;
                                        text-align: center;
                                        background: #FFF;
                                        &:hover {
                                            background: #DC302E;
                                            color: #FFF;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .user_data {
                        padding: 0 10px;
                        .list {
                            border-bottom: 1px solid #E3E3E3;
                            .item {
                                height: 30px;
                                text-align: center;
                                line-height: 30px;
                                overflow: hidden;
                                font-size: 14px;
                                color: #06B944;
                                position: relative;
                                .tx_left {
                                    float: left;
                                }
                                .tx_text {
                                    position: absolute;
                                    top: 50%;
                                    left: 45%;
                                    display: inline-block;
                                    height: 30px;
                                    margin-top: -15px;
                                    line-height: 30px;
                                    color: #A1A9B5;
                                }
                                .tx_right {
                                    float: right;
                                }
                            }
                            .item_red {
                                color: #DC302E;
                            }
                        }
                    }
                    .complate_data {
                        padding: 0 10px;
                        .com_title {
                            font-size: 14px;
                            color: #777;
                            height: 40px;
                            line-height: 40px;
                        }
                        .complate_list {
                            .item {
                                height: 30px;
                                text-align: left;
                                line-height: 30px;
                                overflow: hidden;
                                font-size: 14px;
                                color: #06B944;
                                position: relative;
                                .tx_left {
                                    float: left;
                                }
                                .tx_text {
                                    position: absolute;
                                    top: 50%;
                                    left: 45%;
                                    display: inline-block;
                                    height: 30px;
                                    margin-top: -15px;
                                    line-height: 30px;
                                    color: #A1A9B5;
                                }
                                .tx_right {
                                    position: absolute;
                                    top: 50%;
                                    right: 0;
                                    display: block;
                                    height: 30px;
                                    margin-top: -15px;
                                    line-height: 30px;
                                }
                            }
                            .item_red {
                                color: #DC302E;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
