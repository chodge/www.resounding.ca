define [
	'chaplin',
	'teams/models/team'
], (Chaplin, Team) ->
	'use strict'

	class Teams extends Chaplin.Collection

		model: Team

		initialize: ->
			super

			@fetch()

		url: '/Tournaments/api/teams'			