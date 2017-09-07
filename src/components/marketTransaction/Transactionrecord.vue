<template>
    <div>
        <my-header  :headColor="true"></my-header>
        <section class="main">
            <div class="main_warp">
                <div class="s_massage_left">
                    <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
                </div>
                <div class="s_massage_right">
                  <div class="o_box_1">
                  <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="交易记录" name="first">
                      <!--className=o_listdata-->
                      <div class="o_listdata" v-loading="loading" element-loading-text="拼命加载中">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr class="o_wtf">
                            <td width="317" style="height: 80px;">委托时间</td>
                            <td width="120" style="text-align:center;">类型</td>
                            <td width="120" style="text-align:center;">单价</td>
                            <td width="120" style="text-align:center;">数量</td>
                            <td width="120" style="text-align:center;">金额</td>
                            <td width="120" style="text-align:center;">手续费</td>
                          </tr>
                          <tr v-for="(item,index)  in  dataToatable" :key="index">
                            <td width="317" style="height: 80px;">{{item.time_text }}</td>
                            <td width="120" style="text-align:center;" class="o_types1_font_color_red"
                            :class="{'o_types1_font_color_green':item.type== -1}">
                              {{item.type==1?'买入':item.type==-1?'卖出':'未知'}}</td>
                            <td width="120" style="text-align:center;">{{item.trade_price}}</td>
                            <td width="120" style="text-align:center;">{{item.trade_amount}}</td>
                            <td width="120" style="text-align:center;">{{item.done_amount.toFixed(2)}}</td>
                            <td width="120" style="text-align:center;">{{item.fee}}</td>
                          </tr>
                        </table>
                        <div class="o_init_msg" v-show="!dataToatable.length>0">
                          <img class="o_init_img"src="../../assets/img/img_place_2.png">
                          <p class="o_init_text">你还没有相关记录!</p>
                        </div>

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
          activeName: 'first',
          loading: true,
          dataToatable:[],
          tableData: [{}],
          sideBarActiveStatus: {
                stautsName: 'transcord',
                // StautsNav: 0
          }
        }
    },
   created() {
       api.get('v1/trade/record-list').then(res=>{
          if(res.data.code == 200){
                   this.loading=false;
                   this.dataToatable = res.data.data.list;
          }else{
          }
       }).catch(err =>{

       });
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
.o_types1_font_color_red{
  color:#DC302E;
}
.o_types1_font_color_green{
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
        .o_box_1{margin: 25px 0 0 25px;
        .el-tabs__header{width: 97%;margin: 0;}
        .el-tabs__item{font-size: 16px;font-weight: 600;color:#A1A9B5;}
        .el-tabs__item.is-active{color: red;}
        .el-tabs__active-bar{background: red;}
        .el-table__empty-text{display: none;}
        .o_listdata{width:97%;height:670px;
          /*background: url("../../assets/img/img_place_2.png") no-repeat center;*/
          //有数据的时候移除class 备注
          .o_init_msg{
            position:absolute;
            top:50%;
            left:50%;
            margin-top:-100px;
            margin-left:-250px;
            width:500px;
            height:200px;
            text-align: center;
            .o_init_img{

            }
            .o_init_text{font-size:14px;color:#9A9A9A;text-align: center;padding-top:40px;}
          }
          tr:first-child td{border-bottom: 1px solid #F2F2F2;
          td{text-align:center;}
          }


        }
        }
    }
}
</style>
