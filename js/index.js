function amt(id,id2){
	var div = document.getElementsByClassName(id)[0];
	var div2 = document.getElementsByClassName(id2)[0];
	var chd = div2.getElementsByTagName("dl")[0].children;
	var num = div2.getElementsByTagName("dl")[0].children.length;
	div.onmouseover = function(){
		div2.style.transition= "0.1s";
		div2.style.opacity="1";
		for(var i=0; i<num ; i++){
			chd[i].style.transition= i/30 +"s";
			chd[i].style.transform="scaleX(1)";
			}
		}
	div2.onmouseout = function(){
		div2.style.transition= "2s";
		div2.style.opacity="0";
		for(var i=num-1; i>=0 ; i--){
			chd[i].style.transition= (num-i)/20 +"s";
			chd[i].style.transform="scaleX(0)";
			}
		}
	}
window.onload=function(){
	amt("img-1","img-box-1");
	amt("img-2","img-box-2");
	amt("img-3","img-box-3");
	}