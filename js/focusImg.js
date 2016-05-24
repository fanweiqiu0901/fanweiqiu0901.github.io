define(function(require,exports,module){
	
	var move=require('move.js').move;
	var getByClass=require('common.js').getByClass;
	
	
	exports.focusImg=function(sClass){
		
		var aDiv = getByClass(document,sClass);
		
		for(var i =0; i<aDiv.length; i++){
			exports.Img(aDiv[i]);
			
			}
	}
	exports.Img=function(obj){
		var aBtn = obj.children[1].children;
		var oBox = obj.children[0];
		
		var iNow =0;
		var timer = null;
		oBox.innerHTML = oBox.innerHTML+oBox.innerHTML;
		oBox.style.width =oBox.children.length*obj.offsetWidth+ 'px';
		
		var ready = true;
		
		for(var i=0; i<aBtn.length; i++){
			(function(index){
				aBtn[i].onclick = function(){
					iNow = index;
					exports.tab();
					}
				})(i)
			}
		timer = setInterval(function(){
			
			exports.next();
			
			},2000);
	
		obj.onmouseover = function(){
			clearTimeout(timer)
			}
		obj.onmouseout = function(){
			timer = setInterval(exports.next,2000);
			}
		exports.next =function(){
			
			if(!ready) return;
			ready = false;
			
			if(oBox.offsetLeft<=-(oBox.children.length/2)*oBox.children[0].offsetWidth){	
				oBox.style.left='0px';
				iNow =0;
				}
			
			iNow++;
	
			exports.tab();
			
		}	
		
		exports.tab = function(){
			for(var i=0; i<aBtn.length;i++){
				aBtn[i].className ='';
				}
			if(iNow ==aBtn.length){
				aBtn[0].className ='active';
				}else{
					aBtn[iNow].className ='active';
					}
		
			move(oBox,{left:-iNow*obj.offsetWidth},{fn:function(){
				ready = true;	
				
				if(iNow ==aBtn.length){
					oBox.style.left=0;
					iNow =0;
					
					}
				}
			})
		}	
	}
});