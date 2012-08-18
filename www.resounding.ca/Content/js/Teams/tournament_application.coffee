define [
	'backbone.marionette',
	'teams/views/teams_list'
], (Marionette, ListView) ->
	'use strict'

	app = new Marionette.Application
	app.addInitializer (options) ->
		new ListView
	app