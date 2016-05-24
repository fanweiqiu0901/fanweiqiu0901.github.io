define(function(require,exports,module){
		
	var getStyle = require('common.js').getStyle;
	
	exports.move=function(obj,json,optional){
		//1整理可选参数
		optional=optional||{};
		optional.time=optional.time||300;
		optional.fn=optional.fn||null;
		optional.type=optional.type||'ease-out';
		//2整理start/dis
		var start={};
		var dis={};
		for(var key in json){
			start[key]=parseFloat(getStyle(obj,key));//getStyle?
			dis[key]=json[key]-start[key];	
		}
		var count=Math.round(optional.time/30);
		var n=0;
		
		//3.定时器跑起来	
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			
			n++;
			
			for(var key in json){
				switch(optional.type){
					case 'linear':
						var a=n/count;
						var cur=start[key]+dis[key]*a;
						break;
					case 'ease-in':
						var a=n/count;
						var cur=start[key]+dis[key]*a*a*a;
						break;
					case 'ease-out':
						var a=1-n/count;
						var cur=start[key]+dis[key]*(1-a*a*a);
						break;
				}
			
				if(key=='opacity'){
					obj.style.opacity=cur;
					obj.style.filter='alpha(opacity='+cur*100+')';	
				}else{
					obj.style[key]=cur+'px';
				}
			}
			
			
			if(n==count){
				clearInterval(obj.timer);
				optional.fn && optional.fn();	
			}
		},30);
	};	
});