require.config({
	waitSeconds: 20,
    baseUrl:'../libs',
    paths : {
        'jquery' :'jquery',
        'routie' :'routie.min',
        'mediator':'mediator',
        'text':'text',
        'css':'css.min',
        'scrollto':'jquery-scrollto',
        'handlebars':'handlebars-v1.3.0',
        'bxslider':'jquery.bxslider',
        'audio': '../utils/audio',
        'utility':'../utils/utility',
        'scroll' : '../js/DefineScroller'
    },
    shim:{
        'bxslider': {
            deps: ['jquery']
        },
        'handlebars': {
            deps: ['jquery']
        }
    }
});

define(["../js/routes"]);



