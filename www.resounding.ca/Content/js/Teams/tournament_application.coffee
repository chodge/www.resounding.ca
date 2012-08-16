define [
	'chaplin'
	'teams/views/layout',
	'teams/controllers/teams_controller',
	'teams/routes'
], (Chaplin, Layout, TeamsController, routes) ->
	'use strict'

	_.templateSettings = {
		evaluate    : /\{\{([\s\S]+?)\}\}/g,
		interpolate : /\{\{=([\s\S]+?)\}\}/g,
		escape      : /\{\{-([\s\S]+?)\}\}/g
	};

	class TournamentApplication extends Chaplin.Application
		title: 'Resounding Tournaments teams'

		initialize: -> 
			super

			@initDispatcher()
			@initLayout()

			@initControllers()

			@initRouter routes

		initDispatcher: ->
			@dispatcher = new Chaplin.Dispatcher controllerPath: 'teams/controllers/'

		initLayout: ->
			@layout = new Layout()

		initControllers: ->
			new TeamsController()