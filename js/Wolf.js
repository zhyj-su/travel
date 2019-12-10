// 基于准备好的dom，初始化echarts实例
var myChartWolf1 = echarts.init(document.getElementById('mainWolf1'));
var data = {
        all: [699.2,
            896.6,
            3508.2,
            11765.2,
            2737.6,
            2748.3,
            2447.0,
            1243.4,
            1092.0,
            1226.5,
            1007.7,
            734.1,
            677.0,
            314.5,
            361.6,
            369.2,
        ],
        mobile: [498.2,
            616.2,
            2657.9,
            8316.5,
            1511.3,
            1512.8,
            1392.6,
            594.0,
            506.0,
            585.6,
            448.1,
            299.5,
            311.1,
            145.5,
            162.8,
            186.3,
        ],
        pc: [120.0,
            184.3,
            570.4,
            2148.8,
            814.0,
            748.8,
            631.0,
            417.1,
            370.6,
            334.4,
            339.1,
            277.4,
            202.7,
            54.7,
            58.2,
            57.5,
        ],
        ott: [81.0,
            96.1,
            279.9,
            1299.9,
            412.3,
            486.7,
            423.4,
            232.3,
            215.4,
            306.5,
            220.5,
            157.2,
            163.2,
            114.3,
            140.6,
            125.4,
        ]
    }
    // 指定图表的配置项和数据
var optionWolf1 = {
    title: {
        text: '战狼',
        left: '40%',
        textStyle: {
            color: 'black'
        },
        show: false
    },
    tooltip: {
        show: true,
        trigger: 'axis'
    },

    toolbox: {
        show: true,

    },
    legend: {
        data: ['全部', '移动端', 'PC端', 'OTT端'],
        bottom: 0
    },
    xAxis: {
        name: '月份',
        data: [2017.5,
            2017.6,
            2017.7,
            2017.8,
            2017.9,
            2017.10,
            2017.11,
            2017.12,
            2018.1,
            2018.2,
            2018.3,
            2018.4,
            2018.5,
            2018.6,
            2018.7,
            2018.8
        ],
        type: 'category',
        splitLine: {
            show: true,

        },
        boundaryGap: false, //修正横坐标与网格竖轴不对齐情况
        axisLabel: {
            interval: 0,
            rotate: -15,
            align: 'left'
        },
        axisTick: {
            inside: false,
            alignWithLabel: true
        }

    },
    yAxis: {
        name: "",
        splitLine: {
            show: false
        },
    },

    series: [

        {
            name: '全部',
            symbol: 'circle', //拐点设置为实心
            symbolSize: 8,
            type: 'line',
            smooth: true, //这个是把线变成曲线
            lineStyle: {
                color: "#9d0b0b" //线颜色
            },
            itemStyle: {
                normal: {
                    color: '#9d0b0b', //拐点颜色
                    borderColor: '#9d0b0b', //拐点边框颜色
                    borderWidth: 3 //拐点边框大小
                }
            },
            data: data.all
        }, {
            name: '移动端',
            symbol: 'rect',
            symbolSize: 8,
            type: 'line',
            smooth: true, //这个是把线变成曲线
            lineStyle: {
                color: "#da2d2d",

            },
            itemStyle: {
                normal: {
                    color: '#da2d2d', //拐点颜色
                    borderColor: '#da2d2d', //拐点边框颜色
                    borderWidth: 3 //拐点边框大小
                }
            },
            data: data.mobile
        }, {
            name: 'PC端',
            symbol: 'diamond',
            symbolSize: 8,
            type: 'line',
            smooth: true, //这个是把线变成曲线
            lineStyle: {
                color: "#eb8242"
            },
            itemStyle: {
                normal: {
                    color: '#eb8242', //拐点颜色
                    borderColor: '#eb8242', //拐点边框颜色
                    borderWidth: 3 //拐点边框大小
                }
            },
            data: data.pc
        }, {
            name: 'OTT端',
            symbol: 'arrow',
            symbolSize: 8,
            type: 'line',
            smooth: true, //这个是把线变成曲线
            lineStyle: {
                color: "#f6da63"
            },
            itemStyle: {
                normal: {
                    color: '#f6da63', //拐点颜色
                    borderColor: '#f6da63', //拐点边框颜色
                    borderWidth: 3 //拐点边框大小
                }
            },
            data: data.ott
        }

    ]


};

// 使用刚指定的配置项和数据显示图表。
myChartWolf1.setOption(optionWolf1);