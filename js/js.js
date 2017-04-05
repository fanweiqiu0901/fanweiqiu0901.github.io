window.onload =window.onresize= function(){
	//document.documentElement.style.fontSize = 32/320*document.documentElement.clientWidth + "px";
	
	var page = document.getElementsByClassName("page");
	var wrap = document.getElementById("wrap");
	var h = document.documentElement.clientHeight;
	document.getElementsByClassName("page1_top_bg")[0].style.height = h*0.6 + "px";
	document.getElementsByClassName("page1_bottom_bg")[0].style.height = h*0.4 + "px";
	
	var chd = document.getElementById("page2_text").children;
	var num = chd.length;
	
	var page3_chd = document.getElementById("page3_box_chd").getElementsByTagName("ul");
	var page3_num = page3_chd.length;
	
	//page3 onmouseover
	for(var i=0; i<page3_num; i++){
		for(var j=0; j<page3_chd[i].children.length; j++){
			page3_chd[i].children[j].onmouseover = function(){
				move(this.children[0],{'height':this.clientHeight})
				}
			page3_chd[i].children[j].onmouseout = function(){
				move(this.children[0],{'height':0})
				}
			}
		}
			
	for(var i=0; i<page.length; i++){
		page[i].style.height = h + "px";
		}
	//鼠标滚轮
	addMouseWheel(document,function(down){
		//p2
		for(var i=0; i<num ; i++){
				chd[i].style.transform="scaleX(0)";
				}
		//p3
		for(var i=0; i<page3_num; i++){
			for(var j=0; j<page3_chd[i].children.length; j++){
				page3_chd[i].children[j].style.transform="scaleY(0)";
				}
			}
		if(down){
			var t = wrap.offsetTop - h;
			if(t <= -wrap.offsetHeight + h ){ t= -wrap.offsetHeight +h;}
			move(wrap,{'top': t})
			//wrap.style.top = wrap.offsetTop - h + "px";
			
			//page2
			
			if(wrap.offsetTop== 0){
				for(var i=0; i<num ; i++){
					chd[i].style.transition= "1s "+ (i*0.2) +"s";
					chd[i].style.transform="scaleX(1)";
					}
				}else if(wrap.offsetTop== -h){
					for(var i=0; i<page3_num; i++){
						for(var j=0; j<page3_chd[i].children.length; j++){
							page3_chd[i].children[j].style.transition= "1s "+ (i*0.2) +"s";
							page3_chd[i].children[j].style.transform="scaleY(1)";
							}
						}
					}
			}else{
				var d = wrap.offsetTop + h;
				if(d>=0){ d = 0;}
				move(wrap,{'top': d})
				//wrap.style.top = wrap.offsetTop + h + "px";
				
				//page2
			
				if(wrap.offsetTop== -2*h){
					for(var i=0; i<num ; i++){
						chd[i].style.transition= "1s "+ (i*0.2) +"s";
						chd[i].style.transform="scaleX(1)";
						}
					}else if(wrap.offsetTop== -3*h){
						for(var i=0; i<page3_num; i++){
							for(var j=0; j<page3_chd[i].children.length; j++){
								page3_chd[i].children[j].style.transition= "1s "+ (i*0.2) +"s";
								page3_chd[i].children[j].style.transform="scaleY(1)";
								}
							}
						}
				}
		})
	function addMouseWheel(obj,fn){
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
			obj.addEventListener('DOMMouseScroll',fnwhell,false)
			}else{
				obj.onmousewheel = fnwhell;
				}
		function fnwhell(ev){
			    obj.onmousewheel = null;
				var oEvent = ev||event;
				if(oEvent.wheelDelta){
					var down = oEvent.wheelDelta<0? true:false;
					
					}else{
						var down = oEvent.detail>0? true:false;
					}
					fn(down);
					setTimeout(function(){
						obj.onmousewheel = fnwhell;
						},1000)
					oEvent.preventDefault && oEvent.preventDefault();
					return false;
				}	
			}
			
			
		//滚动条
	var oBar=document.getElementById('page3_bar_chd');
	var oBarParent=oBar.parentNode;

	var oContentParent=document.getElementById('page3_box');
	var nowUl=oContentParent.children[0];
	
	
	
	var timer=null;
	
	//1.拖拽
	oBar.onmousedown=function(ev){
		var oEvt=ev||event;
		var disY=oEvt.clientY-oBar.offsetTop;
		document.onmousemove=function(ev){
			var oEvt=ev||event;
			var t=oEvt.clientY-disY;//计算
			
			setPos(t);
			
		};
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;	
		};
		
		return false;
	};
	function setPos(t){
		if(t<0) t=0;//限定
		if(t>oBarParent.offsetHeight-oBar.offsetHeight)
			t=oBarParent.offsetHeight-oBar.offsetHeight;
			
		oBar.style.top=t+'px';//使用
		
		var scale=oBar.offsetTop/(oBarParent.offsetHeight-oBar.offsetHeight);
		//控制内容
		console.log(oContentParent.offsetHeight+"|"+nowUl.offsetHeight)
		nowUl.style.top=scale*(oBarParent.offsetHeight-nowUl.offsetHeight)+'px';		
	}	
			
	//手机
	var startY='';
	document.addEventListener("touchstart",function(e){
		startPoint = e.changedTouches[0].pageY;
		startY=list.offsetLeft;
		})
	document.addEventListener("touchmove",function(e){
		var nowPoint = e.changedTouches[0].pageY;
		var dis=nowPoint-startPoint;
		var top=startY+dis;
		console.log(top)
		})
	document.addEventListener("touchend",function(e){

		})		
			
	//..2
	


	
	}