define(function(require,exports,module){
	
	exports.getStyle=function(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];	
		}else{
			return getComputedStyle(obj,false)[attr];	
		}
	};
	
	exports.getByClass=function(oParent,sClass){
		var aEle=oParent.getElementsByTagName('*');
		var result=[];
		
		//var re = /\bbox\b/;
		var re = new RegExp('\\b'+sClass+'\\b');
		
		for(var i=0;i<aEle.length;i++){	
			if(re.test(aEle[i].className)){
				result.push(aEle[i])
			}
		}
		
		return result;
	}
});