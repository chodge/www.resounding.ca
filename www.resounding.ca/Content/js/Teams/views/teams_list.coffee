define [
	'backbone.marionette',
	'teams/models/teams',
	'teams/views/team_detail',
], (Marionette, TeamCollection, DetailView) ->
	'use strict'

	class View extends Marionette.CollectionView

		itemView: DetailView

		initialize: ->
			@collection = new TeamCollection
			@setElement '#teams'
			@bindTo @collection, 'reset', @render
			@fetch()
			window.TournamentApp.vent.on 'change:role', (role) =>
				@collection.Role = role
				@fetch()

		closeChildren: ->
		
		fetch: ->
			@collection.fetch(
				success: =>
					@collection.each (item) ->
						item.Players.trigger 'reset'
			)