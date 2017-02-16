var zNodes =[//树状图数据
			{ id:1, pId:0, name:"结构监测系统", open:true},//以id开头的数字在该id下可展开
			{ id:11, pId:1, name:"gtx132546"},
			{ id:12, pId:1, name:"gtx2547316"},
			{ id:13, pId:1, name:"gtx346346"},
			{ id:11, pId:1, name:"gtx1346342"},
			{ id:12, pId:1, name:"gtx23636343"},
			{ id:2, pId:0, name:"环境与设备监测系统", open:true, nocheck:true,},
			{ id:21, pId:2, name:"环境监测系统", open:true},
			{ id:211, pId:21, name:"gtx1233462"},
			{ id:212, pId:21, name:"gtx14233644"},
			{ id:213, pId:21, name:"gtx121242"},
			{ id:22, pId:2, name:"设备监测系统", open:true},
			{ id:221, pId:22, name:"gtx45466"},
			{ id:222, pId:22, name:"gtx7813269"},
			{ id:3, pId:0, name:"安全防范系统", open:true},
			{ id:31, pId:3, name:"gtx136539"},
			{ id:32, pId:3, name:"gtx35744"},
			
			{ id:4, pId:0, name:"通信系统", open:true},
			{ id:41, pId:4, name:"gtx94535"},
			{ id:42, pId:4, name:"gtx75453"},
			
			{ id:5, pId:0, name:"可燃气体泄露报警系统", open:true},
			{ id:51, pId:5, name:"gtx9445648"},
			{ id:52, pId:5, name:"gtx845648"},
			
			{ id:6, pId:0, name:"火灾自动报警系统", open:true},
			{ id:61, pId:6, name:"gtx745685"},
			{ id:62, pId:6, name:"gtx9456841"},
			
			{ id:7, pId:0, name:"专业管线监控系统", open:true},
			{ id:71, pId:7, name:"gtx156454"},
			{ id:72, pId:7, name:"gtx5445612"}
		];	
		
var chartData1 = [
	{
		"id":123,
		"system": "温度",
		"regular": 100,
		"irregular": 12,
		"warning": 3,
	},{
		"id":123,
		"system": "湿度",
		"regular": 300,
		"irregular": 7,
		"warning": 1,
	},{
		"id":123,
		"system": "水位",
		"regular": 300,
		"irregular": 9,
		"warning": 2,
	},{
		"id":123,
		"system": "氧气",
		"regular": 300,
		"irregular": 15,
		"warning": 4,
	},{
		"id":123,
		"system": "甲烷",
		"regular": 150,
		"irregular": 3,
		"warning": 3,
	},{
		"id":123,
		"system": "硫化氢",
		"regular": 230,
		"irregular": 6,
		"warning": 2,
	},{
		"id":123,
		"system": "集水坑液位",
		"regular": 170,
		"irregular": 5,
		"warning": 1,
	}
];
var chartData2 = [
	{
		"id":123,
		"system": "温度",
		"regular": 150,
		"irregular": 12,
		"warning": 3,
	},{
		"id":123,
		"system": "湿度",
		"regular": 200,
		"irregular": 7,
		"warning": 1,
	},{
		"id":123,
		"system": "水位",
		"regular": 220,
		"irregular": 9,
		"warning": 2,
	},{
		"id":123,
		"system": "氧气",
		"regular": 200,
		"irregular": 15,
		"warning": 4,
	},{
		"id":123,
		"system": "甲烷",
		"regular": 150,
		"irregular": 3,
		"warning": 3,
	},{
		"id":123,
		"system": "硫化氢",
		"regular": 90,
		"irregular": 6,
		"warning": 2,
	},{
		"id":123,
		"system": "集水坑液位",
		"regular": 100,
		"irregular": 5,
		"warning": 1,
	}
];
/*
<script type="text/javascript">
*/
		/*
		var data=[数据类型
				  { "DID":"1",
					"DName":"通风设备1",
					"DStatus":"开",
					"DV":"220",
					"DA":"5",
					"DAddress":"1舱",
					"Dmap":"<button>地图</button>",
					"Dhis":"<button>历史数据</button>"
				  }
				  ];
		*/
		/*
		function myonload(){
			var page=Math.ceil(data.length/9);//计算数据页数
			var n=2;
			console.log(n);
			for(var i=(n-1)*9;i<n*9;i++){
			var $tr = 
			$('<tr height="30">'+
			'<td>'+data[i].DID+'</td>'+
			'<td>'+data[i].DName+'</td>'+
			'<td>'+data[i].DStatus+'</td>'+
			'<td>'+data[i].DV+'</td>'+
			'<td>'+data[i].DA+'</td>'+
			'<td>'+data[i].DAddress+'</td>'+
			'<td>'+data[i].Dmap+'</td>'+
			'<td>'+data[i].Dhis+'</td>'+
			'</tr>');
			//将此行追加到下一行
			$("#tab1").append($tr);	
			}
		}
		*//*
	</script>
*/
		
		
		
		
		
