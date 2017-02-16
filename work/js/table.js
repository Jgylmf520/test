//动态生产表格
$(function(){
			for(var i=0;i<chartData.length;i++){
				var $tr = 
				$('<tr >'+
				'<td>'+chartData[i].system+'</td>'+
				'<td><span>'+chartData[i].regular+'</span></td>'+
				'<td><span>'+chartData[i].irregular+'</span></td>'+
				'<td><span>'+chartData[i].warning+'</span></td>'+
				'<td>'+
					'<a href="map.html"><input type="button" value="地图显示" class="showMap"/></a>'+
				'</td>'+
			'</tr>');
 				//将此行追加到下一行
 				$("#system_date").append($tr);
				
			}
		});
		