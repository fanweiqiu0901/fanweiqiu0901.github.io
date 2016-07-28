// JavaScript Document
	
	new WOW().init();
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
		 
		 timer = setInterval(next,6000);
		 
		 $(this).hover(function(){
			 clearInterval(timer);
		 },function(){
			 timer = setInterval(next,6000);
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
$("#news_scrollImg").slide();	


	
// listNav
$(function(){
	$('.list_box').eq(0).css('display','block');
	$('.listNav>li').click(function(){
		$('.listNav>li').removeClass('active');
		$('.list_box').css('display','none');
		$(this).addClass('active');
		$('.list_box').eq($(this).index()).css('display','block');
	})
});

$(function(){
	$('.list2_box').eq(0).css('display','block');
	$('.list2').click(function(){
		$('.list2').removeClass('active');
		$('.list2_box').css('display','none');
		$(this).addClass('active');
		$('.list2_box').eq($(this).index()).css('display','block');
	});
});
//download
$(".addmore").click(function(){
	$(this).hide();
	$(".HidBox").animate({height:'2784px'}, "slow")
	})

