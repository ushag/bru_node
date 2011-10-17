require.config({
	paths : {
		order: 'lib/require/plugins/order-0.27.1-min',
		jQuery : 'lib/jquery/jquery-1.6.4-min',
		Underscore : 'lib/underscore/underscore-1.2.0-min',
		Backbone : 'lib/backbone/backbone-0.5.3-min'
	},
});

// Above we have only set the paths for jQuery, Underscore and Backbone
// They will not be accesible in the global scope
// Using the path alias that we configured,
// we define what will be returned for use by other modules
// Note the order plugin in use, since Backbone depends on $ and _
require([ 'order!jQuery', 'order!Underscore', 'order!Backbone' ], function($, _, Backbone) {
	return {
		$ : $,
		_ : _,
		Backbone : Backbone
	};
});

// Now require the TestModule, split for convenience and readability
require(['src/app' ], function(TestModule) {
	var bb_app = new TestModule.App();
	bb_app.sayHi('Alien');
});
