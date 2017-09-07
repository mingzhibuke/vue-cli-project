<template>
    <div class="column_main">
        <div class="container ">
            <div class="column_box column_box_none">
                <img src="../../assets/img/img_home_complete.png">
                <div class="box">
                    <span class="msg_title">安全</span>
                    <p class="msg_text">光轴链在硬软安全策略基础上加入了经济逻辑安全策略，实现有组织的去中心化管理机制。</p>
                </div>
            </div>
            <div class="column_box">
                <img src="../../assets/img/img_home_efficient.png">
                <div class="box">
                    <span class="msg_title">完备</span>
                    <p class="msg_text">光轴链社会化网络结构与区块链技术的立体化结合，可以全面涉及各层级商业、生活、娱乐等多元化需求。</p>
                </div>
            </div>
            <div class="column_box ">
                <img src="../../assets/img/img_home_security.png">
                <div class="box">
                    <span class="msg_title">高效</span>
                    <p class="msg_text">将区块链的直链方式升级为网状P2P和串行链技术的结合和互联，成立体化多层次的区块链形态。</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default ({

})
</script>
<style lang="scss">
@import '../../assets/sass/global.scss';
.column_main {
    .container {
        font-size: 20px;
        width: 1170px;
        margin: 0 auto;
        padding: 108px 0 156px 0;
        overflow: hidden;
        .column_box {
            position: relative;
            float: left;
            width: 370px;
            height: 455px;
            margin-left: 30px;
            .box {
                position: absolute;
                bottom: 77px;
                left: 0;
                padding: 0 30px;
                text-align: center;
                .msg_title {
                    display: inline-block;
                    padding-bottom: 20px;
                    font-size: 28px;
                    color: #202730;
                    font-weight: bold;
                }
                .msg_text {
                    font-size: 12px;
                    color: #202730;
                    text-align: center;
                    line-height: 26px;
                }
            }
        }
        .column_box_none {
            margin-left: 0;
        }
    }
}
</style>