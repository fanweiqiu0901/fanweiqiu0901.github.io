
window.onready=function(){

	new WOW().init();

	var oSmallPrev=document.getElementById('sBanner_prev');
	var oSmallNext=document.getElementById('sBanner_next');
	var oSmallBanner=document.getElementById('smallBanner');
	var aSmallBannerLi=oSmallBanner.getElementsByTagName('li');
	var now=0;
	var now2=0;

	// small banner start
	oSmallNext.onclick=next2;
	function next2(){		
		now2++;
		if(now2==aSmallBannerLi.length){
			now2=0;
		}
		tab2();
	};

	oSmallPrev.onclick=function(){
		now2--;
		if(now2==-1){
			now2=aSmallBannerLi.length-1;
		}
		tab2();
	}

	function tab2(){
		for(var i=0;i<aSmallBannerLi.length;i++){
			aSmallBannerLi[i].className='';	
		}
		aSmallBannerLi[now2].className='cur';
	}
	
	var timer2=setInterval(next2,2000);
	oSmallBanner.onmouseover=function(){
		clearInterval(timer2);	
	};
	oSmallBanner.onmouseout=function(){
		timer2=setInterval(next2,2000);	
	};

	// small banner end

	var oIconPicBox=document.getElementById('iconPicBox');
	var oToggleIcon=document.getElementById('toggleIcon');
	var oIconpic=document.getElementById('iconPic');

	var now3=0;
	var timer3=setInterval(next3,2000);
	oIconpic.onmouseover=function(){
		clearInterval(timer3);
	};
	oIconpic.onmouseout=function(){
		timer3=setInterval(next3,2000);	
	}

	function next3(){
		now3++;
		if(now3==oIconPicBox.children.length){
			now3=0;
		}
		tab3();
	}
	function tab3(){
		for(var i=0;i<oIconPicBox.children.length;i++){
			oIconPicBox.children[i].className='iconPicFa';	
			oToggleIcon.children[i].className='';

		}
		oIconPicBox.children[now3].className='iconPicFa cur';
		oToggleIcon.children[now3].className='on';
	}

}

