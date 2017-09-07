<template>
  <div class="fl_main">
    <my-header :activeVal='activeVal'></my-header>
    <section class="fc_content">
      <div class="fc_content_left">
        <div class="fc_map">图标样式未出</div>
        <div class="fc_history">
          <div class="fc_pass">
            <p class="fc_pass_title">历史委托</p>
            <table class="fc_pass_content">
              <thead>
              <tr>
                <td>时间</td>
                <td>类型</td>
                <td>委托价(¥)</td>
                <td>委托数</td>
                <td>已成交(฿)</td>
                <td>均价(¥)</td>
              </tr>
              </thead>
            </table>
            <!--<p style="position: absolute;top: 70%">暂无登录</p>-->
            <div style="position: absolute;top:70%;left: 44%;font-size: 12px;color: #fff">暂无委托</div>
          </div>
          <div class="fc_now">
            <p class="fc_now_title">当前委托




              <button class="fc_revocation">全部撤销</button>
            </p>
            <table class="fc_now_content">
              <thead>
              <tr>
                <td>时间</td>
                <td>类型</td>
                <td>委托价(¥)</td>
                <td>委托数</td>
                <td>剩余(฿)</td>
                <td>状态)</td>
                <td>操作</td>
              </tr>
              </thead>
            </table>
            <div style="position: absolute;top:70%;left: 44%;font-size: 12px;color: #fff">请先登录</div>
          </div>
        </div>
        <p class="fc_copyright">© 2017 XRAYCHAIN.COM 属ICP备17008790号-3 光轴科技 版权所有</p>
      </div>
      <div class="fc_content_right">
        <div class="fc_sale">
          <el-row>
            <el-col :span="6">
              <div class="grid-content ">&emsp;</div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content ">价格</div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content ">数量</div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content ">累计</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green ">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <div class="fc_newest">
            <span style="float: left">最新价</span>
            <span style="color:#A63C3D;float: left">¥16131.52 <img src="../../assets/img/ic_arrows_red_thin.png" alt=""></span>
            <span style="float: left;display: inline-block; margin-left: 20%">跌涨比</span><span style="color:#A63C3D">1.26%</span>
          </div>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖1</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖2</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green ">卖3</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖4</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖5</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖6</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖7</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖8</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖9</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖10</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖11</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖12</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖13</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖14</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <div class="grid-content green">卖15</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16116.66</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">0.0043</div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content ">15.8879</div>
            </el-col>
          </el-row>
          <div class="fc_deep">
            <p style="float: left">深度</p>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </div>
        <div class="fc_time">
          <el-row>
            <el-col :span="7">
              <div class="grid-content ">时间</div>
            </el-col>
            <el-col :span="7">
              <div class="grid-content ">价格</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content " style="padding-left: 20px">数量</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div class="grid-content green2">14:16:57</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content ">16113.0.</div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content green">0.0180<img src="../../assets/img/ic_arrows_green.png" alt=""></div>
            </el-col>
          </el-row>

        </div>
        <div class="fc_lightning">
          <div class="fc_down"></div>
          <el-tabs type="border-card">
            <el-tab-pane label="闪电交易">
              <div class="fc_title">
                <span>可用 <span style="color: #AC3C2C;font-size: 16px" >0.00</span>CNY</span>
                <span style="padding-left:14%">可用 <span style="color: #AC3C2C;font-size: 16px">0.00</span>TKC</span>
                <span style="color: #AC3C2C ;padding-left: 10%;cursor: pointer">资产详情>></span>
              </div>
              <div class="fc_content_footer">
                <div class="fc_place">
                  <p>一键下单 <span>
                    <el-switch
                    v-model="value1"
                    on-text=""
                    off-text=""
                    on-color="#13ce66"
                    off-color="#6E6E6E"
                    >
                    </el-switch>
                    <span style="margin-left: 10px">未开启</span>
                  </span>
                  </p>
                  <div class="fc_order">
                   <div>默认下单量 <input type="text" placeholder="0.001"></div>
                    <div>实际下单量 <input type="text" placeholder="0.0010"></div>
                  </div>
                  <div class="fc_order_number">
                    <div class="fc_number">
                      ×1
                    </div>
                    <div class="fc_number">
                      ×2
                    </div>
                    <div class="fc_number">
                      ×3
                    </div>
                    <div class="fc_number">
                      ×5
                    </div>
                    <div class="fc_number">
                      ×8
                    </div>
                    <div class="fc_number">
                      ×13
                    </div>
                    <div class="fc_number">
                      ×21
                    </div>
                    <div class="fc_number">
                      ×34
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="限价交易">配置管理</el-tab-pane>
            <el-tab-pane label="市价交易">角色管理</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import myHeader from '../../publicComponents/flashtradesPublic/flashHeader'  //行情中心公用头部
  export default {
    data() {
      return {
        activeVal: '',
        value1:true
      }
    },
    created() {
      this.activeVal = this.$route.params.active;

    },
    components: {
      myHeader
    }
  }
</script>

