define [
	'underscore',
	'backbone.marionette',
	'teams/views/player_detail',
], (_, Marionette, PlayerView) ->
	'use strict'

	class View extends Marionette.CollectionView

		itemView: PlayerView

		initialize: ->
			@children = @children ? []
			super
			@render()