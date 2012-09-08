require [
	'app',
	'backbone',
	'views/view_selector',
	'views/toolbar'
], (app, Backbone, ViewSelector, Toolbar) ->

	app.addInitializer ->
		new ViewSelector('#main')
		new Toolbar

	app.start()