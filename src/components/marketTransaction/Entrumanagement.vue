<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="s_massage_right">
          <div class="o_boxa">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="当前委托" name="1">
                <div class="asd" v-loading="loadingdata" element-loading-text="拼命加载中">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr class="o_wtf">
                      <td width="317" style="height: 40px;">委托时间</td>
                      <td width="100" class="xt" >类型</td>
                      <td width="100" class="xt">委托价格(￥)</td>
                      <td width="100" class="xt">委托数</td>
                      <td width="100" class="xt">剩余数量</td>
                      <td width="100" class="xt">状态</td>
                      <td width="100" class="xt">操作</td>
                    </tr>
                    <tr v-for="(itm,index) in datalist" :key="index">
                      <td width="317" style="height: 40px;">{{itm.time_text}}</td>
                      <td width="100" class="xt o_types_font_color_red" :class="{'o_types_font_color_green':itm.type==-1}" >{{itm.type==1?'买入':itm.type==-1?'卖出':'未知'}}</td>
                      <td width="100" class="xt">{{itm.price}}</td>
                      <td width="100" class="xt">{{itm.amount}}</td>
                      <td width="100" class="xt">{{itm.remain}}</td>
                      <td width="100" class="xt">{{itm.state}}</td>
                      <td width="100" class="xt"><a href="#">{{itm.state == 0 || itm.state == 2 ? '撤单' : '--'}}</a>
                      </td>
                    </tr>
                  </table>
                  <div class="o_init_msg_1" v-show="!datalist.length > 0">
                    <img class="o_init_img_1"src="../../assets/img/img_place_2.png">
                    <p class="o_init_text_1">你还没有相关记录!</p>
                  </div>
                  <div class="o_block" v-show="datalist.length > 0">
                    <el-pagination layout="prev, pager, next" :total='total' @current-change="handleCurrentChange" >
                    </el-pagination>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="历史委托" name="2">
                <div class="o_asd" v-loading="loadingdata1" element-loading-text="拼命加载中">
                  <table border="0" cellpadding="0" cellspacing="0">
                    <tr class="o_wtf_a">
                      <td width="217" style="height: 40px;">委托时间</td>
                      <td width="60" class="xt_1" >类型</td>
                      <td width="120" class="xt_1">委托价格(￥)</td>
                      <td width="120" class="xt_1">委托数</td>
                      <td width="120" class="xt_1">平均成交价(￥)</td>
                      <td width="120" class="xt_1">成交量</td>
                      <td width="120" class="xt_1">成交额(￥)</td>
                      <td width="120" class="xt_1">状态</td>
                    </tr>
                    <tr v-for="(hitem,index) in historydata " :key="index">
                      <td width="317" style="height: 40px;">{{hitem.time_text}}</td>
                      <td width="100" class="xt o_types_font_color_red"
                      :class="{'o_types_font_color_green':hitem.type==-1}" >
                      {{hitem.type==1?'买入':hitem.type==-1?'卖出':'未知'}}</td>
                      <td width="100" class="xt">{{hitem.price}}</td>
                      <td width="100" class="xt">{{hitem.amount}}</td>
                      <td width="100" class="xt">{{hitem.trade_price}}</td>
                      <td width="100" class="xt">{{hitem.trade_amount}}</td>
                      <td width="100" class="xt">{{hitem.done_amount}}</td>
                      <td width="100" class="xt">{{hitem.state}}</td>
                    </tr>
                    <div class="o_init_msg_2" v-show="!historydata.length > 0">
                      <img class="o_init_img_2"src="../../assets/img/img_place_2.png">
                      <p class="o_init_text_2">你还没有相关记录!</p>
                    </div>
                    <div class="o_block_2" v-show="historydata.length > 0">
                      <el-pagination layout="prev, pager, next" :total='total1' @current-change="historydatalist" >
                      </el-pagination>
                    </div>
                  </table>
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
import { mapGetters, mapMutations } from 'vuex'
import * as types from '../../vuex/mie-types'
export default ({
  data() {
    return {
      loadingdata: true,
      loadingdata1: true,
      activeName: '1',
      datalist:[],
      historydata:[],
      total:1,
      total1:1,
      // popupStatus: false,
      sideBarActiveStatus: {
        stautsName: 'emanagement',
        // StautsNav: 0
      }
    }
  },
  created() {
  this.oneToData();

  },
  computed: {
    ...mapGetters({
      loginfunction: 'loginfunction',
      loginSuccess: 'loginSuccess', //登录成功  用户信息
      popupStatus: 'popupStatus'  //弹框 注册 登录 的状态判断
    }),
  },
  methods: {
    handleClick(tab, event,value) {
      if(this.activeName == 1) {
        this.handleCurrentChange(0);
        this.total1 = 1;
      }
 else{
        api.get('/v1/trade/history-delegates')
          .then(res=>{
            if(res.data.code == 200){
              this.loadingdata1 = false;
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
    ...mapMutations({
      loginTagfunction: types.LOGIN_TAG_REGISTER,//登录 注册状态切换
      revampPopupStatus: 'revampPopupStatus' //切换弹框显示状态值
    }),
    close() {  //关闭弹窗 登录 注册
      this.revampPopupStatus(false);
      document.documentElement.style.overflow = 'auto';
    },
    //当前委托分页
    handleCurrentChange(val){
      api.get(`/v1/trade/current-delegates?offset=${(val-1)*10}&limit=10`).then(res=>{
        if(res.data.code == 200){
            this.loadingdata = false;
          this.total = (res.data.data.total/10)*10;
          this.datalist = res.data.data.list;
          this.datalist.forEach(function (itm) {
            if(itm.state == -2){
              itm.state ="撤单中"
            }else if(itm.state == -1){
              itm.state ="提交中"
            }else if(itm.state == 0){
              itm.state = "委托中"
            }else if(itm.state == 2){
              itm.state = "部分提交"
            }
            return;
          });
        }
      }).catch(err =>{

      })
    },
    //当前委托 第一次请求
    oneToData(){
      api.get('/v1/trade/current-delegates').then(res=>{
        if(res.data.code == 200){
          this.loadingdata = false;
          this.total = (res.data.data.total/10)*10;
          this.datalist = res.data.data.list;
          this.datalist.forEach(function (itm) {
            if(itm.state == -2){
              itm.state ="撤单中"
            }else if(itm.state == -1){
              itm.state ="提交中"
            }else if(itm.state == 0){
              itm.state = "委托中"
            }else if(itm.state == 2){
              itm.state = "部分提交"
            }
            return;
          });
        }
      }).catch(err =>{

      })
    },
    //历史记录分页
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
    }
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
.o_types_font_color_red{
   color:#DC302E;
}
.o_types_font_color_green{
   color:#06B944;
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
    .s_massage_right {
      float: right;
      width: 970px;
      background: #FFF;
      height: 760px;
    }
    .o_boxa {
      margin: 25px 0 0 25px;
      .el-tabs__item {
        font-size: 16px;
        font-weight: 600;
        color: #A1A9B5;
      }
      .el-tabs__item.is-active {
        color: red;
      }
      .el-tabs__active-bar {
        background: red;
      }
      .asd{width: 100%;height:500px;}
      .xt{text-align: center;}
    }
    .o_init_msg_1{position:absolute;top:50%;left:50%;margin-top:-100px;
      margin-left:-250px;width:500px;height:200px; text-align: center;
      .o_init_img_1{}
      .o_init_text_1{font-size:14px;color:#9A9A9A;text-align: center;padding-top:40px;}
    }
    .o_block {
      padding-top: 20px;
      .el-pagination { text-align: center;
      .btn-prev {margin:0 5px;border-radius: 5px;border-right:1px solid #EAEAEA;border-left: 1px solid #EAEAEA;
          &:hover {color: #DC302E;}}
        .btn-next {border-left: 1px solid #EAEAEA; border-radius: 5px;
          &:hover { color: #DC302E;}}
        .el-pager{li{margin: 0 5px;border-left: 1px solid #EAEAEA;border-right: 1px solid #EAEAEA;
            border-radius: 5px;
            &:hover { color: #DC302E;}}
          .active { background: #DC302E; border-color: #DC302E; }}}}
    .o_asd{width: 100%;height:500px;}
    .xt_1{text-align: center;}
    .o_init_msg_2{position:absolute;top:50%;left:50%;margin-top:-100px;
      margin-left:-250px;width:500px;height:200px; text-align: center;
      .o_init_img_2{}
      .o_init_text_2{font-size:14px;color:#9A9A9A;text-align: center;padding-top:40px;}
    }
    .o_block_2{
      padding-top: 20px;width:350%;
      .el-pagination {text-align: center;
        .btn-prev {margin:0 5px;border-radius: 5px;border-right:1px solid #EAEAEA;border-left: 1px solid #EAEAEA;
          &:hover {color: #DC302E;}}
        .btn-next {border-left: 1px solid #EAEAEA; border-radius: 5px;
          &:hover { color: #DC302E;}}
        .el-pager{li{margin: 0 5px;border-left: 1px solid #EAEAEA;border-right: 1px solid #EAEAEA;
          border-radius: 5px;
          &:hover { color: #DC302E;}}
          .active { background: #DC302E; border-color: #DC302E; }}}}
  }
}
</style>
