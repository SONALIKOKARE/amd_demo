define([
	"../libs/jquery",
	"text!../template/classic.html",
	"../views/theme/classic_theme",
	"handlebars",
	"mediator",
	"css!../../css/classic"
],function(jquery,classicTemplate,ClassicThemeTemplate,handlebars,mediator){
	return function(){
		this.render = function() {

			self = this;
			$(".dataContent").removeAttr('id');
				$(".dataContent").attr('id','classic');
				$(".dataContent").html(classicTemplate);
				/***To import theme***/
				var classicThemeTemplate = new ClassicThemeTemplate();
				classicThemeTemplate.render();
				self.addEvent();
		},

		this.addEvent = function() {
			var temp_data = {
			  "title": "List of Employees",
			  "Employees": [
			    {
			        "emp_id":"12046",
			        "emp_name":{
			        	"first_name":"sonali",
			        	"last_name":"kokare"
			        }
			    },
			    {
			        "emp_id":"12045",
			        "emp_name":{
			        	"first_name":"sayali",
			        	"last_name":"bhorkar"
			        }
			    },
			    {
			        "emp_id":"12047",
			        "emp_name":{
			        	"first_name":"seema",
			        	"last_name":"jadhav"
			        }
			    },
			    {
			        "emp_id":"12048",
			        "emp_name":{
			        	"first_name":"sachin",
			        	"last_name":"----"
			        }
			    }
			  ]
			};
			var theTemplateScript = $("#classic_template").html();
			var theTemplate = Handlebars.compile (theTemplateScript);
			Handlebars.registerHelper('fullName', function(person) {
			  return person.first_name + " " + person.last_name;
			});
			$('.dataContent').html (theTemplate (temp_data));

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