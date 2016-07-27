// JavaScript Document
//banner h
$(".banner").height($(window).height()- $(".navBar").height()-150);



(function(window,document,undefined){

$.fn.slide = function(){

	return this.each(function(){
		 var $aBtn = $(this).find("ol li");
		 var $oUl = $(this).find("ul");
		 var $aLi = $oUl.find("li");
		 $oUl.width($aBtn.length*$aLi.eq(0).outerWidth());
		 var timer = null;
		 
		 var iNow = 0;
		 
		 $aBtn.click(function(){
			  iNow = $(this).index();
			  tab();
		 });
		 
		 timer = setInterval(next,7000);
		 
		 $(this).hover(function(){
			 clearInterval(timer);
		 },function(){
			 timer = setInterval(next,7000);
		 });
		 
		 function next(){
			iNow++;
			if(iNow == $aBtn.length){
				iNow = 0;
			}
			tab();
		 }
		 
		 function tab(){
			$aBtn.removeClass("active");
			 $aBtn.eq(iNow).addClass("active");
			 $oUl.stop().animate({left:-$aLi.eq(0).outerWidth()*iNow + "px"});
				 
		 }
	 });
};

})(window,document);

//轮播图over



	new WOW().init();
//1
	
	/*$('.list_nav li').mouseover(function (){
		$('.list_nav li span').stop().animate({width:"0"});
		$('.list_nav li span').eq($(this).index()).stop().animate({width:"100%"});
		}).click(function(){
			$('.aboutBox').css("display","none");
			$('.aboutBox').eq($(this).index()).css("display","block");
			});	*/
			
	$('.list_nav li').click(function(){
			$('.list_nav li').removeClass("active");
			$(this).addClass("active");
			$('.aboutBox').css("display","none");
			$('.aboutBox').eq($(this).index()).css("display","block");
			});
			
	var now = 0;
	
	$('.aboutLB_list li').mouseover(function(){
		now = $(this).index();
		tab();
		})
	function tab(){
		$('.aboutLB_list li div').stop().animate({bottom:"100%",opacity:0});
		$('.aboutLB_list li div').eq(now).stop().animate({bottom:"0px",opacity:1});
		}
	function next(){
		now++;
		now%=$('.aboutLB_list li').length;
		tab();
		}
	var timer = setInterval(next,2000);
	$('.aboutLB_list').mouseover(function(){
		clearInterval(timer)
		})
	$('.aboutLB_list').mouseout(function(){
		timer = setInterval(next,2000);
		})
		
	$(".zlhb div").mouseover(function (){
		$(".zlhb div span").stop().animate({bottom:"-100%",opacity:0});
		$(".zlhb div span").eq($(this).index()).stop().animate({bottom:"0px",opacity:0.5});
	});
	
//2

	$('.news_title li').click(function(){
			$('.news_title li').removeClass("active");
			$(this).addClass("active");
			$('.news_left').css("display","none");
			$('.news_left').eq($(this).index()).css("display","block");
			});
			
	$("#news_scrollImg").slide();	
			
//3
$('.LB_list').each(function(index, element){
		$(this).mousemove(function(){
			$('.LB_list').removeClass("active");
			$(this).addClass("active")
			});
		})

	$('.LBPT_nav ul li').mouseover(function(){
		$('.LBPT_nav ul li').find("ul").hide();
		$(this).find($("ul")).show();
		})
	
		
	$(".LBPT_nav ul li.active ul li").click(function(){
		$('.pt').css("display","none");
		$('.pt').eq($(this).index()).css("display","block");
		})
