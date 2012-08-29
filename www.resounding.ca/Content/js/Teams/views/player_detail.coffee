define [
	'underscore',
	'backbone.marionette',
	'text!teams/templates/teamViews.html'
], (_, Marionette, html) ->
	'use strict'

	readOnlyHtml = $(html).find('#player-detail-readonly').html()
	editHtml = $(html).find('#player-detail-editable').html()

	class View extends Marionette.ItemView
		initialize: ->
			super
			tmpl = if @model.get('Permissions').U then editHtml else readOnlyHtml
			@template = _.template(tmpl)
			@render()

		render: ->
			super
			if @model.get('Permissions').R then @$el.show() else @$el.hide()
			
			positionPlayers = @model.collection.filter (
				(player) =>
					player.get('Position') == @model.get('Position')
			)
			if _.indexOf positionPlayers, @model then @$('.position').hide()

			@$el.addClass('player')