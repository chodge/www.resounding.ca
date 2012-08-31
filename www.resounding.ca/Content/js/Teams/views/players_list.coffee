define [
	'underscore',
	'backbone.marionette',
	'teams/views/player_detail',
], (_, Marionette, PlayerDetail) ->
	'use strict'

	class View extends Marionette.CollectionView

		itemView: PlayerDetail.ReadView

		initialize: ->
			@children = @children ? []
			super