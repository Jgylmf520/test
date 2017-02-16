//饼状图
$(function(){
	// 第一个饼状图
	var myChart = echarts.init(document.getElementById('div1'));

	// 指定图表的配置项和数据
	option = {
		title: {
			text: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"//悬浮窗口显示格式
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: ['正常', '异常', '报警']
		},
		series: [
	{
		name: '状态类型',//a
		type: 'pie',
		radius: '55%',//饼状图大小
		center: ['45%', '60%'],//左右，上下位置
		data: [
			{ value: sum1, name: '正常' },//b:c
			{ value: sum2, name: '异常' },
			{ value: sum3, name: '报警' }
		],
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 1,
				shadowColor: 'rgba(10, 0, 0, 0.5)'
			}
		}
	}
]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
});



$(function(){
	// 第二个饼状图
	var myChart = echarts.init(document.getElementById('div2'));
	var system_name=[];
	var system_piedata=[];
	for(var i=0;i<chartData.length;i++){
		system_name.push(chartData[i].system+'异常');//左侧显示
		var system_duibi={};
		system_duibi.value=chartData[i].irregular;
		system_duibi.name=chartData[i].system+'异常';
		system_piedata.push(system_duibi);//饼状图数据
	}
	// 指定图表的配置项和数据
	option = {
		title: {
			text: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: system_name
			
		},
		series: [
	{
		name: '异常类型',
		type: 'pie',
		radius: '55%',
		center: ['55%', '60%'],
		data: system_piedata,//饼状图数据
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 1,
				shadowColor: 'rgba(10, 0, 0, 0.5)'
			}
		}
	}
]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
});


$(function(){
	// 第三个饼状图
	var myChart = echarts.init(document.getElementById('div3'));
	var system_name=[];
	var system_piedata=[];
	for(var i=0;i<chartData.length;i++){
		system_name.push(chartData[i].system+'报警');//左侧显示
		var system_duibi={};
		system_duibi.value=chartData[i].warning;
		system_duibi.name=chartData[i].system+'报警';
		system_piedata.push(system_duibi);//饼状图数据
	}
	// 指定图表的配置项和数据
	option = {
		title: {
			text: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			orient: 'vertical',
			left: 'left',
			data: system_name
		},
		series: [
	{
		name: '异常类型',
		type: 'pie',
		radius: '55%',
		center: ['55%', '60%'],
		data: system_piedata,
		itemStyle: {
			emphasis: {
				shadowBlur: 10,
				shadowOffsetX: 1,
				shadowColor: 'rgba(10, 0, 0, 0.5)'
			}
		}
	}
]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
});

			