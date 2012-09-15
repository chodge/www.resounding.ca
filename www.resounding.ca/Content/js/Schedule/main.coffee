require [
	'app',
	'backbone',
	'views/view_selector',
	'views/toolbar'
], (app, Backbone, ViewSelector, Toolbar) ->

	app.addInitializer ->
		app.addRegions(
			main: '#main'
			toolbar: '#filter'
		)
		
		new ViewSelector(app.main.el)
		
		app.toolbar.show new Toolbar

	app.start()