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
			@collection.fetch(
				success: =>
					@collection.each (item) ->
						item.Players.trigger 'reset'
			)

		closeChildren: ->
			