// JavaScript Document
	
new WOW().init();
//banner h

$(".banner").height($(window).height()- $(".navBar").height()-150);
$(".plBox").height($(".banner").height());
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




	
// listNav
$(function(){
	if($('.navList2').length>0){
		$('.list2_box').eq(0).css('display','block');
		$('.navList2').eq(0).css('display','block');
		$('.listNav>li').mouseover(function(){
			$('.navList2').css('display','none');
			var l = $(this).index()/2*136;
			$('.navList2').eq($(this).index()/2).css({display:'block',left:l});
			$('.listNav>li').removeClass('active');
			$(this).addClass('active');
			$('.list_box').eq($(this).index()).css('display','block');
			});
		$('.list2').click(function(){
			var id = $(this).attr('name');
			$('.list2').removeClass('active');
			$('.list2_box').css('display','none');
			$(this).addClass('active');
			$('#' + id).css('display','block');
			
		})}else{
			$('.list_box').eq(0).css('display','block');
		$('.listNav>li').click(function(){
			$('.listNav>li').removeClass('active');
			$('.list_box').css('display','none');
			$(this).addClass('active');
			$('.list_box').eq($(this).index()).css('display','block');
			});
			}
			
			
			//轮播图over
			$("#news_scrollImg").slide();
			
			//download
			$(".addmore").click(function(){
				$(this).hide();
				$(".HidBox").animate({height:'2784px'}, "slow")
				})
				
			//tab
			$('.tabBox .tabBody').eq(0).css('display','block');
			$(".tabBox .tabHead").click(function(){
				$(".tabBox .tabHead").removeClass("active");
				$(this).addClass("active");
				$('.tabBox .tabBody').css('display','none');
				$('.tabBox .tabBody').eq($(this).index()).css('display','block');
				})	
				
			//视频
			$('.plBox img').click(function(){
				$('.plBox img,.banner_title img').hide();
				$('.plBox video').show();
				})
});


