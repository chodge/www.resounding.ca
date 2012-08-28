define [
	'backbone.marionette',
	'teams/views/players_list',
	'text!teams/templates/teamViews.html'
], (Marionette, PlayersList, html) ->
	'use strict'

	tmplHtml = $(html).find('#team-detail').html()

	class View extends Marionette.ItemView
		template: _.template(tmplHtml)

		ui:
			caret: '.caret'

		initialize: ->
			@setElement "#team-#{@model.id}"
		
		render: ->
			super
			
			new PlayersList 
				collection: @model.Players
				el: @$('.players')

			if @model.canSeePlayers() then @ui.caret.show() else @ui.caret.hide()