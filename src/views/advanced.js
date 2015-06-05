define([
	"../libs/jquery",
	"text!../template/advanced.html",
	"../views/theme/advanced_theme",
	"mediator",
	"text!../template/advanced/educator.html",
	"text!../template/advanced/treksTravels.html",
	"text!../template/advanced/welcomeToReading.html",
	"scroll",
	"css!../../css/advanced",
	"css!../../css/scroll",
	"css!../../css/blue_scroll",
	"scrollto"
],function(jquery,advancedTemplate,AdvancedThemeTemplate,mediator,educatorContentTemplate,treksTravelsContentTemplate,WelcomeToReadingContentTemplate, Scroll,Loadcss){
	var self,currentLeftPanel="educator";
	return function(){
		self = this;
		
		this.render = function() {
			$(".dataContent").removeAttr('id');
			$(".dataContent").attr('id','advanced');
			$(".dataContent").html(advancedTemplate);
			/***To import theme***/
			var advancedThemeTemplate = new AdvancedThemeTemplate();
			advancedThemeTemplate.render();

			self.preRender();
			self._addEvents();
			
		},
		this.preRender = function(){
			if(currentLeftPanel == "educator"){
				$(".descriptionContainer").html(educatorContentTemplate);
			}
			else if(currentLeftPanel == "treksTravels"){
				$(".descriptionContainer").html(treksTravelsContentTemplate);
			}else
			{
				$(".descriptionContainer").html(WelcomeToReadingContentTemplate);
			}

			var scroll = new Scroll();
			scroll.scrollbar('main_content');

			var leftTabs = $('.leftTabs').empty();
            var mainContentSections = $('.BoardContainer').children('.BoardContainer').children();
           // //console.log(mainContentSection);
            mainContentSections.each(function(){
                var mainContentSection = $(this);
                var $link = $('<a>',{
                    text: mainContentSection.attr('title')
                }).on('click',function(){
                	$('.tab').removeClass('activeTab');
                	$(this).addClass('activeTab');
                	$('#'+mainContentSection.attr('id')).ScrollTo({
		                duration: 200,
		                durationMode: 'all'
		            });
                }).appendTo(leftTabs);
                $('.leftTabs').find('a').addClass('tab');
            });
		},
		this._addEvents = function(){
			$('.titleContainer .title').click(function(){
				self.leftContentTabShow(this);

			});
			$('.homePage').click(function(){
				$('.dataContent').empty();
				$(".dataContent").removeAttr('id');
				$(".dataContent").attr('id','theme');
				var currentView = $(this).attr('title');
				mediator.publish("navigateTo",currentView);
			});
		},
		this.leftContentTabShow = function(_elem){
			currentLeftPanel = _elem.id.split("_")[1];
			self.preRender();
		}
	}
});