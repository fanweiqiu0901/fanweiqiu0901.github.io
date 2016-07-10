// JavaScript Document
	(function(window,document,undefined){

$.fn.slide = function(){

	return this.each(function(){
		 var $aBtn = $(this).find("ol li");
		 var $oUl = $(this).find("ul");
		 var $aLi = $oUl.find("li");
		 
		 var timer = null;
		 
		 var iNow = 0;
		 
		 $aBtn.click(function(){
			  iNow = $(this).index();
			  tab();
		 });
		 
		 timer = setInterval(next,4000);
		 
		 $(this).hover(function(){
			 clearInterval(timer);
		 },function(){
			 timer = setInterval(next,4000);
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
			 
			 $oUl.stop().animate({top:-$aLi.eq(0).outerHeight()*iNow + "px"});
				 
		 }
	 });
};

})(window,document);

//轮播图over



	new WOW().init();
//1
	
	$('.list_nav li').mouseover(function (){
		$('.list_nav li span').stop().animate({width:"0"});
		$('.list_nav li span').eq($(this).index()).stop().animate({width:"100%"});
		}).click(function(){
			$('.aboutBox').css("display","none");
			$('.aboutBox').eq($(this).index()).css("display","block");
			});	
	$('.aboutLB_list li').mouseover(function (){
		$('.aboutLB_list li div').stop().animate({bottom:"100%",opacity:0});
		$('.aboutLB_list li div').eq($(this).index()).stop().animate({bottom:"0px",opacity:1});
	});
	$(".zlhb div").mouseover(function (){
		$(".zlhb div span").stop().animate({bottom:"-100%",opacity:0});
		$(".zlhb div span").eq($(this).index()).stop().animate({bottom:"0px",opacity:0.5});
	});
	
	
//2

	$(".news_right").css('height',$("#news_body").height());
	$('.news_title li').mouseover(function (){
		$('.news_title li span').stop().animate({width:"0"});
		$('.news_title li span').eq($(this).index()).stop().animate({width:"100%"});
		}).click(function(){
			$('.news_left').removeClass("active");
			$('.news_left').eq($(this).index()).addClass("active");
			});	
	$("#news_scrollImg").slide();	
			
//3
$('.LB_list').each(function(index, element){
		$(this).mousemove(function(){
			$('.LB_list').removeClass("active");
			$(this).addClass("active")
			});
		})

	$('.LBPT_nav ul li').mouseover(function (){
		$('.LBPT_nav ul li ul').hide();
		$(this).find($("ul")).show();
		$('.LBPT_nav ul li span').stop().animate({width:"0"});
		$('.LBPT_nav ul li span').eq($(this).index()).stop().animate({width:"100%"});
	});	