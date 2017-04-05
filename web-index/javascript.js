window.onload = function(){
	var music = document.getElementById('music');
	var audio = document.getElementsByTagName('audio')[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	//音乐播放完成的时候
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
		},false)
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","paly");
			//this.style.animationPlayState = "running";
			}else{
				audio.pause();
				this.setAttribute("class","");
				//this.style.animationPlayState = "paused";
				}
		})
	page1.addEventListener("touchstart",function(event){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";
		
		setTimeout(function(){
			page2.setAttribute("class","page fadeOut");
			page3.setAttribute("class","page fadeIn");
			},5000)
		},false)
	}