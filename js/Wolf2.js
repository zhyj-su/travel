 // 基于准备好的dom，初始化echarts实例
 var myChartWolf2 = echarts.init(document.getElementById('mainWolf2'));
 var data = {
         all: [17507.0,
             4600.6,
             3246.6,
             4834.3,
             3213.5,
             2470.7,
             1851.5,
             1649.0,
             1490.5,
             1680.2,
         ],
         mobile: [12832.5,
             2948.2,
             1837.9,
             3163.8,
             2041.9,
             1094.8,
             768.5,
             826.2,
             783.2,
             977.9,

         ],
         pc: [2690.1,
             912.4,
             713.7,
             695.4,
             573.4,
             433.9,
             391.0,
             351.2,
             303.8,
             258.3,

         ],
         ott: [1984.4,
             740.0,
             695.0,
             975.1,
             598.2,
             942.0,
             692.0,
             471.6,
             403.5,
             444.0,

         ]
     }
     // 指定图表的配置项和数据
 var optionWolf2 = {
     title: {
         text: '战狼2',
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
         data: [
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
 myChartWolf2.setOption(optionWolf2);