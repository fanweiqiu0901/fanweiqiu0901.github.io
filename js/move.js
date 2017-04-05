function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr]:getComputedStyle(obj,false)[attr];
	}
function move(obj,json,options){
	options= options || {};
	options.time = options.time || 300;
	options.type = options.type || 'ease-out';
	options.fn = options.fn || null;
	
	var start ={};
	var dis={};
	
	for(var key in json){
		start[key]= parseFloat(getStyle(obj,key));//起始位置
		dis[key] = json[key] - start[key];//距离 = 目标 - 起始
		}
	var count = Math.round(options.time/30);
	//次数 向上取整
	var n =0;
	
	clearInterval(obj.timer);
	
	obj.timer = setInterval(function(){
		
		n++;
		for(var key in json){
			//var cur = start[key]+n*dis[key]/count;
			switch(options.type){
				
				case 'linear':
					var a = n/count;
					var cur = start[key]+ dis[key]*a;
					break;
				case 'ease-in':
					var a = n/count;
					var cur = start[key]+ dis[key]*a*a*a;
					break;
				case 'ease-out':
					var a = 1-n/count;
					var cur = start[key]+ dis[key]*(1-a*a*a);
					break;
				}
			if(key == 'opacity'){
				obj.style.opacity=cur;
				obj.style.filter = 'alpha(opacity='+cur*100+')';
				}else{ 
					obj.style[key]=cur+'px';
					}
		}
		if(n==count){
			clearInterval(obj.timer);
			options.fn && options.fn();
			}
		},30)
	
	}