<style lang="scss">
  @import '../../assets/sass/global.scss';

  .fl_main {
    background: #131313;
    width: 100%;
    height: 100%;
    position: fixed;
    min-width: 1170px;
    min-height: 900px;
  }

  .fc_content {
    width: 100%;
    height: 92%;
    border-top: 3px solid #000;
    .fc_content_left {
      width: 70.8%;
      height: 100%;
      float: left;
      border-right: 4px solid #000;
      .fc_map {
        width: 100%;
        height: 76%;
        background-color: #ccc;
      }
      .fc_history {
        width: 100%;
        height: 20%;
        border-top: 4px solid #000;
        border-bottom: 4px solid #000;
        .fc_pass {
          float: left;
          width: 49.9%;
          height: 100%;
          border-right: 1px solid #000;
          position: relative;
          .fc_pass_content {
            border-top: 1px solid #000;
            border-bottom: 1px solid #000;
            width: 100%;
            thead {
              tr {
                td {
                  text-align: center;
                  font-size: 12px;
                  height: 46px;
                }
              }
            }
          }
          .fc_pass_title {
            background-color: #1D1D1D;
            width: 98%;
            font-size: 12px;
            height: 16%;
            padding-top: 1%;
            padding-left: 2%;
          }
        }
      }
      .fc_now {
        width: 49.9%;
        float: left;
        height: 100%;
        position: relative;
        .fc_now_content {
          border-top: 1px solid #000;
          border-bottom: 1px solid #000;
          width: 100%;
          thead {
            tr {
              td {
                text-align: center;
                font-size: 12px;
                height: 46px;
              }
            }
          }
        }
        .fc_now_title {
          background-color: #1D1D1D;
          width: 98%;
          font-size: 12px;
          height: 16%;
          padding-top: 1%;
          padding-left: 2%;
          .fc_revocation {
            color: #616161;
            font-size: 12px;
            line-height: 20px;
            height: 84%;
            width: 18%;
            margin-right: 1%;
            float: right;
            border: 1px solid #616161;
          }
        }
      }
      .fc_copyright {
        padding-top: 0.5%;
        font-size: 12px;
        text-align: center;
      }
    }
    .fc_content_right {
      width: 28.8%;
      height: 100%;
      float: left;
      .fc_sale {
        width: 54%;
        float: left;
        height: 75%;
        font-size: 12px;
        border-right: 1px solid #000;
        div {
          color: #ffffff;
          height: 2.8%;
          .green {
            color: #38683D;
            text-align: center;
          }
        }
        .fc_newest {
          background-color: #242427;
          height: 30px;
          line-height: 30px;
          padding-left: 10px;
        }
        .fc_deep {
          height: 40px;
          padding-left: 10px;
          line-height: 40px;
          color: #284375;
          margin-top: 4%;
          span {
            display: inline-block;
            border: 1px solid #284375;
            margin-left: 2.6%;
            line-height: 16px;
            width: 24px;
            height: 16px;
            text-align: center;
            &:hover {
              background-color: #284375;
              color: #ffffff;
              cursor: pointer;
            }
          }
        }

      }
      .fc_time {
        width: 45%;
        float: left;
        color: #fff;
        font-size: 12px;
        div {
          text-align: center;
          height: 2.5%;
          .green {
            color: #38683D;
          }
          .green2 {
            color: #5B5A57;
          }
        }
      }
      .fc_lightning {
        position: relative;
        width: 100%;
        height: 21%;
        float: left;
        border-top: 4px solid #000;
        padding-left: 4%;
        font-size: 12px;
        .fc_down{
          position: absolute;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid #8F8F8F;
          z-index: 2222;
          right: 10%;
          top: 4%;
        }
        .el-tabs--border-card {
          background: #131313;
          border: none;
          .el-tabs__header {
            background-color: #131313;
            border: none;
            padding: 0;
            position: relative;
            margin: 0;
            .el-tabs__item {
              border-top: 0;
              margin-right: -1px;
              margin-left: -1px;
              width: 50%;
              text-align: center;
            }
            .el-tabs__item.is-active {
              border-right-color: #000000;
              background-color: #1D1D1D;
              border-left-color: #000000;
            }
          }

        }
        .el-tabs--border-card > .el-tabs__content {
          padding: 15px;
          background-color: #1d1d1d;
          left: -4%;
          .fc_title {
            border-bottom: 1px solid #000;
            position: relative;
            width: 100%;
            padding-bottom: 2%;
          }
          .fc_content_footer {
            .fc_place {
              padding-left: 6%;
              padding-top: 2%;
            }
            .fc_order{
              width: 40%;
              float:left;
              ::-webkit-input-placeholder{
                color: #fff;
                padding-left: 10%;
              }
              input{
                border: 1px solid #2F2F2F;
                background-color: #242427;
                width: 50%;
                height: 28px;
                margin-top: 10px;
              }
            }
            .fc_order_number{
              float: left;
              position: relative;
              top: -20px;
              width: 60%;
              height: 100%;
              .fc_number{
                width: 40px;
                height: 20px;
                text-align: center ;
                line-height: 20px;
                border: 1px solid #2F2F2F;
                float: left;
                margin-left: 8%;
                margin-top: 6%;
                &:hover{
                  border: 1px solid #DC302E;
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

