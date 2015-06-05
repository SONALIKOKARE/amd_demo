define([
	"../libs/jquery",
	"text!../template/template.html",
	"../views/theme/template_theme",
	"mediator",
	"../js/model",
	"handlebars",
	"css!../../css/template"
],function(jquery,templateTemplate,TemplateThemeTemplate,mediator,Model,handlebars){
	return function(){
		var categoryListBooks;
		this.render = function() {
			self = this;
			$(".dataContent").removeAttr('id');
			$(".dataContent").attr('id','template');
			$(".dataContent").html(templateTemplate);
			/***To import theme***/
			var templateThemeTemplate = new TemplateThemeTemplate();
			templateThemeTemplate.render();			
			var getCategoryList = new Model();
			
			$.when(getCategoryList.getServicesData()).then(function(books) {
				//console.log(books);
				categoryListBooks = books;
				self.preRender(books);
				self.addEvent();
			});
		},
		this.preRender = function(books){
			var theTemplateScript = $("#template_template").html();
			var theTemplate = Handlebars.compile (theTemplateScript);
			Handlebars.registerHelper('fullName', function(person) {
			  return person.first_name + " " + person.last_name;
			});
			$('.dataContent').html(theTemplate (books));
		},
		this.addEvent = function() {
			$('.readButton').click(function(){
				mediator.publish("openReadModal", categoryListBooks, $(this).attr('data-index'));
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