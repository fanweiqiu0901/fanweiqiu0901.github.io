define(function(require,exports,module){
	
	var getByClass=require('common.js').getByClass;
	
	exports.mouseMove=function(id){
		var aBox = getByClass(document,'f_list_left');
		for(var i=0; i<aBox.length; i++){
			changeH(aBox[i].children[0]);
			}

		
		function changeH(obj){
			var aDiv = obj.children;
			for(var i =0; i<aDiv.length ; i++){
				
				aDiv[i].children[0].children[0].innerHTML =i+1;
				aDiv[i].onmousemove = function(){
					
					for(var i =0; i<aDiv.length ; i++){
						aDiv[i].className = "";
						}
					this.className ="active";
					}
				}
			}
		}
	})