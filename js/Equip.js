// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mainEquip'));
var mydata = {
	 source: [
            ['设备类型', '全部', '移动端' ,'PC端', 'OTT端'],
            ['红海行动', 1927.8, 1214.4 , 317.4  , 396],
            ['战狼2', 1680.2,  977.9 ,  258.3 ,  444],
            ['湄公河行动',591.4 , 303.1  , 97.6  ,  190.7],
            ['战狼', 369.2  ,  186.3  , 57.5  ,  125.4],
            ['建军大业',310.1 ,  123.7  , 31,  155.4],
          
        ]
}
option = {
   title:{
        right:20,
        text:"电影设备使用量情况",
        textStyle:{
        	color : 'gray',
        	fontSize : '12px'
        }
    },
    legend: {
         bottom:0
    },
    tooltip: {},
    dataset: mydata,
    xAxis: {},
    yAxis: {type: 'category'},
    series: [
        {type: 'bar',itemStyle:{
        	color:"#9d0b0b"
        }},
        {type: 'bar',itemStyle:{
        	color:"#da2d2d"
        }},
        {type: 'bar',itemStyle:{
        	color:"#eb8242"
        }},
        {type: 'bar',itemStyle:{
            color:"#f6da63"
        }}
    ]
};

myChart.setOption(option);