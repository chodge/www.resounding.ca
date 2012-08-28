define [
	'backbone.marionette',
	'teams/views/teams_list',
	'teams/views/role_selector'
], (Marionette, ListView, RoleSelector) ->
	'use strict'

	window.TournamentApp = app = new Marionette.Application
	app.addInitializer (options) ->
		new ListView
		new RoleSelector
	app