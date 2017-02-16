//浮动窗口自写js
$(function(){
			var trLength;
			$("#system_date span").click(function(){
			popWin("detail");//加载窗口
			trLength=$(this).html();//获得条数
			var m=Math.ceil(trLength/9);//计算数据页数
			$("#pageAll").html(m);
			var n=1;
			$("#pageNow").html(1);
			dataAdd(n,m,trLength);
		});
		$("#lastPage").click(function(){
			var pageNow=$("#pageNow").html();
			if(pageNow==1){
				alert("已经是第一页");
			}else{
				pageNow--;
				$("#pageNow").html(pageNow);
				var m=Math.ceil(trLength/9);//计算数据页数
				var n=pageNow;
				dataAdd(n,m,trLength);
			}
		});
		$("#nextPage").click(function(){
			var pageNow=$("#pageNow").html();
			if(pageNow==$("#pageAll").html()){
				alert("已经是最后一页");
			}else{
				pageNow++;
				$("#pageNow").html(pageNow);
				var m=Math.ceil(trLength/9);//计算数据页数
				var n=pageNow;
				dataAdd(n,m,trLength);
			}
		});
		
		});
		function dataAdd(n,m,trLength){
			$("#tab1 tr").remove();
			if(n<m){
				x=n*9;
			}else{
				x=trLength;
			}
			for(var i=(n-1)*9;i<x;i++){
			var $tr = 
			$('<tr height="30">'+
			'<td>'+(i+1)+'</td>'+
			'<td>'+"通风设备"+(i+1)+'</td>'+
			'<td>'+"开"+'</td>'+
			'<td>'+220+'</td>'+
			'<td>'+5+'</td>'+
			'<td>'+Math.ceil(Math.random()*20)+"廊"+'</td>'+
			'<td><button>地图</button></td>'+
			'<td><button>历史数据</button></td>'+
			'</tr>');
			//将此行追加到下一行
			$("#tab1").append($tr);	
			}
		}