<template>
    <footer>
        <div class="footer_content">
            <div class="f_content_left">
                <ul class="f_title_list">
                    <li class="f_item" v-for="(item,index) in titleDta" :key="index">{{item}}</li>
                </ul>
                <div class="f_box">
                    <ul class="f_menu f_about_list">
                        <li class="fa_item" v-for="(item,index) in aboutData" :key="index">
                            <a href="#">{{item.textVal}}</a>
                        </li>
                    </ul>
                    <ul class="f_menu f_server_list">
                        <li class="fa_item" v-for="(item,index) in serverData" :key="index">
                            <a href="#">{{item.textVal}}</a>
                        </li>
                    </ul>
                    <ul class="f_menu f_msg_list">
                        <li class="fa_item" v-for="(item,index) in msgData" :key="index">
                            <a href="#">{{item.textVal}}</a>
                        </li>
                    </ul>
                    <ul class="f_menu f_fl_list">
                        <li class="fa_item" v-for="(item,index) in friendshipLinkData" :key="index">
                            <a href="#">{{item.textVal}}</a>
                        </li>
                    </ul>
                    <div class="f_menu f_QR_cord_massage">
                        <span class="f_QR_cord_massage_text">使用手机上的二维码扫描软件拍摄右侧二维码，即可直接下载光轴链APP。</span>
                    </div>
                </div>
            </div>
            <div class="f_content_right">
                <img src="../assets/img/erweima.png">
            </div>
        </div>
        <div class="f_copytright">
            <span class="f_copytright_text">© 2017 XRAYCHAIN.COM 属ICP备17008790号-3 光轴科技 版权所有</span>
        </div>
    </footer>
</template>
<script>
export default ({
    data() {
        return {
            titleDta: ['关于唐卡', '工具与服务', '费率与声明', '友情链接', '扫码下载光轴链APP'],
            aboutData: [{
                url: '#',
                textVal: '大事记'
            }, {
                url: '#',
                textVal: '管理团队'
            }, {
                url: '#',
                textVal: '主要股东'
            }, {
                url: '#',
                textVal: '光轴资质'
            }, {
                url: '#',
                textVal: '联系我们'
            },],
            serverData: [{
                url: '#',
                textVal: 'app下载'
            }, {
                url: '#',
                textVal: 'API文档'
            }],
            msgData: [{
                url: '#',
                textVal: '安全保障'
            }, {
                url: '#',
                textVal: '用户协议'
            }, {
                url: '#',
                textVal: '法律声明'
            }, {
                url: '#',
                textVal: '费率声明'
            }],
            friendshipLinkData: [{
                url: '#',
                textVal: 'TKC官网'
            }, {
                url: '#',
                textVal: '赤乌官网'
            }, {
                url: '#',
                textVal: '5KM'
            }, {
                url: '#',
                textVal: 'TailorX'
            }, {
                url: '#',
                textVal: '创盟'
            }]
        }
    }
})
</script>
<style lang="scss">
@import '../assets/sass/global.scss';
footer {

    position: relative;
    height: 331px;
    background: #131313;
    opacity: .8;
    .footer_content {
        position: absolute;
        top: 0;
        left: 50%;
        margin: 0 0 0 -565px;
        width: 1170px;
        overflow: hidden;
        .f_content_left {
            float: left;
            width: 80%;
          a{text-decoration: none;}
            .f_title_list {
                overflow: hidden; // border: 1px solid red;
                padding: 30px 0;
                .f_item {
                    float: left;
                    width: 165px; // text-align: center;
                    font-size: 18px;
                    color: #555;
                    margin-right: 11px;
                }
            }
            .f_box {
                overflow: hidden;
                padding-top: 30px;
                .f_menu {
                    float: left;
                    .fa_item {
                        width: 165px;
                        margin-bottom: 13px;
                        margin-right: 11px;
                        a:hover {
                            color: #FF0200;
                            transition: all 1s;
                        }
                    }
                    .f_QR_cord_massage_text {
                        width: 205px;
                        display: inline-block;
                    }
                }
            }
        }
        .f_content_right {
            float: right;
            width: 20%;
            text-align: right;
            padding-top: 30px;
        }
    }
    .f_copytright {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 46px;
        line-height: 46px;
        text-align: center;
        border-top: 1px solid #282828;
        .f_copytright_text {
            font-size: 14px;
            color: #555;
        }
    }
}
</style>
