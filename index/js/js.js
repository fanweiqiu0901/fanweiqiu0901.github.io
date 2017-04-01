window.onload =window.onresize= function(){
	var page = document.getElementsByClassName("page");
	var wrap = document.getElementById("wrap");
	var h = document.documentElement.clientHeight;
	document.getElementsByClassName("page1_top_bg")[0].style.height = h*0.6 + "px";
	document.getElementsByClassName("page1_bottom_bg")[0].style.height = h*0.4 + "px";
	for(var i=0; i<page.length; i++){
		page[i].style.height = h + "px";
		}
	//鼠标滚轮
	addMouseWheel(document,function(down){
		if(down){
			var t = wrap.offsetTop - h;
			if(t <= -wrap.offsetHeight + h ){ t= -wrap.offsetHeight +h;}
			move(wrap,{'top': t})
			//wrap.style.top = wrap.offsetTop - h + "px";
			}else{
				var d = wrap.offsetTop + h;
				if(d>=0){ d = 0;}
				move(wrap,{'top': d})
				//wrap.style.top = wrap.offsetTop + h + "px";
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
			
			
			
			
			
			
			
			
			
			
			
	
	
	}