
<template>
    <div id="container" style="min-width:400px;height:700px;">
        数据加载中。。。。。。
    </div>
</template>

<script>
// import Highcharts from 'highcharts/highstock'
import api from '../../api/api'
export default {
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });
        // setTimeout(function () {
        api.get('v1/market/history')
            .then(res => {
                var test = res.data.data;
                console.log(JSON.stringify(test))
                var ohlc = [],
                    volume = [],
                    dataLength = test.length,
                    groupingUnits = [[
                        'week',
                        [1]
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]],
                    i = 0;
                for (i; i < dataLength; i += 1) {
                    ohlc.push([
                        test[i][0], // the date
                        test[i][1], // open
                        test[i][2], // high
                        test[i][3], // low
                        test[i][4] // close
                    ]);
                    volume.push([
                        test[i][0], // the date
                        test[i][5] // the volume
                    ]);
                }

                new Highcharts.Chart('container',
                    {// 图表初始化函数，其中 container 为图表的容器 div   
                        rangeSelector: {
                            buttons: [{
                                count: 1,
                                type: 'hour',
                                text: '1小时'
                            }, {
                                count: 3,
                                type: 'hour',
                                text: '3小时'
                            }, {
                                count: 5,
                                type: 'hour',
                                text: '5小时'
                            }, {
                                type: 'all',
                                text: '全部'
                            }],
                            inputEnabled: false,
                            selected: 3
                        },
                        navigator: {  //设置滚动 滑块
                            top: 80,
                            height: 100,
                        },
                        chart: {
                            type: 'StockChart'                           //指定图表的类型，默认是折线图（line）
                        },
                        credits: {
                            enabled: false //不显示LOGO 
                        },
                        rangeSelector: {
                            selected: 1,
                            inputDateFormat: '%Y-%m-%d'
                        },
                        title: {
                            text: ''  //标题
                        },
                        xAxis: {
                            dateTimeLabelFormats: {
                                millisecond: '%H:%M:%S.%L',
                                second: '%H:%M:%S',
                                minute: '%H:%M',
                                hour: '%H:%M',
                                day: '%m-%d',
                                week: '%m-%d',
                                month: '%y-%m',
                                year: '%Y'
                            },

                        },
                        yAxis: [
                            {
                                opposite: true, //居右边显示
                                labels: {
                                    align: 'right',
                                    x: -3
                                },
                                title: {
                                    text: '成交价'
                                },
                                height: '60%',
                                lineWidth: 2
                            }, {
                                opposite: true, //居右边显示
                                labels: {
                                    align: 'right',
                                    x: -3
                                },
                                title: {
                                    text: '成交量'
                                },
                                top: '65%',
                                height: '20%',
                                offset: 0,
                                lineWidth: 2
                            }
                        ],
                        series: [
                            {
                                type: 'candlestick', //定义类型
                                name: 'AAPL',
                                color: 'green',
                                lineColor: 'green',
                                upColor: 'red',
                                upLineColor: 'red',
                                tooltip: {
                                },
                                data: ohlc,
                                dataGrouping: {
                                    units: groupingUnits
                                }
                            },
                            {
                                type: 'column',
                                name: 'Volume',
                                data: volume,
                                yAxis: 1,
                                dataGrouping: {
                                    units: groupingUnits
                                }
                            }

                        ],
                        plotOptions: {
                            series: {
                                showInNavigator: true
                            }
                        },
                        scrollbar: {
                            enabled: true //添加滚动条
                        },
                        credits: {  //去掉右下角的网址URL

                            enabled: false

                        }
                    })
            }).catch(err => {
            })
        // }, 0);
    }
}
</script>

<style lang="scss">
@import '../../assets/sass/global.scss';
.chart_main {}
</style>
