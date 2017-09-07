<template>
  <div>
    <my-header :headColor="true"></my-header>
    <section class="main">
      <div class="main_warp">
        <div class="s_massage_left">
          <side-bar :sideBarActiveStatus="sideBarActiveStatus" :sideNavNam="$route.params.moduleName"></side-bar>
        </div>
        <div class="ve_massage_right">
          <div class="ve_warp">
            <div class="ve_head_title">
              <img src="../../assets/img/ic_anquan.png"> 实名认证:
                            <strong>未认证</strong>
            </div>
            <div class="ve_form_sub">
              <!--真实姓名-->
              <div class="ve_sub_msg">
                <div class="ve_left_box ve_left_box_line">
                  <span class="ve_msg_title">真实姓名:</span>
                </div>
                <div class="ve_right_box ve_left_box_line">
                  <input class="ve_inp" type="text" placeholder="请填写您的真实姓名" v-model="authInfo.realName">
                </div>
                <p v-show="isshow" class="hint">*请填写姓名(中文或者英文)</p>
              </div>
              <div class="ve_sub_msg ">
                <div class="ve_left_box ve_left_box_line">
                  <span class="ve_msg_title">性别:</span>
                </div>
                <div class="ve_right_box">
                  <div class="ve_radio">
                    <el-radio class="radio" v-model="authInfo.sex" label="1">男</el-radio>
                    <el-radio class="radio" v-model="authInfo.sex" label="2">女</el-radio>
                  </div>
                </div>
              </div>
              <div class="ve_sub_msg">
                <div class="ve_left_box ">
                  <span class="ve_msg_title ve_left_box_line">证件类型:</span>
                </div>
                <div class="ve_right_box">
                  <el-select v-model="authInfo.type" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="ve_sub_msg ">
                <div class="ve_left_box ve_left_box_line">
                  <span class="ve_msg_title">身份证号码:</span>
                </div>
                <div class="ve_right_box">
                  <input v-model="authInfo.no" class="ve_inp" type="text" placeholder="请填写您的证件号码">
                </div>
                <p v-show='isID' class="hint">*请填写正确证件号码</p>
              </div>
              <div class="ve_sub_msg">
                <div class="ve_left_box">
                  <span class="ve_msg_title ve_left_box_line">截止日期:</span>
                </div>
                <div class="ve_right_box">
                  <el-select v-model="authInfo.dateTimeMax" placeholder="有限期">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </div>
              </div>
              <div class="ve_sub_msg">
                <div class="ve_left_box">
                </div>
                <div class="ve_right_box">
                  <el-date-picker v-model="authInfo.upToDate" type="date" placeholder="选择日期" :picker-options="pickerOptions0">
                  </el-date-picker>
                </div>
              </div>
              <!--证件正面-->
              <div class="ve_sub_msg">
                <div class="ve_left_box">
                  <span class="ve_msg_title">证件照正面:</span>
                </div>
                <div class="ve_right_box">
                  <div class="ve_upload_img_box">
                    <div class="ve_upload_add">


                      <!--<el-upload-->
                        <!--action="https://jsonplaceholder.typicode.com/posts/"-->
                        <!--list-type="picture-card"-->
                        <!--:on-preview="handlePictureCardPreview"-->
                        <!--:on-remove="handleRemove">-->
                        <!--<i class="el-icon-plus"></i>-->
                      <!--</el-upload>-->
                      <!--<el-dialog v-model="dialogVisible" size="tiny">-->
                        <!--<img width="100%" :src="dialogImageUrl" alt="">-->
                      <!--</el-dialog>-->


                    </div>
                    <div class="ve_up_propmt">
                      <p class="ve_pro_text">请上传有效身份证件正面图片,图片仅支持.jpg和.png格式</p>
                      <span class="ve_pro_btn">查看示例子</span>
                    </div>
                  </div>
                </div>
              </div>
              <!--证件背面-->
              <div class="ve_sub_msg">
                <div class="ve_left_box">
                  <span class="ve_msg_title">证件照背面:</span>
                </div>
                <div class="ve_right_box">
                  <div class="ve_upload_img_box">
                    <div class="ve_upload_add">
                      <img src="../../assets/img/img_place_1.png">
                      <p class="ve_text">点击添加</p>
                    </div>
                    <div class="ve_up_propmt">
                      <p class="ve_pro_text">请上传有效身份证件正面图片,图片仅支持.jpg和.png格式
                                            </p>
                      <span class="ve_pro_btn">查看示例子</span>
                    </div>

                  </div>
                </div>
              </div>
              <!--手持证件照-->
              <div class="ve_sub_msg">
                <div class="ve_left_box">
                  <span class="ve_msg_title">手持证件照:</span>
                </div>
                <div class="ve_right_box">
                  <div class="ve_upload_img_box">
                    <div class="ve_upload_add">
                      <img src="../../assets/img/img_place_1.png">
                      <p class="ve_text">点击添加</p>
                    </div>
                    <div class="ve_up_propmt" style="top:55px;">
                      <p class="ve_pro_text">1、请上传有效身份证件正面图片, 图片仅支持.jpg和.png格式。
                                                <br/>2、要求本人和身份证相貌相符,照片 清晰可见且完整露出持证人双手手臂。
                                            </p>
                      <span class="ve_pro_btn">查看示例子</span>
                    </div>

                  </div>
                  <p class="ve_prompt_red">*请上传手持有效身份证件正面图片</p>
                </div>
              </div>
              <div class="ve_sub_msg ">
                <div class="ve_left_box ve_left_box_line">
                  <span class="ve_msg_title">身份证住址:</span>
                </div>
                <div class="ve_right_box">
                  <input class="ve_inp" type="text" placeholder="请填写您身份证上的住址" v-model="address">
                  <p class="ve_prompt_red">*填写的地址要与身份证上的地址完全相同，否则无法通过实名认证</p>
                </div>
              </div>
              <div class="ve_sub_msg ">
                <div class="ve_left_box ve_left_box_line">
                  <span class="ve_msg_title">验证码:</span>
                </div>
                <div class="ve_right_box">
                  <div class="ve_vercode_box">
                    <input class="ve_inp_style" type="text" placeholder="请输入验证码" v-model="auth_code">
                    <img v-bind:src="capImg" >
                  </div>
                </div>
              </div>
              <div class="ve_sub_msg ">
                <div class="ve_left_box ve_left_box_line">
                </div>
                <div class="ve_right_box">
                  <div class="ve_submint" @click="submit" :class="{refer:isred}">提交</div>
                  <div class="ve_cart_msg">
                    <span class="ve_cart_title">什么是实名认证?</span>
                    <p class="ve_cart_text">实名认证是 5KM 向广大用户提供的一项身份识别服务，旨在通过身份验证，全面保障用户的帐号及资金安全。
                                            <br/>身份信息一经录入不可更改，5KM 为用户提供银行级数数据安全保障系统，严密保护用户的个人隐私。</p>
                  </div>
                  <div class="ve_cart_msg">
                    <span class="ve_cart_title">实名认证有什么好处?</span>
                    <p class="ve_cart_text">
                      1.用户忘记帐号，密码或者帐号被盗时，可作为找回帐号密码的重要依据。
                      <br/> 2.为保障用户的资金的安全性，未通过 5KM 实名认证的用户无法申请资金提现。
                                            <br/> 3.通过实名认证，增加用户之间的信赖度。
                                        </p>
                  </div>
                </div>
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
  import sideBar from '../../publicComponents/securitycenterPublic/Sidebar'  //侧栏菜单组件
  import myFooter from '../../publicComponents/Footer'  //底部组件
  import {mapGetters, mapMutations} from 'vuex'
  import * as types from '../../vuex/mie-types'
  export default ({
    data() {
      return {
        isred:false,
        isID:false,//身份证错误提示
        idCard:'',//身份证信息
        isshow: false,//姓名错误提示
        username: '',//姓名
        radio: '1',//单选
        value: '',//身份证选择
        dataVal: '',//时间
        address: '',//地址
        auth_code: '',//验证码

        capImg :'',

        authInfo:{

          realName:'',
          sex:'',
          type:'',
          no:'',
          pictureA:'',
          pictureB:'',
          address:'',
          dateTimeMax:'',
          upToDate:'',

        },

        // popupStatus: false,
        sideBarActiveStatus: {
          stautsName: '实名认证',
          // StautsNav: 1
        },
        radio: '1',  //单选按钮
        options: [{  //联级选择数据
          value: '选项1',
          label: '大陆身份证'
        }, {
          value: '选项2',
          label: '大陆身份证2'
        }, {
          value: '选项3',
          label: '大陆身份证'
        }],
        time: [{  //联级期限选择数据
          value: '选项1',
          label: '有效期'
        }, {
          value: '选项2',
          label: '有效期'
        }, {
          value: '选项3',
          label: '有效期'
        }],
        timeVal: '', //期限选择值
        pickerOptions0: { //日期选择
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },

      }
    },
    created() {

//      this.capImg =

    },
    watch: {
      //判断姓名是否输入正确
      username(newVal, oldVal){
        let reg = /^([\u4E00-\u9FA5]+|[a-zA-Z]+)$/;
        if (reg.test(newVal)) {
          this.isshow = false;
        } else {
          this.isshow = true;
        }
      },
     //判断身份证号码是否输入正确
      idCard(newVal, oldVal){
          let reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
          if(reg.test(newVal)){
            this.isID=false;
            console.log(newVal)
          }else{
            this.isID=true
          }
       }
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
      submit(){
          console.log(this)
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
      .ve_massage_right {
        .refer{
          background-color: red;
        }
        float: right;
        width: 970px;
        background: #FFF;
        .ve_warp {
          padding: 24px 50px;
          .ve_head_title {
            position: relative;
            padding-left: 46px;
            font-size: 16px;
            color: #202730;
            height: 52px;
            line-height: 52px;
            border-bottom: 1px solid #F2F2F2;
            img {
              position: absolute;
              top: 11px;
              left: 0;
            }
            strong {
              color: #DC302E;
              margin-left: 10px;
            }
          }
          .ve_form_sub {
            padding-top: 53px;
            .ve_sub_msg {
              .hint {
                width: 220px;
                height: 20px;
                float: left;
                margin-left: 34%;
                margin-top: 10px;
                color: red;
                /*display: none;*/
              }
              .hint {
                /*display: none;*/
              }
              overflow: hidden;
              margin-bottom: 50px; // border: 1px solid red;
              .ve_left_box {
                float: left;
                text-align: right;
                height: 48px;

                width: 30%;
                .ve_msg_title {
                  font-size: 16px;
                  color: #A1A9B5;
                }

              }
              .ve_left_box_line {
                line-height: 48px;
              }
              .ve_right_box {
                float: right;
                width: 66%;

                .el-select {
                  height: 48px;
                  line-height: 48px;
                }
                .ve_inp {
                  color: #bfcbd9;
                  font-size: 16px;
                  width: 325px;
                  height: 48px;
                  box-sizing: border-box;
                  border-bottom: 1px solid #bfcbd9;
                }
                :-webkit-input-placeholder {
                  color: #bfcbd9;
                }
                .el-input__inner {
                  border-bottom: 1px solid #bfcbd9;
                  border-top: none;
                  border-left: none;
                  border-right: none;
                  border-radius: 0;
                  width: 325px;
                  font-size: 16px;
                  padding: 0;
                }
                .el-input {
                  width: 325px;
                }
                .ve_radio {
                  height: 48px;
                  line-height: 48px;
                  .is-checked {
                    .el-radio__inner {
                      border-color: #DC302E;
                      background: #DC302E;
                    }
                  }
                }
                .ve_upload_img_box {
                  position: relative;
                  width: 328px;
                  height: 185px;
                  background: #F2F4F8;
                  cursor: pointer;
                  .ve_up_propmt {
                    position: absolute;
                    top: 123px;
                    right: -180px;
                    width: 172px;
                    font-size: 12px;
                    .ve_pro_text {
                      color: #A1A9B5;
                      padding-bottom: 14px;
                    }
                    .ve_pro_btn {
                      color: #2966A3;
                      text-decoration: underline;
                    }
                  }
                  .ve_upload_add {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 60px;
                    height: 50px;
                    margin-left: -30px;
                    margin-top: -25px;
                    text-align: center;
                    .ve_text {
                      font-size: 14px;
                      color: #A1A9B5;
                    }
                  }
                }
                .ve_prompt_red {
                  color: #DC302E;
                  font-size: 12px;
                  padding-top: 4px;
                  width: 328px;
                }
                .ve_vercode_box {
                  overflow: hidden;
                  width: 328px;
                  position: relative;
                  .ve_inp_style {
                    float: left;
                    color: #bfcbd9;
                    font-size: 16px;
                    width: 256px;
                    height: 48px;
                    box-sizing: border-box;
                    border-bottom: 1px solid #bfcbd9;
                  }
                  :-webkit-input-placeholder {
                    color: #bfcbd9;
                  }
                  img {
                    position: absolute;
                    top: 12px;
                    right: 0;
                    float: right;
                    width: 72px;
                    height: 36px;
                  }
                }
                .ve_submint {
                  width: 328px;
                  height: 36px;
                  line-height: 36px;
                  text-align: center;
                  background: #D5D9E1;
                  font-size: 16px;
                  color: #FFF;
                  margin-bottom: 30px;
                  cursor: pointer;
                }
                .ve_cart_msg {
                  width: 328px;
                  font-size: 12px;
                  margin-bottom: 30px;
                  .ve_cart_text {
                    color: #bfcbd9;
                    line-height: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
