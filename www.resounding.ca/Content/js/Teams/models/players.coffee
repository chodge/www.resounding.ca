define [
	'backbone',
	'teams/models/player'
], (Backbone, Player) ->
	'use strict'

	class Teams extends Backbone.Collection

		model: Player