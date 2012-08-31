define [
	'backbone',
	'backbone.marionette'	
], (Backbone, Marionette) ->
	'use strict'

	window.TournamentApp = app = new Marionette.Application

	require [
		'teams/controllers/team_controller',
		'teams/views/teams_list',
		'teams/views/role_selector'
	], (Router, ListView, RoleSelector) ->
		app.addInitializer (options) ->
			new Router()
			Backbone.history.start()
			new ListView
			new RoleSelector
	app