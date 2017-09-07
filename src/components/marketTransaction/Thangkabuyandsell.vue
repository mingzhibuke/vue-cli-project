<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="mc_massage_right">
          <div class="mc_content">
            <div class="mc_rate">
              <div class="mc_standard">
                <span class="mc_standard_title">费率标准</span>
              </div>
              <div class="mc_footer"> 当前费率 吃单：0.2% 挂单：0.2%</div>
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="限价" name="first">
                  <div class="mc_rate_left">
                    <div class="mc_rate_left_title">
                      <p style="float: left">可用
                        <span style="font-weight: bold;color: #DC302E;">{{usable}}</span>
                        <span style="font-size: 12px;color: #DC302E;"> CNY</span>
                      </p>
                      <P style="float: right;color:#2966A3;cursor: pointer;">立即充值</P>
                    </div>
                    <input type="text" placeholder="买入价 CTY/TKC">
                    <div class="mc_rate_left_num">
                      <P style="margin-top: 10px;margin-right: 5px">15670.93</P>
                    </div>
                    <img src="../../assets/img/oval.png" alt="" style="width: 289px;margin-left: -3px">
                    <input type="text" placeholder="买入量">
                    <div class="mc_rate_money">
                      <p style="float: left">交易额</p>
                      <p style="float: right">0.00
                        <span>CNY</span>
                      </p>
                    </div>
                    <button class="mc_rate_buy" @click="buy()">买入BTC</button>
                  </div>
                  <div class="mc_rate_right">
                    <div class="mc_rate_right_title">
                      <p style="float: left">可用
                        <span style="font-weight: bold;color: #DC302E;">{{usable}}</span>
                        <span style="font-size: 12px;color: #DC302E;"> CNY</span>
                      </p>
                      <P style="float: right;color:#2966A3; cursor: pointer;">立即充值</P>
                    </div>
                    <form action="">
                      <input type="text" placeholder="卖出价 CTY/TKC">
                      <div class="mc_rate_right_num">
                        <P style="margin-top: 10px;margin-right: 5px">132343</P>
                      </div>
                      <img src="../../assets/img/oval.png" alt="" style="width: 289px;margin-left: -5px">
                      <input type="text" placeholder="卖出量 TKC">
                      <div class="mc_rate_money">
                        <p style="float: left">交易额</p>
                        <p style="float: right">0.00
                        <span>CNY</span>
                        </p>
                      </div>
                      <input type="submit" class="mc_rate_sale" value="卖出BTC"></input>
                    </form>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="市价" name="second">
                  <div class="mc_rate_left">
                    <div class="mc_rate_left_title">
                      <p style="float: left">可用
                        <span style="font-weight: bold;color: #DC302E;">{{usable}}</span>
                        <span style="font-size: 12px;color: #DC302E;"> CNY</span>
                      </p>
                      <P style="float: right;color:#2966A3;cursor: pointer;">立即充值</P>
                    </div>
                    <input type="text" placeholder="以市场上最优价格买入">
                    <div class="mc_rate_left_num">

                      <el-tooltip placement="top-start" effect="light"  >
                        <div slot="content">当使用市价买入时，系统会根据您预留的金额<br/>在市场上从低到高进行扫单，直至金额用完为止。</div>
                        <el-button>[ ? ]</el-button>
                      </el-tooltip>
                    </div>
                    <img src="../../assets/img/oval.png" alt="" style="width: 289px;margin-left: -3px">
                    <input type="text" placeholder="交易额CNY">
                    <div class="mc_rate_money">
                      <p style="float: left">交易额</p>
                      <p style="float: right">0.00
                        <span>CNY</span>
                      </p>
                    </div>
                    <button class="mc_rate_buy" @click="buy()">买入BTC</button>
                  </div>
                  <div class="mc_rate_right">
                    <div class="mc_rate_right_title">
                      <p style="float: left">可用
                        <span style="font-weight: bold;color: #DC302E;">{{usable}}</span>
                        <span style="font-size: 12px;color: #DC302E;"> CNY</span>
                      </p>
                      <P style="float: right;color:#2966A3; cursor: pointer;">立即充值</P>
                    </div>
                    <form action="">
                      <input type="text" placeholder="以市场上最优价格卖出">
                      <div class="mc_rate_right_num">
                        <el-tooltip placement="top-start" effect="light"  >
                          <div slot="content">当使用市价卖出时，系统会根据您预留的数量在<br/>市场上从高到低进行扫单，直至TKC卖完为止。</div>
                          <el-button>[ ? ]</el-button>
                        </el-tooltip>
                      </div>
                      <img src="../../assets/img/oval.png" alt="" style="width: 289px;margin-left: -5px">
                      <input type="text" placeholder="卖出量 TKC">
                      <div class="mc_rate_money">
                        <p style="float: left">交易额</p>
                        <p style="float: right">0.00
                        <span>CNY</span>
                        </p>
                      </div>
                      <input type="submit" class="mc_rate_sale" value="卖出BTC"></input>
                    </form>
                  </div>
                </el-tab-pane>
              </el-tabs>
            </div>
            <!--深度交易和首页一样,直接调用-->
            <div class="mc_plan">
              <div class="mc_plan_title">
                <p style="float: right">闪电手|计划交易</p>
              </div>
              <div class="mc_plan_new">
                <p style="float: left;color: #999;"> 最新价
                  <span style="color: #DC302E">¥</span>
                  <span style="color: #DC302E">{{recent}}</span>
                  <img src="../../assets/img/ic_arrows_red_thin.png" alt="">
                </p>
                <div class="index_deep">
                  <div style="float: right" class="mc_deep" v-on:mouseenter="padingTolistShow()"
                       v-on:mouseleave="padingTolistHide()">深度
                  <span>0</span>
                    <img :class="{'transform90':padingListStatus}" src="../../assets/img/ic_arrows_down_2.png" alt="">
                    <ul class="change_deep" v-show="padingListStatus">
                      <li v-for="(item,index) in padingToMaxVal" :key="index" @click="paddingActive(index+1)">
                        {{index + 1}}

                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!--卖出-->
              <ul class="mc_plan_content" v-show="sellerData.length>0">
                <li v-for="(seller,index) in sellerData" :key="index">
                  <p class="mc_sale" style="color: #06B944">卖{{sellerData.length - index}}</p>
                  <p class="mc_sale_num">
                    <span>¥</span>
                    <span>{{seller.price}}</span>
                  </p>
                  <span style="float: right;color:#06B944 ">{{seller.amount}}</span>
                </li>
              </ul>
              <ul class="mc_plan_content" v-show="!sellerData.length>0">
                <li v-for="(seller,index) in 5" :key="index">
                  <p class="mc_sale">卖{{5 - index}}</p>
                  <p class="mc_sale_num">
                    <span>¥</span>
                    <span>--</span>
                  </p>
                  <span style="float: right;color:#06B944 ">--</span>
                </li>
              </ul>
              <!--买入-->
              <ul class="mc_plan_content" v-show="buyersData.length>0" style="border: none;margin-top: 10px">
                <li v-for="(buyers,index) in buyersData" :key="index">
                  <p class="mc_sale" style="color:#DC302E;">买{{index + 1}}</p>
                  <p class="mc_sale_num">
                    <span>¥</span>
                    <span>{{buyers.price}}</span>
                  </p>
                  <span style="float: right;color:#06B944 ">{{buyers.amount}}</span>
                </li>
              </ul>
              <ul class="mc_plan_content" v-show="!buyersData.length>0" style="border: none;margin-top: 10px">
                <li v-for="(buyers,index) in 5" :key="index">
                  <p class="mc_sale">买{{index + 1}}</p>
                  <p class="mc_sale_num">
                    <span>¥</span>
                    <span>--</span>
                  </p>
                  <span style="float: right;color:#06B944 ">--</span>
                </li>
              </ul>
            </div>
            <div class="mc_entrust">
              <div class="mc_title">
                <p class="mc_norm"> 当前委托
                  <span>(0)</span>
                </p>
                <!--<p class="mc_pack" @click="pack_up">收起-->
                  <!--<img :class="{'transform90': isActive}" src="../../assets/img/ic_arrows_down_2.png" alt="">-->
                <!--</p>-->
              </div>
              <div style="clear: both"></div>
              <table class="mc_entrust_content" v-loading="loading">
                <thead >
                <tr>
                  <td>委托时间</td>
                  <td>类型</td>
                  <td>来源</td>
                  <td>委托价格(¥)</td>
                  <td>委托数</td>
                  <td>委托数量(个)</td>
                  <td>状态</td>
                  <td>操作</td>
                </tr>
                </thead>
                <tr v-for="(item,index)  in  dataToatable" :key="index" v-if="!modal.show">
                  <td>{{item.time_text}}</td>
                  <td class="mc_types_font_color_red" :class="{'mc_types_font_color_green':item.type== -1}">
                    {{item.type == 1 ? '买入' : item.type == -1 ? '卖出' : '未知'}}
                  </td>
                  <td>{{item.price > 0 ? '限价交易' : '市价交易'}}</td>
                  <td>{{item.price}}</td>
                  <td>{{item.amount}}</td>
                  <td>{{item.remain}}</td>
                  <td>{{item.state}}</td>
                  <td>{{item.state == 0 || item.state == 2 ? '撤单' : '--'}}</td>
                </tr>
              </table>
              <div class="mc_block"  v-if="!modal.show">
                <el-pagination layout="prev, pager, next" :total='total' @current-change="handleCurrentChange">
                </el-pagination>
              </div>
              <div class="mc_footer_p" v-show="!dataToatable.length>0">
                <img src="../../assets/img/img_place_2.png" alt="">
                <p>你还没有相关记录!</p>
              </div>
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
  import sideBar from '../../publicComponents/securitycenterPublic/Sidetransaction'  //侧栏菜单组件
  import myFooter from '../../publicComponents/Footer'  //底部组件
  import api from '../../api/api'
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {
        modal:{
           show:false,
        } ,
        isActive:false,
        // 可用CNY
        usable: '',
        //加载
        loading: true,
        //列表数据
        dataToatable: [],
        total: 1,
        activeName: 'first',
        sideBarActiveStatus: {
          stautsName: 'buyandsell',
          // StautsNav: 0
        },
        sellerData: [  //卖出参数
        ],
        buyersData: [ //买入参数
        ],
        sellerToAll: [],//获取所有卖出参数
        buyerToAll: [],
        padingToMaxVal: 0,  //设置最大深度值
        padingListStatus: false, //判断深度分页显示与隐藏
        //tkc最新价格
        recent:''
      }
    },
    created() {
        //最
      api.get('/v1/market/ticker/tkc').then(res=>{
        this.recent=res.data.data.price
      }).catch(res=>{})


//        可用CNY
      api.get('/v1/user/user-account').then(res=>{
         this.usable=res.data.data.cny_available
      })
      this.oneToData();
      this.intervalifunction = setInterval(() => {
        this.dataListApi();
      }, 3000);
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
      handleCurrentChange(val){
          console.log(val)
        api.get(`/v1/trade/current-delegates?offset=${(val - 1) * 10}&limit=10`).then(res => {
          if (res.data.code == 200) {
            this.total = (res.data.data.total / 10) * 10;
            this.dataToatable = res.data.data.list;
            this.dataToatable.forEach(function (item) {
              if (item.state == -2) {
                item.state = "撤单中"
              } else if (item.state == -1) {
                item.state = "提交中"
              } else if (item.state == 0) {
                item.state = "委托中"
              } else if (item.state == 2) {
                item.state = "部分提交"
              }
              return;
            });
          }
        }).catch(err => {

        })
      },
      oneToData(){
        api.get('/v1/trade/current-delegates').then(res => {
          if (res.data.code == 200) {
            this.loading = false
            this.total = (res.data.data.total / 10) * 10;
            this.dataToatable = res.data.data.list;
            this.dataToatable.forEach(function (item) {
              if (item.state == -2) {
                item.state = "撤单中"
              } else if (item.state == -1) {
                item.state = "提交中"
              } else if (item.state == 0) {
                item.state = "委托中"
              } else if (item.state == 2) {
                item.state = "部分提交"
              }
              return;
            });
          }
        }).catch(err => {

        })
      },
      buy(){
        api.post('v1/trade/buy', {}).then(res => {
          let self = res.data
          if (self.code == 500) {
            console.log(self)
          }
        })
      },
      dataListApi() {
        api.get('/v1/market/tape/trades')
          .then(res => {
            if (res.data.code == 200) {
              this.sellerToAll = res.data.data.sells;
              this.buyerToAll = res.data.data.buys;
              this.records = res.data.data.records;
              this.loading2 = false
              this.paddingActive(0);
              if (this.buyerToAll.length > this.sellerToAll.length) {
                this.pagingTab(this.buyerToAll);
              } else if (this.sellerToAll.length > this.buyerToAll.length) {
                this.pagingTab(this.sellerToAll);
              } else if (this.sellerToAll.length == this.buyerToAll.lengt) {
                this.pagingTab(this.sellerToAll);
              }
              ;
            } else {
              // this.$message.error('数据请求失败!');
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
          }
          ;
        } else {
          if (padingNummber == 0 || padingNummber == 1) {
            this.padingToMaxVal = 0;
          } else {
            this.padingToMaxVal = padingNummber - 1;
          }
          ;
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
        }
        ;
        return result;
      },


    },
    beforeDestroy() {
      clearInterval(this.intervalifunction); //清除循环
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
  .transform90 {
    transform: rotate(-180deg);
  }
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
      .mc_massage_right {
        float: right;
        width: 970px;
        background: #FFF;
        height: 1098px;
      }
    }

    .mc_content {
      padding-left: 20px;
      width: 950px;
      height: 915px;
      background-color: #ffffff;
      .el-button {
         border: none;
         color:#DC302E;
         margin-top: 1px;
      }
      .mc_rate {
        color: #A1A9B5;
        float: left;
        width: 615px;
        height: 344px;
        position: relative;
        .mc_footer {
          position: absolute;
          color: #999999;
          bottom: -64px;
          right: 0;
          font-size: 12px;
        }
        .mc_standard {
          position: absolute;
          right: 0;
          top: 14px;
          width: 90px;
          height: 16px;
          text-align: center;
          .mc_box {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-color: #d8d8d8;
          }
          .mc_standard_title {
            color: #dc302e;
            line-height: 20px;
            float: right;
          }
        }
        .el-tabs__active-bar {
          background-color: #DC302E;
        }
        .el-tabs__header {
          margin: 0;
        }
        .el-tabs__item.is-active {
          color: #DC302E;
          font-weight: bold;
        }
        .mc_rate_left {
          position: relative;
          width: 306px;
          height: 312px;
          border-right: 2px dashed #E5E5E5;
          margin-top: 18px;
          float: left;
          .mc_rate_left_title {
            padding-bottom: 10px;
            font-size: 14px;
            width: 276px;
            border-bottom: 1px solid #DDDDDD;
            overflow: hidden;
          }
          ::-webkit-input-placeholder {
            font-size: 12px;
            color: #ccc;
          }
          input {
            width: 266px;
            height: 34px;
            border: 1px solid #DDDDDD;
            margin: 20px auto;
            padding-left: 10px;
          }
          .mc_rate_left_num {
            position: absolute;
            color: #000;
            right: 29px;
            top: 50px;
            font-size: 12px;
          }
          .mc_rate_money {
            border: 1px dashed #DDDDDD;
            width: 256px;
            height: 46px;
            font-size: 12px;
            color: #000;
            padding: 10px 10px 0 10px;
          }
          .mc_rate_buy {
            width: 278px;
            height: 38px;
            background: #DC302E;
            text-align: center;
            margin-top: 20px;
            line-height: 38px;
            color: #fff;
            cursor: pointer;
          }
        }
        .mc_rate_right {
          position: relative;
          width: 278px;
          height: 320px;
          margin-left: 27px;
          margin-top: 18px;
          float: left;
          .mc_rate_right_title {
            padding-bottom: 10px;
            font-size: 14px;
            width: 276px;
            border-bottom: 1px solid #DDDDDD;
            overflow: hidden;
          }
          ::-webkit-input-placeholder {
            font-size: 12px;
            color: #ccc;
          }
          input {
            width: 266px;
            height: 34px;
            border: 1px solid #DDDDDD;
            margin: 20px auto;
            padding-left: 10px;
          }
          .mc_rate_right_num {
            position: absolute;
            color: #000;
            right: 1px;
            top: 50px;
            font-size: 12px;
          }
          .mc_rate_money {
            border: 1px dashed #DDDDDD;
            width: 256px;
            height: 46px;
            font-size: 12px;
            color: #000;
            padding: 10px 10px 0 10px;
          }
          .mc_rate_sale {
            width: 278px;
            height: 38px;
            background: #06B944;
            text-align: center;
            margin-top: 20px;
            line-height: 38px;
            color: #fff;
            cursor: pointer;
          }
        }
      }
      .mc_plan {
        float: left;
        width: 260px;
        height: 370px;
        margin-left: 25px;
        padding-left: 25px;
        .mc_plan_title {
          border-bottom: 1px solid #DDDDDD;
          width: 259px;
          height: 40px;
          line-height: 40px;
          color: #DC302E;
        }
        .mc_plan_new {
          border-bottom: 1px solid #DDDDDD;
          height: 46px;
          line-height: 56px;
          .mc_deep {
            position: relative;
            margin-top: 10px;
            height: 38px;
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
              .change_deep {
                display: block;
              }
            }
            .change_deep {
              position: absolute;
              top: 38px;
              left: -1px;
              background: #FFF;
              display: none;
              li {
                width: 80px;
                height: 39px;
                line-height: 39px;
                box-sizing: border-box;
                border: 1px solid #E3E3E3;
                text-align: center;
                &:hover {
                  background: #DC302E;
                  color: #FFF;
                }
              }
            }
          }
        }
        .mc_plan_content {
          border-bottom: 1px solid #DDDDDD;
          width: 260px;
          float: left;
          height: 140px;
          font-size: 12px;
          margin-top: 1px;
          li {
            width: 260px;
            height: 29px;
            .mc_sale {
              float: left;
              width: 30px;
            }
            .mc_sale_num {
              float: left;
              width: 120px;
              margin-left: 45px;
            }
          }
        }
      }
      .mc_entrust {
        width: 927px;
        height: 440px;
        float: right;
        margin-top: 70px;
        padding-right: 22px;
        .mc_footer_p {
          position: relative;
          top: 20%;
          color: #9A9A9A;
          left: 42%;
          p {
            padding-left: 30px;
          }
        }
        .mc_title {
          height: 34px;
          border-bottom: 1px solid #F2F2F2;
          line-height: 34px;
          font-size: 16px;
          color: #DC302E;
          .mc_norm {
            float: left;
            border-bottom: 2px solid #DC302E;
          }
          .mc_pack {
            float: right;
            color: #999999;
            cursor: pointer;
          }
        }

        .mc_entrust_content {
          text-align: center;
          width: 927px;
          .mc_types_font_color_red {
            color: #DC302E;
          }
          .mc_types_font_color_green {
            color: #06B944;
          }

          td {
            font-size: 12px;
            height: 50px;
            color: #666666;

            .mc_click {
              width: 12px;
              height: 12px;
              background-color: #D8D8D8;
            }
          }
        }
      }
      .mc_block {
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
</style>
