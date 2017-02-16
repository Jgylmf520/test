//地图
var data=[
		{
			"SBLX":"温湿度",		//类型
			"SBBH":"XYZ123",		//编号
			"ZB_X":116.417854,		//x坐标
			"ZB_Y":39.921988,		//y坐标
			"SBZT":"异常",			//状态
			"SBDZ":"王府井大街88号"	//地址
		},
		{
			"SBLX":"压力",		//类型
			"SBBH":"XYZ456",		//编号
			"ZB_X":116.406605,		//x坐标
			"ZB_Y":39.921585,		//y坐标
			"SBZT":"报警",			//状态
			"SBDZ":"测试地点1"	//地址
		},
		{
			"SBLX":"电力",		//类型
			"SBBH":"XYZ789",		//编号
			"ZB_X":116.412222,		//x坐标
			"ZB_Y":39.912345,		//y坐标
			"SBZT":"异常",			//状态
			"SBDZ":"测试地点2"	//地址
		}
	];
	var data_test=[];
	for(var i=0;i<data.length;i++){
		var arr=[];
		arr.push(data[i].ZB_X);
		arr.push(data[i].ZB_Y);
		arr.push("设备类型:"+data[i].SBLX+"<br>"+"设备编号:"+data[i].SBBH+"<br>"+"设备状态:"+data[i].SBZT+"<br>"+"设备地址:"+data[i].SBDZ);
		data_test.push(arr);
	}
	// 百度地图API功能	
	map = new BMap.Map("allmap",{enableMapClick:false});
	map.centerAndZoom(new BMap.Point(116.417854,39.921988), 9);
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	var data_info = data_test;
	var opts = {
				width : 250,     // 信息窗口宽度
				height: 150,     // 信息窗口高度
				title : "信息窗口" , // 信息窗口标题
				enableMessage:true//设置允许信息窗发送短息
			   };
	for(var i=0;i<data_info.length;i++){
		var myIcon = new BMap.Icon("440.jpg", new BMap.Size(20,30));//自定义标注图标//x，y
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]),{icon:myIcon});  // 创建标注
		//var content = "";//data_info[i][2];
		//map.addOverlay(marker);               // 将标注添加到地图中
		//addClickHandler(marker);
	}
	function addClickHandler(marker){
		
		marker.addEventListener("click",function(e){
			//$("#"+id).next().children().eq(0)
			var bl=$(this).attr("bl");
			var bh=$(this).attr("id");
			var zt;
			if($(this).attr("state")=="zc"){
				zt="正常";
			}
			if($(this).attr("state")=="yc"){
				zt="异常";
			}
			if($(this).attr("state")=="bj"){
				zt="报警";
			}
			//"设备类型:"+$("#"+bl).next().children().eq(1).text()+"<br>"+"设备编号:"+$("#"+bh).next().children().eq(1).text()+"<br>"+"设备状态:"+zt+"<br>"+"设备地址:"+"北京xx县xx地"
			var content="设备类型:"+$("#"+bl).next().children().eq(1).text()+"<br>"+"设备编号:"+$("#"+bh).next().children().eq(1).text()+"<br>"+"设备状态:"+zt+"<br>"+"设备地址:"+"北京xx县xx地";///////////////////////////////////////////////////////////////////////////////////////////此处获得数据库数据
			openInfo(content,e)}
		);
	}
	function openInfo(content,e){
		var p = e.target;
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	}