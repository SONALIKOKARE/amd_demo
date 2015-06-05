define([
	'mediator',
	'routie'
],function(mediator){
		
	mediator.subscribe("navigateTo", function(data, routiePath) {
		//console.log(data);
		routie(data);
	});
	mediator.subscribe("vModule", function(data, routiePath) {
		//console.log(data);
		require(['../views/'+data],function(Data){
			var data = new Data();
			data.render();
		});
	});
	mediator.subscribe("openReadModal", function(data) {
		//console.log(data);
		require(['../views/readModal'],function(Modal){
			var modal = new Modal({'categoryListBooks':data,'currentPage':data});
			modal.render();
		});
	});

	routie({
		'': function() {
			mediator.publish("vModule",'theme','theme');
		},
		'theme': function() {
			mediator.publish("vModule",'theme','theme');
		},
		'home': function() {
			mediator.publish("vModule",'home','home');
		},
		'advanced': function() {
			mediator.publish("vModule",'advanced','advanced');
		},
		'classic': function() {
			mediator.publish("vModule",'classic','classic');
		},
		'template': function() {
			mediator.publish("vModule",'template','template');
		}
	});
});
