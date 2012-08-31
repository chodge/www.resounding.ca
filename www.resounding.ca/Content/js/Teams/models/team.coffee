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
			@Permissions = data.Permissions
			delete data.Players
			delete data.Permissions
			data

		canSeePlayerDetails: ->
			@get('Permissions')?.R or
				@Players.any (player) ->
					player.get('Permissions')?.R
				