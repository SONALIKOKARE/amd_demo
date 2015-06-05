define([
	"jquery",
	"text!../../../../template/theme.html",
	"mediator",
	"css!../../../../../css/theme"
],function(jquery,themeTemplate,mediator){
	var self;
	return function(){
		this.render = function() {
			self = this;
			$('.themeChoice').html(themeTemplate);				
			self._addEvent();
		},
		this._addEvent = function(){
			//console.log(mediator)
			$('.button').click(function(){
				var currentView = this.id;
				mediator.publish("navigateTo",currentView);
			});
		}
	}
});