define [
	'chaplin',
	'teams/views/team_detail'
], (Chaplin, TeamView) ->
	'use strict'

	class View extends Chaplin.CollectionView

		initialize: ->
			@setElement '#teams'
			@modelBind 'reset', @render
			super

		getView: (item) ->
			new TeamView model: item

		render: ->
			super

		renderAndInsertItem: (item, index) ->
      		view = @renderItem item