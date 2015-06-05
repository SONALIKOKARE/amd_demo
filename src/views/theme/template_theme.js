define([
	"../../libs/jquery",
	"text!../../../../template/theme/template_theme.html",
	"css!../../../../../css/theme/template_theme"
],function(jquery,themeTemplate){
	return function(){
		this.render = function() {
			$(".themeChoice").html(themeTemplate);
		}
	}
});