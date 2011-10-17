define([ 'jQuery', 'Underscore', 'Backbone' ], function() {
	var TestModule = {
		Model : Backbone.Model.extend({}),
		App : Backbone.View.extend({
			el : "#salute",
			template: _.template($("#salute-template").html()),
			initialize: function() {
				this.model = new TestModule.Model();
				this.model.bind('change', this.render, this);
			},
			render : function() {
				$(this.el).append(this.template(this.model.toJSON()));
			},
			sayHi: function(name) {
				this.model.set({
					name: name
				});
			}
		})
	};
	return TestModule;
});
