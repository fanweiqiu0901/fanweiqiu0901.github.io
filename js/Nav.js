define(function(require,exports,module){
	
	var move=require('move.js').move;
	var getByClass=require('common.js').getByClass;
	
	
	exports.Nav=function(sClass){
		
		var aDiv=getByClass(document,sClass)[0].children;
		for(var i = 0; i<aDiv.length; i++){
			aDiv[i].index = i;
			aDiv[i].onmouseover = function(){
				this.className = "item active";
				this.children[2].style.display = "block";
				this.children[2].style.top= -this.index * 36 +"px";
				}
			aDiv[i].onmouseout = function(){
				this.className = "item";
				this.children[2].style.display = "none";
				}


		}
	}	
});