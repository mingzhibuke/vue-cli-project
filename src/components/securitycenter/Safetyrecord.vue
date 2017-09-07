<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="s_massage_right">
          <div class="re_warp">
            <div class="re_title_box">
              <span class="re_title">最近登录历史</span>
            </div>
            <div class="o_logindata">
              <p>你上次登录系统时间为：2017-07-18,登录IP：199.202.292(四川省成都市联通)</p>
            </div>
            <el-table :data="tableData" stripe style="width: 100%;">
              <el-table-column prop="logintime" label="登录时间" width="250">
              </el-table-column>
              <el-table-column prop="ip" label="登录IP" width="">
              </el-table-column>
              <el-table-column prop="status" label="状态" width="80">
              </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination layout="prev, pager, next" :total="110">
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
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {
        // popupStatus: false,
        sideBarActiveStatus: {
          stautsName: '安全记录',
          // StautsNav: 0
        },
        tableData: [{
          logintime: '2016-05-02',
          ip: '王小虎',
          status: '失败'
        }, {
          logintime: '2016-05-04',
          ip: '王小虎',
          status: '成功'
        }, {
          logintime: '2016-05-01',
          ip: '王小虎',
          status: '成功'
        }, {
          logintime: '2016-05-03',
          ip: '王小虎',
          status: '成功'
        }, {
          logintime: '2016-05-03',
          ip: '王小虎',
          status: '成功'
        }, {
          logintime: '2016-05-03',
          ip: '王小虎',
          status: '成功'
        }]
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
        .re_warp {
          padding: 38px 20px;
          .re_title_box {
            border-bottom: 1px solid #DDD;
            .re_title {
              display: inline-block;
              padding: 10px 0;
              color: #DC302E;
              font-size: 16px;
              border-bottom: 2px solid #DC302E;
            }
          }
        }
        .o_logindata {
          width: 100%;
          height: 40px;
          margin: 10px 0;
          background: #FFFAF4;
          color: #B8B0AE;
          line-height: 40px;
          p {
            padding-left: 20px;
          }
        }
        .el-table {
          // border: none;
          .positive-row {
            background: #FFF; // border: none;
          }
          td {
            // border: none;
          }
          th {
            // border: none;
          }
          .el-table__header-wrapper {
            // border-bottom:1px solid #DDD;
            background: #FFF;
          }
        }
        .block {
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
                border-radius: 5px;
                // color: #999;
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
</style>
