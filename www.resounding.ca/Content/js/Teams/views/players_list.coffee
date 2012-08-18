define [
	'underscore',
	'backbone.marionette',
	'teams/views/player_detail',
], (_, Marionette, DetailView) ->
	'use strict'

	class View extends Marionette.CollectionView

		itemView: DetailView

		initialize: ->
			@children = @children ? []
			super
			@render()