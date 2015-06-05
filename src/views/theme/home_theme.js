define([
	"../../libs/jquery",
	"text!../../../../template/theme/home_theme.html",
	"css!../../../../../css/theme/home_theme"
],function(jquery,themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});