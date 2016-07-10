

// nav
$('.nav-btm-li').hover(function(){
	console.log($(this));
	$(this).addClass('ok').find('.nav-btm-sons').stop(true,true).slideUp(0).slideDown(300);
},function(){
	$('.ok').find('.nav-btm-sons').stop(true,true).slideUp(200);
	$(this).removeClass("OK");
})


$('#searchBtn').click(function(e){
	 $(this).toggleClass('on').next('.searchBox').stop().fadeToggle();
         e.stopPropagation();
})

$('#wechatBtn').hover(function(e){
	 $(this).toggleClass('on').next('img').stop().fadeToggle();
         e.stopPropagation();
})

 $("body").click(function(){
     $(".searchBox").fadeOut();
 })













