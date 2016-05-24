define(function(require,exports,module){
	
	var getByClass=require('common.js').getByClass;
	var move=require('move.js').move;
	
	
	exports.adBanner=function(sClass){
		
		var aDiv = getByClass(document,sClass);
		
		for(var i =0; i<aDiv.length; i++){
			 exports.mLeft(aDiv[i]);
			 
			}
	}
	
	exports.mLeft = function(obj){
		var oNext = obj.children[2];
		var oPre = obj.children[1];
		var oUl = obj.children[0];
		oUl.style.width = oUl.children.length*obj.offsetWidth+'px';
		var now =0;
		var timer = null;
		
		oNext.onclick = next;
		oPre.onclick = pre;
		
		timer = setInterval(next,2000);
	
		obj.onmouseover = function(){
			clearTimeout(timer)
			}
		obj.onmouseout = function(){
			timer = setInterval(next,2000);
			}
		
		function next(){
			now++;
			if(now == oUl.children.length){
				now =0;
				}
			move(oUl,{left:-now*oUl.children[0].offsetWidth});
			}
		function pre(){
			now--;
			if(now == -1){
				now = oUl.children.length-1;
				}
			move(oUl,{left:-now*oUl.children[0].offsetWidth});
			}
	}
});