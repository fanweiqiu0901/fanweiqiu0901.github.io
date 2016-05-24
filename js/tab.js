define(function(require,exports,module){
	
	var getByClass=require('common.js').getByClass;
	
	exports.tab=function(sClass){
		var oTab=getByClass(document,sClass)[0];
		var oBtn = oTab.children[0];
		var aDiv = oTab.children[1];
		var aDiv2 = oTab.children[2];
		oBtn.children[1].onclick = tab;
		oBtn.children[3].onclick = tab;
		var timer = setInterval(tab,8000);
		oTab.onmouseover = function(){
			clearInterval(timer);
			
			}
		oTab.onmouseout = function(){
			timer = setInterval(tab,8000);
			
			}
		function tab(){
			if(oBtn.children[3].className=="ipt"){
				aDiv2.style.display = 'block';
				aDiv.style.display = 'none';
				oBtn.children[3].className="active ipt";
				oBtn.children[1].className="ipt";
				
				}else{
					
				aDiv2.style.display = 'none';
				aDiv.style.display = 'block';
				oBtn.children[1].className="active ipt";
				oBtn.children[3].className="ipt";
				}
			}
		
		}
	
	
});