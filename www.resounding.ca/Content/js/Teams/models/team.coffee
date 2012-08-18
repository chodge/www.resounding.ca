define [
	'backbone',
	'teams/models/players'
], (Backbone, PlayerCollection) ->
	'use strict'

	class Team extends Backbone.Model

		idAttribute: 'Id'

		url: ->
			if isNew() then "/Tournaments/api/teams" else "/Tournaments/api/teams/#{id}"
		
		parse: ->
			data = super
			players = data?.Players ? []
			@Players = new PlayerCollection players
			delete data.Players
			data