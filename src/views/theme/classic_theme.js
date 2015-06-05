define([
	"../../libs/jquery",
	"text!../../../../template/theme/classic_theme.html",
	"css!../../../../../css/theme/classic_theme"
],function(jquery,themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});