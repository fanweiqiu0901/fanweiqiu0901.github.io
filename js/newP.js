define(function(require,exports,module){
	
	var getByClass=require('common.js').getByClass;
	exports.newP=function(sClass){
		
		var aDiv = getByClass(document,sClass);
		
		for(var i =0; i<aDiv.length; i++){
			 exports.newNext(aDiv[i]);
			 
			}
		}
	exports.newNext = function(obj){
		var aLi = obj.getElementsByTagName('ul')[0].children;
		var oBtn = obj.getElementsByTagName('span')[0];
		var now = 0;
		oBtn.onclick = function(){
			now++;
			now%=aLi.length;
			for(var i = 0; i<aLi.length; i++){
				aLi[i].style.display = "none";
				}
			aLi[now].style.display = "block";
			}
		}
});