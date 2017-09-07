<template>
    <div class="fl_main">
        <my-header :activeVal='activeVal'></my-header>
        <section class="tk_content">
            <div class="xj_listbox">
              <div class="xj_head">
              <span>唐卡 TKC</span>
              <span>专业行情图</span>
              </div>
            </div>
          <div class="xj_chart">
            <div>左边</div>
            <div>右边</div>
          </div>
          <div class="xj_bit">
            <p>Bitcoin <img src="../../assets/img/nav_leftbar.png"></p>
            <div>
              <table>
                <thead>
                <tr>
                  <th>BTC行情</th>
                  <th>实时 (汇率6.757745)</th>
                  <th>涨幅</th>
                  <th>最高价/最低价</th>
                  <th>24H成交量</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="xj_lite">
            <p>Litecoin <img src="../../assets/img/nav_leftbar.png"></p>
            <div>
              <table>
                <thead>
                <tr>
                  <th>BTC行情</th>
                  <th>实时 (汇率6.757745)</th>
                  <th>涨幅</th>
                  <th>最高价/最低价</th>
                  <th>24H成交量</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                <tr>
                  <td>TKC</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>--</td>
                  <td>￥12233.44/$5345.43</td>
                  <td>฿12233.44/$5345.43</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      <my-footer></my-footer>
    </div>
</template>

<script>
import myHeader from '../../publicComponents/flashtradesPublic/flashHeader'  //行情中心公用头部
import myFooter from '../../publicComponents/Footer'
export default {
    data() {
        return {
            activeVal: ''
        }
    },
    created() {
        this.activeVal = this.$route.params.active;
    },
    components: {
        myHeader,
        myFooter
    }

}
</script>

<style lang="scss">
@import '../../assets/sass/global.scss';
.fl_main {
    background: #131313;
  .tk_content{margin-bottom: 50px;}
  .xj_listbox{width:1170px;background: #131313;margin: 0 auto;}
  .xj_head{width: inherit;overflow: auto;
  span:first-child{width:82px;height:20px;float: left;color: #DC302E;font-size: 16px;}
  span:last-child{width:82px;height:20px;float: right;color:#2966A3;font-size: 16px;margin-right: 56px;}
  }
  .xj_chart{width:1170px;margin:0 auto;overflow: auto;
  div:first-child{width:550px;float:left;}
  div:last-child{width:550px;float:right;}
  }
  .xj_bit{width: 1170px;margin: 0 auto;
  p{font-size: 24px;font-weight:bold;text-align: center;color: white;margin: 60px 0 20px 0;}
  div{table{width: 1170px;margin: 0 auto;
      tbody{tr{color:white;border-bottom: 1px solid black}}
      th{height: 30px;}
      td{height: 39px;background: #174773;text-align: center;}
  }}}
  .xj_lite{width: 1170px;margin: 0 auto;
    p{font-size: 24px;font-weight:bold;text-align: center;color: white;margin: 60px 0 20px 0;}
    div{table{width: 1170px;margin: 0 auto;
      tbody{tr{width:39px;color:white;border-bottom: 1px solid black}}
      th{height:30px;}
      td{height: 39px;text-align: center;background: #174773;
      }
    }}}
}
</style>

