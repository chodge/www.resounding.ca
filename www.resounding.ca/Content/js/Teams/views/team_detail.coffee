define [
	'backbone.marionette',
	'teams/views/players_list',
	'text!teams/templates/teamViews.html'
], (Marionette, PlayersList, html) ->
	'use strict'

	basicHtml = $(html).find('#team-basic').html()
	detailHtml = $(html).find('#team-detail').html()

	class View extends Marionette.ItemView

		initialize: ->
			@setElement "#team-#{@model.id}"
			tmplHtml = if @model.canSeePlayerDetails() then detailHtml else basicHtml
			@template = _.template(tmplHtml)
		
		render: ->
			super
			
			new PlayersList 
				collection: @model.Players
				el: @$('.players')