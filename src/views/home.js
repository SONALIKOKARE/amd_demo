define([
	"jquery",
	"text!../template/home.html",
	"../views/theme/home_theme",
	"mediator",
	"css!../../css/home"
],function(jquery,homeTemplate,HomeThemeTemplate,mediator){
	return function(){
		this.render = function() {
			self = this;
			
				$(".dataContent").removeAttr('id');
				$(".dataContent").attr('id','home');
				$(".dataContent").html(homeTemplate);
				/***To import theme***/
				var homeThemeTemplate = new HomeThemeTemplate();
				homeThemeTemplate.render();

				self.addEvent();
		},
		this.addEvent = function() {
			$('.selected').show();
			$('.changeImage').click(function(){
				//$('.imageDiv').hide();
				$('.imageDiv').each(function(){
					if($(this).hasClass('selected'))
					{
						/*$(this).fadeOut(3000);*/
						$(this).hide();
						$(this).removeClass('selected');
						$(this).addClass('unselected');
					}
					else{
						/*$(this).fadeIn(3000);*/
						$(this).show();
						$(this).removeClass('unselected');
						$(this).addClass('selected');
					}
				});
			});	
			$('.homePage').click(function(){
				$('.dataContent').empty();
				$(".dataContent").removeAttr('id');
				$(".dataContent").attr('id','theme');
				var currentView = $(this).attr('title');
				mediator.publish("navigateTo",currentView);
			});
		}

	}
});