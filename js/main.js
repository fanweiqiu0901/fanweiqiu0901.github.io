/*window.onload = function(){
	
	seajs.use("focusImg.js",function(ex){
	ex.focusImg("slider");
	});
	seajs.use("mouseMove.js",function(ex){
		ex.mouseMove();
		});
	seajs.use("adBanner.js",function(ex){
		ex.adBanner("sp_ul_warp");
		});
	seajs.use("tab.js",function(ex){
		ex.tab("time_limit");
		});
	seajs.use("newP.js",function(ex){
		ex.newP("newP");
		});
	seajs.use("Nav.js",function(ex){
		ex.Nav("service_list");
		});
	}*/
define(function(require, exports,module){
	
	require("focusImg.js").focusImg("slider");
	require("mouseMove.js").mouseMove();
	require("adBanner.js").adBanner("sp_ul_warp");
	require("tab.js").tab("time_limit");
	require("newP.js").newP("newP");
	require("Nav.js").Nav("service_list");

	});
	
