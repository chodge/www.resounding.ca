define [
	'backbone',
	'teams/models/team'
], (Backbone, Team) ->
	'use strict'

	class Teams extends Backbone.Collection

		model: Team

		initialize: ->

			@fetch()

		url: '/Tournaments/api/teams'