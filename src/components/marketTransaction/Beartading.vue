<template>
  <div>
    <!--您正在进行借入100TKC，价格20元，时间3个月。 -->
    <div class="kt_hint_popup" style="display: none">
      <div class="Modify_content">
        <p class="title"> 提示</p>
        <p class="content">您正在进行借入100TKC，价格20元，时间3个月。</p>
        <div class="wk_btn">
          <button class="wk_btn_ensure">确定</button>
          <button class="wk_btn_off">取消</button>
        </div>
      </div>
    </div>
    <!--借入数量超过了拥有的tkc-->
    <div class="kt_hint_popup2" style="display: none">
      <div class="Modify_content">
        <p class="title"> 提示</p>
        <p class="content">借入数量超过了拥有的TKC数，请确保持有
        <br>借入数量的TKC再执行此操作！</p>
        <div class="wk_btn">
          <button class="wk_btn_ensure">确定</button>
        </div>
      </div>
    </div>
    <!--空头交易业务介绍-->
    <div class="kt_introduce_popup" v-if="!introduce">
      <div class="Modify_content">
        <p class="title">空头交易业务介绍</p>
        <div class="content">
          <img src="../../assets/img/btn_login_x.png" alt="" @click="introduce_close">
          <p
            style="float: left ;border-bottom: 1px solid #D6D6D6; width: 430px;text-align: start; font-size: 16px;color: #DC302E">
            交易规则</p>
          <p class="modify_content_text">
            多家区块链电子货币交易平台都曾经采用了杠杆方式，如：火币网、币行。随着央行的监管也停止了杠杆的配资方式，但是这也就缺少了平衡机制。因区块链天生的去中心化的特点，不需要杠杆的方式避免市场出现单边现象。通过交易双方的不同预期实现买空卖空的操作可以简单的实现避免市场单边现象。即光轴链的电子货币交易平台允许用户在不同的预期下进行用户间的买空卖空的操作。
            <br>
            具体规则如下：<br>
            1. 必须是具备TKC的用户；<br>
            2. 买空卖空操作属于用户双方自愿行为；<br>
            3. 买空卖空约定过程，平台不收取手续费用。但是买空卖空后的交易按平台相关规定收取相应的交易手续费用；<br>
            4. 买空卖空需要按1:1抵押TKC，不能重复抵押；<br>
            5. 买空卖空可选择周期为3个月、6个月、12个月，3档周期，可以提前偿还；<br>
            6. 买空卖空可选择价格为20元、30元、40元，3档价格；<br>
            7. 买空卖空者设定预期价格向用户借入相应的TKC，可以向多个用户借入，直至满足其买空卖空所需要的TKC数量；（不允许形成现金的借贷关系）<br>
            8. 买空卖空者所获得借出者的TKC后，在未偿清当时约定内容时，其所借入TKC交易后所获收入允许进行多次操作，但不能提现，仅能进行TKC交易。（因交易机制为标准撮合交易，所以不存在定向交易行为，从而避免资金通过买入TKC转入关联账户的作弊行为）<br>
            9. 买空卖空者向其他用户所借用的卡都有最长时间限制，最长时间不超过1年（可提前偿还）在这期间买空卖空者，可以根据市场行情随时出售TKC；<br>
            10. 买空者出售TKC后需向借出用户按约定通过平台偿还当时借入时约定价格的现金；<br>
            11. 卖空者出售TKC后所获收入与预期价格的差同借出者平分，且保留预期价格的资金在预期价格时买入，买入后退还借出者等量的TKC；<br>
            12. 超过最长期限后，平台有权利强行平仓，并退与借出者约定内容的TKC和现金。<br>
            以上规则会根据光轴链运营情况做相关调整，并会以公告形式提前告知，该业务功能的所有解释权归成都光轴科技有限公司所有。</p>
        </div>
      </div>
    </div>
    <!--请输入你要借出的TKC数量-->
    <div class="kt_lend_popup" style="display: none">
      <div class="Modify_content">
        <div class="content">
          <p style="font-size: 16px">请输入你要借出的TKC数量</p>
          <input type="text" placeholder="请输入大于等于1的整数">
          <p STYLE="font-size: 14px;margin-top: 10px">可用 :<span style="color:#DC302E ">300</span>TKC</p>
        </div>
        <div class="wk_btn">
          <button class="wk_btn_ensure">确定</button>
          <button class="wk_btn_off">取消</button>
        </div>
      </div>
    </div>
    <!--终止借入操作-->
    <div class="kt_off_popup" style="display: none">
      <div class="Modify_content">
        <div class="content">您已经借入51TKC,<br>确定要终止借入操作?</div>
        <div class="wk_btn">
          <button class="wk_btn_ensure">确定</button>
          <button class="wk_btn_off">取消</button>
        </div>
      </div>
    </div>
    <!--我的借入终止提示明细-->
    <div class="kt_loan_popup" style="display: none">
      <div class="kt_borrow">
        <div class="kt_borrow_top">
          <img src="../../assets/img/btn_login_x.png" alt="">
          <p class="kt_borrow_top_title">
            发布时间：2017/7/19 14:23:48 &emsp;&emsp; 价格档位：20元 &emsp;&emsp;约定时间：3个月
          </p>
          <div class="kt_borrow_top_content">
            <table class="kt_borrow_top_table">
              <thead>
              <tr>
                <td>借入时间</td>
                <td>借入数量</td>
                <td>到期日(剩余)</td>
                <td>操作</td>
              </tr>
              </thead>
              <tr>
                <td>2017/7/19 14:23:48</td>
                <td>2</td>
                <td>2017/7/19 14:23:48(90天)</td>
                <td>
                  <span style="border-bottom: 1px solid #DC302E;cursor: pointer;">还款</span>
                </td>
              </tr>
              <tr>
                <td>2017/7/19 17:45:20</td>
                <td>20</td>
                <td>已到期</td>
                <td>已还款</td>
              </tr>
            </table>
          </div>
        </div>
        <!--<div class="kt_borrow_bottom">-->
        <!--<img src="../../assets/img/btn_login_x.png" alt="">-->
        <!--<p class="kt_borrow_top_title">-->
        <!--发布时间：2017/7/19 14:23:48 条件：-->
        <!--<span style="">卖空</span> 价格档位：20元 约定时间：3个月-->
        <!--</p>-->
        <!--<div class="kt_borrow_top_content">-->
        <!--<table class="kt_borrow_bottom_table">-->
        <!--<thead>-->
        <!--<tr>-->
        <!--<td>借入时间</td>-->
        <!--<td>借入数量</td>-->
        <!--<td>首次卖空收益</td>-->
        <!--<td>到期日(剩余)</td>-->
        <!--<td>收款情况</td>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tr>-->
        <!--<td>2017/7/19 14:23:48</td>-->
        <!--<td>2</td>-->
        <!--<td>150元</td>-->
        <!--<td>2017/7/19 14:23:48(90天)</td>-->
        <!--<td>-->
        <!--<span style="border-bottom: 1px solid #DC302E; color: #DC302E;cursor: pointer;">还款</span>-->
        <!--<span style="color:#2966A3;border-bottom: 1px solid #2966A3;cursor: pointer; ">去买空</span>-->
        <!--</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>2017/7/19 17:45:20</td>-->
        <!--<td>20</td>-->
        <!--<td>首次卖空尚未发生</td>-->
        <!--<td>已到期</td>-->
        <!--<td>-->
        <!--<span style="border-bottom: 1px solid #DC302E; color: #DC302E;cursor: pointer;">还款</span>-->
        <!--</td>-->
        <!--</tr>-->
        <!--</table>-->
        <!--</div>-->
        <!--</div>-->
      </div>
    </div>

    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="tk_massage_right">
          <div class="tk_content">
            <el-tabs v-model="bearmarket" @tab-click="handleClick">
              <!--空头市场-->
              <el-tab-pane label="空头市场" name="first">

                <div class="tk_debit">
                  <div class="kt_top_content">
                    <div class="tk_select">
                      <div class="tk_sel_msg">
                        <p>选择价格</p>
                        <img src="../../assets/img/btn_arrows_updown.png" alt="">
                        <span>
                      <el-select v-model="value" placeholder="20">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    </span>
                      </div>
                      <div class="tk_sel_msg">
                        <p>选择时间</p>
                        <img src="../../assets/img/btn_arrows_updown.png" alt="">
                        <el-select v-model="value" placeholder="3个月">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </div>
                      <div class="tk_sel_msg">
                        <p>借入数量</p>
                        <img src="../../assets/img/btn_arrows_updown.png" alt="">
                        <el-select v-model="value" placeholder="大于等于整数">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                        <div class="kt_usable">可用: <span style="color:#DC302E">300TKC</span></div>
                      </div>
                    </div>
                    <button class="kt_btn">我要借出</button>
                  </div>
                  <div class="tk_content_footer">
                    <el-tabs v-model="put" @tab-click="handledClick">
                      <el-tab-pane label="空头挂单" name="first">
                        <div class="tk_borrow">
                          <table>
                            <thead>
                            <tr>
                              <td>发布时间</td>
                              <td>价格</td>
                              <td>时间</td>
                              <td>交易数量</td>
                              <td>进展</td>
                              <td>操作</td>
                            </tr>
                            </thead>
                            <tr>
                              <td>2017/7/19 14:23:48</td>
                              <td style="color:#DC302E ">30元</td>
                              <td>3个月</td>
                              <td>100张</td>
                              <td>51/100</td>
                              <td>
                                <span style="border-bottom: 1px solid #666666;cursor: pointer;"
                                >借出</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2017/7/19 17:45:20</td>
                              <td style="color:#DC302E ">40元</td>
                              <td>6个月</td>
                              <td>25张</td>
                              <td>0/25</td>
                              <td>
                                <span style="border-bottom: 1px solid #666666 ;cursor: pointer;"
                                >借出</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="我的借入" name="second">
                        <div class="tk_borrow">
                          <table>
                            <thead>
                            <tr>
                              <td>发布时间</td>
                              <td>买空卖空</td>
                              <td>时间</td>
                              <td>交易数量</td>
                              <td>进展</td>
                              <td>操作</td>
                            </tr>
                            </thead>
                            <tr>
                              <td>2017/7/19 14:23:48</td>
                              <td style="color:#DC302E ">买空</td>
                              <td>3个月</td>
                              <td>100张</td>
                              <td>51/100</td>
                              <td>
                                <span style="border-bottom: 1px solid #666666;cursor: pointer;"
                                >明细</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2017/7/19 17:45:20</td>
                              <td style="color:#DC302E ">卖空</td>
                              <td>6个月</td>
                              <td>25张</td>
                              <td>0/25</td>
                              <td>
                                <span style="border-bottom: 1px solid #666666 ;cursor: pointer;"
                                >明细</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </el-tab-pane>
                      <el-tab-pane label="我的借出" name="third">
                        <div class="tk_borrow">
                          <table>
                            <thead>
                            <tr>
                              <td>发布时间</td>
                              <td>买空卖空</td>
                              <td>时间</td>
                              <td>交易数量</td>
                              <td>进展</td>
                              <td>操作</td>
                            </tr>
                            </thead>
                            <tr>
                              <td>2017/7/19 14:23:48</td>
                              <td style="color:#DC302E ">买空</td>
                              <td>3个月</td>
                              <td>100张</td>
                              <td>51/100</td>
                              <td>
                                <span style="border-bottom: 1px solid #666666;cursor: pointer">明细</span>
                                <span style="border-bottom: 1px solid #666666;cursor:pointer">停止借出</span>
                              </td>
                            </tr>
                            <tr>
                              <td>2017/7/19 17:45:20</td>
                              <td style="color:#DC302E ">卖空</td>
                              <td>6个月</td>
                              <td>25张</td>
                              <td>25/25</td>
                              <td>
                                <span style="border-bottom: 1px solid #666666;cursor: pointer;">明细</span>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>

              </el-tab-pane>
              <!--空头买卖-->
              <el-tab-pane label="空头买卖" name="second">
                <div class="tk_business">
                  <div class="tk_msg_top">
                    <div class="mc_rate_left">
                      <div class="mc_rate_left_title">
                        <p style="float: left">可用
                        <span style="font-weight: bold;color: #DC302E;">{{usable}}</span>
                          <span style="font-size: 12px;color: #DC302E;"> CNY</span>
                        </p>
                        <P style="float: right;color:#2966A3;cursor: pointer;">立即充值</P>
                      </div>
                      <input type="text" placeholder="买入价 CTY/TKC">
                      <div class="mc_rate_left_num">15670.93</div>
                      <img src="../../assets/img/oval.png" alt="" style="width: 289px;margin-left: -3px">
                      <input type="text" placeholder="买入量">
                      <div class="mc_rate_money">
                        <p style="float: left">交易额</p>
                        <p style="float: right">0.00
                        <span>CNY</span>
                        </p>
                      </div>
                      <button class="mc_rate_buy">买入BTC</button>
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
                        <div class="mc_rate_right_num">132343</div>
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
                    <div class="mc_plan">
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
                            <img :class="{'transform90':padingListStatus}" src="../../assets/img/ic_arrows_down_2.png"
                                 alt="">
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
                  </div>
                </div>
                <el-tabs v-model="delegation" @tab-click="handledClick">
                  <el-tab-pane label="当前委托（0）" name="first" v-loading="loading">
                    <table class="tk_now_entrust">
                      <thead>
                      <tr>
                        <td width="130">委托时间</td>
                        <td width="112">类型</td>
                        <td width="112">来源</td>
                        <td width="120">委托价格(¥)</td>
                        <td width="112">委托数</td>
                        <td width="112">剩余数量</td>
                        <td width="112">状态</td>
                        <td width="112">操作</td>
                      </tr>
                      </thead>
                      <tr v-for="(item,index)  in  dataToatable" :key="index" v-if="!show" >
                        <td width="130">{{item.time_text}}</td>
                        <td class="types_font_color_red" :class="{'types_font_color_green': item.type== -1}">
                          {{item.type == 1 ? '买入' : item.type == -1 ? '卖出' : '未知'}}
                        </td>
                        <td>{{item.price > 0 ? '限价交易' : '市价交易'}}</td>
                        <td>{{item.price}}</td>
                        <td>{{item.amount}}</td>
                        <td>{{item.amount-item.trade_amount}}</td>
                        <td>{{item.state}}</td>
                        <td>{{item.state == 0 || item.state == 2 ? '撤单' : '--'}}</td>
                      </tr>
                    </table>
                    <div class="mc_block" v-if="!show">
                      <el-pagination layout="prev, pager, next" :total='total' @current-change="handleCurrentChange">
                      </el-pagination>
                    </div>
                    <div class="mc_footer_p" v-show="!dataToatable.length>0">
                      <img src="../../assets/img/img_place_2.png" alt="">
                      <p>你还没有相关记录!</p>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="历史委托（0）" name="second">
                    <table class="tk_now_entrust">
                      <thead>
                      <tr>
                        <td width="130">委托时间</td>
                        <td width="112">类型</td>
                        <td width="112">来源</td>
                        <td width="120">委托价格(¥)</td>
                        <td width="112">委托数</td>
                        <td width="112">剩余数量</td>
                        <td width="112">状态</td>
                        <td width="112">操作</td>
                      </tr>
                      </thead>
                      <tr v-for="(hitem,index) in historydata " :key="index" >
                        <td width="130" style="height: 40px;">{{hitem.time_text}}</td>
                        <td  class="xt o_types_font_color_red"
                            :class="{'o_types_font_color_green':hitem.type==-1}" >
                          {{hitem.type==1?'买入':hitem.type==-1?'卖出':'未知'}}</td>
                        <td >{{hitem.price > 0 ? '限价交易' : '市价交易'}}</td>
                        <td >{{hitem.price}}</td>
                        <td >{{hitem.amount}}</td>
                        <td >{{hitem.amounthitem.trade_amount}}</td>
                        <td >{{hitem.state}}</td>
                        <td >{{hitem.state == 0 || hitem.state == 2 ? '撤单' : '--'}}</td>
                      </tr>
                    </table>
                    <div class="mc_block" v-if="!show">
                      <el-pagination layout="prev, pager, next" :total='total1' @current-change="handleCurrentChange">
                      </el-pagination>
                    </div>
                    <div class="mc_footer_p" v-show="!historydata.length>0">
                      <img src="../../assets/img/img_place_2.png" alt="">
                      <p>你还没有相关记录!</p>
                    </div>
                  </el-tab-pane>
                </el-tabs>
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
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {

        introduce:false,//交易介绍
        total1:1,
        historydata:[],
        show: false,
        put: 'first',
        delegation: 'first',
        bearmarket: 'first',
        options: [{
          value: '选 项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        sideBarActiveStatus: {
          stautsName: 'beartading',
          // StautsNav: 0
        },
        isActive: false,
        // 可用CNY
        usable: '',
        //加载
        loading: true,
        loading2 :true,
        //列表数据
        dataToatable: [],
        total: 1,
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
      api.get('/v1/user/user-account').then(res => {
        this.usable = res.data.data.cny_available
      })
      this.oneToData();
      this.intervalifunction = setInterval(() => {
        this.dataListApi();
      }, 3000);
      api.get('/v1/market/ticker/tkc').then(res=>{
         this.recent=res.data.data.price
      }).catch(res=>{})

    },
    computed: {
      ...mapGetters({
        loginfunction: 'loginfunction',
        loginSuccess: 'loginSuccess', //登录成功  用户信息
        popupStatus: 'popupStatus'  //弹框 注册 登录 的状态判断
      }),
    },
    methods: {
      handleddClick(tab, event){

      },
      handledClick(tab, event){
        if(this.delegation == 1) {
          this.handleCurrentChange(0);
          this.total1 = 1;
        }
        else{
          api.get('/v1/trade/history-delegates')
            .then(res=>{
              if(res.data.code == 200){
                this.loading2 = false;
                this.total1 = (res.data.data.total/10)*10;
                this.historydata = res.data.data.list;
                this.historydata.forEach(function (hitem) {
                  if(hitem.state == 1){
                    hitem.state = "已完成"
                  }else if (hitem.state == 3){
                    hitem.state = "全部撤销"
                  }else if(hitem.state == 4){
                    hitem.state = "部分撤销"
                  }
                  return;
                });
              }
            })
            .catch(err=>{

            })
        }
      },
      handleClick(tab, event) {
        console.log(tab, event);
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
              this.loading = false
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

      historydatalist(val){
        api.get(`/v1/trade/history-delegates?offset=${(val - 1) * 10}&limit=10`).then(res => {
          if (res.data.code == 200) {
            this.loadingdata1 = false;
            this.total1 = (res.data.data.total / 10) * 10;
            this.historydata = res.data.data.list;
            this.historydata.forEach(function (hitem) {
              if (hitem.state == 1) {
                hitem.state = "已完成"
              } else if (hitem.state == 3) {
                hitem.state = "全部撤销"
              } else if (hitem.state == 4) {
                hitem.state = "部分撤销"
              }
              return;
            });
          }
        }).catch(err => {

        })
      },
      introduce_close(){
       this.introduce=!this.introduce
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
  /*正在买入*/
  .kt_hint_popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    .Modify_content {
      width: 400px;
      height: 280px;
      background-color: #ffffff;
      z-index: 1003;
      border-radius: 4px;
      text-align: center;
      position: relative;
      .title {
        font-size: 18px;
        color: #2E2E2E;
        margin-top: 12px;
        padding-bottom: 16px;
        border-bottom: 1px solid #E0E0E0;
      }
      .content {
        width: 303px;
        height: 60px;
        margin: 0 auto;
        font-size: 18px;
        color: #000;
        margin-top: 35px;
      }
      .wk_btn {
        margin-top: 50px;
        .wk_btn_ensure {
          background: #DC302E;
          border-radius: 4px;
          width: 100px;
          height: 36px;
          font-size: 18px;
          color: #ffffff;
          cursor: pointer;
        }
        .wk_btn_off {
          border: 1px solid #CCCCCC;
          width: 100px;
          height: 36px;
          color: #757575;
          margin-left: 20px;
          border-radius: 4px;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }

  /*借出数量超过tkc*/
  .kt_hint_popup2 {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    .Modify_content {
      width: 400px;
      height: 280px;
      background-color: #ffffff;
      z-index: 1003;
      text-align: center;
      position: relative;
      border-radius: 4px;
      .title {
        font-size: 18px;
        color: #2E2E2E;
        margin-top: 12px;
        padding-bottom: 16px;
        border-bottom: 1px solid #E0E0E0;
      }
      .content {
        width: 320px;
        height: 60px;
        margin: 0 auto;
        font-size: 16px;
        color: #000;
        margin-top: 35px;
        text-align: start;
        line-height: 30px;
      }
      .wk_btn {
        margin-top: 50px;
        .wk_btn_ensure {
          background: #DC302E;
          border-radius: 4px;
          width: 100px;
          height: 36px;
          font-size: 18px;
          color: #ffffff;
          cursor: pointer;
        }

      }
    }
  }

  /*空头交易业务介绍*/

  .kt_introduce_popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    .Modify_content {
      width: 520px;
      height: 500px;
      background-color: #ffffff;
      z-index: 1003;
      border-radius: 4px;
      text-align: center;
      position: relative;
      .title {
        font-size: 18px;
        color: #2E2E2E;
        margin-top: 20px;

      }
      ::-webkit-scrollbar {
        width: 6px;
        height: 10px
      }
      ::-webkit-scrollbar-track {
        background-color: #ffffff
      }
      ::-webkit-scrollbar-thumb {
        background-color: #D8D8D8;;
        border-radius: 12px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #D8D8D8
      }
      ::-webkit-scrollbar-thumb:active {
        background-color: #D8D8D8
      }
      .modify_content_text {
        position: absolute;
        top: 90px;
        left: 36px;
        height: 374px;
        overflow-x: hidden;
        overflow-y: auto;
        width: 438px;
        line-height: 27px;
        text-align: start;
        font-size: 14px;
        color: #666666;
        padding-right: 20px;

      }
      .content {
        width: 438px;
        height: 400px;
        margin: 0 auto;
        font-size: 18px;
        color: #000;
        margin-top: 10px;
        img {
          position: absolute;
          top: 8px;
          right: 10px;
          cursor: pointer;
        }
      }
    }
  }

  /*借出模态*/
  .kt_lend_popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    text-align: center;
    .Modify_content {
      width: 400px;
      height: 280px;
      background-color: #ffffff;
      z-index: 1003;
      border-radius: 4px;
      position: relative;
      .content {
        p {
          text-align: start;
        }
        input {
          width: 294px;
          height: 38px;
          margin-top: 20px;
          border: 1px solid #aaa;
          border-radius: 4px;
          padding-left: 20px;
        }
        width: 320px;
        height: 60px;
        margin: 0 auto;
        font-size: 18px;
        color: #000;
        margin-top: 35px;
      }
      .wk_btn {
        margin-top: 100px;
        .wk_btn_ensure {
          background: #DC302E;
          border-radius: 4px;
          width: 100px;
          height: 36px;
          font-size: 18px;
          color: #ffffff;
          cursor: pointer;
        }
        .wk_btn_off {
          border: 1px solid #CCCCCC;
          width: 100px;
          height: 36px;
          color: #757575;
          margin-left: 20px;
          border-radius: 4px;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }

  /*终止借入操作*/
  .kt_off_popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 99999;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    .Modify_content {
      width: 400px;
      height: 280px;
      background-color: #ffffff;
      z-index: 1003;
      border-radius: 4px;
      text-align: center;
      position: relative;

      .content {
        /*text-align: start;*/
        width: 200px;
        height: 60px;
        margin: 0 auto;
        font-size: 18px;
        color: #000;
        margin-top: 70px;
      }
      .wk_btn {
        margin-top: 50px;
        .wk_btn_ensure {
          background: #DC302E;
          border-radius: 4px;
          width: 100px;
          height: 36px;
          font-size: 18px;
          color: #ffffff;
          cursor: pointer;
        }
        .wk_btn_off {
          border: 1px solid #CCCCCC;
          width: 100px;
          height: 36px;
          color: #757575;
          margin-left: 20px;
          border-radius: 4px;
          font-size: 18px;
          cursor: pointer;
        }
      }
    }
  }

  .kt_loan_popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    display: -webkit-flex;
    /*.kt_borrow {*/
    /*width: 970px;*/
    /*height: 580px;*/
    /*z-index: 1003;*/
    /*}*/
    .kt_borrow_top,
    .kt_borrow_bottom {
      width: 970px;
      height: 250px;
      background-color: #ffffff;
      position: relative;
      img {
        position: absolute;
        right: 10px;
        top: 10px;
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
      overflow: hidden;
      .kt_borrow_top_title {
        width: 515px;
        height: 17px;
        font-size: 14px;
        color: #666666;
        margin: 50px 0 0 50px;
        span {
          color: #DC302E;
          letter-spacing: 0
        }
      }
      .kt_borrow_top_content {
        width: 870px;
        height: 114px;
        margin: 20px 0 0 50px;
        text-align: center;
        .kt_borrow_top_table {
          td {
            width: 217px;
            height: 38px;
            font-size: 12px;
            border: 0.5px solid #CCCCCC;
          }
        ;
        }
        .kt_borrow_bottom_table {
          td {
            width: 172px;
            height: 38px;
            font-size: 12px;
            border: 0.5px solid #CCCCCC;
          }
        }
      }
    }
    .kt_borrow_bottom {
      margin-top: 80px;
    }
  }

  .types_font_color_red{
    color:#DC302E;
  }
  .types_font_color_green{
    color: #06B944;
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
      .tk_massage_right {
        float: right;
        width: 970px;
        background: #FFF;
        height: 1100px;
      }


    }
    .tk_content {
      width: 940px;
      margin-left: 20px;
      height: 254px;
      .tk_now_entrust {
        width: 930px;
        text-align: center;
        td {
          font-size: 12px;
          height: 50px;
          color: #666666;
        }

      }
      .tk_business {
        width: 926px;
        height: 370px;
        background-color: #ffffff;
        position: relative;
        .tk_msg_top {
          height: 340px;
          width: 926px;
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
              right: 34px;
              top: 63px;
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
              right: 9px;
              top: 63px;
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
        }

      }
      .kt_usable {
        position: relative;
        top: -48px;
        left: 100px;
      }
      .tk_debit {
        width: 926px;
        margin-top: 24px;
        .kt_top_content {
          border: 1px solid #E0E0E0;
          width: 932px;
          height: 160px;
        }
        .tk_content_footer {
          width: 932px;
          margin-top: 50px;
          .el-tabs__header {
            margin: 0;
          }
          .el-tabs__item.is-active {
            color: #DC302E;
            letter-spacing: 0;
          }
          .el-tabs__active-bar {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            background-color: #DC302E;
          }
          .tk_borrow {
            width: 930px;
            height: 118px;
            margin-top: 25px;
            border-bottom: 1px solid #CCCCCC;
            border-top: 1px solid #CCCCCC;
            text-align: center;
            table {
              td {
                width: 154px;
                height: 40px;
                font-size: 12px;
                border: 0.5px solid #CCCCCC;
                border-top: 0;
              }
            }
          }
        }
        .kt_btn {
          width: 200px;
          height: 40px;
          background-color: #DC302E;
          text-align: center;
          line-height: 40px;
          margin-left: 40%;
          color: #ffffff;
          margin-top: 16px;
        }
        .tk_select {
          height: 74px;
          font-size: 14px;
          margin-top: 10px;
          .tk_sel_msg {
            float: left;
            width: 308px;
            height: 74px;
            line-height: 74px;
            position: relative;
            img {
              top: 34%;
              position: absolute;
              left: 80%;
              width: 8px;;
              z-index: 777;
            }
            p {
              float: left;
              margin-left: 30px;
            }
            .el-input {
              display: inline-block;
            }
            .el-select {
              margin-left: 14px;
              /*::-webkit-input-placeholder{*/
              /*color: #000;*/
              /*}*/
              height: 40px;
            }
            .el-input__icon, .el-icon-caret-top {
              display: none;
            }
            .el-input__icon + .el-input__inner {
              border: 1px solid #ccc;
              width: 160px;
              height: 40px;
              color: #000000;
              float: left;
              margin-top: 14px;
            }
            .el-input__icon {
              color: #000;
            }
          }
        }
      }
      .el-tabs__header {
        margin: 0;
        margin-top: 20px;
      }
      .el-tabs__item.is-active {
        color: #DC302E;
        letter-spacing: 0;
      }
      .el-tabs__active-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background-color: #DC302E;

      }
    }
    .mc_footer_p {
      position: relative;
      top: 20%;
      color: #9A9A9A;
      left: 42%;
      p {
        padding-left: 30px;
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
</style>
