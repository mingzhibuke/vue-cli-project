<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="oyj_s_massage_right">
          <div class="o_head">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="TKC行情图" name="first">
                <div class="o_data_head_list">
                  <ul class="o_sub_list">
                    <li class="o_price-box">
                      实时行情
                      <span class="o_icon">￥ </span>
                      <span class="o_nummber">{{btchq.price}} ↑</span>
                    </li>
                    <li class="o_price-box">
                      最低价
                      <span class="o_icon">￥</span>
                      <span class="o_nummber">{{btchq.min_price}}</span>
                    </li>
                    <li class="o_price-box">
                      最高价
                      <span class="o_icon o_icon_color_red">￥</span>
                      <span class="o_nummber o_nummber_color_red">{{btchq.max_price}}</span>
                    </li>
                    <li class="o_total_box">
                      24小时成交量:
                      <span class="o_nummber" style="font-size: 24px;">{{btchq.trade_amount}}</span>
                    </li>
                  </ul>
                </div>
                <div class="y_market">
                  <el-tabs v-model="activeName1" type="card" @tab-click="handleClick">
                    <el-tab-pane label="分时" name="first">走势图没有内容不能撑开1</el-tab-pane>
                    <el-tab-pane label="日线" name="second">走势图没有内容不能撑开2</el-tab-pane>
                  </el-tabs>
                </div>
                <div class="ou_list">
                  <ul class="oyj_list">
                    <li>买卖盘</li>
                    <li>实时成交</li>
                  </ul>
                </div>
                <div class="datalist-box">
                  <ul >
                    <li style="float: left">
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr class="cl">
                          <td width="50"></td>
                          <td width="138">买入量</td>
                          <td width="138">买入价</td>
                          <td width="138">卖出量</td>
                          <td width="138">卖出价</td>
                        </tr>
                        <tr v-for="(item,index) in sellandbuydata" :key="index">
                          <td style="background:#f8f8f8;text-align:center">{{index + 1}}</td>
                          <td style="color: red;padding-left: 10px;">{{item.buyamount}}</td>
                          <td style="border-right: 1px solid #A1A9B5"><span style="padding-right: 5px;">￥</span>{{item.buyprice}}</td>
                          <td style="color: green;padding-left: 10px;">{{item.sellamount}}</td>
                          <td><span style="padding-right: 5px;">￥</span>{{item.sellprice}}</td>
                        </tr>
                      </table>
                    </li>
                    <li>
                      <table border="0" cellpadding="0" cellspacing="0">
                        <tr class="cl">
                          <td width="90">时间</td>
                          <td width="90">价格</td>
                          <td width="90">数量</td>
                        </tr>
                        <tr v-for="(item,index) in timess " :key="index">
                          <td style="color: #909090">{{item.ticks | timeFormmatter('HH:mm:ss')}}</td>
                          <td style="color: #909090;">{{item.price}}</td>
                          <td style="color: green">{{item.amount}}↓</td>
                        </tr>
                      </table>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
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
  import sideBar from '../../publicComponents/securitycenterPublic/Sidetransaction'  //侧栏菜单组件
  import myFooter from '../../publicComponents/Footer'  //底部组件
  import api from '../../api/api'
  import timeFormmatter from '../../filters/timestampFormatter'
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {
        activeName: 'first',
        activeName1: 'first',
        btchq: Number,
        sellandbuydata: [],
        timess: '',
        // popupStatus: false,
        sideBarActiveStatus: {
          stautsName: 'qchart',
          // StautsNav: 0
        }
      }
    },
    created() {
      this.btc_hq();
      this.order();
    },
    computed: {
      ...mapGetters({
        loginfunction: 'loginfunction',
        loginSuccess: 'loginSuccess', //登录成功  用户信息
        popupStatus: 'popupStatus'  //弹框 注册 登录 的状态判断
      }),
    },
    methods: {
      handleClick(tab, event) {
      },
      ...mapMutations({
        loginTagfunction: types.LOGIN_TAG_REGISTER,//登录 注册状态切换
        revampPopupStatus: 'revampPopupStatus' //切换弹框显示状态值
      }),
      close() {  //关闭弹窗 登录 注册
        this.revampPopupStatus(false);
        document.documentElement.style.overflow = 'auto';
      },
      //BTC行情图
      btc_hq(){
        api.get('v1/market/ticker/tkc').then(res => {
          if (res.data.code = 200) {
            this.btchq = res.data.data;

          } else {

          }
        }).catch(err => {

        });
      },
      //买卖盘
      order(){
        api.get('v1/market/trades').then(res => {
          if (res.data.code = 200) {
            //实时成交
            this.timess = res.data.data.records;
            //卖盘
            let newSellArray = [];
            let sellArray = res.data.data.sells;
            sellArray.forEach((item) => {
              let num = {
                sellamount: '',
                sellprice: ''
              };
              num.sellamount = item.amount;
              num.sellprice = item.price;
              newSellArray.push(num);
            })
            //买盘
            let butArray = res.data.data.buys;
            butArray.forEach((item, index) => {
              newSellArray[index].buyamount = item.amount;
              newSellArray[index].buyprice = item.price;
            });
            this.sellandbuydata = newSellArray;
          } else {

          }
        }).catch(err => {

        });
      },
    },
    filters: {
      timeFormmatter
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
      .oyj_s_massage_right {
        float: right;
        width: 970px;
        background: #FFF;
        padding-bottom: 43px;
      }
      .o_head {
        margin: 25px 0 0 25px;
        width: 97%;
        .el-tabs__item {
          font-size: 14px;
          font-weight: bold;
          color: #A1A9B5;
          border:1px solid #e3e3e3;
        }
        .el-tabs__item.is-active {
          color: red;
        }
        .el-tabs__active-bar {
          background: red;
          width: 105px;
        }
        .el-tabs__header {
          width: 97%;
          margin: 0;
        }
        .el-tabs__content {
          width: 97%
        }
        .hq{margin-bottom: 30px;}
        .o_data_head_list {
          border-left: 1px solid #E3E3E3;
          border-right: 1px solid #E3E3E3;
          margin-bottom: 40px;
          .o_list {
            overflow: hidden;
            border-bottom: 1px solid #E3E3E3;
            .o_items {
              float: left;
              width: 33.33%;
              text-align: center;
              height: 74px;
              line-height: 74px;
              font-size: 18px;
              color: #A1A9B5;
              align-items: center;
              .o_nummber {
                font-size: 16px;
                font-weight: bold;
                color: #000;
              }
            }
          }
          .o_sub_list {
            overflow: hidden;
            border-bottom: 1px solid #E3E3E3;
            .o_price-box {
              float: left;
              width: 24%;
              text-align: center;
              height: 74px;
              line-height: 74px;
              font-size: 16px;;
              color: #A1A9B5;
              box-sizing: border-box;
              -webkit-box-sizing: border-box;
              border-right: 1px solid #E3E3E3;
              span{font-size: 25px;}
              span:first-child{padding-left: 10px;}
            }
            .el-tabs__item{border: 1px solid #e3e3e3;margin-right: 40px;}
            .o_icon {
              color: #06B944;
              font-size: 16px;
            }
            .o_nummber {
              color: #06B944;
              font-size: 16px;
            }
            .o_nummber_color_red {
              color: #DC302E;
            }
            .o_icon_color_red {
              color: #DC302E;
            }
          }
          .o_total_box {
            float: left;
            width: 28%;
            text-align: center;
            height: 74px;
            line-height: 74px;
            font-size: 18px;
            color: #A1A9B5;
            .o_nummber {
              color: #000;
              font-size: 16px;;
            }
          }
        }
        .y_market {
          margin-bottom: 30px;
          position: relative;
          .el-tabs__nav {
            width: 500px;
            .el-tabs__item {
              margin-right: 30px;
            }
          }
          .el-tabs__header {
            width: 100%;
            background: #F5F5F5;

          }
          span {
            font-size: 14px;
            font-weight: bold;
            color: #DC302E;
            position: absolute;
            top: 20px;
            right: 30px;
            cursor: pointer;
          }
          img {
            position: absolute;
            top: 23px;
            right: 10px;
          }
        }
        .ou_list{
          .oyj_list{
            font-size: 0;
            width: 100%;
          }
          li:first-child {
            width: 600px;
            margin-right: 40px;
          }
          li:last-child {
            width: 272px;
          }
          li {
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
            color: #DC302E;
            border-bottom: 1px solid #A1A9B5;
          }
        }
        .datalist-box {
          ul {
            font-size: 0;
            width: 100%;
          }
          li:first-child {
            width: 600px;
            margin-right: 40px;
          }
          li:last-child {
            width: 272px;
          }
          li {
            display: inline-block;
            font-size: 14px;
            font-weight: bold;
          }
          .cl {
            border-right: 0;
            border-left: 0;
          }
          tr {
            border: 1px solid #A1A9B5;
            border-top: 0;
            td {
              border: 0;
            }
          }
          td {
            height: 30px;

            line-height: 40px;
            border: 1px solid #A1A9B5;
          }
        }
      }
    }
  }
</style>
